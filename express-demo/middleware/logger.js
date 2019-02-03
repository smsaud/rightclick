
function log(req, res, next) {
    console.log("Do some logging here..");
    next();
}

module.exports = log;