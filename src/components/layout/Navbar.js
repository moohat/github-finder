import React, { Component } from 'react';


class Navbar extends Component {

    static defaultProps = {
        title: "Github Finder App",
        icon:"fab fa-github"
    }
    render() {
        return (
            <nav className="navbar bg-primary">
                <h3>
                    <i className={this.props.icon} /> {this.props.title}
                </h3>
            </nav>
        )
    }
}

export default Navbar
