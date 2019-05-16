//create angular app
const app = angular.module('myApp', []);

//create our app controller
app.controller('MainController', ['$http', function($http){
console.log("app.js running")
 this.h5 = 'PETS!'
this.pets = []
this.createForm = {}
this.pet = '';

//create pet method//
//On form submit make AJAX request to our API/server
//1. Include an object as the argument
//2. Chain a .then() after the $http function, with an argument of response
//3. .then() function can then use what the server has responded with
//4. .then() takes two arguments, the first is a successful response from the server, the second is the error response if there is an error
    this.createPet = function(){
      console.log('submit button calls this function')
        $http({
            method:'POST',
            url:'/pets',
            data: this.createForm
          }).then(response => {
            this.pets.unshift(response.data)
            this.createForm = {}
            console.log(response.data)
        }, error => {
            console.log(error);
        });
    }
}]) //closes app.controller, remember: all methods need to go inside the app.controller
