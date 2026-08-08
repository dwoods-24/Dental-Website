import csv
import json
import urllib.request
import urllib.error

# --- Config ---
API_KEY = "62w6ew6aszep9r4s7c675b55yf44st5g"
HOST = "denturesandmore.com"
KEY_LOCATION = f"https://{HOST}/{API_KEY}.txt"
CSV_FILE = "urls.csv"
ENDPOINT = "https://api.indexnow.org/indexnow"
# --------------

def load_urls(csv_path):
    urls = []
    with open(csv_path, newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        for row in reader:
            url = row.get("url", "").strip()
            if url:
                urls.append(url)
    return urls

def submit(urls):
    payload = json.dumps({
        "host": HOST,
        "key": API_KEY,
        "keyLocation": KEY_LOCATION,
        "urlList": urls
    }).encode("utf-8")

    req = urllib.request.Request(
        ENDPOINT,
        data=payload,
        headers={"Content-Type": "application/json; charset=utf-8"},
        method="POST"
    )

    try:
        with urllib.request.urlopen(req) as resp:
            print(f"Success: HTTP {resp.status}")
            print(f"Submitted {len(urls)} URL(s):")
            for url in urls:
                print(f"  {url}")
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8", errors="replace")
        print(f"Error: HTTP {e.code} - {e.reason}")
        print(body)

if __name__ == "__main__":
    urls = load_urls(CSV_FILE)
    if not urls:
        print("No URLs found in CSV.")
    else:
        submit(urls)
