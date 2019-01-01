import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./VacancyItem.sass";

const VacancyItem = ({ vacancyData }) => (
  <li
    className={classNames(["vacancy", !vacancyData.state && "vacancy--closed"])}
  >
    <span className="vacancy__info">
      <h4 className="vacancy__title">{vacancyData.title}</h4>
      {vacancyData.state ? (
        <span className="sub-title">
          <span className="material-icons md-10">search</span>Вакансия открыта,
          идет подбор кандидатов
        </span>
      ) : (
        <span className="sub-title">
          <span className="material-icons md-10">done</span>Вакансия закрыта,
          сотрудник нанят
        </span>
      )}
    </span>
    <span className="vacancy__actions">
      {vacancyData.state ? (
        <button type="button" className="button-transparent">
          Закрыть вакансию
        </button>
      ) : (
        <button
          type="button"
          className="button-transparent button-transparent--primary"
        >
          Открыть вакансию
        </button>
      )}
      <button type="button" className="button-transparent">
        удалить
      </button>
    </span>
  </li>
);

VacancyItem.propTypes = {
  vacancyData: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired
};

export default VacancyItem;
