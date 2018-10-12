(function() {
    'use strict';

    angular
        .module('agiflexApp')
        .factory('PasswordResetFinish', PasswordResetFinish);

    PasswordResetFinish.$inject = ['$resource'];

    function PasswordResetFinish($resource) {
        var service = $resource('api/account/reset_password/finish', {}, {});

        return service;
    }
})();
