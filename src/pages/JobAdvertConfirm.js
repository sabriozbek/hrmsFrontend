import React, { useEffect, useState } from 'react'
import JobAdvertService from '../services/jobAdvertService'
import { Table,Icon,Button } from 'semantic-ui-react'
import swal from 'sweetalert';
export default function JobAdvertConfirm() {
    let jobAdvertService =new JobAdvertService();

    const[jobs,setJobs]=useState([]);

    useEffect(()=>{

        jobAdvertService.getAllPassiveJobAdverts()
        .then((result)=>setJobs(result.data.data));
    });
    
    const activate=(jobAdvertId)=>{
        jobAdvertService.changeStatus(jobAdvertId).then(swal({
            title:"Başarılı!",
            text:"İş ilanı başarıyla aktifleştirilmiştir.",
            icon:"success",
        button:"Ok"
        }).then(function(){window.location.reload()}));
    
    };

    const deleteJobAdvert=(JobAdvertId)=>{

        jobAdvertService.delete(JobAdvertId).then(swal({

            title:"Emin Misiniz?",
            text:"Eğer silerseniz bu ilan geri getirilemeyecektir.",
            icon:"warning",
            buttons:true,
            dangerMode:true

        })
        .then((willDelete)=>{
            if(willDelete){
            swal("İş ilanı başarıyla silinmiştir.",{icon:"success"})
            .then(function(){window.location.reload()});
        }}));
    };

    
    
    
    
    return (
        <div>
            <h1 className="h1">İş İlanları İşlemleri</h1>
            <Table singleLine>
    <Table.Header>
      <Table.Row>
      <Table.HeaderCell>İş İlanı No</Table.HeaderCell>

        <Table.HeaderCell>Firma Adı</Table.HeaderCell>
        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
        <Table.HeaderCell>Şehir</Table.HeaderCell>
        <Table.HeaderCell>Ücret Aralığı</Table.HeaderCell>
        <Table.HeaderCell>Açık Pozisyon</Table.HeaderCell>

        <Table.HeaderCell>Son Tarih</Table.HeaderCell>

    <Table.HeaderCell>Durum</Table.HeaderCell>
    <Table.HeaderCell>İşlemler</Table.HeaderCell>


      </Table.Row>
    </Table.Header>

    <Table.Body>
    {jobs.map((job) => (
      <Table.Row key={job.id}>
                  <Table.Cell>{job.id}</Table.Cell>

        <Table.Cell>{job.employer.companyName}</Table.Cell>
        <Table.Cell>{job.jobPositon.position}</Table.Cell>
        <Table.Cell>{job.city.cityName}</Table.Cell>
        <Table.Cell>{job.minsalary}/{job.maxSalary}₺</Table.Cell>
        
        <Table.Cell>{job.openPositionCount}</Table.Cell>
        <Table.Cell> {(
                  (new Date(job.applicaitonDeadlineDate.slice(0, 10)).getTime() -
                    new Date(Date.now()).getTime()) /
                  86400000
                )
                  .toString()
                  .split(".", 1)}{" "}
                Gün</Table.Cell>

                <Table.Cell>{job.activationStatus === true ? "Aktif" : "Pasif"}
</Table.Cell>
                <Table.Cell>
                    
                <Button fluid size="tiny" positive onClick={(e) => activate(job.id)}><Icon name="check" /> Onayla</Button>
                <Button fluid size="tiny" negative onClick={(e) =>deleteJobAdvert(job.id)}><Icon name="trash alternate" /> Sil</Button>

                    </Table.Cell>

      </Table.Row>
      
      
                
      ))}
    </Table.Body>
  </Table>
        </div>
    )
}
