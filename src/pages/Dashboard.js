import React from 'react';
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
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const data = [
  {
    id:1,
    patient: "Fernando Huerta",
    concepto:
      "Anticipo",
    date: "6 de feb. 2021",
    number: 32,
    imagen: require("../assets/img/Medipay.png"),
  },
  {
    id:2,
      patient: "Eduardo Regalado",
      concepto:
        "Anticipo",
      date: "5 de feb. 2021",
      number: 31,
      imagen: require("../assets/img/Medipay.png"),
    },
    {
    id:3,
      patient: "Wendy Enriquez",
      concepto:
        "Anticipo",
      date: "4 de feb. 2021",
      number: 21,
      imagen: require("../assets/img/Medipay.png"),
    },
];

function Dashboard(props) {
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
          <Container maxWidth="lg" className={classes.container}> 
            <Paper className={classes.paper}>
              <TableMaterial data={data}/>
            </Paper>
          </Container>
          
          {/* <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Cards title="Something" text="3214"/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Cards title="Something 2" text="4567"/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Cards title="Something 3" text="789"/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Cards title="Something 4" text="8768678"/>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
            </Grid>
          </Grid>
          <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
          <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={5} lg={5} xl={5}>
              <Graphics />
          </Grid> */}
        </Grid>
      </div>
    )
  );
};

export default Dashboard;