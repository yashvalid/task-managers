const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
    },
    priority : {
        type : String,
        enum : ['Medium', 'Low', 'High'],
        required : true,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user',
        required : true
    }
});

const Tasks = mongoose.model('task', taskSchema);

module.exports = Tasks;