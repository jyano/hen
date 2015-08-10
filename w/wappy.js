console.log('------- wappy --1------')
require('./both');
requires()
require('./defaultMug')
mong()
setupExpress()
midWare()
routing()
server()
sockets()


function requires(){
    http = require('http')
    path = require('path')
    fs = require('fs')
    mongoose  =   require('mongoose')
    express = require('express')
    connectMongo = require('connect-mongo')
    socketIO = require('socket.io')
    sessionSocketIO   = require('session.socket.io')
}
function mong(){

    mongoose.connect("mongodb://localhost/brain", function(){$l('mongo connected')})
    $Md= md= $m =  models =  require('./models');
    require('./mongodb') // raw mongo

}

function setupExpress(){

    mongoStore = new(connectMongo(express))({db:'brain'})

    e = E = $a = express()

    $a.set('port', process.env.PORT||4000)
    $a.set('view engine' ,'jade');
    $a.set( 'views' , __dirname + '/../views/' )  //$l('env: ' + $a.get('env') )//$a.use( express.logger('dev') ) //if(a.get('env')=="development"){a.use(express.errorHandler())}

    $a.use(express.bodyParser({
        uploadDir:__dirname+"/public/uploads",
        keepExtensions:true
    }))

    $a.use(cookieParser = express.cookieParser('xyz'))

    $a.use(express.session({
        store: mongoStore,
        secret: 'xyz'
    }));

//$a.use( express.favicon() )


}
function midWare(){

    mw= $w = middleware = require('./middleware');

    $a.use(middleware)
}


function routing(){

    $a.get(

        '/render/:page', function(q, p){
            p.render(q.params.page)

        })



    require( '../routes/routes' )()

    require( '../routes/socialRoutes' )()

    require('../routes/bookRoutes')()




    $a.use( $a.router )

    dirs= [

        '/public/deps', '/public/deps/css',     '/public/deps/js',


        '/public/pics', '/public/graphics', '/public/uploads',
        '/public/deps/ui-images', // assets: where i can publically, statically fetch items from // css, fonts, js (bs, cjs, jq, string, us)
        '/../js',

        '/../js/create',

        '/../js/app',
        '/../js/wapp',
        '/../js/both',
        '/../js/front',

        '/../js/games',
        '/../js/lib',


        '/../js/box2d',


        '/../js/knock',
        '/../js/back',
        '/../js/jqui',

        '/../js/css',

        '/../js/phaserjs', '/../js/phaser2',
        '/../js/melon',
        '/../js/three', '/../js/mvc',
        '/../js/tests',   '/../js/resources', '/../js/beta', '/../js/g'
    ]
    _.e(dirs, function(dir){
        $a.use(
            express.static(
                path.join(__dirname, dir)
            )
        )
    })




}
function server(){
    sv= httpServer = http.createServer($a)
    httpServer.listen(80, function(){ $l('server listening on port 80') })

}
function sockets(){
    io = socketIO.listen(httpServer)
    io.set('log level', 1)
    require('./sockets')(io, new sessionSocketIO(io, mongoStore, cookieParser))
}