import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import TestRenderer from 'react-test-renderer';
import SideMenuItem from "../sideMenuItem/SideMenuItem";

afterEach(()=>{
    cleanup();
})
const onClick = jest.fn()

test('should render sideMenuItem component', () => {
    render(<SideMenuItem title="Dashboard" icon="dashboard" path="/home/dashboard" onItemClicked={onClick} />);
    const sideMenuItem = screen.getByTestId('sideMenuItem');
    expect(sideMenuItem).toBeInTheDocument();
    expect(sideMenuItem).toHaveTextContent('Dashboard');
})

test('should render BarChart Icon when passing dashboard as icon prop', () => {
    render(<SideMenuItem title="Dashboard" icon="dashboard" path="/home/dashboard" onItemClicked={onClick} />);
    const dashboardMenuItem = screen.getByTestId('dashboardMenuItem');
    expect(dashboardMenuItem).toBeInTheDocument();
})

test('should render ShoppingCart Icon when passing orders as icon prop', () => {
    render(<SideMenuItem title="Orders" icon="orders" path="/home/orders" onItemClicked={onClick} />);
    const ordersMenuItem = screen.getByTestId('ordersMenuItem');
    expect(ordersMenuItem).toBeInTheDocument();
})

test('should render PersonOutline Icon when passing account as icon prop', () => {
    render(<SideMenuItem title="Account" icon="account" path="/home/account" onItemClicked={onClick} />);
    const acoountMenuItem = screen.getByTestId('acoountMenuItem');
    expect(acoountMenuItem).toBeInTheDocument();
})

test('should render SettingsIcon Icon when passing settings as icon prop', () => {
    render(<SideMenuItem title="Settings" icon="settings" path="/home/settings" onItemClicked={onClick} />);
    const settingsMenuItem = screen.getByTestId('settingsMenuItem');
    expect(settingsMenuItem).toBeInTheDocument();
})

test('should execute callback function when clicking the sideMenuItem', () => {
    render(<SideMenuItem title="Dashboard" icon="dashboard" path="/home/dashboard" onItemClicked={onClick} />);
    const sideMenuItem = screen.getByTestId('sideMenuItem');
    fireEvent.click(sideMenuItem)  
    expect(onClick).toHaveBeenCalledTimes(1);    
})

test('matches sideMenuItem snapshot', () => {
    const tree = TestRenderer.create(<SideMenuItem title="Dashboard" icon="dashboard" path="/home/dashboard" onItemClicked={onClick} />).toJSON();
    expect(tree).toMatchSnapshot();
})