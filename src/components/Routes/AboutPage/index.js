import React, { Component } from 'react'
import './style.css'

class AboutPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div className="container-about-page">
                <h1>About</h1>
                <p>
                    React Weather App
                    created by Dmitriy Leontev
                </p>
            </div>
        );
    }
}

export default AboutPage