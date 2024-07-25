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
