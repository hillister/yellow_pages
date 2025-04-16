"use strict";
;
const contacts = [
    { name: "Nina Grey", email: "nina@example.com", phone: "123456", category: "Friends" },
    { name: "Bob Smith", email: "bob@work.com", phone: "987654", category: "Work" },
    { name: "Alice Zee", email: "alice@cool.com", phone: "111222", category: "Others" }
];
function renderContact() {
    const container = document.querySelector(".container");
    let categories = {};
    contacts.forEach(contact => {
        if (!categories[contact.category]) {
            categories[contact.category] = [];
        }
        categories[contact.category].push(contact);
    });
    console.log(categories);
    contacts.forEach(contact => {
        let p = document.createElement('p');
        p.innerHTML = contact.name;
        container === null || container === void 0 ? void 0 : container.appendChild(p);
    });
}
renderContact();
