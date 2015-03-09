Ext.define('realPneus.view.loginForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.loginForm',
    config: {
	items: [
	    {
		xtype: 'toolbar',
		docked: 'top',
		title: 'Login'
	    },
	    {
		xtype: 'fieldset',
		title: 'Contato',
		items: [
		    {
			xtype: 'textfield',
			name: 'login',
			label: 'Login'
		    },
		    {
			xtype: 'textfield',
			name: 'senha',
			label: 'Senha'
		    }
		]
	    },
	    {
		xtype: 'button',
		action: 'login',
		ui: 'confirm',
		text: 'Login'
	    }
	]

    }


});
