import { makeStyles } from "@material-ui/core";
import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from '@apollo/react-hooks';
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';
import stationDetails from "../../Data/stationDetails"
// import Timetable from './Timetable'
import StationIcons from './StationIcons'

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  detailsHeader: {
    alignItems : 'center'
  }
});

let stationData = stationDetails.stationWithEvaId


export default function Details(props) {
  console.log(props)
  const classes = useStyles();
  const QUERY = gql`
{
  stationWithEvaId(evaId: 8000105) {
    name
    location {
      latitude
      longitude
    }
    hasWiFi
    hasParking
    hasCarRental
    hasBicycleParking
    hasLocalPublicTransport
    mailingAddress{
      city
      zipcode
      street
    }
    stationManagement{
      name
      email
      phoneNumber
    }
    
    picture {
      url
    }
  }
}
`
  const { loading, error, data } = useQuery(QUERY);
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    stationData = data.stationWithEvaId
    if (stationData.picture == null){
      stationData.picture = {url :'https://via.placeholder.com/900'}
    }
  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt={stationData.name}
          height="240"
          image={stationData.picture.url}
          title={stationData.name}
        />
        <CardContent>
        
        <Grid container className={classes.detailsHeader}>
        <Grid item xs={12} sm={6}>
          <Typography gutterBottom variant="h5" component="h2">
            {stationData.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {stationData.mailingAddress.street}, 
            {" " + stationData.mailingAddress.city + " "}
            ( Zipcode - {stationData.mailingAddress.zipcode})
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          {
            // Sending complete object for now..
          }
          
          <StationIcons data={stationData}/>
        </Grid>
        </Grid>
          <br />
          {/* <Timetable /> */}
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
