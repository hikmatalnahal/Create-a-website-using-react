import React from 'react';
import '../css/latestnews.css';

import Navpages from '../components/Main/Nav';
import Footerpage from '../components/Main/Footer';
import Latestnewspages from './latestnewspaegs';

class Letestnews extends React.Component {
    render() {
        return (
            <div>
                <Navpages />
                <Latestnewspages />
                <Footerpage />
            </div>

        );
    }
}

export default Letestnews;

