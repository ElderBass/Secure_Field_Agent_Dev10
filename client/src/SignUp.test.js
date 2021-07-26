import { shallow } from 'enzyme';
import SignUp from './components/SignUp';

it("should display warning when passwords don't match", () => {
    const wrapper = shallow(<SignUp />);


    wrapper.find("#password")
        .simulate("change", { target: { name: "password", value: "abcd123!" } });


    expect(wrapper.contains(<div id="errorsDiv">
        <h3>Corrupt Data</h3>
        <ul>
            <li>Passwords must match. You know the drill.</li>
        </ul>
    </div>)).toBe(true);
});