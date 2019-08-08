var React = require('react');
require('./css/addreview.css');

class AddReview extends React.Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return(
                <form id='add-review' onSubmit={this.handleSubmit}>
                    <input id="movie-field" type="text" required ref="movieName" />
                    <input type="submit" value="Add" />
                </form>
        );
    }

    //custom functions
    handleSubmit(e) {
        e.preventDefault();
        this.props.onAdd(this.refs.movieName.value);
        document.getElementById('movie-field').innerHTML = "";
    }
}

module.exports = AddReview;
