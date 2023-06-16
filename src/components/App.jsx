import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../assets/App.css';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import aws_exports from '../aws-exports';
import Navbar from './Navbar';
import AppRoutes from './Routes'; // Importa el componente AppRoutes

Auth.configure(aws_exports);

function App() {
  const { signOut } = useAuthenticator();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await Auth.currentAuthenticatedUser();
        setUser(userData);
      } catch (error) {
        console.log('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  return (
    <Router>
      <Navbar user={user} signOut={signOut} />
      <AppRoutes /> {/* Agrega el componente de rutas */}
    </Router>
  );
}

export default withAuthenticator(App);
