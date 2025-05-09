const express = require("express");
const app = express();
const professionalRoute = require("./routes/professional");
const mongodb = require("./db/connect.js");

const port = process.env.PORT || 8080;

app
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/professional", professionalRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/professional", (req, res) => {
//   res.json({
//     professionalName: "Ivan Leffalle",
//     base64Image: "<BASE64_STRING>",
//     nameLink: {
//       firstName: "Ivan",
//       url: "https://ivanportfolio.com",
//     },
//     primaryDescription:
//       "Full Stack Developer | Passionate about building modern web applications.",
//     workDescription1:
//       "Experienced with React, Node.js, MongoDB, and REST APIs.",
//     workDescription2: "Building clean, scalable, and maintainable codebases.",
//     linkTitleText: "Follow me on:",
//     linkedInLink: {
//       text: "LinkedIn",
//       link: "https://linkedin.com/in/ivantorres",
//     },
//     githubLink: {
//       text: "GitHub",
//       link: "https://github.com/ivantorres",
//     },
//   });
// });

mongodb.initDb((err) => {
  if (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  } else {
    app.listen(port);
    console.log("Connected to MongoDB and listening on port", port);
  }
});
