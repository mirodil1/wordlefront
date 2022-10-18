import { createStore } from 'vuex'

export default createStore({
  state: {
    words_list: ['уйғур', 'билик', 'гаров', 'савия', 'яхдон', 'патак', 'лаъли', 'ҳўкиз', 'русум', 'қадим', 'ифода', 'озода', 'пинак', 'сабот', 'қўпол', 'ундош', 'касра', 'керак', 'бунёд', 'мароқ', 'сўкиш', 'туҳфа', 'ровий', 'хароб', 'тароқ', 'суюнч', 'курак', 'метро', 'фожиа', 'тешик', 'чорсу', 'қиров', 'ёндош', 'грипп', 'касса', 'қилиқ', 'қамоқ', 'туғма', 'бисот', 'чапак', 'айғоқ', 'кураш', 'бекат', 'пойга', 'ишбай', 'харид', 'совуқ', 'бўғим', 'ватан', 'теран', 'сиғим', 'сўроқ', 'ўнқир', 'дарра', 'асира', 'уммон', 'эркак', 'ишғол', 'илмли', 'нодир', 'ялқов', 'қийиқ', 'қадоқ', 'кириш', 'чинни', 'тақиқ', 'опера', 'лўнда', 'вилка', 'сахий', 'нокас', 'базўр', 'боғич', 'ширин', 'анҳор', 'қулоч', 'газак', 'висол', 'биров', 'коҳин', 'нечов', 'ахлоқ', 'мурод', 'парад', 'шукур', 'манго', 'чиқит', 'насия', 'ишонч', 'тувоқ', 'ботир', 'бемор', 'ворис', 'майиз', 'ғурра', 'тутам', 'совчи', 'шашка', 'тонна', 'тиниқ', 'илдиз', 'қумри', 'ҳолва', 'хижил', 'олқиш', 'жоним', 'никоҳ', 'ғужум', 'башар', 'бекор', 'калла', 'бедор', 'шаҳло', 'ёнчиқ', 'гуноҳ', 'нуқта', 'лазер', 'забур', 'ақиқа', 'телба', 'жусса', 'ролик', 'биқин', 'калий', 'расво', 'яктак', 'канат', 'фанор', 'мавзе', 'олима', 'бўғма', 'шарпа', 'авлиё', 'ордер', 'лобар', 'томир', 'яксон', 'эллик', 'лофчи', 'ғунча', 'фозил', 'орган', 'лаҳим', 'бирам', 'нукта', 'қайта', 'сумак', 'ривоч', 'проба', 'э-воҳ', 'челак', 'хамса', 'малла', 'тежам', 'ҳосил', 'демак', 'мозий', 'узмоқ', 'ҳайит', 'чаппа', 'шолча', 'сувли', 'фокус', 'дубур', 'иззат', 'ёлқин', 'қирол', 'ровон', 'бахил', 'тўлин', 'жавзо', 'танча', 'нуфус', 'олғир', 'испан', 'нишаб', 'меъёр', 'момиқ', 'сўғир', 'изғин', 'энага', 'довул', 'ошёна', 'ҳавас', 'илғор', 'еврей', 'ўркач', 'ўнгир', 'ўйчан', 'тўғон', 'қисим', 'гўзал', 'қозон', 'мохов', 'сюжет', 'анонс', 'нифоқ', 'бўйли', 'кўлик', 'роҳиб', 'кўрик', 'қофия', 'ҳарчи', 'ётмоқ', 'халфа', 'оқсув', 'содиқ', 'фарёд', 'қозоқ', 'фуруш', 'думба', 'жайра', 'гузар', 'кўмак', 'кўкат', 'чизиқ', 'ёввош', 'шафиқ', 'жизза', 'майна', 'идрок', 'чатоқ', 'укроп', 'муҳим', 'ангор', 'рутба', 'мисра', 'сўқим', 'рубоб', 'иқрор', 'айрон', 'физик', 'ёрлиқ', 'рўмол', 'бокир', 'куйиш', 'туман', 'алғов', 'жамол', 'ҳашам', 'кўрпа', 'забон', 'камар', 'шукуҳ', 'шоира', 'мерос', 'хазон', 'лобид', 'ифтор', 'сайин', 'таниш', 'асака', 'аслан', 'метан', 'хумча', 'ҳазар', 'балон', 'мовий', 'бадан', 'сағир', 'тубан', 'етмоқ', 'бўғин', 'тугун', 'савоб', 'ташна', 'бехуд', 'сириқ', 'завод', 'пенал', 'ислоҳ', 'кишан', 'тугма', 'сопол', 'совун', 'жинни', 'бичим', 'рақам', 'йўрма', 'бўяма', 'ғазаб', 'қойим', 'мижжа', 'тавон', 'узвий', 'асҳоб', 'юлдуз', 'узрли', 'улама', 'адойи', 'сапча', 'ибрий', 'дуэль', 'қўтос', 'чарви', 'шиқир', 'косов', 'юзлик', 'сифат', 'танга', 'хутба', 'рақиб', 'тўкин', 'яхлит', 'бўғоз', 'товуқ', 'тўшли', 'тамом', 'сурма', 'бирда', 'бошли', 'ланка', 'алфоз', 'ҳунар', 'фасиҳ', 'агент', 'бўлак', 'илмий', 'саноқ', 'айвон', 'зарил', 'текис', 'кўзгу', 'пакет', 'узана', 'савил', 'сукут', 'раҳим', 'бешов', 'тузум', 'пучак', 'кекли', 'дучор', 'ҳалол', 'чарос', 'катта', 'таппи', 'қулча', 'булоқ', 'найза', 'гувоҳ', 'қойил', 'кўмик', 'букик', 'норча', 'чигил', 'жиҳат', 'пресс', 'дўнон', 'пешво', 'раъно', 'курси', 'лимит', 'тўсиқ', 'савод', 'оппоқ', 'совут', 'ҳавон', 'нечун', 'билим', 'плато', 'туроқ', 'васий', 'бежон', 'камон', 'бутоқ', 'қадақ', 'комил', 'багаж', 'қисса', 'чатиш', 'билет', 'қўноқ', 'йўрға', 'поезд', 'оптик', 'оқчор', 'матла', 'талон', 'ёрдам', 'буров', 'зукко', 'қайин', 'класс', 'армия', 'жовон', 'нохуш', 'хилоф', 'тобут', 'элдош', 'ранда', 'инсон', 'бироз', 'ҳамин', 'қадаҳ', 'драма', 'сўзан', 'қасам', 'ғаним', 'тобоқ', 'жавоб', 'буруқ', 'тамал', 'лаган', 'чучук', 'чиқиш', 'миққи', 'ниҳоя', 'пасха', 'чўчқа', 'юзсиз', 'шотут', 'жилов', 'пайча', 'арқоқ', 'яққол', 'ҳотам', 'носоз', 'издош', 'орсиз', 'ўттиз', 'тумба', 'гирён', 'қудуқ', 'айрам', 'сирка', 'кавак', 'майиб', 'заҳра', 'тариф', 'восил', 'музей', 'илгир', 'вакил', 'хоҳиш', 'қўним', 'ҳанги', 'занги', 'қасос', 'томон', 'ғавғо', 'ёнбош', 'бўкса', 'ёнғоқ', 'остки', 'дамба', 'ялтоқ', 'лаҳад', 'тўзиқ', 'жажжи', 'мозор', 'чилла', 'довот', 'алоқа', 'ёзмоқ', 'икром', 'латиф', 'тамба', 'узгич', 'радди', 'эшкак', 'далда', 'ўлпон', 'бедоғ', 'ғариб', 'сурон', 'ифлос', 'пўлат', 'бурим', 'кабир', 'сўпоқ', 'актёр', 'самбо', 'тизим', 'жужуқ', 'робот', 'шонли', 'атлас', 'қомус', 'жилва', 'ёшлик', 'қубба', 'бўлма', 'зебра', 'пилот', 'бедин', 'мироб', 'йўқча', 'минор', 'нуфуз', 'раунд', 'баъда', 'етмак', 'бовар', 'балоқ', 'чанғи', 'саҳар', 'тикиш', 'кафил', 'кўшиш', 'ашула', 'афсус', 'сатта', 'кунчи', 'зимма', 'сиқим', 'тожир', 'пақир', 'ҳозир', 'тутқа', 'ҳофиз', 'тезоб', 'далил', 'дугоҳ', 'ипсиз', 'нарса', 'хўрак', 'олтин', 'финал', 'ортиқ', 'сайил', 'сақич', 'ҳадик', 'шиғил', 'кўкча', 'ваҳма', 'чайла', 'хитоб', 'чигал', 'яллиғ', 'тамға', 'йироқ', 'фалак', 'маром', 'хўппа', 'ирсий', 'фойда', 'котиб', 'урпоқ', 'қусур', 'арзон', 'инжиқ', 'ишқор', 'каноп', 'қимиз', 'шотир', 'рўкач', 'ногоҳ', 'хирқа', 'абзал', 'хотир', 'аввал', 'зобит', 'тупка', 'сабзи', 'титиқ', 'хўрда', 'товуш', 'жория', 'масса', 'дукчи', 'чивин', 'соқол', 'кучли', 'қўрчи', 'нодон', 'тўлиқ', 'кошин', 'бедил', 'ҳануз', 'бутун', 'бокал', 'шакар', 'ёпқич', 'эҳсон', 'арвоҳ', 'жарғи', 'наҳот', 'равоқ', 'учлик', 'сарпо', 'роҳат', 'қуйма', 'қовуқ', 'ҳалво', 'илова', 'питра', 'ёвлик', 'зарда', 'овора', 'кечув', 'овсин', 'тасма', 'шинам', 'мумиё', 'қорув', 'пичоқ', 'бузоқ', 'сигир', 'астар', 'ботиқ', 'сауна', 'дийда', 'сувот', 'химик', 'эскиз', 'руҳан', 'қўшма', 'майит', 'лоҳас', 'ўйноқ', 'чигит', 'ғайри', 'тараф', 'тотув', 'сиқув', 'проза', 'ҳисса', 'шивит', 'безор', 'пачка', 'шарақ', 'мақом', 'ночор', 'хамак', 'собиқ', 'ҳаким', 'сўров', 'ўлчак', 'ваҳий', 'чочиқ', 'пичан', 'қуров', 'ғулув', 'холис', 'қалай', 'саржа', 'татиқ', 'йиғиқ', 'шафақ', 'бўғов', 'паққа', 'жўрчи', 'товус', 'ахлат', 'чакки', 'ишқий', 'текин', 'қанор', 'бебош', 'битик', 'мазах', 'анжир', 'шовул', 'сукун', 'қисир', 'ялмон', 'анқов', 'лунги', 'йиғиш', 'мотам', 'зоҳид', 'жадди', 'аёқчи', 'барпо', 'сўфий', 'ўдаға', 'ерсиз', 'илҳом', 'шерик', 'топаз', 'анбар', 'сарой', 'қизиқ', 'шувут', 'толиб', 'шўриш', 'ўқдон', 'эзгин', 'кўчат', 'ибора', 'лазги', 'сачоқ', 'тўқай', 'доска', 'хатиб', 'шоссе', 'негов', 'учқур', 'беҳаё', 'ўнқов', 'унвон', 'иснод', 'омбур', 'фоний', 'жиққа', 'бетон', 'жасур', 'сўққа', 'парда', 'жигар', 'замон', 'инсоф', 'аслий', 'юксак', 'хивич', 'устун', 'туйғу', 'нурли', 'посон', 'сироп', 'бидон', 'жўяли', 'йиғим', 'номус', 'чувур', 'саҳна', 'нусха', 'идора', 'қутқу', 'чўғол', 'юнгли', 'чорак', 'шланг', 'ўювчи', 'воқеа', 'образ', 'товча', 'хашак', 'алоҳа', 'раиса', 'шўрва', 'ихчам', 'серёғ', 'виски', 'сунна', 'қизил', 'ўчлик', 'атиги', 'кварц', 'малак', 'мўйна', 'гилос', 'рухий', 'пирог', 'чақиқ', 'иҳота', 'аршин', 'босқи', 'бежиз', 'барол', 'будка', 'ловия', 'банка', 'довол', 'шилиқ', 'юрист', 'баҳра', 'парик', 'сочма', 'зуҳра', 'номер', 'шағал', 'ўзмоқ', 'муқим', 'жадал', 'доира', 'сийна', 'бичиқ', 'туғли', 'қасир', 'назла', 'эсвос', 'лойли', 'чуғур', 'шариф', 'похол', 'уқмоқ', 'инкор', 'қўшиқ', 'кулба', 'болон', 'калта', 'фароғ', 'қавом', 'фақиҳ', 'тизза', 'хуфия', 'уйғоқ', 'тупук', 'қипиқ', 'шапка', 'давом', 'очқич', 'хачир', 'итоат', 'парво', 'чавоқ', 'разил', 'чорва', 'чурра', 'ёлғон', 'банан', 'лимон', 'сурур', 'пайса', 'мадад', 'низом', 'жиҳоз', 'суфий', 'томат', 'ғовак', 'унмоқ', 'кучер', 'малик', 'айрим', 'муҳит', 'сулук', 'тугал', 'байир', 'мийиқ', 'ўрдак', 'иймон', 'қабиҳ', 'чекиш', 'зилол', 'шараф', 'ойнак', 'майда', 'оқава', 'қотма', 'гурра', 'сувоқ', 'попук', 'савақ', 'шалоқ', 'лимфа', 'қарич', 'чалоб', 'ғовур', 'ваъда', 'сулла', 'қайиш', 'барча', 'лавҳа', 'дакки', 'ахбор', 'ҳафта', 'жадий', 'авлоқ', 'тиниш', 'динчи', 'жилға', 'тўрва', 'сотих', 'ўйнаш', 'чўкик', 'ниҳол', 'иқлим', 'чечак', 'қочиқ', 'ғозий', 'мизож', 'созчи', 'бўлиқ', 'руҳия', 'мушук', 'чақир', 'зуғум', 'тироб', 'ҳоким', 'спирт', 'извош', 'заифа', 'битим', 'турна', 'тумоқ', 'шуъла', 'суғур', 'ўзбек', 'интиқ', 'турли', 'давра', 'келин', 'тепки', 'сарак', 'дўппи', 'какку', 'сўлиқ', 'фотиҳ', 'қафас', 'иркит', 'тўғри', 'палос', 'тумов', 'касод', 'ўтган', 'радар', 'қочоқ', 'ҳошия', 'абхаз', 'хўтик', 'ғалча', 'чайир', 'аждар', 'тухум', 'закий', 'ноқил', 'овоза', 'азият', 'соҳиб', 'равоч', 'мурда', 'абжир', 'ҳужум', 'ражаб', 'татар', 'қаҳва', 'ҳамда', 'сиқиш', 'соғар', 'илдам', 'ясмин', 'ғилоф', 'лўппи', 'чолғу', 'халта', 'илғов', 'гўёки', 'ноаён', 'ўтлов', 'тутун', 'ўхшаш', 'сўзак', 'шобир', 'банот', 'берет', 'инжил', 'бегим', 'йиғма', 'шаҳар', 'тожик', 'заҳар', 'бугун', 'хоқон', 'халаф', 'пашша', 'қайчи', 'бўлар', 'майса', 'овсар', 'аҳоли', 'топиш', 'кўмир', 'панжа', 'чашма', 'карра', 'авара', 'илҳақ', 'босиқ', 'новда', 'ғулом', 'беҳад', 'варақ', 'кабоб', 'кечик', 'беаёв', 'қамиш', 'манот', 'канал', 'сўқир', 'ношод', 'беақл', 'чўққи', 'ходим', 'тўлов', 'ташқи', 'сузма', 'калиш', 'уламо', 'арава', 'мужда', 'лазиз', 'қашқа', 'дарак', 'кавуш', 'хурма', 'қўшоқ', 'сўхта', 'терак', 'ҳужра', 'барий', 'абзац', 'ҳазил', 'дагир', 'бирла', 'жумъа', 'қовоқ', 'санам', 'афзун', 'қонун', 'етаки', 'ришта', 'ақида', 'нозир', 'ғалва', 'нохун', 'дутор', 'пульт', 'мечал', 'абжақ', 'япроқ', 'ричаг', 'калён', 'итвой', 'синод', 'тенор', 'афгор', 'патир', 'пучуқ', 'инъом', 'мотив', 'наъра', 'тақия', 'ҳадеб', 'сўғон', 'ҳилол', 'марта', 'наҳор', 'ғизол', 'кўсак', 'аччиқ', 'сирма', 'салоҳ', 'йиғув', 'барно', 'тағин', 'торли', 'калом', 'эшлик', 'кашол', 'сезон', 'тотли', 'фюрер', 'рэкет', 'аграр', 'мулат', 'доимо', 'эпчил', 'нағал', 'чукри', 'чаман', 'тахта', 'устоз', 'ўнлик', 'фориғ', 'ўтхўр', 'сайис', 'акбар', 'водий', 'попоп', 'унсур', 'хинин', 'гўлах', 'таноб', 'ҳуққа', 'маъво', 'стоик', 'лабир', 'тириш', 'ҳалок', 'канна', 'модда', 'ровоч', 'найча', 'туташ', 'мойил', 'дадил', 'мучал', 'кирчи', 'кошки', 'штрих', 'логик', 'ислом', 'почин', 'четки', 'дўққи', 'назар', 'бигиз', 'юқори', 'далла', 'танти', 'талоқ', 'уятли', 'маъюс', 'қақир', 'лақма', 'буғли', 'ребус', 'етмиш', 'франк', 'ғичир', 'тягач', 'милод', 'қозиқ', 'соҳир', 'мадор', 'китоб', 'ҳакам', 'қабил', 'кўсов', 'линча', 'полип', 'майка', 'абжад', 'талха', 'золим', 'парра', 'негиз', 'нобуд', 'емтик', 'ширма', 'қибла', 'чўкма', 'қонли', 'аричи', 'мудом', 'буфер', 'бехос', 'уйғун', 'савам', 'зотли', 'тийра', 'аждод', 'ўтрук', 'ялпиз', 'болиғ', 'ясама', 'киноя', 'ойсиз', 'моғор', 'тутим', 'ирода', 'ғуруб', 'ҳовли', 'орият', 'зовур', 'жилла', 'архив', 'беайб', 'бирга', 'чалғи', 'лекин', 'қолоқ', 'сония', 'тўфон', 'боқув', 'ардоқ', 'лаққа', 'гавда', 'ҳарир', 'ҳуқуқ', 'мунча', 'спорт', 'қориқ', 'мангу', 'пайдо', 'видео', 'ҳакка', 'дўлма', 'беҳис', 'пиёла', 'хотин', 'вокал', 'нусқа', 'шуъба', 'хотам', 'қария', 'куйик', 'изҳор', 'ферма', 'чивиқ', 'қалам', 'уксус', 'танҳо', 'фируз', 'томоқ', 'тўёна', 'декан', 'сузук', 'эргаш', 'ҳатто', 'хоним', 'пахса', 'бомба', 'калон', 'баҳам', 'маҳол', 'қисиқ', 'жоҳил', 'кекса', 'минус', 'йирик', 'путур', 'дурда', 'ёлпўш', 'норин', 'ёмғир', 'офтоб', 'томчи', 'тўзим', 'уввос', 'тўпиқ', 'мурид', 'тўшак', 'конус', 'лозим', 'зиёли', 'ноҳақ', 'савол', 'беасо', 'старт', 'ирмоқ', 'либос', 'қорин', 'бочка', 'қўшин', 'автор', 'жасад', 'яйлов', 'нигор', 'луғат', 'ривож', 'аудит', 'ҳовуз', 'тушум', 'тукли', 'эвара', 'беҳуш', 'ғалла', 'шошма', 'болға', 'жануб', 'темир', 'қийма', 'девор', 'дудоқ', 'шубҳа', 'оқлов', 'имкон', 'урвоқ', 'манқа', 'хўроз', 'димиқ', 'чақич', 'сомса', 'ғойиб', 'синаш', 'даҳан', 'соҳил', 'қўтон', 'сезги', 'жорий', 'набот', 'манти', 'қулоқ', 'тезак', 'устод', 'зарча', 'кулол', 'нозик', 'тумор', 'соқит', 'табақ', 'сайёд', 'бурун', 'ғўлак', 'ижара', 'ғолиб', 'ажрим', 'барот', 'тутал', 'салла', 'биққа', 'машоқ', 'тавба', 'йўтал', 'закот', 'газон', 'арман', 'ёзлоқ', 'тезда', 'яланг', 'анбуҳ', 'чоғир', 'афзал', 'ўтлоқ', 'хирпа', 'гуппи', 'сомон', 'бодом', 'вазир', 'токча', 'ўмгак', 'ёлғиз', 'ҳийла', 'завжа', 'тошма', 'каъба', 'қийин', 'мақол', 'дарча', 'тўзон', 'ёнида', 'талай', 'очлик', 'ҳалак', 'йўлка', 'кросс', 'сафро', 'мамот', 'гажак', 'эгачи', 'муҳра', 'ақлли', 'тарақ', 'шайба', 'мумли', 'қатра', 'беном', 'олмон', 'шахта', 'холос', 'фатал', 'фақир', 'саман', 'дайди', 'чўлоқ', 'ҳикоя', 'қучоқ', 'равиш', 'ҳамён', 'ҳисоб', 'бедод', 'бевош', 'дариғ', 'фалақ', 'гуруч', 'ниҳон', 'афиша', 'томли', 'устки', 'ўтмас', 'тотал', 'осмон', 'ҳузур', 'бурро', 'ҳалим', 'пухта', 'иддао', 'оқсоч', 'мулла', 'ковак', 'аскар', 'калит', 'авроқ', 'сўлим', 'босма', 'гобой', 'замин', 'товон', 'эълон', 'тупик', 'жаҳон', 'ғусса', 'пишиқ', 'почча', 'дзюдо', 'зарур', 'чўзиқ', 'лойиқ', 'иноят', 'сўлак', 'ғофил', 'пешин', 'чилим', 'бурда', 'оқила', 'кўчки', 'чирой', 'нимта', 'отлиқ', 'ўрмон', 'чизма', 'кашта', 'мўғул', 'ишсиз', 'тизма', 'сатин', 'фиғон', 'фироқ', 'озуқа', 'афғон', 'сабаб', 'бўлим', 'пушти', 'чўтир', 'колба', 'кофта', 'ариза', 'жумла', 'нанай', 'хаста', 'таққа', 'қалъа', 'қайла', 'тўхта', 'лампа', 'соққа', 'нўноқ', 'пўкак', 'хийла', 'зирак', 'қарта', 'миқёс', 'хиром', 'ўзлик', 'пешоб', 'феруз', 'қуруқ', 'уюшма', 'фалаж', 'вафот', 'халат', 'кечки', 'ханда', 'фонус', 'ўлчов', 'содда', 'палов', 'заҳот', 'орден', 'акция', 'вагон', 'ўлмоқ', 'завол', 'оҳанг', 'аблаҳ', 'ишчан', 'узлат', 'бўйин', 'чочқи', 'таъна', 'сариқ', 'талаб', 'тромб', 'рахна', 'оқова', 'тагли', 'маҳси', 'бағир', 'манба', 'кофир', 'балет', 'хатар', 'ҳомий', 'ишрат', 'яйлоқ', 'баҳаё', 'барон', 'бенаф', 'нажот', 'тутқи', 'фасод', 'сеанс', 'ошпаз', 'офият', 'камёб', 'кефир', 'билак', 'атлет', 'булут', 'сирға', 'туғён', 'дудуқ', 'фараз', 'зарба', 'эъзоз', 'қиёфа', 'донор', 'кўчма', 'кучук', 'изчил', 'солиқ', 'ситам', 'соқов', 'кўхна', 'обида', 'сухан', 'сероб', 'кинна', 'ручка', 'шароб', 'сутка', 'сурат', 'аёзли', 'чаноқ', 'сирот', 'илмоқ', 'услуб', 'сохта', 'зиқна', 'тайёр', 'шамол', 'даста', 'хамир', 'сочиқ', 'акула', 'этник', 'савдо', 'пилик', 'кесма', 'уюрма', 'семиз', 'тўнка', 'масал', 'сибир', 'аҳком', 'тикан', 'рамка', 'қошиқ', 'ғазал', 'нафис', 'хусус', 'шимол', 'юпанч', 'эҳром', 'ҳақиқ', 'тавоф', 'ундов', 'воҳид', 'чуқур', 'ўтмиш', 'дағал', 'белги', 'абгор', 'печак', 'малол', 'фауна', 'равза', 'муфта', 'талаш', 'дохил', 'ўрнак', 'боқий', 'чидам', 'жиҳод', 'кезак', 'волий', 'сабоқ', 'тобон', 'сочқи', 'лицей', 'жетон', 'ёдгор', 'вужуд', 'пункт', 'ҳамма', 'нарда', 'метил', 'ғализ', 'беруҳ', 'отдош', 'қирра', 'вольт', 'мотор', 'бурга', 'салат', 'писта', 'сўгал', 'ҳимоя', 'йўлак', 'қитиқ', 'кенжа', 'чароғ', 'ўқлов', 'ақоид', 'лента', 'фирма', 'раста', 'қават', 'буйра', 'қўтир', 'қайиқ', 'тезис', 'чўпон', 'тушов', 'ўпқон', 'зуҳур', 'нотиқ', 'букур', 'тилак', 'қурол', 'ирқчи', 'асрий', 'адлия', 'сетка', 'қарор', 'қотил', 'астма', 'аҳмоқ', 'касал', 'зағча', 'буқоқ', 'мўмай', 'олмос', 'балиқ', 'ҳушёр', 'штамп', 'қайғу', 'мафия', 'ғазна', 'ўлчам', 'собит', 'раият', 'мажоз', 'овқат', 'аранг', 'эсноқ', 'чинор', 'ошхўр', 'марра', 'чодир', 'қарши', 'косиб', 'зиёда', 'истак', 'тоқат', 'тўпон', 'мағиз', 'тўтиё', 'кийим', 'авлод', 'қатор', 'мушак', 'ажина', 'зўрға', 'хомуш', 'оқсоқ', 'бисёр', 'ошкор', 'қалин', 'сувўт', 'чевар', 'табиб', 'йиғин', 'тайин', 'камол', 'кўҳли', 'гадой', 'тутум', 'ойдин', 'океан', 'купон', 'метин', 'вилла', 'курка', 'патта', 'қанот', 'сазан', 'алвон', 'беғам', 'исроф', 'ўткир', 'озғин', 'салон', 'сулув', 'ўкинч', 'жабҳа', 'кепак', 'сумка', 'тунов', 'исбот', 'атроф', 'канда', 'йўниқ', 'тирак', 'турфа', 'ғараз', 'синов', 'парта', 'ўлмас', 'саҳиҳ', 'ўтинч', 'арбоб', 'шибба', 'оққуш', 'абжўш', 'қуроқ', 'мишиқ', 'шекел', 'тарёк', 'форма', 'матал', 'зомча', 'жириш', 'падар', 'чапан', 'бўрон', 'ечмоқ', 'обдор', 'стиль', 'армон', 'бинар', 'бошқа', 'ботин', 'бўшоқ', 'қамал', 'чокар', 'белак', 'меров', 'рўпоч', 'кесак', 'макка', 'мунис', 'комик', 'оқчил', 'ўзаро', 'ҳулла', 'тихир', 'симоб', 'барра', 'маска', 'фенол', 'текст', 'абраш', 'хуруж', 'такси', 'оққув', 'қаров', 'йигна', 'канва', 'шалоп', 'малай', 'рондо', 'тетик', 'бозор', 'девон', 'волан', 'гирра', 'работ', 'бедов', 'кулча', 'қараш', 'кукун', 'саҳро', 'оқшом', 'кафан', 'ҳарба', 'ғижим', 'юлмоқ', 'қайда', 'ҳолат', 'макон', 'сиқма', 'ғумай', 'илинж', 'хатна', 'тўйчи', 'чиқим', 'тунги', 'эрмак', 'азали', 'эртан', 'фузул', 'шўрак', 'худди', 'саноч', 'фақат', 'сароб', 'осмоқ', 'домод', 'катер', 'довуш', 'қизли', 'секта', 'мавқе', 'уммат', 'лаҳжа', 'қимор', 'гарчи', 'тикка', 'динор', 'химия', 'иссиқ', 'ёғдай', 'жойли', 'кўлам', 'куйка', 'юзаки', 'ҳудуд', 'каниз', 'жимит', 'тубли', 'тазод', 'жаноб', 'сўғин', 'илгак', 'сулиш', 'қобон', 'камоб', 'ҳарна', 'печка', 'люмен', 'амири', 'амвол', 'ўсмоқ', 'холли', 'лойқа', 'бутси', 'бошоқ', 'бурят', 'гуржи', 'қобиқ', 'норма', 'молия', 'диван', 'шовуш', 'ўтмоқ', 'басит', 'кесим', 'каска', 'баржа', 'билан', 'кўлка', 'шоҳид', 'аттор', 'иқбол', 'войбў', 'чироқ', 'ҳилла', 'моҳир', 'тикув', 'уймоқ', 'анжом', 'эссиз', 'шаппа', 'шпион', 'афсун', 'лайча', 'сенат', 'босим', 'қомат', 'мирзо', 'тиғиз', 'суқма', 'ёрқин', 'қирғи', 'оқсил', 'ҳожат', 'жарчи', 'рулет', 'болта', 'тарих', 'овлоқ', 'ўсмир', 'зоҳир', 'салаф', 'гаваз', 'ҳижра', 'чиний', 'сумма', 'майор', 'кесик', 'солиҳ', 'ҳалқа', 'инерт', 'сезиш', 'верфь', 'ягона', 'ётлик', 'виқор', 'оғриқ', 'зариф', 'севги', 'фалон', 'бахши', 'заряд', 'олчоқ', 'парча', 'гулюз', 'анойи', 'тилим', 'вожиб', 'чеҳра', 'чириш', 'нақиб', 'финиш', 'ногаҳ', 'аҳвол', 'насиб', 'атака', 'бўғиз', 'пиёда', 'опоқи', 'кобра', 'чипор', 'латта', 'қанча', 'халос', 'ойгул', 'ҳазор', 'муфти', 'ҳилва', 'хумор', 'ғувва', 'ампер', 'субут', 'болиш', 'қовун', 'сабоҳ', 'гудок', 'шофёр', 'питон', 'бўлиш', 'қаҳат', 'дахма', 'бирон', 'сажда', 'фитна', 'довон', 'йўқчи', 'олқор', 'нолон', 'боқча', 'қопча', 'зулук', 'майин', 'нигоҳ', 'хасис', 'ишора', 'догма', 'қуриш', 'чопон', 'рупия', 'йўсин', 'кокил', 'жунун', 'ликоп', 'ҳасса', 'лидер', 'қатиқ', 'дашша', 'ожиза', 'эвенк', 'дидли', 'гуруҳ', 'қалоқ', 'мирза', 'чинак', 'ақраб', 'мажақ', 'ҳижоб', 'димоғ', 'актив', 'оқмоқ', 'урчуқ', 'тилла', 'пўчоқ', 'қитъа', 'сочоқ', 'ғазол', 'тегра', 'хирад', 'театр', 'янтоқ', 'танда', 'ҳабиб', 'бланк', 'кисса', 'сават', 'нучук', 'фраза', 'роман', 'юмшоқ', 'медик', 'дўлча', 'эмаль', 'мавзу', 'синиқ', 'ёнига', 'липпа', 'гўдак', 'индин', 'жобир', 'шифон', 'шодон', 'матоҳ', 'гумус', 'насос', 'яхдай', 'оддий', 'ҳақир', 'ҳаром', 'аъроф', 'яккаш', 'фосиқ', 'балки', 'кирза', 'тилик', 'нобоп', 'қадам', 'тараш', 'лоғар', 'соқчи', 'холиқ', 'чулон', 'данак', 'тўкма', 'аскет', 'обуна', 'ҳуқна', 'ҳасип', 'лирик', 'ситор', 'қўйли', 'кузов', 'шляпа', 'чатир', 'атама', 'асбоб', 'қўшчи', 'грамм', 'алкаш', 'елмоқ', 'ҳавол', 'малах', 'фасад', 'яшноқ', 'жилет', 'ишком', 'атала', 'очерк', 'алқор', 'линия', 'пўшак', 'чўкир', 'дудам', 'пафос', 'пулли', 'дебон', 'сақар', 'чекка', 'пилта', 'новча', 'безот', 'гуашь', 'пакка', 'гулёр', 'ўғлон', 'изғор', 'чўкар', 'ҳазир', 'чирик', 'хабар', 'лахча', 'пилла', 'сайёр', 'анбиё', 'сокин', 'ибрат', 'чақин', 'козёл', 'балли', 'товут', 'рояль', 'изсиз', 'бикир', 'силла', 'чўзма', 'пойча', 'чечен', 'қўниш', 'ғайир', 'чакма', 'сояки', 'пукка', 'сужуд', 'хирож', 'очкўз', 'ошкўк', 'ёймоқ', 'бонус', 'пикап', 'олтов', 'мажор', 'парма', 'жичча', 'қарам', 'юлғун', 'йириқ', 'тахир', 'жувон', 'йилги', 'жувоз', 'қадар', 'чалқа', 'кавар', 'олчин', 'нетто', 'сабза', 'шайин', 'сутак', 'қалов', 'қачон', 'тақво', 'ваҳим', 'зойил', 'буғро', 'блуза', 'питак', 'тушки', 'пошна', 'уйсоз', 'ғачча', 'токай', 'гашти', 'шинни', 'олмош', 'будда', 'барак', 'тиним', 'бебок', 'кўкиш', 'фляга', 'амаки', 'санад', 'кифоя', 'пошшо', 'шайдо', 'бепул', 'манат', 'тамли', 'қабул', 'октет', 'тутак', 'сурра', 'ҳашар', 'хунук', 'шамса', 'эпкин', 'камер', 'қусуқ', 'чиқиқ', 'енгча', 'суроб', 'бўлса', 'этдор', 'сапёр', 'шаҳид', 'даҳяк', 'қараб', 'аргон', 'тирик', 'қирон', 'зотан', 'вафли', 'митти', 'қирма', 'чийир', 'юрмоқ', 'форум', 'ҳамза', 'девиз', 'велюр', 'чакич', 'букет', 'баҳор', 'омбор', 'умаро', 'қорли', 'домла', 'сутли', 'бўйра', 'дарға', 'табар', 'қовуз', 'арқон', 'суйри', 'таниқ', 'курра', 'хориж', 'отряд', 'олача', 'бирка', 'пўкон', 'финча', 'жавон', 'сиймо', 'ғазот', 'бироқ', 'мезон', 'сирач', 'кончи', 'ароба', 'қулай', 'ғубор', 'банда', 'улкан', 'насаб', 'режим', 'ботил', 'полиз', 'алиби', 'кекчи', 'кибор', 'роғиб', 'гуппа', 'радио', 'совет', 'сўлоқ', 'ҳамон', 'қолип', 'бадал', 'аския', 'аксар', 'ҳабаш', 'ошмоқ', 'мажус', 'домат', 'ражаз', 'баски', 'экран', 'совға', 'пироқ', 'ҳампо', 'пахта', 'тарра', 'мудир', 'копар', 'ҳовуч', 'аркон', 'атвор', 'йигит', 'бетоб', 'ёстиқ', 'линза', 'собор', 'трюмо', 'енгил', 'ёғупа', 'исмат', 'чакак', 'аванс', 'нўғай', 'зиғир', 'адрас', 'шуруп', 'татир', 'шевро', 'далон', 'қувур', 'мижоз', 'дорчи', 'самур', 'какао', 'ношир', 'нишон', 'оғули', 'лотин', 'ўктам', 'хирпи', 'сайёҳ', 'чўмич', 'дукки', 'рубль', 'арафа', 'ўксик', 'шўрли', 'чопиқ', 'таран', 'секин', 'қўшни', 'қуйқа', 'визир', 'оласи', 'мулло', 'тариқ', 'атиқа', 'ғусул', 'баҳақ', 'йўлчи', 'матин', 'осуда', 'садаф', 'ҳуққи', 'давот', 'бўтқа', 'дўзах', 'бўғиқ', 'қодир', 'бўроз', 'чиппа', 'паноҳ', 'товоқ', 'штурм', 'князь', 'буроқ', 'аврат', 'маҳал', 'эркли', 'пуфак', 'иштон', 'фосид', 'пичир', 'нўхат', 'мисол', 'фараҳ', 'зарар', 'сирли', 'тулки', 'рафиқ', 'тийин', 'лапар', 'ойлар', 'учқун', 'маъно', 'кураш', 'немис', 'козир', 'этнос', 'энсиз', 'хитой', 'гурзи', 'шахли', 'оқпар', 'кумуш', 'радий', 'ўтроқ', 'билло', 'намоз', 'тудоқ', 'ойлик', 'чакса', 'сўйил', 'диска', 'ҳасад', 'торож', 'ишлов', 'тўриқ', 'фатво', 'содир', 'марка', 'яйдов', 'бешик', 'фирқа', 'писка', 'нашъа', 'букри', 'лаҳза', 'кичик', 'тузоқ', 'чўтал', 'синус', 'қамар', 'қуруқ', 'қайни', 'аймоқ', 'битта', 'лақаб', 'қичиш', 'қопқа', 'латча', 'нопок', 'зомби', 'оқлик', 'тилчи', 'пицца', 'бурма', 'беҳол', 'замир', 'қуйиш', 'кушод', 'карат', 'наҳал', 'палон', 'этика', 'шивир', 'хурмо', 'гилам', 'тугул', 'ғунда', 'ихлос', 'жинка', 'салом', 'тақал', 'ҳамла', 'гулоб', 'луқма', 'ялоқи', 'қурро', 'омбир', 'ўтзор', 'кўпик', 'икона', 'тувак', 'якдил', 'иймоқ', 'балиғ', 'эркин', 'қоғоз', 'чипта', 'гумон', 'эйвоҳ', 'нуқул', 'чечан', 'қисқа', 'ҳадис', 'ҳавза', 'улфат', 'куйчи', 'йўриқ', 'кимса', 'мамма', 'елкан', 'тузук', 'чопар', 'пакки', 'кизак', 'ножўя', 'равон', 'рўвак', 'палла', 'ёвғон', 'қарға', 'ношуд', 'чакка', 'шақал', 'иблис', 'намат', 'тинка', 'зомин', 'айқин', 'ғужур', 'бақар', 'ғўдир', 'даъво', 'салют', 'чалма', 'вальс', 'эпақа', 'гижда', 'болоқ', 'лузум', 'ватар', 'катак', 'чоғли', 'чақув', 'жонон', 'иҳром', 'ўхчиқ', 'арақи', 'қубур', 'мияли', 'қамич', 'макет', 'овунч', 'жадид', 'тиғли', 'қатла', 'фожир', 'жийда', 'ноқис', 'бакра', 'ниқоб', 'собир', 'адрес', 'лочин', 'округ', 'тоифа', 'заказ', 'ғилай', 'кулиш', 'фатҳа', 'ванна', 'фибра', 'почта', 'суянч', 'эртак', 'қамчи', 'қавиқ', 'анвои', 'меъда', 'супра', 'нажас', 'дўкон', 'яхтак', 'ярғоқ', 'ғижир', 'безак', 'таянч', 'нафас', 'фронт', 'жосус', 'ҳарис', 'кариҳ', 'ўрама', 'зафар', 'ажабо', 'ўртоқ', 'йўғон', 'зарра', 'воқиф', 'бузуқ', 'ковуш', 'бўғот', 'сўниқ', 'тўсин', 'жонли', 'иллат', 'кийик', 'қилич', 'ёнғин', 'қичиқ', 'маъюб'],
    solution: "",
    guesses: ["", "", "", "", "", ""],
    currentGuessIndex: 0,
    guessedLetters: {
      miss: [],
      found: [],
      hint: []
    },
    colorList: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
    userTries: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
    lastSubmitted: "",
    isWinner: null,
    isFinished: null,
    sequenceVictory: 0,
    sequenceVictoryRecord: 0,
    numberOfGames: 0,
    victoryPercentage: 0,
    numberOfVictory: 0,
    aboutStatus: false,
    isNewUser: true,
    trueGuess: [
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    gameOver: false,
    passedDay: 0,

  // Unlim
    unlimSolution: "",
    unlimColorList: [["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""], ["", "", "", "", ""]],
    unlimGuesses: ["", "", "", "", "", ""],
    unlimGuessedLetters: {
      miss: [],
      found: [],
      hint: []
    },
    unlimCurrentGuessIndex: 0,
    unlimLastSubmitted: "",
    unlimSequenceVictory: 0,
    newGame: false,
    unlimIsNewUser: null,
    unlimFinished: null,
  },
  mutations: {
    initializeValue(state) {
      if (localStorage.getItem("userTries")) {
        state.userTries = JSON.parse(localStorage.getItem("userTries"));
      } else {
        localStorage.setItem("userTries", JSON.stringify(state.userTries));
      }

      if (localStorage.getItem("trueGuess")) {
        state.trueGuess = JSON.parse(localStorage.getItem("trueGuess"));
      } else {
        localStorage.setItem("trueGuess", JSON.stringify(state.trueGuess));
      }

      if (localStorage.getItem("guessedLetters")) {
        state.guessedLetters = JSON.parse(localStorage.getItem("guessedLetters"));
      } else {
        localStorage.setItem("guessedLetters", JSON.stringify(state.guessedLetters));
      }

      if (localStorage.getItem("color")) {
        state.colorList = JSON.parse(localStorage.getItem("color"));
      } else {
        localStorage.setItem("color", JSON.stringify(state.colorList));
      }

      if (localStorage.getItem("currentGuessIndex")) {
        state.currentGuessIndex = parseInt(localStorage.getItem("currentGuessIndex"));
      } else {
        localStorage.setItem("currentGuessIndex", parseInt(state.currentGuessIndex));
      }

      if (localStorage.getItem("guesses")) {
        state.guesses = JSON.parse(localStorage.getItem("guesses"));
      } else {
        localStorage.setItem("guesses", JSON.stringify(state.guesses));
      }
      if (localStorage.getItem('NumberOfGames')) {
        state.numberOfGames = parseInt(localStorage.getItem("NumberOfGames"))
      }

      if (localStorage.getItem("numberOfsequenceVictory")) {
        state.sequenceVictory = parseInt(localStorage.getItem("numberOfsequenceVictory"))
      }

      if (localStorage.getItem("numberOfsequenceVictoryRecord")) {
        state.sequenceVictoryRecord = parseInt(localStorage.getItem("numberOfsequenceVictoryRecord"))
      }

      if (localStorage.getItem("numberOfVictory")) {
        state.numberOfVictory = parseInt(localStorage.getItem("numberOfVictory"))
      }

      if (localStorage.getItem("victoryPercentage")) {
        state.victoryPercentage = parseInt(localStorage.getItem("victoryPercentage"))
      }
    },

    unlimInitializeValue(state) {

      if (localStorage.getItem('unlimIsNewUser')) {
        console.log(localStorage.getItem('unlimIsNewUser'))
        localStorage.setItem('unlimIsNewUser', false)
      } else {
        localStorage.setItem('unlimIsNewUser', true)
      }

      if (localStorage.getItem("unlimSolution")){
        state.unlimSolution = localStorage.getItem("unlimSolution");
        console.log(state.unlimSolution)
      }
    
      if (localStorage.getItem("unlimColor")) {
        state.unlimColorList = JSON.parse(localStorage.getItem("unlimColor"));
      } else {
        localStorage.setItem("unlimColor", JSON.stringify(state.unlimColorList));
      }

      if (localStorage.getItem("unlimGuesses")) {
        state.unlimGuesses = JSON.parse(localStorage.getItem("unlimGuesses"));
      } else {
        localStorage.setItem("unlimGuesses", JSON.stringify(state.unlimGuesses));
      }

      if (localStorage.getItem("unlimGuessedLetters")) {
        state.unlimGuessedLetters = JSON.parse(localStorage.getItem("unlimGuessedLetters"));
      } else {
        localStorage.setItem("unlimGuessedLetters", JSON.stringify(state.unlimGuessedLetters));
      }

      if (localStorage.getItem("unlimCurrentGuessIndex")) {
        state.unlimCurrentGuessIndex = parseInt(localStorage.getItem("unlimCurrentGuessIndex"));
        // if (localStorage.getItem("unlimFinished")=='true'){
        //   localStorage.setItem("unlimCurrentGuessIndex", 0)
        //   state.unlimCurrentGuessIndex = parseInt(localStorage.getItem("unlimCurrentGuessIndex"));
        // }
      } else {
        localStorage.setItem("unlimCurrentGuessIndex", parseInt(state.unlimCurrentGuessIndex));
      }

      if (localStorage.getItem("unlimSequenceVictory")) {
        state.unlimSequenceVictory = parseInt(localStorage.getItem("unlimSequenceVictory"))
      } else {
        localStorage.setItem("unlimSequenceVictory", parseInt(state.unlimSequenceVictory));
      }

    },

    checkWinner(state) {
      if (localStorage.getItem('lastSubmitted')==state.solution) {
        state.isFinished = true
      } else if (parseInt(localStorage.getItem('currentGuessIndex'))>=6) {
        state.isFinished = true
      }

    },

    unlimCheckWinner(state) {
      if (localStorage.getItem('unlimLastSubmitted')==state.unlimSolution) {
        state.isFinished = true
        // localStorage.setItem("isWinner", true)
      } else if (parseInt(localStorage.getItem('unlimCurrentGuessIndex'))>=6) {
        state.isFinished = true
      }
    },

    setIsWinner(state, status) {
      state.isWinner = status
      console.log(state.isWinner)
    },
    checkNumberOfGames(state) {
      if (localStorage.getItem("NumberOfGames") === null) {
          localStorage.setItem("NumberOfGames", 0)
          state.numberOfGames = localStorage.getItem("NumberOfGames")
      }
      if (state.currentGuessIndex >= 6 || state.isWinner) {
          let counter = localStorage.getItem("NumberOfGames")
          localStorage.setItem("NumberOfGames", parseInt(counter)+1)
          state.numberOfGames = parseInt(localStorage.getItem("NumberOfGames"))
      }

      if (localStorage.getItem("numberOfsequenceVictory")) {
        if (state.lastSubmitted == state.solution) {
          let numberOfsequenceVictory = localStorage.getItem("numberOfsequenceVictory")
          localStorage.setItem("numberOfsequenceVictory", parseInt(numberOfsequenceVictory)+1)
          state.sequenceVictory = parseInt(localStorage.getItem("numberOfsequenceVictory"))
        } else if (state.currentGuessIndex >= 6) {
          state.sequenceVictory = 0
          localStorage.setItem("numberOfsequenceVictory", state.sequenceVictory)
        } else {
          state.sequenceVictory = parseInt(localStorage.getItem("numberOfsequenceVictory"))
        }
      } else if (state.isWinner) {
        localStorage.setItem("numberOfsequenceVictory", 1)
        state.sequenceVictory = parseInt(localStorage.getItem("numberOfsequenceVictory"))
      } else if (!state.isWinner) {
        localStorage.setItem("numberOfsequenceVictory", 0)
        state.sequenceVictory = parseInt(localStorage.getItem("numberOfsequenceVictory"))
      }

      if (localStorage.getItem("numberOfsequenceVictoryRecord")) {
        if (state.sequenceVictory > state.sequenceVictoryRecord) {
          state.sequenceVictoryRecord = state.sequenceVictory
          localStorage.setItem("numberOfsequenceVictoryRecord", state.sequenceVictoryRecord)
        } else {
          state.sequenceVictoryRecord = localStorage.getItem("numberOfsequenceVictoryRecord")
        }
      } else if (state.isWinner) {
        localStorage.setItem("numberOfsequenceVictoryRecord", 1)
        state.sequenceVictoryRecord = parseInt(localStorage.getItem("numberOfsequenceVictoryRecord"))
      } else if (!state.isWinner) {
        localStorage.setItem("numberOfsequenceVictoryRecord", 0)
        state.sequenceVictoryRecord = parseInt(localStorage.getItem("numberOfsequenceVictoryRecord"))
      }

      if (localStorage.getItem("numberOfVictory")) {
        state.numberOfVictory = localStorage.getItem("numberOfVictory")
        state.victoryPercentage = Math.round(state.numberOfVictory * 100 / state.numberOfGames)
        localStorage.setItem("victoryPercentage", state.victoryPercentage)
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
