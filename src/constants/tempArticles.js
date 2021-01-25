const tempArticles = [
  {
    _id: 1,
    keyword: "toto",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 2,
    keyword: "kokos",
    title: "Лесные огоньки: история одной фотографии",
    text: "nkjgadk dgh dfgaksg  sgdhljdaghlie jfslkfj glldfkjg sldkj lkg l dlfgjlkdjglkjg qopwje erghn  sughk ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 3,
    keyword: "lilio",
    title: "Article 3",
    text: "nkjgadk dgh dfgaksg  sgрлорлораылова лыовар лыовар ылорыалоывра Снова замерло все до рассвета дверь не скрипнет не вспыхнет огонь только слышно на улице где то одинокая броодит гармонь то пойдет на поля за ворота, то обратно вернется опять словно ищет в потемках кого то ти не можетлоыар лорлорфылварл ылоар ылоар лоыра лыора лыора лыоар  лыоралорлвоыагршукдлолрп ловап укшдфлопдлок порповрк пупрулкрпдулок длукпо дулкрпдрдукрп укпрдукпр дупрдцлрп оцпрдкцлпдлкподлкоп кдло дуклопдуклпоудкподулпо дкулпоудлкпоудлукдпо dhljdaghlie jfslkfj glldfkjg sldkj lkg l dlfgjlkdjglkjg qopwje erghn  sughk ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 4,
    keyword: "toto",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 5,
    keyword: "toto",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 6,
    keyword: "totos",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 7,
    keyword: "totos",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 8,
    keyword: "totos",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 9,
    keyword: "toto",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 10,
    keyword: "toto",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },
  {
    _id: 11,
    keyword: "kokos",
    title: "Национальное достояние - парки",
    text: "В 2016 году Америка отмечала lkjlkjhgjhgj hjg jhgj g jhgjhgjhg gjhg jhgj hg jhg jhg jhgj j kjl kjljlkjkhk jh kjhk khkjhkjhkjh kjhk hkjh kjhk kjh kjh kважный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе. ",
    date: "01/01/2021",
    source: "Источник",
    link: "http://klkl.ru",
    image: "https://i5.walmartimages.com/asr/873a87a1-a493-481b-81db-a0354ea74eed_1.63d6f1e058aebaa9a080257871008117.jpeg",
    owner: "kkk"
  },

]

export default tempArticles;
