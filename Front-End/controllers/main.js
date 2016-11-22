(() => {

    angular
    .module('lecture')
    .controller('mainController', [
      'API',
      function(API) {
          const vm = this;
          let promise = API.getAllBlogs();
          promise.then(function (response, error){
          	console.log(error);
          })
      }
    ]);

})()
