import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {

    state = {
        users:[
            {
                id: 7399302,
                login: "moohat",
                avatar_url: "https://avatars2.githubusercontent.com/u/7399302?v=4",
                html_url: "https://github.com/moohat",
            },
            {
                id: 55258089,
                login: "rizalnj",
                avatar_url: "https://avatars1.githubusercontent.com/u/55258089?v=4",
                html_url: "https://github.com/rizalnj",
            },
            {
                id: 3,
                login: "pjhyett",
                avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
                html_url: "https://github.com/pjhyett",
            }
        ]
    }
    render() {
        // this.state.users.map(user => {
        //     console.log(user.login);
        // })
        return (
            <div style={userStyle}>
                {this.state.users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))
                
                }
                
            </div>
        )
    }
}
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
