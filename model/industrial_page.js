const mongoose = require('mongoose');

const Industrial_schema = mongoose.Schema({
    health_care: [{
        heading: String,
        para: String ,
        image:  String,
        list :[String],
        logo:String,
        btn_text :String,
        case_study: [{
        image: String,
        heading: String ,
        para: String,
        btn_text :String
         }],
}],
    beauty_and_cosmetics: [{
        heading: String,
        para: String,
        image:  String ,
        list :[String],
        logo:String,
        btn_text :String,
        case_study: [{
         image: String ,
         heading:  String ,
         para:  String ,
         btn_text :String
         }],
    }],
  
    real_estate: [{
        heading: String ,
        para:  String ,
        image: String  ,
        list :[String],
        logo:String,
        btn_text :String,
        case_study: [{
         image:String ,
         heading:String ,
         para: String ,
         btn_text :String
         }],
    }],
    travel: [{
        heading: String ,
        para:  String ,
        image: String  ,
        list :[String],
        logo:String,
        btn_text :String,
        case_study: [{
         image:String,
         heading: String ,
         para:  String,
         btn_text :String
         }],
    }],
    sports: [{
        heading:  String,
        para:  String ,
        image:  String ,
        list :[String],
        logo:String,
        btn_text :String,
        case_study: [{
         image: String ,
         heading: String ,
         para:String ,
         btn_text :String
         }],
    }],
    spirituality: [{
        heading: String ,
        para: String,
        image:  String  ,
        list :[String],
        logo:String,
        btn_text :String,
        case_study: [{
         image:  String ,
         heading:  String ,
         para:  String,
         btn_text :String
         }],
    }],
    testimonials:[{
        rating: String,
        title: String ,
        para: String,
        image: String,
        name:String
    }]
},{
    timestamps: true
})
module.exports = mongoose.model('industries',Industrial_schema)