import * as types from "./types"
// import axios from 'axios'

// mock api data
import exclusions from "../../api/exclusions.json"

export const fetchExclusions = () => (dispatch) => {
  dispatch({ type: types.PARTS_EXCLUSIONS_REQUESTED })

  let exclusionsList = []

  if (process.env.NODE_ENV === "development") {
    // Flatten the exclusions list for easier processing later
    // we don't need the description
    exclusionsList = exclusions.reduce((acc, curr) => {
      acc.push(curr.PartNumber.toLowerCase())
      return acc
    }, [])
  } else {
    // a real request would go here
  }

  dispatch({
    type: types.PARTS_EXCLUSIONS_REQUEST_SUCCESS,
    payload: exclusionsList,
  })
}

export const requestPartsList = (formData) => (dispatch, getState) => {
  dispatch({ type: types.PARTS_LIST_REQUESTED })

  const exclusions = getState().userPartsList.exclusions
  const userParts = formData.partsInputs
  const partsToRequest = []

  let results = []

  // Loop through the parts data inputs
  userParts.forEach((userPart) => {
    // We don't need to send the excluded parts to the API
    // So we can push the part directly to the results with
    // an empty object
    if (exclusions.indexOf(userPart.PartNumber.toLowerCase()) > -1) {
      results.push({
        PartNumber: userPart.PartNumber,
        wasExcluded: true,
        AlternativeParts: [],
      })
    }
    // Otherwise, lets prepare to send it to the API
    else {
      partsToRequest.push(userPart)
    }
  })

  if (process.env.NODE_ENV === "development") {
    // Return mock results for parts
    setTimeout(() => {
      results = partsToRequest
        .map((requestedPart) => {
          return {
            PartNumber: requestedPart.PartNumber,
            wasExcluded: false,
            AlternativeParts: [
              {
                PartNumber: "1124-alternativepart",
                Description: "A potential alternative part",
              },
              {
                PartNumber: "1234-altpart",
                Description: "Another alternative part",
              },
              {
                PartNumber: "1123-part",
                Description: "perhaps this part",
              },
            ],
          }
        })
        .concat(results)

      dispatch({ type: types.PARTS_LIST_REQUEST_SUCCESS, payload: results })
    }, 2000)
  } else {
    // a real request to IPartsTraderPartsService would go here
  }
}
