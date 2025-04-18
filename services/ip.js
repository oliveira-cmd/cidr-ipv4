const ipService = {

    formatarBinarioEmOctetos(binario) {
        return binario.match(/.{1,8}/g).join('.')
    },
    
    calcularIntervalo(ipComCIDR) {
        const [ipAddress, cidrStr] = ipComCIDR.split('/')
        const cidr = parseInt(cidrStr)
    
        const octetos = ipAddress.split('.').map(Number)
        const binarioIP = octetos.map(o => o.toString(2).padStart(8, '0')).join('')
    
        const bitsRede = binarioIP.slice(0, cidr)
        const bitsHostInicio = '0'.repeat(32 - cidr)
        const bitsHostFim = '1'.repeat(32 - cidr)
    
        const ipInicioBin = bitsRede + bitsHostInicio
        const ipFimBin = bitsRede + bitsHostFim
    
        const binParaIp = bin => {
            const octetos = []
            for (let i = 0; i < 32; i += 8) {
                octetos.push(parseInt(bin.slice(i, i + 8), 2))
            }
            return octetos.join('.')
        }
    
        return {
            ipOriginal: ipComCIDR,
            cidr,
            ipBinario: this.formatarBinarioEmOctetos(binarioIP),
            range_init: this.formatarBinarioEmOctetos(ipInicioBin),
            range_end: this.formatarBinarioEmOctetos(ipFimBin),
            ipInitRange: binParaIp(ipInicioBin),
            ipEndRange: binParaIp(ipFimBin),
        }
    },

    validIp(ipCidr){
        const regex = /^(\d{1,3}\.){3}\d{1,3}\/\d{1,2}$/
        if (!regex.test(ipCidr)){
            return false
        }

        const [ip, cidrStr] = ipCidr.split('/')
        const cidr = parseInt(cidrStr)
        if (cidr < 0 || cidr > 32){
            return false
        }

        const octetos = ip.split('.').map(Number)
        if (octetos.length !== 4){
            return false
        }

        for (const o of octetos) {
            if (isNaN(o) || o < 0 || o > 255){
                return false
            }
        }
        return true
    }
}

module.exports = ipService