export const lambdaHandler = async (event, context) => {
  console.log({ event, context })

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
    }),
  }

  return response
}
