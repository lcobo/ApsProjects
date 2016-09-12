/*
 *	Architeture 
 * 	Helder Yesid Castrillón
 * 
 * It is the persistence in the FrontEnd
 * 
 * */
var ServersoftApi = angular.module("ServersoftApi", ['ngResource']);

//Create all common variables of the apps 
ServersoftApi.factory("commonvariable", function () {
	var Vari={
			url:"http://192.168.100.254:7777/api/sys/",
			OptionSetSelected:[]
			};

   return Vari; 
});




ServersoftApi.factory("user", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "user/:usoid",
	{ uid: '@usoid' },
  	{
  	    get: { method: "GET", isArray: true },
  	    post: { method: "POST" },
  	    put: { method: "PUT" },
  	    remove: { method: 'DELETE' }
  	});
}]);


////Factoria sesiones

//factoria que controla la autentificación, devuelve un objeto
//$cookies para crear cookies
//$cookieStore para actualizar o eliminar
//$location para cargar otras rutas
ServersoftApi.factory("loginservice", ['$resource', 'commonvariable', function ($resource, commonvariable) {
    return $resource(commonvariable.url + "auth/:username/:password",
{
    usname: '@username',
    uspassword: '@password'
},
{
    get: { method: "GET", isArray: true }
});
}]);


ServersoftApi.factory("authentication", function ($cookies, $cookieStore, $location, $q, loginservice) {
    return {
        login: function (username, password) {
            //creamos la cookie con el nombre que nos han pasado
            var defered = $q.defer();
            var promise = defered.promise;

            loginservice.get({ username: username, password: password })
            .$promise.then(function (credential) {
                if (credential.length >= 1) {
                    $cookies.dataUser = credential[0];
                    //mandamos a la adminaccess
                    $location.path("/programs");
                }
                else {
                    defered.resolve({ error: "error" });
                }
            }
            );
            return promise;

        },
        logout: function () {
            //al hacer logout eliminamos la cookie con $cookieStore.remove
            $cookieStore.remove("dataUser"),
            //mandamos al login
            $location.path("/login");
        },
        checkStatus: function () {
            //creamos un array con las rutas que queremos controlar
            var rutasPrivadas = ["/programs", "/login", "/roles", "/tenant", "/users"];
            if (this.in_array($location.path(), rutasPrivadas) && typeof ($cookies.dataUser) == "undefined") {
                $location.path("/login");
            }
            //en el caso de que intente acceder al login y ya haya iniciado sesión lo mandamos a la home
            if (this.in_array("/login", rutasPrivadas) && typeof ($cookies.dataUser) != "undefined") {
                $location.path("/programs");
            }
        },
        in_array: function (needle, haystack) {
            var key = '';
            for (key in haystack) {
                if (haystack[key] == needle) {
                    return true;
                }
            }
            return false;
        }
    }
});