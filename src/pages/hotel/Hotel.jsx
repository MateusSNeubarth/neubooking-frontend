import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475957478.jpg?k=85269c90af0cd92fb7584c235d920f148d381c31f2e42e4abe11540f4c05bfd1&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475144867.jpg?k=a8dcf7e17a31a383bb63b2006369eee2859e9c3a41af6481540171345e527aff&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475144737.jpg?k=013cc7fb49b392ebdf4ae407d6b913593a4b88684f8972839195453ec66e5233&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475144808.jpg?k=3a5fd4e5a540df2daffb1df28e14a52fc55f1f396719712db7d4206b0164384e&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/328568023.jpg?k=d8886e1d5b0f6a9e178df3b94ecfc8cc8afdfce9e9cb877484a88dfb00e62c69&o=&hp=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475144708.jpg?k=39cd9770b935e7b15a44a71208411850a493a4d10757e21c8831170400803ef8&o=&hp=1"
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==="l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
    }
    if(direction==="r") {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)} />
          <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove("l")} />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove("r")} />
        </div>}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Studio Retrô Lago Negro</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={ faLocationDot } />
            <span>713 Rua Bruno E. Riegel Apto 01, Gramado</span>
          </div>
          <span className="hotelDistance">
            1,6 km from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $123 at this property and get a free airport taxi
          </span>
          <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img 
                  onClick={() => handleOpen(i)} 
                  src={photo.src} 
                  alt="" 
                  className="hotelImg" 
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Studio Retrô Lago Negro</h1>
              <p className="hotelDesc">
              O Studio Retrô Lago Negro dispõe de varanda e está situado em Gramado, 
              a apenas 400 metros do Lago Negro e a 1,6 km da Estação Rodoviária de Gramado. 
              Esta propriedade oferece acesso a um terraço, estacionamento privativo gratuito e 
              WiFi gratuito.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 2-night stay</h1>
              <span>
                Located in the most well avaluated area in Gramado, this accommodation has a 
                great location score of 9.2
              </span>
              <h2>
                <b>$60</b> (2 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel
