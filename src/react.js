// 만들어진 객체를 DOM으로 변환
export function createDOM(node) {
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }

    const element = document.createElement(node.tag);

    

    node.children
      .map(createDOM)
      .forEach(element.appendChild.bind(element));
      
    return element;
}