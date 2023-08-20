import { useState } from 'react'
import * as service from '../../services/applicationList'
import { useNavigate } from 'react-router-dom'


const CreateForm  = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    type: '',
    companyName: '',
    contactPerson: '',
    websiteLink: '',
    status: '',
    dateApplied: '',
    resumeSent: '',
    portfolioSent: '',
  })

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const { type, companyName, contactPerson, websiteLink, status, dateApplied, resumeSent, portfolioSent } = formData

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      if (!import.meta.env.VITE_BACK_END_SERVER_URL) {
        throw new Error('No VITE_BACK_END_SERVER_URL in front-end .env')
      }
      await service.create(formData)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const isFormInvalid = () => {
    return (type && companyName && contactPerson && websiteLink && status && dateApplied && resumeSent && portfolioSent)
  }

  return ( 
  <>
    <div className='center'>

    <form 
      autoComplete='off'
      onSubmit={handleSubmit}
      >
      <div
        type='text'
        id="text"
        name='text'
        onChange={handleChange}
        >
        <label htmlFor="type">Type :</label>
        <select name="type" id="type">
          <option value=""></option>
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
          onChange={handleChange}
          />
      </div>
      <div
        type="text"
        id="status"
        name="status"
        onChange={handleChange}
        >

        <label htmlFor="status">Status :</label>
        <select name="status" id="status">
          <option value=""></option>
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
          onChange={handleChange}
          />
      </div>
    <button disabled={isFormInvalid()}>Submit</button>
    </form>
    </div>
  </> 
  )
}
 
export default CreateForm 