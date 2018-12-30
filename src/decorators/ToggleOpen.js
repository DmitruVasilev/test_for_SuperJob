import React, { Component } from "react";

export default OriginalComponent =>
  class ToggleOpen extends Component {
    state = {
      isOpen: false
    };

    toggleOpen = () => {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }));
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          {...this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };
