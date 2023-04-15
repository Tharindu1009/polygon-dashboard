import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { menuRoutes } from "./routes/menuRoutes";
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  let routes = (
    <Routes>
      <Route path="/home" element={<Home />}>
        <Route index element={<Dashboard />} />
        {/* iterate all sidemenu routes */}
        {menuRoutes.map((prop, key) => {
          return <Route exact path={prop.path} element={<prop.component />} key={key} />;
        })}
      </Route>
      <Route path="/" element={<Login />} />
    </Routes>
  );

  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  );
}

export default App;
