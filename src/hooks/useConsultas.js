import React from 'react';
import { Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    // color: 'white',
    // background: '#808080',
    textAlign: 'left'
  },
  body: {
    fontSize: 14,
    fontFamily: 'bold',
  }
}))(TableCell);

const useConsultas = (patients) => {
  console.log(patients);
  const Consultas = () => (
    <TableContainer>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>
              Nombre
            </StyledTableCell>
            <TableCell>
              E-mail
            </TableCell>
            <TableCell>
              Fecha
            </TableCell>
            <TableCell>
              Monto
            </TableCell>
          </TableRow>
        </TableHead>
      <TableBody>
        {patients.map(element => (
          <TableRow key={element.id}>
            <TableCell align="left">{`${element.Patient_Name}`}</TableCell>
            <TableCell align="left">{`${element.email}`}</TableCell>
            <TableCell align="left">{`${element.created_at}`}</TableCell>
            <TableCell align="right">{`${element.Amount}`}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </TableContainer>
  )
  return {
    Consultas
  }
}

export default useConsultas;