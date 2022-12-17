import styled from 'styled-components'

export const InputBar = styled.div`
width:100%;
height:80px;
bottom:0px;
left:${props => (props.currCondition ? props.pos:100)}%;
transition: left 2s ease-in-out, right 2s ease-in-out;
position:absolute;
background-color:#f6f8face;
`