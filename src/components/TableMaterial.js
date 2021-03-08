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
    background: '#808080',
    textAlign: 'center'
  },
  body: {
    fontSize: 14,
  }
}))(TableCell);
function TableMaterial(patients) {
// const useConsultas = (patients) => {
  console.log(patients);
  const Consultas = () => (
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>
                Paciente
              </StyledTableCell>
              <StyledTableCell>
                Concepto
              </StyledTableCell>
              <StyledTableCell>
                Fecha de pago
              </StyledTableCell>
              <StyledTableCell>
                Monto
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map(element=>(
              <TableRow key={element.id}>
                <TableCell align="center">{`${element.patient_name}`}</TableCell>
                <TableCell align="center">{`${element.email}`}</TableCell>
                <TableCell align="center">{`${element.created_at}`}</TableCell>
                <TableCell align="center">{`${element.amount}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    // <TableBody>
    //   {patients.map(element => (
    //     <TableRow key={element.id}>
    //       <TableCell align="center">{`${element.Patient_Name}`}</TableCell>
    //       {/* <TableCell align="center"><img src={element.image} wdith="35px" height="25px"/>{" "}{element.concepto}</TableCell> */}
    //       <TableCell align="center">{`${element.email}`}</TableCell>
    //       <TableCell align="center">{`${element.created_at}`}</TableCell>
    //     </TableRow>
    //   ))}
    // </TableBody>
  )
  return {
    Consultas
  }
}

// export default useConsultas;

// function TableMaterial(props) {

//   return(
//     <TableContainer>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <StyledTableCell>
//               Paciente
//             </StyledTableCell>
//             <StyledTableCell>
//               Concepto
//             </StyledTableCell>
//             <StyledTableCell>
//               Fecha de pago
//             </StyledTableCell>
//             <StyledTableCell>
//               Monto
//             </StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {props.data.map(element=>(
//             <TableRow key={element.id}>
//               <TableCell align="center">{element.patient}</TableCell>
//               <TableCell align="center"><img src={element.image} wdith="35px" height="25px"/>{" "}{element.concepto}</TableCell>
//               <TableCell align="center">{element.date}</TableCell>
//               <TableCell align="center">${element.number}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

export default TableMaterial;