document.querySelector(".fetch").onclick = async function (){
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let content = await response.json();
    let small_content = content.splice(0,10);
    console.log(small_content);
    let list = document.querySelector('.list');
    for (let key in small_content){
        list.innerHTML += `
        <li class="post">
        <h4>${small_content[key].title}</h4>
        <p>${small_content[key].body}</p>
</li>`
    }
}