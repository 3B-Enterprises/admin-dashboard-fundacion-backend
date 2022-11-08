const {messageBuilder} = require('../../utils/utils')

const defaultRoute = (req,res) => {
    try {   
        return res.status(200).json(messageBuilder(200,"Fundación Fe y Esperanza en el Divino Niño","No content"))
    } catch (error) {
        console.log(error)
        return res.status(500).json(messageBuilder(500, "Server error", error))
    }
}

module.exports = {defaultRoute}