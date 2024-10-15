// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Ensure it's used
import store from './store'; // Ensure it's used
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup'; // Ensure it's used
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Provider store={store}> {/* Redux Provider wrapper */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Redirect root to Login */}
          <Route path="/signup" element={<Signup />} /> {/* Ensure this is used */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
