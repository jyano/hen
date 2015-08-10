$l('~mw~')

var Midware = function(q,p,n){mW()

    //if user is logged in,
    //he will have a username set in their session

    //checks session to see if user is logged in
    var lI = q.ss.username? true: false

    //set lI status on req
    q.lI= q.loggedIn = lI

    //set it also on res.local
    p.lc.lI= p.lc.loggedIn = lI

    //set username itself also on req
    q.un= q.username = q.ss.username

    // $l('MAIN middleware says q.username = ' + q.username)

    n()

    function mW() {
        q.ss = q.session
        p.lc = p.locals
    }
}


$Mw = Midware


$Mw.user =   function(q,p,n){
    
    if( q.loggedIn){
        $Md.user.findOne({
                username: q.username},
            function(z,u){
                if(z){n(z)}
                else if(u){
                    q.user = p.locals.user = u
                q.username = p.locals.username = u.username
                q.userId = p.locals.userId = u._id}
            n()
        })
    }

    else {
       // $l('middleware says NOT logged in :(')
        p.json('guest')
    }


}
 //var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
 // $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
 // p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
 // if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}

$Mw.Pics =    $Mw.P = function(q, p, n){


    $m.pic.find(


        {u: q.I },


        function(z, pics){

            var array =[]

            _.each(

                pics,

                function(pic){
                    array.push(
                            _S(pic._id)  +  pic.e
                    )  // $l(    )


                })

            p.locals.I = array
            n()
        })
}


$Mw.pic =     $Mw.p =  function(q,p,n){

    $Md.pic.findById(q.params.p,

        function(z,i){
            if(z){n(z)}
            p.locals.i =  '/'+i._id
            q.i=i
            n()
    })


}





$Mw.Books =   $Mw.B =function(q, p, n){

    Book.find({

            user: q.I
        },

        function(z,books){
            if(z){n(z)};
            if(!books){'no book!'}
            p.locals.books = books
            n()
        })

}
$Mw.book =  $Mw.book =function(q, p,n){



     $Md.book.findOne({

             u: q.I,

             title: q.p.t
         },


         function(z,book){ if(z){n(z)}

             p.locals.book = book

             if(q.params.n){

                 var c = p.locals.n = book.c[n]
             }

             if(p.params.h){
                 p.locals.h = c[n][h]
             }

             n()

         })
}
module.exports = $Mw



