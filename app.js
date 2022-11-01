"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @threeUsers
// @nullUsers
let UserService = 
// @setUsersAdvanced(300)
class UserService {
    getUsersInDatabase() {
        return this.users;
    }
};
UserService = __decorate([
    logUsers(),
    setUsers(10)
    // @setUsersAdvanced(300)
], UserService);
function logUsers() {
    console.log('logUsers => init');
    return (target) => {
        console.log('logUsers => run');
        console.log('Users: ', target.prototype.users);
    };
}
function nullUsers(target) {
    target.prototype.users = 0;
}
function setUsers(users) {
    console.log('setUsers => init');
    return (target) => {
        console.log('setUsers => run');
        target.prototype.users = users;
    };
}
function setUsersAdvanced(users) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
function threeUsers(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 3;
        }
    };
}
console.log(new UserService().getUsersInDatabase());
