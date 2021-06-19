import React ,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { Card,Icon} from 'semantic-ui-react'
import JobAdvertService from '../services/jobAdvertService.js';


export default function JobAdvertList() {
 

  const [jobAdverts, setJobAdverts] = useState([]);
  useEffect(()=>{

let jobadverts =new JobAdvertService()
    jobadverts.getJobAdverts().then(result=>setJobAdverts(result.data.data))
  },[])

    return (
     
        <div>
           <h1 className="h1">İş İlanları</h1>
    {
      jobAdverts.map((JobAdvert)=>(
         
        <Card.Group itemsPerRow="1" key={jobAdverts.id}>
          
        <Card 
        
        as={NavLink} to={`/jobadvert/${JobAdvert.id}`}
        
        header={JobAdvert.jobPositon.position}
        meta={JobAdvert.city.cityName}
        description={JobAdvert.description}
      
      />
       <Card.Content extra>
      <p className="extra">
        <Icon name='user'  />
        {JobAdvert.employer.companyName}      </p>
    </Card.Content>
    
    </Card.Group>
   
      ))
    }

    

    

    
        </div>
    )
}
