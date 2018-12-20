var a = 2;
foo();

function foo() {
    a = 3;
    console.log(a);
    var a;
}

console.log(a);

// closure
function makeAdder(x) {
    function add(y) {
        return y + x;
    }

    return add;
}

var plusOne = makeAdder(1);
console.log(plusOne(3));
console.log(plusOne(41));

// modules
function User() {
    var username , password;

    function doLogin(user, pw) {
        username = user;
        password = pw;
    }

    var publicAPI = {
        login: doLogin
    };

    return publicAPI;
}

var fred = User();
fred.login("fred", "abc");