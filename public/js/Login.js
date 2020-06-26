function validation() {
    var uname = document.getElementById("name");
    var passid = document.getElementById("psw");
    if (useridvalidate(uname)) {
        if (passid_validation(passid)) {

        }
    }
    return false;
}

function useridvalidate(uname) {
    var uid_len = /^[A-Za-z]+$/;
    if (uname.value.match(uid_len)) {

        return true;
    } else {
        alert('User Id should not be empty');
        return false;
    }
}


function passid_validation(passid) {
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var poorRegex = new RegExp("(?=.{6,}).*", "g");

    if (passid.value.length == 0) {
        alert('Type Password');

    } else if (false == poorRegex.test(passid.value)) {
        document.getElementById('check').innerHTML = 'More Characters';
    } else if (strongRegex.test(passid.value)) {
        document.getElementById('check').innerHTML = '</b><b><span style="color:green">Strong!</span>';
        window.location.action()
        return true;
    } else if (mediumRegex.test(passid.value)) {
        document.getElementById("check").innerHTML = '</b><b><span style="color:orange">Medium!</span>';
    } else {
        document.getElementById('check').innerHTML = '</b><b><span style="color:red">Poor!</span>';

    }
}