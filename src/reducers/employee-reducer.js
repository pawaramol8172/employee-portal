import * as ActionTypes from '../Actions/actions-types'

const initialState = {
    employees: [],
    employee: undefined
}

function employeeReducer(state = initialState, action) {

    const { type, payload } = action;
    switch (type) {
        case ActionTypes.GET_EMPLOYEES:
            return state = { ...state, employees: payload }  //...state will keep values as it is other than employees
        case ActionTypes.GET_EMPLOYEE:
            return state = { ...state, employee: payload };
        case ActionTypes.ADD_EMPLOYEE:
            return { ...state, employees: [...state.employees, payload] }

        case ActionTypes.DELETE_EMPLOYEE:
            console.log(payload)
            // let index = state.employees.findIndex(item => item.LocationID === payload.locationId && item.EmpCode === payload.empCode);
            // return { ...state, employees: state.employees.splice(index, 1) }
            //let dItem = state.employees.find(item => item.LocationID == payload.locationId && item.EmpCode == payload.empCode);
            //return { ...state, employees: state.employees.filter(item => item != dItem) }

            let dItem = state.employees.find(item => {
                console.log("Item-", item)
                return item.LocationID == payload.locId && item.EmpCode == payload.eCode
            });
            console.log(dItem);

            return { ...state, employees: state.employees.filter((item) => dItem != item) };

        default:
            return state;
    }

}

export default employeeReducer;