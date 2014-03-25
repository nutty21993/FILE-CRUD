
// JavaScript Document
$("#signinsubmit").click(function() {
    var userEmail = $("#loginEmail").val();
    var userPass = $("#loginPassword").val();

    Parse.User.logIn(userEmail, userPass, {

       success: function(user) {
            // Do stuff after successful login.
            alert("Login success!");
            loginFunction();
        },
        error: function(user, error) {
            // The login failed. Check error to see why.
            // alert("Login fail! " + error);
            console.log(error);
        }
    });
});