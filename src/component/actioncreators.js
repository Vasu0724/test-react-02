import { addtoList, deleteList, clearList } from "./constants";

function addtoList0(val){
    return{
    type: addtoList,
    payload: val
}}

function deleteList0(val){
    return{
        type: deleteList,
        payload: val
    }
}

function clearList0(val){
    return{
        type: clearList,
    }
}

export {addtoList0, deleteList0, clearList0}