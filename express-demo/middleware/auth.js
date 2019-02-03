
function auth(req, res, next) {
    console.log("Authticate now...");
    next();
}

module.exports = auth;