import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JobAdvertService from '../services/jobAdvertService';
import { FormField, List,Button ,Form} from 'semantic-ui-react'

export default function JobAdvertDetail() {


    let {id} =useParams()
    const [jobAdvert, setJobAdvert] = useState({});
  useEffect(()=>{

let jobAdvertService =new JobAdvertService()
    jobAdvertService.getByJobAdvertId(id).then(result=>setJobAdvert(result.data.data))
  },[])
    return (
        <div>
            <h1 className="h1">İlan Detayları</h1>
            <h4>{jobAdvert.jobPositon?.position}</h4>
             İlan No:{id}
             <div style={{paddingBlockStart:25}}>
             <Button.Group attached='top'>
      <Button positive animated>{jobAdvert.workTime?.name}  </Button>
      <Button secondary animated>{jobAdvert.workPlace?.name} </Button>
    </Button.Group>
    
    
             </div>
             <hr />
            <p >Oluşturulma Tarihi: {jobAdvert.createDate}</p>
           <p>{jobAdvert.description}</p> 
           <b>Maaş Aralığı:</b>{jobAdvert.minsalary}<a>/</a>{jobAdvert.maxSalary}

            <List animated relaxed verticalAlign divided floated selection>
    <List.Item icon='users' content={jobAdvert.employer?.companyName} />
    <List.Item icon='marker' content={jobAdvert.city?.cityName} />
    <List.Item
      icon='mail'
      content={<a href={"mailto:"+jobAdvert.employer?.email}>{jobAdvert.employer?.email}</a>}
    />
    <List.Item
      icon='linkify'
      
      content= {<a href={"https://"+jobAdvert.employer?.webSite} target={"_blank"} rel="noopener noreferrer">{jobAdvert.employer?.webSite}</a> }


    />
  </List>
        </div>
    )
}
