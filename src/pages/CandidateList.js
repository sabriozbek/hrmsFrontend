import React from 'react'
import { Card, Icon, Image,Button,Grid } from 'semantic-ui-react'
import candidateService from '../services/candidateService'
import { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import CvService from '../services/cvService';

export default function CandidateList() {
  
  

    const [candidates, setCandidates] = useState([]);

    useEffect(()=>{
  
  let candidates =new candidateService()
      candidates.getCandidates().then(result=>setCandidates(result.data.data))
    },[])


    let {id} =useParams()



    const [cvs, setcVs] = useState({});

    useEffect(()=>{
  
  let cvs =new CvService()
      cvs.getCvById(28).then(result=>setcVs(result.data.data))
    },[])
    return (
      <div >            
      <h1 className="h1" >İş Arayanlar</h1>
           
           
              
                
           
        
    {
    
      candidates.map((candidate)=>(
        <Grid   className="card"  width={12}  >

        <Grid.Row className="cardList">
          <Grid.Column    >  
         
        <Card.Group key={candidate.id}>
        
        <Card  >
       
        {cvs.photos?.map((photo) => (


        <Image src={photo?.photoUrl}  wrapped ui={false} />))}
        <Card.Content >
          <Card.Header >{candidate.firtsName} {candidate.lastName}</Card.Header>
          <Card.Meta>
            <span className='date'>Doğum Tarihi {candidate.birthYear}</span>
          </Card.Meta>
          <Card.Description>
            {candidate.email}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <b>İş  Arayan:     
             <Icon name='id card icon' />
            {candidate.id} 
          </b>
          
        </Card.Content>
        <Button animated as={NavLink} to={`/cvs/${candidate.id}`}>
      <Button.Content visible>Özgeçmiş Görüntüle</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
      
      </Card>
      
      </Card.Group>
      
      </Grid.Column>
    </Grid.Row>
  </Grid>
      ))}
     
    
     
       
    

        </div>
        
    )
    
}
