import AddTodo from "./component/AddTodo";
import Todos from "./component/Todo";

function App() {
  return (
    <>
      <div className="mt-40">
        <h1 className="flex justify-center items-center">
          Learn About Redux ToolKit
        </h1>

        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
