
import app from  "./src/App.js";


//HEALTH CHECK ENDPOINT
app.get("/health",(req, res)=>{
    res.send("Server is running");
});

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on : ${PORT}`);
})