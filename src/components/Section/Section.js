import PropTypes from 'prop-types'
import s from './Section.module.css'

export default function Section({ children }) {
  return <section className={s.section}>{children}</section>
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}
