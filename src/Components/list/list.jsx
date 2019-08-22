import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

function ItemList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.itemList.map(item => (
        <ListItem key={item.primaryEvaId}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src={item.picture.url}
              className={classes.bigAvatar}
            />
          </ListItemAvatar>
          {// Disable text decoration and pass item.primaryEvaId as prop
          }
          <Link to='/details'><ListItemText primary={item.name} secondary={item.federalState} /></Link>
        </ListItem>
      ))}
    </List>
  );
}

export default ItemList;
