
class ResponseHandler {
    static sendWithStatus(res, httpStatus, detail) {
        res.status(httpStatus).json(detail)
    }

    static respondWith200(res, detail) {
        ResponseHandler.sendWithStatus(res, 200, detail);
    }

    static respondWithCreated201(res, detail) {
        ResponseHandler.sendWithStatus(res, 201, detail);
    }

    static respondWithBadRequest400(res, detail) {
        ResponseHandler.sendWithStatus(res, 400, detail);
    }

    // Not Found
    static respondWithNotFound404(res, detail) {
        ResponseHandler.sendWithStatus(res, 404, detail);
    }

    // Missing Params
    static respondWithMissingParam422(res, detail) {
        ResponseHandler.sendWithStatus(res, 422, detail);
    }

    static respondWithServerError500(res, detail) {
        ResponseHandler.sendWithStatus(res, 500, detail);
    }

    static respondWithNotImplemented501(res, detail) {
        ResponseHandler.sendWithStatus(res, 501, detail);
    }

    static respondWithNotAvailable503(res, detail) {
        ResponseHandler.sendWithStatus(res, 503, detail);
    }
}

module.exports = ResponseHandler;