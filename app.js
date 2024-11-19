const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const api = require("./routes/api");
const agent = require("./routes/agent/pages");

const app = express();

// Middleware
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Static files
app.use(express.static(path.join(__dirname, "public")));

// Set view engine
app.set("view engine", "hbs");

// Routes
app.use("/api", api);
app.use("/agent", agent);

app.get("/", (req, res) => {
    res.render("index");
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
