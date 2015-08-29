Y = window['Y'] || {}; Yano = {}; STATE=function(){} //$w = window; $$w = $(window)
$.sec = function (f) {
    return setTimeout(f, 1000)
}
$.do = function (func) {
    setTimeout(func, 0);
    return 'nada'
}
$.T = function (a, b) {
    return setTimeout(_v(a), b)
}
$.dateTime = $.date = dateTime = dt = function (a) {
    var d = new Date(a);
    d.y = d.getFullYear;
    d.d = d.getDate;
    d.D = d.getDay;
    d.M = d.getMinutes;
    d.m = d.getMonth;
    d.date = function () {
        return d.d() + '/' + d.m() + '/' + d.y()
    };
    d.time = function () {
        return d.h() + ':' + d.M()
    };
    d.dt = function () {
        return d.date() + ' ' + d.time()
    };
    d.ms = d.getMilliseconds;
    d.h = d.getUTCHours;
    d.s = d.getSeconds;
    //d.tm= d.getTime
    //d.gto= d.getTimezoneOffset
    d.udt = d.getUTCDate;
    d.gud = d.getUTCDay;
    d.ufy = d.getUTCFullYear;
    d.gh = d.getHours;
    d.gms = d.getUTCMilliseconds;
    d.um = d.getUTCMinutes;
    d.um = d.getUTCMonth;
    d.us = d.getUTCSeconds;
    return d
}
$.dateAndTime = dtt = function (a) {
    var datetime = new Date(a);
    return datetime.date() + ' ' + datetime.time()
}
tests()
function tests() {
    testMove = function () {
        z()
        d = $.d('b', 100, 100, '+')

        f = function (num) {
            d.toR(num)
        }
        setInterval(f, 100)
    }
    testMoveAndWarp = function () {
        z()
        d = $.d('b', 100, 100, '+')
        f = function (num) {
            d.toR(num)
        }
        setInterval(f, 100)
    }
    testInputKeys = function () {
        z()
        input = $.ip().A()
        $.sp('span ').C('y').A().id('spn')
        input.on('keypress', function (e) {
            $('#spn').text(
                $('#spn').text() + e.which
            )
        }).on('keyup', function (e) {
            if (e.which == 13) {
                $l('enter')
                $('body').C('*')
            }
        })
            .on('keydown', function (e) {
                var key = e.which, //why these nums?
                    result = (key > 48 && key < 57) || ( key > 96 && key < 105) || (key == 8)
                $l('result: ' + result)
            })
    }
    testInputUpOrDown = function () {
        $.input().A()
        onTextInputKeyup(function (e) {

            var dir = (parseInt(e.which) == 38) ? 'up'
                : (parseInt(e.which) == 40) ? 'down'
                : 'neither'

            $l(dir)
        })
        function onTextInputKeyup(func) {
            return $('input[type=text]').on('keyup', func)
        }
    }
    testUpperVsLowerLetters = function () {
        z()

        i = $.input().A()

        i.on('keydown keypress',
            function (e) {
                $l(e.type + ':' + String.fromCharCode(e.which) + '(' + e.which + ')')
            })
    }//cool!
    responsiveBottomPanel = function () {
        z()
        $.div('red').P('f').X(0).css({
            bottom: 0,
            width: '50%', height: '50%',
            'min-width': 110,
            'max-width': 318,
            opacity: 4
        }).A().A(
            $.img('me'))
        // call and then play with browser size
    }
}
function beta(){
    scr=function(a){var s=screen
        if(a){return {w:s.width,       h:s.height,
            aw:s.availWidth,  ah:s.availHeight,
            at:s.availTop,    al:s.availLeft}}
        var o={w:W(),h:H()}
        o.c=o.w+', '+o.h,o.t='screen size: '+ o.c

        return o} // jQuery('form').serializeJSON()
    letteringPlug = function () {
        var methods = {
            init: function () {
                return this.each(function () {
                    injector($(this), '', 'char', '')
                })
            },
            words: function () {
                return this.each(function () {
                    injector($(this), ' ', 'word', ' ')
                })
            },
            lines: function () {
                return this.each(function () {
                    var r = "eefec303079ad17405c889e092e105b0" // Because it's hard to split a <br/> tag consistently across browsers,
                    // (*ahem* IE *ahem*), we replace all <br/> instances with an md5 hash
                    // (of the word "split").  If you're trying to use this plugin on that
                    // md5 hash string, it will fail because you're being ridiculous.
                    injector($(this).children("br").replaceWith(r).end(), r, 'line', '')
                })
            }
        }
        $.fn.lettering = function (method) {
            if (method && methods[method]) {
                return methods[method].apply(this, [].slice.call(arguments, 1))
            }
            else if (method === 'letters' || !method) {
                return methods.init.apply(this, [].slice.call(arguments, 0))
            } // always pass an array
            $.error('Method ' + method + ' does not exist on jQuery.lettering');
            return this
        }
        function injector(t, splitter, klass, after) {
            var text = t.text(), a = text.split(splitter), inject = '';
            if (a.length) {
                $(a).each(function (i, item) {
                    inject += '<span class="' + klass + (i + 1) + '" aria-hidden="true">' + item + '</span>' + after;
                })
                t.attr('aria-label', text).empty().append(inject)
            }
        }
    };
    letteringPlug()
    $.tree = function () {
        $.x();
        var s = 200;
        d = $.dK('container')($.p().K('tree_controls')(
            $.a('expand all').K('expand_all'),
            $.a('collapse all').K('collapse_all')))
        quas = "<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>";
        ter = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>" + quas + "</ul></li>";
        sec = "<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec" + ter + "</ul></li>";
        pri = "<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>" + sec + "</ul></li></ul>";
        q = $(pri);
        //d(q)
        if (_.size($('ul.tree'))) {

            $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function () {

                if ($(this).hasClass('expand_all')) {
                    $l('ex_all');
                    $(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded');
                    return false
                }

                else {
                    $l('!ex_all');

                    $(this).parent('p').next('ul').find('a.tree_trigger')

                        .removeClass('trigger_expanded').end()

                        .find('ul').removeClass('tree_expanded')
                }

                this.blur();
                return false

            });


            $(document).on('click', function () {
                if ($(this).hasClass('tree_trigger')) {
                    if ($(this).next('ul').is(':hidden')) {
                        $(this).K('trigger_expanded').next('ul').K('tree_expanded')
                    }
                    else {
                        $(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')
                    }
                    this.blur();
                    return false
                }
            });


            $('ul.tree li:last-child').K('last');

            $('ul.tree_expanded').prev('a').K('trigger_expanded')

        }
    }
    other=function(){
        wQ=function(){
            Qx=function Q(a){
                if(!_.isObject(a)){return}
                if(s$(a.toString()).contains('Window')||a[0]
                    && s$( a[0].toString()).contains('Window')){
                    return $(window)}
                return a.name === 'q'? Q(a.q)
                    :E(a)? $(E(a))
                    :0
            }
            dom=function(){

                //outerH
                H=function(a){var oH=function(a){
                    if(O(a=a||$(window))){return Q(a).outerHeight()}}
                    a=a||$(window);return N(a)? W()/a:oH(Q(a))
                }
//innerWidth
                iW = function(a){if(O(a=a||$$w)){return Q(a).innerWidth()}}
//innerHeight
                iH = function(a){
                    if(O(a=a||$$w)){
                        return Q(a).innerHeight()
                    }
                }
                //_.tg=function(a){O(a)?(a.target? a.target: Q(a)[0]) :a}
                Wx=function(a){var g=G(arguments),
                    oW=function(a){
                        if(O(a=a||$(window))){return Q(a).outerWidth()
                        }}
                    return N(a)? W()/a: oW(Q(a))
                }


            };dom()

        };wQ()
        qx = function(a){return xx(qi(a))}
        qiv=function(a){return qi(a).v()}
        Yano.func = function(){$('body').C('*')}
        Yano.interval = 1000
        Yano.intervalID = null
        Yano.toggleFunc = function self(func, interval){
            //when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on

            var args = G(arguments),
                func = args[0],
                interval = args[1]


            if(Yano.intervalID){if(args.P){
                clearInterval(Yano.intervalID)
                Yano.intervalID=null
            }}
            else{
                if(args.N){
                    Yano.intervalID = setInterval(Yano.func, Yano.interval)
                }}
        } //rat
        Yano.setToggleFunc = function (func, interval){

            if(func){Yano.intervalFunc = func}
            if(interval){Yano.interval =  interval}

            Yano.setIntervalID = setInterval(Yano.intervalFunc,  Yano.interval)
            return Yano.toggleFunc
        }
        ddd=function(){return (d= $.d().C('y').Z().a())}
        ccc=function(){return (c=$b($c()).dg())}
        $.fA=function(a){return function(){alert(a)}}
        $.fL=function(a){return function(){$l(a)}}
    }


}
function old() {

//to lowercase, ??
//lC=function(a){return S(a)? a.toLowerCase() :A(a)? _m(a,function(a){return lC(a)}):a }
//is lowercase
//Lc=function(a){if(_.isString(a)){return s$(a).isLower()}}
    G1 = function (a) {
        //if(!_.isArguments(a)){return}
        var p, n, m, d
        a = _.toArray(a)
        if (_.last(a) === '+') {
            p = a.pop()
        }
        if (_.last(a) === '-') {
            n = a.pop()
        }
        if (_.last(a) === '*') {
            m = a.pop()
        }
        if (_.last(a) === '/') {
            d = a.pop()
        }

        return D(a, {

            z: a.length,
            f: _.first(a),
            l: _.last(a),
            r: _.rest(a),
            i: _.initial(a),
            p: p,
            P: !p,
            m: m,
            M: !m,
            d: d,
            D: !d,
            n: n,
            N: !n

        })
    }

    /* S1=function(a,b,c){
     return _.isUndefined(b)? (_.isString(a)? $.span().html(a):0  )
     :N(b)? a.substr(b,c)
     :S(b)? s$(a).startsWith(b)
     :_.some(a, b||F,c)
     }
     */
//  nN=function(w){return Boolean(Number(w))}//M=
//  Nn = _.isNan

    //xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}

}
old=function(){



    QMET={a:"after",A:'add',ab:'addBack',
        at:"appendTo",ap:"append",ac:"addClass",
        ar:"removeAttr",b:"before",
        cr:"removeClass",C:'contents',cl:"clone",
        d:"detach",e:"empty",F:'first',
        hc:"hasClass",h:"height",H:'hide',
        ia:"insertAfter",ib:"insertBefore",
        ih:"innerHeight",iw:"innerWidth",
        l:"html",L:'last',n:'next',na:'nextAll',po:"position",
        o:"offset",op:"offsetParent",oh:"outerHeight",
        ow:"outerWidth",pp:"prepend",P:"parent",ps:"parents",
        pu:"parentsUntil",
        p:"prop", pt:"prependTo", pr:"removeProperty",
        q:"eq", r:"remove", ra:"replaceAll", rw:"replaceWith",
        s:"css", S:'show', sl:"scrollLeft",sb:"siblings",
        st:"scrollTop", tt:"attr",
        tc:"toggleClass", t:"text",u:"unwrap", v:"val",w:"width",wr:"wrap",
        wa:"wrapAll", wi:"wrapInner", z:"size"}


    codes={
        backspace:8 ,
        regDigsQwerty:{from96to105:[0,1,2,3,4,5,6,7,8,9]} ,
        digsNumPad:{from48to57:[0,1,2,3,4,5,6,7,8,9]}
    }

}


