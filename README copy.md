# Template for a typescript electron app

### HOW TO USE
#### Configuration:
- Project Name:
    - package.json name: {project}
- electron-builder.yml:
    - appId: chris.witte.{project}
    - productName: {project}
#### Commands:
1. npm start
    > start the app in development mode.
    calls "webpack --mode=development && webpack serve" which
    generates a .webpack folder to which the code gets compiled to
    and according to the .webpack.config.js starts a devserver which starts electron instance with the .webpack code.
    renderer updates trigger recompiling, main updates dont

 2. npm builder:?
    > builds the app.
    generates a .webpack folder to which the code gets compiled to
    and according to electorn-builder.yml generates a "binaries" folder for the installer.
    the installer is generated to ./binaries/**projectname** Setup **Version**.**exe**

    1.  npm builder:win
        >calls "webpack --mode=production && electron-builder --win"
    2. npm builder:linux
        >calls "webpack --mode=production && electron-builder --linux"
    3. npm builder:mac
        >calls "webpack --mode=production && electron-builder --mac"

### TODO:
* unit tests (mocka or jest)
* UI
    * material-ui
* css
* vscode Style
* Three.js
* babylon.js