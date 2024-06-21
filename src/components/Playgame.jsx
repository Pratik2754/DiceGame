import Numberselector from "./Numberselector"
import Rolldice from "./Rolldice"
import Totalscore from "./Totalscore"
import styled from "styled-components"
import { useState } from "react"
import { Button } from "../styled/Button"
import { OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const Playgame = () => {
    const [currentnum, setcurrentnum] = useState(1);
    const [selectednumber, setselectednumber] = useState();
    const [score,setscore]= useState(0);
    const [showRules, setShowRules] = useState(false);

    const getRandomInt = (min, max)=> {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    const resetscore = ()=>{
        setscore(0)
    }

    const diceroll= ()=>{
        const randomnum = getRandomInt(1,7);
        setcurrentnum(randomnum)
    
        if(!selectednumber){
            alert("NUMBER SELECT KARO PEHLE!!");
            return
        }

    if(selectednumber==randomnum){
        setscore(score+randomnum)
    }else{
        setscore(score-randomnum)
    }
    setselectednumber(undefined)
}

  return (
    <Maincontainer>

    <div className="top-section">
        <Totalscore score={score}/>
        <Numberselector selectednumber={selectednumber} setselectednumber={setselectednumber}/>
    </div>
    <Rolldice currentnum={currentnum} diceroll={diceroll}/>
    <div className="btns">
        <OutlineButton onClick={resetscore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>{showRules ? "Hide" : "Show"} Rules</Button>
    </div>
    {showRules && <Rules />}
    </Maincontainer>
  )
}

export default Playgame

const Maincontainer = styled.main`
    padding-top: 70px;

    .top-section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }

    .btns{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }


`