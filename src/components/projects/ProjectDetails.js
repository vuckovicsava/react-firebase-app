import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleProject } from '../../store/actions/project';

class ProjectDetails extends Component {
  componentDidMount() {
    this.props.getSingleProject(this.props.match.params.id);
  }

  render() {
    if (this.props.project) {
      const { title, content, authorFirstName, authorLastName } = this.props.project;
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{title}</span>
              <p>{content}</p>
            </div>
      
            <div className="card-action gret lighten-4 grey-text">
              <div>Posted by {authorFirstName} {authorLastName}</div>
              <div>2nd September, 2am</div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>Loading</div>
      )
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.project.projects.find(proj => proj.id === ownProps.match.params.id)
  }
}

export default connect(mapStateToProps, { getSingleProject })(ProjectDetails);