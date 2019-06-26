import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as HRouter,Route,Redirect,Switch} from "react-router-dom";
import {mainRoute,viwRoute} from "routers/routers";
ReactDOM.render(
    <HRouter>
        <Switch>
            <Route path="/andmin" render={() => {
                return <App />
            }} />
            {
                mainRoute.map((item, index) => (
                    <Route path={item.pathName} component={item.component} key={index} />
                ))
            }
            <Redirect from="/" to="/andmin" exact />
            <Redirect from="**" to={mainRoute[1].pathName} />
        </Switch>
    </HRouter>,
    document.getElementById('root'),
    ()=>{
        // console.log("挂载成功!")
    }

);
