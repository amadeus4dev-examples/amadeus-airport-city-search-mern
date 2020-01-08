const express = require("express");
const router = require("./router");
const path = require("path")

const PORT = 1338;

const app = express();

// applying handler for API
app.use("/", router);

// Serving app on PORT we defined
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});


