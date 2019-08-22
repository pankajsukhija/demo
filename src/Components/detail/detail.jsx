import { makeStyles } from "@material-ui/core";
import React from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import stationDetails from "../../dummyData/stationDetails"
import Timetable from './Timetable'
import StationIcons from './StationIcons'

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  detailsHeader: {
    alignItems : 'center'
  }
});

const stationData = stationDetails.stationWithEvaId

function Detail(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={stationData.picture.url}
          title="Zuck"
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
          <Timetable />
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

export default Detail;
