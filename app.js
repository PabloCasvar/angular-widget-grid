(function(angular){

var app = angular.module("myApp", []);

app.controller('ExampleController', ['$scope', 'orderByFilter', function($scope, orderBy){
    var friends = [
        {name: 'John',   phone: '555-1212',  age: 10},
        {name: 'Mary',   phone: '555-9876',  age: 19},
        {name: 'Mike',   phone: '555-4321',  age: 21},
        {name: 'Adam',   phone: '555-5678',  age: 35},
        {name: 'Julie',  phone: '555-8765',  age: 29}        
    ];

    $scope.propertyName = null;
    $scope.reverse = false; 
    
    $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
    }
}]);

app.component('gridDirective', {

        controller: function($scope){
            $scope.hola = "hola";
        },
        template: '<div>Hola</div>'
    }
);


 app.component('gridComponent4', {
        controller: ['$scope', 'orderByFilter', function($scope, orderBy){
            var friends = [
              {name: 'John',   phone: '555-1212',  age: 10},
              {name: 'Mary',   phone: '555-9876',  age: 19},
              {name: 'Mike',   phone: '555-4321',  age: 21},
              {name: 'Adam',   phone: '555-5678',  age: 35},
              {name: 'Julie',  phone: '555-8765',  age: 29}        
            ];

    $scope.propertyName = null;
    $scope.reverse = false; 
    
    $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy(friends, $scope.propertyName, $scope.reverse);
    }
        }],
                templateUrl: 'grid4.tpl.html'
            }
      );

 app.component('gridComponent5', {
     bindings:{
         cadena: '@',
         numero: "=",
         objeto: "="
     },
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){
        //console.log($scope);
        //console.log(this);

        this.$onInit = function(){
            $scope.cadenita = this.cadena  + " !!!!!";
            $scope.numerito = this.numero + 10;
            $scope.friends   = this.objeto;

            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy($scope.friends, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid5.tpl.html'
});

 app.component('gridComponent6', {
     bindings:{
         objeto: "="
     },
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){
            $scope.friends   = this.objeto;

            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy($scope.friends, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid6.tpl.html'
});

 app.component('gridComponent7', {
     bindings:{
         objeto: "="
     },
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){
            $scope.friends   = this.objeto;

            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy($scope.friends, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid7.tpl.html'
});

//intento implementar filter en javascript
 app.component('gridComponent8', {
     bindings:{
         objeto: "="
     },
    controller: ['$scope', 'orderByFilter', '$filter', function($scope, orderBy, $filter){

        this.$onInit = function(){
            $scope.friends   = this.objeto;

            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
  /*$scope.filterBy = function(propertyName){
        console.log($scope);
        console.log(propertyName);
        $scope.friends = $filter('filter')($scope.friends, 'J', false, q);
    }*/

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy($scope.friends, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid8.tpl.html'
});

//regreso a implementar filter en HTML
 app.component('gridComponent9', {
     bindings:{
         objeto: "="
     },
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){
            $scope.friends   = this.objeto;

            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
    $scope.setVariable = function(variableName){
        return variableName;
    }

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy($scope.friends, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid9.tpl.html'
});

//limpieza componente 9
app.component('gridComponent10', {
     bindings:{
         objeto: "="
     },
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){
            $scope.friends   = this.objeto;

            $scope.propertyName = null;
            $scope.reverse = false; 
        }

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy($scope.friends, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid10.tpl.html'
});

app.component('gridComponent11', {
     bindings:{
         objeto: "=",
         config: "<"
     },
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){
            //$scope.friends  = this.objeto;
            $scope.titles = $scope.arrayOfKeys(this.objeto);
            $scope.friends = $scope.completeArrayObj(this.objeto);
            $scope.config   = this.config;
            //console.log($scope.config);
            
            //console.log($scope.arrayObjToArray(this.objeto));
            //console.log($scope.completeArrayObj(this.objeto));


            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
    $scope.titleColumn = function(key){
        var title;
        if($scope.config == null || !$scope.config.hasOwnProperty(key)){
            title = key;
        }
        else{
            title = $scope.config[key];
        }
        return title
    }

    $scope.arrayOfKeys = function(arrayObj){
        arrayKeys = [];
        arrayObj.forEach(function(object){
            //console.log(Object.keys(object));
            Object.keys(object).forEach(function(propertyName){
                //console.log(arrayKeys.inArray(propertyName));
                arrayKeys.pushIfNotExist(propertyName);
            });
        });
        return arrayKeys;
    }

    $scope.arrayObjToArray = function(arrayObj){
        arrayKeys = $scope.arrayOfKeys(arrayObj);
        console.log(arrayKeys);
        arrayData = [];
        var arrayAux = [];
        arrayObj.forEach(function(object){
            for(var i=0; i<arrayKeys.length ; i++){
                if(object.hasOwnProperty(arrayKeys[i])){
                    arrayAux.push(object[arrayKeys[i]]);
                }else{
                    arrayAux.push(null);
                }
            }
            arrayData.push(arrayAux);
            arrayAux = [];
        });
        return arrayData;
    }

    $scope.completeArrayObj = function(arrayObj){
        arrayKeys = $scope.arrayOfKeys(arrayObj);
        arrayData = [];
        var objectAux = {};
        arrayObj.forEach(function(object){
            for(var i=0; i<arrayKeys.length ; i++){
                if(object.hasOwnProperty(arrayKeys[i])){
                    objectAux[arrayKeys[i]] = object[arrayKeys[i]];
                } else {
                    objectAux[arrayKeys[i]] = null
                }
            }
            arrayData.push(objectAux);
            objectAux = {};
        });
        return arrayData;
    };

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.friends = orderBy($scope.friends, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid11.tpl.html'
});

app.component('gridComponent12', {
     bindings:{
         objeto: "=",
         config: "<"
     },
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){
            //$scope.friends  = this.objeto;
            $scope.titles = $scope.arrayOfKeys(this.objeto);
            $scope.arrayObjs = $scope.completeArrayObj(this.objeto);
            $scope.config   = this.config;
            //console.log($scope.config);

            //console.log($scope.completeArrayObj(this.objeto));
            //console.log($scope.filterArrayOfKeys($scope.titles, $scope.config));


            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
    $scope.arrayOfKeys = function(arrayObj){
        arrayKeys = [];
        arrayObj.forEach(function(object){
            //console.log(Object.keys(object));
            Object.keys(object).forEach(function(propertyName){
                //console.log(arrayKeys.inArray(propertyName));
                arrayKeys.pushIfNotExist(propertyName);
            });
        });
        return arrayKeys;
    }

    $scope.filterArrayOfKeys =  function(arrayKeys, confArrayObj){
        if(confArrayObj == null){
            return arrayKeys;
        }
        var filteredArray = [];
        var correctConf = true;
        confArrayObj.forEach(function(object){
            if(!object.hasOwnProperty("name")){
                correctConf = false;
                return
            } else {
                filteredArray.push(object["name"])
            }
        });
        if(!correctConf)
            return arrayKeys;
        
        return filteredArray;
    }

    $scope.completeArrayObj = function(arrayObj){
        arrayKeys = $scope.arrayOfKeys(arrayObj);
        arrayData = [];
        var objectAux = {};
        arrayObj.forEach(function(object){
            for(var i=0; i<arrayKeys.length ; i++){
                if(object.hasOwnProperty(arrayKeys[i])){
                    objectAux[arrayKeys[i]] = object[arrayKeys[i]];
                } else {
                    objectAux[arrayKeys[i]] = null
                }
            }
            arrayData.push(objectAux);
            objectAux = {};
        });
        return arrayData;
    };

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.arrayObjs = orderBy($scope.arrayObjs, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid12.tpl.html'
});





app.component('gridComponent13', {
     bindings:{
         objeto: "=",
         config: "<"
     },
    controllerAs : 'grid',
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){

            $scope.config   = this.config;
            $scope.arrayKeys = $scope.arrayOfKeys(this.objeto);
            $scope.arrayConfTitles = $scope.filterArrayOfKeys($scope.arrayKeys, $scope.config);

            $scope.arrayObjs = $scope.completeArrayObj(this.objeto);

            //$scope.arrayObj = this.objeto;
            
            //console.log($scope.config);

            //console.log($scope.completeArrayObj(this.objeto));
            //console.log($scope.filterArrayOfKeys($scope.arrayKeys, $scope.config));


            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
    $scope.arrayOfKeys = function(arrayObj){
        arrayKeys = [];
        arrayObj.forEach(function(object){
            //console.log(Object.keys(object));
            Object.keys(object).forEach(function(propertyName){
                //console.log(arrayKeys.inArray(propertyName));
                arrayKeys.pushIfNotExist(propertyName);
            });
        });
        return arrayKeys;
    }

    $scope.filterArrayOfKeys =  function(arrayKeys, confArrayObj){
        if(confArrayObj == null){
            return arrayKeys;
        }
        var filteredArray = [];
        var correctConf = true;
        confArrayObj.forEach(function(object){
            if(!object.hasOwnProperty("name")){
                correctConf = false;
                return
            } else {
                filteredArray.push(object["name"])
            }
        });
        if(!correctConf)
            return arrayKeys;
        
        return filteredArray;
    }

    $scope.completeArrayObj = function(arrayObj){
        arrayKeys = $scope.arrayOfKeys(arrayObj);
        arrayConfTitles = $scope.arrayConfTitles;
        for(var i=0 ; i<arrayConfTitles.length ; i++){
            arrayKeys.pushIfNotExist(arrayConfTitles[i]);
        }
        //console.log(arrayKeys);
        arrayData = [];
        var objectAux = {};
        arrayObj.forEach(function(object){
            for(var i=0; i<arrayKeys.length ; i++){
                if(object.hasOwnProperty(arrayKeys[i])){
                    objectAux[arrayKeys[i]] = object[arrayKeys[i]];
                } else {
                    objectAux[arrayKeys[i]] = "";
                }
            }
            arrayData.push(objectAux);
            objectAux = {};
        });
        return arrayData;
    };

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.arrayObjs = orderBy($scope.arrayObjs, $scope.propertyName, $scope.reverse);
        }
    }],
    templateUrl: 'grid13.tpl.html'
});




app.component('gridComponent14', {
     bindings:{
         objeto: "=",
         config: "<",
         num: "="
     },
    controllerAs: 'grid',
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){
            //console.log($scope);
            $scope.config   = this.config;
            $scope.arrayKeys = $scope.arrayOfKeys(this.objeto);
            //console.log($scope.arrayKeys);
            $scope.arrayConfTitles = $scope.filterArrayOfKeys($scope.arrayKeys, $scope.config);
            //console.log($scope.arrayConfTitles);
            $scope.arrayObjs = $scope.completeArrayObj(this.objeto);
            //console.log($scope.arrayObjs);
            //$scope.arrayObj = this.objeto;
            //console.log($gridCtrl);
            //onsole.log($scope.config);

            //console.log($scope.completeArrayObj(this.objeto));
            //console.log($scope.filterArrayOfKeys($scope.arrayKeys, $scope.config));
            //console.log($scope);

            $scope.propertyName = null;
            $scope.reverse = false; 
        }
    
    $scope.arrayOfKeys = function(arrayObj){
        arrayKeys = [];
        arrayObj.forEach(function(object){
            //console.log(Object.keys(object));
            Object.keys(object).forEach(function(propertyName){
                //console.log(arrayKeys.inArray(propertyName));
                $scope.pushIfNotExist(arrayKeys, propertyName);
            });
        });
        return arrayKeys;
    }

    $scope.filterArrayOfKeys =  function(arrayKeys, confArrayObj){
        if(confArrayObj == null){
            return arrayKeys;
        }
        var filteredArray = [];
        var correctConf = true;
        confArrayObj.forEach(function(object){
            if(!object.hasOwnProperty("name")){
                correctConf = false;
                return
            } else {
                filteredArray.push(object["name"])
            }
        });
        if(!correctConf)
            return arrayKeys;
        
        return filteredArray;
    }

    $scope.completeArrayObj = function(arrayObj){
        arrayKeys = $scope.arrayOfKeys(arrayObj);
        arrayConfTitles = $scope.arrayConfTitles;
        for(var i=0 ; i<arrayConfTitles.length ; i++){
            $scope.pushIfNotExist(arrayKeys, arrayConfTitles[i]);
        }
        //console.log(arrayKeys);
        arrayData = [];
        var objectAux = {};
        arrayObj.forEach(function(object){
            for(var i=0; i<arrayKeys.length ; i++){
                if(object.hasOwnProperty(arrayKeys[i])){
                    objectAux[arrayKeys[i]] = object[arrayKeys[i]];
                } else {
                    objectAux[arrayKeys[i]] = "";
                }
            }
            arrayData.push(objectAux);
            objectAux = {};
        });
        return arrayData;
    };

    $scope.sortBy = function(propertyName){
        $scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
        $scope.propertyName = propertyName;
        $scope.arrayObjs = orderBy($scope.arrayObjs, $scope.propertyName, $scope.reverse);
        }

    $scope.inArray = function(array, str){
        for(var i=0 ; i<array.length ; i++){
            if(str === array[i])
                return true;
        }
        return false;
    };

    $scope.pushIfNotExist = function(array, str){
        if(!$scope.inArray(array, str)){
            array.push(str)
        }
    };
    
    }],
    templateUrl: 'grid14.tpl.html'
});



app.component('gridComponent15', {
     bindings:{
         objeto: "=",
         config: "<",
         num: "="
     },

    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){

            this.config   = this.config;
            this.arrayKeys = this.arrayOfKeys(this.objeto);
            //console.log(this.arrayKeys);
            this.arrayConfTitles = this.filterArrayOfKeys(this.arrayKeys, this.config);
            //console.log(this.arrayConfTitles);
            this.arrayObjs = this.completeArrayObj(this.objeto);
            //console.log(this.arrayObjs);
            //$scope.arrayObj = this.objeto;
            //console.log($gridCtrl);
            //onsole.log($scope.config);

            //console.log($scope.completeArrayObj(this.objeto));
            //console.log($scope.filterArrayOfKeys($scope.arrayKeys, $scope.config));
            //console.log($scope);

            this.propertyName = null;
            this.reverse = false; 
        }
    
    this.pushIfNotExist = function(array, str){
        if(!this.inArray(array, str)){
            array.push(str)
        }
    };

    this.arrayOfKeys = function(arrayObj){
        var arrayKeys = [];

        for(var i=0 ; i<arrayObj.length ; i++){
            var arrayKeysIn = Object.keys(arrayObj[i]);
            for(var j=0 ;  j<arrayKeysIn.length ; j++){
                this.pushIfNotExist(arrayKeys, arrayKeysIn[j]);
            }
        }
        /*arrayObj.forEach(function(object){
            //console.log(this);
            Object.keys(object).forEach(function(propertyName){
                //console.log(arrayKeys.inArray(propertyName));
                //console.log(this);
                $scope.grid.pushIfNotExist(arrayKeys, propertyName);
            });
        });*/
        return arrayKeys;
    }

    this.filterArrayOfKeys =  function(arrayKeys, confArrayObj){
        if(confArrayObj == null){
            return arrayKeys;
        }
        var filteredArray = [];
        var correctConf = true;
        confArrayObj.forEach(function(object){
            if(!object.hasOwnProperty("name")){
                correctConf = false;
                return
            } else {
                filteredArray.push(object["name"])
            }
        });
        if(!correctConf)
            return arrayKeys;
        
        return filteredArray;
    }

    this.completeArrayObj = function(arrayObj){
        arrayKeys = this.arrayOfKeys(arrayObj);
        arrayConfTitles = this.arrayConfTitles;
        //console.log(this);
        for(var i=0 ; i<this.arrayConfTitles.length ; i++){
            this.pushIfNotExist(arrayKeys, arrayConfTitles[i]);
        }
        //console.log(arrayKeys);
        arrayData = [];
        var objectAux = {};
        arrayObj.forEach(function(object){
            for(var i=0; i<arrayKeys.length ; i++){
                if(object.hasOwnProperty(arrayKeys[i])){
                    objectAux[arrayKeys[i]] = object[arrayKeys[i]];
                } else {
                    objectAux[arrayKeys[i]] = "";
                }
            }
            arrayData.push(objectAux);
            objectAux = {};
        });
        return arrayData;
    };

    this.sortBy = function(propertyName){
        this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
        this.propertyName = propertyName;
        this.arrayObjs = orderBy(this.arrayObjs, this.propertyName, this.reverse);
        }

    this.inArray = function(array, str){
        for(var i=0 ; i<array.length ; i++){
            if(str === array[i])
                return true;
        }
        return false;
    };
    
    }],
    controllerAs: 'grid',
    templateUrl: 'grid15.tpl.html'
});


app.component('gridComponent16', {
     bindings:{
         objeto: "=",
         config: "<"
     },
    controllerAs: 'gridCtrl',
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){

            //this.config   = this.config;
            this.arrayKeys = this.arrayOfKeys(this.objeto);
            //console.log(this.arrayKeys);
            this.arrayConfTitles = this.filterArrayOfKeys(this.arrayKeys, this.config);
            //console.log(this.arrayConfTitles);
            this.arrayObjs = this.completeArrayObj(this.objeto);
            //console.log(this.arrayObjs);
            console.log($scope);

            this.propertyName = null;
            this.reverse = false; 
        }
    
    this.pushIfNotExist = function(array, str){
        if(!this.inArray(array, str)){
            array.push(str)
        }
    };

    this.arrayOfKeys = function(arrayObj){
        var arrayKeys = [];

        for(var i=0 ; i<arrayObj.length ; i++){
            var arrayKeysIn = Object.keys(arrayObj[i]);
            for(var j=0 ;  j<arrayKeysIn.length ; j++){
                this.pushIfNotExist(arrayKeys, arrayKeysIn[j]);
            }
        }
        return arrayKeys;
    }

    this.filterArrayOfKeys =  function(arrayKeys, confArrayObj){
        if(confArrayObj == null){
            return arrayKeys;
        }
        var filteredArray = [];
        var correctConf = true;
        confArrayObj.forEach(function(object){
            if(!object.hasOwnProperty("name")){
                correctConf = false;
                return
            } else {
                filteredArray.push(object["name"])
            }
        });
        if(!correctConf)
            return arrayKeys;
        
        return filteredArray;
    }

    this.completeArrayObj = function(arrayObj){
        arrayKeys = this.arrayOfKeys(arrayObj);
        arrayConfTitles = this.arrayConfTitles;
        //console.log(this);
        for(var i=0 ; i<this.arrayConfTitles.length ; i++){
            this.pushIfNotExist(arrayKeys, arrayConfTitles[i]);
        }
        //console.log(arrayKeys);
        arrayData = [];
        var objectAux = {};
        arrayObj.forEach(function(object){
            for(var i=0; i<arrayKeys.length ; i++){
                if(object.hasOwnProperty(arrayKeys[i])){
                    objectAux[arrayKeys[i]] = object[arrayKeys[i]];
                } else {
                    objectAux[arrayKeys[i]] = "";
                }
            }
            arrayData.push(objectAux);
            objectAux = {};
        });
        return arrayData;
    };

    this.sortBy = function(propertyName){
        this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
        this.propertyName = propertyName;
        this.arrayObjs = orderBy(this.arrayObjs, this.propertyName, this.reverse);
        }

    this.inArray = function(array, str){
        for(var i=0 ; i<array.length ; i++){
            if(str === array[i])
                return true;
        }
        return false;
    };
    
    }],

    templateUrl: 'grid16.tpl.html'
});


app.component('gridComponent17', {
     bindings:{
         objeto: "=",
         config: "<"
     },
    controllerAs: 'gridCtrl',
    controller: ['$scope', 'orderByFilter', function($scope, orderBy){

        this.$onInit = function(){

            //this.config   = this.config;
            this.arrayKeys = this.arrayOfKeys(this.objeto);
            //console.log(this.arrayKeys);
            this.arrayConfTitles = this.filterArrayOfKeys(this.arrayKeys, this.config);
            //console.log(this.arrayConfTitles);
            this.arrayObjs = this.completeArrayObj(this.objeto);
            //console.log(this.arrayObjs);
            this.arrayTitles = this.filterArrayOfTitles(this.arrayKeys, this.config);
            console.log(this.arrayTitles);
            console.log($scope);
            console.log("Archivo de configuración válido: ");
            console.log(this.isCorrectConf(this.config));

            this.propertyName = null;
            this.reverse = false; 
        }
    
    this.pushIfNotExist = function(array, str){
        if(!this.inArray(array, str)){
            array.push(str)
        }
    };

    this.arrayOfKeys = function(arrayObj){
       
       var arrayKeys = [];
      
       for(var i=0 ; i<arrayObj.length ; i++){
            var arrayKeysIn = Object.keys(arrayObj[i]);
            for(var j=0 ;  j<arrayKeysIn.length ; j++){
                this.pushIfNotExist(arrayKeys, arrayKeysIn[j]);
            }
        }
        return arrayKeys;
    }

    
    this.filterArrayOfKeys =  function(arrayKeys, confArrayObj){
        if(!this.isCorrectConf(confArrayObj)){
            return arrayKeys;
        }
        var filteredArray = [];
        confArrayObj.forEach(function(object){
            filteredArray.push(object["name"])
        });        
        return filteredArray;
    }


    this.filterArrayOfTitles = function(arrayKeys, confArrayObj){
        if(!this.isCorrectConf(confArrayObj)){
            return arrayKeys;
        }
        var arrayTitles = [];
        confArrayObj.forEach(function(object, index){
            if(object.hasOwnProperty("titleColumn")){
                arrayTitles.push(object["titleColumn"]);
            } else {
                arrayTitles.push(object["name"]);
            }
        });
        return arrayTitles;
    }


    this.isCorrectConf = function(confArrayObj){
        if(!confArrayObj){
            return false;
        }
        if(confArrayObj.length < 1){
            return false;
        }
        var object;
        for(var i=0 ; i<confArrayObj.length; i++){
            object = confArrayObj[i];
            if(!object.hasOwnProperty("name")){
                return false;
            } 
        }
        return true;
    }


    this.completeArrayObj = function(arrayObj){
        arrayKeys = this.arrayOfKeys(arrayObj);
        arrayConfTitles = this.arrayConfTitles;
        //console.log(this);
        for(var i=0 ; i<this.arrayConfTitles.length ; i++){
            this.pushIfNotExist(arrayKeys, arrayConfTitles[i]);
        }
        //console.log(arrayKeys);
        arrayData = [];
        var objectAux = {};
        arrayObj.forEach(function(object){
            for(var i=0; i<arrayKeys.length ; i++){
                if(object.hasOwnProperty(arrayKeys[i])){
                    objectAux[arrayKeys[i]] = object[arrayKeys[i]];
                } else {
                    objectAux[arrayKeys[i]] = "";
                }
            }
            arrayData.push(objectAux);
            objectAux = {};
        });
        return arrayData;
    };

    this.sortBy = function(propertyName){
        this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
        this.propertyName = propertyName;
        this.arrayObjs = orderBy(this.arrayObjs, this.propertyName, this.reverse);
        }

    this.inArray = function(array, str){
        for(var i=0 ; i<array.length ; i++){
            if(str === array[i])
                return true;
        }
        return false;
    };
    
    }],

    templateUrl: 'grid17.tpl.html'
});


})(window.angular);


Array.prototype.inArray = function(str){
    for(var i=0 ; i< this.length; i++){
        if(str === this[i])
            return true;
    }
    return false;
};

Array.prototype.pushIfNotExist = function(str){
    if(!this.inArray(str)){
        this.push(str);
    }
}

/*Array.prototype.mergeUnique = function(arr){
    for(var i=0 ; i<arr.length ; i++){
        this.pushIfNotExist(arr[i]);
    }
}*/