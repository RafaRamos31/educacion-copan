import { Container, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";

export const PaginacionRecursos = ({setValues, tipo, index, totaldocs}) => {
  const toggle = (i) => {
    setValues(v => ({...v, page: i-1}))
  }

  const [pages, setPages] = useState(1);

  const [entradas, setEntradas] = useState(6)
  useEffect(() => {
    if(tipo === 'Documento'){
      setEntradas(6)
    }
    else{
      setEntradas(9)
    }
  }, [tipo])

  useEffect(() => {
    if(totaldocs){
      let totalPages = Math.ceil(totaldocs/entradas);
      setPages(totalPages);
    }
  }, [totaldocs, entradas])
  
  const total = pages;
  let numbers = [1, 2, 3, 4, 5];

  if(index>3){
    numbers = [index-2, index-1, index, index+1, index+2]
  }

  if(index>(total-2)){
    numbers = [total-4, total-3, total-2, total-1, total]
  }

  if(total<=5){
    numbers = [1, 2, 3, 4, 5];
  }

  return (
    <Container fluid className="d-flex mt-3 justify-content-center align-items-center">
      <Pagination>
        <Pagination.First disabled={ index === 1 } onClick={() => toggle(1)}/>
        <Pagination.Prev disabled={ index === 1 } onClick={() => toggle(index-1)}/>
        <Pagination.Item active={numbers[0] === index} onClick={() => toggle(numbers[0])}>{numbers[0]}</Pagination.Item>
        <Pagination.Item active={numbers[1] === index} onClick={() => toggle(numbers[1])} disabled={total<2}>{numbers[1]}</Pagination.Item>
        <Pagination.Item active={numbers[2] === index} onClick={() => toggle(numbers[2])} disabled={total<3}>{numbers[2]}</Pagination.Item>
        <Pagination.Item active={numbers[3] === index} onClick={() => toggle(numbers[3])} disabled={total<4}>{numbers[3]}</Pagination.Item>
        <Pagination.Item active={numbers[4] === index} onClick={() => toggle(numbers[4])} disabled={total<5}>{numbers[4]}</Pagination.Item>
        <Pagination.Next disabled={ index === total } onClick={() => toggle(index + 1)}/>
        <Pagination.Last disabled={ index === total } onClick={() => toggle(total)}/>
      </Pagination>
    </Container>
  );
};
