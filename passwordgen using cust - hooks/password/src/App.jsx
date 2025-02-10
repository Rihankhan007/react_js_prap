import { useCallback, useEffect, useState, useRef } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [NumberAllow, setNumberAllow] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenrater = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (NumberAllow) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*(){}[]-_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, NumberAllow, charAllowed, setPassword]);

  const copyPasswordTOClipbord = useCallback(() => {
    passwordRef.current?.select();
    //useref hook
    window.navigator.clipboard.writeText(password);
    //window obj is
  }, [password]);

  useEffect(() => {
    passwordGenrater();
  }, [length, NumberAllow, charAllowed, passwordGenrater]);

  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md roumded-lg px-6 py-6 my-8 bg-gray-800
text-orange-500 rounded-xl"
      >
        <h1
          className="text-white text-center
        my-4
        "
        >
          password Gemerator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordTOClipbord}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setlength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={NumberAllow}
              id="numberInput"
              onChange={() => {
                setNumberAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
