
import { Grid, Stack } from '@mui/material';
import './App.css';
import Sidebar from './layouts/Sidebar';
import Content from './layouts/Content';

function App() {
  return (
    <Grid container >
      {/* Sidebar */}
      <Grid item xs={3}>
        <Sidebar />

      </Grid>

      {/* Content */}
      <Grid item xs={9}>
        <Content />
      </Grid>

    </Grid >
  );
}

export default App;
