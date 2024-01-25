

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "REGISTER/LOGIN":
            // aca se puede ocupar cookies o localstorage
            localStorage.setItem("token", payload) // Bearer  carga "token (header.payload.firma)""
            return {
                ...state,
                authStatus: true
            }
        case "INFO_USER":
            return {
                ...state,
                infoUser: payload,
                authStatus: true
            }
        case "SIGN_OUT":
            localStorage.removeItem("token")
            return {
                ...state,
                infoUser: [],
                authStatus: false
            }
        
        default:
            return state;
    }
}

export default userReducer;