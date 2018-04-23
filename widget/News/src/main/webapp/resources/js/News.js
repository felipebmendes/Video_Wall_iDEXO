var MyWidget = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	setTimeout("teste()", 5000);
    },
  
    //BIND de eventos
    bindings: {
        local: {
            'execute': ['click_executeAction']
        },
        global: {}
    },
 
    executeAction: function(htmlElement, event) {
    }

});

function teste(){

	console.log('entrei');
	var x = document.getElementsByClassName("timeline-Widget");
    x[0].style.backgroundColor = "black";
    
    console.log(x);
    console.log('saindo');
	
}