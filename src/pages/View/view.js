import './SuperResponsiveTableStyle.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Table from 'react-bootstrap/Table';
import { MDBDataTable } from 'mdbreact';
import { useMemo } from 'react';
import TableContainer from '../../components/Table/table_view';
import { Breadcrumb, Container } from "reactstrap"




export default function View () {

    const[studentData, setStudentData] = useState([]);

    const getAllStudents = () => {
        axios.post('http://localhost:8000/view/tableData').then((response) => {
            console.log(response.data.student)
            setStudentData(response.data.student)
        })
    }
    useEffect(() => {getAllStudents();}, []);


    const columns = useMemo(
        () => [
          {
            Header: "S.No",
            accessor: "id",
          },
          {
            Header: "Name",
            accessor: "name1",
          },
          {
            Header: "Father's Name",
            accessor: "fathersName",
          },
          {
            Header: "Mobile No.",
            accessor: "mobileNo",
          },
        ],
        []
      )
    return(
        <div>
            <Breadcrumb text="Registered Candidates"/>
            <div> 
                 
                {/* <Table rules="all" style={{Align: "center"}}className="responsiveTable">
                    <Thead>
                        <Tr>
                            <Th>
                                S. No
                            </Th>
                            <Th>
                                Name
                            </Th>
                            <Th>
                                Father's Name
                            </Th>
                            <Th>
                                Mobile No.
                            </Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {studentData.map((option) => (
                        <Tr>
                            <Td value={option.sno}>
                                {option.sno}
                            </Td>
                            <Td value={option.name1}>
                                {option.name1}
                            </Td>
                            <Td value={option.fathersName}>
                                {option.fathersName}
                            </Td>
                            <Td value={option.mobileNo}>
                                {option.mobileNo}
                            </Td>
                        </Tr>
                        ))} 
                    </Tbody>
                </Table> */}
                {/* <DataGrid
                    rows={studentData}
                    columns={columns}
                    paginationModel={{ page: 0, pageSize: 5 }}
                    checkboxSelection
                /> */}
                {/* <div className='row px-5'>
                    <Table striped responsive bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Student Name</th>
                                <th>Father's Name</th>
                                <th>Mobile No</th>
                            </tr>
                        </thead>
                        <tbody>
                        {studentData.map((option) => (
                        <tr>
                            <td value={option.id}>
                                {option.id}
                            </td>
                            <td value={option.name1}>
                                {option.name1}
                            </td>
                            <td value={option.fathersName}>
                                {option.fathersName}
                            </td>
                            <td value={option.mobileNo}>
                                {option.mobileNo}
                            </td>
                        </tr>
                        ))} 
                        </tbody>
                    </Table>
                </div> */}
                {/* <div className='px-5 row'>
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={data}
                        />
                </div> */}
                <Container style={{ marginTop: 100 }}>
                    <TableContainer columns={columns} data={studentData} />
                </Container>
            </div>
        </div>
    )
}