
export class Component {
    constructor(props) {
        this.props = props;
    }
}

// makeElement를 통해 만들어진 객체를 통해 실제 DOM 트리를 만든다.
function createDOM(node) {
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }

    const element = document.createElement(node.tag);

    Object.entries(node.props)
      .forEach(([name, value]) => element.setAttribute(name, value));    

    node.children
      .map(createDOM)
      .forEach(element.appendChild.bind(element));
      
    return element;
}

function makeProps(props, children) {
    return {
        ...props,
        children : children.length === 1 ? children[0] : children,    
    }
}

// makeElement()를 통해 만들어진 객체가 virtual DOM을 만들기 위한 메타 데이터가 된다.
export function makeElement(tag, props, ...children) {
    props = props || {};

    if (typeof tag === 'function'){
        if (tag.prototype instanceof Component){
            const instance = new tag(makeProps(props, children))
            return instance.render();
        } 
        
        if(children.length > 0){
            return tag(makeProps(props, children))
        }else{
            return tag(props);
        }
    }

    // virtual DOM의 Input data 역할을 하게 됨
    return { tag, props, children };
}


// 기존엔 vdom을 그대로 받아 DOM을 생성하는 방식이였는데
// virtual DOM의 컨셉에 맞춰 객체를 비교하고 변화된 부분을 찾아 render하는 방식으로 변경함

// render를 즉시 실행 함수로 만들어 반환 function 부분을 export하고 
// prevDOM은 클로저에 갇혀 바깥쪽에서 접근할 수 없게 한다.
export const render = (function() {
    // 비교할 이전 DOM
    let prevDom = null;

    // 클로저를 사용하기 위한 함수 반환 구조
    return function(vdom, container){
        if(prevDom === null){
            prevDom = vdom;
        }

        // 만약 prevDom이 null이 아니라 어떠한 값이 존재한다면
        // 객체 수준에서 비교를 하고 변경사항 부분만 업데이트를 진행 => 업데이트를 위한 Update 함수를 구현하고 사용해야함. (create는 사용할 수 없음(가장 처음 DOM을 그릴때만 사용))
        container.appendChild(createDOM(prevDom));
    }
})();