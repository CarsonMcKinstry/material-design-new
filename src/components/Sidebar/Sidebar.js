import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './sidebar.scss';
import { Link } from 'react-router-dom';
import {
  Drawer,
  DrawerHeader,
  DrawerContent
} from 'rmwc/Drawer';

import {
  List,
  ListItem,
  ListItemText,
  ListDivider,
  ListItemGraphic
} from 'rmwc/List';

const navItems = [
  {
    path: '/',
    graphic: 'home',
    primaryText: 'Home'
  },
  {
    path: '/pics',
    graphic: 'favorite',
    primaryText: 'Pics'
  },
  {
    isDivider: true
  }
]

class FlowSidebar extends Component {

  isOpen = () => {
    const { uiWidth, open } = this.props;

    if (uiWidth > 768 ) {
      return true;
    } else {
      return open;
    }
    
  }

  render() {
    return (
      <Drawer
        open={ this.isOpen() }
        persistent
        className="sidebar"
      >
        <DrawerContent>
          <List>
            {
              navItems.map(item => {

                return item.isDivider ? <ListDivider/> : (
                  <Link to={ item.path} onClick={ this.props.toggleSidebar}>
                    <ListItem>
                      <ListItemGraphic>{item.graphic}</ListItemGraphic>
                      <ListItemText>{item.primaryText}</ListItemText>
                    </ListItem>
                  </Link>
                )
              })
            }
          </List>
        </DrawerContent>
      </Drawer>
    )
  }

}

FlowSidebar.propTypes = {
};

export default FlowSidebar;