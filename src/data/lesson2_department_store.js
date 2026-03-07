/**
 * LESSON 2 — デパート (Department Store)
 * Source: Textbook Page 25
 *
 * Vocabulary is grouped into three categories:
 *   1. Floor numbers & building terms
 *   2. Departments & services found on each floor
 *   3. Products & goods sold in the store
 */
const lesson2 = {
  id:      "lesson2_department_store",
  title:   "デパート",
  titleEn: "Department Store",
  emoji:   "🏬",
  page:    25,

  vocab: {

    // ── Category 1: Floor & Building Terms ──────────────────────
    "🏢 階・建物 Floors & Building": [
      {
        jp: "おくじょう", en: "Rooftop",        romaji: "okujou",
        wikiTitle: "Rooftop",
        sentence: "おくじょうに遊園地があります。",
        sentenceEn: "There is an amusement area on the rooftop.",
      },
      {
        jp: "〜かい", en: "Floor / Storey",   romaji: "~kai",
        wikiTitle: "Storey",
        sentence: "このデパートは８かいまであります。",
        sentenceEn: "This department store has up to the 8th floor.",
      },
      {
        jp: "ちか", en: "Basement",           romaji: "chika",
        wikiTitle: "Basement",
        sentence: "ちか１かいは食品売り場です。",
        sentenceEn: "The basement 1st floor is the food section.",
      },
      {
        jp: "ちゅうしゃじょう", en: "Car Park / Parking Lot", romaji: "chuushajou",
        wikiTitle: "Parking lot",
        sentence: "ちゅうしゃじょうはちか２かいです。",
        sentenceEn: "The car park is on basement floor 2.",
      },
      {
        jp: "ゆうえんち", en: "Amusement Area", romaji: "yuuenchi",
        wikiTitle: "Amusement park",
        sentence: "おくじょうのゆうえんちで遊びました。",
        sentenceEn: "I played at the rooftop amusement area.",
      },
    ],

    // ── Category 2: Food & Dining ────────────────────────────────
    "🍽️ 食事・食品 Food & Dining": [
      {
        jp: "レストラン", en: "Restaurant",    romaji: "resutoran",
        wikiTitle: "Restaurant",
        sentence: "８かいのレストランでランチを食べました。",
        sentenceEn: "I had lunch at the restaurant on the 8th floor.",
      },
      {
        jp: "もよおしものかいじょう", en: "Event Hall", romaji: "moyooshimono kaijou",
        wikiTitle: "Convention center",
        sentence: "催し物会場でコンサートがあります。",
        sentenceEn: "There is a concert at the event hall.",
      },
      {
        jp: "しょくひん", en: "Food / Groceries", romaji: "shokuhin",
        wikiTitle: "Food",
        sentence: "ちか１かいで食品を買います。",
        sentenceEn: "I buy food on basement floor 1.",
      },
    ],

    // ── Category 3: Fashion & Accessories ───────────────────────
    "👗 ファッション Fashion & Accessories": [
      {
        jp: "しんしふく", en: "Men's Wear",    romaji: "shinshifuku",
        wikiTitle: "Clothing",
        sentence: "３かいは紳士服売り場です。",
        sentenceEn: "The 3rd floor is the men's wear section.",
      },
      {
        jp: "ふじんふく", en: "Ladies' Wear",  romaji: "fujinfuku",
        wikiTitle: "Women's clothing",
        sentence: "ふじんふくは２かいにあります。",
        sentenceEn: "Ladies' wear is on the 2nd floor.",
      },
      {
        jp: "こどもふく", en: "Children's Clothes", romaji: "kodomofuku",
        wikiTitle: "Children's clothing",
        sentence: "子ども服は５かいです。",
        sentenceEn: "Children's clothes are on the 5th floor.",
      },
      {
        jp: "くつ", en: "Shoes",              romaji: "kutsu",
        wikiTitle: "Shoe",
        sentence: "１かいで靴を買いました。",
        sentenceEn: "I bought shoes on the 1st floor.",
      },
      {
        jp: "かばん", en: "Bag / Handbag",    romaji: "kaban",
        wikiTitle: "Handbag",
        sentence: "かばん売り場は１かいです。",
        sentenceEn: "The bag section is on the 1st floor.",
      },
      {
        jp: "アクセサリー", en: "Accessories", romaji: "akusesarii",
        wikiTitle: "Fashion accessory",
        sentence: "アクセサリーを１かいで探しています。",
        sentenceEn: "I am looking for accessories on the 1st floor.",
      },
      {
        jp: "けしょうひん", en: "Cosmetics",   romaji: "keshouhin",
        wikiTitle: "Cosmetics",
        sentence: "けしょうひんは１かいで売っています。",
        sentenceEn: "Cosmetics are sold on the 1st floor.",
      },
    ],

    // ── Category 4: Home & Electronics ──────────────────────────
    "🛋️ 家具・家電 Home & Electronics": [
      {
        jp: "かぐ", en: "Furniture",          romaji: "kagu",
        wikiTitle: "Furniture",
        sentence: "４かいで家具を見ました。",
        sentenceEn: "I looked at furniture on the 4th floor.",
      },
      {
        jp: "しょっき", en: "Kitchenware / Tableware", romaji: "shokki",
        wikiTitle: "Tableware",
        sentence: "食器は４かいにあります。",
        sentenceEn: "Kitchenware is on the 4th floor.",
      },
      {
        jp: "でんかせいひん", en: "Electrical Appliances", romaji: "denka seihin",
        wikiTitle: "Home appliance",
        sentence: "電化製品は４かいで買えます。",
        sentenceEn: "You can buy electrical appliances on the 4th floor.",
      },
    ],

    // ── Category 5: Leisure & Accessories ───────────────────────
    "⌚ 趣味・その他 Leisure & Accessories": [
      {
        jp: "とけい", en: "Watch / Clock",    romaji: "tokei",
        wikiTitle: "Watch",
        sentence: "７かいで時計を買いました。",
        sentenceEn: "I bought a watch on the 7th floor.",
      },
      {
        jp: "めがね", en: "Spectacles / Glasses", romaji: "megane",
        wikiTitle: "Glasses (eyewear)",
        sentence: "めがねは７かいで売っています。",
        sentenceEn: "Glasses are sold on the 7th floor.",
      },
      {
        jp: "スポーツようひん", en: "Sporting Goods", romaji: "supootsu youhin",
        wikiTitle: "Sporting goods",
        sentence: "スポーツ用品は６かいにあります。",
        sentenceEn: "Sporting goods are on the 6th floor.",
      },
      {
        jp: "りょこうようひん", en: "Travel / Leisure Goods", romaji: "ryokou youhin",
        wikiTitle: "Travel",
        sentence: "旅行用品も６かいで買えます。",
        sentenceEn: "Travel goods can also be bought on the 6th floor.",
      },
      {
        jp: "おもちゃ", en: "Toys",           romaji: "omocha",
        wikiTitle: "Toy",
        sentence: "おもちゃは５かいです。",
        sentenceEn: "Toys are on the 5th floor.",
      },
      {
        jp: "ほん", en: "Books",              romaji: "hon",
        wikiTitle: "Book",
        sentence: "本は５かいで売っています。",
        sentenceEn: "Books are sold on the 5th floor.",
      },
      {
        jp: "ぶんぼうぐ", en: "Stationery",   romaji: "bunbougu",
        wikiTitle: "Stationery",
        sentence: "文房具は５かいにあります。",
        sentenceEn: "Stationery is on the 5th floor.",
      },
    ],

  },
};

export default lesson2;
