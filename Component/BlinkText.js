import React, { useState } from 'react';
import { Text } from 'react-native';

const BlinkText = ({ text }) => {
  const [name, setName] = React.useState('Default Text');
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    if (text && text !== name) {
      setName(text)
      setInterval(()=> setShow(prev => !prev), 1000)
    }
  }, [text])
  return (
    <>
      {show ? <Text style={localStyle.textStyle}>{name}</Text> : null}
    </>
  );
}

const localStyle = { textStyle: { fontSize: 18, color: 'green' } }

export default BlinkText;