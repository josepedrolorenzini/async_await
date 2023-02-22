import "./styles.css";
//https://javascript.info/async-await

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
<a href="#" style='color:green'>https://javascript.info/async-await</a>
</div>
`;

async function example() {
  return "<p style='color:red;'>hello world</p>";
}
let async1Div = document.querySelector("#async1");
// async1Div.innerHTML = 'mundo';
example()
  .then((data) => (async1Div.innerHTML = data))
  .then(console.log);
// .then((response) => response)

// .then(() => {
//   async1Div.innerHTML = data;
// })
// .then(
//   //(data) => ((async1Div.innerHTML = data), document.body.append(async1Div))

//   (response) => document.body.append(async1Div)
// );

async function example2() {
  let promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("DONE!");
    }, 3000);
  });
  let result = await promesa;
  console.log(result);
}
example2();
