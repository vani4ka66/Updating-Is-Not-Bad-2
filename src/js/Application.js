import EventEmitter from "eventemitter3";
import anime from "animejs";
export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.init();
    this.emit(Application.events.READY);

    this.anime()
  }

  init() {
    let article = document.getElementsByClassName('article')[0];

    article.addEventListener('click', function(){
      anime({
        targets: '.article',
        translateX: 250,
        direction: 'alternate',
        loop: true,
        easing: 'spring(1, 80, 10, 0)'
      })
    })
  }
}
