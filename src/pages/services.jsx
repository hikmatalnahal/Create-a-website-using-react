<<<<<<< HEAD
import React from 'react';
import '../css/latestnews.css';

import Navpages from '../components/Main/Nav';
import Footerpage from '../components/Main/Footer';
import Servicespage from './servicespages';
class Services extends React.Component {
    toggleInfo(e) {
        const customText = e.target.parentNode.querySelector('.custom-text');
        const buttonText = e.target.parentNode.querySelector('.read-more-button');

        if (customText.style.display === 'none') {
            customText.style.display = 'block';
            buttonText.textContent = 'Learn Less <';
        } else {
            customText.style.display = "none";
            buttonText.textContent = "Learn More > ";
        }
    }
    render() {
        return (
            <div>
                <Navpages />
                <Servicespage />
                <Footerpage />
            </div>

        );
    }
}

export default Services;












=======
import React from 'react';
import '../css/latestnews.css';

import Navpages from '../components/Main/Nav';
import Footerpage from '../components/Main/Footer';
import Servicespage from './servicespages';
class Services extends React.Component {
    toggleInfo(e) {
        const customText = e.target.parentNode.querySelector('.custom-text');
        const buttonText = e.target.parentNode.querySelector('.read-more-button');

        if (customText.style.display === 'none') {
            customText.style.display = 'block';
            buttonText.textContent = 'Learn Less <';
        } else {
            customText.style.display = "none";
            buttonText.textContent = "Learn More > ";
        }
    }
    render() {
        return (
            <div>
                <Navpages />
                <Servicespage />
                <Footerpage />
            </div>

        );
    }
}

export default Services;












>>>>>>> origin/main
