// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.Timer")
                .setHost(host,"xui_timer1")
            );
            
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("37.333333333333336em")
                .setTop("24.38095238095238em")
                .setSrc("{xui.ini.img_pic}")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button3")
                .setLeft("27.428571428571427em")
                .setTop("23.61904761904762em")
                .setCaption("Button")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button4")
                .setLeft("16.761904761904763em")
                .setTop("23.61904761904762em")
                .setCaption("Status Button")
                .setType("status")
            );
            
            append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input6")
                .setLeft("16em")
                .setTop("10.666666666666666em")
                .setWidth("18em")
                .setLabelSize("8em")
                .setLabelCaption("Input")
            );
            
            append(
                xui.create("xui.UI.HiddenInput")
                .setHost(host,"xui_ui_hiddeninput1")
                .setValue("")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});