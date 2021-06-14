import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  
    return (
      
        <div>
          <h3>Kategoriler</h3>
          <br></br>
            <Menu pointing secondary vertical floated>
        <Menu.Item as={NavLink} to="/jobadvert"
          name='İş İlanları'
      

    
        />
        <Menu.Item as={NavLink} to="/jobposition"
          name='İş Pozisyonları'
         
        />
        <Menu.Item as={NavLink} to="/candidate"
          name='İş Arayanlar'
      
        />
      </Menu>
        </div>
    )
  
}
