
import MainContainer from './MainContainer';
import React from 'react';
import axios from 'axios';

class Teams extends React.Component {
    constructor(props) {
        super(props);
        this.Value = this.props.Value;
        this.state = {
            teams: []
        }
    }

    componentDidMount() {
        axios.get("https://afternoon-refuge-46215.herokuapp.com/teams").then((res) => {
          this.setState({
            teams: res.data, 
            dataLoaded: true 
          });
        }).catch((err) => {
          console.log("sorry! it is error")
        });
    }

    componentWillUnmount() { }

    render() {
        return (
            <MainContainer sidebar="Teams">
                <h1 className="page-header">Teams</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Team Name</th>
                            <th>Projects</th>
                            <th>Employees</th>
                            <th>Team Lead</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teams.map((team, index) => {
                            return (
                                <tr>
                                    <td>{team.TeamName}</td>
                                    <td>
                                        <ul>
                                        {team.Projects.map((team, index) => {
                                            return (
                                                <li>{team.ProjectName}</li>
                                            )
                                        })}
                                        </ul>
                                    </td>
                                    <td>{team.Employees.length}</td>
                                    <td>{team.TeamLead.FirstName} {team.TeamLead.LastName}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Teams;