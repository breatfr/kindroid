# Changelog

All notable changes to this project will be documented in this file.

## Theme 3.16 - 2024-02-14

### Fixed
- A problem when we click on the + button on the left of textarea due to an artifact code from v2

## Theme 3.15 - 2024-02-14

### Fixed
- Action text customizations for free kindroid users

## Theme 3.14.1 - 2024-02-12

### Added
- Update scripts versions at the top of screen

## All scripts - 2024-02-12

### Change
- Merge to be easier to use for you:
  - before "chat page script" + "selfies page script" become "new features bundle"
  - before "chat page mobile script" + "selfies page mobile script" become "new features mobile bundle"

## Selfies page mobile script v1.03 - 2024-02-12

### Added
- HCP (Help Create Prompts) is now available on mobile too

## Theme 3.14 - 2024-02-11

### Fixed
- Section to manage the added popup added with selfies page script v1.02 and 1.03

## Selfies page script v1.03 - 2024-02-11

### Added
- A link to the prompt generator to allow users using a browser who block my iframe to use this feature too by open the website in new tab

## Theme 3.13 - 2024-02-09

### Added
- A section to manage the added popup added with selfies page script v1.02
- Blur feature for images in selfies page

## Selfies page script v1.02 - 2024-02-09

### Added
- A checkbox to open a prompt generator `Help Create Prompts` with some keywords to help people like me who are bad in prompt (the generator isn't made by me so he depend on other website logo and link at the top of popup)

## Theme 3.12 - 2024-02-08

### Fixed
- Color problem on system bubbles left setting on firefox based browsers
- System bubbles on left for 1440p screens without vivaldi with statusbar and normally don't break the fix for vivaldi with statusbar

### Removed
- Theme version at the top isn't an option anymore

## Theme 3.11 - 2024-02-07

### Fixed
- System bubbles on left for 1440p screens on vivaldi with statusbar

## Chat page mobile script 1.06 - 2024-02-07

### Fixed
- Back auto confirm regenerate and auto focus textarea i deleted by error sorry

## Chat page script 1.06 - 2024-02-07

### Added
- Put interface on the right to avoid being above avatar when hoverzoom with the theme

## Chat page mobile script 1.05 - 2024-02-07

### Added
- Blur feature in script (like in theme on pc)

## Theme 3.10 - 2024-02-07

### Fixed
- System bubbles on left for 1440p screens

## Selfies page script 1.02 - 2024-02-07

### Added
- Adapt the interface for mobile format

## Chat page script 1.05 - 2024-02-07

### Added
- Adapt the interface for mobile format
- Reduce a little time before auto click

## Chat page script 1.04 - 2024-02-06

### Fixed
- Check if the modal is already here before check if the confirm button is here to avoid need use `F5` to use again the confirm regenerate script feature

## Chat page script 1.03 - 2024-02-06

### Fixed
- A timer 500ms to check if the button is back to avoid need use `F5` to use again the confirm regenerate script feature

## Selfies page script 1.02 - 2024-02-06

### Added
- See all images (optional)
- Download all images (require see all images if not you'll download only 9 images)

## Chat page script 1.01 - 2024-02-06

### Added
- Autoconfirm renegerate option

## 3.09 - 2024-02-06

### Fixed
- Some elements in menu

## 3.08 - 2024-02-04

### Added
- Support of avatar zoom when hover with custom avatar, like this you can have you avatar in 4096x4096 instead of 512x512 and keep the zoom when hover. of course the avatar won't appear in 4096x4096 but for zoom will be in better quality

## 3.07 - 2024-02-03

### Added
- Tooltips on menu icons when hover

### Fixed
- Some bugs

## 3.06 - 2024-02-02

### Added
- Support for default avatar for position and size customisation

### Fixed
- Next button position when we create a new kindroid (he was hidden)
- Some minors bugs

## 3.05 - 2024-02-02

### Added
- Avatar choice works now in voicecall page too
- Background choice and custom background works now in voicecall, faqs and legal pages too
- Optimization of code to reduce the weight of the theme

## 3.04 - 2024-02-01

### Added
- Avatar choice feature (you can now have your real avatar for selfie and the avatar of your choice in chat)

### Fixed
- Some little bugs

## 3.03 - 2024-01-31

### Fixed
- Put back regen and journal buttons just next to latest kin's bubble to fix problem when we use link or web features but keeping them inline and with 90px between each icon to avoid miss click

## 3.02 - 2024-01-31

### Fixed
- A problem in menu since i added my theme version, move and customize the text about my theme version i added to be always visible in header and add an option in stylus to hide it

## 3.01 - 2024-01-31

### Added
- Background custom color who is now apply on hearts background and custom background
- Blur feature to hide all content bubbles and email in menu to share theme you'll create in privacy
- Same border as chat textarea on all textareas
- Modification of border on mousehover in selfie page
- Modification of the new my kindroid menu page to let us see all kin without scrolling
- Put menu on 3 columns instead of 5
- Move new danger zone a little more on top and put text little bigger and bold
- Theme version in menu

### Fixed
- Color and font size of faqs, term & privacy, logout color in menu and enlarge space between them to avoid miss click
- Faqs, term & privacy page to put them on whole page again
- Uncollapse accordion in avatar menu page

## 3.00 - 2024-01-30

### Added
- Many customizations:
#### chat page
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
- background choice (chat **and** selfie page)
    - hearts background
    - no background
    - custom background
- bubbles font color of your choice
- bubbles font size of your choice
- hide or not names in bubbles (layout will change depending of this too)
- kin bubbles background color of your choice **OR** kin bubbles background image of your choice
- our bubbles background color of your choice **OR** our bubbles background image of your choice
- system bubbles style (layout will change depending of this too)
    - left (like v2)
    - dark    (normal position but dark)
- textarea font size of your choice

#### selfie page
- image border on hover
    - enabled (default)
    - disabled
- request image button at top
    - enabled (default)
    - disabled

## 2.19 - 2024-01-28

### Added
- Hide new scrollbars in chat page

## 2.18

### Added
- Put play button out of the bubble

### Fixed
- The position of regenerate and journal buttons and put them a little higher to avoid miss click on send button

## 2.17

### Added
- Put again "add space between Regenerate and Journal buttons to avoid miss click", i removed by error during my tests

## 2.16

### Added
- A heart background in whole chat page
- Change the text color of system bubbles when hover
- Put play button as lettrine to save space

### Fixed
- The border of textarea when selected

## 2.15

### Fixed
- Chat break window

## 2.14

### Added
- Modification of the menu
- Modification of system bubbles

## 2.13

### Fixed
- Baackstory textarea size

## 2.12

### Added
- Put menu on whole page
- Split avatar menu to use all page and remove accordions
- Arrange many items positions in menu pages
- Put back header on whole width
- Put faqs and terms and privacy on whole page

### Fixed
- Some small bugs

## 2.11

### Fixed
- System bubbles for 1440p resolution

## 2.10

### Added
- Modification of loading bar color
- Add space between Regenerate and Journal buttons to avoid miss click

## 2.09

### Added
- Border on modal in voice call page
- Increase a little the font size of text here and in the modal of voice call page
- Remove the `...` next to regenerate button and put the menu always visible on left side

## 2.08

### Added
- Put menu's width as header
- A little space between textarea and explain text in backstory

## 2.07

### Fixed
- The location of textarea since the last website update
- The added colors in menu

## 2.06

### Added
- Modify "Load More" button to be more visible and give him same look as "Request selfie" button in selfies page
- Modify "+ Pose Reference" button to be more visible and give him same look as "Request selfie" button in request selfie page
- Now "Load More" button is on the right of the last image to same space
- Put both text of theses buttons bigger but less than "Request selfie" button

## 2.05

### Added
- Put delete image button in red

## 2.04

### Fixed
- My effects in the latest version of the website

## 2.03

### Added
- Put text in white and bigger on selfie request page

### Fixed
- The new selfie request page to avoid take whole screen

## 2.02

### Added
- Make billing error box more visible when we purchased from phone and we click on billing in browser

## 2.01

### Added
- Put "Upload Photo" text in custom avatar in white to be more visible

## 2.00

### Added
- Not allowed cursor on the microphone icon when needed
- Some colors in menu and selfie page to see better text and specials items
- An effect on the border added previously in selfie page when we hover an image
- Little bigger text in bubbles and textarea 18px to 20px
- New design who support normally all resolutions wider than 900px

## 1.10

### Added
- Make system bubbles dark

## v1.09

### Fixed
- The bug with the new border on hover who was on custom avatar too

## 1.08

### Added
- A border on pic when hover in selfie page

## 1.07

### Added

- Align our name and text to the right
    - i put our name too for people who keep it visible
- A forbidden cursor on play audio button when our message is sending

### Fixed
- Some rounded corners i forgot earlier

## 1.06

### Added
- A thin border on chat's textarea when focus

## 1.05

### Fixed
- Some little bugs

## 1.04

### Fixed
- Send button next to textearea in place when textarea grow due to text length

## 1.03

### Changed
- Put the menu on the right side

## 1.02

### Added
- A forbidden cursor on send button when spinner is here
- A theme version for min-height 1080 best for screens in 1920 x 1080 when using full screen mode `F11`

### Fixed
- Some bugs

## 1.01

### Changed
- Move menu and selfie icons at the bottom right corner
- Put avatar and chat on whole page


## 1.00

### Added
- Initial release