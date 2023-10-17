fetch('./data.json')
.then(function (response) {
return response.json();
})
.then(function (data) {
appendData(data);
})
.catch(function (err) {
console.log('error:' + err);
})

function appendData(data) {
    let mainContainer = document.getElementById("feed")
    for (let post of data)
    {
        let postDiv = document.createElement("div")
        postDiv.classList.add("post")

        let userDiv = document.createElement("div")
        userDiv.classList.add("user")

        let userImg = document.createElement("img")
        userImg.classList.add("userImg")
        userImg.src = post.userImg
        userDiv.appendChild(userImg)

        let username = document.createElement("h4")
        username.classList.add("username")
        username.innerHTML= post.username
        userDiv.appendChild(username)

        let postContentDiv = document.createElement("div")
        postContentDiv.classList.add("postContent")
        postContentDiv.innerHTML = post.postContent
        

        postDiv.appendChild(userDiv)
        postDiv.appendChild(postContentDiv)

        mainContainer.appendChild(postDiv)
    }

}

fetch('./leaderboard.json')
.then(function (response) {
return response.json();
})
.then(function (data) {
getLeaders(data);
})
.catch(function (err) {
console.log('error:' + err);
})

function getLeaders(data) {
    let mainContainer = document.getElementById("leaderBoard")
    for (let post of data)
    {
        let postDiv = document.createElement("div")
        postDiv.classList.add("lPost")

        let userDiv = document.createElement("div")
        userDiv.classList.add("user")

        let userImg = document.createElement("img")
        userImg.classList.add("userImg")
        userImg.src = post.userImg
        userDiv.appendChild(userImg)

        let username = document.createElement("h4")
        username.classList.add("Luser")
        username.innerHTML= post.user
        userDiv.appendChild(username)



        let postContentDiv = document.createElement("h4")
        postContentDiv.classList.add("numPosts")
        postContentDiv.innerHTML = "Number of Posts: " + post.numPosts
        

        postDiv.appendChild(userDiv)
        postDiv.appendChild(postContentDiv)

        mainContainer.appendChild(postDiv)
    }

}