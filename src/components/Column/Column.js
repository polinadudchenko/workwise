import PropTypes from 'prop-types'
import s from './Column.module.css'

export default function Column({ title, children }) {
  return (
    <div className={s.column}>
      <h2 className={s.column_title}> {title}</h2>
      {children}
    </div>
  )
}

Column.defaultPropTypes = {
  title: '',
}

Column.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}
