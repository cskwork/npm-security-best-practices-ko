# 비공식 npm 패키지 보안 베스트 프랙티스 한국어 가이드

정적 GitHub Pages용 비공식 한국어 가이드입니다. npm 패키지를 설치하거나 배포하는 개발자가 바로 적용할 수
있도록 빠른 설정, 위협 모델, 팀 체크리스트, CI 규칙, 유지보수자 보안, FAQ를 한 화면 흐름으로 구성했습니다.
이 저장소는 npm, Inc. 또는 npm 공식 문서가 아닙니다.
npm is a registered trademark of npm, Inc.

## 파일 구성

- `index.html`: 한국어 가이드 본문과 semantic HTML 구조
- `styles.css`: 외부 의존성 없는 반응형 스타일
- `script.js`: 코드 복사 버튼, 체크리스트 localStorage 저장
- `assets/package-security-workbench.png`: 첫 화면에 쓰는 생성형 비트맵 보조 이미지
- `.nojekyll`: GitHub Pages가 정적 파일을 그대로 제공하도록 하는 marker
- `docs/changelog/`: 결정 이유와 supergoal run vault

## 로컬 확인

의존성 설치가 필요 없습니다. 브라우저에서 `index.html`을 직접 열거나 정적 서버로 확인할 수 있습니다.

```bash
python3 -m http.server 8000
```

## 출처와 라이선스

이 프로젝트는 Liran Tal의
[`lirantal/npm-security-best-practices`](https://github.com/lirantal/npm-security-best-practices)
내용을 바탕으로 만든 한국어 정적 가이드입니다. 원 저작물은 Apache-2.0 라이선스로 배포됩니다.

이 저장소의 라이선스도 Apache-2.0을 사용합니다. 자세한 내용은 `LICENSE`를 확인하세요.
