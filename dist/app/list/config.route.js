(function(){
    'use strict'

    angular.module('mutantApp.list')
        .config(listRouteConfigFunction);

    listRouteConfigFunction.$injector = ['$stateProvider'];
    function listRouteConfigFunction($stateProvider){
        $stateProvider

        .state('list',{
            url: '/list',
            templateUrl: 'app/list/list.html',
            controller: 'listController',
            controllerAs: 'vm',
        });
    }
})();
