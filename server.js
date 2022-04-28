const express = require("express");
const routeApi = require("./routes/apiRoutes");
const routeHtml = require("./routes/htmlRoutes")

const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use("/api" , routeApi);
app.use("/" , routeHtml);



app.listen(PORT, ()=> console.log(`this port is listening at ${PORT}`))