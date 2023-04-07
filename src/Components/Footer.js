import { GitHub, LinkedIn, Person, Twitter, Room, MailOutline,   PhoneAndroidOutlined } from "@mui/icons-material";
import styled from "styled-components";


const Container = styled.div`
display: flex;
`
const Left = styled.div`
flex:1;
display: flex;
flex-direction:column;
padding: 20px;
`
const Logo = styled.h1`
font-size:24px;
font-weight:bold;
color:teal;
font-style:italic;
cursor: pointer;

`
const Desc = styled.p`
margin:20px 0px;

`
const SocialIcons = styled.div`
display: flex;

`
const Icons = styled.div`

width: 40px;
height: 40px;
border-radius:50%;
color:white;
background-color:#${props => props.color};
display: flex;
align-items:center;
justify-content: center;
margin-right: 20px;
`

const Center = styled.div`
flex:1;
padding: 20px;
`

const Title = styled.h3`
margin-bottom: 30px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style:none;
display: flex;
flex-wrap:wrap;

`
const ListItem = styled.div`
width:50%;
margin-bottom: 10px;

`


const Right = styled.div`
flex:1;
padding: 20px;

`
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ECOMMERCE WEB APP</Logo>
                <Desc>My name is Dipak Mandal. I'm pursuing a Web Development Course from the School of Accelerated Learning. I'm passionate about exploring and learning new things and my goal is to pursue this passion within the field of web development.</Desc>
                <SocialIcons>
                    <Icons color="008080 ">
                        <Person />
                    </Icons>
                    <Icons color="0072b1 ">
                        <LinkedIn />
                    </Icons>
                    <Icons color="171515 ">
                        <GitHub />
                    </Icons>
                    <Icons color="00acee ">
                        <Twitter />
                    </Icons>

                </SocialIcons>


            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{ marginRight: "10px" }} /> Ratua, Malda, West Bengal, India
                </ContactItem>
                <ContactItem>
                    <PhoneAndroidOutlined style={{ marginRight: "10px" }} /> +919734078407
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{ marginRight: "10px" }} /> dipakmandaljio420@gmail.com
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>

        </Container>
    )
}

export default Footer
