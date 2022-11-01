"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        throw new Error('Some "getUsersInDatabase" error!');
    }
}
__decorate([
    Max(100)
], UserService.prototype, "users", void 0);
__decorate([
    Log({ reThrow: true })
], UserService.prototype, "getUsersInDatabase", null);
function Max(max) {
    return (target, propertyKey) => {
        let value;
        const setter = (newValue) => newValue > max ? console.log(`Cannot set value more than ${max}`) : value = newValue;
        const getter = () => value;
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
const userService = new UserService();
userService.users = 20;
console.log(userService.users);
function Log({ reThrow } = { reThrow: false }) {
    return (target, propertyKey, descriptor) => {
        descriptor.enumerable = true;
        const oldFunc = descriptor.value;
        descriptor.value = (...args) => __awaiter(this, void 0, void 0, function* () {
            try {
                return yield (oldFunc === null || oldFunc === void 0 ? void 0 : oldFunc.apply(target, args));
            }
            catch (e) {
                console.error(`Error occurred in ${propertyKey}`);
                if (reThrow) {
                    throw e;
                }
            }
        });
    };
}
