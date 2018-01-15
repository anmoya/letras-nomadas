var catalogo = (function(){

    var all = [
        { title: 'Historia Secreta de Chile I', autor: 'Jorge Baradit', img: '01.jpg'      },
        { title: 'Historia Secreta de Chile III', autor: 'Jorge Baradit', img: '02.jpg'    },
        { title: 'Historia General de Chile I', autor: 'Diego Barros Arana', img: '03.jpg' },
        { title: 'La Reforma Agraria en Chile', autor: 'Alberto Valdés', img: '04.jpg'     },
        { title: '¿La muerte del libro?', autor: 'Roger Chartier', img: '05.jpg'           }
        //{ title: '', autor: '', img: ''           }
    ];
    
    return {
        libros : all
    }

})();

var UIController = (function() {


    var DOMstrings = {
        todosLosLibros : '.todos-los-libros'
    }



    return {
        listar: function(arr) {
            var html;

            for (var i = 0; i < arr.length; i++){

                html = '<img src="imgs/\imgs-libros/\%img-route%" />';

                html = html.replace('%img-route%', arr[i].img);

                document.querySelector(DOMstrings.todosLosLibros).insertAdjacentHTML('beforeend', html);
            }



        }
    }


})();

// TODO: agregar controlados.
//       que cuando se cliekee una imagen, te lleve a otra web o te muestre la info del libro
//       que se pueda filtrar
//       trabajar sobre un archivo externo que cargue el arr 

UIController.listar(catalogo.libros);