const query = document.location.search;
const param = new URLSearchParams(query);
const id = param.get("id");

const apiUrl = `https://lisagrant-943890.ingress-baronn.ewp.live//wp-json/wp/v2/posts/${id}?_embed=true`;
const postBox = document.querySelector(".the-post-box");
const postImgBox = document.querySelector(".the-post-box-image");
const breadcrumbsTitle = document.querySelector(".breadcrumbs-title");
const loader = document.querySelector(".loader");
const modal = document.querySelector(".modal");

const getPost = async () => {
  try {
    const response = await fetch(apiUrl);
    const post = await response.json();
    let data = post._embedded["wp:featuredmedia"];
    for (img of data) {
      breadcrumbsTitle.innerHTML += `
          <a href="#">${post.title.rendered}</a>
      `;
      postImgBox.innerHTML += `
          <img 
           class="img"
           onClick="getModal()"
           src="${img.source_url}"
           alt="${img.alt_text}"
          />
      `;
      postBox.innerHTML += `
          <div class="page-title">
              <h1>${post.title.rendered}</h1>
          </div>
            <article>
              <p>${post.content.rendered}</p>
            </article>
      `;
      document.title = `${post.title.rendered} ||  Mia and Bob's Travel Blog`;
      modal.innerHTML += `
              <img
                src="${img.source_url}"
                alt="${img.alt_text}"
                class="full-img"
              />
            <p class="caption">${img.title.rendered}</p>
      `;
    }
  } catch {
    postBox.innerHTML = `<p class="error-text-the-blog">Sorry, we have an error</p>`;
  } finally {
    loader.style.display = "none";
  }
};
getPost();

const getModal = () => {
  modal.style.display = "flex";
};

modal.addEventListener("click", () => {
  modal.style.display = "none";
});
