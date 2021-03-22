import blessed from 'blessed'

export default class ComponentsBuilder{
  #screen
  constructor(){}

  _baseComponent(){
    return {
      border: 'line',
      mouse: true,
      keys: true,
      top: 0,
      scrollbar: {
        ch: ' ',
        inverse: true
      },
      //habilita colocar cor e tags no texto
      tags: true 
    }
  }

  setScreen({ title }){
    this.#screen = blessed.screen({
      smartCSR: true,
      title
    })

    return this
  }

  setLayoutComponent(){
    //parei em 23min
  }
}