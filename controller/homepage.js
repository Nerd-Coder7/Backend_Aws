const { title } = require("process")
const model = require("../model/homePage")
const nodemailer = require("nodemailer")
module.exports = {
    async createhomepage(req, res) {
        try {
            const exist = await model.findOne({})
            if (exist) {
                return res.status(400).send("data already exist")
            } else {
                const data = await model.create({ ...req.body })
                if (!data) {
                    return res.status(400).send("something went wrong")
                } else {
                    return res.status(200).send({ message: "data created successfully", data: data })
                }
            }
        } catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    },
    async gethomepage(req, res) {
        try {
            const data = await model.find({})
            if (!data) {
                return res.status(400).send("something went wrong")
            } else {
                return res.status(200).send({ message: "data get successfully", data: data })
            }
        } catch (e) {
            return res.status(500).send(e)
        }
    },
    async delete(req, res) {
        try {
            const { key } = req.body
            console.log(key)
            const data = await model.findOneAndUpdate({ [key]: { $elemMatch: { _id: req.body.id } } }, { [key]: [] }, { new: true })
            if (!data) {
                console.log(data)
                return res.status(400).send("something went wrong")
            } else {
                return res.status(200).send({ message: "data delete successfully", data: data })
            }
        } catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    },
    async update_homepage(req, res) {
        try {
            const { id, key, updatekey, new_value } = req.body
            let data
            if(!updatekey){
                 data = await model.findOneAndUpdate({ _id: id }, {
                    $set: {
                        [`${key}`]: new_value
                    },
                }, { new: true }) 
            }
            else{
             data = await model.findOneAndUpdate({ _id: id }, {
                $set: {
                    [`${key}.0.${updatekey}`]: new_value
                },
            }, { new: true })
        }
            console.log(data)
            if (!data) {
                console.log(data)
                return res.status(400).send("something went wrong")
            } else {
                return res.status(200).send({ message: "data update successfully", data: data })
            }
        } catch (e) {
            console.log(e)
            return res.status(500).send(e)
        }
    },
    async hireShopify(req, res) {
        try {
            const { full_name, email, phone_number, select, account, message } = req.body
            if (!full_name, !email, !phone_number, !select, !account, !message) {
                return res.status(400).send("required data")
            }
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.Nodemailer_id,
                    pass: process.env.Nodemailer_pass,
                },
            });
            var mailOptions = {
                from: process.env.Nodemailer_id,
                to: email,
                subject: "hire shopify",
                text: ` full_name : ${full_name},  email : ${email} ,  phone_number : ${phone_number},  select : ${select},  account :${account},  message : ${message}`
            };
            transporter.sendMail(mailOptions, function (error, result) {
                if (error) {
                    console.log("Email error sent: " + JSON.stringify(error));
                    return res.status(400).send(error)
                } else {
                    console.log("Email result sent: " + JSON.stringify(result));
                    return res.status(200).send("send mail successfully")
                }
            });
        } catch (e) {
            return res.status(500).send(e)
        }
    },
    async contactAs(req, res) {
        try {
            const { name, email, phone_number, select, message } = req.body
            if (!name, !email, !phone_number, !select, !message) {
                return res.status(400).send("required data")
            }
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.Nodemailer_id,
                    pass: process.env.Nodemailer_pass,
                },
            });
            var mailOptions = {
                from: process.env.Nodemailer_id,
                to: email,
                subject: "New Mail",
                text: ` name : ${name},  email : ${email} ,  phone_number : ${phone_number},  select : ${select},   message : ${message}`
            };
            transporter.sendMail(mailOptions, function (error, result) {
                if (error) {
                    console.log("Email error sent: " + JSON.stringify(error));
                    return res.status(400).send(error)
                } else {
                    console.log("Email result sent: " + JSON.stringify(result));
                    return res.status(200).send("send mail successfully")
                }
            });
        } catch (e) {
            return res.status(500).send(e)
        }
    }
}
