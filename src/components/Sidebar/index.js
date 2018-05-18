import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './sidebar.scss';

import {
  Drawer,
  DrawerHeader,
  DrawerContent
} from 'rmwc/Drawer';

import {
  List,
  ListItem,
  ListItemText,
  ListItemMeta
} from 'rmwc/List';

class FlowSidebar extends Component {

  renderMenuContent = () => {

    return (
      <DrawerContent>
        <List>
          <ListItem>
            <ListItemText>New Workorder</ListItemText>
            <ListItemMeta>add</ListItemMeta>
          </ListItem>
        </List>
        {this.props.uiWidth > 768 && (
          <List>
            <ListItem className="pin-sidebar" onClick={ this.props.togglePin}>
              <ListItemText>{ this.props.pinned ? 'Unpin' : 'Pin'} Sidebar</ListItemText>
              <ListItemMeta>{this.props.pinned ? 'chevron_left' : 'chevron_right'}</ListItemMeta>
            </ListItem>
          </List>
        )}
      </DrawerContent>
    )

  }

  render() {
    const { uiWidth, open, pinned, toggle } = this.props;
    return uiWidth > 768 
      ? (<Drawer
          persistent
          className="sidebar"
          open={pinned || open}
          onMouseEnter={toggle}
          onMouseLeave={toggle}
        >
        { this.renderMenuContent() }
        </Drawer>)
      : (<Drawer
          persistent
          className="sidebar"
          open={ open }
        >
        { this.renderMenuContent() }
        </Drawer>)
  }

}

FlowSidebar.propTypes = {
};

export default FlowSidebar;