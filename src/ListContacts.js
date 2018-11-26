import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class ListContacts extends Component {

    // Componente controlado: 
    //Componente que renderiza um formulário quando a fonte da verdade está presente no próprio componente.

    state = {
        query : ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query:query.trim()
        }))
    }
    render(){

        //Destructor nos 'objetos' quey e contacts
        const { query } = this.state
        const { contacts } = this.props

        // Método que será esponsável 
        const showContacts = query == '' 
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLocaleLowerCase())
            ))



    return (
        <div className='list-contacts'>
            <div className='list-contacts-top'>
          {/* Input onde receberá onde será mudado o valor da query, por meio do método updateQuery*/}
                <input
                className='search-contacts'
                type='text'
                placeholder='Search Contacts'
                value={query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />
            </div>
        
            {showContacts.length !== contacts.length && (
                <div>
                    Contatos diferente de show contact
                </div>
            )}

          <ol className='contact-list'>
          {/* Será mapeado novamente a cada nova entrada de valor que o input receber, pois o valor da'quety' está sendo atualizado */}
            {showContacts.map((contact) => (
              <li key={contact.id} className='contact-list-item'>
                <div className='contact-details'>
                  <p>{contact.name}</p>
                  <p>{contact.handle}</p>
                </div>

                <div>
                    <button onClick= {() => this.props.onDeleteContact(contact)}>
                        Remover contact
                    </button>
                </div>
              </li>
            ))}
          </ol>
                
     
        <Link to='/create'>
            Criar contato 
        </Link>
 
        </div>
      )
    }
  }

export default ListContacts;
