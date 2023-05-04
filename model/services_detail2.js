const mongoose = require('mongoose');

const services_detail_page = mongoose.Schema({
    section_1: [{
        title: { type: String },
        para: { type: String },
        image: { type: String }
    }],
    section_2: [{
        title: { type: String },
        para: { type: String },
        image: { type: String },
        list: [{ type: String }]
    }],
    offer: [{
        title: { type: String },
        para: { type: String },
        image: { type: String }
    }],
    development_process: [{
        title: { type: String },
        para: { type: String }
    }],
    testimonials: [{
        rating: { type: String },
        title: { type: String },
        para: { type: String },
        image: { type: String },
        name: { type: String }
    }]
},{
    timestamps: true
})
module.exports = mongoose.model('services_detail',services_detail_page)