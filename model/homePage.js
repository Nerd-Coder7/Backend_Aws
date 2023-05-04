
const mongoose = require('mongoose');

const homepage = mongoose.Schema({
    section_1: [{
        heading: { type: String },
        description: { type: String },
        btn_text: { type: String },
        image: { type: String }
    }],
    our_services: [{
        image: { type: String },
        heading: { type: String },
        para: { type: String },
        list: [{ type: String }],
    }],
    ecommerce_platform: [{
        platform: [ {text: { type: String } ,  logo: { type: String }} ],
        heading: { type: String },
        para: { type: String }
    }],
    allindustries_logo: { type: String },
    brandsworked_with: { type: String },
    expertise: [{
        heading: { type: String },
        list: [String],
        image: { type: String }
    }],
    accordion_section: [{
        title: [{ header: { type: String }, para: { type: String }, logo: { type: String }, logo_name: { type: String } }],
        mainSection: [{ logo: { type: String }, heading: { type: String }, para: { type: String } }],
    }],
    testimonials: [{
        rating:Number,
        title: { type: String },
        para: { type: String },
        user: [{ image: { type: String }, name: { type: String }, designation:{type:String} }]
    }],
    family_culture: [{
        image: { type: String },
        logo: { type: String }
    }],
    about_as: [{
        title: { type: String },
        para: { type: String },
        platform_logo: [{logo:{ type: String },rating:Number}]
    }],
    FAQ: [{
        expertise: [{ question: { type: String }, ans: { type: String } }],
        fee_contract: [{ question: { type: String }, ans: { type: String } }],
        result: [{ question: { type: String }, ans: { type: String } }],
        about_our_company: [{ question: { type: String }, ans: { type: String } }]
    }],
    blog: [{
        image: { type: String },
        title: { type: String },
        para: { type: String }
    }],
    our_offices: [{
        countryname: { type: String },
        countrylogo: { type: String },
        location: { type: String }
    }]
}, {
    timestamps: true
});

module.exports = mongoose.model('homepage', homepage);