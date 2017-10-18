var post = location.search.substring(1).split('=')[1];

$.get('https://www.reddit.com' + url + '.json')
.then(function(success) {
    let image=document.createElement("img");
    let div=document.createElement("div");
    let myPost=sucess[0].data.children[0].data;
    let title= document.createElement("h1")
    title.innerHTML=myPost.title
    let thumbnail=myPost.thumbnail;
    if(thumbnail=="self"){
        image.src="no-image-box.png";
    }else{
    image.src=thumbnail;}
    div.appendChild(title);
    div.appendChild(image);
    document.body.appendChild(div);
    console.log(sucess);
    console.log(myPost)
})