Ext.define('Boilerplate.store.Plant', {
    extend: 'Ext.data.Store',

    alias: 'store.plant',

    model: 'Boilerplate.model.Plant',

    data: { items: [
        {common: "girasol", botanical: "girasoleanus", light: 'Sunny', price:0, availDate: Ext.Date.clearTime(new Date()), indoor: false},
        {common: "girasol2", botanical: "girasoleanus", light: 'Sunny', price:0, availDate: Ext.Date.clearTime(new Date()), indoor: false}
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
