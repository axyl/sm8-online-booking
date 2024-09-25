# Serverless Framework API/Eleventy Templated Front End Online Booking for ServiceM8

Part of the intention is to query a person's contact details, early in the booking, so that they can be followed up with, whether they proceed or not.

## Usage

### Secrets

There needs to be a secrets.yml file in the base directory that defines access details for databases, servicem8 API etc. These are just server side secrets, not related to the client side.

### Building Client

Build the client files using Eleventy. Eleventy is just used for templating a master file for CSS/header/footer.

```
npm run servelocalclient
```

#### Client Folder Structure

Assets in the Assets folder for fonts and images. _Any_ files in the fonts or images folder are copied to the distribution folder's fonts or images folder respectively.

Static JS files are in the JS folder. _Any_ files in the JS folder are copied to the distribution folder's JS folder.

JS files that need to be parsed through Eleventy are in the views folder and must have the extension of .liquid.js . This means that the file is processed by Eleventy to change content of the JS file before being copied over. The js extension is retained. The intention here is to be able to hard code (in the client) API URLs etc, that are stage dependent. The definitions are defined in the eleventy config file.

Currently the contents of the dist folder aren't cleared out before an update. This should be changed.

### Local Deployment

Run Eleventy to parse the client files and start the local server to distribute the client files. Defaults to port 8080 (see the .eleventy.js)

```
npm run servelocalclient
```

This also sets an environment variable stage to local. So the templated JS files can change their base URL for API interaction.

Run the API locally so that the client can access it. Defaults to port 4000. (see the serverless.yaml)

```
$ sls offline
```

stage environment variable defaults to dev, rather than local.

### Deployment

Deploy the website to S3 and back end API to AWS Apigateway/Lambda

```
$ serverless deploy
```
