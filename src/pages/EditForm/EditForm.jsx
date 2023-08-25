import * as service from '../../services/applicationList'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

const EditForm  = ({ app }) => {
  const navigate = useNavigate()
  const formElement = useRef()
  const location = useLocation()
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState(location.state.app)
  console.log(app);


  const handleDeleteApp = async id => {
    await service.deleteOne(location.state.app._id)
    navigate('/')
  }

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
    setValidForm(false)
  }, [formData])

  const { type, companyName, contactPerson, websiteLink, status, dateApplied, resumeSent, portfolioSent } = formData

  const handleSubmit = async evt => {
    evt.preventDefault()
    console.log('in submit',formData);
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await service.update(formData, formData)
    } catch (err) {
      console.log(err)
    }
  }

  const isFormInvalid = () => {
    if(validForm === true)return (type && companyName && contactPerson && websiteLink && status && dateApplied && resumeSent && portfolioSent)
    else setValidForm(!validForm)
  }

  const handleUpdateApp = async (updatedAppData) => {
    const updatedApp = await service.update(updatedAppData)
    
    navigate('/')
  }

  return ( 
  <>
     <div className='center'>
      <form 
        ref={formElement}
        autoComplete='off'
        onSubmit={handleSubmit}
        >
        <div
          type='text'
          id="type"
          name='type'
          value={formData?.type}
          onChange={handleChange}
          >
          <label htmlFor="type">Type :</label>
          <select name={formData.type} id="type">
            <option value="">{formData.type}</option>
            <option value="FullStack">Full Stack</option>
            <option value="FrontEnd">Front-End</option>
            <option value="BackEnd">Back-End</option>
            <option value="Teaching">Teaching</option>
          </select>

        </div>
        <div>
          <label htmlFor="companyName" >Company Name :</label>
          <input
            type="text"
            autoComplete="off"
            id="companyName"
            value={formData?.companyName}
            name="companyName"
            onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="contactPerson" >Contact Person :</label>
          <input
            type="text"
            autoComplete="off"
            id="contactPerson"
            name="contactPerson"
            value={formData?.contactPerson}
            onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="websiteLink" >Website Link :</label>
          <input
            type="text"
            autoComplete="off"
            id="websiteLink"
            name="websiteLink"
            value={formData?.websiteLink}
            onChange={handleChange}
            />
        </div>
        <div
          type="text"
          id="status"
          name="status"
          value={formData?.status}
          onChange={handleChange}
          >

          <label htmlFor="status">Status :</label>
          <select name="status" id="status">
            <option value={formData.status}>{formData.status}</option>
            <option value="applied">Applied</option>
            <option value="interview">Interview</option>
            <option value="thankYou">Sent Thank you</option>
          </select>
        </div>
        <div>
          <label htmlFor="dateApplied" >Date Applied :</label>
          <input
            type="text"
            autoComplete="off"
            id="dateApplied"
            name="dateApplied"
            value={formData?.dateApplied}
            onChange={handleChange}
            />
        </div>
      <button disabled={isFormInvalid()} onClick={()=>handleUpdateApp(formData)} >Submit</button>
      <Link
						to="/"
						className="btn btn-danger btn-fluid"
					>
						Cancel
					</Link>
      </form>
      <button onClick={()=> handleDeleteApp(location.state.app._id)}>DELETE</button>
    </div>
  </>   
  )
}
 
export default EditForm 