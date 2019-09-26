import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';
import ContainerNavbar from './components/ContainerNavbar';
import Footer from './components/Footer';

import Home from './pages/Home'; 
import News from './pages/News';
import KnowUs from './pages/KnowUs';
import Voice from './pages/Voice';
import NewNote from './pages/NewNote';

function App() {
    return (
        <BrowserRouter>
            <ContainerNavbar/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/news" component={News}></Route>
                <Route exact path="/voice" component={Voice}></Route>
                <Route exact path="/knowus" component={KnowUs}></Route>
                <Route exact path="/newnote" component={NewNote}></Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
