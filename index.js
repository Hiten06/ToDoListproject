const express = require("express");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const app = express();
const todoroutes = require("./router/TodoRoutes");
const userroutes = require("./router/UserRoutes");
const PORT = process.env.PORT || 4000;

const swaggerOptions = {
   definition:{
    openapi:"3.0.0",
    info:{
        title:"Todos API with Swagger",
        version:"1.0.0",
        description:'A Todo List API in Nodejs',
    },
    components: {
        securitySchemes: {
            Authorization: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                value: "Bearer <JWT token here>"
            }
        }
    },
    servers:[{
        url:`http://localhost:${PORT}`,
   }],
   },
   apis:["./router/*.js"],
};

const swaggerDoc = swaggerJSDoc(swaggerOptions);
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDoc));

console.log(swaggerDoc);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
 });

app.use(express.json());


app.use("/api/user",userroutes);
app.use("/api/todos",todoroutes);

app.listen(PORT , ()=>{
    console.log("Server  is connected and  listening");
});

dbConnect();

