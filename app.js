const express = require("express");
const path = require("path");
const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(express.urlencoded({ extended: true }));
//Routes
app.use("/admin", adminRoutes);
app.use(shopRoutes);
//Static
app.use(express.static(path.join(__dirname, "public")));

//middleware for 404
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

//create a server
app.listen(3000, () => {
  console.log("App has been started");
});
