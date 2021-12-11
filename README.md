# RobotLabWebsite

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Development
You will need to know and instal Angular

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build
PREVIOUSLY: previously we used the branch active site to hold the published site, I didnt like this, we now just use the main branch
To build and serve on gitlab github pages, use the main branch, and get it up to date with whatever version of the website you want to serve, then run the command
  ng build --output-path docs --base-href /
Once this is done, in the docs folder, make a copy of the index.html file and rename it to 404.html. 

## About
The members page is located in the lab-members module, as is the member.ts file which declares the member data type, the list of all members is also declared in that module

The research page is located in the active-research module, as is the research.ts file which declares the member data type, the list of all research is also declared in that module

The pages get the data of members and research from the data.service.ts file
