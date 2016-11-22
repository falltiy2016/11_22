(() => {

  angular
  .module('lecture')
  .factory('API', function($http) {
    const vm = this;

    vm.getAllBlogs = function() {
      let promise =
      $http({
        method: 'GET',
        url: 'http://localhost:3005/blogs'
      })

      return promise;
    }

    vm.addNewBlog = function(blogData) {
      let promise =
      $http({
        method: 'POST',
        data: blogData,
        url: 'http://localhost:3005/blogs'
      })

      return promise;
    }

    return {
      getAllBlogs: vm.getAllBlogs,
      addNewBlog: vm.addNewBlog
    };

  });

})();
