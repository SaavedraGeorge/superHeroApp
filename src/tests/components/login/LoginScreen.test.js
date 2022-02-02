import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContex } from "../../../auth/authContex";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";

const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))


describe('pruebas en <LoginScreen />', () => {
    const contextValue = {
        user: {
            logged: false
        },
        dispatch: jest.fn()
    }
    
    const wrapper = mount(
        <AuthContex.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path="/login" element={<LoginScreen />} />
                </Routes>
            </MemoryRouter>
        </AuthContex.Provider>
    )

    test('should show correctly snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    test('debe de realizar el dispatch y la navegación', () => {
        
        const handleClick = wrapper.find('button').prop('onClick');
        handleClick();
        
        expect( contextValue.dispatch ).toHaveBeenCalledWith({
            type: types.login,
            payload: { name: 'Usuario Prueba' }
        });

        expect( mockNavigate ).toHaveBeenCalledWith('/marvel', { replace: true });

        localStorage.setItem('lastPath', '/dc')
 
        handleClick();

        expect( mockNavigate ).toHaveBeenCalledWith('/dc', { replace: true });
    })
    
    
});
