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
    {
        username: "guest",
        password: "123",
        permission: "guest"
    },
]

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
    let username = document.querySelector('#userName')
    let password = document.querySelector('#password')
    let user = check_user(username.value, password.value, users);
    console.log(user);
    if(user) {
        window.location.href = "index.html"
    }
}