const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises')
    .then(() => console.log("Database connected..."))
    .catch(err => console.error('Could not connect to database', err.message));

const courseSchema = new mongoose.Schema({
    name: String,
    tags: [String],
    author: String,
    date: { type: Date, default: Date.now},
    isPublished : Boolean,
    price: Number
})

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    const result = await Course
        .find()
        .limit(10)
        .sort({name:1})
        .select({name:1, author:1});
    console.log(result);
}

getCourses();