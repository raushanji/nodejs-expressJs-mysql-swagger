const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOption = require('./swagger.json');
const bodyParser = require('body-parser');
// const mysql = require('mysql');

var routes = require('./app/routes/appRoutes'); //importing route



app = express();  
const port = process.env.PORT || 3000;


// Extended: https://swagger.io/specification/#infoObject
// const swaggerOption = {
//   swaggerDefinition: {
//     info: {
//       title: 'Customer API',
//       description: 'Customer API Information',
//       contact: {
//         name: 'Raushan Ranjan'
//       },
//       servers: ["http://localhost:3000"]
//     },
//     basePath: "/v2"
//   },
//   //['.routes/*.js']
//   apis: ["./app/routes/appRoutes.js"]
// }

const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));



// // mysql configurations
// const mc = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'nodemysql'
// });

// // connect to database
// mc.connect();

app.listen(port);

console.log('API server started on: ' + port);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


routes(app); //register the route