function generateKey() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `Astro-${randomNum}-pass`;
}

const key = generateKey();
document.getElementById("keyBox").textContent = key;

function copyKey() {
  navigator.clipboard.writeText(key).then(() => {
    alert("Key copied to clipboard!");
  });
}
