import axiosClient from "../../config/axiosClient"
import UserContext from "./UserContext"
import { useReducer } from "react"
import userReducer from "./userReducer"
import { useNavigate } from "react-router-dom"


const UserProvider = ({ children }) => {

  const navigate = useNavigate()

  const initialState = {
    infoUser: [], //informacion del usuario conectado
    authStatus: false //estado de conexion (por defecto en falso)
  }

  // Debo inicializar un estado initialState con (useReducer)
  const [userState, dispatch] = useReducer(userReducer, initialState)

  // Iniciar Sesión
  const loginUser = async (user) => {
    try {
      const userLogin = await axiosClient.post("/login", user)
      const userOn = userLogin.data
      console.log(userOn)
      console.log(userOn.token)

      if (userOn.success) { //si el usuario esta conectado, entonces llama al dispatch
        dispatch({
          type: "REGISTER/LOGIN",  //se utiliza el usereducer (de switch case)
          payload: userOn.token
        })
      }
    } catch (error) {
      // muestra error en caso de contraseña incorrecta
      throw new Error("Email o contraseña incorrecta!");
    }
  }

  // Crear o registrar usuario
  const registerUser = async (user) => {
    try {
      const userRegister = await axiosClient.post("/user", user)
      const userOn = userRegister.data
      console.log(userOn)
      console.log(userOn.token)

      if (userOn.success) { //si el usuario esta conectado, entonces llama al dispatch
        dispatch({
          type: "REGISTER/LOGIN",  //se utiliza el usereducer (de switch case)
          payload: userOn.token
        })
      }

    } catch (error) {
      throw new Error("Email en uso!");
    }
  }

  // Editar usuario registrado
  const editUser = async (userId, updatedUserData) => {
    try {
      const response = await axiosClient.put(`/user/${userId}`, updatedUserData);
      console.log("ID del usuario:", userId);
      if (response.data.success) {
        const updatedInfoUser = { ...userState.infoUser, ...updatedUserData };
        dispatch({
          type: "INFO_USER",
          payload: updatedInfoUser,
        });

        navigate("/user/profile");
      }
    } catch (error) {
      console.error("Error al editar el usuario:", error.message);
    }
  };

  // Verificar Token de usuario
  const verifyToken = async () => {
    const token = localStorage.getItem("token")

    if (token) {// si hay un token, osea token es true  
      console.log("Token encontrado en localStorage:", token);
      axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
    } else {
      delete axiosClient.defaults.headers.common["Authorization"]
    }

    try {
      const infoUserVerify = await axiosClient.get("/verifyUser")
      
      dispatch({
        type: "INFO_USER",
        payload: infoUserVerify.data.info
      })
    } catch (error) {
      console.log(error)
    }
  }

  // Cerrar Sesión
  const signOut = async () => {
    try {
      dispatch({ type: "SIGN_OUT" })
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  
  return (
    <UserContext.Provider value={{
      loginUser,
      registerUser,
      verifyToken,
      signOut,
      editUser,
      infoUser: userState.infoUser,
      authStatus: userState.authStatus
    }}>{children}</UserContext.Provider>
  )
}

export default UserProvider