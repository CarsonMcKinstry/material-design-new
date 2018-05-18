import React, { Component } from 'react';
import './App.scss';
import TopBar from './TopBar/';
import Sidebar from './Sidebar/';
import Collage from './Collage/';
import { Button } from 'rmwc/Button';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  state = {
    sidebar: {
      open: false,
      pinned: false
    },
    width: 0,
  }


  componentWillMount() {
    this.getScreenWidth();
  }

  componentDidMount () {
    window.addEventListener('resize', this.getScreenWidth);
  }

  getScreenWidth = () => {
    this.setState(prevState => {
      const width = window.innerWidth;
      if (prevState.sidebar.pinned && width < 768) {
        return {
          width,
          sidebar: {
            open: false
          }
        }
      }
      return {
        width
      };
    });
  }

  handleSidebarToggle = () => {
    this.setState(prevState => ({
      sidebar: {
        ...prevState.sidebar,
        open: prevState.sidebar.pinned || !prevState.sidebar.open
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <TopBar
          uiWidth={ this.state.width }
          onMenuButtonClick={ this.handleSidebarToggle }
        />
        <Sidebar 
          uiWidth={ this.state.width } 
          open={ this.state.sidebar.open }
          toggleSidebar={ this.handleSidebarToggle }
        />
        <main>
          <Switch>
            <Route exact path="/" render={() => <h2>Hello World</h2>}/>
            <Route path="/pics" render={() => <Collage columns={5}/>}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
