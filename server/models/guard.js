'use strict';

module.exports = function (Guard) {
    Guard.validatesUniquenessOf('codigo', {
        message: 'Guard\'s codigo is not unique',
    });
};
