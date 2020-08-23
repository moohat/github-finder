import React from 'react';
import { Link } from 'react-router-dom';


const UserItem = ({ user: {login, avatar_url, html_url} }) => {

    
        // const { login, avatar_url, html_url } = props.user;
        return (
            <div className="card text-center">
                <img
                    src={avatar_url}
                    className="round-img"
                    alt=""
                    style={{width:'60px'}}
                />
                    <h3>{login}</h3>
                <div>
                    <Link
                        to={`/user/${login}`}
                        // href={html_url}
                        // target="_blank"
                        // rel="noopener noreferrer"
                        className="btn btn-dark btn-sm my-1">More</Link>
                </div>
            </div>
        )
}


export default UserItem
