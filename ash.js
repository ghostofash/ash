const albumData = {
        ash: {
          title: "ASH",
          subtitle: "정규 1집 | 2019.03.22 | AMBITION MUSIK",
          description:
            "그의 데뷔 앨범 < ASH > 는 프로듀서 TOIL이 전곡 프로듀스 하며, 90년대 락 음악의 사운드와 감성이 결합된 ASH ISLAND 만의 스타일을 선보이고 있습니다.",
          tracklist: [
            "Paranoid",
            "발할라 (Valhalla) (Feat. Hash Swan, Yami Tommy)",
            "DEADSTAR (Feat. CHANGMO)",
            "Forgot U (Feat. BLOO)",
            "잠수함 (Feat. Tommy Strate)",
            "Q Mark (Feat. EK, Hash Swan)",
            "Fall",
          ],
          spotify: "https://placeholder.spotify.com/ash",
          applemusic: "https://placeholder.applemusic.com/ash",
        },
        island: {
          title: "ISLAND",
          subtitle: "정규 2집 | 2021.03.05 | AMBITION MUSIK",
          description:
            'ASH ISLAND 의 두 번째 앨범 [ ISLAND ], "멜로디"를 포함한 다수의 히트곡이 수록되어 있습니다. 스윙스, 빈지노, 박재범 등 화려한 피처링진이 참여했습니다.',
          tracklist: [
            "멜로디",
            "OKAY (Feat. Swings)",
            "Over",
            "A STAR IS BORN.",
            "그랑프리 (Feat. Beenzino)",
            "Checks (Feat. 수퍼비, 박재범 & The Quiett)",
            "eclipse",
            "Lonel",
            "Error (Feat. Loopy)",
            "Beautiful (Feat. Skinny Brown)",
            "One More Night (Feat. lIlBOI)",
          ],
          spotify: "https://placeholder.spotify.com/island",
          applemusic: "https://placeholder.applemusic.com/island",
        },
        rose: {
          title: "ROSE",
          subtitle: "정규 3집 | 2023.05.03 | AMBITION MUSIK",
          description:
            'ASH ISLAND 의 세 번째 앨범 [ ROSE ] 오토튠을 덜어내며 더욱 부드러운 분위기의 팝 랩을 시도하며 새로운 변화를 보여준 앨범이라고 평가받고 있습니다.',
          tracklist: [
            "Goodbye (작별인사) (Feat. Paul Blanco)",
            "WONDER",
            "ROSE IN THE HEART",
            "Trapped (Feat. Chillin Homie)",
            "U Know It (Feat. Louie)",
            "Drop Top (Feat. The Quiett)",
            "거짓말이라도",
          ],
          spotify: "https://placeholder.spotify.com/rose",
          applemusic: "https://placeholder.applemusic.com/rose",
        },
        voicememo: {
          title: "Voice Memo",
          subtitle: "정규 4집 | 2025.03.12 | MiDNiGHT Records",
          description:
            "[Voice Memo]는 2018년부터 2024년까지, 나를 스쳐 지나간 감정과 순간들을 내 목소리로 기록한 앨범이다. 사랑의 시작과 끝, 외로움과 그리움, 그리고 나 혼자만의 내면을 깊이 들여다본 곡들을 시간의 흐름을 따라 기록했다. 각 트랙이 이어지며 변화하는 감정선을 따라가며 이야기를 들어줬으면 한다. 이 앨범을 들으며 사람들이 단순히 음악을 듣는 것이 아니라, 마치 일기장을 넘기듯 내 시간과 감정을 함께 따라와 줬으면 좋겠다. 누군가에게는 공감이, 누군가에게는 새로운 시선이 될 수도 있겠지만, 나는 그저 내 감정을 앨범에 담았다.",
          tracklist: [
            "괜찮아 (Feat. ZICO)",
            "생각이 나서",
            "1+1",
            "환몽 (Interlude)",
            "이별기념일 (Feat. SOLE)",
            "ECHO",
            "처음처럼 (Feat. Skinny Brown)",
            "약속해줘",
            "OST (Feat. CHANMINA)",
            "I don't wanna be your hero",
          ],
          spotify: "https://placeholder.spotify.com/voicememo",
          applemusic: "https://placeholder.applemusic.com/voicememo",
        },
        
        // --- More Series 데이터 ---
        more_island: {
          title: "More ISLAND",
          subtitle: "More 시리즈 | 2021.06.28 | AMBITION MUSIK",
          description:
            "정규 2집 [ISLAND]에 미처 수록되지 못한 곡들을 모은 [More ISLAND]",
          tracklist: [
            "신경꺼",
            "Kill Me Tonight",
            "A STAR IS BORN Remix (Feat. MELOH, Paul Blanco)"
          ],
          spotify: "https://placeholder.spotify.com/more_island",
          applemusic: "https://placeholder.applemusic.com/more_island",
        },
        more_ash: {
          title: "More ASH",
          subtitle: "More 시리즈 | 2019.07.11 | AMBITION MUSIK",
          description:
            "정규 1집 <ASH>에 미처 수록되지 못한 두 곡을 모은 <More ASH>",
          tracklist: [
            "악몽", 
            "Oh My! (Feat. Skinny Brown & ZENE THE ZILLA)"
          ],
          spotify: "https://placeholder.spotify.com/more_ash",
          applemusic: "https://placeholder.applemusic.com/more_ash",
        },
        more_rose: {
          // NEW
          title: "More ROSES",
          subtitle: "More 시리즈 | 2023.07.13 | AMBITION MUSIK",
          description:
            "정규 3집 <ROSE>의 미수록 된 곡들을 선보이는 <More ROSES>",
          tracklist: [
            "Black Rose", 
            "Smoking Roses (Feat. Leellamarz)",
            "Erase It"
          ],
          spotify: "https://placeholder.spotify.com/more_rose",
          applemusic: "https://placeholder.applemusic.com/more_rose",
        },
        
        // --- 주요 싱글 데이터 ---
        error: {
          // NEW
          title: "Error (Feat. Loopy)",
          subtitle: "싱글 | 2020.10.15 | AMBITION MUSIK",
          description:
            "발매 당시 큰 인기를 끌었던 선공개 싱글. 이후 정규 2집 [ISLAND]에 수록되어 애쉬아일랜드의 대표곡 중 하나가 되었습니다.",
          tracklist: ["Error (Feat. Loopy)"],
          spotify: "https://placeholder.spotify.com/error",
          applemusic: "https://placeholder.applemusic.com/error",
        },
        BURN: {
        
          title: "BURN",
          subtitle: "EP | 2025.12.?? | MiDNiGHT Records",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "?",
          applemusic: "?",
        },
        HOWRU: {
        
          title: "HOW R U",
          subtitle: "싱글 | 2018.11.12 | AMBITION MUSIK",
          description:
            "Clloud 또는 윤진영 으로 알려진 ASH ISLAND의 첫 싱글 How R U",
          tracklist: ["How R U", ],
          spotify: "",
          applemusic: "",
        },
        DEADSTAR: {
        
          title: "DEADSTAR",
          subtitle: "싱글 | 2018.11.21 | AMBITION MUSIK",
          description:
            "앰비션 뮤직의 새 아티스트 ASH ISLAND 그의 시작을 알리는 싱글 [DEADSTAR]",
          tracklist: ["DEADSTAR (Feat. CHANGMO)", ],
          spotify: "",
          applemusic: "",
        },
        Bitionboyz: {
        
          title: "Bition Boyz",
          subtitle: "싱글 | 2019.05.12 | AMBITION MUSIK",
          description:
            "Ambition Musik Presents “Bition Boyz”",
          tracklist: ["Bition Boyz", ],
          spotify: "",
          applemusic: "",
        },
        Paranoidremix: {
        
          title: "Paranoid Remix (Feat. CHANGMO & Paul Blanco)",
          subtitle: "리믹스 | 2019.06.02 | AMBITION MUSIK",
          description:
            "ASH ISLAND가 CHANGMO 와 Paul Blanco가 참여한 Paranoid Remix를 발매했다.",
          tracklist: ["Paranoid Remix (Feat. CHANGMO & Paul Blanco)", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
        new: {
        
          title: "제목",
          subtitle: "앨범 종류 | 날짜 | 유통사",
          description:
            "앨범 설명",
          tracklist: ["트랙리스트", ],
          spotify: "",
          applemusic: "",
        },
      };

      // 모바일 메뉴 토글
      document.addEventListener("DOMContentLoaded", () => {
        const menuButton = document.getElementById("menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

        menuButton.addEventListener("click", () => {
          const isHidden = mobileMenu.classList.contains("hidden");
          mobileMenu.classList.toggle("hidden", !isHidden);
          if (isHidden) {
            menuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
          } else {
            menuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
          }
        });

        mobileMenu.querySelectorAll("a").forEach((link) => {
          link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
            menuButton.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
          });
        });
      });

      // 앨범 상세 모달 기능
      function openModal(albumKey) {
        const data = albumData[albumKey];
        if (!data) return;

        // 모달 DOM 요소
        const modal = document.getElementById("album-modal");
        const titleElement = document.getElementById("modal-album-title");
        const detailsElement = document.getElementById("modal-album-details");
        const descriptionElement = document.getElementById(
          "modal-album-description"
        );
        const tracklistElement = document.getElementById("modal-tracklist");
        const coverElement = document.getElementById("modal-album-cover");
        const spotifyLink = document.getElementById("modal-link-spotify");
        const applemusicLink = document.getElementById("modal-link-applemusic");

        // 내용 채우기
        titleElement.textContent = data.title;
        detailsElement.textContent = data.subtitle;
        descriptionElement.textContent = data.description;
        coverElement.textContent = ""; // 이미지 대체
        coverElement.style.backgroundImage = `url(https://placehold.co/64x64/222222/a0a0a0?text=${data.title.replace(
          / /g,
          "+"
        )})`;
        coverElement.style.backgroundSize = "cover";
        coverElement.style.backgroundPosition = "center";

        // 트랙리스트 생성
        tracklistElement.innerHTML = data.tracklist
          .map((track, index) => {
            // Feat. 정보가 있다면 강조
            const match = track.match(/\((Feat\..*?)\)/i);
            let displayTrack = track;
            let feature = "";
            if (match) {
              displayTrack = track.replace(match[0], "").trim();
              feature = `<span class="text-xs font-light text-ash-accent/70 ml-2">(${match[1]})</span>`;
            }

            // 트랙 번호는 앨범일 때만 표시
            const trackNumber = data.subtitle.includes("정규")
              ? `<span class="w-6 text-ash-accent font-mono">${
                  index + 1
                }.</span>`
              : `<span class="w-6 text-ash-accent font-mono">-</span>`;

            return `
                    <div class="flex items-center text-ash-light hover:bg-ash-highlight/30 p-2 rounded-lg transition duration-150">
                        ${trackNumber}
                        <span class="flex-1 text-sm font-medium">${displayTrack}</span>
                        ${feature}
                    </div>
                `;
          })
          .join("");

        // 링크 설정
        spotifyLink.href = data.spotify || "#";
        applemusicLink.href = data.applemusic || "#";

        // 모달 열기
        modal.classList.remove("hidden");
        modal.classList.add("flex");
        document.body.style.overflow = "hidden"; // 스크롤 방지
      }

      function closeModal() {
        const modal = document.getElementById("album-modal");
        modal.classList.add("hidden");
        modal.classList.remove("flex");
        document.body.style.overflow = ""; // 스크롤 허용
      }

      // --- BURN D-day 팝업 로직 수정: 매 방문마다 팝업 표시 ---
      document.addEventListener("DOMContentLoaded", () => {
        const popup = document.getElementById("burn-countdown-popup");
        const countdownEl = document.getElementById("burn-countdown");
        const closeBtn = document.getElementById("burn-popup-close");
        const dismissBtn = document.getElementById("burn-popup-dismiss");
        const ticketBtn = document.getElementById("burn-ticket-btn");

        if (popup && countdownEl) {
          const targetDate = new Date("2026-01-03T18:00:00"); // 필요시 수정

          function daysRemaining() {
            const now = new Date();
            const diffMs = targetDate - now;
            if (diffMs <= 0) return { days: 0, past: true, hours: 0, minutes: 0 };
            const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
            return { days, hours, minutes, past: false };
          }

          function updateCountdown() {
            const rem = daysRemaining();
            if (rem.past) {
              countdownEl.textContent = "오늘!";
            } else {
              countdownEl.textContent = `${rem.days}일 ${rem.hours}시간 ${rem.minutes}분`;
            }
          }

          // 항상 보여줌 (재접속할 때마다 팝업이 뜹니다)
          updateCountdown();
          popup.classList.remove("hidden");
          popup.classList.add("flex");
          document.body.style.overflow = "hidden";

          // 실시간 업데이트(분 단위)
          const intervalId = setInterval(updateCountdown, 60 * 1000);

          function closePopup() {
            popup.classList.add("hidden");
            popup.classList.remove("flex");
            document.body.style.overflow = "";
            clearInterval(intervalId);
          }

          closeBtn && closeBtn.addEventListener("click", closePopup);
          dismissBtn && dismissBtn.addEventListener("click", closePopup);
          ticketBtn && ticketBtn.addEventListener("click", () => {
            closePopup();
            // 링크는 a 태그가 처리하므로 추가 이동 로직 불필요
          });
        }
      });