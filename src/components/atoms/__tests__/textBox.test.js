import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import TextBox from "../textBox/TextBox";

afterEach(() => {
    cleanup();
})
const onClick = jest.fn()

test('should render textBox component', () => {
    render(<TextBox id="username" type="text" icon="user" size="small" placeholder="Username"
        onChange={onClick} error={false} helperText="" />);

    const textBoxElement = screen.getByTestId('textBox');
    expect(textBoxElement).toBeInTheDocument();
})

test('should render PersonOutline Icon when passing user as icon prop', () => {
    render(<TextBox id="username" type="text" icon="user" size="small" placeholder="Username"
        onChange={onClick} error={false} helperText="" />);
    const userIconElement = screen.getByTestId('userIcon');
    expect(userIconElement).toBeInTheDocument();
})

test('should render Lock Icon when passing lock as icon prop', () => {
    render(<TextBox id="username" type="text" icon="lock" size="small" placeholder="Username"
        onChange={onClick} error={false} helperText="" />);
    const lockIconElement = screen.getByTestId('lockIcon');
    expect(lockIconElement).toBeInTheDocument();
})

test('should render Search Icon when passing search as icon prop', () => {
    render(<TextBox id="username" type="text" icon="search" size="small" placeholder="Username"
        onChange={onClick} error={false} helperText="" />);
    const searchIconElement = screen.getByTestId('searchIcon');
    expect(searchIconElement).toBeInTheDocument();
})

test('should display helperText when TextBox has helperText', () => {
    render(<TextBox id="username" type="text" icon="search" size="small" placeholder="Username"
        onChange={onClick} error={false} helperText="Required Username" />);
        const textBox = screen.getByTestId('textBox');
    expect(textBox).toBeInTheDocument();
    expect(textBox).toHaveTextContent('Required Username');
})

test('should execute handler function when onChange textBox', () => {
    render(<TextBox id="username" type="text" icon="search" size="small" placeholder="Username"
        onChange={onClick} error={false} helperText="" />);
    const textBox = screen.getByTestId('textBox');
    fireEvent.keyUp(textBox)
    expect(onClick).toHaveBeenCalledTimes(1);    
})

test('matches textBox snapshot', () => {
    const tree = TestRenderer.create(<TextBox id="username" type="text" icon="user" size="small" placeholder="Username"
        onChange={onClick} error={false} helperText="" />).toJSON();
    expect(tree).toMatchSnapshot();
})