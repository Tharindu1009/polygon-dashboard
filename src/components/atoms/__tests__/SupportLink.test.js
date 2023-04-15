import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import SupportLink from "../supportLink/SupportLink";

afterEach(()=>{
    cleanup();
})

test('should render supportLink component', () => {
    render(<SupportLink title="Chat" icon="chat" />);
    const supportLinkElement = screen.getByTestId('supportLink');
    expect(supportLinkElement).toBeInTheDocument();
    expect(supportLinkElement).toHaveTextContent('Chat');
})

test('should render Chat Icon when passing chat as icon prop', () => {
    render(<SupportLink title="Chat" icon="chat" />);
    const chatIcon = screen.getByTestId('chatIcon');
    expect(chatIcon).toBeInTheDocument();
})

test('should render Faq Icon when passing faq as icon prop', () => {
    render(<SupportLink title="FAQ" icon="faq" />);
    const faqIcon = screen.getByTestId('faqIcon');
    expect(faqIcon).toBeInTheDocument();
})

test('matches supportLink snapshot', () => {
    const tree = TestRenderer.create(<SupportLink title="FAQ" icon="faq" />).toJSON();
    expect(tree).toMatchSnapshot();
})