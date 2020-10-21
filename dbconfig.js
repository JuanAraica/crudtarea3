const config = {
    user :'root',
    password :' ',
    server:'127.0.0.1',
    database:'usuarios',
    options:{
        trustedconnection: true,
        enableArithAbort : true, 
        instancename :'SQLEXPRESS'
    },
    port : 55892
}

module.exports = config; 