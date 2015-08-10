$.ht=function(a){return $('html')}
$.pre=function(){
    return  $("<pre>").A()
}

scrs()
body()
mouse()
keys()
ajax()
dimen()


function scrs(){

    $.scr=function(scr, fn){return $.getScript(scr, fn)}
    $.getMultiScripts = function(arr, path) {
        var _arr = $.map(arr, function(scr) {return $.getScript( (path||"") + scr )})

        //_arr.push($.Deferred(function( deferred ){$( deferred.resolve )}))
        return $.when.apply($, _arr)
    }
    SCRIPTS = _.map([
        "socket.io/socket.io","string", 'bb','bbmn', 'ko','mel','gq', 'objects', 'defaultMug',  'spriteSheets',
        'core', 'jqueryplugins', 'html', 'boot','ui' ,'can','sys',  'images', 'event','socket', 'ranky',  'routeTests', 'nav', 'api', 'j3', 'display',  'animate','imagine','work','tween', 'universe', 'create',  'easel', 'displayObject',  'shape', 'text', 'mobile','animation','sprites', 'bitmap', 'toolkit', 'stage', 'filt', 'draw', 'solve','playgame','users','share','chat' , 'messages', 'knock', 'bbtemps','backbone1','people','mar', 'backbone', 'angu'

        // ,'melon','gquery','ph','phaser0','phaser','ninja', 'ph2','bx','b2dbasics','b2dutils', 'invaders','three', 'iso', 'boxWorld','boxWorldMore','walls', 'makeworld', 'b2dSensors','playerWorld', 'boxRev','weld','prism','coll','gamey','pong','easelbox','joints','wheel',
        // 'emitter','p2fiddle','ragdoll','p2constraints','unigame',
        //  'tilemapping','launcher','fullgames','p2physics', 'controls','orbs',
        //  'shooter','boxBody','talkjs','mario','squares','edges','boxgame','boxDebug','boxFixt', 'boxShapes','player','pinball', 'examples'

    ],  function(js){return "/" + js + ".js"})
// _.each(SCRIPTS, function(scr){$.scr(scr)})

    /*
     dfr = $.getMultiScripts(SCRIPTS)
     dfr.done(function(){alert('done')})
     .always(function(){
     alert('always')
     $.scr('app')
     })
     .fail(function(){alert('fail')})
     */

}
function keys(){
    $.key = $.keyDown = $.kD = kD = function self(key, funk){

        if(O(key)){
            _.each(key, function(func, arrKey){
                if( s$(arrKey).isUpper() ){   $.kU(arrKey.toLowerCase(), func)  }
                else { self(arrKey,func) }
            })

            return}

        keyObj={
            up:38,u:38,

            down:40, d:40,
            left:37, l:37,
            right:39, r:39,
            space:32,s:32,
            enter:13, e:13}

        if(keyObj[key]){key = keyObj[key]}

        $('body').on('keydown', function(e){
            if (e.which == key) { funk(e) }
        })}
    $.keyUp = $.kU = kU = function(key, funk){
        keyObj={
            up:38,u:38,
            down:40, d:40,
            left:37, l:37,
            right:39, r:39,
            space:32,s:32,
            enter:13, e:13}
        if(keyObj[key]){key = keyObj[key]}
        $('body').on('keyup', function(e){

            if (e.which == key) { funk(e) }
        })
    }

    $.sp=$.space = function (fn) {     return $.kD('space', fn) }


    $.wh =function(a,b){return  D(b)?a.which==b:  a.which}

}
function ajax(){


    $.XML = function () {
        return new XMLHttpRequest()
    }
    $.aj=function(ob){return $.ajax(ob)}
    $.txG = function(url){$.get('/'+url, function(aa){a=aa})}
    $.G = $.g=  function(){var g=G(arguments),o;
        if (U(g[1])) { return _.p($.G, g[0])}
        o= F(g[1])? {p:g[0], fn:g[1]} :
        {p:g[0], d:g[1], fn:g[2]};
        $.get(S.eL(o.p), o.d || {},
            function(d){
                o.fn = o.fn || function () {return 'boo ya!'};
                o.fn (d)
            })
    }
    $.eG=function(){var g=G(arguments),o;

        if (U(g[1])) { return _.p($.eG, g[0])}
        o= F(g[1])? {p:g[0], fn:g[1]} :
        {p:g[0], d:g[1], fn:g[2]};

        $.G(o.p, o.d||{},
            function(dd){
                _.e(dd, function(d){o.fn(d)})
            });
        return $
    }
    $.Gj = function(){var g=G(arguments),o;
        if (U(g[1])) { return _.p($.Gj, g[0])}
        o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
        o.fn = o.fn || function () {return 'boo ya!'};
        $.getJSON(
            S.eL(o.p),
            o.d|| {},
            function(d){o.fn(d)});
        return $
    }
    $.eJ=  $.eGj= function(){var g=G(arguments),o;
        if (U(g[1])) { return _.p($.eJ, g[0])}
        o= F(g[1])?
        {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
        $.Gj(o.p, o.d||{}, function(dd){_.e(dd, function(d){o.fn(d)})});
        return $
    }
    $.P = $.po= function(){var g=G(arguments),o;
        o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
        o.d = U(o.d)? {} : O(o.d)? o.d : {data: o.d};
        o.fn = o.fn || function () {return 'boo ya!'};
        $.post(S.eL(o.p),o.d,function(d){o.fn(o.d, o)});
        return $
    }
    $.eP =   function () {var g= G(arguments);
        if (U(g[1])) {return _.p($.eP, g[0])}
        o= F(g[1])? {p:g[0], fn:g[1]} : {p:g[0], d:g[1], fn:g[2]};
        $.P(o.u, o.d||{}, function (dd) {_.e(dd, function(d){o.fn(d)})
        });
        return $
    }

}
function mouse(){

    $.scroll =function(a){return $(window).scroll(a||function(){$('body').C('*')})}
    $.tap=function(fn){$('body').on('keydown mousedown', fn);return $}

    $.md=$.mousedown=function(func){
        $('body').on('mousedown', func);
        return this}
    $.mu=$.mouseup=function(func){
        $('body').on('mouseup', func);
        return this}
    $.mm=$.mousemove=function(func){

        $('body').on('mousemove', func);
        return this}
    $.ts=$.touchstart=function(func){

        $('body').on('touchstart', func);
        return this}
    $.te=$.touchend=function(func){

        $('body').on('touchend', func);
        return this}

    $.oMD=function(fn){
        $.mousedown(function(e){
            fn(e.clientX,e.clientY,e)});
        return $}
    $.oMM=function(fn){
        $.mousemove(function(e){
            fn(e.clientX, e.clientY, e)});
        return $}
    $.oMU = function (fn) {
        $.mouseup(function (e) {
            fn(e.clientX, e.clientY, e)
        });
        return $}
    $.$$=function(a,b,c){$('body').$$(a,b,c); return this}
    $.$=function(){

        var b=$('html');

        b.click.apply(b, arguments);

        return $}
    $.$=   m$ = function(f){ return $(document).on('click', _v(f) )}
    $.$$=   m$$ = function(f){ return $(document).on('dblclick', _v(f) )}


}
function body(){
    $.iBE=$.isBodyElement = function (e) {     e = $(e)[0];
        return O(e) && uC(e.tagName) == 'BODY'}
    bd=function(){var bd= $('body')
        return bd}
    $.dc=function(){var dc
        dc = $(this.document)
        return dc
    }
    $.bd=function(){var dc
        bd = $('body')
        return bd
    }
    $.dcH=function(a){
        $(a).H( $.dc().H() )
    }
    $.dO=function(a,b,c){//$.dL=$.dR=
        $.dc().on(oE(a),b,c)
    }
    $.c$=function(c){
        $.bd().C(c||$r())}
}
function inp() {

    $.sels = $.selects = function (fn) {
        var selects = $('select');
        if (fn) {
            selects.on('change', fn)
        }
        return selects
    }
    $.boxes = function (fn) {
        var b = $("input[type='checkbox'],input[type='radio']");
        if (fn) {
            b.$(fn)
        }
        return b
    }
    $.inputs = function (f) {
        $.selects(f);
        $.boxes(f)
    }
    $.getChecked = function (name) {
        return $("input[type='radio'][name=" + name + "]:checked").val()
    };

}
function oh() {
    $.oh = function (a, b, c) {
        if (A(a)) {
            return _.e(a, "$l(E(v).outerHTML)")
        }
        $l(E(a).outerHTML)
    }

    $.oh = function () {
        return $l($('body').oh())
    }
}
function dimen(){


    $.os=function(q){ return $(  C(q)?C(q):q  || 'body' ).os() }
    $.osl=function(el){return $.os(el).left }
    $.ost=function(el){return $.os(el).top }
    $.osP=function(a){return O(a) && a.offsetParent}
    $.osT=function(a){return O(a) && a.offsetTop}
    $.osL=function(a){return O(a) && a.offsetLeft}
    $.cW=function(){return $.bd().clientWidth}
    $.cH=function(){return $.bd().clientHeight}
}
function beta(){

    $.oR = onReady = _k = function (a) {
        return O(a) && a.complete
    }
    $.ld = function (a, b) {
        $(a).load(b);
        return a
    }

    $.tSrc = $.tDu = function (s) {
        //get the src ( >> DataUrl )
        return S(s) ? sJ : tU(s) ? tU(s)
            : s.u ? s.u() : iI(s) ? s.src
            : s.image ? s.image.src : 0
        //s/c/C/i/b->s sync
    }


    $$$ = function(a){$(_v(a))}
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
        optsWithDefaults: function (options) {
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
        optWithDefaults: function (key, options) {
            return (options[key] !== false) && (options[key] || $.serializeJSON.defaultOptions[key]);
        },

// Convert the string to a number, boolean or null, depending on the enable option and the string format.

        parseValue: function (str, opts) {
            var value, f;
            f = $.serializeJSON;
            if (opts.parseNumbers && f.isNumeric(str)) return Number(str); // number
            if (opts.parseBooleans && (str === "true" || str === "false")) return str === "true"; // boolean
            if (opts.parseNulls && str == "null") return null; // null
            return str; // otherwise, keep same string
        },

        isObject: function (obj) {return obj === Object(obj)}, // is this variable an object?
        isUndefined: function (obj) {return obj === void 0}, // safe check for undefined values
        isValidArrayIndex: function (val) {return /^[0-9]+$/.test(String(val))}, // 1,2,3,4 ... are valid array indexes
        isNumeric: function (obj) {return obj - parseFloat(obj) >= 0}, // taken from jQuery.isNumeric implementation. Not using jQuery.isNumeric to support old jQuery and Zepto versions
// Split the input name in programatically readable keys
// "foo" => ['foo']
// "[foo]" => ['foo']
// "foo[inn][bar]" => ['foo', 'inn', 'bar']
// "foo[inn][arr][0]" => ['foo', 'inn', 'arr', '0']
// "arr[][val]" => ['arr', '', 'val']
        splitInputNameIntoKeysArray: function (name) {
            var keys, last, f;
            f = $.serializeJSON;
            if (f.isUndefined(name)) {
                throw new Error("ArgumentError: param 'name' expected to be a string, found undefined");
            }

            keys = $.map(name.split('['), function (key) {
                last = key[key.length - 1];
                return last === ']' ? key.substring(0, key.length - 1) : key;
            });

            if (keys[0] === '') {
                keys.shift();
            } // "[foo][inn]" should be same as "foo[inn]"
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
            if (f.isUndefined(o)) {
                throw new Error("ArgumentError: param 'o' expected to be an object or array, found undefined");
            }
            if (!keys || keys.length === 0) {
                throw new Error("ArgumentError: param 'keys' expected to be an array with least one element");
            }
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
    }
}
function old() {

    _.c = function (c, orC) {
        if (c == '*') {c = $r()}
        return oO('c', c || orC)
    }

    _.jS=function(a,b,c){
        return S(a)? $.Gj(a,b,c) : JSON.stringify(a)
    }

    _.jP=function(a,b,c){return  S(a)?JSON.parse(a,b) :$(a).prepend(b,c)}


    $.l$=function(a){ $.c$(); $l(a||'!'); return a }

    $.A=function(){var g=G(arguments)
        g.e(function(a){$('body').A(a)})
        return $
    }

    $.B=function(){var g=G(arguments)
        $l('if looking for bold, use $.b')
        g.e(function(a){$('body').A(a)})
        return $('body')
    }
    $.col = function (a, b) {var g = G(arguments),o

        o = O(a) ? {q: g[0], c: g[1]} : {c: g[0]}
        o.q = o.q || $.bd()
        o.c = o.c ? oO('c', o.c) : $r()
        return $.ss(o.q, 'C', o.c)
    }


    $.PS=function(a,b,c){$(a).parents(b,c)}

    $.K = $.class = function (q) {
        q = qq(q);
        return function kl(k, j) {
            var g = G(arguments);
            if (U(k)) {
                return q.at('k')
            }
            if (g.p) {
                return q.q.hasClass(oO('k', k))
            }
            if (k === '-') {
                q.q.removeClass(oO('k', j))
            }
            else if (g.n) {
                q.at('k', oO('k', k))
            }
            else {
                _.e(_S(k, ' '), function (k) {
                    q.q.addClass(oO('k', k))
                })
            }
            $l(kl());
            return kl
        }
    }


    $.wn=function(){return $(window)}
    $.at = $.aa = $.attrs = function aa(q, b, c) {// aa=

        q = Q(q);
        var att = function (q, b, c) {
            q = Q(q);
            if (U(c)) {
                return q.attr(oO('a', b))
            }
            return q.attr(oO('a', b), $o(b, c, 'R'))
        };
        return U(b) ? _p(aa, q)
            : A(b) ? _r(b, function (m, k) {
            return _s(m, k, aa(q, k))
        }, {})
            : O(b) ? $p('a', q, b, att)
            : att(q, b, c)
    }
    $.pp = $.props = function pp(q, b, c) {// pp=
        q = Q(q);
        var rop = function (q, b, c) {
            q = Q(q);
            if (U(c)) {
                return q.prop(oO('o', b))
            }
            return q.prop(oO('o', b),
                $o(b, c, 'R'))
        };
        return U(b) ? _p($.props, q)
            : A(b) ? _r(b, function (m, k) {
            return _s(m, k, HTML5.props(q, k))
        }, {})
            : O(b) ? $p('o', q, b, rop)
            : rop(q, b, c);
        //ex:  val=function(type, key){return HTML5.props(type,'v',key)}
        //ex:  typ=function(type, key){return HTML5.props(type,'t',key)}
    }  //changed p -> o (oO)

//$.ev= _.ev;//$.in= _.in
    _.wdXXX = function (a, b) {
        if (O(a)) {
            var w = function (a, b) {
                if (U(b)) {
                    return a.width
                }
                a.width = b;
                return a
            }
            if (U(b)) {
                return F(w(a)) ? a.width() : w(a) ? w(a) : _.isFunction(a.w) ? a.w() : a.w
            }
            if (F(w(a))) {
                a.width(b)
            }
            else if (w(a)) {
                w(a, b)
            }
            else if (F(a.w)) {
                a.w(b)
            }
            else {
                a.w = b
            }

            return a

        }
    }


//$.word = function (t, c1, c2) {return $.sp(t).C(c1, c2).A().dg()}

}

CORNERS=function(){
    //  dva(2, 2, 2, 2 )
    div = $.dA(200,200).A(
        $.dA('r', 20, 20).top(-10).left(-10),
        $.dA('y', 20, 20).bottom(-10).right(-10),
        $.dA('g', 20, 20).top(-10).right(-10),
        $.dA('b', 20, 20).bottom(-10).left(-10)
    );
    i = $.dF('u').col('w').fS( 20).al(.2).tA('c').width('100%').top(100);
    i.H( W() + ' * ' + H() );
    Z(function(){  i.H(  W() + ' * ' + H() )  });

    $.$( function(){ _.rat( function(){$('body').C($r())  } , 10 )
    });
    i.grow()
}