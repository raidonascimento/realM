Ext.define('realPneus.store.ipSincronizarStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.ipSincronizarModel',
	storeId: 'ipSincronizarStore',
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'ipSincronizar'
	}
    }
});