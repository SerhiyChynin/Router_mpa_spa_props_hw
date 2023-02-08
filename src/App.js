import './App.css';
import Header from './Header';
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Footer from './Footer';
import Error from './Error';
import CategoryDescription from './CategoryDescription';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';

          
const header = {
    nav: [
        { 'name': '/', 'text': 'Главная' },
        { 'name': '/about', 'text': 'О сайте' },
        { 'name': '/cat', 'text': 'Категории' },
    ]
}

const category = {
    nav: [
         { 'name': '/cat/notebook', 'text': 'Ноутбуки' },
         { 'name': '/cat/monitor', 'text': 'Мониторы' },
         { 'name': '/cat/cellphone', 'text': 'Мобильные телефоны' },
    ]
}

function App() {
  return (
    <>
      <Router>
        <Header header={header} />
          <Routes>
          
            <Route path="/" element={<Home/>} /> 
            <Route path="/about" element={<About/>}/>
            <Route exact path="cat" element={<Category cat={category} />}/>
            <Route path="cat/:Name" element={<CategoryDescription/>}/>
            <Route path="*" element={<Error/>}/>
            
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
