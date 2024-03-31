const postPredictHandler = require('../server/handler');

const rootHandler = (request, h) => {
    return h.response({
        status: 'success',
        message: 'Welcome to the root endpoint!'
    }).code(200);
};

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: rootHandler
    },
    {
        path: '/predict',
        method: 'POST',
        handler: postPredictHandler,
        options: {
            payload: {
                allow: 'multipart/form-data',
                multipart: true
            }
        }
    }
]

module.exports = routes;