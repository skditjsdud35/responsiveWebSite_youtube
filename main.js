const moreBtn = document.querySelector('.info .metadata .moreBtn');
const title = document.querySelector('.info .metadata .title');

moreBtn.addEventListener('click', () => {
    /* moreBtn이 클릭될 때마다 이벤트를 처리.클릭될 때 마다 우리가 지정하고 있는 이 함수를 호출해줘라고 정의 */

    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');

    /* 클릭했을 때 moreBtn 과 title 클래스가 clicked, clamp가 없다면 추가해주고, 있다면 다시 빼주는 일을 한다 */
})