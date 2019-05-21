const Axios = require('axios')
const assert = require('assert')

const Communicator = function(options){
    assert(options, 'Missing options')
    assert(typeof options !== 'object', 'Options should be an object')
    assert(options.token, 'Missing options token')

    this.$client = new Axios({
        baseUrl: 'https://api-stage.etm-system.com/api/air',
        headers: {
            'etm-api-key': options.token
        }
    })
}



module.exports = Communicator