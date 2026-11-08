# CalcLens 제3자 구성요소와 Qt 배포 자료 검토

검토 기준일: 2026-11-08. 이 문서는 과거 배포 파일에 들어 있던 제3자 라이브러리와 현재 받을 수 있는 소스 자료를 안내합니다. CalcLens 자체의 사용 조건은 [라이선스와 배포 안내](https://a123qsd.github.io/calclens-showcase/licenses.html)에 있습니다. 구성요소마다 원저작자의 라이선스가 별도로 적용됩니다.

보관된 릴리스 기록 13개에 있는 파일 105개를 다시 읽어 기록된 크기와 SHA-256이 모두 일치하는지 확인했습니다. 개발 연혁의 0.1.0과 0.4.0은 별도 배포 자산이 확인되지 않아 바이너리 조사 표에서 제외했습니다. [CalcLens 버전 연혁](https://a123qsd.github.io/calclens-showcase/#history)

## Qt 배포 자료의 기술 검토 결과 · 2026-11-08

Windows 0.11.0을 기준으로 공개된 Qt·PySide/Shiboken 소스, 빌드 파일, 라이선스 전문과 교체 권리를 확인했습니다. 이 범위에서 더 제공해야 할 소스·빌드 자료의 누락이나 앱 약관의 교체 권리 제한은 발견하지 못했습니다. 현재 Mac 0.13.1 Cocoa 소스 묶음의 빌드·수정·교체 안내도 확인했습니다.

원본 Windows 0.11.0을 한국어와 영어로 실행해 조사 대상 Qt DLL·플러그인 9개의 실제 로드를 기록했습니다. 3D 렌더링, 그림 내보내기, Gaussian 작업공간과 프로젝트 재열기 동안 대상 9개는 로드되지 않았습니다. 별도 대조 시험에서는 9개를 모두 로드·해제한 기록이 남았습니다. 원본 파일 9,053개는 변경되지 않았습니다.

이 기술 검토 결과로 해당 Qt 자료의 미확인 상태를 갱신합니다. 전체 과거 배포의 법률상 적합 판정이나 다른 버전·모든 사용자 동작에 대한 보증은 아닙니다. [검사 결과와 소스 대조 기록](qt-review-2026-11-08.json)

### English summary

The 2026-11-08 technical review checked the published Qt and PySide/Shiboken source, build files, license texts and replacement rights for the Windows 0.11.0 reference package. It identified no additional necessary source or build material that was missing, or application terms restricting library replacement. The current Mac 0.13.1 Cocoa source kit also contains build, modification and replacement instructions.

In Korean and English runs of the original Windows 0.11.0 launcher, none of the nine target Qt DLLs and plugins loaded during 3D rendering, figure export, the Gaussian workspace or project reopening. A separate control captured all nine being deliberately loaded and unloaded. All 9,053 original payload files remained unchanged. The findings are limited to the named package and tested scenarios; they are not a legal determination covering every historical distribution. [Test results and source concordance](qt-review-2026-11-08.json)

## 소스와 고지 받기

- **0.11.0 기준 Qt 6.12.0, PySide/Shiboken 6.12.0, ASE 3.29.0 및 NSIS 3.13 자료:** [제3자 소스·고지 묶음](https://github.com/a123qsd/calclens-showcase/releases/tag/component-sources-0.11.0). 이 묶음은 0.11.0을 기준으로 만들었으며 초기 버전의 ASE에도 같은 원본이 쓰였습니다. 각 구성요소의 소스, 저작권 고지, LGPL·GPL 전문과 해당 Qt 예외를 포함합니다. 전체 ZIP의 SHA-256은 `fa70e5366cdd49efd255ca57221dae87170bebdf164ac6f71368db383b788175`입니다.
- **고지만 작은 파일로 받기:** [0.11.0 제3자 라이선스·저작권 고지 ZIP](https://github.com/a123qsd/calclens-showcase/releases/download/component-sources-0.11.0/CalcLens-0.11.0-third-party-notices.zip). 기존 대용량 소스 묶음의 고지 61개를 원문 그대로 담았으며, 소스 코드는 포함하지 않습니다. ZIP의 SHA-256은 `df3cab9c2af07737ee003fd7899352b0d233b0917ca69887a10b4992e7446414`입니다.
- **0.11.1의 별도 Windows 전체 런타임에 포함된 Paramiko 5.1.0:** [0.11.1 보완 소스·라이선스 ZIP](https://github.com/a123qsd/calclens-showcase/releases/download/component-sources-0.11.0/CalcLens-0.11.1-Paramiko-5.1.0-source.zip) · [PyPI 원본](https://pypi.org/project/paramiko/5.1.0/#files). 보완 ZIP의 SHA-256은 `f0ef5b30f78503ab57f9d75a75a9fe8c42dbf70f7d0ad4ab7b5215e8832c1247`, 그 안에 든 원본 `paramiko-5.1.0.tar.gz`는 `239b5f9b2a53006cd54f83cf8495ee742083708ead947882c8dd2786de79f39b`입니다. 위 0.11.0 소스 묶음에는 Paramiko가 들어 있지 않습니다.
- **0.12.0 Mac의 수정된 Qt Cocoa 플러그인:** [대응 소스, 수정 사항, 빌드 방법과 고지](https://github.com/a123qsd/calclens-showcase/releases/download/v0.12.0/CalcLens-0.12.0-Qt-Cocoa-source.zip). ZIP의 SHA-256은 `29544ebc27cc722169037f72053784b46b53e98deeb17e231a3eaaf5dfe8515f`입니다. 플러그인에는 Qt의 [접근성 수정](https://github.com/qt/qtbase/commit/8148c48deb8e4345bacb797cb75c011df6f797fa)이 적용돼 있습니다.
- **0.13.0 Mac의 Qt Cocoa 플러그인:** [대응 소스와 고지](https://github.com/a123qsd/calclens-showcase/releases/download/v0.13.0/CalcLens-0.13.0-Qt-Cocoa-source.zip).
- **0.13.1 Mac의 Qt Cocoa 플러그인:** [대응 소스와 고지](https://github.com/a123qsd/calclens-showcase/releases/download/v0.13.1/CalcLens-0.13.1-Qt-Cocoa-source.zip).

각 묶음은 제3자 자료만 제공합니다. 고지문과 라이선스 전문은 해당 구성요소와 함께 보관해 주세요. 0.11.0 원본 ZIP의 NOTICE와 MANIFEST는 작성 당시의 상태를 보존합니다. 이후 확인한 소스 대조, 라이브러리 교체와 Windows DLL 로드 결과는 이 문서와 별도 검사 기록에 반영했습니다. 원본 묶음의 고지를 현재의 미해결 항목 목록으로 해석하지 마세요.

## 버전별로 확인한 내용

| 버전과 조사한 파일 | 확인한 내용 | 검증 범위 |
| --- | --- | --- |
| **0.1.1·0.2.0** | 보관된 한국어·영어 앱/자료 ZIP의 목록을 확인했습니다. 이 ZIP에서는 Qt·PySide 또는 ASE 런타임을 식별하지 못했습니다. | 외부에 별도 설치된 패키지나 목록에 없는 파일까지 조사한 결과는 아닙니다. |
| **0.3.0, 0.5.0–0.8.0 Windows** | 보관된 지원 ZIP 여섯 개(0.7.0 일반·legacy 포함)에 ASE 3.29.0 소스가 있으며, 모두 공식 PyPI 원본 해시와 일치합니다. 지원 자료에는 재빌드 안내도 있습니다. 조사한 영어 실행 파일 여섯 개에는 ASE 모듈이 각각 202개씩 PyInstaller의 `PYZ.pyz`에 묶여 있었습니다. | 0.8.0의 수정 ASE 재빌드 실험은 아래와 같습니다. 단순한 폴더 복사로 원래 EXE의 ASE가 교체된다고 확인한 것은 아닙니다. 한국어 실행 파일 전체를 같은 수준으로 분석한 것은 아닙니다. |
| **0.9.0–0.11.0 Windows** | 0.9.0 단일 실행 파일과 0.9.1·0.10.0·0.11.0 폴더 ZIP에서 Qt/PySide 6.12.0과 ASE 3.29.0의 파일 또는 메타데이터를 확인했습니다. 여섯 Qt DLL은 네 버전 간 각각 SHA-256이 같습니다. 이 중 Lottie와 Quick Timeline은 GPLv3 전용 또는 별도 상용 라이선스 대상이며, QmlCompiler는 해당 소스 파일의 GPLv3와 Qt 예외를 확인했습니다. | 0.11.0에서는 아래의 Qt 대체 실행, 공개 소스 대조와 DLL 로드 기록을 확인했습니다. 대상 9개는 시험한 동작에서 로드되지 않았습니다. 이 결과를 다른 버전이나 모든 동작으로 일반화하지 않습니다. |
| **0.9.0–0.11.0 Mac** | 보관된 네 개 DMG에서 Qt/PySide 6.12.0과 ASE 3.29.0을 확인했습니다. Qt 관련 고지 경로에서 LGPL 전문이 확인되지 않아 위 소스 묶음에 전문을 보완했습니다. 0.11.0 복사본의 Cocoa 플러그인 교체 실험은 아래와 같습니다. | 0.9.0–0.10.0과 0.11.0의 다른 라이브러리 전체를 교체해 실행한 것은 아닙니다. |
| **0.11.1 Windows** | 별도 전체 런타임 검토본에서는 앞의 여섯 Qt DLL이 0.11.0과 각각 동일하고 Paramiko 5.1.0도 포함돼 있습니다. Paramiko Python 파일 42개는 공식 소스의 같은 파일 42개와 모두 일치했습니다. 공개 경량 ZIP은 Python·Qt를 함께 싣는 이 전체 런타임과 다른 파일입니다. | 전체 런타임 검토본이 과거 누구에게 전달됐는지는 확인하지 않았습니다. 공개 경량 ZIP은 설치 시 받는 패키지의 조건도 별도로 적용됩니다. |
| **0.12.0 Mac 공개 DMG** | DMG에 수정된 Qt Cocoa 플러그인 하나를 포함하며, 해당 소스·패치·빌드 지침과 고지를 위의 별도 ZIP으로 제공합니다. | 다른 설치 환경과 모든 라이브러리의 수정·교체까지 이 사실만으로 확인되지는 않습니다. |

0.9.0–0.11.0 Windows 패키지에서 PySide/Shiboken의 배포 메타데이터에는 LGPL/GPL 선택지가 표시되지만, 해당 `dist-info/licenses` 폴더에 남아 있는 파일은 상용 라이선스 참조뿐이었습니다. 상용 라이선스 참조 파일은 상용 사용권을 취득했다는 증거가 아닙니다. 전체 LGPL/GPL 본문과 소스는 위의 제3자 자료에서 받을 수 있습니다. 0.11.0 Windows에서는 공식 ASE·PySide·Shiboken 휠과 실제 파일을 대조했고, 공개된 원본 소스의 구성과 빌드 자료도 추가 확인했습니다. Qt의 소스·빌드 자료에서 필요한 파일의 구체적인 누락은 발견하지 못했습니다. 동일한 바이트의 바이너리를 다시 만드는 시험까지 수행한 것은 아닙니다.

## 다른 구성요소의 고지

0.11.0 Windows ZIP에는 CPython 라이선스, VTK 9.7.2의 저작권·라이선스, NumPy 2.5.4와 SciPy 1.18.1의 고지가 들어 있습니다. NumPy와 SciPy는 각각 OpenBLAS DLL도 포함합니다. 두 고지에는 OpenBLAS·LAPACK의 저작권과 GCC Runtime Library Exception이 함께 적혀 있습니다. 해당 고지는 위 0.11.0 제3자 자료의 `notices/`에도 보존했습니다. 웹 화면에 쓰인 React·3Dmol.js 등의 고지와 글꼴 고지도 같은 자료에 포함됩니다. 각 저작권과 예외 문구를 원문 그대로 유지해야 합니다.

0.11.0 Windows의 두 OpenBLAS DLL을 같은 버전의 공식 Windows x64 휠과 대조했습니다. NumPy 2.5.4의 DLL은 [scipy-openblas64 0.3.34.106.0](https://pypi.org/project/scipy-openblas64/0.3.34.106.0/#files) 공급 휠의 DLL과, SciPy 1.18.1의 DLL은 [scipy-openblas32 0.3.31.22.0](https://pypi.org/project/scipy-openblas32/0.3.31.22.0/#files) 공급 휠의 DLL과 각각 바이트 단위로 같습니다. NumPy·SciPy 휠과 두 공급 휠은 모두 PyPI에 기록된 SHA-256과 일치했습니다. 두 공급 휠 모두 Windows x64용이며 이름의 32와 64는 BLAS 정수 인터페이스를 구분합니다.

공급 프로젝트의 버전별 빌드 자료에는 각각 OpenBLAS 소스 커밋 [446c436e](https://github.com/OpenMathLib/OpenBLAS/tree/446c436e10450c348169808f1a6b3fae0925c9f7)와 [5ffbf38b](https://github.com/OpenMathLib/OpenBLAS/tree/5ffbf38b41a1fe494d038efcb09cf22f4d527c22)가 지정돼 있고, Windows용 패치와 빌드 절차는 [64 자료](https://github.com/MacPython/openblas-libs/tree/v0.3.34.106.0)와 [32 자료](https://github.com/MacPython/openblas-libs/tree/v0.3.31.22.0)에 있습니다. 이는 공급 프로젝트의 해당 버전 태그가 지정한 소스 참조이며, 여기서 직접 재빌드해 동일한 DLL을 만들었다는 뜻은 아닙니다.

두 DLL의 문자열에는 `gcc-10.3.0/libgfortran`과 `mingw-w64/.../winpthreads` 소스 경로가 있습니다. 두 휠 고지문에는 winpthreads 명칭이 없었습니다. 경로 문자열만으로 실제 포함 코드와 정확한 버전을 확정할 수는 없습니다. 참고 자료는 [GCC 10.3.0](https://ftp.gnu.org/gnu/gcc/gcc-10.3.0/gcc-10.3.0.tar.xz)과 [winpthreads 고지](https://github.com/mingw-w64/mingw-w64/blob/ae5227f620699c8d532609ae30dc66432b903dab/mingw-w64-libraries/winpthreads/COPYING)입니다. 정확한 GCC 빌드 설정, 선택 구성요소 전체와 별도 상용 사용권의 존재는 확인하지 않았습니다.

## 0.8.0 Windows 수정 ASE 재빌드 실험

보관된 0.8.0 Windows 지원 ZIP의 해시를 확인하고 동봉된 ASE 3.29.0 소스에 실행 여부를 식별하는 무해한 표식을 추가했습니다. 안내문에 따라 수정한 ASE를 설치하고 동봉된 앱 빌드 자료로 영어 단일 EXE를 다시 만들었습니다. 호스팅 Windows에서 재빌드 EXE의 자체 검사를 실행했을 때 수정된 ASE 표식이 나타났고, 그래핀 구조와 MoS₂ 축 검사도 통과했습니다.

이 결과는 영어 단일 EXE를 새로 빌드한 경우에 관한 것입니다. 원래 배포된 EXE의 내부 라이브러리를 직접 교체하거나 한국어판·다른 버전·브라우저 화면까지 시험한 것은 아닙니다.

## 공개 Qt 소스와 빌드 자료 대조

공개된 `qt-everywhere-src-6.12.0.tar.xz`에는 해당 배포본의 Qt 모듈 소스와 configure·CMake·MSVC 설정 및 빌드 문서가 들어 있습니다. `pyside-setup-everywhere-src-6.12.0.tar.xz`에는 PySide, libshiboken, Shiboken 생성기, 타입시스템과 플랫폼별 빌드·설치 스크립트가 포함됩니다. PySide의 `dependencies.yaml`이 지정한 Qt 라이브러리·문서 저장소 19개의 커밋은 Qt 소스 묶음의 `.tag` 값과 모두 일치했습니다.

원본 Windows Qt의 버전·ABI 정보는 Qt 6.12.0 동적 릴리스 빌드를 가리키며, 공식 휠 파일 대조와 소스 구성 대조가 서로 일치합니다. ASE의 설치된 Python 파일 1,219개도 공개된 3.29.0 소스와 모두 같았습니다. 정확한 과거 네이티브 빌드 명령이나 동일 바이트 재빌드를 복원하지 못했다는 사실만으로 필수 소스 누락이라고 판단하지 않았습니다.

## Windows 0.11.0의 실제 Qt DLL 로드

원본 ZIP의 SHA-256은 `74042e760b9d758ad8c5e4e53d4447c62751a5eb8d801b51841aa009bc69ab80`입니다. Windows의 프로세스·DLL 로드 이벤트로 원본 실행기와 그 Python 자식 프로세스를 기록했습니다. 한국어와 영어 모두 실제 QtCore·QtGui·QtWidgets·Windows 플랫폼 플러그인을 로드해 작업 검사를 통과했습니다.

| 실행 | DLL 로드 이벤트 | 고유 DLL 이름 | 조사 대상 9개 로드 | 경로 미확인 |
| --- | ---: | ---: | ---: | ---: |
| 영어 | 335 | 290 | 0 | 0 |
| 한국어 | 337 | 290 | 0 | 0 |

대상은 Lottie 계열 DLL 3개, Timeline 계열 DLL 2개, Qt GPL 예외가 붙은 QmlCompiler DLL 1개와 관련 플러그인 3개입니다. 별도 대조 실행에서 9개의 로드와 해제를 모두 기록해 일시적인 로드도 관찰할 수 있음을 확인했습니다. 대조 실행은 앱의 사용으로 집계하지 않습니다.

검사는 호스팅 Windows의 소프트웨어 OpenGL에서 기본 화면, 3D, 구조·전자밀도 그림 내보내기, Gaussian 입력 작성과 프로젝트 재열기를 다뤘습니다. 모든 사용자 조작·외부 플러그인·실물 GPU나 다른 버전을 시험한 결과는 아닙니다. [파일별 식별값과 결과](qt-review-2026-11-08.json)

## 0.11.0 Windows 라이브러리 대체 실험

Windows 0.11.0의 원본 ZIP 해시를 확인한 뒤 별도 복사본에서 PySide6/Shiboken6 6.12.0을 공식 6.11.3 배포본으로 교체했습니다. 원본과 다른 `Qt6Core.dll`의 해시가 실제 로드된 파일과 일치했고, 호스팅 Windows에서 앱의 네이티브 화면·VTK·Gaussian 작업공간 기초 실행 검사를 통과했습니다. 공식 배포본 사이의 대체 시험으로, 소스를 수정해 다시 빌드한 라이브러리나 다른 버전의 교체까지 시험한 것은 아닙니다.

## 0.11.0 Mac 플러그인 교체 실험

원본 DMG의 SHA-256을 기록된 배포 해시와 대조한 뒤 앱을 별도 디스크에 복사했습니다. 원래 Qt 6.12.0 Cocoa 플러그인 대신 0.12.0에 배포된, Qt 접근성 수정이 적용된 호환 플러그인을 넣고 앱을 로컬 ad-hoc 서명했습니다. 서명 직후 무결성 검사를 통과했고, Apple Silicon의 macOS 27.2에서 앱 프로세스가 16초 동안 유지됐습니다. Qt 로더 기록과 프로세스의 라이브러리 매핑에서 교체된 플러그인이 실제 로드된 것도 확인했습니다. 비교용 원본 복사본 역시 같은 시간 동안 실행됐습니다.

실행 후에는 프레임워크의 FinderInfo 확장 속성 때문에 같은 엄격한 서명 검사가 실패했습니다. 복사본에서 해당 속성을 제거하자 다시 통과했습니다. 이 실험은 플러그인 하나의 로드와 제한된 시작 동작을 보여 주며, 모든 화면의 동작이나 모든 수정 라이브러리의 호환성·서명 유지를 보증하지 않습니다. 원본 DMG는 변경하지 않았습니다.

## Mac 플러그인 재빌드와 실제 로딩

0.12.0과 0.13.0의 공식 Mac DMG를 각 버전에 맞는 설치 환경의 복사본에서 열었습니다. 두 환경에서는 Qt가 플러그인 폴더 안의 `libqcocoa.dylib.calclens-original` 백업을 먼저 선택했습니다. 앱은 열렸지만, Qt 로더와 macOS 로더가 기록한 파일의 SHA-256은 수정 전 원본 `e355b16024485dbacac13ea13a1ce46bca4cf682f8b7b698c557e5960185d636`이었습니다. 패키지에 수정본이 들어 있는 사실과 시작할 때 실제로 선택된 파일은 따로 확인했습니다.

0.13.1은 백업을 Qt의 플러그인 검색 폴더 밖에 보관합니다. 새로 설치한 환경에서는 로더가 수정본을 선택했고 구조 편집과 Gaussian 입력 생성이 통과했습니다. 공개 소스 묶음에서 Qt 6.12.0과 SDK 입력 해시를 확인하고 참조 플러그인을 다시 빌드하자 배포 파일과 같은 SHA-256 `cdd31d9a8e074d6e510a6393cf6c6aed22f5f8244c99f9fce1d8b4efcdd0c75e`가 나왔습니다. 접근성 로그명을 바꾼 소스로도 별도 플러그인을 빌드했습니다. 다른 해시 `bebc83414c6a0f44e07a10aa8c7ac9f103c274cdebd07da36cc761a97517e977`의 파일이 앱에 실제로 로드됐고 편집 검사도 통과했습니다. 참조판과 수정판의 파일 경로를 실행 중인 프로세스의 메모리에서도 확인했습니다. [0.13.1 소스·패치·수정판 빌드 방법](https://github.com/a123qsd/calclens-showcase/releases/download/v0.13.1/CalcLens-0.13.1-Qt-Cocoa-source.zip)

## 라이선스를 구분한 이유

Qt의 LGPL 대상 라이브러리, GPL 대상 모듈, GPL과 별도 예외가 붙은 도구는 같은 조건으로 취급할 수 없습니다. ASE는 LGPL-2.1-or-later, Paramiko 5.1.0은 LGPL-2.1입니다. NSIS 3.13의 LZMA 모듈에는 CPL-1.0과 별도의 링크 예외가 적용됩니다. 각 소스에 실린 개별 파일의 저작권과 고지를 유지해야 합니다.

검토 기준과 원문: [Qt 라이선스 분류](https://doc.qt.io/qt-6/licensing.html) · [Qt의 LGPL 배포 안내](https://www.qt.io/development/open-source-lgpl-obligations) · [LGPLv3 전문](https://doc.qt.io/qt-6/lgpl.html) · [ASE 라이선스](https://docs.ase-lib.org/development/licenseinfo.html) · [NSIS 라이선스](https://nsis.sourceforge.io/License).

이번 Qt 기술 검토는 위에 명시한 버전의 공개 소스·빌드 자료, 라이선스 전문과 라이브러리 교체 권리 및 실행 기록을 확인했습니다. 그 범위에서 추가 필수 누락은 발견하지 못했습니다. 과거 수령자별 전달 사실, 다른 구성요소와 전체 과거 배포의 법률상 적합 여부는 이 기술 검토의 결론에 포함되지 않습니다.
