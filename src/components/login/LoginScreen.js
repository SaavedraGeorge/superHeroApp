import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContex } from "../../auth/authContex";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const navegate = useNavigate();

  const context = useContext(AuthContex);
 
  



  const onChangeLogin = () => {

    const lastPath = localStorage.getItem( "lastPath" ) || "/marvel";
    
    const action = {
      type: types.login,
      payload: {
        name: 'Usuario Prueba'
      }
    }
    context.dispatch(action);

    //le estoy asignando una ruta '/' y le estoy pidiendo que reemplace el historial de navegacion 
     navegate( lastPath ,{
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
