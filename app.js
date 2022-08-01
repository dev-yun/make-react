// React 만들기 2단계
// 더 규모가 커질 프로젝트를 대비해 빌드 할 수 있는 환경을 세팅 
// webpack과 babel을 설치하여 bundling 세팅

// 만들어진 객체를 DOM으로 변환
function createDOM(node) {
    if(typeof node === 'string'){
        return document.createTextNode(node);
    }

    const element = document.createElement(node.tag);

    node.children
      .map(createDOM)
      .forEach(element.appendChild.bind(element));
      
    return element;
}

// DOM으로 변환할 객체
// html 태그 구조에는 대그 이름, 속성들, 자식 요소 3가지가 있다.
const vdom = {
    tag: 'p',
    props: {},
    children: [
        {
            tag: 'h1',
            props: {},
            children: ["React 만들기"],
        },
        {
            tag: 'ul',
            props: {},
            children: [
                {
                    tag: 'li',
                    props: {},
                    children: ["첫 번째 아이템"]
                },
                {
                    tag: 'li',
                    props: {},
                    children: ["두 번째 아이템"]
                },
                {
                    tag: 'li',
                    props: {},
                    children: ["세 번째 아이템"]
                }
            ]
        }
    ],
}

document.querySelector('#root').appendChild(createDOM(vdom));