import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Instructions />
      <Paragraph />
      <Text />
      <Image />
    </div>
  );
}
const Instructions = () => <h1>Talimatlar</h1>;
const Paragraph = () => (
  <p>
    Burada App.js bölümünde React-ify yapmanız istenmektedir. En az{" "}
    <strong>iki</strong> component kullanın. CSS bölümü hakkında endişelenmeyin.
    İşiniz bittiğinde, beyaz arka plana sahip işlenmiş görünüm aynı olmalıdır.
  </p>
);
const Text = () => (
  <p>
    Henüz
    <a href="https://reactjs.org/docs/thinking-in-react.html" target="_blank">
      React ile düşünmeye başlamadınız mı{" "}
    </a>
    ?
  </p>
);
const Image = () => (
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/140px-React-icon.svg.png" />
);
