const mongoose = require('mongoose');

const resources_page = mongoose.Schema({
    card: [{
        heading: { type: String },
        para: { type: String },
        image: { type: String }
    }],
    recent_post: [{
        heading: { type: String },
        date: { type: String },
        image: { type: String },
    }],
    populer_tags: [{type:String}],
    image: {type:String},
},{
    timestamps: true
})
module.exports = mongoose.model('resources',resources_page)