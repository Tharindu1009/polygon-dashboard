import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Account from "../pages/Account";
import Settings from "../pages/Settings";

export const menuRoutes = [
    {
        path: "/home/dashboard",
        name: "Dashboard",
        icon: "dashboard",
        component: Dashboard
    },
    {
        path: "/home/orders",
        name: "Orders",
        icon: "orders",
        component: Orders
    },
    {
        path: "/home/account",
        name: "Account",
        icon: "account",
        component: Account
    },
    {
        path: "/home/settings",
        name: "Settings",
        icon: "settings",
        component: Settings
    }    
];


