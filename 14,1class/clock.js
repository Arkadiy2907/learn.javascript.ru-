
  `use strict`
  /* есть Clock выводящий время каж секунду, надо создать новый класс ExtendClock который наследует от Clock и добавить параметр precision 
  количество милисекунд меж тиками (по умолч ставим 1000) */

  class Clock{
  constructor({template}){
    this.template = template;
  }
  render(){
    let date = new Date();
    let hours = date.getHours();
    if(hours < 10) hours = `0` + hours;
    let mins = date.getMinutes();
    if(mins < 10) mins = `0` + mins;
    let sec = date.getSeconds();
    if(sec < 10) sec = `0` + sec;
    
    let output = this.template
      .replace(`h`, hours)
      .replace(`m`, mins)
      .replace(`s`, sec );
    
      console.log(output);
  }
  stop(){
    clearInterval(this.timer);
  }
  start(){
    this.render();
    this.timer = setInterval(() => {
      this.render()
    }, 1000);
  }
};






 