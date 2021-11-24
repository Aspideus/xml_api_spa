
const SAPI_ROOT = 'https://sweb.ru/export/turbojournal/';
const SAPI_TITLE = 'turbo:topic';
const SAPI_TEXT = 'turbo:content';
const PUSH_TO_NODE_ID = 'api-block';

//по неизвестной причине функция выполняется три раза, поэтому добавил флаг, чтобы это пресечь
let flag = true;

export const getApiResource = () => {
    document.addEventListener('DOMContentLoaded', () => {
      if(flag) {
        fetch(SAPI_ROOT)
        .then(response=>response.text())
        .then(data=>{
            let parser = new DOMParser();
            console.log(parser);
            let xml = parser.parseFromString(data, "application/xml");
            buildNodeTitles(xml);
        })
        .catch(error => console.log(error.message)); }
        flag = false;
    })

    function buildNodeTitles(x) {
      let node = document.getElementById(PUSH_TO_NODE_ID);
      let title_from_api = x.getElementsByTagName(SAPI_TITLE);
      let text_from_api = x.getElementsByTagName(SAPI_TEXT);

      for(let i = 0; i < title_from_api.length; i++){

        let div_create = document.createElement('div');

          div_create.className = 'main__block--titlediv';

          let button_create = document.createElement('button');
          let title_get = title_from_api[i].firstChild.nodeValue;

          let check_create = document.createElement('img');
          check_create.className = "check-img";

          button_create.className = 'main-button';
          button_create.onclick = function () {
            toggleText(div_create, check_create, i);
          };
          button_create.textContent = title_get;
          div_create.appendChild(button_create);
        
          div_create.appendChild(check_create);

          node.appendChild(div_create);

          let textdiv_create = document.createElement('div');
          let text_get = text_from_api[i].firstChild.nodeValue;

          textdiv_create.innerHTML = text_get;
          textdiv_create.className = 'hidden main__block--selected main__block--text ';
          textdiv_create.className += "elem_" + i;
          node.appendChild(textdiv_create);
      }
  }

  function toggleText(tsel, check, elem_num) {
    if (document.querySelector(".elem_" + elem_num).classList.contains('hidden')) {
      document.querySelector(".elem_" + elem_num).classList.remove('hidden'); 

      tsel.classList.add('main__block--tselected');
      check.classList.add('check-img--selected');
    } else { 
      document.querySelector(".elem_" + elem_num).classList.add('hidden');

      tsel.classList.remove('main__block--tselected');
      check.classList.remove('check-img--selected');
    }
  
  }
}