Ext.define('FifaApp.view.main.MainViewModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.mainviewmodel',

	stores : {
		matchesstore : {
			type : 'Matches'
		}
	}

});
