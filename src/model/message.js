const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
    messagetext: {
        type: Schema.Types.String,
        required: true,

        owner:{
            type: Schema.Types.ObjectID,ref: "email"
        }
    }
});

const Message = mongoose.model('message', MessageSchema);
module.exports = { Message };
