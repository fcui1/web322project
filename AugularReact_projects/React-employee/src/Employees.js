import MainContainer from './MainContainer';
import React from 'react';
import axios from 'axios';
import moment from 'moment';

class Employees extends React.Component {
    constructor(props) {
        super(props);
        this.Value = this.props.Value;
        this.state = {
            employees: []
        }
    }
    componentDidMount() {
        axios.get("https://afternoon-refuge-46215.herokuapp.com/employees").then((res) => {
            this.setState({
                employees: res.data,
                
            });
        }).catch((err) => {
            console.log("Sorry! it is error")
        });
    }

    componentWillUnmount() { }

    render() {
        return (
            <MainContainer sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                  
                        <tr>
                            <th>Name &amp; Position</th>
                            <th>Address</th>
                            <th>Phone Number</th>
                            <th>Hire Date</th>
                            <th>Salary Bonus</th>
                        </tr>
                
                    </thead>
                    <tbody>
                        {this.state.employees.map((employee, index) => {
                            return (
                                <tr>
                                    <td>{employee.FirstName} {employee.LastName} - {employee.Position.PositionName}</td>
                                    <td>{employee.AddressStreet} {employee.AddressCity}, {employee.AddressState}, {employee.AddressZip}</td>
                                    <td>{employee.PhoneNum} ext. {employee.Extension}</td>
                                    <td>{moment(employee.HireDate).format('LL')}</td>
                                    <td>${employee.SalaryBonus}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </MainContainer>
        );
    }
}

export default Employees;