$l('bbRoute')

$P()

bb.R.x= bb.R.e =bb.R.extend

bbR.tr= bbR.trigger
bbR.ex=bbR.execute


bb.h.s=bb.h.start

rtr.n=function (url){var rt=this, g=G(arguments)

    if(g.n){rt.navigate(url)}
    else {

        rt.navigate(url, {trigger:true})
    }

    return rt
}
rtr.rp= function (url,op){var rt=this, g=G(arguments)
    if(g.n){
        rt.navigate(url, {replace:true})
    }

    else {rt.navigate(url, {trigger:true, replace:true})}
    return rt}
rtr.o=rtr.A = rtr.oR = function(rt,fn){

    var rtr=this
    if(O(rt)){
        _.e(rt,function(v,k){
            rtr.o(k,v)
        })
    }
    else {
        this.on('route:'+rt, fn)
    }
    return this
}

bb.h.tr=bb.h.trigger

$R=function(ob, ob1){var g=G(arguments), Rt,rtr

    if(O(ob1)){
        ob1.r=ob
        ob=ob1
    }

    if(ob.i){ob.initialize = ob.i
    }
    /*
     if(ob.$){ob.initialize = function(){
     $l('ob$! (see $R)')
     bb.history.start({pushState:true})
     if( F(ob.$ )){ob.$()}
     }}
     */

    ob.routes = ob.routes   ||  ob.rt || ob.r ||  {}

    ob.routes[''] = ob.routes[''] ||'index'

    if(ob.x){ob.index = ob.x}
    if(ob.h){ob.home = ob.h}

    Rt= bb.R.x(ob)
    if(g.n){
        return function(ob){
            return new Rt(ob)
        }
    }
    rtr= new Rt()

    if(!bb.History.started && !g.d){
        Backbone.history.start({pushState: true})

    }
    return r = rt = rtr


};
$R.h=function(){bb.h.start(); return $R}


ROUTE=function(){$.x()
    $R({r:{'*x':'d'}  })
    // r.o('d',function(a){$l('d:'+ a)}); r.o('e',function(a){$l('e:'+a)})
    r.o({
        d:function(a){$l('d:'+ a)},
        e:function(a){$l('e:'+a)}
    })
}
ROUTEPAMS=function(){$.x().A('hahahahhahaha')


    $R({   '':'home',
        'view':'v',
        'new': 'nn',
        ':id': 'en',
        'posts/:id':'gPo',
        '*acts':'dfR',
        'download/*path': 'dlF',
        ':route/:action': 'ldV'
    }, {
        home:function(){$l('home')},
        v:function(){$l('image')} ,
        nn:function(){},
        en: function(id){$l('id:'+id)}
    })

    r.o('dfR',$l)
    r.o('gPo',function(id){$l('gPo# '+id)})
    r.o('gPo', function(){$l(3)}) //both routes fire!
    r.o('dlF', $l)
    r.o('ldV', function(rt,ac){$l(rt+'_'+ac)})
}
ITEMS=function(){$.x().h3('jason')

    Ap={M:{},V:{},C:{}}

    Ap.M.Item = $M({})

    $R({r:{'':'welcome',
        'wap/items':'welcome1',
        'wap/items/itemlist':'showItemList',
        'wap/items/j':'j'},

        welcome:function(){
            $.bd().E().A($.h1('welcome'))},

        j:function(){
            $l('asdfjfsdafsdf')
        },

        showItemList:function(){$l('showItemList')
            $.bd().A($.h1('show item list'))}
    },'/')


    i1 = Ap.M.Item({n:'jason', g:'mason' })

    r.o('/wap/items/j',function(){
        $.bd().E().A(
            $.h1('j')
        )
    })
    r.o('/wap/items/q', function(){
        $.bd().E().A($.h1('q'))

    })

    bb.h.s({pushState:true})

    $.bt('add', function(){r.n('/wap/items/itemlist')})
    $.bt('add1', function(){
        $.A($.h1('k'))
        r.n('/wap/items/j')
    })

}
BACKDEMO=function(){$.x().d('yoo hoo').id('cont')


    $R({
        rt:{'':'f', 'f':'f', 's':'s',
            '/wap/items/q':q},

        q:function(){alert('q')},
        f:function(){$l('fir')},
        s:function(){$l('sec')},

        task:function(){t=new Task(); $l('t = new Task') }

    })


    Temp=function(i,h){var s=''

        return _.tp(
            $('#'+i).html(), h||{}
        )

        if(A(h)){
            _.e(h, function(h){
                s += h.oh()
            })

        }


        _str = "<script type='text/template'>"+  _str + "</script>"


        str= $(s)

        return $(s).id(i).A()

    }


    /*


     Temp('task', [

     $.lb('Task: '),
     $.ip().id('task_desc'),
     $.bt('add task').id('btn')
     ])


     Tsk=$V({el: $('#cont'),

     i: function(){this.r()},
     r: function(){this.$el.ht( Temp('task') )},
     e: {'click button': 'add'},
     add: function(){alert( $('#task_desc').v() + ' task added')}

     })
     */

    $.bt('sfad', function(){
        r.n('/wap/items/q')
    })
}
RTR=function(){$.x('b')

    RTob = {
        '': 'index',
        'wap/rtr/images/:id': 'image',

        view: 'viewImage'

    }

    $R({
        r: RTob,
        h: function () {$l('you are viewing home page')},
        x: function () {$l('you are viewing index')},
        image: function (id) {
            $l('image===')
            _.t(10, function () {
                $l($r() + '-id: ' + id)
            });
            $.bd().C('z')
        },
        viewImage: function () {
            $l('you are viewing an image')
        }

    })

    $.in(function () {$l('......')

        r.n('/wap/rtr/images/32903290239032902390')


    }, '*')
    //looks for clicks on any anchor els where
    //href starts with '/' (no domain) and stop
    //bw from nv to it


    $.bd().on('click', 'a[href^="/"]', function (ev) {
        $l('wow')
        ev.preventDefault()
        r.n($(this).attr('href', {trigger: true}))
    })

}
RNAV=function(){$.x('b')

    $R({r:{ 'po/:id': 'gp', '*a': 'dr'  },
        dr: function(a){$l(a)},
        gp: function(id){$.l$('Get post '+id)}
    })

    $.bt('hi', function(){
        rt.n('po/2')
    })
    $.bt('hi1', function(){
        rt.n('po/4')
    })

    r.o('wappy/rnav/j', function(){
        alert('!')
    })

    $.bt('hi1', function(){rt.n('wappy/rnav/j')
    })
}

/*
 md.oRt=function(n,f){var o=this
 //"route:[name]" (params)
 // — Fired by the router when a specific route is matched.
 // "route" (route, params)
 // — Fired by the router when any route has been matched.
 //"route" (router, route, params)
 // — Fired by history when any route has been matched.
 if(U(f)){return o.o('route', n)}
 return o.o('route:'+n, f)
 }
 */
/*

 "route" (router, route, params)   by hs when a  rt  matches
 "route" (route, params) —   by rtr when a route   matches
 "route:[name]" (params)     Fired by rtr when a specific route is matched.


Rtrs.Appl  = $R({

    r:{  account:  "account",
        "search/:query":   "search"   }
})

Rtrs.Mail = $R({

    'mail':     "mail",  'mail/inbox':    'inbox',
    'mail/:folder':   'folder,',
    'mail/compose':    'compose'


})


new Routers.Application
new Routers.Mail
new Routers.Calendar
new Routers.FindMyDevice

Backbone.History.start {pushState: on}

$(function(){  new WorkspaceRouter()  new HelpPaneRouter();
    Backbone.history.start({pushState: true}) })

 */



/*


 Routers
 In bb, routers provideway for you to connect URLs (either hash fragments, or real) to parts of your app.
 Any piece of your app that you want to be bookmarkable, shareable, and back-bt-able, needsURL.

 Some examples of routes using hash mark may be seen below:

 http://example.com/#about
 http://example.com/#search/seasonal-horns/page2
 An app will usually have at least one route mappingURL route to a fn that determines
 what happens when user reaches that route.


 continue pretending we’re creating a complex td app  that requires a complex TdRouter.

 TdRouter = bb.Rt.x({

 routes: {           "about" : "showAbout",    // Sample usage: http://example.com/#about

 "td/:id" : "getTd",  // ex of using":param" var which allows us to match  any of comps between two URL slashes  - Sample usage: http://example.com/#td/5 */
"search/:query" : "searchTds",        /* We can also define multiple routes that are bound to same map fn,
 in this case searchTds(). Note below how we're optionally passing in a     ref to page number if one is supplied */ http://example.com/#search/job */
"search/:query/p:page" : "searchTds",    // As we can see, URLs may contain as many ":param"s as we wish, http://example.com/#search/job/p1 */
    "tds/:id/download/*documentPath" : "downloadDocument",        // This is example of using*splat. Splats are able to match any number of
    URL components and can be combined with ":param"s*/          //   http://example.com/#tds/5/download/files/Meeting_schedule.doc
// If you wish to use splats for anything beyond default routing, leave them at end ofURL otherwise you may need to apply regex parsing on your fragment
"*other"    : "defaultRoute",        // This is df rt that also uses * splat. Consider the
    df rt a wildcard for unmatched or incorrectly typed URLs   // Sample usage: http://example.com/# <anything>
"optional(/:item)": "optionalItem",
    "named/optional/(y:z)": "namedOptionalItem"   }, // Router URLs also support optional parts via parentheses, without having to useregex.


showAbout: fn(){ },
getTd: fn(id){ $l("You are trying to reach td " + id)  },  // id matched in above rt   passed to this fn
searchTds: fn(query, page){$l("PgNum: "+ (page||1) + " of results for tds w word: "+query)},
downloadDocument: fn(id, path){},
defaultRoute: fn(oth){$l('Invalid. You attempted to reach:' + oth)}
})



tdRouter = new TdRouter()

pushState support via window.history.pushState.
    permits you to define routes such as
http://backbonejs.org/just/an/example.
will be supported with automatic degradation when user’s  bw doesn’t support pushState.
    Note that it is vastly preferred if you’re capable of also supporting pushState on server side,
    although it more difficult to implement.



    Is therelimit to number of routers I should be using?

    Andrew de Andrade has pointed out that DocumentCloud, creators of bb, usually only usesingle router in most of their apps.
    You’re very likely to not require more than one or two routers in your own projects; majority of your app routing can be kept organized insingle router without it getting unwieldy.

    bb.history
Next, we need to init bb.history as it handles hashchange evs in our app. This will automatically handle routes that have been defined and trigger cbs when they’ve been accessed.

    The bb.history.start() met will simply tell bb that it’s okay to begin monitoring all hashchange evs as follows:


TdRouter = bb.Rt.x({
    routes: {    "about" : "showAbout",
        "search/:query" : "searchTds",
        "search/:query/p:page" : "searchTds" },
    showAbout: fn(){},
searchTds: fn(query, page){    page_number = page || 1;    $l("Page number: " + page_number + " of results for tds containing word: " + query); }
})

tdRouter = new TdRouter();

bb.history.start();

// Go to and check console:
// http://localhost/#search/job/p3   logs: Page number: 3 of results for tds containing word: job
// http://localhost/#search/job      logs: Page number: 1 of results for tds containing word: job
// etc.

Note: To run last example,
    you’ll need to createlocal development environment and test project,
    which we will cover later on in book.

    If you would like to update URL to reflect app state at particular point,
    you can use router’s .navigate() met.
    By default,
it simply updates your URL fragment without triggering hashchange event:

//   imagine we would like spec fragment (edit) once user opens 1 td
    TdRouter = bb.Rt.x({
        rt: {    "td/:id": "viewTd",    "td/:id/edit": "editTd"},
        viewTd: fn(id){ $l("Vw td requested.");    this.navigate("td/" + id + '/edit'); // updates fragment for us, but doesn't trigger route},
    editTd: fn(id) {    $l("Edit td opened."); }
})

tdRouter = new TdRouter();

bb.history.start();

// Go to: http://localhost/#td/4
//
// URL is updated to: http://localhost/#td/4/edit
// but editTd() fn is not invoked even though loc we end up is mapped to it.
//
// logs: Vw td requested.
It is also possible for Router.navigate() to trigger route along with updating URL fragment by passing trigger:true option.

    Note: This usage is discouraged. The recommended usage is one described above which createsbookmarkable URL when your app transitions to spec state.

    TdRouter = bb.Rt.x({
    rt: {    "td/:id": "viewTd",    "td/:id/edit": "editTd" },
    viewTd: fn(id){    $l("Vw td requested.");    this.navigate("td/" + id + '/edit', {trigger: true}); // updates fragment and triggers route as well },
    editTd: fn(id) {    $l("Edit td opened.") }})
tdRouter = new TdRouter();
bb.history.start();

// Go to: http://localhost/#td/4 -> URL is updated to: http://localhost/#td/4/edit and this time editTd() fn is invoked.
//
// logs: Vw td requested. Edit td opened.
A “route” event is also triggered on router in addition to being fired on bb.history.

    bb.history.on('route', onRoute);

// Trigger 'route' event on router instance.
router.on('route', fn(name, args) {  $l(name === 'routeEvent') })

loc.replace('http://example.com#route-event/x');
bb.history.checkUrl();
 */