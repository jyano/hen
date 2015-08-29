
$.dlg = function (msg) {

    var dlg=$("#response-dialog")

    if(!dlg[0]){
        dlg=$.d().at({
            title:"Messaage",
            id:"response-dialog"
        })
    }

    dlg.html(msg).dialog({
        autoOpen: true,
        width: 400,  modal: true,
        closeOnEscape: true,
        buttons:  { Ok: function () {dlg .dialog("close")}  }
    })
}

DIAL=function(){$.x(null, 'dialog')

    $.d([
        $.p('This is the default dialog which is useful for displaying information'),
        $.p('dialog window can be moved, resized and closed with the x icon')]).id('dialog').at('title', 'Basic dialog')
    $("#dialog" ).dialog()


        $.dlg('dialog 1')
        $.in(3, function(){
            $.dlg('dialog 2')
            $.dlg('dialog 3')
            $.dlg('dialog 4')  })

}
