export default function() {
  this.namespace = '/api';
  this.get('/tprojects', function() {
    return {
      data: []
    };
  });
}