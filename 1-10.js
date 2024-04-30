var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function (user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('user info modified');
}

console.log(user.name, user2.name);
console.log(user === user2);