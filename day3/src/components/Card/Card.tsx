import React, {Component} from 'react';
import Book from '../../models/bookModel';
import './Card.css';

interface Props {
    book: Book;
}

class Card extends Component<Props, any> {

    render() {
        return <div className='Card'>
            <strong>Title: {this.props.book.title}</strong>
            <br/>
            {this.props.book.author} - {this.props.book.publisher}
        </div>;
    }
}

export default Card;
