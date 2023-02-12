const state={
    userName:window.localStorage.getItem('username')||'',
    isAdmin:window.localStorage.getItem('isAdmin')||false,

}
const mutations={
    CHANGE_NAME(state,payload){
        state.userName=payload.userName;
        state.isAdmin=payload.isAdmin;
    }


}
const action={

}
export default{
    namespaced:true,
    state,
    action,
    mutations
}