// 7단계 클래스 컴포넌트
// 클래스 컴포넌트는 처음 실행될때 instance를 만들어서 내부에 context와 scope를 갖기 때문에 상태(state)를 갖을 수 있다.
// 때문에 이미 만들어진 instance의 render를 계속해서 업데이트하면서 상태를 업데이트 할 수 있다. (이렇게 하면 context의 상태를 유지하거나 상태만 변경하여 사용할 수 있다.)
// 이처럼 하나의 instance를 만들어 component가 삭제될 때까지 context의 상태를 유지하고 render함수를 호출하는 식으로 작동하는 것이 클래스 컴포넌트의 매커니즘이다.
// React는 class component가 업데이트 될때, 데이터(props)를 받을때, 삭제될때를 모두 파악하고 그때에 필요한 "라이프 사이클 메서드"들을 제공한다.

// 함수 컴포넌트는 호출할때마다 scope가 생성되어 호출되기 때문에 지속적으로 유지되는 상태(state)가 존재하지 않는다. (호출될 때마다 초기화된 상태로 불러오기 때문에)
// 하지만 함수 컴포넌트에서도 Hook이 등장하면서 상태를 저장할 수 있게 되었고 함수컴포넌트를 사용하는 방식으로 변화하고 있다.

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
    <Title>React 클래스 컴포넌트 잘 만들기</Title>
    <ul>
        <Item color="red">첫 번째 아이템</Item>
        <Item color="blue">두 번째 아이템</Item>
        <Item color="green">세 번째 아이템</Item>
    </ul>
</p>

const container = document.querySelector("#root");

render(<App />, container)