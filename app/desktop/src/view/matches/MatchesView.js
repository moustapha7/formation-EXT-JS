Ext.define('FifaApp.view.personnel.MatchesView',{
    extend: 'Ext.grid.Grid',
    xtype: 'matchesview',
    cls: 'matchesview',
  //  requires: ['Ext.grid.rowedit.Plugin'],
    requires: ['Ext.grid.rowedit.Plugin'],
    controller: {type: 'matchesviewcontroller'},
  //  viewModel: {type: 'personnelviewmodel'},
    //store: {type: 'personnelshared'},
    bind : {
        store : 'matchesstore'
    },
    selectable: {mode : 'single'},
   /*  listeners: {
        select: 'onItemSelected'
    }, */
    grouped: true,
    plugins: {
        rowedit: {
            autoConfirm: false
        }
    },
    columns: [
        {
            text: 'Year',
            dataIndex: 'year',
            editable: true,
            width: 100,
            cell: {userCls: 'bold'}
        },
        {
            text: 'Team 1',
            dataIndex: 'home_team_name',
            editable: true,
             width: 230},
        {
            text: 'Team 2',
            dataIndex: 'away_team_name',
            editable: true,
            width: 150
        }
    ],
     listeners: {
        canceledit: 'onEditCancelled',
        select: 'onItemSelected'
    } 
   
});
