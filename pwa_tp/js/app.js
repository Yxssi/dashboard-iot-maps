if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/serviceWorker.js");
}

const container = document.querySelector(".app");

const avatars = () => [
  {
    name: "John Doe",
    avatar: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "Micaela Doe",
    avatar: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "Patrick Doe",
    avatar: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "Yann Doe",
    avatar: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "Lola Doe",
    avatar: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "Manon Doe",
    avatar: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "Josh Doe",
    avatar: "https://thispersondoesnotexist.com/image",
  },
  {
    name: "Bonnie Doe",
    avatar: "https://thispersondoesnotexist.com/image",
  },
];

const showAvatars = () => {
  let output = "";

  avatars().forEach(({ name, avatar }) => {
    output += `
<div class="card">
<img class="card--avatar" src=${avatar} />
<h1 class="card--title">${name}</h1>
<a class="card--link" href="#">Taste</a>
</div>
`;
  });
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showAvatars);
showAvatars();
