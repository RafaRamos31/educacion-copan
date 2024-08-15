export const getTitle = (i) => {
  const titulos = {
    1: 'Región Sanitaria Departamental',
    2: 'Dirección Departamental de Educación',
  }
  return titulos[i];
}

export const getSector = (i) => {
  const sectores = {
    1: 'Secretaría de Salud',
    2: 'Secretaría de Educación',
  }
  return sectores[i];
}

export const getDepartamento = (i) => {
  const departamentos = {
    1: 'Santa Bárbara',
    2: 'Copán',
    3: 'Lempira',
    4: 'Ocotepeque',
  }
  return departamentos[i];
}