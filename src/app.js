// 3단계
// react파일(html객체를 DOM 객체로 변환하는 파일)과 개발자가 작성할 실제 코드를 담은 파일을 나눈다.

import { createDOM } from "./react";

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