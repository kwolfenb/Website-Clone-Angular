# Eddie Bauer Clone

#### _Independent Project for Epicodus - 1/25/2019_

#### By _**Kenny Wolfenberger**_

## Description

_Clone of the Eddie Bauer website using TypeScript and Angular._


### Build Specs
* _Application is broken out into components based on features and functionality._
* _Components include: app.component, header.component, slider.component, social-media.component, winter-deals.component._
* _Segregated html and css files are kept for each component._
* _Data is stored at the top level app.component file and flows down to other components._
* _Each menu option in the header component comes from an array of menu option names. Within each menu option there is another array for the products available for that option. These are stored in the app.component file and are passed down to the header.component file via Input._
* _The menu dropdown options are triggered via Angular's "mouseover" method, which sends an EventEmitter to app.component and runs a function to identify the correct menu to drop down. The "ngIf" statement in the html file only allows the corresponding menu to appear._
* _The slider.component file consists of large photos that can be clicked through. This is triggered by a "click" action which runs the function to change the photos. Eventually this could include smoother carousel animation._
* _The social-media.component contains live links to Eddie Bauer's Instagram, Facebook, Youtube and Pinterest pages._
* _The winter-deals.component is not yet interactive but primarily contains CSS formatting, specifically the "object-fit" property which allows pictures to be fitted into desired dimensions without losing aspect ratio._
* _The header and slider components both contain "click" EventEmitters which will trigger the dropdown menu to close. Because multiple comonents use this functionality, the property (masterMouseOver) and function (menuClose()) both live at the app.component level._

### Build Specs Part 2
* _Product page contains many products in a few categories which will be stored in a JSON file in a Firebase database._
* _Products are accessed from the dropdown menu buttons on the main home page. Currently the only working options are "Mens Jackets" and "Womens Jackets"._
* _Application uses Angular services. Products will be accessed via Angular service._
* _Application uses Angular routing._
* _Each product will contain pictures, descriptions, original price and sales price, and different color options._
* _Web application is deployed and fully functional on Firebase._
* _Program is in professional, portfolio-ready state._

## Setup/Installation Requirements
* _Clone Repository from Github._
* _Download all packages by typing "npm install" in the terminal._
* _Run 'ng serve -o' for a dev server. The app will automatically reload if you change any of the source files._
* _Run 'ng build' to build the project. The build artifacts will be stored in the 'dist/' directory._


## Technologies Used
* _Project was generated using Angular CLI version 1.6.5._
* _TypeScript_
* _Javascript_
* _Node Package Manager (NPM)_
* _JSON_
* _Webpack_
* _Babel_
* _Terminal_
* _VS Code_
* _GitHub_
* _Eddie Bauer [https://www.eddiebauer.com/] home page_

### License

*This software is licensed under the MIT license.*

Copyright (c) 2019 ** _Kenny Wolfenberger **
