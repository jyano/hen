KOBVS=function(){_$({C:'o', t:'bind -visibile- to a boolean -great',  vm: 'vs',
    el:[ {ch:'see me if true!', $vs:'vs'},  {ch:'if false!', $vs:'!vs()'}  ],     //   OK( 'vs'  )  // <- OK( 'vs', $o(1)  )  //  <-ok({ vs: $o(1)  })
    _:function(){vm.vs(0);  $.in(function(){  vm.vs(1) }) }})}

KOAT=function(){_$({C:'w',t:'attributes.. unlikely to use?',  vm: {url: $o("year-end.html"), tt: $o("stats report")},
    A: [ $.aA('{href:url,title:tt}', 'report') ]})}

KOH=function(){_$({C:"o",  t:'koh bind -html-', vm: {html: $o('<div>afsdasdfds</div>')},
    A: $.dH('html'),
    _:function(){vm.html("<span> ..tadah ! </span>")}})}

KOS=function() {_$({ c:'v', t:'css example.. will i use it?', vm:{  n: $o(1)  },
    A:$.d(['info']).b("style: {color: n()<0?'red':'black'}"),
    _:function(){ vm.n(-5) } })}


//// plugin stuff below ////




ko.observableArray.fn.filterByProperty = function(propName, matchValue) {
    return ko.pureComputed(function() {
        var allItems = this(),
            matchingItems = [];
        for (var i = 0; i < allItems.length; i++) {
            var current = allItems[i];
            if (ko.unwrap(current[propName]) === matchValue)
                matchingItems.push(current)}
        return matchingItems
    }, this)
}


ko.bindingProvider.instance.preprocessNode = function(node){
    // Only react if this is a comment node of the form <!-- template: ... -->
    if (node.nodeType == 8) {

        var match = node.nodeValue.match(/^\s*(template\s*:[\s\S]+)/);

        if (match) {
            // Create a pair of comments to replace the single comment

            var c1 = document.createComment("ko " + match[1]),
                c2 = document.createComment("/ko");

            node.parentNode.insertBefore(c1, node);

            node.parentNode.replaceChild(c2, node);
            // Tell Knockout about the new nodes so that it can apply bindings to them
            return [c1, c2];
        }
    }
};




 // Prototype for an observable<->URL binding plugin.
// CAN'T FIND '$.address'
(function () {
        var currentParams = {},
            updateTimer

        function ensureString(value) {
            return ((value === null) || (value === undefined)) ? value : value.toString();
        }

        // Gives an address (URL) to a view model state
        ko.linkObservableToUrl = function (observable, hashPropertyName, defaultValue) {
            // When the observable changes, update the URL
            observable.subscribe(function (value) {
                var valueToWrite = value === defaultValue ? null : ensureString(value);
                if (currentParams[hashPropertyName] !== valueToWrite) {
                    currentParams[hashPropertyName] = valueToWrite;
                    queueAction(function () {
                        for (var key in currentParams)
                            $.address.parameter(key, currentParams[key]);
                        $.address.update();
                    });
                }
            });
            // When the URL changes, update the observable
            $.address.change(function (evt) {
                currentParams[hashPropertyName] = hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : null;
                observable(hashPropertyName in evt.parameters ? evt.parameters[hashPropertyName] : defaultValue);
            });
        }

        function queueAction(action) {
            if (updateTimer)
                clearTimeout(updateTimer);
            updateTimer = setTimeout(action, 0);
        }

       // $.address.autoUpdate(false)

    })()




ko.observableArray.fn.filterByProperty = function(propName, matchValue){
    return ko.pc(function() {
        var allItems  = this(), matchingItems = []
        for (var i = 0; i < allItems.length; i++) {var current = allItems[i]
            if (ko.unwrap(current[propName]) === matchValue)
                matchingItems.push(current) }
        return matchingItems
    }, this)
}



Task=  function (tt, done){   return {
    tt: ko.o(tt),
    done: ko.o(done)
}
}



FLVIEWPLG=function(){$.x('x')



    $.h3('All tasks').A($.spT('tasks().length'))

    $.ulE('tasks',[

        $.lL([
            $.cbC('done'), $.spT('tt')
        ])
    ])


    $.h3('Done tasks').A( $.spT('doneTasks().length') )

    $.ulE( 'doneTasks', [     $.liT('tt')    ] )




    tasks= ko.oa(
        Task('new background', 1), Task('stickers'), Task('reggae', 1)
    )
    ok({

        tasks :tasks,
        doneTasks :  tasks.filterByProperty("done", 1)
    })


    /*alt:
     this.doneTasks = ko.pureComputed(function() {
     var all = this.tasks(), done = [];
     for (var i = 0; i < all.length; i++)
     if (all[i].done())
     done.push(all[i]);
     return done;
     }, this);
     */






}




//requires simple grid
PAGEGRID=function(){$.x('r','page grid')


    //<div data-bind='simpleGrid: gridViewModel'> </div>

    $.d().b('simpleGrid', 'gridViewModel')

    $.bt('add').b$('addItem')
    $.bt('sortbyn').b$(' sortByName')
    $.bt('sortbyn').b$(' sortByName')
    $.bt('Jump to first page').b('en',
        'gridViewModel.currentPageIndex')

    PagedGridModel =  {

        items : $oa(

            { n: "Well-Travelled Kitten", sales: 352, $: 75.95 },
            { n: "Speedy Coyote", sales: 89, $: 190.00 },
            { n: "Furious Lizard", sales: 152, $: 25.00 },
            { n: "Indifferent Monkey", sales: 1, $: 99.95 },
            { n: "Brooding Dragon", sales: 0, $: 6350 },
            { n: "Ingenious Tadpole", sales: 39450, $: 0.35 },
            { n: "Optimistic Snail", sales: 420, $: 1.50 }
        ),


        addItem : function() {

            this.items.push(
                { n: "New item", sales: 0, $: 100 }
            )
        },

        sortByName : function() {
            this.items.sort(function(a, b) {
                return a.n < b.n ? -1 : 1 })
        },

        jumpToFirstPage : function() {
            this.gridViewModel.currentPageIndex(0)
        },

        gridViewModel : new ko.simpleGrid.viewModel({
            data: this.items, columns: [
                { hdrT: "Item Name", rowText: "n" },
                { hdrT: "Sales Count", rowText: "sales" },
                { hdrT: "Price",
                    rowText: function (item) {
                        return "$" + item.$.toFixed(2)
                    }}],

            pageSize: 4
        })
    }
    PagedGrid=  new PagedGridModel()

    ok(PagedGrid)


}









KOEXTALT=function(){
    //  http://codereview.stackexchange.com/questions/45909/prototype-inheritance-with-knockout-observables

    /*

     base classe:  subscribable
     subscribable <-  observable
     subscribable <- computed
     observable <- observableArray


     Adding custom functions using "fn"
     You can define custom functions on any of the following types:

     ko.subscribable.fn       ko.observable.fn      ko.observableArray.fn     ko.computed.fn

     Example: A filtered view of an observable array
     Here’s a way to define a "filterByProperty" function
     ko.observableArray.filterByProperty -see above :)
     It returns a new computed value that provides a filtered view of the array,
     while leaving the original array unchanged. Because the filtered array is
     a computed observable,
     it will be re-evaluated whenever the underlying array changes.
     ex how to use:  http://knockoutjs.com/documentation/fn.html



     <h3>All tasks (<span data-bind="text: tasks().length"> </span>)</h3>
     <ul data-bind="foreach: tasks">
     <li>
     <label>
     <input type="checkbox" data-bind="checked: done" />
     <span data-bind="text: title"> </span>
     </label>
     </li>
     </ul>

     <h3>Done tasks (<span data-bind="text: doneTasks().length"> </span>)</h3>
     <ul data-bind="foreach: doneTasks">
     <li data-bind="text: title"></li>
     </ul>

     */

    function VM() {
        this.tasks = ko.oa([
             Task('Find new desktop background', true),
             Task('Put shiny stickers on laptop', false),
             Task('Request more reggae music in the office', true)
        ])


        this.doneTasks = this.tasks.filterByProperty("done", true)
    }

    ok(new VM())

    //    not mandatory
    /*



     If you tend to filter observable arrays a lot,
     adding a filterByProperty globally to all observable arrays might make your code tidier.
     But if you only need to filter occasionally,
     you could instead choose not to attach to ko.observableArray.fn,
     and instead just construct doneTasks by hand as follows:


     */
    this.doneTasks = ko.pc(function(){var all,done
        all = this.tasks()
        done = []
        for (var i = 0; i < all.length; i++){
            if (all[i].done()) {
            done.push(all[i])}}
        return done} , this)
}









// SCRIPTING??!
KOSCR=function(){z();$.bd().A(
    $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
);// kob= ko.observable.prototype; kob.rm= kob.remove

    ko.b({})}



/// local storage
bbLocStorPLUG=function(){
    (function (root, factory) {
        if (typeof exports === 'object' && typeof require === 'function') {
            module.exports = factory(require("backbone"));
        } else if (typeof define === "function" && define.amd) {
            // AMD. Register as an anonymous module.
            define(["backbone"], function(bb) {
                // Use global variables if the locals are undefined.
                return factory(bb || root.bb);
            });
        } else {
            factory(bb);
        }
    }(this, function(bb) {
// A simple module to replace `bb.sync` with *localStorage*-based
// persistence. Models are given GUIDS, and saved into a JSON object. Simple
// as that.

// Generate four random hex digits.
        function S4() {
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };

// Generate a pseudo-GUID by concatenating random hexadecimal.
        function guid() {
            return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
        };

        function isObject(item) {
            return item === Object(item);
        }

        function contains(array, item) {
            var i = array.length;
            while (i--) if (array[i] === item) return true;
            return false;
        }

        function extend(obj, props) {
            for (var key in props) obj[key] = props[key]
            return obj;
        }

        function result(object, property) {
            if (object == null) return void 0;
            var value = object[property];
            return (typeof value === 'function') ? object[property]() : value;
        }

// Our Store is represented by a single JS object in *localStorage*. Create it
// with a meaningful name, like the name you'd give a table.
// window.Store is deprectated, use bb.LocalStorage instead
        bb.LocalStorage = window.Store = function(name, serializer) {
            if( !this.localStorage ) {
                throw "bb.localStorage: Environment does not support localStorage."
            }
            this.name = name;
            this.serializer = serializer || {
                    serialize: function(item) {
                        return isObject(item) ? JSON.stringify(item) : item;
                    },
                    // fix for "illegal access" error on Android when JSON.parse is passed null
                    deserialize: function (data) {
                        return data && JSON.parse(data);
                    }
                };
            var store = this.localStorage().getItem(this.name);
            this.records = (store && store.split(",")) || [];
        };

        extend(bb.LocalStorage.prototype, {

            // Save the current state of the **Store** to *localStorage*.
            save: function() {
                this.localStorage().setItem(this.name, this.records.join(","));
            },

            // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
            // have an id of it's own.
            create: function(model) {

                if (!model.id && model.id !== 0) {
                    model.id = guid()
                    model.set(model.idAttribute, model.id)

                }

                this.localStorage().setItem(this._itemName(model.id),
                    this.serializer.serialize(model))
                this.records.push(model.id.toString())
                this.save();
                return this.find(model)
            },

            // Update a model by replacing its copy in `this.data`.
            update: function(model) {
                this.localStorage().setItem(this._itemName(model.id),
                    this.serializer.serialize(model))
                var modelId = model.id.toString()
                if (!contains(this.records, modelId)) {
                    this.records.push(modelId)
                    this.save()
                }
                return this.find(model)
            },

            // Retrieve a model from `this.data` by id.
            find: function(model) {
                return this.serializer.deserialize(
                    this.localStorage().getItem(this._itemName(model.id)))
            },

            // Return the array of all models currently in storage.
            findAll: function() {
                var result = []
                for (var i = 0, id, data; i < this.records.length; i++) {
                    id = this.records[i]
                    data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
                    if (data != null) result.push(data)
                }
                return result
            },

            // Delete a model from `this.data`, returning it.
            destroy: function(model) {
                this.localStorage().removeItem(this._itemName(model.id));
                var modelId = model.id.toString();
                for (var i = 0, id; i < this.records.length; i++) {
                    if (this.records[i] === modelId) {
                        this.records.splice(i, 1);
                    }
                }
                this.save();
                return model;
            },

            localStorage: function() {
                return localStorage;
            },

            // Clear localStorage for specific collection.
            _clear: function() {
                var local = this.localStorage(),
                    itemRe = new RegExp("^" + this.name + "-");

                // Remove id-tracking item (e.g., "foo").
                local.removeItem(this.name);

                // Match all data items (e.g., "foo-ID") and remove.
                for (var k in local) {
                    if (itemRe.test(k)) {
                        local.removeItem(k);
                    }
                }

                this.records.length = 0;
            },

            // Size of localStorage.
            _storageSize: function() {
                return this.localStorage().length;
            },

            _itemName: function(id) {
                return this.name+"-"+id;
            }

        })

// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and bb.localSync is deprecated, use bb.LocalStorage.sync instead
        bb.LocalStorage.sync = window.Store.sync = bb.localSync = function(method, model, options) {
            var store = result(model, 'localStorage') || result(model.collection, 'localStorage');

            var resp, errorMessage;
            //If $ is having Deferred - use it.
            var syncDfd = bb.$ ?
                (bb.$.Deferred && bb.$.Deferred()) :
                (bb.Deferred && bb.Deferred());

            try {

                switch (method) {
                    case "read":
                        resp = model.id != undefined ? store.find(model) : store.findAll();
                        break;
                    case "create":
                        resp = store.create(model);
                        break;
                    case "update":
                        resp = store.update(model);
                        break;
                    case "delete":
                        resp = store.destroy(model);
                        break;
                }

            } catch(error) {
                if (error.code === 22 && store._storageSize() === 0)
                    errorMessage = "Private browsing is unsupported";
                else
                    errorMessage = error.message;
            }

            if (resp) {
                if (options && options.success) {
                    if (bb.VERSION === "0.9.10") {
                        options.success(model, resp, options);
                    } else {
                        options.success(resp);
                    }
                }
                if (syncDfd) {
                    syncDfd.resolve(resp);
                }

            } else {
                errorMessage = errorMessage ? errorMessage
                    : "Record Not Found";

                if (options && options.error)
                    if (bb.VERSION === "0.9.10") {
                        options.error(model, errorMessage, options);
                    } else {
                        options.error(errorMessage);
                    }

                if (syncDfd)
                    syncDfd.reject(errorMessage);
            }

            // add compatibility with $.ajax
            // always execute callback for success and error
            if (options && options.complete) options.complete(resp);

            return syncDfd && syncDfd.promise();
        };

        bb.ajaxSync = bb.sync

        bb.getSyncMethod = function(model, options) {
            forceAjaxSync = options && options.ajaxSync
            if(!forceAjaxSync && (result(model, 'localStorage') ||
                result(model.collection, 'localStorage'))) {
                return bb.localSync}
            return bb.ajaxSync
        }
// Override 'bb.sync' to default to localSync,
// the original 'bb.sync' is still available in 'bb.ajaxSync'

        bb.sync = function(met, md, op) {
            return bb.getSyncMethod(md, op).apply(this, [met, md, op])}
        return bb.LocalStorage
    }))

}
BBLS=function(){$.x()
    bbLocStorPLUG()
    Cl = bb.C.e({
        localStorage: new bb.LocalStorage('clN')
    })
}



/// WHAHTAHTHAHTHATH/???@?@?@???@@@  THIS IS SSERVER SIDE ADFSKLDJFKSDJF;JFAKAL;
KOSERV=function(){
    var express    = require('express'), app  = module.exports = express.createServer()
    app.configure(function(){
        app.use(express.bodyParser());
        app.use(app.router);
        app.use(express.static(__dirname + '/static'));  //static stuff
        app.use(express.static(__dirname + '/../libs')); //js files
    });
    app.get('/tasks', function (_,response) {
        response.send(
            [ { "title": "Wire the money to Panama", "isDone": true }
                , { "title": "Get hair dye, beard trimmer, dark glasses and \"passport\"", "isDone": false}
                , { "title": "Book taxi to airport", "isDone": false }
                , { "title": "Arrange for someone to look after the cat", "isDone": false }
            ]);
    });
    app.post('/tasks', function (request,response) {
        response.send(request.body); //echo
    });
    app.listen(process.argv[2]||8080);
    process.on('uncaughtException', function(err) {
        console.log(JSON.stringify(err));
    });
    console.log('servers up!');
}
