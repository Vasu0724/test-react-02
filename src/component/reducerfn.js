
import { addtoList, clearList, deleteList } from "./constants";
import intialState from "./intialstate";

const reducerfn = (state = intialState, action)=>{
    switch(action.type){

        case addtoList:
            return{
                ...state,
                products: [...state.products,action.payload],
                count: state.count + 1,
                totalAmount: state.totalAmount + action.payload.amount
            }
        case deleteList:
            return{
                ...state,
                products: state.products.filter(
                (prod) => prod !== action.payload
                ),
                count: state.count - 1,
                totalAmount: state.totalAmount - action.payload.amount

            }
        case clearList:
            return{
                ...state,
                products:[],
                count:0,
                totalAmount: 0
            }
        default:
            return state
    }
}

export default reducerfn