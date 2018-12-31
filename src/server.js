const express = require('express');
const path = require('path');

module.exports = () => {
    const staticPath = path.resolve('./', 'public');

    const app = express();

    app.use(express.static(staticPath));

    return app;
};
