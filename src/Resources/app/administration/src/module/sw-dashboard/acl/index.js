Shopware.Service('privileges')
    .addPrivilegeMappingEntry({
        category: 'additional_permissions',
        parent: null,
        key: 'dashboard',
        roles: {
            intro: {
                privileges: ['dashboard:intro'],
                dependencies: []
            },
            welcome: {
                privileges: ['dashboard:welcome'],
                dependencies: []
            },
            feedback: {
                privileges: ['dashboard:feedback'],
                dependencies: []
            }
        }
    });
