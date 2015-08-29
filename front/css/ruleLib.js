
//jQuery.Rule lib https://github.com/flesler/jquery.rule/blob/master/jquery.rule.js

/*


 jQuery.rule  -> jq.Rule object
 {U|S|jqy.Rule}    The rules, can be: sel | literal CSS rules (Many can be given, comma-sep)
 {U|S|el|q)  The context stylesheets, all of them by default.




 */  //examples of usage:

$.rule('p,div')
    .filter(function(){
        return this.style.display != 'block'
    })
    .remove()


 $.rule(
 'div{padding:20px;background:#CCC},   p{border:1px red solid;}'
 ).appendTo('style')

 $.rule('div{}')
     .append('margin:40px')
     .css('margin-left',0)
     .appendTo('link:eq(1)')


$.rule().not('div, p.magic').fadeOut('slow');
 text = $.rule('#screen h2').add('h4').end().eq(4).text()


///LIB STARTS BELOW

 //The plugin needs a style node to stay in the DOM all along to temporarily hold rules.
 // 	DON'T TOUCH IT.
 // Rules in IE don't have .parentStylesheet. We need to find it each time(slow).
// This plugin adds:
// $.rule and also 4 methods to $.fn:
// ownerNode,        sheet,        cssRules,       cssText

     // Note that rules are not directly inside nodes( 	you need to do:   	$('style').sheet().cssRules() )




//regex rules
reRule = /^([^{]+)\{([^}]*)\}/m
reStyle = /([^:]+):([^;}]+)/


storageNode = $('<style rel="alternate stylesheet" type="text/css" />').a2('head')[0]  //we must append to get a stylesheet
storage = storageNode[sheet= storageNode.sheet ? 'sheet' : 'styleSheet']
rules = storage.rules ? 'rules' : 'cssRules'
remove = storage.deleteRule ? 'deleteRule' : 'removeRule'
owner = storage.ownerNode ? 'ownerNode' : 'owningElement'
storage.disabled = true;



$rule = $.rule = function( r, c ){
    if(!(this instanceof $rule)){ return new $rule( r, c ) }

    this.sheets = $rule.sheets(c)

    if( r && reRule.test(r) ){r = $rule.clean( r )}

    if( O(r)  && !r.exec ) {
        setArray( this, r.get ? r.get() : r.splice ? r : [r] ) }
    else {
        setArray( this, this.sheets.cssRules().get() )
        if (r) {return this.filter( r )} }
    return this
}


$.extend( $rule, {

    sheets:function( c ){

        var o = $((typeof c != 'object' )?
            $.makeArray(document.styleSheets) : c).not(storage)

        return (typeof c == 'string' )?
            o.ownerNode().filter(c).sheet(): o
    },

    rule:function( str ){return str.selectorText? [ '', str.selectorText, str.style.cssText ]:  reRule.exec( str )},

    appendTo: appendTo,

    remove:function( r, p ){p = p || this.parent(r);
        if( p != storage ){//let's save some unnecesary cycles.
            var i = p ? $.inArray( r, p[rules] ) : -1;
            if( i != -1 ){//if not stored before removal, IE will crash eventually, and some rules in FF get messed up
                r = this.appendTo( r, 0 /*storage*/, true );//is faster and shorter to imply storage
                p[remove](i)}}
        return r},

    //parse the string, storage implied
    clean:function( r ){return $.map( r.split('}'),
        function( txt ){if( txt ) {return $rule.appendTo( txt + '}')}})},

    parent:function( r ){//CSS rules in IE don't have parentStyleSheet attribute

        if( typeof r == 'string' || !$.browser.msie ){return r.parentStyleSheet}
        //if it's a string, just return undefined.
        var par;
        this.sheets().each(function(){
            if( $.inArray(r, this[rules]) != -1 ){par = this; return false; }});
        return par},

    outerText:function( rule ){return !rule || !rule.selectorText ? '' : [rule.selectorText+'{', '\t'+rule.style.cssText,'}'].join('\n').toLowerCase();},

    text:function( rule, txt ){

        if( txt !== undefined ) {rule.style.cssText = txt}

        return !rule ? '' :  rule.style.cssText.toLowerCase()}

})



$rule.fn = $rule.prototype = {

    pushStack:function( rs, sh ){var ret = $rule( rs, sh || this.sheets ); ret.prevObject = this;  return ret;},
    end:function(){ return this.prevObject || $rule(0,[]) },
    filter:function( s ){var o; if( !s ) s = /./;//just keep them all.
        if( s.split ){o = $.trim(s).toLowerCase().split(/\s*,\s*/);
            s = function(){var s = this.selectorText || '';
                return !!$.grep( s.toLowerCase().split(/\s*,\s*/), function( sel ){
                    return $.inArray( sel, o ) != -1 }).length }}
        else if( s.exec ){o = s; s = function(){ return o.test(this.selectorText)}}//string regex, or actual regex
        return this.pushStack($.grep( this, function( e, i ){return s.call( e, i )}))},

    add:function( rs, c ){ return this.pushStack( $.merge(this.get(), $rule(rs, c)) ) },

    is:function( s ){ return !!(s && this.filter( s ).length) },

    not:function( n, c ){ n = $rule( n, c );  return this.filter(function(){return $.inArray( this, n ) == -1 }) },

    append:function( s ){var rules = this, rule;
        $.each( s.split(/\s*;\s*/),function(i,v){
            if(( rule = reStyle.exec( v ) )) {
                rules.css( rule[1], rule[2] )
            }})
        return this
    },

    text:function( txt ){return !arguments.length ? $rule.text( this[0] ) : this.each(function(){	$rule.text( this, txt ); })},

    outerText:function(){return $rule.outerText(this[0])}

}




$.each({
    ownerNode:owner,
    sheet:sheet,
    cssRules:rules
    },

    function( m, a ){
    var many = a == rules
        $.fn[m] = function(){
        return this.map(function(){ return many ? $.makeArray(this[a]) : this[a] })
    }
})




$.fn.cssText = function(){
    return this.filter('link,style').eq(0).sheet().cssRules()
        .map(function(){return $rule.outerText(this);}).get().join('\n')
}




$.each(

    'remove,appendTo,parent'.split(','),

    function(k,f){

        $rule.fn[f] = function(){var args = $.makeArray(arguments),
            that = this;args.unshift(0); return this.each(function( i ){
            args[0] = this;that[i] = $rule[f].apply( $rule, args ) || that[i]})}
    }
)




$.each(

    ('each,index,get,size,eq,slice,map,attr,andSelf,css,show,hide,toggle,queue,dequeue,stop,animate,fadeIn,fadeOut,fadeTo')
        .split(','),

    function( k, f ){$rule.fn[f] = $.fn[f];}

)





var curCSS = $.curCSS;


$rule.cache = {}

$.curCSS = function( e, a ){
    return ('selectorText' in e ) ? e.style[a] ||
    $.prop( e, a=='opacity'? 1 : 0,'curCSS', 0, a )
        : curCSS.apply(this,arguments)
}


$.data = mediator( $.data )
$.removeData = mediator( $.removeData )






function setArray(rl, q) {
    rl.length = 0;
    Array.prototype.push.apply(rl, q)
}




function mediator( orig ){var fn

 fn= function( el ){var g=G(arguments),id

        id= el.selectorText
        if( id ) {g.f = $rule.cache[id] = $rule.cache[id] || {}}
        return orig.apply( $, g )

 }





return fn}


function appendTo( r, ss, skip ){var p, rule
    switch( typeof ss ){//find the desired stylesheet
        case 'string': ss = this.sheets(ss);
        case 'object':
            if( ss[0] ) ss = ss[0];
            if( ss[sheet] ) ss = ss[sheet];
            if( ss[rules] ) break;//only if the stylesheet is valid
        default:
            if( typeof r == 'object' ) return r;//let's not waist time, it is parsed
            ss = storage

    }

    if( !skip && (p = this.parent(r)) ){r = this.remove( r, p )} //if this is an actual rule, and it's appended.
    rule = this.rule( r )
    if( ss.addRule ) {ss.addRule( rule[1], rule[2]||';') } //IE won't allow empty rules
    else if( ss.insertRule ) { ss.insertRule( rule[1] + '{'+ rule[2] +'}', ss[rules].length ) }
    return ss[rules][ ss[rules].length - 1 ] //return the added/parsed rule
}

