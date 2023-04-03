import styled from "styled-components"

const Container=styled.div`
height:30px;
background-color:teal;
color:wheat;
display:flex;
justify-content:center;
align-items:center;
font-size:14px;
font-weight:bold
`

const Anousment = () => {
  return (
    <Container>Super Deal! Free Delivery for purchase any two</Container>
  )
}

export default Anousment
