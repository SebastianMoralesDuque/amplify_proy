import './App.css';
import { useAuthenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';

Auth.configure(aws_exports);

function App() {
  const { signOut } = useAuthenticator();
  return (
    <>
      <h1>Hello</h1>
      <button onClick={signOut}>Log out</button>
    </>
  );
}

export default withAuthenticator(App);
