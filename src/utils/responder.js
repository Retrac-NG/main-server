// -- used to send responses from api -->

/**
 *
 * @param {*} res - Response Object
 * @param {Number} status - Status of the request made to server
 * @param {('ok' | 'error')} state - String state of the request for direct access purposes
 * @param {String} message - Message describing the result of the request
 * @param {*} data - Data to be returned if any
 */
export const responder = (
  res,
  status = 200,
  state = 'ok',
  message = 'This is an unedited response',
  data = null
) => {
  // -- if no response object was passed -->
  if (!res || typeof res === 'string' || typeof res === 'number')
    throw new Error(
      'Responder did not get any response object or got the wrong type'
    );

  res.status(status).json({
    state,
    message,
    data,
  });
};
