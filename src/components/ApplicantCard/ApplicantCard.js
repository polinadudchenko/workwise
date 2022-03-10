import PropTypes from 'prop-types'
import { STATUS } from '../../constants'
import s from './ApplicantCard.module.css'
export default function ApplicantCard({
  id,
  name,
  email,
  status,
  statusChange,
  onDeleteApplicant,
}) {
  return (
    <div className={s.relative}>
      <p>{name}</p>
      <p>{email}</p>
      <button
        onClick={() => onDeleteApplicant(id)}
        className={(s.button, s.delete_btn)}
      >
        Delete {name}
      </button>
      {(status === STATUS.pending || status === STATUS.final) && (
        <button onClick={() => statusChange(id, 'prev')} className={s.button}>
          prev
        </button>
      )}
      {(status === STATUS.new || status === STATUS.pending) && (
        <button onClick={() => statusChange(id, 'next')} className={s.button}>
          next
        </button>
      )}
    </div>
  )
}

ApplicantCard.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
}
