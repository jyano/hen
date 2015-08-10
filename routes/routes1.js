$l('routes.js')

module.exports=function(){


    $a.get('/wap', function(req,res){ res.render('wap') })

    $a.get('/wap/:app/:pam?', function(q, p){p.render('wap', {  app: q.params.app,   pam: q.params.pam    })})




    ////////// for posting/creating a new user
    $a.post('/user', function(q,p,n){

        models.user.create(q.body, function(z,u){
            if(z){
            $l(z.code==11000?'!!':'!')
            $d(z)
            p.json('error');
            n(z)
        }



        else {
                //set session u=u.u (user name= user.username)
                q.session.username = q.session.u= u.u
                //set session li=true (loggedIn=true)
                q.session.loggedIn = true
                //save session and send back a json obj of username -so a string? huh?
                q.session.save(function(){
                    res.json(u.username)})}})
    })


    /////////////. it gives me back {id, username, mug, status}

    $a.get('/users', function(q, p){
        models.user.find( q.body,

            function(err, users){if(users){p.json( _.map(users, function(u){
                return {
                    id: u.id,
                    username: u.username,
                    mug: u.mug || 'no mug',
                    status: u.status || 'no status' }}))}})
    })


    $a.get('/user/:username', function(req, res){

        $l('/user/:username')

        models.user.findOne({username: req.params.username},

            function(err, u){

            if(user){
                   res.json({
                        id: u.id,
                        username: u.username,
                        mug: u.mug || null,
                        status: u.status || 'no status'})}})
    })


    $a.post('/login',  function(q,p,n){

        $l(q.body.username)
        $l(q.body.password)

        models.user.findOne(
            { username : q.body.username ,
              password : q.body.password
            },
            
            function(z,u){if(z){n(z)}

                if(!u){$l('FAIL!!'); p.json('guest')}

                else {$l('logged in: ' + u + ' !')

                    q.session.username =  q.session.u = u.username
                    q.session.loggedIn =  q.session.li = true
                    q.session.save(function(){$l('session saved '+ q.session.username + ', ' + u.username)
                      p.json( u.username )})}})
    })



    $a.get('/logOut', $w.user, function(q,p){$l('logging out')
      q.session.username =  q.session.u = null
      q.session.loggedIn =  q.session.li = false
       q.session.save(function(){
          p.json('false')})})





    $a.get('/loggedIn', $w.user, function(q,p){

        $l('loggedIn?')
        $l('req.loggedIn: '+ q.loggedIn)
        $l('req.username: '+ q.username)
       p.json( q.username)
    })

    /////

    $a.get('/myMug', $w.user, function(q,p){
        $l('--------testing myMug--------')
        $l('req.body: ' +  q.body)
        $l('req.username: ' +  q.username)
        models.user.findOne({username:  q.username}, function(z, u){
            $l('in findOne callback: u data: ' + u)
            p.send(u.mug)
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




    $a.get('/play/:app/:pam?', function(req, res){
        res.render('play',
            {
                app: req.params.app,
                pam: req.params.pam
            })
    })





    $a.get('/', function(req,res){  res.send('this is a test')   })



}