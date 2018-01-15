var librosController = (function() {
    var agregadosRecientemente = [
        { title: 'Historia Secreta de Chile I', autor: 'Jorge Baradit', img: '01.jpg'      },
        { title: 'Historia Secreta de Chile III', autor: 'Jorge Baradit', img: '02.jpg'    },
        { title: 'Historia General de Chile I', autor: 'Diego Barros Arana', img: '03.jpg' },
        { title: 'La Reforma Agraria en Chile', autor: 'Alberto Valdés', img: '04.jpg'     },
        { title: '¿La muerte del libro?', autor: 'Roger Chartier', img: '05.jpg'           }
        //{ title: '', autor: '', img: ''           }
    ];

    var enOferta = [
        { title: 'Historia del Capitalismo en Chile', autor: 'Gabriel Salazar', img: '06.jpg' },
        { title: '¿Chilenos Todos?', autor: 'Veronica Valdivia | Julio Pinto', img: '07.jpg'           }
        //{  }
    ]



    return {
        ultimos: agregadosRecientemente,
        enOferta: enOferta
    }
})();

var UIController = (function() {

    var DOMstrings = {
        agrRecientemente: '.agregados-recientemente',
        enOferta: '.en-oferta'
    }

    return {
        getDOMstrings: function() {
            return DOMstrings;
        },

        listarLibros: function (arr, seccion) {

            for (var i = 0; i < arr.length; i++){
                // Creamos html para insertar en el DOM
                var htmlCard, newCard;

                htmlCard = '<div class="col-sm-2"><div class="card text-center"><img class="card-img-top medidas-img" src="imgs/\imgs-libros/\%img-route%" alt=""><div class="card-body"><h4 class="card-title">%card-title%</h4><p class="card-text">%card-author%</p></div></div></div>';

                // reemplazamos el texto
                newCard = htmlCard.replace('%img-route%', arr[i].img);
                newCard = newCard.replace('%card-title%', arr[i].title);
                newCard = newCard.replace('%card-author%', arr[i].autor);


                //insertamos en html
                document.querySelector(DOMstrings[seccion]).insertAdjacentHTML('beforeend', newCard);
            }

        }
    }



})();



var controller = (function(lCtrl, UICtrl) {




    return {
        init : function () {
            mostrarUltimosAgregados : UICtrl.listarLibros(lCtrl.ultimos, 'agrRecientemente');
            mostrarEnOferta : UICtrl.listarLibros(lCtrl.enOferta, 'enOferta');

        }

    }

})(librosController, UIController);

controller.init();