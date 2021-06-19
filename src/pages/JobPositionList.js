import React ,{useState,useEffect} from 'react'
import JobPositionService from '../services/jobPositionService';
import { Card} from 'semantic-ui-react'

export default function JobPositionList() {

    const [jobPositions, setJobPositions] = useState([]);
    useEffect(()=>{
  
  let jpService =new JobPositionService()
      jpService.getJobPositions().then(result=>setJobPositions(result.data.data))
    },[])
    return (
        <div>
            <h1 className="h1">İş Pozisyonları</h1>
    {
      jobPositions.map((jobPositon)=>(
        <Card.Group itemsPerRow="1" key={jobPositon.id}>
        <Card 
        href='#card-example-link-card'
        header={jobPositon.position}
        meta=""
        
      
      />
       
    </Card.Group>
      ))
    }

        </div>
    )
}
