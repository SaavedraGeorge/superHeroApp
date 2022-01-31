import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../../auth/authContex";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const navegate = useNavigate();

  const context = useContext(AuthContex);
  console.log();

  const onChangeLogin = () => {
    const action = {
      type: types.login,
      payload: {
        name: 'Usuario Prueba'
      }
    }
    context.dispatch(action);

    //le estoy asignando una ruta '/' y le estoy pidiendo que reemplace el historial de navegacion 
     navegate('/',{
       replace: true,
    });

    
  }
  return(
      <div className="container mt-5">
          <h1>Login</h1>
          <hr />
          <button 
            className="btn btn-primary"
            onClick={onChangeLogin}
          >Login</button>

      </div>
  );
};
