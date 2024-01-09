import React from 'react'

export const Video = ({enlace}) => {
  return (
    <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + enlace.slice(-11)} 
        title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
  )
}
