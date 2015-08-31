$myLoc=  function(){
    if( window['you']){
        return {un: _username, x: yourBm.x, y: yourBm.y}
    }} //relies on 'you'.. actually just makes a similar object
$addGuyToMe=$addGuy=function(un, bm){

//add a new guyOb to $GUYS array, and add guy's bitmap to universe

    $GUYS.push( userOb= {
        un: un,
        bm: bm
    })
    uni.A(bm)
    bm.rC()
        .XY(600)
        .sXY(.4)
    // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
}
$getGuyFromMe= $getGuy=function(un){
//get a guy from your OWN array ($GUYS)


//get guy object by username or user.username
// guy object has {user/username, x, y}
// -- so this finds a guy in Y.GUYS  array
// or returns false if he aint there
    var targetGuy
     //can pass the string or also an ob with 'un' property
    if( O(un) ){ un = un.un }
    _.e($GUYS, function(guy){
        if(un == guy.un){
            targetGuy = guy}
    })
    return targetGuy || false
 }
$sendMyUpdate=  function(){
    k.em('bc', 'updateGuy', $myLoc())
}

$updateGuyForMe=  function(userOb){

    var guy = $getGuy( userOb.un  )
    if(guy){
        if(!guy.bm){alert('guy has !bm') }
    else {guy.bm.XY( userOb.x, userOb.y )}
    }
}

$Uni=  $UNI= startUniverse = function(un){
    var guy; $l('startUniverse with: '+  un)
    if( !window['uni'] ){$l('no uni  -- calling UNIVERSE()');
        UNIVERSE() }
    else {$l('uni found. no need to call UNIVERSE')}
    guy = $getGuy( un )
    if( guy ){
        $l('we already have guy: ' + guy )
    }
    else { $l('no guy'); $mug(un, function(mug){
            $Bm( mug,  function( bm ){
                $addGuyToMe(un, bm)})})}}
$mug=  function(un, fn){
    $.po('/mug', {un: un}, function(mug){
        if(mug){
            fn(mug)
        }
    })
} //= $mugByUn=  Y.mugByUn // withMug ?
$invite = function (toWho) {
        $l('$invite: ' + toWho)
        k.em('bc', 'invite', {
            from: _username,
            toWho: toWho
        })
    }
$accept = function (toWho) {
        $l('$accept: ' + toWho)
        $l(_username + ' accepts from ' + toWho)
        k.em('bc', 'acceptUniverseInvitation',
            {from: _username, toWho: toWho})
    }//this will have the server broadcast.emit 'accept'
$Bub = function (t, x, y) {

        var g = G(arguments), ct = $Ct() //if( !window['uni'] ){alert('the universe is missing!');return}

        text = g[0] || 'hi!'
        //so if you don't pass in coords, it relies on 'you'
        x = g[1] || yourBm.x
        y = g[2] || yourBm.y
        uni.A(ct)
        ct.cir('w', 120, x - 250, y - 250, 50)
            .cir('b', 30, x - 120, y - 120, 30)
            .cir('g', 20, x - 80, y - 80)
            .text(t, "20px Arial", "blue", x - 300, y - 300)

        $Tw(ct, [{a: 0, sxy: .1, x: x - 250, y: y - 250}, 20000])
        _.in(10, function () {
            ct.rm()
        })
        //broadcast out your speech bubble
        if (g.p) {
            $l('emitig.....')

            k.emit('bub', {t: t, x: x, y: y, u: _username})
        }

        return ct
    }

k.on('bub', function(bub){
        alert('bub: '+ bub)
        console.dir(bub)
        $l('buuuuuuuuuuuuub')
        if( Y.g(bub.u) ){
            Y.bub(bub.t, bub.x, bub.y)
        }
    })
k.on('updateGuy', function(guy){//$l('k <- updateGuy : $updateGuyForMe(guy)')
    $updateGuyForMe(guy) })
k.on('accept', function(data){
        alert('ac')
        if( _username == data.toWho){
            Y.U(data.from)
        }
    })//if it was YOUR invitation that was accepted// here u should really just be able to 'addUser'
k.on('invite', function(invite){
        // alert('invite toWho: '+ invite.toWho)
        if( _username == invite.toWho ){
            alert('new invitation')
            $mug(invite.from, function(mug){

                popIv = $.pop(

                    $.d().A(
                        $.i( mug ).WH( 200,200 ),
                        $.h1( 'chat with '+ invite.from + '?' ),


                        $.bt( 'ya' , function(){
                            popIv.modal('hide')
                            Y.U( invite.from )
                            //so u are just adding them in?
                            // ah the function also supposedly takes into account the app not even being open
                            // i could nix that for now
                            $accept( invite.from )
                        }),


                        $.bt( 'na' , function(){
                            popIv.modal('hide') })


                    )











                )



            })
        }

        else {

            // alert('nottt match')
        }


    })




UNIVERSE=function(){z()

    uni = $St(1000, 800)
    uni.bgI('/beach.jpg')
    uni.mug(function(b){

        //add you to the screen
        yourBm=  b.dg().rC().XY(600).sXY(.4)
        $GUYS=  [{
        //add you to your own array
            un :_username,
            bm : yourBm
        }] //b.$$( function(){ b.rm(); k.emit('X', _username)})
        page =  $.d('b', 1000, 'auto').A($.br(3)) //.pp2( $('body') )
        page.A(
            chatMessageInputTextBox = $.ip('...', 'tx').id('textinput'),
            chatSendButton = $.bt('send', function(){$Bub( $('#textinput').V(), '+')}) )
        n=0

        $.eG('users', function(user){
            var mug
            window['u'+String(n++)]=user; $l(user.un)
            if(user.mug ){
                page.A(mug=  $.i(user.mug).WH(100).$(function(){
                    $l('inviting.. user.un: ' + user.un)
                    $invite( user.un )})) }
        })

        _.ev(.1, $sendMyUpdate)

                 //  userHolder = $.d('z').a2( $.R().A() ); $l('users:')
        // fetchMugByMugId( user,  function(userMug){
        // theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )}) //RECIEVE speech bubble
    })


}



short()
function short() {
    $guy = Y.g = function (un, bm) {//add guy to Y.GUYS
        //pass in a user / username to update your image of them
        if (bm) {
            $addGuy(un, bm)
        }
        else {
            return $getGuy(un)
        }
    }
    $update = Y.u = function (userOb) {
        userOb ? $updateGuyForMe(userOb) :
            $sendMyUpdate()
    }
}


//alert
Y.bId= Y.mById=fetchMugByMugId =  function(user, fn){
    alert('Y.bId')
    $.po( 'getimagebyid' ,  user.m,  fn)
}
Y.bM= Y.mByM= fetchMugByUserModel =  function(user, fn){
    alert('Y.bId')
    $.g('mug/' + user.m, fn)
}

