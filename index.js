const server = require('./server')();

(function() {
    const port = process.env.PORT || 8080;

    server.listen(port, () => {
        console.log(`Conference static server start listen port ${port}`);
    });
})();
