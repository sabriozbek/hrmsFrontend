import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CvService from '../services/cvService';
import { Card, Icon, Image, Button, Grid, Table } from 'semantic-ui-react'

export default function CvList() {
  let { id } = useParams()

  const [cVs, setcVs] = useState({});
  useEffect(() => {

    let cvs = new CvService()
    cvs.getCvById(id).then(result => setcVs(result.data.data))
  }, [])
  return (
    <div>
      <h1 className="h1" >Özgeçmiş Detayları</h1>
      <br></br>
      {cVs.photos?.map((photo) => (


        <Grid centered divided raised relaxed  >
          <Grid.Column width={4} >

            <Image
              circular
              size="small"
              src={photo?.photoUrl}

              key={photo?.id}
            />
          </Grid.Column>
          <Grid.Column width={12}  >
            {cVs.coverLetters?.map((coverLetter) => (
              <Card centered raised >

                <Card.Content header='Ön Yazı' centered />
                <Card.Content description={coverLetter?.letter} />
                <Card.Content extra>
                  <Icon name='file outline' />Özgeçmiş Numarası: {id}

                </Card.Content>
              </Card>
            ))}
          </Grid.Column>

        </Grid>
      ))}

      <hr></hr>


      <Button.Group  >
        <Button icon labelPosition='left'> <a href={"https://" + cVs.githubAdress} target={"_blank"} rel="noopener noreferrer" defaultValue="github.com">Github</a>       <Icon name='github' />
</Button>
        <Button icon labelPosition='left'><a href={"https://" + cVs.linkedinAdress} target={"_blank"} rel="noopener noreferrer" defaultValue="linkedin.com">Linkedin</a><Icon name='linkedin' /></Button>
        <Button icon labelPosition='left'><a href={"mailto:" + cVs.candidate?.email} target={"_blank"} rel="noopener noreferrer" defaultValue="linkedin.com">Email</a><Icon name='mail' /></Button>
      </Button.Group>

      <Table basic='very'>
        <Table.Header>
          <h4 raised>Eğitim</h4>
          <Table.Row>
            <Table.HeaderCell>Okul Adı</Table.HeaderCell>
            <Table.HeaderCell>Departman</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç ve Mezuniyet Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cVs.educations?.map((education) => (
            <Table.Row>
              <Table.Cell>{education?.schoolName}</Table.Cell>
              <Table.Cell>{education?.depertmant}</Table.Cell>
              <Table.Cell>{education?.startDate}/ {education?.graduationDate}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>



      <Table basic='very'>
        <Table.Header>
          <h4 raised>Çalışma Deneyimi</h4>
          <Table.Row>
            <Table.HeaderCell>İş Yeri Adı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç ve Mezuniyet Tarihi</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cVs.jobExpreinces?.map((jobExpreince) => (
            <Table.Row>
              <Table.Cell>{jobExpreince?.workplaceName}</Table.Cell>
              <Table.Cell>{jobExpreince?.positionName}</Table.Cell>
              <Table.Cell>{jobExpreince?.startDate}/ {jobExpreince?.endDate}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
      </Table>


      <Table basic='very'>
        <Table.Header>
          <h4>Dil Bilgisi</h4>
          <Table.Row>
            <Table.HeaderCell>Dil Adı</Table.HeaderCell>
            <Table.HeaderCell>Dil Seviyesi</Table.HeaderCell>

          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cVs.languages?.map((language) => (
            <Table.Row>
              <Table.Cell>{language?.languageName}</Table.Cell>
              <Table.Cell>{language?.languageLevel}</Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>


      <Table basic='very'>
        <Table.Header>
          <h4>Teknolojik Yeterlilikler</h4>
          <Table.Row>
            <Table.HeaderCell>Program/Yazılım Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cVs.programmingSkills?.map((programmingSkill) => (
            <Table.Row>
              <Table.Cell>{programmingSkill?.programmingLanguageName}</Table.Cell>

            </Table.Row>
          ))}
        </Table.Body>
      </Table>

    </div>
  )
}
