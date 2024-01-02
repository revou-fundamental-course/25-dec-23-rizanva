function changeShape() {
  var shape = document.getElementById("shape").value
  var segitigaInputs = document.getElementById("segitigaInputs")
  var jajargenjangInputs = document.getElementById("jajargenjangInputs")

  // Ganti sumber gambar sesuai dengan pilihan
  var shapeImage = document.getElementById("shapeImage")
  shapeImage.src = shape === "segitiga" ? "segitiga.png" : "jajargenjang.png"

  if (shape === "segitiga") {
    segitigaInputs.style.display = "block"
    jajargenjangInputs.style.display = "none"
  } else if (shape === "jajargenjang") {
    segitigaInputs.style.display = "none"
    jajargenjangInputs.style.display = "block"
  }

  // Perbarui rumus berdasarkan pilihan
  var rumusLabel = document.getElementById("rumusLabel")
  var rumusFormula = document.getElementById("rumusFormula")

  if (shape === "segitiga") {
    rumusLabel.textContent = "Rumus Luas Segitiga:"
    rumusFormula.innerHTML = "<strong>L = ½ x a x t</strong><br />"
    segitigaInputs.style.display = "block"
    jajargenjangInputs.style.display = "none"
  } else if (shape === "jajargenjang") {
    rumusLabel.textContent = "Rumus Luas Jajar Genjang:"
    rumusFormula.innerHTML = "<strong>L = a x t</strong>"
    segitigaInputs.style.display = "none"
    jajargenjangInputs.style.display = "block"
  }
}

function calculate() {
  var shape = document.getElementById("shape").value
  var resultDiv = document.getElementById("result")

  var base, height
  if (shape === "segitiga") {
    base = parseFloat(document.getElementById("base").value)
    height = parseFloat(document.getElementById("height").value)

    var luas = 0.5 * base * height
    var keliling = base + 2 * Math.sqrt((base / 2) ** 2 + height ** 2)

    resultDiv.innerHTML =
      "Luas: " + luas.toFixed(2) + "<br>Keliling: " + keliling.toFixed(2)
  } else if (shape === "jajargenjang") {
    base = parseFloat(document.getElementById("baseJG").value)
    height = parseFloat(document.getElementById("heightJG").value)

    var luas = base * height
    var keliling = 2 * (base + height)

    resultDiv.innerHTML =
      "Luas: " + luas.toFixed(2) + "<br>Keliling: " + keliling.toFixed(2)
  }

  function resetForm() {
    // Reset inputan dan hasil
    document.getElementById("base").value = ""
    document.getElementById("height").value = ""
    document.getElementById("baseJG").value = ""
    document.getElementById("heightJG").value = ""
    document.getElementById("result").innerHTML = ""

    // Kembalikan gambar dan rumus ke awal
    document.getElementById("shape").value = "segitiga"
    changeShape()
  }
}
