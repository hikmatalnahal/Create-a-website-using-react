import React from 'react';
import '../css/ConactUs.css';
import Navpages from '../components/Main/Nav';
import Footerpage from '../components/Main/Footer';
import ConactUspage from './ConactUsPages';

class ConactUs extends React.Component {
    render() {
        return (
            <div>

                <Navpages />
                <ConactUspage />
                <Footerpage />

            </div>

        );
    }
}
export default ConactUs;


