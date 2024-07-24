import styled from "styled-components"

export const Header = styled.nav`
    position: fixed;
	margin: 0;
	display: flex;
	justify-content: space-around;
	gap: 50%;
    background-color: #242424;
    left: 0;
    width: 100vw;
    top: 0;
`

export const NavList = styled.ul`
    display: flex;
	width: auto;
    gap: 1em;
    list-style: none;
`

export const Title = styled.p`
	font-size: 1.3em;	
	width: auto;
	font-weight: bold;
	color: gainsboro;
`