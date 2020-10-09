import React from 'react';
import { Grid, Divider, Segment, Button } from 'semantic-ui-react';
import './index.css';

const MainButton = () => {
  return (
    <div>
      <Segment>
        <Grid textAlign='center' columns={2} relaxed='very'>
          <Grid.Column>
            <Button className='main-button' inverted color='red'><p>휴대폰 현황 확인</p></Button>
          </Grid.Column>
        
          <Grid.Column>
            <Button className='main-button' inverted color='blue'><p>인원 현황 확인</p></Button>
          </Grid.Column>
        </Grid>
        
        <Divider vertical></Divider>
      </Segment>
    </div>
  );
}

export default MainButton;
