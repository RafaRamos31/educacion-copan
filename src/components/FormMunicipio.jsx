import { Button, Card, Table } from "react-bootstrap"
import { range } from "lodash"
import { useEffect, useState } from "react"

export const FormMunicipio = ({municipio, index, contactos, setContactos}) => {

  const [valueMunicipio, setMunicipio] = useState(municipio);

  const handleChangeName = (e) => {
    setMunicipio({...municipio, name: e.target.value})
  }


  const handleUpdateEstablecimiento = (e, index, part) => {
    let name = municipio.referencias[index].split(':')
    let newReferencias = municipio.referencias;

    if(part === 1){
      newReferencias[index] = e.target.value + ':' + name[1];
    }
    else{
      newReferencias[index] = name[0] + ':' + e.target.value;
    }

    setMunicipio({...municipio, referencias: newReferencias})
  }

  useEffect(() => {
    let newContactos = [...contactos]
    newContactos[index] = valueMunicipio
    setContactos(newContactos)
  
  }, [valueMunicipio, setMunicipio, index, contactos, setContactos])
  

  return (
    <Card className='px-4 py-2 my-2 mx-1' key={index} style={{backgroundColor: 'var(--mp-azul-6)'}}>
      <input type="text" className='my-2' value={valueMunicipio.name} onChange={handleChangeName} placeholder="Nombre del Municipio/Región"/>
      <Table responsive="sm" bordered>
        <thead>
          <tr>
            <th>Nombre establecimiento</th>
            <th>Telefonos</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {
            range(0, Object.keys(contactos[index].referencias).length).map(i => (
              <tr key={i}>
                <td><input type="text" style={{width: '100%'}} value={contactos[index].referencias[i].split(':')[0]} onChange={(event) => handleUpdateEstablecimiento(event, index, 1)}/></td>
                <td><input type="text" style={{width: '100%'}} value={contactos[index].referencias[i].split(':')[1]} onChange={(event) => handleUpdateEstablecimiento(event, index, 2)}/></td>
                <td className="d-flex justify-content-center align-items-center">
                  <Button variant="danger">
                    <i className="bi bi-trash"></i>{' '}Eliminar
                  </Button>
                </td>
              </tr>
            ))
          }
        </tbody>
            <Button variant="info" className='my-2'>
              Agregar establecimiento
            </Button>
      </Table>
    </Card>
  )
}
