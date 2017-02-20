
const routes = require ("./routes");

const app = reqire("express")();
app.use("/", routes);
app.listen(3000, () => {
    console.log("App is listening to port 3000");
});


