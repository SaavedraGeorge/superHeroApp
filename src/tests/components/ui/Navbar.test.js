import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContex } from "../../../auth/authContex";
import { Navbar } from "../../../components/ui/Navbar";
import { types } from "../../../types/types";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('pruebas en <Navbar />', () => {
    const contextValue = {
        user: {
            name: 'John',
            logged: true
        },
        dispatch: jest.fn()
    }

    const wrapper = mount(
        <AuthContex.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<Navbar />} />
                </Routes>
            </MemoryRouter>
        </AuthContex.Provider>
    )
    test('should show correctly', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('John');
    });
    test('debe llamar logout, llamar navigate y el dispatch con los argumentos', () => {

        wrapper.find('button').prop('onClick')()

        expect(contextValue.dispatch).toHaveBeenCalledWith({"type": types.logout});
        expect(mockNavigate).toHaveBeenCalledWith('/login', {replace: true});
    });
    
});
