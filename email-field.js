var emailfield = document.getElementById("email-field");
var emaillabel = document.getElementById("email-label");
var emailerror = document.getElementById("email-error");
var otpclass = document.getElementById("otp-class");
var otpinput = document.getElementById("otp");
var otpconfrom = document.getElementById("conform");
var reslut = document.getElementById("reslut");
var inputvalue = emailfield.value;
window.addEventListener('click', function () {
    var input2 = emailfield.value;
    if (document.activeElement == emailfield) {
        emaillabel.style.bottom = "45px";
    }
    else {
        if (input2 == "") {
            emaillabel.style.bottom = "5px";
            emailerror.innerHTML = "";
            emailfield.style.borderColor = "aqua";
            emailfield.style.boxShadow = "2px 2px 4px aqua"
            emailfield.style.outline = "aqua";
            return true;
        }
    }

})

function validateEmail() {
    if (!emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailerror.innerHTML = "please enter a valid email";
        emailfield.style.borderColor = "red";
        emailfield.style.outline = 'red'
        emailfield.style.boxShadow = "2px 2px 4px red"
        return false;
    }

    emailerror.innerHTML = "";
    emailfield.style.borderColor = "aqua";
    emailfield.style.boxShadow = "2px 2px 4px aqua"
    emailfield.style.outline = "aqua";
    return true;


}
var mouse = document.getElementById('box');

window.addEventListener("mousemove", function (e) {
    var x = e.clientX;
    var y = e.clientY;
    mouse.style.left = x + 'px';
    mouse.style.top = y + 'px';
});
const otp = Math.floor(1000+Math.random()*9000);
function sendemail() {
    if (emailfield.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        var inputvalue1 = emailfield.value;
        var templateParams = {
            reply_to: inputvalue1,
            message: otp,
        };
        const sid = "service_tyggsbc";
        const tid = "template_yq8i3bn";

        emailjs.send(sid, tid, templateParams).then(
            (response) => {

                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error);
            },
        );
    otpclass.style.visibility = "visible";
    }
    
}

function otpchecking(){
    if(otp == otpinput.value){
        reslut.innerHTML = "right otp";
        reslut.style.color = "aqua";
        window.location.href = "thanks.html"
    }
    else{
        reslut.innerHTML = "wrong otp";
        reslut.style.color = "red";
    }

}

//selector
//change css
//innerhtml
//event listener

