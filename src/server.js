const app = require("./index");
const port = 5000;

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = server;
