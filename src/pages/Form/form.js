import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./form.css";
import InputText from "../../components/Form/InputText/InputText";
import InputNumber from "../../components/Form/InputNumber/InputNumber";
import SelectField from "../../components/Form/SelectField/SelectField";
import DateSelect from "../../components/Form/DateSelect/DateSelect";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";




export default function Form () {

  const navigate = useNavigate()

  const[loader, setLoader] = useState([])
  const initialisation = () => { axios.post('http://localhost:8000/form/load/').then((response) => {
    setLoader(response.data)
    console.log(response.data)
  })}
  useEffect(() => {initialisation();}, []);

  const[firstName, setFirstName] = useState('') 
  const[fathersName, setFathersName] = useState('')
  const[mothersName, SetMothersName] = useState('')
  const[DOB, setDOB] = useState('')
  const[gender, setGender] = useState()
  const[mobileNo, setMobileNo] = useState('')
  const[schoolName, setSchoolName] = useState('')
  const[classId, setClassId] = useState()
  const[category, setCategory] = useState('')
  const[houseNo, setHouseNo] = useState('')
  const[location, setLocation] = useState('')
  const[ctv, setCtv] = useState('')
  const[state, setState] = useState()
  const[district, setDistrict] = useState()
  const[pincode, setPincode] = useState()
  const[counsellor, setCounsellor] = useState('')
  const[doc, setDoc] = useState('')
  const[remarks, setRemarks] = useState('')

  var requestObj = {
    "name": firstName,
    "fathersName": fathersName,
    "mothersName": mothersName,
    "DOB": DOB,
    "gender": gender, 
    "mobile": mobileNo,
    "school": schoolName, 
    "class": classId, 
    "category": category,  
    "address": houseNo + " " + location + " " + ctv, 
    "state": state, 
    "district": district, 
    "pincode": pincode,  
    "counsellor": counsellor, 
    "dateCounselling": doc, 
    "remarks": remarks,
  }

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:8000/form/submit/', requestObj).then((response) => {
    console.log(response)
      if(response.data.status == "success") {
        navigate('/dashboard')
      }
  })}
  
    return(
      <>
        <Breadcrumb text="Skill Yatra Registration"/>
        <form action="" className="form">
          <h4 className="form__title">Basic Details</h4>
          <div className="form__row1">
            <InputText value={firstName} setValue={setFirstName} Title="Name" />
            <InputText value={fathersName} setValue={setFathersName} Title="Father’s Name" />
            <InputText value={mothersName} setValue={SetMothersName} Title="Mother’s Name" />
            <DateSelect selectedDate={DOB} setDate={setDOB} Title="Date of Birth" />
            <SelectField selectedOption={gender} setOption={setGender} optionsArr={loader.gender} Title="Gender" />
            <InputText value={mobileNo} setValue={setMobileNo} Title="Mobile Number" />
            <InputText value={schoolName} setValue={setSchoolName} Title="School Name" />
            <InputText value={classId} setValue={setClassId} Title="Class" />
            <SelectField selectedOption={category} setOption={setCategory} optionsArr={loader.category} Title="Caste/Category" />
          </div>
          <div className="hr__devider" />
          <h4 className="form__title">Resedential Address</h4>
          <div className="form__row2">
            <InputNumber value={houseNo} setValue={setHouseNo} Title="House No." />
            <InputText value={location} setValue={setLocation} Title="Location" />
            <InputText value={ctv} setValue={setCtv} Title="City / Town / Village" />
          </div>
          <div className="form__row3">
            <SelectField selectedOption={state} setOption={setState} optionsArr={loader.state} Title="State" />
            <SelectField selectedOption={district} setOption={setDistrict} optionsArr={loader.district} Title="District" />
            <InputNumber value={pincode} setValue={setPincode} Title="Pincode" />
          </div>
          {/* <div className="hr__devider" />
          <h4 className="form__title">Family Details</h4>
            <div className="form__row3">
            <InputText Title="Father’s Occupation" />
            <InputText Title="Mother’s Occupation " />
            <InputText Title="Family Members" />
          </div> */}
          <div className="hr__devider" />
          <h4 className="form__title">Counsellor Details</h4>
          <div className="form__row3">
            <SelectField selectedOption={counsellor} setOption={setCounsellor} optionsArr={loader.counsellor} Title="Name of Counsellor" />
            <DateSelect selectedDate={doc} setDate={setDoc} Title="Date of Counselling" />
            <InputText value={remarks} setValue={setRemarks} Title="Remarks" />
          </div>
          <button onClick={handleSubmit} className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </>
    )
}