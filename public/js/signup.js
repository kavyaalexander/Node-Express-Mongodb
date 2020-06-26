function formValidation() {
    var uname = document.getElementById("username");
    var uid = document.getElementById("userid");
    var mob = document.getElementById("mob");
    var uemail = document.getElementById("email");
    var passid = document.getElementById("passid");
    var umgen = document.getElementById("mgen");
    var ufgen = document.getElementById("fgen");
    var uogen = document.getElementById("ogen");
    if (name(uname)) {
        if (userid_validation(uid)) {
            if (phonenumber(mob)) {
                if (ValidateEmail(uemail)) {
                    if (passid_validation(passid)) {
                        if (validgen(umgen, ufgen, uogen)) {}

                    }
                }
            }
        }
    }
    return false;

}

function name(uname) {
    var letters = /^[A-Z\sa-z]+$/;
    if (uname.value.match(letters)) {
        return true;
    } else {
        alert('Username must have alphabet characters only');

        return false;
    }
}

function userid_validation(uid) {
    var uid_len = /^[A-Za-z]+$/;
    if (uid.value.match(uid_len)) {

        return true;
    } else {
        alert('Userid must have alphabet characters & no space allowed /User Id should not be empty');

        return false;
    }
}


function phonenumber(mob) {
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (mob.value.match(phoneno)) {
        return true;
    } else {
        alert("Please Enter Valid number");

        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");

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
        return true;
    } else if (mediumRegex.test(passid.value)) {
        document.getElementById("check").innerHTML = '</b><b><span style="color:orange">Medium!</span>';
    } else {
        document.getElementById('check').innerHTML = '</b><b><span style="color:red">Poor!</span>';

    }
}


function validgen(umgen, ufgen, uogen) {
    x = 0;

    if (umgen.checked) {
        x++;
    }
    if (ufgen.checked) {
        x++;
    }
    if (uogen.checked) {
        x++;
    }
    if (x == 0) {
        alert('Select Male/Female/Other');

        return false;
    } else {
        alert('Form Succesfully Submitted');
        window.location.action();
        return true;
    }
}