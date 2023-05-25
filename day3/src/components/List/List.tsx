import React, {Component} from 'react';
import Card from "../Card/Card";

interface Props {
    bocks: any[];
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
        return this.props.bocks.map(
                    (b, index) => <Card book={b}/>
                );
    }
}

export default List;
