const mongoose = require()

const dbConfig = 'mongodb+srv://user:user@cluster0.51ibj.mongodb.net/annotations?retryWrites=true&w=majority';

const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = connection;

