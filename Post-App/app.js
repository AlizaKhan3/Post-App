function updateTime() {
  const currentTimeElement = document.getElementById('time');
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  currentTimeElement.textContent = timeString;
}

updateTime(); // update the time initially
setInterval(updateTime, 1000);

var bgImageVar;
function addPost() {
  const title = document.getElementById("title");
  const description = document.getElementById("description");

  if (title.value.trim() && description.value.trim()) {

    const posts = document.getElementById("posts");
    posts.innerHTML += `<div class="card mb-2">
            <div class="card-header">
              @Post
            </div>
            <div style ="background-image: url(${bgImageVar})" class="card-body">
              <blockquote class="blockquote mb-0">
                <p>${title.value}</p>
                <footer class="blockquote-footer">${description.value} <cite title="Source Title"></cite>
                </footer>
              </blockquote>
            </div>
          </div>`
    title.value = " ";
    description.value = " ";
    // console.log(title.value , description.value)
  } else {
    Swal.fire({
      title: "Forgot to write?",
      text: "Please enter title and description to create post",
      icon: "question"
    });
  }
}


function selectBgImage(src){
  // console.log(src);
  bgImageVar = src;
  var bgimages = document.getElementsByClassName("bg-images");
  for (var i = 0; i < bgimages.length; i++) {
    bgimages[i].className = "bg-images"
  }
  event.target.className += " images-list-selected-bg"
}