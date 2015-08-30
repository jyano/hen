
MATRIX1=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')


    stage = St()

    $.d('b', 50, 50).A()

    //stage = s = cjs.stage(1600,1000).tick().A()

    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    st.on('e', co)

    //make a container
    st.ct(function(c, s){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..

        c.bm('me',
            function(b){
                b.sXY(.2).XY(100,80)
                b.on(click, function(){$l('lit')},'/')  //on click, log('lit'), just once (remove listener)!

            })





// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click

        c.bm('me',function(bm){
            bm.sXY(.4).XY(100,180)
            bm.$( function(){$l('mid')}, '-')  //on click, log('mid'), and stop prop
        })

        c.bm('me',function(bm){
            bm.sXY(1.5)
            bm.on('click',function(){$l('big')})  //on click, log('big')
        })    //on click, log('con')
        c.on('click',  function(){$l('con')})
    })


    st.ct(   function(ct){c=ct
            var vn=0, rvn=0, on=0, ron=0

            ct.X(200)

            ct.mug(function(b){b.sXY(.8).XY(200,80)})
            ct.mug(function(b){b.sXY(.8).XY(100,280)})
            ct.mg(function(b){b.sXY(.8).XY(340,180)})

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'
            ct.on('mouseover',function(){c.X(10,'+');$l('v: '+vn++)})
            ct.on('rollover',function(){c.X(20,'-');$l('rv: '+rvn++)})
            ct.on('mouseout',function(){c.Y(10,'+');$l('o: '+on++)})
            ct.on('rollout',function(){c.Y(20,'-');$l('ro: '+ron++)})
        }
    ).MV(40)


    st.ct(function(ct, st){

        ct.X(700)
        ct.mug(function(bm){bm.sXY(.8).XY(200,80)})
        ct.mug(function(bm){bm.sXY(.8).XY(100,280)})
        ct.mug(function(bm){bm.sXY(.8).XY(340,180)})

        //this example shows which sprites are acted upon with over/rollover
        //over only affects one
        //rollover affects ALL
        //if you enter a sprite from outside, they all grow (via rollover),
        //and the one sprite grows double (via over)

        ct.on('mouseover',function(){$l('mouseover'); this.sXY(.01,'+') })
        ct.on('rollover',function(){$l('rv'); this.sXY(.01,'+')})
        ct.on('mouseout',function(){ })
        ct.on('rollout',function(){ })

        // in summary,
        // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
        // BUT, they will all recieve events separately

    }).MV(40) //??? mouse events? speed for some mouse checking thing
    st.ct(function(ct,st){
        ct.x = 1400
        ct.bm('me',function(bm){
            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit = bm.sXY(.2).XY(100,80)
            SL(bm, ct)
            ctr.bm('me',function(bm){
//big me will scale the little me
                big = bm.sXY(2).XY(100,180)
                SC(bm, lit)
                ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180).SL(); RT(bm, big)})})
        })

//guy slides stage
        ct.bm('guy',function(bm){bm.sXY(.4).XY(100,180); SL(bm, st)})
    })




}
MATRIX0=function(){ z(); $l('matrix')

    st = stage = $St(1600,1000)

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    $.d('b', 50, 50).A()


    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    st.on('mouseenter', function(){$('body').C($r())})

    st.A( ct=container=c= $Ct()  )

    ct.bm('me',  function(bm){
        //b.sxy(.2).xy(100,80)

        //b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!

    })



    //make a container
    st.ct(function(c, s){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..



// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        ct.bm('me',function(b){
            b.sXY(.4).XY(100,180)
            //b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop
        })


        ct.b('me',function(b){
            b.sXY(1.5)
            // b.o('$',fL('big'))  //on click, log('big')

        })

        //on click, log('con')
        //c.o('$',  fL('con'))

    })

    st.ct(  function(c){

        var vn=0,
            rvn=0,
            on=0,
            ron=0


        c.X(200)


        c.mug(
            function(b){
                b.sXY(.8).XY(200,80)
            })


        c.mug(
            function(b){
                b.sXY(.8).XY(100,280)
            })


        c.mg(
            function(b){
                b.sXY(.8).XY(340,180)
            })

        //this shows over/out vs rollover/rollout
        //over/out get retriggered when switching between connected sprites
        //rollover/rollout does not because it is still touching 'something'

        // c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
        //c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
        // c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
        //  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})

    }  )//.MV(40)

    st.ct(function(c,s){

        c.x(700)
        c.mg(function(b){b.sxy(.8).xy(200,80)})
        c.mg(function(b){b.sxy(.8).xy(100,280)})
        c.mg(function(b){b.sxy(.8).xy(340,180)})

        //this example shows which sprites are acted upon with over/rollover
        //over only affects one
        //rollover affects ALL
        //if you enter a sprite from outside, they all grow (via rollover),
        //and the one sprite grows double (via over)



        c.o('v',function(g,e){
            $l('v')
            g.sxy(.01,'+')})

        c.o('rv',function(g,e){
            $l('rv')
            g.sxy(.01,'+')})

        c.o('o',function(q,e,g){ })
        c.o('ro',function(q,e,g){ })


        // in summary,
        // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
        // BUT, they will all recieve events separately

    }).MV(40)

    st.ct(function(ct,st){

        ct.X(1400)

        ct.bm('me',function(bm){

            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit=bm.sXY(.2).XY(100,80)
            SL(bm,ct)


            ct.bm('me',function(bm){
//big me will scale the little me
                big=bm.sXY(2).XY(100,180)

                SC(bm,lit)

                ct.bm('me',function(bm){ bm.sXY(.6).XY(150,180)
                    SL(bm)
                    RT(bm, big) })
            })

        })


//guy slides stage
        ct.bm('guy',function(bm){
            bm.sXY(.4).XY(100,180)
            SL(bm, stage)
        })



    })




}
MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    z()

    $l('matrix')


    st=stage=s=$St(1600,1000).A().tick()


    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    st.on('mouseenter', function(){$('body').C($r())})

    st.A( ct=container=c=new createjs.Container()  )

    ct.bm('me',  function(bm){

        bm.sXY(.2).XY(100,80)
        bm.on('click', function(){
            $l('lit')}, this, true) //just once

    })

    //make a container
    st.ct(function(ct, st){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..

// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        ct.bm('me',function(bm){  //future: c.bm('me', .4, function(bm){})
            bm.sXY(.4).XY(100,180)
            bm.on('click', function(e){$l('mid')
                e.stopPropagation()})
        })

        ct.bm('me',function(bm){
            bm.sXY(1.5)
                .on('click',function(){$l('big')})
        })

        ct.on('click', function(){$l('con')})

    })



}