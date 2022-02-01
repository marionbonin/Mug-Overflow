import * as React from 'react';
import RadioButtonGroup from 'react-custom-radio-buttons-group';

export default function ColorRadioButtons() {
  
  const handleChange = (e)=>{
    doSomething(e.target.value)

  return (
      <RadioButtonGroup
      onChange={handleChange}
      hide={false}
      values={["Blue","Green","Red"]}
      />
  );
}
}
