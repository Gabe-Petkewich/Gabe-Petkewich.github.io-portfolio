$(document).ready(function () {
    $('.submit').click(function (event) {
        event.preventDefault();

        var email = $('.fullname').val()
        var email = $('.emailaddress').val()
        var email = $('.subject').val()
        var email = $('.message').val()
        var statusElm = $('.status')
        statusElm.empty()

        if(emailaddress.length > 5 && emailaddress.includes('@') && emailaddress.include(".")) {
            statusElm.append('<div>Email was delivered</div>')
        } else {
            event.preventDefault();
            statusElm.append('<div>Email is invalid</div>')
        }
    })
})