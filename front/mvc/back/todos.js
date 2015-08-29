
// uses constructor function to make class

bb.lS= bb.LocalStorage = function(n) {var ls=this
    ls.n=n
    ls.d = ( $ls.g(n) && $ls.g(n).split(',') ) || [] }


_.x(bb.lS.prototype, {

    s: function() { $ls.s(this.n, this.d.join(',')) },  // Save the cur state of the lS


    c: function(m){if(!m.id){   m.id = guid();  m.set(m.idAttribute, m.id)}
        $ls.s(this.n+"-"+m.id, _.jS(m))
        this.d.push(m.id.tS())
        this.s();   return this.f(m)},   // Add a md, giving it a (hopefully)-unique GUID, if it doesn't already// have an id of it's own.

    u: function(m) {$ls.s(  this.n+"-"+m.id,   _.jS(m)  )
        if(!_.ic(this.d, m.id.tS())){this.d.push(m.id.tS()); this.s()}
        return this.f(m) }, // Update a md by replacing its copy in `this.d`.

    f: function(m) {return this.j( $ls.g(this.n +"-"+m.id) )},  // Retrieve a m from `this.d` by id.
    a: function(){return _(this.d).chain().m(function(id){return this.j($ls.g(this.n+'_'+id))}, this).cp().v()}, // Ret [ stored mds ]

    x: function(m){if (m.isNew()){ return false };
        $ls.rm(this.n+ "-" +m.id)
        this.d = _.rj(this.d, function(id){ return id === m.id.tS() })
        this.s(); return m},  // Delete a md from `this.data`, returning it.


    localStorage: function(){ return localStorage    },

    j: function (d) {  return d  && _.jP(d)  } // fix for "illegal access" error on Android when JSON.parse is passed null

})



bb.lS.sync =  Store.sync = bb.localSync = function(method, m, options) {
// localSync delegate to the md or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Backbone.localSync is deprectated, use Backbone.LocalStorage.sync instead

    d = m.localStorage ||   m.collection.localStorage;

    syncDfd = $.Deferred && $.Deferred()

    //If $ is having Deferred - use it.

    try {switch (method) {case "read":resp = D(m.id)? d.find(m): d.findAll(); break;
            case "create": resp = d.c(m); break;
            case "update": resp = d.u(m); break;
            case "delete":resp = d.d(m); break;} }
    catch(z) {zMsg = (z.code === DOMException.QUOTA_EXCEEDED_ERR && localStorage.length === 0)?  "Private browsing is unsupported": z.message}

    if (resp) {
        if (op  && op .success)  {  }
        if (bb.VERSION === "0.9.10") {options.success(m, resp, options) }
        else {op .success(resp)}
        if (syncDfd){ syncDfd.resolve(resp) }
    }
    else {

        errorMessage = errorMessage ? errorMessage : "Record Not Found";


        if (options && options.error)

            if (Backbone.VERSION === "0.9.10") {options.error(m, errorMessage, options) }
            else {options.error(errorMessage)}

        if (syncDfd){ syncDfd.reject(errorMessage)}
    }

    // add compatibility with $.ajax
    // always execute callback for success and error
    if (options && options.complete) {options.complete(resp) }


    return syncDfd && syncDfd.promise()

}







bb.getSyncMethod = function(m) {
        return (m.localStorage || (m.collection && m.collection.localStorage))?
            bb.localSync: bb.ajaxSync}




bb.ajaxSync = bb.sync
bb.sync = function(met, m, op ) {
    // Override bb.sync  to default to localSync   (orig   bb.sync still avail  in bb.ajaxSync)
    return bb.getSyncMethod(m).apply(bb, [met , m, op ])}




TODOS=function(){$.x('x', 'todos');  $.dI('instructions').A('Double-click to edit a todo.')//  http://jgn.me/     demo uses simp  [lS adapter](backbone-localstorage.html) to persist bb  mds within your bw  // Load the app when DOM ready
    $.dI('todoapp').A($("<header>").A($.h1('todos'), $.ip().id('new-todo').at({placeholder:"What needs to be done?"}) ),
        $('<section>').id('main').A($.cb().id('toggle-all'), $.lb('Mark all as complete').for('toggle-all'), $.ul().id('todo-list')),
        $('<footer>').A($.a('Clear completed').id('clear-completed'), $.dI("todo-count")))











    // <script type="text/template" id="stats-template">
    if(o.done){$.a().id("clear-completed").A( 'Clear' + o.done + 'completed' +  o.done==1?'item':'items' )}
    $.d([$.b().A(o.remaining), o.remaining==1? 'item':'items', 'left']).K('td-count') //  </script>
    Td = $M({d: function() {  return {tt: 'empty..', ord: tdL.nOrd(), done: false}}, i: function(){if(!this.g('tt')){this.s({tt: this.df().tt})}}, gg: function() {this.s({  done: !this.g('done')})  }})


    TdVw = $V({
        t:'li',
        tp: function(o){return $.d([
            $.d([$.cb().K('toggle').at('checked',o.done? 'checked':  false  ),
                $.lb(o.tt), $.a().K('destroy') ]).K('view'),
            $.ip().v(o.tt).K('edit')])},
        r: function(){var v=this
            this.q.h( this.tp( this.model.J() ));
            this.q.ggK('done', this.g('done'));
            this.ip = this.$('.edit');
            return this
        }, // Re-render the titles of the toodo item.





        e: {  "click .toggle"   : "toggleDone", "dblclick .view"  : "edit", "click a.destroy" : "clear", "keypress .edit"  : "updateOnEnter", "blur .edit"      : "close"},
        i: function(){var vw=this; vw.l2(vw.md, 'change', vw.r );  vw.l2(vw.md, 'destroy', vw.rm)},  //tdV listens for md changes, re-rendering. // Since there's  a 1x1 corr btwn a td/tdV   we set a direct ref  on the md for convenience


        ggDone: function() { this.md.gg() },   // Toggle the `"done"` state of the md.
        ed: function(){this.q.K("editing"); this.ip.focus() }, // Switch this view into `"editing"` mode, displaying the input field.
        close: function() {var v   = this.ip.v(); if (!v) {  this.clear()   } else {this.md.s({tt: v }); this.q.xK("editing")}},// Close the `"editing"` mode, saving changes to the toddo.
        updOnEnter: function(e) {  if (e.keyCode == 13) {this.close()}}, // If you hit `enter`, we're through editing the item.
        clr: function(){this.md.destroy()}    })// Rm item, destroy  md.




    TdLs = $Cl({ m: Td, // todos cl backed by lS, !remote-server.
        lS: new bb.LS('tds-bb'), // Save   under the `"todos-backbone"` nspace.
        done:function(){ return this.fl(function(td){return td.g('done') }) }, // Filter down the ls of all finished tds
        remain: function(){return this.wo.apply(this, this.done())}, // Filter down the ls to only unfinished tds    //without
        nOrd: function(){ return !this.length? 1: this.last().g('ord')+1}, //   gens the next order num   for new items
        compor: function(td){ return td.g('ord') }// tds sorted by orig insert ord  // tds kept sorted in seq ord  // desp being saved by unord GUID in db
    }); tdL=TdLs()

    ApVw = $V({// ApVw is top-lvl// Instead of geng new el,// bind to the existing skel  of // the Ap  already present in the HT
        q: $( '#tdapp' ), statsTp: _.tp( $('#stats-template').h()), // Our tp for the ln of stats  at   bottom of the app.
        e : {"keypress #new-todo":  "createOnEnter", "$ #clear-completed": "clearCompleted", "$ #toggle-all": "toggleAllComplete" },// Delegated events for:// creating new items, clearing completed ones.
        i : function() {    var vw=this// At init we bind to relv evs on Todos`cl, when items addd/chd. Kick things off by // loading any preexisting todos that might be saved in lS
            vw.ip = $("#new-td"); vw.aCb = $("#gg-a")[0]; vw.main = $('#main'); vw.ftr = vw.$('ftr')
            vw.l2(TdL, 'add', vw.A1); vw.l2(TdL, 'reset', vw.Aa); vw.l2(TdL, 'all', vw.r); TdL.fet() },
        r: function(){// Re-rendering the App just means refreshing the statistics -- the rest // of the app doesn't change.
            var done = TdL.done().length, remain  = TdL.remain().length;if (TdL.length) {this.main.show(); this.ftr.show(); this.ftr.h(  this.statsTp({   done: done, remain: remain    }))} else { this.main.hd(); this.ftr.hd()}
            this.aCb.checked = !remain},
        a1: function(td) {  $("#td-ls").A(   TdVw({md: td}).r().q   )},  // Add a single td i  to the ls // by cr  a vw for it, and appending its el  to the `<ul>`.
        aA: function(){  TdL.e(this.A1, this)},
        crOnEnter: function(e) { if (e.keyCode != 13) {return}; if (!this.ip.v()) {return}; tdL.cr({tt: this.ip.v()}); this.ip.v('')},// Add a i in  **TdL** cl tog // If you hit ret  in the main ip field, cr // new ** td ** md,// persisting it to lS.
        clrCompleted: function() {_.iv(TdL.done(), 'destroy'); return false}, // Clear all done toodo items, destroying their mds.
        ggAllDone: function () {var done = this.aCb.checked; TdL.e(function (td) {td.s({'done': done})})}}); Ap = ApVw()
    function S4() {var s4 = 1 + M.random(); s4  = (s4*0x10000)|0; s4=s4.toString(16).substring(1); return s4 }   // Gen  four rand  hex digits
    function guid() {return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())} }// Generate a pseudo-GUID by concatenating random hexadecimal. // Our Store is rep by a single JS object in *localStorage*. Create it with a meaningful n, like the n you'd give a table.

