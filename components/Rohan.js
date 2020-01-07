import React from 'react';
import {Button} from 'react-native';
const Rohan = props => {
  return (
    <Button
      title="Awesome"
      onPress={() => {
        props.history.push(`/completed/${props.match.params.completedId}`);
      }}
    />
  );
};

export default Rohan;
