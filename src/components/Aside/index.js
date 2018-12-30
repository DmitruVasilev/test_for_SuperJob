import React from "react";
import PropTypes from "prop-types";
import ToggleOpen from "../../decorators/ToggleOpen";
import Search from "../Search";
import Button from "../Button";
import Popup from "../Popup";
import "./Aside.sass";

const Aside = ({ isOpen, toggleOpen }) => (
  <aside className="aside">
    <Search placeholder="Поиск по вакансиям" />
    <label htmlFor="checkbox" className="checkbox-label">
      <input id="checkbox" type="checkbox" className="checkbox" />
      <span className="checkbox__pseudo" />
      Только открытые
    </label>
    <Button onButtonClick={toggleOpen}>Добавить проект</Button>
    {isOpen && <Popup toggleOpen={toggleOpen} />}
  </aside>
);

Aside.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
};

export default ToggleOpen(Aside);
