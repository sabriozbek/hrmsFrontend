import React from 'react'
import { Card, Icon, Image,Button } from 'semantic-ui-react'
import candidateService from '../services/candidateService'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
export default function CandidateList() {
  
  

    const [candidates, setCandidates] = useState([]);
    useEffect(()=>{
  
  let candidates =new candidateService()
      candidates.getCandidates().then(result=>setCandidates(result.data.data))
    },[])

  


    return (
        <div>
            <h1>İş Arayanlar</h1>
          
    {
      candidates.map((candidate)=>(
        <Card.Group itemsPerRow={2}>
        <Card >
        
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png'  wrapped ui={false} />
        <Card.Content>
          <Card.Header>{candidate.firtsName} {candidate.lastName}</Card.Header>
          <Card.Meta>
            <span className='date'>Doğum Tarihi {candidate.birthYear}</span>
          </Card.Meta>
          <Card.Description>
            {candidate.email}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>İş Arayan    
             <Icon name='id card icon' />
            {candidate.id} 
          </a>
          
        </Card.Content>
        <Button animated as={NavLink} to={`/cvs/${candidate.id}`}>
      <Button.Content visible>Özgeçmiş Görüntüle</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    
      </Card>
      </Card.Group>
      ))
    }

        </div>
    )
}
