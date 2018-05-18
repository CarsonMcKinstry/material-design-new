import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './topbar.scss';
import { Button, ButtonIcon } from 'rmwc/Button';
import { Menu, MenuAnchor, MenuItem } from 'rmwc/Menu';
import avatar from '../../assets/me.jpg';

import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarTitle
} from 'rmwc/TopAppBar';

class FlowTopAppBar extends Component {

  state = {
    menu: {
      open: false
    }
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menu: {
        open: true
      }
    }))
  }

  render() {

    return (
      <TopAppBar fixed className="topbar">
        <TopAppBarRow>
          <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon 
              className="icon"
              use="menu"
              onClick={ this.props.onMenuButtonClick }
            />
            <TopAppBarTitle>Floworks</TopAppBarTitle>
          </TopAppBarSection>
          <TopAppBarSection alignEnd>
            <MenuAnchor>
              <Menu
                open={this.state.menu.open}
                onClose={e => this.setState({menu: {open: false}})}
                anchorCorner="bottomStart"
                className="account-menu"
              >
                <MenuItem>Fuck you</MenuItem>
              </Menu>
              <Button
                className="button"
                onClick={ this.toggleMenu }
              >
                <ButtonIcon use="expand_more"/> Account <img className="avatar" src={avatar} alt="avatar"/>
              </Button>
            </MenuAnchor>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
    );
  }

}

FlowTopAppBar.propTypes = {
};

export default FlowTopAppBar;