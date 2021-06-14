import React from 'react'
import JobAdvertList from '../pages/JobAdvertList';
import JobPositionList from '../pages/JobPositionList';
import Categories from './Categories';
import { Grid} from 'semantic-ui-react'
import { Route } from 'react-router';
import JobAdvertDetail from '../pages/JobAdvertDetail';
import Login from '../pages/Login';
import Footer from './Footer'
import CandidateList from '../pages/CandidateList';


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

                        <Route  path="/login" component={Login}/>
                        <Route  path="/candidate" component={CandidateList}/>

                    
                        
                    </Grid.Column>
                </Grid.Row>
            </Grid>
          

           
        </div>
        
    )
}
