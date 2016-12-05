import React from 'react';
import NavBar from './../components/nav-bar.js';
import Header from './../components/header.js';
import Footer from './../components/footer.js';
import Team from './../components/section-team.js';
import Service from './../components/section-service.js';

React.render(
    <div style={{width: '100%'}}>
        <NavBar phrase="ES6"/>
        <Service phrase="ES6"/>
        <Team phrase="ES6"/>
        <Footer phrase="ES6"/>
    </div>,
    document.getElementById("main-content")
);