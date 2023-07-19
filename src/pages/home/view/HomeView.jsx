import React, {useState} from 'react';

import { useAuth } from '../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { signOut } from '../../login/services/signOut.services';
import { AUTH_LOGOUT } from '../../../auth/reducer/AuthReducer';

import { Grid, Card, Text, Button, Row, Spacer, useTheme} from "@nextui-org/react";


export const HomeView = () => {
  
  const { state, dispatch } = useAuth();
  
  const navigate  = useNavigate(); 

  const handleSignOut =  async() => { 
    
      await signOut();
      
      localStorage.clear();
      
      dispatch({
        type: AUTH_LOGOUT,
      });
    
      navigate("/login");
    }

  const { theme } = useTheme();   

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = (e) => {
    setIsHovered(true);
  };
  const handleMouseLeave = (e) => {
    setIsHovered(false);
  };


  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={10} sm={4}>
      <Card 
        onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        css={{
            margin: "15px",
            padding: "10px",
            mw: "330px",
            position: "absolute",
            zIndex: 1,
            top: 0,
            backgroundColor: isHovered ? "#00000040" : "#00000010",
            backdropFilter: isHovered ? "blur(10px)" : "blur(0px)",
            transition: "all 0.3s ease-in-out",
          }}>
         <Card.Header>
              <Text>B I E N V E N I D O</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body>
          <Text 
            style={{
            color: theme.colors.primary.value,
            fontSize: theme.fontSizes.xl.value,
            padding: `${theme.space[2].value} ${theme.space[4].value}`
            }}
            >{state.user.email}</Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="center">
              {/* <Button size="sm" light>
                Share
              </Button> */}
              <Button
              onPress={handleSignOut}
              size="sm" 
              color="secondary"
              >Sign Out</Button>
            </Row>
          </Card.Footer>  
      
      </Card>
      </Grid>
    </Grid.Container>
  )
}

export default HomeView