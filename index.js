document.getElementById('btn').addEventListener('click',showGithubUserProfile)

function showGithubUserProfile(){
    let username = document.getElementById('gusername').value
    let url = 'https://api.github.com/users/' + username
    fetch(url).then(res=>res.json()).then(data=>{
        if(data.message){
           document.getElementById('res').innerHTML =`<h3>Profile Not Found</h3>`
        }
        
        else{
            console.log(data);
            document.getElementById('profile').innerHTML = `<img   style="width: 80px;height:90px;padding-top:10px; border-radius: 40%;border-radius: 50%;" src="${data.avatar_url}">`
            document.getElementById('name').innerHTML = `<p>${"Name -"+" "+data.login} </p>`
            document.getElementById('ID').innerHTML = `<p>${"Id -"+" "+data.id} </p>`
            document.getElementById('Date').innerHTML = `<p>${"Joined -"+" "+data.created_at} </p>`
            document.getElementById('repo').innerHTML = `<p>Repos - ${data.public_repos} </p>`
            document.getElementById('follower').innerHTML = `<p>Follower - ${data.followers} </p>`
            document.getElementById('following').innerHTML = `<p>Follower - ${data.following} </p>`
            document.getElementById('gitid').innerHTML = `<a>  ${data.location} </a>`
            document.getElementById('twit').innerHTML = `<a>  ${data.twitter_username} </a>`
            
        }

    }).catch(e=>{
        console.log(e)
    })
}