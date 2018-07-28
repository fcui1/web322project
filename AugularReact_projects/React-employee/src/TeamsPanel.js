import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class TeamsPanel extends Component {
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
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Teams</h3>
                    </div>
                    <div className="panel-body">
                        <div className="table-responsive overview-table">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Team </th>
                                        <th> Employees Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.state.teams.map((team, index) => {
                                       return (
                                                <tr>
                                                    <td>{team.TeamName}</td>
                                                    <td>{team.Employees.length} Employees</td>
                                                </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                    </div>
                </div>
        )
    }
};
export default TeamsPanel;