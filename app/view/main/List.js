/**
 * This view is an example list of people.
 */
Ext.define('Boilerplate.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Boilerplate.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel'
    },

    plugins: {
        gridfilters: true
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' , filter: {type: 'string'}},
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],
    listeners: {
        select: 'onItemSelected'
    }
});
