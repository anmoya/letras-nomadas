var UIController = (function () {

    var DOMstrings = {
        inputTitulo : '.add__titulo',
        inputSubtitulo : '.add__subtitulo',
        inputAutor : '.add__autor',
        inputApellidos : '.add__apellidos',
        inputPais : '.add__pais',
        inputCiudad : '.add__ciudad',
        inputPaginas : '.add__paginas',
        inputAnio : '.add__anio',
        inputDescripcion : '.add__descripcion',
        inputIngresar: '.add__button'
    };
    
    return {
        getInput : function() {
            return {
                titulo : document.querySelector(DOMstrings.inputTitulo).value,
                subtitulo : document.querySelector(DOMstrings.inputSubtitulo).value,
                autor : document.querySelector(DOMstrings.inputAutor).value,
                apellidos : document.querySelector(DOMstrings.inputApellidos).value,
                pais : document.querySelector(DOMstrings.inputPais).value,
                ciudad : document.querySelector(DOMstrings.inputCiudad).value,
                paginas : document.querySelector(DOMstrings.inputPaginas).value,
                anio : document.querySelector(DOMstrings.inputAnio).value,
                descripcion: document.querySelector(DOMstrings.inputDescripcion)
                
            };
        },
        getDOMstrings : function () {
            return DOMstrings;
        }

    }

})();


var controller = (function (UICtrl){
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputIngresar).addEventListener('click', function(){
            UICtrl.getInput();
        });
    }
    
    return {
        init : function() {
            console.log('App corriendo');
            setupEventListeners()
        }
    }
})(UIController);

controller.init();














