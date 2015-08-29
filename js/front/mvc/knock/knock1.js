

knock1=function(){

    KOCL=function(){$.x('x').h2('Peeep')

        Per = function(n, ch) {var per=this
            per.n = n
            per.ch = ko.oa(ch)

            per.A = function(){  per.ch.push('new ch')    }

        }



        peep= [
            new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
            new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
            new Per("Charles", ["Cayenne", "Cleopatra"])
        ]


        $.uE('peep',[


            $.li().A(

                $.d([
                    $.spT('n'), 'has',
                    $.spT('ch().length'),
                    'children &nbsp;',
                    $.a$('New','A')

                ]),

                $.ulE('ch',[
                    $.li([

                        $.spT(), $.spVs( '$root.showDT').A(
                            ' (child rendered at ', $.spT('$Dt().getSeconds()'),')'

                        )])

                ])

            )

        ])
        $.cbC('showDT').a2Lb('Show time:')

        //anonymous vm

        OK({  peep: peep, showDT: kO()   })




    }


    SELOP=function(){d= $.d()

        $.x(null,
            'selectedOptions')



        $.p('Where?',

            $.sl().at({
                size: 5,
                multiple: true
            }).b({  o: 'available', so: 'chosen'

            }))

        ok({

            available  : ko.oa(
                ['France', 'Germany', 'Spain']),
            chosen  : ko.oa(
                ['Germany'])})

        $.in(function(){
            vm.chosen.push('France')
        },'*')
    }




    $.fn.b =$.fn.ko=  function(a,b){

        KOob= {

            t:'text',
            h:'html',
            s:'css',
            y:'style',
            a:'attr',
            e:'foreach',
            i:'if', n:'ifnot', w:'with',
            $:'click',
            ev:'event',
            sb:'submit',
            en:'enable',
            d:'disable',
            V:'valueUpdate',
            vs:'visible',
            f:'hasFocus',
            c:'checked',
            ch:'checked',
            v:'value',  o:'options',
            ti:'textInput',
            so:'selectedOptions',
            u:'uniqueName',
            tp:'template',
            cm:'component'
        }

        var o=[]

        if(O(a)){
            _.e(a, function(v,k){
                if(KOob[k]){k=KOob[k]}
                o.push(k + ':'+ v)
            })
            this.at({'data-bind': $l( o.join() )
            })
        }

        else {

            if(KOob[a]){a=KOob[a]}
            // str= oO('b', a)
            str= a +':'+b;  //$l(': '+ str  )


            this.at({'data-bind': str  })}
        return this

    }
    $.scrp= function(i){ return   $("<script type='text/html'>").id(i)}
    ko.bh=ko.BH=ko.bindingHandlers
    ko.u= ko.ut=ko.utils
    ko.u.af= ko.u.arrayFilter
    ko.o= ko.observable
    ko.c= ko.computed
    ko.oA=ko.observableArray
    ko.oa = $oa=function(a){
        var g=G(arguments), a=g[0]
        if(!A(a)){a=g}
        return ko.oA(a)
    }
    ko.do= ko.dependentObservable
    ko.pc= ko.pureComputed
    VIRTUALELS=function(){

        ko.bh.randomOrder = {
            init: function(el, valueAccessor) {

                // Build an array of child elements
                var ch = ko.vE.firstChild(el),
                    CH = []
                while(ch){
                    CH.push(ch)
                    ch = ko.vE.nextSibling(ch)
                }
                // Remove them all, then put them back in a random order
                ko.vE.emptyNode(el)
                while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}

            }

        }
    }
    $o=function(a){
        return ko.o(a)
    }
    ok= $b=ko.b=ko.ab= function(o,b){var g=G(arguments),ob

        if(S(o)){
            ob={}
            ob[o] = b
            g[0] = ob
        }

        if(O(g[0])){
            vm=g[0];
            return ko.applyBindings(g[0])
        }

        return ko
    }
// ko.b({ g[0]:  ko.o(b) })
    ko.rTp=ko.renderTemplate
    ko.cm=ko.components
    ko.cm.rg=ko.cm.register
    $.fn.par=function(a,b){this.at('params', a+': ' + b ); return this}
    $.fn.qA=function(t){return $('<'+t+'>').A()}
    $.fn.qAP=function(a,b,c){
        this.qA(a).par(b, c)
        return this
    }
    ko.ve=ko.vE= ko.virtualElements
    ko.B=ko.ve.ab=ko.vE.AB=ko.vE.allowedBindings
    ko.ut.uo=ko.ut.unwrapObservable
    ko.r=ko.rg=function(n, ob){
        ob=ob||{}
        if( S(ob.vm) || (O(ob.vm) && !ob.vm.element)){ob.vm={element: ob.vm}}

        ob.viewModel=ob.viewModel||ob.vm||ob.m||ob.o

        if(U(ob.viewModel)){ob={vm:ob}}


        ob.template = ob.template || ob.tp || ob.t
        vm=ob
        return ko.cm.rg(n,ob)
    }
    ko.cm.iR=ko.cm.isRegistered
    ko.c=ko.computed
    ko.o=ko.observable
    ko.bD=ko.applyBindingsToDescendants
    $.a$=function(t,fn){return $.a(t).b('$', fn)}
    $.spVs=function(a){return $.sp().b('vs',a)}
    $.fn.a2Lb=function(t){t=t||'label:'
        return this.a2($.lb(t))
    }
    $.fn.bT=function(s){s=s||'$data'
        return  this.dB( 'text: '+ s)
    }

    $.fn.bE=function(s){
        return this.dB( 'foreach: '+ s )
    }


    $.fn.bV=function(s){var g=G(arguments)
        str = "value: " + s
        if(!g.n){str += ", valueUpdate: 'afterkeydown'"}
        this.dB(  str )
        return this}
    $.fn.bCm=function(s){return this.dB('component: '+ s  )}
    $.fn.bH=function(s){return this.dB('html: '+ s  )}
    $.fn.bS=function(s){return this.dB('css: '+ s  )}
    $.fn.bY=$.fn.bSy=function(s){return this.dB('style: '+ s  )}
    $.fn.bA= $.fn.bAt= function(s){
        return this.dB('attr: '+ s  )}
    $.fn.bI= $.fn.bIf=function(s){return this.dB('if: '+ s  )}
    $.fn.bN= $.fn.bIN=function(s){return this.dB('ifnot: '+ s  )}
    $.fn.bW=function(s){return this.dB('with: '+ s  )}
    $.fn.b$=function(s){return this.dB('click: '+ s  )}
    $.fn.bEv=function(s){return this.dB('event: '+ s  )}
    $.fn.bSb=function(s){return this.dB('submit: '+ s  )}
    $.fn.bEn=function(s){return this.dB('enable: '+ s  )}
    $.fn.bD=function(s){return this.dB('disable: '+ s  )}
    $.fn.bVs=function(s){return this.dB('visible: '+ s)}
    $.fn.bC=function(s){return this.dB('checked: '+ s)}
    $.fn.bF=function(s){return this.dB('hasFocus: '+ s)}
    $.fn.bO=function(s){return this.dB('options: '+ s)}
    $.fn.bSO=function(s){return this.dB('selectedOptions: '+ s)}
    $.fn.bTI=function(s){return this.dB('textInput: '+ s)}
    $.fn.bU= $.fn.bUN=function(s){return this.dB('uniqueName: '+ s)}
    $.fn.bTp=function(s){return this.dB('template: '+ s)}
    $.fn.koE=$.fn.eKo= function(a){return this.bindKO('fe',a)
    }
    $.fn.eD=$.fn.eB=  function(a){
        return this.bindKOEach('$data.'+a)
    }
    $.fn.dB=function(dB){return this.at({'data-bind': dB })}
    $.fn.bTi=function(a){
        return this.b({ti: a})
    }
    $.dT=function(a){return $.d().bT(a)}
    $.iV=$.ipV=$.ipBv=function(){var g=G(arguments),ip

        ip = $.ip()

        ip.bV.apply(ip, g)

        return ip
    }
    $.fSb=$.fBsb=function(a,b){

        var f = $.f()

        f.bSb(a)

        if(A(b)){_.e(b, function(b){
            f.A(b)
        })}


        return f

    }
    $.olE=$.olBe=function(a,b){var ol= $.ol().bE(a)

        if(b){ol.A(b)}
        return ol
    }
    $.tdT=function(a,b){var td=$.td()
        td.bT(a)
        if(A(b)){_.e(b,function(el){td.A(el)})}
        return td}
    $.liT=$.liBt=function(a){

        return $.li().bT(a)
    }
    $.bt$=$.btB$=function(a,b,c){
        var bt=   $.bt(a).b$(a)

        if(c){bt.bEn(c)}

        return bt
    }
    $.dW=$.dBw=function(a,b){

        var d=  $.d().bW(a)
        if(A(b)){_.e(b,function(b){
            d.A(b)
        })}
        return d
    }
    $.sT=$.spT= function(a,b){
        a=a||'$data'
        return $.sp(b).bT(a)
    }

    $.uE=$.ulE=function(a,b){

        var ul=  $.ul().bE(a)
        if(A(b)){
            _.e(b,function(el){
                ul.A(el)
            })}
        else if(S(b)){
            ul.A(b)
        }
        return  ul
    }

    $.dE=function(a,b){

        var d=  $.d().bE(a)
        if(A(b)){
            _.e(b,function(el){
                d.A(el)
            })}
        else if(S(b)){
            d.A(b)
        }
        return  d
    }
    $.tBE=function(a,b){
        var tB= $.tB()
        tB.bE(a)
        if(A(b)){_.e(b, function(el){tB.A(el)})}
        return tB
    }
    $.h1T=$.h1Bt=function(a,b){
        var h1= $.h1(a)
        h1.bT(b||a)
        return h1

    }
    $.pT=function(a){
        var p = $.p()
        p.bT(a)
        return p
    }
    $.dIf=function(a,b){
        var d =  $.d().bI(a)
        if(A(b)){_.e(b,function(b){d.A(b)})}
        return d
    }
    $.sO=$.slO=function(a){
        return $.sl().bO(a)
    }
    $.ipTi=function(a){return $.ip().bTi(a)}
    $.pwTi=function(a){return $.pw().bTi(a)}
    $.$bt=function(a,b){var g=G(arguments)

        b=b||a
        if(g.n){
            b = '$parent.'+b
        }

        return $.bt(a).b$(b)

    }
    $.dCm=function(a){return $.d().bCm(a)}
    $.cC=$.cbC=function(a){
        return $.cb().bC(a)
    }
    $.pI=function(a,b,c,d){
        var p= $.p(b,c,d).bI(a)
    }
    $.dH=function(a){return $.d().bH(a)}
    $.U=function(){var g=G(arguments)
        return $.uE(g.f,[$.li(g.s)])}

    $.s$=function(a,b,c,d){return $.sb(b,c,d).b$(a)}

    oA= ko.observableArray.fn
    oA.p = function(i){var  oA=this
        oA.push(i)
        return oA
    }



    KO0 =function(){$.x(); $.ipV('n'); $.h1T('n')
        $.ulE('arr', [$.liT()])
        $.sb().b$('A')
        $.dA('b',100,300,200,'+').bT('n')

        ok({n:ko.o('zi'), arr: ko.oa(),
            A:function(){this.arr.push(this.n())} }) // ok('n', ko.o('zi'))

        $.in(1, function(){
            vm.n('girf')
            _.e(['a','b','c'], function(i){
                vm.arr.push(i)})},'*')
    }




    KOE=function(){$.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]),
        $.tBE('peep', [
            $.tr([
                $.tdT('f'),
                ', ',
                $.tdT('l')
            ])
        ])])
        ok({ peep: [
            {f:'a',l:'A'},
            {f:'b',l:'B'},
            {f:'c',l:'C'}
        ]})

    }


    kA=function(){

        var g=G(arguments)

        return ko.oa(g.A_? g.f: g)

    }



    kO=function(){

        var g=G(arguments)


        return ko.o.apply(ko, g)

    }

    OK=ok


//bE, observableArray
    KOOA=function(){$.z()



        $.dE('peep', [

            $.p(

                $.bt('push',function(){

                    vm.peep.push({f:'j',l:'y'})

                }),

                $.spT('f'),    ' ',   $.spT('l'))

        ])



        OK('peep', kA(
            {f:'B',l:'Bb'},
            {f:'C',l:'Cc'},
            {f:'D',l:'Dd'}))

    }






//bind 'visibile' to a boolean
    KOBVS=function(){$.z('y').h1('see me if true!')
        .bVs('vs')

        $b('vs', ko.o(1))


        $.in(function(){
            vm.vs(0)

            $.c$()

            $.in(function(){
                vm.vs(1)
                $.c$()
            })

        })
    }





//bind cb 'checked' to boolean
    SPAM=function(){$.x()

        $.cbC('spam').a2( $.p('spam? ') )

        $b({ spam: ko.o(1)})
        $.in(2, function(){vm.spam(0);$.c$()})
    }
//bind 'option'

    KOSL=function(n,v){$.x('o').h1('dests')

        $.slO('cunts')

        ok('cunts',
            ko.oa('Fran', 'Ger', 'Spa'))

        $.in(2,function(){
                vm.cunts.push('Chi')},
            '*'
        )
    }

    $.pre=function(){return  $("<pre>").A()}

    KOIP=function(){$.z('x')

        $.p('Login name:').A( $.ipTi('un') )

        $.p('Pw:').A( $.pwTi('pw') )

        // $.p(['Pw:', $.pwTi('pw')])

        //<p> <input type="password" data-bind="textInput: userPassword" /></p>


        $.A(
            'vm: ',
            $.pre().bT('ko.toJSON($root, null, 2)')
        )



        ok({un: ko.o(''), pw: ko.o('abc')})
    }


//bT,bV and computed
    COMP=function(){$.z().h1('KNOCKOUT')

        $.d([
            $.p('F: ', $.b().bT( 'f')),
            $.p('L: ', $.b().bT( 'l') ),
            $.p('F: ', $.ip().bV( 'f') ),
            $.p('L: ', $.ip().bV( 'l') ).id('l'),
            $.p('L: ', $.b().bT('fL') ),
            $.bt('caps').b$('capL')
        ]).A()


        ok({
            f:ko.o('j'),
            l:ko.o('y'),
            fL : ko.c(function(){
                return this.f()+' '+this.l()}),
            capL :function(){this.l(S.tU(this.l()))}
        })



    }

    TASKS=function(){$.z().h3('Tasks')

        $.f().bSb('aT').A().A("Add task: ",
            $.ip().bV('nT').ph("What?"),
            $.bt('Add')//.bS('s') // ??
        )

        $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
            $.cb().bC( 'iD' ),
            $.ip().b("value:t, disable:iD"),
            $.bt('Del').bC( '$parent.rmT' )))


        $.sp("You have").A()
        $.B("&nbsp;").bT( "inc().length").A()
        $.sp("inc task(s)").A()
        $.sp("- beer!").bV("inc().length==0").A()

        ko.b({

            itemToAdd:ko.o(''),

            allItems:ko.oa(['a','b','c']),

            selectedItems:ko.oa(['d']),
            addItem:function(){
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());
                    vm.itemToAdd('')
                }
            },

            removeSelected:function(){
                allItems.removeAll(vm.selectedItems())
                selectedItems([])
            },
            sortItems:function(){vm.allItems.sort()}
        })


        vm2={
            ts: ko.oa(),
            nT: ko.o(),
            inc : ko.c(function(){  var vm=this
                    return ko.ut.af(
                        vm.ts(), function(t){return !t.iD()
                        })
                }
            ),
            aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
            rmT: function(){ o.ts.remove(this) }
        }

        /*
         ko.b(vm2)
         //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
         */
    }
    TASK=function(){$.z('r')

    }
    ROOT=function(){$.x('x')
        $.uE('fs', [
            $.li().b({
                t:'$data',
                s:'{selected:$data==$root.chFI()}',
                $:'$root.gtf'
            })
        ]).K('fs')

        ok({
            fs:['I','A','Se','Sp'],
            chFI: ko.o(),
            gtf: function(f){$l('click: ' + 'f: '+ f + ', this: '+this)
                f = f||'frog'
                vm.chFI(f)
            }
        })
    }



    KOC=function(){$.z()

        $.ip('r').at({
            name:'choices',
            value:'summary'
        }).bC('selectedView');
        $.sp('summary').A()


        $.ip('r').at({name:'choices',value:'details'}).bC('selectedView'); $.sp('details').A(); $.hr().A()

        $.d().bT("{name: templateToUse, " + "foreach: articles }")

        $.scrp("summary").A().A($.d().bT('title')),
            $.scrp('details').A(
                $.d([$.h2().bT('title'), $.p().bT('content'),
                    $.bt('edit').b$('$parent.selectedArticle') ]) )

        $.scrp('edit').A().A(
            $.d([$.ip().bV('title'), $.br(), $.ip().bV('content') ])
        )
        ko.b({
            articles: [
                {id: 1,title: "Article One",content: "Content for article one."},
                {id: 2,title: "Article Two",content: "Content for article two."},
                {id: 3,title: "Article Three",content: "Content for article three."}

            ],
            selectedView: ko.o("summary"),
            selectedArticle: ko.o(),
            templateToUse:function(i){
                return i===vm.selectedArticle()? 'edit' :vm.selectedView()}

        })
    }
    KOSCR=function(){z();$.bd().A(
        $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
    ); ko.b({})}

// kob= ko.observable.prototype; kob.rm= kob.remove
    MENU=function(){$.z('b').h2('Your seat reservations')
        $.bt('reserve').b$('A')

        AM=[{n:'fries',p:10}, {n:'fish',p:20}, {n:'noodles',p:30}]



        $.t().A($.tHR(['psngr n','m','$$','']),$.tB().bE('seats').A(
                $.tr().A(
                    $.td().bT('n'),
                    $.td().bT('m().n'),
                    $.td().A(
                        $.sl().b({
                            o : '$root.AM',
                            ot : 'm'    //v : 'm',
                        })
                    ),
                    $.td().bT('m().p')

                )

            )

        )

        ko.b({
            seats: $oa([
                {n:'Jo', m: ko.o(AM[0])},
                {n:'Bo', m: ko.o(AM[1])} ]),
            A: function(){
                vm.seats.push({n:'hahaha',
                    m:ko.o( {n:'noodles', p:30})})}
        })

    }

    CHERRY=function(){$.x('o')
        $.p($.sp('spam?'), $.cC('wants'))
        $.d([  'Preferred flavors of spam:',
            $.d([
                $.p($.sp('cherry'), $.cC('flav').v('cherry')),
                $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),
                $.p($.sp('Glut'), $.cC('flav').v('glut'))
            ])
        ]).bVs('wants')

        ok({
            wants:ko.o(1),
            flav:ko.oa(["cherry","almond"])
        })





        // vm.flav.push("msg")
        /*
         function $.cKO(m, b, v){
         var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
         if(v){ cb.v(v)}
         return p
         }*/


    }
    DIRT=function(){$.z('g').fm() //KOMASTERPIECE
        $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
        $.spT=   function(a){return $.sp().b('text', a)}
        d= $.d('z')//.mar(20)
            .bE('m').A(
            $.h1().C('y','c').A(
                $.spT('message'), $.sp(' '), $.spT('score'),
                s1.A($.h2().A($.ip(400), $.bt('new r'))),
                $.h2().bE('responses').C('r').A(
                    s1.A( $.spT('response') ),
                    s2.A( $.h4(
                        //$.iP(400),
                        $.bt('new c')) ),
                    $.h4().C('b').bE('comments').A(
                        s2.A($.spT('comment'))
                    )
                )
            ),
            $.br(),
            $.br()
        )


        ko.b({
            m: ko.oa(messages=[{message:'zi', score:100, responses:[
                {response:'good coder',
                    comments:[{comment:'..eh'}]},
                {response:'cool girl'}
            ]},

                {message:'yano', score:3,
                    responses:[{response:'is cool guy',
                        comments:[{comment:'hi'}, {comment:'hello'}]},
                        {response:'a'}, {response:'b'}, {response:'fun'}]},
                {message:'is awesome',score:0,responses:[
                    {response:'afsdafsd'}]},
                {message:'lame',score:20,responses:[
                    {response:'weird',comments:[{comment:'not!!!!1'}]},
                    {response:'lamer',comments:[{comment:'fuck ya'}]}]},
                {message:'rocks',score:4,responses:[]}
            ]),

            responses:ko.oa([
                {response:'one'},
                {response:'two'}
            ])
        })




        f=function(){
            vm.p.push({f:'jason',l:'yano'})
        }
    }
    KOFL=function(){

        //filter the items using the filter text
        vm.filteredItems = ko.c(function() {
            var t= this, fl
            fl = t.filter().toLowerCase()
            if (!fl) {return t.items();
            } else {
                return ko.utils.arrayFilter(t.items(),
                    function(it) {
                        return ko.utils.stringStartsWith(
                            it.name().toLowerCase(), fl)
                    })
            }
        }, vm)
    }
    KOFLM=function(){$.z('x')

        d=    $.dI('hover').A(
            $.a().A(
                $.i('me').bT('matterId')
            )
        )


        d.mouseover(function(){ var d=this
            //Show the div onmouseover.
            $l("!!!")

            $(d).next("#box").gg()
        })


        d.mouseout( function(){function onMouseOut(obj) {

            //d

            //Hide to div onmouseout
            //Todo:none
        }})


        $.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
            $.li().A(d,
                $.dI('box').css('display','none').A(
                    $.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
            ),

            $.li().bT('matterTitle'),
            $.li().bT('matterComment')
        )))





    }

    LIST=function(){$.x('z')

        f=  $.f()

        f.bSb('addItem').A(

            $.sp('add item'),
            $.ip().b({v:'itemToAdd', V:'afterkeydown'}),
            $.sb('add').bE('itemToAdd().length>0')
        )

        $.d().A(f,

            $.d().A(
                $.sp('Your values:'),

                $.sl().h(5).b({

                    o:'allItems',
                    so:'selectedItems'
                })
            ),

            $.d().A(

                $.bt('remove').b({
                    c:'removeSelected',
                    e:'selectedItems().length>0'}),
                $.bt('sort').b({
                    c:'sortItems',
                    e:'allItems().length>1'}))
        )
        ok({ itemToAdd:ko.o(''),
            allItems:ko.oa(['a','b','c']),
            selectedItems:ko.oa(['d']),
            addItem:function(){
                $l('addItem')
                if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                    vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
                }
            },


            removeSelected:function(){
                allItems.removeAll(o.selectedItems())
                selectedItems([])
            },
            sortItems:function(){o.allItems.sort()}
        })
    }


//bind 'html'
    KOH=function(){$.z().dH('details')

        ok('details', ko.o())

        $.in(function(){
                vm.details(
                    "<em>For details, view report <a href='report.html'>here</a>.</em>")},
            '*')
    }


    KOCM=function(){$.z().h4('First instance, without parameters')
        $.d().bCm('message-editor')
        $.h4('Second instance, passing parameters')
        $.dCm(
            'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
        )
        ko.components.register('message-editor', {
            viewModel: function(params) {
                this.text = ko.o(params && params.initialText || '')
            },
            template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
        })
        ko.applyBindings()

    }

//bind cb and bind ip to 'enable'
    KOEN=function(){$.x()

        $.p().A(
            $.cbC('hasPhone'), 'I have phone'
        )

        $.p('Your cellphone number').A(
            $.ip().b({ v:'num', en:'hasPhone'}))


        ok({ hasPhone: ko.o(0), num:'' })

    }

    IF=function(){$.x('x')
        $.cC('dispMs')
        $.sp('Disp ms')

        $.pI('dispMs','Here is a message. Astonishing')



        ok({dispMs: ko.o(1)})
    }


    BARN=function(){

        $.z().ulE('PL',[ $.li([
            $.sp('Planet: '),
            $.b().bT('n'),
            $.dI('cap',[  $.pT('cap.n')])])])

        ok('PL',[
            {n: 'Merc', cap: null },
            {n: 'Earth', cap: { n: 'Barn' } }
        ])


    }


    SLOP=function(){$.z()
        $.p('Choose some countries youd like to visit:').A(

            $.sl().b({
                o:'cunts',
                so: 'chosenCunts'

            }).sz(5).mlt()

        )


        $b({
                cunts : $oa('Fra','Ger','Spa'),
                chosenCunts : $oa('Ger')
            }


        )// Initially, only Germany is selected

        $.in(function(){vm.chosenCunts.push('Fra')   },'*') // ... then later  France is selected too
    }
    KOS=function(){$.x()

        $.d('Profit Information').bS("{color:curProf()<0?'red':'black'}")
        ko.b({curProf: ko.o(50) })
        $.in(function(){  vm.curProf(-50)}, '*')
    }




    $.aA=function(a,b,c,d){
        return $.a(b,c,d).bA(a)
    }


    KOAT=function(){$.x()


        $.aA('{href:url,title:tt}',
            'report')

        ok({

            url: ko.o("year-end.html"),
            tt: ko.o("Report including final year-end statistics")
        })
    }

    KOFC=function(){$.x()

        $.p('Name:').A(

            $.ip().b({
                v:'editing',   v:'name',
                f:'editing'
            }),
            $.d('r').b({
                v:'!editing()',
                t:'name',
                $:'edit'
            })
        )

        $.p('Click the name to edit it; click elsewhere to apply changes')
        function VM(n) {var vm=this
            vm.name = ko.o(n)
            vm.editing = ko.o()
            vm.edit = function() {vm.editing(true) }}
        ok(new VM("Bert Bertington"))
    }


    KOGRID=function(){$.z().f().at({action: '/someServerSideHandler'}).A(
        $.p('You have asked for').A(
            $.sp('&nbsp;').bT('gifts().length'),
            'gift(s)'),

        $.t().bVs('gifts().length > 0').A(
            $.tH().A(
                $.tr().A(
                    //tHR
                    $.th().A('Gift name'),
                    $.th().A('Price')
                )),



            $.tB().bE('gifts').A(
                $.tr().A(  //tBR
                    $.td().A($.ip().K('required').b({v:'name', u:true})),

                    $.td().A($.ip().K('required number')
                        .b({v:'price', u:true})),

                    $.td().A(
                        $.a('delete').b$('$root.removeGift')
                    )))),



        $.bt('add gift').b$('addGift'),

        $.sb().bEn('gifts().length > 0')

    ).A()

        Gift = function(gifts) {var vm = this
            vm.gifts = ko.oa(gifts)
            vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }
            vm.removeGift = function(gift) { vm.gifts.remove(gift) }
            vm.save = function(form) {alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);

        }
        ko.b(new Gift([
            { name: "Tall Hat", price: "39.95"},
            { name: "Long Cloak", price: "120.00"}
        ]))
        // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
    }

    PLAN=function(){$.z().h1('Plan!')

        $.p().A($.lb().A(
                $.cC('displayAdvancedOptions'), 'Display advanced options'
            )
        )

        $.p().A('Show:',

            $.lb([$.ip()]),  $.lb([$.ip()]),  $.lb([$.ip()])

        )



        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         Show:
         <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
         <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
         <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
         </p>*/


        $.d([$.d([ $.d()]) ])

        /*

         <div data-bind='template: { foreach: planetsToShow,
         beforeRemove: hidePlanetElement,
         afterAdd: showPlanetElement }'>
         <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
         </div>

         */

        $.p([$.bt(), $.bt()])

        /*
         <p data-bind='fadeVisible: displayAdvancedOptions'>
         <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
         <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
         </p>
         */


        Planets  = function() {

            this.planets = ko.oa([

                { name: "Mercury", type: "rock"},
                { name: "Venus", type: "rock"},
                { name: "Earth", type: "rock"},
                { name: "Mars", type: "rock"},
                { name: "Jupiter", type: "gasgiant"},
                { name: "Saturn", type: "gasgiant"},
                { name: "Uranus", type: "gasgiant"},
                { name: "Neptune", type: "gasgiant"}
            ]);

            this.typeToShow = ko.o("all");
            this.displayAdvancedOptions =ko.o(false);
            this.addPlanet = function(type) {
                this.planets.push({
                    name: "New planet",
                    type: type})}
            this.planetsToShow = ko.pc(function() {
                // Represents a filtered list of planets
                // i.e., only those matching the "typeToShow" condition
                var desiredType = this.typeToShow();
                if (desiredType == "all") return this.planets();
                return ko.utils.arrayFilter(this.planets(), function(planet) {
                    return planet.type == desiredType;
                });
            }, this);


            // Animation callbacks for the planets list
            this.showPlanetElement = function(el) {
                if (el.nodeType === 1) $(el).hide().slideDown()
            }

            this.hidePlanetElement = function(el) {
                if (el.nodeType === 1) $(el).slideUp(function() { $(el).remove(); }) }
        }


// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library

        ko.bh.fadeVisible = {
            init: function(el, valAcc) {
                // Initially set the el to be instantly visible/hidden depending on the value
                var value = valAcc();
                $(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
            },
            update: function(el, valAcc) {
                // Whenever the value subsequently changes, slowly fade the el in or out
                var value = valAcc();
                ko.unwrap(value) ? $(el).fadeIn() :
                    $(el).fadeOut();
            }

        }


        ok(new Planets())

    }



    TWT=function(){$.x()

        $.fSb('g',[ 'u:', $.ipV('un'), $.sb('Get') ]).A()

        $.dW('da',[
            $.h3('dt:', $.spT('dt') ),
            $.olE('MS',
                $.liT('ms')),

            $.bt$('clr',' $parent.clr')

        ])


        ok({
            un : ko.o('@ex'),
            da : ko.o(),
            g:function(){vm.da({
                dt: $D(),
                MS: _.m(['a','b'],
                    function(t){return {ms:vm.un()+':'+t}})
            })},
            clr: function(){ vm.da([]) }
            //<- $.bt('Clear tweets').b$(' $parent.clearResults')
        })
    }


    later=function(){
        //$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components

        VIRT=function(){$.z()

            $.d().b({randomOrder:true})
            $.d('First')
            $.d('Second')

            $.d('Third')
            ko.bindingHandlers.randomOrder = {

                init: function(el, valAcc) {
                    // Pull out each of the child els into an array
                    var childElems = []
                    while(el.firstChild)
                        childElems.push(el.removeChild(el.firstChild))
                    // Put them back in a random order
                    while(childElems.length) {
                        var randomIndex = M.fl(M.rn() * childElems.length),
                            chosenChild = childElems.splice(randomIndex, 1);
                        el.appendChild(chosenChild[0]);
                    }
                }
            }


        }

    }

    FLVIEWPLG=function(){$.x('x')


        ko.oA.fn.filterByProperty = function(propName, matchValue) {
            return ko.pureComputed(function() {
                var allItems = this(), matchingItems = [];
                for (var i = 0; i < allItems.length; i++) {
                    var current = allItems[i];
                    if (ko.unwrap(current[propName]) === matchValue)
                        matchingItems.push(current)}
                return matchingItems
            }, this)
        }

        $.h3('All tasks').A($.spT('tasks().length'))
        $.ulE('tasks',[
            $.lL([
                $.cbC('done'), $.spT('tt')
            ])
        ])


        $.h3('Done tasks').A( $.spT('doneTasks().length') )

        $.ulE('doneTasks',[$.liT('tt')])

        tasks= ko.oa(
            Task('Find new desktop background', 1),
            Task('Put shiny stickers on laptop'),
            Task('Request more reggae music in the office', 1))

        ok({
            tasks :tasks,
            doneTasks :  tasks.filterByProperty("done", 1)
        })



        function Task(tt,done){return {tt:ko.o(tt), done:ko.o(done)}}




        /*alt:
         this.doneTasks = ko.pureComputed(function() {
         var all = this.tasks(), done = [];
         for (var i = 0; i < all.length; i++)
         if (all[i].done())
         done.push(all[i]);
         return done;
         }, this);
         */

        alt=function(){
            KOEXT=function(){
                //  http://codereview.stackexchange.com/questions/45909/prototype-inheritance-with-knockout-observables

                /*

                 base classe:  subscribable
                 subscribable <-  observable
                 subscribable <- computed
                 observable <- observableArray


                 Adding custom functions using "fn"
                 You can define custom functions on any of the following types:
                 ko.subscribable.fn
                 ko.observable.fn
                 ko.observableArray.fn
                 ko.computed.fn


                 Example: A filtered view of an observable array
                 Here’s a way to define a "filterByProperty" function
                 ko.observableArray.filterByProperty

                 */
                ko.oA.fn.filterByProperty = function(propName, matchValue){
                    return ko.pc(function() {
                        var allItems  = this(), matchingItems = []
                        for (var i = 0; i < allItems.length; i++) {
                            var current = allItems[i]
                            if (ko.unwrap(current[propName]) === matchValue)
                                matchingItems.push(current)
                        }
                        return matchingItems
                    }, this)
                }
                /*
                 This returns a new computed value that provides a filtered view of the array,
                 while leaving the original array unchanged. Because the filtered array is a computed observable,
                 it will be re-evaluated whenever the underlying array changes.

                 The following live example shows how you could use this:
                 http://knockoutjs.com/documentation/fn.html
                 */
                /*

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
                 Source code: View model
                 */


                function Task(tt, done) {
                    this.title = ko.o(tt)
                    this.done = ko.o(done)
                }


                function AppViewModel() {
                    this.tasks = ko.oa([
                        new Task('Find new desktop background', true),
                        new Task('Put shiny stickers on laptop', false),
                        new Task('Request more reggae music in the office', true)
                    ])


                    // Here's where we use the custom function
                    this.doneTasks = this.tasks.filterByProperty("done", true)
                }


                /*
                 ko.applyBindings(new AppViewModel());
                 It’s not mandatory
                 If you tend to filter observable arrays a lot,
                 adding a filterByProperty globally to all observable arrays might make your code tidier.
                 But if you only need to filter occasionally,
                 you could instead choose not to attach to ko.observableArray.fn,
                 and instead just construct doneTasks by hand as follows:


                 */


                this.doneTasks = ko.pc(function(){var all,done
                    all = this.tasks()
                    done = []
                    for (var i = 0; i < all.length; i++){if (all[i].done()) {
                        done.push(all[i])}}
                    return done} , this)
            }



        }
    }

    VIRTP=function(){$z()
        ko.bindingProvider.instance.preprocessNode = function(node) {
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
        }


    }
    URLPLUG=function(){
        // Prototype for an observable<->URL binding plugin.
        (function () {
            var currentParams = {}, updateTimer, $ = window.jQuery;
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

            $.address.autoUpdate(false);
        })();
    }



    KOSERV=function(){
        var express    = require('express'), app        = module.exports = express.createServer()
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
    //bind bt 'click' to parent.rem


    ADDER=function(){$.x()

        $.h4('People')

        $.ulE('peep',[ $.li([
            $.sp('pos/name: '),
            $.spT('$index'),
            $.spT('n'),
            $.$bt('del', 'rm', '-')
        ]) ])

        $.$bt('A')

        ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
            A: function(){this.peep.push({n: "New at "+$D()})},
            rm : function (a) {vm.peep.remove(this)}
        })


    }
    COURSE=function(){$.x('x')

        //https://www.youtube.com/watch?v=JGwRIbWWqjE

        $.h1('monkey').bT('monkey')
        $.iV('monkey')
        $.sb('hello').b$('A')

        $.uE('list',[$.li(['my name is ',$.sT('n'),' and i like to play ',$.sT('c')])])



        vm={
            monkey: ko.o(),
            list: ko.oa(),
            A:function(){this.list.push({n:'j', c:$r()})}
        }

        vm.monkey('elephant')

        ok(vm)


    }
    COURSE=function(){$.x('x')
        $.s$('a','play'); $.U('cl',[
            'my name is ',$.sT('n'),
            ' and i like to play ',
            $.sT('c')])

        ok({
            cl: ko.oa(),
            a:function(){
                this.cl.p({n:'j',c:$r()})
                return this}
        })

        vm.a().a().a()

        //https://www.youtube.com/watch?v=JGwRIbWWqjE
    }

    TPLIST=function(){$.x()
        Meals = [
            { m: "sand", p: 0 },
            { m: "lobst", p: 34.95 },
            { m: "zebra", p: 290 }
        ]


        $.h2('Your rsv').A( $.spT('seats().length') )
        $.h3('Cost:').bVs('cost()>0').A( $.spT('cost().toFixed(2)') )


        $.t([
            $.tH([ $.tr(['Pass name','Meal','charge']) ]),
            $.tB().bTp("{n:'rsvTp', foreach: seats}") //?

        ])

        $.bt('Rsv again').b({ $:'A', en:'seats().length < 5' })

        $('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
            $.tr([
                $.td([$.ipV('n')]),
                $.td([$.sl().b({o:'Meals', ot:'meal'})]),
                $.td([ $.a$('del', 'rm')  ])
            ])
        )

        seatRsv = function(n) {
            this.n = n
            this.Meals = Meals;
            this.meal = ko.o(Meals[0]);
            this.rm = function() {vm.seats.remove(this) }
            this.fmtPrice = ko.do(function(){
                var price = this.meal().p
                return price ? "$" + price.toFixed(2) : "None";
            }, this)
        }


        vm = {
            seats: ko.oa([ new Rsv("St"), new Rsv("Br") ]),
            A: function() { this.seats.push(new Rsv())} }


        vm.cost = ko.do(function() {
            var tot = 0;
            for (var i = 0; i < this.seats().length; i++)
                tot += this.seats()[i].meal().price;
            return tot
        }, vm)



        ok(vm)

    }

//sort, remove
    BTRLST1=function(){$.x('o')

        $.f().b({sb:'A'}).A('Add item:',
            $.ip().b({v:'tA', vU:'afterkeydown'}),
            $.sb('Add').b('en', 'tA().length > 0')
        )

        $.p('Your values:')

        $.sl().mlt().b({ o:'all', so:'sl' })

        $.d([
            $.bt('Rem').b({$:'xSl', en:'sl().length > 0'}),
            $.bt('Srt').b({$:'srt', en:'all().length > 1'})
        ])

        Lst = function () {
            this.tA = $o('')
            this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30] )
            this.sl = $oa(['Hm'])
            this.A = function () {
                if (this.tA()!=''&& this.all.indexOf(this.tA())<0){
                    this.all.push(this.tA())
                    this.tA('')
                }
            }

            this.xSl = function () {
                this.all.removeAll(this.sl())
                this.sl([])
            }
            this.srt = function() { this.all.sort() }
        }
        $b(new Lst())
    }


    $.fSb=function(a,b){
        var f= $.f()

        f.b({sb:a})

        if(A(b)){_.e(b,function(el){
            f.A(el)
        })}
        return f}

    $.fn.bEn=function(a){
        return this.b('en',a)
    }


    BTRLST=function(){$.x('o')

        f= $.fSb('A',[ 'Add:',
            $.ipV('tA'),
            $.sb('Add').bEn('tA().length>0')
        ])

        $.p('Your values:')
        $.sl().mlt().b({
            o:'all',
            so:'sl'
        })

        $.d([

            $.bt('Rem').b({

                $:'xSl',

                en:'sl().length > 0'

            }),


            $.bt('Srt').b({$:'srt', en:'all().length > 1'})

        ])


        Lst = function(){

            this.tA = kO('')

            this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

            this.sl = kA('Hm')

            this.A = function () {
                if (this.tA() &&
                    this.all.indexOf(this.tA())<0
                ){

                    this.all.push(this.tA())
                    this.tA('')}
            }

            this.xSl = function(){

                this.all.removeAll(this.sl())

                this.sl([])

            }


            this.srt = function() { this.all.sort() }
        }

        ok( new Lst() )

    }








    bbLocStorPLUG=function(){



        (function (root, factory) {
            if (typeof exports === 'object' && typeof require === 'function') {
                module.exports = factory(require("backbone"));
            } else if (typeof define === "function" && define.amd) {
                // AMD. Register as an anonymous module.
                define(["backbone"], function(Backbone) {
                    // Use global variables if the locals are undefined.
                    return factory(Backbone || root.Backbone);
                });
            } else {
                factory(Backbone);
            }
        }(this, function(Backbone) {
// A simple module to replace `Backbone.sync` with *localStorage*-based
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
// window.Store is deprectated, use Backbone.LocalStorage instead
            Backbone.LocalStorage = window.Store = function(name, serializer) {
                if( !this.localStorage ) {
                    throw "Backbone.localStorage: Environment does not support localStorage."
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

            extend(Backbone.LocalStorage.prototype, {

                // Save the current state of the **Store** to *localStorage*.
                save: function() {
                    this.localStorage().setItem(this.name, this.records.join(","));
                },

                // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
                // have an id of it's own.
                create: function(model) {
                    if (!model.id && model.id !== 0) {
                        model.id = guid();
                        model.set(model.idAttribute, model.id);
                    }
                    this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
                    this.records.push(model.id.toString());
                    this.save();
                    return this.find(model);
                },

                // Update a model by replacing its copy in `this.data`.
                update: function(model) {
                    this.localStorage().setItem(this._itemName(model.id), this.serializer.serialize(model));
                    var modelId = model.id.toString();
                    if (!contains(this.records, modelId)) {
                        this.records.push(modelId);
                        this.save();
                    }
                    return this.find(model);
                },

                // Retrieve a model from `this.data` by id.
                find: function(model) {
                    return this.serializer.deserialize(this.localStorage().getItem(this._itemName(model.id)));
                },

                // Return the array of all models currently in storage.
                findAll: function() {
                    var result = [];
                    for (var i = 0, id, data; i < this.records.length; i++) {
                        id = this.records[i];
                        data = this.serializer.deserialize(this.localStorage().getItem(this._itemName(id)));
                        if (data != null) result.push(data);
                    }
                    return result;
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

            });

// localSync delegate to the model or collection's
// *localStorage* property, which should be an instance of `Store`.
// window.Store.sync and Backbone.localSync is deprecated, use Backbone.LocalStorage.sync instead
            Backbone.LocalStorage.sync = window.Store.sync = Backbone.localSync = function(method, model, options) {
                var store = result(model, 'localStorage') || result(model.collection, 'localStorage');

                var resp, errorMessage;
                //If $ is having Deferred - use it.
                var syncDfd = Backbone.$ ?
                    (Backbone.$.Deferred && Backbone.$.Deferred()) :
                    (Backbone.Deferred && Backbone.Deferred());

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
                        if (Backbone.VERSION === "0.9.10") {
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
                        if (Backbone.VERSION === "0.9.10") {
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

            Backbone.ajaxSync = Backbone.sync;

            Backbone.getSyncMethod = function(model, options) {
                var forceAjaxSync = options && options.ajaxSync;

                if(!forceAjaxSync && (result(model, 'localStorage') || result(model.collection, 'localStorage'))) {
                    return Backbone.localSync;
                }

                return Backbone.ajaxSync;
            };

// Override 'Backbone.sync' to default to localSync,
// the original 'Backbone.sync' is still available in 'Backbone.ajaxSync'
            Backbone.sync = function(method, model, options) {
                return Backbone.getSyncMethod(model, options).apply(this, [method, model, options]);
            };

            return Backbone.LocalStorage;
        }));
    }
    BBLS=function(){$.x()

        bbLocStorPLUG()


        Cl = bb.C.e({
            localStorage: new bb.LocalStorage('clN')

        })




    }

    PAGEGRID=function(){$.x('r','page grid')

//<div data-bind='simpleGrid: gridViewModel'> </div>

        $.d().b('simpleGrid', 'gridViewModel')

        $.bt('add').b$('addItem')
        $.bt('sortbyn').b$(' sortByName')
        $.bt('sortbyn').b$(' sortByName')
        $.bt('Jump to first page').b('en', 'gridViewModel.currentPageIndex')


        PagedGridModel =  {

            items : oA(

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




    comp=function(){
        CMLDR=function(){$.x()

            VM=function(p) {this.somePop = p.smKey}
            VM.prototype.doSmg = function() {}

            ko.r('my-cm', VM)
            ko.r('my-cm', {
                m: {createVM: function(p, cmInf) {return new VM(p)}},
                t: '#d'
            })
            ko.r('message-editor', {
                m: function(p) {this.t = ko.o(p && p.initialText||'')},
                t: $.d(['Ms:',$.ipV('t'), '(len:',$.spT('t().length'),')'])
            })

            $.tp("my-special-list-template").A(
                $.h3('Here is a special list')
            )

            $.ulE("{ data: myItems, as: 'myItem' }").A(
                $.li().A($.h4('Here is another one of my special items'), $("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))

            $.tg=function(a){return $('<' + a +'>')}

            $.tg('my-special-list').at('params', 'items: PEEP')
                .A('The person', $.em().b('t','name'),
                'is', $.em().b('t','age'), 'years old.')

            ko.r('my-special-list', {
                t: { el: 'my-special-list-template' },
                m: function(p) {this.myItems = p.items}
            })

            ko.b({PEEP: $oa([{n:'Lew', a: 56 }, {n: 'Atha', a: 34 }])})
            ko.cm.gN= ko.cm.getComponentNameForNode = function(nd) {
                tgNLower = nd.tagName && nd.tagName.toLowerCase()
                return  ko.cm.iR(tgNLower)?   tgNLower :
                    tgNLower === "special-el"? "MyCm":
                        null

                // If the el's name matches a reg-ed cm, use that cmt
                // For the el <special-el>, use the component
                // "MySpecialComponent" (whether or not it was preregistered)
                // Treat anything else as not representing a component
            }



            MyCmVM=function(pm) {curObsrvInst = pm.$raw.myExpr()}
            // Now curObsrvInst is either observable1 or obsrv2// and you would read its value with "curObsrvInst()"

            // 'params' is an object whose k/v pairs are the pams
            // passed from the cm bd or cust el.

            // - 'cmtInf.el'
            // is the el the component is being//
            //  injected into. When createVM is called, the template has//
            //  already been injected into this el, but isn't yet bound.
            // - 'componentInfo.templateNodes'
            // is an array containing any DOM
            //   nodes that have been supplied to the component. See below.
            // Return the desired view model instance, e.g.:
        }
        CMNEWS=function(){$.x('y','news feed')
            //http://jsfiddle.net/rniemeyer/fssXE/
            $.qAP('news-feed', 'vm', 'VM')
            $.qAP('news-feed', 'vm', 'VM2')
            $.h2('News Feed')
            $.dT('vm.ms')
            $('<news-feed params="vm: feed"></news-feed>').A()
            $('<news-feed>').at('params', "vm: feed2").A()
            ko.r('news-feed', {m: function (p) { this.vm = p.vm } })
            ko.r('news-feed', {m: function (p) {this.vm = p.vm},
                t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]})
            ko.r("news-feed", {m: function (p) { this.vm = p.vm },
                t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))})
            Feed=function(){this.ms=ko.o('pf!')}
            VM = function () {this.ms = ko.o("Hi");
                this.feed = new Feed();
                this.feed2 = new Feed();
                this.feed.ms("Ms1");
                this.feed2.ms("Ms2");
            }
            Ms = function (m) { return {m:ko.o(m||'') }}
            ok({m :ko.o('!'), VM : Ms('m1'), VM2 : Ms('m2'), VM3: {m:ko.o('!')}})
            ok(new VM())
            ok({ms : ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})

            vm.VM.ms("1"); vm.VM2.ms("2")
        }
        WEBCM=function(){
            //For example, instead of writing this:
            $.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
            //  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:

            $('<flight-deals>')
            //   < params='from: "lhr", to: "sfo"'></flight-deals>

        }


        bindn=function(){


            /*
             <unrealistic-cm
             params='stringValue: "hello",
             numericValue: 123,
             boolValue: true,
             objectValue: { a: 1, b: 2 },
             dateValue: new Date(),
             someModelProperty: myModelValue,
             observableSubproperty: someObservable().subprop'>
             </unrealistic-component>*/



            /*
             ko.bindingHandlers.yourBindingName = {
             init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
             // This will be called when the binding is first applied to an element
             // Set up any initial state, event handlers, etc. here
             },
             update: function(q, vAc, bd, vm, bdCtx) {
             // This will be called once when the binding is first applied to an element,
             // and again whenever any observables/computeds that are accessed change
             // Update the DOM element based on the supplied values here.
             }
             }
             */

            /*
             The “update” callback
             ko will call the upd cb init when   bd   applied to an el
             and tr any deps (observs/computeds) that you access.
             When any deps change, the upd  cb   called  w these pams:
             el  —  DOM el  involved in this bd

             valAcc — fn that you can call to get the cur md pop involved in this bd (cur md pop v = valAcc())

             To easily accept both observable and plain values, call ko.unwrap on the returned value.

             allBindings — ob,  used to access all the md values bound to this el

             Call allBindings.get('name') to retrieve the value of the name binding (returns undefined if the binding doesn’t exist);
             or allBindings.has('name') to determine if the name binding is present for the current element.

             vm —   deprecated  !

             Use bindingContext.$data or bindingContext.$rawData to access the view model instead.

             bindingCtx — ob, holds the binding ctx available to this el’s bindings,
             includes special properties including $parent, $parents,
             and $root that can be used to access data that is bound against ancestors of this ctx

             ex: you might have been controlling an element’s vs using the vs binding,
             but now you want to go a step further and animate the transition.
             You want elements to slide into and out of existence according to the value of an observable.
             You can do this by writing a cust  binding that calls jq’s slideUp/slideDown functions:

             */
            BDSMPGRD=function(){

                // This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
                ko.simpleGrid = {
                    // Defines a view model class you can use to populate a grid
                    // If you don't specify columns configuration, we'll use scaffolding
                    m: function (cf) {
                        this.data = cf.data
                        this.currentPageIndex = ko.o(0);
                        this.pageSize = cf.pageSize || 5;
                        this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
                        this.itemsOnCurrentPage = ko.c(function () {
                            var startIndex = this.pageSize * this.currentPageIndex();
                            return ko.ut.uo(this.data)
                                .slice(startIndex, startIndex + this.pageSize);
                        }, this);
                        this.maxPageIndex = ko.c(function () {
                            return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
                        }, this)
                    }
                }


                /*
                 // Templates used to render the grid
                 var templateEngine = new ko.jqueryTmplTemplateEngine();
                 templateEngine.addTemplate("ko_simpleGrid_grid", "\
                 <table class=\"ko-grid\" cellspacing=\"0\">\
                 <thead>\
                 <tr>\
                 {{each(i, columnDefinition) columns}}\
                 <th>${ columnDefinition.headerText }</th>\
                 {{/each}}\
                 </tr>\
                 </thead>\
                 <tbody>\
                 {{each(i, row) itemsOnCurrentPage()}}\
                 <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
                 {{each(j, columnDefinition) columns}}\
                 <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
                 {{/each}}\
                 </tr>\
                 {{/each}}\
                 </tbody>\
                 </table>");
                 templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
                 <div class=\"ko-grid-pageLinks\">\
                 <span>Page:</span>\
                 {{each(i) ko.utils.range(1, maxPageIndex)}}\
                 <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
                 ${ i + 1 }\
                 </a>\
                 {{/each}}\
                 </div>");
                 */
                // The "simpleGrid" binding
                ko.bh.simpleGrid = {
                    // This method is called to initialize the node, and will also be called again if you change what the grid is bound to
                    update: function (el, vwMdAcc, allBndAcc) {var vm  , allBnd  ,
                        grdTpN, pgLnksTpN,
                        grdCt,
                        pgLnksCt

                        vm = vwMdAcc()
                        allBnd = allBndAcc()

                        while(el.firstChild){ko.removeNode(el.firstChild)}

                        // Allow the default templates to be overridden
                        grdTpN = allBnd.simpleGridTemplate || "ko_simpleGrid_grid"
                        pgLnksTpN = allBnd.simpleGridPagerTemplate || "ko_simpleGrid_pageLinks";
                        grdCt= el.A($.d()); // Render the main grid

                        ko.rTp(grdTpN, vm, { templateEngine: templateEngine }, grdCt, "replaceNode")
                        // Render the page links
                        pgLnksCt = el.A($.d())
                        ko.rTp(pgLnksTpN, vm, { templateEngine: templateEngine }, pgLnksCt, "replaceNode");
                    }

                }
                function gScafCols(d) {var cols
                    if ((typeof d.length != 'number') || d.length == 0) {return []}

                    cols = [];
                    for (var popN in d[0])
                        cols.push({ headerText: popN, rowText: popN });
                    return cols;
                }

            }
            BINDINGS=function(){

                $.h3().bT('qu')
                $.p('Please distribute').A(
                    $.b().bT('ptsBudg'),
                    'pts btwn the following opts'

                )


                $.t($.tH().A($.tr().A($.th().A('Option'),$.th().A('Import'))),

                    $.tB().bE('aw').A($.tr().A($t.d().bT('awT'),$t.d().b('starRating','pts'))))

                $.hr().b({fadeVisible: 'pointsUsed() > pointsBudget' }).A(
                    'You used too many points! Please remove some.')

                $.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')

                $.bt('Finished').b({jqBt:'{ enable: pointsUsed() <= pointsBudget }', $:'save'})


                bindings=function(){
// Reusable bindings - ideally kept in a separate file

                    ko.BH.fadeVs = {

                        init: function(el, valAcc) {
                            var shouldDisplay = valAcc();$(el).toggle(shouldDisplay)},// Start visible/invisible according to initial value

                        update: function(el, valAcc) {
                            var shouldDisplay = valAcc();
                            shouldDisplay ? $(el).fadeIn() :
                                $(el).fadeOut()}

                    } // On update, fade in/out

                    ko.BH.jqBt = {

                        init: function(el) {$(el).button(); }, // Turns the el into a jQuery UI button

                        update: function(el, valAcc) {var curVal = valAcc();  $(el).button("option", "disabled", curVal.enable === false);}

                    }// Here we just update the "disabled" state, but you could update other properties too

                    ko.BH.starRating = {
                        init: function(el, valAcc) {
                            $(el).addClass("starRating");for (var i = 0; i < 5; i++){$.sp().appendTo(el)}
                            $("span", el).each(function(index) {$(this).hv(// Handle mouse events on the stars
                                function() { $(this).prevAll().add(this).K("hoverChosen") },
                                function() { $(this).prevAll().add(this).removeClass("hoverChosen") })
                                .click(function() {var observable = valAcc();observable(index+1)})})},           // Get the associated observable// Write the new rating to it
                        update: function(el, valAcc) { var observable = valAcc();  $("span", el).each(function(index) {$(this).toggleClass("chosen", index < observable())})} // Give the first x stars the "chosen" class, where x <= rating
                    }
                };bindings()

                function Aw(text) { this.awText = text; this.points = ko.o(1); }
                function SurvVM(qu, ptsBdg, aws) {
                    this.qu = qu;
                    this.ptsBdg = ptsBdg
                    this.aws = $.map(aws, function(tx) { return new Aw(tx) });
                    this.save = function() { alert('To do') };
                    this.ptsUsed = ko.c(function(){var  tot = 0;
                            for (var i = 0; i < this.aws.length; i++){tot += this.aws[i].points()}
                            return tot},
                        this)
                }



                ok(new SurvVM(

                        "Which factors affect your technology choices?",

                        10,

                        [
                            "Functionality, compatibility, pricing - all that boring stuff",
                            "How often it is mentioned on Hacker News",
                            "Number of gradients/dropshadows on project homepage",
                            "Totally believable testimonials on project homepage"
                        ]

                    )
                )

            }
            CUSTBDJ=function(){

                ko.bh.slVs = {
                    update: function(el, valAcc, allBindings) {var unwrapped,dur, v=valAcc() // First get the latest data that we're bound to
                        unwrapped = ko.unwrap(v);
                        // Next, whether or not the supplied model property is observable, get its current value
                        dur  = allBindings.get('slDur') || 400;// Grab some more data from another binding property // 400ms is default duration unless otherwise specified
                        if(unwrapped){$(el).slideDown(dur)}
                        else{$(el).slideUp(dur)}}
                }
                $.d('You have selected the option').b({
                    slVs:'wrap',
                    slDur:600
                })
                $.lb().A($.cbC('wrap'),'Gift wrap')
                ok({wrap: ko.o(1)})
            }
            CUSTBDEX=function(){

                $.d().b('e','items').A(
                    $.d().at('data-bind', "composableComponent: 'x-expander'").A(
                        $.d().at('data-part','title').A($('<strong>')
                            .b({t:'binding', sy:"{'color': $comp.isExpanded() ? 'darkred' : 'black'}"})),
                        $.d().at('data-part','content').A($('<strong>').b({t:'binding'}),
                            $.sp().b('t', 'description'))))
                $('<script type="text/html" id="x-expander-template">').A($.dK('expander'),
                    $.dK('header'),
                    $.bt().b({t: 'toggleText', $:'toggle'}),
                    $.sp('Expander').K('title').at('data-part','title'),
                    $.dK('content').at('data-part','content').b('vs', 'isExpanded')
                        .A('Content'))
                ko.ext = ko.ext || {};
                ko.ext.utils = ko.ext.utils || {};
                ko.ext.utils.cloneNodes = function () {
                    if (ko.utils.cloneNodes) {return ko.utils.cloneNodes}
                    else {return function (nodesArray, shouldCleanNodes) {
                        for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                            var clonedNode = nodesArray[i].cloneNode(true);
                            newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
                        }
                        return newNodesArray;
                    }}
                }

                ko.ext.utils.cloneNodes()
                compLoadingOperationUniqueId = 0
                ko.bh['composableComponent'] = {
                    'init': function(el, valueAccessor, ignored1, ignored2, bindingContext) {

                        disposeAssociatedComponentVM = function () {currentVMDispose = currentVM && currentVM['dispose'];
                            if (typeof currentVMDispose === 'function') {currentVMDispose.call(currentVM)}
                            // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                            currentLoadingOperationId = null}
                        isFirstRender = false;specifiedParts;
                        ko.utils.domNodeDisposal.addDisposeCallback(el, disposeAssociatedComponentVM)
                        ko.c(function () {
                            if (!isFirstRender) {isFirstRender = true;specifiedParts = null;
                                findParts(el, function (partName, partNode) {if (!specifiedParts) {specifiedParts = {}}
                                    partChNodes = ko.vE.chNodes(partNode)
                                    specifiedParts[partName] = ko.ext.utils.cloneNodes(partChNodes, true  )
                                })
                            }
                            value = ko.ut.uo(valueAccessor())
                            if (typeof value === 'string') {cmNm = value}
                            else {cmNm = ko.ut.uo(value['name']); compParams = ko.ut.uo(value['params'])}
                            if (!cmNm) {throw new Error('No comp name specified')}
                            loadingOperationId = currentLoadingOperationId = ++compLoadingOperationUniqueId;
                            ko.cm.get(cmNm,
                                function(compDef) {
                                    if (currentLoadingOperationId !== loadingOperationId) {return;} // If this is not the current load operation for this el, ignore it.
                                    disposeAssociatedComponentVM();// Clean up previous state
                                    if (!compDef) {throw new Error('Unknown comp \'' + cmNm + '\'')}// Instantiate and bind new comp. Implicitly this cleans any old DOM nodes.
                                    cloneTemplateIntoElement(cmNm, compDef, el);
                                    compVM = createVM(compDef, el, compParams)
                                    chBindingContext = bindingContext['createChildContext'](compVM)
                                    currentVM = compVM
                                    ko.bD(chBindingContext, el)
                                    if (specifiedParts) {// For parts defined in the comp definition binding context is// lexically scoped, i.e. it's a binding context of where the comp is// used, not the binding context of the comp template.// The only thing we need to add is a reference to the comp view model,// available through $comp
                                        partBindingContext = bindingContext['extend']({ '$comp': compVM })
                                        findParts(el, function (partName, partNode) {
                                            if (! (replacementNodes= specifiedParts[partName])) {return}
                                            clonedNodes = ko.ext.utils.cloneNodes( replacementNodes )
                                            ko.vE.setDomNodeChildren(partNode, clonedNodes);
                                            ko.bD( partBindingContext, partNode)
                                        })
                                    }
                                })
                        }, null, { disposeWhenNodeIsRemoved: el });
                        return { 'controlsDescendantBindings': true };
                    }
                }
                ko.vE.AB['composableComponent'] = true
                ExpanderCmVM = function () {this.isExpanded = ko.o(false)
                    this.toggleText = ko.c(function () {return this.isExpanded() ? '-' : '+'}, this)}
                ExpanderCmVM.prototype.toggle = function () {this.isExpanded(!this.isExpanded())}
                ko.rg('x-expander', {vm: ExpanderCmVM, t: {el: 'x-expander-template'}})
                AppVM = function () {this.items = [
                    { binding: 'vs',
                        desc:
                            'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd' },
                    { binding: 't',
                        desc: 'causes the assoc DOM el to display the text value of your pam.' },
                    { binding: 'cm',
                        desc: 'injects a spec cm into an el, and optly passes pams to it.' }
                ]}

                ok(new AppVM())
                ko.vE.nCh=ko.vE.setDomNodeChildren
                function findParts(parentNode, fn) {
                    if (!parentNode) {return}

                    chNodes = ko.vE.chNodes(parentNode)
                    ko.utils.arrayForEach(chNodes, function (chNode) {
                        // Search for el nodes only
                        if (chNode.nodeType !== 1) {return;}
                        if (partName= chNode.getAttribute('data-part')) {fn(partName, chNode)}
                        else {findParts(chNode, fn)} // Do not search into part definition
                    })
                }
                function cloneTemplateIntoElement(cmN,cmD,el) {var tp
                    if(tp!=cmD['template']){_.er('Cm\''+cmN+'\'!tp')}
                    ko.vE.nCh(el,
                        clonedNodesArray=ko.ext.utils.cloneNodes(tp)
                    )
                }
                function createVM(cmD, el, cmPams) {
                    return (cmVMFact= cmD['createVM'])?
                        cmVMFact .call(cmD, cmPams, { el: el }) : cmPams}

                //http://jsfiddle.net/mbaranov/6zvjfd2y/
            }

            /*

             You should use ko.utils.unwrapObservable
             in cases where you don't know if u have been gvn an obsvb or not.
             This would commonly be in a cstm bdg where an ovb or
             non-obv
             could be bound against it.

             In the code that u have above,
             the call to vAc() is not actually unwrpping an ovb

             It is just retrieving the value that was passed to the binding in the correct context

             (it gets wrapped in a fn to protect it).

             The ret v of valAcc() may be an obv or not.

             It is * was pasd to the bdg


             */

        };bindn()


//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html



    };comp()


}
knockback1=function(){
    EVob = {$: 'click', $$: 'dblclick', v: 'mouseover'}
    $P=function(){
        bb=Backbone
        md=bb.Model.prototype
        vw= bb.View.prototype
        rt=bb.Router.prototype
        cl=bb.Collection.prototype
    }
    $P()
    els=function(){
        $.pre=function(){return  $("<pre>").A()}


    };els()
    $.fn.b =$.fn.ko=  function(a,b){

        KOob= {

            t:'text',
            h:'html',
            s:'css',
            y:'style',
            a:'attr',
            e:'foreach',
            i:'if', n:'ifnot', w:'with',
            $:'click',
            ev:'event',
            sb:'submit',
            en:'enable',
            d:'disable',
            V:'valueUpdate',
            vs:'visible',
            f:'hasFocus',
            c:'checked',
            ch:'checked',
            v:'value',  o:'options',
            ti:'textInput',
            so:'selectedOptions',
            u:'uniqueName',
            tp:'template',
            cm:'component'
        }

        var o=[]

        if(O(a)){
            _.e(a, function(v,k){
                if(KOob[k]){k=KOob[k]}
                o.push(k + ':'+ v)
            })
            this.at({'data-bind': $l( o.join() )
            })
        }

        else {

            if(KOob[a]){a=KOob[a]}
            // str= oO('b', a)
            str= a +':'+b;  //$l(': '+ str  )


            this.at({'data-bind': str  })}
        return this

    }
    $.scrp= function(i,t){

        var scr= $("<script type='text/html'>")
        scr.id(i)
        if(t){scr.A(t)}
        scr.A()
        return scr
    }
    knck=function(){

        ko.bh=ko.BH=ko.bindingHandlers
        ko.u= ko.ut=ko.utils
        ko.u.af= ko.u.arrayFilter
        ko.o= ko.observable
        ko.c= ko.computed
        ko.oA=ko.observableArray
        ko.oa = $oa=function(a){
            var g=G(arguments), a=g[0]
            if(!A(a)){a=g}
            return ko.oA(a)
        }
        ko.do= ko.dependentObservable
        ko.pc= ko.pureComputed
        $o=function(a){return ko.o(a)}
        OK=ok= $b=ko.b=ko.ab= function(o,b){var g=G(arguments),ob
            if(S(o)){
                ob={}
                ob[o] = b
                g[0] = ob
            }
            if(O(g[0])){
                vm=g[0];
                return ko.applyBindings(g[0])
            }
            return ko
        }
        // ko.b({ g[0]:  ko.o(b) })
        ko.rTp= ko.renderTemplate
        ko.cm= ko.components
        ko.cm.rg= ko.cm.register
        ko.ve=ko.vE= ko.virtualElements
        ko.B=ko.ve.ab=ko.vE.AB=ko.vE.allowedBindings
        ko.ut.uo=ko.ut.unwrapObservable
        ko.r=ko.rg=function(n, ob){
            ob=ob||{}
            if( S(ob.vm) || (O(ob.vm) && !ob.vm.element)){ob.vm={element: ob.vm}}
            ob.viewModel=ob.viewModel||ob.vm||ob.m||ob.o
            if(U(ob.viewModel)){ob={vm:ob}}
            ob.template = ob.template || ob.tp || ob.t
            vm=ob
            return ko.cm.rg(n,ob)
        }

        ko.cm.iR=ko.cm.isRegistered
        ko.c=ko.computed
        ko.o=ko.observable
        ko.bD=ko.applyBindingsToDescendants

        oA= ko.observableArray.fn
        oA.p = function(i){var  oA=this
            oA.push(i)
            return oA
        }
        kA=function(){

            var g=G(arguments)

            return ko.oa(g.A_? g.f: g)

        }
        kO=function(){

            var g=G(arguments)


            return ko.o.apply(ko, g)

        }



    };knck()
    $.fn.par=function(a,b){this.at('params', a+': ' + b ); return this}
    $.fn.qA=function(t){return $('<'+t+'>').A()}
    $.fn.qAP=function(a,b,c){
        this.qA(a).par(b, c)
        return this
    }
    $qfn=function(){

        $.fn.bEn=function(a){return this.b('en',a)}

        $.fn.a2Lb=function(t){t=t||'label:'
            return this.a2($.lb(t))
        }
        $.fn.bT=function(s){s=s||'$data'
            return  this.dB( 'text: '+ s)
        }
        $.fn.bE=function(s){
            return this.dB( 'foreach: '+ s )
        }
        $.fn.bV=function(s){var g=G(arguments)
            str = "value: " + s
            if(!g.n){str += ", valueUpdate: 'afterkeydown'"}
            this.dB(  str )
            return this}
        $.fn.bCm=function(s){return this.dB('component: '+ s  )}
        $.fn.bH=function(s){return this.dB('html: '+ s  )}
        $.fn.bS=function(s){return this.dB('css: '+ s  )}
        $.fn.bY=$.fn.bSy=function(s){return this.dB('style: '+ s  )}
        $.fn.bA= $.fn.bAt= function(s){
            return this.dB('attr: '+ s  )}
        $.fn.bI= $.fn.bIf=function(s){return this.dB('if: '+ s  )}
        $.fn.bN= $.fn.bIN=function(s){return this.dB('ifnot: '+ s  )}
        $.fn.bW=function(s){return this.dB('with: '+ s  )}
        $.fn.b$=function(s){return this.dB('click: '+ s  )}
        $.fn.bEv=function(s){return this.dB('event: '+ s  )}
        $.fn.bSb=function(s){return this.dB('submit: '+ s  )}
        $.fn.bEn=function(s){return this.dB('enable: '+ s  )}
        $.fn.bD=function(s){return this.dB('disable: '+ s  )}
        $.fn.bVs=function(s){return this.dB('visible: '+ s)}
        $.fn.bC=function(s){return this.dB('checked: '+ s)}
        $.fn.bF=function(s){return this.dB('hasFocus: '+ s)}
        $.fn.bO=function(s){return this.dB('options: '+ s)}
        $.fn.bSO=function(s){return this.dB('selectedOptions: '+ s)}
        $.fn.bTI=function(s){return this.dB('textInput: '+ s)}
        $.fn.bU= $.fn.bUN=function(s){return this.dB('uniqueName: '+ s)}
        $.fn.bTp=function(s){return this.dB('template: '+ s)}
        $.fn.koE=$.fn.eKo= function(a){return this.bindKO('fe',a)
        }
        $.fn.eD=$.fn.eB=  function(a){
            return this.bindKOEach('$data.'+a)
        }
        $.fn.dB=function(dB){return this.at({'data-bind': dB })}
        $.fn.bTi=function(a){
            return this.b({ti: a})
        }
    };$qfn()
    bEls=function(){
        $.a$=function(t,fn){return $.a(t).b('$', fn)}
        $.spVs=function(a){return $.sp().b('vs',a)}
        $.aA=function(a,b,c,d){
            return $.a(b,c,d).bA(a)
        }

        $.fSb=function(a,b){var f= $.f()
            f.b({sb:a})
            if(A(b)){_.e(b,function(el){
                f.A(el)
            })}
            return f}


        $.dT=function(a){return $.d().bT(a)}
        $.iV=$.ipV=$.ipBv=function(){var g=G(arguments),ip

            ip = $.ip()

            ip.bV.apply(ip, g)

            return ip
        }
        $.fSb=$.fBsb=function(a,b){

            var f = $.f()

            f.bSb(a)

            if(A(b)){_.e(b, function(b){
                f.A(b)
            })}


            return f

        }
        $.olE=$.olBe=function(a,b){var ol= $.ol().bE(a)

            if(b){ol.A(b)}
            return ol
        }
        $.tdT=function(a,b){var td=$.td()
            td.bT(a)
            if(A(b)){_.e(b,function(el){td.A(el)})}
            return td}
        $.liT=$.liBt=function(a){

            return $.li().bT(a)
        }
        $.bt$=$.btB$=function(a,b,c){
            var bt=   $.bt(a).b$(a)

            if(c){bt.bEn(c)}

            return bt
        }
        $.dW=$.dBw=function(a,b){

            var d=  $.d().bW(a)
            if(A(b)){_.e(b,function(b){
                d.A(b)
            })}
            return d
        }
        $.sT=$.spT= function(a,b){
            a=a||'$data'
            return $.sp(b).bT(a)
        }
        $.uE=$.ulE=function(a,b){

            var ul=  $.ul().bE(a)
            if(A(b)){
                _.e(b,function(el){
                    ul.A(el)
                })}
            else if(S(b)){
                ul.A(b)
            }
            return  ul
        }
        $.dE=function(a,b){

            var d=  $.d().bE(a)
            if(A(b)){
                _.e(b,function(el){
                    d.A(el)
                })}
            else if(S(b)){
                d.A(b)
            }
            return  d
        }
        $.tBE=function(a,b){
            var tB= $.tB()
            tB.bE(a)
            if(A(b)){_.e(b, function(el){tB.A(el)})}
            return tB
        }
        $.h1T=$.h1Bt=function(a,b){
            var h1= $.h1(a)
            h1.bT(b||a)
            return h1

        }
        $.pT=function(a){
            var p = $.p()
            p.bT(a)
            return p
        }
        $.dIf=function(a,b){
            var d =  $.d().bI(a)
            if(A(b)){_.e(b,function(b){d.A(b)})}
            return d
        }
        $.sO=$.slO=function(a){
            return $.sl().bO(a)
        }
        $.ipTi=function(a){return $.ip().bTi(a)}
        $.pwTi=function(a){return $.pw().bTi(a)}
        $.$bt=function(a,b){var g=G(arguments)

            b=b||a
            if(g.n){
                b = '$parent.'+b
            }

            return $.bt(a).b$(b)

        }
        $.dCm=function(a){return $.d().bCm(a)}
        $.cC=$.cbC=function(a){
            return $.cb().bC(a)
        }
        $.pI=function(a,b,c,d){
            var p= $.p(b,c,d).bI(a)
        }
        $.dH=function(a){return $.d().bH(a)}
        $.U=function(){var g=G(arguments)
            return $.uE(g.f,[$.li(g.s)])}
        $.s$=function(a,b,c,d){return $.sb(b,c,d).b$(a)}

    };bEls()
    bb.pe=bb.parseEvents=function(ev){


        ev=ev||{$: function(){}}

        _.e(ev, function(v, k){if(EVob[k]){ev[EVob[k]]=v}})
        return ev
    }
    bb.C=bb.Collection; bb.C.x=bb.C.e = bb.C.extend
    bb.c=function(ob){
        var Cl =  bb.Collection.extend(ob)
        return function(a,b,c,d){
            return new Cl(a,b,c,d)}}
    bb.M=bb.Model
    bb.M.x=bb.M.e=function(ob){var g=G(arguments),o
        var Md
        ob=ob||{}
        ob.defaults = ob.defaults || ob.df || ob.d
        // o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}
        //o=o||{}
        /*
         if(o.fn){ob.i= o.fn}

         ob.initialize = ob.initialize || ob.i
         ob._i=ob.initialize
         ob.initializeX=function(op){
         this.q= this.$el
         this.a2=function(a){return this.q.a2(a)}
         //$l('gen init..')
         this.g=function(a){if(a){return this.model.get(a)}}
         this.A=function(ob){
         var g=G(arguments),
         q=this.q
         if(S(ob)){ob = this.g(ob)}
         if(ob){q.A(ob)}
         if(U(ob) || g.p){q.A()}
         return q
         }
         _.b(ob._i,this) (op)
         }
         ob.id = D(ob.id)? ob.id : ob.x
         ob.className=ob.className|| ob.k
         ob.tagName=ob.tagName|| ob.tn || ob.t
         ob.defaults=ob.defaults || ob.df || ob.d
         ob.events= ob.events || ob.ev || ob.e
         ob.render=ob.render || ob.rr || ob.r
         ob.tagName=ob.tagName || ob.tn || ob.t
         ob.collection= ob.collection || ob.cl || ob.c
         // ob.render= ob.render || ob.rr || ob.r// ob.render= ob.render || ob.rn*/

        ob.model= ob.model || ob.md || ob.m
        md= bb.M.extend(ob)

        md.o=function(ob, q){
            var Md = this,md
            ob=ob||{}
            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            md=new Md(ob)
            if(q){md.a2(q)}
            return md
        }
        return md
    }
    bb.m=function(ob){ob=O(ob)?ob:{}
        var Md,md
        Md = bb.M.e(ob)
        return function(ob){
            md = new Md(ob)
            return md
        }
    }
//bb._M=function(ob){return  bb.M.extend(ob)}
    bb.V=bb.View
    bb.v=function(ob){var Vw =  bb.V.x(ob)
        return function(a,b,c,d){
            return new Vw(a,b,c,d)}}

    bb.E=bb.Ev=bb.Events
    bb.x= bb.e=function(ob){

        var Ev =  bb.Event.extend(ob)
        return function(a,b,c,d){ return new Ev(a,b,c,d)    }

    }
    bb.H=bb.History
    bb.S=bb.Sync
    bb.U=bb.Utility
    toMdOb=function(a){
        a=O(a)?a:{}
        if(a.i){a.initialize=_v(a.i)}
        if(a.I){a.initialize=_v(a.I)}
        if(a.d){a.defaults=a.d}
        if(a.D){a.defaults=a.D}
        if(a.v){a.validate=a.v}
        if(a.V){a.validate=a.V}
        a.idAttribute= '_id'
        return a
    }
    M$=function(ob){ob=O(ob)?ob:{}
        var Md, md
        Md = bb._M(ob)
        md = new Md(ob)
        return md

    }
    md.g= md.get
    md.tJ= md.toJSON
    md.o= md.on
    md.s= function(a,b,c){var md=this
        if(O(a) && O(b)){if(b.v){b.validate= b.v?true:false}}
        if(S(a) && O(c)){if(c.v){c.validate= c.v?true:false}}
        return md.set(a,b,c)
        return md
    }
    md.at= md.attributes
    md.b= md.bind

    $V=function(){var g=G(arguments),
        Vw = bb.V.e.apply(bb.V,g)
        return function(){var g=G(arguments), vw,
            ob =  g.O_? g.f:  {}
            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m
            vw = new Vw(ob)
            if(g.s){ vw.a2( g.s ) }
            return Vw
        }
    }

    $v=function(){var g=G(arguments)
        return $V.apply(null, g)()
    }
    $m=function(){var g=G(arguments)
        return $M.apply(null, g)()
    }
    $.fn.V=function(ob){
        ob=ob||{}
        ob.q=this
        return $V(ob)
    }
    $M=function(){var g=G(arguments),
        Md = bb.M.e.apply(V,g)
        return function(a,b,c,d){var g=G(arguments)
            return  new Md(a,b,c,d)}
    }
    $.uV=$.ulV=function(ob){ob=ob||{}
        ob.t = 'ul'
        return $V(ob)
    }
    vw.cl=function(fn){
        _.e(this.collection, fn)
        return this
    }
    vw.e=function(fn){
        _.e(this.model, fn)
        return this
    }
    md.V=function(Vw, ob){ob = ob || {}
        ob.m=this
        return Vw(ob)
    }
    md.l=function(){$l(this.toJSON()); return this }
//////

    bb.R = bb.Router;  bb.R.x=bb.R.e=bb.R.extend
    bb.h=bb.history; bb.h.s=bb.h.start

    rtr = bb.R.prototype
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
    rtr.o= rtr.on
    rtr.r = rtr.oR=function(rt,fn){
        this.on('route:'+rt, fn); return this }


    $R=function(ob){var g=G(arguments), Rt,rtr

        if(ob.i){ob.initialize = ob.i
        }

        if(ob.$){ob.initialize = function(){
            $l('ob$! (see $R)')
            bb.history.start({pushState:true})
            if( F(ob.$ )){ob.$()}
        }}

        ob.routes = ob.routes   ||  ob.rt || ob.r ||  {}
        ob.routes[''] = ob.routes[''] ||'index'

        if(ob.x){ob.index = ob.x}
        if(ob.h){ob.home = ob.h}

        Rt= bb.R.x(ob)
        if(g.n){return function(ob){return new Rt(ob)}}
        rtr= new Rt()
        if(!bb.History.started && !g.d){
            Backbone.history.start({pushState: true})
        }
        return r = rt = rtr

    }; $R.h=function(){bb.h.start(); return $R}





//////////
    bb.C.x= bb.C.e=function(ob){var g=G(arguments), o,Cl
        //o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}; o=o||{}
        ob=ob||{}
        /*
         if(o.fn){ob.i= o.fn}

         ob.initialize = ob.initialize || ob.i
         ob._i=ob.initialize
         ob.initializeX=function(op){
         this.q= this.$el

         this.a2=function(a){return this.q.a2(a)}
         //$l('gen init..')
         this.g=function(a){if(a){return this.model.get(a)}}
         this.A=function(ob){
         var g=G(arguments),
         q=this.q
         if(S(ob)){ob = this.g(ob)}
         if(ob){q.A(ob)}

         if(U(ob) || g.p){q.A()}
         return q
         }
         _.b(ob._i,this) (op)
         }


         ob.id = D(ob.id)? ob.id : ob.x
         ob.className=ob.className|| ob.k
         ob.tagName=ob.tagName|| ob.tn || ob.t
         ob.defaults=ob.defaults || ob.df || ob.d
         ob.events= ob.events || ob.ev || ob.e
         ob.render=ob.render || ob.rr || ob.r
         ob.tagName=ob.tagName || ob.tn || ob.t

         ob.collection= ob.collection || ob.cl || ob.c

         // ob.render= ob.render || ob.rr || ob.r
         ob.render= ob.render || ob.rn*/
        ob.model= ob.model || ob.md || ob.m

        Cl= bb.C.extend(ob)

        Cl.o=function(ob, q){
            var Cl = this, cl

            if(U(ob)){return new Cl}
            //ob=ob||{}

            ob.collection= ob.collection || ob.cl || ob.c
            ob.model = ob.model || ob.md || ob.m

            cl= new Cl(ob)

            //if(q){cl.a2(q)}
            return cl
        }

        return cl
    }

    coll=function(){

        cl.a=cl.add
        cl.j= cl.tJ=cl.toJSON
        cl.rm= cl.r= cl.remove


    };coll()

    md.o= function(){
        var g=G(arguments);

        this.on.apply(this, g)

    }


    md.tr=  md.trigger
    mdO=function(){
        md.oA=function(fn){
            // "add" (model, collection, options) — when a model is added to a collection.
            fn=fn||func
            return this.on('add', fn)

            function func(m){
                m.at= m.attributes
                m.s=function(a,b,c){
                    if(O(a) && O(b)){if(b.v){ b.validate= b.v?true:false} }
                    if(S(a) && O(c)){if(c.v){ c.validate= c.v?true:false} }
                    return m.set(a,b,c)}
                m.g= m.get
                m.j= m.toJSON
                m.o= m.on
                E$(m)
                a.A(m)}}
        md.ox= md.oH= md.o_= md.oRm=function(a,b,c){
            // "remove" (model, collection, options)
            // — when a model is rmd from a collection.
            return this.on('remove',a,b,c)
        }
        md.oX= md.oD=function(a,b,c){
            // "destroy" (model, collection, options)
            // — when a model is destroyed.
            return this.o('destroy',a,b,c)
        }
        md.oR=md.oRs=function(a,b,c){
            // "reset" (collection, options) —
            // when the collection's entire contents have been replaced.
            return this.o('reset',a,b,c)
        }
        md.oSo=function(a,b,c){
            // "sort" (collection, options) — when the collection has been re-sorted.
            return this.o('sort',a,b,c)
        }
        md.oC=md.oCh=function(n,f){

            // "change" (model, options)
            // — when a model's attributes have changed.

            // "change:[attribute]" (model, value, options)
            // — when a specific attribute has been updated.

            if(U(f)){
                return this.on('change', n)
            }

            return this.on('change:'+n, f)
        }
        md.oQ=md.o.Rq= function(a,b,c) {
            // "request" (model_or_collection, xhr, options)
            // — when a model or collection has started a request to the server.
            return this.o('request',a,b,c)
        }
        md.oS=md.oSy=function(a,b,c){
            // "sync" (model_or_collection, resp, options)
            // — when a model or collection has been successfully synced with the server.
            return this.o('sync',a,b,c)
        }
        md.oZ= md.oE=md.oEr=function(a,b,c){
            //"error" (model_or_collection, resp, options)
            // — when model's or collection's request to remote server has failed.
            return this.o('error',a,b,c)
        }
        md.oz=md.oI= md.oV= md.ov= md.oIV=function(a,b,c){
            //"invalid" (model, error, options)
            // — when a model's validation fails on the client.
            return this.o('invalid',a,b,c)
        }
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
        md.o$=md.oAl=function(fn){//passes event name as 1st ag
            return this.on('all', fn)
        }

    };mdO()
    vws=function(){

        vw.g=function(m){
            return this.model.get(m)}

        vw.s=function(a,b){
            this.model.set(a,b)
            return this
        }

        vw.h=vw.H=function(a){
            this.$el.html(a);
            return this
        }
        vw.cl= vw.collection
        vw.e= function(a,b){
            return this.cl.each(a,b)
        }
        vw.j=vw.tJ=vw.J=function(){return this.model.toJSON()}
        vw.J= function(fn){
            var vw=this,
                j= this.collection.toJSON()
            if(F(fn)){
                _.e(j,fn);return vw}
            return j
        }
        vw.r=  vw.rr=function(){ return this.render() }

        bb.V.e=function(ob){var g=G(arguments),o
            o= g.F_? {fn: g.f, ob: g.s} : {ob: g.f, fn: g.s}
            o=o||{}
            ob=ob||{}
            if(o.fn){ob.i= o.fn}
            ob.initialize = ob.initialize || ob.i
            ob._i=ob.initialize
            ob.initialize=function(op){
                this.q= this.$el

                this.a2=function(a){
                    return this.q.a2(a)
                }
                //$l('gen init..')
                this.g=function(a){

                    if(a){return this.model.get(a)}
                }


                this.A=function(ob){
                    var g=G(arguments),
                        q=this.q
                    if(S(ob)){ob = this.g(ob)}
                    if(ob){q.A(ob)}

                    if(U(ob) || g.p){q.A()}
                    return q
                }

                if(F(ob._i)){
                    _.b(ob._i,this) (op)
                }

            }
            ob.id = D(ob.id)? ob.id : ob.x || ob._ || ob['#']
            ob.className=ob.className|| ob.k
            ob.tagName=ob.tagName|| ob.tn || ob.t
            ob.defaults=ob.defaults || ob.df || ob.d
            ob.events= ob.events || ob.ev || ob.e
            ob.render=ob.render || ob.rr || ob.r
            ob.tagName=ob.tagName || ob.tn || ob.t
            ob.collection= ob.collection || ob.cl || ob.c
            ob.model= ob.model || ob.md || ob.m
            ob.el = ob.el || ob.q
            // ob.render= ob.render || ob.rr || ob.r
            ob.render= ob.render || ob.rn
            ob.events = bb.parseEvents(ob.events)
            vw= bb.V.extend(ob)
            //vw.o=function(ob){ return new this(ob)}
            vw.o=function(ob,q){
                var Vw = this, vw
                ob=ob||{}
                ob.collection= ob.collection || ob.cl || ob.c
                ob.model = ob.model || ob.md || ob.m
                vw=new Vw(ob)
                if(q){vw.a2(q)}
                return vw
            }
            return vw
        }


    };vws()
    aps=function(){


        VWW=function(){$.x()


            d= $.d('r',200).A(
                $.h1('hello'),
                $.bt(__)
            )

            //d.$(function(){v.r()})

            mOv=function(){$l('mouse over !')}


            v = $V({

                e: {

                    'click button': function(){ $l('$') },

                    $$: 'r',

                    v: mOv
                },


                q : d,

                r : function(){

                    alert('double click')

                    $.bd().C(   $r()    )

                }


            })()

        }
        VIRTUALELS=function(){

            ko.bh.randomOrder = {
                init: function(el, valueAccessor) {

                    // Build an array of child elements
                    var ch = ko.vE.firstChild(el),
                        CH = []
                    while(ch){
                        CH.push(ch)
                        ch = ko.vE.nextSibling(ch)
                    }
                    // Remove them all, then put them back in a random order
                    ko.vE.emptyNode(el)
                    while(CH.length) {ko.vE.prepend(el, CH.splice(R(CH), 1)[0])}

                }

            }
        }
        SELOP=function(){d= $.d()

            $.x(null,
                'selectedOptions')



            $.p('Where you want to go?',
                $.sl().at({size: 5, multiple: true}).b({
                    o: 'available',
                    so: 'chosen'
                }))

            ok({
                available  : ko.oa(
                    ['France', 'Germany', 'Spain']),
                chosen  : ko.oa(
                    ['Germany'])})

            $.in(function(){
                vm.chosen.push('France')},'*')
        }
        works=function(){

            BBVIEW=function(){$.x('b','bbview')

                $.dI('d1',
                    'r', 500, 500)



                LstV = bb.V.e({
                    el: '#d1',
                    r: function(){
                        this.A(
                            $.ul([
                                'hello']))},
                    i: function(){ this.r() }})

                v = LstV.o()
            }
            BBVIEW=function(){$.x('b','bbview')
                v=$V({
                    q: d=$.dI('d1','r', 500, 500),
                    r: function(){this.A($.ul(['hello']))},
                    i: function(){this.r()}
                })()
            }
            BBVIEW=function(){$.x('b','bbview')


                $.dI('d1','r', 500,500).V({
                    r: function(){this.A($.ul(['hello']))},
                    i: function(){this.r()}
                })()

            }
            PER=function(){$.x('n')
                Per=bb.M.e({

                    d: {n:'j', a:20, o:'p'}

                })
                p= new Per
                PerV = $V({t:'li', _:'some-per', k:'per',
                    r: function(){
                        this.A('n').A()
                    },
                    //  this.A(this.g('n')).A() //  this.A(this.model.get('n').A()
                    i: function(){
                        $l(this.model);
                        this.r()
                    }
                })
                pV =  PerV({ m:p  })

            }
            PER=function(){$.x('n')

                p = $M({ d: {n:'j',a:20,o:'p'}   })()

                PerV = $V({t:'li', _:'some-per', k:'per',
                    r: function(){  this.A('n').A() },
                    i: function(){ $l(this.model); this.r() }
                })

                pV = p.V(PerV) //PerV({ m: p })
            }
            PER=function(){$.x('n')
                m = $M({d:{n:'j',a:20,o:'p'}})()
                m.V($V({
                    t:'li', _:'some-per', k:'per',
                    r: function(){  this.A('n').A() },
                    i: function(){this.r()}
                }))
                $.in(function(){m.l()}, '*')
            }
            TP=function(){$.x().A(
                a= _.tp("<div>hello:<%=n%></div>")({n:'moe'}),
                b= _.tp('<b><%-tag%></b>',{tag:'<script>'}), // <%- vs <%= ?
                c= _.tp(
                    '<%_.e(peep,function(name){%>'+
                    '<li>'+'<%=name%>'+'</li>'+
                    '<%})%>'
                    ,{peep:['moe','curly','larry']})
            )

            }
            WOB=function(){$.x('x', 'bb view people')
                //without backbone!
                ul = $.ul().id('peep')
                peep = [{n:'a',a:11}, {n:'b',a:46}, {n:'c',a:13}]
                vw={r:function(){
                    $('#peep').E()
                    _.e(peep, function(p){
                        $('#peep').A('<li>'+ p.n + '(' + p.a + ')</li>')
                    })}}
                vw.r()
                $.in(function(){peep.pop(); vw.r()},'*')
            }
            SIMP=function(){$.x('r').h1('tut')
                p = $M()({n:'j'})
                $.h3('p: '+p.g('n'))
            }
            BBVP1=function(){$.x('x', 'bb view people')

                peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]
                vw= $V({t:'ul',
                    i:function(){this.$el.C($r())},
                    r:function(){var el=this.$el.E()
                        _.e(this.collection, function(p){$('#peep')
                            el.A($.li().A(p.n + '(' + p.a + ')'))})
                        return this}

                })({cl: peep})


                $.A(vw.r().el)
                $.in(function(){peep.pop(); vw.r()},'*')
            }
            BBVP=function(){$.x('x', 'bb view people')

                peep = [{n:'a',a:11},{n:'b',a:46},{n:'c',a:13}]

                vw= $.ulV({
                    i:function(){
                        this.q.C($r())

                    },
                    r:function(){var el=this.q.E()
                        this.cl(function(p){
                            el.A($.li().A(p.n+'('+p.a+')'))})
                        return this}
                })({cl: peep})
                $.A(vw.r().q)
                $.in(function(){peep.pop(); vw.r()},'*')
            }
            TMP=function(){$.x('r'); $V({
                t:'li', x:'some-per', k:'per',
                tp: tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),
                r: function(){this.A().A(this.tp(this.model.toJSON()))},
                i: function(){$l(this.model); this.r()}
            })({m:Per=$M({d:{n:'j',a:20,o:'p'}})()})}


            BBSAMP1=function(){$.x('b','bbsamp','+')
                d=$.d()
                Rec = bb.M.e()

                RecV = bb.V.e({t:'div', k:'rec',

                    events:{'click': 'move'},
                    move:function(){this.$el.css('left', this.$el.position().left +10)},
                    rr:function(){return this.sDims().sPos().sCol()},
                    sDims:function(){this.$el.WH(this.model.get('w'), this.model.get('h'))
                        return this},
                    sPos:function(){this.$el.ab().LR(
                        this.model.get('pos').x, this.model.get('pos').y)
                        return this
                    },

                    sCol:function(){this.$el.C(this.model.get('C'))
                        return this}
                })


                _.e([
                    Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
                    Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
                    Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
                ], function(md){


                    var r=  RecV.o({model:md})

                    r.rr().$el.a2(d)
                })



            }


            BBSAMP=function(){$.x('b','bbsamp','+')


                d=$.d()

                Rec = $M()

                RecV = $V({

                    k:'rec',

                    e: {'click': 'move'},

                    move:function(){
                        this.q.css('left',
                            this.q.position().left +10)
                    },

                    r:function(){return this.sDims().sPos().sCol()},

                    sDims:function(){
                        this.q.WH(this.model.g('w'),
                            this.model.g('h'))
                        return this
                    },

                    sPos:function(){
                        this.q.ab().LR(
                            this.model.g('pos').x,
                            this.model.g('pos').y  )
                        return this
                    },


                    sCol:function(){this.q.C(this.model.g('C'))
                        return this}
                })

                _.e([
                    Rec({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
                    Rec({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
                    Rec({w:100, h:200, pos:{x: 0, y:100},C:'y'})
                ], function(md){ RecV({model:md}).rr().$el.a2(d)  })

            }







            BBVT=function(){$.x('x', 'bb view and template');
                md= new bb.M({d:[{t:'a.com', h:'a.com'}, {t:'b.com', h:'b.com'}, {t:'c.com', h:'c.com'}]})


                $.dI('ct', [$.bt('Load'), $.ul().id('list')]).C('y')

                $.dI('list-tp', [ $.la() ]).C('o')


                Vw = bb.V.e({
                    el:'#ct',
                    i: function(op){$l(op.blOp); this.tp =$('#list-tp').children()},
                    rr:function(){var da, tp; $l('rr: '+ this.model.get('d')[0].h );//$.c('b').ab(300,300)
                        da=this.model.get('d')
                        tp=this.tp, ul= this.$el.find('ul')
                        _.e(da, function(da){ul.A(tp.clone()
                            .find('a').hr('href', da.h).T(da.t).end())}) },
                    ev: {'click button':'rr'}
                })
                vw = new Vw({blOp:'empty!', model:md})
                return vw

            }
            BBVT=function(){$.x('x', 'bb view and template');



                $.dI('ct', [
                        $.bt('Load'),
                        $.ul().id('list')
                    ]
                ).C('y')

                $.dI('list-tp', [ $.la() ]).C('o')


                v=$V({

                    q: '#ct',

                    events: {'click button': 'r'},

                    r: function(){var da, tp,ul
                        $l('RENDER')
                        /*
                         $l('rr: '+ this.model.get('d')[0].h )
                         //$.c('b').ab(300,300)
                         da=this.model.get('d')
                         tp=this.tp
                         ul= this.$el.find('ul')
                         _.e(da, function(da){ul.A(tp.clone()
                         .find('a').hr('href', da.h)
                         .T(da.t).end())})
                         */
                    },
                    i: function(op){
                        $l(op.blOp)
                        this.tp = $('#list-tp').children()
                    }
                })({

                    blOp: 'empty!',

                    m: m=$M()({
                        d:[
                            {t:'a.com', h:'a.com'},
                            {t:'b.com', h:'b.com'},
                            {t:'c.com', h:'c.com'}
                        ]
                    })

                })

            }


        };works()
        KO0 =function(){$.x(); $.ipV('n'); $.h1T('n')
            $.ulE('arr', [$.liT()])
            $.sb().b$('A')
            $.dA('b',100,300,200,'+').bT('n')

            ok({n:ko.o('zi'), arr: ko.oa(),
                A:function(){this.arr.push(this.n())} }) // ok('n', ko.o('zi'))

            $.in(1, function(){
                vm.n('girf')
                _.e(['a','b','c'], function(i){
                    vm.arr.push(i)})},'*')
        }
        KOE=function(){$.x().t([$.tH([$.tr([$.th('F'),$.th('L')])]),
            $.tBE('peep', [
                $.tr([
                    $.tdT('f'),
                    ', ',
                    $.tdT('l')
                ])
            ])])
            ok({ peep: [
                {f:'a',l:'A'},
                {f:'b',l:'B'},
                {f:'c',l:'C'}
            ]})

        }
        BACKSET=function() {$.x()

            Sb= Sidebar = bb.m.e({

                ask: function() {this.s({c: prompt("color?")})}})
            sb = Sb.o()
            sb.on('change:c', function(md, c) {$('body').C(c)})
            sb.set({c: 'b'})
            sb.ask()
            //right from ko site
            d = $.dA(400)

            Sid = bb.M({
                promptColor: function () {
                    this.s({
                        co: pr('color:')
                    })
                }
            })

            sb = Sid()
            sb.on('change:co', function (md, c) {d.C($l(c))})
            sb.C('w')
            sb.ask()
            Per=bb.M.e({i:function(){
                alert("Welcome")}})

            p=Per({})
            p.s({n:"mac",a:67})
            $.dA(300).id('sb')

            Sidebar=bb.M.e({
                fn:function(){
                    return this.s({
                        c:prompt("c?")})}
            })

            Sidebar()
                .oC('c', function(m,c){
                    $('#sb').C(c)
                }).s({c:'w'}).fn()

        }
        BADS=function(){$.x().h1('backcl').i('chicks').A()

            bads=$Cl()()
            bads.oA(function(s){alert("new baddie: "+ s.g("n"))})
            bads.add([{n:"bad1"}, {n:"bad2"}])


        }
        FRND=function(){$.x().h1('backcl')

            Frnd = $M({d:{lame:1}})
            f1=Frnd({n:"Lul", a:67})
            f2= Frnd({g:'jigo'})
            f2.s({n:"Rigo", a:7})
            f2.s('n','hah')
            Per=$M({

                d:{lame:true},

                i:function(){var t=this
                    t.on('error', function(m,e){
                        alert(3); $l(e)})
                    t.on('change:n',
                        function(m,e){
                            alert(3); $l(e)})},

                v:function(at){
                    if(at.n=='rigo'){return "n cant be rigo!"}
                }

            })
            p=Per({n:"rigo", a:7})
            cl=$Cl()()
            f1=cl.A(f1)
            f2=cl.A(f2)
            cl.rm(f1)
            Pers= $Cl({m:Per})
            pers=Pers()
            p1= pers.add(p)
            pers.add(p2)
            pers.rm(p1)
        }
        FETCH=EVTSAVE=function(){

            m= bb.M.x({
                n: 'j'
            })


            Don = $M({
                //defaults
                d: { n:null, sprink:0, cream:0 },
                //u? url?
                u: function(){return'/dn/' + this.id || ''}
            })

            bc=bostonCream= Don({n:'Bos',cream:1})
            bc.s({sprink:1}).S()  //save

            Dons= $Cl({m:Don, url:"/dn"})

            dons=Dons()
            dons.fetch() //f F


            dons.at(0)  // a -> gets donuts by index.
            dons.get(0) // g   -> gets donuts by id.
            dons.each(function(d){ // e
                $l(d.get("name"))
            })


            dons.select(function(d){//sl
                return d.get("name").length>2
            })// Select donuts with names longer than 2

            dons.map(function(d){//m
                return d.get("name")})


            Shop= $m({i: function(){
                this.dons=Dons()
                this.dons.url='shops/'+this.id+"/dn"
            }, df: {n:"z"} })

            Shop.oA(function(dn){ //on ? alert added?
                alert("added "+ dn.g('n'))
            })

            lem = Shop.dons.A({
                n:"Lem"
            })

            //////

        }
        BBEV=function(){$.x().i('chicks')


            ev = bb.Ev()
            ev.b("fun:had", // bind? on?
                function(){alert("wee!")})
            //trigger
            ev.tr("fun:had")  //it'll alert "wee!"


        }
        MODCHANGE=function(){$.x()

            Bk = $M({

                d: {ID: "", n: ""},
                i: function(){var bk=this; $l('init..')


                    this.on('change',  function() {
                        alert('change')
                        if(bk.hasChanged('ID')){alert('ID changed')}
                        if(bk.hasChanged('n')){alert('n changed')}

                    })},

                showAlert: function () {
                    alert('ID: '+this.g('ID')+','+' n: '+this.g('n'))
                }
            })



            bk = Bk({ID: 1, n: "a"})    // ChildBook = Bk.extend({})


        }
        BBSAMP1=function(){$.x('b','bbsamp','+')
            d=$.d()
            Rec = bb.M.e()

            RecV = bb.V.e({
                tagName:'div', className:'rec',
                events:{'click': 'move'},
                move:function(){this.$el.css('left', this.$el.position().left +10)},
                rr:function(){return this.sDims().sPos().sCol()},
                sDims:function(){
                    this.$el.WH(this.model.get('w'), this.model.get('h'))
                    return this
                },
                sPos:function(){
                    this.$el.ab()
                        .LR(
                        this.model.get('pos').x, this.model.get('pos').y)
                    return this
                },
                sCol:function(){
                    this.$el.C(this.model.get('C'))
                    return this}
            })

            _.e([
                Rec.o({w:100, h: 30, pos:{x: 300, y:400},C:'o'}),
                Rec.o({w:100, h: 20, pos:{x: 400, y:400},C:'g'}),
                Rec.o({w:100, h:200, pos:{x: 0, y:100},C:'y'})
            ], function(md){

                var r=  RecV.o({
                    model:md
                })

                r.rr().$el.a2(d)
            })
        }
        /*
         VWob={  i:'initialize',
         m:'model',  c:'collection',
         e:'el',  n:'id', x:'id',  k:'className',
         tn:'tagName',  t:'tagName',
         a:'attributes',  ev:'event'  }


         Vw = $V({
         renderCollection: function(op) {op = op || {}
         op.target = op.target || this.$el;
         op.cl = op.cl ||    op.collection ||  this.collection;
         //- reset views
         if (!op.add) {this.disposeViews()}
         else {this._subviews = []}
         this._renderOptions = op
         //- if there is a collection and a view then render it
         if (op.cl && this.view) {op.cl.each(this._renderView, this)}
         return this
         }
         })

         */
        bok=function(){


            BOOK=function(){ $.fm()
                toBook = function(){Y.run('book')}
                s1.A(
                    $.h1('BOOK').$(toBook) ,
                    bookName = $.ip(),
                    $.bt('new book',function(){
                        $.P('newBook', {name: bookName.V()},
                            toBook)}),
                    $.hr())

                $.Gj('books',function(bks){
                    s1.A($.h3('books:'))
                    _.e(bks, function(bk){
                        s1.A( $.sp().C('x').$(function(){
                                $.P('delBook',{book: bk._id},toBook)
                            }),
                            $.bt(bk.name,function(){
                                s2.A($.h2('CHAPTER: '+bk.name),
                                    chapterTitleInput=$.ip(),
                                    $.bt('new chapter',
                                        function(){$.P('newChapter',{
                                            chapterTitle: chapterTitleInput.V(),
                                            book:bk._id
                                        },function(){chapterView(bk, c)})}), $.hr())
                                $.eGj('chapters',{book:bk._id}, function(ch){
                                    s2.A($.bt(ch.title, function(){
                                        chapterView(bk,ch)}), $.br(2))})
                            }), $.br(2))})})


                chapterView=function(b,c){ s2.E();s1.E();
                    s1.A($.h1('BOOK').$( toBook) )
                    $.Gj('chapters',{book:bk._id}, function(chapters){
                        s1.A($.h3('chapters:'))
                        s2.A($.h3('pages:'))
                        _.e(chapters,function(ch){
                            s1.A($.sp('x').$(function(){$.P('delChapter',{chapter: ch._id}, function(){chapterView(bk, ch)})}),
                                $.bt(ch.title, function(){chapterView(bk,ch)}), $.br(2))})})
                    s2.A($.h1('chapter: '+ch.title))
                    s2.A( pageNameInput=$.ip(),
                        $.bt('new page', function(){
                            $.P('newPage',{pageName :pageNameInput.V(), chapter:ch._id
                            })}), $.hr())
                    $.eGj('/pages', {chapter: ch._id}, function(pg){
                        s2.A($.bt(pg.name, function(){pageView(bk,ch,pg)
                        }), $.br(2)  )})
                }}
            pageView = function(bk, ch, pg){s1.E();s2.E()
                s1.A($.h1('BOOK').$(ldr('book')) )
                s1.A($.h1('CHAPTER '+ ch.title).$(function(){chapterView(book,ch )}))
                $.Gj('/pages',{chapter: ch._id},
                    function(pgs){s1.A($.h3('pages'))
                        _.e(pgs,function(pg){
                            s1.A($.bt(pg.name,function(){sectionView(ch)}), $.br(2)
                            )})})
                s2.A($.h1('page: '+pg.name))
                $.eGj('/sections', {book: bk._id, chapter: ch._id, page: pg._id},
                    function(sc){s2.A($.bt(sc.section, function(){sectionView(bk,ch,pg)}), $.br(2)
                    )})
            }


            OBJECT=function(){$.fm()
                s1.A('your objects', $.br(2), t= $.ip(),
                    $.bt('new object',function(){$.P('newObj',
                        {t: t.V()})}))
                $.eG('objs', function(o){

                    s1.A($.h2(o.t).$(function(){
                        s2.E($.h1(o.t), tt=$.ip(),
                            $.bt('new sub-object',function(){
                                $.P('newObj', {t: tt.V()})}))}))
                    _.e(o.i,function(i){ s1.A(h3(i)) })
                })

            }


        };bok()
        BBEXT=function(){
            // https://coderwall.com/p/xj81ua/a-better-way-of-extending-backbone-models-and-views
        }
//Note=Bb.M.e({initialize:function(){},author:function(){},coordinates:function(){},canEdit:function(ac){return true}})
//PrivNote=Note.extend({canEdit:function(ac){return ac.owns(this)}})
//Note2=Bb.M.e({set:function(atts,opts){Bb.M.prototype.set.apply(this,arguments)}})
//render does nothing unless u override it
//cannot access model from init
        old=function(){
            V$=function(){var g=G(arguments), o,v, a
                a=O(g.f)? g.f:{}
                o={ob: g.f}
                o.ob= o.b||{}
                if(a.I){a.initialize = a.I}
                if(a.R){a.render = a.R}
                if(a.r){a.render = a.r}
                if(a.rr){a.render = a.rr}
                if(a.E){a.events = a.E}
                if(a.T){a.template = a.T}
                if(a.t){a.tagName = a.t}
                if(a.k){a.className = a.k}
                if(a.i){a.id = a.i}
                Vw = bb.V.e(ob)
                if(a.m){a.model= a.m}
                if(a.md){a.model= a.md}
                if(a.cl){a.collection= a.cl}
                vw = new Vw(a)
                return vw
            }
        }
        QON=function(){$.x('o', 'jquery .on')

            /*

             As of jq 1.7, no longer need to use  .bind()?, .delegate(), and .live().
             .on(evString [,sel][,d], hl)|(evObject [,sel][,d])
             evString 1+ sp-sep evs w opt nsp ('click', 'keydown.myPlugin')
             evObject {k: evString, v:ev hl fn}
             sel(S) -  fl wch sel ch trg ev
             d(*) - d 2b passd 2 the hl in ev.data whn ev trgd
             hl: fn(evOb [, anythng extrPam] [,...])



             ~~ ev ns & nsps
             any ev ns can be used for the evs arg .
             jq will pass through the bw's standard JavaScript ev yps,
             calling the hl fn when the bw gens evs due to user actions such as click.
             also, the .trigger() met can trgr bth
             standard bw ev  ns & cust ev ns
             to call atched hls.

             ev ns should only contain alphanumerics | '_' | ':'


             An ev n can be qualed by ev nspaces that simp  rming or trging the ev
             ex: "click.myPlugin.simple" dfs bth
             the myPlugin & simp nspaces  4 this partic  $ev

             A $ev   hndlr atched via that S could be rmved w
             .off("click.myPlugin") |  .off("click.simple")
             w/o disturing othr $hndlrs attched to the el

             nspaces are sim  to CSS ks (!hier - only 1 n must match )

             In 2nd f of .on(), the evs arg is a pob.

             The keys are Ss in the same f  as the evs arg
             w space-septed ev ty ns &  opt nspaces.

             bth 'behave' same, EXCEPT, here:
             The va  for e  key is a fn (or false)
             that is
             used as the hdlr
             instd of   final arg  to the met


             ~~~~~~Drct and deged evs
             maj  of bw evs bub/pgate UPWARDS/OUTWARDS, all the way to bd and  doc

             If sel omitd or nul,the ev  hlr is refd to as drct or drctly-bound.

             The hlr is called ev  time an ev  occurs on the sel  els,
             whether it occurs
             drctly on the el  or
             bubs from a ch (inner) el


             ~DELEGATED (sel provided) - When a sel  is provided, the ev  hlr is refd to as delegated.
             Degev adv:  can hndle evs from ch added ltr, also, lowr overhd

             The hlr is not called when the ev occurs directly on the bound el,
             but only for chs (inner els)  that match the sel.

             jq bus the ev  from the ev  tg up to the el where the hlr is atched(  in  to outermost el)  and  runs the hlr for any els along that path matching the sels.

             Ev hlrs are bound only to the cur sel d els; they must exist at the time your code makes the call to .on().
             (To know els are prsnt and can be seld, place scrps aft the els  | $(fn)) Alt: use degd evs to atch ev  hlrs.

             By pikng an el  that is guarntd to be prsnt at the time the degd ev  hlr is atchd,
             you can use degd evs to avoid  need to frq atch & rm ev hlrs   .
             This el  could be the ct el  of a vw in a MVC design, for ex,
             or doc  if the ev  hlr wants to monit  all bubevs in the doc
             -The doc el  is avail  in   head of   doc  bf loadg any oth HTML,
             (so its safe to  atch evs there wo waitg 4 the doc 2b rdy)



             ex:  consid  a tb w 1000 rows in its tbody, THIS atchs 1000 hlrs:*/

            $('#dataTable tbody tr').$(
                function() {$l( $( this ).text())})


            /*
             BUT: ev-deleg approach
             ev hl atches to the tbody,
             ev only bubups 1lev ($ed tr -> tbody):

             */$('#dataTable tbody').$('tr',
                function() {$l( $( this ).text())})/*




             The ev hl and its environment
             The hl arg  is a fn (or false)
             and is required unless you pass an ob for the evs argument.
             You can provide an anonymous hl fn at the point of the .on() call (ex above)
             OR declare a named fn and pass its name:
             */


            $.bt().$(notify )

            function notify() {alert( "clicked" )}


            /*  ~ev ob, bubg
             When the bw trgs   ev or oth js calls jq's .trigger() met,
             jq passes the hl an evob it can use (to analyze & change)

             evob: normalized subset of d provided by the bw; - the bw's unmodified native ev ob is available in ev.originaEvent.
             ev.type:  ev n ('resize)
             ev.target:  deepest (innermost) el where the ev occurred
             By default:
             most evs bubup from the orig  evtg to the docel
             At each el along the way,
             jq calls any matching ev hls that have been atched.


             ~stopProp
             A hl can pvnt the ev from bubg further up the  tree
             (and thus pvt hls on those els from runng)
             by calling ev.stopPropagation().
             Any other hls atched on the cur  el will run however.
             To pvt that, call ev.stopImmediatePropagation().
             (ev hls bound to an el are called in the same order that they were bound.)

             Returning false from an ev hl will automatically
             call ev.stopPropagation() and ev.pD().
             A false val can also be passed for the hl as a shorthand for fn(){ return false; }.
             So, $( "a.disabled" ).on( "click", false );
             atches an ev hl to all links with class "disabled"
             that pvts them from being followed when they are clicked and also stops the ev from bubg.

             ~pD
             Similarly, a hl can call ev.pD() to canc  any bw df acts  for this ev;
             ex: wont fol lnks -Not all bw evs have default actions,and not all default actions can be canceled.


             When jq calls a hl, 'this' is a ref  to the el where the ev is being delivered;
             for directly bd evs:  el where the ev was atched
             for degevs: this is an el matching sel.
             (Note that this may not be eq  to evtg if the ev has bubd from a ch el.)

             ~Passg d to the hl

             If a d g is providd to .on() and !(null|U),
             it is passd 2 the hl in the ev.data pop ea time an ev is trgd
             The d  arg  can be any type ,
             but if a S is used the sel  must either
             be provd  or  explicitly passed as null
             (so that the d  is not mistaken 4 a sel )

             Best:  use a pob so that mult  vals can be passd as pops



             ~eh
             -As of jq 1.4,the same ev hl can be bd to an el mult times.
             This is especially useful when the ev.data
             feature is being used, or when other uniq d is in a closure around the ev hl fn
             ex: */fn=function(ev) {alert(ev.data.n)}; $("button").$({n:'j'},fn).$({n:'r'},fn) /*: will gen two dif alerts when the button is clicked.






             ~trigger, triggerHandler
             As an alternative
             or in addition to the data arg  provided to the .on() met,
             you can also
             pass d  to an evhl using a 2nd arg
             to .trigger() or .triggerHandler().
             Data provided this way is passed to the evhl as further pams after the Ev ob
             If an A was passed to the g.s of .trigger() | .triggerHandler(),
             ea el  in the A will be presented to the evhl as an individual pam



             ~~~ Ev performance

             In most cases,
             an ev  such as $ occurs infreq and performance is not a signif  concern.
             However,
             high freq  evs such as
             mousemove or scroll
             can fire dozens of times per second,

             and in those cases
             it becomes  important to use evs judiciously.
             Performance can be increased by:
             -reducing the amount of work done in the hl itself,
             -caching information needed by the hl rather than recalculating it,
             -rate-limiting the number of actual page updates using $.in


             Attaching many deged evhl near the top of the doc  tree can degrade performance.
             Ea time the ev  occurs,
             jq must compare all sels of all atched evs of that ty
             to ev  el  in the pth from the evtg 2 top of  doc
             For best performance, atch delegated evs at a doc loc as close as poss  to the tg els.
             Avoid excessive use of doc  or doc.bd for degd evs on large docs

             jq can process simp  sel   of the f  tag#id.class very quickly
             when
             they are used to fl degevs.
             So, "#myForm", "a.external", and "button" are all fast sels.
             Degevs   that use more complex sels
             partic hier  ones, can be sev  times slower--but they are still mostly fast enuf
             Hier  sels can oft  be avoided simp  by atchg hl 2 a more approp pt in doc


             ex: instead of
             $( "body" ).$("#commentForm .addNew", addComment )
             use
             $( "#commentForm" ).$( ".addNew", addComment ).




             jq's ev system requires that a DOM el allow atching
             data via a property on the el, so that evs can be tracked and delivered.
             The ob, embed, and applet els cannot atch data,
             and therefore cannot have jq evs bound to them.

             The focus and blur evs are specified by the W3C to !bub
             but jq defines cross-bw focusin and focusout evss that do bub .
             When focus and blur are used to atch delegated ev hls,
             jq maps the names and delivers them as focusin and focusout respectiv .
             For consistency and clarity, use the bubg ev yp names.

             In all bws, the load, scroll, and er evs (on an iEl) do !bub .
             In Internet Explorer 8 and lower, the paste and reset evs do !bub .
             Such evs are not suprtd for use with deg,
             but they can be used when the ev hl is dircly atched
             to the el geng the ev.

             The error ev on the wd ob uses nonstandard arguments and return val conventions,
             so it is not supported by jq.
             Instead, assign a hl fn directly to the wd.onerror property.

             The hl list for an el is set when the ev is 1st delivd.
             Adding or rmg ev hls on the current el
             won't take effect until the next time the ev is handled.
             To pvt any further ev hls from execg on an el wthn an ev hl,
             call ev.stopImmediatePropagation().

             This behavior goes against the W3C evs spec
             To better understand this case,
             consider the following code:
             */$test=$("#test").$(hl1).$(hl2)

            function hl1() {$l( "hl1" );$test.off( "click", hl2 )}
            function hl2() {$l( "hl2" )}
// In the code above,
// hl2 will be executed anyway the first time even if it's rmd using .off().
// but the hl will not be executed the following times the click ev is triggered.






            $( "p").$(function() {alert( $( this ).text())})// ex: Display a p's t in an al when it is $d:
            $( "p" ).$({foo: "bar"}, hl); function hl(ev){alert( ev.data.foo )}//ex: Pass data to the ev hl, which is specified here by name:
            $( "form" ).on( "submit", false ) //ex: Canc a f sb act  and pvt the ev from bubg up by returning false:
            $( "form" ).on( "submit", function( ev ) {ev.pD()})  //ex: Canc only the df act  by using .pD()
            $( "form" ).on( "submit", function( ev ) {ev.stopPropagation()})//ex: Stop submit evs from bubg without pvting form submit, using .stopPropagation().
            $( "div" ).$(function( ev, per) {alert("Hi, "+per.n)}) // ex: Pass data to the ev hl using the second argument to .trigger()
            $( "div" ).trigger( "click",{n: "Jim" })
            $( "div" ).$( function( ev, sal, n) {alert(sal+', '+n)})// ex: Use the the second argument of .trigger() to pass an array of data to the ev hl
            $( "div" ).trigger( "click", [ "Hi", "Jim" ] )



            //<style>  p { color: red;} span {color: blue; } </style>



            $.p('Has an atched custom ev.')
            $.bt('Trigger custom ev')
            $.sp().at('display','none')


            $( "p" ).on( "myCustomEvent", function( ev, myName ) {


                $( this ).text( myName + ", hi there!" )

                $( "span" ) .stop() .css( "opacity", 1 )
                    .text( "myName = " + myName )
                    .fadeIn( 30 ) .fadeOut( 1000 )

            })


            $( "button" ).click(function () {

                $( "p" ).trigger( "myCustomEvent", [ "John" ] )

            })




// ex: Attach multiple ev hls simultaneously using a pob.

            // .test { color: #000;padding: .5em; border: 1px solid #444; } .active { color: #900; } .inside { background-color: aqua; }




            $.dK('test')
            $( "div.test" ).on({click: function() {
                $( this ).toggleClass( "active" )},
                mouseenter: function() {
                    $( this ).K( "inside" )},
                mouseleave: function() {
                    $( this ).removeClass( "inside" )}})


            // ex: $ any p to add another after it. Note that .on() allows a $ev on any p (even new ones)
            //--since the ev is handled by the ever-present bd-el  aft it bubs to there.
            // p { background: yellow; font-weight: bold;cursor: pointer; padding: 5px; } p.over { background: #ccc; } span { color: red;}

            $.p('Click me!')
            $.sp()
            n=0
            $.bd().$('p', function() {

                $( this ).after(
                    $.p('Another p! ' + (++n))
                )
            })

            //alert each p's tx on $:
            $.bd().$('p', function(){ alert( $( this ).text() ) })

            //Cancel a link's default act
            $.bd().$('a', function(ev){ev.pD()} )



        }





        ////
        PLV=function(){$.x('o','hi')


            Per= bb.M.e({d: {n:'a', a:20, o:'p'}})

            p=  Per.o({})
            p1 = Per.o({n:'b'})
            p2= {n:'c'}
            PerV=bb.V.e({t:'li',
                x:'some-per', k:'per',

                tp:tp=_.tp('<%= n %> (<%= a %>) - <%= o %>'),

                r: function(){
                    this.$el.A('fasdfsfasd')
                    _m=this.model
                    //    this.$el.A(this.tp(m  ))  // this.model.toJSON()
                },

                i: function(){this.r()}
            })

            PepC=bb.C.e({m:Per})

            pV=PerV.o({m:p})
            pC=PepC.o()

            pC.add([p, p1,p2])

            PepV=bb.V.e({cl: PepC, el:ul= $.ul(),
                i:function(){},
                r: function(){
                    ul=this.q.E()
                    this.J(function(md){PerV.o({m:md},ul)})}})
            pCV = PepV.o({cl: pC})
            $.in(.2,function(){pCV.r()},'*')
            $.in(.4,function(){pCV.r()},'*')

        }
        C$= function(a){var b,c
// $.ext(bb.Collection)
            //if(U(a)){var c=new bb.Collection; return sCl(c)}
            a=O(a)?a:{}
            if(a.m){a.model= a.m}
            c= bb.Collection.extend(a)
            return function(o){o=O(o)?o:{}

                //if(o.m){o.model= o.m}
                b=new c(o)
                o.o=o.on
                E$(o)
                return b}
        }
        BCL=function(){$.x().h1('BCL')

            Bk = bb.M.e({d: {ID: '', n: ''}, id: "ID",
                url: 'http://localhost:51377/api/Books'
            })

            BksC = bb.C.e({m: Bk})

            cl1 =   BksC.o()
            bk1 = Bk.o({ ID: 1,  n: "Bk 1" })
            bk2 =  Bk.o({ ID: 2, n: "Bk 2" })
            cl2 =  BksC.o([bk1, bk2])
            bk3 =  Bk.o({ ID: 3, n: "Bk 3" })
            cl2.add(bk3)

            change=function(){bk3 = new Bk({ ID: 3, n: "Bk 3" })
                cl2.add(bk3)
                bk3_changed =  Bk.o({ ID: 3, n: "Changed Model" })
                cl2.add(bk3_changed, { merge: true })
            }

            add=function(){ bk4 =   Bk.o({ ID: 4, n: "Bk 4" })
                bk5 =  Bk.o({ ID: 5, n: "Bk 5" })
                cl2.add([bk4, bk5])
            }

            addAt=function(n){bk0 = new Bk({ ID: 0, n: "Bk 0" })
                cl2.add(bk0, {at:n||0})
            }

        }
        BBCOL=function(){$.x()

            Per = bb.M.e({})
            p1 =  Per.o({n:'j'})
            p2=  Per.o({n:'y'})

            Pers= bb.C.e({model: Per})

            pers=  Pers.o([p1, p2])
        }
        BBSORT=function() {

            Chp = bb.M.e()
            chps =  bb.C.e({m:Chp}).o()
            chps.comparator = function (a) { return a.tt } //$.x(a)
            chps.add(Chp.o({p:9, tt:"End"}))
            chps.add(Chp.o({p:5, tt:"Mid"}))
            chps.add(Chp.o({p:1, tt:"Beg"}))
            $l(chps.pluck('tt'))
        }
        FLCL=function(){$.x('r', 'filtering a cl:')

            /*
             FlV = bb.V.e({
             ev: {'click #run': 'runFilter'},
             runFilter: function(e){e.pD();
             this.fl = {
             // ... get the filter info from the DOM
             }; this.rr()},
             rr: function(){// get the filtered list from the collection
             // iterate over the filtered list and render the results in to the html array
             // populate the DOM with the resulting HTML
             HT=[]
             _.e(this.cl.where(this.fl),
             function(item){HT.push(
             _.tp($('my-item-template').H())(item.tJ())
             )})

             this.$el.html(HT); return this }
             })*/


            Cl =  bb.C.e({i:function(){}})


            cl = Cl.o({})


            /*
             cl.add([{a: 'f', b: 's'},
             {a: 't', b: 's'},
             {a:'f', b: 's'},
             {a: 's', b:'t'}
             ])


             res = cl.where({a:'f',b:'s'})
             */
            //http://tech.pro/tutorial/1519/rendering-a-filtered-backbonecollection
        }
        TASKER=function(){$.x()
            Ap={M:{}, C:{}, V:{}}

            Ap.M.Task = bb.M.e({})

            t1=Ap.M.Task.o({t:'go  store', pr:4})

            t2=Ap.M.Task.o({t:'go park', pr:3})

            Ap.V.Tsk= bb.V.e({t:'li',
                rr: function(){this.A( this.g('t') )
                    return this
                }
            })

            taskView=Ap.V.Tsk.o({m:t1})
            Ap.C.Tasks = bb.C.e({m:Ap.M.Tsk})
            tasks=Ap.C.Tasks.o([{t:'hi'}, {t:'bye'}])
            Ap.V.Tasks = bb.V.e({t:'li',
                rr: function(){
                    var that=this
                    this.cl.each(
                        function(t){
                            var v=Ap.V.Task.o({m:t})
                            that.$el.A(v.rr().el)
                        }, this)
                    this.el.A()
                }
            })

            tasksV=Ap.V.Tasks.o({cl:tasks})
        }
        PEOPLE=function(){$.x()

            Per  = bb.M.e({
                i: function () {
                    //this.oV(function(mod, err){$l(err)})
                },
                d: {n:'doe', a: 30, j: 'wrk'},
                validate: function (ats) {if (ats.age < 0) {return 'a < 0!'}},
                work: function () {return this.g('n') + ' is working'}
            })

            p = Per.o({n: 'y', a: 34})

            //p.oV(function (mod, z) {$l(z)})

            PerV = bb.V.e({tn: 'li',
                k: 'person', x: 'some-person',
                i: function () {this.r()},
                tp: _.template("<strong><%= name %></strong> (<%= age %>) - <%= job %>"),
                r: function () {
                    var t = this
                    //this works, but doesnt use a template
                    // t.H(  t.g('name')+' '+t.g('age')+' '+t.g('job'))
                    t.H(
                        t.T(
                            t.J()
                        )
                    )
                }
            })

            pV= PerV.o({m: p})

            peepC = bb.C.e({m: Per})


            pC = peepC.o([
                {n: 'rigo', a: 29},
                {n: 'j', a: 2},
                {n: 's', j: 'gx'}
            ])
            pC.add(p)


            pC.at(1).n('joejoe')
            pC.at(1).s('name', 'joejoe')

            PeepV = bb.V.e({tn: 'ul',
                i: function () {
                    $l('hi')
                    $l(this.cl)
                },
                r: function () {//var t=this
                    this.cl.each(function (p) {var v,pV  //$l(p.g('n'))
                        pV = PerV.o({m: p}) //$l(pV.el)
                        this.$el.append(pV.el) //t.q( pV.el  )
                    }, this)
                }

            })

            pcv = PeepV.o({cl: pC})
            pcv.r()
            $.A( pcv.el )

        }
        fromServ=function(){
            AVAIL=function(){$.x('x'); Ap={ M:{},C:{},V:{},T:{} }

                Ap.T.Avail=function(model){
                    return $.d('g',400,100).mar(20).A(

                        $.h4(model.g('c')).id('avail').C('y','r'),
                        $.br(), $.sp('delete').id('deleteAvail'),
                        $.sp(' '), $.sp('edit').id('editAvail'),
                        $.sp(' '), $.cb().id('selAvail'))
                }
                Ap.M.Avail=M$({urlRoot: '/avail'})
                Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
                Ap.V.Avail=bb.V.e({

                    r:function(){
                        this.$el.A( Ap.T.Avail(this.model) )
                        return this},
                    ev:{
                        'click #deleteAvail':'deleteAvail',
                        'click #editAvail':'editAvail',
                        'blur #avail':'changeAvail'},
                    changeAvail:function(){
                        this.$el.fi('#avail').at('contenteditable','false')
                        newAvail=this.$el.fi('#avail').text()
                        this.model.s('c', newAvail)
                        this.model.save()},
                    deleteAvail:function(){
                        this.model.destroy()
                        this.$el.rm()
                    },

                    editAvail:function(){this.$el.fi('#avail').at('contenteditable','true')}

                })
                Ap.V.Avails =bb.V.e({
                    el:'#availsDiv',
                    I:function(){this.render()},
                    R:function(){var t=this
                        t.collection.fetch({
                            success:function(){
                                t.$el.html('')
                                t.$el.A("<h1>Avails List</h1>")
                                t.collection.each(function(m){
                                    t.$el.A( Ap.V.Avail({model:m}).render().el )
                                    return t},t)
                            }})
                    }})
                //  avs=Ap.C.Avails()
                //  v=Ap.V.Avails({collection:avs})//.render()
//    avs.on('destroy',function(aa){$l('destroy!!!!')})
                $.ip('new avail').id('newAvail').A()

                $.bt('ok',function(){
                    Ap.M.Avail({c: $('#newAvail').v()
                    }).save()

                    v.render()

                }).A()
                $.dI('availsDiv')
                $.ip('new avail').id('newAvail').A()
                $.bt('ok',function(){
                    var m= Ap.M.Avail({
                        c:qiv('newAvail')
                    })
                    m.save()
                    m.on('destroy', function(){alert('i am the model and i was destroyed')})
                    v.render()
                })
                $.dI('availsDiv')


                Ap.T.Avail=function(model){
                    return $.d('g',400,100).mar(20).A(
                        $.h4(model.g('c')).id('avail').col('y','r'),
                        $.br(),
                        $.sp('delete').id('deleteAvail'),
                        $.sp(' '), $.sp('edit').id('editAvail'),
                        $.sp(' '), $.cb().id('selAvail')
                    )
                }
                Ap.M.Avail=bb.M.e({urlRoot: '/avail'})
                Ap.C.Avails=C$({model: Ap.M.Avail, url: '/avail'})
                Ap.V.Avail=bb.V.e({

                    r:function(){
                        this.q(
                            Ap.T.Avail(this.model)
                        )
                        return this
                    },
                    ev:{
                        'click #deleteAvail':'deleteAvail',
                        'click #editAvail':'editAvail',
                        'blur #avail':'changeAvail'
                    },
                    changeAvail:function(){
                        qq( this.$el.find('#avail') ).cE(0)
                        var newAvail=this.$el.find('#avail').text()
                        this.model.s('c', newAvail)
                        this.model.save()
                    },

                    deleteAvail:function(){
                        this.model.destroy()
                        this.$el.remove()},
                    editAvail:function(){

                        this.$el.find('#avail').cE(1)

                    }

                })

                Ap.V.Avails =bb.V.e({el:'#availsDiv',
                    i:function(){this.render()},
                    r:function(){var t=this
                        t.collection.fetch({
                            success:function(){
                                t.q.H('')

                                t.q($.h1('Avails List'))

                                t.e(
                                    function(m){
                                        t.q(
                                            Ap.V.Avail({m:m}).r().el )
                                        return t},t)

                            }})
                    }})
                avs=Ap.C.Avails.o()

                avs.on('destroy', function(j){
                    alert('i am col and i was destroyed')
                    v.trigger('modelDeleted')
                })

                v=Ap.V.Avails.o({cl:avs})


                v.on('modelDeleted', function(){alert('modDel')})

                bb.M.e({
                    d:{ prop:3 },
                    test:function(){
                        $( this.get('prop') ) },
                    test2:function(a){ $l('prop: '+this.get('prop'))},
                    happy:function(a){
                        this.test2(a)
                    }
                })


            }
            DIRTPAGE=function(){$.x()

                var newMsBox, newTopic, newMs,searchBox

                MsM= bb.M.e({  })
                MsC= bb.C.e({   m:'MsM'  })
                MsView= bb.V.e({  })
                MssView= bb.V.e({ })

                $.h1().A(
                    $.a(  'Dirtpage', '/wap/dirtpage/' )
                ).A()
                $.dI('content')
                if(wappyPam) {

                    newMsBox= $.d().WH('auto').A(
                        $.h1('new ms'),
                        $.ip().K('form-control').id('newMs'),
                        $.bt('ok', function(){var newMs = $('#newMs').v()
                            $.P('messages' , {tpc:wappyPam, ms:newMs
                            }, function(){ loadResults() })}))
                    $('#cont').A($.h1('the '+ wappyPam + ' page'),
                        newMsBox, $.dI('res'))
                    function loadRes(){$.G('topics/' + wappyPam, function(msgs){
                        $('#results').ht($.h5('len: '+msgs.length)  )
                        _.e(msgs, function(ms){$('#res').A($.h6( ms.ms ))
                        })})}
                    loadRes()}
                else {
                    newMsBox=$.d().WH('auto').A(
                        $.h1('new message'),
                        $.ip().K('form-control').id('newTopic'),
                        $.ip().K('form-control').id('newMs'),
                        $.bt('ok', function(){
                            newTopic = $('#newTopic').v()
                            newMs = $('#newMs').v()
                            $.P('msgs', {topic:newTopic, message:newMs}, function(){})})
                    )
                    searchBox= $.d().WH('auto').A(
                        $.h1('search'),
                        $.ip().K('form-control').id('searchInput'),
                        $.bt('ok', function(){window.location=   '/wap/dirtpage/'+ $('#searchInput').v()
                            searchInput = $('#searchInput').v()
                            $.G('topics/' + searchInput, function(msgs){
                                $('#res').ht($.h5('len: '+msgs.length)  )
                                _.e(msgs, function(ms){$('#res').A( $.h6( ms.ms ) )})
                            })
                        })
                    )
                    $.dI('res')
                    $('#cont').A(newMsBox, searchBox)
                    $.eG('msgs',  function(ms){
                        $('#res').A($.h2().A(
                                $.a('topic: '+ms.topic,'/wap/dirtpage/'+ms.topic)),
                            $.h3( 'ms: '+ms.ms)
                        )
                    })
                }
            }
        };fromServ()
//bE, observableArray
        KOOA=function(){$.z()



            $.dE('peep', [

                $.p(

                    $.bt('push',function(){

                        vm.peep.push({f:'j',l:'y'})

                    }),

                    $.spT('f'),    ' ',   $.spT('l'))

            ])



            OK('peep', kA(
                {f:'B',l:'Bb'},
                {f:'C',l:'Cc'},
                {f:'D',l:'Dd'}))

        }
//bind 'visibile' to a boolean
        KOBVS=function(){$.z('y').h1('see me if true!')
            .bVs('vs')

            $b('vs', ko.o(1))


            $.in(function(){
                vm.vs(0)

                $.c$()

                $.in(function(){
                    vm.vs(1)
                    $.c$()
                })

            })
        }
//bind cb 'checked' to boolean
        SPAM=function(){$.x()

            $.cbC('spam').a2( $.p('spam? ') )

            $b({ spam: ko.o(1)})
            $.in(2, function(){vm.spam(0);$.c$()})
        }
//bind 'option'
        KOSL=function(n,v){$.x('o').h1('dests')

            $.slO('cunts')

            ok('cunts',
                ko.oa('Fran', 'Ger', 'Spa'))

            $.in(2,function(){
                    vm.cunts.push('Chi')},
                '*'
            )
        }
        KOIP=function(){$.z('x')

            $.p('Login name:').A( $.ipTi('un') )

            $.p('Pw:').A( $.pwTi('pw') )

            // $.p(['Pw:', $.pwTi('pw')])

            //<p> <input type="password" data-bind="textInput: userPassword" /></p>


            $.A(
                'vm: ',
                $.pre().bT('ko.toJSON($root, null, 2)')
            )



            ok({un: ko.o(''), pw: ko.o('abc')})
        }
//bT,bV and computed
        COMP=function(){$.z().h1('KNOCKOUT')

            $.d([
                $.p('F: ', $.b().bT( 'f')),
                $.p('L: ', $.b().bT( 'l') ),
                $.p('F: ', $.ip().bV( 'f') ),
                $.p('L: ', $.ip().bV( 'l') ).id('l'),
                $.p('L: ', $.b().bT('fL') ),
                $.bt('caps').b$('capL')
            ]).A()


            ok({
                f:ko.o('j'),
                l:ko.o('y'),
                fL : ko.c(function(){
                    return this.f()+' '+this.l()}),
                capL :function(){this.l(S.tU(this.l()))}
            })



        }
        TASKS=function(){$.z().h3('Tasks')

            $.f().bSb('aT').A().A("Add task: ",
                $.ip().bV('nT').ph("What?"),
                $.bt('Add')//.bS('s') // ??
            )

            $.ul().b({e:'ts', vs:'visible:ts().length>0' }).A($.li().A(
                $.cb().bC( 'iD' ),
                $.ip().b("value:t, disable:iD"),
                $.bt('Del').bC( '$parent.rmT' )))


            $.sp("You have").A()
            $.B("&nbsp;").bT( "inc().length").A()
            $.sp("inc task(s)").A()
            $.sp("- beer!").bV("inc().length==0").A()

            ko.b({

                itemToAdd:ko.o(''),

                allItems:ko.oa(['a','b','c']),

                selectedItems:ko.oa(['d']),
                addItem:function(){
                    if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                        vm.allItems.push(vm.itemToAdd());
                        vm.itemToAdd('')
                    }
                },

                removeSelected:function(){
                    allItems.removeAll(vm.selectedItems())
                    selectedItems([])
                },
                sortItems:function(){vm.allItems.sort()}
            })


            vm2={
                ts: ko.oa(),
                nT: ko.o(),
                inc : ko.c(function(){  var vm=this
                        return ko.ut.af(
                            vm.ts(), function(t){return !t.iD()
                            })
                    }
                ),
                aT: function(){ this.ts.push({t: ko.o( o.nT()), iD: ko.o( ) }); this.nT('') },
                rmT: function(){ o.ts.remove(this) }
            }

            /*
             ko.b(vm2)
             //  $.Gj('ts', function(d){  o.ts($.map(d, function(i){return  { t: ko.o(i.t), iD: ko.o(i.iD) }}))})
             */
        }
        TASK=function(){$.z('r')

        }
        ROOT=function(){$.x('x')
            $.uE('fs', [
                $.li().b({
                    t:'$data',
                    s:'{selected:$data==$root.chFI()}',
                    $:'$root.gtf'
                })
            ]).K('fs')

            ok({
                fs:['I','A','Se','Sp'],
                chFI: ko.o(),
                gtf: function(f){$l('click: ' + 'f: '+ f + ', this: '+this)
                    f = f||'frog'
                    vm.chFI(f)
                }
            })
        }
        KOC=function(){$.z()

            $.ip('r').at({
                name:'choices',
                value:'summary'
            }).bC('selectedView');
            $.sp('summary').A()


            $.ip('r').at({name:'choices',value:'details'}).bC('selectedView'); $.sp('details').A(); $.hr().A()

            $.d().bT("{name: templateToUse, " + "foreach: articles }")

            $.scrp("summary").A().A($.d().bT('title')),
                $.scrp('details').A(
                    $.d([$.h2().bT('title'), $.p().bT('content'),
                        $.bt('edit').b$('$parent.selectedArticle') ]) )

            $.scrp('edit').A().A(
                $.d([$.ip().bV('title'), $.br(), $.ip().bV('content') ])
            )
            ko.b({
                articles: [
                    {id: 1,title: "Article One",content: "Content for article one."},
                    {id: 2,title: "Article Two",content: "Content for article two."},
                    {id: 3,title: "Article Three",content: "Content for article three."}

                ],
                selectedView: ko.o("summary"),
                selectedArticle: ko.o(),
                templateToUse:function(i){
                    return i===vm.selectedArticle()? 'edit' :vm.selectedView()}

            })
        }
        KOSCR=function(){z();$.bd().A(
            $.scrp('tt').A($.h1('afsdfds')), $.d().bT("{name:'tt'}")
        ); ko.b({})}
// kob= ko.observable.prototype; kob.rm= kob.remove
        MENU=function(){$.z('b').h2('Your seat reservations')
            $.bt('reserve').b$('A')

            AM=[{n:'fries',p:10}, {n:'fish',p:20}, {n:'noodles',p:30}]



            $.t().A($.tHR(['psngr n','m','$$','']),$.tB().bE('seats').A(
                    $.tr().A(
                        $.td().bT('n'),
                        $.td().bT('m().n'),
                        $.td().A(
                            $.sl().b({
                                o : '$root.AM',
                                ot : 'm'    //v : 'm',
                            })
                        ),
                        $.td().bT('m().p')

                    )

                )

            )

            ko.b({
                seats: $oa([
                    {n:'Jo', m: ko.o(AM[0])},
                    {n:'Bo', m: ko.o(AM[1])} ]),
                A: function(){
                    vm.seats.push({n:'hahaha',
                        m:ko.o( {n:'noodles', p:30})})}
            })

        }
        CHERRY=function(){$.x('o')
            $.p($.sp('spam?'), $.cC('wants'))
            $.d([  'Preferred flavors of spam:',
                $.d([
                    $.p($.sp('cherry'), $.cC('flav').v('cherry')),
                    $.d([$.p($.sp('Almond'),   $.cC('flav').v('almond'))]),
                    $.p($.sp('Glut'), $.cC('flav').v('glut'))
                ])
            ]).bVs('wants')

            ok({
                wants:ko.o(1),
                flav:ko.oa(["cherry","almond"])
            })





            // vm.flav.push("msg")
            /*
             function $.cKO(m, b, v){
             var cb=$.cb(), p = $.p().A($.sp().A(m), cb.bC( b))
             if(v){ cb.v(v)}
             return p
             }*/


        }
        DIRT=function(){$.z('g').fm() //KOMASTERPIECE
            $.cm=  $.Cm=  function(cms,cc){cms.push({comment:cc})}
            $.spT=   function(a){return $.sp().b('text', a)}
            d= $.d('z')//.mar(20)
                .bE('m').A(
                $.h1().C('y','c').A(
                    $.spT('message'), $.sp(' '), $.spT('score'),
                    s1.A($.h2().A($.ip(400), $.bt('new r'))),
                    $.h2().bE('responses').C('r').A(
                        s1.A( $.spT('response') ),
                        s2.A( $.h4(
                            //$.iP(400),
                            $.bt('new c')) ),
                        $.h4().C('b').bE('comments').A(
                            s2.A($.spT('comment'))
                        )
                    )
                ),
                $.br(),
                $.br()
            )


            ko.b({
                m: ko.oa(messages=[{message:'zi', score:100, responses:[
                    {response:'good coder',
                        comments:[{comment:'..eh'}]},
                    {response:'cool girl'}
                ]},

                    {message:'yano', score:3,
                        responses:[{response:'is cool guy',
                            comments:[{comment:'hi'}, {comment:'hello'}]},
                            {response:'a'}, {response:'b'}, {response:'fun'}]},
                    {message:'is awesome',score:0,responses:[
                        {response:'afsdafsd'}]},
                    {message:'lame',score:20,responses:[
                        {response:'weird',comments:[{comment:'not!!!!1'}]},
                        {response:'lamer',comments:[{comment:'fuck ya'}]}]},
                    {message:'rocks',score:4,responses:[]}
                ]),

                responses:ko.oa([
                    {response:'one'},
                    {response:'two'}
                ])
            })




            f=function(){
                vm.p.push({f:'jason',l:'yano'})
            }
        }
        KOFL=function(){

            //filter the items using the filter text
            vm.filteredItems = ko.c(function() {
                var t= this, fl
                fl = t.filter().toLowerCase()
                if (!fl) {return t.items();
                } else {
                    return ko.utils.arrayFilter(t.items(),
                        function(it) {
                            return ko.utils.stringStartsWith(
                                it.name().toLowerCase(), fl)
                        })
                }
            }, vm)
        }
        KOFLM=function(){$.z('x')

            d=    $.dI('hover').A(
                $.a().A(
                    $.i('me').bT('matterId')
                )
            )


            d.mouseover(function(){ var d=this
                //Show the div onmouseover.
                $l("!!!")

                $(d).next("#box").gg()
            })


            d.mouseout( function(){function onMouseOut(obj) {

                //d

                //Hide to div onmouseout
                //Todo:none
            }})


            $.ul().bE('mDateTime').A($.li().A($.ul().bE('$root.matter.index.type()[$data]').A(
                $.li().A(d,
                    $.dI('box').css('display','none').A(
                        $.a().A('Edit'), $.a().A('Copy'), $.a().A('Delete'))
                ),

                $.li().bT('matterTitle'),
                $.li().bT('matterComment')
            )))





        }
        LIST=function(){$.x('z')

            f=  $.f()

            f.bSb('addItem').A(

                $.sp('add item'),
                $.ip().b({v:'itemToAdd', V:'afterkeydown'}),
                $.sb('add').bE('itemToAdd().length>0')
            )

            $.d().A(f,

                $.d().A(
                    $.sp('Your values:'),

                    $.sl().h(5).b({

                        o:'allItems',
                        so:'selectedItems'
                    })
                ),

                $.d().A(

                    $.bt('remove').b({
                        c:'removeSelected',
                        e:'selectedItems().length>0'}),
                    $.bt('sort').b({
                        c:'sortItems',
                        e:'allItems().length>1'}))
            )
            ok({ itemToAdd:ko.o(''),
                allItems:ko.oa(['a','b','c']),
                selectedItems:ko.oa(['d']),
                addItem:function(){
                    $l('addItem')
                    if(vm.itemToAdd()!='' && vm.allItems.indexOf(vm.itemToAdd())<0) {
                        vm.allItems.push(vm.itemToAdd());vm.itemToAdd('')
                    }
                },


                removeSelected:function(){
                    allItems.removeAll(o.selectedItems())
                    selectedItems([])
                },
                sortItems:function(){o.allItems.sort()}
            })
        }
//bind 'html'
        KOH=function(){$.z().dH('details')

            ok('details', ko.o())

            $.in(function(){
                    vm.details(
                        "<em>For details, view report <a href='report.html'>here</a>.</em>")},
                '*')
        }
        KOCM=function(){$.z().h4('First instance, without parameters')
            $.d().bCm('message-editor')
            $.h4('Second instance, passing parameters')
            $.dCm(
                'component: {  name: "message-editor",  params: { initialText: "Hello, world!" }}'
            )
            ko.components.register('message-editor', {
                viewModel: function(params) {
                    this.text = ko.o(params && params.initialText || '')
                },
                template: 'Message: <input data-bind="value: text" /> (length: <span data-bind="text: text().length"></span>)'
            })
            ko.applyBindings()

        }
//bind cb and bind ip to 'enable'
        KOEN=function(){$.x()

            $.p().A(
                $.cbC('hasPhone'), 'I have phone'
            )

            $.p('Your cellphone number').A(
                $.ip().b({ v:'num', en:'hasPhone'}))


            ok({ hasPhone: ko.o(0), num:'' })

        }
        IF=function(){$.x('x')
            $.cC('dispMs')
            $.sp('Disp ms')

            $.pI('dispMs','Here is a message. Astonishing')



            ok({dispMs: ko.o(1)})
        }
        BARN=function(){

            $.z().ulE('PL',[ $.li([
                $.sp('Planet: '),
                $.b().bT('n'),
                $.dI('cap',[  $.pT('cap.n')])])])

            ok('PL',[
                {n: 'Merc', cap: null },
                {n: 'Earth', cap: { n: 'Barn' } }
            ])


        }
        SLOP=function(){$.z()
            $.p('Choose some countries youd like to visit:').A(

                $.sl().b({
                    o:'cunts',
                    so: 'chosenCunts'

                }).sz(5).mlt()

            )


            $b({
                    cunts : $oa('Fra','Ger','Spa'),
                    chosenCunts : $oa('Ger')
                }


            )// Initially, only Germany is selected

            $.in(function(){vm.chosenCunts.push('Fra')   },'*') // ... then later  France is selected too
        }
        KOS=function(){$.x()

            $.d('Profit Information').bS("{color:curProf()<0?'red':'black'}")
            ko.b({curProf: ko.o(50) })
            $.in(function(){  vm.curProf(-50)}, '*')
        }
        KOAT=function(){$.x()


            $.aA('{href:url,title:tt}',
                'report')

            ok({

                url: ko.o("year-end.html"),
                tt: ko.o("Report including final year-end statistics")
            })
        }
        KOFC=function(){$.x()

            $.p('Name:').A(

                $.ip().b({
                    v:'editing',   v:'name',
                    f:'editing'
                }),
                $.d('r').b({
                    v:'!editing()',
                    t:'name',
                    $:'edit'
                })
            )

            $.p('Click the name to edit it; click elsewhere to apply changes')
            function VM(n) {var vm=this
                vm.name = ko.o(n)
                vm.editing = ko.o()
                vm.edit = function() {vm.editing(true) }}
            ok(new VM("Bert Bertington"))
        }
        KOGRID=function(){$.z().f().at({action: '/someServerSideHandler'}).A(
            $.p('You have asked for').A(
                $.sp('&nbsp;').bT('gifts().length'),
                'gift(s)'),

            $.t().bVs('gifts().length > 0').A(
                $.tH().A(
                    $.tr().A(
                        //tHR
                        $.th().A('Gift name'),
                        $.th().A('Price')
                    )),



                $.tB().bE('gifts').A(
                    $.tr().A(  //tBR
                        $.td().A($.ip().K('required').b({v:'name', u:true})),

                        $.td().A($.ip().K('required number')
                            .b({v:'price', u:true})),

                        $.td().A(
                            $.a('delete').b$('$root.removeGift')
                        )))),



            $.bt('add gift').b$('addGift'),

            $.sb().bEn('gifts().length > 0')

        ).A()

            Gift = function(gifts) {var vm = this
                vm.gifts = ko.oa(gifts)
                vm.addGift = function() {vm.gifts.push({name: "", price: "" }) }
                vm.removeGift = function(gift) { vm.gifts.remove(gift) }
                vm.save = function(form) {alert("Could now transmit to server: " + ko.ut.stringifyJson(vm.gifts))}  // To actually transmit to server as a regular form post, write this: ko.utils.postJson($("form")[0], self.gifts);

            }
            ko.b(new Gift([
                { name: "Tall Hat", price: "39.95"},
                { name: "Long Cloak", price: "120.00"}
            ]))
            // $("form").validate({ submitHandler: vm.save }) // Activate jQuery Validation
        }
        PLAN=function(){$.z().h1('Plan!')

            $.p().A($.lb().A(
                    $.cC('displayAdvancedOptions'), 'Display advanced options'
                )
            )

            $.p().A('Show:',

                $.lb([$.ip()]),  $.lb([$.ip()]),  $.lb([$.ip()])

            )



            /*
             <p data-bind='fadeVisible: displayAdvancedOptions'>
             Show:
             <label><input type='radio' name="type" value='all' data-bind='checked: typeToShow' />All</label>
             <label><input type='radio' name="type" value='rock' data-bind='checked: typeToShow' />Rocky planets</label>
             <label><input type='radio' name="type" value='gasgiant' data-bind='checked: typeToShow' />Gas giants</label>
             </p>*/


            $.d([$.d([ $.d()]) ])

            /*

             <div data-bind='template: { foreach: planetsToShow,
             beforeRemove: hidePlanetElement,
             afterAdd: showPlanetElement }'>
             <div data-bind='attr: { "class": "planet " + type }, text: name'> </div>
             </div>

             */

            $.p([$.bt(), $.bt()])

            /*
             <p data-bind='fadeVisible: displayAdvancedOptions'>
             <button data-bind='click: addPlanet.bind($data, "rock")'>Add rocky planet</button>
             <button data-bind='click: addPlanet.bind($data, "gasgiant")'>Add gas giant</button>
             </p>
             */


            Planets  = function() {

                this.planets = ko.oa([

                    { name: "Mercury", type: "rock"},
                    { name: "Venus", type: "rock"},
                    { name: "Earth", type: "rock"},
                    { name: "Mars", type: "rock"},
                    { name: "Jupiter", type: "gasgiant"},
                    { name: "Saturn", type: "gasgiant"},
                    { name: "Uranus", type: "gasgiant"},
                    { name: "Neptune", type: "gasgiant"}
                ]);

                this.typeToShow = ko.o("all");
                this.displayAdvancedOptions =ko.o(false);
                this.addPlanet = function(type) {
                    this.planets.push({
                        name: "New planet",
                        type: type})}
                this.planetsToShow = ko.pc(function() {
                    // Represents a filtered list of planets
                    // i.e., only those matching the "typeToShow" condition
                    var desiredType = this.typeToShow();
                    if (desiredType == "all") return this.planets();
                    return ko.utils.arrayFilter(this.planets(), function(planet) {
                        return planet.type == desiredType;
                    });
                }, this);


                // Animation callbacks for the planets list
                this.showPlanetElement = function(el) {
                    if (el.nodeType === 1) $(el).hide().slideDown()
                }

                this.hidePlanetElement = function(el) {
                    if (el.nodeType === 1) $(el).slideUp(function() { $(el).remove(); }) }
            }


// Here's a custom Knockout binding that makes els shown/hidden via jQuery's fadeIn()/fadeOut() methods
// Could be stored in a separate utility library

            ko.bh.fadeVisible = {
                init: function(el, valAcc) {
                    // Initially set the el to be instantly visible/hidden depending on the value
                    var value = valAcc();
                    $(el).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
                },
                update: function(el, valAcc) {
                    // Whenever the value subsequently changes, slowly fade the el in or out
                    var value = valAcc();
                    ko.unwrap(value) ? $(el).fadeIn() :
                        $(el).fadeOut();
                }

            }


            ok(new Planets())

        }
        TWT=function(){$.x()

            $.fSb('g',[ 'u:', $.ipV('un'), $.sb('Get') ]).A()

            $.dW('da',[
                $.h3('dt:', $.spT('dt') ),
                $.olE('MS',
                    $.liT('ms')),

                $.bt$('clr',' $parent.clr')

            ])


            ok({
                un : ko.o('@ex'),
                da : ko.o(),
                g:function(){vm.da({
                    dt: $D(),
                    MS: _.m(['a','b'],
                        function(t){return {ms:vm.un()+':'+t}})
                })},
                clr: function(){ vm.da([]) }
                //<- $.bt('Clear tweets').b$(' $parent.clearResults')
            })
        }
        later=function(){
            //$.ul().bE('mDateTime').A( $.li().A( $.ul() ) )
//   <li>
// <ul data-bind="foreach: $root.matter.index.type()[$data]">
//  <li>
//components

            VIRT=function(){$.z()

                $.d().b({randomOrder:true})
                $.d('First')
                $.d('Second')

                $.d('Third')
                ko.bindingHandlers.randomOrder = {

                    init: function(el, valAcc) {
                        // Pull out each of the child els into an array
                        var childElems = []
                        while(el.firstChild)
                            childElems.push(el.removeChild(el.firstChild))
                        // Put them back in a random order
                        while(childElems.length) {
                            var randomIndex = M.fl(M.rn() * childElems.length),
                                chosenChild = childElems.splice(randomIndex, 1);
                            el.appendChild(chosenChild[0]);
                        }
                    }
                }


            }

        }
        FLVIEWPLG=function(){$.x('x')


            ko.oA.fn.filterByProperty = function(propName, matchValue) {
                return ko.pureComputed(function() {
                    var allItems = this(), matchingItems = [];
                    for (var i = 0; i < allItems.length; i++) {
                        var current = allItems[i];
                        if (ko.unwrap(current[propName]) === matchValue)
                            matchingItems.push(current)}
                    return matchingItems
                }, this)
            }

            $.h3('All tasks').A($.spT('tasks().length'))
            $.ulE('tasks',[
                $.lL([
                    $.cbC('done'), $.spT('tt')
                ])
            ])


            $.h3('Done tasks').A( $.spT('doneTasks().length') )

            $.ulE('doneTasks',[$.liT('tt')])

            tasks= ko.oa(
                Task('Find new desktop background', 1),
                Task('Put shiny stickers on laptop'),
                Task('Request more reggae music in the office', 1))

            ok({
                tasks :tasks,
                doneTasks :  tasks.filterByProperty("done", 1)
            })



            function Task(tt,done){return {tt:ko.o(tt), done:ko.o(done)}}




            /*alt:
             this.doneTasks = ko.pureComputed(function() {
             var all = this.tasks(), done = [];
             for (var i = 0; i < all.length; i++)
             if (all[i].done())
             done.push(all[i]);
             return done;
             }, this);
             */

            alt=function(){
                KOEXT=function(){
                    //  http://codereview.stackexchange.com/questions/45909/prototype-inheritance-with-knockout-observables

                    /*

                     base classe:  subscribable
                     subscribable <-  observable
                     subscribable <- computed
                     observable <- observableArray


                     Adding custom functions using "fn"
                     You can define custom functions on any of the following types:
                     ko.subscribable.fn
                     ko.observable.fn
                     ko.observableArray.fn
                     ko.computed.fn


                     Example: A filtered view of an observable array
                     Here’s a way to define a "filterByProperty" function
                     ko.observableArray.filterByProperty

                     */
                    ko.oA.fn.filterByProperty = function(propName, matchValue){
                        return ko.pc(function() {
                            var allItems  = this(), matchingItems = []
                            for (var i = 0; i < allItems.length; i++) {
                                var current = allItems[i]
                                if (ko.unwrap(current[propName]) === matchValue)
                                    matchingItems.push(current)
                            }
                            return matchingItems
                        }, this)
                    }
                    /*
                     This returns a new computed value that provides a filtered view of the array,
                     while leaving the original array unchanged. Because the filtered array is a computed observable,
                     it will be re-evaluated whenever the underlying array changes.

                     The following live example shows how you could use this:
                     http://knockoutjs.com/documentation/fn.html
                     */
                    /*

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
                     Source code: View model
                     */


                    function Task(tt, done) {
                        this.title = ko.o(tt)
                        this.done = ko.o(done)
                    }


                    function AppViewModel() {
                        this.tasks = ko.oa([
                            new Task('Find new desktop background', true),
                            new Task('Put shiny stickers on laptop', false),
                            new Task('Request more reggae music in the office', true)
                        ])


                        // Here's where we use the custom function
                        this.doneTasks = this.tasks.filterByProperty("done", true)
                    }


                    /*
                     ko.applyBindings(new AppViewModel());
                     It’s not mandatory
                     If you tend to filter observable arrays a lot,
                     adding a filterByProperty globally to all observable arrays might make your code tidier.
                     But if you only need to filter occasionally,
                     you could instead choose not to attach to ko.observableArray.fn,
                     and instead just construct doneTasks by hand as follows:


                     */


                    this.doneTasks = ko.pc(function(){var all,done
                        all = this.tasks()
                        done = []
                        for (var i = 0; i < all.length; i++){if (all[i].done()) {
                            done.push(all[i])}}
                        return done} , this)
                }



            }
        }
        VIRTP=function(){$z()
            ko.bindingProvider.instance.preprocessNode = function(node) {
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
            }


        }
        URLPLUG=function(){
            // Prototype for an observable<->URL binding plugin.
            (function () {
                var currentParams = {}, updateTimer, $ = window.jQuery;
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

                $.address.autoUpdate(false);
            })();
        }
        KOSERV=function(){
            var express    = require('express'), app        = module.exports = express.createServer()
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
//bind bt 'click' to parent.rem
        ADDER=function(){$.x()

            $.h4('People')

            $.ulE('peep',[ $.li([
                $.sp('pos/name: '),
                $.spT('$index'),
                $.spT('n'),
                $.$bt('del', 'rm', '-')
            ]) ])

            $.$bt('A')

            ok({ peep : ko.oa({n:'B'},{n:'Ch'},{n:'De'}),
                A: function(){this.peep.push({n: "New at "+$D()})},
                rm : function (a) {vm.peep.remove(this)}
            })


        }
        COURSE=function(){$.x('x')

            //https://www.youtube.com/watch?v=JGwRIbWWqjE

            $.h1('monkey').bT('monkey')
            $.iV('monkey')
            $.sb('hello').b$('A')

            $.uE('list',[$.li(['my name is ',$.sT('n'),' and i like to play ',$.sT('c')])])



            vm={
                monkey: ko.o(),
                list: ko.oa(),
                A:function(){this.list.push({n:'j', c:$r()})}
            }

            vm.monkey('elephant')

            ok(vm)


        }
        COURSE=function(){$.x('x')
            $.s$('a','play'); $.U('cl',[
                'my name is ',$.sT('n'),
                ' and i like to play ',
                $.sT('c')])

            ok({
                cl: ko.oa(),
                a:function(){
                    this.cl.p({n:'j',c:$r()})
                    return this}
            })

            vm.a().a().a()

            //https://www.youtube.com/watch?v=JGwRIbWWqjE
        }
        TPLIST=function(){$.x()
            Meals = [
                { m: "sand", p: 0 },
                { m: "lobst", p: 34.95 },
                { m: "zebra", p: 290 }
            ]


            $.h2('Your rsv').A( $.spT('seats().length') )
            $.h3('Cost:').bVs('cost()>0').A( $.spT('cost().toFixed(2)') )


            $.t([
                $.tH([ $.tr(['Pass name','Meal','charge']) ]),
                $.tB().bTp("{n:'rsvTp', foreach: seats}") //?

            ])

            $.bt('Rsv again').b({ $:'A', en:'seats().length < 5' })

            $('<script type="text/x-jquery-tmpl" id="rsvTp" >').A(
                $.tr([
                    $.td([$.ipV('n')]),
                    $.td([$.sl().b({o:'Meals', ot:'meal'})]),
                    $.td([ $.a$('del', 'rm')  ])
                ])
            )

            seatRsv = function(n) {
                this.n = n
                this.Meals = Meals;
                this.meal = ko.o(Meals[0]);
                this.rm = function() {vm.seats.remove(this) }
                this.fmtPrice = ko.do(function(){
                    var price = this.meal().p
                    return price ? "$" + price.toFixed(2) : "None";
                }, this)
            }


            vm = {
                seats: ko.oa([ new Rsv("St"), new Rsv("Br") ]),
                A: function() { this.seats.push(new Rsv())} }


            vm.cost = ko.do(function() {
                var tot = 0;
                for (var i = 0; i < this.seats().length; i++)
                    tot += this.seats()[i].meal().price;
                return tot
            }, vm)



            ok(vm)

        }
//sort, remove
        BTRLST1=function(){$.x('o')

            $.f().b({sb:'A'}).A('Add item:',
                $.ip().b({v:'tA', vU:'afterkeydown'}),
                $.sb('Add').b('en', 'tA().length > 0')
            )

            $.p('Your values:')

            $.sl().mlt().b({ o:'all', so:'sl' })

            $.d([
                $.bt('Rem').b({$:'xSl', en:'sl().length > 0'}),
                $.bt('Srt').b({$:'srt', en:'all().length > 1'})
            ])

            Lst = function () {
                this.tA = $o('')
                this.all = $oa(['Eg', 'Hm', 'Ch', 'J', 'r', 30] )
                this.sl = $oa(['Hm'])
                this.A = function () {
                    if (this.tA()!=''&& this.all.indexOf(this.tA())<0){
                        this.all.push(this.tA())
                        this.tA('')
                    }
                }

                this.xSl = function () {
                    this.all.removeAll(this.sl())
                    this.sl([])
                }
                this.srt = function() { this.all.sort() }
            }
            $b(new Lst())
        }
        BTRLST=function(){$.x('o')

            f= $.fSb('A',[ 'Add:',
                $.ipV('tA'),
                $.sb('Add').bEn('tA().length>0')
            ])

            $.p('Your values:')
            $.sl().mlt().b({
                o:'all',
                so:'sl'
            })

            $.d([

                $.bt('Rem').b({

                    $:'xSl',

                    en:'sl().length > 0'

                }),


                $.bt('Srt').b({$:'srt', en:'all().length > 1'})

            ])


            Lst = function(){

                this.tA = kO('')

                this.all = kA('Eg', 'Hm', 'Ch', 'J', 'r', 30)

                this.sl = kA('Hm')

                this.A = function () {
                    if (this.tA() &&
                        this.all.indexOf(this.tA())<0
                    ){

                        this.all.push(this.tA())
                        this.tA('')}
                }

                this.xSl = function(){

                    this.all.removeAll(this.sl())

                    this.sl([])

                }


                this.srt = function() { this.all.sort() }
            }

            ok( new Lst() )

        }
//add, conditional el
        KOCL=function(){$.x('x').h2('Peep')

            Per = function(n, ch) {var per=this
                per.n = n
                per.ch = ko.oa(ch)
                per.A = function(){
                    per.ch.push('new ch')
                }
            }


            peep= [
                new Per("Annabelle", ["Arnie", "Anders", "Apple"]),
                new Per("Bertie", ["Boutros-Boutros", "Brianna", "Barbie", "Bee-bop"]),
                new Per("Charles", ["Cayenne", "Cleopatra"])
            ]


            $.uE('peep',[


                $.li().A(

                    $.d([

                        $.spT('n'), 'has',
                        $.spT('ch().length'),

                        'children &nbsp;',
                        $.a$('New','A')

                    ]),

                    $.ulE('ch',[
                        $.li([

                            $.spT(), $.spVs( '$root.showDT').A(
                                ' (child rendered at ', $.spT('$Dt().getSeconds()'),')'

                            )])])

                )

            ])

            $.cbC('showDT').a2Lb('Show time:')

            //anonymous vm

            OK({

                peep: peep,

                showDT: kO()

            })




        }
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
        PAGEGRID=function(){$.x('r','page grid')

//<div data-bind='simpleGrid: gridViewModel'> </div>

            $.d().b('simpleGrid', 'gridViewModel')

            $.bt('add').b$('addItem')
            $.bt('sortbyn').b$(' sortByName')
            $.bt('sortbyn').b$(' sortByName')
            $.bt('Jump to first page').b('en', 'gridViewModel.currentPageIndex')


            PagedGridModel =  {

                items : oA(

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
        comp=function(){
            CMLDR=function(){$.x()

                VM=function(p) {this.somePop = p.smKey}
                VM.prototype.doSmg = function() {}

                ko.r('my-cm', VM)
                ko.r('my-cm', {
                    m: {createVM: function(p, cmInf) {return new VM(p)}},
                    t: '#d'
                })
                ko.r('message-editor', {
                    m: function(p) {this.t = ko.o(p && p.initialText||'')},
                    t: $.d(['Ms:',$.ipV('t'), '(len:',$.spT('t().length'),')'])
                })

                $.tp("my-special-list-template").A(
                    $.h3('Here is a special list')
                )

                $.ulE("{ data: myItems, as: 'myItem' }").A(
                    $.li().A($.h4('Here is another one of my special items'), $("<!-- ko template: { nodes: $componentTemplateNodes, data: myItem } --><!-- /ko -->")))

                $.tg=function(a){return $('<' + a +'>')}

                $.tg('my-special-list').at('params', 'items: PEEP')
                    .A('The person', $.em().b('t','name'),
                    'is', $.em().b('t','age'), 'years old.')

                ko.r('my-special-list', {
                    t: { el: 'my-special-list-template' },
                    m: function(p) {this.myItems = p.items}
                })

                ko.b({PEEP: $oa([{n:'Lew', a: 56 }, {n: 'Atha', a: 34 }])})
                ko.cm.gN= ko.cm.getComponentNameForNode = function(nd) {
                    tgNLower = nd.tagName && nd.tagName.toLowerCase()
                    return  ko.cm.iR(tgNLower)?   tgNLower :
                        tgNLower === "special-el"? "MyCm":
                            null

                    // If the el's name matches a reg-ed cm, use that cmt
                    // For the el <special-el>, use the component
                    // "MySpecialComponent" (whether or not it was preregistered)
                    // Treat anything else as not representing a component
                }



                MyCmVM=function(pm) {curObsrvInst = pm.$raw.myExpr()}
                // Now curObsrvInst is either observable1 or obsrv2// and you would read its value with "curObsrvInst()"

                // 'params' is an object whose k/v pairs are the pams
                // passed from the cm bd or cust el.

                // - 'cmtInf.el'
                // is the el the component is being//
                //  injected into. When createVM is called, the template has//
                //  already been injected into this el, but isn't yet bound.
                // - 'componentInfo.templateNodes'
                // is an array containing any DOM
                //   nodes that have been supplied to the component. See below.
                // Return the desired view model instance, e.g.:
            }
            CMNEWS=function(){$.x('y','news feed')
                //http://jsfiddle.net/rniemeyer/fssXE/
                $.qAP('news-feed', 'vm', 'VM')
                $.qAP('news-feed', 'vm', 'VM2')
                $.h2('News Feed')
                $.dT('vm.ms')
                $('<news-feed params="vm: feed"></news-feed>').A()
                $('<news-feed>').at('params', "vm: feed2").A()
                ko.r('news-feed', {m: function (p) { this.vm = p.vm } })
                ko.r('news-feed', {m: function (p) {this.vm = p.vm},
                    t: $.d([$.h2('News! Feed'), $.dT('vm.m')])[0]})
                ko.r("news-feed", {m: function (p) { this.vm = p.vm },
                    t: $.sp().A($.h2('Nws Fd'), $.d().b('t', 'vm.m'))})
                Feed=function(){this.ms=ko.o('pf!')}
                VM = function () {this.ms = ko.o("Hi");
                    this.feed = new Feed();
                    this.feed2 = new Feed();
                    this.feed.ms("Ms1");
                    this.feed2.ms("Ms2");
                }
                Ms = function (m) { return {m:ko.o(m||'') }}
                ok({m :ko.o('!'), VM : Ms('m1'), VM2 : Ms('m2'), VM3: {m:ko.o('!')}})
                ok(new VM())
                ok({ms : ko.o("!"), VM: {ms: ko.o("!")}, VM2: {ms: ko.o("!")}})

                vm.VM.ms("1"); vm.VM2.ms("2")
            }
            WEBCM=function(){
                //For example, instead of writing this:
                $.d().b('cmN', '{ name: "flight-deals", params: { from: "lhr", to: "sfo" } }')
                //  <div data-bind='component: { name: "flight-deals", params: { from: "lhr", to: "sfo" } }'></div>
//… you can write:

                $('<flight-deals>')
                //   < params='from: "lhr", to: "sfo"'></flight-deals>

            }


            bindn=function(){


                /*
                 <unrealistic-cm
                 params='stringValue: "hello",
                 numericValue: 123,
                 boolValue: true,
                 objectValue: { a: 1, b: 2 },
                 dateValue: new Date(),
                 someModelProperty: myModelValue,
                 observableSubproperty: someObservable().subprop'>
                 </unrealistic-component>*/



                /*
                 ko.bindingHandlers.yourBindingName = {
                 init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
                 // This will be called when the binding is first applied to an element
                 // Set up any initial state, event handlers, etc. here
                 },
                 update: function(q, vAc, bd, vm, bdCtx) {
                 // This will be called once when the binding is first applied to an element,
                 // and again whenever any observables/computeds that are accessed change
                 // Update the DOM element based on the supplied values here.
                 }
                 }
                 */

                /*
                 The “update” callback
                 ko will call the upd cb init when   bd   applied to an el
                 and tr any deps (observs/computeds) that you access.
                 When any deps change, the upd  cb   called  w these pams:
                 el  —  DOM el  involved in this bd

                 valAcc — fn that you can call to get the cur md pop involved in this bd (cur md pop v = valAcc())

                 To easily accept both observable and plain values, call ko.unwrap on the returned value.

                 allBindings — ob,  used to access all the md values bound to this el

                 Call allBindings.get('name') to retrieve the value of the name binding (returns undefined if the binding doesn’t exist);
                 or allBindings.has('name') to determine if the name binding is present for the current element.

                 vm —   deprecated  !

                 Use bindingContext.$data or bindingContext.$rawData to access the view model instead.

                 bindingCtx — ob, holds the binding ctx available to this el’s bindings,
                 includes special properties including $parent, $parents,
                 and $root that can be used to access data that is bound against ancestors of this ctx

                 ex: you might have been controlling an element’s vs using the vs binding,
                 but now you want to go a step further and animate the transition.
                 You want elements to slide into and out of existence according to the value of an observable.
                 You can do this by writing a cust  binding that calls jq’s slideUp/slideDown functions:

                 */
                BDSMPGRD=function(){

                    // This is an example of one possible way to make a reusable component (or 'plugin'), consisting of:
//  * A view model class,
//           which gives a way to configure the component and to interact with it
// (e.g., by exposing currentPageIndex as an observable, external code can change the page index)
//
// * A custom binding (ko.bindingHandlers.simpleGrid in this example)
// so a developer can place instances of it into the DOM
//     - in this example,
// the custom binding works by rendering some predefined templates
// using the ko.jqueryTmplTemplateEngine template engine
//
// There are loads of ways this grid example could be expanded. For example,
//  * Letting the developer override the templates used to create the table header, table body, and page links div
//  * Adding a "sort by clicking column headers" option
//  * Creating some API to fetch table data using Ajax requests
//  ... etc
//http://knockoutjs.com/examples/resources/knockout.simpleGrid.js
                    ko.simpleGrid = {
                        // Defines a view model class you can use to populate a grid
                        // If you don't specify columns configuration, we'll use scaffolding
                        m: function (cf) {
                            this.data = cf.data
                            this.currentPageIndex = ko.o(0);
                            this.pageSize = cf.pageSize || 5;
                            this.columns = cf.columns || gScafCols(ko.ut.uo(this.data))
                            this.itemsOnCurrentPage = ko.c(function () {
                                var startIndex = this.pageSize * this.currentPageIndex();
                                return ko.ut.uo(this.data)
                                    .slice(startIndex, startIndex + this.pageSize);
                            }, this);
                            this.maxPageIndex = ko.c(function () {
                                return M.ceil(ko.ut.uo(this.data).length / this.pageSize)
                            }, this)
                        }
                    }


                    /*
                     // Templates used to render the grid
                     var templateEngine = new ko.jqueryTmplTemplateEngine();
                     templateEngine.addTemplate("ko_simpleGrid_grid", "\
                     <table class=\"ko-grid\" cellspacing=\"0\">\
                     <thead>\
                     <tr>\
                     {{each(i, columnDefinition) columns}}\
                     <th>${ columnDefinition.headerText }</th>\
                     {{/each}}\
                     </tr>\
                     </thead>\
                     <tbody>\
                     {{each(i, row) itemsOnCurrentPage()}}\
                     <tr class=\"${ i % 2 == 0 ? 'even' : 'odd' }\">\
                     {{each(j, columnDefinition) columns}}\
                     <td>${ typeof columnDefinition.rowText == 'function' ? columnDefinition.rowText(row) : row[columnDefinition.rowText] }</td>\
                     {{/each}}\
                     </tr>\
                     {{/each}}\
                     </tbody>\
                     </table>");
                     templateEngine.addTemplate("ko_simpleGrid_pageLinks", "\
                     <div class=\"ko-grid-pageLinks\">\
                     <span>Page:</span>\
                     {{each(i) ko.utils.range(1, maxPageIndex)}}\
                     <a href=\"#\" data-bind=\"click: function() { currentPageIndex(i) }, css: { selected: i == currentPageIndex() }\">\
                     ${ i + 1 }\
                     </a>\
                     {{/each}}\
                     </div>");
                     */
                    // The "simpleGrid" binding
                    ko.bh.simpleGrid = {
                        // This method is called to initialize the node, and will also be called again if you change what the grid is bound to
                        update: function (el, vwMdAcc, allBndAcc) {var vm  , allBnd  ,
                            grdTpN, pgLnksTpN,
                            grdCt,
                            pgLnksCt

                            vm = vwMdAcc()
                            allBnd = allBndAcc()

                            while(el.firstChild){ko.removeNode(el.firstChild)}

                            // Allow the default templates to be overridden
                            grdTpN = allBnd.simpleGridTemplate || "ko_simpleGrid_grid"
                            pgLnksTpN = allBnd.simpleGridPagerTemplate || "ko_simpleGrid_pageLinks";
                            grdCt= el.A($.d()); // Render the main grid

                            ko.rTp(grdTpN, vm, { templateEngine: templateEngine }, grdCt, "replaceNode")
                            // Render the page links
                            pgLnksCt = el.A($.d())
                            ko.rTp(pgLnksTpN, vm, { templateEngine: templateEngine }, pgLnksCt, "replaceNode");
                        }

                    }
                    function gScafCols(d) {var cols
                        if ((typeof d.length != 'number') || d.length == 0) {return []}

                        cols = [];
                        for (var popN in d[0])
                            cols.push({ headerText: popN, rowText: popN });
                        return cols;
                    }

                }
                BINDINGS=function(){

                    $.h3().bT('qu')
                    $.p('Please distribute').A(
                        $.b().bT('ptsBudg'),
                        'pts btwn the following opts'

                    )


                    $.t($.tH().A($.tr().A($.th().A('Option'),$.th().A('Import'))),

                        $.tB().bE('aw').A($.tr().A($t.d().bT('awT'),$t.d().b('starRating','pts'))))

                    $.hr().b({fadeVisible: 'pointsUsed() > pointsBudget' }).A(
                        'You used too many points! Please remove some.')

                    $.p('You have').A($.b().bT('pointsBudget - pointsUsed()'), 'points left to use')

                    $.bt('Finished').b({jqBt:'{ enable: pointsUsed() <= pointsBudget }', $:'save'})


                    bindings=function(){
// Reusable bindings - ideally kept in a separate file

                        ko.BH.fadeVs = {

                            init: function(el, valAcc) {
                                var shouldDisplay = valAcc();$(el).toggle(shouldDisplay)},// Start visible/invisible according to initial value

                            update: function(el, valAcc) {
                                var shouldDisplay = valAcc();
                                shouldDisplay ? $(el).fadeIn() :
                                    $(el).fadeOut()}

                        } // On update, fade in/out

                        ko.BH.jqBt = {

                            init: function(el) {$(el).button(); }, // Turns the el into a jQuery UI button

                            update: function(el, valAcc) {var curVal = valAcc();  $(el).button("option", "disabled", curVal.enable === false);}

                        }// Here we just update the "disabled" state, but you could update other properties too

                        ko.BH.starRating = {
                            init: function(el, valAcc) {
                                $(el).addClass("starRating");for (var i = 0; i < 5; i++){$.sp().appendTo(el)}
                                $("span", el).each(function(index) {$(this).hv(// Handle mouse events on the stars
                                    function() { $(this).prevAll().add(this).K("hoverChosen") },
                                    function() { $(this).prevAll().add(this).removeClass("hoverChosen") })
                                    .click(function() {var observable = valAcc();observable(index+1)})})},           // Get the associated observable// Write the new rating to it
                            update: function(el, valAcc) { var observable = valAcc();  $("span", el).each(function(index) {$(this).toggleClass("chosen", index < observable())})} // Give the first x stars the "chosen" class, where x <= rating
                        }
                    };bindings()

                    function Aw(text) { this.awText = text; this.points = ko.o(1); }
                    function SurvVM(qu, ptsBdg, aws) {
                        this.qu = qu;
                        this.ptsBdg = ptsBdg
                        this.aws = $.map(aws, function(tx) { return new Aw(tx) });
                        this.save = function() { alert('To do') };
                        this.ptsUsed = ko.c(function(){var  tot = 0;
                                for (var i = 0; i < this.aws.length; i++){tot += this.aws[i].points()}
                                return tot},
                            this)
                    }



                    ok(new SurvVM(

                            "Which factors affect your technology choices?",

                            10,

                            [
                                "Functionality, compatibility, pricing - all that boring stuff",
                                "How often it is mentioned on Hacker News",
                                "Number of gradients/dropshadows on project homepage",
                                "Totally believable testimonials on project homepage"
                            ]

                        )
                    )

                }
                CUSTBDJ=function(){

                    ko.bh.slVs = {
                        update: function(el, valAcc, allBindings) {var unwrapped,dur, v=valAcc() // First get the latest data that we're bound to
                            unwrapped = ko.unwrap(v);
                            // Next, whether or not the supplied model property is observable, get its current value
                            dur  = allBindings.get('slDur') || 400;// Grab some more data from another binding property // 400ms is default duration unless otherwise specified
                            if(unwrapped){$(el).slideDown(dur)}
                            else{$(el).slideUp(dur)}}
                    }
                    $.d('You have selected the option').b({
                        slVs:'wrap',
                        slDur:600
                    })
                    $.lb().A($.cbC('wrap'),'Gift wrap')
                    ok({wrap: ko.o(1)})
                }
                CUSTBDEX=function(){

                    $.d().b('e','items').A(
                        $.d().at('data-bind', "composableComponent: 'x-expander'").A(
                            $.d().at('data-part','title').A($('<strong>')
                                .b({t:'binding', sy:"{'color': $comp.isExpanded() ? 'darkred' : 'black'}"})),
                            $.d().at('data-part','content').A($('<strong>').b({t:'binding'}),
                                $.sp().b('t', 'description'))))
                    $('<script type="text/html" id="x-expander-template">').A($.dK('expander'),
                        $.dK('header'),
                        $.bt().b({t: 'toggleText', $:'toggle'}),
                        $.sp('Expander').K('title').at('data-part','title'),
                        $.dK('content').at('data-part','content').b('vs', 'isExpanded')
                            .A('Content'))
                    ko.ext = ko.ext || {};
                    ko.ext.utils = ko.ext.utils || {};
                    ko.ext.utils.cloneNodes = function () {
                        if (ko.utils.cloneNodes) {return ko.utils.cloneNodes}
                        else {return function (nodesArray, shouldCleanNodes) {
                            for (var i = 0, j = nodesArray.length, newNodesArray = []; i < j; i++) {
                                var clonedNode = nodesArray[i].cloneNode(true);
                                newNodesArray.push(shouldCleanNodes ? ko.cleanNode(clonedNode) : clonedNode);
                            }
                            return newNodesArray;
                        }}
                    }

                    ko.ext.utils.cloneNodes()
                    compLoadingOperationUniqueId = 0
                    ko.bh['composableComponent'] = {
                        'init': function(el, valueAccessor, ignored1, ignored2, bindingContext) {

                            disposeAssociatedComponentVM = function () {currentVMDispose = currentVM && currentVM['dispose'];
                                if (typeof currentVMDispose === 'function') {currentVMDispose.call(currentVM)}
                                // Any in-flight loading operation is no longer relevant, so make sure we ignore its completion
                                currentLoadingOperationId = null}
                            isFirstRender = false;specifiedParts;
                            ko.utils.domNodeDisposal.addDisposeCallback(el, disposeAssociatedComponentVM)
                            ko.c(function () {
                                if (!isFirstRender) {isFirstRender = true;specifiedParts = null;
                                    findParts(el, function (partName, partNode) {if (!specifiedParts) {specifiedParts = {}}
                                        partChNodes = ko.vE.chNodes(partNode)
                                        specifiedParts[partName] = ko.ext.utils.cloneNodes(partChNodes, true  )
                                    })
                                }
                                value = ko.ut.uo(valueAccessor())
                                if (typeof value === 'string') {cmNm = value}
                                else {cmNm = ko.ut.uo(value['name']); compParams = ko.ut.uo(value['params'])}
                                if (!cmNm) {throw new Error('No comp name specified')}
                                loadingOperationId = currentLoadingOperationId = ++compLoadingOperationUniqueId;
                                ko.cm.get(cmNm,
                                    function(compDef) {
                                        if (currentLoadingOperationId !== loadingOperationId) {return;} // If this is not the current load operation for this el, ignore it.
                                        disposeAssociatedComponentVM();// Clean up previous state
                                        if (!compDef) {throw new Error('Unknown comp \'' + cmNm + '\'')}// Instantiate and bind new comp. Implicitly this cleans any old DOM nodes.
                                        cloneTemplateIntoElement(cmNm, compDef, el);
                                        compVM = createVM(compDef, el, compParams)
                                        chBindingContext = bindingContext['createChildContext'](compVM)
                                        currentVM = compVM
                                        ko.bD(chBindingContext, el)
                                        if (specifiedParts) {// For parts defined in the comp definition binding context is// lexically scoped, i.e. it's a binding context of where the comp is// used, not the binding context of the comp template.// The only thing we need to add is a reference to the comp view model,// available through $comp
                                            partBindingContext = bindingContext['extend']({ '$comp': compVM })
                                            findParts(el, function (partName, partNode) {
                                                if (! (replacementNodes= specifiedParts[partName])) {return}
                                                clonedNodes = ko.ext.utils.cloneNodes( replacementNodes )
                                                ko.vE.setDomNodeChildren(partNode, clonedNodes);
                                                ko.bD( partBindingContext, partNode)
                                            })
                                        }
                                    })
                            }, null, { disposeWhenNodeIsRemoved: el });
                            return { 'controlsDescendantBindings': true };
                        }
                    }
                    ko.vE.AB['composableComponent'] = true
                    ExpanderCmVM = function () {this.isExpanded = ko.o(false)
                        this.toggleText = ko.c(function () {return this.isExpanded() ? '-' : '+'}, this)}
                    ExpanderCmVM.prototype.toggle = function () {this.isExpanded(!this.isExpanded())}
                    ko.rg('x-expander', {vm: ExpanderCmVM, t: {el: 'x-expander-template'}})
                    AppVM = function () {this.items = [
                        { binding: 'vs',
                            desc:
                                'causes the assoc  DOM el to become hd or vs according to the v you pass to the bd' },
                        { binding: 't',
                            desc: 'causes the assoc DOM el to display the text value of your pam.' },
                        { binding: 'cm',
                            desc: 'injects a spec cm into an el, and optly passes pams to it.' }
                    ]}

                    ok(new AppVM())
                    ko.vE.nCh=ko.vE.setDomNodeChildren
                    function findParts(parentNode, fn) {
                        if (!parentNode) {return}

                        chNodes = ko.vE.chNodes(parentNode)
                        ko.utils.arrayForEach(chNodes, function (chNode) {
                            // Search for el nodes only
                            if (chNode.nodeType !== 1) {return;}
                            if (partName= chNode.getAttribute('data-part')) {fn(partName, chNode)}
                            else {findParts(chNode, fn)} // Do not search into part definition
                        })
                    }
                    function cloneTemplateIntoElement(cmN,cmD,el) {var tp
                        if(tp!=cmD['template']){_.er('Cm\''+cmN+'\'!tp')}
                        ko.vE.nCh(el,
                            clonedNodesArray=ko.ext.utils.cloneNodes(tp)
                        )
                    }
                    function createVM(cmD, el, cmPams) {
                        return (cmVMFact= cmD['createVM'])?
                            cmVMFact .call(cmD, cmPams, { el: el }) : cmPams}

                    //http://jsfiddle.net/mbaranov/6zvjfd2y/
                }

                /*

                 You should use ko.utils.unwrapObservable
                 in cases where you don't know if u have been gvn an obsvb or not.
                 This would commonly be in a cstm bdg where an ovb or
                 non-obv
                 could be bound against it.

                 In the code that u have above,
                 the call to vAc() is not actually unwrpping an ovb

                 It is just retrieving the value that was passed to the binding in the correct context

                 (it gets wrapped in a fn to protect it).

                 The ret v of valAcc() may be an obv or not.

                 It is * was pasd to the bdg


                 */

            };bindn()


//http://www.knockmeout.net/2011/08/all-of-knockoutjscom-live-samples-in.html



        };comp()


    };aps()

    old=function(){
        oldRt=function(){
            $R1=function(o){var r; o=O(o)?o:{}
                if(o.r){o.routes=o.r}
                r = bb.Router.extend(o)
                r.o=r.on
                return function(){var a=new r

                    return a
                }
            }
//bb.r=function(ob){var Rt =  bb.Router.extend(ob); return function(a,b,c,d){ return new Rt(a,b,c,d)    }}
//bb.r=   bb.rt= bb.R= $.ext(bb.Router)
            bb.R1=function(ob){
                bb.rt=function(klas){ var rt = new klas
                    rt.n= rt.nv=rt.ng=function(url){var rt=this,
                        g=G(arguments)
                        if(g.n){rt.navigate(url)}
                        else {rt.navigate(url,  {trigger:true})}
                        return rt}
                    return rt
                }


                bb.Rt=function(ob){var Rt
                    if(ob.i){ob.initialize = ob.i}
                    if(ob.$){
                        ob.initialize = function(){
                            bb.history.start({pushState:true})
                            if( F(ob.$ )){ob.$()}}}
                    if(ob.rt){ob.routes = ob.rt}
                    ob.routes = ob.routes || {}
                    ob.routes[''] = ob.routes[''] ||'index'
                    if(ob.x){ob.index = ob.x}
                    if(ob.h){ob.home = ob.h}
                    Rt= bb.Router.extend(ob)
                    return Rt
                }

                var rtr=  this.Rt(ob)
                rt = bb.rt(rtr)
                return  r = rt
            }





//H$=function(){bb.history.start()}


        };oldRt()
    }




    bb=function(){


        NORTR=function(){$.x(null, 'no router'); v1= v2 = v3 = 0
            $.d('r',100,100).id('div')


            // ha.. this is just 'no router'
            V1 = $V({i: function() {
                this.r()
            }, r: function(){

                //this.$el.ht(this.model.get('Ms') + " from the View 1" )

                return this
            } })

            V2 = $V({
                i: function(){this.r()},
                r: function(){
                    this.$el.ht(this.model.g('Ms') + " from the View 2");
                    return this}})
            V3 = $V({
                i: function(){  this.render()  },
                r: function(){
                    this.$el.html(this.model.get('Message') + " from the View 3" )
                    return this
                }
            })


            // Now we need a view that will contain the view
            // and render it
            // whenever the user makes a choice on the screen.

            CtV = $V({ chV:0,
                render: function(){
                    this.$el.ht('Hi Area').A(
                        this.chV.$el
                    )
                    return this
                }})

            hi = V1({Ms: "Hello world"})

            ct = CtV({
                el: $("#div"),
                model: hi
            })


            /*
             Now lets create a simple div on the UI which will be used as el to this ContainerView.
             We will then position three buttons on the UI which will let the user to change the view.
             Below code shows the application setup that is creating the container view and the functions
             that will get invoked when the user selects the view from screen.
             */


            $.bt('v1', function (){
                    if (!v1) {v1 = V1({model:hi})}
                    ct.chV = v1
                    ct.render()
                }
            )

            $.bt('v2', function  (){
                if (!v2) {v2 =   V2({ model: hi })}
                ct.chV= v2
                ct.render()
            })


            $.bt('v3',  function (){
                if(!v3) { v3 =  V3({ model: hi }) }
                ct.chV = v3
                ct.render()
            })

        }


        ITEMS=function(){$.x().h3('jason')
            Ap={M:{},V:{},C:{}}
            Ap.M.Item = $M({})

            $R({

                    r:{
                        '':'welcome',

                        itemlist:'showItemList',
                        'j':'j'

                    },

                    welcome:function(){
                        $.bd().E().A($.h1('welcome'))},
                    j:function(){},
                    showItemList:function(){
                        $l('showItemList')
                        $.bd().A($.h1('show item list'))
                    }},

                '+')


            i1=Ap.M.Item({n:'jason', g:'mason' })
            i1.oR('j',function(){$.bd().E().A($.h1('j'))})
            //bb.history.start({pushState: true})

            $.bt('add', function(){
                r.n('/itemlist')

            })

        }


        ROUTE=function(){z()
            $R({r:{"*x":"d"}  },'+')
            r.oR('d',function(a){$l('d:'+ a)})
            r.oR('e',function(a){$l('e:'+a)})
        }




        ROUTEPAMS=function(){$.x().A('hahahahhahaha')
            RTob=  {
                '':'home',
                'view':'v',
                'new': 'nn',
                ':id': 'en',
                'posts/:id':'gPo',
                '*acts':'dfR',
                'download/*path': 'dlF',
                ':route/:action': 'ldV'
            }

            $R({  rt:  RTob,
                home:function(){$l('home')},
                v:function(){$l('image')} ,
                nn:function(){},
                en: function(id){$l('id:'+id)}

            },'+')

            r.oR('dfR',$l)
            r.oR('gPo',function(id){$l('gPo# '+id)})
            r.oR('gPo', function(){$l(3)}) //both routes fire!
            r.oR('dlF', $l)
            r.oR('ldV', function(rt,ac){$l(rt+'_'+ac)})

        }


        BACKDEMO=function(){$.x().d('yoo hoo').id('cont')

            Temp=function(i,h){var s=''
                return _.tp($('#'+i).html(), h||{})
                if(A(h)){_.e(h, function(h){s += h.oh()})}
                s="<script type='text/template'>"+ s +"</script>"
                return $(s).id(i).A()}

            $R({
                rt:{'':'f', 'f':'f', 's':'s'},
                f:function(){$l('fir')}, s:function(){$l('sec')},
                task:function(){t=new Task(); $l('t = new Task') }
            }, '+')




            Temp('task', [
                $.lb('Task: '),
                $.ip().id('task_desc'),
                $.bt('add task').id('btn') ])

            Tsk=$V({el: $('#cont'),
                i: function(){this.r()},
                r: function(){this.$el.ht( Temp('task') )},
                e: {'click button': 'add'},
                add: function(){alert( $('#task_desc').v() + ' task added')}})
        }


        RTR=function() {
            $.x('b')

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

            }, '+')

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



        ROUTENAV=function(){$.x('b')
            $R({
                r:{
                    'po/:id':'gp',
                    '*a':'dr'
                },
                dr:function(a){$l(a)},
                gp:function(id){
                    $.bd().C($r())
                    $l('Get post '+id)
                }
            },'+')
            $.bt('hi', function(){rt.n('po/2')})


        }



    }

}
old=function(){
    NO_RTR=function(){$.x(null, 'no router'); v1= v2 = v3 = 0
        $.d('r',100,100).id('div')


        // ha.. this is just 'no router'
        V1 = $V({i: function() {
            this.r()
        }, r: function(){

            //this.$el.ht(this.model.get('Ms') + " from the View 1" )

            return this
        } })

        V2 = $V({
            i: function(){this.r()},
            r: function(){
                this.$el.ht(this.model.g('Ms') + " from the View 2");
                return this}})
        V3 = $V({
            i: function(){  this.render()  },
            r: function(){
                this.$el.html(this.model.get('Message') + " from the View 3" )
                return this
            }
        })


        // Now we need a view that will contain the view
        // and render it
        // whenever the user makes a choice on the screen.

        CtV = $V({ chV:0,
            render: function(){
                this.$el.ht('Hi Area').A(
                    this.chV.$el
                )
                return this
            }})

        hi = V1({Ms: "Hello world"})

        ct = CtV({
            el: $("#div"),
            model: hi
        })


        /*
         Now lets create a simple div on the UI which will be used as el to this ContainerView.
         We will then position three buttons on the UI which will let the user to change the view.
         Below code shows the application setup that is creating the container view and the functions
         that will get invoked when the user selects the view from screen.
         */


        $.bt('v1', function (){
                if (!v1) {v1 = V1({model:hi})}
                ct.chV = v1
                ct.render()
            }
        )

        $.bt('v2', function  (){
            if (!v2) {v2 =   V2({ model: hi })}
            ct.chV= v2
            ct.render()
        })


        $.bt('v3',  function (){
            if(!v3) { v3 =  V3({ model: hi }) }
            ct.chV = v3
            ct.render()
        })

    }
    oldRt=function(){
        $R1=function(o){var r; o=O(o)?o:{}
            if(o.r){o.routes=o.r}
            r = bb.Router.extend(o)
            r.o=r.on
            return function(){var a=new r

                return a
            }
        }
//bb.r=function(ob){var Rt =  bb.Router.extend(ob); return function(a,b,c,d){ return new Rt(a,b,c,d)    }}
//bb.r=   bb.rt= bb.R= $.ext(bb.Router)
        bb.R1=function(ob){
            bb.rt=function(klas){ var rt = new klas
                rt.n= rt.nv=rt.ng=function(url){var rt=this,
                    g=G(arguments)
                    if(g.n){rt.navigate(url)}
                    else {rt.navigate(url,  {trigger:true})}
                    return rt}
                return rt
            }


            bb.Rt=function(ob){var Rt
                if(ob.i){ob.initialize = ob.i}
                if(ob.$){
                    ob.initialize = function(){
                        bb.history.start({pushState:true})
                        if( F(ob.$ )){ob.$()}}}
                if(ob.rt){ob.routes = ob.rt}
                ob.routes = ob.routes || {}
                ob.routes[''] = ob.routes[''] ||'index'
                if(ob.x){ob.index = ob.x}
                if(ob.h){ob.home = ob.h}
                Rt= bb.Router.extend(ob)
                return Rt
            }

            var rtr=  this.Rt(ob)
            rt = bb.rt(rtr)
            return  r = rt
        }





//H$=function(){bb.history.start()}


    };oldRt()
}