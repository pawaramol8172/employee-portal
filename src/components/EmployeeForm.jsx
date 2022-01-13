import { Component } from 'react';
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
//import { addEmployee } from '../services/employee-services';
import {connect} from 'react-redux';
import {addEmployee} from '../Actions/action-creators'

class EmployeeForm extends Component {
    constructor(props) {
        super(props);
        //this.navigate =useNavigate(); 
        this.state = {
            employee: {
                Name: '',
                Age: 0,
                EmpCode: '',
                LocationID: '',
                Designation: '',
                Department: '',
                Location: '',
                Address:''
            },
            errors: {
                Name: '',
                Age: '',
                EmpCode: '',
                LocationID: '',
                Designation: '',
                Department: '',
                Location: '',
                Address:''
            },
            redirect: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


    }

    handleChange(e) {
        const { name, value } = e.target;
        const { errors, employee } = this.state;
        switch (name) {
            case "EmpCode":
                if (value.length != 6) {
                    this.setState({ errors: { ...errors, EmpCode: 'Employee Code length must be 6 characters' } })
                }
                else {
                    this.setState({ errors: { ...errors, EmpCode: '' } })
                }
                break;
            case "Name":
                let exist = false;
                debugger;
                for (var ch of value) {
                    if (['$', '@', '#', '%', '^', '&', '*', '.', '!'].indexOf(ch) >= 0) {
                        exist = true;
                    }
                    if (exist)
                        this.setState({ errors: { ...errors, Name: 'Name should not contain any special characters' } })
                    else
                        this.setState({ errors: { ...errors, Name: '' } })
                }
                break;
            default:
                break;
        }
        //update the employee state
        this.setState({
            employee: { ...employee, [name]: value }
        })

    }

    async handleSubmit(e) {
        debugger;
        e.preventDefault();
        const { errors, employee } = this.state;
        this.props.addEmployee(employee)
        // let result = addEmployee(employee)
        //     .catch(err => alert('Error in adding employee'));
        this.setState({ redirect: true });
    }

    render() {
        if (this.state.redirect) {
            return <Navigate to={"/"}></Navigate>
        }
        return (
            <Container>
                <Row>
                    <Col className="col-md-6 mx-auto">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group className="mb-3" controlId="locationId">
                                <Form.Label>Location Id</Form.Label>
                                <Form.Control type="text" name='LocationID' value={this.state.employee.LocationID} onChange={this.handleChange} placeholder="Enter employee location Id" />
                                <div className='text-danger'>{this.state.errors.LocationID}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="empCode">
                                <Form.Label>Employee Code</Form.Label>
                                <Form.Control type="text" name='EmpCode' value={this.state.employee.EmpCode} onChange={this.handleChange} required placeholder="Enter employee code" />
                                <div className='text-danger'>{this.state.errors.EmpCode}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name='Name' value={this.state.employee.Name} onChange={this.handleChange} placeholder="Enter employee name" />
                                <div className='text-danger'>{this.state.errors.Name}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="age">
                                <Form.Label>Age</Form.Label>
                                <Form.Control type="number" name='Age' value={this.state.employee.Age} onChange={this.handleChange} placeholder="Enter employee age" />
                                <div className='text-danger'>{this.state.errors.Age}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="department">
                                <Form.Label>Department</Form.Label>
                                <Form.Control type="text" name='Department' value={this.state.employee.Department} onChange={this.handleChange} placeholder="Enter employee department" />
                                <div className='text-danger'>{this.state.errors.Department}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="designation">
                                <Form.Label>Designation</Form.Label>
                                <Form.Control type="text" name='Designation' value={this.state.employee.Designation} onChange={this.handleChange} placeholder="Enter employee designation" />
                                <div className='text-danger'>{this.state.errors.Designation}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="location">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" name='Location' value={this.state.employee.Location} onChange={this.handleChange} placeholder="Enter employee location" />
                                <div className='text-danger'>{this.state.errors.Location}</div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" name='Address' value={this.state.employee.Address} onChange={this.handleChange} placeholder="Enter employee location" />
                                <div className='text-danger'>{this.state.errors.Address}</div>
                            </Form.Group>
                            <Button type='submit' className="btn btn-success"> Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function  mapDispatchToProps(dispatch){
    let actionMap={
        addEmployee
    }
    return bindActionCreators(actionMap,dispatch);
}

export default connect(null,mapDispatchToProps)(EmployeeForm);