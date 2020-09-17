const { Schema, model } = require('mongoose');

const sampleModel = new Schema({
    name: String,
    foo: Number
});

const SampleModel = model('SampleModel', sampleModel);