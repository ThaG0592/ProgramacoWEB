// middlewares/authenticate.js
const authenticate = (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (apiKey === '12345') {
        next();
    } else {
        res.status(401).send({ error: 'Unauthorized: Invalid API Key' });
    }
};

module.exports = authenticate;
