
//{namespace name=backend/plugin_manager/translation}
Ext.define('Shopware.apps.PluginManager.view.account.Upload', {
    cls: 'plugin-manager-upload-window',

    alias: 'widget.plugin-manager-upload-window',

    extend: 'Ext.window.Window',
    modal: true,

    header: false,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    width: 500,
    height: 250,

    initComponent: function() {
        var me = this;

        me.items = me.createItems();

        me.dockedItems = [ me.createToolbar() ];
        me.callParent(arguments);
    },

    createItems: function() {
        var me = this;

        me.fileUpload = Ext.create('Ext.form.field.File', {
            fieldLabel: '{s name="upload_plugin"}{/s}',
            name: 'plugin',
            labelWidth: 125,
            flex: 1,
            allowBlank: false,
            margin: '10 0 0',
            buttonConfig: {
                cls: 'primary small',
                text: '{s name="upload_select"}{/s}'
            },
            listeners: {
                'change': function() {
                    if (me.fileUpload.getValue()) {
                        me.uploadButton.enable();
                    } else {
                        me.uploadButton.disable();
                    }
                }
            }
        });

        me.info = Ext.create('Ext.form.FieldSet', {
            cls : 'info',
            title: '{s name="upload_info_title"}{/s}',
            html: '{s name="upload_info_text"}{/s}'
        });

        me.form = Ext.create('Ext.form.Panel', {
            items: [ me.info, me.fileUpload ],
            bodyPadding: 20,
            border: false,
            url: '{url controller="PluginInstaller" action="upload"}',
            flex: 1,
            layout: {
                type: 'vbox',
                align: 'stretch'
            }
        });

        return me.form;
    },

    createToolbar: function() {
        var me = this;

        me.cancelButton = Ext.create('Ext.button.Button', {
            cls: 'secondary',
            text: '{s name="cancel"}{/s}',
            handler: function() {
                me.destroy();
            }
        });

        me.uploadButton = Ext.create('Ext.button.Button', {
            cls: 'primary',
            text: '{s name="upload_plugin"}{/s}',
            disabled: true,
            handler: function() {
                if (!me.form.getForm().isValid()) {
                    return;
                }

                Shopware.app.Application.fireEvent('upload-plugin', me.form, function(success) {
                    me.destroy();
                    Shopware.app.Application.fireEvent('reload-local-listing');
                });
            }
        });

        return Ext.create('Ext.toolbar.Toolbar', {
            dock: 'bottom',
            items: [me.cancelButton, '->', me.uploadButton ]
        });
    }
});