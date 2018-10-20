const express = require('express');
const bodyParser = require('body-parser');
const MainRoute = require('./Routes/Main.route');
const SequelizeDatabase = require('./Database/Sequelize.db');
require('./Config/Config');

class Server {

    constructor() {
        this.database = new SequelizeDatabase();
        this.app = express();
        this.start();
        this.getMiddlewares();
        this.getAccessOrigin();
        new MainRoute(this.app);
    }

    getAccessOrigin() {
        this.app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "http://localhost:4200");
            res.header(
              "Access-Control-Allow-Headers",
              "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            );
            if (req.method === "OPTIONS") {
              res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET, OPTIONS");
              return res.status(200).json({});
            }
            next();
        });
          
    }


    getMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true}));
        this.app.use(express.static('public'));
    }


    start() {
        this.database.start();
        this.app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
}

module.exports = new Server()