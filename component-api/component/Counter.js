import React, { Component } from 'react';
import { Text } from 'react-native';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);
    }

    render() {
        const { count } = this.state;
        const { color, size } = this.props;
        return (
            <Text style={{color, fontSize: size}}>
                {count}
            </Text>
        );
    }
}

export default Counter;