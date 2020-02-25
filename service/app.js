"use strict";

// var SwaggerExpress = require("swagger-express-mw");
const swaggerTools = require("swagger-tools");
const fs = require("fs");
const yaml = require("js-yaml");
const auth = require("./api/helpers/auth");
const swaggerConfig = yaml.safeLoad(
  fs.readFileSync("./api/swagger/swagger.yaml", "utf8")
);

var app = require("express")();
module.exports = app; // for testing

const cors = require("cors");
app.use((req, res, next) => {
  console.log("req recieved from : " + req.url);
  next();
});
app.use(cors());

// var config = {
//   appRoot: __dirname // required config
// };

const port = 10010;
swaggerTools.initializeMiddleware(swaggerConfig, function(middleware) {
  //Serves the Swagger UI on /docs
  app.use(middleware.swaggerMetadata()); // needs to go BEFORE swaggerSecurity

  app.use(
    middleware.swaggerSecurity({
      //manage token function in the 'auth' module
      Bearer: auth.verifyToken
    })
  );

  var routerConfig = {
    controllers: "./api/controllers",
    useStubs: false
  };

  app.use(middleware.swaggerRouter(routerConfig));
  app.use(middleware.swaggerUi());

  app.listen(port, function() {
    console.log(`Started server on port ${port}`);
  });
});
