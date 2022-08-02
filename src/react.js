
// 함수 컴포넌트에선 데이터(props)를 인자로 입력받지만
// 클래스 컴포넌트에서는 데이터를 context로 입력받는다.
export class Component {
    constructor(props) {
        this.props = props;
    }
}


// 만들어진 객체를 DOM으로 변환
export function createDOM(node) {
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

export function makeElement(tag, props, ...children) {
    props = props || {};
    
    if (typeof tag === 'function'){
        // 이 코드는 호출될때마다 새로운 instance 객체가 만들어지고 상태가 초기화 되기때문에 완벽한 클래스 컴포넌트는 아니다. 
        // 처음 컴포넌트가 호출될때만 instance를 만들고 그 이후에는 만들어진 instacne context의 상태를 관리하는 라이프 사이클 메서드들이 필요하다.
        if (tag.prototype instanceof Component){
            const instance = new tag(makeProps(props, children))
            return instance.render();
        } else {
            if(children.length > 0){
                return tag(makeProps(props, children))
            }else{
                return tag(props);
            }
        }
    }else{
        return { tag, props, children }
    }
}

// container만 받아서 appendchild하는 것을 숨기는 함수
export function render(vdom, container) {
    container.appendChild(createDOM(vdom));
}