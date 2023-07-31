import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { images } from "./data";
import { useState } from "react";

function CarouselBox() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const renderSlides = images.map((image, index) => (
    <div key={index.id}>
      <img src={image.url} alt={image.alt} />
    </div>
  ));

  return (
    <div>
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        selectedItem={currentIndex}
        onChange={handleChange}
        width="300px"
        
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}

export default CarouselBox;