import React from 'react';
import authorPath from '../../images/myphoto.jpg';

function About() {
  return (
    <div className="about" >
      <img src={authorPath} className="about__avatar" alt="фото автора проекта" />
      <div className="about__info-block">
        <h2 className="about__title">Об авторе</h2>
        <p className="about__text">Юрий Папков сделал тут что то написал тут какие то слова и потом еще слова,
        чтобы  было их побольше и еще еще еще</p>
        <p className="about__text">тут еще другой абзац, чтобы посмотреть, как 2 абзаца будут выглядеть
        сделал тут что то написал тут какие то слова и потом еще слова, чтобы
        было их побольше и еще еще еще</p>
      </div>
    </div>
  );
}
export default About;