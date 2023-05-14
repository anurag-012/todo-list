import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
import useStyles from './styles';
import memories from './images/OIP.jpeg';

const App = () => {
  // Set initial state for the current post ID to 0
  const [currentId, setCurrentId] = useState(0);
  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();
  // Get the styles for this component
  const classes = useStyles();

  // Call the getPosts action creator when the component mounts or when currentId changes
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  // Render the app's UI
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        {/* Render the app's heading and icon */}
        <Typography className={classes.heading} variant="h2" align="center">ToDo List</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          {/* Render the Posts and Form components in a grid layout */}
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
