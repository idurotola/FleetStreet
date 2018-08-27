/**
 * composeFetch
 * changes number to the comma separated money format.
 * returns the amount in money format
 */
const composeFetch = async (url, method) => {

  let config = {
    method: method.toUpperCase(),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    }
  }

  /**
   * TODO: Extend method to work for other HTTP verbs
   * PUT and POST have data that should be stringified
   */

  const response = await fetch(url, config);
  return response.json();
}

/**
 * constants
 * holds all the contants.
 * returns the object containing constants
 */
const constants = {
  SCOOTERS_URL: 'https://qc05n0gp78.execute-api.eu-central-1.amazonaws.com/prod/scooters'
}

export { 
  constants,
  composeFetch
}