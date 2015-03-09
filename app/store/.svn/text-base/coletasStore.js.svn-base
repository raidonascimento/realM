Ext.define('realPneus.store.coletasStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	idProperty: 'id',
	autoLoad: true,
	model: 'realPneus.model.coletasModel',
	storeId: 'coletasStore',
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'coletas'
	}
    }
});