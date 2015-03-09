Ext.define('realPneus.controller.main', {
    extend: 'Ext.app.Controller',
    requires: [
	'Ext.MessageBox',
	'Ext.util.Filter',
	'Ext.data.Store',
	'Ext.List',
	'Ext.field.Search',
	'Ext.Toolbar',
	'Ext.Panel'
    ],
    config: {
	routes: {
	    '': 'showMenuIniciar'
	},
	refs: {
	    menuIniciar: {
		xtype: 'menuIniciar',
		selector: 'menuIniciar',
		autoCreate: true
	    },
	    clientesList: {
		xtype: 'clientesList',
		selector: 'clientesList',
		autoCreate: true
	    },
	    servicoList: {
		xtype: 'servicoList',
		selector: 'servicoList',
		autoCreate: true
	    },
	    pneusList: {
		xtype: 'pneusList',
		selector: 'pneusList',
		autoCreate: true
	    },
	    coletasForm: {
		xtype: 'coletasForm',
		selector: 'coletasForm',
		autoCreate: true
	    },
	    loginForm: {
		xtype: 'loginForm',
		selector: 'loginForm',
		autoCreate: true
	    },
	    ipSincronizarForm: {
		xtype: 'ipSincronizarForm',
		selector: 'ipSincronizarForm',
		autoCreate: true
	    },
	    testeBtn: 'button[action=testesql]',
	    sincronizarBtn: 'button[action=sincronizar]',
	    showListaClientesBtn: 'button[action=listaclientes]',
	    salvarPneusColetasBtn: 'button[action=salvarPneusColeta]',
	    salvarColetaBtn: 'button[action=salvarColeta]',
	    loginBtn: 'button[action=login]',
	    salvarIpBtn: 'button[action=salvarIp]'//,

	},
	control: {
	    testeBtn: {
		tap: 'teste'
	    },
	    sincronizarBtn: {
		tap: 'sincronizar'
	    },
	    showListaClientesBtn: {
		tap: 'showListaClientes'
	    },
	    salvarPneusColetasBtn: {
		tap: 'salvarPneusColeta'
	    },
	    salvarColetaBtn: {
		tap: 'verificarPneusColeta'
	    },
	    loginBtn: {
		tap: 'salvarLogin'
	    },
	    salvarIpBtn: {
		tap: 'salvarIp'
	    },
	    'button[action=testesql]': {
		tap: 'teste'
	    },
	    'button[action=listaservico]': {
		tap: 'showServicoList'
	    },
	    'button[action=listapneus]': {
		tap: 'showPneusList'
	    },
	    'button[action=menuIniciar]': {
		tap: 'showMenuIniciar'
	    },
	    'button[action=criarColeta]': {
		tap: 'showColetasForm'
	    },
	    'button[action=configuracao]': {
		tap: 'showConfiguracao'
	    },
	    'selectfield[name=idPneu]': {
		change: 'onSelecaoPneuServico'
	    }
	}
    },
    init: function () {
	console.log('Controller initialized');



	this.control({
	    '#searchField': {//  the id or itemId we gave our searchfield
		scope: this,
		clearicontap: this.onSearchClearIconTap,
		keyup: this.onSearchKeyUp
	    }

	});

    },
//    onSearchKeyUp: function(field) {
//        //get the store and the value of the field
//        var value = field.getValue(),
//                store = Ext.ComponentQuery.query('#accountlist')[0].getStore();
// 
//        //first clear any current filters on thes tore
//        store.clearFilter();
// 
//        if (value) {
//            var thisRegEx = new RegExp(value, "i");
//            store.filterBy(function(record) {
//                if (thisRegEx.test(record.get('name'))) {
//                    return true;
//                }
//                ;
//                return false;
//            });
//        }
//    },
//   
//    // * Called when the user taps on the clear icon in the search field.
// 
//  //   
//    onSearchClearIconTap: function() {
//        //call the clearFilter method on the store instance
//        // this.getStore().clearFilter();
//        var store = Ext.getStore('accountstore');
//        store.clearFilter();
//    },



//    onSearchKeyUp: function (field) {
//	console.log(field);
//	//get the store and the value of the field
//	var value = field.getValue(),
//		store = Ext.getCmp('clientesList').getStore();    //  getting the store that drives the contact list
//	console.log(store);
//	//first clear any current filters on thes tore
//	store.clearFilter();
//
//	//check if a value is set first, as if it isnt we dont have to do anything
//	if (value) {
//	    console.log(value);
//	    //the user could have entered spaces, so we must split them so we can loop through them all
//	    var searches = value.split(' '),
//		    regexps = [],
//		    i;
//
//	    //loop them all
//	    for (i = 0; i < searches.length; i++) {
//		//if it is nothing, continue
//		if (!searches[i])
//		    continue;
//
//		//if found, create a new regular expression which is case insenstive
//		regexps.push(new RegExp(searches[i], 'i'));
//	    }
//
//	    //now filter the store by passing a method
//	    //the passed method will be called for each record in the store
//	    store.filter(function (record) {
//		var matched = [];
//
//		//loop through each of the regular expressions
//		for (i = 0; i < regexps.length; i++) {
//		    var search = regexps[i],
//			    didMatch = record.get('nome_cliente').match(search) ||
//			    record.get('nome_cliente').match(search);
//		    //if it matched the first or last name, push it into the matches array 
//
//		    matched.push(didMatch);
//
//		}  //if nothing was found, return false (dont so in the store)               
//
//		if (regexps.length > 1 && matched.indexOf(false) != -1) {
//		    return false;
//		} else {
//		    //else true true (show in the store)
//		    return matched[0];
//		}
//	    });
//	}
//    },
    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
//    onSearchClearIconTap: function () {
//	//call the clearFilter method on the store instance
//	Ext.getCmp('clientesList').getStore().clearFilter();
//    },
    atualizandoStore: function () {
	Ext.Viewport.setActiveItem(this.getMenuIniciar());

    },
    atualizandoStore2: function () {
	var store = Ext.getStore('clientesStore');
	store.load();
	var store2 = Ext.getStore('pneusStore');
	store2.load();
	var store3 = Ext.getStore('servicosStore');
	store3.load();
	var store4 = Ext.getStore('ipSincronizarStore');
	store4.load();
	this.atualizandoStore();
    },
    showMenuIniciar: function () {
	var store = Ext.getStore('clientesStore');
	store.load();
	var store2 = Ext.getStore('pneusStore');
	store2.load();
	var store3 = Ext.getStore('servicosStore');
	store3.load();
	var store4 = Ext.getStore('ipSincronizarStore');
	store4.load();
	this.atualizandoStore2();
    },
    showLoginForm: function () {
	Ext.Viewport.setActiveItem(this.getLoginForm());
    },
    showColetasForm: function () {
	var _storePneus = Ext.getStore('pneusStore');
	_storePneus.load();
	Ext.Viewport.setActiveItem(this.getColetasForm());
    },
    showListaClientes: function () {


	//teste();
	Ext.Viewport.setActiveItem(this.getClientesList());

    },
    showServicoList: function () {
	Ext.Viewport.setActiveItem(this.getServicoList());
    },
    showPneusList: function () {
	Ext.Viewport.setActiveItem(this.getPneusList());

    },
    showConfiguracao: function () {
	Ext.Viewport.setActiveItem(this.getIpSincronizarForm());
    },
    teste: function () {

	// var listConfiguration = this.getListConfiguration();
	//
	//Ext.Viewport.setActiveItem(listConfiguration);

//	var _coletasStore = Ext.getStore('coletasStore');
//	_coletasStore.load();
//	Ext.Viewport.setActiveItem(this.getMenuIniciar());
//	this.salvarIdColetaPneus();
    },
    sincronizar: function () {
	this.apagarClientesSincronizar();
	this.sincronizarClientes();
	this.apagarPneusSincronizar();
	this.sincronizarPneus();
	this.apagarServicoSincronizar();
	this.sincronizarServico();
	this.apagarFuncionariosSincronizar();
	this.sincronizarFuncionario();
    },
    apagarClientesSincronizar: function () {
	//console.log('apagar clientes');
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM clientes');
	}
    },
    sincronizarClientes: function () {
	//console.log('sincronizar clientes');
	var j = 0;
	var _store = Ext.getStore('sincronizarClientesStore');
	var _store2 = Ext.getStore('clientesStore');
	_store.each(function () {
	    //  console.log(j);
	    var _record = _store.data.get(j);
	    var _model = Ext.create('realPneus.model.clientesModel', {
		nome_cliente: _record.data.nome,
		codigo: _record.data.codigo
//		apelido: record.data.apelido,
//	    	cpfoucnpj: record.data.cpfoucnpj,
//		registro: record.data.registro,
//		telefone_com: record.data.telefone_com,
//		telefone_res: record.data.telefone_res,
//		celular: record.data.celular,
//		email: record.data.email,
//		localidade: record.data.localidade
	    });

	    _store2.add(_model);
	    j++;
	});
	_store2.sync();
    },
    apagarPneusSincronizar: function () {
	//console.log('apagra pneu');
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM pneus');
	}
    },
    sincronizarPneus: function () {
//		console.log('sincronizar pneu');
	var j = 0;
	var _store = Ext.getStore('sincronizarPneusStore');
	var _store2 = Ext.getStore('pneusStore');
	_store.each(function () {
	    //   console.log(j);
	    var _record = _store.data.get(j);
	    var _model = Ext.create('realPneus.model.pneusModel', {
		codigo: _record.data.codigo,
		marca: _record.data.marca,
		modelo: _record.data.modelo,
		medida: _record.data.medida,
		aplicacao: _record.data.aplicacao,
		todos: _record.data.medida + ' | ' + _record.data.modelo + ' | ' + _record.data.marca
	    });
	    _store2.add(_model);
	    j++;
	});
	_store2.sync();
    },
    apagarServicoSincronizar: function () {
	//	console.log('apagar servico');
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM servico');
	}
    },
    sincronizarServico: function () {
	//console.log('sincronizar servico');
	var j = 0;
	var _store = Ext.getStore('sincronizarServicosStore');
	var _store2 = Ext.getStore('servicosStore');
	_store.each(function () {
	    //   console.log(j);
	    var _record = _store.data.get(j);
	    var _model = Ext.create('realPneus.model.servicosModel', {
		codigo: _record.data.codigo,
		tipo: _record.data.tipo,
		modelo: _record.data.modelo,
		categoria: _record.data.categoria,
		subgrupo: _record.data.subgrupo,
		grupo: _record.data.grupo,
		medida: _record.data.medida,
		preco: _record.data.preco,
		nome: _record.data.nome
	    });
	    _store2.add(_model);
	    j++;
	});
	_store2.sync();
    },
    apagarFuncionariosSincronizar: function () {
	var db = openDatabase("realPneus", "1.0", "", 200000);
	db.transaction(apaga);
	function apaga(tx) {
	    tx.executeSql('DELETE FROM funcionarios');
	}
    },
    sincronizarFuncionario: function () {
	var j = 0;
	var _storeSincronizar = Ext.getStore('sincronizarFuncionariosStore');
	var _storeFuncionarios = Ext.getStore('funcionariosStore');
	_storeSincronizar.each(function () {
	    var _record = _storeSincronizar.data.get(j);
	    var _model = Ext.create('realPneus.model.funcionariosModel', {
		codigo: _record.data.codigo,
		nome: _record.data.nome,
		login: _record.data.login,
		senha: _record.data.senha
	    });
	    _storeFuncionarios.add(_model);
	    j++;
	});
	_storeFuncionarios.sync();
    },
    salvarPneusColeta: function () {
	var _form = this.getColetasForm();
	var _camposForm = Ext.create('realPneus.model.coletasCompletoModel', _form.getValues());
	var _pneusStore = Ext.getStore('pneusStore');
	var _record = _pneusStore.data.get(_camposForm.data.idPneu);
	var _pneusColetaStore = Ext.getStore('pneusColetaStore');
	var _salvarPneusColetaModel = Ext.create('realPneus.model.pneusColetaModel', {
	    codigo_coleta: '',
	    cod_pneu: _record.data.codigo,
	    cod_servico: _camposForm.data.cod_servico,
	    n_fogo: _camposForm.data.n_fogo,
	    n_serie: _camposForm.data.n_serie
	});
	_pneusColetaStore.add(_salvarPneusColetaModel);
	_pneusColetaStore.sync();


	Ext.Msg.alert('Pneus da Coleta', 'Pneus Salvo na Coleta', Ext.emptyFn);

    },
    verificarPneusColeta: function () {
	var store10 = Ext.getStore('pneusColetaStore');
	store10.load();
	var store11 = Ext.getStore('pneusColetaStore');
	store11.load();
	var store12 = Ext.getStore('pneusColetaStore');
	store12.load();
	var store13 = Ext.getStore('pneusColetaStore');
	store13.load();

	var record10 = store13.data.last();
	if (record10 == null) {
	    Ext.Msg.alert('Pneus Coleta', 'Não exitem pneus cadastrados nessa coleta.', Ext.emptyFn);
	} else {
	    var arquivo = record10.data.codigo_coleta;
	    if (arquivo == '') {
		this.salvarColeta();
	    } else {
		Ext.Msg.alert('Pneus Coleta', 'Não exitem pneus cadastrados nessa coleta.', Ext.emptyFn);
	    }
	}

    },
    salvarColeta: function () {

	var _as = Ext.getStore('coletasStore');
	var _rec = _as.data.last();

//	
	var _form = this.getColetasForm();
	var camposForm = Ext.create('realPneus.model.coletasCompletoModel', _form.getValues());

	var _salvarColetaModel = Ext.create('realPneus.model.coletasModel', {
	    nome_cliente: camposForm.data.nome_cliente,
	    cpf_cnpj: camposForm.data.cpf_cnpj,
	    data_entrega: camposForm.data.data_entrega,
	    observacao: camposForm.data.observacao,
	    cod_funcionario: '1',
	    data_coleta: camposForm.data.data_coleta,
	    vendedor: '1'
	});

	var _salvarColetaStore = Ext.create('realPneus.store.coletasStore');
	_salvarColetaStore.add(_salvarColetaModel);
	_salvarColetaStore.sync();

	this.salvarIdColetaPneus();
	this.teste();

    },
    salvarIdColetaPneus: function () {
	var _storePneusColeta = Ext.getStore('pneusColetaStore');
	var j = 0;
	_storePneusColeta.each(function () {
	    var _recordPneusColeta = _storePneusColeta.data.get(j + 1);

	    if (_recordPneusColeta.data.codigo_coleta == '') {
		var _coletasStore = Ext.getStore('coletasStore');
		_coletasStore.load();
		var _recordColetas = _coletasStore.data.last();

		if (_recordColetas == null) {
		    var db = openDatabase("realPneus", "1.0", "", 200000);
		    db.transaction(insert);
		    function insert(tx) {
			tx.executeSql('UPDATE pneus_coleta SET codigo_coleta = "1.0" WHERE id=' + _recordPneusColeta.data.id + '');
		    }
		} else {
		    var db = openDatabase("realPneus", "1.0", "", 200000);
		    db.transaction(insert);
		    function insert(tx) {
			var idColeta = _recordColetas.data.id + 1;
			tx.executeSql('UPDATE pneus_coleta SET codigo_coleta = "' + idColeta + '" WHERE id=' + _recordPneusColeta.data.id + '');
		    }
		}
	    }
	    j++;
	});

    },
    salvarLogin: function () {
	var _form = this.getLoginForm();
	var _camposLogin = Ext.create('realPneus.model.coletasCompletoModel', _form.getValues());


	var j = 0;
	var _funcionariosStore = Ext.getStore('funcionariosStore');
	_funcionariosStore.each(function () {
	    var _recordFuncionario = _funcionariosStore.data.get(j);
	    if (_camposLogin.data.login == _recordFuncionario.data.login) {
		if (_camposLogin.data.senha == '1234') {
		    var _codigoFuncionarioStore = Ext.getStore('codigoFuncionarioStore');
		    var _recordFuncionarioStore = _codigoFuncionarioStore.data.get(1);
		    if (_recordFuncionarioStore == null) {
			var _model = Ext.create('realPneus.model.codigoFuncionarioModel', {
			    codigo_funcionario: _recordFuncionario.data.codigo
			});
			var _store = Ext.create('realPneus.store.codigoFuncionarioStore');
			_store.add(_model);
			_store.sync();
		    } else {
			var _store2 = Ext.getStore('codigoFuncionarioStore');
			var _record2 = _store2.data.get(1);
			_record2.set('codigo_funcionario', _recordFuncionario.data.codigo);
			_store2.sync();


		    }

		} else {

		}

	    } else {


	    }

	    j++;
	});
	var verStore = Ext.getStore('codigoFuncionarioStore');
	verStore.load();
	var _verRecord = verStore.data.get(1);

	if (_verRecord.data.codigo_funcionario !== null) {
	    this.showMenuIniciar();
	} else {
	}
    },
    salvarIp: function () {
	var _store2 = Ext.getStore('ipSincronizarStore');
	var _record = _store2.data.get(1);
	var _form = this.getIpSincronizarForm();
	var _camposForm2 = Ext.create('realPneus.model.ipSincronizarModel', _form.getValues());
	if (_record == null) {
	    var _camposForm = Ext.create('realPneus.model.ipSincronizarModel', {
		ip: _camposForm2.data.ip
	    });
	    _store2 = Ext.getStore('ipSincronizarStore');
	    _store2.add(_camposForm);
	    _store2.sync();
	} else {

	    var _form2 = this.getIpSincronizarForm(),
		    store2 = Ext.getStore('ipSincronizarStore');
	    var contatoAtualizado = store2.data.get(1);
	    contatoAtualizado.set(_form2.getValues());
	    store2.sync();
	}
	Ext.Msg.alert('Ip para Sincronização', 'Ip salvo com Sucesso.', Ext.emptyFn);
	_form.reset();
	this.showMenuIniciar();

    },
    onSelecaoPneuServico: function (field, newValue) {
	var _pneusStore = Ext.getStore('pneusStore');
	var _record = _pneusStore.data.get(newValue);
	var form = field.up('coletasForm');
	var servicoField = form.child('selectfield[name=cod_servico]');
	var option = new Array();
	var i = 0;
	var n = 0;
	var _servicoStore = Ext.getStore('servicosStore');
	_servicoStore.each(function () {

	    var _recordServico = _servicoStore.data.get(i);
	    if (_record.data.medida == _recordServico.data.medida) {
		option[n] = new Object();
		option[n].text = _recordServico.data.nome;
		option[n].value = _recordServico.data.codigo;
		n++;
	    }
	    i++;
	});
	servicoField.setOptions(option);
	servicoField.enable();
    },
    onSearchKeyUp: function (field) {
	var db = openDatabase("realPneus", "1.0", "banco", 200000);

	var value = field.getValue();
	db.transaction(function (tx) {
	    var _query = '';
	    if (value.length > 3) {
		_query = 'SELECT nome_cliente,codigo FROM clientes WHERE nome_cliente LIKE "' + value + '%" ';
		tx.executeSql(_query, [], function (tx, results) {
//		    console.log(storeC);
		    var storeC = Ext.getStore('Contatos');
		    var len = results.rows.length, i;
		    storeC.removeAll();
		    storeC.sync();
		    for (i = 0; i < len; i++) {
			Ext.getStore('Contatos').add({
			    nome_cliente: results.rows.item(i).nome_cliente,
			    codigo: results.rows.item(i).codigo
			});
		    }
		    //console.log(storeC);
		});
	    } else {
		var storeC = Ext.getStore('Contatos');
		
		var len = storeC.data.length;
		if (len > 0) {
		    storeC.removeAll();
		    storeC.sync();
		}
	    }
	});

	//get the store and the value of the field
//	    var store = Ext.getCmp('clientesList').getStore();    //  getting the store that drives the contact list

//	    //first clear any current filters on thes tore
//	    store.clearFilter();

	//check if a value is set first, as if it isnt we dont have to do anything
//	    if (value) {
//		console.log(value);
//		//the user could have entered spaces, so we must split them so we can loop through them all
//		var searches = value.split(' '),
//			regexps = [],
//			i;
//
//		//loop them all
//		for (i = 0; i < searches.length; i++) {
//		    //if it is nothing, continue
//		    if (!searches[i])
//			continue;
//
//		    //if found, create a new regular expression which is case insenstive
//		    regexps.push(new RegExp(searches[i], 'i'));
//		}
//
//		//now filter the store by passing a method
//		//the passed method will be called for each record in the store
//		store.filter(function (record) {
//		    console.log(record);
//		    var matched = [];
//		    //loop through each of the regular expressions
//		    for (i = 0; i < regexps.length; i++) {
//			var search = regexps[i],
//				didMatch = record.get('nome_cliente').match(search);
//			//if it matched the first or last name, push it into the matches array 
//
//			matched.push(didMatch);
//
//		    }  //if nothing was found, return false (dont so in the store)               
//
//		    if (regexps.length > 1 && matched.indexOf(false) !== -1) {
//			return false;
//		    } else {
//			//else true true (show in the store)
//			return matched[0];
//		    }
//		});
//	    }
//	} else {
//	    var store = Ext.getCmp('clientesList').getStore();    //  getting the store that drives the contact list
//
//	    //first clear any current filters on thes tore
//	    store.clearFilter();
//	}
    },
    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap: function () {
	//call the clearFilter method on the store instance
	Ext.getCmp('clientesList').getStore().clearFilter();
    }
    ///

    /*
     onSearchKeyUp: function (textfield, e, eOpts) {
     var value = textfield.getValue(), // Search value
     
     store = Ext.getStore('clientesStore');
     
     console.log(store);
     
     console.log(value);
     // store.clearFilter();
     
     store.clearFilter(!!value);
     
     if (value) {
     
     // Spit value to get multiple terms
     var terms = value.split(' ');
     
     // Convert each search string into regex
     var regexps = [],
     i, regex;
     ;
     
     for (i = 0; i < terms.length; i++) {
     //if it is nothing, continue
     if (!terms[i])
     continue;
     
     regex = terms[i].trim();
     regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
     
     //if found, create a new regular expression which is case insenstive
     regexps.push(new RegExp(regex.trim(), 'i'));
     }
     
     }
     //store.filter("email", /\.com$/);
     //   store.filterFn();
     console.log("oi");
     // Filter records
     
     store.filter(function (record) {
     console.log(record);
     
     var matched = [];
     
     //loop through each of the regular expressions
     for (i = 0; i < regexps.length; i++) {
     var search = regexps[i],
     didMatch = record.get('first_name').match(search) ||
     record.get('last_name').match(search);  
     //if it matched the first or last name, push it into the matches array 
     
     matched.push(didMatch);
     console.log(search);
     }  //if nothing was found, return false (dont so in the store)               
     
     if (regexps.length > 1 && matched.indexOf(false) != -1) {
     return false;
     } else {
     //else true true (show in the store)
     return matched[0];
     }
     
     });
     
     },
     onSearchClearIconTap: function (textfield, e, eOpts) {
     
     // Get store
     var store = Ext.getStore('clientesStore');
     
     // Clear filter
     store.clearFilter();
     Ext.getCmp('clienteList').getStore().clearFilter();
     Ext.Viewport.setActiveItem(this.getClientesList());
     
     }
     
     */
//-----------------------------------


    /* store.filter(function (record) {
     
     
     var matches = [];
     });
     */









    ///


    /*search: function (textfield, e, eOpts) {
     var value = textfield.getValue(), // Search value
     store = Ext.getStore('clientesStore');	// People store
     
     // Clear current filter if less than 2
     if (value.length === 0) {
     store.clearFilter();
     }
     
     // Search term must be at least 2 characters
     if (value.length < 2) {
     return;
     }
     
     // Clear any current filters
     store.clearFilter();
     
     // Check if a value is provided
     if (value) {
     
     // Spit value to get multiple terms
     var terms = value.split(' ');
     
     // Convert each search string into regex
     var regexps = [];
     Ext.each(terms, function (term) {
     
     // Ensure term is not space and at least 2 characters
     if (term && term.length > 1) {
     regexps.push(new RegExp(term, 'i')); // Case-insensitive regex
     }
     
     });
     
     store.filter();
     // Filter records
     store.filter(function (record) {
     
     
     var matches = [];
     
     // Check each of the regular expressions
     Ext.each(regexps, function (regex) {
     
     var match = record.get('nome_cliente').match(regex);
     matches.push(match);
     
     });
     
     // If nothing was found, return false to not show
     if (regexps.length > 1 && matches.indexOf(false) != -1) {
     return false;
     } else {
     // Else return to show
     return matches[0];
     }
     
     });
     
     }
     
     },
     */



    ////////////TESTEE
//    , getListConfiguration: function () {
//	return {
//	    //give it an xtype of list
//	    xtype: 'list',
//	    ui: 'round',
//	    pinHeaders: false,
//	    //itemTpl defines the template for each item in the list
//	    itemTpl: '<div class="contact">{firstName} <strong>{lastName}</strong></div>',
//	    //give it a link to the store instance
//	    store: this.getStore(),
//	    useSimpleItems: true,
//	    grouped: true,
//	    emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
//	    disableSelection: true,
//	    items: [
//		{
//		    xtype: 'toolbar',
//		    docked: 'top',
//		    items: [
//			{xtype: 'spacer'},
//			{
//			    xtype: 'searchfield',
//			    placeHolder: 'Search...',
//			    listeners: {
//				scope: this,
//				clearicontap: this.onSearchClearIconTap,
//				keyup: this.onSearchKeyUp
//			    }
//			},
//			{xtype: 'spacer'}
//		    ]
//		}
//	    ]
//	};
//    },
//    /**
//     * Returns a new store instance if one hasn't been created yet
//     * @return {Ext.data.Store}
//     */
//    getStore: function () {
//	//check if a store has already been set
//	if (!this.store) {
//	    //if not, create one
//	    this.store = Ext.create('Ext.data.Store', {
//		//define the stores fields
//		fields: ['firstName', 'lastName'],
//		//sort the store using the lastname field
//		sorters: 'lastName',
//		//group the store using the lastName field
//		groupField: 'lastName',
//		//and give it some data
//		data: [
//		    {firstName: 'Tommy', lastName: 'Maintz'},
//		    {firstName: 'Rob', lastName: 'Dougan'},
//		    {firstName: 'Ed', lastName: 'Avins'},
//		    {firstName: 'Jamie', lastName: 'Avins'},
//		    {firstName: 'Dave', lastName: 'Dougan'},
//		    {firstName: 'Abraham', lastName: 'Elias'},
//		    {firstName: 'Jacky', lastName: 'Ngyuyen'},
//		    {firstName: 'Jay', lastName: 'Ngyuyen'},
//		    {firstName: 'Jay', lastName: 'Robinson'},
//		    {firstName: 'Rob', lastName: 'Avins'},
//		    {firstName: 'Ed', lastName: 'Dougan'},
//		    {firstName: 'Jamie', lastName: 'Poulden'},
//		    {firstName: 'Dave', lastName: 'Spencer'},
//		    {firstName: 'Abraham', lastName: 'Avins'},
//		    {firstName: 'Jacky', lastName: 'Avins'},
//		    {firstName: 'Rob', lastName: 'Kaneda'},
//		    {firstName: 'Ed', lastName: 'Elias'},
//		    {firstName: 'Tommy', lastName: 'Dougan'},
//		    {firstName: 'Rob', lastName: 'Robinson'}
//		]
//	    });
//	}
//
//	//return the store instance
//	return this.store;
//    }
    /**
     * Called when the search field has a keyup event.
     *
     * This will filter the store based on the fields content.
     */








});

