// 8단계 virtual DOM
// DOM처리는 React에게 맡기고 DOM보다 훨씬 쉬운 구조물(JSX)로 UI를 만들고 개발할 수 있게한 환경이 virtual DOM이라 할 수 있다.
// virtual DOM의 가장 큰 장점은 컴포넌트의 변경점이 있으면 전체를 재 랜더링을 하는 것이 아니라 그 부분만 재랜더링하므로써 생산성을 높힌다는 점이 있다.
// 원리 : 현재 DOM과 새로 변경될 DOM을 변경하여 변화될 부분을 찾는 것은 매우 어렵다. 그래서 React는 DOM을 비교하는 것이 아니라 
//        객체대 객체로 비교하는 방식으로 변경된 부분을 찾는다. *여기서 객체란 jsx로 작성되고 React.createElement로 변환된 객체를 의미한다.

// 이처럼 실제 변경된 부분을 객체를 통해 찾고 DOM에서 이 부분만 변경하여 랜더링하는 방식이 React의 최대 장점이다.


/* @jsx makeElement */
import { makeElement, render, Component } from "./react";

// 클래스 컴포넌트의 요구사항
// 1. Component를 extends 받아야함
// 2. render() 함수가 필수로 포함되어야함
class Title extends Component {
    render() {
        return <h1>{ this.props.children }</h1>
    }
}

function Item(props) {
    return <li style={`color:${props.color}`}>{props.children}</li> 
}


const App = () => <p>
    <Title>React 클래스 컴포넌트 잘 만들기(virtual DOM)</Title>
    <ul>
        <Item color="red">첫 번째 아이템</Item>
        <Item color="blue">두 번째 아이템</Item>
        <Item color="green">세 번째 아이템</Item>
    </ul>
</p>

const container = document.querySelector("#root");

render(<App />, container)