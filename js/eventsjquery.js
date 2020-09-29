	$(document).ready(function(){

	    $("#cartIcon").on( "click", function() {	 
			$('.sideNavCart').toggleClass( "openCart" , 1000);
				$('.cartMask').toggleClass( "openCart" , 1000);
		});
		
		$(".closebtn").on( "click", function() {	 
			$('.sideNavCart').toggleClass( "openCart" , 1000);
				$('.cartMask').toggleClass( "openCart" , 1000);
		});

		$(".cartMask").on( "click", function() {	 
				$('.cartMask').toggleClass( "openCart" , 1000);
					$('.sideNavCart').toggleClass( "openCart" , 1000);
		});





		//AJAX alert producto agregado al carrito
			$(".titulo-pagina-productos").click(function(){
				$.get( "prueba_post.php",
				function(data, status){
					  alert("Resultado: " + data);
			  			// La respuesta del llamado es el contenido JSON generado por el archivo PHP
				});
			  });
			  
		



	});

