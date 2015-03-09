Ext.define('realPneus.store.clientesStore', {
    extend: 'Ext.data.Store',
    requires: [
	'Ext.data.proxy.Sql',
	'Ext.util.Filter'
    ],
    config: {
	model: 'realPneus.model.clientesModel',
	autoLoad: true,
	fields:['nome_cliente'],
	sorters: 'nome_cliente',
	
	storeId: 'clientesStore',
//	grouper : function(record) {
//            return record.get('nome_cliente')[0];
//        },
	
	//pageSize: 25,

	//;filterFn: true,
	proxy: {
	    type: 'sql',
	    database: 'realPneus',
	    table: 'clientes'
	    
	}
	
    }
});