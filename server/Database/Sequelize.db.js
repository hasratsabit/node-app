
const Sequelize = require('sequelize');

class SequelizeDatabase {
    constructor() {
        this.sequelize = {}
        this.create();
    }

    create() {
        this.sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
            host: 'localhost',
            dialect: 'mysql',
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 1000
            },
        
            operatorsAliases: false,
            logging: false
        })
    }

    start() {
        return this.sequelize.sync().then(() => {
            console.log("Database successfully started.")
        }).catch((error) => {
            console.log(error);
        })
    }
}


module.exports = SequelizeDatabase;
