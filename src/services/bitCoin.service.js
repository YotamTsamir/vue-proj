import axios from 'axios'
export const bitcoinService = {
    getBitcoinPrice
}

function getBitcoinPrice(){
return axios.get('https://api.blockchain.info/charts/trade-volume?timespan=5months&format=json&cors=true')
}