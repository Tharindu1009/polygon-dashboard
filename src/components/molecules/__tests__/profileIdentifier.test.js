import { render, screen, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import ProfileIdentifier from "../profileIdentifier/ProfileIdentifier";

afterEach(() => {
    cleanup();
})

test('should render ProfileIdentifier molecule', () => {
    render(<ProfileIdentifier name="user1009" isDisplayName={true} />);
    const profileIdentifier = screen.getByTestId('profileIdentifier');
    expect(profileIdentifier).toBeInTheDocument();
    expect(profileIdentifier).toHaveTextContent("user1009");
})

test('matches ProfileIdentifier snapshot', () => {
    const tree = TestRenderer.create(<ProfileIdentifier name="user1009" isDisplayName={true} />).toJSON();
    expect(tree).toMatchSnapshot();
})