import TextInput from "./components/TextInput";
import TextList from "./components/TextList";

function App() {
  // TODO: texts 를 Redux 로 리팩터링 하세요.

  return (
    <div>
      <h1>Text Input and Listing</h1>
      <TextInput />
      <TextList />
    </div>
  );
}

export default App;
