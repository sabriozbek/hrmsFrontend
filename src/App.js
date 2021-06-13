import './App.css';
import Dashboard from './layouts/Dashboard';
import Navi from './layouts/Navi.js'
import {Container,Message } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
   <Message
   color="blue"
    info
    header='Siteye Hoşgeldin!'
    content="Şu anda yapım aşamasında..."
  />
       <Navi></Navi>
       <Container className="main">
       <Dashboard></Dashboard>
       </Container>
       <Footer></Footer>

    </div>
    
  );
}

export default App;
