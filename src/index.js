import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from '../src/serviceWorker';
import Dashboard from './dashboard.js'
// import Domain from './components/Domain'
// import Protein from './components/Domain/Protein'
// import Sample from './sample'
// import Domain_arch from './domain_arch'

import { 
    BrowserRouter as Router,
    Route,
    Switch ,
} from 'react-router-dom';
// import SearchResult from './components/SearchResult';

const AppRouter = ()=>
    <Router>
        <Main/>
    </Router>;

class Main extends Component{
    constructor(props){
        super(props);
        this.state ={
        }
    }
    componentWillMount = () => {
    }
    render(){
        let self    = this;      
        return(
            <Switch>
                {/* <Route path="/admin" component={Admin}/> */}
                <Route exact path="/" component={Dashboard}/> 
            </Switch>
        );
    }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));

serviceWorker.unregister();
