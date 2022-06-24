import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AddAppoinementPage from './components/addAppointment';
import HomePage from './components/HomePage';
import { TeamsPage } from './components/teams';
import { getTeamsAction } from './store/asyncFunctions/teams';


interface IRoute {
  path: string
  linkText: string
  element: any
  invisible?: boolean
}

const routes = [
  { path: "/teams", linkText: "Teams", element: <TeamsPage />, invisible: false },
  { path: "/", linkText: "Home", element: <HomePage />, invisible: false },
  { path: "/add-appointment", linkText: "Add Appointment", element: <AddAppoinementPage />, invisible: false }
]

function App() {
  return (
    <Router>
      <div className="App" key={Math.random()} style={{ background: "rgba(6,2,1,0.7)", textAlign: "center" }}>
        {routes.filter((route: IRoute) => !route.invisible).map((route: IRoute) => (
          <span style={{ margin: "5px", color: "white" }}>
            <Link style={{ textDecoration: "none", color: "white" }} to={route.path}>{route.linkText}</Link>
          </span>
        ))}
      </div>
      <Routes>
        {routes.map((route: IRoute) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
