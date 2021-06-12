import logo from '../logo.png'

import React ,{useState,useEffect} from 'react'




import { Menu, Segment,Button,Container} from 'semantic-ui-react'
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
      
      
        <div>
             
             <Segment >
        <Menu  secondary  >
          <Container>
        <Menu.Item >
          
          <img src={logo} alt="logo" style={size}/>
        </Menu.Item>
         
          <Menu.Item as={NavLink} to="/"
            name='Ana Sayfa'
          
          />
          <Menu.Item as={NavLink} to="/jobadvert"
            name='İş İlanları'
       
          />
          <Menu.Item 
            name='İş Arayanlar'
        
          />
<Menu.Menu position='right'>
  {isAuthenticated?<SignedIn signOut={handleSignOut}/>
  :<SignedOut signIn={handleSignIn}/>}

      
</Menu.Menu>

     
    
    </Container>
        </Menu>
   
        </Segment>
        </div>
    )
}

