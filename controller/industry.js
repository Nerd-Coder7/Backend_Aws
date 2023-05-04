const model = require("../model/industry")

module.exports = {
    async create(req,res){
        try{
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
        }catch(e){
            return res.status(500).send(e)
        }
    },
    async getdata(req, res) {
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
    async update(req,res){
        try {
            const { id, key, updatekey, new_value } = req.body
            const data = await model.findOneAndUpdate({ _id: id }, {
                $set: {
                    [`${key}.0.${updatekey}`]: new_value
                },
            }, { new: true })
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
    }
}