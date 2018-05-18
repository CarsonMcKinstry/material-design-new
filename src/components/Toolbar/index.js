import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './toolbar.scss';

import {
  Toolbar,
  ToolbarRow,
  ToolbarTitle,
  ToolbarMenuIcon
} from 'rmwc/Toolbar';

class FlowToolbar extends Component {

  render() {

    window.onresize = () => {
      this.forceUpdate();
    };

    return (
      <Toolbar className="toolbar">
        <ToolbarRow>
          <ToolbarMenuIcon 
            className="menu-icon"
            use="menu" 
            onClick={ this.props.onMenuButtonClick }
          />
          <ToolbarTitle>Floworks</ToolbarTitle>
        </ToolbarRow>
      </Toolbar>
    );
  }

}

FlowToolbar.propTypes = {
};

export default FlowToolbar;