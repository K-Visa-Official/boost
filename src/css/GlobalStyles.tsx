// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* CSS Reset */
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    // src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff2/Pretendard-Thin.woff2') format('woff2'),
    //      url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/woff/Pretendard-Thin.woff') format('woff');
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box; /* 레이아웃 계산에 매우 중요하며 권장됩니다. */
     &::-webkit-scrollbar { /* WebKit 기반 브라우저 (Chrome, Safari 등) */
        display: none; /* 스크롤바를 아예 표시하지 않음 */
    }
    -ms-overflow-style: none; /* Internet Explorer 및 Edge (레거시) */
    scrollbar-width: none; /* Firefox */
  }

  /* body 요소에 대한 추가적인 기본 스타일 재정의 (선택 사항) */
  body {
     font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', sans-serif;
   line-height: 1.5; /* 줄 간격 설정 */
    -webkit-font-smoothing: antialiased; /* 폰트 렌더링 부드럽게 */
    &::-webkit-scrollbar { /* WebKit 기반 브라우저 (Chrome, Safari 등) */
        display: none; /* 스크롤바를 아예 표시하지 않음 */
    }
    -ms-overflow-style: none; /* Internet Explorer 및 Edge (레거시) */
    scrollbar-width: none; /* Firefox */

    /* 스크롤바 숨김으로 인한 하단 여백 추가 (스크롤바 공간 고려) */
  }

  /* 이미지 기본 스타일 */
  img, picture, video, canvas, svg {
    display: block; /* 인라인 요소의 하단 공백 제거 */
    max-width: 100%; /* 이미지 크기 반응형으로 조정 */
  }

  /* 폼 요소 기본 스타일 */
  input, button, textarea, select {
    font: inherit; /* 부모 폰트 상속 */
  }

  /* 제목 태그의 기본 마진 재정의 예시 (이미 * 선택자로 처리되지만 명시적으로 할 수 있음) */
  h1, h2, h3, h4, h5, h6 {
    margin: 0; /* h1에 특히 문제가 되는 기본 마진 제거 */
  }

  /* ul, ol의 기본 패딩/마진 및 list-style 제거 */
  ul, ol {
    margin: 0;
    padding: 0;
  }

  /* a 태그의 밑줄 제거 및 색상 상속 */
  a {
    text-decoration: none;
    color: inherit;
  }
/* Chrome / Edge / Safari */
.left-scroll::-webkit-scrollbar {
  width: 14px;
}

.left-scroll::-webkit-scrollbar-track {
  background: transparent;   /* 🔥 트랙 배경 제거 */
}

.left-scroll::-webkit-scrollbar-thumb {
  background-color: #ced2db;      /* thumb 색 */
    border-radius: 7px;
  border: none;
  box-shadow: none;
  /* 🔥 핵심 */
  min-height: 40px;               /* 최소 높이 */
}

.left-scroll::-webkit-scrollbar-thumb {
  opacity: 1;
}

/* Firefox */
.left-scroll {
  scrollbar-width: thin;
  scrollbar-color: #9aa4b2 transparent;
}


`;

export default GlobalStyle;