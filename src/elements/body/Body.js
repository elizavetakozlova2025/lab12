import React, { useState, useEffect } from "react";

function Body() {
  // №1–№4: переменные
  const [var1, setVar1] = useState("");
  const [var2, setVar2] = useState("");
  const [var3, setVar3] = useState("");
  const [var4, setVar4] = useState("");

  useEffect(() => {
    let v1 = prompt("Введите значение для первой переменной", "0");
    let v2 = prompt("Введите значение для второй переменной", "999999999999999999999999999999");
    let v3 = prompt("Введите значение для третьей переменной", "true");
    let v4 = prompt("Введите значение для четвёртой переменной", "word");

    // Преобразования
    v1 = String(Number(v1));
    v2 = Number(v2);
    v3 = Boolean(v3);

    setVar1(`${v1} (тип: ${typeof v1})`);
    setVar2(`${v2} (тип: ${typeof v2})`);
    setVar3(`${v3} (тип: ${typeof v3})`);
    setVar4(`${v4} (тип: ${typeof v4})`);
  }, []);

  // №5: Квадратное уравнение
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");

  const handleQuadratic = (e) => {
    e.preventDefault();
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setResult("Введите корректные числа!");
      return;
    }

    if (aNum === 0) {
      setResult("Это не квадратное уравнение (a не может быть 0)");
      return;
    }

    const D = bNum * bNum - 4 * aNum * cNum;
    if (D > 0) {
      const x1 = (-bNum + Math.sqrt(D)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(D)) / (2 * aNum);
      setResult(`Два корня: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`);
    } else if (D === 0) {
      const x = -bNum / (2 * aNum);
      setResult(`Один корень: x = ${x.toFixed(2)}`);
    } else {
      setResult("Нет действительных корней");
    }
  };

  // №6: Циклы
  let numbers = "";
  let i = 0;
  do {
    numbers += i;
    i++;
  } while (i < 10);

  i = 0;
  numbers += " | ";
  while (i < 10) {
    numbers += i;
    i++;
  }

  numbers += " | ";
  for (i = 0; i < 10; i++) {
    numbers += i;
  }

  // №7: Погода
  const [weather, setWeather] = useState("sunny");
  const [message, setMessage] = useState("");

  const handleWeather = (e) => {
    e.preventDefault();
    switch (weather) {
      case "sunny":
        setMessage("На улице солнечно! Наденьте легкую одежду и возьмите очки.");
        break;
      case "rainy":
        setMessage("Идет дождь! Не забудьте зонт и наденьте непромокаемую куртку.");
        break;
      case "snowy":
        setMessage("Снегопад! Одевайтесь тепло, возьмите шапку, перчатки и зимнюю обувь.");
        break;
      case "cloudy":
        setMessage("Пасмурная погода. Одевайтесь по сезону, возможно, пригодится кофта.");
        break;
      case "windy":
        setMessage("Ветрено! Наденьте куртку или теплый свитер, чтобы не замерзнуть.");
        break;
      default:
        setMessage("Выберите вариант погоды.");
    }
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      {/* №1–№4 */}
      <h2>Типы переменных</h2>
      <p>Переменная 1: {var1}</p>
      <p>Переменная 2: {var2}</p>
      <p>Переменная 3: {var3}</p>
      <p>Переменная 4: {var4}</p>

      {/* №5 */}
      <h2>Решение квадратного уравнения</h2>
      <form onSubmit={handleQuadratic}>
        <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder="a" required />
        <input type="number" value={b} onChange={(e) => setB(e.target.value)} placeholder="b" required />
        <input type="number" value={c} onChange={(e) => setC(e.target.value)} placeholder="c" required />
        <button type="submit">Вычислить</button>
      </form>
      <p>{result}</p>

      {/* №6 */}
      <h2>Циклы</h2>
      <p>{numbers}</p>

      {/* №7 */}
      <h2>Выберите погоду:</h2>
      <form onSubmit={handleWeather}>
        <select value={weather} onChange={(e) => setWeather(e.target.value)}>
          <option value="sunny">Солнечно</option>
          <option value="rainy">Дождь</option>
          <option value="snowy">Снег</option>
          <option value="cloudy">Пасмурно</option>
          <option value="windy">Ветрено</option>
        </select>
        <button type="submit">Проверить</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default Body;
