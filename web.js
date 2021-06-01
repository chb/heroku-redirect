const express = require('express');

const app = express();

app.get('*', (request, response) => {
  response.redirect(process.env.NEW_BASE_URL + (process.env.APPEND_PATH ? request.url : ""))
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Listening on " + port));
