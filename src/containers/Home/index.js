import React, { Component } from 'react';
import Box from '../../components/blocks/Box/';

const boxList = [
  {
    title: 'Гарантия качаста',
    text: 'В случае повреждения газобетона при транспортировке — компенсируем затраты.',
    icon: 'icon-check',
  },
  {
    title: 'Низкая цена',
    text: 'Газобетон - 1540 грн./м3 (Скидки всегда!)' ,
    icon: 'icon-money-regular',
  },
  {
    title: 'Доставка в срок',
    text: 'Всегда наличие на складе. Любой объем',
    icon: 'icon-basic-clock',
  },
  {
    title: 'Доставка выгрузка манипулятором',
    text: 'Экономичная доставка газобетона до 10 паллет с разгрузкой манипулятором.',
    icon: 'icon-check',
  },
  {
    title: 'Работа без посредников',
    text: 'Прямые поставки с завода в Днепропетровске.',
    icon: 'icon-check',
  },

];

class Home extends Component {
  render(){
    return(
      <div id="home" className="home">
        <div className="wrapper">
          <h1 className="home__title">
            РиверСтрой
          </h1>
          <p className="home__subTitle">
            официальный представитель завода UDK Gazbeton
          </p>
          <h2>Почему мы?</h2>
          <div className="home__container">
            {
              boxList.map((item,index) => {
                return (
                  <Box
                    key = {index}
                    icon={item.icon}
                    title={item.title}
                    text={item.text}
                  />
                );
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Home;

