import React,{Fragment} from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import {viwRoute} from "routers/routers";
import LayoutV from "layout/layout";
import {Provider,connect} from "react-redux";
import store from "store/store";
class App extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <Fragment>
                
                <Provider store={store}>
                    <Switch>
                        <LayoutV>
                            {
                                viwRoute.map((item, index) => (
                                    <Route key={index} path={item.pathName} render={() => (
                                        <item.component />
                                    )} />
                                ))
                            }
                        </LayoutV>
                        <Redirect from="/andmin" to="/andmin/home" exact />
    
                        {/* <Redirect from="/andmin/**" to="/404" /> */}
                        <Redirect from="**" to="/404" />
                    </Switch>
                </Provider>
                
            </Fragment>
        )
    }
}
const mapStateToProps = (state)=>({
    // token:state.usersreducer.token
})
const mapDispatchToProps = (dispatch)=>({

})
export default connect(mapStateToProps,mapDispatchToProps)(App);
