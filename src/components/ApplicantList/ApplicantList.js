import ApplicantCard from '../ApplicantCard'
import PropTypes from 'prop-types'

export default function ApplicantList({
  applicants,
  column,
  statusChange,
  onDeleteApplicant,
}) {
  return (
    <ul>
      {applicants.map(({ id, name, email, status }) => (
        <li key={id}>
          <ApplicantCard
            id={id}
            name={name}
            email={email}
            status={status}
            statusChange={statusChange}
            onDeleteApplicant={onDeleteApplicant}
          />
        </li>
      ))}
    </ul>
  )
}

ApplicantList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
}
