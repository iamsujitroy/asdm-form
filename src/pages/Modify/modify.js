import axios from 'axios'
import { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Table from 'react-bootstrap/Table';
import { MDBDataTable } from 'mdbreact';
import { useMemo } from 'react';
import TableContainer from '../../components/Table/table_modify';
import { Breadcrumb, Container } from "reactstrap"
import InputText from '../../components/Form/InputText/InputText';
import DateSelect from '../../components/Form/DateSelect/DateSelect';
import SelectField from '../../components/Form/SelectField/SelectField';
import InputNumber from '../../components/Form/InputNumber/InputNumber';
import { useNavigate } from 'react-router-dom';




export default function Modify () {

    const navigate = useNavigate()

    const[studentData, setStudentData] = useState([]);

    const[editSelect, getEditSelect] = useState()

    const[editPopup, setEditPopup] = useState(0)

    const[id, setId] = useState()
    const[name1, setName1] = useState('');
    const[fathersName, setFathersName] = useState('')
    const[mobileNo, setMobileNo] = useState('')
    const[mothersName, setMothersName] = useState()
    const[DOB, setDOB] = useState()
    const[gender, setGender] = useState()
    const[school, setSchool] = useState()
    const[classID, setClassID] = useState()
    const[category, setCategory] = useState()
    const[address, setAddress] = useState()
    const[state, setState] = useState()
    const[district, setDistrict] = useState()
    const[pincode, setPincode] = useState()
    const[counsellor, setCounsellor] = useState()
    const[DOC, setDOC] = useState()
    const[remarks, setRemarks] = useState()

    const[loader, setLoader] = useState([])
    const initialisation = () => { axios.post('http://localhost:8000/form/load/').then((response) => {
      setLoader(response.data)
    })}
    useEffect(() => {initialisation();}, []);

    const getAllStudents = () => {
        axios.post('http://localhost:8000/view/tableData').then((response) => {
            console.log(response.data.student)
            setStudentData(response.data.student)
        })
    }

    const popupHandler = async () => {
        await axios.post("http://localhost:8000/modify/getSingleModify", {
            "id": editSelect
        }).then((response) => {
            setId(response.data[0].id)
            setName1(response.data[0].name1)
            setFathersName(response.data[0].fathersName)
            setMobileNo(response.data[0].mobileNo)
            setMothersName(response.data[0].mothersName)
            setDOB(response.data[0].DOB)
            setGender(response.data[0].Gender)
            setSchool(response.data[0].School)
            setClassID(response.data[0].Class)
            setCategory(response.data[0].Category)
            setAddress(response.data[0].Address)
            setState(response.data[0].State)
            setDistrict(response.data[0].District)
            setPincode(response.data[0].Pincode)
            setCounsellor(response.data[0].Counsellor)
            setDOC(response.data[0].DOC)
            setRemarks(response.data[0].Remarks)
        })
        setEditPopup(1)
    }

    var updateObj = {
        "id": id,
        "name1": name1,
        "fathersName": fathersName,
        "mothersName": mothersName,
        "DOB": DOB,
        "gender": gender, 
        "mobile": mobileNo,
        "school": school, 
        "class": classID, 
        "category": category,  
        "state": state, 
        "district": district, 
        "pincode": pincode,  
        "remarks": remarks,
    }

    const updateHandler = async () => {
        await axios.post("http://localhost:8000/modify/updateSingleModify", updateObj).then((response) => {
            console.log(response)
            if(response.data.status === 'success') {
                setEditPopup(0)
            }
        })
    }


    useEffect(() => {getAllStudents();}, []);

    useEffect(() => {
            if(editSelect!=undefined) {
                console.log(editSelect); popupHandler()
            }
        }, [editSelect])

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
        { editPopup ?
            <div>
                <div className='transparent-wrap' style={{zIndex: 1}}>
                </div>
                <div className='popup-box' style={{zIndex: 2}}>
                    <div>
                        <InputText value={name1} setValue={setName1} Title={'Name'} />
                        <InputText value={fathersName} setValue={setFathersName} Title={'Fathers Name'} />
                        <InputText value={mothersName} setValue={setMothersName} Title={'Name'} />
                        <DateSelect Title={'Date Of Birth'}  setDate={setDOB}/>
                        <SelectField Title={'Gender'} selectedOption={gender} setOption={setGender} optionsArr={loader.gender} />
                        <InputText value={mobileNo} setValue={setMobileNo} Title="Mobile Number" />
                        <InputText value={school} setValue={setSchool} Title="School Name" />
                        <InputText value={classID} setValue={setClassID} Title="Class" />
                        <SelectField selectedOption={category} setOption={setCategory} optionsArr={loader.category} Title="Caste/Category" />
                        <SelectField selectedOption={state} setOption={setState} optionsArr={loader.state} Title="State" />
                        <SelectField selectedOption={district} setOption={setDistrict} optionsArr={loader.district} Title="District" />
                        <InputNumber value={pincode} setValue={setPincode} Title="Pincode" />
                        <InputText value={remarks} setValue={setRemarks} Title="Remarks" />

                    </div>
                    <button className='' onClick={() => {updateHandler()}}>Submit</button>
                </div>
            </div> : <div /> }
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
                    <TableContainer value={editSelect} setValue={getEditSelect} columns={columns} data={studentData} />
                </Container>
            </div>
        </div>
        </div>
    )
}