const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/course_developer');
        console.log('Connect successful')
    } catch (error) {
        console.log('Connect false')
    }

}

module.exports = { connect };