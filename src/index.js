console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {

  function addImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res=> res.json())
    .then(results => {
      results.messages.forEach(image => addimage(image))
    })
  }

}
