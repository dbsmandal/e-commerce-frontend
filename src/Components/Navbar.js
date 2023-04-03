import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import React from 'react';
import styled from 'styled-components';



const Container = styled.div`
    height:60px;

`
const Wrapper = styled.div`
padding:2px 20px;
margin-top:-10px;
display:flex;
justify-content:space-between;
align-items:center;

`
const Left = styled.div`
display:flex;
text-align:center;
flex:1;

`
const Language = styled.span`
font-size:14px;
cursor:pointer
`
const SearchContainer = styled.div`
 display:flex;
 border: 0.5px solid lightgray;
 margin-left:25px;
 padding:0px 5px;


`
const Input = styled.input`
border:none
`

const Center = styled.div`
text-align:center;
flex:1;

`
const Logo = styled.h1`
font-size:24px;
font-weight:bold

`

const Right = styled.div`
flex:1;
display: flex;
align-items:center;
justify-content:flex-end;

`
const MenuItem = styled.div`
    cursor: pointer;
    margin-left:25px;
`


const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{color:"gray", fontSize:16}} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>E-COMMERCE-WEB-APP</Logo>
                </Center>
                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Log In</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined  />
                        </Badge>
                    </MenuItem>

                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
