// 5단계
// 4단계에서 함수를 만들어 name, props, child를 입력받아 태그 객체로 변경하는 것은 부족한 점이 있다. (구조 파악 어려움, 태그가 많아지면 복잡함)
// 이를 해결하기 위해 markup방식으로 작성하도록 발전하였다 => jsx
// 형태는 html처럼 코드를 작성하고 내부적으론 makeElement코드가 작동하도록 만들었다. (React에선 React.createElement함수가 작동, makeElement와 기능적으로 유사함)

// jsx 사용법 : /* jsx 함수명 */ 으로 상단에 선언하면 babel에 포함된 React의 JSX Transpiler가 입력받은 함수를 통해 변환한다.
// /* jsx */를 선언하지 않으면 기본적으로 React.createElement를 통해 jsx객체가 변환된다.
// /* jsx makeElement */를 통해 내가 만든 변환 함수를 지정하여 변환 함수를 바꿀 수 있다.

/* @jsx makeElement */
// 코드상으로는 makeElement를 사용하지 않지만 import에 makeElement를 제거하면 오류가 발생한다.
// 이는 실제로는 빌드된 bundle.js 파일이 실행되고, bundling과정에서 jsx가 makeElement를 호출하여 jsx코드를 변환하기 때문이다.
// 같은 이유로 React 프로젝트에서 코드상으로는 React를 사용하지 않지만 import React를 하지 않으면 오류가 나는 것도 같은 이유이다.
import { createDOM, makeElement, render } from "./react";

const vdom = <p>
    <h1>React 만들기</h1>
    <ul>
        <li style="color:red">첫 번째 아이템</li>
        <li style="color:blue">두 번째 아이템</li>
        <li style="color:green">세 번째 아이템</li>
    </ul>
</p>

const container = document.querySelector("#root");

render(vdom, container)