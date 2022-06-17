const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;
//Express Specific Configurations
app.use('/static', express.static('static'));
app.use(express.urlencoded({ extended: true })) //Used to move the data from the form to Expresszz

// app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res)=>{
//     res.status(200).render('index.html');
// });

app.get('/',function(req,res){
    res.status(200).sendFile(path.join(__dirname+'/views/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
app.post('/', (req, res)=>{
    Name = req.body.name; // Taking the name from the form
    Email = req.body.email; //Taking the email from the form
    Subject = req.body.subject; //Taking the subject from the form
    Message = req.body.message; //Taking the address from the form
    let outputform = {
        Name : req.body.name,
        Email : req.body.email,
        Mobile : req.body.mobile,
        Subject : req.body.subject,
        Message : req.body.message
    };
    let data = fs.readFileSync('output.json'); //Reads the json file
    var obj = JSON.parse(data); //Converts the Json file to string file
    obj.push(outputform); //pushes the outputform into the files
    var newData = JSON.stringify(obj, null,2); //Converts the whole updated string file to updated json file
    fs.writeFile('output.json',newData, err =>{ //Writes the whole updated json file
        if(err)
        throw err;
    });
    
    res.status(200).sendFile(path.join(__dirname+'/index.html'));
})