module.exports = function(application){
	application.get('/', function(req, res){

		res.format({
			html: function(){
				res.send('Bem vindo a sua app NodeJS!');
			},

			json: function(){
				var retorno = {
					body: 'Bem vindo a sua app NodeJS!',
					consideracoes: "Se você pediu em json você e god d+++"
				}
				res.json(retorno);
			}
		});		
	});

	application.post('/', function(req, res){
		var dados = req.body;
		res.send(dados);
	});
}