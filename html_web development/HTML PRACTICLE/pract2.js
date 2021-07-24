function fun1() {
    var name = document.getElementById('name').value;

    if (name == isNaN()) { alert("Name should contain Characters only"); }
    if (name == '') {
        alert("Empty field not allowed");
    }

    var roll = document.getElementById('roll').value;
    if (roll == '') {
        alert("Empty field not allowed");
    }




    var email = document.getElementById('email').value;
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return (true)
    }
    else {
        alert("You have entered an invalid email address!")
        return (false)
    }

    var pass = document.getElementById('pass').value;
    if (pass == ' ' && pass.length < 8)
        alert("Invalid input please try to enter value of atleast 8 characters")
    else return true;
    if (pass != cpass)
        alert("Both Passwords differ plz tryb again ");
    else return true;
}