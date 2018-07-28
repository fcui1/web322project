import MainContainer from './MainContainer';
import React from 'react';
import axios from 'axios';
import moment from 'moment';

class Projects extends React.Component {
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
            console.log("Sorry! it is error")
        });
    }

    componentWillUnmount() { }

    render() {
        return (
            <MainContainer sidebar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Start Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.projects.map((project, index) => {
                            return (
                                <tr>
                                    <td>{project.ProjectName}</td>
                                    <td>{project.ProjectDescription}</td>
                                    <td>{ moment(project.ProjectStartDate).format('LL') }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Projects;