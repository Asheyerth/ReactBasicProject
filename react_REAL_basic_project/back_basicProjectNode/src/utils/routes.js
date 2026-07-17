//Public routes
const publicRoutes = [
    '/urls/addList',
    '/urls/getList',
    
];

const handler = async (req, res, next) => {
    console.log("entra handler middleware authentication")
    try {
        console.log(req.url)
        if (publicRoutes.indexOf(req.url) > -1) {
            next();
            return;
        }
        throw Error("NO_TOKEN");
    } catch (e) {
        handlerError(req, res, e);
        return;
    }
}

const handlerError = (req, res, e) => {
    let msg = 'Error general';
    if (req.method == "POST") {
        res.status(500).send({ error: "ERROR_TOKEN " + msg });
    }
};

module.exports.handler = handler;
module.exports.handlerError = handlerError;