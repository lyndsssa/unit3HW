const app = angular.module('MyApp', []);

app.controller('MyController', ['$http', function($http){
    const controller = this;
    this.indexOfEditFormToShow = null;
    this.h5 = "PETS!"
    this.name = ''
    this.useFindAndModify = false
    
    this.editPet = function(pet){
        $http({
            method:'PUT',
            url:'/pets/' + pet._id,
            data: {
                name: this.updatedName,
                img: this.updatedImg
            }
        }).then(function(response){
            controller.getPets();
            controller.indexOfEditFormToShow = null;
        }, function(error){
            console.log(error);
        });
    }

    this.deletePet = function(pet){
        $http({
            method:'DELETE',
            url:'/pets/' + pet._id
        }).then(function(response){
            controller.getPets();
        }, function(error){
            console.log(error);
        });
    }

    this.createPet = function(){
        $http({
            method:'POST',
            url:'/pets',
            data: {
                name: this.updatedName,
                img: this.updatedImg
            }
        }).then(function(response){
            controller.getPets();
        }, function(error){
            console.log(error);
        });
    }

    this.getPets = function(){

        $http({
            method:'GET',
            url:'/pets/'
        }).then(function(response){
            controller.pets = response.data;
        }, function(error){

        });

    }

    this.getPets();
}]);
