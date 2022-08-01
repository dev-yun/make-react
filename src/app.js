// 4단계
// 사용의 편의성을 증가시키기

import { createDOM, makeElement, render } from "./react";

const vdom = makeElement('p', {}, 
  makeElement('h1', {}, "React 만들기"),
  makeElement('ul', {}, 
    makeElement('li', { style: "color:red" }, "첫 번째 아이템"),
    makeElement('li', { style: "color:blue" }, "두 번째 아이템"),
    makeElement('li', { style: "color:green" }, "세 번째 아이템"),
    )
  )

const container = document.querySelector("#root");

render(vdom, container)