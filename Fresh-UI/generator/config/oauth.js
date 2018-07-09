require('dotenv').config();
// expose our config directly to our application using module.exports
module.exports = {
    'googleAuth' : {
        'clientID'      : '1001649557101-645ji66oatoe8nrgtbdf34dk7ih4695f.apps.googleusercontent.com',
        'clientSecret'  : 'xz5QQo4C2z1GKWvr_Qq_qMc-',
        'callbackURL'   : "https://" + process.env.AIR_WS_IP + ".xip.io:3000/socialusers/auth/google/callback",
        'realm'         : "https://" + process.env.AIR_WS_IP + ".xip.io:3000"
    }

};
