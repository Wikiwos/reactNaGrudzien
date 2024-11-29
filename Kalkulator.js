class Calculator {  

    dodaj(a, b) {
      const wynik = a + b;
      console.log(`Wynik dodawania: ${wynik}`);
      return wynik;
    }

    odejmij(a, b) {
      const wynik = a - b;
      console.log(`Wynik odejmowania: ${wynik}`);
      return wynik;
    }
  
    pomnoz(a, b) {
      const wynik = a * b;
      console.log(`Wynik mnożenia: ${wynik}`);
      return wynik;
    }
  
    podziel(a, b) {
      const wynik = a / b;
      console.log(`Wynik dzielenia: ${wynik}`);
      return wynik;
    }
  }
  
  const k = new Calculator();
  k.dodaj(10, 5);
  k.odejmij(10, 5);
  k.pomnoz(10, 5);
  k.podziel(10, 5);
  