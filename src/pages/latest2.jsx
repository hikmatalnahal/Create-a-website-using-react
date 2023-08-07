import React from 'react';
import '../css/latest2.css';
import Navpages from '../components/Main/Nav';
import Footerpage from '../components/Main/Footer';
import Latestpages from './Latest2pages';

class Latest extends React.Component {
    render() {
        return (
            <div>
                <Navpages />
                <Latestpages />
                <Footerpage />
            </div>

        );
    }
}
export default Latest;