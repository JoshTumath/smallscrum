import Mirage from 'ember-cli-mirage';

export default function() {
  this.post('/token', function(db, request) {
    let body = JSON.parse(request.requestBody);

    if (body.grant_type !== 'password') {
      return new Mirage.Response(400, { some: 'header' }, { 'error': 'unsupported_grant_type' });
    }

    if (!(body.username === 'test@example.com' && body.password === 'password')) {
      return new Mirage.Response(400, { some: 'header' }, { 'error': 'invalid_grant' });
    }

    return {
      'access_token': 'secret_token'
    };
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
