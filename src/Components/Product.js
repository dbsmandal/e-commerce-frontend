import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const InfoContainer = styled.div`

height:100%;
width: 100%;
position:absolute;
top:0;
left: 0;
display: flex;
align-items:center;
justify-content: center;
background-color:rgba(0,0,0,0.2);
opacity:0;
z-index:3;
transition:all 0.5s ease;
cursor: pointer;
`

const Container = styled.div`
display: flex;
position:relative;
flex:1;
justify-content: center;
align-items:center;
min-width:280px;
height: 350px;
margin:5px;
background-color:#f5fbfd;

&:hover ${InfoContainer}{
    opacity:1;
}

`
const Circle = styled.div`
height: 200px;
width: 200px;
border-radius:50%;
background-color:white;
position:absolute;


`
const Image = styled.img`
height:75%;
z-index:2;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius:50%;
display: flex;
justify-content: center;
align-items:center;
background-color:white;
margin:10px;
transition:all 0.5s ease;
& :hover{
    background-color: #e9f5f5;
    transform:scale(1.1)
}

`


const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <InfoContainer>
                <Icon>
                <ShoppingCartIcon />
                </Icon>
                <Icon>
                <SearchIcon />
                </Icon>
                <Icon>
                    <FavoriteBorderIcon />
                </Icon>
            </InfoContainer>
        </Container>
    )
}

export default Product
