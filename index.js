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

/** Method for getting airlines
 * @example
 * const etm = require('etm-air')
 * etm.airlines((error, airlines) => {
 *      if(error){
 *          throw error
 *      }
 *      else{
 *          console.log(airlines)
 *      }
 * })
 */
Communicator.prototype.airlines = function(callback){
    assert(callback, 'Missing callback')
    assert(typeof callback !== 'function', 'Callback should be a function')

    this.$client.get('/airlines')
        .then( response => callback(null, response.data) )
        .catch( error => callback(error, null) )
}

/** Methods for Offers */
Communicator.prototype.offers = function(callback){
    assert(callback, 'Missing callback')
    assert(typeof callback !== 'function', 'Callback should be a function')

    this.$client.get('/offers')
        .then(response => callback(null, response.data))
        .catch(error => callback(error, null))
}

Communicator.prototype.offersSegment = function(segmentId, callback){
    assert(callback, 'Missing callback')
    assert(typeof callback !== 'function', 'Callback should be a function')

    this.$client.get('/offers' + segmentId)
        .then(response => callback(null, response.data))
        .catch(error => callback(error, null))
}

Communicator.prototype.offersAvailability = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/availability')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersFireFamily = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/ff')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersOtherPrice = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/other-price')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersAddToTrip = function(buyId, callback){

    this.$client.post('/offers/' + buyId + '/add_to_trip')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersRules = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/rules')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}


Communicator.prototype.offersServices = function(buyId, callback){

    this.$client.get('/offers/' + buyId + '/services')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

Communicator.prototype.offersSeats = function(segmentId, callback){

    this.$client.get('/offers/' + segmentId + '/seats')
        .then(response => callback(null, response.data))
        .catch(error, callback(error, null))
}

module.exports = Communicator