import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardsHeader from '../components/CardsHeader';
import Navbar from '../components/Navbar';
import 'fontsource-roboto';
import '../assets/css/Dashboard.css';
import RedditIcon from '@material-ui/icons/Reddit';
import HealingIcon from '@material-ui/icons/Healing';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Cards from '../components/Cards';
import Graphics from '../components/Graphics';
import TableMaterial from '../components/TableMaterial';

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
  }
}));

const data = [
  {
    id:1,
    video:
      "Como Hacer un Split en React JS || React Split Pane || Tutorial en Español (2020)",
    date: "6 de sep. 2020",
    number: 32,
    imagen: require("../assets/img/Medipay.png"),
  },
  {
    id:2,
      video:
        "Cómo Solucionar Error al Crear Applicación de React JS",
      date: "5 de sep. 2020",
      number: 31,
      imagen: require("../assets/img/Medipay.png"),
    },
    {
    id:3,
      video:
        "Cómo Utilizar Forever en Node JS || Ejecutar Node JS en Segundo Plano || Background Node JS",
      date: "4 de sep. 2020",
      number: 21,
      imagen: require("../assets/img/Medipay.png"),
    },
];

function Dashboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Navbar/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icon={<RedditIcon className={classes.icons}/>} title="Citas totales" text="Este es el texto" color="rgba(93,219,250)" font="white"/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icon={<HealingIcon className={classes.icons}/>} title="Pagos hoy" text="Este es el texto" color="rgba(93,219,250)" font="white"/>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
          <CardsHeader icon={<LocalHospitalIcon className={classes.icons}/>} title="Citas Hoy" text="Este es el texto" color="rgba(93,219,250)" font="white"/>
        </Grid>
        <Grid container spacing={1} className={classes.container} xs={12} sm={12} md={6} lg={6} xl={6}>
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
        </Grid>
        <Grid item xs={0} sm={0} md={1} lg={1} xl={1}></Grid>
        <Grid container spacing={1} className={classes.tableContainer} xs={12} sm={12} md={12} lg={12} xl={12}>
            <TableMaterial data={data}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;