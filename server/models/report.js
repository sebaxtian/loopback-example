'use strict';

module.exports = function (Report) {
    function validatorAsyncForGuardId(error, next) {
        const Guard = Report.app.models.Guard;

        Guard.exists(this.guardId,
            function (errorExists, instanceExists) {
                if (errorExists || !instanceExists) {
                    error();
                }
                next();
            });
    }

    Report.validateAsync('guardId', validatorAsyncForGuardId, {
        message: 'Guard doesn\'t exist',
    });
};
