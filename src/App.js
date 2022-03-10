import { useState } from 'react'
import { v1 as uuidv1 } from 'uuid'
import { useLocalStorage } from './utils/hooks/useLocalStorage/useLocalStorage'
import { STATUS } from './constants'

import Button from './components/Button'
import Section from './components/Section'
import Modal from './components/Modal'
import ApplicantForm from './components/ApplicantForm'
import ApplicantList from './components/ApplicantList'
import Column from './components/Column'
import Container from './components/Container'

function App() {
  const [applicants, setApplicants] = useLocalStorage('aplicants', [])
  const [modal, setModal] = useState(false)

  const toggleModal = () => setModal(!modal)

  const onHandlerSubmit = (name, email) => {
    setApplicants(applicants => [
      ...applicants,
      { id: uuidv1(), name, email, status: STATUS.new },
    ])
  }

  const onStatusChange = (id, btnType) => {
    setApplicants(
      applicants.map(applicant =>
        applicant.id === id
          ? { ...applicant, status: defineStatus(btnType, applicant.status) }
          : applicant,
      ),
    )
  }

  const onDeleteApplicant = id => {
    setApplicants(applicants =>
      applicants.filter(applicant => applicant.id !== id),
    )
  }

  const filterAplicants = status => {
    return applicants.filter(applicant => applicant.status === status)
  }

  const defineStatus = (btnType, status) => {
    switch (btnType) {
      case 'next':
        if (status === STATUS.new) {
          return STATUS.pending
        }
        if (status === STATUS.pending) {
          return STATUS.final
        }
        break
      case 'prev':
        if (status === STATUS.pending) {
          return STATUS.new
        }
        if (status === STATUS.final) {
          return STATUS.pending
        }
        break
      default:
        throw new Error()
    }
  }

  return (
    <Container>
      <Button openModal={toggleModal} />
      <Section>
        <Column title={STATUS.new}>
          <ApplicantList
            applicants={filterAplicants(STATUS.new)}
            statusChange={onStatusChange}
            onDeleteApplicant={onDeleteApplicant}
          />
        </Column>
        <Column title={STATUS.pending}>
          <ApplicantList
            applicants={filterAplicants(STATUS.pending)}
            statusChange={onStatusChange}
            onDeleteApplicant={onDeleteApplicant}
          />
        </Column>
        <Column title={STATUS.final}>
          <ApplicantList
            applicants={filterAplicants(STATUS.final)}
            statusChange={onStatusChange}
            onDeleteApplicant={onDeleteApplicant}
          />
        </Column>
      </Section>

      <Modal show={modal} close={toggleModal}>
        <ApplicantForm onSubmit={onHandlerSubmit} />
      </Modal>
    </Container>
  )
}

export default App
