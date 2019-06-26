import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import {viwRoute} from "routers/routers";
import LayoutV from "layout/layout";
class App extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <Switch>
          <LayoutV>
            {
                viwRoute.map((item,index)=>(
                    <Route key={index} path={item.pathName} render={()=>(
                        <item.component/>
                    )} />
                ))
            }
        </LayoutV>
            <Redirect from = "/andmin" to = "/andmin/home" exact />

            {/* <Redirect from="/andmin/**" to="/404" /> */}
            <Redirect from="**" to="/404" />
      </Switch>
    )
  }
}

export default App;
