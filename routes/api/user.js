const { Router } = require('express');

const route = Router();

route.get('/', (req, res) => {
    // TODO: send current user
    res.send({
        "user":{
          "email": "jake@jake.jake",
          "bio": "I like to skateboard",
          "image": "https://i.stack.imgur.com/xHWG8.jpg"
        }
      });
});

module.exports = route;