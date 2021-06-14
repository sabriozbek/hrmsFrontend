import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import candidateService from '../services/candidateService'
import { useEffect, useState } from 'react'
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
        <Card>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
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
          <a>
            <Icon name='user' />
            22 Friends
          </a>
        </Card.Content>
      </Card>
      ))
    }

        </div>
    )
}
