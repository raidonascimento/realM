Ext.define('realPneus.view.clientesList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.clientesList',
    

    requires: [
	'Ext.data.Store',
	'Ext.List',
	'Ext.field.Search',
	'Ext.Toolbar',
	'realPneus.store.clientesStore',
        'Ext.XTemplate',
	'Ext.Panel'
    ],
    fullscreen: true,
    id: 'clientesList',
    
    config: {
	disableSelection:true,
	
	store: 'Contatos',
	
	itemTpl: '{nome_cliente}',
	

	//itemTpl:  '<div class="myContent">'+ 
        // '<div><b>{nome_cliente}</b></div>' ,
	
        //useSimpleItems: true,
       //grouped: true,
	//onItemDisclosure: true,

	//store: 'Contatos',
	// itemTpl:'{first_name} {last_name}',
	items: [
	    {
		xtype: 'toolbar',
		docked: 'top',
		//ui: 'light',
		title: 'Lista de Clientes',
		items: [
		    {
			xtype: 'button',
			text: 'Voltar',
			height: 75,
			action: 'menuIniciar'
		    },
		    {
		
			    
			    xtype: 'searchfield',
			    itemId: 'searchField',
			    id:'searchField',
			    name:'searchField',
			    placeHolder: 'Search'

                            
                        
                    }
			   
                    
                        
		
		    

		]
		
	    }
	    
	    
	]
    }

});


       