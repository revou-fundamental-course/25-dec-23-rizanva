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
  var manualCalculationDiv = document.getElementById("manualCalculation")
  var manualFormula = document.getElementById("manualFormula")

  var base, height
  if (shape === "segitiga") {
    base = parseFloat(document.getElementById("base").value)
    height = parseFloat(document.getElementById("height").value)

    var luas = 0.5 * base * height
    var keliling = base + 2 * Math.sqrt((base / 2) ** 2 + height ** 2)

    // Perhitungan manual
    var manualText =
      "L = 1/2 x a x t <br>L = 1/2 x " +
      base +
      " x " +
      height +
      "<br>L = " +
      luas.toFixed(0)
    manualText +=
      "<br><br>Keliling = a + √(a/2)^2 + t^2 <br>Keliling = " +
      base +
      " + √(" +
      base / 2 +
      ")^2 + " +
      height +
      "^2 <br>Keliling = " +
      keliling.toFixed(0)

    // Tampilkan hasil dan perhitungan manual
    resultDiv.innerHTML =
      "Luas: " + luas.toFixed(0) + "<br>Keliling: " + keliling.toFixed(0)
    manualFormula.innerHTML = manualText
  } else if (shape === "jajargenjang") {
    base = parseFloat(document.getElementById("baseJG").value)
    height = parseFloat(document.getElementById("heightJG").value)

    var luas = base * height
    var keliling = 2 * (base + height)

    // Perhitungan manual
    var manualText =
      "L = a x t <br>L = " +
      base +
      " x " +
      height +
      "<br>L = " +
      luas.toFixed(0)
    manualText +=
      "<br><br>Keliling = 2 x (a + t) <br>Keliling = 2 x (" +
      base +
      " + " +
      height +
      ") <br>Keliling = " +
      keliling.toFixed(0)

    // Tampilkan hasil dan perhitungan manual
    resultDiv.innerHTML =
      "Luas: " + luas.toFixed(0) + "<br>Keliling: " + keliling.toFixed(0)
    manualFormula.innerHTML = manualText
  }

  // Tampilkan perhitungan manual di atas tombol hitung
  manualCalculationDiv.style.display = "block"
  manualCalculationDiv.scrollIntoView() // Scroll ke perhitungan manual untuk memastikan terlihat
}

function resetForm() {
  // Reset input values
  document.getElementById("base").value = ""
  document.getElementById("height").value = ""
  document.getElementById("baseJG").value = ""
  document.getElementById("heightJG").value = ""

  // Clear result and manual calculation
  document.getElementById("result").innerHTML = ""
  document.getElementById("manualCalculation").style.display = "none"
  document.getElementById("manualFormula").innerHTML = ""
}
