(() => {

    angular
    .module('lecture')
    .controller('mainController', [
      'API',
      function(API) {
          const vm = this;

          vm.blogs = API.getAllBlogs();
      }
    ]);

})()
