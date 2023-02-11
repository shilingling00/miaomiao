const state={
    userName:''

}
const mutations={
    CHANGE_NAME(state,payload){
        state.userName=payload.userName;
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