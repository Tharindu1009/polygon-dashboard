import { render, screen, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import GrowthIndicator from "../chart/growthIndicator/GrowthIndicator";

afterEach(()=>{
    cleanup();
})

test('should render growthIndicator component', () => {
    render(<GrowthIndicator direction="up" percentage="1.10" content="Since yesterday" />);
    const growthIndicator = screen.getByTestId('growthIndicator');
    expect(growthIndicator).toBeInTheDocument();
    expect(growthIndicator).toHaveTextContent('1.10 %');
    expect(growthIndicator).toHaveTextContent('Since yesterday');
})

test('should render growthIndicator component with up arrow when direction is up', () => {
    render(<GrowthIndicator direction="up" percentage="1.10" content="Since yesterday" />);
    const upArrow = screen.getByTestId('upArrow');
    expect(upArrow).toBeInTheDocument();
})

test('should render growthIndicator component with down arrow when direction is down', () => {
    render(<GrowthIndicator direction="down" percentage="1.10" content="Since yesterday" />);
    const downArrow = screen.getByTestId('downArrow');
    expect(downArrow).toBeInTheDocument();
})

test('matches growthIndicator snapshot', () => {
    const tree = TestRenderer.create(<GrowthIndicator direction="up" percentage="1.10" content="Since yesterday" />).toJSON();
    expect(tree).toMatchSnapshot();
})