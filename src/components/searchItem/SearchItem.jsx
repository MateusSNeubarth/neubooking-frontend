import './searchItem.css';

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img 
            src="https://cf.bstatic.com/xdata/images/hotel/square200/475957478.webp?k=11dacc8e2d9d08d55d3ebf3224de0003bcdf20d5c1d574890b409aa4c2beb826&o=" 
            alt="" 
            className="siImg" 
        />
        <div className="siDesc">
            <h1 className="siTitle">Studio Retrô Lago Negro</h1>
            <span className="siDistance">1,6 km from center</span>
            <span className="siTaxiOp">Free airport taxi</span>
            <span className="siSubtitle">
                Studio Apartment
            </span>
            <span className="siFeatures">
                Entire Studio • 1 bedroom • 1 living room • 1 bathroom • 20m² • 1 full bed
            </span>
            <span className="siCancelOp">Free cancelation</span>
            <span className="siCancelOpSubtitle">
                You can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className='siCheckButton'>See availability</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem
