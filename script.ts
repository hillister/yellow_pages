interface Contact {
    name: string;
    email: string;
    phone: string;
    category: string;
};

const contacts: Contact[] = [
    { name: "Nina Grey", email: "nina@example.com", phone: "123456", category: "Friends" },
    { name: "Bob Smith", email: "bob@work.com", phone: "987654", category: "Work" },
    { name: "Alice Zee", email: "alice@cool.com", phone: "111222", category: "Others" }
  ];

  function renderContact() {
    const container = document.querySelector(".container")
    contacts.forEach(contact => {
        let p = document.createElement('p')
        p.innerHTML = contact.name;
        container?.appendChild(p)
    });
  }

  renderContact()