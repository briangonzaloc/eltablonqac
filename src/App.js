import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Layout from './components/Layout';
import './App.css';

import Home from './pages/Home'; 
import News from './pages/News';
import KnowUs from './pages/KnowUs';
import Voice from './pages/Voice';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/news" component={News}></Route>
                    <Route exact path="/voice" component={Voice}></Route>
                    <Route exact path="/knowus" component={KnowUs}></Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
