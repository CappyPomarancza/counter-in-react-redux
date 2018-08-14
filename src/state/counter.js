

const INC = 'counter/INC'
const DEC = 'counter/DEC'
const RESET = 'counter/RESET'
const ADD = 'counter/ADD'
const SUBSTRACT = 'counter/SUBSTRACT'

export const incAction = () => (
    {
        type: INC
    }
)
export const decAction = () => (
    {
        type: DEC
    }
)
export const resetAction = () => (
    {
        type: RESET
    }
)

export const addAction = (number) => (
    {
        type: ADD,
        number
    }
)
export const substractAction = (number) => (
    {
        type: SUBSTRACT,
        number
    }
)

export const initialState = {
    number: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                number: state.number + 1
            }
        case DEC:
            return {
                ...state,
                number: state.number - 1
            }
        case RESET:
            return {
                ...state,
                number: state.number = 1
            }
        case ADD:
            return {
                ...state,
                number: state.number + action.number
            }
        case SUBSTRACT:
            return {
                ...state,
                number: state.number - action.number
            }
        default:
            return state
    }
}



