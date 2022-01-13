import React, { createContext } from "react";
import { Container, Row, Col, NavItem } from "react-bootstrap";
import { connect } from "react-redux";
import { Component } from "react/cjs/react.development";
import { getEmployees } from "../services/employee-services";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";

export const EmployeeContext = React.createContext()

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: props.employees,
            filteredResult: props.employees
        }
        this.handleSearch = this.handleSearch.bind(this);
    }

    //lifecycle
    static getDerivedStateFromProps(newProps, state) {
        console.log("Props changed", newProps)
        if (newProps.employees.length != state.employees.length) {
            console.log("Props changed", newProps)
            return {
                employees: newProps.employees,
                filteredResult: newProps.employees
            }
        }
        return null;
    }

    async componentDidMount() {
        // let employees = await getEmployees()
        // .catch(err=> console.log("Error in loading employee data" + err))
        // this.setState ({employees,filteredResult : employees }) // equivalent to {employees: employees}
        // console.log(employees)
    }

    handleSearch(searchText) {
        // do search text and update state
        console.log(searchText);
        if (searchText && searchText.length > 0) {
            searchText = searchText.toUpperCase();
            let filteredResult = this.state.employees.filter((item) => item.Name.toUpperCase().indexOf(searchText) >= 0
                || item.LocationID.toUpperCase().indexOf(searchText) >= 0);
            this.setState({ filteredResult });
        }
        else {
            this.setState({ filteredResult: this.state.employees })
        }
    }

    render() {
        console.log(this.state)
        return <EmployeeContext.Provider value={{ employees: this.state.employees, data: this.state.filteredResult, doSearch: this.handleSearch }} >
            <Container>
                <Row>
                    <Col>
                        <h2>Home </h2>
                        <SearchBar />
                        <EmployeeList />
                    </Col>
                </Row>
            </Container>
        </EmployeeContext.Provider>
    }
}

// Map redux store state values to properties of component
function mapStateToProps(globalState) {
    return {
        //homecomponentPropertyName:stateValue
        employees: globalState.employeeState.employees
    }
}

// function mapDispatchToProps(state){

// }

export default connect(mapStateToProps)(Home);