const bing = require('./index.js')

var search = bing.search('nodejs').then(res => console.log(res))
