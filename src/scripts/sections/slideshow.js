import {register , getInstances} from '@shopify/theme-sections';

 





register('slideShow', { 

  publicMethod: function() {  
     alert("publicMethod")
     
    },
   
  _privateMethod: function() { 
    alert("publicMethod")
    },
   
    // Shortcut function called when a section is loaded via 'sections.load()' or by the Theme Editor 'shopify:section:load' event.
  onLoad() { 
  
      alert("onLoad")
      const instances = getInstances('slideShow');
        instances.forEach(function(instance) {
          console.log(
            'A section of type ' +
              instance.type +
              ' and with an id of ' +
              instance.id +
              'is loaded on the page'
          ); 
        });
        console.log("instances",instances)
    },
  
    // Shortcut function called when a section unloaded by the Theme Editor 'shopify:section:unload' event.
  onUnload: function() {
    alert("onUnload")
    },
  
    // Shortcut function called when a section is selected by the Theme Editor 'shopify:section:select' event.
  onSelect: function() {
    alert("onSelect")
    },
  
    // Shortcut function called when a section is deselected by the Theme Editor 'shopify:section:deselect' event.
  onDeselect: function() {
    alert("onDeselect") 
    },
  
    // Shortcut function called when a section block is selected by the Theme Editor 'shopify:block:select' event.
  onBlockSelect: function() {
    alert("onBlockSelect")
    },
  
    // Shortcut function called when a section block is deselected by the Theme Editor 'shopify:block:deselect' event.
  onBlockDeselect: function() {
    alert("onBlockDeselect")
    }
});