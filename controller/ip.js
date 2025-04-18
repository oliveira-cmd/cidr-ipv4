const ipService = require('../services/ip')
const IpController = {
    getNetworkByIpAddress(req, res){
        try {
            const { ip } = req.body
            const resultado = ipService.calcularIntervalo(ip)
            res.status(201).json(resultado)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }
}

module.exports = IpController