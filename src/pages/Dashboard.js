import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import 'fontsource-roboto';
import RedditIcon from '@material-ui/icons/Reddit';
import HealingIcon from '@material-ui/icons/Healing';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import { useAuth0, isAuthenticated } from '@auth0/auth0-react';
import { Grid, Container, Paper } from '@material-ui/core';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';
import '../assets/css/Dashboard.css';
import CardsHeader from '../components/CardsHeader';
import Navbar from '../components/Navbar';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import useConsultas from '../hooks/useConsultas';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2
  },
  icons: {
    color: 'white'
  },
  container: {
    paddingTop: '40px',
    alignItems: 'center'
  },
  tableContainer: {
    marginTop: '40px',
    marginBottom: '40px'
  },
  paper: {
    width: '100%',
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    alignItems: 'center'
  }
}));

function Dashboard(props) {

  const [ patients, setPatients ] = useState([]); //array because the answer is an array'
  const { Consultas } = useConsultas(patients);

  useEffect(() => {

    // Call API
    const getPatients = async () => {
      const result = await axios.get('http://localhost:1337/patients');
      setPatients(result.data);
      // setFiltered(result.data);
      // console.log(result.data);
    }
    getPatients();
  }, []); //arreglo vacío para que solo se llame una vez

  const classes = useStyles();
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Navbar/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader icon={<LocalHospitalIcon className={classes.icons}/>} title="Pagos totales" text="$23424" color="rgba(93,219,250)" font="white"/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader icon={<HealingIcon className={classes.icons}/>} title="Pagos hoy" text="$231" color="rgba(93,219,250)" font="white"/>
          </Grid>
          <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
            <CardsHeader icon={<LocalHospitalIcon className={classes.icons}/>} title="Citas Hoy" text="3" color="rgba(93,219,250)" font="white"/>
          </Grid>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
          <Container maxWidth="sm" className={classes.container}> 
            <Paper className={classes.paper}>
              <Consultas data={patients.data}/>
            </Paper>
          </Container>
        </Grid>
      </div>
    )
  );
};

export default Dashboard;