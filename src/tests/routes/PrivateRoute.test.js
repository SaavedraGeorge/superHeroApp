import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import { AuthContex } from '../../auth/authContex'
import { PrivateRoutes } from '../../routes/PrivateRoutes'


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span>Saliendo de aquí</span>
}));


describe('Pruebas en <PrivateRoute />', () => {
    

    Storage.prototype.setItem = jest.fn();

    test('debe de mostrar el componente si está autenticado y guardar en el localStorage', () => {
    
        const contextValue = {
            user: {
                logged: true,
                name: 'Pepe'
            }
        };

        const wrapper = mount(
            <AuthContex.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoutes>
                        <h1>Private Component</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContex.Provider>
        );

        expect( wrapper.text().trim() ).toBe('Private Component');
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/');

    });

    test('debe de mostrar el componente si está autenticado y guardar en el localStorage', () => {
    
        const contextValue = {
            user: {
                logged: false
            }
        };

        const wrapper = mount(
            <AuthContex.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/']}>
                    <PrivateRoutes>
                        <h1>Private Component</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContex.Provider>
        );

        expect( wrapper.text().trim() ).toBe('Saliendo de aquí');

    });

    
    

    

})