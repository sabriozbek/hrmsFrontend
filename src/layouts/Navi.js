import logo from '../logo.png'

import React ,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'




import { Menu, Segment,Button,Container,Icon} from 'semantic-ui-react'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink, useHistory } from 'react-router-dom'
export default function Navi() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  const size = {
    height: 35,
    width: 60
}
const history= useHistory()
function handleSignOut(){
       setIsAuthenticated(false) 
       history.push("/")

}
function handleSignIn(){
  setIsAuthenticated(true) 
}
    return (
      
      
        <div >
             
             <Segment secondary floated >
        <Menu  secondary    >
          <Container > 
        <Menu.Item >
          
          <img src={logo} alt="logo" />
        </Menu.Item>
         
          <Menu.Item as={NavLink} to="/"
            name='Ana Sayfa'
          
          />
          <Menu.Item as={NavLink} to="/jobadvert"
            name='İş İlanları'
       
          />
          <Menu.Item as={NavLink} to="/candidate"
            name='İş Arayanlar'
        
          />
<Menu.Menu position='right' >
<Button   secondary   as={NavLink} to='/jobAdvertAdd'>
     İlan Ekle
     
   </Button>
  {isAuthenticated?<SignedIn signOut={handleSignOut}/>
  :<SignedOut signIn={handleSignIn}/>}

      
</Menu.Menu>

     
    
    </Container>
        </Menu>
   
        </Segment>
        </div>
    )
}

