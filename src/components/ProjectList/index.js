import React from "react";
import PropTypes from "prop-types";
import ProjectItem from "../ProjectItem";
import Accordion from "../../decorators/Accordion";
import { projects, vacancies } from "../../mock-data.json";

class ProjectList extends React.Component {
  static propTypes = {
    // From decorator
    toggleOpenItem: PropTypes.func.isRequired,
    openItemId: PropTypes.string.isRequired
  };

  getVacanciesForProject = projectId =>
    vacancies.filter(vacancy => vacancy.project_id === projectId);

  render() {
    const { toggleOpenItem, openItemId } = this.props;

    return (
      <section className="projects-wrapper">
        <ul className="projects">
          {projects.map(project => (
            <ProjectItem
              key={project.id}
              projectData={project}
              vacancies={this.getVacanciesForProject(project.id)}
              toggleOpenItem={toggleOpenItem}
              openItemId={openItemId}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Accordion(ProjectList);
