import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar';
import Navbar5 from './component/navbar5';
import Search from './component/search';
import Cards from './component/cards';
function App() {
  return (
    <>
    <Navbar5/>
    <Search/>
    <Navbar/>
    <Cards/>
    </>
  );
}

export default App;
