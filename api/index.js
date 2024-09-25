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

async function step1(evt) {
  const body = JSON.parse(evt.body);
  const name = body.name;
  const phone = body.phone;
  const suburb = body.suburb;
  const submissionId = Math.floor(Math.random() * 1000);
  console.log(
    `Name: ${name}, Phone: ${phone}, Suburb: ${suburb}, returning ${submissionId}`,
  );
  return { submissionId: submissionId };
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        submissionId: submissionId,
      },
      null,
      2,
    ),
  };
}

module.exports = {
  handler: handler,
  test: test,
  step1: step1,
};
