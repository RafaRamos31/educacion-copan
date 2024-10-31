export function getDateString(fechaString) {
  return new Date(fechaString).toLocaleDateString();
}

export function getImageUrl(originalUrl) {
  const regex = /^https:\/\/drive\.google\.com\/file\/d\//;
  if (!regex.test(originalUrl)) {
    return originalUrl;
  }

  const id = originalUrl.split("/")[5];
  return `https://drive.google.com/file/d/${id}/preview`;
}


export function getHomeImageURL(fileId){
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export function getFileEnlace(fileId){
  return `https://drive.google.com/file/d/${fileId}/view`;
}

export function getFileDescargar(fileId){
  return `https://drive.google.com/u/0/uc?id=${fileId}&export=download`;
}