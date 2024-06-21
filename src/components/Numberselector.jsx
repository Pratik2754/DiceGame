import styled from 'styled-components';
import { useState } from 'react';

const Numberselector = ({selectednumber,setselectednumber}) => {

    const numberArr= [1,2,3,4,5,6];

    

  return (
    <NumSelectorContainer>
      <div className="numbers">
      {numberArr.map((value,i)=>( <Box isSelected= {value == selectednumber} key={i} onClick={()=> setselectednumber(value)}>{value}</Box> ))}  
      {/* when we need to pass some value in the function used in 'omclick' we need to wrap it in an anonymous function like above */}
      </div>
      <p>Select Number</p>
    </NumSelectorContainer>
  )
}

export default Numberselector

const NumSelectorContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    .numbers{
        display: flex;
        gap: 24px;
    }
    p{
        font-size: 24px;
        font-weight: 700px;
    }
`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props) => (props.isSelected ? 'black':'white')};
    color: ${(props) => (props.isSelected ? 'white':'black')};
    cursor: pointer;
`