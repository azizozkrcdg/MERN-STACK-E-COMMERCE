import Header from './components/Layout/Layouts/Header/Header'
import Sliders from './components/Layout/Sliders/Sliders'
import Footer from './components/Layout/Layouts/Footer/Footer'
import Policy from './components/Layout/Layouts/Policy/Policy'
import Categories from './components/Layout/Categories/Categories'
import Products from './components/Layout/Products/Products'
import './App.css'

function App() {

  return (
    <div>
      <Header />
      <Sliders />
      <Categories />
      <Products />
      <Policy />
      <Footer />
    </div>
  )
}

export default App
