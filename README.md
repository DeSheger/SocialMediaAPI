# SocialMediaAPI
Made by Piotr Grosz
***********************************
TwitterClone with ASP.NET and REACT
***********************************

This project contain functions like:
* Login / Register new account
* Create / Delete own Posts
* Message APP
* Review own User Profile 
* Review all posts from other Users

*******************************************************************************
Project was created with following libraries/frameworks (most importants only):
*******************************************************************************

Data Base:
* SQLite

Server Side Application:
* .NET SDK 6.0
* EntityFramework Core
* MediatR

Client Side Application:
* React
* React-redux
* React-router
* Axios

*************************
How to run Project on PC?
*************************

* Clone repository to your PC

      git clone https://github.com/DeSheger/SocialMediaAPI

* Make sure you have insalled following frameworks/libraries on your PC:

  1.  .NET SDK
  2.  .NET Runtime (.NET SDK contain)
  3.  ASP.NET Core (.NET SDK contain)
  4.  Nodejs
  5.  npm

* Get to cloned repository

      cd SocialMediaAPI

* Run command

      dotnet build

* Get to API folder and then run local Server Side App

      cd API
  
* And then

      dotnet run watch

* After that server should run on localhost:5000
* Next step is to launch CLient Side App. To do that open new terminal and get to the folder client-side

      cd SocialMediaAPI/client-side

* Use commend to install necessry dependencies

      npm install

* After that you must use command to start API:

      npm start

* Your Client Side App should run on localhost:3000 automatically
 
  
