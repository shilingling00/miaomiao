const state={
    name:window.localStorage.getItem('cityName')||'北京',
    id:window.localStorage.getItem('cityId')||1

};
const action={

};
const mutations={
    changeCity(state,payload){
        state.name=payload.name;
        state.id=payload.id
    }

};
export default{
    namespaced:true,
    state,
    action,
    mutations
}