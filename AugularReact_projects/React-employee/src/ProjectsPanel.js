import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';

class ProjectsPanel extends Component {
    constructor(props) {
        super(props);
        this.Value = this.props.Value;
        this.state = {
            projects: []
        }
    }

    componentDidMount() {
        axios.get("https://afternoon-refuge-46215.herokuapp.com/projects").then((res) => {
          this.setState({
            projects: res.data,
            dataLoaded: true 
          });
        }).catch((err) => {
          console.log("sorry! it is error")
        });
    }

    componentWillUnmount() {
    }
    render() {
        return ( 
            <div className="panel panel-default">
                <div className="panel-heading">
                <h3 className="panel-title">Projects</h3>
                </div>
                <div className="panel-body">
                    <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Project Name</th>
                                <th>Active  Days</th>
                            </tr>
                            </thead>
                        <tbody>
                            {this.state.projects.map((project, index) => {
                                return (
                                    <tr>
                                        <td>{project.ProjectName}</td>
                                        <td>Active { moment().diff( moment([project.ProjectStartDate]), 'days' ) } Days</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
                    </div>
                <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
                </div>
            </div>
        );
    }
}

export default ProjectsPanel;