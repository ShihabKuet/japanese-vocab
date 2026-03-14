/**
 * LESSON 2 — デパート (Department Store)
 * Source: Textbook Page 25
 *
 * Each word has `examples`: two sentences at JLPT N5 and N4 level,
 * each with Japanese, English, Bengali translation, and a grammar tip.
 */
const lesson2 = {
  id:      "lesson2_department_store",
  title:   "デパート",
  titleEn: "Department Store",
  emoji:   "🏬",
  page:    25,

  vocab: {

    "🏢 階・建物 Floors & Building": [
      {
        jp: "おくじょう", en: "Rooftop", romaji: "okujou", wikiTitle: "Rooftop",
        examples: [
          { level: "N5", jp: "おくじょうにのぼりました。", en: "I went up to the rooftop.", bn: "আমি ছাদে উঠলাম।",
            grammar: "～にのぼりました = 'went up to ～'. に marks the destination. のぼる = to climb/go up. Past polite form: のぼりました." },
          { level: "N4", jp: "おくじょうからまちのけしきがよくみえます。", en: "You can see the town scenery well from the rooftop.", bn: "ছাদ থেকে শহরের দৃশ্য ভালো দেখা যায়।",
            grammar: "～からAがみえます = 'A can be seen from ～'. から marks the viewpoint/origin. みえます = potential/natural visibility." },
        ],
      },
      {
        jp: "〜かい", en: "Floor / Storey", romaji: "~kai", wikiTitle: "Storey",
        examples: [
          { level: "N5", jp: "このデパートは８かいです。", en: "This department store has 8 floors.", bn: "এই ডিপার্টমেন্ট স্টোরটি ৮ তলা।",
            grammar: "AはBです = 'A is B'. The simplest sentence pattern. ８かい = 8th floor / 8 floors depending on context." },
          { level: "N4", jp: "エレベーターで３かいにいってください。", en: "Please go to the 3rd floor by elevator.", bn: "লিফটে করে ৩ তলায় যান।",
            grammar: "～で (means of transport) + ～にいく = go to ～ by ～. で marks the means/method. てください = polite request." },
        ],
      },
      {
        jp: "ちか", en: "Basement", romaji: "chika", wikiTitle: "Basement",
        examples: [
          { level: "N5", jp: "ちか１かいに食べ物があります。", en: "There is food on basement floor 1.", bn: "বেসমেন্ট ১ তলায় খাবার আছে।",
            grammar: "～にAがあります = 'there is A at ～'. に marks the location. あります is used for inanimate things." },
          { level: "N4", jp: "ちかにあるスーパーはやすくてべんりです。", en: "The supermarket in the basement is cheap and convenient.", bn: "বেসমেন্টের সুপারমার্কেটটি সস্তা এবং সুবিধাজনক।",
            grammar: "～にある + noun = noun that exists at ～. ～くてべんり uses ～くて to link い-adj + な-adj." },
        ],
      },
      {
        jp: "ちゅうしゃじょう", en: "Car Park / Parking Lot", romaji: "chuushajou", wikiTitle: "Parking lot",
        examples: [
          { level: "N5", jp: "ちゅうしゃじょうはどこですか。", en: "Where is the car park?", bn: "পার্কিং কোথায়?",
            grammar: "～はどこですか = 'Where is ～?'. どこ = where. This is a standard N5 location question." },
          { level: "N4", jp: "ちゅうしゃじょうがいっぱいで、くるまをとめられませんでした。", en: "The car park was full and I could not park my car.", bn: "পার্কিং ভর্তি ছিল, গাড়ি রাখতে পারিনি।",
            grammar: "～で (reason) = 'because of ～'. とめられませんでした = could not park (negative potential past). ～られる = potential form." },
        ],
      },
      {
        jp: "ゆうえんち", en: "Amusement Area", romaji: "yuuenchi", wikiTitle: "Amusement park",
        examples: [
          { level: "N5", jp: "ゆうえんちはたのしいです。", en: "The amusement area is fun.", bn: "বিনোদন এলাকাটি মজার।",
            grammar: "～はたのしいです = 'is fun'. たのしい is an い-adjective. Polite present: adj + です." },
          { level: "N4", jp: "ゆうえんちでこどもたちがたのしそうにあそんでいます。", en: "Children are playing happily at the amusement area.", bn: "বিনোদন এলাকায় বাচ্চারা আনন্দে খেলছে।",
            grammar: "～そう = 'looks/seems ～'. たのしそう = looks fun. ～ている = ongoing action (present progressive)." },
        ],
      },
    ],

    "🍽️ 食事・飲食 Food & Dining": [
      {
        jp: "レストラン", en: "Restaurant", romaji: "resutoran", wikiTitle: "Restaurant",
        examples: [
          { level: "N5", jp: "このレストランはおいしいです。", en: "This restaurant is delicious.", bn: "এই রেস্তোরাঁর খাবার সুস্বাদু।",
            grammar: "この (this) + noun + はおいしいです = 'this ～ is delicious'. おいしい is an い-adjective." },
          { level: "N4", jp: "レストランをよやくしておきました。", en: "I made a reservation at the restaurant in advance.", bn: "আমি আগেই রেস্তোরাঁ বুক করে রেখেছিলাম।",
            grammar: "～ておく = do something in advance/preparation. よやくする = to make a reservation. ておきました = past polite." },
        ],
      },
      {
        jp: "しょくどう", en: "Cafeteria / Dining Hall", romaji: "shokudou", wikiTitle: "Cafeteria",
        examples: [
          { level: "N5", jp: "しょくどうでひるごはんをたべます。", en: "I eat lunch at the cafeteria.", bn: "আমি ক্যাফেটেরিয়ায় দুপুরের খাবার খাই।",
            grammar: "で marks the place where an action happens. Contrast with に which marks static location (あります/います)." },
          { level: "N4", jp: "しょくどうのランチセットはやすくてボリュームがあります。", en: "The cafeteria lunch set is cheap and filling.", bn: "ক্যাফেটেরিয়ার লাঞ্চ সেট সস্তা এবং পরিমাণে বেশি।",
            grammar: "～くてAがあります = 'is ～ and has A'. ～くて links adjectives. ボリュームがある = has volume/is filling." },
        ],
      },
      {
        jp: "きっさてん", en: "Coffee Shop / Café", romaji: "kissaten", wikiTitle: "Coffeehouse",
        examples: [
          { level: "N5", jp: "きっさてんでコーヒーをのみます。", en: "I drink coffee at the café.", bn: "আমি ক্যাফেতে কফি পান করি।",
            grammar: "で (action location) + をのむ = drink ～. のみます is the polite form of のむ (to drink)." },
          { level: "N4", jp: "きっさてんでともだちをまちながら、ほんをよみました。", en: "I read a book while waiting for my friend at the café.", bn: "ক্যাফেতে বন্ধুর জন্য অপেক্ষা করতে করতে বই পড়লাম।",
            grammar: "～ながら = 'while doing ～'. Attaches to verb stem: まち (stem of まつ) + ながら. Used for two simultaneous actions." },
        ],
      },
    ],

    "👗 ファッション Fashion & Accessories": [
      {
        jp: "ようふくうりば", en: "Clothing Section", romaji: "youfuku uriba", wikiTitle: "Clothing",
        examples: [
          { level: "N5", jp: "ようふくうりばはなんかいですか。", en: "What floor is the clothing section on?", bn: "পোশাক বিভাগ কত তলায়?",
            grammar: "～はなんかいですか = 'What floor is ～ on?'. なん = what. かい = floor/storey. Simple question with は～か." },
          { level: "N4", jp: "ようふくうりばでセールをやっているので、いってみましょう。", en: "They are having a sale in the clothing section, so let's go check it out.", bn: "পোশাক বিভাগে সেল চলছে, তাই চলো দেখে আসি।",
            grammar: "～ので = 'because / since' (soft reason). More polite than から. ～てみましょう = let's try doing ～." },
        ],
      },
      {
        jp: "くつうりば", en: "Shoe Section", romaji: "kutsu uriba", wikiTitle: "Shoe",
        examples: [
          { level: "N5", jp: "くつうりばでくつをかいました。", en: "I bought shoes at the shoe section.", bn: "জুতার বিভাগে জুতা কিনলাম।",
            grammar: "で (action location) + をかいました = 'bought ～'. かいました is past polite of かう (to buy)." },
          { level: "N4", jp: "くつうりばでサイズをためしてからかいました。", en: "I tried on the size at the shoe section before buying.", bn: "জুতার বিভাগে সাইজ পরে দেখে তারপর কিনলাম।",
            grammar: "～てからかう = 'buy after doing ～'. てから = after doing. ためす = to try. Links two sequential actions." },
        ],
      },
      {
        jp: "かばんうりば", en: "Bag Section", romaji: "kaban uriba", wikiTitle: "Bag",
        examples: [
          { level: "N5", jp: "かばんうりばはどこですか。", en: "Where is the bag section?", bn: "ব্যাগ বিভাগ কোথায়?",
            grammar: "どこですか = 'where is it?'. The most basic location question in Japanese. は marks the topic." },
          { level: "N4", jp: "かばんうりばにいろいろなデザインのかばんがならんでいます。", en: "Various designs of bags are lined up in the bag section.", bn: "ব্যাগ বিভাগে নানা ডিজাইনের ব্যাগ সাজানো আছে।",
            grammar: "～がならんでいます = 'are lined up'. ならぶ = to line up. ている = ongoing state. いろいろな = various." },
        ],
      },
      {
        jp: "アクセサリーうりば", en: "Accessories Section", romaji: "akusesarii uriba", wikiTitle: "Fashion accessory",
        examples: [
          { level: "N5", jp: "アクセサリーうりばでゆびわをみました。", en: "I looked at rings at the accessories section.", bn: "অ্যাকসেসরিজ বিভাগে আংটি দেখলাম।",
            grammar: "で (location) + をみる = 'look at ～'. みました = past polite. Note: みる (to see/look) vs. みえる (can be seen)." },
          { level: "N4", jp: "アクセサリーうりばのネックレスはたかすぎてかえませんでした。", en: "The necklaces in the accessories section were too expensive to buy.", bn: "অ্যাকসেসরিজ বিভাগের নেকলেসগুলো খুব বেশি দামি ছিল, কিনতে পারিনি।",
            grammar: "～すぎて = 'too much, and so...'. たかすぎる = too expensive. ～すぎ + てform links to the result. かえませんでした = could not buy." },
        ],
      },
      {
        jp: "おもちゃうりば", en: "Toy Section", romaji: "omocha uriba", wikiTitle: "Toy",
        examples: [
          { level: "N5", jp: "おもちゃうりばはなんかいですか。", en: "What floor is the toy section on?", bn: "খেলনা বিভাগ কত তলায়?",
            grammar: "なんかい = what floor. かい is a counter for floors. Questions with なに/なん ask 'what' about a number or category." },
          { level: "N4", jp: "こどもがおもちゃうりばのまえをとおるたびに、なにかかってとせがみます。", en: "Every time we pass the toy section, my child begs me to buy something.", bn: "খেলনা বিভাগের সামনে দিয়ে যাওয়ার সময় বাচ্চা কিছু কিনে দিতে বায়না করে।",
            grammar: "～たびに = 'every time ～'. Attaches to verb plain form or noun+の. とおる = to pass by. せがむ = to beg/pester." },
        ],
      },
      {
        jp: "ほんうりば", en: "Book Section", romaji: "hon uriba", wikiTitle: "Bookstore",
        examples: [
          { level: "N5", jp: "ほんうりばでざっしをかいました。", en: "I bought a magazine at the book section.", bn: "বই বিভাগে একটি ম্যাগাজিন কিনলাম।",
            grammar: "ざっし = magazine. かいました = bought. で marks where the buying happened. Vocabulary: ほん (book), ざっし (magazine), しんぶん (newspaper)." },
          { level: "N4", jp: "ほんうりばでさがしていたさくしゃのしんかんがみつかりました。", en: "I found the new book by the author I was looking for at the book section.", bn: "বই বিভাগে যে লেখকের বই খুঁজছিলাম তার নতুন বই পেলাম।",
            grammar: "さがしていた (was looking for) modifies さくしゃ (author) as a relative clause. みつかる = to be found (intransitive)." },
        ],
      },
      {
        jp: "スポーツようひんうりば", en: "Sports Goods Section", romaji: "supootsu youhin uriba", wikiTitle: "Sporting goods",
        examples: [
          { level: "N5", jp: "スポーツようひんうりばでくつをかいます。", en: "I buy shoes at the sports goods section.", bn: "স্পোর্টস পণ্য বিভাগে জুতা কিনি।",
            grammar: "Present tense ます form can mean habitual action ('I buy') or near future ('I will buy'). Context tells which." },
          { level: "N4", jp: "スポーツようひんうりばにはテニスとサッカーのどうぐがそろっています。", en: "The sports goods section has tennis and soccer equipment available.", bn: "স্পোর্টস পণ্য বিভাগে টেনিস ও সকারের সরঞ্জাম পাওয়া যায়।",
            grammar: "～がそろっています = 'has ～ all lined up / well-stocked'. そろう = to be complete/all together. ている = ongoing state." },
        ],
      },
    ],

    "🏠 家庭・電気 Home & Electronics": [
      {
        jp: "かぐうりば", en: "Furniture Section", romaji: "kagu uriba", wikiTitle: "Furniture",
        examples: [
          { level: "N5", jp: "かぐうりばにいすがあります。", en: "There are chairs in the furniture section.", bn: "আসবাব বিভাগে চেয়ার আছে।",
            grammar: "～にAがあります = 'there is A in ～'. に marks the location of an inanimate object. あります = exists (for things)." },
          { level: "N4", jp: "かぐうりばでにあうソファをさがしています。", en: "I am looking for a matching sofa in the furniture section.", bn: "আসবাব বিভাগে মানানসই সোফা খুঁজছি।",
            grammar: "にあう = to suit/match. ～ている = ongoing action. さがしています = am looking for. でsearch location." },
        ],
      },
      {
        jp: "でんきせいひんうりば", en: "Electronics Section", romaji: "denki seihin uriba", wikiTitle: "Consumer electronics",
        examples: [
          { level: "N5", jp: "でんきせいひんうりばでテレビをみました。", en: "I looked at TVs in the electronics section.", bn: "ইলেকট্রনিক্স বিভাগে টেলিভিশন দেখলাম।",
            grammar: "みる = to look at / to watch. Context determines meaning. でんきせいひん = electrical products. うりば = sales floor/section." },
          { level: "N4", jp: "でんきせいひんうりばのスタッフにせつめいしてもらいました。", en: "I had a staff member in the electronics section explain it to me.", bn: "ইলেকট্রনিক্স বিভাগের কর্মীকে দিয়ে ব্যাখ্যা করিয়ে নিলাম।",
            grammar: "～にしてもらう = 'have someone do ～ for me'. に marks the person doing the action. もらう = to receive (an action)." },
        ],
      },
      {
        jp: "しょっきうりば", en: "Tableware Section", romaji: "shokki uriba", wikiTitle: "Tableware",
        examples: [
          { level: "N5", jp: "しょっきうりばでおさらをかいました。", en: "I bought plates at the tableware section.", bn: "টেবিলওয়্যার বিভাগে প্লেট কিনলাম।",
            grammar: "おさら = plate (お is an honorific prefix making it polite). さら alone is more casual. かいました = bought (past polite)." },
          { level: "N4", jp: "しょっきうりばのとうきのカップはいっかぞろいでかわいいです。", en: "The ceramic cups in the tableware section are in a matching set and very cute.", bn: "টেবিলওয়্যার বিভাগের সিরামিক কাপগুলো একটি সেটে এবং দেখতে সুন্দর।",
            grammar: "いっかぞろい = a set/matching collection. ～で (means/state) + adjective describes the state. とうき = ceramics/pottery." },
        ],
      },
    ],

    "🎭 娯楽・その他 Leisure & Other": [
      {
        jp: "うりば", en: "Sales Floor / Section", romaji: "uriba", wikiTitle: "Retail",
        examples: [
          { level: "N5", jp: "このうりばはどのフロアですか。", en: "Which floor is this section on?", bn: "এই বিভাগটি কোন তলায়?",
            grammar: "どの (which) + noun = 'which ～'. Interrogative: どの (which among several), どんな (what kind of)." },
          { level: "N4", jp: "うりばのはいちがかわったので、まよってしまいました。", en: "The layout of the sections changed, so I got confused.", bn: "বিভাগগুলোর বিন্যাস বদলে গেছে বলে পথ হারিয়ে ফেললাম।",
            grammar: "～ので = 'because / since'. ～てしまう = action completed (often with regret). まよってしまった = ended up getting lost." },
        ],
      },
      {
        jp: "インフォメーションセンター", en: "Information Center", romaji: "infomeshon sentaa", wikiTitle: "Information desk",
        examples: [
          { level: "N5", jp: "インフォメーションセンターはどこですか。", en: "Where is the information center?", bn: "ইনফরমেশন সেন্টার কোথায়?",
            grammar: "どこですか = 'where is it?'. This is the most common way to ask for a location. はmarkes topic." },
          { level: "N4", jp: "インフォメーションセンターでちずをもらいました。", en: "I received a map at the information center.", bn: "ইনফরমেশন সেন্টার থেকে একটি মানচিত্র নিলাম।",
            grammar: "で (location of action) + をもらう = receive ～. もらいました = received (past polite). ちず = map." },
        ],
      },
      {
        jp: "エレベーター", en: "Elevator / Lift", romaji: "erebeetaa", wikiTitle: "Elevator",
        examples: [
          { level: "N5", jp: "エレベーターはどこですか。", en: "Where is the elevator?", bn: "লিফট কোথায়?",
            grammar: "A basic location question. In a real store, you'd add details: エレベーターはあちらです (The elevator is over there)." },
          { level: "N4", jp: "エレベーターがこんでいたので、エスカレーターでのぼりました。", en: "The elevator was crowded, so I went up by escalator.", bn: "লিফট ভিড় ছিল, তাই এসক্যালেটরে উঠলাম।",
            grammar: "こんでいた = was crowded (past progressive). ので = because. エスカレーターで = by escalator (で = means of movement)." },
        ],
      },
      {
        jp: "エスカレーター", en: "Escalator", romaji: "esukareetaa", wikiTitle: "Escalator",
        examples: [
          { level: "N5", jp: "エスカレーターで３かいにいきます。", en: "I go to the 3rd floor by escalator.", bn: "এসক্যালেটরে করে ৩ তলায় যাই।",
            grammar: "で = by means of. に = destination marker. いきます = go (polite present). Direction: うえ (up) / した (down)." },
          { level: "N4", jp: "エスカレーターにのっているとき、あるかないでください。", en: "Please do not walk while on the escalator.", bn: "এসক্যালেটরে থাকার সময় হাঁটবেন না।",
            grammar: "～ているとき = 'while/when doing ～'. にのっているとき = while riding. ～ないでください = please don't do ～." },
        ],
      },
      {
        jp: "トイレ", en: "Restroom / Toilet", romaji: "toire", wikiTitle: "Toilet",
        examples: [
          { level: "N5", jp: "トイレはどこですか。", en: "Where is the restroom?", bn: "টয়লেট কোথায়?",
            grammar: "An essential phrase! どこ = where. The polite equivalent: おてあらいはどこですか (where is the washroom)." },
          { level: "N4", jp: "トイレをかりてもいいですか。", en: "May I use the restroom?", bn: "টয়লেট ব্যবহার করতে পারি?",
            grammar: "～てもいいですか = 'May I ～ / Is it okay to ～?'. The て-form of the verb + もいいですか. Very useful permission-asking pattern." },
        ],
      },
      {
        jp: "サービスカウンター", en: "Service Counter", romaji: "saabisu kauntaa", wikiTitle: "Customer service",
        examples: [
          { level: "N5", jp: "サービスカウンターはどこですか。", en: "Where is the service counter?", bn: "সার্ভিস কাউন্টার কোথায়?",
            grammar: "Loanwords (カタカナ) from English are very common in Japanese. サービス (service) + カウンター (counter) = service counter." },
          { level: "N4", jp: "サービスカウンターでかいものふくろをもらいました。", en: "I received a shopping bag at the service counter.", bn: "সার্ভিস কাউন্টার থেকে কেনাকাটার ব্যাগ পেলাম।",
            grammar: "で (location) + をもらう = receive ～ at. かいものふくろ = shopping bag. もらいました = received (past polite)." },
        ],
      },
      {
        jp: "ギフトラッピング", en: "Gift Wrapping", romaji: "gifuto rappingu", wikiTitle: "Gift wrapping",
        examples: [
          { level: "N5", jp: "ギフトラッピングをおねがいします。", en: "Please do gift wrapping.", bn: "গিফট র‍্যাপিং করে দিন।",
            grammar: "～をおねがいします = 'Please ～ / I request ～'. A very polite and natural request form. おねがい = request/please." },
          { level: "N4", jp: "プレゼントなので、ギフトラッピングをしてもらえますか。", en: "Since it is a present, could you do gift wrapping for me?", bn: "এটি উপহার, তাই গিফট র‍্যাপিং করে দিতে পারবেন?",
            grammar: "なので = 'since it is / because it is'. ～てもらえますか = 'Could you do ～ for me?'. Polite request with もらう potential." },
        ],
      },
    ],
  },
};

export default lesson2;
