var twitter = require('twitter');
var https = require('https');
var util = require('util');
var nano = require('nano')('https://ineedit.couchappy.com:443/');
var twit_data = nano.use('cric');

var twit = new twitter({
  consumer_key: "",
  consumer_secret: "",
  access_token_key: "",
  access_token_secret: ""
});

var count=0;

/*twit.stream('statuses/filter',{track:'#happy'}, function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data.text));
         twit_data.insert(data, 'tweet'+count++);});
    setTimeout(stream.destroy,10000)
    });*/


twit.stream('statuses/filter', {track:'cricket'}, function(stream) {
    stream.on('data', function(data) {
        console.log(util.inspect(data.text));
        twit_data.insert(data,'tweet'+count++);
    });
    // Disconnect stream after five seconds
    setTimeout(stream.destroy, 5000);
});
