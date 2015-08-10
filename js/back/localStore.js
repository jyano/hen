

$ls=function(k,v0){
    if(D(v0)){ $ls.s(k,v0)  }
    return function self(v){
        if(U(v)){return $ls.g(k)}
        $ls.s(k,v)
        return self}
}



$ls._=localStorage
$ls.s=function(k,v){
    $ls._.setItem(k, v)
    return $ls
}
$ls.g=function(k){

    return $ls._.getItem(k)

}
$ls.r=$ls.rm=function(k){
    var vOld = $ls._.getItem(k)
    $ls._.removeItem(k)
    return vOld
}
$ls.l=$ls.L=function(){
    return $ls._.length
}
$ls.x=$ls.clr=function(){
    $ls._.clear()
    return $ls
}

LCS=function(){$.x('r','localStorage')

    $ls.s('food', 'zebra')


  //  j = $ls('jason'); j('eats')

   // j = $ls('jason')('eats')
    j = $ls('jason', 'eats')
    $.h1(   'i didnt know that jason '+
        j()+' '+$ls.g('food')+'!'    )
}

ssS=sessionStorage
sR=function(a){var i=ssS.getItem(a); ssS.removeItem(a); return i}
sS=function(a,b){ssS.setItem(a,b); return ssS}
sG=function(a){return ssS.getItem(a)}
sL=function(){return ssS.length}
sX=function(){ssS.clear();return ssS}



saveFromLocStor=function(){

        i = ta().id('input')

        i.q.value=localStorage
                .getItem('myText')||''

        i.o('u',function(){
            localStorage.setItem('mytext',
                i.value)
        },false)
    }




readDatFromOtherPageLoc=function(){
        //put windows side by side and watch one update the other
        i=qi('input')
        I(function(){

            i.q.value=localStorage.getItem('myText')||''
        },50) }




saveFromSesStor=function(){

    i = ta().id('input')

    i.q.value = sessionStorage.getItem('myText') || ''

    i.o('u', function(){

        sessionStorage

        .setItem('mytext', i.value)

    }, false)



}



JQLS1=function() {
    $.x('o', 'jqls')
    $.d([  $.h3('Pending')

        /*
         ,  $.d([

         $.dK('task-header').A('Sample Header'),

         $.d([  '25/06/1992'  ]).K('task-date'),

         $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')


         ]).K('td-task')
         */


    ]).id('pending').K('task-list')
    $.d([ $.h3('In Progress')  ]).id('inProgress').K('task-list')
    $.d([ $.h3('Completed') ]).id('completed').K('task-list')
    $.d([


        $.h3('Add a task'),


        $.f([

            $.ip().ph('Title'),

            $.ta().ph('Description'),

            $.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),

            $.bt('Add Task').K('btn btn-primary')

        ]).C('u').id('td-form'),


        $.bt('Clear Data').K('btn btn-primary'),


        $.d(['Drag Here to Delete']).id('delete-div')




    ]).K('task-list')




    // {

    // width:250; // float:left;
    // mar:0;
    // background-color:gray;
    // min-height:240;
    // border-radius:10;
    // padding-bottom:15;

    // }



    $CSS({


        '.task-list': {
            w: '250px', float: 'left',
            mar: '0px', C: 'gray',  'min-height': '240px',
            'border-radius': '10px',   'padding-bottom': '15px'
        },

        h3: {'text-align': 'center'},

        '.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},

        '.task-list input': {h: '30px'},
        '.task-list input[type="button"]': {w: '100px', mar: '5px'},

        '.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},

        '.td-task > .task-header': {'font-weight': 'bold'},
        '.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
        '.td-task > .task-desc': {'font-size': 'smaller'},


        '#delete-div': {
            C:'b',    bor:'3px dotted #000',    mar:'10px',    h: '75px',
            'line-height': '75px',   'text-align': 'center' }




    })
    //<style type="text/css"> h3{text-align:center;  }</style>

    $l($('head').oh())
    /*
     codes = { "1" : "#pending",  "2" : "#inProgress",  "3" : "#completed"}

     El=function(o){var q
     if(q=$(codes[o.code])){

     wrapper= $.dI('task-'+o.id).K('td-task').at('data', o.id)


     wrapper.A(
     $.d(o.tt).K('task-header'),
     $.d(o.date).K('task-date'),
     $.d(o.desc).K('task-desc')
     ).a2(q)}

     }

     addItem = function(dat){
     ips = $('#td-form :input')
     if(ips.length!=4){return}
     if(!tt){return $l("Title empty!")}
     El(dat[id=_.gT()]={ id:id,
     code: "1",
     tt: ips[0].value, date:ips[2].value,  desc:ips[1].value})
     ips[0].value= ips[1].value= ips[2].value = ''
     $ls.s('tdData', _.jS(dat))}

     rmEl = function(o){ $('#task-'+o.id).rm() }




     exEl = El({code: "1",  id: "123",
     tt: "My Uber Important Task", date: "5/2/2014",
     desc: "I have to do a lot of steps to implement this task!"})



     wrapper.dgb({
     start: function() {  $(  '#delete-div').show()},
     stop: function() {  $(   '#delete-div').hide()}})

     $ls.s("tdData",_.jS(data=_.jP($ls.g("tdData"))))

     $('.td-task').dgg()
     $.each(codes, function(k,v){$(v).dpb({//on drop !!!
     drop: function(ev, ui) {
     el = ui.helper
     css_id = el.attr("id")
     id= css_id.replace(ops.taskId,'')
     ob = data[  id   ]
     rmEl(  ob   )
     ob.code = k
     El(ob)
     data[id] = ob
     $ls.s("tdData", _.jS(data))
     $('#delete-div').hide()}})})


     $('#delete-div').dpb({
     drop: function(ev, ui) {
     el = ui.helper
     css_id = el.attr('id')
     id = css_id.replace(op.taskId, '')
     o = data[id]
     rmEl(o )
     delete data[id]
     $ls.s("tdData", _.jS(data))
     $('#delete-div').hide() }})

     */
    data = _.jP($ls.g("tdData")) || {}
    codes = {   "1" : "#pending",  "2" : "#inProgress",   "3" : "#completed"     }
    options ={}

    td={add : function(){
        var ips = $('#td-form :input'),
            id,   title,
            desc,   date,
            tempData
        if (ips.length !== 4) {return}
        title = ips[0].value
        desc = ips[1].value
        date = ips[2].value
        if (!title) {return  $.dlg("!Title")   }
        id = _.gT()
        tempData = {
            id : id, code: "1", title: title,
            date: date, desc: desc
        }

        data[id] = tempData
        $ls.s("tdData", _.jS(data))
        genEl(tempData)
        ips[0].value = "";ips[1].value = "";ips[2].value = ""

    },

        clear :function () {data={}
            $ls.s('tdData', _.jS(data))
            $('.td-task').rm() }



    }

    genEl = function(pams){
        $l('genEl')
        var parent = $(codes[pams.code]),
            wrapper
        if (!pams.code || !parent) {  $l('!parent'); return   }


        wrapper = $.d()
        wrapper.at({class: 'td-task', id: 'task-' + pams.id, data: pams.id })
            .a2(parent)

        $.d().at( {class: 'task-header', text: pams.title }).a2(wrapper)
        $.d().at({class: 'task-date', text: pams.date}).a2(wrapper)
        $.d().at({class: 'task-desc', text: pams.desc}).a2(wrapper)

        wrapper.draggable({
            start: function() {$("#" + 'delete-div').show()},
            stop: function() {$("#" + 'delete-div').hide()},
            revert: "invalid", revertDuration : 200})
    }



    rmEl = function(pams){ $('#task-'+pams.id).rm() }



    $.each(data, function (index, pams) {genEl(pams)})

    /*genEl({
     id: "123",
     code: "1",
     title: "asd",
     date: "22/12/2013",
     desc: "Blah Blah"
     });*/  /*rmEl({
     id: "123",
     code: "1",
     title: "asd",
     date: "22/12/2013",
     desc: "Blah Blah"
     });*/

    // Adding drop function to each category of task and del div

    $.each(codes,    function (index, value) {  $(value).droppable({

        drop: function (event, ui) {
            var element = ui.helper,
                css_id = element.attr("id"),
                id = css_id.replace('task-', ""),
                object = data[id]
            rmEl(object)
            object.code = index
            genEl(object)
            data[id] = object
            $ls.s("tdData", _.jS(data))
            $('#delete-div').hide()}})})
    $('#delete-div').droppable({
        drop: function(event, ui) {
            var element = ui.helper,
                css_id = element.attr("id"),
                id = css_id.replace('task-', ""),
                object = data[id];

            // Removing old element
            rmEl(object);

            // Updating local storage
            delete data[id];
            $ls.s("tdData", _.jS(data));

            // Hiding Delete Area
            $("#" + 'delete-div').hide();
        }
    })







}
dfx = {
    tdTask: "td-task",
    tdHeader: "task-header",
    tdDate: "task-date", tdDesc: "task-desc",
    taskId: "task-", formId: "td-form",
    dataAttribute: "data",
    delDiv: 'delete-div'
}
// http://www.sitepoint.com/building-list-jquery-local-storage/


JQLS=function() {
    $.x('o', 'jqls')



    $.d([  $.h3('Pending')

        /*
         ,  $.d([
         $.dK('task-header').A('Sample Header'),
         $.d([  '25/06/1992'  ]).K('task-date'),
         $.d(['Lorem Ipsum Dolor Sit Amet']).K('task-desc')
         ]).K('td-task')
         */

    ]).id('pending').K('task-list')
    $.d([ $.h3('In Progress')  ]).id('inProgress').K('task-list')
    $.d([ $.h3('Completed') ]).id('completed').K('task-list')
    $.d([
        $.h3('Add a task'),
        $.f([
            $.ip().ph('Title'),
            $.ta().ph('Description'),
            $.ip().ph('Due Date (dd/mm/yyyy)').datepicker(),
            $.bt('Add Task').K('btn btn-primary')
        ]).C('u').id('td-form'),
        $.bt('Clear Data').K('btn btn-primary'),
        $.d(['Drag Here to Delete']).id('delete-div')




    ]).K('task-list')




    // {

    // width:250; // float:left;
    // mar:0;
    // background-color:gray;
    // min-height:240;
    // border-radius:10;
    // padding-bottom:15;

    // }



    $CSS({


        '.task-list': {
            w: '250px', float: 'left',
            mar: '0px', C: 'gray',  'min-height': '240px',
            'border-radius': '10px',   'padding-bottom': '15px'
        },

        h3: {'text-align': 'center'},

        '.task-list input, .task-list textarea': {w: '240px', mar: '1px 5px'},

        '.task-list input': {h: '30px'},
        '.task-list input[type="button"]': {w: '100px', mar: '5px'},

        '.td-task': {'border-radius': '5px', C: 'g', w: '230px', mar: '5px', pad: '5px'},

        '.td-task > .task-header': {'font-weight': 'bold'},
        '.td-task >.task-date': {'font-size': 'small', 'font-style': 'italic'},
        '.td-task > .task-desc': {'font-size': 'smaller'},


        '#delete-div': {
            C:'b',    bor:'3px dotted #000',    mar:'10px',    h: '75px',
            'line-height': '75px',   'text-align': 'center' }




    })
    //<style type="text/css"> h3{text-align:center;  }</style>

    $l($('head').oh())

    data = _.jP($ls.g("tdData")) || {}
    codes = {   "1" : "#pending",  "2" : "#inProgress",   "3" : "#completed"     }
    options ={}

    td={add : function(){
        var ips = $('#td-form :input'),
            id,   title,
            desc,   date,
            tempData
        if (ips.length !== 4) {return}
        title = ips[0].value
        desc = ips[1].value
        date = ips[2].value
        if (!title) {return  $.dlg("!Title")   }
        id = _.gT()
        tempData = {
            id : id, code: "1", title: title,
            date: date, desc: desc
        }

        data[id] = tempData
        $ls.s("tdData", _.jS(data))
        genEl(tempData)
        ips[0].value = "";ips[1].value = "";ips[2].value = ""

    },

        clear :function () {data={}
            $ls.s('tdData', _.jS(data))
            $('.td-task').rm() }



    }



    genEl = function(pams){$l('genEl')
        pams=pams||{}
        var parent
        if (!pams.code) {$l('!pams.code'); return;}
        parent= $(codes[pams.code]), wrapper;
        if (!parent) {$l('!parent'); return}
        wrapper = $.d()
            .at({class: 'td-task',   id:'task-'+pams.id,    data: pams.id}).a2(parent)
        $.d().at( {class: 'task-header', text: pams.title }).a2(wrapper);
        $.d().at({class: 'task-date', text: pams.date}).a2(wrapper)
        $.d({class: 'task-desc', text: pams.desc}).a2(wrapper)
        wrapper.draggable({
            start: function() {$("#" + 'delete-div').show()},
            stop: function() {$("#" + 'delete-div').hide()},
            revert: "invalid", revertDuration : 200})}


    rmEl = function(pams){ $('#task-'+pams.id).rm() }
    $.each(data, function (index, pams) {genEl(pams)})

    /*genEl({
     id: "123", code: "1",
     title: "asd",   date: "22/12/2013",  desc: "Blah Blah"     });*/


    /*rmEl({      id: "123",
     code: "1",  title: "asd",
     date: "22/12/2013",
     desc: "Blah Blah"
     });*/


    // Adding drop function to each category of task and del div
    $.each({   "1" : "#pending",  "2" : "#inProgress",   "3" : "#completed"     },


        function (index, value) {

            $(value).droppable({
                drop: function (event, ui) {
                    var element = ui.helper,
                        css_id = element.attr('id'),
                        id = css_id.replace('task-', ''),
                        object = data[id]
                    rmEl(object)
                    object.code = index
                    genEl(object)
                    data[id] = object

                    $ls.s("tdData", _.jS(data))
                    $('#delete-div').hide()}


            })})



    $('#delete-div').droppable({

        drop: function(event, ui) {
            var element = ui.helper,
                css_id = element.attr("id"),
                id = css_id.replace('task-', ""),
                object = data[id];

            // Removing old element
            rmEl(object);

            // Updating local storage
            delete data[id];
            $ls.s("tdData", _.jS(data));

            // Hiding Delete Area
            $("#" + 'delete-div').hide();
        }
    })



}


