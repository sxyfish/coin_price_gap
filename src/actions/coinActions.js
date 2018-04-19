import actionTypes from './actionTypes';
import coinApi from '../api/coinApi';
import toastr from "toastr";

export function loadCoinsSuccess(coins){
    debugger;
    return{type:actionTypes.LOAD_COIN_SUCCESS,coins:coins};
}
export function loadCoins(){
    return function(dispatch){
        return coinApi.getCoinArray().then(res=>{
            debugger;
            dispatch(loadCoinsSuccess(res.data));
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