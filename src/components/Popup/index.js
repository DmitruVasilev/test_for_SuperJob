import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Button from "../Button";

import "./Popup.sass";

class Popup extends React.Component {
  static propTypes = {
    toggleOpen: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  };

  state = {
    projectName: "",
    error: ""
  };

  handleProjectNameChange = event => {
    this.setState({
      projectName: event.target.value
    });
  };

  submitProjectName = e => {
    e.preventDefault();
    if (this.state.projectName) {
      this.setState({
        projectName: "",
        error: ""
      });
      this.props.toggleOpen();
    } else {
      this.setState({
        error: "Введите название проекта"
      });
    }
  };

  render() {
    const { toggleOpen, title } = this.props;
    const { error, projectName } = this.state;
    return (
      <section className="popup-wrapper">
        {/* eslint-disable */}
        <div className="popup">
          <div className="popup__header">
            <h3 className="popup__title">{title}</h3>
            <span className="popup__close" title="close" onClick={toggleOpen} />
          </div>
          <form className="popup__form" onSubmit={this.submitProjectName}>
            <label htmlFor="title-project" className="base-input-wrapper">
              <input
                id="title-project"
                className={classNames([
                  "popup__input",
                  "base-input",
                  !!error && "base-input--error"
                ])}
                type="text"
                placeholder={title}
                value={projectName}
                onChange={this.handleProjectNameChange}
              />
              {!!error && <span className="input--error">{error}</span>}
            </label>
            <Button type="submit">Создать</Button>
          </form>
        </div>
        <span className="overlay" onClick={toggleOpen} />
      </section>
    );
  }
}

export default Popup;
