# Kindroid AI: Wide screen + customisations v3 [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/breatfr)
Put [Kindroid](https://kindroid.ai/) on whole page for screen with width 990px and more and add customisations features.
## Preview
![Preview](https://raw.githubusercontent.com/breatfr/kindroid/main/preview_theme_v3.xx.jpg)

Changelog https://discord.com/channels/1116127115574779905/1195415564101886102

Help / comment / ask etc... https://discord.com/channels/1116127115574779905/1145809654044176485

## Customisations available
### chat page
- actions text style
	- Default
	- Asterisks
	- Asterisks + bold
	- Asterisks + Bold + no italic
	- Asterisks + Bold + no italic + same color
	- Bold
	- Bold + no italic
	- Bold + no italic + same color
	- No italic
	- Same color
- actions text color choice
- avatar choice
- avatar position (choose regarding of the size you use, isn't automatic)
	- avatar position large middle
	- avatar position large top
	- avatar position large bottom
	- avatar position small middle
	- avatar position small top
	- avatar position small bottom
	- avatar custom position
- avatar size
	- avatar position large
	- avatar position small (standard size of kindroid without my theme but on left)
	- avatar position hidden (bubbles will take whole page)
	- avatar custom size
- avatar hoverzoom
	- enabled (default)
	- disabled
- background choice
	- hearts background
	- no background
	- custom background
- background color choice (can be use with background choice too)
- blur bubbles content and image you send to ai to share in privacy
- bubbles font color of your choice
- bubbles font size of your choice
- hide or not names in bubbles (layout will change depending of this too)
- kin bubbles background color of your choice **OR** kin bubbles background image of your choice
- our bubbles background color of your choice **OR** our bubbles background image of your choice
- system bubbles style (layout will change depending of this too)
	- left (like v2)
	- dark	(normal position but dark)
- textarea font size of your choice
### selfies page
- background choice
	- hearts background
	- no background
	- custom background
- background color choice (can be use with background choice too)
- image border on hover
	- enabled (default)
	- disabled
- request image button at top
	- enabled (default)
	- disabled
### voicecall page
- avatar choice
- background choice
	- hearts background
	- no background
	- custom background
- background color choice (can be use with background choice too)
### faqs page
- background choice
	- hearts background
	- no background
	- custom background
- background color choice (can be use with background choice too)
### legal page
- background choice
	- hearts background
	- no background
	- custom background
- background color choice (can be use with background choice too)
## How to install the theme in few steps
1. Install Stylus browser extension
    - Chromium based browsers link: https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne
        - Brave
        - Chromium
        - Google Chrome
        - Iridium Browser
        - Microsoft Edge
        - Opera
        - Opera GX
        - SRWare Iron
        - Ungoogled Chromium
        - Vivaldi
        - Yandex Browser
        - many more
    - Firefox based browsers link: https://addons.mozilla.org/firefox/addon/styl-us/
        - Mozilla Firefox
        - Mullvad Browser
        - Tor Browser
        - Waterfox
        - many more

2. Go on [Kindroid AI: Wide screen](https://raw.githubusercontent.com/breatfr/kindroid/master/kindroid.ai_wide_screen_v3.xx.user.css) website and click on `Install` on left.

3. To update the theme, open the `Stylus Management` window and click on `Check for update` and follow the instructions or just wait 24h to automatic update

PS: Normally with the v3 you won't need modify my theme yourself and if you do you won't get update anymore.
PS2: Like i put on GitHub only I don't know if automatic update from stylus will works so you'll need re-install waiting userstyles.world works correctly.

4. Enjoy :)
## userscripts possible features
### chat page
![Preview](https://raw.githubusercontent.com/breatfr/kindroid/main/preview_chat_script.jpg)
- add autoconfirm regenerate
- add autofocus textarea (chat page only)
### selfies page
![Preview](https://raw.githubusercontent.com/breatfr/kindroid/main/preview_selfies_script.jpg)
- add a checkbox to see all images
- add a button to download all images (use it after enable see all images)
## How to install the userscripts in few steps on PC
1. Install Violentmonkey browser extension
    - Chromium based browsers link: https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag
        - Brave
        - Chromium
        - Google Chrome
        - Iridium Browser
        - Microsoft Edge
        - Opera
        - Opera GX
        - SRWare Iron
        - Ungoogled Chromium
        - Vivaldi
        - Yandex Browser
        - many more
    - Firefox based browsers link: https://addons.mozilla.org/fr/firefox/addon/violentmonkey/
        - Mozilla Firefox
        - Mullvad Browser
        - Tor Browser
        - Waterfox
        - many more

2. Go on:
   - [Kindroid AI: Chat page new features](https://raw.githubusercontent.com/breatfr/kindroid/master/kindroid.ai_chat_page_new_features_v1.xx.user.js) page and click on `Install` on left.
   - [Kindroid AI: Selfies page new features](https://raw.githubusercontent.com/breatfr/kindroid/master/kindroid.ai_selfies_page_new_features_v1.xx.user.js) page and click on `Install` on left.

3. to update script juste click on the corresponding button here
![Preview](https://raw.githubusercontent.com/breatfr/kindroid/main/update_scripts.jpg)
after any script update you'll need press `F5` or close/reopen kindroid website to load the new script version.

4. Enjoy :)

## How to use in few steps on iOS (Safari)
1. Install [Makeover - Custom CSS](https://apps.apple.com/us/app/makeover-custom-css/id1602361167) app

2. Open the app just installed and click on `How to Use` and follow instructions

3. In Safari come on the script code page you want install and select `ALL` the code to finally copy it:
	-  [Kindroid AI: Chat page new features mobile version](https://raw.githubusercontent.com/breatfr/kindroid/master/kindroid.ai_chat_page_new_features_mobile_version_v1.xx.user.js)
	-  [Kindroid AI: Selfies page new features mobile version](https://raw.githubusercontent.com/breatfr/kindroid/master/kindroid.ai_selfies_page_new_features_mobile_version_v1.xx.user.js)

4. In Safari go to [Kindroid](https://kindroid.ai) website and click on `plugin` icon to finally click on `Makeover`

5. Paste the previously copied code in the `Makerover's JS field`, for CSS i know you need remove the 1st line:
```css
@-moz-document url-prefix("https://beta.nomi.ai/nomis/") {
```
for JS, maybe you'll need remove this but i don't know because i didn't test:
```js
// ==UserScript==
// @name        Kindroid - Chat page new features v1.xx
// @description New features for Kindroid's chat page
// @namespace   https://kindroid.ai/home
// @match       https://kindroid.ai/home
// @version     1.04
// @author      BreatFR
// @icon        https://play-lh.googleusercontent.com/plaMooDMA0URmZGnfDJmn-v4DEP1SGMUXxC0grATSPuXQ8-HgAgijTXVvyU1y1ir_fRd=w240-h480-rw
// @license     GNU GPL v3 (https://www.gnu.org/licenses/quick-guide-gplv3.en.html)
// ==/UserScript==
```
for each update you'll need copy/paste the code and remove this code part if need.

6. Enjoy :)

## How to use in few steps on Android (Kiwi Browser)
1. Install [Kiwi Browser](https://play.google.com/store/apps/details?id=com.kiwibrowser.browser)

2. Install [Violentmonkey](https://chromewebstore.google.com/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag)
   
3. In Kiwi Browser go on the script page you want install and install it like on computer:
	-  [Kindroid AI: Chat page new features mobile version](https://raw.githubusercontent.com/breatfr/kindroid/master/kindroid.ai_chat_page_new_features_mobile_version_v1.xx.user.js)
	-  [Kindroid AI: Selfies page new features mobile version](https://raw.githubusercontent.com/breatfr/kindroid/master/kindroid.ai_selfies_page_new_features_mobile_version_v1.xx.user.js)

4. Go on [Kindroid](https://kindroid.ai) website and click on `3 dots` on top right of the browser and click on icon refresh page to see the script interface in the page.

5. To update scripts do like on computer.

6. Enjoy :)
