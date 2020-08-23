import React, {useState, useContext} from 'react';
import GihubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/AlertContext';


const Search = () => {
    const githubContext = useContext(GihubContext);
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('');
    

    const onSubmit = e => {
        e.preventDefault();
        if (text === ''){
            alertContext.setAlert('Please enter something', 'dark');
        } else {
            
            githubContext.searchUsers(text);
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
                    githubContext.users.length > 0 &&
                    <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>
                }
                
            </div>
        )
}



export default Search
