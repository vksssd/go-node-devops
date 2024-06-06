const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Listen on the root URL
app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}...`);
    });
}

module.exports = app;
