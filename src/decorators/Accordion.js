import React from "react";

export default Component =>
  class Accordion extends React.Component {
    state = {
      openItemId: ""
    };

    toggleOpenItem = openItemId => {
      this.setState(prevState => ({
        openItemId: openItemId === prevState.openItemId ? "" : openItemId
      }));
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          toggleOpenItem={this.toggleOpenItem}
        />
      );
    }
  };
