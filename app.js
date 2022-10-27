"use strict";
class Data {
}
const data = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'a' },
    { group: 1, name: 'c' },
    { group: 3, name: 'a' },
    { group: 2, name: 'b' }
];
function groupData(data, key) {
    const res = {};
    data.forEach(value => {
        const resKey = value[key];
        if (!res[resKey]) {
            res[resKey] = [];
            res[resKey].push(value);
        }
        else {
            res[resKey].push(value);
        }
    });
    return res;
}
console.log(groupData(data, 'group'));
console.log(groupData(data, 'name'));
