const ipService = require('../services/ip')
const IpController = {
    getNetworkByIpAddress(req, res){
        try {
            const { ip } = req.body
            if(!ipService.validIp(ip)){
                return res.status(400).json({message: 'Ip is not valid'})
            }
            const resultado = ipService.calcularIntervalo(ip)
            return res.status(201).json(resultado)
        } catch (error) {
            res.status(500).json({ message: error.message })
        }

    }
}

module.exports = IpController