const{constants}= require("../constants")
const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode);

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation failed",
                message: error.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : error.stack
            });
            break;

        case constants.NOT_FOUND:
            res.json({
                title: "Not found",
                message: error.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : error.stack
            });

            case constants.UNAUTHERIZED:
            res.json({
                title: "unautherized",
                message: error.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : error.stack
            });

            case constants.FORBIDDEN:
            res.json({
                title: "forbidden",
                message: error.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : error.stack
            });

            case constants.SERVER_ERROR:
            res.json({
                title: "sever error",
                message: error.message,
                stackTrace: process.env.NODE_ENV === "production" ? null : error.stack
            });
            break;

            

        default:
           console.log("No error all good");
            break;
    }
};

module.exports = errorHandler;
