

var loadSelectedTemplate = (type) => {
    $("mainTemplateContainer").addClass("background-image");
    var url = '';
    switch (type) {
        case 'login':
            url = 'templates/login.htm';
            break;
        case 'fgpwd':
            url = 'templates/forgotPwd.htm';
            break;
        case 'newSignup':
            url = 'templates/signup.htm';
            break;
        case 'expRestrnt':
            $("#mainTemplateContainer").removeClass("background-image");
            url = 'templates/restaurentExplore.htm';
            break;
    }
    $.ajax({
        url: url,
        method: 'GET',
        success: (responseTemplate) => {
            $("#mainTemplateContainer").html(responseTemplate);
        }
    })
}

$(document).ready( () => {
    loadSelectedTemplate('login');
})


var validateCustomer = () => {
    var userInfo = {};
    userInfo.mailId = $("#userEmail").val();
    userInfo.accountPwd = $("#userPassword").val();
    console.log(userInfo);


    $.ajax({
        url: '/validate/customer/details',
        method: 'GET',
        dataType: 'JSON',
        data: userInfo,
        success: (response) => {
            if (response.status == 'Success') {
                // valid user
                loadSelectedTemplate('expRestrnt');
            } else {
                $("#loginError").show(100);
            }
        }
    })

    
}