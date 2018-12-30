import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Search.sass";

class Search extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string
  };

  static defaultProps = {
    error: null
  };

  state = {
    searchValue: ""
  };

  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  render() {
    const { placeholder, error } = this.props;

    return (
      <label htmlFor="search" className="base-input-wrapper">
        <input
          id="search"
          type="search"
          className={classNames([
            "search",
            "base-input",
            !!error && "base-input--error"
          ])}
          placeholder={placeholder}
          value={this.state.searchValue}
          onChange={this.handleSearchChange}
        />
        {!!error && <span className="input-error">{error}</span>}
      </label>
    );
  }
}

export default Search;
