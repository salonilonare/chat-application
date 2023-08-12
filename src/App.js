import { ChatEngine } from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () =>{
if(!localStorage.getItem('username')) return <LoginForm />

    return(
        <ChatEngine
        height="100vh"
        projectID="23796238-1736-40c9-84c2-157a3aaa958e"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    );
}
export default App;