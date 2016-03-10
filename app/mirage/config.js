import Mirage from 'ember-cli-mirage';
import UrlEncoded from 'npm:urlencode';

export default function() {
  this.get('/api/projects', function (db, request) {
    if (request.queryParams.slug) {
      let project = db.projects.where({slug: request.queryParams.slug});

      if (project.length === 0) {
        return new Mirage.Response(404, {}, {
          'errors': [
            {
              'status': 404,
              'source': { 'parameter': 'slug' },
              'title': 'Cannot find project',
              'details': 'This project does not exist.'
            }
          ]
        });
      }

      return {
        data: {
          type: 'project',
          id: project[0].id,
          attributes: project[0]
        }
      };
    }

    return {
      data: db.projects.map(attrs => ({
        type: 'project',
        id: attrs.id,
        attributes: attrs
      }))
    };
  });

  this.get('/api/user-stories', function (db) {
    return {
      data: db['user-stories'].map(attrs => ({
        type: 'user-story',
        id: attrs.id,
        attributes: attrs
      }))
    };
  });

  this.post('/token', function (db, request) {
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
