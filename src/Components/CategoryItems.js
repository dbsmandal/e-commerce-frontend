import styled from "styled-components"




const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position: relative;

`
const Image = styled.img`
width:100%;
height:100%;
object-fit:cover;

`
const InfoContainer = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items:center;
flex-direction:column;

`
const Titile = styled.h1`
font-size:24px;
color:white;
margin-bottom:20px;

`
const Button = styled.button`

border:none;
padding: 10px;
background-color:white;
color:gray;
font-weight:600;
cursor:pointer;
border-radius:5px

`


const CategoryItems = ({item}) => {
    console.log(item)
  return (
    <Container>
        <Image src={item.img}/>
        <InfoContainer>
            <Titile>
                {item.title}
            </Titile>
            <Button>SHOP NOW</Button>
        </InfoContainer>
     
    </Container>
  )
}

export default CategoryItems
