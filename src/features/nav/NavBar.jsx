import { Menu , Container , Button, MenuItem} from 'semantic-ui-react'

export default function NavBar({setFormOpen}){

    return(
        <Menu inverted fixed='top'>
          <Container>
            <Menu.Item header>
                <img src="/assests/logo.png" alt="logo" style={{marginRight: 15}} />
                Re-vents
            </Menu.Item>
            <Menu.Item name='Events' />
            <Menu.Item>
                <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
            </Menu.Item>
            <Menu.Item position='right'>
                <Button basic inverted content='Login' />
                <Button basic inverted content='Register' style={{'marginLet': '0.05em'}} />
            </Menu.Item>
          </Container>
        </Menu>
    )
}