var showUsers = (users) => {
    for ( var i=0; i<users.length; i++){
        console.log("Login: " + users[i].login);
    }
}

exports.showUsers = showUsers;