import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const Item = ({data}) => (
  <Card>
    <Image src='{data.avatar_url}' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{data.login}</Card.Header>
      <Card.Meta>
        <span className='date'>{data.id}</span>
      </Card.Meta>
      <Card.Description>
        {data.url}
      </Card.Description>
    </Card.Content>
    
  </Card>
)

export default Item;