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


//Create a function to GET all pets
      this.getPets = () => {
        $http({
          method: 'GET',
          url: '/pets'
        }).then(response => {
          this.pets = response.data
          this.pet = this.pets[0]
        }, error => {
          console.log(error)
        })
      }
      this.getPets()


//Create a function to EDIT pets
this.editPets = function(pets){
    $http({
      method:'PUT',
      url: '/pets/' + pets._id,
      data: {
        name: this.updatedName,
        img: this.updatedimg
      }
    }).then(
      function(response){
        controller.getPets();
        controller.indexOfEditFormToShow = null;
      },
      function(error){
        console.log(error);
      }
    );
  }
  this.editPets()

//Create a function to DELETE pets
  this.deletePets = id => {
    $http({
      method: 'DELETE'
      url: '/pets/' + id
    }).then (response => {
      console.log(response.data)
//target the object in the pets array and delete
    const removeByIndex =
    this.pets.findIndex(pet => pet._id === id)
//now remove it form array with .splice (add or remove)
this.pets.splice(removeByIndex, 1)
 }, error => {
   console.log(error)
    })
  }

//UPDATE pets
this.updatedPets = pet => {

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
