import styled from 'styled-components'
import { Button } from '@material-ui/core'
export const Header=styled.header`
background-color:red;
height:5rem;
display:flex;
flex-direction:row;
justify-content:space-between;
` 

export const Headings=styled.ul`
color:white;
`

export const Link=styled.div`
color:white;
margin:20px;
`

export const LogoutBtn=styled(Button)`
color:white;
`