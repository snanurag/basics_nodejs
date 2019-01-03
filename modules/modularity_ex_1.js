var myModule = (function() {
    'use strict';
 
    return {
        publicMethod: function() {
            console.log('Hello world from myModule');
        }
    };
}());
     
myModule.publicMethod();    // outputs 'Hello World'

const myModule2 = {
    publicMethod: function(){
        console.log('Hello world from myModule2')
    }
}

myModule2.publicMethod()