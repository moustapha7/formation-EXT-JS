Ext.define('FifaApp.view.matches.MachesViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.matchesviewcontroller',

    onEditCancelled: function (editor, value, startValue, eOpts) {
        var user = Ext._find(value.record.store.config.data.items, { name: value.record.data.name });
        Ext.Msg.confirm('Confirm', value.record.data.name + ': ' + user.phone + ' is phone number', 'onConfirm', this);
    },

    onItemSelected : function (sender,record)
    {
        Ext.Msg.confirm('Confirm','Are you sure ?', 'onConfirm',this);
    },

    onCinfirm : function (choice)
    {
        if(choice === 'yes')
        {
            //
        }
    }
});
