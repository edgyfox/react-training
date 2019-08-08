var React = require('react');
var ReactDOM = require('react-dom');
import {browserhistory, BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

// modules
var ReviewItem = require('./reviewitem');
var AddReview = require('./addreview');
var About = require('./about');

// css
require('./css/index.css');

// router setup
class App extends React.Component {
    render() {
        return(
            <Router history={browserhistory}>
                <Route exact path={'/'} component={ReviewComponent}></Route>
                <Route path={'/about'} component={About}></Route>
            </Router>
        );
    }
}

// create ReviewComponent
class ReviewComponent extends React.Component {

    // initiate
    constructor(props) {
        super(props);
        this.state = {
            movies: ['The Aviator', 'Gravity', 'Children of Men', 'Roma']
        }
    }

    // render
    render() {

        var movies = this.state.movies;
        movies = movies.map(function(item, index) {
            return (
                <ReviewItem item={item} key={index} onDelete={this.onDelete.bind(this)}/>
            )
        }.bind(this));

        return(
            <div id='review-list'>
                <Link to={'/about'}>About</Link>
                <h3>
                    Catch up with the following movies
                </h3>
                <ul>{movies}</ul>
                <AddReview onAdd={this.onAdd.bind(this)}/>
            </div>
        );
    }

    // custom functions
    onDelete(item) {
        var newMovies = [];
        this.state.movies.forEach(function(movie, index){
            if(movie !== item){
                newMovies.push(movie);
            }
        });
        this.setState({
            movies: newMovies
        });
    }
    onAdd(item) {
        var newMovies = this.state.movies;
        newMovies.push(item);
        this.setState({
            movies: newMovies
        });
    }

    // lifecycle functions
    componentWillMount() {
        console.log('Component will mount.');
    }
    componentDidMount() {
        console.log('Component did mount.');
    }
    componentWillUpdate() {
        console.log('Component will update.');
    }
    componentDidUpdate() {
        console.log('Component did update.');
    }
};

// put the component in html page
ReactDOM.render(<App />, document.getElementById('review-wrapper'));
