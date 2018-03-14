import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class GazbetonUDK extends Component {
  render(){
    return(
      <section name="gazbetonUDK" id="gazbetonUDK" className="gazbetonUDK">
        <div className="wrapper">
          <h2>Автоклавный газобетон UDK – тепло и долговечность</h2>
          <p>
            Газобетон UDK – это искусственный пористый каменный материал,
            который массово используется в строительстве, являясь одним
            из самых экономичных, энергоэффективных и удобных в применении решений.
            За счет своей пористой структуры и низкой плотности,
            газобетон является энергосберегающим материалом, а благодаря автоклавной
            обработке – приобретает более высокую прочность в сравнении
            с неавтоклавными ячеистыми бетонами.
          </p>
        </div>
        <Button/>
      </section>
    )
  }
}

export default GazbetonUDK;