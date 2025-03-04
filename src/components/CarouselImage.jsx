// src/components/ExampleCarouselImage.jsx
import React from "react";

const CarouselImage = ({ src, alt }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "250%",
          height: "350px",
          maxWidth: "800px", // Limita el tamaño máximo de la imagen
          margin: "50px auto", // Centra la imagen
          borderRadius: "20px",
        }}
      />
    </div>
  );
};

export default CarouselImage;
