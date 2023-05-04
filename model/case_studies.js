const mongoose = require('mongoose');

const case_studies = mongoose.Schema({
    section_1: [{
        image: { type: String },
        para: { type: String },
        logo: { type: String }
    }],
},{
    timestamps: true
})
module.exports = mongoose.model('case_studies',case_studies)