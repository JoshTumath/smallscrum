import Mirage from 'ember-cli-mirage';
import UrlEncoded from 'npm:urlencode';

export default function() {
  this.post('/token', function(db, request) {
    let body = UrlEncoded.parse(request.requestBody);

    if (body.grant_type !== 'password') {
      return new Mirage.Response(400, {}, {
        'error': 'unsupported_grant_type'
      });
    }

    if (!(body.username === 'test@example.com' && body.password === 'password')) {
      return new Mirage.Response(400, {}, {
        'error': 'invalid_grant'
      });
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
