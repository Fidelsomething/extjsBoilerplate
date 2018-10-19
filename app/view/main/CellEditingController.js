
Ext.define('Boilerplate.view.main.CellEditingController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cell-editing',

    onAddClick: function () {
        var view = this.getView(),
            rec = new Boilerplate.model.Plant({
                common: '',
                light: 'Mostly Shady',
                botanical: 'orchaedea',
                price: 0,
                availDate: Ext.Date.clearTime(new Date()),
                indoor: false
            });

        view.store.insert(0, rec);
        view.findPlugin('cellediting').startEdit(rec, 0);
    },

    onRemoveClick: function (view, recIndex, cellIndex, item, e, record) {
        record.drop();
    }
});

