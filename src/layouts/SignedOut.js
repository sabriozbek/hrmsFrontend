import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default function SignedOut({signIn}) {
    return (
        <div >
          <Menu  size="large" secondary  >
            <Menu.Item>
      <Button primary inverted     as={NavLink} to='/Login'>Kayıt Ol</Button>
      
    </Menu.Item>
    

    <Menu.Item>
    <Button primary onClick={signIn} >Giriş Yap </Button>
    </Menu.Item>
    
    </Menu> 
        </div>
    )
}
