// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'fcrnym71f4'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  // domain: 'dev-nd9990-p4.us.auth0.com',
  domain: 'dev-2txa4cmt.us.auth0.com',            // Auth0 domain
  clientId: 'k8hadiczx98Y9frDC7aHf7f4KlfeDmJd',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
