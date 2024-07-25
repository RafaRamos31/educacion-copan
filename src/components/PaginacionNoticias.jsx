import { useEffect, useState } from "react";
import { Container, Pagination } from "react-bootstrap";

export const PaginacionNoticias = ({page, total=5, setFilter, searching}) => {

  const [index, setIndex] = useState(page + 1);

  useEffect(() => {
    setFilter(f => ({...f, page: index-1}));
  }, [index, setIndex, setFilter])

  const pages = Math.ceil(total/5);
  let numbers = [1, 2, 3, 4, 5];

  if(index>3){
    numbers = [index-2, index-1, index, index+1, index+2]
  }

  if(index>(pages-2)){
    numbers = [pages-4, pages-3, pages-2, pages-1, pages]
  }

  if(pages<=5){
    numbers = [1, 2, 3, 4, 5];
  }

  if(searching){
    return (
      <Container fluid className="d-flex mt-3">
        <Pagination>
          <Pagination.First disabled/>
          <Pagination.Prev disabled/>
          <Pagination.Item active >{1}</Pagination.Item>
          <Pagination.Item disabled >{2}</Pagination.Item>
          <Pagination.Item disabled >{3}</Pagination.Item>
          <Pagination.Item disabled >{4}</Pagination.Item>
          <Pagination.Item disabled >{5}</Pagination.Item>
          <Pagination.Next disabled/>
          <Pagination.Last disabled/>
        </Pagination>
      </Container>
    );
  }

  return (
    <Container fluid className="d-flex mt-3">
      <Pagination>
        <Pagination.First disabled={ index === 1 } onClick={() => setIndex(1)}/>
        <Pagination.Prev disabled={ index === 1 } onClick={() => setIndex(index-1)}/>
        <Pagination.Item active={numbers[0] === index} onClick={() => setIndex(numbers[0])}>{numbers[0]}</Pagination.Item>
        <Pagination.Item active={numbers[1] === index} onClick={() => setIndex(numbers[1])} disabled={pages<2}>{numbers[1]}</Pagination.Item>
        <Pagination.Item active={numbers[2] === index} onClick={() => setIndex(numbers[2])} disabled={pages<3}>{numbers[2]}</Pagination.Item>
        <Pagination.Item active={numbers[3] === index} onClick={() => setIndex(numbers[3])} disabled={pages<4}>{numbers[3]}</Pagination.Item>
        <Pagination.Item active={numbers[4] === index} onClick={() => setIndex(numbers[4])} disabled={pages<5}>{numbers[4]}</Pagination.Item>
        <Pagination.Next disabled={ index === pages || total === 0 } onClick={() => setIndex(index + 1)}/>
        <Pagination.Last disabled={ index === pages || total === 0 } onClick={() => setIndex(pages)}/>
      </Pagination>
    </Container>
  );
};
