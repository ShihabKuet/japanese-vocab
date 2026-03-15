/**
 * LESSON 3 — 家族 (Family)
 * Source: Textbook Page 49
 *
 * Japanese has TWO sets of family words:
 *   Plain/Humble  — used when talking about YOUR OWN family
 *   Honorific     — used when talking about SOMEONE ELSE'S family
 *
 * This lesson teaches both sets through vocabulary cards AND a
 * conversational story where わたし and 田中さん discuss their families.
 */

const lesson3 = {
  id:      "lesson3_family",
  title:   "家族",
  titleEn: "Family",
  emoji:   "👨‍👩‍👧‍👦",
  page:    49,

  vocab: {

    // ── OWN family — plain/humble forms ─────────────────────────
    "👤 わたしの家族 My Family (Plain Forms)": [
      {
        jp: "そぼ", en: "Grandmother (own)", romaji: "sobo", wikiTitle: "Grandmother",
        examples: [
          { level: "N5", jp: "そぼは70さいです。", en: "My grandmother is 70 years old.", bn: "আমার দাদি/নানির বয়স ৭০।",
            grammar: "は (topic) + age + さい + です. さい is the counter for age. Use plain forms (そぼ、そふ) only for your own family." },
          { level: "N4", jp: "そぼはむかしから料理がじょうずです。", en: "My grandmother has been good at cooking since long ago.", bn: "আমার দাদি/নানি বহুকাল ধরে রান্নায় পটু।",
            grammar: "むかしから = 'since long ago / from the past'. から = from (time). ～がじょうずです = is good at ～." },
        ],
      },
      {
        jp: "そふ", en: "Grandfather (own)", romaji: "sofu", wikiTitle: "Grandfather",
        examples: [
          { level: "N5", jp: "そふはげんきです。", en: "My grandfather is healthy.", bn: "আমার দাদা/নানা সুস্থ।",
            grammar: "げんき is a な-adjective meaning healthy/energetic. Polite: げんきです. Negative: げんきじゃないです." },
          { level: "N4", jp: "そふはまいあさ新聞をよんでいます。", en: "My grandfather reads the newspaper every morning.", bn: "আমার দাদা/নানা প্রতিদিন সকালে পত্রিকা পড়েন।",
            grammar: "まいあさ = every morning. ～をよんでいます = is reading / reads habitually. ている = habitual or ongoing action." },
        ],
      },
      {
        jp: "そふぼ", en: "Grandparents (own)", romaji: "sofubo", wikiTitle: "Grandparent",
        examples: [
          { level: "N5", jp: "そふぼはいなかにすんでいます。", en: "My grandparents live in the countryside.", bn: "আমার দাদা-দাদি/নানা-নানি গ্রামে থাকেন।",
            grammar: "いなか = countryside/hometown. ～にすんでいます = live in ～. すむ → すんでいる (progressive = ongoing state of living)." },
          { level: "N4", jp: "なつやすみには、そふぼのいえにとまります。", en: "During summer vacation, I stay at my grandparents' house.", bn: "গ্রীষ্মের ছুটিতে দাদা-দাদির বাড়িতে থাকি।",
            grammar: "～には = 'during/for ～'. には adds emphasis to a time expression. とまる = to stay overnight." },
        ],
      },
      {
        jp: "はは", en: "Mother (own)", romaji: "haha", wikiTitle: "Mother",
        examples: [
          { level: "N5", jp: "ははは先生です。", en: "My mother is a teacher.", bn: "আমার মা একজন শিক্ষক।",
            grammar: "はは (plain) vs. おかあさん (honorific). ALWAYS use はは when talking about your own mother to others. Using おかあさん for your own mother sounds childish to others." },
          { level: "N4", jp: "ははにプレゼントをかってあげました。", en: "I bought a present for my mother.", bn: "মাকে উপহার কিনে দিলাম।",
            grammar: "～にかってあげる = buy ～ for someone (as a favour). あげる = to give (speaker → others). Past polite: あげました." },
        ],
      },
      {
        jp: "ちち", en: "Father (own)", romaji: "chichi", wikiTitle: "Father",
        examples: [
          { level: "N5", jp: "ちちはいしゃです。", en: "My father is a doctor.", bn: "আমার বাবা একজন ডাক্তার।",
            grammar: "ちち (plain) vs. おとうさん (honorific). いしゃ = doctor. Occupation sentences: は + occupation + です." },
          { level: "N4", jp: "ちちはしごとでよくりょこうをします。", en: "My father often travels for work.", bn: "আমার বাবা কাজের জন্য প্রায়ই ভ্রমণ করেন।",
            grammar: "しごとで = 'for work / on business'. で here marks reason/purpose. よく = often/frequently." },
        ],
      },
      {
        jp: "りょうしん", en: "Parents (own)", romaji: "ryoushin", wikiTitle: "Parent",
        examples: [
          { level: "N5", jp: "りょうしんはとうきょうにいます。", en: "My parents are in Tokyo.", bn: "আমার বাবা-মা টোকিওতে আছেন।",
            grammar: "います = exists/is (for people and animals). あります = for things. に marks the location of existence." },
          { level: "N4", jp: "りょうしんはわたしのけっこんをよろこんでくれました。", en: "My parents were pleased about my marriage.", bn: "আমার বাবা-মা আমার বিয়েতে খুশি হয়েছিলেন।",
            grammar: "～てくれる = do something for me (as a kindness). よろこぶ = to be pleased. くれました = did for me (past)." },
        ],
      },
      {
        jp: "あね", en: "Elder Sister (own)", romaji: "ane", wikiTitle: "Sister",
        examples: [
          { level: "N5", jp: "あねはかいしゃいんです。", en: "My elder sister is a company employee.", bn: "আমার বড় বোন একজন অফিস কর্মী।",
            grammar: "かいしゃいん = company employee (かいしゃ = company + いん = member/person). Common occupation word." },
          { level: "N4", jp: "あねはもうけっこんしていて、こどもがふたりいます。", en: "My elder sister is already married and has two children.", bn: "আমার বড় বোন ইতিমধ্যে বিবাহিত এবং দুটি সন্তান আছে।",
            grammar: "もう = already. けっこんしている = is married (state). ～ていて connects two ongoing states with 'and'." },
        ],
      },
      {
        jp: "あに", en: "Elder Brother (own)", romaji: "ani", wikiTitle: "Brother",
        examples: [
          { level: "N5", jp: "あにはだいがくせいです。", en: "My elder brother is a university student.", bn: "আমার বড় ভাই একজন বিশ্ববিদ্যালয়ের ছাত্র।",
            grammar: "だいがくせい = university student (だいがく = university + せい = student). Compare: こうこうせい = high school student." },
          { level: "N4", jp: "あにはわたしより３つとしうえです。", en: "My elder brother is 3 years older than me.", bn: "আমার বড় ভাই আমার চেয়ে ৩ বছরের বড়।",
            grammar: "AはBより = 'A is more than B'. ３つとしうえ = 3 years older (としうえ = older in age). Comparison pattern." },
        ],
      },
      {
        jp: "いもうと", en: "Younger Sister (own)", romaji: "imouto", wikiTitle: "Sister",
        examples: [
          { level: "N5", jp: "いもうとはこうこうせいです。", en: "My younger sister is a high school student.", bn: "আমার ছোট বোন একজন হাই স্কুলের ছাত্রী।",
            grammar: "こうこうせい = high school student. Age/grade vocabulary: しょうがくせい (elementary), ちゅうがくせい (middle school), だいがくせい (university)." },
          { level: "N4", jp: "いもうとはピアノをひくのがとくいです。", en: "My younger sister is good at playing piano.", bn: "আমার ছোট বোন পিয়ানো বাজাতে পটু।",
            grammar: "～のが + とくい/にがて = good at / bad at doing ～. のが nominalises the verb (ひく → ひくのが). とくい = strong point." },
        ],
      },
      {
        jp: "おとうと", en: "Younger Brother (own)", romaji: "otouto", wikiTitle: "Brother",
        examples: [
          { level: "N5", jp: "おとうとはまだちいさいです。", en: "My younger brother is still small.", bn: "আমার ছোট ভাই এখনও ছোট।",
            grammar: "まだ = still / not yet. まだ + positive = still. まだ + negative = not yet. ちいさい = small (い-adj)." },
          { level: "N4", jp: "おとうとはわたしのゲームをかってにつかいます。", en: "My younger brother uses my games without permission.", bn: "আমার ছোট ভাই আমার গেম অনুমতি ছাড়াই ব্যবহার করে।",
            grammar: "かってに = without permission / selfishly. Adverb expressing doing something on one's own without asking." },
        ],
      },
      {
        jp: "きょうだい", en: "Siblings / Brothers & Sisters (own)", romaji: "kyoudai", wikiTitle: "Sibling",
        examples: [
          { level: "N5", jp: "きょうだいは３人います。", en: "I have 3 siblings.", bn: "আমার ৩ ভাই-বোন আছে।",
            grammar: "きょうだいは～人います = 'I have ～ siblings'. います = exists (people). Counter for people: ひとり、ふたり、さんにん..." },
          { level: "N4", jp: "きょうだいがいると、さびしくないですね。", en: "If you have siblings, you won't be lonely, will you.", bn: "ভাই-বোন থাকলে একাকীত্ব থাকে না, তাই না।",
            grammar: "～と = 'if / when (natural result)'. いる + と + さびしくない = if you have them, not lonely. ね = seeking agreement." },
        ],
      },
      {
        jp: "つま", en: "Wife (own)", romaji: "tsuma", wikiTitle: "Wife",
        examples: [
          { level: "N5", jp: "つまはかいしゃではたらいています。", en: "My wife works at a company.", bn: "আমার স্ত্রী একটি কোম্পানিতে কাজ করেন।",
            grammar: "つま (plain) vs. おくさん (honorific). で (location) + はたらく = work at. ています = ongoing state." },
          { level: "N4", jp: "つまとふたりでりょこうをするのがすきです。", en: "I like to travel with my wife, just the two of us.", bn: "স্ত্রীর সাথে দুজনে ভ্রমণ করতে ভালো লাগে।",
            grammar: "ふたりで = the two of us (together). で = together/as a group. ～するのがすき = like doing ～. のが nominalizes." },
        ],
      },
      {
        jp: "おっと", en: "Husband (own)", romaji: "otto", wikiTitle: "Husband",
        examples: [
          { level: "N5", jp: "おっとはいまでかけています。", en: "My husband has gone out now.", bn: "আমার স্বামী এখন বাইরে গেছেন।",
            grammar: "おっと (plain) vs. ごしゅじん (honorific). でかける = to go out. でかけています = has gone out (and is currently out)." },
          { level: "N4", jp: "おっとはかいものをてつだってくれます。", en: "My husband helps with shopping for me.", bn: "আমার স্বামী কেনাকাটায় সাহায্য করেন।",
            grammar: "～てくれる = do ～ for me (kindness). てつだう = to help. Helper is the subject, receiver is speaker." },
        ],
      },
      {
        jp: "ふうふ", en: "Husband & Wife / Couple (own)", romaji: "fuufu", wikiTitle: "Marriage",
        examples: [
          { level: "N5", jp: "わたしたちはふうふです。", en: "We are a married couple.", bn: "আমরা স্বামী-স্ত্রী।",
            grammar: "わたしたち = we (たち = plural suffix for people). ふうふ = husband and wife as a unit." },
          { level: "N4", jp: "ふうふでちからをあわせてがんばっています。", en: "We work hard together as a couple, combining our strengths.", bn: "দম্পতি হিসেবে একসাথে সর্বোচ্চ চেষ্টা করছি।",
            grammar: "ちからをあわせる = combine strengths. でwork as/in the capacity of. がんばっています = working hard (ongoing)." },
        ],
      },
      {
        jp: "むすめ", en: "Daughter (own)", romaji: "musume", wikiTitle: "Daughter",
        examples: [
          { level: "N5", jp: "むすめはしょうがくせいです。", en: "My daughter is an elementary school student.", bn: "আমার মেয়ে প্রাথমিক বিদ্যালয়ের ছাত্রী।",
            grammar: "むすめ (plain) vs. むすめさん (honorific). しょうがくせい = elementary school student. Age levels are important in Japanese." },
          { level: "N4", jp: "むすめにえいごをならわせています。", en: "I am having my daughter learn English.", bn: "মেয়েকে ইংরেজি শেখাচ্ছি।",
            grammar: "～に～させる = causative: make/let someone do something. ならわせる = make (her) learn. An important N4 grammar pattern." },
        ],
      },
      {
        jp: "むすこ", en: "Son (own)", romaji: "musuko", wikiTitle: "Son",
        examples: [
          { level: "N5", jp: "むすこはサッカーがすきです。", en: "My son likes soccer.", bn: "আমার ছেলে ফুটবল পছন্দ করে।",
            grammar: "むすこ (plain) vs. むすこさん (honorific). ～がすき = likes ～. Basic preference pattern (N5)." },
          { level: "N4", jp: "むすこがそだつのをみるのがたのしみです。", en: "Watching my son grow up is my joy.", bn: "ছেলেকে বড় হতে দেখাটাই আনন্দ।",
            grammar: "～のをみる = watch ～ happening. そだつ = to grow up. のが/のを nominalizes a verb. たのしみ = a pleasure/something to look forward to." },
        ],
      },
      {
        jp: "こども", en: "Children (own)", romaji: "kodomo", wikiTitle: "Child",
        examples: [
          { level: "N5", jp: "こどもがふたりいます。", en: "I have two children.", bn: "আমার দুটি সন্তান আছে।",
            grammar: "こども (plain) vs. おこさん (honorific). Count people with にん: ひとり(1)、ふたり(2)、さんにん(3)、よにん(4)..." },
          { level: "N4", jp: "こどもたちはそとであそぶのがすきです。", en: "My children like to play outside.", bn: "ছেলেমেয়েরা বাইরে খেলতে ভালোবাসে।",
            grammar: "たち = plural suffix (こどもたち = children). そとで = outside (で = location of action). ～のがすき = like doing ～." },
        ],
      },
    ],

    // ── OTHERS' family — honorific/polite forms ──────────────────
    "🎎 田中さんの家族 Others' Family (Honorific Forms)": [
      {
        jp: "おばあさん", en: "Grandmother (others')", romaji: "obaasan", wikiTitle: "Grandmother",
        examples: [
          { level: "N5", jp: "田中さんのおばあさんはおげんきですか。", en: "Is Tanaka-san's grandmother well?", bn: "তানাকা-সানের দাদি/নানি কি ভালো আছেন?",
            grammar: "おばあさん is the honorific for someone else's grandmother. Use お～さん/ご～ to show respect for others' family." },
          { level: "N4", jp: "おばあさんはにほんのでんとうてきなりょうりをおしえてくださいます。", en: "Her grandmother teaches traditional Japanese cooking for us.", bn: "তার দাদি/নানি জাপানের ঐতিহ্যবাহী রান্না শিখিয়ে দেন।",
            grammar: "くださる = give (someone of higher status gives to me). おしえてくださる = kindly teaches us. Humble-honorific speech." },
        ],
      },
      {
        jp: "おじいさん", en: "Grandfather (others')", romaji: "ojiisan", wikiTitle: "Grandfather",
        examples: [
          { level: "N5", jp: "田中さんのおじいさんはなんさいですか。", en: "How old is Tanaka-san's grandfather?", bn: "তানাকা-সানের দাদা/নানার বয়স কত?",
            grammar: "なんさい = how old. さい = counter for age. Polite version: おいくつですか (How old are you? - respectful)." },
          { level: "N4", jp: "おじいさんはむかしとても有名なしょうせつかだったそうです。", en: "I heard that her grandfather was once a very famous novelist.", bn: "শুনেছি তার দাদা/নানা একসময় খুব বিখ্যাত ঔপন্যাসিক ছিলেন।",
            grammar: "～そうです (hearsay) = 'I heard that ～'. Attaches to plain form. Different from ～そう (appearance)." },
        ],
      },
      {
        jp: "ごりょうしん", en: "Parents (others')", romaji: "go-ryoushin", wikiTitle: "Parent",
        examples: [
          { level: "N5", jp: "ごりょうしんはおげんきですか。", en: "Are your parents well?", bn: "আপনার বাবা-মা কি সুস্থ আছেন?",
            grammar: "ご (ご両親) is an honorific prefix. Use りょうしん for own parents, ごりょうしん for others'. This ご is from Chinese reading (音読み)." },
          { level: "N4", jp: "ごりょうしんにもよろしくおつたえください。", en: "Please give my regards to your parents as well.", bn: "আপনার বাবা-মাকেও আমার শুভেচ্ছা জানাবেন।",
            grammar: "よろしくおつたえください = please convey my regards. Set phrase for sending greetings through someone. Very useful social expression." },
        ],
      },
      {
        jp: "おかあさん", en: "Mother (others')", romaji: "okaasan", wikiTitle: "Mother",
        examples: [
          { level: "N5", jp: "田中さんのおかあさんはやさしいですね。", en: "Tanaka-san's mother is kind, isn't she.", bn: "তানাকা-সানের মা খুব সদয়, তাই না।",
            grammar: "やさしい = kind/gentle (い-adj). ね = 'isn't it?' seeking agreement/shared feeling from listener." },
          { level: "N4", jp: "田中さんのおかあさんはすごく料理がおじょうずですね。", en: "Tanaka-san's mother is very skilled at cooking.", bn: "তানাকা-সানের মা রান্নায় অনেক দক্ষ।",
            grammar: "おじょうず = skilled (honorific form of じょうず). Adding お makes it more respectful when talking about others' abilities." },
        ],
      },
      {
        jp: "おとうさん", en: "Father (others')", romaji: "otousan", wikiTitle: "Father",
        examples: [
          { level: "N5", jp: "田中さんのおとうさんはどんなおしごとをしていますか。", en: "What kind of work does Tanaka-san's father do?", bn: "তানাকা-সানের বাবা কী ধরনের কাজ করেন?",
            grammar: "どんな = what kind of. おしごと = work (honorific form of しごと). している = is doing (ongoing). Respectful question form." },
          { level: "N4", jp: "田中さんのおとうさんはかいがいしゅっちょうがおおいそうです。", en: "I hear that Tanaka-san's father often goes on overseas business trips.", bn: "শুনেছি তানাকা-সানের বাবার প্রায়ই বিদেশে ব্যবসায়িক সফর থাকে।",
            grammar: "かいがい = overseas. しゅっちょう = business trip. おおい = many/frequent. そうです = I heard / apparently." },
        ],
      },
      {
        jp: "おねえさん", en: "Elder Sister (others')", romaji: "oneesan", wikiTitle: "Sister",
        examples: [
          { level: "N5", jp: "田中さんのおねえさんはきれいですね。", en: "Tanaka-san's elder sister is beautiful, isn't she.", bn: "তানাকা-সানের বড় বোন দেখতে সুন্দর, তাই না।",
            grammar: "きれい = beautiful/clean (な-adj). ね = seeking agreement. Note: きれい ends in い but is a な-adjective, not い-adjective!" },
          { level: "N4", jp: "おねえさんはもうりゅうがくからかえってきましたか。", en: "Has your elder sister already come back from studying abroad?", bn: "বড় বোন কি বিদেশে পড়াশোনা থেকে ফিরে এসেছেন?",
            grammar: "りゅうがく = studying abroad. かえってくる = come back. もう = already (in question, expecting it happened). ～てきた = came back (movement toward speaker)." },
        ],
      },
      {
        jp: "おにいさん", en: "Elder Brother (others')", romaji: "oniisan", wikiTitle: "Brother",
        examples: [
          { level: "N5", jp: "田中さんのおにいさんはせがたかいです。", en: "Tanaka-san's elder brother is tall.", bn: "তানাকা-সানের বড় ভাই লম্বা।",
            grammar: "せがたかい = tall (literally: stature is high). せ = height/stature. たかい = high/tall. Body description pattern." },
          { level: "N4", jp: "おにいさんにわたしのことをはなしてくれましたか。", en: "Did you tell your elder brother about me?", bn: "বড় ভাইকে কি আমার কথা বলেছিলেন?",
            grammar: "～のことをはなす = talk about ～. のこと = 'about ～ / the matter of ～'. てくれましたか = did you do ～ for me?" },
        ],
      },
      {
        jp: "いもうとさん", en: "Younger Sister (others')", romaji: "imoutosan", wikiTitle: "Sister",
        examples: [
          { level: "N5", jp: "いもうとさんはおいくつですか。", en: "How old is your younger sister?", bn: "ছোট বোনের বয়স কত?",
            grammar: "おいくつ = honorific for 'how old'. Plain: なんさい. おいくつ is more respectful, used when asking about others." },
          { level: "N4", jp: "いもうとさんはダンスがとてもおじょうずだとききました。", en: "I heard that your younger sister is very good at dancing.", bn: "শুনেছি ছোট বোন নাচে খুব পারদর্শী।",
            grammar: "～だとききました = 'I heard that ～'. と = quotation marker. ききました = heard. おじょうず = skilled (honorific)." },
        ],
      },
      {
        jp: "おとうとさん", en: "Younger Brother (others')", romaji: "otoutosan", wikiTitle: "Brother",
        examples: [
          { level: "N5", jp: "おとうとさんはなんさいですか。", en: "How old is your younger brother?", bn: "ছোট ভাইয়ের বয়স কত?",
            grammar: "Adding さん to family terms makes them honorific for others' family. Your own: おとうと. Someone else's: おとうとさん." },
          { level: "N4", jp: "おとうとさんはもうちゅうがくにはいったんですか。", en: "Has your younger brother already entered middle school?", bn: "ছোট ভাই কি ইতিমধ্যে মিডল স্কুলে ভর্তি হয়েছে?",
            grammar: "～んですか = seeking explanation/confirmation. はいる = to enter. ちゅうがく = middle school. もう = already." },
        ],
      },
      {
        jp: "ごきょうだい", en: "Siblings (others')", romaji: "go-kyoudai", wikiTitle: "Sibling",
        examples: [
          { level: "N5", jp: "ごきょうだいは何人いますか。", en: "How many siblings do you have?", bn: "কতজন ভাই-বোন আছে আপনার?",
            grammar: "ご is an honorific prefix (Chinese origin). きょうだい (own) → ごきょうだい (others'). 何人 = how many people." },
          { level: "N4", jp: "ごきょうだいはみなさんとてもなかがいいですね。", en: "All of your siblings get along very well.", bn: "আপনার সব ভাই-বোন একে অপরের সাথে খুব ভালো সম্পর্ক রাখে।",
            grammar: "みなさん = everyone/all (polite). なかがいい = get along well (literally: the relationship is good). とても = very." },
        ],
      },
      {
        jp: "おくさん", en: "Wife (others')", romaji: "okusan", wikiTitle: "Wife",
        examples: [
          { level: "N5", jp: "田中さんのおくさんはきれいですね。", en: "Tanaka-san's wife is beautiful.", bn: "তানাকা-সানের স্ত্রী সুন্দর।",
            grammar: "つま (own wife) → おくさん (others' wife). Never say つま about someone else's wife — it is rude without the honorific." },
          { level: "N4", jp: "田中さんのおくさんはフランス語がぺらぺらだそうですよ。", en: "I hear Tanaka-san's wife speaks French fluently.", bn: "শুনেছি তানাকা-সানের স্ত্রী ফরাসি ভাষায় অনর্গল কথা বলেন।",
            grammar: "ぺらぺら = fluently (mimetic word for smooth speech). だそうです = I heard. よ adds informational nuance." },
        ],
      },
      {
        jp: "ごしゅじん", en: "Husband (others')", romaji: "go-shujin", wikiTitle: "Husband",
        examples: [
          { level: "N5", jp: "田中さんのごしゅじんはどんなかたですか。", en: "What kind of person is Tanaka-san's husband?", bn: "তানাকা-সানের স্বামী কেমন মানুষ?",
            grammar: "かた = person (honorific for ひと). どんなかた = what kind of person. Use かた when speaking respectfully." },
          { level: "N4", jp: "ごしゅじんはおしごとでよくかいがいにいらっしゃるんですか。", en: "Does your husband often go overseas for work?", bn: "আপনার স্বামী কি কাজের জন্য প্রায়ই বিদেশে যান?",
            grammar: "いらっしゃる = honorific for いる/いく/くる. おしごとで = for work. ～んですか = seeking confirmation." },
        ],
      },
      {
        jp: "ごふうふ", en: "Married Couple (others')", romaji: "go-fuufu", wikiTitle: "Marriage",
        examples: [
          { level: "N5", jp: "田中さんごふうふはなかがいいですね。", en: "Mr. and Mrs. Tanaka are a close couple, aren't they.", bn: "তানাকা দম্পতি খুব সুখী, তাই না।",
            grammar: "ごふうふ = the honorific couple. ごふうふ can refer to both husband and wife together. なかがいい = have a good relationship." },
          { level: "N4", jp: "ごふうふでいっしょにボランティアをされているんですね。", en: "You two do volunteer work together as a couple, I hear.", bn: "দম্পতি হিসেবে একসাথে স্বেচ্ছাসেবী কাজ করেন, তাই না।",
            grammar: "される = honorific form of する. ～ているんですね = 'I see that you are doing ～'. Adds a sense of discovery/realization." },
        ],
      },
      {
        jp: "むすめさん", en: "Daughter (others')", romaji: "musumsan", wikiTitle: "Daughter",
        examples: [
          { level: "N5", jp: "田中さんのむすめさんはかわいいですね。", en: "Tanaka-san's daughter is cute.", bn: "তানাকা-সানের মেয়ে দেখতে কিউট।",
            grammar: "むすめ (own) → むすめさん (others'). かわいい = cute (い-adj)." },
          { level: "N4", jp: "むすめさんはもうだいがくにはいったんですか。はやいですね。", en: "Has your daughter already entered university? That's fast.", bn: "আপনার মেয়ে কি ইতিমধ্যে বিশ্ববিদ্যালয়ে ভর্তি হয়েছে? দ্রুতই তো।",
            grammar: "はやい = fast/early. ですね = expresses mild surprise or shared feeling. ～んですか = seeking explanation/confirmation." },
        ],
      },
      {
        jp: "むすこさん", en: "Son (others')", romaji: "musukosan", wikiTitle: "Son",
        examples: [
          { level: "N5", jp: "田中さんのむすこさんはおいくつですか。", en: "How old is Tanaka-san's son?", bn: "তানাকা-সানের ছেলের বয়স কত?",
            grammar: "むすこ (own) → むすこさん (others'). おいくつ = how old (respectful). Shows the systematic plain → honorific pattern." },
          { level: "N4", jp: "むすこさんはサッカーのえらばれた選手だとうかがいました。", en: "I humbly heard that your son was selected as a soccer player.", bn: "শুনেছিলাম আপনার ছেলে ফুটবলে নির্বাচিত খেলোয়াড়।",
            grammar: "うかがう = humble form of きく (to hear/ask). Using humble form shows respect to the listener. えらばれた = was selected (passive)." },
        ],
      },
      {
        jp: "おこさん", en: "Children (others')", romaji: "okosan", wikiTitle: "Child",
        examples: [
          { level: "N5", jp: "田中さんのおこさんはおいくつですか。", en: "How old are Tanaka-san's children?", bn: "তানাকা-সানের সন্তানের বয়স কত?",
            grammar: "こども (own) → おこさん (others'). お～さん is the standard pattern for honorific family terms." },
          { level: "N4", jp: "おこさんたちはとてもれいぎただしくてすてきですね。", en: "Your children are very polite and wonderful.", bn: "আপনার সন্তানেরা খুব ভদ্র এবং চমৎকার।",
            grammar: "れいぎただしい = polite/well-mannered (い-adj). ～くて = connects adjectives. すてき = wonderful (な-adj). Complimenting others' family." },
        ],
      },
    ],
  },

  // ── CONVERSATIONAL STORY ─────────────────────────────────────
  story: {
    title:    "田中さんの家族の話",
    titleEn:  "Talking About Tanaka's Family",
    titleBn:  "তানাকা-সানের পরিবারের গল্প",
    summary:  "わたし meets 田中さん at work and they chat about their families — a natural way to practise both plain and honorific family vocabulary.",
    summaryBn: "আমি কর্মক্ষেত্রে তানাকা-সানের সাথে দেখা করি এবং তারা পরিবার নিয়ে কথা বলেন — সাধারণ ও সম্মানসূচক পারিবারিক শব্দভান্ডার অনুশীলনের স্বাভাবিক উপায়।",

    scenes: [
      {
        id: "scene1",
        title: "はじめまして — First Meeting",
        titleBn: "প্রথম পরিচয়",
        grammar_focus: "Honorific vs. plain family terms",
        grammar_focus_bn: "সম্মানসূচক বনাম সাধারণ পারিবারিক শব্দ",
        lines: [
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "田中さん、ごかぞくはおおいですか。",
            en:   "Tanaka-san, do you have a large family?",
            bn:   "তানাকা-সান, আপনার পরিবার কি বড়?",
            note: "ごかぞく = honorific for 'family' (your family). かぞく = your own family.",
            highlight: ["ごかぞく"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "そうですね。りょうしんとあね、わたし、おとうとの４人かぞくです。",
            en:   "Let me see. It is a family of 4 — my parents, my elder sister, me, and my younger brother.",
            bn:   "হ্যাঁ। বাবা-মা, বড় বোন, আমি আর ছোট ভাই মিলে ৪ জনের পরিবার।",
            note: "りょうしん (own parents), あね (own elder sister), おとうと (own younger brother) — all plain forms!",
            highlight: ["りょうしん", "あね", "おとうと"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "ごりょうしんはいまごいっしょにすんでいますか。",
            en:   "Are you currently living with your parents?",
            bn:   "এখন কি বাবা-মায়ের সাথে থাকেন?",
            note: "ごりょうしん = honorific for Tanaka's parents. ごいっしょに = together (honorific).",
            highlight: ["ごりょうしん"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "いいえ、りょうしんはおおさかにすんでいます。わたしはひとりで東京にいます。",
            en:   "No, my parents live in Osaka. I am alone in Tokyo.",
            bn:   "না, বাবা-মা ওসাকায় থাকেন। আমি একা টোকিওতে আছি।",
            note: "りょうしん = own parents (plain). Tanaka uses plain form when referring to his own family.",
            highlight: ["りょうしん"],
          },
        ],
      },
      {
        id: "scene2",
        title: "姉と弟の話 — About Elder Sister and Younger Brother",
        titleBn: "বড় বোন ও ছোট ভাইয়ের গল্প",
        grammar_focus: "Describing family members with adjectives and occupation",
        grammar_focus_bn: "বিশেষণ ও পেশা দিয়ে পরিবারের সদস্যদের বর্ণনা",
        lines: [
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "おねえさんはどんなおしごとをされていますか。",
            en:   "What kind of work does your elder sister do?",
            bn:   "আপনার বড় বোন কী ধরনের কাজ করেন?",
            note: "おねえさん = honorific for elder sister. される = honorific for する. Showing respect when asking.",
            highlight: ["おねえさん"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "あねはかんごしをしています。にゅういんかんじゃさんのためにまいにちはたらいています。",
            en:   "My elder sister is a nurse. She works every day for the hospitalised patients.",
            bn:   "আমার বড় বোন নার্স। প্রতিদিন ভর্তি রোগীদের জন্য কাজ করেন।",
            note: "あね = own elder sister (plain). かんごし = nurse. まいにち = every day.",
            highlight: ["あね"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "すばらしいですね！おとうとさんはもうしゅうしょくしましたか。",
            en:   "That is wonderful! Has your younger brother already started working?",
            bn:   "চমৎকার! আপনার ছোট ভাই কি এখন চাকরিতে যোগ দিয়েছেন?",
            note: "おとうとさん = honorific for younger brother. しゅうしょく = getting a job. もう = already.",
            highlight: ["おとうとさん"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "いいえ、おとうとはまだだいがくせいです。らいねんそつぎょうのよていです。",
            en:   "No, my younger brother is still a university student. He is scheduled to graduate next year.",
            bn:   "না, আমার ছোট ভাই এখনও বিশ্ববিদ্যালয়ের ছাত্র। আগামী বছর স্নাতক হওয়ার কথা।",
            note: "おとうと = own younger brother (plain). まだ = still. ～のよていです = is scheduled/planned to ～.",
            highlight: ["おとうと"],
          },
        ],
      },
      {
        id: "scene3",
        title: "田中さんのご家族 — Tanaka-san's Own Family",
        titleBn: "তানাকা-সানের নিজের পরিবার",
        grammar_focus: "Talking about spouse and children",
        grammar_focus_bn: "স্বামী/স্ত্রী ও সন্তানদের নিয়ে কথা",
        lines: [
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "田中さんはけっこんされていますか。",
            en:   "Tanaka-san, are you married?",
            bn:   "তানাকা-সান, আপনি কি বিবাহিত?",
            note: "けっこんされていますか = honorific for 'are you married'. される = honorific する.",
            highlight: [],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "はい、つまとこどもがふたりいます。むすめとむすこです。",
            en:   "Yes, I have a wife and two children. A daughter and a son.",
            bn:   "হ্যাঁ, স্ত্রী এবং দুটি সন্তান আছে। একটি মেয়ে ও একটি ছেলে।",
            note: "つま = own wife. こども、むすめ、むすこ = own children — all plain humble forms.",
            highlight: ["つま", "こども", "むすめ", "むすこ"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "おこさんたちはおいくつですか。",
            en:   "How old are your children?",
            bn:   "আপনার সন্তানেরা কত বছর বয়সী?",
            note: "おこさん = honorific for someone else's children. おいくつ = respectful 'how old'.",
            highlight: ["おこさん"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "むすめは８さいで、むすこは５さいです。まいにちにぎやかですよ！",
            en:   "My daughter is 8 and my son is 5. It is lively every day!",
            bn:   "মেয়ে ৮ বছর আর ছেলে ৫ বছর। প্রতিদিন খুব賑やか!",
            note: "むすめ、むすこ = own children (plain). にぎやか = lively/bustling (な-adj). よ = adds emphasis.",
            highlight: ["むすめ", "むすこ"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "おくさんはおしごとをされていますか。",
            en:   "Is your wife working?",
            bn:   "আপনার স্ত্রী কি কাজ করছেন?",
            note: "おくさん = honorific for someone else's wife. される = honorific する. Respectful questioning.",
            highlight: ["おくさん"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "はい、つまはパートタイムでほいくしをしています。こどもがだいすきなんです。",
            en:   "Yes, my wife works part-time as a childcare worker. She loves children.",
            bn:   "হ্যাঁ, আমার স্ত্রী পার্ট-টাইম শিশু পরিচর্যাকারী হিসেবে কাজ করেন। তিনি শিশুদের খুব ভালোবাসেন।",
            note: "つま = own wife (plain). パートタイム = part-time. ほいくし = nursery/childcare worker. ～なんです = explains/emphasises.",
            highlight: ["つま"],
          },
        ],
      },
      {
        id: "scene4",
        title: "おじいさんとおばあさん — The Grandparents",
        titleBn: "দাদা-দাদি/নানা-নানির কথা",
        grammar_focus: "Talking about elderly family, expressing concern",
        grammar_focus_bn: "বয়স্ক পরিবারের সদস্যদের নিয়ে কথা বলা",
        lines: [
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "田中さんのおじいさんとおばあさんはまだごけんきょうですか。",
            en:   "Are Tanaka-san's grandparents still in good health?",
            bn:   "তানাকা-সানের দাদা-দাদি/নানা-নানি কি এখনও সুস্থ আছেন?",
            note: "おじいさん、おばあさん = honorific for grandparents. ごけんきょう = very honorific for 'healthy'.",
            highlight: ["おじいさん", "おばあさん"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "ありがとうございます。そふはさいきんからだのぐあいがよくないんです。",
            en:   "Thank you for asking. My grandfather has not been feeling well lately.",
            bn:   "জিজ্ঞেস করার জন্য ধন্যবাদ। আমার দাদা/নানা সম্প্রতি শরীর ভালো নেই।",
            note: "そふ = own grandfather (plain). からだのぐあい = state of one's body/health. よくない = not good.",
            highlight: ["そふ"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "それはしんぱいですね。おばあさんはおげんきですか。",
            en:   "That is worrying. Is your grandmother well?",
            bn:   "সেটা চিন্তার বিষয়। দাদি/নানি কি সুস্থ আছেন?",
            note: "しんぱい = worry/concern. おばあさん = honorific for grandmother. おげんき = honorific for healthy.",
            highlight: ["おばあさん"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "そぼはげんきです。まいにちそふのかんごをしています。ふたりはとてもなかがいいんです。",
            en:   "My grandmother is well. She takes care of my grandfather every day. The two of them get along very well.",
            bn:   "আমার দাদি/নানি সুস্থ। প্রতিদিন দাদার/নানার সেবা করেন। তারা দুজন খুব ভালো সম্পর্কে আছেন।",
            note: "そぼ、そふ = own grandparents (plain). かんご = nursing care. なかがいい = have a good relationship.",
            highlight: ["そぼ", "そふ"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "そうですか。そふぼさんがおだいじに。はやくよくなるといいですね。",
            en:   "I see. Please take care of your grandparents. I hope he gets well soon.",
            bn:   "তাই। দাদা-দাদি/নানা-নানিকে যত্নে রাখবেন। আশা করি তিনি শীঘ্রই সুস্থ হয়ে উঠবেন।",
            note: "おだいじに = take care (standard get-well/be-well phrase). ～といいですね = I hope ～ (expressing wish).",
            highlight: ["そふぼ"],
          },
        ],
      },
      {
        id: "scene5",
        title: "わたしの家族 — My Own Family",
        titleBn: "আমার নিজের পরিবার",
        grammar_focus: "Introducing your own family using plain forms",
        grammar_focus_bn: "সাধারণ রূপ ব্যবহার করে নিজের পরিবার পরিচয় করিয়ে দেওয়া",
        lines: [
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "ところで、あなたのごかぞくはどうですか。",
            en:   "By the way, how about your family?",
            bn:   "যাইহোক, আপনার পরিবার কেমন?",
            note: "ところで = by the way (changing topic). ごかぞく = honorific for your family.",
            highlight: ["ごかぞく"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "わたしはちちとははとあにとわたしの４人かぞくです。",
            en:   "My family is 4 people — my father, my mother, my elder brother, and me.",
            bn:   "আমার পরিবারে বাবা, মা, বড় ভাই আর আমি মিলে ৪ জন।",
            note: "ちち (father), はは (mother), あに (elder brother) — all plain humble forms for own family.",
            highlight: ["ちち", "はは", "あに"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "おにいさんはおいくつですか。",
            en:   "How old is your elder brother?",
            bn:   "আপনার বড় ভাইয়ের বয়স কত?",
            note: "おにいさん = honorific form used when asking about someone else's elder brother.",
            highlight: ["おにいさん"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "あにはことし32さいになります。けっこんしていて、こどもがひとりいます。",
            en:   "My elder brother turns 32 this year. He is married and has one child.",
            bn:   "আমার বড় ভাই এ বছর ৩২ বছর হবে। বিবাহিত এবং একটি সন্তান আছে।",
            note: "あに = own elder brother (plain). ことし = this year. ～さいになる = to turn ～ years old.",
            highlight: ["あに"],
          },
          {
            speaker: "田中さん",
            speakerEn: "Tanaka-san",
            jp:   "おこさんはまだちいさいんですか。",
            en:   "Is your (brother's) child still little?",
            bn:   "সন্তানটি কি এখনও ছোট?",
            note: "おこさん = honorific for someone else's child. まだ = still. ちいさい = small (い-adj).",
            highlight: ["おこさん"],
          },
          {
            speaker: "わたし",
            speakerEn: "Me",
            jp:   "はい、まだ２さいです。とてもかわいいですよ。うちのかぞくはみんなだいすきです。",
            en:   "Yes, still 2 years old. Very cute! I love all of my family.",
            bn:   "হ্যাঁ, এখনও ২ বছর। খুব কিউট। আমি আমার পুরো পরিবারকে খুব ভালোবাসি।",
            note: "うちのかぞく = my family (うち = my/our home, informal). みんな = all/everyone. だいすき = love very much.",
            highlight: ["かぞく"],
          },
        ],
      },
    ],
  },
};

export default lesson3;
