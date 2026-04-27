# RS3 Magic DPS Assistant - Alt1 Web App

This is a safe Alt1-style web app version of the Magic DPS priority assistant.

## What it does

- Shows the best next Magic action manually
- Supports Normal and Sweaty / 4TAA priority logic
- Manual state toggles:
  - Sunshine
  - FSoA
  - Tsunami
  - Danger
  - Adrenaline bracket
  - Used ability markers
- Runs as an HTML app inside Alt1 or in a browser

## What it does NOT do

- No client injection
- No game memory reading
- No keypress automation
- No clicking
- No botting

## Files

- `index.html` - the app
- `appconfig.json` - Alt1 app manifest
- `README.txt` - instructions

## How to test quickly

Open `index.html` in Chrome/Edge first.

## How to use with Alt1

Alt1 apps are webpages. To use this like a plugin, host this folder somewhere reachable by Alt1, such as:

- GitHub Pages
- a local web server
- your own website

Then add the app in Alt1 using the URL to `appconfig.json`.

For local testing, from this folder you can run:

```bat
py -m http.server 8765
```

Then your app files are served from:

```text
http://localhost:8765/
```

If Alt1 accepts localhost app configs on your system, use:

```text
http://localhost:8765/appconfig.json
```

If not, publish the folder with GitHub Pages and use the public `appconfig.json` URL.

## Hotkeys

The app window must be focused for browser hotkeys:

- F1 = Toggle Normal / Sweaty mode
- F2 = Cycle adrenaline bracket
- F3 = Toggle Sunshine
- F4 = Toggle FSoA
- F5 = Toggle Tsunami
- F6 = Toggle Danger
- F7 = Mark GConc/Sonic used
- F8 = Mark Wild Magic used
- F9 = Mark Asphyxiate used
- F10 = Mark Omnipower used
- F11 = Clear used markers
