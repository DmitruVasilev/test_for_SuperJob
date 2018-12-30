import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const VacancyItem = ({ vacancyData }) => (
  <li
    className={classNames(["vacancy", vacancyData.state && "vacancy--opened"])}
  >
    <span className="vacancy__info">
      <h4 className="vacancy__title">{vacancyData.title}</h4>
      {vacancyData.state ? (
        <span className="text text--icon-search">
          Вакансия открыта, идет подбор кандидатов
        </span>
      ) : (
        <span className="text text--icon-ok">
          Вакансия закрыта, сотрудник нанят
        </span>
      )}
    </span>
    <span className="project__actions">
      {vacancyData.state ? (
        <button
          type="button"
          onClick={e => e.stopPropagation()}
          className="button-transparent button-primary"
        >
          Закрыть вакансию
        </button>
      ) : (
        <button
          type="button"
          onClick={e => e.stopPropagation()}
          className="button-transparent"
        >
          Открыть вакансию
        </button>
      )}
      <button
        type="button"
        onClick={e => e.stopPropagation()}
        className="button-transparent"
      >
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
