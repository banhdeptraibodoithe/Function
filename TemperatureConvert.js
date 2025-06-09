let html = `<p>
  <label>Fahrenheit</label>
  <input id="inputFahrenheit" type="number" placeholder="Fahrenheit"
  oninput="temperatureConverter(this.value)"
  onchange="temperatureConverter(this.value)">
</p>
<p>Celsius: <span id="outputCelsius"></span></p>`;
document.getElementById("src").innerHTML = html;

function temperatureConverter(value)
{
    document.getElementById("outputCelsius").innerHTML = (value - 32) / 1.8;
}