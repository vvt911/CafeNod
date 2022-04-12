let users = [
    {
        username: "admin",
        password: "123",
        permission: "admin"
    },
    {
        username: "admin1",
        password: "456",
        permission: "admin"
    },
]
if (!window.localStorage.usersAcc) {
    window.localStorage.setItem('usersAcc', JSON.stringify(users));
}

function check_user(username, password, users) {
    for (let i in users) {
        if (users[i].username == username && users[i].password == password) {
            return users[i];
        }
    }
    return false;
}

let loginBtn = document.querySelector('.login-btn')

loginBtn.onclick = function() {
    let usersAcc = JSON.parse(window.localStorage.usersAcc)

    let username = document.querySelector('#userName')
    let password = document.querySelector('#password')

    let user = check_user(username.value, password.value, usersAcc);
    if (username.value == '') {
        alert("Please enter your username!")
    } else if (password.value == '') {
        alert("Please enter your password!")
    } else if (user == false) {
        alert("Account does not exist!")
    } else if (user.permission == "admin"){
        window.location.href = "admin/index.html"
    }
}