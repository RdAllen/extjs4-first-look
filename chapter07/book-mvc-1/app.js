Ext.require('Ext.container.Viewport');

Ext.application({
    name: 'App',

    appFolder: 'app',

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Books',
                    html : 'List of books will be displayed here'
                }
            ]
        });
    }
});