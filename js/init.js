
$(function(){
    $.Gj('loggedIn', function(un){
        Y._un= Y._userName = _username = $l(un)
        if(un == 'guest' || !un){ Y('GuestPage') }
        else {

            k.em('id', un);
            k.em('jRm',  _username )
            $.G('myMug', function(mug){
                Y._userMug = _userMug  = mug
                Y('HomePage')})
        }
    })
})



