import styled from 'styled-components';

const StyledDiv = styled.div`
   text-align: center;
   padding: 2rem;
   background: linear-gradient(135deg, #f5f7fa, #c3cfe2);
  min-height: 30vh;
 `
 
 const StyledWelcome = styled.h1`
   font-size: 3rem;
   margin-bottom: 1rem;
   color: #333;
 `
 
 const StyledSpan = styled.span`
   font-size: 1.5rem;
 `


export default function welcome() {
    return (
     <StyledDiv><StyledWelcome>Welcome! </StyledWelcome><br></br><StyledSpan>Here are two links, one for about, one for getting weather data from Openweather API</StyledSpan>
     </StyledDiv>
    );
  }
  