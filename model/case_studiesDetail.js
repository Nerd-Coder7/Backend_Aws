const mongoose = require('mongoose');

const case_studies_detail = mongoose.Schema({
    section_1: [{
        main_heading: { type: String },
        main_image: { type: String },
        heading: { type: String },
        para: { type: String },
        image: { type: String }
    }],
    client_objective:[{
        heading: { type: String }, 
        para: { type: String },
        list:[{type:String}]
    }],
    offer:[{
        main_heading: { type: String },
        card:[{
            title:String,
            para:String
        }]
    }],
    result:[{
        heading: { type: String },
        para:{ type: String },
        image:{type:String}
    }],
    review :[{
        count:{type:Number},
        message:{type:String}
    }]
},{
    timestamps: true
})
module.exports = mongoose.model('case_studies_detail',case_studies_detail)