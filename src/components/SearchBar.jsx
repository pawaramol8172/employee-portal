import { Form,InputGroup, FormControl } from "react-bootstrap";
import { useContext, useRef } from "react";
import { EmployeeContext } from "./Home";

export default function SearchBar(){

    const searchInput = useRef();
    const {doSearch,data,employees} = useContext(EmployeeContext);

    return(
        <Form>
            <InputGroup className="mb-3">
                <InputGroup.Text id="Search" >Search</InputGroup.Text>
                <FormControl placeholder="Search by Name or Location" ref={searchInput} onChange={()=>doSearch(searchInput.current.value)}/>
            </InputGroup>
            <p>Showing {data.length} out of {employees.length} </p>
        </Form>
        
    )
}