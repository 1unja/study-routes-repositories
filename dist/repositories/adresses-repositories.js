"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adressesRepositories = void 0;
const db = {
    courses: [
        { id: 1, name: 'Ilia' },
        { id: 2, name: 'Anya' }
    ],
    adresses: [
        { id: 1, value: 'via luka 23' },
        { id: 2, value: 'via mon 42' }
    ]
};
exports.adressesRepositories = {
    findAdress(value) {
        let foundAdresses = db.adresses;
        if (value) {
            foundAdresses = foundAdresses
                .filter(c => c.value.includes(value));
        }
        return foundAdresses;
    },
    sendAdress(value) {
        if (!value) {
            return 404;
        }
        const newDbValue = {
            value: value,
            id: +(new Date())
        };
        db.adresses.push(newDbValue);
        return 202;
    }
};
