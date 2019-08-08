var React = require('react');
import {Link} from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <div>
                <Link to={'/'}>Home</Link>
                <h3>Details coming soon...</h3>
            </div>
        );
    }
}

module.exports = About;
