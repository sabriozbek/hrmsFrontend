import React from 'react'
import { Menu ,Image,Dropdown} from 'semantic-ui-react'

export default function SignedIn({signOut}) {
    return (
        <div>
    <Menu.Item position="right">
        <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/34921291?s=400&u=856b13977a500d4471a928779516205dc18e650b&v=4"></Image>
        <Dropdown pointing="top left" text="Sabri">
        <Dropdown.Menu>
<Dropdown.Item text="Kişisel Bilgiler" icon="info"/>
<Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>




        </Dropdown.Menu>
        </Dropdown>
    </Menu.Item>
        </div>
    )
}
