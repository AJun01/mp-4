'use client';


import Link from 'next/link';
import styled from 'styled-components';

const links = [
    {
        name: 'Client',
        href: '/components/client',
    },
    {
        name: 'About',
        href: '/components/about',
    }
];

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin: 2px;
    border-radius: 13%;
    background-color: #c3cfe2;
`


const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export default function NaviLinks() {

    return (
     <>
        {
            links.map((link)=> 
                <StyledDiv key={link.name}>
                    <StyledLink href= {link.href}>
                        <span>{link.name}</span>
                    </StyledLink>
                </StyledDiv>

            )
        }
     </>
    );
  }
  