function handleEmotion(str) {
  console.log(str);
  window.localStorage.setItem("emotion", str);
}

function handleOnChange(question) {
  const val = document.getElementById(question).value;
  window.localStorage.setItem(question.slice(1, question.length), val);
}

function emergencyCall() {
  alert("Apakah anda yakin? nomor ini hanya untuk panggilan darurat");
}
