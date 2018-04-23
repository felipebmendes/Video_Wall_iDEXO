var Week_Calendar = SuperWidget.extend({
    //variáveis da widget
    variavelNumerica: null,
    variavelCaracter: null,

    //método iniciado quando a widget é carregada
    init: function() {
    	
    	var ds = DatasetFactory.getDataset("fdwt_gestao_eventos", null, null, null);
    	
    	var dadosSeg = [];
    	var dadosTer = [];
    	var dadosQua = [];
    	var dadosQui = [];
    	var dadosSex = [];
    	
    	var dt = new Date();
    	var today = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    	
    	
    	var seg = new Date(today.getTime() - today.getDay()*24*60*60*1000 + 24*60*60*1000);
    	var ter = new Date(seg.getTime() + 24*60*60*1000);
    	var qua = new Date(ter.getTime() + 24*60*60*1000);
    	var qui = new Date(qua.getTime() + 24*60*60*1000);
    	var sex = new Date(qui.getTime() + 24*60*60*1000);
    	
    	var dateAux;
    	var aux = [];
    	var aux2 = [];
    	var timeOut;
    	
    	for(i = (ds.values.length - 1); i >= 0; i--){
    		
    		aux = ds.values[i].startDate.split('/');
    		dateAux = new Date(aux[2], parseInt(aux[1]) - 1, aux[0]);
    		
    		
    		
    		if(dateAux.getTime() < seg.getTime()){
    			break;
    		}
    		else if(dateAux.getTime() == seg.getTime()){
    			dadosSeg.push(ds.values[i]);
    		}
    		else if(dateAux.getTime() == ter.getTime()){
    			dadosTer.push(ds.values[i]);
    		}
    		else if(dateAux.getTime() == qua.getTime()){
    			dadosQua.push(ds.values[i]);
    		}
    		else if(dateAux.getTime() == qui.getTime()){
    			dadosQui.push(ds.values[i]);
    		}
    		else if(dateAux.getTime() == sex.getTime()){
    			dadosSex.push(ds.values[i]);
    		}
    		
    	}
    	
    	
    	
    	if((seg.getMonth()+1) < 10){
    		$('#seg').replaceWith('<p class="tituloDia">' + seg.getDate() + "/0" + (seg.getMonth()+1) + '</p>');
    	}
    	else{
    		$('#seg').replaceWith('<p class="tituloDia">' + seg.getDate() + "/" + (seg.getMonth()+1) + '</p>');
    	}
    	if((ter.getMonth()+1) < 10){
    		$('#ter').replaceWith('<p class="tituloDia">' + ter.getDate() + "/0" + (ter.getMonth()+1) + '</p>');
    	}
    	else{
    		$('#ter').replaceWith('<p class="tituloDia">' + ter.getDate() + "/" + (ter.getMonth()+1) + '</p>');
    	}
    	if((qua.getMonth()+1) < 10){
    		$('#qua').replaceWith('<p class="tituloDia">' + qua.getDate() + "/0" + (qua.getMonth()+1) + '</p>');
    	}
    	else{
    		$('#qua').replaceWith('<p class="tituloDia">' + qua.getDate() + "/" + (qua.getMonth()+1) + '</p>');
    	}
    	if((qui.getMonth()+1) < 10){
    		$('#qui').replaceWith('<p class="tituloDia">' + qui.getDate() + "/0" + (qui.getMonth()+1) + '</p>');
    	}
    	else{
    		$('#qui').replaceWith('<p class="tituloDia">' + qui.getDate() + "/" + (qui.getMonth()+1) + '</p>');
    	}
    	if((sex.getMonth()+1) < 10){
    		$('#sex').replaceWith('<p class="tituloDia">' + sex.getDate() + "/0" + (sex.getMonth()+1) + '</p>');
    	}
    	else{
    		$('#sex').replaceWith('<p class="tituloDia">' + sex.getDate() + "/" + (sex.getMonth()+1) + '</p>');
    	}
    	
    	if(dadosSeg.length == 0){
    		$('#dadosSeg').replaceWith('<div><p class="tituloEvento">Sem Programação!</p></div>');
    	}
    	else{
    		var dados = "<div>";
    		for(i = dadosSeg.length - 1; i >= 0 ; i--){
    			dados += '<p class="tituloEvento">' + dadosSeg[i].startHour + " - " + dadosSeg[i].endHour + '</p><p class="tituloEvento">' + dadosSeg[i].campoDescritor + "</p>";
    		}
    		dados += "</div>";
    		$('#dadosSeg').replaceWith(dados);
    	}

    	if(dadosTer.length == 0){
    		$('#dadosTer').replaceWith('<p class="tituloEvento">Sem Programação!</p>');
    	}
    	else{
    		dados = "<div>";
    		for(i = dadosTer.length - 1; i >= 0 ; i--){
    			dados += '<p class="tituloHorario">' + dadosTer[i].startHour + " - " + dadosTer[i].endHour + '</p><p class="tituloEvento">' + dadosTer[i].campoDescritor + "</p>";
    		}
    		dados += "</div>";
    		
    		
    		$('#dadosTer').replaceWith(dados);    		
    	}
    	if(dadosQua.length == 0){
    		$('#dadosQua').replaceWith('<p class="tituloEvento">Sem Programação!</p>');
    	}
    	else{
    		dados = "<div>";
    		for(i = dadosQua.length - 1; i >= 0 ; i--){
    			dados += '<p class="tituloHorario">' + dadosQua[i].startHour + " - " + dadosQua[i].endHour + '</p><p class="tituloEvento">' + dadosQua[i].campoDescritor + "</p>";
    		}
    		dados += "</div>";
    		$('#dadosQua').replaceWith(dados);    		
    	}
    	if(dadosQui.length == 0){
    		$('#dadosQui').replaceWith('<div><p class="tituloEvento">Sem Programação!</p></div>');
    	}
    	else{
    		dados = "<div>";
    		for(i = dadosQui.length - 1; i >= 0 ; i--){
    			dados += '<p class="tituloHorario">' + dadosQui[i].startHour + " - " + dadosQui[i].endHour + '</p><p class="tituloEvento">' + dadosQui[i].campoDescritor + "</p>";
    		}
    		dados += "</div>";
    		$('#dadosQui').replaceWith(dados);    		
    	}
    	if(dadosSex.length == 0){
    		$('#dadosSex').replaceWith('<p class="tituloEvento">Sem Programação!</p>');
    	}
    	else{
    		dados = "<div>";
    		for(i = dadosSex.length - 1; i >= 0 ; i--){
    			dados += '<p class="tituloHorario">' + dadosSex[i].startHour + " - " + dadosSex[i].endHour + '</p><p class="tituloEvento">' + dadosSex[i].campoDescritor + "</p>";
    		}
    		dados += "</div>";
    		$('#dadosSex').replaceWith(dados);    		
    	}
    	
    	
    	
    	for(i = 0; i < dadosSeg.length; i++){
    		aux = dadosSeg[i].startDate.split('/');
    		aux2 = dadosSeg[i].startHour.split(':');
    		dateAux = new Date(aux[2], parseInt(aux[1]) - 1, aux[0], aux2[0], aux2[1]);
    		timeOut = dateAux.getTime() - 15*60*1000 - dt.getTime();
    		
    		if(timeOut > 0){
    			setTimeout(abreModal.bind(null, dadosSeg[i]), timeOut);
    			setTimeout("fechaModal()", timeOut + 5*60*1000);
    		}
    	}
    	
    	for(i = 0; i < dadosTer.length; i++){
    		aux = dadosTer[i].startDate.split('/');
    		aux2 = dadosTer[i].startHour.split(':');
    		dateAux = new Date(aux[2], parseInt(aux[1]) - 1, aux[0], aux2[0], aux2[1]);
    		timeOut = dateAux.getTime() - 15*60*1000 - dt.getTime();
    		
    		if(timeOut > 0){
    			setTimeout(abreModal.bind(null, dadosTer[i]), timeOut);
    			setTimeout("fechaModal()", timeOut + 5*60*1000);
    		}
    	}
    	
    	for(i = 0; i < dadosQua.length; i++){
    		aux = dadosQua[i].startDate.split('/');
    		aux2 = dadosQua[i].startHour.split(':');
    		dateAux = new Date(aux[2], parseInt(aux[1]) - 1, aux[0], aux2[0], aux2[1]);
    		timeOut = dateAux.getTime() - 15*60*1000 - dt.getTime();
    		
    		if(timeOut > 0){
    			setTimeout(abreModal.bind(null, dadosQua[i]), timeOut);
    			setTimeout("fechaModal()", timeOut + 5*60*1000);
    		}
    	}
    	
    	for(i = 0; i < dadosQui.length; i++){
    		aux = dadosQui[i].startDate.split('/');
    		aux2 = dadosQui[i].startHour.split(':');
    		dateAux = new Date(aux[2], parseInt(aux[1]) - 1, aux[0], aux2[0], aux2[1]);
    		timeOut = dateAux.getTime() - 15*60*1000 - dt.getTime();
    		
    		if(timeOut > 0){
    			setTimeout(abreModal.bind(null, dadosQui[i]), timeOut);
    			setTimeout("fechaModal()", timeOut + 5*60*1000);
    		}
    	}
    	
    	for(i = 0; i < dadosSex.length; i++){
    		aux = dadosSex[i].startDate.split('/');
    		aux2 = dadosSex[i].startHour.split(':');
    		dateAux = new Date(aux[2], parseInt(aux[1]) - 1, aux[0], aux2[0], aux2[1]);
    		timeOut = dateAux.getTime() - 15*60*1000 - dt.getTime();
    		
    		if(timeOut > 0){
    			setTimeout(abreModal.bind(null, dadosSex[i]), timeOut);
    			setTimeout("fechaModal()", timeOut + 5*60*1000);
    		}
    	}
    	    

        setTimeout(refresh, 24*60*60*1000);
      
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

function abreModal(dados){
	document.getElementById("modalTitulo").innerHTML = dados.campoDescritor;
	document.getElementById("modalHorario").innerHTML = dados.startHour + " - " + dados.endHour;
	document.getElementById("modalDescricao").innerHTML = dados.description;
	document.getElementById('id01').style.display='block';
};

function fechaModal(){
	document.getElementById('id01').style.display='none';
};

function refresh() {
    window.location.reload(true);
};