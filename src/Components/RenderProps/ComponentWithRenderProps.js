import React from 'react';
import Paper from '@material-ui/core/Paper';
export default function ComponentWithRenderProps(props) {
  return (
    <Paper elevation='10'>
      <h1>ComponentWithRenderProps</h1>
      <h2>Below is from the component rendered via render prop</h2>
      {props.renderComponent}
      <h2>Below is via render prop function</h2>
      {props.renderFunciton(props)}
    </Paper>
  );
}
