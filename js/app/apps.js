INDEXX=function(){z()
    s= $.dragStage().bm('me',function(bm){b=bm
        SL(b)

        _.t(10,  function(){s.bm('guy',SL)  })
        s.ix(b, 3)
    })
}
CARD=function(){

    var t=100,d


    card=function(a,b){
        d = $.dA('y',300)//.cen()
        d.$$( function(){ d.rm() } )
        if( O(a) ){d.A( $.h3(a.u||'anon'), $.i(a.m||'me') )}
        else {d.A( $.h3(a||'anon'), $.i(b||'me') )}
        d.WH(200)
    }

    cards=function(){

        $.get('/users', function(u){_.e(u,function(u){
            $.P('/getImageById',  u.m, function(mug){
                d= $.dA('r','+').lt(t)
                d.A( $.h2( u.u ),  $.i( mug ).WH(200,300) )
                t+=20})})})}
}
CUTOUTS=function(){
    $.fm(); section1.A($.h4('click a pic to select it as your mug, or the x to delete it'))
    y = 80

    $.eJ('/img', function(img){var i
        i = $.i(img.d)
        i.WH(100,100)
        i.$(function(){$.po('/changeMug', {url: img.d}, function(){ i.selPic() })})

        $.dA('b',100, 100, '+').left(y).top(200).K('pic').A(
            i, $.btX('/img', img)
        )

        y += 220

    })

}
SELECTED=function(){z()
    st = $.dragStage()
    st.wBm('coin',  function(bm){
        coin=bm;
        SL(coin)
        selected(bm)

    })
    st.wBm('sun', function(bm){

        sun=bm;
        SL(bm)
        selected(bm)

    })
    TextAdder(st)
    st.wBm('me', function(bm){

        me=bitmap=bm
        SL(bm)
        bm.rgc('+')
        scaleShake(bm)
        //rotateShake(bm)
        selected(bm)
        st.wBm('flame', function(bm){ flame=bm; SL(bm);selected(bm) })
        st.wBm('guy', function(bm){ guy=bm;SL(bm); selected(bm) })

    })
    d= $.d('y', '+')
    loadImagesDiv=function() {
        d.E()
        $.eG('img', function (img) {
            d.A(
                $imageSizeFuncCan(
                    img.d, 1, function () {
                        st.wBm(img.d, function (bm) {
                            SL(bm.sxy(.4));
                            bm.rgc('+');
                            selected(bm)
                        })
                    })
            )})}
    loadImagesDiv()
    d= $.dA('y', 500).A(

        $.bt('freeze',  createjs.Tween.removeAllTweens ),
        $.bt('right', function(){ bm.x( bm.x() +10)  }),
        $.bt('left', function(){  bm.x( bm.x() -10)  }),
        $.bt('up', function(){    bm.y( bm.y() -10)  }),
        $.bt('down', function(){  bm.y( bm.y() +10)  }),
        $.br(),
        //fix
        $.bt('bigger', function(){   bm.sxy(1.1, '*') }),
        $.bt('smaller', function(){  bm.sxy(  .9,'*' )  }),
        //
        $.bt('wider',   function(){  bm.sx( bm.sx() * 1.1 )  }),
        $.bt('thinner', function(){  bm.sx( bm.sx() * .9 )  }),
        $.bt('taller',  function(){  bm.sy( bm.sy() *1.1 ) }),
        $.bt('shorter', function(){  bm.sy( bm.sy() *.9)  }), $.br(),
        $.bt('CW',  function(){  bm.rt(bm.rt() + 10) }),
        $.bt('CCW', function(){  bm.rt(bm.rt() -10)  }),
        $.br(),

        $.bt('get index', function(){

            pop('index: ' + st.ix(bm)  )

        }),


        $.bt('set index to 3', function(){

            st.ix(bm, 3)
            pop('index: ' +  st.ix(bm) )

        }),


        $.bt('z-up',  function(){

            st.ix(bm, st.ix(bm)+1)

        }),

        $.bt('z-down', function(){   st.ix(bm, st.ix(bm)-1) }),

        $.bt('remove', function(){

            st.rm(bm)

        }),
        $.bt('clone', function(){st.A($Ct().A( bm.ob.clone()))}), $.br(),
        $.bt('save', function(){
            st.sv(function(){loadImagesDiv()})
        }),
        $.bt('paint', function(){ stagePainter(st) }),
        $.bt('', function(){  })
    )







}
TRANSFORM = function () {
    $.fm()
    wMs(function (b, s) {
        st = s
        b.xy(0, 0)
        b.rgc('+')
        TR(b)
        wMb(function (b) {
            b.xy(50, 50).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(100, 100).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(200, 200).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(300, 300).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(400, 400).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(150, 150).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(250, 250).rgc('+');
            TR(b)
        }, s)
        wMb(function (b) {
            b.xy(350, 350).rgc('+');
            TR(b)
        }, s)
    }, '-')
    s1.A($.bt('rotate', function () {
            s.ch('-')
            wMb(
                function (b, s) {
                    s.M(50); //b=Do(bj(b))
                    RT(b.xy(400))
                    wMb(function (b) {
                            b.xy(300).al(.5)

                            RT(b, '-')
                        }
                        , s)
                    wMb(function (b) {
                            KK(b.xy(200).sxy(1.4), '+')
                        }
                        , s)
                    wMb(function (b) {
                            KK(b.xy(100).sxy(.6))
                        }
                        , s)
                }, s)
        }), $.br(2),
        $.bt('skew', function () {

            s.ch('-')

            wMb(function (b, s) {
                s.mg(function (b, s) {
                    SK(b.xy(300).rgc('+').sxy(1.5))
                    s.w(2000).h(2000)
                })
                //b.xy(500,400).rgc('+').sxy(1.5);RT(b);SK(b)
            }, s)
        }), $.br(2),
        $.bt('register', function () {

            s.remove()

            wMb(function (b, s) {
                TR(b);
                rg1(b);
                reggy(b)
            }, s)

            wMb(function (b, s) {
                TR(b);
                b.rgc();
                rg1(b);
                reggy(b)
            }, s)
        }),
        $.br(2))
}
SHOWCASE = function () {
    $.fm()
    s2.A(
        $.sp('pics!').id('pics')
    )
    s2.A(x = $.c('y', 500, 500))
    //x.q.cen()
    $.eG('img', function (v) {
        $.c().fit(v.d, 1)

        x.X()
        url$ = v.d
        x.fit(v.d)

        $('#pics').A(x)

    })
    s2.A(
        $.br(2), $.lb('caption'),
        cap$ = $.ip().W(500)
    )
    s1($.br(2), $.lb('category'),
        cat$ = $.ip().W(200), $.br(2),
        $.bt('post', function () {
            o = {t: cat$.V(), c: cap$.V(), du: url$}
            $.P('pst', o, function () {
                $.pop('posted')
            })
        }), $.br(2),

        $.bt('make a showcase', function () {
        }), $.br(2),
        $.bt('submit to ranky', function () {
        }), $.br(2)
    )

}


upload()


edit()

function edit(){

    EDIT=function(){

        st  = $St('z',400)

        ct =  $.Ct().A(d=$.d(), st.canvas)

        $.eJ('/img', function(i){


            c = d.Can('o',40,40)
            c.fit(i.d)
            c.$(function(){st.bm(i.d, function(bm){ bm.rC(200,200).TR() })})
            c.mar(20).C('r')
            d.A($.btX('/img', i, '-'))

        })


        $.$$(function(){ $.po('/img', {d: st.du()}, $.rl) })
        d.C('b').al(.6).W(400).H(100)
        d.ov('scroll').css('overlflow-y', 'auto')

    }



    EDIT0=function(){

        st = St(800)

        var imgHolder = $div()

        CT(   imgHolder,     st   ).o( '$$', sav(st, 'edit'))

        eaI(function( img ){

            imgHolder(

                $imageSizeFuncCan(

                    img.d,  1,   function(){
                        st.bm(   img.d,

                            function(bm){
                                //bm.rgc('+');
                                TR(bm);

                            },    '+'  ) }

                )
            )

        })

        return st}
    EDIT1=function(){

        st = St(800)

        var imgHolder = $div()

        container=  CT(   imgHolder,     st   )

        container.o( '$$', sav(st, 'edit'))

        eaI(function( img ){

            imgHolder.A(

                $.c('X',100, 100).fit(img.d).click(function(){


                    st.bm(   img.d,

                        function(bm){    bm.rCenter('+'); TR(bm)  }   ) })


            )

        })

        return st}
    PROPBOX=function(){

        var imagesDiv=$div()

        dA=$divA('y',200)(
            $span('prop box'),
            $hr(),
            $span('selected cutout:')

        )



        st = SuperStage(800)

        littleStage = SuperStage(80)

        dA(littleStage)

        CT(imagesDiv, st).o( '$$', sav(st, 'edit') )

        eaI(function(image){

            imagesDiv(

                xc(  image.d, 1,

                    function(){ st.bm(

                        image.d,

                        function(bm){

                            TR(bm)


                            ///hmmm only clicks once?
                            //does this relate to the draggable st problem?
                            bm.$(function(){
                                $l('new selection')
                                b=bm
                                littleStage.ch('-')
                                clone=Do( bm.ob.clone() )
                                littleStage.a( clone )

                                clone.xy(50).sxy(.1)
                            })


                        }



                        , '+' )}     )

            )})

        return st}

    AVATAR=function(){
        z()
        //the challenge here is to make the st draggable but still usable, by dragging it by a wrapper div
        //  s=St(400)
        st  = $.dragStage().t()
        //d = qq( st.ob.canvas )
        //d2=$div().drg().w(500).h(500).c('o')
        //CT(d, st).o('$$',  sav(st,'avatar') )
        st.$$(function(){st.snap('avatar')})
        d = $.d('x','+')
        $.Gj('img', function(i){ _.e(i, function(img){
            d.A($.c(100,100).A().fit(img.d).$(function(){ st.bm(img.d, TR, '+' ) }))
        })})
        //d2( st )
    }


//, dats: x.dats
    PAINT= function(){
        _paintColor='blue'
        _paintSize = 10
        canvas = $.c('r', 400, 400).A().P('a',100,50)
        st = canvas.stage.tick()
        shape = new createjs.Shape()
        st.mug(function(mug){
            mug.sXY(.4)
            st.A(shape)
        })
        graphics = shape.graphics
        graphics.beginStroke('black')//.beginFill('yellow') <- cool effect!!
            .setStrokeStyle(4)//.moveTo(10,10).lineTo(111,111)
        st.on('stagemousedown', function(e){
            graphics.beginStroke(_paintColor)
            st.on('stagemousemove', function(e){  graphics.lineTo(e.stageX, e.stageY) })
        })
        st.on('stagemouseup', function(){ st.removeAllEventListeners('stagemousemove')})
        div = $.dK('controls').a2($('body'))
        colorPicker = $(' <input   type="color">')
        div.A(colorPicker, $.sp(10), $.sp(20), $.sp(30))
        colorPicker.on('input', function () {$l('input ')
            _paintColor = $l(colorPicker.val())
            graphics.beginStroke(_paintColor)
        })
        $('.controls span').$$(function(){
            graphics.setStrokeStyle( parseInt($(this).T()) )
        })
    }
    EDITOR=function(){z()
        var r='#0FF',  size=2,oX=0,oY= 0,shape,
            st = $.dragStage(),
            imgHolder = $.d('y', '+')
        $.eG('img',function( i  ){
            imgHolder($.imgSizeFnCan(
                i.d, 1, function(){
                    st.bm( i.d, function(bm){
                        SL(bm.sxy(.4))}, '+')
                }))})
        TextAdder2(st)
    }

}


function upload(){

    $.fU= $.fileUpload =  function(lb, t){
        var fG =  $.d().K("form-group").A(
            $.lb(  D(lb) ? lb  : 'upload file',  'upl'  ).K('control-label').fS(20),
            $.ip().ty('file').id('upl').name('i')
        )
        if(t){
            fG.A(   $.p(t).K('help-block')   )}
        return fG
    }



    UPLOAD=function(){
        f =  $.f().attr({
            method:'post',
            enctype: 'multipart/form-data',
            action: '/pic'
        }).C('o').A($.fU(''),
            $.sm().val('ok').K("show"))
        $.pop(f, {title: 'upload a new pic'} ).dg()
    }

    UPLOADS=function(){

        $l('in uploads')
        $.fm()
        instr= 'You have uploaded these pics. Click to make a sprite, or hit the x to delete..'
        y = 80
        n=0
        $.eG('myPics',  function(p){
            $l('pic: ' + n++)

            $.picDiv(y).A($.pic(p), $.delBt('/pic', p))

            y+= 220
        })
        /*
         $.G('myPics',  function(p){_.e(p, function(p){

         $l('pic: ' + n++)
         $.picDiv(y).A($.pic(p), $.delBt('/pic', p))
         y+= 220
         })

         })*/

        s2.A($.h4(instr))
    }


    //<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>

}
