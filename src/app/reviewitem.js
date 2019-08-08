var React = require('react');
require('./css/reviewitem.css');

// create ReviewItem component
class ReviewItem extends React.Component {
    constructor(props){
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    render() {
        return(
            <li>
                <div className='review-item'>
                    <span className="item-name">{this.props.item}</span>
                    <span className="item-delete" onClick={this.handleDelete.bind(this)}> x </span>
                </div>
            </li>
        );
    }

    // custom functions
    handleDelete() {
        this.props.onDelete(this.props.item);
        console.log(this.props.item, "deleted from reviews list.");
    }
}

module.exports = ReviewItem;
