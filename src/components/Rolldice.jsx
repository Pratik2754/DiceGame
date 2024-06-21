
import styled from "styled-components";

const Rolldice = ({currentnum,diceroll}) => {   

  return (
    <Dicecontainer>
    <div className="currentdiceimage" onClick={diceroll}>
        <img src= {`/images/dice_${currentnum}.png`} alt="diceimage" srcset="" />
    </div>
    <p>Click to roll dice</p>
    </Dicecontainer>
  )
}

export default Rolldice

const Dicecontainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 22px;
        font-weight: 700px;
    }

    .currentdiceimage{
        cursor: pointer;
    }
`