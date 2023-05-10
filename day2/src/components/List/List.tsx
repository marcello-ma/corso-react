import React, {Component} from 'react';
import Card from '../Card/Card';

interface Props {
    books: any[];
}

class List extends Component<Props, any> {

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        return this.props.books.map(
                    (book, index) => <Card book={book}/>
                );
    }
}

export default List;