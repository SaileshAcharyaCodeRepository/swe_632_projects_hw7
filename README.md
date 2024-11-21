# swe_632_projects_hw7

setup

    npx create-react-app price-tracker

    cd price-tracker

    npm install

    npm install react-bootstrap bootstrap

    npm install @emailjs/browser

    npm install react-router-dom

    npm start

hosting

    npm install gh-pages

    add following to package.json
    "homepage": "https://gitname.github.io/repo-name",

    "scripts": {
        "predeploy": "npm run build", 
        "deploy": "gh-pages -d build",    
        "start": "react-scripts start",
        "build": "react-scripts build", 
    }

    npm run deploy