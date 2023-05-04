const mongoose = require('mongoose');

const aboutaspage = mongoose.Schema({
    section_1: [{
        heading: { type: String },
        description: { type: String },
        image: { type: String }
    }],
    our_work_process: [{
        logo: { type: String },
        heading: { type: String },
        para: { type: String },
    }],
    our_team: [{
        image: { type: String },
        team_name: { type: String },
        profession: { type: String },
    }],
    big_family: [{ image: { type: String }}],
    customer_feedback: [{
        rating: { type: String },
        para: { type: String },
        image: { type: String },
        name: { type: String },
        logo:{type:String}
    }],

},{
    timestamps: true
})
module.exports = mongoose.model('aboutas',aboutaspage)