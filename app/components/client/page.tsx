'use client';


import { useState } from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding:  0.5rem 1rem;
  border: 2 px;
  color: black;
`;

const StyledInput = styled.input`
  margin:  0.5rem;
  padding:  0.5rem;
  border: 1px solid ;
`;

const StyledDiv = styled.div`
display: flex;
flex-direction:column;
align-item: center;
justify-content:center;
padding:1 rem;
`

export default function MainPage() {
  const [zip, setZip] = useState('');
  const [country, setCountry] = useState('');
  const [result, setResult] = useState(null);

  const onClick = async (e) => {
    e.preventDefault();
    try { const res = await fetch('/api/getWeatherData', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ zip, country }),
      });
        const data = await res.json();
        setResult(data);
    } catch (error) {
        console.error(error);
    }
  };

  return (
    <StyledDiv>
        <StyledInput type="text"  placeholder="zip"  value={zip}  onChange={(e) => setZip(e.target.value)}
        />
        <StyledInput type="text"  placeholder="country code" value={country} onChange={(e) => setCountry(e.target.value)}
        />
        <StyledButton onClick={onClick}>Get the weather ! </StyledButton>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </StyledDiv>
  );
}
