import { makeStyles } from "@material-ui/core";
import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import stationDetails from "../../dummyData/stationDetails"

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
});


function Detail(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={stationDetails.stationWithEvaId.picture.url}
          title="Zuck"
        />
        <CardContent>

        {
          // Need to add details on-hover
        }
        {stationDetails.stationWithEvaId.hasParking ? 
        <i class="material-icons">
        local_parking
        </i> : <span></span>}

        {stationDetails.stationWithEvaId.hasWiFi ? 
        <i class="material-icons">
        wifi
        </i> : <span></span>}

        {stationDetails.stationWithEvaId.hasCarRental ? 
        <i class="material-icons">
        directions_car
        </i> : <span></span>}

        {stationDetails.stationWithEvaId.hasLocalPublicTransport ? 
        <i class="material-icons">
        directions_bus
        </i> : <span></span>}
        
        {
          //////
        }

          <Typography gutterBottom variant="h5" component="h2">
          {stationDetails.stationWithEvaId.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
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
