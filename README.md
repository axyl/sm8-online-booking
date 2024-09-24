# Serverless Framework API/Eleventy Templated Front End Online Booking for ServiceM8

Part of the intention is to query a person's contact details, early in the booking, so that they can be followed up with, whether they proceed or not.

## Usage

### Building

Build the client files using Eleventy.  Eleventy is just used for templating a master file for CSS/header/footer.

```
npm run buildclient
```

### Deployment

Deploy the website to S3 and back end API to AWS Apigateway/Lambda

```
$ serverless deploy
```
