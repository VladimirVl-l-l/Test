let input = document.createElement("INPUT");
input.setAttribute("type", "file");
let inputSearch = document.createElement("INPUT");
document.body.appendChild(input);
document.body.appendChild(inputSearch);

input.addEventListener("change", function () {
   readXlsxFile(input.files[0]).then(function (rows) {
      let textNode = document.createElement("span");
      textNode.textContent = "введите три символа";
      document.body.appendChild(textNode);
      let newArr = rows.toString().split(",");
      inputSearch.addEventListener("keyup", function () {
         word = event.target.value;

         if (word.length === 3) {
            let result = newArr.filter((item) =>
               item.includes(word.toUpperCase())
            );
            if (result.length !== 0) {
               textNode.textContent = "номер найден";
            } else {
               textNode.textContent = "номер не найден";
            }
         }
      });
   });
});
