import styled from 'styled-components';
import { Button } from '../styled/Button';

const Startgame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="diceimage" srcset="" />
        </div>
        <div className='content'>
            <h1 >
                Dice Game!
            </h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  );
};

export default Startgame;

const Container = styled.div`
   max-width : 1180px;
    display: flex;
    align-items: center;
    height: 100vh;

    .content {
        h1{
            font-size: 96px;
        }

        white-space: nowrap;
        //display: flex;
        //flex-direction: column;
    
}
`;

