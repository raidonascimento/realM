Ext.define('realPneus.store.servicosStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.servicosModel',
	storeId: 'servicosStore',
	pageSize: 10000,
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'servico'
	}
    }
});