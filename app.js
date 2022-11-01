"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');
class UserService {
    getUsersInDatabase() {
        return this.users;
    }
    setUsersInDatabase(num) {
        this.users = num;
    }
}
__decorate([
    Validate(),
    __param(0, Positive()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserService.prototype, "setUsersInDatabase", null);
function Positive() {
    return (target, propertyKey, parameterIndex) => {
        var _a;
        console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));
        console.log(Reflect.getOwnMetadata('design:returntypes', target, propertyKey));
        let existingParams = (_a = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey)) !== null && _a !== void 0 ? _a : [];
        existingParams.push(parameterIndex);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existingParams, target, propertyKey);
    };
}
function Validate() {
    return (target, propertyKey, descriptor) => {
        let method = descriptor.value;
        descriptor.value = (...args) => {
            const positiveParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
            if (positiveParams) {
                for (const positiveParam of positiveParams) {
                    if (args[positiveParam] < 0) {
                        throw new Error('Number must be positive number or zero.');
                    }
                }
            }
            return method === null || method === void 0 ? void 0 : method.apply(target, args);
        };
    };
}
const usersService = new UserService();
usersService.setUsersInDatabase(-15);
