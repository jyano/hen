TN =function(){z()
    wrap = $.wrap

    $.boot(
        wrap('me'),
        wrap('guy' ),
        wrap('chicks'),
        wrap( 'me' ),
        wrap( 'guy') ,
        wrap( 'chicks' ),
        wrap( 'me' ),
        wrap( 'guy' ),  wrap( 'chicks' ),
        wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' ),
        wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' )
    )
}
tabs=function(){
    $.showTab = function(id){ $('#'+id).tab('show') } //necessary?
    $.tab = function(t, lookFor){var g= G(arguments)
        if(F(lookFor)){
            var  tabT=g[0], fn=g[1],
                load = function(e){$('#' + tabT).tab('show'); fn() }
            li= $.li().A($.a(tabT, load) )
            li.load = load
            if(g.m){  li.K('active')  }
            return li}
        return $.li().A($.a(t,'#' +lookFor)
            .attr({'data-toggle':'tab'}))
    }
    $.navTabs = function(){var tabs,g=G(arguments)

        tabs = $.ul().K("nav nav-tabs")
        _.e(g, function(g){ tabs.A(g) })
        return tabs
    }
    $.tabPane=function(id){var g = G(arguments),
        pane = $.dK("tab-pane fade").id(args[0])
        if(g.p){pane.K('active in')}

        return pane}
    $.tabContent  = function(){var g=G(arguments), d =  $.dK("tab-content")
        _.e(g, function(g){d.A(g)})
        return d}
    $.tabs=function(){var g=G(arguments)

//can pass in a $.tab() -> 'tab'
        //OR can pass in an array, and then $.tab will be called for it, and pass in the pams


        tabsWrapper = $.div('X').WH('auto').A(

            tabBar= $.ul().K("nav nav-tabs"),

            panel =  TABS=$.sp()
        )

        _.e(g,
            function(tab){if(A(tab)){
                tab=$.tab(tab[0],tab[1])}
                tabBar.A(tab)})

        tabsWrapper.load = function(){
            tabBar.ch().first().first().$()
            return tabsWrapper}
        return tabsWrapper
    }


    testTabs = function(){
        $.boot(
            $.navTabs(
                $.tab('Home', 'home').K('active'),
                $.tab('Profile', 'profile'),
                $.tab('Messages', 'messages'),
                $.tab('Settings', 'settings')
            ).C('r'),



            $.tabContent(

                $.tabPane('home', '+').A(

                    $.h1('home'),
                    $.ipsum(6)
                ),


                $.tabPane('profile').A(
                    $.h1('profile'),
                    $.ipsum(6)
                ),

                $.tabPane('messages').A(
                    $.h1('messages'),
                    $.ipsum(6)
                ),

                $.tabPane('settings').A(
                    $.h1('settings'),
                    $.ipsum(6)
                )

            ).C('b')

        )











    }
    testTabs1 = function(){ // 'active-s' are mismatched on purpose :)


        $.boot(

            $.navTabs(
                $.tab('Home1','home1'),
                $.tab('Home','home').K('active'),
                $.tab('Profile', 'profile'),
                $.tab('Messages', 'messages')),
            $.tabContent(
                $.tabPane("home1", '+').C('b').A('home1'),
                $.tabPane('home').C('r').A('home'),
                $.tabPane("profile").C('y').A('profile'),
                $.tabPane("messages").C("g").A('messages'))


        )

        $('.nav-tabs a').click(function(e){
            //    e.preventDefault();  $(this).tab('show')
        })



    }
    testTabs2=function(){

        z()

        var ul =   $.ul().K('nav nav-tabs').A(

            $.liA('aaaa'),
            $.liA('bbbb').K('active'),
            $.liA('cccc'),
            $.liA('dddd')

        ).C('b')


        var display = $.div('y', 300, 400).mar(20)

        var div = $.div('r').pad(30).A(ul, display).A().drag()

    }
    testTabs3=function(){z()

        $.navTabs().A(
            $.tab('Home'),
            $.tab('Profile').K('active'),
            $.tab('Messages')).A()

        $(function(){

            $('a').click(function(){
                $(this).tab('show')
            })

        })


    }
    testTabAjax=function(){

        $.boot(

            $.navTabs(
                $.tab('hello', function(){ alert('hello')}),
                $.tab('goodbye', function(){  $('#stuff').load('/')  })
            ),

            $.d().id('stuff')


        )}
    testTabs4=function(){z()
        var tabBar = $.ul().K("nav nav-tabs")

        tabBar.A(

            $.tab('first', function(){alert('1')}),
            $.tab('second', function(){alert('2')}),
            $.tab('third', function(){alert('3')})

        ).A()
    }//navtabs=function(){return $.ul().K('nav nav-tabs')} //unnecessary
    testTabs5=function(){

        z()

        var tabBar = $.tabs(

            ['first', function(){
                $l('1')

                panel.E($.img('me'))

            }],

            ['second', function(){$l('2')}],
            ['third', function(){$l('3')}]

        ).A()

    }
    testTabsAction=function(){

        testTabs()

        $(function(){
            $('a[data-toggle="tab"]')
                .on('show.bs.tab', function (e) {ee=e
                    $l('tabbed!')
                    e.target // newly activated tab
                    e.relatedTarget // previous active tab

                })


        })

    }
    testTabsAction2=function(){
        // for each tab, use 'on(show)', to automatically fetch/load?
    }


};tabs()
pil=function(){
    $.pil=  function(o){var g=G(arguments), p

        p = $.ul().K('n np').C('y')


        if(O(o)){

            _.e(o,function(v,k){

                var l = A(k)?  lik(k[0],'+') : lik(k)

                l.o('$',v);p(l)
            })
        }

        else {
            _.e(g,function(v){if(A(v)){p(lik(v[0],'+'))} else {p.A(lik(v))}})
        }
        return p

    }


    $.pill = function(name, func){

        var a = $.a(name, func).attr({'data-toggle': 'pill', href: '#'+name })

        return $.li().A(a)
    }
    $.navPills =function(){return $.ul().K('nav nav-pills')}
    $.pillPane=function(id){

        var d= $.dK('pill-pane fade').id(id).attr('role', 'pillpanel')

        return d}

    $.pillContent=function(){

        var div =  $.dK("pill-content")

        _.e(arguments,
            function(arg){

                div.A(arg)
            })


        return div}


    LoginPill= function(){$.pil({'log in':lI,'log out':lO}).pp()}
    testPills= function(){

        $(function(){


            $.boot().A(

                $.well($.h1('welcome to pills')),

                n = $.navPills().A(
                    $.pill('home'),
                    $.pill('profile'),
                    $.pill('messages', function(){$('body').C('r')})
                ),



                $.dK("pill-content").A(

                    $.pillPane('home').A('hoooome'),
                    $.pillPane('profile').A('prooofile'),
                    $.pillPane('messages').A('messsaaaages')
                )



            )




            //   $('a').each(function(){ $(this).attr('data-toggle', 'pill') })

        })


    }
    PILLS=function(){z()
        pills= $.ul().K("nav nav-pills").A(
            $.li().K('active').A(    $.a('home').toggle('tab')     ),
            $.li().A(  $.a('profile').K('profile')  ),
            $.li().A( $.a('messages') ) )

        div=$.d('b', '+').WH('auto').pad(40)
        ch=   $.d('y',300).pad(40).mar(40)

        div.A( pills , ch)


        $('a').$(function (e) {
            e.preventDefault()
            $(this).tab('show')
        })


        // $('a:first').tab('show')
        $('a.profile').on('shown.bs.tab', function(e){
            ch.E()
            ch.A($.d().T('asfdasfdfasd'))
        })
        $('a[data-toggle="tab"]').on('shown.bs.tab', function(e){
            e.target // activated tab
            e.relatedTarget // previous tab
        })
    }



};pil()
nails=function(){

    $.aTn = $.thumbA = $.thumbnailClick=function(i, fn){var a
        fn = fn || function(){
            alert('you clicked a thumbnail')
            i=this
        }
        a = $.a('',fn).K('thumbnail')
        a.A( $.i(i) )
        return a

        // all thumbnails must be within a col
// can be a class on an anchor
// or can be on a div (for more control)
    }
    $.dTn= $.thumbD = $.thumbnailDiv = function(a) {

        var div = $.dK('thumbnail')

        _.e(arguments,

            function (arg) {

                div.A(arg
                    //  S(arg)? $.img(arg): arg
                )

            })

        return div}
    $.colThumbA=function(clas, img, func){
        return $.dK(clas).A(
            $.thumbA(img, func)
        )}

    $.tn = $.thumbnail = function(a){

        var div = $.dK('thumbnail')

        _.e(arguments,

            function(arg){

                div.A( S(arg)? $.img(arg): arg  )

            })


        return div

    }
    $.tnR= $.thumbnailRow =  function(g){z()

        var theRow = $.row()

        _.e(G(arguments),
            function(a){
                theRow.A($.thumbnail(a))
            })

        return theRow.A()
    }
    $.tnT= $.thumbnailTimes = function(num){
        var arr=[]
        _.times(num||20,
            function(){
                arr.push('me')})
        _a(thumbnail,arr)
    }

    exampleThumbContent =function(){z()

        var wrap = function(img){

            return $.dK(  "col-xs-4 col-sm-3 col-md-2 col-lg-1"  ).A(

                $.a('').K('thumbnail').A( img  )

            )}

        $.container().A(

            $.row(

                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('me'),
                    $.caption('Thumbnail label')
                ),


                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('guy'),
                    $.caption('Thumbnail label')
                ),


                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('me'),
                    $.caption('Thumbnail label')

                )


            )

        ).A()


    }
    exampleThumbnails = function(){z()

        // <div class="row">
        // <div class="col-xs-6 col-md-3">
        // <a id="" href="#" class="thumbnail">
        // <img src="/me.png">
        // </a>
        // </div>
        // </div>


        return $.container().A(
            $.row(

                $.dK("col-xs-6 col-md-3").A(

                    $.a('').K("thumbnail").A(  $.img('me')  )


                ) )

        ).A()



    }
    exampleThumbnailsCustomContent = function(){z()
        cont = $.container().C('r')


        thumbnail = $.thumbnail().C('g').A(
            $.p('first thing in green thumbnail'),
            $.img('me'),

            $.dK("caption").A(
                $.h3('Thumbnail label'),
                $.p('...'),
                $.p().A(
                    $.bt('Button').K("btn btn-primary"),
                    $.bt('Button').K("btn btn-default")))
        )



        cont.A(  $.row(
            $.dK("col-sm-6 col-md-4").A(

                $.p('before thumbnail'),
                thumbnail
            )



        ))


        return cont.A()}




};nails()
JUMB = function(){  $.boot(

    $.jumbo(
        'My first Bootstrap website!',
        $.p('This page will grow as we add more and more components from Bootstrap...')),

    $.paragraphs(
        'This is another paragraph',
        'This is a paragraph',
        'This is another paragraph')

)}
VOLUME=function(){
    r = $.R().W(600);
    outerDiv = $.d('y', 400, 200).A().dg().A(r);
    r.dg().A(
        $.d().id('booksDiv').K('col-md-6'),
        $.d().id('displayDiv').K('col-dm-6').A($.i('guy')));
    Book = function (title) {
        var b;
        b = $.d('b', 60, 60).K('book');
        b.A($.h4(title || 'book'));
        b.display = $.i('me').K('display').hd();
        return b
    };
    addBook = function (title) {
        var b;
        b = Book(title);
        $('#booksDiv').A(b);
        $('#displayDiv').A(b.display);
        $('.book').$(function () {
            $(this).id()
        });
        return b
    };
    a = addBook('a');
    b = addBook('b')
}
RESP=function(){

    $.xs = $.phones = function self(color, num){
        if(N(color)){return self(null,color)}
        var div = $.d()
        if(color){div.C(color)}
        div.K('col-xs-'+num)
        return div}
    $.sml = $.tablets = function self(color, num){
        if(N(color)){return self(null,color)}
        var div = $.d()
        if(color){div.C(color)}
        div.K('col-sm-'+num)
        return div}
    $.md = $.desktops = function self(color, num){
        if(N(color)){return self(null,color)}
        var div = $.d()
        if(color){div.C(color)}
        div.K('col-md-'+num)
        return div}
    $.lg = $.largeDesktops =function (c, num){
        if(N(c)){return $.lg(null,c)}
        var d = $.dK('col-lg-'+num)
        if(c){d.C(c)}
        return d
    }
    exampleMixedMobileAndDesktop= function(){z()
        //The Bootstrap grid system has four classes: xs (phones), sm (tablets),
        // md (desktops), and lg (larger desktops).
        // These classes can be combinated to create more dynamic and flexible layouts.
        //  Tip: Each class scales up, so if you wish to set the same widths
        // for xs and sm, you only need to specify xs.


        cont = $.container().A()

        cont.A(
            $.row(
                $.div('r').K("col-xs-12 col-md-8").A('col-xs-12 .col-md-8'),
                $.div('b').K("col-xs-6 col-md-4").A('col-xs-6 col-md-4')
            ),


            $.row(

                $.div('a').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
                $.div('b').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
                $.div('c').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4')



            ),



            $.row(
                $.div('g').K("col-xs-6").A('.col-xs-6'),

                $.div('o').K("col-xs-6").A('.col-xs-6')


            )



        )
    }
    exampleMixedMobileTabletAndDesktop= function(){z()
        // Note	Tip: Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.

        cont = $.container().A()
        cont.A(
            $.row(
                $.div('r').K("col-xs-12 col-sm-6 col-lg-8").A($.span( '.col-xs-12 .col-sm-6 .col-lg-8' )),
                $.div('b').K("col-xs-6 col-lg-4").A($.span('.col-xs-6 .col-lg-4'  ))
            ),
            $.row(
                $.div('n').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
                $.div('g').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
                $.div('o').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') )

            )


        )}

    /*
     The following table summarizes how the Bootstrap grid system works across multiple devices:
     Extra small devices
     Phones (<768px)	Small devices
     Tablets (>=768px)	Medium devices
     Desktops (>=992px)	Large devices
     Desktops (>=1200px)
     Grid behaviour	Horizontal at all times	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints
     Container width	None (auto)	750px	970px	1170px
     Class prefix	.col-xs-	.col-sm-	.col-md-	.col-lg-
     Number of columns	12	12	12	12
     Column width	Auto	~62px	~81px	~97px
     Gutter width	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)
     Nestable	Yes	Yes	Yes	Yes
     Offsets	Yes	Yes	Yes	Yes
     Column ordering	Yes	Yes	Yes	Yes
     ~97px
     */
}
$.dF= $.Ft= $.footer = FT=function(){

    var args = G(arguments),

        d = $.dK('footer')


    _.e(args,  function(arg){

        d(

            S(arg)?  pg(arg): arg

        )})

    if(args.p){d.cen()}
    return d.id('footer')

}