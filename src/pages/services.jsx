import React from 'react';
import '../css/latestnews.css';

import Navpages from '../components/Main/Nav';
import Footerpage from '../components/Main/Footer';
import Servicespage from './servicespages';
class Services extends React.Component {

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










