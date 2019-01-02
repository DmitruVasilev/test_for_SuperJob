import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import VacancyItem from "../VacancyItem";
import Popup from "../Popup";
import ToggleOpen from "../../decorators/ToggleOpen";
import "./ProjectItem.sass";

{
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events*/
}
const ProjectItem = ({
  projectData,
  vacancies,
  toggleOpen,
  openItemId,
  isOpen,
  toggleOpenItem
}) => (
  <li
    className={classNames(["project", !projectData.state && "project--closed"])}
  >
    <span className="project__data">
      <span className="project__info">
        <h2
          className="project__title"
          onClick={() => projectData.state && toggleOpenItem(projectData.id)}
        >
          {projectData.title}
        </h2>
        <span className="text">{vacancies && vacancies.length} вакании</span>
        {projectData.state ? (
          <button
            type="button"
            className="button-transparent button-transparent--primary"
            onClick={toggleOpen}
          >
            Добавить вакансию
          </button>
        ) : (
          <span className="sub-title sub-title--push">
            <span className="material-icons md-10">done</span>Проект закрыт,
            сотрудники наняты
          </span>
        )}
      </span>
      <span className="project__actions">
        {projectData.state ? (
          <button type="button" className="button-transparent">
            Закрыть проект
          </button>
        ) : (
          <button
            type="button"
            className="button-transparent button-transparent--primary"
          >
            Открыть проект
          </button>
        )}
        <button type="button" className="button-transparent">
          удалить
        </button>
      </span>
    </span>
    {openItemId === projectData.id &&
      vacancies &&
      vacancies.length &&
      vacancies.map(vacancy => (
        <ul key={vacancy.id} className="vacancies">
          <VacancyItem vacancyData={vacancy} />
        </ul>
      ))}
    {isOpen && <Popup toggleOpen={toggleOpen} title="Название вакансии" />}
  </li>
);

ProjectItem.propTypes = {
  projectData: PropTypes.shape({
    state: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  openItemId: PropTypes.string.isRequired,
  toggleOpenItem: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  vacancies: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      project_id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ToggleOpen(ProjectItem);
