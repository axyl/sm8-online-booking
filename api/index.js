module.exports.handler = async (event) => {
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
};
