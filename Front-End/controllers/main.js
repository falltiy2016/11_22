(() => {

    angular
    .module('lecture')
    .controller('mainController', [
      'API',
      function(API) {
          const vm = this;

          let promise = API.getAllBlogs();

          promise.then(function (response, error){
          	console.log(response.data);
            vm.blogs = response.data;
          });

          vm.addPost = function(isValid, postForm)
          {
            vm.addNewBlog = API.addNewBlog(vm.postData);

            vm.addNewBlog.then(function(response) {
              console.log(response);
            });
          }
      }

    ]);

})()
