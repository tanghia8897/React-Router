import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const MenuLink = ({label,to,activeOnlyWhenExact})=>{
    return (
        <Route path={to} exact={activeOnlyWhenExact} children={({match})=>{
            var active = match ? 'active nav-item' : '';
            return (
                <li className={active}>
                    {/* <a className="nav-link" >Home</a> */}
                    <Link to={to} className="nav-link">
                        {label}
                    </Link>
                </li>
            )
        }}/>
    )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
           {/* menu  */}
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <a className="navbar-brand">Navbar</a>
                <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                         <MenuLink  label="Trang chủ" to="/" activeOnlyWhenExact={true}/>
                         <MenuLink label="Trang Giới Thiệu" to="/About" activeOnlyWhenExact={false}/>
                    </ul>
                </div>
            </nav>
            {/* content */}
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/About" exact component={About} />
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
