

class AuthRoute {
    constructor(server) {
        this.server = server;
        this.register();
    }

    register() {
        this.server.post("/register", this.signup.bind(this));
        this.server.post("/login", this.login.bind(this));
        this.server.delete("/logout", this.logout.bind(this));
    }

    async signup(req, res) {
        try {
            res.send("I am signing up user");
        } catch (error) {
            res.send(error);
        }
    }

    async login(req, res) {
        try {
            
        } catch (error) {
            
        }
    }

    async logout(req, res) {
        try {
            
        } catch (error) {
            
        }
    }
}

module.exports = AuthRoute;