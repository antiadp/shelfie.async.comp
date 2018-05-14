import React from 'react';
import { Switch, Route} from 'react-router-dom';
import './App.css'
import Bin from './components/Bins/Bin';
import Home from './components/Home';
import Shelfs from './components/Shelf/Shelfs';
import EmptyBin from './components/Bins/EmptyBin';


export default (
    // <HashRouter>
    //     <div>
            <Switch>
                <Route exact path= '/' component= {Home}/>
                <Route exact path= '/shelfs/:shelfnum' component = {Shelfs} />
                <Route exact path= '/shelfs/:shelfnum/bin/:binnum' component = {Bin} />
                <Route exact path= '/products/:shelfnum/:binnum' component = {EmptyBin} />
            </Switch>
    //     </div>
    // </HashRouter>
)