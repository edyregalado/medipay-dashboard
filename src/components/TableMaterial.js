import React from 'react';
import { Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// withStyles to change the configuration of a table cell
const StyledTableCell = withStyles((theme) => ({
  head: {
    color: 'white',
    background: 'black',
    textAlign: 'center'
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);

function TableMaterial(props) {

  return(
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>
              Video
            </StyledTableCell>
            <StyledTableCell>
              Fecha de pago
            </StyledTableCell>
            <StyledTableCell>
              Número
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(element=>(
            <TableRow key={element.id}>
              <TableCell><img src={element.image} wdith="35px" height="25px"/>{" "}{element.video}</TableCell>
              <TableCell align="center">{element.date}</TableCell>
              <TableCell align="center">{element.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMaterial;