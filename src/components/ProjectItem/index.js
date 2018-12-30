import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import VacancyItem from "../VacancyItem";

{
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events*/
}
const ProjectItem = ({
  projectData,
  vacancies,
  openItemId,
  toggleOpenItem
}) => (
  <li
    className={classNames(["project", projectData.state && "project--opened"])}
    onClick={() => toggleOpenItem(projectData.id)}
  >
    <span className="project__info">
      <h2 className="project__title">{projectData.title}</h2>
      <span className="text">{vacancies && vacancies.length} вакании</span>
      {projectData.state ? (
        <button
          type="button"
          onClick={e => e.stopPropagation()}
          className="button-transparent button-primary"
        >
          Добавить вакансию
        </button>
      ) : (
        <span className="text text--icon-ok">
          Проект закрыт, сотрудники наняты
        </span>
      )}
    </span>
    <span className="project__actions">
      {projectData.state ? (
        <button
          type="button"
          onClick={e => e.stopPropagation()}
          className="button-transparent"
        >
          Закрыть проект
        </button>
      ) : (
        <button
          type="button"
          onClick={e => e.stopPropagation()}
          className="button-transparent button-primary"
        >
          Открыть проект
        </button>
      )}
      <button
        type="button"
        onClick={e => e.stopPropagation()}
        className="button-transparent button-primary"
      >
        удалить
      </button>
    </span>
    <ul className="vacancies">
      {openItemId === projectData.id &&
        vacancies &&
        vacancies.length &&
        vacancies.map(vacancy => {
          return <VacancyItem key={vacancy.id} vacancyData={vacancy} />;
        })}
    </ul>
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
  vacancies: PropTypes.arrayOf(
    PropTypes.shape({
      state: PropTypes.bool.isRequired,
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      project_id: PropTypes.string.isRequired
    })
  ).isRequired
};

export default ProjectItem;
