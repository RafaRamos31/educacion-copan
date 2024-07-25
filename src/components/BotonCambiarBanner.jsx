import React from "react";
import { Button } from "react-bootstrap"

export const BotonCambiarBanner = ({show=false}) => {


  const handleFile = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const inputRef = React.createRef();

  return (
    <div style={{ position: 'absolute', display: 'inline-block' }}>
      {
        show &&
        <>
          <Button variant="warning" style={{position:'absolute',top: '10px', left: '15px'}} onClick={handleFile}>
            <i className="bi bi-images"></i>
          </Button>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </>
      }
    </div>
  )
}
