import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import { useKeenSlider } from "keen-slider/react";

import Camisa1 from "../assets/camisa-1.png";
import Camisa2 from "../assets/camisa-2.png";
import Camisa3 from "../assets/camisa-3.png";

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })
  return (
    <HomeContainer ref={sliderRef} className="keen-slider" >
      <Product className="keen-slider__slide" >
        <Image src={Camisa1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong> {' '}
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide" >
        <Image src={Camisa2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong> {' '}
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide" >
        <Image src={Camisa3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong> {' '}
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide" >
        <Image src={Camisa3} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong> {' '}
          <span>R$ 79,98</span>
        </footer>
      </Product>

    </HomeContainer>
  )
}
