$(document).ready(function(){
    const endpoint = "https://api.github.com/users/atilawfonseca";
    
    const nome = document.querySelector('.profile-name');
    const login_name = document.querySelector('.profile-username');
    const img = document.querySelector('.profile-avatar');
    const repositorios = document.querySelector('#user-repositorio');
    const seguidors = document.querySelector('#user-seguidores');
    const seguind = document.querySelector('#user-seguindo');
    const link = document.querySelector('.profile-link');

    fetch(endpoint).then(function(resposta){
        return resposta.json();
    }).then(function(json){
        const img_avatar = json.avatar_url; 
        const nome_ser = json.name; 
        const seguidores = json.followers; 
        const seguindo = json.following;
        const repositorio = json.public_repos;
        const login = json.login; 
        const url_user = json.html_url;        ;
        
        nome.innerHTML = `${nome_ser}`;
        login_name.innerHTML =`@${login}`; 
        img.src = `${img_avatar}`;
        repositorios.innerHTML = `${repositorio}`;
        seguidors.innerHTML = `${seguidores}`;
        seguind.innerHTML = `${seguindo}`;
        link.href = `${url_user}`;
        
    }).catch(function(erro){
        alert("Comunicação não estabelecida!!");
    }).finally(function(){
        
    })

})
