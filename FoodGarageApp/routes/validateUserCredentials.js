var express = require('express');
var router = express.Router();

router.get('/', (request, response) => {
    console.log(request.query);
    var data = {};
    if (request.query.mailId == 'admin@g.com' && request.query.accountPwd == 'admin') {
        data.msg = 'Valid User'
        data.status = 'Success';
    } else {
        data.msg = 'Invalid Credentials'
        data.status = 'Error';
    }
    response.send(JSON.stringify(data));

});


module.exports = router;