import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CvService from '../services/cvService';

export default function CvList() {
    let {id} =useParams()
    const [cVs, setcVs] = useState({});
  useEffect(()=>{

let cvs =new CvService()
    cvs.getCvById(id).then(result=>setcVs(result.data.data))
  },[])
    return (
        <div>
             İlan No:{id}
            {cVs.githubAdress}
           
        </div>
    )
}
