import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./components/home";
import Blogs from "./components/blogs";
import Projects from "./components/projects";
import About from "./components/about";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Route exact path='/' component={Home}/>
        <Route exact path='/blogs' component={Blogs}/>
        <Route exact path='/projects' component={Projects}/>
        <Route exact path='/about' component={About}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
