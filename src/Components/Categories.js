import  styled  from "styled-components";
import { categories } from "../Data"
import CategoryItems from "./CategoryItems";

const Container = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;

`

const Categories = () => {
  return (
    <Container>
      {
        categories.map((item) => {
          return (<CategoryItems item={item} key={item.id} />)
        })
      }

    </Container>
  )
}

export default Categories;
