import React from 'react'
import { Button, Menu ,Icon,Divider} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function SignedOut({signIn}) {
    return (
        <div >
          <Menu  size="large" secondary  >
            <Menu.Item >
              
      <Button secondary inverted     as={NavLink} to='/Login' >Kayıt Ol <Icon name="add user" fitted  disabled ></Icon> </Button>
      
    </Menu.Item>
    

    <Menu.Item>
    <Button secondary inverted onClick={signIn} >Giriş Yap <Icon name="user" fitted  disabled ></Icon></Button>
    </Menu.Item>
   
    </Menu> 
        </div>
    )
}
