import React, { Component } from 'react';
import './App.scss';
import Toolbar from './Toolbar/';
import Sidebar from './Sidebar/';


class App extends Component {

  state = {
    sidebar: {
      open: false,
      pinned: true
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
            open: false,
            pinned: false
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

  handleSidebarPin = () => {
    this.setState(prevState => ({
      sidebar: {
        ...prevState.sidebar,
        pinned: !prevState.sidebar.pinned
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <Toolbar
          onMenuButtonClick={ this.handleSidebarToggle }
        />
        <Sidebar
          open={ this.state.sidebar.open }
          pinned={ this.state.sidebar.pinned }
          uiWidth={ this.state.width }
          toggle={ this.handleSidebarToggle }
          togglePin={ this.handleSidebarPin }
        />
        <main className={ this.state.sidebar.open ? "open" : ""}>
        </main>
      </div>
    );
  }
}

export default App;
