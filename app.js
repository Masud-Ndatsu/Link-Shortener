const form = document.querySelector(".form-group");
const output = document.querySelector(".output");
const input = document.querySelector("#url");

const token = "010b7dc6e9da2c1a7251d562961e399f23f2334e";
const url = "https://api-ssl.bitly.com/v4/shorten";

form.addEventListener("submit", postFormData);

async function postFormData(e) {
  e.preventDefault();
  const url = input.value;
  const postObj = {
    domain: "bit.ly",
    long_url: url,
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer bc48f2aa48032f2100c4becfad1067465069fba1`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    });

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log({ error: err.message });
  }
}
