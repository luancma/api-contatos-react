import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts : []
  }
  componentDidMount(){
    ContactsAPI.getAll()
    .then((contacts) => {
      this.setState(() => ({
        contacts
      }))
    })
  }
  

  render() {
    return (
      <div className="container">
        <header>
          <title>Usuários</title>
        </header>
        
        <ListContacts contacts={this.state.contacts} />
      </div>
    );
  }
}
export default App;
