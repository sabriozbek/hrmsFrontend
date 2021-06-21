import React from 'react'
import JobAdvertList from '../pages/JobAdvertList';
import JobPositionList from '../pages/JobPositionList';
import Categories from './Categories';
import { Grid} from 'semantic-ui-react'
import { Route } from 'react-router';
import JobAdvertDetail from '../pages/JobAdvertDetail';
import Login from '../pages/Login';
import CandidateList from '../pages/CandidateList';
import CvList from '../pages/CvList';
import JobAdvertAdd from '../pages/JobAdvertAdd';
import JobAdvertConfirm from '../pages/JobAdvertConfirm';


export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                    <Categories></Categories>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path="/" component={JobAdvertList}/>
                        <Route  exact path="/jobadvert" component={JobAdvertList}/>
                        <Route  exact path="/jobposition" component={JobPositionList}/>
                        <Route  path="/jobadvert/:id" component={JobAdvertDetail}/>
                        <Route  path="/cvs/:id" component={CvList}/>

                        <Route  path="/login" component={Login}/>
                        <Route  path="/candidate" component={CandidateList}/>

                        <Route  path="/jobAdvertAdd" component={JobAdvertAdd}/>

                        <Route  path="/jobAdvertConfirm" component={JobAdvertConfirm}/>

                    </Grid.Column>
                </Grid.Row>
                
            </Grid>
            
            
           
        </div>
        
        
        
       
    )
}
