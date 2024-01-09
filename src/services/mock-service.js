export function mockNoticias() {
  return {
    data: [
      {
        "_id": "64ad6bb748f383964f629f07",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1689086903162",
        "contenido": "Publicacion local insomnia",
        "archivos": [
          {
            "_id": "64ad6bb748f383964f629f05",
            "nombre": "c0ee2fb7-da04-4fff-acc8-8e02b53a5c44.jpg",
            "tipo": "Imagen",
            "tamano": 45263,
            "fileId": "1ERbskj__WJ4WjDEPS-YRmctf34ZzJOd1",
            "enlace": "https://drive.google.com/file/d/1ERbskj__WJ4WjDEPS-YRmctf34ZzJOd1/view",
            "descargar": "https://drive.google.com/u/0/uc?id=1ERbskj__WJ4WjDEPS-YRmctf34ZzJOd1&export=download",
            "totalDescargas": 0,
            "__v": 0
          }
        ],
        "__v": 0
      },
      {
        "_id": "64ad66ee48f383964f629f02",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1689085678884",
        "contenido": "Publicacion vacia",
        "archivos": [],
        "__v": 0
      },
      {
        "_id": "64ad64d648f383964f629eff",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1689085142372",
        "contenido": "Publicacion con docs",
        "archivos": [
          {
            "_id": "64ad64d448f383964f629efb",
            "nombre": "Informe de Actividades Marzo-Abril.xlsx",
            "tipo": "Documento",
            "tamano": 15797,
            "fileId": "1pY_8C1hnbjhTGJUVxz8g5t-ZIc5fnD3K",
            "enlace": "https://drive.google.com/file/d/1pY_8C1hnbjhTGJUVxz8g5t-ZIc5fnD3K/view",
            "descargar": "https://drive.google.com/u/0/uc?id=1pY_8C1hnbjhTGJUVxz8g5t-ZIc5fnD3K&export=download",
            "totalDescargas": 0,
            "__v": 0
          },
          {
            "_id": "64ad64d648f383964f629efd",
            "nombre": "es-hoja-cuadriculada-negro (2).pdf",
            "tipo": "Documento",
            "tamano": 12929,
            "fileId": "1jQeiIo2lnIxpjqPBT-fhMSG7R5Ss3rgZ",
            "enlace": "https://drive.google.com/file/d/1jQeiIo2lnIxpjqPBT-fhMSG7R5Ss3rgZ/view",
            "descargar": "https://drive.google.com/u/0/uc?id=1jQeiIo2lnIxpjqPBT-fhMSG7R5Ss3rgZ&export=download",
            "totalDescargas": 0,
            "__v": 0
          }
        ],
        "__v": 0
      },
      {
        "_id": "64ac736fb63c2fbff4158b67",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1689023343146",
        "contenido": "Publicacion con docs",
        "archivos": [{
            "_id": "64ad64d448f383964f629efb",
            "nombre": "Informe de Actividades Marzo-Abril.xlsx",
            "tipo": "Documento",
            "tamano": 15797,
            "fileId": "12PZ08wM6AtEWCymTzkTAI3avXAZeb-YX",
            "enlace": "https://drive.google.com/file/d/12PZ08wM6AtEWCymTzkTAI3avXAZeb-YX/view",
            "descargar": "https://drive.google.com/u/0/uc?id=12PZ08wM6AtEWCymTzkTAI3avXAZeb-YX&export=download",
            "totalDescargas": 0,
            "__v": 0
          }],
        "__v": 0
      },
      {
        "_id": "64a48449e718954aad900b87",
        "departamento": {
          "_id": "64874b401ccc73e359451bbd",
          "nombre": "Departamento A",
          "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
          "__v": 0
        },
        "fechaPublicacion": "1688503369396",
        "contenido": "Publicacion sin archivos",
        "archivos": [],
        "__v": 0
      }
    ],
    isLoading: false,
    error: null,
  };
}

export function mockCountNoticias(){
  return {
    data: {
      "filecount": 26
    },
    isLoading: false,
    error: null
  }
}

export function mockDepartamentos(){
  return {
    data: [
      {
        "_id": "64874b401ccc73e359451bbd",
        "nombre": "Departamento A",
        "urlLogo": "https://thumbs.dreamstime.com/z/icono-de-la-manzana-44274908.jpg",
        "__v": 0
      },
      {
        "_id": "648893832efaaaff55b2a843",
        "nombre": "Departamento B",
        "urlLogo": "https://w7.pngwing.com/pngs/701/782/png-transparent-logo-book-book-writing-blue-text-comic-book.png",
        "__v": 0
      },
      {
        "_id": "648b456a810b363e11711361",
        "nombre": "Departamento C",
        "urlLogo": "https://cdn-icons-png.flaticon.com/512/7787/7787798.png",
        "__v": 0
      }
    ],
    isLoading: false,
    error: null
  }
}

export function mockArchivos() {
  console.log('fetch')
  return {
    data: [
      {
          "_id": "64bee41cc6c798e2d38652ce",
          "nombre": "Block Hoja de Compromiso de 9 a 11 meses-01.pdf",
          "tipo": "Documento",
          "docType": "pdf",
          "tamano": 546633,
          "fileId": "1dnsBKOKrjtgf9JGFX_bFxnBX-cPrGqZR",
          "enlace": "https://drive.google.com/file/d/1dnsBKOKrjtgf9JGFX_bFxnBX-cPrGqZR/view",
          "descargar": "https://drive.google.com/u/0/uc?id=1dnsBKOKrjtgf9JGFX_bFxnBX-cPrGqZR&export=download",
          "totalDescargas": 0,
          "__v": 0
      },
      {
          "_id": "64bee41cc6c798e2d38652d4",
          "nombre": "Hoja Niño Enfermo Block.pdf",
          "tipo": "Documento",
          "docType": "word",
          "tamano": 725086,
          "fileId": "1msP85KX_KON3md72y95BkFSAfybenRrk",
          "enlace": "https://drive.google.com/file/d/1msP85KX_KON3md72y95BkFSAfybenRrk/view",
          "descargar": "https://drive.google.com/u/0/uc?id=1msP85KX_KON3md72y95BkFSAfybenRrk&export=download",
          "totalDescargas": 0,
          "__v": 0
      },
      {
          "_id": "64bee41cc6c798e2d38652d6",
          "nombre": "Tarjeta Integral de la Niña.pdf",
          "tipo": "Documento",
          "docType": "excel",
          "tamano": 652563,
          "fileId": "13WVK-AoJj55CEAQaA3cz7E9bqSoidyCw",
          "enlace": "https://drive.google.com/file/d/13WVK-AoJj55CEAQaA3cz7E9bqSoidyCw/view",
          "descargar": "https://drive.google.com/u/0/uc?id=13WVK-AoJj55CEAQaA3cz7E9bqSoidyCw&export=download",
          "totalDescargas": 0,
          "__v": 0
      },
      {
          "_id": "64bee41d5cd5b5a8f817331c",
          "nombre": "Block Hoja de Compromiso de 0 a 6 meses-01.pdf",
          "tipo": "Documento",
          "docType": "ppt",
          "tamano": 483261,
          "fileId": "1P74N942RMRhBSNKc6QlbtLep9HWdG0qD",
          "enlace": "https://drive.google.com/file/d/1P74N942RMRhBSNKc6QlbtLep9HWdG0qD/view",
          "descargar": "https://drive.google.com/u/0/uc?id=1P74N942RMRhBSNKc6QlbtLep9HWdG0qD&export=download",
          "totalDescargas": 0,
          "__v": 0
      },
      {
          "_id": "64beea317b014de7d64e9e66",
          "nombre": "Hoja de Visita Domiciliaria.pdf",
          "tipo": "Documento",
          "docType": "pdf",
          "tamano": 1755654,
          "fileId": "18s9aBII6j5FOWk2gwMW4D9_n0-ROjBWf",
          "enlace": "https://drive.google.com/file/d/18s9aBII6j5FOWk2gwMW4D9_n0-ROjBWf/view",
          "descargar": "https://drive.google.com/u/0/uc?id=18s9aBII6j5FOWk2gwMW4D9_n0-ROjBWf&export=download",
          "totalDescargas": 0,
          "__v": 0
      }
  ],
    isLoading: false,
    error: null,
  };
}

export function mockImagenes() {
  return {
    data: [
      {
          "_id": "64bee41cc6c798e2d38652d0",
          "nombre": "Lamina Registro Diario Atencion Niño - a-01.jpg",
          "tipo": "Imagen",
          "tamano": 613322,
          "fileId": "11o4vpBpf57rn0Vm61xaMm-7LoEOnk6ER",
          "enlace": "https://drive.google.com/file/d/11o4vpBpf57rn0Vm61xaMm-7LoEOnk6ER/view",
          "descargar": "https://drive.google.com/u/0/uc?id=11o4vpBpf57rn0Vm61xaMm-7LoEOnk6ER&export=download",
          "totalDescargas": 0,
          "__v": 0
      },
      {
          "_id": "64bee41cc6c798e2d38652d2",
          "nombre": "Registro de Atencion Diario-01.jpg",
          "tipo": "Imagen",
          "tamano": 616313,
          "fileId": "1MWJbYg3KvOZzQtF7-TtzW1iRS3-fOsIT",
          "enlace": "https://drive.google.com/file/d/1MWJbYg3KvOZzQtF7-TtzW1iRS3-fOsIT/view",
          "descargar": "https://drive.google.com/u/0/uc?id=1MWJbYg3KvOZzQtF7-TtzW1iRS3-fOsIT&export=download",
          "totalDescargas": 0,
          "__v": 0
      },
      {
          "_id": "64bfcdd9dc360937f6440eeb",
          "nombre": "100396806.jpg",
          "tipo": "Imagen",
          "tamano": 487967,
          "fileId": "1DJaKChqQOcbiITriB8taEFQ9WPkLpEen",
          "enlace": "https://drive.google.com/file/d/1DJaKChqQOcbiITriB8taEFQ9WPkLpEen/view",
          "descargar": "https://drive.google.com/u/0/uc?id=1DJaKChqQOcbiITriB8taEFQ9WPkLpEen&export=download",
          "totalDescargas": 0,
          "__v": 0
      },
      {
          "_id": "64bfce9c2d06f35baa0d789a",
          "nombre": "Lamina Registro Diario Atencion Niño - a-01.jpg",
          "tipo": "Imagen",
          "tamano": 613322,
          "fileId": "1KXTGrOavpwIba0RMFpZ20slwuob6mInP",
          "enlace": "https://drive.google.com/file/d/1KXTGrOavpwIba0RMFpZ20slwuob6mInP/view",
          "descargar": "https://drive.google.com/u/0/uc?id=1KXTGrOavpwIba0RMFpZ20slwuob6mInP&export=download",
          "totalDescargas": 0,
          "__v": 0
      },
      {
          "_id": "64bfceb82d06f35baa0d789f",
          "nombre": "Lamina Ampliada Tabla de Peso Minimo lleva Cambios-01.jpg",
          "tipo": "Imagen",
          "tamano": 1638896,
          "fileId": "1xlj05rIzZHby2sLjSBehtrp_XJFQS-xy",
          "enlace": "https://drive.google.com/file/d/1xlj05rIzZHby2sLjSBehtrp_XJFQS-xy/view",
          "descargar": "https://drive.google.com/u/0/uc?id=1xlj05rIzZHby2sLjSBehtrp_XJFQS-xy&export=download",
          "totalDescargas": 0,
          "__v": 0
      }
  ],
    isLoading: false,
    error: null,
  };
}

export const mockOficio = () => {
  return {
    "_id": "64c7bdd783c3ce277f0dd281",
    "nombre":"Oficio 2144-SS-12-07-2022(Se remite infome Semestral del Grado de Avances del Plan de Trabajo COCOIN SESAL 2022-2023) (2).pdf",
    "tipo":"Documento",
    "docType":"pdf",
    "tamano": 1856074,
    "fileId": "1U2dm0cyPfBbSnVs_XJx0lLZeL4SPlvsd",
    "enlace":"https://drive.google.com/file/d/1U2dm0cyPfBbSnVs_XJx0lLZeL4SPlvsd/view",
    "descargar":"https://drive.google.com/u/0/uc?id=1U2dm0cyPfBbSnVs_XJx0lLZeL4SPlvsd&export=download",
    "totalDescargas": 45
  }
}



