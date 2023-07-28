import './featuredProperties.css';

const FeaturedProperties = () => {
  return (
    <div className="fp">
        <div className="fpItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=" 
                alt="" 
                className="fpImg" 
            />
            <span className="fpName">Aparthotel Stare Miasto</span>
            <span className="fpCity">Kraków, Poland</span>
            <span className="fpPrice">$115</span>
            <div className="fpRating">
                <button>8.7</button>
                <span>Fabulous</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=" 
                alt="" 
                className="fpImg" 
            />
            <span className="fpName">7Seasons Apartments Budapest</span>
            <span className="fpCity">Budapest, Hungary</span>
            <span className="fpPrice">$113</span>
            <div className="fpRating">
                <button>8.8</button>
                <span>Fabulous</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=" 
                alt="" 
                className="fpImg" 
            />
            <span className="fpName">Cheval Three Quays at The Tower of London</span>
            <span className="fpCity">London, United Kingdom</span>
            <span className="fpPrice">$675</span>
            <div className="fpRating">
                <button>9.5</button>
                <span>Exceptional</span>
            </div>
        </div>
        <div className="fpItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/hotel/square600/477071028.webp?k=c9d87661dfac89970e50379629aa316a4905033f8f4a13cb21fd28484256d626&o=" 
                alt="" 
                className="fpImg" 
            />
            <span className="fpName">6 Continents Apartments by Prague Residences</span>
            <span className="fpCity">Prague, Czech Republic</span>
            <span className="fpPrice">$161</span>
            <div className="fpRating">
                <button>8.4</button>
                <span>Very Good</span>
            </div>
        </div>
    </div>
  );
};

export default FeaturedProperties;
