import './featured.css';

const Featured = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://cf.bstatic.com/xdata/images/city/600x600/653646.jpg?k=0a8eb3999748f5b12b29f6bd5492a12b7f15a37535e572ea91403098d1588d38&o=" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>São Paulo</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/city/600x600/653641.jpg?k=29b8706ee4bff7b870ca35a698c5ac4be003b4122b00035a9d4a572d3101b1fe&o=" 
                alt="" 
                className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>Rio de Janeiro</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/city/600x600/653430.jpg?k=0d90e6eabe2d8a5efc49b01c77e90407a1ce508bb4c963318689d4ce8b753020&o=" 
                alt="" 
                className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>Belo Horizonte</h1>
                <h2>132 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/city/600x600/653459.jpg?k=57c5c21e650b8e0888c5906143c2655c412a2e64796337d87a687c68daabed2d&o=" 
                alt="" 
                className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>Curitiba</h1>
                <h2>132 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img 
                src="https://cf.bstatic.com/xdata/images/city/600x600/653655.jpg?k=1cb0973d5385825a0bbbf8361acdd48af2279ed3f4dca409263a618dc6c3860c&o=" 
                alt="" 
                className="featuredImg" 
            />
            <div className="featuredTitles">
                <h1>Salvador</h1>
                <h2>132 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default Featured
