import app from "./src/app.js";


const PORT = process.env.PORT;
app.get("/",(req, res) => {
    res.send("Server running");
})

app.listen(PORT,() => {
    console.log(`App running successfully on PORT : ${PORT}`);
})