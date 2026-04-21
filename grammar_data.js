const GRAMMAR_LESSONS = [
  // ===== LESSON 1: be동사 & 일반동사 =====
  {
    id: 1,
    title: "Grammar Potion Lab",
    subtitle: "be동사 & 일반동사",
    introLines: [
      "Welcome, young apprentice, to the Grammar Potion Lab.",
      "오늘 당신은 두 가지 고대의 물약을 만들게 됩니다.",
      "🧪 Potion of Being (존재의 물약) — be동사의 비밀",
      "⚗️ Potion of Action (행동의 물약) — 일반동사의 힘",
      "레시피를 배우고, 퀴즈를 풀어 물약을 완성하세요!"
    ],
    chapters: [
      // ===== CHAPTER 1: be동사 =====
      {
        id: 1,
        name: "Potion of Being",
        nameKo: "존재의 물약",
        topic: "be동사",
        potionColor: "#7b68ee",
        recipe: [
          {
            step: 1,
            title: "기본 개념",
            titleEn: "What is a Be Verb?",
            content: "be동사는 가장 기본적인 동사로 주어의 <em>상태</em>나 <em>존재</em>를 나타내며, <strong>'~이다'</strong>, <strong>'(~에) 있다'</strong>의 뜻을 가집니다.",
            audioKey: "recipe_be_1"
          },
          {
            step: 2,
            title: "be동사의 종류",
            titleEn: "Three Forms of Be",
            content: "be동사는 <strong>am, are, is</strong>의 세 종류가 있으며, 주어의 인칭과 수에 따라 결정됩니다. 주어가 대명사인 경우 be동사를 줄여 <strong>축약형</strong>으로 쓸 수 있습니다.",
            table: {
              headers: ["주어", "be동사", "축약형"],
              rows: [
                ["I (1인칭 단수)", "am", "I'm"],
                ["You (2인칭)", "are", "You're"],
                ["He / She / It (3인칭 단수)", "is", "He's / She's / It's"],
                ["We / They (복수)", "are", "We're / They're"]
              ]
            },
            examples: [
              { en: "I <u>am</u> smart.", ko: "나는 똑똒합니다.", highlight: "am" },
              { en: "You <u>are</u> very kind.", ko: "당신은 매우 친절합니다.", highlight: "are" },
              { en: "Jane <u>is</u> my friend.", ko: "Jane은 나의 친구입니다.", highlight: "is" },
              { en: "They<u>'re</u> in the classroom.", ko: "그들은 교실에 있습니다.", highlight: "'re" },
              { en: "I<u>'m</u> fourteen years old.", ko: "나는 열네 살입니다.", highlight: "'m" },
              { en: "You<u>'re</u> beautiful.", ko: "당신은 아름답습니다.", highlight: "'re" },
              { en: "She<u>'s</u> in the library.", ko: "그녀는 도서관에 있습니다.", highlight: "'s" }
            ],
            audioKey: "recipe_be_2"
          },
          {
            step: 3,
            title: "be동사의 부정문",
            titleEn: "Negative Sentences",
            content: "be동사 뒤에 <strong>not</strong>을 붙여 <strong>'~이 아니다'</strong>, <strong>'(~에) 없다'</strong>의 뜻으로 씁니다. not은 be동사와 축약할 수 있습니다.",
            transform: [
              { before: "is not", after: "isn't" },
              { before: "are not", after: "aren't" },
              { before: "am not", after: "축약 불가 (I'm not)" }
            ],
            examples: [
              { en: "I <u>am not</u> tired.", ko: "나는 피곤하지 않습니다.", highlight: "am not" },
              { en: "Kevin <u>is not</u> a doctor.", ko: "Kevin은 의사가 아닙니다.", highlight: "is not" },
              { en: "They <u>are not</u> friendly.", ko: "그들은 친절하지 않습니다.", highlight: "are not" },
              { en: "They <u>aren't</u> in the same class.", ko: "그들은 같은 반이 아닙니다.", highlight: "aren't" },
              { en: "He <u>isn't</u> here now.", ko: "그는 지금 여기에 없습니다.", highlight: "isn't" },
              { en: "I<u>'m not</u> so busy.", ko: "나는 그리 바쁘지 않습니다.", highlight: "'m not" }
            ],
            audioKey: "recipe_be_3"
          },
          {
            step: 4,
            title: "be동사의 의문문",
            titleEn: "Questions with Be",
            content: "주어와 be동사의 순서를 바꿔 <strong>「Be동사 + 주어 ~?」</strong>로 쓰고, '~이니?', '~에 있니?'의 뜻입니다.",
            pattern: {
              question: "Be동사 + 주어 ~?",
              yesAnswer: "Yes, 주어 + be동사.",
              noAnswer: "No, 주어 + be동사 + not."
            },
            examples: [
              { en: "<u>Am</u> I late?", ko: "제가 늦었습니까?", highlight: "Am" },
              { en: "<u>Are</u> you good at math?", ko: "당신은 수학을 잘합니까?", highlight: "Are" },
              { en: "<u>Is</u> it good for health?", ko: "그것은 건강에 좋습니까?", highlight: "Is" },
              { en: "A: <u>Is</u> Tom a scientist?", ko: "Tom은 과학자입니까?", highlight: "Is" },
              { en: "B: Yes, he <u>is</u>. / No, he <u>isn't</u>.", ko: "네, 그래요. / 아니요, 그렇지 않아요.", highlight: "is" },
              { en: "A: <u>Are</u> you good at basketball?", ko: "당신은 농구를 잘합니까?", highlight: "Are" },
              { en: "B: Yes, I <u>am</u>. / No, I<u>'m not</u>.", ko: "네, 잘해요. / 아니요, 그렇지 않아요.", highlight: "am" }
            ],
            audioKey: "recipe_be_4"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "밑줄 친 부분의 의미가 <보기>와 같은 것은?",
            context: "<보기> My brother <u>is</u> in the living room.",
            contextHint: "(is = ~에 있다)",
            options: [
              "① He <u>is</u> a very smart boy.",
              "② The girl <u>is</u> 13 years old.",
              "③ Your backpack <u>is</u> on the table.",
              "④ The video <u>is</u> about sea animals.",
              "⑤ My older sister <u>is</u> good at sports."
            ],
            answer: 2,
            explanation: "보기의 is는 '~에 있다'의 뜻입니다. ③번의 is도 '~에 있다'(위치)의 뜻이므로 같습니다. 나머지는 모두 '~이다'의 뜻입니다.",
            audioKey: "quiz_a_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말이 나머지와 다른 하나는?",
            options: [
              "① _____ everything okay?",
              "② The child _____ not quiet.",
              "③ Your bike _____ very dirty.",
              "④ The book _____ interesting.",
              "⑤ _____ those two boys brothers?"
            ],
            answer: 4,
            explanation: "①~④의 주어는 모두 3인칭 단수이므로 is가 들어갑니다. ⑤의 주어 those two boys는 복수이므로 Are가 들어갑니다.",
            audioKey: "quiz_a_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "대화의 빈칸에 들어갈 말로 알맞은 것은?",
            context: "A: Are you from Canada?\nB: _____ I'm from the US.",
            options: [
              "① Yes, I am.",
              "② Yes, you are.",
              "③ No, I'm not.",
              "④ Yes, I'm not.",
              "⑤ No, you aren't."
            ],
            answer: 2,
            explanation: "\"I'm from the US.\"라고 했으므로 캐나다 출신이 아닙니다. Are you~?에 대한 부정 대답은 \"No, I'm not.\"입니다.",
            audioKey: "quiz_a_3"
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "밑줄 친 부분이 어법상 어색한 것은?",
            options: [
              "① <u>You're</u> so kind.",
              "② I <u>amn't</u> very tall.",
              "③ <u>They're not</u> hungry.",
              "④ <u>He's</u> a great dancer.",
              "⑤ We <u>aren't</u> busy right now."
            ],
            answer: 1,
            explanation: "am not은 축약할 수 없습니다. amn't는 올바르지 않은 표현이며, I'm not으로 써야 합니다.",
            audioKey: "quiz_a_4"
          },
          {
            id: 5,
            type: "multiple_choice",
            question: "다음 대답이 나올 수 있는 질문으로 알맞은 것은?",
            context: "Yes, he is. I'm really worried.",
            options: [
              "① Are you tired?",
              "② Is your brother sick?",
              "③ Is your mom a nurse?",
              "④ Is she in the bathroom?",
              "⑤ Are you at home with your sister?"
            ],
            answer: 1,
            explanation: "\"Yes, he is.\"로 대답했으므로 주어가 he인 의문문이어야 합니다. \"I'm really worried.\"라는 걱정 표현과 어울리는 것은 ②번입니다.",
            audioKey: "quiz_a_5"
          },
          {
            id: 6,
            type: "multiple_choice",
            question: "빈칸 ⓐ~ⓔ에 들어갈 말로 알맞지 않은 것은?",
            context: "Hi, my name ⓐ_____ Minsu. I ⓑ_____ fourteen years old. My favorite subjects ⓒ_____ music and science. My favorite color ⓓ_____ yellow. My best friends ⓔ_____ Jiwoo and Taemin.",
            options: [
              "① ⓐ - is",
              "② ⓑ - am",
              "③ ⓒ - are",
              "④ ⓓ - is",
              "⑤ ⓔ - is"
            ],
            answer: 4,
            explanation: "ⓔ의 주어 My best friends는 복수이므로 are가 들어가야 합니다. is는 알맞지 않습니다.",
            audioKey: "quiz_a_6"
          },
          {
            id: 7,
            type: "multi_select",
            question: "다음 중 어법상 올바른 문장을 모두 고르시오.",
            options: [
              "① The woman are not old.",
              "② The brown cat is very fat.",
              "③ Is Steve in the fifth grade?",
              "④ We are members of the school band.",
              "⑤ Is Mr. White and his students are in the classroom?"
            ],
            answers: [1, 2, 3],
            explanations: [
              "① The woman → 단수 → is not (✗)",
              "② 올바른 문장 (✓)",
              "③ 올바른 의문문 (✓)",
              "④ 올바른 문장 (✓)",
              "⑤ Is와 are가 중복, 주어가 복수 → Are Mr. White and his students in the classroom? (✗)"
            ],
            audioKey: "quiz_a_7"
          },
          {
            id: 8,
            type: "word_blocks",
            question: "다음 우리말을 영어로 바꿔 쓸 때 빈칸에 알맞은 말을 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) 우리는 초등학생들이 아니다.",
                sentence: "_____ _____ elementary students.",
                blocks: ["We", "aren't", "We're", "not", "isn't", "They"],
                answer: ["We", "aren't"],
                altAnswer: ["We're", "not"],
                explanation: "We aren't 또는 We're not 모두 정답입니다."
              },
              {
                prompt: "(2) 그들은 행복하니?",
                sentence: "_____ _____ happy?",
                blocks: ["Are", "they", "Is", "Do", "them", "happy"],
                answer: ["Are", "they"],
                explanation: "they(복수) → Are they happy?"
              },
              {
                prompt: "(3) 그녀는 지금 체육관에 있다.",
                sentence: "_____ _____ at the gym now.",
                blocks: ["She", "is", "He", "are", "It", "has"],
                answer: ["She", "is"],
                explanation: "She(3인칭 단수) → She is"
              }
            ],
            audioKey: "quiz_a_8"
          }
        ]
      },

      // ===== CHAPTER 2: 일반동사 =====
      {
        id: 2,
        name: "Potion of Action",
        nameKo: "행동의 물약",
        topic: "일반동사",
        potionColor: "#ff6347",
        recipe: [
          {
            step: 1,
            title: "기본 개념",
            titleEn: "What is a General Verb?",
            content: "일반동사는 be동사를 제외한 대부분의 동사로 주어의 <em>동작</em>, <em>상태</em> 등을 나타냅니다.",
            examples: [
              { en: "I <u>play</u> soccer.", ko: "나는 축구를 합니다.", highlight: "play" },
              { en: "Amy <u>reads</u> novels.", ko: "Amy는 소설을 읽습니다.", highlight: "reads" },
              { en: "We <u>love</u> cats.", ko: "우리는 고양이를 사랑합니다.", highlight: "love" }
            ],
            audioKey: "recipe_verb_1"
          },
          {
            step: 2,
            title: "일반동사의 현재형",
            titleEn: "Present Tense & Third Person -s",
            content: "일반적인 사실, 현재의 상태, 반복되는 습관이나 동작을 나타냅니다. 주어가 <strong>3인칭 단수</strong>일 때는 동사 뒤에 <strong>-s</strong>를 붙입니다.",
            table: {
              headers: ["주어", "동사 형태", "예시"],
              rows: [
                ["I / You / We / They", "동사원형", "I like flowers."],
                ["He / She / It", "동사 + -s", "She likes flowers."]
              ]
            },
            examples: [
              { en: "We all <u>breathe</u> and <u>eat</u>.", ko: "우리는 모두 숨을 쉬고 먹습니다.", highlight: "breathe" },
              { en: "I <u>have</u> a brother.", ko: "나는 남자 형제가 한 명 있습니다.", highlight: "have" },
              { en: "She <u>walks</u> to school.", ko: "그녀는 학교에 걸어갑니다.", highlight: "walks" },
              { en: "Lily <u>runs</u> very fast.", ko: "Lily는 매우 빠르게 달립니다.", highlight: "runs" },
              { en: "Minho <u>likes</u> flowers.", ko: "민호는 꽃을 좋아합니다.", highlight: "likes" },
              { en: "She <u>wants</u> new shoes.", ko: "그녀는 새 신발을 원합니다.", highlight: "wants" }
            ],
            audioKey: "recipe_verb_2"
          },
          {
            step: 3,
            title: "일반동사의 부정문",
            titleEn: "Negative Sentences",
            content: "일반동사 앞에 <strong>do not</strong>을 붙여 '~하지 않다'의 뜻으로 씁니다. 주어가 3인칭 단수이면 <strong>does not</strong>을 쓰고, 동사는 <strong>원형</strong>으로 돌아갑니다.",
            transform: [
              { before: "do not", after: "don't" },
              { before: "does not", after: "doesn't" }
            ],
            examples: [
              { en: "I <u>do not like</u> this cake.", ko: "나는 이 케이크를 좋아하지 않습니다.", highlight: "do not like" },
              { en: "My mom <u>does not use</u> sugar.", ko: "우리 엄마는 설탕을 쓰지 않습니다.", highlight: "does not use" },
              { en: "You <u>don't know</u> his name.", ko: "당신은 그의 이름을 알지 못합니다.", highlight: "don't know" },
              { en: "Jack <u>doesn't talk</u> too much.", ko: "Jack은 말을 많이 하지 않습니다.", highlight: "doesn't talk" }
            ],
            audioKey: "recipe_verb_3"
          },
          {
            step: 4,
            title: "일반동사의 의문문",
            titleEn: "Questions with Do/Does",
            content: "<strong>「Do/Does + 주어 + 동사원형 ~?」</strong>의 형태로 쓰고 '~하니?'의 뜻입니다.",
            pattern: {
              question: "Do/Does + 주어 + 동사원형 ~?",
              yesAnswer: "Yes, 주어 + do/does.",
              noAnswer: "No, 주어 + don't/doesn't."
            },
            examples: [
              { en: "<u>Do</u> you like pizza?", ko: "당신은 피자를 좋아합니까?", highlight: "Do" },
              { en: "<u>Do</u> they want this book?", ko: "그들은 이 책을 원합니까?", highlight: "Do" },
              { en: "<u>Does</u> Robin get up early?", ko: "Robin은 일찍 일어납니까?", highlight: "Does" },
              { en: "A: <u>Do</u> you run every day?", ko: "당신은 매일 달립니까?", highlight: "Do" },
              { en: "B: Yes, I <u>do</u>. / No, I <u>don't</u>.", ko: "네, 그래요. / 아니요, 그렇지 않아요.", highlight: "do" },
              { en: "A: <u>Does</u> Alice wear glasses?", ko: "Alice는 안경을 씁니까?", highlight: "Does" },
              { en: "B: Yes, she <u>does</u>. / No, she <u>doesn't</u>.", ko: "네, 그래요. / 아니요, 그렇지 않아요.", highlight: "does" }
            ],
            audioKey: "recipe_verb_4"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "빈칸에 공통으로 들어갈 말로 알맞은 것은?",
            context: "· Mike and Alex _____ big dreams.\n· We _____ a lot of books.",
            options: [
              "① do",
              "② does",
              "③ have",
              "④ has",
              "⑤ are"
            ],
            answer: 2,
            explanation: "Mike and Alex(복수), We(복수) 모두 복수 주어이므로 have가 들어갑니다. has는 3인칭 단수에 쓰입니다.",
            audioKey: "quiz_b_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "다음 중 어법상 올바른 문장은?",
            options: [
              "① They looks very happy.",
              "② They not eat vegetables.",
              "③ Dad doesn't likes coffee.",
              "④ Does Mina gets up early?",
              "⑤ We enjoy summer every year."
            ],
            answer: 4,
            explanation: "① looks → look (복수 주어) ② not → do not/don't ③ doesn't likes → doesn't like (원형) ④ Does gets → Does get (원형) ⑤ 올바른 문장입니다.",
            audioKey: "quiz_b_2"
          },
          {
            id: 3,
            type: "word_blocks",
            question: "두 문장의 의미가 같도록 빈칸에 알맞은 말을 쓰시오.",
            subQuestions: [
              {
                prompt: "Changmin is a fast swimmer.\n= Changmin _____ very fast.",
                sentence: "Changmin _____ very fast.",
                blocks: ["swims", "swim", "swimming", "is swimming"],
                answer: ["swims"],
                explanation: "Changmin(3인칭 단수) + 일반동사 현재형 → swims"
              }
            ],
            audioKey: "quiz_b_3"
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말이 순서대로 바르게 짝지어진 것은?",
            context: "· Sumin _____ every morning.\n· Yujin _____ her homework in the afternoon.\n· Sumin and Yujin _____ for a walk after dinner.",
            options: [
              "① exercise - do - go",
              "② exercise - do - goes",
              "③ exercises - does - go",
              "④ exercises - do - goes",
              "⑤ exercises - does - goes"
            ],
            answer: 2,
            explanation: "Sumin(3인칭 단수) → exercises, Yujin(3인칭 단수) → does, Sumin and Yujin(복수) → go",
            audioKey: "quiz_b_4"
          },
          {
            id: 5,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말이 나머지와 다른 하나는?",
            options: [
              "① _____ the horse run fast?",
              "② _____ the band play loud music?",
              "③ _____ Jihun get up early every day?",
              "④ _____ those people like Korean food?",
              "⑤ _____ your little sister have a smartphone?"
            ],
            answer: 3,
            explanation: "①the horse(단수)→Does, ②the band(단수)→Does, ③Jihun(단수)→Does, ⑤your little sister(단수)→Does. ④those people(복수)→Do. ④만 다릅니다.",
            audioKey: "quiz_b_5"
          },
          {
            id: 6,
            type: "multiple_choice",
            question: "대화의 빈칸에 들어갈 말로 알맞은 것은?",
            context: "A: Do you like cats?\nB: _____ but I like dogs.",
            options: [
              "① Yes, I am",
              "② Yes, I do",
              "③ No, I'm not",
              "④ No, I don't",
              "⑤ Yes, I don't"
            ],
            answer: 3,
            explanation: "\"but I like dogs\"라고 했으므로 고양이는 좋아하지 않는다는 뜻입니다. Do you~?에 대한 부정 대답은 \"No, I don't.\"입니다.",
            audioKey: "quiz_b_6"
          },
          {
            id: 7,
            type: "word_blocks",
            question: "다음 문장에서 어법상 어색한 부분을 찾아 바르게 고쳐 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) We often <u>goes</u> swimming together.",
                sentence: "goes →  _____",
                blocks: ["go", "goes", "going", "to go"],
                answer: ["go"],
                explanation: "We(복수 주어) → 동사원형 go"
              },
              {
                prompt: "(2) She <u>isn't</u> like tomatoes.",
                sentence: "isn't →  _____",
                blocks: ["doesn't", "isn't", "don't", "not"],
                answer: ["doesn't"],
                explanation: "like는 일반동사이므로 be동사가 아닌 does not(doesn't)을 써야 합니다."
              },
              {
                prompt: "(3) Does he <u>speaks</u> English well?",
                sentence: "speaks →  _____",
                blocks: ["speak", "speaks", "speaking", "to speak"],
                answer: ["speak"],
                explanation: "Does 의문문에서는 동사원형을 씁니다. speaks → speak"
              }
            ],
            audioKey: "quiz_b_7"
          },
          {
            id: 8,
            type: "multiple_choice",
            question: "밑줄 친 ①~⑤ 중 어법상 어색한 것은?",
            context: "After school, my friends and I <u>①go</u> to the convenience store. We <u>②have</u> some snacks and <u>③talk</u> about our day. We <u>④are</u> not stay long and <u>⑤walk</u> home together.",
            options: [
              "①",
              "②",
              "③",
              "④",
              "⑤"
            ],
            answer: 3,
            explanation: "are not stay → do not stay. stay는 일반동사이므로 be동사가 아닌 do not으로 부정해야 합니다.",
            audioKey: "quiz_b_8"
          }
        ]
      }
    ]
  },

  // ===== LESSON 2: 현재진행형 & 조동사 can, will =====
  {
    id: 2,
    title: "Grammar Potion Lab",
    subtitle: "현재진행형 & 조동사 can, will",
    introLines: [
      "Welcome back, apprentice! Your skills have grown.",
      "이번에는 더 강력한 두 가지 물약에 도전합니다.",
      "🧪 Potion of Progress (진행의 물약) — 현재진행형의 마법",
      "⚗️ Potion of Possibility (가능성의 물약) — 조동사 can, will의 힘",
      "레시피를 배우고, 퀴즈를 풀어 물약을 완성하세요!"
    ],
    chapters: [
      // ===== CHAPTER 1: 현재진행형 =====
      {
        id: 1,
        name: "Potion of Progress",
        nameKo: "진행의 물약",
        topic: "현재진행형",
        potionColor: "#20b2aa",
        recipe: [
          {
            step: 1,
            title: "기본 개념",
            titleEn: "What is the Present Progressive?",
            content: "현재진행형이란 <em>지금 일시적으로 진행 중인 동작</em>을 나타내며, <strong>'~하고 있다'</strong>, <strong>'~하는 중이다'</strong>라고 해석합니다. 현재진행형은 <strong>「be동사의 현재형(am/are/is) + 동사원형-ing」</strong>의 형태로 나타내며, be동사는 주어의 인칭과 수에 따라 달라집니다.",
            examples: [
              { en: "Kevin <u>is watching</u> TV.", ko: "Kevin은 TV를 보고 있습니다.", highlight: "is watching" },
              { en: "I <u>am cleaning</u> my room.", ko: "나는 내 방을 청소하고 있습니다.", highlight: "am cleaning" },
              { en: "She <u>is doing</u> her homework.", ko: "그녀는 자신의 숙제를 하는 중입니다.", highlight: "is doing" },
              { en: "They <u>are listening</u> to music.", ko: "그들은 음악을 듣는 중입니다.", highlight: "are listening" }
            ],
            audioKey: "recipe_prog_1"
          },
          {
            step: 2,
            title: "현재진행형 만드는 법",
            titleEn: "How to Make -ing Forms",
            content: "동사에 <strong>-ing</strong>를 붙일 때 철자가 변하는 경우가 있습니다.",
            table: {
              headers: ["규칙", "변환", "예시"],
              rows: [
                ["-e로 끝나는 동사", "e를 없애고 -ing", "take → taking, make → making, write → writing"],
                ["-ie로 끝나는 동사", "ie를 y로 바꾸고 -ing", "tie → tying, die → dying, lie → lying"],
                ["단모음+단자음", "마지막 자음을 한 번 더 쓰고 -ing", "run → running, begin → beginning, forget → forgetting"]
              ]
            },
            audioKey: "recipe_prog_2"
          },
          {
            step: 3,
            title: "현재진행형의 부정문",
            titleEn: "Negative Sentences",
            content: "be동사 뒤에 <strong>not</strong>을 붙여 <strong>'~하고 있지 않다'</strong>, <strong>'~하는 중이 아니다'</strong>의 뜻으로 씁니다. be동사와 not은 줄여서 사용할 수 있습니다.",
            transform: [
              { before: "is not", after: "isn't" },
              { before: "are not", after: "aren't" }
            ],
            examples: [
              { en: "Ann <u>is not</u> having lunch.", ko: "Ann은 점심을 먹고 있지 않습니다.", highlight: "is not" },
              { en: "Ann <u>isn't</u> having lunch.", ko: "(축약형)", highlight: "isn't" },
              { en: "We <u>are not</u> taking pictures.", ko: "우리는 사진을 찍는 중이 아닙니다.", highlight: "are not" },
              { en: "We <u>aren't</u> taking pictures.", ko: "(축약형)", highlight: "aren't" }
            ],
            audioKey: "recipe_prog_3"
          },
          {
            step: 4,
            title: "주의해야 할 현재진행형",
            titleEn: "State Verbs: No -ing!",
            content: "동사가 <strong>'소유'</strong>나 <strong>'상태'</strong>를 나타내는 의미로 쓰일 때는 현재진행형으로 쓰지 않습니다. 이러한 동사에는 <strong>like, love, know, want, have</strong> 등이 있습니다. 단, have가 '먹다'의 의미로 사용되거나 have a good time처럼 '특정 경험'을 나타낼 때는 진행형으로 쓸 수 있습니다.",
            examples: [
              { en: "I <u>am knowing</u> her name. (X)", ko: "→ 상태동사는 진행형 불가!", highlight: "am knowing" },
              { en: "I <u>know</u> her name. (O)", ko: "저는 그녀의 이름을 알아요.", highlight: "know" }
            ],
            audioKey: "recipe_prog_4"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "다음 중 밑줄 친 동사의 -ing형이 바르게 쓰인 것은?",
            options: [
              "① It is <u>rainning</u> outside.",
              "② Dad is <u>writeing</u> a letter.",
              "③ Mia is <u>studing</u> math now.",
              "④ We're <u>swiming</u> in the pool.",
              "⑤ I'm <u>making</u> spaghetti for Mom."
            ],
            answer: 4,
            explanation: "① raining ② writing ③ studying ④ swimming이 올바른 형태입니다. ⑤ make → making (-e 탈락)이 바르게 쓰였습니다.",
            audioKey: "quiz_a_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "다음 우리말을 영어로 바르게 옮긴 것은?",
            context: "그들은 지금 축구를 하고 있지 않다.",
            options: [
              "① They not play soccer now.",
              "② They not playing soccer now.",
              "③ They do not playing soccer now.",
              "④ They are not playing soccer now.",
              "⑤ They not are playing soccer now."
            ],
            answer: 3,
            explanation: "현재진행형의 부정문은 「be동사 + not + 동사-ing」입니다. They are not playing soccer now.가 올바릅니다.",
            audioKey: "quiz_a_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "다음 대답이 나올 수 있는 질문으로 알맞은 것은?",
            context: "No, he isn't. He is cleaning the floor.",
            options: [
              "① Is he cleaning the floor?",
              "② Does she clean the floor?",
              "③ Is he washing the dishes?",
              "④ Is your brother cleaning his room?",
              "⑤ What is he doing in the kitchen?"
            ],
            answer: 2,
            explanation: "\"No, he isn't.\"으로 부정한 뒤 \"He is cleaning the floor.\"라고 했으므로, 바닥 청소가 아닌 다른 활동을 묻는 질문이어야 합니다. ③ \"설거지를 하고 있니?\"가 알맞습니다.",
            audioKey: "quiz_a_3"
          },
          {
            id: 4,
            type: "word_blocks",
            question: "빈칸에 알맞은 말을 <보기>에서 골라 어법상 올바른 형태로 바꿔 쓰시오.",
            context: "<보기>  jog    lie    take",
            subQuestions: [
              {
                prompt: "(1) He is _____ along the river.",
                sentence: "He is _____ along the river.",
                blocks: ["jogging", "joging", "jog", "joggs"],
                answer: ["jogging"],
                explanation: "jog → jogging (단모음+단자음 → 자음 중복 + -ing)"
              },
              {
                prompt: "(2) The cat is _____ on the chair.",
                sentence: "The cat is _____ on the chair.",
                blocks: ["lying", "lieing", "laying", "lie"],
                answer: ["lying"],
                explanation: "lie → lying (-ie를 y로 바꾸고 -ing)"
              },
              {
                prompt: "(3) People are _____ pictures of the flowers.",
                sentence: "People are _____ pictures of the flowers.",
                blocks: ["taking", "takeing", "takking", "take"],
                answer: ["taking"],
                explanation: "take → taking (-e 탈락 후 -ing)"
              }
            ],
            audioKey: "quiz_a_4"
          },
          {
            id: 5,
            type: "word_blocks",
            question: "빈칸에 공통으로 들어갈 말을 쓰시오.",
            context: "· I am _____ a sandwich for lunch now.\n· Are they _____ a good time at the amusement park?",
            subQuestions: [
              {
                prompt: "공통으로 들어갈 말은? (같은 말을 두 빈칸에 모두 넣으세요)",
                sentence: "I am _____ a sandwich / Are they _____ a good time",
                blocks: ["having", "has", "have", "hasing"],
                answer: ["having", "having"],
                allowReuse: true,
                explanation: "have가 '먹다' 또는 '경험하다'의 뜻일 때는 진행형으로 쓸 수 있습니다. having이 공통으로 들어갑니다."
              }
            ],
            audioKey: "quiz_a_5"
          },
          {
            id: 6,
            type: "word_blocks",
            question: "빈칸에 알맞은 말을 써서 대화를 완성하시오.",
            context: "A: _____ your sister listening to music now?\nB: No, she _____. She's reading a book.",
            subQuestions: [
              {
                prompt: "A: _____ your sister listening to music now?",
                sentence: "_____ your sister listening to music now?",
                blocks: ["Is", "Are", "Does", "Do"],
                answer: ["Is"],
                explanation: "your sister(3인칭 단수) → Is"
              },
              {
                prompt: "B: No, she _____. She's reading a book.",
                sentence: "No, she _____.",
                blocks: ["isn't", "aren't", "doesn't", "don't"],
                answer: ["isn't"],
                explanation: "Is ~?에 대한 부정 대답 → No, she isn't."
              }
            ],
            audioKey: "quiz_a_6"
          },
          {
            id: 7,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말이 순서대로 바르게 짝지어진 것은?",
            context: "· We _____ moving the boxes now.\n· Are Mike and Kate _____ dinner in the kitchen?",
            options: [
              "① are – prepare",
              "② are – preparing",
              "③ is – prepares",
              "④ is – preparing",
              "⑤ is – prepare"
            ],
            answer: 1,
            explanation: "We(복수) → are, 현재진행형 의문문 「Are + 주어 + 동사-ing?」 → preparing",
            audioKey: "quiz_a_7"
          },
          {
            id: 8,
            type: "multiple_choice",
            question: "밑줄 친 부분이 어법상 올바른 것은?",
            options: [
              "① Some birds <u>is flying</u> in the sky.",
              "② They <u>don't doing</u> their homework.",
              "③ <u>Are</u> Grandma baking a cake for us?",
              "④ My brother <u>are writing</u> a science report.",
              "⑤ The woman <u>is walking</u> slowly on the beach."
            ],
            answer: 4,
            explanation: "① birds(복수) → are flying ② don't → aren't ③ Grandma(단수) → Is ④ brother(단수) → is writing. ⑤ The woman is walking이 올바릅니다.",
            audioKey: "quiz_a_8"
          }
        ]
      },

      // ===== CHAPTER 2: 조동사 can, will =====
      {
        id: 2,
        name: "Potion of Possibility",
        nameKo: "가능성의 물약",
        topic: "조동사 can, will",
        potionColor: "#e06030",
        recipe: [
          {
            step: 1,
            title: "can의 기본 개념",
            titleEn: "Can: Ability & Possibility",
            content: "<strong>can</strong>은 능력이나 가능성을 나타낼 때 사용합니다. <strong>「can + 동사원형」</strong>의 형태로 <strong>'~할 수 있다'</strong>, <strong>'~일 수 있다'</strong>라는 뜻입니다.",
            examples: [
              { en: "I <u>can speak</u> Japanese.", ko: "저는 일본어를 말할 수 있습니다.", highlight: "can speak" },
              { en: "They <u>can drive</u> a car.", ko: "그들은 자동차를 운전할 수 있습니다.", highlight: "can drive" }
            ],
            audioKey: "recipe_modal_1"
          },
          {
            step: 2,
            title: "can의 부정문과 의문문",
            titleEn: "Can: Negatives & Questions",
            content: "<strong>부정문</strong>: can 뒤에 not을 써서 <strong>「cannot[can't] + 동사원형」</strong>으로 씁니다. '~할 수 없다'라는 뜻입니다.\n<strong>의문문</strong>: 주어와 can의 순서를 바꿔 <strong>「Can + 주어 + 동사원형 ~?」</strong>으로 씁니다. can 의문문은 <em>요청이나 부탁</em>할 때 쓰기도 합니다.",
            transform: [
              { before: "cannot", after: "can't" }
            ],
            pattern: {
              question: "Can + 주어 + 동사원형 ~?",
              yesAnswer: "Yes, 주어 + can.",
              noAnswer: "No, 주어 + can't[cannot]."
            },
            examples: [
              { en: "I <u>cannot</u> play the piano. = I <u>can't</u> play the piano.", ko: "나는 피아노를 칠 수 없습니다.", highlight: "cannot" },
              { en: "A: <u>Can</u> you ride a bike?", ko: "당신은 자전거를 탈 수 있나요?", highlight: "Can" },
              { en: "B: Yes, I <u>can</u>. / No, I <u>can't</u>.", ko: "네, 탈 수 있어요. / 아니요, 탈 수 없어요.", highlight: "can" }
            ],
            audioKey: "recipe_modal_2"
          },
          {
            step: 3,
            title: "will의 기본 개념",
            titleEn: "Will: Future & Intention",
            content: "<strong>will</strong>은 앞으로 일어날 일이나 말하는 사람의 의지를 나타낼 때 사용합니다. <strong>「will + 동사원형」</strong>의 형태로 <strong>'~할 것이다'</strong>, <strong>'~하려고 하다'</strong>라는 뜻입니다. 주어가 대명사이면 will을 축약하여 <strong>「주어'll」</strong>로 쓸 수 있습니다.",
            examples: [
              { en: "I <u>will call</u> you soon.", ko: "저는 곧 당신에게 연락할 것입니다.", highlight: "will call" },
              { en: "I <u>will invite</u> you. = I<u>'ll</u> invite you.", ko: "저는 당신을 초대할 것입니다.", highlight: "will invite" }
            ],
            audioKey: "recipe_modal_3"
          },
          {
            step: 4,
            title: "will의 부정문과 의문문",
            titleEn: "Will: Negatives & Questions",
            content: "<strong>부정문</strong>: will 뒤에 not을 써서 <strong>「won't[will not] + 동사원형」</strong>으로 씁니다. '~하지 않을 것이다'라는 뜻입니다.\n<strong>의문문</strong>: 주어와 will의 순서를 바꿔 <strong>「Will + 주어 + 동사원형 ~?」</strong>으로 씁니다.",
            transform: [
              { before: "will not", after: "won't" }
            ],
            pattern: {
              question: "Will + 주어 + 동사원형 ~?",
              yesAnswer: "Yes, 주어 + will.",
              noAnswer: "No, 주어 + won't."
            },
            examples: [
              { en: "I <u>will not</u> give up. = I <u>won't</u> give up.", ko: "저는 포기하지 않을 것입니다.", highlight: "will not" },
              { en: "A: <u>Will</u> Minji go to a concert?", ko: "민지는 콘서트를 보러 갈까요?", highlight: "Will" },
              { en: "B: Yes, she <u>will</u>. / No, she <u>won't</u>.", ko: "네, 그럴 거예요. / 아니요, 그러지 않을 거예요.", highlight: "will" }
            ],
            audioKey: "recipe_modal_4"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "다음 대화의 빈칸에 들어갈 말로 알맞은 것은?",
            context: "A: _____\nB: Yes, I can. I play it every day.",
            options: [
              "① Do you like badminton?",
              "② Can you play badminton?",
              "③ Will you play badminton?",
              "④ Can I play badminton here?",
              "⑤ Where can I play badminton?"
            ],
            answer: 1,
            explanation: "\"Yes, I can.\"으로 대답했으므로 Can you ~?로 물어야 합니다. 매일 한다는 맥락에서 능력을 묻는 ②가 알맞습니다.",
            audioKey: "quiz_b_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "다음 대화의 빈칸에 들어갈 말로 알맞지 <em>않은</em> 것은?",
            context: "A: Can I use your laptop?\nB: _____",
            options: [
              "① Yes, you can.",
              "② No, you can't.",
              "③ Sure, you can.",
              "④ Sorry, you can't.",
              "⑤ Of course, you can't."
            ],
            answer: 4,
            explanation: "\"Of course\"는 '물론'이라는 긍정의 의미인데 뒤에 \"you can't\"라는 부정이 오면 모순됩니다. ⑤는 알맞지 않습니다.",
            audioKey: "quiz_b_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "다음 중 밑줄 친 <u>can</u>의 의미가 나머지와 <em>다른</em> 하나는?",
            options: [
              "① Jisu <u>can</u> swim well.",
              "② I <u>can</u> make spaghetti.",
              "③ <u>Can</u> you ride a bike?",
              "④ <u>Can</u> you do me a favor?",
              "⑤ Minsu <u>can</u> speak Chinese."
            ],
            answer: 3,
            explanation: "①②③⑤의 can은 '~할 수 있다'(능력)의 뜻이지만, ④의 Can은 '~해 줄 수 있니?'(요청/부탁)의 뜻입니다.",
            audioKey: "quiz_b_3"
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "다음 빈칸에 들어갈 말로 알맞지 <em>않은</em> 것은?",
            context: "I will go to the concert _____.",
            options: [
              "① tomorrow",
              "② yesterday",
              "③ next Sunday",
              "④ next week",
              "⑤ this weekend"
            ],
            answer: 1,
            explanation: "will은 미래를 나타내므로 과거 시간 부사 yesterday와 함께 쓸 수 없습니다.",
            audioKey: "quiz_b_4"
          },
          {
            id: 5,
            type: "word_blocks",
            question: "괄호 안에서 알맞은 것을 골라 문장을 완성하시오.",
            subQuestions: [
              {
                prompt: "(1) I ( _____ / am ) speak three different languages.",
                sentence: "I _____ speak three different languages.",
                blocks: ["can", "am", "will", "do"],
                answer: ["can"],
                explanation: "능력 표현 → can + 동사원형"
              },
              {
                prompt: "(2) Sarah ( _____ / not can ) answer the phone now.",
                sentence: "Sarah _____ answer the phone now.",
                blocks: ["can't", "not can", "don't", "isn't"],
                answer: ["can't"],
                explanation: "can의 부정 → can't (not can은 틀린 형태)"
              },
              {
                prompt: "(3) He can ( _____ / climbs ) the tree in the garden.",
                sentence: "He can _____ the tree in the garden.",
                blocks: ["climb", "climbs", "climbing", "climbed"],
                answer: ["climb"],
                explanation: "can 뒤에는 동사원형 → climb"
              },
              {
                prompt: "(4) They will ( _____ / entering ) the singing contest.",
                sentence: "They will _____ the singing contest.",
                blocks: ["enter", "entering", "enters", "entered"],
                answer: ["enter"],
                explanation: "will 뒤에는 동사원형 → enter"
              }
            ],
            audioKey: "quiz_b_5"
          },
          {
            id: 6,
            type: "word_blocks",
            question: "다음 <보기>에서 알맞은 말을 골라 문장을 완성하시오. (단, 중복해 사용할 수 없음)",
            context: "<보기>  can    can't    will    won't",
            subQuestions: [
              {
                prompt: "(1) Jiho _____ swim very well. He swims like a fish.",
                sentence: "Jiho _____ swim very well.",
                blocks: ["can", "can't", "will", "won't"],
                answer: ["can"],
                explanation: "물고기처럼 수영한다 → 능력이 있다 → can"
              },
              {
                prompt: "(2) Eunji has a piano concert tomorrow. She _____ play the piano there.",
                sentence: "She _____ play the piano there.",
                blocks: ["will", "won't", "can", "can't"],
                answer: ["will"],
                explanation: "내일 피아노 콘서트가 있다 → 미래에 할 일 → will"
              }
            ],
            audioKey: "quiz_b_6"
          },
          {
            id: 7,
            type: "multiple_choice",
            question: "다음 문장을 어법에 맞게 고친 것은?",
            context: "She not will make a cake this weekend.",
            options: [
              "① She won't makes a cake this weekend.",
              "② She won't make a cake this weekend.",
              "③ She not will makes a cake this weekend.",
              "④ She will not makes a cake this weekend.",
              "⑤ She will not making a cake this weekend."
            ],
            answer: 1,
            explanation: "will의 부정문은 「will not[won't] + 동사원형」입니다. ② She won't make가 올바릅니다.",
            audioKey: "quiz_b_7"
          },
          {
            id: 8,
            type: "multiple_choice",
            question: "다음 글의 밑줄 친 ①~⑤ 중 어법상 <em>어색한</em> 것은?",
            context: "In the Future",
            options: [
              "① Cars <u>will fly</u>.",
              "② People <u>won't cook</u>.",
              "③ People <u>will working</u> with robots.",
              "④ Animals <u>will talk</u> with people.",
              "⑤ People <u>won't drive</u> cars."
            ],
            answer: 2,
            explanation: "will 뒤에는 동사원형이 와야 합니다. ③ will working → will work로 고쳐야 합니다.",
            audioKey: "quiz_b_8"
          }
        ]
      }
    ]
  }
];
