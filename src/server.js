const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const{ Email } = require('./model/email');
const{ Message } = require('./model/message');


const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://eyadesmail:<password>@eyadesmaildatabase.qluer.mongodb.net/eyadesmaildatabase?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.static('build'));
app.use(cors());

mongoose.connect(MONGODB_URI || 'mongodb://localhost/mydb', {useNewUrlParser: true});

const connection = mongoose.connection;

connection.on('error', () => console.log('DB Error'));
connection.once('open', () => console.log('DB connected'));


app.post('/mydb',async (request,response) => {
    const {emailaddress, messagetext} = request.body;
    const email = await Email.create({emailaddress});
    const message = await Message.create({messagetext});
    let data = {email,message};
    return response.send(data);
});
app.get('/*', (request, response) =>{

    return response.sendFile(path.join(__dirname + '/../build/index.html'));

});






app.listen(PORT, () => console.log("up on https://localhost:" +  PORT   ));
