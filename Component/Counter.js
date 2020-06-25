import React, { useState } from 'react';
import { Text } from 'react-native';

const Counter = ({ text }) => {
    return (
        <>
            {console.log("re- render")}
            <Text style={localStyle.textStyle}>{text}</Text>
        </>
    );
}

const localStyle = { textStyle: { fontSize: 18, color: 'green' } }

export default React.memo(Counter);
//export default Counter;