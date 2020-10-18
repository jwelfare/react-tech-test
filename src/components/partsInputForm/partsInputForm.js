import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import * as userPartsListActions from "../../ducks/userPartsList/actions"

import PartsInputList from "../partsInputList/partsInputList"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

const PartsInputForm = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(userPartsListActions.fetchExclusions())
  }, [dispatch])

  const { control, register, handleSubmit, errors } = useForm({
    reValidateMode: "onChange",
  })

  const onSubmit = (formData) => {
    dispatch(userPartsListActions.requestPartsList(formData))

    history.push("/results")
  }

  return (
    <Form noValidate onSubmit={handleSubmit(onSubmit)}>
      <PartsInputList register={register} errors={errors} control={control} />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

PartsInputForm.propTypes = {}

export default PartsInputForm
