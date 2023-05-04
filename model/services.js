const mongoose = require('mongoose');

const our_services_page = mongoose.Schema({
    website_design: [{
        title: { type: String },
        para: { type: String },
        image: { type: String },
        interaction_design: [{ type: String }],
        btn_text: { type: String }
    }],
    web_development: [{
        title: { type: String },
        para: { type: String },
        image: { type: String },
        interaction_design: [{ type: String }],
        btn_text: { type: String }
    }],
    mobile_app_development: [{
        title: { type: String },
        para: { type: String },
        image: { type: String },
        interaction_design: [{ type: String }],
        btn_text: { type: String }
    }],
    graphic_designs: [{
        title: { type: String },
        para: { type: String },
        image: { type: String },
        interaction_design: [{ type: String }],
        btn_text: { type: String }
    }],
    mern_stack: [{
        title: { type: String },
        para: { type: String },
        image: { type: String },
        interaction_design: [{ type: String }],
        btn_text: { type: String }
    }],
    digital_marketing: [{
        title: { type: String },
        para: { type: String },
        image: { type: String },
        interaction_design: [{ type: String }],
        btn_text: { type: String }
    }],
},{
    timestamps: true
})
module.exports = mongoose.model('services',our_services_page)