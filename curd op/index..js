document.addEventListener("DOMContentLoaded", function() {
  const dataForm = document.querySelector("#form_list");
  const dataInput = document.querySelector("#data-input");
  const dataList = document.querySelector("#dataList");

  reLoadData();

  dataForm.addEventListener("submit", function(e) {
      e.preventDefault();
      const data1 = dataInput.value.trim();
      if (data1 !== "") {
          addToLocalStorage(data1);
          reLoadData();
          dataInput.value = "";
      } else {
          alert("Please enter the data");
          dataInput.focus();
      }
  });

  function addToLocalStorage(data1) {
      let storeData = JSON.parse(localStorage.getItem("myData")) || [];
      storeData.push(data1);
      localStorage.setItem("myData", JSON.stringify(storeData));
  }

  function reLoadData() {
      let storeData = JSON.parse(localStorage.getItem("myData")) || [];
      dataList.innerHTML = "";
      storeData.forEach((data, index) => {
          let output = `
              <li>${data}
                  <div>
                      <button class="btn_edit" data_index="${index}">edit</button>
                      <button class="btn_delete" data_index="${index}">delete</button>
                  </div>
              </li>`;
          dataList.innerHTML += output;
      });

      const delButtons = document.querySelectorAll(".btn_delete");
      delButtons.forEach((btn) => {
          btn.addEventListener("click", deleteData);
      });

      const editButtons = document.querySelectorAll(".btn_edit");
      editButtons.forEach((btn) => {
          btn.addEventListener("click", editData);
      });
  }

  function deleteData() {
      const index = parseInt(this.getAttribute("data_index"));
      let storeData = JSON.parse(localStorage.getItem("myData")) || [];
      storeData.splice(index, 1);
      localStorage.setItem("myData", JSON.stringify(storeData));
      reLoadData();
  }

  function editData() {
      const index = parseInt(this.getAttribute("data_index"));
      let storeData = JSON.parse(localStorage.getItem("myData")) || [];
      const newData = prompt("Edit your data:", storeData[index]);
      if (newData !== null) {
          storeData[index] = newData.trim();
          localStorage.setItem("myData", JSON.stringify(storeData));
          reLoadData();
      }
  }
});
