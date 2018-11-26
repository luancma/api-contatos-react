import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ImageInput from './ImageInput'

class CreateComponent extends Component {
    render(){
        return(
            <div>
            <Link to='/'>
                Back to home
            </Link>
            <form>
                <ImageInput
                    name="avatarURL"
                    maxHeight={64}
                />

                <div>
                    <input type='text' name='name' placeholder='Name' />
                    <input type='text' name='handle' placeholder='Handle' />
                </div>

                <button>Add contact</button> 
            </form>
            </div>
        )
    }
}

export default CreateComponent