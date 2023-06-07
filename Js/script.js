function romanToArabic(roman) {
    // Tabela de conversão de números romanos para arábicos
    const romanNumerals = {
      I: 1,
      IV: 4,
      V: 5,
      IX: 9,
      X: 10,
      XL: 40,
      L: 50,
      XC: 90,
      C: 100,
      CD: 400,
      D: 500,
      CM: 900,
      M: 1000
    };
  
    let result = 0;
  
    for (let i = 0; i < roman.length; i++) {
      const currentSymbol = roman[i];
      const nextSymbol = roman[i + 1];
  
      if (romanNumerals[currentSymbol] < romanNumerals[nextSymbol]) {
        result += romanNumerals[nextSymbol] - romanNumerals[currentSymbol];
        i++;
      } else {
        result += romanNumerals[currentSymbol];
      }
    }
  
    return result;
  }
  
  function arabicToRoman(arabic) {
   
    const arabicNumerals = [
      { value: 1000, symbol: "M" },
      { value: 900, symbol: "CM" },
      { value: 500, symbol: "D" },
      { value: 400, symbol: "CD" },
      { value: 100, symbol: "C" },
      { value: 90, symbol: "XC" },
      { value: 50, symbol: "L" },
      { value: 40, symbol: "XL" },
      { value: 10, symbol: "X" },
      { value: 9, symbol: "IX" },
      { value: 5, symbol: "V" },
      { value: 4, symbol: "IV" },
      { value: 1, symbol: "I" }
    ];
  
    let result = "";
  
    for (let i = 0; i < arabicNumerals.length; i++) {
      while (arabic >= arabicNumerals[i].value) {
        result += arabicNumerals[i].symbol;
        arabic -= arabicNumerals[i].value;
      }
    }
  
    return result; 
  }
  
  document.getElementById("convert-to-arabic").addEventListener("click", function() {
    var romanInput = document.getElementById("roman-input").value;
    var arabicOutput = document.getElementById("arabic-output");
  
    var arabicNumber = romanToArabic(romanInput);
    if (arabicNumber !== null) {
      arabicOutput.value = arabicNumber;
    } else {
      arabicOutput.value = "Número romano inválido";
    }
  });
  
  document.getElementById("convert-to-roman").addEventListener("click", function() {
    var arabicInput = document.getElementById("roman-input").value;
    var romanOutput = document.getElementById("arabic-output");
  
    var romanNumber = arabicToRoman(arabicInput);
    if (romanNumber !== null) {
      romanOutput.value = romanNumber;
    } else {
      romanOutput.value = "Número arábico inválido";
    }
  });