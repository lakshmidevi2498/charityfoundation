import * as types from './actionTypes'


export const postDonarDataStart=()=>{
    return{
        type:types.CREATE_DONER_DATA_START
    }   
};

export const postDonarDataSuccess=(data)=>{
    console.log("this is postdatasuccessaction---->",data)
    return{
        type:types.CREATE_DONER_DATA_SUCCESS,
        payload:data
    }
};

export const postDonarDataError=(error)=>{
    console.log("this is postdataerrorsaction---->")
    return{
        type:types.CREATE_DONER_DATA_ERROR,
        payload:error
    }
}