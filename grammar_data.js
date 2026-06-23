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
  },

  // ===== LESSON 3: 과거시제 & 명령문 =====
  {
    id: 3,
    title: "Grammar Potion Lab",
    subtitle: "과거시제 & 명령문",
    introLines: [
      "Welcome back, master apprentice! Time bends to your will.",
      "오늘은 시간을 되돌리고, 마법으로 명령을 내리는 두 가지 물약을 만듭니다.",
      "🧪 Potion of the Past (시간의 물약) — 과거시제의 비밀",
      "⚗️ Potion of Command (명령의 물약) — 명령문의 힘",
      "레시피를 배우고, 퀴즈를 풀어 물약을 완성하세요!"
    ],
    chapters: [
      // ===== CHAPTER 1: 과거시제 =====
      {
        id: 1,
        name: "Potion of the Past",
        nameKo: "시간의 물약",
        topic: "과거시제",
        potionColor: "#9370db",
        recipe: [
          {
            step: 1,
            title: "기본 개념",
            titleEn: "What is the Past Tense?",
            content: "과거시제는 <em>말하는 시점 이전에 일어난 일</em>을 나타냅니다. 과거의 특정 시점을 나타내는 부사(구)와 주로 쓰입니다. <strong>yesterday, last night, an hour ago, last week</strong> 등이 자주 함께 쓰입니다.",
            audioKey: "recipe_past_1"
          },
          {
            step: 2,
            title: "be동사의 과거형",
            titleEn: "Past Forms of Be",
            content: "<strong>①</strong> be동사의 과거형은 과거의 사실이나 상태를 나타내며 <strong>'~이었다/했다'</strong>, <strong>'~(에) 있었다'</strong>라는 뜻으로 쓰입니다. <em>am과 is의 과거형은 was</em>, <em>are의 과거형은 were</em>입니다.<br><br><strong>②</strong> be동사 과거형의 <strong>부정문</strong>은 현재형과 마찬가지로 be동사 뒤에 <strong>not</strong>을 붙여 만듭니다. <strong>'~이 아니었다'</strong>, <strong>'~(에) 없었다'</strong>의 뜻이 됩니다. <strong>was not은 wasn't</strong>, <strong>were not은 weren't</strong>로 축약하여 쓸 수 있습니다. <strong>의문문</strong>도 현재형과 마찬가지로 <strong>「Be동사+주어~?」</strong>로 쓰고 <strong>'~이었니?'</strong>, <strong>'~(에) 있었니?'</strong>라고 해석합니다.",
            table: {
              headers: ["주어", "현재형", "과거형", "축약 부정형"],
              rows: [
                ["I / He / She / It", "am / is", "was", "wasn't"],
                ["You / We / They", "are", "were", "weren't"]
              ]
            },
            examples: [
              { en: "I <u>was</u> sick yesterday.", ko: "나는 어제 아팠습니다.", highlight: "was" },
              { en: "They <u>were</u> at the park last night.", ko: "그들은 어젯밤에 공원에 있었습니다.", highlight: "were" },
              { en: "Mia <u>was not</u> at the party. = Mia <u>wasn't</u> at the party.", ko: "Mia는 파티에 없었습니다. (축약 가능)", highlight: "was not" },
              { en: "<u>Were</u> you late again?", ko: "당신은 또 늦었나요?", highlight: "Were" }
            ],
            audioKey: "recipe_past_2"
          },
          {
            step: 3,
            title: "일반동사의 과거형",
            titleEn: "Past Forms of General Verbs",
            content: "일반동사의 과거형은 과거의 <em>동작</em>이나 <em>상태</em>를 나타내며 <strong>'~했다'</strong>라는 뜻으로 쓰입니다.",
            examples: [
              { en: "He <u>called</u> me an hour ago.", ko: "그는 한 시간 전에 나에게 전화했습니다.", highlight: "called" },
              { en: "They <u>stayed</u> home last night.", ko: "그들은 어젯밤에 집에 머물렀습니다.", highlight: "stayed" }
            ],
            audioKey: "recipe_past_3"
          },
          {
            step: 4,
            title: "일반동사의 과거형 만드는 법",
            titleEn: "How to Form the Past Tense",
            content: "일반동사의 과거형은 네 가지 규칙으로 만듭니다.<br><br><strong>①</strong> 규칙동사는 끝에 <strong>'-ed'</strong>를 붙입니다. <em>e로 끝나는 동사</em>는 <strong>'d'</strong>를 붙입니다.<br><br><strong>②</strong> 규칙동사 중 <strong>「자음+y」</strong>로 끝나는 동사는 <em>y를 i로 바꾸고</em> <strong>'-ed'</strong>를 붙입니다. <strong>「모음+y」</strong>로 끝나는 동사는 그대로 <strong>'-ed'</strong>를 붙입니다.<br><br><strong>③</strong> 규칙동사 중 <strong>「단모음+단자음」</strong>으로 끝나는 동사는 <em>마지막 자음을 한 번 더 쓰고</em> <strong>'-ed'</strong>를 붙입니다.<br><br><strong>④</strong> <strong>불규칙 동사</strong>는 '-(e)d'를 붙이는 규칙을 따르지 않고 과거형을 쓰는 동사들입니다. 불규칙의 형태는 여러 가지 유형이 있습니다.",
            table: {
              headers: ["규칙", "변환", "예시"],
              rows: [
                ["① 대부분의 동사", "동사원형 + -ed (또는 -d)", "watch → watched, like → liked"],
                ["② 「자음+y」로 끝나는 동사", "y를 i로 바꾸고 -ed", "cry → cried, study → studied"],
                ["② 「모음+y」로 끝나는 동사", "그대로 -ed", "play → played, stay → stayed"],
                ["③ 「단모음+단자음」으로 끝나는 동사", "마지막 자음 한 번 더 + -ed", "plan → planned, stop → stopped"],
                ["④ 불규칙 동사", "규칙 없이 다양한 형태", "cut → cut, put → put, lose → lost, go → went, eat → ate"]
              ]
            },
            examples: [
              { en: "watch → <u>watched</u>", ko: "① 동사원형 + -ed", highlight: "watched" },
              { en: "cry → <u>cried</u>", ko: "② 자음+y → y를 i로 바꾸고 -ed", highlight: "cried" },
              { en: "plan → <u>planned</u>", ko: "③ 단모음+단자음 → 자음 한 번 더 + -ed", highlight: "planned" },
              { en: "cut → <u>cut</u>", ko: "④ 불규칙 (원형과 동일)", highlight: "cut" },
              { en: "put → <u>put</u>", ko: "④ 불규칙 (원형과 동일)", highlight: "put" },
              { en: "lose → <u>lost</u>", ko: "④ 불규칙 (lose → lost)", highlight: "lost" }
            ],
            audioKey: "recipe_past_4"
          },
          {
            step: 5,
            title: "일반동사 과거형의 부정문과 의문문",
            titleEn: "Negatives & Questions in the Past",
            content: "일반동사 과거형의 <strong>부정문</strong>은 <strong>「주어+didn't[did not]+동사원형」</strong>의 형태이고 <strong>'~하지 않았다'</strong>라는 뜻입니다. <strong>did not은 didn't</strong>로 줄여 쓸 수 있습니다. <strong>의문문</strong>은 <strong>「Did+주어+동사원형~?」</strong>의 형태이고 <strong>'~했니?'</strong>라는 뜻입니다. 부정문과 의문문에서는 동사가 반드시 <em>원형</em>으로 돌아갑니다.",
            pattern: {
              question: "Did + 주어 + 동사원형 ~?",
              yesAnswer: "Yes, 주어 + did.",
              noAnswer: "No, 주어 + didn't."
            },
            examples: [
              { en: "She <u>didn't clean</u> her room.", ko: "그녀는 방을 청소하지 않았습니다.", highlight: "didn't clean" },
              { en: "I <u>did not finish</u> my homework.", ko: "나는 숙제를 끝내지 않았습니다.", highlight: "did not finish" },
              { en: "A: <u>Did</u> you enjoy the TV show?", ko: "TV 쇼를 즐겼나요?", highlight: "Did" },
              { en: "B: Yes, I <u>did</u>. / No, I <u>didn't</u>.", ko: "네, 그랬어요. / 아니요, 그렇지 않았어요.", highlight: "did" }
            ],
            audioKey: "recipe_past_5"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "다음 빈칸에 들어갈 말이 나머지와 <em>다른</em> 하나는?",
            options: [
              "① I _____ very busy last week.",
              "② She _____ tired yesterday.",
              "③ He _____ at the concert last night.",
              "④ The weather _____ sunny yesterday.",
              "⑤ They _____ my classmates last year."
            ],
            answer: 4,
            explanation: "①~④의 주어는 단수(I·She·He·weather)이므로 was, ⑤의 주어 They는 복수이므로 were가 들어갑니다.",
            audioKey: "quiz_a_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말로 알맞지 <em>않은</em> 것은?",
            context: "Sarah _____ this morning / last Friday.",
            options: [
              "① was busy",
              "② stay at home",
              "③ ran in the park",
              "④ made spaghetti",
              "⑤ cleaned her room"
            ],
            answer: 1,
            explanation: "과거 시점(this morning, last Friday)이므로 과거형이 와야 합니다. ② stay at home은 현재형(원형)이므로 stayed at home으로 바꿔야 합니다.",
            audioKey: "quiz_a_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "밑줄 친 부분이 어법상 올바른 것은?",
            options: [
              "① She didn't <u>felt</u> good all day.",
              "② I <u>bought</u> a new bike last week.",
              "③ Did they <u>finished</u> their homework?",
              "④ He <u>sended</u> me an email last night.",
              "⑤ The dog <u>run</u> in the park this morning."
            ],
            answer: 1,
            explanation: "① didn't 뒤에는 원형 → feel ③ Did 뒤에는 원형 → finish ④ send의 과거형은 sent ⑤ this morning(과거) → ran. ② bought는 buy의 과거형으로 올바릅니다.",
            audioKey: "quiz_a_3"
          },
          {
            id: 4,
            type: "word_blocks",
            question: "괄호 안에서 알맞은 것을 골라 문장을 완성하시오.",
            subQuestions: [
              {
                prompt: "(1) ( Are / Were ) you at home yesterday?",
                sentence: "_____ you at home yesterday?",
                blocks: ["Are", "Were", "Did", "Was"],
                answer: ["Were"],
                explanation: "yesterday(과거) + 주어 you → 과거형 Were (you의 be동사 과거형은 were)"
              },
              {
                prompt: "(2) ( Do / Did ) you enjoy the TV show last night?",
                sentence: "_____ you enjoy the TV show last night?",
                blocks: ["Do", "Did", "Were", "Are"],
                answer: ["Did"],
                explanation: "last night(과거) + 일반동사 의문문 → Did"
              },
              {
                prompt: "(3) He ( wasn't / weren't ) a teacher 10 years ago.",
                sentence: "He _____ a teacher 10 years ago.",
                blocks: ["wasn't", "weren't", "didn't", "isn't"],
                answer: ["wasn't"],
                explanation: "He(3인칭 단수) + 과거 부정 → wasn't"
              },
              {
                prompt: "(4) The students ( was / were ) excited about the trip last week.",
                sentence: "The students _____ excited about the trip last week.",
                blocks: ["was", "were", "are", "did"],
                answer: ["were"],
                explanation: "The students(복수) + 과거 → were"
              }
            ],
            audioKey: "quiz_a_4"
          },
          {
            id: 5,
            type: "multiple_choice",
            question: "다음 중 빈칸에 yesterday를 쓸 수 <em>없는</em> 것은?",
            options: [
              "① Was it snowy in Seoul _____ ?",
              "② Did you take the train _____ ?",
              "③ The team wins the game _____ .",
              "④ She didn't meet her friends _____ .",
              "⑤ They watched a good movie _____ ."
            ],
            answer: 2,
            explanation: "yesterday는 과거를 나타내므로 과거시제와 함께 써야 합니다. ③ wins는 현재형이므로 yesterday와 함께 쓸 수 없습니다. (won으로 고쳐야 함)",
            audioKey: "quiz_a_5"
          },
          {
            id: 6,
            type: "word_blocks",
            question: "다음 문장에서 어법상 틀린 부분을 찾아 바르게 고쳐 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) We <u>eated</u> ice cream yesterday.",
                sentence: "eated → _____",
                blocks: ["ate", "eated", "eaten", "eat"],
                answer: ["ate"],
                explanation: "eat은 불규칙 동사 → 과거형 ate"
              },
              {
                prompt: "(2) The baby <u>cryed</u> loudly last night.",
                sentence: "cryed → _____",
                blocks: ["cried", "cryed", "cryied", "cry"],
                answer: ["cried"],
                explanation: "「자음+y」 → y를 i로 바꾸고 -ed → cried"
              },
              {
                prompt: "(3) He <u>putted</u> the boxes in the car a few minutes ago.",
                sentence: "putted → _____",
                blocks: ["put", "putted", "puted", "puts"],
                answer: ["put"],
                explanation: "put은 불규칙 동사 → 원형과 과거형 동일 → put"
              }
            ],
            audioKey: "quiz_a_6"
          },
          {
            id: 7,
            type: "multiple_choice",
            question: "다음 대화의 빈칸에 들어갈 말이 순서대로 바르게 짝지어진 것은?",
            context: "A: What _____ you do last weekend?\nB: I _____ camping with my family. It _____ fun.",
            options: [
              "① do – go – is",
              "② did – go – was",
              "③ were – went – is",
              "④ do – went – was",
              "⑤ did – went – was"
            ],
            answer: 4,
            explanation: "last weekend(과거) → 일반동사 의문문 Did. go의 과거형은 went. It은 단수 + 과거 → was. ⑤ did – went – was가 올바릅니다.",
            audioKey: "quiz_a_7"
          },
          {
            id: 8,
            type: "word_blocks",
            question: "빈칸에 알맞은 말을 <보기>에서 골라 어법상 올바른 형태로 바꿔 쓰시오.",
            context: "<보기>  come    lose    plan",
            subQuestions: [
              {
                prompt: "(1) She _____ to Korea last month.",
                sentence: "She _____ to Korea last month.",
                blocks: ["came", "comed", "come", "comes"],
                answer: ["came"],
                explanation: "come은 불규칙 동사 → 과거형 came"
              },
              {
                prompt: "(2) I _____ a surprise party for my friend yesterday.",
                sentence: "I _____ a surprise party for my friend yesterday.",
                blocks: ["planned", "planed", "plan", "plans"],
                answer: ["planned"],
                explanation: "「단모음+단자음」 → 자음 한 번 더 + -ed → planned"
              },
              {
                prompt: "(3) My brother _____ his phone last night.",
                sentence: "My brother _____ his phone last night.",
                blocks: ["lost", "losed", "lose", "loses"],
                answer: ["lost"],
                explanation: "lose는 불규칙 동사 → 과거형 lost"
              }
            ],
            audioKey: "quiz_a_8"
          }
        ]
      },

      // ===== CHAPTER 2: 명령문 =====
      {
        id: 2,
        name: "Potion of Command",
        nameKo: "명령의 물약",
        topic: "명령문",
        potionColor: "#ff8c00",
        recipe: [
          {
            step: 1,
            title: "기본 개념",
            titleEn: "What is an Imperative?",
            content: "명령문은 상대방에게 <em>명령, 지시, 금지</em>하는 말을 나타냅니다. 명령을 듣는 사람인 주어 <strong>You는 생략</strong>합니다.",
            examples: [
              { en: "<u>Be</u> quiet.", ko: "조용히 해라.", highlight: "Be" },
              { en: "<u>Come</u> to my room.", ko: "내 방으로 와라.", highlight: "Come" },
              { en: "<u>Don't eat</u> too fast.", ko: "너무 빨리 먹지 마라.", highlight: "Don't eat" }
            ],
            audioKey: "recipe_imp_1"
          },
          {
            step: 2,
            title: "긍정 명령문",
            titleEn: "Positive Imperatives",
            content: "문장의 맨 처음에 <strong>동사원형</strong>을 사용하여 나타내고, <strong>'~해라'</strong>의 뜻으로 쓰입니다. 명령문의 앞이나 끝에 <strong>please</strong>를 붙이면 좀 더 공손한 표현이 됩니다.",
            examples: [
              { en: "<u>Be</u> honest.", ko: "정직해라.", highlight: "Be" },
              { en: "<u>Wash</u> your hands.", ko: "손을 씻어라.", highlight: "Wash" },
              { en: "<u>Stay</u> here, please.", ko: "여기 머물러 주세요.", highlight: "Stay" }
            ],
            audioKey: "recipe_imp_2"
          },
          {
            step: 3,
            title: "부정 명령문",
            titleEn: "Negative Imperatives",
            content: "<strong>①</strong> 동사원형 앞에 <strong>Don't[Do not]</strong>를 붙입니다. <strong>'~하지 마라'</strong>의 뜻으로 쓰입니다.<br><br><strong>②</strong> 동사원형 앞에 Don't 대신 <strong>Never</strong>를 써서 부정 명령문을 만들 수 있습니다. <strong>Never는 Don't보다 더 강한 금지</strong>를 나타냅니다.",
            transform: [
              { before: "Don't go there.", after: "Never go there. (더 강한 금지)" },
              { before: "Don't be late again.", after: "Never be late again. (더 강한 금지)" }
            ],
            examples: [
              { en: "<u>Don't be</u> around the oven.", ko: "① 오븐 근처에 있지 마라.", highlight: "Don't be" },
              { en: "<u>Don't worry</u> about it.", ko: "① 그것에 대해 걱정하지 마라.", highlight: "Don't worry" },
              { en: "<u>Don't speak</u> loudly, please.", ko: "① 큰 소리로 말하지 말아 주세요.", highlight: "Don't speak" },
              { en: "<u>Don't go</u> there.", ko: "② 거기에 가지 마라.", highlight: "Don't go" },
              { en: "<u>Never go</u> there.", ko: "② 거기에 절대 가지 마라. (강한 금지)", highlight: "Never go" },
              { en: "<u>Don't be</u> late again.", ko: "② 다시는 늦지 마라.", highlight: "Don't be" },
              { en: "<u>Never be</u> late again.", ko: "② 다시는 절대 늦지 마라. (강한 금지)", highlight: "Never be" }
            ],
            audioKey: "recipe_imp_3"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "word_blocks",
            question: "괄호 안에서 알맞은 것을 골라 문장을 완성하시오.",
            subQuestions: [
              {
                prompt: "(1) ( Be / Do ) quiet.",
                sentence: "_____ quiet.",
                blocks: ["Be", "Do", "Don't", "Are"],
                answer: ["Be"],
                explanation: "형용사 quiet 앞 → be동사 명령문 → Be quiet."
              },
              {
                prompt: "(2) ( Never / Not ) touch the flowers.",
                sentence: "_____ touch the flowers.",
                blocks: ["Never", "Not", "No", "Don't be"],
                answer: ["Never"],
                explanation: "부정 명령문에서 Not 단독으로는 쓸 수 없음. Never는 강한 금지를 나타냅니다."
              },
              {
                prompt: "(3) ( Not / Don't ) use your phone in class.",
                sentence: "_____ use your phone in class.",
                blocks: ["Don't", "Not", "No", "Be not"],
                answer: ["Don't"],
                explanation: "부정 명령문 → 동사원형 앞에 Don't"
              }
            ],
            audioKey: "quiz_b_1"
          },
          {
            id: 2,
            type: "multi_select",
            question: "빈칸에 들어갈 수 있는 말을 <em>모두</em> 고르시오.",
            context: "_____ be scared.",
            contextHint: "(뒤 문장: Everything will be okay.)",
            options: [
              "① Not",
              "② Do",
              "③ Don't",
              "④ Does",
              "⑤ Never"
            ],
            answers: [2, 4],
            explanations: [
              "① Not 단독으로는 명령문을 만들 수 없음 (✗)",
              "② Do be ~ 는 \"정말로 ~해라\"라는 긍정 강조 명령문으로 영어에 존재하지만(\"Do be careful.\"), 뒤 문장 \"Everything will be okay.\"의 안심 맥락과 어울리지 않아 자연스러운 답으로 보지 않음. 출판사 정답지도 ③⑤만 인정 (△→✗)",
              "③ Don't be scared. → 부정 명령문 \"무서워하지 마\" (✓)",
              "④ Does는 3인칭 단수 일반동사 형태. 명령문은 동사원형으로 시작 (✗)",
              "⑤ Never be scared. → 강한 부정 명령문 \"절대 무서워하지 마\" (✓)"
            ],
            audioKey: "quiz_b_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "밑줄 친 부분이 어법상 올바른 것은?",
            options: [
              "① <u>Not be</u> nervous.",
              "② <u>Be never</u> worried.",
              "③ Please <u>be careful</u>.",
              "④ <u>Not run</u> in the classroom.",
              "⑤ <u>Don't be feed</u> the animals."
            ],
            answer: 2,
            explanation: "① Not be → Don't be ② Be never → Never be ④ Not run → Don't run ⑤ Don't be feed → Don't feed (be 불필요). ③ Please be careful이 올바릅니다.",
            audioKey: "quiz_b_3"
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말로 어법상 올바른 것은?",
            context: "_____ Everything will be okay.",
            options: [
              "① Don't afraid.",
              "② Never afraid.",
              "③ Be not afraid.",
              "④ Not be afraid.",
              "⑤ Don't be afraid."
            ],
            answer: 4,
            explanation: "afraid는 형용사이므로 be동사가 필요합니다. be동사 명령문의 부정형은 「Don't be + 형용사」 → ⑤ Don't be afraid.가 올바릅니다.",
            audioKey: "quiz_b_4"
          },
          {
            id: 5,
            type: "multiple_choice",
            question: "다음 중 어법상 <em>틀린</em> 것은?",
            options: [
              "① Do your best.",
              "② Always be honest.",
              "③ Have a seat, please.",
              "④ Don't never eat the cake.",
              "⑤ Please don't lock the door."
            ],
            answer: 3,
            explanation: "④ Don't와 never는 둘 다 부정이므로 이중부정입니다. Don't eat the cake. 또는 Never eat the cake.로 써야 합니다.",
            audioKey: "quiz_b_5"
          },
          {
            id: 6,
            type: "multiple_choice",
            question: "다음 어법상 틀린 문장을 바르게 고친 것은?",
            options: [
              "① Keeps your promise. → Keep your promise.",
              "② Please your eyes close. → Please closing your eyes.",
              "③ Don't be walk too fast. → Never don't walk too fast.",
              "④ Don't noisy in the library. → Not be noisy in the library.",
              "⑤ Writing your name, please. → Be writing your name, please."
            ],
            answer: 0,
            explanation: "명령문은 동사원형으로 시작합니다. ① Keeps → Keep으로 고친 것이 올바릅니다. 나머지는 모두 잘못된 수정입니다.",
            audioKey: "quiz_b_6"
          },
          {
            id: 7,
            type: "word_blocks",
            question: "다음 문장을 괄호 안의 지시대로 바꿀 때 빈칸에 알맞은 말을 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) You wash your hands often. (긍정 명령문)\n→ _____ _____ _____ often.",
                sentence: "_____ _____ _____ often.",
                blocks: ["Wash", "your", "hands", "You", "Don't", "Be"],
                answer: ["Wash", "your", "hands"],
                explanation: "긍정 명령문 → 주어 You 생략 + 동사원형으로 시작 → Wash your hands often."
              },
              {
                prompt: "(2) You don't take photos during the concert. (부정 명령문)\n→ _____ _____ _____ during the concert.",
                sentence: "_____ _____ _____ during the concert.",
                blocks: ["Don't", "take", "photos", "You", "Not", "be"],
                answer: ["Don't", "take", "photos"],
                explanation: "부정 명령문 → 주어 You 생략 + Don't + 동사원형 → Don't take photos during the concert."
              }
            ],
            audioKey: "quiz_b_7"
          },
          {
            id: 8,
            type: "word_blocks",
            question: "괄호 안에 주어진 말을 이용하여 학교생활에 대한 명령문을 완성하시오.",
            subQuestions: [
              {
                prompt: "(1) _____ _____ late for school. (be를 활용한 Don't 부정 명령문)",
                sentence: "_____ _____ late for school.",
                blocks: ["Don't", "be", "Aren't", "Do", "not", "Never"],
                answer: ["Don't", "be"],
                explanation: "지각하지 말 것 → 부정 명령문 + be동사 → Don't be late for school."
              },
              {
                prompt: "(2) _____ carefully to your teacher. (listen 활용)",
                sentence: "_____ carefully to your teacher.",
                blocks: ["Listen", "Listens", "Listening", "Don't listen"],
                answer: ["Listen"],
                explanation: "긍정 명령문 → 동사원형으로 시작 → Listen carefully to your teacher."
              },
              {
                prompt: "(3) _____ _____ during class. (talk을 활용한 Don't 부정 명령문)",
                sentence: "_____ _____ during class.",
                blocks: ["Don't", "talk", "Be", "Doesn't", "not", "Aren't"],
                answer: ["Don't", "talk"],
                explanation: "수업 중에는 말하지 말 것 → 부정 명령문 → Don't talk during class."
              },
              {
                prompt: "(4) _____ _____ your homework. (forget을 활용한 Don't 부정 명령문)",
                sentence: "_____ _____ your homework.",
                blocks: ["Don't", "forget", "Be", "Aren't", "Doesn't", "not"],
                answer: ["Don't", "forget"],
                explanation: "숙제를 잊지 말 것 → 부정 명령문 → Don't forget your homework."
              }
            ],
            audioKey: "quiz_b_8"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Grammar Potion Lab",
    subtitle: "동명사 & be going to",
    introLines: [
      "Welcome back, grand apprentice! Today we bend grammar to your will.",
      "오늘은 동사를 명사로 바꾸고, 미래를 미리 그려 보는 두 가지 물약을 만듭니다.",
      "🧪 Potion of Naming (이름의 물약) — 동명사의 비밀",
      "⚗️ Potion of Future (미래의 물약) — be going to의 힘",
      "레시피를 배우고, 퀴즈를 풀어 물약을 완성하세요!"
    ],
    chapters: [
      // ===== CHAPTER 1: 동명사 =====
      {
        id: 1,
        name: "Potion of Naming",
        nameKo: "이름의 물약",
        topic: "동명사",
        potionColor: "#5db8a1",
        recipe: [
          {
            // Section 1) 기본 개념
            step: 1,
            title: "기본 개념",
            titleEn: "What is a Gerund?",
            content: "동명사는 <strong>「동사원형 + -ing」</strong>의 형태로 문장에서 <em>명사의 역할</em>을 합니다. 해석은 <strong>'~하는 것'</strong>, <strong>'~하기'</strong>와 같이 합니다.",
            examples: [
              { en: "<u>Walking</u> is good for health.", ko: "걷는 것은 건강에 좋습니다.", highlight: "Walking" },
              { en: "She enjoys <u>reading</u> books.", ko: "그녀는 책 읽기를 즐깁니다.", highlight: "reading" },
              { en: "My hobby is <u>cooking</u>.", ko: "제 취미는 요리하는 것입니다.", highlight: "cooking" }
            ],
            audioKey: "recipe_ger_1"
          },
          {
            // Section 2) 주어로 쓰이는 동명사
            step: 2,
            title: "주어로 쓰이는 동명사",
            titleEn: "Gerund as a Subject",
            content: "동명사는 문장에서 <strong>주어</strong>로 사용될 수 있습니다. 동명사가 문장의 주어 역할을 할 때는 <em>단수 취급</em>합니다.",
            examples: [
              { en: "<u>Making</u> friends is not easy.", ko: "친구를 사귀는 것은 쉽지 않습니다.", highlight: "Making" },
              { en: "<u>Cleaning</u> the house takes a lot of time.", ko: "집 청소는 많은 시간이 걸립니다.", highlight: "Cleaning" },
              { en: "<u>Learning</u> a new language can be interesting.", ko: "새로운 언어를 배우는 것은 흥미로울 수 있습니다.", highlight: "Learning" },
              { en: "<u>Eating</u> healthy food is important for health.", ko: "건강한 음식을 먹는 것은 건강에 중요합니다.", highlight: "Eating" }
            ],
            audioKey: "recipe_ger_2"
          },
          {
            // Section 3) 목적어로 쓰이는 동명사
            step: 3,
            title: "목적어로 쓰이는 동명사",
            titleEn: "Gerund as an Object",
            content: "동명사는 <strong>동사나 전치사의 목적어</strong>로 사용될 수 있습니다. 동사의 목적어로 쓰이는 경우 다른 목적어와 마찬가지로 <strong>'~을(를)'</strong>로 주로 해석합니다. 동명사만을 목적어로 취하는 동사에는 <strong>enjoy, finish, keep</strong> 등이 있습니다.",
            examples: [
              { en: "He enjoys <u>playing</u> video games.", ko: "그는 비디오 게임을 하는 것을 즐깁니다.", highlight: "playing" },
              { en: "We finished <u>cleaning</u> the room.", ko: "우리는 방을 청소하는 것을 마쳤습니다.", highlight: "cleaning" },
              { en: "Kate is interested in <u>learning</u> Spanish.", ko: "Kate는 스페인어를 배우는 것에 관심이 있습니다.", highlight: "learning" }
            ],
            audioKey: "recipe_ger_3"
          },
          {
            // Section 4) 보어로 쓰이는 동명사
            step: 4,
            title: "보어로 쓰이는 동명사",
            titleEn: "Gerund as a Complement",
            content: "보어란 <em>주어나 목적어의 의미를 보충해주는 문장 요소</em>입니다. 동명사는 <strong>주어의 의미를 보충해주는 보어</strong>의 역할을 하기도 합니다.",
            examples: [
              { en: "My hobby is <u>taking</u> pictures.", ko: "저의 취미는 사진을 찍는 것입니다.", highlight: "taking" },
              { en: "His favorite activity is <u>doing</u> science experiments.", ko: "그가 가장 좋아하는 활동은 과학 실험하는 것입니다.", highlight: "doing" },
              { en: "The best part of my day is <u>talking</u> with my friends.", ko: "제 하루에서 가장 좋아하는 시간은 친구들과 이야기하는 것입니다.", highlight: "talking" }
            ],
            audioKey: "recipe_ger_4"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "밑줄 친 listen을 어법에 맞게 고친 것은?",
            context: "Does she enjoy <u>listen</u> to K-pop?",
            options: [
              "① listen",
              "② listens",
              "③ to listen",
              "④ listening",
              "⑤ be listening"
            ],
            answer: 3,
            explanation: "enjoy는 동명사만을 목적어로 취하는 동사입니다. 따라서 listen → listening.",
            audioKey: "quiz_a_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말이 순서대로 바르게 짝지어진 것은?",
            context: "· I finished _____ my homework.\n· _____ photos is a good hobby.",
            options: [
              "① do – Take",
              "② do – Taking",
              "③ doing – Take",
              "④ doing – Taking",
              "⑤ to do – To take"
            ],
            answer: 3,
            explanation: "finish는 동명사만을 목적어로 취하므로 첫 빈칸은 doing(⑤ to do는 부적절). 두 번째 빈칸은 주어 자리이므로 동명사 Taking(or To take도 가능하지만, ⑤가 첫 빈칸에서 이미 어법상 틀리므로 정답은 ④ doing – Taking).",
            audioKey: "quiz_a_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "밑줄 친 부분의 쓰임이 다음과 <em>다른</em> 것은?",
            context: "We finished <u>solving</u> the math problems.",
            contextHint: "(solving = 동명사, 목적어)",
            options: [
              "① I love <u>watching</u> movies.",
              "② My hobby is <u>drawing</u> cartoons.",
              "③ How about <u>joining</u> a book club?",
              "④ Are you good at <u>speaking</u> English?",
              "⑤ She is <u>walking</u> to school with her friends."
            ],
            answer: 4,
            explanation: "보기와 ①②③④의 밑줄 친 말은 모두 동명사입니다. ⑤ walking은 「be동사 + -ing」 형태의 현재진행형으로 쓰인 현재분사이므로 쓰임이 다릅니다.",
            audioKey: "quiz_a_3"
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "다음 중 어법상 <em>어색한</em> 문장은?",
            options: [
              "① I finished washing the dishes.",
              "② The children stopped running.",
              "③ Do you like visiting museums?",
              "④ Exercising improves your health.",
              "⑤ Eating vegetables are a good habit."
            ],
            answer: 4,
            explanation: "⑤ Eating vegetables(동명사 주어)는 단수 취급하므로 are → is. 동명사 주어는 항상 단수 취급합니다.",
            audioKey: "quiz_a_4"
          },
          {
            id: 5,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말로 알맞지 <em>않은</em> 것은?",
            context: "We _____ playing basketball.",
            options: [
              "① like",
              "② love",
              "③ want",
              "④ enjoy",
              "⑤ are good at"
            ],
            answer: 2,
            explanation: "like, love, enjoy는 동명사를 목적어로 취할 수 있고, are good at은 전치사 at 뒤에 동명사가 옵니다. ③ want는 to부정사만 목적어로 취하므로 동명사 playing과 함께 쓸 수 없습니다. (want to play로 써야 함)",
            audioKey: "quiz_a_5"
          },
          {
            id: 6,
            type: "word_blocks",
            question: "다음 문장에서 어법상 어색한 부분을 찾아 바르게 고쳐 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) Play outside is fun.",
                sentence: "Play → _____",
                blocks: ["Playing", "Plays", "To plays", "Played"],
                answer: ["Playing"],
                explanation: "Play는 동사원형이라 주어가 될 수 없습니다. 문장의 주어 자리이므로 동명사 Playing으로 바꿔야 합니다."
              },
              {
                prompt: "(2) Thank you for <u>help</u> us.",
                sentence: "help → _____",
                blocks: ["helping", "helps", "to help", "helped"],
                answer: ["helping"],
                explanation: "전치사 for 뒤에는 동명사가 옵니다. help → helping."
              },
              {
                prompt: "(3) Did you finish <u>to clean</u> your room?",
                sentence: "to clean → _____",
                blocks: ["cleaning", "cleans", "cleaned", "clean"],
                answer: ["cleaning"],
                explanation: "finish는 동명사만을 목적어로 취합니다. to clean → cleaning."
              }
            ],
            audioKey: "quiz_a_6"
          },
          {
            id: 7,
            type: "word_blocks",
            question: "빈칸에 알맞은 말을 <보기>에서 골라 어법상 올바른 형태로 바꿔 쓰시오.",
            subQuestions: [
              {
                prompt: "<보기> cook   go   have\n(1) _____ is fun and easy for me.",
                sentence: "_____ is fun and easy for me.",
                blocks: ["Cooking", "Going", "Having", "Cooks"],
                answer: ["Cooking"],
                explanation: "주어 자리 + '재미있고 쉽다'는 의미 → 동명사 Cooking. (대문자로 시작)"
              },
              {
                prompt: "(2) My parents are interested in _____ a pet.",
                sentence: "My parents are interested in _____ a pet.",
                blocks: ["having", "cooking", "going", "have"],
                answer: ["having"],
                explanation: "전치사 in 뒤에는 동명사. 'a pet을 키우는 것' → having."
              },
              {
                prompt: "(3) Did you enjoy _____ camping last weekend?",
                sentence: "Did you enjoy _____ camping last weekend?",
                blocks: ["going", "having", "cooking", "go"],
                answer: ["going"],
                explanation: "enjoy는 동명사를 목적어로 취합니다. 'go camping(캠핑 가다)' → going."
              }
            ],
            audioKey: "quiz_a_7"
          },
          {
            id: 8,
            type: "multiple_choice",
            question: "다음 대화의 밑줄 친 ①~⑤ 중 쓰임이 나머지와 <em>다른</em> 하나는?",
            context: "Emma: Hi, what do you like <u>①doing</u> in your free time?\nJack: I love <u>②playing</u> soccer. It's really <u>③exciting</u>. What about you?\nEmma: I enjoy <u>④baking</u> cookies. I'm also interested in <u>⑤reading</u> webtoons. They're fun.\nJack: That sounds great.",
            options: [
              "① doing",
              "② playing",
              "③ exciting",
              "④ baking",
              "⑤ reading"
            ],
            answer: 2,
            explanation: "③ exciting은 '신나는, 흥미진진한'의 의미로 보어 자리에 쓰인 <em>형용사</em>입니다. 나머지 ①②④⑤는 모두 동사·전치사의 목적어로 쓰인 동명사이므로 ③의 쓰임이 다릅니다.",
            audioKey: "quiz_a_8"
          }
        ]
      },

      // ===== CHAPTER 2: be going to =====
      {
        id: 2,
        name: "Potion of Future",
        nameKo: "미래의 물약",
        topic: "be going to",
        potionColor: "#f39c12",
        recipe: [
          {
            // Section 1) 기본 개념
            step: 1,
            title: "기본 개념",
            titleEn: "What is 'be going to'?",
            content: "<strong>be going to</strong>는 <em>가까운 미래의 계획이나 예정</em>을 나타낼 때 사용하며 <strong>'~할 것이다'</strong>, <strong>'~할 예정이다'</strong>라고 해석합니다. 주로 미래의 시점을 나타내는 표현과 함께 쓰이고, <strong>be going to 뒤에는 동사원형</strong>을 씁니다.",
            examples: [
              { en: "I <u>am going to visit</u> Busan next week.", ko: "나는 다음 주에 부산을 방문할 것입니다.", highlight: "am going to visit" },
              { en: "Jin <u>is going to play</u> soccer this weekend.", ko: "Jin은 이번 주말에 축구를 할 예정입니다.", highlight: "is going to play" },
              { en: "I <u>was going to play</u> soccer, but it started raining.", ko: "나는 축구를 하려고 했지만, 비가 오기 시작했습니다.", highlight: "was going to play" }
            ],
            audioKey: "recipe_bgt_1"
          },
          {
            // Section 2) be going to 부정문
            step: 2,
            title: "be going to 부정문",
            titleEn: "Negative Sentences",
            content: "<strong>be동사 뒤에 not</strong>을 붙인 형태로, <strong>'~하지 않을 것이다'</strong>라는 뜻입니다. <em>be와 not은 줄여 쓸 수 있습니다.</em>",
            transform: [
              { before: "is not going to", after: "isn't going to" },
              { before: "are not going to", after: "aren't going to" }
            ],
            examples: [
              { en: "He <u>is not going to</u> go to the museum.", ko: "그는 박물관에 가지 않을 것입니다.", highlight: "is not going to" },
              { en: "= He <u>isn't going to</u> go to the museum.", ko: "(축약형)", highlight: "isn't going to" },
              { en: "They <u>are not going to</u> leave tonight.", ko: "그들은 오늘 밤 떠나지 않을 것입니다.", highlight: "are not going to" },
              { en: "= They <u>aren't going to</u> leave tonight.", ko: "(축약형)", highlight: "aren't going to" }
            ],
            audioKey: "recipe_bgt_2"
          },
          {
            // Section 3) be going to 의문문
            step: 3,
            title: "be going to 의문문",
            titleEn: "Questions with 'be going to'",
            content: "<strong>「Be동사 + 주어 + going to ~?」</strong>의 형태로 씁니다. 대답은 <em>be동사 의문문의 대답</em>과 같습니다.",
            pattern: {
              question: "Be동사 + 주어 + going to + 동사원형 ~?",
              yesAnswer: "Yes, 주어 + be동사.",
              noAnswer: "No, 주어 + be동사 + not."
            },
            examples: [
              { en: "A: <u>Are</u> you <u>going to</u> buy a shirt?", ko: "셔츠를 구매할 건가요?", highlight: "Are ~ going to" },
              { en: "B: Yes, I am. / No, I'm not.", ko: "네, 그래요. / 아니요, 그렇지 않아요.", highlight: "Yes, I am" },
              { en: "A: <u>Is</u> he <u>going to</u> run a marathon?", ko: "그는 마라톤을 뛸 예정인가요?", highlight: "Is ~ going to" },
              { en: "B: Yes, he is. / No, he isn't.", ko: "네, 그래요. / 아니요, 그렇지 않아요.", highlight: "Yes, he is" }
            ],
            audioKey: "recipe_bgt_3"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말로 알맞지 <em>않은</em> 것은?",
            context: "I'm going to play basketball _____.",
            options: [
              "① today",
              "② yesterday",
              "③ tomorrow",
              "④ after school",
              "⑤ next Sunday"
            ],
            answer: 1,
            explanation: "be going to는 미래의 계획·예정을 나타내므로 미래 또는 현재 시점의 표현과 어울립니다. ② yesterday(어제)는 과거를 나타내므로 함께 쓸 수 없습니다.",
            audioKey: "quiz_b_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "다음 중 어법상 올바른 문장은?",
            options: [
              "① They are going to late.",
              "② Is it going to rain tomorrow?",
              "③ Are you going to having dinner?",
              "④ The train are going to leave soon.",
              "⑤ She is going not to wear a coat today."
            ],
            answer: 1,
            explanation: "① late는 형용사 → going to be late. ③ going to 뒤에는 동사원형 → going to have. ④ The train(단수) → is going to. ⑤ 부정문은 be동사 뒤에 not → is not going to. ②는 「Be + 주어 + going to + 동사원형」의 올바른 의문문입니다.",
            audioKey: "quiz_b_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "다음 질문에 대한 응답으로 알맞지 <em>않은</em> 것은?",
            context: "What are you going to do this weekend?",
            options: [
              "① I'm cleaning my room now.",
              "② I'm going to visit my uncle.",
              "③ I'm going to watch a movie.",
              "④ I'm going to go shopping for jeans.",
              "⑤ I'm going to bake cookies for my family."
            ],
            answer: 0,
            explanation: "이번 주말 계획을 묻고 있으므로 미래 계획으로 답해야 합니다. ① 'I'm cleaning my room now.'는 현재진행형으로 지금 일어나는 일이므로 응답으로 알맞지 않습니다. ②~⑤는 모두 be going to로 미래 계획을 말하고 있습니다.",
            audioKey: "quiz_b_3"
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "밑줄 친 부분의 쓰임이 나머지와 <em>다른</em> 하나는?",
            options: [
              "① She <u>is going to</u> be here soon.",
              "② Are you <u>going to</u> school now?",
              "③ He <u>is</u> not <u>going to</u> study for the exam today.",
              "④ I'm <u>going to</u> make a poster for my science homework.",
              "⑤ We're <u>going to</u> go to the new ice cream shop this afternoon."
            ],
            answer: 1,
            explanation: "①③④⑤의 going to는 미래 계획을 나타내는 <strong>be going to</strong> 표현입니다. ② going to school은 '학교에 가는 중'이라는 뜻으로 현재진행형(<em>go to</em>의 진행형)입니다. 뒤에 동사원형이 아닌 명사(school)가 와서 쓰임이 다릅니다.",
            audioKey: "quiz_b_4"
          },
          {
            id: 5,
            type: "multiple_choice",
            question: "대화의 빈칸에 들어갈 말로 알맞은 것은?",
            context: "A: Are you going to go out this evening?\nB: _____ I'm going to watch a movie at home.",
            options: [
              "① Yes, of course.",
              "② Yes, I am.",
              "③ No, I don't.",
              "④ No, I'm not.",
              "⑤ That's a good idea."
            ],
            answer: 3,
            explanation: "뒤에 'I'm going to watch a movie at home(집에서 영화를 볼 거다)'이라고 했으므로 외출하지 않을 것입니다. Are you ~?에 대한 부정 대답은 'No, I'm not.'입니다.",
            audioKey: "quiz_b_5"
          },
          {
            id: 6,
            type: "word_blocks",
            question: "괄호 안의 우리말과 같도록 빈칸에 알맞은 말을 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) Mom is going _____ a new phone.\n(엄마는 새 휴대폰을 사실 거야.)",
                // 워크시트 원본은 두 개정판 오버레이로 '전화기를휴대폰을'이 겹쳐 있음 — 후본인 '휴대폰'으로 정리
                sentence: "Mom is going _____ a new phone.",
                blocks: ["to buy", "buying", "buy", "to buys"],
                answer: ["to buy"],
                explanation: "be going to + 동사원형 → to buy (사다)."
              },
              {
                prompt: "(2) My family is _____ go on a trip to Japan.\n(우리 가족은 일본으로 여행을 갈 거야.)",
                sentence: "My family is _____ go on a trip to Japan.",
                blocks: ["going to", "going", "go to", "to go"],
                answer: ["going to"],
                explanation: "is + going to + 동사원형(go) 패턴 → 빈칸에는 going to."
              },
              {
                prompt: "(3) Jiho and his brother _____ to play baseball together.\n(지호와 동생은 함께 야구를 할 거야.)",
                sentence: "Jiho and his brother _____ to play baseball together.",
                blocks: ["are going", "is going", "going", "be going"],
                answer: ["are going"],
                explanation: "주어 Jiho and his brother(복수) → are. are going + to + 동사원형(play)."
              }
            ],
            audioKey: "quiz_b_6"
          },
          {
            id: 7,
            type: "multiple_choice",
            question: "어법상 빈칸에 들어갈 말로 알맞은 것은?",
            context: "_____ next week.",
            contextHint: "(next week는 미래를 나타냄)",
            options: [
              "① I went to the library",
              "② We finished the report",
              "③ He enjoys running a marathon",
              "④ They have a good time at the party",
              "⑤ She is going to move to another city"
            ],
            answer: 4,
            explanation: "next week(미래)와 어울리려면 미래시제가 필요합니다. ① went(과거), ② finished(과거), ③ enjoys(현재), ④ have(현재) 모두 부적절. ⑤ is going to move는 미래 계획을 나타내므로 알맞습니다.",
            audioKey: "quiz_b_7"
          },
          {
            id: 8,
            type: "word_blocks",
            question: "밑줄 친 ①~⑤ 중 어법상 어색한 문장을 찾아 바르게 고쳐 쓰시오.",
            context: "This weekend, ① I'm going to have a lot of fun. On Saturday, ② I'm going to visit an amusement park with my family. ③ We're going to ride the roller coaster. On Sunday, ④ I'm going to play computer games. ⑤ It's going to a great weekend!",
            subQuestions: [
              {
                prompt: "어색한 문장을 고른 뒤, ⑤의 going to 다음에 들어갈 알맞은 말을 고르시오.",
                sentence: "⑤ It's going to _____ a great weekend!",
                blocks: ["be", "is", "being", "have"],
                answer: ["be"],
                explanation: "⑤ It's going to a great weekend!는 be going to 뒤에 동사원형이 빠진 형태입니다. 'a great weekend'는 명사이므로 앞에 동사 be가 필요합니다. → It's going to <strong>be</strong> a great weekend!"
              }
            ],
            audioKey: "quiz_b_8"
          }
        ]
      }
    ]
  },

  // ===== LESSON 5: 비교급과 최상급 & There is/are =====
  {
    id: 5,
    title: "Grammar Potion Lab",
    subtitle: "비교급과 최상급 & There is/are",
    introLines: [
      "Welcome back, master apprentice! Two grand potions await you today.",
      "오늘은 사물을 견주어 보는 물약과, 무언가가 '있다'를 밝히는 물약을 만듭니다.",
      "🧪 Potion of Comparison (비교의 물약) — 비교급과 최상급의 비밀",
      "⚗️ Potion of Presence (존재의 물약) — There is/are의 힘",
      "레시피를 배우고, 퀴즈를 풀어 물약을 완성하세요!"
    ],
    chapters: [
      // ===== CHAPTER 1: 비교급과 최상급 =====
      {
        id: 1,
        name: "Potion of Comparison",
        nameKo: "비교의 물약",
        topic: "비교급과 최상급",
        potionColor: "#4fa3c7",
        recipe: [
          {
            // Section 1) 비교급
            step: 1,
            title: "비교급",
            titleEn: "Comparatives",
            content: "<strong>비교급</strong>은 서로 다른 <em>두 대상</em>의 공통된 특징을 비교할 때 쓰며, 뒤에 <strong>than</strong>을 붙여 <strong>'~보다 더 ...한/하게'</strong>로 해석합니다.<br><br><strong>① 기본:</strong> 형용사·부사 뒤에 <strong>-er</strong>을 붙입니다.<br><strong>② 3음절 이상:</strong> 앞에 <strong>more</strong>를 씁니다.<br><strong>③ 불규칙:</strong> good → better, bad → worse",
            examples: [
              { en: "Summer is <u>warmer than</u> winter.", ko: "여름은 겨울보다 더 따뜻합니다.", highlight: "warmer than" },
              { en: "This book is <u>more interesting than</u> that one.", ko: "이 책은 저 책보다 더 흥미롭습니다.", highlight: "more interesting than" },
              { en: "Leo runs <u>faster than</u> Sam.", ko: "Leo는 Sam보다 더 빨리 달립니다.", highlight: "faster than" },
              { en: "① Bikes are <u>cheaper</u> than cars.", ko: "자전거는 자동차보다 더 쌉니다.", highlight: "cheaper" },
              { en: "① Ted is <u>younger</u> than Olivia.", ko: "Ted는 Olivia보다 더 어립니다.", highlight: "younger" },
              { en: "① I will arrive <u>earlier</u> than you.", ko: "나는 당신보다 더 일찍 도착할 겁니다.", highlight: "earlier" },
              { en: "② You are <u>more beautiful</u> than the picture.", ko: "당신은 사진보다 (실물이) 더 아름답습니다.", highlight: "more beautiful" },
              { en: "② Health is <u>more important</u> than wealth.", ko: "건강은 부보다 더 중요합니다.", highlight: "more important" },
              { en: "③ Eating fruits is <u>better</u> than eating candies.", ko: "과일을 먹는 것이 사탕을 먹는 것보다 더 낫습니다.", highlight: "better" },
              { en: "③ The food here is <u>worse</u> than the service.", ko: "이곳의 음식은 서비스보다 나쁩니다.", highlight: "worse" }
            ],
            audioKey: "recipe_cmp_1"
          },
          {
            // Section 2) 최상급
            step: 2,
            title: "최상급",
            titleEn: "Superlatives",
            content: "<strong>최상급</strong>은 여러 대상 중 정도가 <em>가장 높은</em> 것을 나타내며 <strong>'가장 ~한/하게'</strong>로 해석합니다. 「<strong>the + 형용사·부사 + -est</strong>」 형태로 쓰고, 뒤에 주로 <strong>in</strong>+장소·범위 또는 <strong>of</strong>+비교 대상을 붙입니다.<br><br><strong>① 기본:</strong> the + <strong>-est</strong><br><strong>② 3음절 이상:</strong> <strong>the most</strong><br><strong>③ 불규칙:</strong> good → best, bad → worst",
            examples: [
              { en: "Mark is <u>the tallest</u> student in his class.", ko: "Mark는 그의 반에서 가장 키가 큽니다.", highlight: "the tallest" },
              { en: "Mt. Everest is <u>the highest</u> in the world.", ko: "에베레스트산은 세계에서 가장 높습니다.", highlight: "the highest" },
              { en: "I like this shirt <u>the most</u>.", ko: "나는 이 셔츠가 가장 좋습니다.", highlight: "the most" },
              { en: "① Jim is <u>the strongest</u> in the town.", ko: "Jim은 마을에서 가장 힘이 셉니다.", highlight: "the strongest" },
              { en: "① She is <u>the smartest</u> of all.", ko: "그녀는 모두 중 가장 똑똑합니다.", highlight: "the smartest" },
              { en: "② Health is <u>the most important</u>.", ko: "건강이 가장 중요합니다.", highlight: "the most important" },
              { en: "② The red dress is <u>the most expensive</u> of all.", ko: "그 빨간 드레스는 모든 것 중에서 가장 비쌉니다.", highlight: "the most expensive" },
              { en: "③ Love is <u>the best</u>.", ko: "사랑이 최고입니다.", highlight: "the best" },
              { en: "③ The weather was <u>the worst</u> in the morning.", ko: "아침에는 날씨가 최악이었습니다.", highlight: "the worst" }
            ],
            audioKey: "recipe_cmp_2"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말로 알맞은 것은?",
            context: "My backpack is ________ than your backpack.",
            options: [
              "① heavy",
              "② heavier",
              "③ heavyer",
              "④ the heavy",
              "⑤ the heavier"
            ],
            answer: 1,
            explanation: "than이 있으므로 비교급이 필요합니다. heavy는 「자음+y」로 끝나므로 y를 i로 바꾸고 -er을 붙여 heavier가 됩니다. (heavyer는 틀린 철자, the heavier는 최상급 형태로 부적절)",
            audioKey: "quiz_a_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "빈칸에 공통으로 알맞은 것은?",
            context: "∙ My new phone is ________ than my old one.\n∙ She sings ________ than her sister.",
            options: [
              "① well",
              "② good",
              "③ best",
              "④ better",
              "⑤ more good"
            ],
            answer: 3,
            explanation: "두 빈칸 모두 than이 있어 비교급이 필요합니다. good(좋은)과 well(잘)의 비교급은 모두 불규칙형 better입니다. (more good은 틀린 형태)",
            audioKey: "quiz_a_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "대화의 빈칸에 들어갈 말로 어법상 가장 알맞은 것은?",
            context: "A: Is Minsu taller than you?\nB: Yes, he is. ________",
            options: [
              "① He is tallest student of my class.",
              "② He is the tallest student in my class.",
              "③ He is the best tall student of my class.",
              "④ He is the very tallest student of my class.",
              "⑤ He is the most tallest student in my class."
            ],
            answer: 1,
            explanation: "최상급에는 앞에 the를 붙이고, 반·범위를 나타낼 때는 in을 씁니다. ① the 없음, ③ best tall(어색), ④ very + 최상급(불가), ⑤ most + tallest(중복) 모두 틀립니다. → the tallest student in my class.",
            audioKey: "quiz_a_3"
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "다음 중 비교급이 올바르게 사용된 문장은?",
            options: [
              "① She looks the more tired today.",
              "② The air was more bad than last week.",
              "③ Math is the harder than English for me.",
              "④ This question is more easy than that one.",
              "⑤ John speaks louder than his brother."
            ],
            answer: 4,
            explanation: "⑤ loud의 비교급 louder + than으로 올바릅니다. ① the more tired(비교급에 the 불필요), ② more bad → worse, ③ the harder(비교급에 the 불필요), ④ more easy → easier 로 고쳐야 합니다.",
            audioKey: "quiz_a_4"
          },
          {
            id: 5,
            type: "multiple_choice",
            question: "다음 중 최상급이 올바르게 사용된 문장은?",
            options: [
              "① That movie is the best of the year.",
              "② They arrived the most earliest of all.",
              "③ This is the more largest building in the city.",
              "④ This book is the more interesting of the two.",
              "⑤ Her dress was the beautifulest one at the party."
            ],
            answer: 0,
            explanation: "① good의 불규칙 최상급 the best + of로 올바릅니다. ② most + earliest(중복), ③ more + largest(중복), ④ the more interesting(최상급 자리에 비교급), ⑤ beautifulest → the most beautiful 로 고쳐야 합니다.",
            audioKey: "quiz_a_5"
          },
          {
            id: 6,
            type: "word_blocks",
            question: "다음 문장의 밑줄 친 부분을 바르게 고쳐 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) He runs <u>the fastest</u> than the other players.",
                sentence: "the fastest → _____",
                blocks: ["faster", "fastest", "more fast", "the faster"],
                answer: ["faster"],
                explanation: "than이 있으므로 최상급(the fastest)이 아니라 비교급이 와야 합니다. fast의 비교급은 faster입니다."
              },
              {
                prompt: "(2) This restaurant is <u>the more expensive</u> in town.",
                sentence: "the more expensive → _____",
                blocks: ["the most expensive", "more expensive", "the expensive", "expensiver"],
                answer: ["the most expensive"],
                explanation: "in town(범위)이 있으므로 최상급이 와야 합니다. expensive는 3음절 이상이므로 the most expensive입니다."
              },
              {
                prompt: "(3) My dog is <u>more smarter</u> than my friend's dog.",
                sentence: "more smarter → _____",
                blocks: ["smarter", "more smart", "the smartest", "smartest"],
                answer: ["smarter"],
                explanation: "more와 -er을 함께 쓰면 비교급 중복입니다. smart는 -er만 붙여 smarter로 씁니다."
              }
            ],
            audioKey: "quiz_a_6"
          },
          {
            id: 7,
            type: "word_blocks",
            question: "괄호 안에 주어진 말의 알맞은 형태를 빈칸에 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) I got _____ score in my class. (high)",
                sentence: "I got _____ score in my class. (high)",
                blocks: ["the highest", "higher", "highest", "more high"],
                answer: ["the highest"],
                explanation: "in my class(범위) + '가장 높은' → 최상급. high는 the highest입니다."
              },
              {
                prompt: "(2) This puzzle is _____ than the last one. (difficult)",
                sentence: "This puzzle is _____ than the last one. (difficult)",
                blocks: ["more difficult", "difficulter", "the most difficult", "difficult"],
                answer: ["more difficult"],
                explanation: "than이 있으므로 비교급. difficult는 3음절 이상이므로 more difficult입니다."
              },
              {
                prompt: "(3) The weather today is _____ than yesterday. (bad)",
                sentence: "The weather today is _____ than yesterday. (bad)",
                blocks: ["worse", "badder", "worst", "more bad"],
                answer: ["worse"],
                explanation: "than이 있으므로 비교급. bad의 불규칙 비교급은 worse입니다."
              }
            ],
            audioKey: "quiz_a_7"
          },
          {
            id: 8,
            type: "multiple_choice",
            question: "다음 우리말을 영어로 바르게 옮긴 것은?",
            context: "파란색 상자가 셋 중 제일 크다.",
            options: [
              "① The blue box is the biggest in the three.",
              "② The blue box is the biggest of the three.",
              "③ The blue box is the most big in the tree.",
              "④ The blue box is the most biggest of the three.",
              "⑤ The blue box is the very biggest of the three."
            ],
            answer: 1,
            explanation: "최상급 the biggest + 「of+복수 비교 대상」을 씁니다. ① in the three(of여야 함), ③ most big(big은 -est) + tree(오타), ④ most + biggest(중복), ⑤ very + 최상급(불가) 모두 틀립니다.",
            audioKey: "quiz_a_8"
          }
        ]
      },

      // ===== CHAPTER 2: There is/are =====
      {
        id: 2,
        name: "Potion of Presence",
        nameKo: "존재의 물약",
        topic: "There is/are",
        potionColor: "#e0913f",
        recipe: [
          {
            // Section 1) 기본 개념
            step: 1,
            title: "기본 개념",
            titleEn: "What is 'There is/are'?",
            content: "<strong>There is/are</strong>는 <strong>'어떤 사람이나 대상이 있다'</strong>는 사실을 나타내는 표현입니다.",
            examples: [
              { en: "<u>There is</u> a book on the table.", ko: "탁자 위에 책 한 권이 있습니다.", highlight: "There is" },
              { en: "<u>There is</u> a bird in the tree.", ko: "나무에 새 한 마리가 있습니다.", highlight: "There is" },
              { en: "<u>There are</u> clouds in the sky.", ko: "하늘에 구름이 있습니다.", highlight: "There are" }
            ],
            audioKey: "recipe_thr_1"
          },
          {
            // Section 2) There is/are 표현의 기본 규칙
            step: 2,
            title: "기본 규칙",
            titleEn: "Singular vs. Plural",
            content: "문장에서 <em>주어 역할</em>을 하는 것은 <strong>be동사 뒤의 명사(구)</strong>입니다. 그 명사가 <strong>단수면 is</strong>, <strong>복수면 are</strong>를 씁니다. <strong>water, salt, butter, bread</strong>처럼 셀 수 없는 명사는 <strong>단수</strong>로 취급합니다.",
            examples: [
              { en: "There <u>is</u> a computer on the desk.", ko: "책상 위에 컴퓨터 한 대가 있습니다.", highlight: "is" },
              { en: "There <u>are</u> pictures on the wall.", ko: "벽에 사진들이 있습니다.", highlight: "are" }
            ],
            audioKey: "recipe_thr_2"
          },
          {
            // Section 3) There is/are 부정문
            step: 3,
            title: "부정문",
            titleEn: "Negative Sentences",
            content: "<strong>be동사 뒤에 not</strong>을 붙입니다. be동사와 not은 <strong>축약</strong>할 수 있습니다.",
            transform: [
              { before: "is not", after: "isn't" },
              { before: "are not", after: "aren't" }
            ],
            examples: [
              { en: "There <u>is not</u> a cup on the shelf. = There <u>isn't</u> a cup on the shelf.", ko: "선반 위에 컵이 없습니다.", highlight: "isn't" },
              { en: "There <u>are not</u> flowers in the garden. = There <u>aren't</u> flowers in the garden.", ko: "정원에 꽃이 없습니다.", highlight: "aren't" }
            ],
            audioKey: "recipe_thr_3"
          },
          {
            // Section 4) There is/are 의문문 (워크시트 번호는 3)으로 잘못 매겨져 있어 4)로 정정)
            step: 4,
            title: "의문문",
            titleEn: "Questions",
            content: "<strong>be동사와 there의 순서를 바꿔</strong> 「<strong>Be동사 + there + 주어 ~?</strong>」로 씁니다.",
            examples: [
              { en: "<u>Is there</u> a dog in the backyard?", ko: "뒷마당에 강아지 한 마리가 있나요?", highlight: "Is there" },
              { en: "<u>Are there</u> children in the playground?", ko: "운동장에 아이들이 있나요?", highlight: "Are there" },
              { en: "<u>Were there</u> any guests at the party?", ko: "파티에 손님들이 있었나요?", highlight: "Were there" }
            ],
            audioKey: "recipe_thr_4"
          },
          {
            // Section 5) There is/are 의문문의 대답 (워크시트 번호는 4)로 잘못 매겨져 있어 5)로 정정)
            step: 5,
            title: "의문문의 대답",
            titleEn: "Answering the Questions",
            content: "긍정은 「<strong>Yes, there + be동사.</strong>」, 부정은 「<strong>No, there + be동사 + not.</strong>」으로 답합니다. be동사와 not은 줄여 쓸 수 있습니다.",
            pattern: {
              question: "Is there a library near your house?",
              yesAnswer: "Yes, there is.",
              noAnswer: "No, there isn't."
            },
            examples: [
              { en: "A: <u>Is there</u> a library near your house?", ko: "당신의 집 근처에 도서관이 있나요?", highlight: "Is there" },
              { en: "B: Yes, there is. / No, there isn't.", ko: "네, 있어요. / 아니요, 없어요.", highlight: "Yes, there is" },
              { en: "A: <u>Were there</u> any mistakes in my report?", ko: "제 보고서에 실수가 있었나요?", highlight: "Were there" },
              { en: "B: Yes, there were. / No, there weren't.", ko: "네, 있었어요. / 아니요, 없었어요.", highlight: "Yes, there were" }
            ],
            audioKey: "recipe_thr_5"
          }
        ],
        exercises: [
          {
            id: 1,
            type: "multiple_choice",
            question: "다음 빈칸에 들어갈 말로 알맞지 <em>않은</em> 것은?",
            context: "There is ________ over there.",
            options: [
              "① snow",
              "② a park",
              "③ a red car",
              "④ two cats",
              "⑤ a large dog"
            ],
            answer: 3,
            explanation: "There is 다음에는 단수 명사나 셀 수 없는 명사가 옵니다. ④ two cats는 복수이므로 There are와 함께 써야 합니다. (① snow는 셀 수 없는 명사로 is와 어울림)",
            audioKey: "quiz_b_1"
          },
          {
            id: 2,
            type: "multiple_choice",
            question: "빈칸에 들어갈 말이 나머지와 <em>다른</em> 하나는?",
            options: [
              "① There ________ pandas in the zoo.",
              "② There ________ some water in the bottle.",
              "③ There ________ not many books on the shelf.",
              "④ There ________ a lot of people on the subway.",
              "⑤ There ________ some students in the library."
            ],
            answer: 1,
            explanation: "② some water는 셀 수 없는 명사라 단수 취급 → is. 나머지 ①③④⑤의 주어(pandas, books, people, students)는 모두 복수이므로 are가 들어갑니다.",
            audioKey: "quiz_b_2"
          },
          {
            id: 3,
            type: "multiple_choice",
            question: "다음 중 어법상 <em>어색한</em> 문장은?",
            options: [
              "① Is there butter in the pan?",
              "② Is there old computers on the desk?",
              "③ Are there many people at the party?",
              "④ There is not a cloud in the sky today.",
              "⑤ There aren't enough chairs for everyone."
            ],
            answer: 1,
            explanation: "② old computers는 복수이므로 Is가 아니라 Are there old computers ~?로 써야 합니다. (① butter는 셀 수 없는 명사라 Is와 어울림)",
            audioKey: "quiz_b_3"
          },
          {
            id: 4,
            type: "multiple_choice",
            question: "밑줄 친 부분이 어법상 <em>어색한</em> 것은?",
            options: [
              "① Are there <u>apples</u> at the market?",
              "② There aren't <u>many students</u> at the gym.",
              "③ There aren't <u>much cheese</u> on the pizza.",
              "④ There are <u>some mistakes</u> in the report.",
              "⑤ There were <u>twenty questions</u> on the exam."
            ],
            answer: 2,
            explanation: "③ cheese는 셀 수 없는 명사이므로 복수 취급하는 aren't와 함께 쓸 수 없습니다. There isn't much cheese on the pizza.로 써야 합니다.",
            audioKey: "quiz_b_4"
          },
          {
            id: 5,
            type: "word_blocks",
            question: "다음 빈칸에 알맞은 be동사를 쓰시오. (현재 시제)",
            subQuestions: [
              {
                prompt: "(1) _____ there an empty seat on the bus?",
                sentence: "_____ there an empty seat on the bus?",
                blocks: ["Is", "Are", "Am", "Be"],
                answer: ["Is"],
                explanation: "an empty seat(단수)에 대한 의문문이므로 Is there ~?로 씁니다."
              },
              {
                prompt: "(2) There _____ five members in Yuna's family.",
                sentence: "There _____ five members in Yuna's family.",
                blocks: ["are", "is", "am", "be"],
                answer: ["are"],
                explanation: "five members(복수)가 주어이므로 are를 씁니다."
              },
              {
                prompt: "(3) _____ there problems with your computer?",
                sentence: "_____ there problems with your computer?",
                blocks: ["Are", "Is", "Am", "Be"],
                answer: ["Are"],
                explanation: "problems(복수)에 대한 의문문이므로 Are there ~?로 씁니다."
              }
            ],
            audioKey: "quiz_b_5"
          },
          {
            id: 6,
            type: "multiple_choice",
            question: "다음 질문에 대한 대답으로 알맞은 것은?",
            context: "Is there a good restaurant around here?",
            options: [
              "① Yes, it is.",
              "② Yes, there is.",
              "③ No, it isn't.",
              "④ Yes, there are.",
              "⑤ No, there aren't."
            ],
            answer: 1,
            explanation: "There is/are 의문문의 대답은 there를 그대로 써서 Yes, there is. / No, there isn't.로 합니다. 단수 의문문(Is there ~?)이므로 ④ there are, ⑤ there aren't도 부적절하고, it으로 받는 ①③도 틀립니다.",
            audioKey: "quiz_b_6"
          },
          {
            id: 7,
            type: "word_blocks",
            question: "괄호 안에서 알맞은 것을 골라 빈칸에 쓰시오.",
            subQuestions: [
              {
                prompt: "(1) Is there _____ near here? (a bank / banks)",
                sentence: "Is there _____ near here?",
                blocks: ["a bank", "banks"],
                answer: ["a bank"],
                explanation: "Is there(단수)에 대한 질문이므로 단수 명사 a bank를 씁니다."
              },
              {
                prompt: "(2) There were _____ on the wall. (a birthday balloon / birthday balloons)",
                sentence: "There were _____ on the wall.",
                blocks: ["birthday balloons", "a birthday balloon"],
                answer: ["birthday balloons"],
                explanation: "were(복수)와 함께 쓰이므로 복수 명사 birthday balloons를 씁니다."
              },
              {
                prompt: "(3) There aren't _____ in this city. (a museum / many museums)",
                sentence: "There aren't _____ in this city.",
                blocks: ["many museums", "a museum"],
                answer: ["many museums"],
                explanation: "aren't(복수 부정)와 함께 쓰이므로 복수 명사 many museums를 씁니다."
              }
            ],
            audioKey: "quiz_b_7"
          },
          {
            id: 8,
            type: "word_blocks",
            question: "다음 글의 빈칸에 is와 are 중 알맞은 것을 쓰시오.",
            context: "There (1)_____ a beautiful park near my house. In the park, there (2)_____ a small lake. There (3)_____ flowers around the lake. Some families are having a picnic in the park.",
            subQuestions: [
              {
                prompt: "(1) There _____ a beautiful park near my house.",
                sentence: "There _____ a beautiful park near my house.",
                blocks: ["is", "are"],
                answer: ["is"],
                explanation: "a beautiful park(단수)가 주어이므로 is를 씁니다."
              },
              {
                prompt: "(2) In the park, there _____ a small lake.",
                sentence: "In the park, there _____ a small lake.",
                blocks: ["is", "are"],
                answer: ["is"],
                explanation: "a small lake(단수)가 주어이므로 is를 씁니다."
              },
              {
                prompt: "(3) There _____ flowers around the lake.",
                sentence: "There _____ flowers around the lake.",
                blocks: ["are", "is"],
                answer: ["are"],
                explanation: "flowers(복수)가 주어이므로 are를 씁니다."
              }
            ],
            audioKey: "quiz_b_8"
          }
        ]
      }
    ]
  }
];
