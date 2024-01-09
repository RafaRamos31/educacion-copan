import { Card } from "react-bootstrap"

export const RecursoDocumento = ({documento}) => {
  return (
    <Card>
      <Card.Body>
        {documento.enlaces[0]}
      </Card.Body>
    </Card>
  )
}
