import React from 'react';
import { createBrowserHistory } from 'history';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ConstructionContainer from './containers/ConstructionContainer';

import 'assets/scss/material-kit-react.scss?v=1.10.0';

import LandingPage from './components/LandingPage/LandingPage.js';
// import Components from './views/Components/Components.js';
// import LandingPage from './views/LandingPage/LandingPage.js';
// import ProfilePage from './views/ProfilePage/ProfilePage.js';
// import LoginPage from './views/LoginPage/LoginPage.js';

const hist = createBrowserHistory();
// sheeeesh

export default function App() {
  return (
    <>
      <Router history={hist}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
      {/* <Router history={hist}>
        <Routes>
          <Route path="/" element={<Components />} />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/profile-page" element={<ProfilePage />} />
          <Route path="/login-page" element={<LoginPage />} />
        </Routes>
      </Router> */}
    </>
  );
}
