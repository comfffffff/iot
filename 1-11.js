var user = {
    name: 'Jaenam',
    gender: 'male'
};

var changeName = function (user, newName) {
    return {
        name: newName,
        genderr: user.gender
    };
};

var user2 = changeName(user, 'Abracadabra');

if (user !== user2) {
    console.log('user info modified');
}