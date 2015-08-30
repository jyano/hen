$(function(){ $.Gj('loggedIn', function(un){

    Y._un = Y._userName = _username = $l(un)
    function isGuest(un){return un == 'guest' || !un}
    if( isGuest(un) ){ Y('GuestPage') } else { logInUser(un) }
    function logInUser(un){

        k.em('id', un);   k.em('jRm',  _username )

        $.G('myMug', function(mug){
            Y._userMug = _userMug  = mug

            $l('going to home page..')
            Y('HomePage')
        })
    }



}) })



