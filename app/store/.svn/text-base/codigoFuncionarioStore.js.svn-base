Ext.define('realPneus.store.codigoFuncionarioStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql'
    ],
    config: {
	autoLoad: true,
	model: 'realPneus.model.codigoFuncionarioModel',
	storeId: 'codigoFuncionarioStore',
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'codigoFuncionario'
	}
    }
});