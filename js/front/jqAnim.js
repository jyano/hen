$.fn.st= $.fn.stop
$.fn.f2= $.fn.fadeTo
$.fn.bgImg= $.backgroundImage
$.fn.gFr= $.fn.getFrame
$.fn.sFr= $.fn.setFrame
$.fn.anFr= $.fn.animateFrames
$.fn.xq= $.fn.xQ= $.fn.clrQ= $.fn.clearQueue
$.fn.qu= $.fn.queue
$.fn.dq =   $.fn.dqu =$.fn.dequeue


ANob = {
    B:'bottom', L:'left', R:'right',T:'top',
    b: 'borderWidth', bb: 'borderBottomWidth',
    bl:'borderLeftWidth', br:'borderRightWidth',
    bt:'borderTopWidth', bs:'borderSpacing',
    C:'backgroundColor', f:'fontSize', h:'height', w:'width', H:'maxHeight', W:'maxWidth',
    mh:'minHeight', mw:'minWidth',
    i:  'textIndent', l:'letterSpacing', lh:' lineHeight',
    m:' margin', mb:'marginBottom', ml: 'marginLeft', mr: 'marginRight',
    mt: 'marginTop', o:' outlineWidth',
    p:' padding', pb: 'paddingBottom',
    pl: 'paddingLeft', pr: 'paddingRight', pt: 'paddingTop',
    ws:' wordSpacing', x: 'backgroundPositionX', y: 'backgroundPositionY'

}



$.fn.an= $.fn.a= function(a,b,c,d){var g=G(arguments), o
    o=g.f

    var q=this
    if(O(a)){
        if(a.c){a.color = oO('c', a.c)}
        if(a.C){a.backgroundColor = oO('c', a.C)}
    }
    q.animate(a,b,c,d)
    return q


    if(o.C){//$l(o.C+'-->');
        o.C = oO('c', o.C);
        //$l(o.C)
    }
    _.e(o, function(v,k){
        if(ANob[k]){o[ANob[k]]=v}
    })
    if(N(g.s)){ g.s *= 1000 }
    _p=o
    this.an(o, g.s,g.t,g[3],g[4])
    return this

    $.an=$.j=function(){var bd= $.bd(); return  bd.j.apply(bd, G(arguments))}

}
anim=function(o){o=o||{}
    alert('anim')
    return {u:o.u||'chicks', n:o.n||1, w:o.w||64, r:o.r||60, c:o.c||0, l:o.l||false}
}
an=function(q,a){
    alert('an')
    if(q.han){_.xI(q.han)}
    if(a.u){ q.bi(a.u) }
    if(a.n>1){q.han = _.sI(function(){a.c++
        if(!a.l && a.c>a.n ){_.xI(q.han);q.han=false}
        else { a.c %= a.n }
        q.sFr(a)}, a.r)}
}
$.aF= $.anFr=$.anf=function (n,w){
    var c=0; n=n||10; w=w||20;
    $.ev(function(){
        q.sFr(c,w)
        c=(c+1) % n })}
$.notAn=function(a){ // sel
    return a.filter(':not(:animated)')
}



QUU=function(){$.x('x', 'quu')


    //  Qu   allow series fns to be execd asynch on an el
    //  .slideUp, .slideDown, .fadeIn, and .fadeOut all use .an()
    //
    // which levgs qus to build up   series of steps
    // that will transtn  1+ CSS vals thru/out the dur
    //  can pass a cb fn to  .an()  to exec on done

    x= $('.x')


    x.an({height: 20}, "slow",
        function(){$("#title").html( "in cb")})
    //   *Ques As Cbs
    // Instead of passing a cb as an argument,
    // we can add another function to the queue
    // that will act as our cb
    // This will execute
    // after all of the steps in the
    // anim  have completed.

    x.an(
        {height: 20},
        "slow").qu( function() {
            $("#title").h("in anim")
            $(this).dq()})
        //  tells jQ  to continto N-item in  que

        //    queued fn will exec   after the anim
        //  jQuery does not have any insight into
        // how the queue items function,
        // so we need to call .dequeue(),
        // which tells jQuery when to move to the n item in the queue.

        //  Another way of dequeuing
        // is by calling the fn that is passed to your cb
        // That fn will auto  call .dq() for you

        .qu( function( n ) {$l( "I fired!" );n()})
    //  *Custom Queues
    // Up to this point all of our anim
    // and qu   ex  have been using the def qu  n  which is fx.
    // Elements can have multiple queues
    // attached to them,
    // and we can give each of these qusa dif  name.
    // We can specify a custom queue name as
    // the 1st arg  to the .qu() method.


    x.qu( 'an', function(n){
        $l( "Step 1" );n()} ).qu( 'an', function(n) {
        $l( "Step 2" );n()}).dq( 'an' );
    //  Notice that we have to call the .dequeue() method passing it the name of our custom queue to start the execution. Every queue except for the default, fx, has to be manually kicked off by calling .dequeue() and passing it the name of the queue.

    //   Clearing The Que
    //  Since queues are just a set of ordered operations, our application may have some logic in place that needs to prevent the remaining queue entries from executing. We can do this by calling the .clearQueue() method, which will empty the queue.


    x.qu( 'an', function(n){$l("nev log (qu clrd)");n()})
        .clrQ('an').dq('an')


    //   In this example, nothing will happen as we removed everything from the steps queue.

    //   Another way of clearing the queue is to call .stop( true ). That will stop the currently running animations and will clear the queue.


    //  *Replacing The Queue:  When you pass an array of functions as second argument to .queue(), that array will replace the queue.



    x.qu(
        'an',

        function(n){$l("nev fire (qu replaced)"); n()})

        .qu(

        'an',[
            function(n){$l("fired!");n()}
        ]).dq('an')


    //
    // You can also call .queue() without passing it functions, which will return the queue of that element as an array.

    x.qu('an',function(n){$l("fired!");n()})

    $l(x.qu('an'))

    x.du('an')

}
COLANIM=function() {$.x()
    $CSS({$el:
    {C:'#aaa', c:'#006', fz:25, ta: 'center', pad:'1em'}
    })
    $.d(['color anims']).id('el')
    $.bt('anim cols').id('tog')
    $('#tog').$(function(){ $("#el").an({ c:'g', C:"rgb(20,20,20)" })})


    /*
     Color Animation
     jQuery UI effects core adds the ability to animate color properties using rgb(), rgba(), hex values, or even color names such as "aqua". Simply include the jQuery UI effects core file and .animate() will gain support for colors.

     The following properties are supported:

     backgroundColor
     borderBottomColor
     borderLeftColor
     borderRightColor
     borderTopColor
     color
     columnRuleColor
     outlineColor
     textDecorationColor
     textEmphasisColor
     Support for color animation comes from the jQuery Color plugin. The Color plugin provides several functions for working with colors. For full documentation, please see the jQuery Color documentation.

     Class Animations
     While there are use cases for directly animating individual color properties, it is often a better approach to contain the styles in a class. jQuery UI provides a few methods which will animate the addition or removal of a CSS class, specifically .addClass(), .removeClass(), .toggleClass(), and .switchClass(). These methods will automatically determine which properties need to change and apply the appropriate animations.

     link
     */
}
ANF=function(){z()

    a = $.dA().bgI('chicks').anf()
    anim = function (o) {o = o || {};
        return {
            u: o.u||'chicks',
            n: o.n||1,w:o.w||64,r:o.r||60,c:o.c||0,l:o.l||false}}
    an = function (q, a) {
        if (q.han){_.cI(q.han)}
        if (a.u){q.bi(a.u)}
        if (a.n>1){
            q.han = _.sI(function () {
                a.c++;
                if (!a.l && a.c>a.n) {_.cI(q.han);  q.han=false}
                else {a.c %= a.n}
                q.sFr(a)}, a.r)}}}
NOTANIM=function(){$.x()
    var s = 1000, m = function (n) {return {marginLeft: n}},
        n = 0;
    d = $.d().id('test').A().A(y = $.can('x', 40).K('box'));
    d2 = $.d().id('debug');
    $('#test').$(function () {
        $.notAn($('.box')).an({marginLeft: -10}, s,
            function () {$('#debug').A($.p('start..' + n++))})
            .an({marginLeft: 10}, s)
            .an({marginLeft: -10}, s)
            .an({marginLeft: 10}, s)
            .an({marginLeft: -10}, s)
            .an({marginLeft: -10}, s)
            .an({marginLeft: 0}, s,
            function () {$('#debug').A($.p('fin'))
            })})
}
HVBX=function(){$.x()

    $.hvBx= $.hoverBox = function(){z()
        d = $.d('o', 500,500, '+').id('test')
        y = $.c('p', 400).K('box').hd()
        d.A(y)
        $('#test').hv(function(){$('.box').st().f2(200,1)},
            function(){$('.box').stop().f2(200,0)})
    }

    $.hvBx()
}
ANL=function() {
    $.fn.anL = function () {
        var q = this
        this.sh("slow")
        this.an({"marginLeft": "300px"}, 2000)
            .an({"marginLeft": "0px"}, 2000)
        this.hd("slow", function () {
            q.anL()
        })
    }

    $.d('b', 100,300).anL()
}
FLASH=function(){z()


    timeline = $.divA().WH('auto').drag()

    timeline.A(
        $.canvas('blue', 500, 500),
        $.br()
    )

    _.times(24, function(x){

        timeline.A(

            $.div('red', 100, 100).css({display:'inline-block'}).H((x*10) +100)

        )

    })





}
COOLSEL=function() {$.x()
    // rather than worry about synchronization between each panel
    //we will take last li in ul.k(panels) and position it to top right
    //of ul - this way,  when he sum width of all the panels occasionally
    //adds to greater than 100 percent of the ul as they animate..
    //the last li never breaks to the next line
    $.coolSelector = function () {


        var s = 200
        d = $.dK('container').A(
            $.dK('panels').A($.sp('1'), $.sp('2'), $.sp('3'), $.sp('4'), $.sp('5')),
            $.dK('panels').A($.sp('A'), $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
        ).A()
        $('span').css({width: '100px', fontSize: '40px'})
        if ($('div.panels').length) {
            $('div.panels span:last-child').K('last')
            $('div.panels span').hv(
                function () {
                    $(this).st().an({width: '110px', fontSize: '50px'}, s)
                        .sib('span').st().an({width: '90px', fontSize: '30px'})
                },
                function () {
                    $(this).st().an({width: '90px', fontSize: '30px'})
                })
        }

    }

    $.coolSelector()

}
NOTAN=function(){$.x()
    var s=1000,
        m=function(n){return {marginLeft:n}},
        n=0
    d = $.dI('test').A(y=$.c('x', 40).K('box'))
    d2 = $.dI('debug')
    $('#test').$(function(){
        notAnim($('.box')).an({marginLeft:-10}, s,
            function(){$('#debug').A($.p('start..'+n++))})
            .an({marginLeft:10},s).an({marginLeft:-10},s)
            .an({marginLeft:10},s).an({marginLeft:-10},s)
            .an({marginLeft:-10},s).an({marginLeft:0},s,
            function(){$('#debug').A( $.p('fin') )})})
}

JQANIMZ=function(){$.x('s','jqanim')


    /*
    setBackgroundImage = q.bi = function(url){//set background image
        var toUrl =function(url){
            return 'url("'+ src(url) +'")'}
        q.backgroundImage(toUrl(url))
        return q}

    bp=q.positionBackgroundImage=function(x,y){
        var g=G(arguments),x=g[0],y=g[1]
        x=N(x)?x:0
        y=N(y)?y:0
        q.css({backgroundPos:x+'px '+y+'px'})
        return q}
    fr=q.stFr=function(n,w){
        if(O(n)){q.bp(n.n,n.w)}
        else{q.bp(n*w)}
        return q}

    anf= q.anFr=function(n,w){var c=0; n=n||10; w=w||20
        $.ev(function(){ q.sFr(c,w);  c=(c+1)%n })}

    a= $.dA().bgImg('chicks').anf()

*/
}
LETTERING=function(){z()

    LETTERINGPLUG = function(){
        function injector(t, splitter, klass, after) {
            var text = t.text()
                , a = text.split(splitter)
                , inject = '';
            if (a.length) {
                $(a).each(function(i, item) {
                    inject += '<span class="'+klass+(i+1)+'" aria-hidden="true">'+item+'</span>'+after;
                });
                t.attr('aria-label',text)
                    .empty()
                    .append(inject)

            }
        }
        var methods = {
            init : function() {

                return this.each(function() {
                    injector($(this), '', 'char', '');
                });

            },

            words : function() {

                return this.each(function() {
                    injector($(this), ' ', 'word', ' ');
                });

            },

            lines : function() {

                return this.each(function() {
                    var r = "eefec303079ad17405c889e092e105b0";
                    // Because it's hard to split a <br/> tag consistently across browsers,
                    // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                    // (of the word "split").  If you're trying to use this plugin on that
                    // md5 hash string, it will fail because you're being ridiculous.
                    injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
                });

            }
        };
        $.fn.lettering = function( method ) {
            // Method calling logic
            if ( method && methods[method] ) {
                return methods[ method ].apply( this, [].slice.call( arguments, 1 ));
            } else if ( method === 'letters' || ! method ) {
                return methods.init.apply( this, [].slice.call( arguments, 0 ) ); // always pass an array
            }
            $.error( 'Method ' +  method + ' does not exist on jQuery.lettering' );
            return this;
        };
    }; LETTERINGPLUG()

    span = $.span( 'hello' ).A()
    span.lettering() // wrap <span class="charx"/ > around each character within header
    $spans = span.find( 'span' )
    $('.dropped span').css({transition: 'all 0.3s ease-in'})


}
FALLING=function(){z()
    //this goes in css

    $header2 = $.span('hello').A()

    $header2.lettering() // wrap <span class="charx"/ > around each character within header

    $spans = $header2.find('span')

    delay = 0

    $header2.on('click', function(){


        $spans.each(function(){
            $(this).css({transitionDelay: delay+'s'}) // apply sequential trans delay to each character

            delay += 0.1
        })


        $header2.K('dropped') // Add "dropped" class to header to apply transition

        setTimeout(function(){ // reset header code

            $spans.each(

                function(){

                    $(this).css({
                        transitionDelay: '0ms'
                    })

                })



            // set transition delay to 0 so when 'dropped' class is removed,
            // letter appears instantly

            $header2.removeClass('dropped') // remove class at the "end" to reset header.

            delay = 0

        }, 1800) // 1800 is just rough estimate of time transition will finish, not the best way

    })

}


BORDERS1=function(){

    change=function(){

        $.img('me').WH(100).A().C( 'g' ) .bs( '-' )  //bs??

            .j({bt:40},1000)

            .j({bb:40},1000)
            .j({bl:40},1000)
            .j({br:40}, 1000)
            .j({gt:40}, 1000)
            .j({gb:40}, 1000)
            .j({gl:40},1000).j({gr:40},1000).j({mt:40},1000)
            .j({mb:40},1000).j({ml:40},1000).j({mr:40},1000)
            .j({mt:0},1000).j({mb:0},1000).j({ml:0},1000).j({mr:0},1000)
            .j({gt:0},1000).j({gb:0},1000).j({gl:0},1000).j({gr:0},1000)
            .j({bt:0},1000)
            .j({bb:0},1000).j({bl:0},1000).j({br:0},1000)
    };


    m$$(   function(){  z();   _.t(10, change)}  );

    _.t(10, change)
}
BORDERS=function(){z();


    change=function(){ var img

        img =  $.qim('me', 100).A()

        img.bC('g').bS('dashed') //.bW(20)

            .J({"border-top-width": 10}, 1000)
            .J({"border-bottom-width": 10}, 1000)
            .J({"border-left-width": 10}, 1000)
            .J({"border-right-width": 10}, 1000)
            .J({"padding-top":10}, 1000)
            .J({"padding-bottom":10}, 1000)
            .J({"padding-left":10},1000)
            .J({"padding-right":10},1000)
            .J({"margin-top":10},1000)
            .J({"margin-bottom":10},1000)
            .J({"margin-left":10},1000)
            .J({"margin-right":10},1000)
            .J({"margin-top":0},1000)
            .J({"margin-bottom":0},1000)
            .J({"margin-left":0},1000)
            .J({"margin-right":0},1000)
            .J({"padding-top":0},1000)
            .J({"padding-bottom":0},1000)
            .J({"padding-left":0},1000)
            .J({"padding-right":0},1000)
            .J({"border-top-width":0},1000)
            .J({"border-bottom-width":0},1000)
            .J({"border-left-width":0},1000)
            .J({"border-right-width":0},1000)
    }
    $.$$( function(){
        z();
        _.t(10, change)} )
    _.t(10, change)
}
COOLSEL = function () {$.x()
    // rather than worry about synchronization between each panel
    //we will take last li in ul.k(panels) and position it to top right
    //of ul - this way,  when he sum width of all the panels occasionally
    //adds to greater than 100 percent of the ul as they animate..
    //the last li never breaks to the next line
    var s = 200;
    d = $.dK('container').A(
        $.dK('panels').A($.sp('1'),
            $.sp('2'), $.sp('3'), $.sp('4'),
            $.sp('5')),
        $.dK('panels').A($.sp('A'),
            $.sp('B'), $.sp('C'), $.sp('D'), $.sp('E'))
    );
    $('span').css({width: '100px', fontSize: '40px'});
    if ($('div.panels').length) {
        $('div.panels span:last-child').K('last');
        $('div.panels span').hover(
            function () {
                $(this).stop().animate({width: '110px', fontSize: '50px'}, s)
                    .siblings('span').stop().animate({width: '90px', fontSize: '30px'})},
            function () {
                $(this).stop().animate({width: '90px', fontSize: '30px'})
            })
    }
}
HOVERBOX = function () {z();
    d = $.d('o', 500, 500, '+').id('test')
    y = $.c('p', 400).K('box').hd();
    d.A(y);
    $('#test').hover(function () {
        $('.box').stop().fadeTo(200, 1)
    }, function () {
        $('.box').stop().fadeTo(200, 0)
    })
}
LETTERING=function(){$.x()

    sp = $.sp('hello').A()
    sp.lettering(); // wrap <span class="charx"/ > around each character within header
    $spans = sp.fi('span')
    $('.dropped span')
        .css({

            transition: 'all 0.3s ease-in'
        })


}
FALLING=function(){
    z();
    //this goes in css
    $header2 = $.sp('hello').A();
    $header2.lettering(); // wrap <span class="charx"/ > around each character within header
    $spans = $header2.fi('span');
    delay = 0;
    $header2.$( function () {
        $spans.e(function () {
            $(this).css({transitionDelay: delay + 's'}); // apply sequential trans delay to each character
            delay += 0.1
        });
        $header2.K('dropped'); // Add "dropped" class to header to apply transition
        setTimeout(function () { // reset header code
            $spans.e(function () {
                $(this).css({transitionDelay: '0ms'})
            });
            // set transition delay to 0 so when 'dropped' class is removed,
            // letter appears instantly
            $header2.removeClass('dropped'); // remove class at the "end" to reset header.
            delay = 0
        }, 1800); // 1800 is just rough estimate of time transition will finish, not the best way
    })

}
TXPLUG=function(){ z();
    d = $.d('r',100 ).A( 'abc' );
    e = $.d(  100 ).col( 'r' ).A( 'abc' );
    f = $.d('r', 100 ).col( 'b' ).A( 'abc' );
    g = $.d( 'b' , 500 , 500 )  }
FRIDGEMAG=function(){
    z();
    word = $.word;
    w = word('hello', 'b', 'g');
    word('sicko', 'g', 'b');
    word('why, i oughta..', 'p', 'x');
    word('it was raining..', 'j', 'k');
    word('who ya gonna call?', 'h', 'i');
    word('dag nabit!', 'f', 'g');
    word('i like', 'd', 'e');
    word('tomorrow', 'a', 'c');
    word('me', 'r', 'b')
}
TXCAN=function(){z();
    c = $.c('o', 500, 500);
    //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()
    // c.roundRect(100,50,100,100,50).stroke()//.fill()
    //c.line(10,10,50,500).stroke()
    c.line([
        [[100, 100], [200, 200], [140, 900]]
        // ,  [[150,150],[250,250], [20,300]]
    ]).stroke();
    //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
    //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
}
FLASH=function(){z();
    timeline = $.dA('+').WH('auto');
    timeline.A($.c('b', 500, 500), $.br());
    _.t(24, function (x) {timeline.A(
        $.d('r', 100, 100).css({display: 'inline-block'}).H((x * 10) + 100)
    )
    })}

