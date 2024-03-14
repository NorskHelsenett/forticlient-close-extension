# forticlient-close-extension
Extension for automagically closing forticlient callback tab

# Prerequisites
- Node LTS
- Chrome

# Build
- ```npm install```
- ```npm run build```
- (or with watch ```npm run build:watch```)

# Test and develop
- Open chrome
- go to extensions list og ```chrome://extensions```
- Activate developer mode
- Click on "Load unpacked"
    - Navigate to ```<repo root>/dist```
    - "Select folder" / "Velg katalog"
- volia, you have installed the extension

# Forticlient webpage mock
- To open a mock version of the forticlient page
- new terminal
- ```npm run serve:forti```
- navigate to http://127.0.0.1:8020 in your favorite browser

