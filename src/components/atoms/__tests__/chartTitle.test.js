import { render, screen, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import ChartTitle from "../chart/chartTitle/ChartTitle";

afterEach(()=>{
    cleanup();
})

test('should render ChartTitle component', () => {
    render(<ChartTitle title="Last Open & Close Prices"/>);
    const chartTitleElement = screen.getByTestId('chartTitle');
    expect(chartTitleElement).toBeInTheDocument();
    expect(chartTitleElement).toHaveTextContent('Last Open & Close Prices');
})

test('matches chartTitle snapshot', () => {
    const tree = TestRenderer.create(<ChartTitle title="Last Open & Close Prices"/>).toJSON();
    expect(tree).toMatchSnapshot();
})