Ext.define('realPneus.store.pneusStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.pneusModel',
	storeId: 'pneusStore',
	pageSize: 10000,
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'pneus'
	}
    }
});