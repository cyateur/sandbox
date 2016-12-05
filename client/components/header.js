import React from 'react';
import ReactDOM from 'react-dom'

class Header extends React.Component {
    render() {
        return <header>
            <div className="container">
                <div className="intro-text">
                    <div className="intro-lead-in">Welcome To Codela!</div>
                    <div className="intro-heading">Works with you</div>
                    <a href="#services" className="page-scroll btn btn-xl">Tell Me More</a>
                </div>
            </div>
        </header>;
    }
}

export default Header;