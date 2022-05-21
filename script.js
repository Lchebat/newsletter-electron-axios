const apiUrl = 'http://servicodados.ibge.gov.br/api/v3/noticias/?qtd=10&page=';
let page = 1;

async function getNews(){
    if(page == 1){
        const genButton = document.getElementById('buttonGetNews')
        genButton.remove()
    }      
    let request = await axios.get(apiUrl + page);
    request = request.data.items;
    genHtml(request);
}

function moreNews(){
    page += 1;
    getNews();
}

function genHtml(newsArray){
    newsArray.forEach(element => {
        const divPrincipal = document.getElementById('principal')

        const div = document.createElement('div')
        const h2 = document.createElement('h2')
        const p = document.createElement('p')
        const button = document.createElement('button')
        const a = document.createElement('a')

        h2.innerHTML = element.titulo;
        p.innerHTML = element.introducao;
        a.href = element.link;
        button.innerHTML = 'Veja Mais';

        div.appendChild(h2).classList.add('newsTitle');
        div.appendChild(p).classList.add('newsIntro');
        a.appendChild(button).classList.add('button');
        div.appendChild(a);

        divPrincipal.appendChild(div).classList.add('news');
    });
}
