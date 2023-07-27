import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageData from "../../data";
import { useState } from "react";

function CarouselBox() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const renderSlides = imageData.map((image, index) => (
    <div key={index}>
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
      >
        {renderSlides}
      </Carousel>
    </div>
  );
}

export default CarouselBox;