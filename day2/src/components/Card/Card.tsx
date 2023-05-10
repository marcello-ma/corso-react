import React, {Component} from 'react';
import './Card.css'

interface Book {
    id: number;
    title: string;
    author: string;
    publisher: string;
    language: string;
    available: boolean;
}

interface Props {
    book: Book;
}

class Card extends Component<Props, any> {

    render() {
        return <div className='Card'>
            <strong>Title: {this.props.book.title}</strong>
            <br/>
            {this.props.book.author} - {this.props.book.publisher}
        </div>
    }

}

export default Card;