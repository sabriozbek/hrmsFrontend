import React from 'react'
import { Button, Divider, Form, Grid, Segment } from 'semantic-ui-react'

export default function Login() {
    return (
        <div>
             <Segment placeholder>
    <Grid columns={2} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='mail'
            iconPosition='left'
            label='E-mail'
            placeholder='e-mail'
            type='mail'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Şifre'
            type='password'
          />

          <Button content='Giriş Yap' primary />
        </Form>
      </Grid.Column>

      <Grid.Column verticalAlign='middle'>
        <Button content='Kayıt Ol' icon='signup' size='big' />
      </Grid.Column>
    </Grid>

    <Divider vertical>Ya da</Divider>
  </Segment>
        </div>
    )
}
