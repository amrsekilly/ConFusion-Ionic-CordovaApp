'use strict';

angular.module('conFusion.services', ['ngResource'])
        .constant("baseURL","http://localhost:3000/")
        
        .factory('menuFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

                    return $resource(baseURL + "dishes/:id", null, {
                        'update': {
                            method: 'PUT'
                        }
                    });

        }])

        .factory('promotionFactory', ['$resource', 'baseURL', function ($resource, baseURL) {
                    return $resource(baseURL + "promotions/:id");

        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL) {


            return $resource(baseURL+"leadership/:id");

        }])

        .factory('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {


            return $resource(baseURL+"feedback/:id");

        }])

        .factory('favoriteFactory', ['$resource', 'baseURL', function ($resource, baseURL) {

          var favFac = {};

          // to store all the fav dishes
          var favorites = [];

          favFac.addToFavorites = function (index) {
            // to make sure that we are not adding a dish that's there
            for (var i = 0; i < favorites.length; i++) {
              if (favorites[i].id == index) return;
            }
            // to add it if it's not there
            favorites.push({id: index});
          };

          // to delete a dish from the favorites
          favFac.deleteFromFavorites = function (index) {
              for (var i = 0; i < favorites.length; i++) {
                  if (favorites[i].id == index) {
                      favorites.splice(i, 1);
                  }
              }
          };

        // to get the list of all the favorites
        favFac.getFavorites = function () {
            return favorites;
        };

          return favFac;
        }])

;
