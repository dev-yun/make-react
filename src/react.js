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

export function makeElement(tag, props, ...children) {
    props = props || {};
    return { tag, props, children }
}

// container만 받아서 appendchild하는 것을 숨기는 함수
export function render(vdom, container) {
    container.appendChild(createDOM(vdom));
}