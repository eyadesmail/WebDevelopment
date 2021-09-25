const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmailSchema = new Schema({
    emailaddress: {
        type: Schema.Types.String,
        required: true
    }
});

const Email = mongoose.model('email', EmailSchema);
module.exports = { Email };
