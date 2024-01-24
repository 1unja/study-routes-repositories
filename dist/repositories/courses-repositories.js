"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursesRepository = void 0;
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
exports.coursesRepository = {
    findProduct(name) {
        let foundName = db.courses;
        if (name) {
            foundName = foundName
                .filter(c => c.name.includes(name));
        }
        return foundName;
    },
    createProduct(name) {
        if (!name) {
            return 404;
        }
        const homeCreate = {
            id: +(new Date()),
            name: name
        };
        db.courses.push(homeCreate);
        return 201;
    },
    findIdProducts(id) {
        const homeNumber = db.courses.find(c => c.id === Number(id));
        if (!homeNumber) {
            return 404;
        }
        return homeNumber;
    },
    deleteProducts(id) {
        db.courses = db.courses.filter(c => c.id !== id);
        return 204;
    },
    updateProduct(id, name) {
        const homeNumber = db.courses.find(c => c.id === +id);
        if (!homeNumber) {
            return 404;
        }
        homeNumber.name = name;
        return 201;
    }
};
