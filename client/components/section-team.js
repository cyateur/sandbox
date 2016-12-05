import React from 'react';

class Team extends React.Component {
    render() {
        return <section id="team" className="bg-light-gray">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4">
                        <div className="team-member">
                            <img src="./images/team/felix_bait.jpg" className="img-responsive img-circle" alt=""/>
                            <h4>Felix</h4>
                            <p className="text-muted">Application Developper</p>
                            <ul className="list-inline social-buttons">
                                <li><a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li><a href="#"><i className="fa fa-linkedin"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>
        </section>;
    }
}

export default Team;