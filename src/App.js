import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from "./components/layout/Footer";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
function App() {
  return (
    <Router>
      <Header />
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/contact" element={<Contact />}/>
     <Route path="/cart" element={<Cart />}/>
     </Routes>
     <Footer />
    </Router>
  );
}

export default App;
