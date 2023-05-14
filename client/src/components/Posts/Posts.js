// Import necessary modules from React and Material UI libraries
import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
// Import Redux's useSelector hook for accessing state data
import { useSelector } from 'react-redux';
// Import custom Post component and styles from separate files
import Post from './Post/Post';
import useStyles from './styles';

// Define functional component Posts which takes in setCurrentId as a prop
const Posts = ({ setCurrentId }) => {
  // Access posts data from Redux store using useSelector hook
  const posts = useSelector((state) => state.posts);
  // Use useStyles hook to access custom styling for component
  const classes = useStyles();

  // Conditional rendering: if there are no posts yet, display a circular progress bar
  // Otherwise, display a Grid container with Post components mapped over the posts array
  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          // Each Post component is wrapped in a Grid item with responsive widths
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

// Export Posts component as default for use in other modules
export default Posts;
