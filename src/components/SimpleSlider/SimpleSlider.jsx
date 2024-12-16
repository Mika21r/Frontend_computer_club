import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

export const SimpleSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        cssEase: "linear",
        arrows: false
    };

    return( 
        <>
            <Slider {...settings}>
                {images.map((item) => (
                    <div key={item.id}>
                        <img src={item.src} alt={item.alt} />
                    </div>
                ))}
            </Slider>
        </>  
    )
}