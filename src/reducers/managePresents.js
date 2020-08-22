import { render } from "react-dom";

export function managePresents(state = {
    numberOfPresents: 0,
}, action){
    switch(action.type){
        case "INCREASE":
        return Object.assign({}, state {
            numberOfPresents: state.numberOfPresents+ 1 
        })

        default:
            return state;

    }
}

function render(){
    document.body.textContent= state.count
}

function dispatch(action){
    state = changeState(state, action)
    render()
}

dispatch({ type: 'INCREASE_COUNT' })
