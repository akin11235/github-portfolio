exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  // Process form data
  const data = JSON.parse(event.body);

  // Here you can add custom logic, e.g., sending an email

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Form submission successful!" }),
  };
};
