import React, { useState } from 'react';
import { Button } from 'react-native';
import Counter from './Counter';

const Memozied = ({ }) => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    increaseCounter = () => {
        setCount1(count1 => count1 + 1)
    }
    return (
        <>
            <Button title={'IncreaseCounter'} onPress={() => this.increaseCounter()} />
            <Counter text={count1} />
            <Counter text={count2} />
        </>
    );
}


export default Memozied;