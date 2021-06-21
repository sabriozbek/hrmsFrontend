import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default function Categories() {
  
    return (
      
        <div > 
          <h3>Kategoriler</h3>
          <br></br>
            <Menu pointing secondary vertical floated className="categoryBox" >
        <Menu.Item as={NavLink} to="/jobadvert" 
        icon="bullhorn"
          name='İş İlanları'
      

    
        />
        <Menu.Item as={NavLink} to="/jobposition"
        icon="clipboard list
        "
          name='İş Pozisyonları'
         
        />
        <Menu.Item as={NavLink} to="/candidate"
icon="user"
          name='İş Arayanlar'
      
        />

<Menu.Item as={NavLink} to="/jobAdvertConfirm"
icon="edit"
          name='İş İlanı Onayları'
      
        />
      </Menu>
        </div>
    )
  
}
