'use strict';

const server = require('../server');

const dataSource = server.dataSources.dbauth;
const lblModels = ['User', 'AccessToken', 'ACL', 'RoleMapping', 'Role', 'Customer'];

dataSource.automigrate(lblModels, function (error) {
    if (error) throw error;

    console.log('LoopBack schemas were created!');
    dataSource.disconnect();
});
