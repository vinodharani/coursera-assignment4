(function () {
  'use strict';

  angular.module('Data')
    .service('MenuDataService', MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];

  function MenuDataService ($http, ApiBasePath) {
    var menuService = this;

    menuService.getAllCategories = function () {
      var categories = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (response) {
        return response.data;
      });

      return categories;
    };

    menuService.getItemsForCategory = function (categoryShortName) {
      var items = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
      }).then(function (response) {
        return response.data;
      });

      return items;
    };
  }
})();
