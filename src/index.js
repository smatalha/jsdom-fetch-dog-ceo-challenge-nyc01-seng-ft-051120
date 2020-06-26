console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {

  function addImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(resp => resp(json))
  }

}
