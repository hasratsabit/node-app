
class Config {
    constructor() {
        this.createEnvironment();
    }

    createEnvironment() {
        let env = process.env.NODE_ENV || "development";
        if(env === 'development' || env === 'test') {
            let config = require('./Config.json');
            let envConfig = config[env];

            Object.keys(envConfig).forEach(key => {
                process.env[key] = envConfig[key];
            })
        }
    }
}

module.exports = new Config();