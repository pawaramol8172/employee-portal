import React, { useContext } from "react";
import { Table } from "react-bootstrap";
import { EmployeeContext } from "./Home";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Trash } from 'react-bootstrap-icons';
import { bindActionCreators } from 'redux';
import {deleteEmployee} from '../Actions/action-creators'


function EmployeeList({deleteEmployee}) {

    const { data } = useContext(EmployeeContext);

    function handleDelete(locId, eCode, e) {
        if(window.confirm('Do you want to delete item?')){
            deleteEmployee(locId, eCode)
        }
    }
    //console.log(data);

    return (
        <React.Fragment>
            <Link to="/employees/create" className="btn btn-success">Add Employee</Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Location Id</th>
                        <th>Emp Code</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Department</th>
                        {/* <th>Location</th> */}
                        {/* <th>Address</th> */}
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (<tr key={index}>
                                <td>{item.LocationID}</td>
                                <td>{item.EmpCode}</td>
                                <td>{item.Name}</td>
                                <td>{item.Age}</td>
                                <td>{item.Designation}</td>
                                <td>{item.Department}</td>
                                {/* <td>{item.Location}</td> */}
                                {/* <td>{item.Address}</td> */}
                                <td>
                                    <Link to={`/employees/loc/${item.LocationID}/ecode/${item.EmpCode}`}> Details</Link>
                                </td>
                                <td>
                                    <Trash className="trash-style" onClick={(e) => handleDelete(item.LocationID, item.EmpCode, e)} />
                                </td>
                            </tr>)
                        })
                    }
                </tbody>

            </Table>
        </React.Fragment>
    )
}

function mapDispatchToProps(dispatch){
    let actionMap={
        deleteEmployee
    }
    return bindActionCreators(actionMap,dispatch);
}


export default connect(null,mapDispatchToProps)(EmployeeList);