// src/server.js
const app = require('./app');
const port = process.env.PORT || 3003;

app.listen(port, () => console.log('server running on port 3003'));