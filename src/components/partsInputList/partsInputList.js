import React, { useEffect } from "react"
import { useFieldArray } from "react-hook-form"

import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import FormGroup from "react-bootstrap/FormGroup"
import InputGroup from "react-bootstrap/InputGroup"

const PartsInputList = (props) => {
  const { register, errors, control } = props

  // The useFieldArray hook from react-hook-form allows
  // us to set up a dynamic field array and validate
  // the inputs individually
  const { fields, append, remove } = useFieldArray({
    control,
    name: "partsInputs",
  })

  // Add an initial field to the fieldArray
  useEffect(() => {
    append({ PartNumber: "" })
  }, [append])

  return fields.map((input, index) => (
    <FormGroup key={input.id}>
      <Form.Label
        className="sr-only"
        htmlFor={`partsInputs[${index}].PartNumber`}
      >
        Part ID
      </Form.Label>
      <InputGroup>
        <FormControl
          ref={register({
            required: {
              value: true,
              message: "Part identifier is required",
            },
            pattern: {
              value: /^\d{4}-[a-zA-Z0-9_]{4,}$/i,
              message: "Part identifier must be in the format: 1234-xxxx",
            },
          })}
          autoComplete="off"
          id={`partsInputs[${index}].PartNumber`}
          name={`partsInputs[${index}].PartNumber`}
          isInvalid={errors["partsInputs"] && errors["partsInputs"][index]}
          placeholder="1234-partcode"
          defaultValue={input.defaultValue}
        />

        <InputGroup.Append>
          {fields.length !== 1 && (
            <Button variant="secondary" onClick={() => remove(index)}>
              Remove
            </Button>
          )}

          {fields.length - 1 === index && (
            <Button
              variant="secondary"
              onClick={() => append({ PartNumber: "" })}
            >
              Add
            </Button>
          )}
        </InputGroup.Append>

        {errors["partsInputs"] && errors["partsInputs"][index] && (
          <FormControl.Feedback type="invalid">
            {errors["partsInputs"][index]["PartNumber"].message}
          </FormControl.Feedback>
        )}
      </InputGroup>
    </FormGroup>
  ))
}

export default PartsInputList
