let emojis = document.getElementById("emojis");
for (var i = emojis.childElementCount; i >= 0; i--) {
  emojis.appendChild(emojis.children[Math.random() * i | 0]);
}
