const TOKEN = "6178579340:AAEOnsaH6kK543t_3dXdcMTmrHaHIKzqB4A";
const CHAT_ID = "-1001363531477";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let message = "<b>заявка</b>\n";
  message += `<b>имя</b> ${this.name.value}\n`;
  message += `<b>номер</b> ${this.tel.value}`;
  if (this.name.value && this.tel.value) {
    axios
      .post(URI_API, {
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "html",
      })
      .then((response) => {
        this.name.value = "";
        this.tel.value = "";
      });
  }
});
