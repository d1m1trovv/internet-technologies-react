import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MainLayout from "./app/layouts/MainLayout";
import Home from "./app/pages/Home";
import Users from "./app/pages/Users";
import Posts from "./app/pages/Posts";


class App extends React.Component
{
  render() {
    return(<Router>
          <MainLayout>
              <Route path={"/"} exact component={Home} />
              <Route path={"/users"} exact component={Users} />
              <Route path={"/posts"} exact component={Posts}/>
          </MainLayout>
        </Router>)
  }
}

export default App;

