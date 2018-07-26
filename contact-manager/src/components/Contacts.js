import React, { Component } from 'react'
import Contact from './Contact'

class Contacts extends Component {

  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'Greg Ladden',
          email: 'greg@gmail.com',
          phone: '333-444-5555'
        },
        {
          id: 2,
          name: 'Erica Ladden',
          email: 'Erica@gmail.com',
          phone: '111-444-5555'
        },
        {
          id: 3,
          name: 'Dad Ladden',
          email: 'dad@gmail.com',
          phone: '222-444-5555'
        }
      ]
    }
  }
  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />
        ))}
      </div>
    )
  }
}

export default Contacts;
