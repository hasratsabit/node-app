
const AuthRoute = require('./Controllers/Auth.route');
const packageJson = require('../package.json');
const Logger = require('../Utilities/Logger');
const ResponseHandler = require('../Helpers/ResponseHandlers');


class MainRoutes {
    constructor(server) {
        this.server = server;
        this.initLogger();
        this.register();
    }

    register() {
        this.server.get("/", this.main.bind(this));
        this.server.get("/version", this.getVersion.bind(this));
        new AuthRoute(this.server);
    }

    main(req, res) {
        try {
            ResponseHandler.respondWith200(res, { 
                success: true, 
                message: "Successfully passed"
            })
        } catch (error) {
            ResponseHandler.respondWithServerError500(res, {
                success: false,
                message: `Error: ${error}`
            })
        }
    }

    getVersion(req, res) {
        res.json({version: packageJson.version});
    }

    initLogger() {
        this.server.all("*", (req, res, next) => {
            let logger = new Logger(req);
            try {
                logger.info(req);
                next();
            } catch (error) {
                logger.error(req);
                logger.warn(req);
                next(error);
            }
        })
    }
}



module.exports = MainRoutes;