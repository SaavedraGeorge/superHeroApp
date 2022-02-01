import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";




describe('tests authReducer', () => {


  test('should return default state', () => {

    // le envio el estado inicial y la accion como un objeto vacio
    const state = authReducer({logged: false}, {});
    expect( state ).toEqual({logged: false});
  });
  
  test('should cambiar usuario y logged', () => {
    const action = {
        type: types.login,
        payload: {
            name: 'jorge'
        }
    }

    const state = authReducer({logged: false}, action);
    
    expect( state ).toEqual({
        logged: true,
        name: 'jorge'
    });
  });

  test('should logout test', () => {
    const action = {
        type: types.logout,
    }
    const state = authReducer({logged: true, name: 'pepe'}, action);
    
    expect( state ).toEqual({logged: false})

  });
  
  
});
