let headLine = `What is Lorem Ipsum?`;
let str = `<b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry.
 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
an unknown printer took a galley of type and scrambled it to make a type specimen
book. It has survived not only five centuries, but also the leap into electronic
typesetting, remaining essentially unchanged. It was popularised in the 1960s with
the release of Letraset sheets containing Lorem Ipsum passages, and more recently
with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

let headLine_2 = `Why do we use it?`;
let str_2 = `It is a long established fact that a reader will be distracted by the readable
content of a page when looking at its layout. The point of using Lorem Ipsum is that it has
a more-or-less normal distribution of letters, as opposed to using 'Content here, content
here', making it look like readable English. Many desktop publishing packages and web page
editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
uncover many web sites still in their infancy. Various versions have evolved over the years,
sometimes by accident, sometimes on purpose (injected humour and the like).`;

let headLine_3 = `Where does it come from?`;
let str_3 = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum 
comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of
Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
amet..", comes from a line in section 1.10.32 <br/><br/>

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.`;

let headLine_4 = `Where can I get some?`;
let str_4 = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;

let section = document.createElement("section");
document.body.prepend(section);
window.addEventListener("load", function () {
  addRedLine(headLine, str);
  addRedLine(headLine_2, str_2);
  addRedLine(headLine_3, str_3);
  addRedLine(headLine_4, str_4, true);
});
function addRedLine(zag, str, table = false) {
  let div = document.createElement("div");
  div.id = "newAbzac";
  let h2 = document.createElement("h2");
  h2.innerHTML = zag;
  let p = document.createElement("p");
  p.innerHTML = str;

  section.append(div);
  div.append(h2);
  div.append(p);
  if (table == true) {
    let div_table = document.createElement("div");
    div.append(div_table);
    div_table.id = "table";

    let textArea = document.createElement("input");
    textArea.setAttribute("type", "text");
    textArea.setAttribute("disabled", true);
    textArea.id = "count";
    textArea.value = "5";

    let div_radios = document.createElement("div");
    div_radios.id = "radio";

    let div_check = document.createElement("div");
    div_check.id = "content_rigt";
    let input_check = document.createElement("input");
    let lable = document.createElement("lable");
    input_check.setAttribute("type", "checkbox");
    input_check.id = "check";
    lable.setAttribute("for", `ckeck`);
    lable.innerText = `Start with 'Lorem
    ipsum dolor sit amet...'`;
    let button_check = document.createElement("button");
    button_check.innerText = "Generate Lorem Ipsum";
    div_check.append(input_check);
    div_check.append(lable);
    div_check.append(button_check);

    for (let i = 0; i < 4; i++) {
      let div_radio = document.createElement("div");
      let input = document.createElement("input");
      let lable = document.createElement("lable");
      input.setAttribute("type", "radio");
      input.id = `id_${i + 1}`;
      input.name = "elem";
      lable.setAttribute("for", `id_${i + 1}`);
      if (i == 0) {
        lable.innerHTML = "paragraphs";
        input.setAttribute("checked", true);
      }
      if (i == 1) {
        lable.innerHTML = "words";
      }
      if (i == 2) {
        lable.innerHTML = "bytes";
      }
      if (i == 3) {
        lable.innerHTML = "lists";
      }

      div_radio.append(input);
      div_radio.append(lable);
      div_radios.append(div_radio);
    }

    div_table.append(textArea);
    div_table.append(div_radios);
    div_table.append(div_check);
  }
}
