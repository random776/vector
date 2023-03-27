import { useState } from "react";
import { MathComponent } from "mathjax-react";
function App() {
  const [a_1, setA_1] = useState(1);
  const [a_2, setA_2] = useState(2);
  const [a_3, setA_3] = useState(1);

  const [b_1, setB_1] = useState(1);
  const [b_2, setB_2] = useState(2);
  const [b_3, setB_3] = useState(1);

  return (
    <>
      <span>第1成分:</span>
      <input
        type="text"
        key={"入力1"}
        onChange={(e) => {
          setA_1(parseFloat(e.target.value));
        }}
      />
      <span>第2成分:</span>
      <input
        type="text"
        key={"入力2"}
        onChange={(e) => {
          setA_2(parseFloat(e.target.value));
        }}
      />
      <span>第3成分:</span>
      <input
        type="text"
        key={"入力3"}
        onChange={(e) => {
          setA_3(parseFloat(e.target.value));
        }}
      />
      <MathComponent
        tex={String.raw`\overrightarrow{a} = \left( \begin{array}{c} ${a_1} \\ ${a_2} \\ ${a_3} \end{array} \right)`}
      ></MathComponent>

      <span>第1成分:</span>
      <input
        type="text"
        key={"入力4"}
        onChange={(e) => {
          setB_1(parseFloat(e.target.value));
        }}
      />
      <span>第2成分:</span>
      <input
        type="text"
        key={"入力5"}
        onChange={(e) => {
          setB_2(parseFloat(e.target.value));
        }}
      />
      <span>第3成分:</span>
      <input
        type="text"
        key={"入力6"}
        onChange={(e) => {
          setB_3(parseFloat(e.target.value));
        }}
      />
      <MathComponent
        tex={String.raw`\overrightarrow{b} = \left( \begin{array}{c} ${b_1} \\ ${b_2} \\ ${b_3} \end{array} \right)`}
      ></MathComponent>
      <span>内積</span>
      <MathComponent
        tex={String.raw`\overrightarrow{a}\cdot\overrightarrow{b} = ${
          a_1 * b_1 + a_2 + b_2 + a_3 * b_3
        }`}
      ></MathComponent>
      <span>外積</span>
      <MathComponent
        tex={String.raw`\overrightarrow{a}\times\overrightarrow{b} = \left( \begin{array}{c} ${
          a_2 * b_3 - a_3 * b_2
        } \\ ${a_3 * b_1 - a_1 * b_3} \\ ${
          a_1 * b_2 - a_2 * b_1
        } \end{array} \right)`}
      ></MathComponent>
    </>
  );
}

export default App;
