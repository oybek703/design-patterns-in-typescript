"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserService {
    getUsersInDatabase() {
        throw new Error('Some "getUsersInDatabase" error!');
    }
}
__decorate([
    Log()
], UserService.prototype, "getUsersInDatabase", null);
function Log(reThrow = false) {
    return (target, propertyKey, descriptor) => {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
        descriptor.enumerable = true;
        const oldFunc = descriptor.value;
        descriptor.value = (...args) => {
            try {
                if (oldFunc) {
                    oldFunc(args);
                }
            }
            catch (e) {
                console.error(`Error occurred in ${propertyKey}`);
                if (reThrow) {
                    if (e instanceof Error) {
                        throw new Error(e.message);
                    }
                }
            }
        };
    };
}
const usersService = new UserService();
usersService.getUsersInDatabase();
console.log(Object.keys(usersService));
