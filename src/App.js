// App Component
import Navbarr from './components/Navbarr.js'
import Search from "./components/Search.js"
import Products from "./components/Products.js"
import About from "./components/About.js"
import Footers from "./components/Footers.js"

function App() {
    return (
        <div>
            <Navbarr></Navbarr>
            <Search></Search>
            <Products></Products>
            <About></About>
            <Footers></Footers>
        </div>
    )
}
export default App
