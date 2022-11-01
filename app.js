"use strict";
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
}
function nullUsers(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('Users: ', obj.users);
    return obj;
}
console.log(new UserService().getUsersInDatabase());
console.log(nullUsers(new UserService()).getUsersInDatabase());
logUsers(nullUsers(new UserService())).getUsersInDatabase();
