import actionTypes from './actionTypes';
import coinApi from '../api/coinApi';
import toastr from "toastr";

export function loadExchangesSuccess(exchanges){
    debugger;
    return{type:actionTypes.LOAD_EXCHANGE_SUCCESS,exchanges:exchanges};
}
export function loadExchanges(){
    return function(dispatch){
        return coinApi.getExchangeArray().then(res=>{
            debugger;
            dispatch(loadExchangesSuccess(res.data["Data"]));
        }).catch(error=>{
            //throw(error);
            toastr(error);
        });
    };
}

// export function saveCoineSuccess(coin){
//     return{type:actionTypes.SAVE_COIN_SUCCESS,coin:coin};
// }


// export function saveCoinse(coin){
//     return function(dispatch,getState){
//         return coinApi.saveCourse(course)
//         .then(courseSaved=>{
//             course.id?dispatch(saveCourseSuccess(courseSaved)):dispatch(updateCourseSuccess(courseSaved))})
//         .catch(error=>{throw(error);});
//     };
// }