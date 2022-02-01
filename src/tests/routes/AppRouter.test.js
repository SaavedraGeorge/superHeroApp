import { mount } from "enzyme";
import { AuthContex } from "../../auth/authContex";
import { AppRouter } from "../../routes/AppRouter";



describe('test in <AppRouter />', () => {
    test('should enviar al asuario no registrado al /login', () => {
        const contextValue = {
            user: {
                logged: false
            }
        }
        const wrapper = mount(
            <AuthContex.Provider value={contextValue}>
                <AppRouter />
            </AuthContex.Provider>
        );
        
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');
    });
    test('should enviar al asuario registrado al /marvel', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'John'
            }
        }
        const wrapper = mount(
            <AuthContex.Provider value={contextValue}>
                <AppRouter />
            </AuthContex.Provider>
        );
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists()).toBe(true);
    });  
});
