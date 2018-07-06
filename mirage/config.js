export default function() {
  this.namespace = '/api';
  this.get('/tprojects', function() {
    return {
      data: [
        {_id:1, name:"fake test project"}
      ]
    };
  });
}
