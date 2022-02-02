import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import { SearchScreen } from "../../../components/search/SearchScreen";


const mockNavigate = jest.fn();

jest.mock('react-router-dom', ()=> ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}))

describe('puevas en <searchScreen/>', () => {
  test('should show correctly', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen />
        </MemoryRouter>
    )
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Busca un heroe');
  });
  test('should show correctly batman Search', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/search?q=batman']}>
            <SearchScreen />
        </MemoryRouter>
    )
    expect(wrapper.find('input').prop('value')).toBe('batman');
  });
  test('should show error in the search', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/search?q=wrong']}>
          <SearchScreen />
      </MemoryRouter>
  )
  expect(wrapper.find('.alert-danger').text().trim()).toBe('No hay resultados para la busqueda: wrong');
  });
  test('debe de llamar el navigate a la nueva pantalla ', () => {
        
    const wrapper = mount( 
        <MemoryRouter initialEntries={['/search']}>
            <SearchScreen /> 
        </MemoryRouter>
    );

    wrapper.find('input').simulate('change', {
        target: {
            name: 'searchText',
            value: 'batman'
        }
    });

    wrapper.find('form').prop('onSubmit')({
        preventDefault(){}
    })

    expect( mockNavigate ).toHaveBeenCalledWith('?q=batman');


})
  
});
