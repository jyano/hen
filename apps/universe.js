UNIVERSE=function(){z()
    //Y= window['Y']? window['Y'] : {}
    Y.bId= Y.mById=fetchMugByMugId = fetchMugByUserModel2 =function(user, fn){$.P( 'getimagebyid' ,  user.m,  fn)}
    Y.bM= Y.mByM=fetchMugByUserModel =  function(user, fn){$.G('mug/' + user.m, fn) }
    Y.bN= Y.mByN=fetchMugByUsername =  function(un, fn){
        $.P('mug', {u: un}, function(mug){if(mug){ fn(mug) }})
    }
    Y.t= Y.b= Y.bub=SpeechBubble =  function( t, x, y ){var g=G(arguments)
        ct=   $Ct()
        if( !window['uni'] ){alert('the universe is missing!');return}
        text = g[0] || 'hi!'
        //so if you don't pass in coords, it relies on 'you'
        x = g[1] || you.x
        y = g[2] || you.y
        uni.A(ct)
        ct.cir(x-150,y-150,100,'w').cir(x-50, y-50, 30, 'w').cir(x-20,y-20,10,'w')
            .text(t, "20px Arial", "blue", x-200, y-200)
        ct.tr( [{ a:0, sxy:.1, x:x-250, y:y-250 }, 20000])
        _.in(10, function(){ct.rm()})
        //broadcast out your speech bubble
        if(g.p){ k.emit('speechBubble', { t:t, x:x, y:y, u:_username } )}
        return ct
    }
    Y.loc=guyLocation=function(){  if( window['you'] ){
        return {u:_username, username:_username, x: you.x, y: you.y}
    }}//relies on 'you'.. actually just makes a similar object
    Y.g=getGuy=    Y.A=addGuy=function(un, bm){//add guy to Y.GUYS
        var guy
        if(bm){
            Y.GUYS.push({un: un,  bm: bm })
            bm.rC().XY(600).sXY(.4).a2(uni) //add guy's bitmap to universe
            // bitmap.o('$$', function(bm){   bm.XX(); k.emit('X', _username) })
        }

        else {

            //get the username//do this as a reduce
            un = O(un) ?
            un.u || un.un:
                un
            _.e(Y.GUYS,function(g){if(g.u ==  un || g.un == un){guy = g }})
            return guy
            //pass in a user / username to update your image of them //or.. pass nothing to update everyone on YOU
        }

    }
    //get guy object by username or user.username //guy object has {user/username, x, y} //-- so this finds a guy in the Y.GUYS or returns false if he aint there
    Y.u= updateGuy =  function(u){var guy, bm

        if(u){guy= Y.g( u.u )
            if(O(guy)){bm = guy.bm}
            if( bm ){ bm.XY( u.x, u.y )  }
        }
        else {  k.em('bc', 'updateGuy', Y.loc())  }
    }
    Y.iv= inviteToUniverse=function(toWho){
        k.em('bc', 'invite', {from: _username, toWho: toWho})}
    Y.ac= acceptUniverseInvitation =  function(toWho){
        $l(_username + ' accepts from ' + toWho)
        k.em('bc',  'acceptUniverseInvitation',
            {from: _username, toWho: toWho})
    }//this will have the server broadcast.emit 'accept'
    Y.U=Y.s=startUniverse = function(name){var guy
        $l('startUniverse with: '+  name)
        if( !window['uni'] ){$l('no uni  -- calling UNIVERSE()'); UNIVERSE() }
        else {$l('uni found. no need to call UNIVERSE')}
        guy = Y.g(  name )
        if( guy ){  $l('we have guy: ' + guy ) }
        else {
            $l('no guy'); Y.bN(name, function(mug){ $Bm( mug,  function( bm ){
                Y.A(name, bm) })})
        }
    }
    u= uv = uni = $St(1000, 800)
    uv.bgI('/beach.jpg')
    uv.mug(function(b){you = b.rC().XY(600).sXY(.4).dg()
        Y.GUYS.push({u :_username, b :you}) //b.$$( function(){ b.rm(); k.emit('X', _username)})
        d=$.d('b', 1000, 'auto')//.pp2( $('body') )
        d.A(
            $.br(3), $.ip('...', 'tx').id('textinput'),
            $.bt('send', function(){Y.bub( $('#textinput').V(), '+')}) )
        _.ev(.1, Y.u)
    })
    //  userHolder = $.d('z').a2( $.R().A() )
    $l('users:')
    n=0
    $.eG('users', function(u){window['u'+ String(n++) ] =  u
        $l(u.u)
        if(!u.mug ){   $l('no mugURL!') }
        else {$.i(u.mug ).WH(100).a2( d ).$(function(){$l(u.u); Y.iv( u.u ) })}
    })
    // fetchMugByMugId( user,  function(userMug){
    // theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )})
//RECIEVE speech bubble
}