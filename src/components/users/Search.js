import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Search = ({searchUsers, showClear, clearUsers, setAlert}) => {

    const [text, setText] = useState('');
    

    const onSubmit = e => {
        e.preventDefault();
        if (text === ''){
            setAlert('Please enter something', 'light');
        } else {
            
            searchUsers(text);
            setText('');
        }

    }
    
    //! onchange using class
    // const onChange = (e) => this.setState({
    //     [e.target.name]: e.target.value
    // });

    //onchange using hooks
    const onChange = (e) => setText(e.target.value);
    
        return (
            <div>
                <form  onSubmit={onSubmit} className="form">
                    <input
                        type="text"
                        name="text"
                        placeholder="Search User..."
                        value={text}
                        onChange={onChange}
                    />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
                {/* show button clear if data listed */}

                {
                    showClear &&
                    <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button>
                }
                
            </div>
        )
}


Search.proptTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search
