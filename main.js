const axios = require("axios")
const noblox = require("noblox.js")

//for (var i = 0; i < json.length; i++) {
  //  console.log(json[i].name, json[i].id)
//}

noblox.getFriends(1966416096).then(function(json){
    json = json.data
})