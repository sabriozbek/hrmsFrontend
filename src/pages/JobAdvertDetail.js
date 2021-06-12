import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import JobAdvertService from '../services/jobAdvertService';

export default function JobAdvertDetail() {


    let {id} =useParams()
    const [jobAdvert, setJobAdvert] = useState({});
  useEffect(()=>{

let jobadverts =new JobAdvertService()
    jobadverts.getByJobAdvertId(id).then(result=>setJobAdvert(result.data.data))
  },[])
    return (
        <div>
            <h1>İlan Detayları</h1>
            JobAdvert:{id}
            <p>{jobAdvert.description}</p>
        </div>
    )
}
