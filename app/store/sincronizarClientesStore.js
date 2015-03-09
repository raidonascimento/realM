// _store2 = Ext.create('realPneus.store.ipSincronizarStore');
// _store3 = Ext.getStore('ipSincronizarStore');
//console.log(_store2.getById(1));
//console.log(_store3.data);
//	   arquivo = _store2.data.get(1);
//	 if (arquivo == null){
//	 link = 'app/php/listaClientes.php';    
//	 }else{
//	    ip =arquivo.data.ip;	
//	    link ='http://'+ip+'/php/listaClientes.php';
//	}
//	console.log(arquivo);

Ext.define('realPneus.store.sincronizarClientesStore', {
    extend: 'Ext.data.Store',
    config: {
	model: 'realPneus.model.sincronizarClientesModel',
	
	proxy: {
	    type: 'ajax',
	    //url: 'php/json/listaContatos.php',
	    api: {
		create: 'app/php/vazio.php', //CRUD
		read : 'app/php/listaClientes.php',
		//read: link,
		update: 'app/php/vazio.php',
		destroy: 'app/php/vazio.php'
	    },
	    reader: {
		type: 'json', //json ou xml
		rootProperty: 'clientes'
	    },
	    writer: {
		type: 'json', //json ou xml
		rootProperty: 'clientes',
		writeAllFields: true,
		encode: true,
		allowSingle: true
	    }
	},
	
	autoLoad: true,
	autoSync: true	
    }
});