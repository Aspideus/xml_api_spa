import React from 'react';
import './App.css';
import './scss/variables.scss';
import './scss/pseudo-header.scss';
import './scss/main.scss';
import './scss/aside.scss';
import './scss/footer.scss';

import logo from './img/logo.svg';
import call from './img/call.svg';
import account from './img/account.svg';
import domens from './img/domens.svg';
import journal from './img/journal.svg';
import vps from './img/vps.svg';

import { getApiResource } from './utils/network';

function App() {

  getApiResource();

  return (
    <div className="App">
      <div className="meta-block">
        <aside className="aside">
          <div className="aside__logo">
            <img src={logo} alt={"logo"}/>
          </div>
          <div className="aside__item">
            <img src={account} alt={"account"}/>
            Аккаунт
          </div>
          <div className="aside__item">
            <img src={vps} alt={"vps"}/>
            VPS
          </div>
          <div className="aside__item">
            <img src={domens} alt={"domens"}/>
            Домены
          </div>
          <div className="aside__item aside__item--selected">
            <img src={journal} alt={"journal"} />
            Бортовой журнал
          </div>
        </aside>
        <section className="main">
          <div className="pseudo-header">
            <div className="pseudo-header__item">
              <a href="#">Выйти</a>
            </div>
            <div className="pseudo-header__item">
              <img src={call} alt={"call"}/>
              vikavishny
            </div>
            <div className="pseudo-header__item">
              100.00 ₽
            </div>
          </div>
          <div className="main__block" id="api-block">
            <div className="main__block--subtitle">
            Бортовой журнал
            </div>
            <div className="main__block--title">
            Бортовой журнал
            </div>
          </div>
        </section>
      </div>
      <footer className="footer"> 
          <div className="footer__col">
            <p>© 2001– 2018 ООО <a href="https://sweb.ru/">«СпейсВэб»</a></p>
            <p>Все права защищены.</p>
            <p>Лицензия <a href="#">№163230</a></p>
          </div>
          <div class="footer__col">
            <p><a href="tel:+78123341222">+7 (812) 334-12-22</a> (в Санкт-Петербурге)</p>
            <p><a href="tel:+74956631612">+7 (495) 663-16-12</a> (в Москве)</p>
            <p class="footer__col--ml3"><a href="tel:+78001001615">(800) 100-16-15</a> (бесплатно по России)</p>
          </div>
      </footer>
      
    </div>
  );
}

export default App;
