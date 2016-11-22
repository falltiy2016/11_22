(() => {

  angular
  .module('lecture')
  .factory('API', function($http) {
    const vm = this;

    vm.getAllBlogs = function() {
      $http.get('http://localhost:3009/blogs')
        .then(results => {
          return results;
        });
    }

    return {
      getAllBlogs: vm.getAllBlogs
    };

  });

})();
