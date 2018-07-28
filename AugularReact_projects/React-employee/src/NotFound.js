import React from 'react';
import MainContainer from './MainContainer';
import axios from 'axios';

class NotFound extends React.Component {
    constructor(props) {
        super(props);
        this.dataValue = this.props.dataValue;
        this.state = {
            employees: []
        }
    }

    componentDidMount() {
        axios.get("https://afternoon-refuge-46215.herokuapp.com/employees").then((res) => {
            this.setState({
                employees: res.data,
                dataLoaded: true
            });
        }).catch((err) => {
            console.log("error")
        });
    }

    componentWillUnmount() { }

    render() {
        return (
            <MainContainer>
                <h1 className="page-header">Page Not Found</h1>
                  
            </MainContainer>
        );
    }
}

export default NotFound;