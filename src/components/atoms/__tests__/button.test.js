import { render, screen, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import Button from "../button/Button";

afterEach(()=>{
    cleanup();
})

test('should render button component', () => {
    render(<Button type="submit" label="Log in" />);
    const btnElement = screen.getByTestId('button');
    expect(btnElement).toBeInTheDocument();
    expect(btnElement).toHaveTextContent('Log in');
})

test('matches button snapshot', () => {
    const tree = TestRenderer.create(<Button type="submit" label="Log in" />).toJSON();
    expect(tree).toMatchSnapshot();
})