import { render, screen, cleanup } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import DashboardBanner from "../dashboardBanner/DashboardBanner";

afterEach(() => {
    cleanup();
})
const title = "Welcome to your dashboard!";
const description = `Try our new Admin Dashboard Template, 
build with live Ant-Design components. Customize it to your needs and release to production!`

test('should render DashboardBanner molecule', () => {
    render(<DashboardBanner title={title} description={description} />);
    const dashboardBanner = screen.getByTestId('dashboardBanner');
    expect(dashboardBanner).toBeInTheDocument();
    expect(dashboardBanner).toHaveTextContent("Welcome to your dashboard!");
})

test('matches DashboardBanner snapshot', () => {
    const tree = TestRenderer.create(<DashboardBanner title={title} description={description} />).toJSON();
    expect(tree).toMatchSnapshot();
})