import { useState } from 'react'
import PropTypes from 'prop-types'

const form = {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
  height: '100px',
}
export default function ApplicantForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        break
      case 'email':
        setEmail(value)
        break
      default:
        throw new Error()
    }
  }

  const reset = () => {
    setName('')
    setEmail('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit(name, email)
    reset()
  }

  return (
    <form onSubmit={handleSubmit} style={form}>
      <label>
        {' '}
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        {' '}
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Add Applicant</button>
    </form>
  )
}

ApplicantForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
