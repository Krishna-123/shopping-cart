import React from "react";

import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Filter() {
  const classes = useStyles();
  const [filter, setFilter] = React.useState(true);
  const [sort, setSort] = React.useState(true);

  return (
    <Paper>
      <List component="nav" className={classes.root}>
        <ListItem button onClick={() => setFilter((prevFilter) => !prevFilter)}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Filter" />
          {filter ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <CombineCollapse in={filter} primary={["Price", "Size", "Color"]} />

        <ListItem button onClick={() => setSort((prevSort) => !prevSort)}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Sort" />
          {sort ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <CombineCollapse in={sort} primary={["Price", "Size"]} />
      </List>
    </Paper>
  );
}

const CombineCollapse = (props) => {
  const classes = useStyles();
  return (
    <Collapse in={props.in} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {props.primary.map((pri) => (
          <ListItem key={pri} button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={pri} />
          </ListItem>
        ))}
      </List>
    </Collapse>
  );
};
