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
        inputDescripcion : '.add__descripcion'
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
                anio : document.querySelector(DOMstrings.inputAnio).value
                
            };
        },

    }

})();