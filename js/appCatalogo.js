var catalogo = (function(){

    var all = [
        { id: 1, title: 'Historia Secreta de Chile I', autor: 'Jorge Baradit', img: '01.jpg'      },
        { id: 2, title: 'Historia Secreta de Chile III', autor: 'Jorge Baradit', img: '02.jpg'    },
        { id: 3, title: 'Historia General de Chile I', autor: 'Diego Barros Arana', img: '03.jpg' },
        { id: 4, title: 'La Reforma Agraria en Chile', autor: 'Alberto Valdés', img: '04.jpg'     },
        { id: 5, title: '¿La muerte del libro?', autor: 'Roger Chartier', img: '05.jpg'           }
        //{ id: 0, title: '', autor: '', img: ''           }
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


var controller = (function(UICtrl, clogo){



    return {
        init : function (){
            UIController.listar(catalogo.libros);
        }
    }
})(UIController, catalogo);

// TODO: agregar controlados.
//       que cuando se cliekee una imagen, te lleve a otra web o te muestre la info del libro
//       que se pueda filtrar
//       trabajar sobre un archivo externo que cargue el arr 

controller.init();