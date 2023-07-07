MEAN-Stack-Auth
    1.M-Mongo-DB- database serve
    2.E-Express-JS-Backend program
    3.A-Angular-FrontEnd lauguges
    4.N-NodeJS-Runtime
1.Requied Tools MeanStack
    1.Mongo DB
    2.VS code
    3.Node JS
    4.Angular
2.Created MeanStack-Auth Folder
    1.API Folder
    2.Client Folder
3.Api Floder Install NodeJS Application
    1.install Required packages
        1.npm init commond runs
            1.install packafge.json file
        2.install express js
            1.npm i express
            2.install node_modules and package-lock.json files and floders
        3.install mongoose
            1.npm i mongoose
            2.Add packages into packages.json and node_modules
        4.instal dotenv
            1.npm i dotenv
            2.Add packages into packages.json and node_modules
        5.install nodemon
            1.npm i nodemon
            2.Add packages into packages.json and node_modules
    2.Create Index.js file
        1.import express from express
            2.const app = express()
            3.add app.listen
            4.run App node index.js
            5.we get error
            6.Add "type" ="module" in package.json file and run connected to backend app
            7.Add use api
        2.very time run the application but using nodemon package resloved issuse
            1.Add nodemon in Package.js file run npm start
        3.DB connection
            1.Copy the connection String in Mongo DB
            2.create Fuction ConnectionMongooDB
            3.method Call into App.listen()
        4.Create .evn file
            1.Add Mongoo Url 
            2.import dotenv packages
            3.Add dotenv.config() method
    3.Create Floder Structer
        1.MVC means Modela-view-Controller
        2.controllers floder
        3.models floder
        4.routes
        5.utils
    4.Create Models 
        1.Create User.js Models
        2.Create Role.js Models
    5.Create Routes
        1.Create role.js route file
        2.Add create enpoint
    6.Test for endpoint in postman
        1.Create New Collection MeanStack-Auth
            1.Create Request for post
            2.Add Url
            3.select Body and Raw and Json
            4.Add Body
            5.send request
        2.add app.use(express.json()) in index.js
        3.Create Update role endpoint
    7.Create Controllers
        1.create role.controller.js
            1.Add Create Endpoint
            2.Add Upadte endpoint
            3.Add getAll endpoint
            4.Add delete endpoint




    
    




