// Products Component

import one from "../assests/one.jpg"
import two from "../assests/two.jpg"
import three from "../assests/three.jpg"

function Products(){
    return(
      <div className="products">
        <div className="box">
          <img src={one} alt="perfume img" />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis necessitatibus, obcaecati fuga aut cupiditate iusto nisi.</p>
        </div>
  
        <div className="box">
          <img src={two} alt="perfume img"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis necessitatibus, obcaecati fuga aut cupiditate iusto nisi.</p>
        </div>
  
        <div className="box">
          <img src={three} alt="perfume img"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis necessitatibus, obcaecati fuga aut cupiditate iusto nisi</p>
        </div>
      </div>
    )
  }
  export default Products