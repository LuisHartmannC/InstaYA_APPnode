const express =require("express");
const app= express();
const port = process.env.PORT||9000;
const mongoose = require('mongoose');
const peopleRoutes= require("./routes/people")
const objectsRoutes= require("./routes/objects")

mongoose.connect('mongodb+srv://Sun:Moon@instaya.nbovxl0.mongodb.net/?retryWrites=true&w=majority')
.then(()=> console.log('Conectado'))
.catch((error)=>console.error(error));

app.use(express.json());
app.use('/api',peopleRoutes);
app.use('/api',objectsRoutes);


/* app.get("/", (req, res) => {
    res.send("Puta Vida");
});

app.listen(port, () => {console.log('server listening on port', port);});

 */