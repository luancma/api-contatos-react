import React, {Component} from 'react';

class ListContacts extends Component {

    state = {
        query : ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query:query.trim()
        }))
    }
    render(){

        const { query } = this.state
        const { contacts } = this.props

        return (
            <div>
                <div className='contact-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <ol className='contact-list'>
                    {contacts.map((contact) => (
                        <li key={contact.id}>
                            <img src={contact.avatarURL} height="60" width="60" />
                            <p>{contact.name}</p>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}
export default ListContacts;
