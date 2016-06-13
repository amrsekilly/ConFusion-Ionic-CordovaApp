'use strict';

angular.module('conFusion.services', ['ngResource'])
        .constant("baseURL","http://localhost:3000/")
        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {

            var promotions = [
                {
                          _id:0,
                          name:'Weekend Grand Buffet',
                          image: 'images/buffet.png',
                          label:'New',
                          price:'19.99',
                          description:'Featuring mouthwatering combinations with a choice of five different salads, six enticing appetizers, six main entrees and five choicest desserts. Free flowing bubbly and soft drinks. All for just $19.99 per person ',
                }

            ];

                this.getDishes = function(){

                    return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});

                };

                // implement a function named getPromotion
                // that returns a selected promotion.
                this.getPromotion = function() {
                    return   $resource(baseURL+"promotions/:id");;
                }


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
