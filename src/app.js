// 9단계 Hook
// 기존의 함수 컴포넌트는 매번 호출될때마다 reset되어 상태를 저장할 수 없었는데 Hook을 통해 상태를 갖을 수 있게 되었다. (정확히는 함수가 실행될때는 상태를 갖지만 함수가 끝나면서 사라지기 때문에 "상태를 유지하지 못한다"라는 표현이 더 정확하다.)
// 원리 : 함수 컴포넌트에서 React.CreateElement가 실행될때마다 Hook과 관련된 배열에 component의 상태와 hook을 저장하는 방식으로 함수 컴포넌트에서도 상태를 저장할 수 있게 만든다.
//        때문에 순서가 매우 중요하고 저장된 순서대로 순서를 보장하여 실행하게 된다.

// 규칙
// 1. React 함수의 최상위에서만 Hook을 호출해야 한다. (반복문, 조건문, 중첩된 함수 내에서 Hook을 호출하면 안됨)
//    이 규칙을 따라야만 컴포넌트가 렌더링 될 때 항상 동일한 순서로 Hook이 호출되는 것을 보장한다.
//    hooks의 원리를 이해하면 납득할 수 있는데, if문처럼 어떤경우에는 hook을 저장하고 어떤 경우에는 hook을 저장하지 않으면 순서를 보장할 수 없고, for문도 마찬가지다. (index가 꼬이기 때문에)
// 2. 오직 React 함수 내에서 Hook을 호출해야한다. (일반적인 js 함수 내에서 호출하면 안됨) => hooks은 React.createElement에서 호출되어 사용되는데 일반함수에서는 해당 함수가 호출되지 않으므로 사용할 수 없다.
//    1. React 함수 컴포넌트에서 Hook을 호출 2. Custom Hook에서 Hook을 호출 

// class component도 hook을 사용할 수 없는데, hook은 함수 컴포넌트가 호출될때마다 그때의 상태를 저장하는 방식으로 진행된다.
// 하지만 class component는 처음에 instance가 생성되고 해당 instance의 값을 변화시키는 구조이므로 hook의 호출이 일어나지 않는다.

// 아래 코드를 통해 살펴보면 App()으로 실행한 코드는 {tag, props, children} 구조를 갖는 객체로 변환되고
// 그 변환된 코드는 내부적으로 각각 함수 컴포넌트를 가지고 있으며 항상 최종적인 구조는 똑같이 표현된다. 
// 즉, React에서 Hook들도 함수 컴포넌트에서 사용될때 이렇게 순서가 보장됨을 알 수 있다.

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