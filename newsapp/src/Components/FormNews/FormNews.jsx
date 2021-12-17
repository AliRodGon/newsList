import React, { Component } from "react";

class FormNews extends Component {
  render() {
    return <div>
              <form>
                  <label>Titular</label>
                  <input type="text" />
                  <label>Resumen de noticia</label>
                  <input type="text" />
                  <button>Enviar</button>
                </form>
    </div>
  }
}

export default FormNews;
