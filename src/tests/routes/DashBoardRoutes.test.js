import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { AuthContex } from "../../auth/authContex";
import { DashBoardRoutes } from "../../routes/DashBoardRoutes";



describe('pruebas en <DashboardRoutes />', () => {

    const contextValue = {
        user: {
            name: 'John',
            logged: true
        }
    } 
  test('should show correctly page /marvel', () => {
    const wrapper = mount(
        <AuthContex.Provider value={contextValue}>
            <MemoryRouter initialEntries={ ['/']}>
                <DashBoardRoutes />
            </MemoryRouter>
        </AuthContex.Provider>
    )
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.text-info').text().trim()).toBe('John');
    expect(wrapper.find('h1').text().trim()).toBe('Marvel Comics Heroes List');
  });
  test('should show correctly page /dc', () => {
    const wrapper = mount(
        <AuthContex.Provider value={contextValue}>
            <MemoryRouter initialEntries={ ['/dc']}>
                <DashBoardRoutes />
            </MemoryRouter>
        </AuthContex.Provider>
    )
    
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('DC Comics Heroes List');
  });
  
});
