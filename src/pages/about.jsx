import React from 'react';
import '../css/about.css';
import Navpages from '../components/Main/Nav';
import Footerpage from '../components/Main/Footer';
import Aboutpages from './aboutPages';
class About extends React.Component {
    render() {
        return (
            <div>
                <Navpages />
                <Aboutpages />
                <Footerpage />
            </div>
        );
    }
}
export default About;