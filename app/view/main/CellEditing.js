/**
 * This example shows how to enable inline editing of grid cells.
 *
 * Note that cell editing is ideal for mouse/keyboard users and is not
 * recommended on touch devices.
 */
Ext.define('Boilerplate.view.main.CellEditing', {
    extend: 'Ext.grid.Panel',
    xtype: 'cell-editing',
    controller: 'cell-editing',

    requires: [
        'Ext.selection.CellModel',
        'Boilerplate.store.Plant'
    ],

    title: 'Cell Editing Plants',
    width: 680,
    height: 350,

    autoLoad: true,
    frame: true,
    selModel: {
        type: 'cellmodel'
    },

    tbar: [{
        text: 'Add Plant',
        handler: 'onAddClick'
    }],

    bbar: {
        platformConfig: {
            '!Ext.supports.Touch': {
                hidden: true
            }
        },
        items: [{
            xtype: 'component',
            flex: 1,
            html: '<b>Not recommended on touch devices</b>',
            style: 'text-align: right;'
        }]
    },

    plugins: {
        cellediting: {
            clicksToEdit: 1
        },
        gridfilters : true

    },

    store: {
        type: 'plant'
    },

    columns: [{
        header: 'Common Name',
        dataIndex: 'common',

        flex: 1,
        editor: {
            allowBlank: false
        },
        filter: {
            // required configs
            type: 'string',
            // optional configs
            value: 'gir',  // setting a value makes the filter active.
            itemDefaults: {
                // any Ext.form.field.Text configs accepted
            }
        }
    }, { 
        header: 'Botanical',
        dataIndex: 'botanical',

        flex: 1,
        editor: {
            allowBlank: true
        }
    }, {
        header: 'Light',
        dataIndex: 'light',

        width: 130,
        editor: {
            xtype: 'combo',
            typeAhead: true,
            triggerAction: 'all',
            store: [
                ['Shade','Shade'],
                ['Mostly Shady','Mostly Shady'],
                ['Sun or Shade','Sun or Shade'],
                ['Mostly Sunny','Mostly Sunny'],
                ['Sunny','Sunny']
            ]
        }
    }, {
        header: 'Price',
        dataIndex: 'price',

        width: 70,
        align: 'right',
        formatter: 'usMoney',
        editor: {
            xtype: 'numberfield',

            allowBlank: false,
            minValue: 0,
            maxValue: 100000
        }
    }, {
        xtype: 'datecolumn',
        header: 'Available',
        dataIndex: 'availDate',

        width: 95,
        format: 'M d, Y',
        editor: {
            xtype: 'datefield',
            format: 'm/d/y',
            minValue: '01/01/06',
            disabledDays: [0, 6],
            disabledDaysText: 'Plants are not available on the weekends'
        }
    }, {
        xtype: 'checkcolumn',
        header: 'Indoor?',
        dataIndex: 'indoor',

        headerCheckbox: true,
        width: 90,
        stopSelection: false
    }, {
        xtype: 'actioncolumn',

        width: 30,
        sortable: false,
        menuDisabled: true,
        items: [{
            iconCls: 'cell-editing-delete-row',
            tooltip: 'Delete Plant',
            handler: 'onRemoveClick'
        }]
    }]
});