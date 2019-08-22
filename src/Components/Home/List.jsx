import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    // backgroundColor: theme.palette.background.paper, ://
  }
}));

function ItemList(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {props.itemList.map(item => (
        <Link to='/details'>
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
          <ListItemText primary={item.name} secondary={item.federalState} />
        </ListItem>
        </Link>
      ))}
    </List>
  );
}

export default ItemList;
