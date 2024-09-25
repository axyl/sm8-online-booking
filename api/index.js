async function handler(event) {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Go Serverless v3.0! Your function executed successfully! Env Variable is: ${process.env.test}`,
        input: event,
      },
      null,
      2,
    ),
  };
}

async function test(evt) {
  const id = evt.pathParameters.id;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Go Serverless v3.0! Your function executed successfully! Env Variable is: ${process.env.test} and path ID is: ${id}`,
        input: evt,
      },
      null,
      2,
    ),
  };
}

module.exports = {
  handler: handler,
  test: test,
};
