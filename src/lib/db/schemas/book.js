const mongoose = require('mongoose');

const RequiredPhoto = mongoose.Schema({
    character: {
        type: String,
        enum: ['child', 'mother', 'father']
    },
    emotion: String
});

module.exports = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    coverUrl: String,
    gender: String,
    previewPageUrls: [String],
    requiredPhotos: [RequiredPhoto]
});
