import { makeStyles, Card, CardContent, TextField } from "@material-ui/core";
import React from "react";
import ItemList from "./List";
import StationList from "../../Data/stationList";
// import axios from "./node_modules/axios";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

function Home() {
  const classes = useStyles();
  const list = StationList;
  const GET_ORGANIZATION = `
{
 search(searchTerm:"Hannover"){
  stations{
    name
    primaryEvaId
    location{
      latitude
      longitude
    }
    picture{
      url
    }
  }
}
}

`;

  useEffect(() => {
    axios
      .post(
        "http://localhost:4000",
        {
          query: GET_ORGANIZATION
        }
        // { headers: headers }
      )
      .then(result => console.log(result));
  });
  return (
    <Card className={classes.card}>
      <CardContent>
        <TextField
          id="standard-full-width"
          label="Search"
          style={{ margin: 8 }}
          placeholder="Station Name"
          // helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true
          }}
        />
        <ItemList itemList={list} />
      </CardContent>
    </Card>
  );
}

export default Home;
