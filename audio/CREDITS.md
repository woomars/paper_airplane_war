# 소리 출처

## Pixabay (Pixabay 콘텐츠 라이선스 — 무료, 출처 표시 필요 없음, 게임에 넣어 쓸 수 있음. 음원 파일만 따로 떼어 배포·판매하는 것은 금지)

| 파일 | 원본 | 다듬은 것 |
|---|---|---|
| engine_loop.ogg | "Turbine plane SFX" — https://pixabay.com/sound-effects/technology-turbine-plane-sfx-26791/ | 5.0~13.5초를 잘라 이음매 없이 반복되게, 모노 |
| flyby.ogg | "Fighter Jets Passing Overhead" — https://pixabay.com/sound-effects/fighter-jets-passing-overhead-30115/ | 8~14초, 앞뒤 페이드, 모노 |
| gun.ogg | "Clean Machine Gun Burst" — https://pixabay.com/sound-effects/film-special-effects-clean-machine-gun-burst-98224/ | 한 발(0.11초), 모노 |
| explosion.ogg | "Medium Explosion" — https://pixabay.com/sound-effects/film-special-effects-medium-explosion-40472/ | 끝 페이드, 모노 |
| missile_launch.ogg | "Missile firing fl" — https://pixabay.com/sound-effects/film-special-effects-missile-firing-fl-106655/ | 모노 |
| missile_loop.ogg | 같은 녹음 0.6~2.3초 | 이음매 없이 반복되게, 모노 |
| bgm.ogg | "Intense - Intense Music" by PaulYudin — https://pixabay.com/music/electronic-intense-intense-music-574004/ | 조용한 앞부분 7.5초를 잘라 내고 스테레오 Ogg로 다시 압축 |

## OpenGameArt "100 CC0 SFX" by rubberduck (CC0) — https://opengameart.org/content/100-cc0-sfx

| 파일 | 원본 |
|---|---|
| hit_me.ogg | hit_03.ogg |
| hit_confirm.ogg | hit_01.ogg |
| paper.ogg | paper_01.ogg |
| splash.ogg | splash_01.ogg |
| click.ogg | switch_01.ogg |

바람·기관포 저음·폭발 울림·미사일 발사·킬캠 휙·경고음·출발 신호는 Web Audio로 직접 합성한다(`src/audio/sound.ts`).
