define(['jquery', 'handlebars'], function($, Handlebars){

	function handle() {
		console.log('handle 실행');

		var source = $("#entry-template").html();
		var template = Handlebars.compile(source);

		var data = {
			users : [
				{name : '아무개', id : 'heunonian'},
				{name : '개똥', id : 'leopolo'},
				{name : '리프레쉬', id : 'refrech'}
			]
		};

		Handlebars.registerHelper('email', function(id) {
			return id + '@gmail.com';
		});

		Handlebars.registerHelper('password', function(id) {
			return id + '#!@#%!';
		});

		var html = template(data);

		$('body').append(html);

	};

	return handle;

});
