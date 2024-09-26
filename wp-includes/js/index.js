/* 3. technology.html */
function fetchGallery(id) {
    fetch("./wp-includes/js/data.json")
      .then((res) => {
        return res.json();
      })
      .catch((err) => {
        console.error(err);
      })
      .then((data) => {
        data.forEach((item) => {
          document.getElementById(
            id
          ).innerHTML += `<div class="album-item">
          <a data-fancybox="gallery" href="./wp-content/upload/gallery/${item.name}">
            <img src="./wp-content/upload/gallery/${item.name}" alt="">
          </a>
        </div>`;
        });
      });
  }

  fetchGallery("gallaryUploads");