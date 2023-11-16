import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import banner01 from '../images/banner-1.png';
import banner02 from '../images/banner-2.png';
import banner03 from '../images/banner-3.png';
import Image from "next/image";

const Banner = () =>{
    return (
        <div className="relative">
            <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false} interval={3000} showIndicators={false}>
                <div>
                    <Image src={banner01} alt="banner 01" />
                </div>
                <div>
                    <Image src={banner02} alt="banner 02" />   
                </div>
                <div>
                    <Image src={banner03} alt="banner 03" />
                </div>
            </Carousel>
            <div className="w-full absolute h-40 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20"></div>
           
        </div>
    )
}

export default Banner