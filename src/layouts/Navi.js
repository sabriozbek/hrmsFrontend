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
        <Menu      stackable secondary tabular borderless>
          <Container > 
        <Menu.Item className="logoTxt" name='HRMS'>
          
        </Menu.Item>
         
          <Menu.Item as={NavLink} to="/"
            name='Ana Sayfa'
          className="navbar"
          />
          <Menu.Item as={NavLink} to="/jobadvert"
            name='İş İlanları'
            className="navbar"
       
          />
          <Menu.Item as={NavLink} to="/candidate" 
            name='İş Arayanlar'
            className="navbar"
        
          />
          <Menu.Item    secondary   as={NavLink} to='/jobAdvertAdd'
name='İlan Ekle'      
className="navbar"
icon="add square" 
   />
<Menu.Menu position='right' >

  {isAuthenticated?<SignedIn signOut={handleSignOut}/>
  :<SignedOut signIn={handleSignIn}/>}

      
</Menu.Menu>

     
    
    </Container>
        </Menu>
   
        </Segment>
        </div>
    )
}

