$l('routes.js'); module.exports=function(){// $a.get('/wap', function(req,res){ res.render('wap') })
    $a.g=$a.get; $a.po =$a.post

    apps()
    users()
    pics()
    status()
    play()

    function apps(){

        $a.g('/wap/:app/:pam?', function(q,p){
            p.render('wap', {
                app: q.params.app,   pam: q.params.pam    })
        })

    }



    function users(){

        $a.g('/users', function(q,p){
            // for all users g ->  [{id, username, mug, status}]

            models.user.find( q.body,

                function(z, users){

                    if(users){

                        p.json(

                            _.m(users, function(u){

                                return {

                                    id: u.id,
                                    username: u.username,
                                    mug: u.mug || 'no mug',
                                    status: u.status || 'no status'
                            }})

                        )


                    }
                })



        })///////////

        $a.po('/user', function(q,p,n){
            models.user.create(q.body, function(z,u){if(z){$l(z.code==11000?'!!':'!'); $d(z); p.json('error'); n(z) }
            _.extend(q.session, {username: u.username, loggedIn :true}).save(function(){ p.json(u.username) })
        })
        })

        $a.g('/loggedIn', $w.user, function(q,p){

            $l('loggedIn? req.loggedIn: '+ q.loggedIn + ', req.username: '+ q.username)
            p.json( q.username)
        })

        $a.g('/username', $w.user, function(q,p){p.json( q.username)})

        $a.po('/login',  function(q,p,n) {

            $l('/login')

            $l(q.body.username);
            $l(q.body.password)

            models.user.findOne(
                {username: q.body.username, password: q.body.password},

                function (z, u) {
                    if (z) { n(z) }
                    if (!u) {
                        $l('FAIL!!');
                        p.json('guest')
                    }

                    else {

                        $l('logged in: ' + u + ' !')
                        q.session.username = u.username
                        q.session.loggedIn = true

                        _.extend(q.session, {username: u.username, loggedIn: true})
                            .save(function () {
                                $l('session saved ' + q.session.username + ', ' + u.username)
                                p.json(u.username)
                            })
                    }
                })
        })
        $a.g('/logOut', $w.user, function(q,p){$l('logging out')
            _.extend(q.session, {username : null, loggedIn : false}).save(function(){p.json('false')})
        })






        $a.g('/user/:username', function(q, p){$l('/user/:username')
            models.user.findOne({username: q.params.username},
                function(z, u){
                    if(u){
                        p.json({
                            id: u.id,
                            username: u.username,
                            mug: u.mug || null,
                            status: u.status || 'no status'})}})
        })
        $a.g('/myMug', $w.user, function(q,p){
            $l('--------testing myMug--------')
            // $l('q.body: ' +  q.body)
            $l('q.username: ' +  q.username)
            models.user.findOne({username:  q.username}, function(z, u){
                // $l('in findOne callback: u data: ' + u)
                p.send(u.mug)
            })
        })
        $a.g('/mugByUsername/:username', function(q,p){

            //$l('req.params.username: ' + req.params.username)

            models.user.findOne({username: q.params.username}, function(z,u){// $l(user + ', ' + user.mug)
                p.send(u.mug)})})
        $a.po('/changeMug', $w.user, function(q,p){  // could be a put?
            q.user.mug =  q.body.url
            q.user.save( function(z,m){ p.send(m) })
        })
        ////delete user  // does this('del') work like post or get (in terms of express)?
        $a.del('/user', function(req, res, next){
            models.user.remove(req.body, function(err,data){res.json(data)})
        })

    }


    function pics(){
        //upload pic
        $a.po('/pic', $w.user,  function(q, p, n){

            $l('upload new pic----------------------------------------------------------')

            var imgFile,
                ext

            if( q.files.png){  q.files.i = q.files.png   }

            imgFile = q.files.i;

            ext = path.extname( imgFile.path ) || '.png'

            picOb=  {
                user: q.userId,
                name: imgFile.name,
                size: imgFile.size,
                modified: imgFile.lastModifiedDate,
                ext: ext
            }


            models.pic.create(picOb, function(z, pic){
                    if(z){ $l(z) }
                    fs.readFile(imgFile.path,  function(z, file){
                        pic.path = path.resolve( imgFile.path, '../../pics/', pic._id.toString() )
                        pic.path+= pic.ext
                        $l('pic.path: ' + pic.path)
                        fs.writeFile( pic.path,  file,  function(z){
                            pic.save(  function(z){
                                if (z){
                                    $l('z')
                                    n(z) }
                                else {
                                    $l('saved ------------------------------------------------------upload new pic')
                                    p.redirect('back') }})
                        })
                    })}
            )
        })



        //remove a pic
        $a.del('/pic', function(req,res){ models.pic.remove(req.body, function(err,data){ res.json(data) }) })



        //get all pics(files) (everyone's)
        $a.g('/pics', function(req, res){ models.pic.find(  function(err, data){  res.json(data)  }) })


        $a.g('/myPics', $w.user, function(q, p){

            models.pic.find({
                    user: q.userId
                },

                function(z, pics){ p.json(pics)  })
        })




        ///////////////////
        ////
        //
        //upload a dataUrl!!
        $a.po('/uplI', $w.user, function(req, res, next){

            $l('uplI')

            //if(req.f.png){req.f.i= q.f.png}
            // var i=req.f.i
            models.img.create(  { u: req.userId, d: req.du },  function(err, img){ //$d(img)
                fs.readFile(img.path, function(err, file){
                    fs.writeFile(
                        $d(path.resolve(img.path,'../../p/', img._id.toString())+img.e),
                        file,
                        function(err){
                            img.save(function(err){
                                if(err){
                                    $l('err')
                                    next(err)}

                                else {

                                    $l('uploaded')
                                    res.redirect('back')}})
                        })})

            })


        })




        //************** this is where we save new cutout-images

        $a.po('/img', $w.user,  function(req, res, next){

            models.img.create(

                {
                    u: req.username,

                    d: req.body.d,

                    dats: req.body.dats,

                    username: req.username,

                    data: req.body.d,

                    physicsData: req.body.dats

                },



                function(err, image){ return res.json(image)  }



            ) })  //new image

        //remove an image (by id) //cutouts?
        // $a.po('/rmI', function( req, res ){   models.img.remove(  req.body,  function(err, data){res.json(data)} )  })

        $a.del('/img', function( req, res ){

            models.img.remove(req.body, function(err, data){res.json(data)} )  })
        //find all User's images?
        $a.g('/img', $w.user, function(req, res){

            models.img.find( {u: req.username},

                function(err, data){res.json(data)}  )

        })
        //find all   images on site?
        $a.g('/allImages', $w.user, function(req, res){

            models.img.find( { },

                function(err, data){res.json(data)}  )

        })
        //g all images of a sp. user
        $a.g('/images/:username', $w.user, function(req, res){

            models.img.find({username: req.params.username },

                function(err, data){res.json(data)}  )

        })

    }
    function status(){

        $a.g('/myStatus', $w.user, function(req,res){
            models.user.findOne({username: req.username}, function(err,data){
                res.send(data.status || 'no status')})})
        //** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
        $a.po('/getimagebyid', function(req,res,next){
            $l('dud')

            // $l('req.body.data')
            // $l(req.body.d)

            models.img.findById(

                //'54d4506172f7e12a05000012',
                req.body.data,

                function(err, data){

                    //   $l('data: ')
                    console.dir(data)

                    res.send(data)
                })

        })
        $a.po('/dats', function(req,res){
            models.img.findById(  req.body.d, function(err, data){

                if(O(data)){ res.json(data) }

            })
        })





        $a.po('/changeStatus', $w.user, function(q,p){

            q.user.status =  q.body.status
            q.user.save( function(z, u){p.json(u.status)})
        })

    }
    function play(){

        $a.g('/', function(q,p){p.send('this is a test')})


        $a.g('/play/:app/:pam?', function(q,p){
            p.render('play',
                {
                    app: q.params.app,
                    pam: q.params.pam
                })
        })

    }
}

//$a.get('/render/:page', function(q,p){p.render(q.params.page)})

function fromGame(){
    $l('routes.js')

    module.exports=function(){

        $a.get('/play/:app/:pam?', function(req, res){

            res.render('play', {  app: req.params.app,   pam: req.params.pam    })

        })





        $a.get('/', function(req,res){  res.send('this is a test')   })
        $a.get('/wap', function(req,res){ res.render('wap') })
        $a.get('/wap/:app/:pam?', function(req, res){

            res.render('wap', {  app: req.params.app,   pam: req.params.pam    })})



        ////////// for posting/creating a new user
        $a.post('/user', function(req,res,next){


            models.user.create(req.body, function(err, user){ if(err){

                $l(err.code==11000?'!!':'!'); $d(err)
                res.json('error'); next(err)}

            else {

                //set session u=u.u (user name= user.username)
                req.session.username= req.session.u= user.u

                //set session li=true (loggedIn=true)
                req.session.loggedIn = true

                //save session and send back a json obj of username -so a string? huh?
                req.session.save(function(){ res.json(user.u)})} })

        })


        /////////////. it gives me back {id, username, mug, status}

        $a.get('/users', function(req, res){

            models.user.find( req.body,

                function(err, users){

                    if(users){

                        res.json( _.map(users, function(user){

                            return {

                                id: user.id,
                                //u: user.u,
                                username: user.username,
                                //m: user.m,
                                mug: user.mug || 'no mug',

                                status: user.status || 'no status'
                            }

                        }))

                    }

                })

        })
        $a.get('/user/:username', function(req, res){

            $l('/user/:username')

            models.user.findOne({username: req.params.username},

                function(err, user){

                    if(user){

                        res.json({

                            id: user.id,

                            //u: user.u,
                            username: user.username,

                            //m: user.m,
                            mug: user.mug || null,

                            status: user.status || 'no status'

                        })

                    }

                })

        })
        $a.post('/login',  function(req,res,next){

            $l(req.body.username)
            $l(req.body.password)

            models.user.findOne(
                { username : req.body.username ,
                    password : req.body.password
                },


                function(err, user){  if(err){next(err)}

                    if(!user){

                        $l('FAIL!!')
                        res.json('guest') }


                    else {  // $l('logged in: ' + user + ' !')

                        req.session.username = req.session.u = user.username

                        req.session.loggedIn = req.session.li = true

                        req.session.save(function(){

                            $l('---')
                            $l('session saved')
                            $l(req.session.username)

                            $l(user.username)
                            $l('---')
                            res.json( user.username )

                        })}  })    })
        $a.get('/logOut', $w.user, function(req,res){

            $l('logging out')

            req.session.username = req.session.u = null

            req.session.loggedIn = req.session.li = false


            req.session.save(function(){

                res.json('false')

            })})
        $a.get('/loggedIn', $w.user, function(req, res){

            $l('loggedIn?')
            $l('req.loggedIn: '+req.loggedIn)
            $l('req.username: '+req.username)

            res.json(req.username)

        })

        /////
        $a.get('/myMug', $w.user, function(req,res){

            $l('--------testing myMug--------')
            $l('req.body: ' + req.body)
            $l('req.username: ' + req.username)

            models.user.findOne({username: req.username}, function(err, data){

                $l('in findOne callback')
                $l('data: ' + data)



                res.send(data.mug)


            })



        })
        $a.get('/mugByUsername/:username', function(req, res){


            $l('req.params.username: ' + req.params.username)

            models.user.findOne(

                {username: req.params.username},

                function(err, user){

                    // $l(user)
                    // $l(user.mug)

                    res.send(user.mug)

                })})
        $a.post('/changeMug', $w.user, function(req, res){  // could be a put?

            req.user.mug =  req.body.url

            req.user.save(

                function(err, mug){  res.send(mug)   }  // i'm i using this return data on client?

            )

        })

        ///////
        //////
        ////

        //// //// //// //// //// //// //// //// //// ////

        //// //// //// //// //// //// //// ////




        ////delete user  // does this('del') work like post or get (in terms of express)?
        $a.del('/user', function(req, res, next){

            models.user.remove(req.body, function(err,data){res.json(data)})

        })



        //upload pic
        $a.post('/pic', $w.user,  function(req, res, next){  var imgFile, ext

            if(req.files.png){  req.files.i = req.files.png   }

            imgFile = req.files.i; ext = path.extname( imgFile.path ) || '.png'

            models.pic.create(

                { user: req.userId, name: imgFile.name, size: imgFile.size, modified: imgFile.lastModifiedDate, ext: ext },

                function(err, pic){ if(err){ $l(err) }

                    fs.readFile(imgFile.path,  function(err, file){

                        pic.path = path.resolve( imgFile.path, '../../pics/', pic._id.toString() )  + pic.ext

                        fs.writeFile( pic.path,  file,  function(err){

                            pic.save(  function(err){ if (err){ next(err) }  else { res.redirect('back') } }) }) } )
                })

        })



        //remove a pic
        $a.del('/pic', function(req,res){

            models.pic.remove(req.body, function(err, data){
                res.json(data)
            })

        })



        //get all pics(files) (everyone's)
        $a.get('/pics', function(req, res){
            models.pic.find(  function(err, data){  res.json(data)  })
        })


        //change to get pics?
        //find all User's pics
        $a.get('/myPics', $w.user, function(req, res){

            models.pic.find({user: req.userId},
                function(err, pics){ res.json(pics)  })

        })



        ///////////////////
        ////
        //
        //upload a dataUrl!!
        $a.post('/uplI', $w.user, function(req, res, next){

            //if(req.f.png){req.f.i= q.f.png}

            // var i=req.f.i

            models.img.create(  { u: req.userId, d: req.du },  function(err, img){ //$d(img)



                fs.readFile(img.path, function(err, file){


                    fs.writeFile(

                        $d(path.resolve(img.path,'../../p/', img._id.toString())+img.e),

                        file,

                        function(err){

                            img.save(function(err){ if(err){next(err)} else {res.redirect('back')}})

                        })})

            })


        })




        //************** this is where we save new cutout-images

        $a.post('/img', $w.user,  function(req, res, next){

            models.img.create(

                {
                    u: req.username,

                    d: req.body.d,

                    dats: req.body.dats,

                    username: req.username,

                    data: req.body.d,

                    physicsData: req.body.dats

                },



                function(err, image){ return res.json(image)  }



            ) })  //new image

        //remove an image (by id) //cutouts?
        // $a.post('/rmI', function( req, res ){   models.img.remove(  req.body,  function(err, data){res.json(data)} )  })

        $a.del('/img', function( req, res ){

            models.img.remove(req.body, function(err, data){res.json(data)} )  })
        //find all User's images?
        $a.get('/img', $w.user, function(req, res){

            models.img.find( {u: req.username},

                function(err, data){res.json(data)}  )

        })
        //find all   images on site?
        $a.get('/allImages', $w.user, function(req, res){

            models.img.find( { },

                function(err, data){res.json(data)}  )

        })
        //get all images of a sp. user
        $a.get('/images/:username', $w.user, function(req, res){

            models.img.find({username: req.params.username },

                function(err, data){res.json(data)}  )

        })


        $a.get('/myStatus', $w.user, function(req,res){
            models.user.findOne({username: req.username}, function(err,data){
                res.send(data.status || 'no status')})})
        //** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
        $a.post('/getimagebyid', function(req,res,next){
            $l('dud')

            $l('req.body.data')
            $l(req.body.d)

            models.img.findById(

                //'54d4506172f7e12a05000012',
                req.body.data,

                function(err, data){

                    $l('data: ')
                    console.dir(data)

                    res.send(data)
                })

        })
        $a.post('/dats', function(req,res){
            models.img.findById(  req.body.d, function(err, data){

                if(O(data)){ res.json(data) }

            })
        })


        $a.post('/changeStatus', $w.user, function(req, res){

            var status = req.body.status

            req.user.status= status
            req.user.save(
                function(err, user){res.json(user.status)}
            )


        })







    }
}