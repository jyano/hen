
pro=function(){

//pass in size, and then args(contents) as a list (or as an array)
    $.col = function(){  var args = G(arguments),

        div= $.div().addClass( 'm' + args[0] ),

        iter = A( args[1])?  args[1] : args.r

        _.each( iter, function(v){ div.A(v) } )

        return div }

    $.ipsum=function(len){   len = len || 1
        var str = ''
        _.t(len, function(){
            str = str +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
        })
        return str}
    $.ipsumP=function(len){return $.p().A($.ipsum(len) )}
    $.i2= $.img2 = function(img, func){

        i = $.img().src(img)

        func(i[0])

        //s$(e).contains('data:')
        return i}
    $.i = $.img=function(source, func){

        var img = $( new Image() )

        //gets rid of auto-scaling quirk
        img.load(function(img){
            var img = $(img.target)
            // img.W( img.W() )
            // img.H( img.H() )
        })

        if(func){
            img.load(function(event){
                func($(event.target), event)})}

        if(source){
            img.src(src(source))
        }

        return img
    }
    $.hr2 =  function(c,h,w){

        var e = qq('hr')

        if( N(c) ){  return hr('z', c, h)  }

        e.h(h||2)

        e.c(c||'z')

        if(w){ e.w(w) };return e
    }
    $.sp2 = function(){

        var args=G(arguments),
            theSpan=$('<span>'), str=''

        _.each(args,

            function(val){

                if(S(val)){ str+= val }

                else { theSpan.A( val ) }})

        if(str){ theSpan.text(str) }

        return theSpan}
    $.tH= $.thead=function(){return _a( qq($('<thead>')),arguments)}
    $.tB=$.tbody=function(){return _a( qq($('<tbody>')),arguments)}
    $.strong=function(){


        var g=G(arguments),
            s=qq($('<strong>'))


        _e(g,function(g){
            s(g)
        })


        return s}
    $sc= $.section=function(a,b){return qq($('<section>')).id(a).s(b)}
    $.aOld =function(textAndId, hrefOrFunc){

        var args=G(arguments), a=args[0], hrefOrFunc=args[1],

            theEl = qq('a').id(textAndId)(textAndId)

        if (F(hrefOrFunc)) {theEl.o(hrefOrFunc)}

        else {theEl.hr(hrefOrFunc||'#')}

        return (args.n)? theEl.k("dropdown-toggle")


            //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"


            :(args.m)? li(theEl).k('active') :(args.p)? li(theEl)

            :theEl}
    $.headerHuhhhh=function(name,val){
        return $.input().type('header')
            .name(name).val(val)

    }
    $.header=function(){


        var header = $('<header>')


        return header}
    $.footer=function(){return $('<footer>')}
    $.ol=function(o,b){var g=G(arguments),
        ol=$('<ol>')
        _.each(g, function(v){ol.A(v)})
        return ol}
    $.td=function(){
        return $('<td>')
    }
    $.tr=function(){return $('<tr>')}
    $.bold= function(a,k){

        var g=G(arguments),
            h=g.p?'&nbsp;'+a:a;
        return $('<bold>').H(h).k(k)

    }
    $.iframe=function(){

        z()
        d=dva()
        ifr=qq($('<iframe>'))
        ifr.w(1000).h(1000).c('b')
        ifr.q[0].src='http://www.playboy.com'
        d(ifr).P(30)

    }
    $.th=function(a){

        var h = qq($('<th>'))

        if(a){h(a)}

        return h}
    $.inlineDiv=function(a,b,c){
        var theDiv = dv(a, b, c)
        theDiv.display('inline')
        return theDiv
    }
    $.inlineBlockDiv=function(a,b,c){

        var theDiv = dv(a, b, c)

        theDiv.display('inline-block')

        return theDiv

    }
    $.dva=function f(r,w,h,l,t){

//color, width, height, left, top
        var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
        if(!S(r)){
            return g.n?

                f($r(),r,w,h,l,'-')

                : g.p?f($r(),r,w,h,l,'+')
                : f($r(),r,w,h,l)}


        d=_d().p('a').c(r).a()

        if(g.p){
            if(w){d.l(w)}
            if(h){d.t(h)}
            d.P(16)
            return d.auto()}


        w=w||1
        h=h||w
        d.w(w*100)
        d.h(h*100)

        l=l||0
        t=t||l
        d.l(l*100)
        d.t(t*100)


        if(g.N){d.drg()}
        return d}

    DEBOUNCE=function(){W()

        s=0
        u=0
        d=0
        l=0
        r=0


        b= w.S(600, 300, 'b', 100)

        $.space(_.debounce(function(){$l('space ' + s++)}, 1000))

        $.kD('u', _.debounce(function(){$l('up '+u++)}, 1000, true))



    }

    $.do=function(func){
        setTimeout(func,0)
        return 'nada'}
//
    $.G = function self(path, dataOb, func){
////
//fix later!

        if(F(dataOb)){return self(path, {}, dataOb)}
        dataOb = dataOb || {}
        func = func || function(){return 'boo ya!'}


        $.get('/' + path, dataOb,

            function(data){

                d = data

                console.dir(data)

                func(data)

            })
    }
    $.P = function(path, dataOb){
        dataOb = dataOb || {}
        if(!O(dataOb)){ dataOb = {data: dataOb} }



        $.post('/' + path, dataOb,


            function(data){

                d =data

                console.dir(d)

            })

    }
    $.qJ = qJ=function rc(u,d,f){var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.getJSON(u,d,g.P?f:function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qJE =qJE=function rc(u,d,f){var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.getJSON(u,d, function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qP= qP=function rc(u,d,f){var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.post(u,d,g.P?f:function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qPE= qPE=function rc(u,d,f){var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.post(u,d, function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qG=qG=function rc(u,d,f){
        var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.get(u,d,g.P?f:function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.qGE=qGE=function rc(u,d,f){
        var g,u,d,f
        if(U(d)){return _p(rc,u)}
        g=G(arguments);u=g[0];d=g[1];f=g[2]
        if(F(d)){f=d;d={}}
        $.get(u,d,function(ss){
            _.each(ss,function(s){f(s,ss)})})}
    $.fn.trans=function(transform){
        $l('transform')
        return this.css({transform: transform})}
    testCSSRotate=function(){z()

        //works

        $.h1('css transform: rotate').A()

        d = $.div('x', null, 200).A()
        //   d.css({transform: 'translateY(300px) rotateZ(120deg)'})

        d.trans('translateY(300px) rotateZ(120deg)')

    }
    testCSSScal=function(){z()


        $.h1('css transform: scale').A()

        i= $.img('me').A()

        // d = $.div('r', null, 200,200).A()


        $.img('me').A().transform( 'scaleX(2)' )
        $.img('me').A().transform( 'scaleY(2)' )

        $.img('me').A().transform( 'scaleZ(2)' ) //does nothing?!


        $.img('me').A().transform( 'rotate3d(100,100,100,100)' )

    }
    HTML5={}
    $.CSS = HTML5.CSS = ss=function ss(q,b,c){

        if(U(b)){return $l(_p(ss,q))}

        var s=function(a,b,c){

            if(U(c)){return $l(a.css(oO('s',b)))
            }

            a.css(oO('s',b), $o(b,c,'R'))

            $l(s(a,b) )

            return q
        }


        q=Q(q)
        return  A(b)? _r(b,function(m,k){
            return _s(m,k,ss(q,k))},{})
            :O(b)? $p('s',q,b,s)
            :s(q,b,c)

    }
    $.attrs = HTML5.attrs = aa=function aa(q,b,c){q=Q(q)
        var  att=function(q,b,c){q=Q(q)
            if(U(c)){return q.attr(oO('a',b))}
            return q.attr(oO('a',b),$o(b,c,'R'))}
        return  U(b)? _p(aa,q)
            :A(b)? _r(b,function(m,k){
            return _s(m,k,aa(q,k))},{})
            :O(b)? $p('a',q,b,att)
            :att(q,b,c)}
    $.props = HTML5.props = pp=function pp(q,b,c){
        q=Q(q)

        var rop=function(q,b,c){
            q=Q(q)

            if(U(c)){return q.prop( oO('o', b) )}
            return q.prop(oO('o',b),
                $o(b,c,'R'))}

        return U(b)? _p(HTML5.props,q)
            :A(b)? _r(b,function(m,k){
            return _s(m,k,HTML5.props(q,k))},{})
            :O(b)? $p('o',q,b,rop)
            :rop(q,b,c)

        //ex:  val=function(type, key){return HTML5.props(type,'v',key)}
        //ex:  typ=function(type, key){return HTML5.props(type,'t',key)}

    }  //changed p -> o (oO)
    $.class = HTML5.class = kl=function(q){q=qq(q)
        return function kl(k,j){

            var g=G(arguments)
            if(U(k)){return q.at('k')}
            if(g.p){return q.q.hasClass( oO('k',k) )}
            if(k==='-'){q.q.removeClass( oO('k',j) )}
            else if(g.n){q.at('k', oO('k',k) )  }
            else {_e(_S(k,' '),function(k){
                q.q.addClass (oO('k',k))})}
            $l(kl())
            return kl}}
    $.font = HTML5.font =$f=FO=function(a,b){

        if(O(a)){return ss(oB(b),{fz:a||50})}
        a=N(a)?_S(a):U(a)?'':a

        var px=function(a){return a+'px'},
            F='fantasy',W='normal',S='normal',Z=px(100)

        _e(a.split(' '),function(p){
            if(M(p[0])){p=p.split('/')
                Z=px(p[0])+((p[1])?'/'+px(p[1]):'')}
            F=Oo('ff',p)||F
            W=Oo('fw',p)||W
            S=Oo('fs',p)||S})

        return [W,S,Z,F].join(' ')}
    $.outline = HTML5.outline = OL=function OL(o,o2,o3){if(Oo('c',o)){o={c:o,w:o2,s:o3}}
        if(S(o)){o=o.split(' ')
            return $l(_j([$r('c',o[0]),_p(oO('ow',o[1]||5)),
                oO('os',o[2]||'-') ]))}
        if(N(o)){o={w:o}};
        o=ob(o)
        return $l(_j([$r('c',o.c),N(o.w)?_p(o.w):$r('ow',o.w),
            $r('os',o.s)]))}
    $.qs = HTML5.qs = qs=function f(a,b){

        var o = {},

            s = function( o, a, b ){

                o [ oO ( 's' , a ) ]  = oO( a , b , 'R' )

                return o }

        if( S( a ) ){ s( o , a , b ) }

        else{

            _.each( a , function( v , k ) { s ( o , k , v ) } ) }

        return o

    }
    $.CSSRule = HTML5.CSSRule = CSSRule = setRule = uu=function f( a, b ){
        var sy, cl ,rl


        style = sy=function(style){   return "<style type='text/css'>" + style + "</style>"   }

        theRule  =rl = function f(a,b){

            var style=''

            if(O(a)){   _.each(   qs(a), function(v,k){  style += f(k, v)   })

                return style}

            return  a + ':' +  b  + '; '  }

        createRule = function(a,b){

            var rule = function(clas, css){ return '.' +  clas  +  '{' + css|| '' + '}'  }

            return hd( style( rule(a, b) ))

        }



        if( O(a) ){ _.each( a, function(v, k){ f(k,v) }) }

        createRule( a, theRule(b) )

    }
    testRule=function(){
        z()
        $.div('b',400,400).A().A( $.span('hifds') )


        $.CSSRule('div', 'color:Orange')


    }
    testStyle=function(){//WORKS

        $.div('b',400,400).A().A( $.span('hifds')).id('div')

        var style = document.createElement('style');

        style.type = 'text/css';

        var rule = '.cssClass { color: #F00; }'

        style.innerHTML = rule

        $( 'head' ).append(style)

//////

        $( '#div' ).K( 'cssClass' )



    }
    $.addStyle=function(){
        _.each(arguments, function(rule){

            $('<style>'+ rule + '</style>').A()
        })


    }
    $.CSSReset=function(){
        $.CSSRule({'*':{m:0,p:0},  //css reset
            'html,body':{h:'100%', w:'100%'},
            canvas:{d:'b'}})
    }
    testPlugin=function(){ z()

        d = $.div('r' ).WH( 100 ).A().A( 'abc' )

        e = $.div().WH( 100 ).col( 'r' ).A().A( 'abc' )

        f = $.div('r').WH( 100 ).col( 'b' ).A().A( 'abc' )

        g = $.div( 'b' , 500 , 500 ).A() }
    FRIDGEMAGNETS=function(){z()

        word = function(text, c1, c2){

            var s= $.span(text).C(c1, c2).A().drag()

            return s}


        w=word('hello', 'b', 'g')

        word('sicko', 'g', 'b')

        word('why, i oughta..', 'p', 'x')

        word('it was raining..', 'j', 'k')

        word('who ya gonna call?', 'h', 'i')
        word('dag nabit!', 'f', 'g')

        word('i like', 'd', 'e')
        word('tomorrow', 'a', 'c')

        word('me', 'r', 'b')

    }
    testCan = function(){
        z()
        c= $.canvas('o', 500, 500).A()


        //c.save().lineWidth(30).setStrokeColor('r').lineTo([[100,100],[150,110]]).stroke().restore().lineTo([[200,100],[200,600]]).stroke()

        // c.roundRect(100,50,100,100,50).stroke()//.fill()

        //c.line(10,10,50,500).stroke()

        c.line([
            [[100,100],[200,200],[140,900]]
            // ,  [[150,150],[250,250], [20,300]]
        ]).stroke()

        //c.line([100,100],[200,200],[150,150],[250,250] ).stroke()
        //c.line( [350,50],[25,25],  [450,10],[20,550]).stroke()
    }
    VOLUME=function(){

        outerDiv = $.div('y', 400, 200 ).A().drag()

        r=$.row().W(600)

        r.A(
            $.div().id('booksDiv').addClass('col-md-6').A(    ) )

        r.A(
            $.div().id('displayDiv').addClass('col-dm-6').A(   $.img('guy')  )    )

        r.A().drag()


        Book=function(title){

            var book = $.div().A( $('<h4>').text( title||'book') ).H(60).C('b').addClass('book')

            book.display = $.img('me').hide().addClass('display')

            return book}
        addBook=function(title){

            var book=Book(title)

            $('#booksDiv').A( book )

            $('#displayDiv').A(   book.display      )

            $('.book').click(   function(){

                $(this).id()

            })

            return book
        }


        a= addBook('a')
        b=addBook('b')
    };
//mongoError: kill mongod processess!!!!  ps ax | grep mongod
    (function ($) {
        "use strict";
// jQuery('form').serializeJSON()
        $.fn.serializeJSON = function (options) {
            var serializedObject, formAsArray, keys, value, f, opts;
            f = $.serializeJSON;
            formAsArray = this.serializeArray(); // array of objects {name, value}
            opts = f.optsWithDefaults(options); // calculate values for options {parseNumbers, parseBoolens, parseNulls}
            serializedObject = {};
            $.each(formAsArray, function (i, input) {
                keys = f.splitInputNameIntoKeysArray(input.name); // "some[deep][key]" => ['some', 'deep', 'key']
                value = f.parseValue(input.value, opts); // string, number, boolean or null
                if (opts.parseWithFunction) value = opts.parseWithFunction(value); // allow for custom parsing
                f.deepSet(serializedObject, keys, value, opts);
            });
            return serializedObject;
        }

// Use $.serializeJSON as namespace for the auxiliar functions
// and to define defaults
        $.serializeJSON = {
            defaultOptions: {
                parseNumbers: false, // convert values like "1", "-2.33" to 1, -2.33
                parseBooleans: false, // convert "true", "false" to true, false
                parseNulls: false, // convert "null" to null
                parseAll: false, // all of the above
                parseWithFunction: null, // to use custom parser, use a function like: function (val) => parsed_val
                useIntKeysAsArrayIndex: false // name="foo[2]" value="v" => {foo: [null, null, "v"]}, instead of {foo: ["2": "v"]}
            },

// Merge options with defaults to get {parseNumbers, parseBoolens, parseNulls, useIntKeysAsArrayIndex}
            optsWithDefaults: function(options) {
                var f, parseAll;
                if (options == null) options = {}; // arg default value = {}
                f = $.serializeJSON;
                parseAll = f.optWithDefaults('parseAll', options);
                return {
                    parseNumbers: parseAll || f.optWithDefaults('parseNumbers', options),
                    parseBooleans: parseAll || f.optWithDefaults('parseBooleans', options),
                    parseNulls: parseAll || f.optWithDefaults('parseNulls', options),
                    parseWithFunction: f.optWithDefaults('parseWithFunction', options),
                    useIntKeysAsArrayIndex: f.optWithDefaults('useIntKeysAsArrayIndex', options)
                }
            },
            optWithDefaults: function(key, options) {
                return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
            },

// Convert the string to a number, boolean or null, depending on the enable option and the string format.

            parseValue: function(str, opts) {
                var value, f;
                f = $.serializeJSON;
                if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
                if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
                if (opts.parseNulls && str == "null") return null; // null
                return str; // otherwise, keep same string
            },
            isObject: function(obj) { return obj === Object(obj); }, // is this variable an object?

            isUndefined: function(obj) { return obj === void 0; }, // safe check for undefined values
            isValidArrayIndex: function(val) { return /^[0-9]+$/.test(String(val)); }, // 1,2,3,4 ... are valid array indexes

            isNumeric: function(obj) { return obj - parseFloat(obj) >= 0; }, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
// Split the input name in programatically readable keys
// "foo" => ['foo']
// "[foo]" => ['foo']
// "foo[inn][bar]" => ['foo', 'inn', 'bar']
// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
// "arr[][val]" => ['arr', '', 'val']
            splitInputNameIntoKeysArray: function (name) {
                var keys, last, f;
                f = $.serializeJSON;
                if (f.isUndefined(name)) { throw new Error("ArgumentError: param 'name' expected to be a string, found undefined"); }
                keys = $.map(name.split('['), function (key) {
                    last = key[key.length - 1];
                    return last === ']' ? key.substring(0, key.length - 1) : key;
                });
                if (keys[0] === '') { keys.shift(); } // "[foo][inn]" should be same as "foo[inn]"
                return keys;
            },
// Set a value in an object or array, using multiple keys to set in a nested object or array:
//
// deepSet(obj, ['foo'], v) // obj['foo'] = v
// deepSet(obj, ['foo', 'inn'], v) // obj['foo']['inn'] = v // Create the inner obj['foo'] object, if needed
// deepSet(obj, ['foo', 'inn', '123'], v) // obj['foo']['arr']['123'] = v //
//
// deepSet(obj, ['0'], v) // obj['0'] = v
// deepSet(arr, ['0'], v, {useIntKeysAsArrayIndex: true}) // arr[0] = v
// deepSet(arr, [''], v) // arr.push(v)
// deepSet(obj, ['arr', ''], v) // obj['arr'].push(v)
//
// arr = [];
// deepSet(arr, ['', v] // arr => [v]
// deepSet(arr, ['', 'foo'], v) // arr => [v, {foo: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}]
// deepSet(arr, ['', 'bar'], v) // arr => [v, {foo: v, bar: v}, {bar: v}]
//
            deepSet: function (o, keys, value, opts) {
                var key, nextKey, tail, lastIdx, lastVal, f;
                if (opts == null) opts = {};
                f = $.serializeJSON;
                if (f.isUndefined(o)) { throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined"); }
                if (!keys || keys.length === 0) { throw new Error("ArgumentError: param 'keys' expected to be an array with least one element"); }
                key = keys[0];
// Only one key, then it's not a deepSet, just assign the value.
                if (keys.length === 1) {
                    if (key === '') {
                        o.push(value); // '' is used to push values into the array (assume o is an array)
                    } else {
                        o[key] = value; // other keys can be used as object keys or array indexes
                    }
// With more keys is a deepSet. Apply recursively.
                } else {
                    nextKey = keys[1];
// '' is used to push values into the array,
// with nextKey, set the value into the same object, in object[nextKey].
// Covers the case of ['', 'foo'] and ['', 'var'] to push the object {foo, var}, and the case of nested arrays.
                    if (key === '') {
                        lastIdx = o.length - 1; // asume o is array
                        lastVal = o[lastIdx];
                        if (f.isObject(lastVal) && (f.isUndefined(lastVal[nextKey]) || keys.length > 2)) { // if nextKey is not present in the last object element, or there are more keys to deep set
                            key = lastIdx; // then set the new value in the same object element
                        } else {
                            key = lastIdx + 1; // otherwise, point to set the next index in the array
                        }
                    }
// o[key] defaults to object or array, depending if nextKey is an array index (int or '') or an object key (string)
                    if (f.isUndefined(o[key])) {
                        if (nextKey === '') { // '' is used to push values into the array.
                            o[key] = []
                        } else if (opts.useIntKeysAsArrayIndex && f.isValidArrayIndex(nextKey)) { // if 1, 2, 3 ... then use an array, where nextKey is the index
                            o[key] = []
                        } else { // for anything else, use an object, where nextKey is going to be the attribute name
                            o[key] = {}
                        }
                    }
// Recursively set the inner object

                    tail = keys.slice(1)

                    f.deepSet(o[key], tail, value, opts)
                }
            }
        }}(window.jQuery || window.Zepto || window.$))
    $.tree=function(){z();var s=200

        d = $.div().K('container')(

            $.p().K('tree_controls')(
                $.a('expand all').K('expand_all'),
                $.a('collapse all').K('collapse_all')
            )).A()


        quas="<li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li><li><span class='tree_slug'>&nbsp;</span> Qua</li>"

        ter="<li><a href='#' class='tree_trigger'> &nbsp;</a> Ter <ul>"+quas+"</ul></li>"

        sec="<li><a href='#' class='tree_trigger'> &nbsp;</a> Sec"+ter+"</ul></li>"


        pri="<ul class='tree'><li><a href='#' class='tree_trigger'> &nbsp;</a> Pri <ul class='tree_expanded'>"+sec+ "</ul></li></ul>"




        q =  $(pri)

        //d(q)


        if(_.size($('ul.tree')) ){

            $('p.tree_controls a.expand_all, p.tree_controls a.collapse_all').click(function(){

                if($(this).hasClass('expand_all')){$l('ex_all')
                    $(this).parent('p').next('ul').find('a.tree_trigger').K('trigger_expanded')
                    return false}

                else {$l('!ex_all')

                    $(this).parent('p').next('ul').find('a.tree_trigger')

                        .removeClass('trigger_expanded').end()

                        .find('ul').removeClass('tree_expanded')}

                this.blur();return false

            })


            $(document).on('click',function(){
                if( $(this).hasClass('tree_trigger')){
                    if($(this).next('ul').is(':hidden')){
                        $(this).K('trigger_expanded').next('ul').K('tree_expanded')}
                    else {$(this).removeClass('trigger_expanded').next('ul').removeClass('tree_expanded')}
                    this.blur()
                    return false
                }})


            $('ul.tree li:last-child').K('last')

            $('ul.tree_expanded').prev('a').K('trigger_expanded')

        }



    }




    MARGINAUTO=function(){z()

        outer = $.div( 'b', 500, 500).A()
        outer.A(  inner = $.div( 'r', 100, 100) )
        inner.mar('auto')
        outer.mar('auto')
    }
//dH=function(a){qq(a).h($(document).height())}
//events={}
//events.dL=dL=function(a,b,c){document.addEventListener(oE(a),b,c)}
//events.dR=dR=function(a,b,c){document.removeEventListener(oE(a),b,c)}
//co=function co(a,b){return O(a)? ss(a,'C', $r('c',b) ):co($b(),a)}
    outerHTML =function(a,b,c){
        if(A(a)){ return _e(a, "$l(E(v).outerHTML)" ) }

        $l( E(a).outerHTML )
    }
//offset=os=function(element){if(C(element)){element=C(element)};return $(element||'body').offset()}
//offsetLeft=osl=function(el){return offset(el).left}
//offsetTop=ost=function(el){return offset(el).top}
//dims
//log dims of something
//owh=function(d){return d.o('$$', function(){d.w()+' '+ d.h()})}
//osP=function(a){return O(a) && a.offsetParent}
//osT=function(a){return O(a) && a.offsetTop}
//osL=function(a){return O(a) && a.offsetLeft}
//cW=function(){return document.body.clientWidth }
//cH=function(){return document.body.clientHeight }
    $.selects=function(func){
        var selects=$('select')

        if(func){ selects.on('change', func) }

        return selects}
    $.boxes=function(func){

        var b = $("input[type='checkbox'],input[type='radio']")
        if(f) {  b.click( func ) }
        return b

    }
    $.inputs=function(f){
        $.selects(f);
        $.boxes(f)
    }
    $.getChecked=function(name){
        var input = $("input[type='radio'][name="+name+"]:checked")
        return input.val()}
    $.$$=function(a,b,c){$('body').dblclick(a,b,c); return this}
    $.$=function(){var b=$('html')

        b.click.apply(b, arguments)

        return $}
    $.fn.pressmove = function (func) {
        var mouse_pressed
        this.mousedown(function () {
            mouse_pressed = true
        })
        this.mouseup(function () {
            mouse_pressed = false
        })


        this.mousemove(function (e) {


            if (mouse_pressed) {

                func(e)

            }

        })


        return this
    }
    $.fn.mousePoint=function(e, scale){
        scale=N(scale)?scale:1
        return V(e.pageX/scale,e.pageY/scale )
    }
    $.fn.ctx=function(){
        return this[0].getContext('2d')
    }
    $.isCan=function(can){
        if(O(can)){
            return  $(can)[0].constructor.name=="HTMLCanvasElement"
        }

    }
    $.fn.wor =$.fn.world=  function(){var can=this
        var w = b2d.wor.apply(null,arguments).bug(can, 30, '*')
        w.can = can
        w.ctx = can.ctx()
        return w}
    dateTime=function(){
//dep
        $.dateTime = $.date = dateTime = dt = function (a) {
            var d = new Date(a)
            d.y = d.getFullYear
            d.d = d.getDate
            d.D = d.getDay
            d.M = d.getMinutes
            d.m = d.getMonth
            d.date = function () {
                return d.d() + '/' + d.m() + '/' + d.y()
            }
            d.time = function () {
                return d.h() + ':' + d.M()
            }
            d.dt = function () {
                return d.date() + ' ' + d.time()
            }
            d.ms = d.getMilliseconds
            d.h = d.getUTCHours
            d.s = d.getSeconds
            //d.tm= d.getTime
            //d.gto= d.getTimezoneOffset
            d.udt = d.getUTCDate
            d.gud = d.getUTCDay
            d.ufy = d.getUTCFullYear
            d.gh = d.getHours
            d.gms = d.getUTCMilliseconds
            d.um = d.getUTCMinutes
            d.um = d.getUTCMonth
            d.us = d.getUTCSeconds
            return d
        }
        $.dateAndTime = dtt = function (a) {
            var datetime = new Date(a)
            return datetime.date() + ' ' + datetime.time()
        }
    }; dateTime()

    elements=function() {
        $.isBodyElement = function (e) {
            e = $(e)[0]
            return O(e) && uC(e.tagName) == 'BODY'
        }

    }; elements()
//doesnt work YET
    $.fn.getPosition = $.fn.getTotalOffset = function(){

        var e = this, x=0,  y= 0

        while( E( e ) && e.tagName ){

            y += e.offsetTop

            x += e.offsetLeft

            if( isBodyElement(e)  ){ e = 0 }

            e = e.offsetParent || e
        }

        return { x: x, y: y }




    }//just gets the TOTAL offset of ANY element

}
