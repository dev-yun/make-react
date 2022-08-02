// 6단계 함수 컴포넌트 기능 추가
// 컴포넌트란 데이터(props)를 입력바다 상태(state)에 따라 DOM을 출력하는 것이다.
// 컴포넌트를 사용하면 UI 조각을 js의 모듈화처럼 조각화하여 재사용도 할 수 있고 네이밍을 통해 가독성을 높힐 수 있다.
// 주의사항 : JSX문법에서 태그에 이름이 대문자라면 이를 문자열로 취급하지 않고 값으로 취급한다. 이때 값은 항상 함수여야하고 JSX를 return 해야하한다.
// 앞글자가 대문자인 것은 react 자체에서 컴포넌트를 문자열로 취급할지 함수로 취급할지 결정할 조건이기 때문이다.

// 사용자 컴포넌트에는 함수 컴포넌트와 클래스 컴포넌트가 존재한다.

/* @jsx makeElement */
import { makeElement, render } from "./react";

// 함수 컴포넌트 작성
function Title(props) {
    return <h1>{ props.children }</h1>
}

function Item(props) {
    return <li style={`color:${props.color}`}>{props.children}</li> 
}


const vdom = <p>
    <Title label = "Reactttt">React 정말 잘 만들기</Title>
    <ul>
        <Item color="red">첫 번째 아이템</Item>
        <Item color="blue">두 번째 아이템</Item>
        <Item color="green">세 번째 아이템</Item>
    </ul>
</p>

const container = document.querySelector("#root");

render(vdom, container)