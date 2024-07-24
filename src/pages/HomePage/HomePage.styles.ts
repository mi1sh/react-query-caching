import styled from 'styled-components';

export const CountryList = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	grid-column-gap: 1em;
	grid-row-gap: 1em;
`

export const CountryCard = styled.li`
	border: 2px dashed #cccffd;
	border-radius: 20px;
	align-items: center;
	width: 70%;
	justify-content: center;
	display: flex;
	gap: 0.3em;
	
`