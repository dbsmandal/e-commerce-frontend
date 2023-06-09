import styled from "styled-components"
import { popularProducts } from "../Data"
import Product from "./Product"

const Container = styled.div`
display: flex;
justify-content:space-between;
padding: 10px;
flex-wrap:wrap;
`
const Products = () => {
    return (
        <Container>
            {
                popularProducts.map((item) => {
                    return (<Product item={item} key={item.id} />)
                })
            }

        </Container>
    )
}

export default Products
