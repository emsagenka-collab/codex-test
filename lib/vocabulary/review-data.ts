import type { DictionaryCorrection } from "../dictionary-review";

// Reviewed learning definitions; reasons document the editorial correction.
export const dictionaryReview: DictionaryCorrection[] = [
  {
    word: "dirayet",
    previous: "173:d83804d4",
    changes: {
      modern: "güçlükler karşısında akıllıca ve kararlı davranabilme",
    },
    reason:
      "Kararlılık allein erfasst das zugehörige Urteilsvermögen und die Handlungssicherheit nicht.",
  },
  {
    word: "sükûnet",
    previous: "173:a6c8adf5",
    changes: {
      note: "Literarischer Ausdruck für äußere Stille und innere Gelassenheit.",
    },
    reason:
      "Die Nebenform ohne Zirkumflex wird im bisherigen Hinweis wie eine gleichwertige Standardschreibung dargestellt.",
  },
  {
    word: "ihlas",
    previous: "170:ea0ba3d4",
    changes: {
      explanation:
        "Religiös eine aufrichtige Hingabe an Gott, ohne Eitelkeit, Heuchelei oder eigennützige Absicht.",
      modern: "gösteriş ve çıkar gözetmeden içtenlikle inanıp davranma",
    },
    reason:
      "Religiösen Kern präzisieren; bloße allgemeine Ehrlichkeit ist zu weit.",
  },
  {
    word: "ehliyet",
    previous: "275:76865c32",
    changes: {
      meaning: "Führerschein / Befähigung / Berechtigung",
      difficulty: 1,
      explanation:
        "Im heutigen Alltag meist der Führerschein; außerdem die Befähigung oder rechtliche Berechtigung zu einer Handlung.",
      modern: "sürücü belgesi; bir işi yapabilme yeterliği veya yetkisi",
      note: "Im Alltag häufig als Führerschein gebraucht. Die allgemeinere Bedeutung Befähigung oder Berechtigung ist formeller.",
    },
    reason:
      "Die häufigste heutige Alltagsbedeutung ist Führerschein und passt nicht zu einer ausschließlich gehobenen C1-Zuordnung.",
  },
  {
    word: "kin",
    previous: "240:3d963c82",
    changes: {
      modern: "süregelen düşmanlık ve öfke",
    },
    reason:
      "Die türkische Umschreibung verengt anhaltenden Groll auf einen ausdrücklichen Rachewunsch.",
  },
  {
    word: "mürüvvet",
    previous: "270:f9b2431d",
    changes: {
      meaning: "Großherzigkeit / Freude am Glück der Kinder",
      explanation:
        "Menschlichkeit und Großherzigkeit; in „mürüvvetini görmek“ die Freude, das Erwachsenwerden oder die Heirat der Kinder zu erleben.",
      modern: "insanlık ve cömertlik; çocuklarının mutluluğunu görme sevinci",
    },
    reason:
      "Die häufige feste Wendung mit sehen lässt sich nicht als edle Gesinnung übersetzen.",
  },
  {
    word: "iktidar",
    previous: "277:e8bcd8c8",
    changes: {
      difficulty: 2,
      note: "Häufig in Politik und Nachrichten: Regierungsmacht oder die regierende politische Seite. Älter auch Fähigkeit oder Vermögen.",
    },
    reason:
      "Gängiger Nachrichtenwortschatz statt seltener Fach- oder historischer Wortschatz.",
  },
  {
    word: "fidye",
    previous: "268:7c4e48d1",
    changes: {
      meaning: "Lösegeld / religiöse Ersatzleistung",
      modern:
        "serbest bırakılma karşılığı ödenen para; bazı dinî yükümlülükler yerine verilen bedel",
    },
    reason:
      "Die deutsche Hauptbedeutung und die türkische Umschreibung verschweigen die bereits erklärte religiöse Zweitbedeutung.",
  },
  {
    word: "miras",
    previous: "267:96f1a49e",
    changes: {
      modern: "ölenden kalan mal; geçmişten aktarılan değerler",
    },
    reason:
      "Die seltene Umschreibung kalıt erschwert die Erklärung und deckt das kulturelle Erbe nicht ausdrücklich ab.",
  },
  {
    word: "varis",
    previous: "251:55c012c1",
    changes: {
      word: "vâris",
      note: "„Vâris“ bedeutet Erbe oder Nachfolger. „Varis“ ohne â bezeichnet eine Krampfader.",
    },
    reason:
      "Die Erbenbedeutung benötigt die Schreibung vâris; varis bezeichnet eine andere Sache.",
  },
  {
    word: "irşat",
    previous: "272:1bcd783f",
    changes: {
      meaning: "geistige Anleitung / Rechtleitung",
    },
    reason:
      "Rechtweisung ist im Deutschen keine passende geläufige Bezeichnung; gemeint ist Anleitung zum rechten Weg.",
  },
  {
    word: "şehit",
    previous: "318:40b74f8",
    changes: {
      meaning: "Märtyrer / Gefallener",
      explanation:
        "Ehrende Bezeichnung für jemanden, der für seinen Glauben oder im als aufopfernd verstandenen Dienst am Land stirbt.",
      modern: "kutsal sayılan bir amaç veya vatan uğruna ölen kimse",
    },
    reason:
      "Die deutsche Übersetzung verengt das Wort unnötig auf Glaubenskämpfer; die türkische Wendung mit uğur ist unnatürlich.",
  },
  {
    word: "sefer",
    previous: "271:2c31b8d1",
    changes: {
      meaning: "Mal / Reise / Feldzug",
      explanation:
        "Je nach Satz ein einzelnes Mal, eine Reise oder Fahrt; im militärischen Zusammenhang ein Feldzug.",
      modern: "kez; yolculuk; askerî harekât",
      related: "bir sefer · sefere çıkmak",
    },
    reason:
      "Sehr häufige Zählbedeutung bir sefer fehlt; automatische Buchbeispiele können genau diese Bedeutung zeigen.",
  },
  {
    word: "galibiyet",
    previous: "224:85d891d1",
    changes: {
      meaning: "Sieg",
      explanation: "Das Gewinnen eines Kampfes, Spiels oder Wettbewerbs.",
      modern: "kazanma; yenme",
    },
    reason:
      "Überlegenheit allein ist noch kein Sieg; der Kernbegriff bezeichnet das Gewinnen.",
  },
  {
    word: "tercüman",
    previous: "220:994f34a5",
    changes: {
      meaning: "Dolmetscher / Übersetzer",
      explanation:
        "Eine Person, die Gesprochenes oder Geschriebenes zwischen Sprachen überträgt.",
    },
    reason:
      "Das Wort kann mündliche und schriftliche Sprachmittlung bezeichnen.",
  },
  {
    word: "şerh",
    previous: "260:34d637d4",
    changes: {
      meaning: "Erläuterung / Vermerk / Vorbehalt",
      explanation:
        "Ausführliche Erklärung zu einem Text; im Rechtsbereich auch ein ergänzender Vermerk oder ausdrücklich erklärter Vorbehalt.",
      modern: "ayrıntılı açıklama; bir kayda eklenen not veya çekince",
    },
    reason:
      "Neben Textkommentar ist der heute wichtige juristische Sinn Vermerk/Vorbehalt zu berücksichtigen.",
  },
  {
    word: "tahsil",
    previous: "274:375c6834",
    changes: {
      modern: "öğrenim görme; alacağı veya vergiyi toplama",
    },
    reason:
      "Toplama allein bedeutet beliebiges Sammeln und erklärt die verwaltungssprachliche Geldeinziehung nicht.",
  },
  {
    word: "umum",
    previous: "247:eeef8a23",
    changes: {
      modern: "bütünü, hepsi veya kamu",
    },
    reason:
      "Bütün ve herkes verbindet die türkischen Wortarten unnatürlich; gemeint sind Gesamtheit und Öffentlichkeit.",
  },
  {
    word: "muazzam",
    previous: "238:b566b232",
    changes: {
      difficulty: 2,
      note: "Häufige wertende Beschreibung für sehr groß, gewaltig oder großartig; kein ausschließlich historischer oder fachsprachlicher Ausdruck.",
    },
    reason:
      "Gängiges wertendes Wort in heutiger Erzähl- und Alltagssprache statt klar spezialisiertem C1-Wortschatz.",
  },
  {
    word: "müstesna",
    previous: "258:13b62fbc",
    changes: {
      modern: "benzerlerinden ayrı ve üstün; kapsam dışında tutulan",
      explanation:
        "Außergewöhnlich oder herausragend; in anderen Verwendungen von einer Regel oder einem Geltungsbereich ausgenommen.",
    },
    reason:
      "Ayıcalıklı/privilegiert kann eine falsche soziale Bedeutung nahelegen; außergewöhnlich und ausgenommen sind getrennte Verwendungen.",
  },
  {
    word: "neden",
    previous: "179:92cf2319",
    changes: {
      meaning: "Ursache / Grund; warum",
      explanation:
        "Als Substantiv der Grund eines Geschehens; als Fragewort die Frage nach diesem Grund.",
      modern: "sebep; niçin",
    },
    reason: "Sehr häufige Fragewortbedeutung warum fehlte.",
  },
  {
    word: "hayat",
    previous: "200:d02382d3",
    changes: {
      meaning: "Leben / Lebenszeit",
    },
    reason:
      "Lebenslauf kann im Deutschen einen beruflichen Lebenslauf suggerieren; hayat bezeichnet das Leben.",
  },
  {
    word: "bilgi",
    previous: "209:9cfb039",
    changes: {
      modern: "öğrenilen ve bilinen şeyler",
    },
    reason:
      "Eine einfache türkische Umschreibung ist für Lernende verständlicher als malumat.",
  },
  {
    word: "ortak",
    previous: "224:67594a00",
    changes: {
      explanation:
        "Mehreren gemeinsam gehörend oder von ihnen geteilt; als Substantiv ein Partner oder Mitinhaber.",
      modern: "birlikte paylaşılan; bir işe birlikte katılan kişi",
    },
    reason: "Adjektiv- und Substantivbedeutung wurden als Tätigkeit vermischt.",
  },
  {
    word: "sistem",
    previous: "196:96d65dd6",
    changes: {
      modern: "bir amaç için birlikte işleyen parçalar bütünü",
    },
    reason:
      "Düzenek bezeichnet eher einen Mechanismus und ist als alleinige Entsprechung zu eng.",
  },
  {
    word: "yapı",
    previous: "216:8f726120",
    changes: {
      modern: "bir şeyin kuruluş biçimi; bina",
    },
    reason:
      "Die türkische Erklärung enthielt nur Aufbau, obwohl auch Bauwerk gelehrt wird.",
  },
  {
    word: "doğru",
    previous: "209:568f1fc8",
    changes: {
      explanation:
        "Mit Tatsachen oder Regeln übereinstimmend; räumlich auch ohne Krümmung oder Umweg.",
      modern: "yanlış olmayan; eğri olmayan",
    },
    reason:
      "Die aufgeführte Bedeutung gerade war in beiden Erklärungen nicht abgedeckt.",
  },
  {
    word: "nazik",
    previous: "221:c06d6113",
    changes: {
      modern: "kibar; kolay incinebilen veya zarar görebilen",
    },
    reason:
      "Die türkische Umschreibung erklärte nur höflich, nicht empfindlich oder zerbrechlich.",
  },
  {
    word: "sabırlı",
    previous: "210:9052c32",
    changes: {
      modern: "beklerken veya zorluk yaşarken sakin kalabilen",
    },
    reason:
      "Dayanıklı bedeutet widerstandsfähig und ist keine genaue Umschreibung für geduldig.",
  },
  {
    word: "heyecan",
    previous: "195:29f1ee75",
    changes: {
      explanation:
        "Starke innere Erregung, etwa durch Vorfreude, Spannung oder Nervosität.",
      modern: "sevinç, korku veya beklentiyle oluşan güçlü iç hareketlilik",
    },
    reason:
      "Coşku verengt die Bedeutung auf positive Begeisterung; heyecan umfasst auch Nervosität.",
  },
  {
    word: "heyecanlı",
    previous: "207:78d3781f",
    changes: {
      modern: "sevinç, korku veya beklentiyle içi kıpır kıpır olan",
    },
    reason: "Coşkulu deckt die nervöse oder ängstliche Aufregung nicht ab.",
  },
  {
    word: "pişmanlık",
    previous: "201:2389647b",
    changes: {
      modern: "yaptığı bir şeyi sonradan yanlış bulup üzülme",
    },
    reason:
      "Nedamet ist für eine einfache türkische Lernumschreibung unnötig gehoben.",
  },
  {
    word: "sevgili",
    previous: "213:7325a7f5",
    changes: {
      modern: "sevilen; aşk ilişkisi yaşanan kişi",
    },
    reason:
      "Die türkische Erklärung enthielt nur das Adjektiv, nicht den Partner oder die Partnerin.",
  },
  {
    word: "sıkıntı",
    previous: "217:22aa428a",
    changes: {
      explanation:
        "Eine belastende Schwierigkeit oder innere Bedrängnis; auch Langeweile bei fehlender Beschäftigung.",
      modern:
        "dert veya bunaltı; yapacak bir şey bulamamaktan doğan huzursuzluk",
    },
    reason:
      "Die angegebene Bedeutung Langeweile blieb in den Erklärungen unerklärt.",
  },
  {
    word: "yetişkin",
    previous: "216:234f68d",
    changes: {
      explanation:
        "Ein Mensch nach der Kindheits- und Jugendphase; im rechtlichen Zusammenhang eine volljährige Person.",
      modern: "çocukluk ve gençlik dönemini geride bırakmış kişi",
    },
    reason:
      "Körperliche Reife und rechtliche Volljährigkeit sind nicht dieselbe Voraussetzung.",
  },
  {
    word: "cenaze",
    previous: "227:dd0335cc",
    changes: {
      modern: "ölü beden; ölüyü gömme töreni",
    },
    reason:
      "Die türkische Erklärung nannte nur Bestattung und ließ den Leichnam aus.",
  },
  {
    word: "yazar",
    previous: "231:eb5d72c3",
    changes: {
      meaning: "Autor; er/sie schreibt",
      explanation:
        "Eine Person, die Texte verfasst; als Verbform auch »er/sie schreibt«.",
      modern: "metin üreten kişi; yazmak fiilinin geniş zaman biçimi",
    },
    reason:
      "Die deutsche Verbformbedeutung wurde ungenau als das Schreiben bezeichnet.",
  },
  {
    word: "gelir",
    previous: "241:5629f7cd",
    changes: {
      meaning: "Einkommen; er/sie kommt",
      explanation:
        "Als Substantiv regelmäßig erhaltenes Geld; als Verbform auch »er/sie kommt«.",
      modern: "elde edilen para; gelmek fiilinin geniş zaman biçimi",
    },
    reason:
      "Substantiv und tatsächlich flektierte Verbform werden jetzt deutlich unterschieden.",
  },
  {
    word: "gider",
    previous: "225:2f5e86cf",
    changes: {
      meaning: "Ausgabe / Kosten; er/sie geht",
      explanation:
        "Als Substantiv für etwas ausgegebenes Geld; als Verbform auch »er/sie geht«.",
      modern: "harcanan para; gitmek fiilinin geniş zaman biçimi",
    },
    reason:
      "Die deutsche Verbformbedeutung wurde ungenau als das Weggehen bezeichnet.",
  },
  {
    word: "teslim",
    previous: "203:c905e61e",
    changes: {
      meaning: "Übergabe / Auslieferung / Kapitulation",
      explanation:
        "Das Übergeben an einen Empfänger; in »teslim olmak« auch das Aufgeben von Widerstand.",
      modern: "bir şeyi alıcısına verme; karşı koymayı bırakma",
    },
    reason:
      "Die häufige Bedeutung in teslim olmak fehlte; verip bırakma ist außerdem unpräzise.",
  },
  {
    word: "istasyon",
    previous: "215:df130485",
    changes: {
      modern: "trenlerin durduğu veya belli bir hizmetin verildiği yer",
    },
    reason:
      "Durak merkezi ist keine natürliche allgemeine Umschreibung einer Station.",
  },
  {
    word: "sızı",
    previous: "220:ab42958",
    changes: {
      meaning: "ziehender / anhaltender Schmerz",
      modern: "içten duyulan, sürekli veya tekrarlayan ağrı",
    },
    reason:
      "Sızı bezeichnet typischerweise einen ziehenden oder anhaltenden Schmerz, nicht speziell einen stechenden.",
  },
  {
    word: "temizlik",
    previous: "227:2178879e",
    changes: {
      modern: "kirden arındırma; kir bulunmama durumu",
    },
    reason:
      "Arınmışlık ist abstrakt und erklärt den Vorgang des Reinigens nicht.",
  },
  {
    word: "bitki",
    previous: "205:ff63482f",
    changes: {
      modern: "çoğunlukla kök, gövde ve yaprakları olan canlı",
    },
    reason: "Das veraltete nebat ist als moderne Lernumschreibung ungeeignet.",
  },
  {
    word: "tarım",
    previous: "216:ec7b65ad",
    changes: {
      explanation:
        "Der Anbau von Nutzpflanzen und die Haltung von Nutztieren zur Erzeugung von Lebensmitteln und Rohstoffen.",
      modern: "bitki yetiştirme ve hayvanlardan ürün elde etme",
    },
    reason: "Die Erklärung zur Landwirtschaft ließ die Tierhaltung aus.",
  },
  {
    word: "deney",
    previous: "221:3ac0cfac",
    changes: {
      modern: "bir düşüncenin doğruluğunu kontrollü koşullarda sınama",
    },
    reason:
      "Tecrübe çalışması ist unnatürlich und vermischt Experiment mit persönlicher Erfahrung.",
  },
  {
    word: "yüzde",
    previous: "200:3decc4c3",
    changes: {
      modern: "her yüz birimden düşen pay",
    },
    reason: "Yüzde birlik pay ist zirkulär und verengt auf genau ein Prozent.",
  },
  {
    word: "adet",
    previous: "214:78a76c7d",
    changes: {
      note: "Anzahl oder gezählte Einheit. „Âdet“ mit â bedeutet dagegen Gewohnheit oder Brauch.",
    },
    reason: "Adet und âdet bezeichnen unterschiedliche Begriffe.",
  },
  {
    word: "madde",
    previous: "219:d2ebc558",
    changes: {
      modern: "yer kaplayan nesnel varlık; bir metindeki ayrı bölüm",
    },
    reason:
      "Özdek ist für eine einfache Umschreibung zu fachlich; hüküm erklärt nur bestimmte juristische Artikel.",
  },
  {
    word: "satır",
    previous: "207:e34b8556",
    changes: {
      related: "satır başı · yazı",
    },
    reason: "Satır başı wird in dieser Wortgruppe getrennt geschrieben.",
  },
  {
    word: "arama",
    previous: "222:ba8d14cc",
    changes: {
      modern: "bir şeyi bulmaya çalışma; telefonla ulaşma girişimi",
    },
    reason:
      "Die aufgeführte Bedeutung Anruf fehlte in der türkischen Erklärung.",
  },
  {
    word: "uygulama",
    previous: "235:7935899b",
    changes: {
      modern:
        "bir düşünceyi hayata geçirme; belirli bir iş için kullanılan bilgisayar veya telefon programı",
    },
    reason: "Die häufige App-Bedeutung fehlte in der türkischen Erklärung.",
  },
  {
    word: "aday",
    previous: "210:182f6d6d",
    changes: {
      modern: "bir görev için seçilmesi veya atanması düşünülen kişi",
    },
    reason:
      "Ein bloßes istekli kişi ist noch kein Kandidat; Nomination oder Bewerbung fehlt.",
  },
  {
    word: "varsayım",
    previous: "222:524c11b6",
    changes: {
      modern: "doğru olduğu şimdilik kabul edilen düşünce",
    },
    reason:
      "Die bisherige Umschreibung faraziye ist für die Erklärung eines heutigen Wortes unnötig altertümlich.",
  },
  {
    word: "standart",
    previous: "228:956a40f9",
    changes: {
      modern: "kabul edilmiş ortak ölçü veya kural",
    },
    reason:
      "Der seltene Ausdruck ölçün erklärt das alltagsnähere Fremdwort für Lernende nicht hinreichend.",
  },
  {
    word: "kavram",
    previous: "222:3420d086",
    changes: {
      modern: "bir şeyi zihinde temsil eden genel düşünce",
    },
    reason: "Das seltenere mefhum ist keine hilfreiche moderne Umschreibung.",
  },
  {
    word: "içerik",
    previous: "227:d85bfa22",
    changes: {
      modern: "bir yazıda veya eserde ele alınan konular",
    },
    reason:
      "Die seltenere Lehnwortentsprechung muhteva erschwert die moderne Erklärung.",
  },
  {
    word: "bağlam",
    previous: "248:6e888c75",
    changes: {
      modern: "anlamı belirleyen çevre koşullar ve diğer ifadeler",
    },
    reason: "Sözün çevresi ist zu wörtlich und auf gesprochene Worte verengt.",
  },
  {
    word: "denge",
    previous: "233:b82e0fa4",
    changes: {
      modern: "karşıt güçlerin veya etkilerin birbirini karşılaması",
    },
    reason:
      "Die bisherige moderne Umschreibung muvazene ist selbst ein selteneres historisches Wort.",
  },
  {
    word: "anlaşma",
    previous: "231:77965700",
    changes: {
      modern: "tarafların bir konuda aynı karara varması",
    },
    reason:
      "Mutabakat ist formeller als das zu erklärende Wort; eine klare Umschreibung hilft mehr.",
  },
  {
    word: "sözleşme",
    previous: "234:4c940858",
    changes: {
      modern: "tarafların hak ve görevlerini belirleyen anlaşma",
    },
    reason:
      "Mukavele ist eine formelle ältere Entsprechung statt einer einfachen Erklärung.",
  },
  {
    word: "hak",
    previous: "248:bb76d76a",
    changes: {
      modern: "bir kimsenin sahip olduğu yetki veya isteyebileceği pay",
    },
    reason:
      "Yetkili istem ist keine natürliche Umschreibung eines berechtigten Anspruchs.",
  },
  {
    word: "dava",
    previous: "252:7e5148dd",
    changes: {
      modern: "mahkemede görülen uyuşmazlık; savunulan amaç",
    },
    reason:
      "Hukuki istem deckt weder den Gerichtsfall noch die ideell vertretene Sache angemessen ab.",
  },
  {
    word: "sanık",
    previous: "239:31b3d8fb",
    changes: {
      modern: "hakkında ceza davası açılan kişi",
    },
    reason:
      "Suçlanan kişi ist zu allgemein; sanık bezeichnet die Person im Strafgerichtsverfahren.",
  },
  {
    word: "ifade",
    previous: "243:35fc4b73",
    changes: {
      explanation:
        "Eine sprachliche Äußerung; im Rechtsbereich auch eine förmliche Aussage bei einer Vernehmung.",
    },
    reason:
      "Vernommene Aussage ist im Deutschen unidiomatisch; vernommen werden Personen.",
  },
  {
    word: "yargılama",
    previous: "244:1c159b72",
    changes: {
      meaning: "Beurteilung / Gerichtsverfahren",
      explanation:
        "Das Beurteilen einer Person oder Sache; rechtlich die gerichtliche Prüfung eines Falls.",
      modern: "bir yargıya varma; bir davayı mahkemede inceleme",
    },
    reason:
      "Das Wort bezeichnet neben einem Gerichtsverfahren auch die allgemeine Beurteilung.",
  },
  {
    word: "hükümlü",
    previous: "239:1311c78c",
    changes: {
      explanation:
        "Eine Person, deren strafrechtliche Verurteilung rechtskräftig geworden ist.",
    },
    reason:
      "Die türkische Erklärung setzt Rechtskraft voraus; dies sollte auch die deutsche Erklärung präzisieren.",
  },
  {
    word: "yetki",
    previous: "230:f5840405",
    changes: {
      modern: "bir işi yapma veya karar verme hakkı",
    },
    reason:
      "Salahiyet ist eine ältere formelle Entsprechung statt einer klaren heutigen Umschreibung.",
  },
  {
    word: "yükümlülük",
    previous: "243:b7288274",
    changes: {
      modern: "yerine getirilmesi gereken görev veya borç",
    },
    reason:
      "Mükellefiyet ist ein schwierigeres Fremdwort statt einer verständlichen Umschreibung.",
  },
  {
    word: "hoşgörü",
    previous: "223:bcf29b3e",
    changes: {
      modern: "farklı görüş ve davranışları anlayışla karşılama",
    },
    reason: "Müsamaha ist schwieriger und älter als das zu erklärende Wort.",
  },
  {
    word: "şeffaf",
    previous: "237:11ae31e0",
    changes: {
      explanation:
        "Licht durchlassen und dadurch durchsichtig sein; übertragen offen und nachvollziehbar sein.",
      modern: "ışığı geçiren; açık ve anlaşılır",
    },
    reason:
      "Die Erklärung lässt die im Deutschen aufgeführte konkrete Bedeutung durchsichtig aus.",
  },
  {
    word: "öznellik",
    previous: "233:42f7c24f",
    changes: {
      modern: "kişisel bakış ve deneyime dayanma",
    },
    reason:
      "Kişiye bağlılık kann Bindung an eine Person bedeuten und trifft die persönliche Sichtweise nicht genau.",
  },
  {
    word: "bağımsızlık",
    previous: "237:1ec5994e",
    changes: {
      modern: "başkasının denetimine bağlı olmadan hareket edebilme",
    },
    reason:
      "İstiklal ist eine formelle historische Entsprechung statt einer einfachen modernen Umschreibung.",
  },
  {
    word: "cumhuriyet",
    previous: "241:3e76d323",
    changes: {
      modern: "devlet başkanlığının kalıtsal olmadığı devlet biçimi",
    },
    reason:
      "Gewählte Regierung allein definiert eine Republik nicht; die deutsche Definition ist genauer.",
  },
  {
    word: "barış",
    previous: "223:eee5a761",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Grundwort des alltäglichen Dankens bzw. allgemeiner Erzählungen und Nachrichten; in der niedrigsten angebotenen Lernstufe sinnvoller als B2.",
  },
  {
    word: "savaş",
    previous: "219:5e9fc823",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Grundwort des alltäglichen Dankens bzw. allgemeiner Erzählungen und Nachrichten; in der niedrigsten angebotenen Lernstufe sinnvoller als B2.",
  },
  {
    word: "silah",
    previous: "228:f4831b43",
    changes: {
      modern: "saldırmak veya savunmak için kullanılan araç",
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Savunma aracı verengt Waffen auf Verteidigung, obwohl sie auch für Angriffe dienen. Grundwort des alltäglichen Dankens bzw. allgemeiner Erzählungen und Nachrichten; in der niedrigsten angebotenen Lernstufe sinnvoller als B2.",
  },
  {
    word: "asker",
    previous: "212:2369e92b",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Grundwort des alltäglichen Dankens bzw. allgemeiner Erzählungen und Nachrichten; in der niedrigsten angebotenen Lernstufe sinnvoller als B2.",
  },
  {
    word: "kâr",
    previous: "219:f9abb161",
    changes: {
      note: "Nicht mit „kar“ (Schnee) verwechseln: „kâr“ mit â bedeutet Gewinn.",
    },
    reason: "Bedeutungsunterscheidender Zirkumflex.",
  },
  {
    word: "ekonomik",
    previous: "244:6dccef40",
    changes: {
      modern: "ekonomiyle ilgili; az kaynak harcayan",
    },
    reason:
      "Die türkische Umschreibung erklärt nur wirtschaftlich, nicht die ebenfalls aufgeführte Sparsamkeitsbedeutung.",
  },
  {
    word: "verim",
    previous: "240:e3bd5483",
    changes: {
      modern: "harcanan emeğe veya kaynağa göre elde edilen sonuç",
    },
    reason:
      "Ürün miktarı verengt den Begriff auf Produktionsmenge und verfehlt das Verhältnis von Aufwand und Ergebnis.",
  },
  {
    word: "telif",
    previous: "266:8b24fa2a",
    changes: {
      meaning: "Verfassen / Autorenhonorar / Urheberrecht",
      explanation:
        "Das eigenständige Verfassen eines Werks; als Vergütung das Autorenhonorar, in telif hakkı das Urheberrecht.",
      modern:
        "özgün eser yazma; eser için ödenen ücret; telif hakkı bağlamında eser üzerindeki hak",
    },
    reason:
      "Das Grundwort bezeichnet das Verfassen eines eigenen Werks, nicht einfach dessen Zuordnung. Die Kurzangabe muss die wichtigen Bedeutungen und die Verbindung telif hakkı auseinanderhalten.",
  },
  {
    word: "sigorta",
    previous: "243:a309775f",
    changes: {
      meaning: "Versicherung / elektrische Sicherung",
      explanation:
        "Eine Absicherung gegen finanzielle Risiken; in der Elektrotechnik eine Schutzvorrichtung gegen zu hohen Strom.",
      modern: "risklere karşı güvence; elektrik devresini koruyan düzenek",
    },
    reason:
      "Neben Versicherung ist die elektrische Sicherung eine häufige eigenständige Alltagsbedeutung.",
  },
  {
    word: "uzman",
    previous: "241:778cef68",
    changes: {
      modern: "bir alanda derin bilgi ve deneyim sahibi kişi",
    },
    reason:
      "Bilirkişi ist eine spezielle Expertenrolle; nicht jeder Fachkundige ist ein gerichtlicher Gutachter.",
  },
  {
    word: "uzmanlık",
    previous: "223:f92271a3",
    changes: {
      modern: "bir alanda derin bilgi ve beceri",
    },
    reason:
      "Die Erklärung eines heutigen Wortes durch das formellere ihtisas ist unnötig schwer.",
  },
  {
    word: "uzmanlaşma",
    previous: "236:3f7eda0c",
    changes: {
      modern: "bir alanda derin bilgi ve beceri kazanma",
    },
    reason:
      "Die türkische Umschreibung wiederholt nur denselben Bildungsprozess mit einem schwierigeren Wort.",
  },
  {
    word: "liderlik",
    previous: "236:c57e26e4",
    changes: {
      meaning: "Führung / Führungsfähigkeit",
    },
    reason:
      "Der Begriff bezeichnet sowohl das Führen selbst als auch die Fähigkeit dazu.",
  },
  {
    word: "esnek",
    previous: "211:59c18ef9",
    changes: {
      meaning: "elastisch / flexibel",
      explanation:
        "Sich biegen oder dehnen und wieder zurückformen lassen; übertragen sich geänderten Bedingungen anpassen können.",
      modern: "bükülüp eski biçimine dönebilen; koşullara uyabilen",
    },
    reason:
      "Die wichtige konkrete Bedeutung elastisch bzw. biegsam fehlt in beiden Erklärungen.",
  },
  {
    word: "esneklik",
    previous: "249:9e389cfa",
    changes: {
      meaning: "Elastizität / Flexibilität",
      explanation:
        "Die Fähigkeit, sich zu verformen und zurückzubilden; übertragen die Anpassungsfähigkeit an neue Bedingungen.",
      modern: "biçim değiştirip eski hâline dönebilme; koşullara uyabilme",
    },
    reason:
      "Der mechanisch-körperliche Grundsinn wird bisher durch die übertragene Anpassungsfähigkeit verdrängt.",
  },
  {
    word: "teşekkür",
    previous: "238:20945c0c",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Grundwort des alltäglichen Dankens bzw. allgemeiner Erzählungen und Nachrichten; in der niedrigsten angebotenen Lernstufe sinnvoller als B2.",
  },
  {
    word: "sezgi",
    previous: "237:37efed35",
    changes: {
      modern: "akıl yürütmeden doğrudan kavrama",
    },
    reason:
      "Intuition ist nicht mit Instinkt gleichzusetzen; içgüdüsel verwischt diesen Unterschied.",
  },
  {
    word: "duyum",
    previous: "252:5fce5a37",
    changes: {
      modern: "duyularla alınan izlenim; başkasından işitilen haber",
    },
    reason:
      "Hissedilen bilgi erklärt die ebenfalls enthaltene Hörensagen-Bedeutung nicht.",
  },
  {
    word: "disiplin",
    previous: "251:fbffdeb6",
    changes: {
      modern: "kurallara uygun davranış; bilim dalı",
    },
    reason:
      "Die türkische Umschreibung lässt das ebenfalls angegebene wissenschaftliche Fachgebiet aus.",
  },
  {
    word: "alıştırma",
    previous: "228:b2d7420",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Geläufiges Grundwort für körperliche Bedürfnisse, sichtbare Spuren bzw. Unterricht; für die niedrigste angebotene Stufe B1 geeigneter.",
  },
  {
    word: "kıtlık",
    previous: "240:e5f441d0",
    changes: {
      modern: "temel ihtiyaç maddelerinin azlığı veya yokluğu",
    },
    reason:
      "Yetersiz ürün ist unnatürlich und verengt Knappheit auf eine geringe Produktmenge.",
  },
  {
    word: "açlık",
    previous: "236:3ee9f7a7",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Geläufiges Grundwort für körperliche Bedürfnisse, sichtbare Spuren bzw. Unterricht; für die niedrigste angebotene Stufe B1 geeigneter.",
  },
  {
    word: "susuzluk",
    previous: "237:c6ceb266",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Geläufiges Grundwort für körperliche Bedürfnisse, sichtbare Spuren bzw. Unterricht; für die niedrigste angebotene Stufe B1 geeigneter.",
  },
  {
    word: "hücre",
    previous: "240:f659aff6",
    changes: {
      explanation:
        "Die grundlegende Bau- und Funktionseinheit von Lebewesen; auch ein kleiner abgeschlossener Raum, etwa in einem Gefängnis.",
      modern: "canlıların temel yapı birimi; küçük kapalı oda",
    },
    reason:
      "Nicht jede Körperzelle ist selbstständig lebensfähig; die häufige Raum- bzw. Gefängnisbedeutung fehlt.",
  },
  {
    word: "doku",
    previous: "246:dc9a683",
    changes: {
      modern: "hücre topluluğu; yüzeyin yapısı veya görünümü",
    },
    reason: "Die Oberflächenbedeutung fehlt in der türkischen Umschreibung.",
  },
  {
    word: "aşı",
    previous: "248:4e8d31e4",
    changes: {
      meaning: "Impfung / Impfstoff / Pflanzenveredelung",
      explanation:
        "Eine Schutzimpfung oder der dabei eingesetzte Stoff; bei Pflanzen das Verbinden von Pflanzenteilen zur Veredelung.",
      modern:
        "bağışıklık sağlayan madde veya işlem; bitkileri birleştirerek geliştirme",
    },
    reason:
      "Die Erklärung nennt nur eine Maßnahme statt auch den Impfstoff; die gebräuchliche Pflanzenbedeutung fehlt.",
  },
  {
    word: "tanı",
    previous: "234:4cac2e20",
    changes: {
      meaning: "Diagnose",
      explanation:
        "Die durch Untersuchung festgestellte Art einer Krankheit oder Störung.",
    },
    reason:
      "Tanı entspricht Diagnose, nicht einem einzelnen diagnostischen Befund.",
  },
  {
    word: "gerilim",
    previous: "221:7e64b1cc",
    changes: {
      explanation:
        "Ein gespannter körperlicher, seelischer oder sozialer Zustand; technisch auch elektrische Spannung.",
      modern: "gerginlik; elektrik devresindeki voltaj",
    },
    reason: "Die verbreitete technische Spannungsbedeutung fehlt vollständig.",
  },
  {
    word: "ağ",
    previous: "237:a68930ac",
    changes: {
      meaning: "Netz / Netzwerk",
      explanation:
        "Ein aus Fäden geknüpftes Geflecht, etwa zum Fangen; übertragen ein verbundenes System aus Geräten oder Beziehungen.",
      modern: "iplerden örülmüş tutma aracı; bağlantılar bütünü",
    },
    reason:
      "Der konkrete Grundsinn Fangnetz fehlt, obwohl das Wort in Buchsätzen auch so vorkommt.",
  },
  {
    word: "sanal",
    previous: "252:f03f288b",
    changes: {
      modern: "fiziksel biçimi yerine bilgisayar ortamında var olan",
    },
    reason:
      "Gerçekte bulunmayan kann digitale oder virtuelle Gegenstände fälschlich als grundsätzlich unwirklich darstellen.",
  },
  {
    word: "şifre",
    previous: "254:f4ff6374",
    changes: {
      modern: "erişim veya gizli haberleşme için kullanılan işaret dizisi",
    },
    reason:
      "Ein Passwort oder Code ist nicht ohne Weiteres ein kryptografischer Schlüssel.",
  },
  {
    word: "fakülte",
    previous: "233:f67cc2e",
    changes: {
      modern: "üniversitede ilgili bölümleri bir araya getiren birim",
    },
    reason:
      "Üniversite bölümü kann mit dem untergeordneten Fachbereich bzw. Studiengang verwechselt werden.",
  },
  {
    word: "seminer",
    previous: "227:c69f37d5",
    changes: {
      modern: "bir uzmanlık konusunun ele alındığı eğitim toplantısı",
    },
    reason: "Ein Seminar muss kein praktischer Unterricht sein.",
  },
  {
    word: "yayın",
    previous: "243:c45aaa2e",
    changes: {
      modern: "yayımlanan eser veya radyo ve televizyon içeriği",
    },
    reason: "Neşir ist schwieriger und erklärt die Sendungsbedeutung nicht.",
  },
  {
    word: "birey",
    previous: "214:44be77d2",
    changes: {
      modern: "bir topluluğu oluşturan tek kişi",
    },
    reason:
      "Fert ist eine formellere ältere Entsprechung statt einer verständlichen türkischen Erklärung.",
  },
  {
    word: "yerel",
    previous: "224:71f02672",
    changes: {
      modern: "belli bir yere veya bölgeye özgü",
    },
    reason:
      "Die moderne Umschreibung kann einfacher und unmittelbarer sein als mahallî.",
  },
  {
    word: "tarihî",
    previous: "247:db3e3a77",
    changes: {
      meaning: "historisch / geschichtlich bedeutsam",
      modern: "tarihle ilgili; geçmişten kalan veya tarih bakımından önemli",
    },
    reason:
      "Die Überschrift verengt historisch auf historisch bedeutsam; die Erklärung enthält bereits beide Sinne.",
  },
  {
    word: "arkeoloji",
    previous: "241:e38c3f93",
    changes: {
      modern: "geçmiş toplumları maddi kalıntılarla inceleyen bilim",
    },
    reason: "Archäologie besteht nicht nur aus Ausgrabungen.",
  },
  {
    word: "iz",
    previous: "222:2559a921",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Geläufiges Grundwort für körperliche Bedürfnisse, sichtbare Spuren bzw. Unterricht; für die niedrigste angebotene Stufe B1 geeigneter.",
  },
  {
    word: "soy",
    previous: "213:7973192",
    changes: {
      modern: "aileden gelen köken ve kuşak bağı",
    },
    reason:
      "Nesep ist eine schwierige formelle Erklärung eines geläufigeren Worts.",
  },
  {
    word: "temsil",
    previous: "256:7478b1d2",
    changes: {
      modern: "birinin adına hareket etme; canlandırarak gösterme",
    },
    reason:
      "Yerine geçme erklärt weder Handeln im Namen anderer noch Darstellung ausreichend.",
  },
  {
    word: "katkılı",
    previous: "254:3ea4ef94",
    changes: {
      meaning: "mit Zusatzstoffen / versetzt",
      explanation:
        "Mit einem zusätzlichen Stoff vermischt oder angereichert, etwa bei Lebensmitteln oder Baustoffen.",
      modern: "içine ek madde katılmış",
    },
    reason:
      "Das deutsche beitragend führt vom gebräuchlichen Stoff- bzw. Zusatzsinn weg.",
  },
  {
    word: "geçici",
    previous: "211:465bb051",
    changes: {
      modern: "kalıcı olmayan",
    },
    reason:
      "Süreli kann einen festgesetzten Zeitraum bezeichnen; die Kernbedeutung ist nicht dauerhaft.",
  },
  {
    word: "keşif",
    previous: "248:ffcda693",
    changes: {
      difficulty: 2,
      note: "Allgemeiner Wortschatz für Entdeckungen und Erkundungen; in juristischen oder militärischen Texten auch fachlich verwendet.",
    },
    reason:
      "Entdeckung/Erkundung ist kein ausschließlich seltener C1-Fachwortschatz.",
  },
  {
    word: "tahlil",
    previous: "244:9cd54bd3",
    changes: {
      difficulty: 2,
      modern:
        "çözümleme; kan veya idrar gibi örneklerin laboratuvarda incelenmesi",
      note: "Im Alltag häufig für Laboruntersuchungen, daneben allgemein für eine Analyse gebraucht.",
    },
    reason:
      "Häufige medizinische Alltagsbedeutung präzisieren und nicht pauschal C1 zuordnen.",
  },
  {
    word: "tecelli",
    previous: "262:f60c8101",
    changes: {
      explanation:
        "Das Sichtbarwerden einer zuvor verborgenen Wirklichkeit; religiös auch die Offenbarung göttlichen Wirkens.",
    },
    reason:
      "Der Ausdruck bezeichnet das Hervortreten selbst und nicht den Vorgang, es zu sehen.",
  },
  {
    word: "tahakkuk",
    previous: "266:2ab1f8cc",
    changes: {
      modern:
        "gerçekleşme; bir alacağın veya verginin kesinleşip kayda geçirilmesi",
    },
    reason:
      "Die wichtige verwaltungssprachliche Feststellung/Verbuchung fehlt in der türkischen Umschreibung.",
  },
  {
    word: "kefalet",
    previous: "234:54750ace",
    changes: {
      modern: "başkasının borcu veya yükümlülüğü için güvence verme",
    },
    reason:
      "Başkası­na güvence olma ist unnatürlich und erklärt nicht, wofür die Bürgschaft gilt.",
  },
  {
    word: "minnettar",
    previous: "222:81c9aa08",
    changes: {
      modern: "gördüğü iyilikten dolayı teşekkür borcu duyan",
    },
    reason:
      "Ein weiteres seltenes arabisches Synonym ist als lernfreundliche Umschreibung wenig zugänglich.",
  },
  {
    word: "mukabele",
    previous: "266:eef7e8f2",
    changes: {
      explanation:
        "Eine passende Erwiderung; religiös eine Koranrezitation, bei der andere mitlesen oder zuhören.",
      modern:
        "karşılık verme; Kur’an okunurken başkalarının dinleyip metinden izlemesi",
    },
    reason:
      "Religiöse Bedeutung ist nicht einfach beliebiges gemeinsames Lesen; die türkische Erklärung unterschlägt sie.",
  },
  {
    word: "mükerrer",
    previous: "247:742b87ea",
    changes: {
      explanation:
        "Mehrmals wiederholt oder in mehreren gleichen Exemplaren vorhanden.",
    },
    reason:
      "Wiederholung ist nicht zwingend ein Fehler; die Einschränkung auf eine eigentlich einmalig gemeinte Ausführung ist unbegründet.",
  },
  {
    word: "müteselsil",
    previous: "271:184e4b8d",
    changes: {
      modern: "zincirleme; borcun tamamından birlikte sorumlu",
    },
    reason:
      "Die im Bedeutungsfeld ausdrücklich genannte gesamtschuldnerische Haftung braucht eine verständliche türkische Entsprechung.",
  },
  {
    word: "içtihat",
    previous: "267:32bab03e",
    changes: {
      meaning: "Rechtsauslegung / Rechtsprechung",
      explanation:
        "Begründete rechtliche Auslegung; im islamischen Recht eigenständige Rechtsfindung, bei Gerichten auch eine gefestigte Entscheidungslinie.",
      modern: "hukuki yorumla sonuca varma; mahkemelerin yerleşmiş kararları",
    },
    reason:
      "Die bisherige Definition beschränkt den Ausdruck auf Präzedenzrecht und lässt die eigenständige islamische Rechtsfindung aus.",
  },
  {
    word: "kusur",
    previous: "251:8e0d0a68",
    changes: {
      meaning: "Fehler / Mangel / Verschulden",
      explanation:
        "Ein Fehler, Mangel oder Fehlverhalten; juristisch ein vorwerfbares Verhalten, das Verantwortung begründet.",
      modern: "hata veya eksiklik; hukuken kişiye yüklenebilen yanlış davranış",
      difficulty: 2,
      note: "Auch in alltäglichen Entschuldigungen und Bewertungen gebräuchlich; im Recht mit der fachlichen Bedeutung Verschulden.",
    },
    reason:
      "Gewöhnliche Hauptbedeutung Fehler fehlt; die Gesamtdefinition wird zu stark auf juristische Zurechnung verengt.",
  },
  {
    word: "iddia",
    previous: "240:1f28b7d7",
    changes: {
      difficulty: 2,
      note: "Häufiges Wort für eine Behauptung oder einen Anspruch, unter anderem in Nachrichten, Diskussionen und Rechtstexten.",
    },
    reason:
      "Gewöhnlicher Diskussions- und Nachrichtenwortschatz statt überwiegend seltenem C1-Wort.",
  },
  {
    word: "tecavüz",
    previous: "267:90a2cb8b",
    changes: {
      meaning: "Vergewaltigung / Übergriff / Rechtsverletzung",
      explanation:
        "Eine Vergewaltigung; allgemeiner ein gewaltsamer Übergriff oder die Verletzung geschützter Rechte.",
      modern:
        "bir kişiyi cinsel ilişkiye zorlama; bir hakka veya sınıra saldırı",
    },
    reason:
      "Die im heutigen Türkisch zentrale Bedeutung Vergewaltigung fehlt vollständig und darf nicht durch bloßes Rechtsverletzung verschleiert werden.",
  },
  {
    word: "ibra",
    previous: "251:c2a13906",
    changes: {
      explanation:
        "Von einer Schuld, Forderung oder bestimmten Verantwortung rechtlich befreien.",
      modern: "borç veya sorumluluktan kurtarma",
    },
    reason:
      "Aklama und freisprechen suggerieren zu leicht einen strafrechtlichen Freispruch statt Erlass oder Entlastung.",
  },
  {
    word: "ironi",
    previous: "235:cc5799f5",
    changes: {
      explanation:
        "Das Gemeinte durch einen erkennbaren Gegensatz zum wörtlich Gesagten ausdrücken, oft mit spöttischer Wirkung.",
      modern: "söylenenle kastedilen arasında bilinçli bir karşıtlık kurma",
    },
    reason:
      "Eine beliebig abweichende Bedeutung allein definiert keine Ironie.",
  },
  {
    word: "somut",
    previous: "243:d7d1de6e",
    changes: {
      modern: "duyularla algılanabilen veya belirli örneklerle gösterilebilen",
      difficulty: 2,
      note: "Gebräuchlicher Begriff in Schule, Erklärungen und Diskussionen: konkret, greifbar oder durch Beispiele belegt.",
    },
    reason:
      "C1 ist für den gängigen schulischen Gegensatz somut/soyut zu hoch; das seltene Synonym müşahhas hilft als moderne Umschreibung wenig.",
  },
  {
    word: "soyut",
    previous: "218:630a4e30",
    changes: {
      modern: "duyularla doğrudan algılanamayan, düşüncede bulunan",
      difficulty: 2,
      note: "Gebräuchlicher Begriff in Schule und allgemeinen Sachtexten: abstrakt oder nur gedanklich erfassbar.",
    },
    reason:
      "Gebräuchlicher schulischer Gegensatz statt seltener Terminus; mücerret ist keine zugängliche moderne Erklärung.",
  },
  {
    word: "etik",
    previous: "227:3037aca3",
    changes: {
      meaning: "Ethik / ethisch",
      explanation:
        "Lehre vom moralisch verantwortlichen Handeln; als Adjektiv moralische Maßstäbe betreffend.",
      modern: "ahlak felsefesi; ahlaki ilkelerle ilgili",
    },
    reason:
      "Die häufige adjektivische Verwendung wird vom ausschließlich nominalen Eintrag nicht erfasst.",
  },
  {
    word: "indirgeme",
    previous: "248:d8a504c1",
    changes: {
      modern: "karmaşık bir şeyi daha basit veya temel öğelerle açıklama",
    },
    reason:
      "Basite dönüştürme ist eine unnatürliche und fachlich unpräzise Umschreibung.",
  },
  {
    word: "varlık",
    previous: "229:d1beff7c",
    changes: {
      meaning: "Existenz / Wesen / Vermögen",
      explanation:
        "Das Vorhandensein oder ein existierendes Wesen; je nach Zusammenhang auch Besitz oder Vermögen.",
      modern: "var olma; var olan şey veya canlı; mal ve servet",
    },
    reason:
      "Die verbreitete Bedeutung Vermögen sowie Wesen fehlen; mevcudiyet erklärt nur einen Teil des Bedeutungsfelds.",
  },
  {
    word: "mevcut",
    previous: "227:103af129",
    changes: {
      difficulty: 2,
      note: "Häufig in allgemeinen Sachtexten, Nachrichten und formeller Alltagssprache: vorhanden oder bestehend.",
    },
    reason:
      "Die sehr gebräuchliche Bedeutung vorhanden rechtfertigt keine pauschale C1-Einstufung.",
  },
  {
    word: "düşünür",
    previous: "240:e7230f71",
    changes: {
      difficulty: 2,
      modern:
        "özgün fikirler geliştiren, felsefi konular üzerinde düşünen kişi",
      note: "Allgemeiner Ausdruck für einen Denker oder Philosophen, etwa in Literatur, Geschichte und Sachtexten.",
    },
    reason:
      "Gebräuchlicher moderner Ausdruck; mütefekkir ist als Umschreibung seltener und schwieriger als das Lernwort.",
  },
  {
    word: "kelam",
    previous: "275:47a48ec0",
    changes: {
      modern: "söz; İslam inançlarını akıl ve kanıtlarla inceleyen ilim",
    },
    reason:
      "Die im Bedeutungsfeld genannte allgemeine Bedeutung Rede/Wort fehlt in der türkischen Umschreibung.",
  },
  {
    word: "icazet",
    previous: "252:1553f937",
    changes: {
      explanation:
        "Anerkannte Erlaubnis, gelehrtes Wissen weiterzugeben; allgemeiner auch eine Genehmigung oder Zustimmung.",
      modern: "izin veya onay; geleneksel eğitimde ders verme yetkisi",
    },
    reason:
      "Der Eintrag definiert bisher den Erwerb der Erlaubnis statt die Erlaubnis selbst und verengt den Ausdruck auf Lehren.",
  },
  {
    word: "icra",
    previous: "249:8d313af7",
    changes: {
      modern: "uygulama; mahkeme kararını yerine getirme",
    },
    reason:
      "Die juristische Vollstreckungsbedeutung soll neben der allgemeinen Ausführung verständlich sein.",
  },
  {
    word: "rezalet",
    previous: "236:a3257f65",
    changes: {
      meaning: "Skandal / Blamage",
      explanation:
        "Ein beschämendes oder skandalöses Geschehen; umgangssprachlich auch ein sehr schlechter Zustand.",
      modern: "utanç verici durum; günlük dilde çok kötü şey veya durum",
      difficulty: 2,
      note: "Auch in heutiger Umgangssprache häufig als stark negative Bewertung gebraucht.",
    },
    reason:
      "Die gängige umgangssprachliche Verwendung wird durch Schändlichkeit und C1-Zuordnung nicht angemessen erfasst.",
  },
  {
    word: "iffet",
    previous: "264:352b1449",
    changes: {
      explanation:
        "Sittliche Integrität, insbesondere sexuelle Zurückhaltung oder Keuschheit.",
    },
    reason:
      "Die bisherige Erklärung macht aus Keuschheit nur allgemeines ruhiges und redliches Verhalten.",
  },
  {
    word: "nefis",
    previous: "247:9b704685",
    changes: {
      meaning: "Selbst / Triebnatur / vorzüglich",
      modern: "kişinin özü ve istekleri; çok güzel veya çok lezzetli",
    },
    reason:
      "Die bereits im Erklärungstext erwähnte adjektivische Bedeutung fehlt in Kurzglosse und türkischer Erklärung.",
  },
  {
    word: "görgü",
    previous: "253:e37c04a",
    changes: {
      meaning: "Umgangsformen / Lebenserfahrung",
      explanation:
        "Wissen über angemessenes gesellschaftliches Verhalten; auch durch eigenes Erleben gewonnene Erfahrung.",
      modern:
        "toplum içinde uygun davranma bilgisi; yaşayarak edinilen deneyim",
      difficulty: 2,
      note: "Häufig in Gesprächen über Erziehung, Umgangsformen und Lebenserfahrung.",
    },
    reason:
      "Der alltägliche Begriff ist zu hoch eingestuft und auf bloße Höflichkeitsregeln verengt.",
  },
  {
    word: "erkân",
    previous: "271:d35fb01d",
    changes: {
      meaning: "Sitten / Zeremoniell / Würdenträger",
      modern: "gelenekleşmiş usuller; devlet veya toplumun ileri gelenleri",
    },
    reason:
      "Förmlichkeit im Singular erfasst usul ve erkân nur ungenau; die Personengruppe soll verständlich bleiben.",
  },
  {
    word: "muhabbet",
    previous: "234:59fbdea3",
    changes: {
      meaning: "Zuneigung / herzliches Gespräch",
      explanation:
        "Herzliche Zuneigung oder vertrauter, freundlicher Umgang; im Alltag auch ein ungezwungenes Gespräch.",
      modern: "sevgi ve yakınlık; içten sohbet",
      difficulty: 2,
      note: "Neben herzlicher Zuneigung im Alltag oft im Sinn von Gespräch oder Plauderei gebraucht, etwa in muhabbet etmek.",
    },
    reason:
      "Die sehr häufige Bedeutung Gespräch/Plauderei fehlt und macht die pauschale C1-Zuordnung irreführend.",
  },
  {
    word: "ünsiyet",
    previous: "243:28e2f6bc",
    changes: {
      modern: "alışmayla gelişen yakınlık ve tanışıklık",
    },
    reason: "Alışkan yakınlık ist keine natürliche türkische Wortverbindung.",
  },
  {
    word: "layık",
    previous: "244:ebfd97f1",
    changes: {
      modern: "uygun görülen veya bir şeyi hak eden",
    },
    reason:
      "Uygun ve değer verbindet Adjektiv und Substantiv unnatürlich und erklärt würdig nicht eindeutig.",
  },
  {
    word: "karaciğer",
    previous: "222:6f085880",
    changes: {
      modern: "besinleri işleyen ve zararlı maddeleri parçalayan organ",
    },
    reason:
      "Kanın işlendiği organ ist zu vage und erklärt die wesentlichen Funktionen der Leber nicht.",
  },
  {
    word: "sinir",
    previous: "217:c9076924",
    changes: {
      modern: "uyarıları ileten lif; öfke veya gerginlik",
    },
    reason:
      "Die aufgeführte Bedeutung Gereiztheit fehlte in der türkischen Erklärung.",
  },
  {
    word: "tansiyon",
    previous: "216:ac44de4a",
    changes: {
      modern: "kanın damarlara yaptığı basınç; gerginlik",
    },
    reason:
      "Die aufgeführte übertragene Bedeutung Spannung fehlte in der türkischen Erklärung.",
  },
  {
    word: "uykusuzluk",
    previous: "210:aa12f574",
    changes: {
      meaning: "Schlafmangel / Schlaflosigkeit",
      explanation:
        "Zu wenig schlafen oder Schwierigkeiten haben, einzuschlafen und ausreichend durchzuschlafen.",
      modern: "yeterince uyumama veya uyuyamama",
    },
    reason:
      "Uyuyamama bezeichnet Schlaflosigkeit, während die deutsche Bedeutung nur Schlafmangel nannte.",
  },
  {
    word: "hakem",
    previous: "230:853368d9",
    changes: {
      modern: "oyunda kurallara uyulmasını gözeten ve karar veren kişi",
    },
    reason:
      "Oyun yargıcı ist eine unnatürliche wörtliche Umschreibung für einen Schiedsrichter.",
  },
  {
    word: "koşu",
    previous: "215:c26de841",
    changes: {
      modern: "yürüyüşten daha hızlı, sıçrayan adımlarla ilerleme",
    },
    reason:
      "Laufen ist keine Form des schnellen Gehens; die Bewegungsform wird abgegrenzt.",
  },
  {
    word: "tulum",
    previous: "219:6f040cca",
    changes: {
      modern: "tek parça giysi; deriden yapılmış torba veya kap",
    },
    reason:
      "Die türkische Erklärung ließ die ausdrücklich genannte Sack- oder Behälterbedeutung aus.",
  },
  {
    word: "batarya",
    previous: "222:5a07368a",
    changes: {
      modern: "elektrik enerjisi depolayan pil veya pil grubu",
    },
    reason:
      "Pil birliği ist als türkische Erklärung für eine Batterie unnatürlich.",
  },
  {
    word: "anahtar",
    previous: "220:51cb525",
    changes: {
      modern: "kilit açan araç; elektrik akımını açıp kapatan düzenek",
    },
    reason:
      "Die aufgeführte Bedeutung Schalter fehlte in der türkischen Erklärung.",
  },
  {
    word: "otoyol",
    previous: "215:81d290a5",
    changes: {
      related: "otoban · ulaşım",
    },
    reason:
      "Otoyolcu ist als verwandtes Lernwort ungewöhnlich; otoban ist eine gebräuchliche Entsprechung.",
  },
  {
    word: "nöbet",
    previous: "248:a9ccc003",
    changes: {
      modern:
        "sırayla üstlenilen bekleme görevi; aniden başlayan hastalık atağı",
    },
    reason:
      "Die häufige medizinische Bedeutung Anfall fehlte in der türkischen Erklärung.",
  },
  {
    word: "korucu",
    previous: "221:6a7c4e56",
    changes: {
      difficulty: 2,
      meaning: "Gebietswächter / Dorfschützer",
      explanation:
        "Eine mit dem Schutz eines Gebiets beauftragte Person; in »köy korucusu« auch Angehöriger einer örtlichen bewaffneten Schutztruppe.",
      modern: "bir alanı koruyan görevli; köy güvenliğinde görev alan kişi",
      note: "Kontextabhängige Berufs- und Verwaltungsbezeichnung; köy korucusu bezeichnet eine besondere örtliche Schutzfunktion.",
    },
    reason:
      "Schutzwächter ist im Deutschen unüblich; die wichtige kontextabhängige Dorfschützerbedeutung und der speziellere Gebrauch sprechen für B2.",
  },
  {
    word: "daire",
    previous: "234:5ff7963",
    changes: {
      modern: "bağımsız konut; çemberin iç bölgesi",
    },
    reason:
      "Eine daire ist eine eigenständige Wohnung, nicht lediglich ein Teil eines Hauses oder einer Wohnung.",
  },
  {
    word: "metal",
    previous: "194:a92fdc41",
    changes: {
      modern: "ısıyı ve elektriği genellikle iyi ileten madde türü",
    },
    reason:
      "Maden türü ist mehrdeutig und vermischt Metall mit Erz, Mineral und Bergwerk.",
  },
  {
    word: "kök",
    previous: "237:6e7891ca",
    changes: {
      modern:
        "bitkinin topraktan su ve besin alan bölümü; bir şeyin başlangıcı",
    },
    reason:
      "Bitkinin tabanı ist ungenau und erklärt die übertragene Ursprungsbedeutung nicht.",
  },
  {
    word: "yaprak",
    previous: "218:93097ba1",
    changes: {
      modern: "bitkinin genellikle yeşil ve yassı organı; kâğıt parçası",
    },
    reason:
      "Die in der deutschen Erklärung angegebene Papierblattbedeutung fehlte auf Türkisch.",
  },
  {
    word: "kestane",
    previous: "215:ede0364d",
    changes: {
      modern:
        "dikenli dış kabuk içinde yetişen, kahverengi kabuklu yenilebilir meyve",
    },
    reason:
      "Kavruk bezeichnet einen gerösteten Zustand; eine Esskastanie ist nicht grundsätzlich geröstet.",
  },
  {
    word: "reçel",
    previous: "205:8db7f0bd",
    changes: {
      modern: "meyvelerin şekerle kaynatılmasıyla yapılan sürülebilir yiyecek",
    },
    reason:
      "Meyve tatlısı ist zu allgemein und kann ein beliebiges Fruchtdessert bezeichnen.",
  },
  {
    word: "pekmez",
    previous: "221:8444142",
    changes: {
      modern:
        "meyve suyunun kaynatılıp koyulaştırılmasıyla elde edilen tatlı sıvı",
    },
    reason:
      "Meyve şırası nennt die Ausgangsflüssigkeit, nicht deren gekochte und eingedickte Zubereitung.",
  },
  {
    word: "kekik",
    previous: "225:dafc6f77",
    changes: {
      meaning: "Thymian / Oregano",
      explanation:
        "Türkische Sammelbezeichnung für aromatische Gewürzkräuter, vor allem Thymian- und Oreganoarten.",
      modern: "yemeklerde kullanılan, hoş kokulu çeşitli baharat otları",
    },
    reason:
      "Kekik wird auch für Oreganoarten verwendet; eine Beschränkung auf thymianartige Pflanzen ist für türkische Texte zu eng.",
  },
  {
    word: "zencefil",
    previous: "211:bee578bb",
    changes: {
      explanation:
        "Ein scharf schmeckender Wurzelstock, der als Gewürz und für Getränke verwendet wird.",
      modern: "baharat olarak kullanılan, keskin tadı olan toprak altı gövde",
    },
    reason:
      "Der genutzte Pflanzenteil des Ingwers ist ein Rhizom, keine eigentliche Wurzel.",
  },
  {
    word: "kabak",
    previous: "214:3ed959b",
    changes: {
      modern: "yemek veya tatlılarda kullanılan, iri ya da uzun meyveli sebze",
    },
    reason:
      "Kabakgiller meyvesi ist für Lernende eine zirkuläre taxonomische Umschreibung.",
  },
  {
    word: "mantar",
    previous: "214:2d121dd6",
    changes: {
      modern:
        "küf, maya ve şapkalı türleri bulunan, yaprak yeşili içermeyen canlı grubu",
    },
    reason:
      "Nicht alle Pilze haben einen Hut; die Erklärung schapkalı canlı war daher zu eng.",
  },
  {
    word: "balıkçı",
    previous: "191:47b20852",
    changes: {
      modern: "balık avlayan veya satan kişi",
    },
    reason:
      "Die deutsche Erklärung nennt auch Fischverkauf, die türkische nur den Fang.",
  },
  {
    word: "av",
    previous: "215:4860a77f",
    changes: {
      modern: "yaban hayvanlarını yakalama veya öldürme işi; yakalanan hayvan",
    },
    reason:
      "Die ausdrücklich genannte Bedeutung Beute fehlte in der türkischen Erklärung.",
  },
  {
    word: "dana",
    previous: "175:84ae20a2",
    changes: {
      meaning: "Kalb / Jungrind",
      explanation:
        "Ein junges Rind, besonders nach dem Absetzen von der Milch.",
    },
    reason:
      "Jungrind präzisiert die Bedeutung; buzağı bezeichnet insbesondere das noch saugende oder sehr junge Kalb.",
  },
  {
    word: "yavru",
    previous: "225:f1ade379",
    changes: {
      modern: "henüz büyümemiş hayvan; bir çocuğa sevgiyle seslenme sözü",
    },
    reason:
      "Küçük canlı ist zu allgemein; die liebevolle Anrede für ein Kind blieb unerklärt.",
  },
  {
    word: "şahin",
    previous: "189:21f9558c",
    changes: {
      meaning: "Bussard",
      explanation:
        "Ein Greifvogel aus der Bussardgruppe, der häufig kreisend nach Beute sucht.",
      modern: "geniş kanatlı, çoğunlukla süzülerek av arayan yırtıcı kuş",
    },
    reason:
      "Şahin bezeichnet insbesondere Bussarde; Falke ist doğan und Habicht çakır kuşu.",
  },
  {
    word: "kanat",
    previous: "207:6afb2448",
    changes: {
      modern: "kuşun uçmasını sağlayan organ; bir yapının yan bölümü",
    },
    reason:
      "Die in der deutschen Erklärung genannte Bedeutung Gebäudeflügel fehlte auf Türkisch.",
  },
  {
    word: "yün",
    previous: "200:119f26d6",
    changes: {
      modern:
        "koyun, keçi gibi hayvanların yumuşak kıllarından elde edilen lif",
    },
    reason:
      "Wolle stammt nicht ausschließlich vom Schaf; andere Wolltiere sind mit erfasst.",
  },
  {
    word: "deri",
    previous: "207:96110fa0",
    changes: {
      modern:
        "vücudu örten tabaka; hayvanın dış örtüsünden işlenerek elde edilen malzeme",
    },
    reason:
      "Die aufgeführte Bedeutung Leder fehlte in der türkischen Umschreibung.",
  },
  {
    word: "cilt",
    previous: "214:29ea6c9",
    changes: {
      modern: "insan derisi; bir eserin ayrı kitap olarak basılan bölümü",
    },
    reason:
      "Kitap bölümü kann ein Kapitel bezeichnen; gemeint ist hier ein eigenständiger Band.",
  },
  {
    word: "tepe",
    previous: "209:43ce1108",
    changes: {
      modern: "küçük yükselti; bir şeyin en üst noktası",
    },
    reason:
      "Die aufgeführte Bedeutung Spitze fehlte in der türkischen Umschreibung.",
  },
  {
    word: "uçurum",
    previous: "202:5dc1bf7",
    changes: {
      modern: "kenarı çok dik ve derin yer",
    },
    reason:
      "Dik derinlik ist im Türkischen keine natürliche Umschreibung für einen Abgrund.",
  },
  {
    word: "bulut",
    previous: "222:795f226d",
    changes: {
      modern:
        "havada asılı duran su damlacıkları veya buz kristalleri topluluğu",
    },
    reason:
      "Gökte su topluluğu ist als sachliche Erklärung einer Wolke zu ungenau.",
  },
  {
    word: "gürültülü",
    previous: "206:ed089b86",
    changes: {
      modern: "yüksek ve rahatsız edici ses çıkaran",
    },
    reason:
      "Çok sesli kann mehrstimmig oder polyphon heißen und ist nicht dieselbe Eigenschaft wie lärmend.",
  },
  {
    word: "yakın",
    previous: "220:eeed5f3a",
    changes: {
      modern: "mesafesi az; içten bağ kurulan",
    },
    reason:
      "Die aufgeführte persönliche Nähe oder Vertrautheit fehlte in der türkischen Erklärung.",
  },
  {
    word: "derin",
    previous: "217:47f3cbc9",
    changes: {
      modern: "yüzeyden dibe uzaklığı fazla; ayrıntılı ve kapsamlı",
    },
    reason:
      "Derinliği çok ist zirkulär und erklärt die übertragene Bedeutung gründlich nicht.",
  },
  {
    word: "derinlik",
    previous: "220:494c0757",
    changes: {
      modern:
        "yüzey ile dip arasındaki uzaklık; bir konuyu ayrıntısıyla ele alma",
    },
    reason:
      "Derin olma ist zirkulär; die räumliche und übertragene Bedeutung werden jetzt erläutert.",
  },
  {
    word: "ince",
    previous: "212:efe301c3",
    changes: {
      modern: "kalınlığı az; nazik ve duyarlı",
    },
    reason:
      "Die aufgeführte Bedeutung feinfühlig fehlte in der türkischen Umschreibung.",
  },
  {
    word: "kalın",
    previous: "205:836930",
    changes: {
      meaning: "dick / tief (Stimme)",
      modern: "ince olmayan; sesi tok ve düşük perdeli",
    },
    reason:
      "Eine kalın ses ist eine tiefe Stimme; kräftig allein erklärt die Tonhöhe nicht.",
  },
  {
    word: "bozuk",
    previous: "236:9eeffbe5",
    changes: {
      modern: "iyi çalışmayan; yiyecek için, yenemeyecek duruma gelmiş",
    },
    reason:
      "İşlevi aksak deckt defekt, aber nicht die aufgeführte Lebensmittelbedeutung verdorben ab.",
  },
  {
    word: "ciddi",
    previous: "233:232dd2c5",
    changes: {
      modern: "önemseyerek davranan; hafife alınamayacak kadar önemli",
    },
    reason:
      "Şakacı olmayan ist zu eng und erklärt die Bedeutung erheblich oder schwerwiegend nicht.",
  },
  {
    word: "şanssız",
    previous: "208:2018b29d",
    changes: {
      meaning: "vom Pech betroffen / ohne Glück",
      explanation:
        "In einer Situation ungünstige Zufälle oder fehlendes Glück erleben.",
    },
    reason:
      "Şanssız erfordert keine wiederholten Missgeschicke oder dauerhafte Pechsträhne.",
  },
  {
    word: "sır",
    previous: "207:da6fbd6",
    changes: {
      related: "sırdaş · gizlilik",
    },
    reason:
      "Sırlı ist häufig glasiert und kann vom Geheimnissinn ablenken; sırdaş passt eindeutig.",
  },
  {
    word: "bencillik",
    previous: "224:4b3a7d39",
    changes: {
      modern:
        "başkalarının ihtiyaçlarını yeterince düşünmeden yalnız kendi çıkarını gözetme",
    },
    reason:
      "Kendini üstün tutma bezeichnet eher Überheblichkeit, nicht das maßgebliche Eigeninteresse beim Egoismus.",
  },
  {
    word: "hasım",
    previous: "196:9783beda",
    changes: {
      difficulty: 2,
      meaning: "Gegner / Widersacher",
      modern: "birine karşı mücadele eden veya düşmanlık besleyen kişi",
      note: "Formelle oder literarische Bezeichnung für einen Gegner oder Widersacher; die genaue Bedeutung ergibt sich aus dem Buchsatz.",
    },
    reason:
      "Hasım ist gegenüber dem alltäglichen düşman deutlich formeller und als B2-Lernwort angemessener.",
  },
  {
    word: "garip",
    previous: "231:9c701ecb",
    changes: {
      meaning: "seltsam / fremd / verlassen",
      explanation:
        "Ungewöhnlich oder befremdlich; auch in der Fremde ohne Angehörige oder persönlichen Rückhalt.",
      modern: "tuhaf; gurbette yalnız veya kimsesiz",
    },
    reason:
      "Die häufige literarische Bedeutung kimsesiz war in der deutschen Kurzangabe nicht hinreichend erkennbar.",
  },
  {
    word: "emniyet",
    previous: "227:7582b83b",
    changes: {
      modern: "güvenlik; polis teşkilatı",
    },
    reason:
      "Die ausdrücklich aufgeführte Polizeibehörde fehlte in der türkischen Umschreibung.",
  },
  {
    word: "gereklilik",
    previous: "228:ddc86db1",
    changes: {
      modern: "bir şeyin gerekli olma durumu",
    },
    reason: "Lüzum ist für diese Umschreibung unnötig formell und abstrakt.",
  },
  {
    word: "sistematik",
    previous: "227:d31e56e7",
    changes: {
      modern: "belirli bir düzen ve yönteme dayalı",
    },
    reason:
      "Dizgeli ist eine seltene Fachentsprechung statt einer leicht verständlichen Umschreibung.",
  },
  {
    word: "iktisatçı",
    previous: "255:b8a414ab",
    changes: {
      explanation:
        "Eine Fachperson, die wirtschaftliche Zusammenhänge untersucht und erklärt.",
    },
    reason:
      "Die Erklärung sollte die bezeichnete Person und nicht nur die Tätigkeit nennen.",
  },
  {
    word: "güvenilirlik",
    previous: "253:e2ace49f",
    changes: {
      modern: "güven duyulabilme; sürekli doğru sonuç verme",
    },
    reason:
      "İtimat edilebilirlik ist unnötig schwer und unnatürlich für Lernende.",
  },
  {
    word: "dengeli",
    previous: "242:e917e906",
    changes: {
      modern: "ölçülü; karşıt etkileri uyum içinde olan",
    },
    reason:
      "Muvazeneli ist eine schwierigere ältere Entsprechung des zu erklärenden Wortes.",
  },
  {
    word: "potansiyel",
    previous: "261:4e4e9de9",
    changes: {
      meaning: "Potenzial / potenziell",
      explanation:
        "Eine noch nicht ausgeschöpfte Fähigkeit oder Möglichkeit; als Adjektiv: möglicherweise eintretend oder nutzbar.",
      modern: "henüz ortaya çıkmamış güç veya olanak; olası",
    },
    reason:
      "Mögliches Entwicklungspotenzial ist tautologisch und lässt die verbreitete Adjektivfunktion unklar.",
  },
  {
    word: "kapasite",
    previous: "227:97f91523",
    changes: {
      modern: "bir şeyin alabileceği en yüksek miktar veya yapabileceği iş",
    },
    reason:
      "Sığa ist eine seltene Fachentsprechung statt einer klaren Umschreibung.",
  },
  {
    word: "hacim",
    previous: "230:1e766a03",
    changes: {
      modern: "bir cismin kapladığı yer; iş veya işlem miktarı",
    },
    reason:
      "Oylum ist eine seltenere Entsprechung statt einer klaren modernen Erklärung.",
  },
  {
    word: "boyutlu",
    previous: "249:f6406695",
    changes: {
      meaning: "mit einer bestimmten Dimension / Ausdehnung",
      explanation:
        "Mit räumlichen Maßen oder bestimmten Aspekten versehen; etwa üç boyutlu: dreidimensional.",
      modern: "belli ölçüleri veya yönleri olan",
    },
    reason:
      "Boyutlu bedeutet nicht von sich aus mehrdimensional, sondern wird unter anderem mit Zahlen verbunden.",
  },
  {
    word: "geçicilik",
    previous: "215:a4b804f",
    changes: {
      meaning: "Vorübergehendes Bestehen",
      explanation:
        "Der Umstand, dass etwas nur für eine begrenzte Zeit besteht und nicht dauerhaft bleibt.",
    },
    reason:
      "Vorläufigkeit setzt einen noch nicht endgültigen Stand voraus; geçicilik bezeichnet allgemein vorübergehendes Bestehen.",
  },
  {
    word: "çekince",
    previous: "234:41c5f461",
    changes: {
      modern: "bir görüşü kabul ederken belirtilen koşul veya itiraz",
    },
    reason:
      "Tereddütlü kayıt ist keine natürliche Lernumschreibung für einen Vorbehalt.",
  },
  {
    word: "yaptırım",
    previous: "233:7bc6b8be",
    changes: {
      modern: "kurala uyulmasını sağlayan ceza veya önlem",
    },
    reason:
      "Müeyyide ist ein schwierigeres Fachwort statt einer verständlichen Erklärung.",
  },
  {
    word: "standartlaşma",
    previous: "233:a3ad7d04",
    changes: {
      modern: "ortak ölçü ve kurallara uygun hâle gelme",
    },
    reason:
      "Ölçünleşme ist wenig geläufig und wiederholt nur denselben Bildungsprozess.",
  },
  {
    word: "tekdüze",
    previous: "218:c6a85fd2",
    changes: {
      modern: "değişiklik ve çeşitlilik göstermeyen",
    },
    reason:
      "Yeknesak ist eine seltenere ältere Entsprechung statt einer einfachen Erklärung.",
  },
  {
    word: "özelleştirme",
    previous: "275:2bdb0c05",
    changes: {
      modern: "kamu işletmesini özel sektöre devretme; kişiye göre düzenleme",
    },
    reason:
      "Özele dönüştürme ist unklar und erklärt Privatisierung sowie persönliche Anpassung nicht.",
  },
  {
    word: "kamulaştırma",
    previous: "258:b1547971",
    changes: {
      modern: "özel mülkiyetteki malı yasal işlemle kamuya geçirme",
    },
    reason:
      "İstimlak ist ein schwierigeres formelles Wort statt einer einfachen Beschreibung.",
  },
  {
    word: "ruhsat",
    previous: "245:14da5153",
    changes: {
      explanation:
        "Eine behördliche Erlaubnis, eine bestimmte Tätigkeit auszuüben oder etwas zu nutzen.",
    },
    reason:
      "Der vorhandene Erklärungssatz beschreibt das Besitzen einer Genehmigung statt die Genehmigung selbst.",
  },
  {
    word: "beraat",
    previous: "249:2d47b53",
    changes: {
      explanation:
        "Gerichtlicher Freispruch von einem Strafvorwurf, etwa weil die Tat nicht erwiesen oder nicht strafbar ist.",
      modern: "ceza davasında sanığın suçtan aklanması",
    },
    reason:
      "Ein Freispruch beruht nicht ausschließlich auf unbewiesenen Vorwürfen, sondern auch etwa auf fehlender Strafbarkeit.",
  },
  {
    word: "bağnazlık",
    previous: "242:6fac61f2",
    changes: {
      modern: "kendi görüşüne aşırı bağlı olup başka görüşlere kapalı olma",
    },
    reason:
      "Taassup ist eine schwierigere ältere Entsprechung statt einer leicht verständlichen Umschreibung.",
  },
  {
    word: "hakemlik",
    previous: "253:5bad1373",
    changes: {
      modern:
        "yarışmayı kurallara göre yönetme veya anlaşmazlığı karara bağlama",
    },
    reason:
      "Hakemlik ist nicht bloß Mediation; ein Schiedsrichter bzw. Schiedsgericht trifft regelgebundene Entscheidungen.",
  },
  {
    word: "zorba",
    previous: "243:9fc6e624",
    changes: {
      meaning: "Tyrann / Unterdrücker",
    },
    reason:
      "Gewalttäter ist weiter als das gemeinte Unterdrücken durch missbrauchte Macht.",
  },
  {
    word: "hoşgörüsüz",
    previous: "231:b4356ea9",
    changes: {
      modern: "farklı görüş ve davranışları kabul etmeyen",
    },
    reason:
      "Tahammülsüz kann allgemein ungeduldig bedeuten; die hier gemeinte Intoleranz sollte direkt erklärt werden.",
  },
  {
    word: "uyruk",
    previous: "234:b9adefcb",
    changes: {
      meaning: "Staatsangehörigkeit / Staatsangehöriger",
      modern:
        "bir devlete vatandaşlık bağıyla bağlı olma; o devletin vatandaşı",
    },
    reason:
      "Tabiiyet ist eine schwierige formelle Umschreibung; der Personenbezug ist ebenfalls gebräuchlich.",
  },
  {
    word: "sekreter",
    previous: "247:81ee9c09",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "toplumcu",
    previous: "247:a9f0cd52",
    changes: {
      meaning: "gesellschaftsorientiert / sozialistisch",
      explanation:
        "Gemeinschaftliche Interessen betonend; in politischen Zusammenhängen auch sozialistisch.",
      modern: "toplumun çıkarlarını öne alan; sosyalizmi benimseyen",
    },
    reason:
      "Die verbreitete politische Bedeutung sozialistisch fehlt neben der allgemein gesellschaftsorientierten Bedeutung.",
  },
  {
    word: "oturum",
    previous: "239:bcea4aa",
    changes: {
      explanation:
        "Ein zeitlich abgegrenzter Abschnitt einer Beratung; technisch auch eine zusammenhängende Nutzung eines Systems nach der Anmeldung.",
      modern: "toplantı bölümü; sisteme girişten çıkışa kadar süren kullanım",
    },
    reason:
      "Die verbreitete Computerbedeutung Sitzung fehlt in beiden Erklärungen.",
  },
  {
    word: "heyet",
    previous: "225:7ff9b030",
    changes: {
      related: "kurul · temsil",
    },
    reason: "Heyetli ist als verwandtes Lernwort unnötig unüblich.",
  },
  {
    word: "elçi",
    previous: "264:265931db",
    changes: {
      explanation:
        "Eine Person, die eine Botschaft überbringt oder einen Staat bei einem anderen Staat vertritt.",
    },
    reason:
      "Eine politische Vertretung wird nicht übermittelt; der Gesandte vertritt einen Staat.",
  },
  {
    word: "reel",
    previous: "253:13bcec7f",
    changes: {
      explanation:
        "Auf die Wirklichkeit bezogen; in der Wirtschaft um Preisveränderungen bereinigt statt nur als Nennwert angegeben.",
      modern: "gerçek; fiyat değişimleri hesaba katılmış",
    },
    reason:
      "Gerçek değerli ist keine natürliche türkische Erklärung und vermischt real mit wertvoll.",
  },
  {
    word: "nominal",
    previous: "233:c515e2f",
    changes: {
      modern:
        "üzerinde yazılı değere göre; fiyat değişimleri hesaba katılmadan",
    },
    reason:
      "İtibari ist eine formelle Entsprechung; die Nennwertbedeutung kann einfacher erklärt werden.",
  },
  {
    word: "menkul",
    previous: "245:ba13d407",
    changes: {
      explanation:
        "Bewegliche Sachen oder Vermögenswerte; in menkul kıymetler insbesondere Wertpapiere.",
      modern: "taşınabilir mal; menkul kıymetler ifadesinde değerli kâğıt",
    },
    reason:
      "Die bisherige Erklärung verwechselt rechtliche Übertragbarkeit mit beweglichem Vermögen.",
  },
  {
    word: "taşınır",
    previous: "242:cc2f887d",
    changes: {
      explanation:
        "Ein beweglicher Gegenstand, der nicht als Grundstück oder dauerhaft damit verbundenes Bauwerk gilt.",
      modern: "bir yerden başka bir yere götürülebilen mal",
    },
    reason:
      "Auch Immobilieneigentum kann übertragen werden; entscheidend ist hier die rechtliche Einordnung als bewegliche Sache.",
  },
  {
    word: "değer",
    previous: "223:d17a1b5d",
    changes: {
      explanation:
        "Die wirtschaftliche, persönliche oder gesellschaftliche Bedeutung, die einer Sache oder Person zukommt.",
      modern: "bir şeye verilen önem veya onun para karşılığı",
    },
    reason:
      "Die bisherige Erklärung beschreibt das Bemessen eines Werts, nicht den Wert selbst.",
  },
  {
    word: "pahalı",
    previous: "223:ced3df94",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "ucuz",
    previous: "221:3f18651e",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "sponsor",
    previous: "262:5b574310",
    changes: {
      explanation:
        "Eine Person oder Organisation, die ein Vorhaben finanziell oder materiell unterstützt, häufig gegen öffentliche Nennung oder Werbung.",
      modern: "bir etkinliğe maddi destek sağlayan kişi veya kuruluş",
    },
    reason:
      "Ein Sponsor kann eine Person sein, nicht nur eine Organisation; die Erklärung beschreibt bisher nur die Tätigkeit.",
  },
  {
    word: "sponsorluk",
    previous: "222:bd09e9fc",
    changes: {
      explanation:
        "Die finanzielle oder materielle Förderung eines Vorhabens, häufig gegen öffentliche Nennung oder Werbung.",
      modern: "bir etkinliği maddi veya parasal olarak destekleme",
    },
    reason:
      "Die typische Werbegegenleistung unterscheidet Sponsoring von allgemeiner Förderung.",
  },
  {
    word: "karlılık",
    previous: "242:806f73a7",
    changes: {
      word: "kârlılık",
    },
    reason: "Die Schreibung mit â gehört zur Ableitung von kâr (Gewinn).",
  },
  {
    word: "geçimlik",
    previous: "243:d64fd412",
    changes: {
      meaning: "Lebensunterhalt / zum Lebensunterhalt bestimmt",
      explanation:
        "Mittel für das tägliche Leben; als Adjektiv: unmittelbar zum Bestreiten des Lebensunterhalts bestimmt.",
      modern: "yaşamı sürdürmek için gerekli olan veya kullanılan",
    },
    reason:
      "Lebensunterhalt und die adjektivische Bestimmung sind im Deutschen deutlicher als Existenzmittel.",
  },
  {
    word: "yoksul",
    previous: "218:4c4d10e0",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "zenginlik",
    previous: "254:ea71adbe",
    changes: {
      modern: "mal ve para bolluğu; çeşit bakımından çokluk",
    },
    reason: "Die Vielfalt-Bedeutung fehlt in der türkischen Umschreibung.",
  },
  {
    word: "zengin",
    previous: "227:ac38b315",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "varlıklılık",
    previous: "233:e3eeb38d",
    changes: {
      explanation:
        "Ein Zustand, in dem jemand über umfangreichen materiellen Besitz verfügt.",
    },
    reason: "Ausstattung mit Besitz besitzen ist im Deutschen unnötig doppelt.",
  },
  {
    word: "sahip",
    previous: "230:b90a3bfd",
    changes: {
      modern: "bir şey kendisine ait olan kişi",
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Malik ist formeller als das häufige Grundwort; eine einfache Definition hilft Lernenden mehr. Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "bekleme",
    previous: "234:f1fb130d",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "bekleyiş",
    previous: "216:24374a0c",
    changes: {
      modern: "bir şeyin olmasını veya gelmesini bekleme",
    },
    reason: "İntizar ist eine seltene, zudem mehrdeutige ältere Entsprechung.",
  },
  {
    word: "çıkış",
    previous: "232:d792493f",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "giriş",
    previous: "239:6f999790",
    changes: {
      modern: "içeri girilen yer; bir konunun başlangıç bölümü",
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die ausdrücklich angegebene Einführungsbedeutung fehlt in der türkischen Umschreibung. Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "uçuş",
    previous: "192:6769fae7",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "depo",
    previous: "216:e30cff49",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "pansiyon",
    previous: "252:71815d54",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "iddialı",
    previous: "247:39db24e6",
    changes: {
      meaning: "ambitioniert / anspruchsvoll",
      explanation:
        "Hohe Ziele verfolgen oder besondere Ansprüche an Erfolg und Wirkung stellen.",
      modern: "başarı konusunda kendine güvenen; büyük hedefleri olan",
    },
    reason:
      "Savı güçlü verengt das Wort auf eine starke Behauptung und erklärt ambitionierte Ziele nicht.",
  },
  {
    word: "metabolizma",
    previous: "247:9472ed6a",
    changes: {
      modern:
        "canlıda maddelerin dönüştürülmesi ve enerjinin kullanılmasıyla ilgili kimyasal süreçlerin bütünü",
    },
    reason:
      "Özümleme bezeichnet nur aufbauende Vorgänge, der Stoffwechsel umfasst auch abbauende Prozesse.",
  },
  {
    word: "hesaplaşma",
    previous: "268:45ff6f4f",
    changes: {
      meaning: "Abrechnung / Auseinandersetzung mit Vergangenem",
      explanation:
        "Offene Rechnungen oder Konflikte klären; je nach Satz auch mit jemandem abrechnen oder sich mit der Vergangenheit auseinandersetzen.",
      modern:
        "hesapları kapatma; geçmiş sorunları veya anlaşmazlıkları ele alma",
    },
    reason:
      "Die gebräuchliche Abrechnungsbedeutung neben der Auseinandersetzung mit Vergangenem fehlt.",
  },
  {
    word: "bağışlama",
    previous: "216:d8ae96a1",
    changes: {
      meaning: "Verzeihen / Schenken",
      explanation:
        "Eine Verfehlung vergeben; je nach Zusammenhang auch etwas ohne Gegenleistung schenken oder spenden.",
      modern: "affetme; karşılıksız verme",
    },
    reason:
      "Das Wort bezeichnet neben Verzeihen auch das Schenken oder Spenden.",
  },
  {
    word: "öğrenme",
    previous: "229:b9273c3",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "öğretme",
    previous: "227:7a319575",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "tekrar",
    previous: "238:b8a196d",
    changes: {
      modern: "yineleme; bir daha yapma",
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Yenileme bedeutet Erneuerung und ist als Erklärung für Wiederholung unpräzise. Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "tekrarlama",
    previous: "228:26832973",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "kazanım",
    previous: "259:89e6919e",
    changes: {
      modern: "öğrenme veya çaba sonunda elde edilen bilgi, beceri ya da yarar",
    },
    reason:
      "Edinilmiş yarar ist unnatürlich und erklärt Lernkompetenzen nur unzureichend.",
  },
  {
    word: "başarım",
    previous: "235:7f899f27",
    changes: {
      explanation:
        "Das tatsächlich erzielte Ergebnis oder erreichte Leistungsniveau bei einer Tätigkeit.",
    },
    reason:
      "Die Erklärung beschreibt das Beurteilen statt das tatsächlich erreichte Leistungsergebnis.",
  },
  {
    word: "performans",
    previous: "234:dd45d1cf",
    changes: {
      explanation:
        "Die tatsächlich gezeigte Leistung, etwa bei Arbeit, Sport oder einer künstlerischen Darbietung.",
    },
    reason:
      "Die Erklärung beschreibt das Bewerten einer Leistung statt der Leistung selbst.",
  },
  {
    word: "yeterlik",
    previous: "231:fdbfefce",
    changes: {
      explanation:
        "Die Befähigung, eine Aufgabe aufgrund vorhandener Kenntnisse und Fähigkeiten zu erfüllen.",
    },
    reason: "Befähigung und deren Nachweis sind verschiedene Dinge.",
  },
  {
    word: "olgunluk",
    previous: "233:f305e5ce",
    changes: {
      explanation:
        "Ein ausgereifter Entwicklungszustand; bei Menschen auch besonnenes und ausgewogenes Denken und Verhalten.",
      modern: "gelişmesini tamamlama; düşünce ve davranışta dengeli olma",
    },
    reason:
      "Der allgemeine Entwicklungs- bzw. Reifungsbegriff ist breiter als geistige Ausgewogenheit; kemal ist als Umschreibung unnötig schwierig.",
  },
  {
    word: "olgun",
    previous: "230:d4ed9c7a",
    changes: {
      modern: "gelişimini tamamlamış; düşünceli ve ölçülü",
    },
    reason:
      "Yetkinleşmiş verengt Reife auf Kompetenz; das Wort bezeichnet auch körperliche bzw. natürliche Reifung.",
  },
  {
    word: "irsiyet",
    previous: "229:1553e7f7",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Seltene historische, fachsprachliche oder akademische Bezeichnung; gemäß der Lernrubrik klarer in C1 als im allgemeinen B2-Wortschatz.",
  },
  {
    word: "iletken",
    previous: "231:47a40afa",
    changes: {
      modern: "ısıyı veya elektrik akımını taşıyabilen madde",
    },
    reason:
      "Aktarıcı madde ist unspezifisch; die physikalische Wärme- oder Stromleitung soll erkennbar sein.",
  },
  {
    word: "yalıtkan",
    previous: "241:624d9a24",
    changes: {
      modern: "ısıyı veya elektrik akımını çok az geçiren madde",
    },
    reason:
      "Die türkische Umschreibung erklärt nicht, welche Übergänge hier gemeint sind.",
  },
  {
    word: "basınç",
    previous: "224:7c58d3b2",
    changes: {
      explanation:
        "Technisch die auf eine Fläche wirkende Kraft pro Flächeneinheit; übertragen auch eine einwirkende Belastung.",
      modern: "birim yüzeye etki eden kuvvet; baskı",
    },
    reason: "Druck ist nicht einfach eine Kraft, sondern die Kraft pro Fläche.",
  },
  {
    word: "direnç",
    previous: "239:9ab56be",
    changes: {
      modern:
        "bir etkiye karşı koyma gücü; elektrik akımını zor geçirme özelliği",
    },
    reason:
      "Mukavemet ist eine schwierigere ältere Entsprechung statt einer verständlichen Erklärung.",
  },
  {
    word: "sürtünme",
    previous: "227:858df617",
    changes: {
      explanation:
        "Der Widerstand zwischen sich berührenden, gegeneinander bewegten Flächen; übertragen auch ein zwischenmenschlicher Konflikt.",
      modern:
        "temas eden yüzeylerin harekete karşı oluşturduğu direnç; anlaşmazlık",
    },
    reason:
      "Temasla direnç ist unnatürlich und der übertragene Konfliktsinn ist ebenfalls gebräuchlich.",
  },
  {
    word: "ivme",
    previous: "239:8753305",
    changes: {
      explanation:
        "Die Änderung der Geschwindigkeit pro Zeiteinheit, einschließlich einer Änderung ihrer Richtung.",
      modern: "hızın birim zamandaki değişimi",
    },
    reason:
      "Beschleunigung ist die Geschwindigkeitsänderung pro Zeit, nicht eine beliebige Änderung.",
  },
  {
    word: "kütle",
    previous: "223:acb35e0f",
    changes: {
      explanation:
        "Eine physikalische Größe, die die Trägheit eines Körpers und seine gravitative Wirkung beschreibt.",
    },
    reason:
      "Die Erklärung beschreibt bisher das quantitative Bestimmen statt der physikalischen Größe.",
  },
  {
    word: "çekimser",
    previous: "266:ab194493",
    changes: {
      explanation:
        "Sich weder klar für noch gegen etwas aussprechen; bei Abstimmungen eine Stimmenthaltung erklären.",
      modern:
        "bir konuda taraf belirtmeyen; oylamada ne kabul ne ret oyu veren",
    },
    reason:
      "Sich der Stimme zu enthalten ist nicht mit der Nichtteilnahme an einer Abstimmung gleichzusetzen.",
  },
  {
    word: "çekimserlik",
    previous: "242:e13b03d1",
    changes: {
      modern: "oylamaya katılıp kabul veya ret belirtmeme",
    },
    reason:
      "Oy kullanmama kann bloßes Fernbleiben bedeuten; Stimmenthaltung ist eine ausdrückliche dritte Haltung.",
  },
  {
    word: "sayısal",
    previous: "219:45654ef1",
    changes: {
      modern: "sayılarla ilgili; dijital",
    },
    reason: "Dijital deckt die allgemeine Zahlenbedeutung nicht ab.",
  },
  {
    word: "lengüistik",
    previous: "219:5723de6a",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Seltene historische, fachsprachliche oder akademische Bezeichnung; gemäß der Lernrubrik klarer in C1 als im allgemeinen B2-Wortschatz.",
  },
  {
    word: "transkripsiyon",
    previous: "252:8f6553da",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Seltene historische, fachsprachliche oder akademische Bezeichnung; gemäß der Lernrubrik klarer in C1 als im allgemeinen B2-Wortschatz.",
  },
  {
    word: "alfabe",
    previous: "213:16ae3291",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "harf",
    previous: "221:98529650",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "ağız",
    previous: "266:ce7d5e42",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "sıfat",
    previous: "239:7a1b261b",
    changes: {
      meaning: "Adjektiv / Eigenschaft / Funktion",
      explanation:
        "In der Grammatik ein Wort zur näheren Bestimmung eines Nomens; sonst eine Eigenschaft oder die Rolle, in der jemand handelt.",
      modern: "adı niteleyen sözcük; bir kişinin niteliği veya görevi",
    },
    reason:
      "In Wendungen wie sıfatıyla bezeichnet das Wort auch die Rolle oder Funktion einer Person.",
  },
  {
    word: "isim",
    previous: "257:59afc105",
    changes: {
      modern: "ad; dil bilgisinde varlıkları ve kavramları karşılayan sözcük",
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die türkische Umschreibung erklärt bisher nur Namen, nicht die ebenfalls angegebene grammatische Wortart. Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "eylemci",
    previous: "239:ec2012e0",
    changes: {
      modern: "bir amaç için toplumsal eylemlere katılan kişi",
    },
    reason:
      "Etkinlikte bulunan bezeichnet jeden Veranstaltungsteilnehmer und trifft Aktivist nicht genau.",
  },
  {
    word: "zorlayıcı",
    previous: "244:ba149eff",
    changes: {
      modern: "bir şeye zorlayan; güçlük çıkaran veya çok çaba gerektiren",
    },
    reason:
      "Güçle yönelten ist unnatürlich und erklärt die ebenfalls genannte anstrengende Wirkung nicht.",
  },
  {
    word: "özgüllük",
    previous: "240:6eb49529",
    changes: {
      explanation:
        "Die Eigenschaft, nur für einen bestimmten Bereich, Gegenstand oder Vorgang kennzeichnend zu sein.",
      modern: "bir özelliğin yalnızca belli bir şeye ait olması",
    },
    reason:
      "Belirli olana özgülük ist zirkulär und die deutsche Erklärung beschreibt Zuordnen statt einer Eigenschaft.",
  },
  {
    word: "eklektik",
    previous: "239:c6bc53d8",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Seltene historische, fachsprachliche oder akademische Bezeichnung; gemäß der Lernrubrik klarer in C1 als im allgemeinen B2-Wortschatz.",
  },
  {
    word: "çağcıl",
    previous: "217:f19db434",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Seltene historische, fachsprachliche oder akademische Bezeichnung; gemäß der Lernrubrik klarer in C1 als im allgemeinen B2-Wortschatz.",
  },
  {
    word: "başat",
    previous: "233:be57f171",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Seltene historische, fachsprachliche oder akademische Bezeichnung; gemäß der Lernrubrik klarer in C1 als im allgemeinen B2-Wortschatz.",
  },
  {
    word: "örneklem",
    previous: "250:9c51b051",
    changes: {
      explanation:
        "Eine begrenzte Auswahl von Personen, Gegenständen oder Messwerten, anhand derer eine größere Gesamtheit untersucht wird.",
      modern: "bir bütünü incelemek için seçilen sınırlı sayıdaki öğe",
    },
    reason:
      "Araştırma grubu kann fälschlich auf eine Menschengruppe beschränken; Stichproben können auch Dinge oder Messwerte umfassen.",
  },
  {
    word: "rastgele",
    previous: "240:1f78c7",
    changes: {
      meaning: "zufällig / wahllos",
      explanation:
        "Ohne gezielte Auswahl oder Planung; in Untersuchungen auch nach einem Zufallsverfahren ausgewählt.",
      modern: "belirli bir seçim yapmadan; şansa bağlı olarak",
    },
    reason:
      "Das Wort bedeutet im Alltag auch wahllos, nicht nur nach einer festgelegten Zufallsregel ausgewählt.",
  },
  {
    word: "benzetme",
    previous: "256:e770c68b",
    changes: {
      modern: "benzer yönlerden yararlanarak anlatma",
    },
    reason:
      "Teşbih ist eine schwierigere ältere Fachentsprechung statt einer einfachen Umschreibung.",
  },
  {
    word: "ayrıntılı",
    previous: "233:b45a06ff",
    changes: {
      modern: "birçok küçük bilgiyi ve özelliği içeren",
    },
    reason:
      "Tafsilatlı ist eine schwierigere ältere Entsprechung statt einer leicht verständlichen Erklärung.",
  },
  {
    word: "özlü",
    previous: "214:cc1ed9c7",
    changes: {
      modern: "az sözle çok anlam anlatan",
    },
    reason:
      "Veciz ist eine schwierigere formelle Entsprechung statt einer einfachen Beschreibung.",
  },
  {
    word: "betimleme",
    previous: "233:5548800e",
    changes: {
      modern: "bir şeyin özelliklerini sözle veya yazıyla anlatma",
    },
    reason:
      "Tasvir ist eine formellere Entsprechung statt einer verständlichen Umschreibung.",
  },
  {
    word: "objektif",
    previous: "255:9878aaf9",
    changes: {
      meaning: "objektiv / Kameraobjektiv",
      explanation:
        "Sachlich und von persönlichen Vorlieben unabhängig; als Substantiv auch die Linseneinheit einer Kamera.",
      modern:
        "kişisel yargıdan bağımsız; kameranın görüntü oluşturan mercek düzeneği",
    },
    reason: "Die häufige substantivische Bedeutung Kameraobjektiv fehlt.",
  },
  {
    word: "organik",
    previous: "267:70ea695b",
    changes: {
      explanation:
        "Die belebte Natur oder die organische Chemie betreffend; bei Lebensmitteln nach Regeln ökologischer Landwirtschaft erzeugt.",
      modern:
        "canlılarla ilgili; gıdada ekolojik tarım kurallarına göre üretilen",
    },
    reason:
      "Ohne bestimmte Zusätze erzeugt ist als Erklärung für Biolebensmittel vage und irreführend.",
  },
  {
    word: "doğal",
    previous: "212:427d7a61",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "laboratuvar",
    previous: "234:d556493a",
    changes: {
      modern: "deney ve incelemeler için donatılmış yer",
    },
    reason:
      "Deneylik ist als Umschreibung weniger gebräuchlich als das zu erklärende Wort.",
  },
  {
    word: "arşiv",
    previous: "214:d992a2a0",
    changes: {
      modern: "belgelerin düzenli biçimde saklandığı yer veya koleksiyon",
    },
    reason:
      "Belgelik ist eine seltenere Entsprechung statt einer einfachen Umschreibung.",
  },
  {
    word: "akreditasyon",
    previous: "257:935ff03a",
    changes: {
      explanation:
        "Die offizielle Anerkennung fachlicher Eignung; auch die Zulassung etwa von Journalisten zu einer Veranstaltung.",
      modern:
        "yetkinliğin resmen onaylanması; belirli bir etkinliğe katılma yetkisi verilmesi",
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Neben Qualitätsanerkennung bezeichnet das Wort auch die offizielle Zulassung etwa von Journalisten. Seltene historische, fachsprachliche oder akademische Bezeichnung; gemäß der Lernrubrik klarer in C1 als im allgemeinen B2-Wortschatz.",
  },
  {
    word: "büro",
    previous: "224:a2325a3f",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "ajanda",
    previous: "234:d03bc00d",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufiges Grundwort für Alltag, Reisen, Unterricht oder Arbeitsleben; für die niedrigste angebotene Stufe B1 geeigneter als B2.",
  },
  {
    word: "panel",
    previous: "237:da803d97",
    changes: {
      meaning: "Tafel / Bedienfeld / Podiumsdiskussion",
      explanation:
        "Eine Tafel oder Fläche, etwa ein Bedienfeld; außerdem eine Diskussion mehrerer Fachleute vor Publikum.",
      modern:
        "levha veya kontrol yüzeyi; uzmanların topluluk önündeki tartışması",
    },
    reason:
      "Neben der Podiumsdiskussion bezeichnet das Wort auch technische Tafeln oder Bedienflächen.",
  },
  {
    word: "tutanak",
    previous: "225:3b08a507",
    changes: {
      modern: "bir olayın veya toplantının resmî yazılı kaydı",
    },
    reason:
      "Zabıt ist eine ältere formelle Entsprechung statt einer einfachen Erklärung.",
  },
  {
    word: "bilanço",
    previous: "234:ea5db769",
    changes: {
      modern: "varlıkları, borçları ve öz kaynakları gösteren mali tablo",
    },
    reason:
      "Eine Bilanz enthält nicht nur Vermögen und Schulden, sondern auch das Eigenkapital.",
  },
  {
    word: "mizan",
    previous: "256:a14bc097",
    changes: {
      explanation:
        "Eine Gegenüberstellung von Kontensummen; auch eine Waage, besonders im religiösen Bild für das Abwägen guter und schlechter Taten.",
      modern:
        "hesapların karşılaştırıldığı çizelge; tartı; dinî anlatımda amellerin tartıldığı terazi",
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die türkische Erklärung nennt nur einen Prüfungsvorgang; die Waage und ihre religiöse Bedeutung sind für Buchsätze relevant. Seltene historische, fachsprachliche oder akademische Bezeichnung; gemäß der Lernrubrik klarer in C1 als im allgemeinen B2-Wortschatz.",
  },
  {
    word: "fatura",
    previous: "236:ecfe87db",
    changes: {
      modern: "satılan mal veya hizmetin türünü ve bedelini gösteren belge",
    },
    reason:
      "Eine Rechnung weist einen geforderten Betrag aus, nicht eine bereits erfolgte Zahlung.",
  },
  {
    word: "senet",
    previous: "236:40b3a9a",
    changes: {
      explanation:
        "Schriftstück, das einen Anspruch, eine Schuld oder eine rechtliche Verpflichtung belegt.",
      modern: "borcu veya hakkı gösteren belge",
    },
    reason: "Die Erklärung beschrieb eine Handlung statt des Belegs.",
  },
  {
    word: "tahvil",
    previous: "242:944f7eb8",
    changes: {
      explanation:
        "Finanziell eine handelbare Schuldverschreibung; in gehobenen Verbindungen wie tahvil etmek auch das Umwandeln in eine andere Form.",
      meaning: "Anleihe / Umwandlung",
      modern: "borçlanma senedi; bir şeyi başka bir duruma veya biçime çevirme",
    },
    reason:
      "Eine Anleihe ist ein Wertpapier, nicht dessen Ausgabe. Neben der Finanzbedeutung ist die ältere Bedeutung der Umwandlung für Buchtexte wichtig.",
  },
  {
    word: "hisse",
    previous: "230:48c4c98f",
    changes: {
      explanation:
        "Teil eines Ganzen oder eines Vermögens; im Wirtschaftsleben auch ein Anteil an einem Unternehmen.",
    },
    reason: "Ein Anteil ist nicht die Handlung des Besitzens.",
  },
  {
    word: "bono",
    previous: "258:839e55a",
    changes: {
      meaning: "Schuldschein / Solawechsel",
      explanation:
        "Schriftliches Zahlungsversprechen, einen bestimmten Geldbetrag zu einem festgelegten Termin zu zahlen.",
    },
    reason:
      "Bono bezeichnet einen Schuldschein/Solawechsel, nicht beliebig eine kurzlaufende Anleihe.",
  },
  {
    word: "temettü",
    previous: "231:5a606efe",
    changes: {
      meaning: "Dividende / Gewinnanteil",
      explanation:
        "Anteil am Gewinn eines Unternehmens, der an seine Anteilseigner ausgeschüttet wird.",
    },
    reason:
      "Der Begriff bezeichnet den ausgeschütteten Gewinnanteil, nicht die Handlung des Auszahlens.",
  },
  {
    word: "şehzade",
    previous: "223:6f4b424e",
    changes: {
      meaning: "Prinz / Sultanssohn",
    },
    reason:
      "Prinzensohn bezeichnet den Sohn eines Prinzen; şehzade ist selbst der Prinz bzw. männliche Herrschernachkomme.",
  },
  {
    word: "teftiş",
    previous: "226:ba7f6601",
    changes: {
      meaning: "Inspektion / förmliche Kontrolle",
    },
    reason:
      "Amtsprüfung kann im Deutschen eine Prüfung für ein Amt bedeuten; gemeint ist eine Inspektion von Einrichtungen oder Tätigkeiten.",
  },
  {
    word: "muhasebe",
    previous: "225:76379c34",
    changes: {
      difficulty: 2,
      modern: "gelir, gider ve diğer mali işlemleri kaydetme ve denetleme",
      note: "Gebräuchlicher Ausdruck für Buchhaltung und Rechnungswesen; übertragen auch für das innere Abwägen des eigenen Handelns.",
    },
    reason:
      "Allgemeiner Berufs- und Wirtschaftswortschatz statt ausschließlich gehobenes C1; hesap işleri ist zu unbestimmt.",
  },
  {
    word: "şeyhülislam",
    previous: "254:8bb2c60a",
    changes: {
      explanation:
        "Der oberste religiös-rechtliche Amtsträger im Osmanischen Reich.",
      modern: "Osmanlı Devleti’nde dinî ve hukuki konularda en yüksek yetkili",
    },
    reason:
      "Dinî hukuk başı ist keine natürliche türkische Erklärung, und ein höchster ist im Deutschen unglücklich.",
  },
  {
    word: "mürit",
    previous: "233:559dbbba",
    changes: {
      meaning: "spiritueller Schüler / Anhänger",
      explanation:
        "Anhänger eines spirituellen Lehrers, besonders auf einem Weg der islamischen Mystik.",
      modern: "bir tasavvuf yolunda şeyhe bağlı öğrenci",
    },
    reason:
      "Geistlicher Schüler kann eine Geistlichenlaufbahn nahelegen; der Ausdruck bezeichnet einen Anhänger oder spirituellen Schüler.",
  },
  {
    word: "çile",
    previous: "250:4841fbbc",
    changes: {
      modern: "uzun süren sıkıntı; tasavvufta inzivaya çekilerek nefsi eğitme",
    },
    reason:
      "Die ausdrücklich enthaltene asketische Bedeutung fehlt in der türkischen Umschreibung.",
  },
  {
    word: "devşirme",
    previous: "270:f3676d9c",
    changes: {
      explanation:
        "Historisches osmanisches System, bei dem vor allem Jungen aus christlichen Familien für Militär und Staatsdienst eingezogen und ausgebildet wurden.",
      modern:
        "Osmanlı’da özellikle Hristiyan ailelerin erkek çocuklarını alıp askerî veya idari hizmet için yetiştirme",
    },
    reason:
      "Die zentrale historische Spezifik wird durch allgemeines Kinder sammeln bzw. Zwangsrekrutierung nicht verständlich.",
  },
  {
    word: "abartı",
    previous: "226:cc6cab45",
    changes: {
      meaning: "Übertreibung",
      modern: "bir şeyi olduğundan büyük, önemli veya güçlü gösterme",
      difficulty: 2,
      note: "Häufiges Wort für Übertreibungen in Gesprächen, Bewertungen und Darstellungen.",
    },
    reason:
      "Gewöhnliche heutige Bedeutung Übertreibung; das seltenere mübalağa ist keine lernfreundliche moderne Umschreibung.",
  },
  {
    word: "abartılı",
    previous: "221:e7600d1c",
    changes: {
      meaning: "übertrieben / überzogen",
      modern: "olduğundan büyük veya aşırı gösterilmiş",
      difficulty: 2,
      note: "Gebräuchliche Bewertung für eine übertriebene Darstellung, Reaktion oder Behauptung.",
    },
    reason:
      "Häufiges Alltagsadjektiv statt seltenes C1-Wort; die Umschreibung sollte nicht ausschließlich mübalağalı lauten.",
  },
  {
    word: "ağıt",
    previous: "216:ce155bb8",
    changes: {
      modern: "ölen biri veya yaşanan acı için söylenen yaslı şiir veya türkü",
    },
    reason:
      "Mersiye ist als einzige türkische Umschreibung seltener und nicht so verständlich wie eine sachliche Beschreibung.",
  },
  {
    word: "vezin",
    previous: "229:1bd25a28",
    changes: {
      modern: "şiir ölçüsü; tartma veya ağırlık",
    },
    reason:
      "Die bereits genannte zweite Bedeutung Gewicht/Wiegen fehlt in der türkischen Umschreibung.",
  },
  {
    word: "redif",
    previous: "259:4a39c072",
    changes: {
      meaning: "wiederholter Versschluss / osmanische Reservetruppe",
      explanation:
        "Gleichlautende Wörter oder Endungen nach dem Reim; historisch auch ein Angehöriger der osmanischen Reserve oder eine solche Einheit.",
      modern:
        "uyaktan sonra aynen yinelenen ek veya söz; Osmanlı’da yedek asker veya birlik",
    },
    reason:
      "Die für historische Texte wichtige zweite Bedeutung Reservist/Reserveeinheit fehlt; die Lyrikdefinition allein kann irreführen.",
  },
  {
    word: "müsteşar",
    previous: "241:392875cd",
    changes: {
      meaning: "Staatssekretär / hoher Ministerialbeamter",
      explanation:
        "Ein hoher Ministerialbeamter, der einen Minister berät und Leitungsaufgaben wahrnimmt.",
      modern:
        "bakana danışmanlık ve yönetim desteği veren üst düzey devlet görevlisi",
    },
    reason:
      "Bloßer Amtsberater unterschlägt die hohe institutionelle Leitungsstellung.",
  },
  {
    word: "istihbarat",
    previous: "263:a0b6bc1",
    changes: {
      meaning: "nachrichtendienstliche Informationen / Aufklärung",
      explanation:
        "Politisch oder militärisch wichtige Informationen sowie deren systematische, oft geheime Beschaffung.",
      modern:
        "gizli veya stratejik bilgi toplama; bu yolla elde edilen bilgiler",
    },
    reason:
      "Der Ausdruck bezeichnet auch die gewonnenen Informationen und nicht ausschließlich deren Beschaffung.",
  },
  {
    word: "istiskal",
    previous: "246:f29a9ea",
    changes: {
      modern: "birini yük gibi görüp ona soğuk davranma",
    },
    reason:
      "Ağır bulup dışlama ist eine zu wörtliche und unnatürliche Umschreibung.",
  },
  {
    word: "imdat",
    previous: "230:287e5454",
    changes: {
      difficulty: 1,
      note: "Gebräuchlicher Notruf: Hilfe! Auch als Substantiv für dringende Hilfe verwendet.",
    },
    reason:
      "Ein grundlegender Hilferuf ist kein seltenes oder fachsprachliches C1-Wort.",
  },
  {
    word: "iltifat",
    previous: "265:1b5310b8",
    changes: {
      difficulty: 2,
      note: "Allgemeiner Wortschatz für anerkennende Worte, Komplimente oder freundliche Aufmerksamkeit.",
    },
    reason:
      "Komplimente und Zuwendung gehören zum allgemeinen sozialen Wortschatz, nicht ausschließlich zum C1-Register.",
  },
  {
    word: "iltica",
    previous: "232:14d6653d",
    changes: {
      meaning: "Asylsuche / Zufluchtnahme",
    },
    reason:
      "Die heute häufige Verwendung für das Suchen von Asyl soll in der deutschen Kurzglosse erkennbar sein.",
  },
  {
    word: "mültefit",
    previous: "231:c69e0039",
    changes: {
      modern: "karşısındakine yakınlık ve nazik ilgi gösteren",
    },
    reason:
      "İltifat eden erklärt die Eigenschaften nur durch ein eng verwandtes Fremdwort statt in zugänglichem Türkisch.",
  },
  {
    word: "tevdiat",
    previous: "249:bd823e85",
    changes: {
      meaning: "Einlagen / hinterlegte Werte",
      explanation:
        "Zur Verwahrung übergebene Werte, besonders Geld, Wertgegenstände oder Schriftstücke.",
      modern: "saklanmak üzere teslim edilen para, değer veya belgeler",
    },
    reason:
      "Das Pluralwort bezeichnet die hinterlegten Dinge, nicht primär den Vorgang der Hinterlegung.",
  },
  {
    word: "tevafuk",
    previous: "252:d80b745a",
    changes: {
      meaning: "Zusammentreffen / Übereinstimmung",
      explanation:
        "Ein Zusammentreffen oder eine Übereinstimmung; in religiöser Deutung oft als sinnvolle Fügung verstanden.",
      modern: "rastlaşma veya birbirine uygun düşme",
    },
    reason:
      "Die allgemeine Bedeutung ist nicht auf ein objektiv bedeutsames oder religiös gedeutetes Ereignis beschränkt.",
  },
  {
    word: "teşne",
    previous: "207:329a00ae",
    changes: {
      modern: "susamış; bir şeye çok istekli",
    },
    reason:
      "Die wörtliche Bedeutung durstig fehlt in der türkischen Umschreibung.",
  },
  {
    word: "tereddütlü",
    previous: "235:c0e84f84",
    changes: {
      difficulty: 2,
      note: "Gängige Beschreibung für Unsicherheit oder Zögern bei einer Entscheidung.",
    },
    reason:
      "Gewöhnlicher abstrakter Gegenwartswortschatz statt seltener C1-Ausdruck.",
  },
  {
    word: "tertipli",
    previous: "233:83f4351c",
    changes: {
      difficulty: 1,
      note: "Alltägliche Beschreibung für eine ordentliche Person oder einen aufgeräumten, gut geordneten Bereich.",
    },
    reason:
      "Das grundlegende Alltagsadjektiv ordentlich ist in C1 deutlich zu hoch eingestuft.",
  },
  {
    word: "rütbe",
    previous: "226:1b30671d",
    changes: {
      modern: "askerî veya resmî hiyerarşideki derece",
    },
    reason:
      "Aşama derecesi ist redundant und verschweigt den Dienstgradcharakter.",
  },
  {
    word: "makam",
    previous: "255:bb8f1f0c",
    changes: {
      modern: "yüksek görev veya görev yeri; müzikte ezgi düzeni",
    },
    reason: "Görev yeri allein erfasst nur den Ort, nicht die Amtsstellung.",
  },
  {
    word: "ortopedi",
    previous: "224:fed93544",
    changes: {
      modern: "kemik, eklem, kas ve tendon hastalıklarıyla ilgilenen tıp dalı",
    },
    reason:
      "Orthopädie umfasst den Bewegungsapparat und nicht nur Knochen und Gelenke.",
  },
  {
    word: "anestezi",
    previous: "232:42fc6763",
    changes: {
      explanation:
        "Medizinisch herbeigeführte Empfindungslosigkeit, örtlich begrenzt oder als Allgemeinanästhesie mit Bewusstlosigkeit.",
      modern:
        "tıbbi yöntemlerle duyuların bölgesel ya da genel olarak geçici biçimde ortadan kaldırılması",
    },
    reason:
      "Nur Schmerzempfindung auszuschalten beschreibt eher Analgesie und erklärt Anästhesie unvollständig.",
  },
  {
    word: "antibiyotik",
    previous: "254:41cdf85d",
    changes: {
      difficulty: 1,
      note: "Häufiger Wortschatz für Arztbesuche und Medikamente. Antibiotika richten sich gegen Bakterien, nicht gegen Viren.",
    },
    reason:
      "Ein allgemein gebräuchlicher Medikamentenbegriff gehört nicht erst in die seltene C1-Fachwortgruppe.",
  },
  {
    word: "bakteri",
    previous: "252:b79ad589",
    changes: {
      difficulty: 2,
      note: "Allgemeiner Gesundheits- und Schulwortschatz; Bakterien sind einzellige Lebewesen.",
    },
    reason:
      "Der alltägliche Gesundheitsbegriff ist nicht erst ein seltener C1-Spezialausdruck.",
  },
  {
    word: "virüs",
    previous: "230:85924499",
    changes: {
      difficulty: 2,
      note: "Häufiger Begriff in Gesundheit, Nachrichten und Schule; auch für schädliche Computerprogramme verwendet.",
    },
    reason:
      "Sehr gebräuchlicher Nachrichten- und Gesundheitswortschatz statt ausschließlich C1-Fachsprache.",
  },
  {
    word: "protein",
    previous: "231:b4ec8f2",
    changes: {
      modern:
        "amino asitlerden oluşan, vücutta yapı ve işlev görevleri üstlenen molekül",
      difficulty: 2,
      note: "Allgemeiner Wortschatz zu Ernährung und Biologie; fachlich ein aus Aminosäuren aufgebautes Molekül.",
    },
    reason:
      "Yapı ve işlev maddesi ist zu vage; der Ausdruck ist auch allgemeiner Ernährungswortschatz.",
  },
  {
    word: "hormon",
    previous: "236:dea36767",
    changes: {
      modern: "vücutta organların çalışmasını düzenleyen kimyasal haberci",
      difficulty: 2,
      note: "Gebräuchlich in allgemeinen Gesundheits- und Biologietexten; kein ausschließlich seltener Spezialausdruck.",
    },
    reason:
      "Häufiges Gesundheitswort; düzenleyici salgı bezeichnet eine Absonderung statt den chemischen Botenstoff.",
  },
  {
    word: "solunum",
    previous: "240:6cbd55ea",
    changes: {
      modern: "nefes alıp verme; hücrelerin besinlerden enerji elde etmesi",
    },
    reason:
      "Die türkische Erklärung erfasst im Gegensatz zur deutschen Definition keine Zellatmung.",
  },
  {
    word: "oksijen",
    previous: "248:f8d52012",
    changes: {
      modern:
        "yanmayı destekleyen ve birçok canlının solunumda kullandığı gaz hâlindeki element",
      difficulty: 2,
      note: "Allgemeiner Gesundheits- und Schulwortschatz für Sauerstoff.",
    },
    reason:
      "Yakıcı gaz elementi ist sperrig; der häufige Grundbegriff Sauerstoff liegt unter spezialisierter C1-Terminologie.",
  },
  {
    word: "karbondioksit",
    previous: "239:1dec0187",
    changes: {
      modern: "bir karbon ve iki oksijen atomundan oluşan gaz",
    },
    reason:
      "Karbon oksijen bileşiği unterscheidet Kohlendioxid nicht von anderen Kohlenstoffoxiden.",
  },
  {
    word: "azot",
    previous: "231:2f3024",
    changes: {
      modern: "havada en çok bulunan renksiz, kokusuz gaz element",
    },
    reason:
      "Hava gazı elementi ist keine natürliche oder unterscheidende türkische Erklärung.",
  },
  {
    word: "bileşik",
    previous: "254:53041605",
    changes: {
      modern: "farklı elementlerin kimyasal bağlarla oluşturduğu saf madde",
    },
    reason:
      "Birleşmiş madde erklärt den Unterschied zwischen chemischer Verbindung und bloßem Gemisch nicht.",
  },
  {
    word: "atom",
    previous: "230:875648f8",
    changes: {
      difficulty: 2,
      note: "Allgemeiner Grundbegriff aus Schule, Naturwissenschaft und öffentlichen Sachtexten.",
    },
    reason:
      "Der grundlegende, sehr verbreitete Naturwissenschaftsbegriff gehört nicht ausschließlich zum C1-Spezialwortschatz.",
  },
  {
    word: "molekül",
    previous: "222:e0f930e",
    changes: {
      modern: "kimyasal bağlarla birbirine bağlı atomlardan oluşan birim",
    },
    reason:
      "Eine beliebige Ansammlung von Atomen ist noch kein Molekül; die Bindung ist wesentlich.",
  },
  {
    word: "ışınım",
    previous: "225:b6c41287",
    changes: {
      meaning: "Strahlung / Abstrahlung",
      explanation:
        "Ausbreitung oder Abgabe von Energie durch elektromagnetische Wellen oder Teilchen.",
      modern: "enerjinin dalgalar veya parçacıklar biçiminde yayılması",
    },
    reason:
      "Ohne stofflichen Träger schließt Teilchenstrahlung unzutreffend aus.",
  },
  {
    word: "asit",
    previous: "225:e420dfb6",
    changes: {
      modern: "uygun kimyasal tepkimelerde proton verebilen madde",
    },
    reason:
      "Säuren durch einen sauren Geschmack zu definieren ist fachlich unzureichend; die deutsche Protonendonator-Definition ist präziser.",
  },
  {
    word: "alkali",
    previous: "226:62db54ac",
    changes: {
      modern: "suda çözünen baz; bazik nitelikte olan",
    },
    reason:
      "Das einzelne Fremdwort bazik erklärt die sachliche Bedeutung nur unvollständig.",
  },
  {
    word: "nötr",
    previous: "228:1c0fdfcb",
    changes: {
      modern: "tarafsız; asit veya baz özelliği göstermeyen",
    },
    reason:
      "Yansız deckt nur die übertragene Haltung, nicht die im Eintrag enthaltene chemische Bedeutung ab.",
  },
  {
    word: "nötralizasyon",
    previous: "242:175b9cb0",
    changes: {
      explanation:
        "Chemische Reaktion zwischen einer Säure und einer Base; allgemein das Aufheben einer Wirkung.",
      modern: "asit ile bazın tepkimesi; bir etkiyi ortadan kaldırma",
    },
    reason:
      "Eine ausgeglichene Reaktion ist keine präzise chemische Definition; beide verwendeten Bedeutungsbereiche sollen sichtbar sein.",
  },
  {
    word: "antiviral",
    previous: "211:e6e9e89d",
    changes: {
      modern: "virüslerin çoğalmasını engelleyen",
    },
    reason: "Virüse karşı ist zu unbestimmt und benennt die Wirkung nicht.",
  },
  {
    word: "akut",
    previous: "226:18a33a39",
    changes: {
      explanation:
        "Plötzlich oder rasch beginnend und meist von kurzer Dauer; bei Krankheiten oft unmittelbar behandlungsbedürftig.",
      modern: "ani başlayan veya kısa sürede gelişen, genellikle kısa süreli",
    },
    reason: "Die zeitliche Abgrenzung zu chronisch fehlt bisher.",
  },
  {
    word: "epidemiyoloji",
    previous: "257:5be3d2ad",
    changes: {
      modern:
        "hastalıkların toplumlarda dağılımını ve nedenlerini inceleyen bilim",
    },
    reason:
      "Epidemiologie untersucht nicht nur Ausbrüche oder Epidemien, sondern Krankheiten und Gesundheitsereignisse in Bevölkerungen.",
  },
  {
    word: "pandemi",
    previous: "231:2b57166c",
    changes: {
      difficulty: 2,
      note: "Häufiger allgemeiner Nachrichten- und Gesundheitsbegriff für eine länderübergreifende Epidemie.",
    },
    reason:
      "Der allgemein bekannte Nachrichtenbegriff ist nicht ausschließlich spezialisiertes C1-Vokabular.",
  },
  {
    word: "protez",
    previous: "223:4231256b",
    changes: {
      modern: "eksik bir vücut bölümünün yerini alan yapay parça",
    },
    reason:
      "Yapay organ parçası ist ungenau, weil auch Gliedmaßen oder andere Körperteile ersetzt werden.",
  },
  {
    word: "röntgen",
    previous: "244:e4d02908",
    changes: {
      difficulty: 1,
      note: "Allgemeiner Wortschatz für Arztbesuche und Untersuchungen: Röntgen oder Röntgenaufnahme.",
    },
    reason:
      "Sehr gebräuchlicher Begriff bei Arztbesuchen, nicht erst C1-Fachsprache.",
  },
  {
    word: "ilahiyat",
    previous: "264:a686b56",
    changes: {
      meaning: "Theologie / theologische Wissenschaften",
      explanation:
        "Wissenschaftliche Beschäftigung mit Gott, Glaubenslehren und religiösen Überlieferungen.",
    },
    reason:
      "Religionswissenschaftliche Theologie vermischt zwei nicht deckungsgleiche Fachbezeichnungen.",
  },
  {
    word: "deizm",
    previous: "231:b102fc74",
    changes: {
      explanation:
        "Glaube an einen Schöpfer, der die Welt nicht durch fortgesetzte Offenbarung oder Eingriffe lenkt.",
      modern:
        "evreni yaratan bir Tanrı’yı kabul edip vahye dayalı din anlayışını reddetme",
    },
    reason:
      "Der wesentliche Abstand zu Offenbarungsreligion und fortgesetztem göttlichen Eingreifen soll erkennbar sein.",
  },
  {
    word: "mitoloji",
    previous: "239:ebd341b9",
    changes: {
      meaning: "Mythologie / Mythenbestand",
      explanation:
        "Die überlieferten Mythen einer Kultur sowie ihre wissenschaftliche Untersuchung.",
      modern:
        "bir kültürün tanrı ve köken anlatıları; bu anlatıları inceleyen alan",
    },
    reason:
      "Mythologie bezeichnet auch die Mythen selbst und nicht nur die Wissenschaft von ihnen.",
  },
  {
    word: "ritüel",
    previous: "221:8f00d9bb",
    changes: {
      modern: "belirli kurallarla tekrarlanan, simgesel anlam taşıyan davranış",
    },
    reason: "Ayin düzeni verengt Rituale auf religiöse Zeremonien.",
  },
  {
    word: "skolastik",
    previous: "250:e8339c74",
    changes: {
      explanation:
        "Die mittelalterliche theologisch-philosophische Lehrtradition betreffend; übertragen starr an überlieferten Lehrsätzen festhaltend.",
      modern:
        "Orta Çağ’daki din temelli felsefi öğretimle ilgili; aktarmalı olarak kalıplaşmış düşünceye bağlı",
    },
    reason:
      "Die historische philosophisch-theologische Lehrtradition fehlt; bloße Traditionsgebundenheit ist zu allgemein.",
  },
  {
    word: "mistik",
    previous: "219:b2093c71",
    changes: {
      explanation:
        "Eine unmittelbare innere Erfahrung des Göttlichen oder einer verborgenen Wirklichkeit betreffend; auch geheimnisvoll.",
      modern: "içsel ve sezgisel dinî deneyimle ilgili; gizemli",
    },
    reason: "Mystik ist nicht auf den islamischen Tasavvuf beschränkt.",
  },
  {
    word: "laiklik",
    previous: "238:6dddc641",
    changes: {
      modern: "devlet yönetimi ile dinî otoritenin birbirinden ayrılması",
    },
    reason:
      "Laik düzen ist eine zirkuläre Erklärung aus derselben Wortfamilie.",
  },
  {
    word: "pragmatik",
    previous: "232:f209f6c9",
    changes: {
      meaning: "Pragmatik / pragmatisch",
      explanation:
        "Als Adjektiv am praktischen Nutzen orientiert; in der Sprachwissenschaft die Untersuchung von Sprache in konkreten Gebrauchssituationen.",
      modern:
        "pratik yararı gözeten; dilin bağlama göre kullanımını inceleyen alan",
    },
    reason:
      "Die verbreitete adjektivische Bedeutung pragmatisch fehlt vollständig.",
  },
  {
    word: "morfoloji",
    previous: "235:5f5a01a9",
    changes: {
      meaning: "Morphologie / Formenlehre",
      explanation:
        "Untersuchung von Formen und Strukturen; sprachwissenschaftlich des Wortaufbaus, biologisch des Körper- und Organbaus.",
      modern:
        "biçim ve yapıları inceleyen alan; dilde sözcük yapısı, biyolojide canlıların yapısı",
    },
    reason:
      "Morphologie ist nicht ausschließlich die sprachwissenschaftliche Wortformenlehre.",
  },
  {
    word: "fonetik",
    previous: "221:15a12dd1",
    changes: {
      modern:
        "konuşma seslerinin oluşumunu ve fiziksel özelliklerini inceleyen alan",
    },
    reason:
      "Eine sachliche Umschreibung ist verständlicher und grenzt den Begriff von Phonologie ab.",
  },
  {
    word: "fonoloji",
    previous: "231:b72b6c5a",
    changes: {
      modern: "dildeki seslerin anlam ayırt edici işlevlerini inceleyen alan",
    },
    reason:
      "Ses bilimi ist zu allgemein und unterscheidet Phonologie nicht klar von Phonetik.",
  },
  {
    word: "lügat",
    previous: "230:1e06fb99",
    changes: {
      meaning: "Wörterbuch / Wortschatz",
    },
    reason:
      "Lexikon kann im Deutschen eine Enzyklopädie meinen; hier ist Wörterbuch die präzise Entsprechung.",
  },
  {
    word: "terminoloji",
    previous: "241:be3b1d31",
    changes: {
      meaning: "Terminologie / Fachwortschatz",
      explanation:
        "Die Gesamtheit der Fachausdrücke eines Bereichs; auch die Lehre von ihrer Bildung und Verwendung.",
      modern: "bir alanın özel terimleri; terimleri inceleyen alan",
    },
    reason:
      "Die deutsche Erklärung beschreibt einen Fachwortbestand, die türkische bisher nur dessen Wissenschaft.",
  },
  {
    word: "terim",
    previous: "223:a4e22005",
    changes: {
      difficulty: 2,
      modern: "bilim, sanat veya meslek alanında özel anlam taşıyan sözcük",
      note: "Allgemeiner Ausdruck für einen Fachbegriff, etwa in Schule, Beruf und Sachtexten.",
    },
    reason:
      "Ein alltäglicher Schul- und Berufsausdruck ist nicht ausschließlich C1; ıstılah ist als Erklärung seltener als das Lernwort.",
  },
  {
    word: "ıstılah",
    previous: "235:ad118a9c",
    changes: {
      meaning: "Fachausdruck / Terminus",
    },
    reason: "Terminologiebegriff ist eine unnötig sperrige deutsche Bildung.",
  },
  {
    word: "alegori",
    previous: "252:fdaf7f1e",
    changes: {
      modern:
        "soyut bir düşünceyi kişiler, olaylar veya somut imgelerle anlatma",
    },
    reason:
      "Yerine koymalı anlatım ist eine unübliche und wenig erklärende Formulierung.",
  },
  {
    word: "alegorik",
    previous: "232:a0aae9de",
    changes: {
      modern: "soyut düşünceleri simgesel kişi ve olaylarla anlatan",
    },
    reason: "Alegoriye dayalı ist als einzige Erklärung zirkulär.",
  },
  {
    word: "sembol",
    previous: "224:b773c040",
    changes: {
      difficulty: 2,
      note: "Gebräuchliches Wort für ein Zeichen oder Sinnbild in Alltag, Kunst und allgemeinen Sachtexten.",
    },
    reason:
      "Der allgemeine Begriff Symbol ist kein ausschließlich fortgeschrittener C1-Fachausdruck.",
  },
  {
    word: "romantizm",
    previous: "247:2695ac8f",
    changes: {
      meaning: "Romantik / romantische Stimmung",
      explanation:
        "Kulturelle Richtung, die Gefühl und Vorstellungskraft betont; im Alltag auch romantische Gefühls- oder Liebesstimmung.",
      modern:
        "duygu ve hayal gücünü öne çıkaran sanat akımı; romantik duygusallık",
    },
    reason:
      "Die Alltagssprache verwendet das Wort nicht nur für die kunstgeschichtliche Epoche.",
  },
  {
    word: "natüralizm",
    previous: "251:35d70201",
    changes: {
      explanation:
        "Künstlerische Richtung mit möglichst genauer Darstellung von Natur und Gesellschaft; philosophisch die Erklärung der Welt durch natürliche Ursachen.",
      modern:
        "sanatta doğayı ve toplumu ayrıntılı yansıtma; felsefede olayları doğal nedenlerle açıklama",
    },
    reason: "Die etablierte philosophische Bedeutung des Ausdrucks fehlt.",
  },
  {
    word: "idealizm",
    previous: "245:c497d813",
    changes: {
      explanation:
        "Philosophisch die Betonung des Geistigen als Grundlage der Wirklichkeit; allgemein das Handeln aus hohen Idealen.",
      modern:
        "ideallere bağlılık; felsefede düşünceyi veya ruhu temel sayan görüş",
    },
    reason:
      "Der Ausdruck bezeichnet nicht nur eine erkenntnistheoretische Schule, sondern auch die Orientierung an Idealen.",
  },
  {
    word: "hazcılık",
    previous: "241:c2a8eb65",
    changes: {
      modern: "hazza ve acıdan uzak kalmaya yaşamda temel değer veren görüş",
    },
    reason:
      "Hedonizm als alleiniges Fremdwort ist als türkische Erklärung wenig zugänglich.",
  },
  {
    word: "egoizm",
    previous: "237:f8c80bd8",
    changes: {
      meaning: "Egoismus / Selbstsucht",
      explanation:
        "Das eigene Interesse über das anderer stellen; philosophisch auch eine Lehre, die Eigennutz zum Handlungsmaßstab macht.",
      difficulty: 2,
      note: "Auch im allgemeinen Sprachgebrauch für Selbstsucht; nicht nur eine philosophische Lehre.",
    },
    reason:
      "Egoismus wird zu Unrecht auf die philosophische Lehre eingeschränkt und pauschal zu hoch eingestuft.",
  },
  {
    word: "özgecilik",
    previous: "239:4797842a",
    changes: {
      meaning: "Altruismus / Uneigennützigkeit",
      modern: "başkalarının yararını kendi çıkarından önce gözetme",
    },
    reason:
      "Fürsorge ist enger als Altruismus; das Fremdwort altruizm allein erklärt die Bedeutung nicht.",
  },
  {
    word: "stoacılık",
    previous: "234:98c71700",
    changes: {
      modern:
        "akla uygun yaşamayı, erdemi ve kişinin tepkilerini denetlemesini öne çıkaran felsefe",
    },
    reason:
      "Stoacı öğreti ist eine zirkuläre Beschreibung aus derselben Wortfamilie.",
  },
  {
    word: "kuşkuculuk",
    previous: "235:65220985",
    changes: {
      modern: "bir bilgiyi kesin kabul etmeden önce sorgulayan yaklaşım",
    },
    reason:
      "Skeptisizm ist eine schwierigere Fremdwort-Umschreibung statt einer verständlichen Erklärung.",
  },
  {
    word: "otorite",
    previous: "233:bf10869a",
    changes: {
      modern: "bilgi, görev veya saygınlığa dayanan etkili güç",
    },
    reason:
      "Yetke ist als einzige Umschreibung ein selteneres Synonym; gemeint ist anerkannte Entscheidungs- oder Deutungsmacht.",
  },
  {
    word: "bürokratik",
    previous: "260:56e48f7e",
    changes: {
      meaning: "bürokratisch / verwaltungsbezogen",
    },
    reason: "Verwaltungsförmig ist im Deutschen unnötig ungebräuchlich.",
  },
  {
    word: "meritokrasi",
    previous: "262:f4455eb7",
    changes: {
      meaning: "Meritokratie / Leistungsprinzip",
      modern:
        "konum ve yetkilerin yetenek ve başarıya göre verilmesini esas alan düzen",
    },
    reason: "Der Begriff ist nicht auf formale Ämtervergabe beschränkt.",
  },
  {
    word: "federasyon",
    previous: "246:68fa9d80",
    changes: {
      meaning: "Föderation / Verband / Bundesstaat",
      explanation:
        "Zusammenschluss mehrerer Einheiten zu einem gemeinsamen Verband; politisch auch ein Bundesstaat mit Gliedstaaten.",
      modern: "birden çok özerk birimin oluşturduğu birlik; federal devlet",
      difficulty: 2,
      note: "Auch häufig für Sport- und Berufsverbände verwendet; politisch für föderale Zusammenschlüsse.",
    },
    reason:
      "Birlik devleti erfasst die häufige nichtstaatliche Verbandsbedeutung nicht; die pauschale C1-Zuordnung ist dafür zu hoch.",
  },
  {
    word: "federal",
    previous: "241:11622f52",
    changes: {
      modern:
        "merkezî yönetimle bölgesel yönetimler arasında yetki paylaşımına dayanan",
    },
    reason:
      "Der bloße Verweis auf federatif erklärt den politischen Begriff nicht.",
  },
  {
    word: "federatif",
    previous: "234:54b8ff48",
    changes: {
      modern: "özerk birimlerin birleşmesiyle oluşan",
    },
    reason:
      "Die gegenseitigen Verweise federal/federatif bilden statt einer verständlichen Umschreibung einen Kreis.",
  },
  {
    word: "sekter",
    previous: "239:30e850c7",
    changes: {
      modern: "dar görüşle yalnız kendi grubunun düşüncesini benimseyen",
    },
    reason:
      "Dar görüşlü grupçu ist eine unnatürliche türkische Wortverbindung.",
  },
  {
    word: "mezhep",
    previous: "259:513689fe",
    changes: {
      meaning: "Konfession / religiöse Lehr- oder Rechtsschule",
      explanation:
        "Religiöse Glaubensrichtung oder eine innerhalb einer Religion entwickelte Lehr- und Rechtsschule.",
      modern: "bir din içindeki inanç, yorum veya hukuk ekolü",
    },
    reason:
      "Im islamischen Zusammenhang kann mezhep auch eine Rechtsschule und nicht bloß eine Glaubensrichtung bezeichnen.",
  },
  {
    word: "mezhepsel",
    previous: "225:51a920df",
    changes: {
      modern: "dinî inanç veya hukuk ekolleriyle ilgili",
    },
    reason:
      "Sachliche Erklärung statt ausschließlich Rückverweis auf den Wortstamm.",
  },
  {
    word: "bağnaz",
    previous: "242:51debd7b",
    changes: {
      modern: "kendi düşüncesine körü körüne bağlı, başka görüşlere kapalı",
    },
    reason:
      "Das seltenere mutaassıp allein ist keine verständliche Umschreibung des modernen Lernworts.",
  },
  {
    word: "fırka",
    previous: "266:af2a7fc2",
    changes: {
      meaning: "Fraktion / historische Partei / Division",
      modern: "siyasi topluluk; eski kullanımda askerî tümen",
    },
    reason:
      "Die historische militärische Bedeutung Division fehlt in der Kurzglosse und in der türkischen Erklärung.",
  },
  {
    word: "partizan",
    previous: "243:e5cbcfb8",
    changes: {
      meaning: "Parteigänger / Partisan",
      explanation:
        "Einseitiger Anhänger einer Partei oder Sache; auch Angehöriger einer bewaffneten Widerstandsgruppe.",
      modern: "bir partiyi veya tarafı tutan; silahlı direniş grubunun üyesi",
    },
    reason: "Die bekannte militärische Bedeutung Partisan fehlt.",
  },
  {
    word: "şovenizm",
    previous: "261:c607f161",
    changes: {
      modern: "kendi ulusunu veya grubunu aşırı biçimde üstün görme",
    },
    reason:
      "Aşırı grup üstünlüğü kann eine tatsächliche Überlegenheit statt der überheblichen Haltung nahelegen.",
  },
  {
    word: "popülizm",
    previous: "249:7b7033ac",
    changes: {
      explanation:
        "Politischer Ansatz, der ein als einheitlich verstandenes Volk gegen eine als abgehoben dargestellte Elite stellt.",
      modern:
        "toplumu halk ve seçkinler karşıtlığıyla anlatan, halkın tek iradesini temsil ettiğini ileri süren siyasal yaklaşım",
    },
    reason:
      "Halkçılık söylemi kann Populismus mit einem allgemeinen oder positiv verstandenen Volksprinzip verwechseln.",
  },
  {
    word: "sansasyon",
    previous: "255:82a3223d",
    changes: {
      meaning: "Aufsehen / Sensation",
      modern: "geniş ilgi veya heyecan uyandıran olay; yarattığı etki",
    },
    reason:
      "Der Ausdruck bezeichnet nicht nur eine Nachricht, sondern auch das Ereignis oder die ausgelöste Aufregung.",
  },
  {
    word: "sansasyonel",
    previous: "249:1fd42523",
    changes: {
      meaning: "Aufsehen erregend / sensationell",
    },
    reason:
      "Aufgemacht legt eine bloße Aufmachung nahe, obwohl auch das Ereignis selbst sensationell sein kann.",
  },
  {
    word: "sansür",
    previous: "236:1ef992a6",
    changes: {
      modern:
        "yayınlanacak içerikleri denetleyip bazılarını yasaklama veya çıkarma",
    },
    reason:
      "Nicht jede Veröffentlichungskontrolle ist bereits Zensur; die Unterdrückung oder Entfernung von Inhalten gehört dazu.",
  },
  {
    word: "otosansür",
    previous: "243:c3a9e438",
    changes: {
      modern:
        "baskı veya tepki korkusuyla kendi sözünü ya da yazısını kısıtlama",
    },
    reason:
      "Kendini sansürleme ist zirkulär und erklärt den Mechanismus nicht.",
  },
  {
    word: "tahammül",
    previous: "207:1b631dcf",
    changes: {
      difficulty: 2,
      note: "Häufiges Wort für das Aushalten von Belastungen, Zumutungen oder abweichenden Ansichten.",
    },
    reason:
      "Gängiger abstrakter Gegenwartswortschatz statt ausschließlich C1-Register.",
  },
  {
    word: "perişan",
    previous: "243:6e664d36",
    changes: {
      meaning: "elend / mitgenommen / ungeordnet",
      modern: "çok yorgun veya sıkıntılı; dağınık ve düzensiz",
      difficulty: 2,
      note: "Gebräuchlich für einen stark erschöpften oder belasteten Menschen sowie für einen ungeordneten Zustand.",
    },
    reason:
      "Zerstreut kann bloße Unaufmerksamkeit meinen; der gebräuchliche Sinn erschöpft/elend ist nicht ausschließlich C1.",
  },
  {
    word: "kabahat",
    previous: "249:3e656dd6",
    changes: {
      meaning: "Fehler / Verfehlung / Ordnungswidrigkeit",
      explanation:
        "Ein Fehler oder vorwerfbares Verhalten; juristisch eine mit einer Verwaltungssanktion belegte Regelverletzung.",
      modern: "hatalı davranış; hukuken idari yaptırım gerektiren kural ihlali",
      difficulty: 2,
      note: "Im Alltag etwa für einen eigenen Fehler oder eine Schuld, im Recht mit spezieller Bedeutung Ordnungswidrigkeit.",
    },
    reason:
      "Die häufige allgemeine Bedeutung Fehler ist nicht bloß ein seltener C1-Rechtsbegriff.",
  },
  {
    word: "mecra",
    previous: "252:a2c40074",
    changes: {
      meaning: "Flussbett / Verlauf / Kommunikationskanal",
      modern: "akış yatağı veya yolu; iletişimin yayıldığı ortam",
    },
    reason:
      "Flussbett ist in der Erklärung enthalten, fehlt aber in der Kurzglosse; die heutige Medienbedeutung braucht eine Entsprechung.",
  },
  {
    word: "muhkem",
    previous: "224:26906166",
    changes: {
      meaning: "fest / eindeutig",
      explanation:
        "Fest und gut gesichert; bei Aussagen oder religiösen Texten auch eindeutig und klar.",
      modern: "sağlam; anlamı açık ve kesin",
    },
    reason:
      "Gerade bei religiösen Texten kann das Wort eindeutig bedeuten und nicht nur baulich fest.",
  },
  {
    word: "müsabaka",
    previous: "233:7b49481d",
    changes: {
      difficulty: 2,
      note: "Gängige, etwas formellere Bezeichnung für einen Wettkampf oder sportlichen Wettbewerb.",
    },
    reason:
      "Gewöhnlicher Sport- und Nachrichtenwortschatz statt seltener C1-Spezialbegriff.",
  },
  {
    word: "itiraf",
    previous: "221:863f2202",
    changes: {
      meaning: "Geständnis / Eingeständnis",
      explanation:
        "Etwas offen zugeben, das man zuvor nicht ausgesprochen oder eingeräumt hat; häufig eine eigene Tat oder Empfindung.",
      modern:
        "daha önce söylenmeyen bir durumu, duyguyu veya suçu açıkça kabul etme",
      difficulty: 2,
      note: "Allgemeiner Ausdruck für das offene Zugeben einer Tatsache oder Empfindung; nicht auf Straftaten beschränkt.",
    },
    reason:
      "Der Ausdruck ist allgemein gebräuchlich und nicht nur das Geständnis einer eigenen Handlung.",
  },
  {
    word: "itlaf",
    previous: "216:64305612",
    changes: {
      meaning: "Vernichtung / Tötung",
      explanation:
        "Gezieltes Beseitigen oder Töten, besonders von kranken oder schädlichen Tieren.",
      modern: "yok etme; özellikle hastalıklı veya zararlı hayvanları öldürme",
    },
    reason:
      "Gefährdete Bestände kann fälschlich geschützte oder bedrohte Tierarten meinen; üblich ist der veterinärmedizinische Vernichtungsbegriff.",
  },
  {
    word: "ittifak",
    previous: "258:6b20e1a6",
    changes: {
      modern: "ortak amaç için anlaşma; görüş birliği",
    },
    reason:
      "Birlikte karar erklärt ein Bündnis oder eine Übereinstimmung nur unvollständig.",
  },
  {
    word: "müttefik",
    previous: "229:ef957e0",
    changes: {
      modern: "ortak amaç için başka biriyle anlaşmış olan",
    },
    reason:
      "Bağlaşık ist eine wenig zugängliche Erklärung durch ein seltenes Synonym.",
  },
  {
    word: "ittihaz",
    previous: "236:dc1e3adb",
    changes: {
      meaning: "Annahme / Wahl / Bestimmung",
      explanation:
        "Etwas annehmen oder für einen bestimmten Zweck bestimmen; in festen Verbindungen auch einen Beschluss fassen.",
      modern: "bir şeyi kabul edip bir amaç için seçme; karar verme",
    },
    reason:
      "Annahme eines Mittels ist zu eng, etwa für die feste Verbindung karar ittihaz etmek.",
  },
  {
    word: "itimatlı",
    previous: "239:285a534b",
    changes: {
      meaning: "vertrauenswürdig / sicher",
      explanation:
        "Als zuverlässig und vertrauenswürdig geltend; je nach Zusammenhang auch sicher oder zuversichtlich.",
      modern: "güven veren, güvenilir veya emin",
    },
    reason:
      "Vertrauend ist nicht gleich vertrauenswürdig; die bisherige Erklärung vermischt aktives Vertrauen mit Zuverlässigkeit.",
  },
  {
    word: "mücevher",
    previous: "240:f858f19b",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Begriff für Schmuck; kein seltener Fachausdruck.",
  },
  {
    word: "mücevherat",
    previous: "247:4e0e993a",
    changes: {
      explanation: "Gesamtheit kostbarer Schmuckstücke und Edelsteine.",
    },
    reason: "Nominalbegriff wurde durch unpassenden Infinitiv definiert.",
  },
  {
    word: "fırın",
    previous: "178:2f8ff384",
    changes: {
      meaning: "Backofen / Bäckerei",
      explanation:
        "Gerät oder geschlossener Heizraum zum Backen; auch ein Betrieb, der Brot und Backwaren herstellt oder verkauft.",
      modern:
        "ekmek ve yemek pişirilen ısıtılmış bölüm; ekmek üreten veya satan iş yeri",
    },
    reason:
      "Die häufige Bedeutung Bäckerei fehlt; Ofenraum genauer beschreiben.",
  },
  {
    word: "davlumbaz",
    previous: "194:5ae6a03",
    changes: {
      modern: "yemek buharını ve kokusunu dışarı çeken aygıt",
    },
    reason: "Natürliche Umschreibung statt des unklaren „buhar çekici“.",
  },
  {
    word: "çaydanlık",
    previous: "193:1ae22e2b",
    changes: {
      meaning: "Teekessel / zweiteilige Teekanne",
      explanation:
        "Gefäß zum Erhitzen von Teewasser; häufig der untere Teil einer zweiteiligen türkischen Teekanne.",
      modern:
        "çay suyu kaynatılan kap; genellikle üstünde demliği bulunan çay hazırlama takımı",
    },
    reason: "Ein Teewasserkessel ist keine gewöhnliche Teekanne zum Ziehen.",
  },
  {
    word: "açacak",
    previous: "187:7a5e40f0",
    changes: {
      meaning: "Öffner / Flaschenöffner",
      explanation:
        "Werkzeug zum Öffnen etwa von Flaschenverschlüssen oder Konservendosen.",
      modern: "şişe veya konserve gibi kapları açmaya yarayan araç",
    },
    reason: "Das allgemeine Wort bezeichnet nicht nur Flaschenöffner.",
  },
  {
    word: "sap",
    previous: "174:4192c72e",
    changes: {
      explanation:
        "Teil zum Halten eines Gegenstands; auch der Stiel einer Pflanze, Blüte oder Frucht.",
      modern:
        "bir aracın tutulacak bölümü; bitkinin veya meyvenin ince gövde bölümü",
    },
    reason:
      "Stiel kann auch einen Pflanzenteil bezeichnen, nicht nur einen Griff.",
  },
  {
    word: "peçete",
    previous: "170:20ca45b9",
    changes: {
      modern: "yemekte ağız ve elleri silmek için kullanılan kâğıt veya bez",
    },
    reason:
      "„Sofra bezi“ kann Tischdecke heißen und erklärt eine Serviette nicht zuverlässig.",
  },
  {
    word: "fırça",
    previous: "179:b0d5fac3",
    changes: {
      meaning: "Bürste / Pinsel",
      explanation:
        "Gerät mit Borsten oder Haaren zum Reinigen, Bürsten oder Auftragen von Farbe.",
      modern:
        "temizlemek veya boya sürmek için kullanılan, kıllı ya da tüylü araç",
    },
    reason: "Pinsel ist neben Bürste eine wichtige alltägliche Bedeutung.",
  },
  {
    word: "ip",
    previous: "172:d9bac4b3",
    changes: {
      modern:
        "liflerin veya ince tellerin bükülmesiyle yapılan, bağlama işinde kullanılan ince uzun malzeme",
    },
    reason: "Eine Schnur ist kein Draht: „tel“ ist hier sachlich falsch.",
  },
  {
    word: "düğme",
    previous: "177:316ad11",
    changes: {
      modern:
        "giysinin iliklerine geçirilerek kapanmasını sağlayan küçük parça",
    },
    reason: "„Giysi kapatacı“ ist als Lernumschreibung unnatürlich.",
  },
  {
    word: "yaka",
    previous: "174:b46342d0",
    changes: {
      modern: "giysinin boynu çevreleyen bölümü",
    },
    reason:
      "Die Umschreibung muss den Kleidungsrand vom Körperhals unterscheiden.",
  },
  {
    word: "kol",
    previous: "170:6f5224c0",
    changes: {
      modern: "omuz ile el arasındaki uzuv; giysinin bu uzvu örten bölümü",
    },
    reason:
      "Die türkische Umschreibung deckt die ebenfalls genannte Ärmelbedeutung nicht ab.",
  },
  {
    word: "kemer",
    previous: "179:a67b1f09",
    changes: {
      modern: "bel bağı; mimaride yay biçimli taşıyıcı yapı ögesi",
    },
    reason: "Beide bereits genannten Bedeutungen auch auf Türkisch erklären.",
  },
  {
    word: "toka",
    previous: "192:10d864fb",
    changes: {
      modern: "saçları veya bir kayışı tutturmaya yarayan parça",
    },
    reason: "Die bisherige Umschreibung ist unnatürlich und zu allgemein.",
  },
  {
    word: "kozmetik",
    previous: "182:f41bf216",
    changes: {
      meaning: "Kosmetik / kosmetisch",
      explanation:
        "Mittel und Anwendungen zur Körperpflege und Verschönerung; als Adjektiv diese Pflege betreffend.",
      modern:
        "vücut bakımı ve güzelleştirmeyle ilgili ürünler veya uygulamalar",
    },
    reason:
      "Kosmetik bezeichnet Pflegeprodukte und Anwendungen, daneben auch das zugehörige Adjektiv.",
  },
  {
    word: "minder",
    previous: "171:d9c83f46",
    changes: {
      explanation: "Ein dickes Kissen, das als Unterlage beim Sitzen dient.",
    },
    reason:
      "Klares standarddeutsches Kissen statt regional unterschiedlicher Polster-Artikel.",
  },
  {
    word: "avize",
    previous: "185:2930dd64",
    changes: {
      meaning: "Hängeleuchte / Kronleuchter",
      explanation:
        "Von der Decke hängende Zimmerleuchte, oft mit mehreren Leuchtmitteln.",
    },
    reason: "Nicht jede avize ist ein Kronleuchter mit mehreren Armen.",
  },
  {
    word: "petek",
    previous: "193:3f0eead8",
    changes: {
      explanation:
        "Wabenartige Struktur, etwa im Bienenstock; im Heizungsgebrauch auch ein Heizkörper.",
      modern:
        "bal arılarının göz göz yaptığı yapı; merkezî ısıtmada kullanılan radyatör",
    },
    reason:
      "Im Heizungsgebrauch ist häufig der ganze Heizkörper gemeint, nicht nur ein Glied.",
  },
  {
    word: "eklemli",
    previous: "194:91f2f703",
    changes: {
      meaning: "mit Gelenken / gegliedert",
      explanation:
        "Aus Teilen bestehend, die durch bewegliche Gelenke miteinander verbunden sind.",
      modern: "parçaları eklemlerle birbirine bağlı",
      difficulty: 2,
      note: "Beschreibender Wortschatz für Körperbau und bewegliche technische Verbindungen.",
    },
    reason:
      "Gelenkig kann Geschmeidigkeit suggerieren; gemeint ist das Vorhandensein von Gelenken.",
  },
  {
    word: "yüz",
    previous: "164:d766a5be",
    changes: {
      meaning: "Gesicht / Oberfläche / hundert",
      explanation:
        "Vorderseite des Kopfes oder sichtbare Seite einer Sache; als Zahlwort die Zahl 100.",
      modern:
        "surat; bir şeyin görünen dış bölümü; doksan dokuzdan sonra gelen sayı",
    },
    reason:
      "Die häufigen eigenständigen Bedeutungen hundert und Oberfläche fehlen.",
  },
  {
    word: "dil",
    previous: "186:b097408c",
    changes: {
      modern:
        "ağızdaki hareketli tat alma organı; insanların anlaşmak için kullandığı ses ve işaret sistemi",
    },
    reason:
      "Die türkische Umschreibung erklärt bisher nur das Organ, nicht Sprache.",
  },
  {
    word: "ben",
    previous: "163:20336930",
    changes: {
      meaning: "ich / Muttermal",
      explanation:
        "Personalpronomen für die sprechende Person; als Substantiv auch ein kleiner meist dunkler Hautfleck.",
      modern: "konuşanın kendisi; derideki küçük renkli leke",
    },
    reason:
      "Häufiges Personalpronomen ich fehlt vollständig; Muttermal allein führt zu schweren Fehlinterpretationen.",
  },
  {
    word: "gözyaşı",
    previous: "173:be3c2e72",
    changes: {
      modern: "gözün yüzeyini nemlendiren, ağlarken de akan sıvı",
    },
    reason:
      "„Ağlama suyu“ ist unnatürlich und erklärt die normale Befeuchtungsfunktion nicht.",
  },
  {
    word: "çürük",
    previous: "181:b53542d9",
    changes: {
      meaning: "verfault / morsch / Bluterguss",
      explanation:
        "Durch Fäulnis verdorben oder beschädigt; als Substantiv auch ein blauer Fleck auf der Haut.",
      modern: "bozulmuş veya çürümüş; deride darbe sonucu oluşan mor leke",
    },
    reason:
      "„Faul“ ist im Deutschen mehrdeutig; Fäulnis und Bluterguss sauber unterscheiden.",
  },
  {
    word: "hemşire",
    previous: "197:ceba95d1",
    changes: {
      modern:
        "hastaların bakımını ve tedavi uygulamalarını yapan sağlık çalışanı",
    },
    reason: "„Sağlık bakıcısı“ ist eine unnatürliche Berufsumschreibung.",
  },
  {
    word: "serum",
    previous: "207:ff100ed9",
    changes: {
      explanation:
        "Flüssiger Anteil des Blutes nach der Gerinnung; im Alltag auch eine medizinische Infusionslösung.",
      modern:
        "pıhtılaşmış kanın sıvı kısmı; günlük dilde damardan verilen tedavi sıvısı",
    },
    reason: "„Damar sıvısı“ verwechselt Blutbestandteil und Infusionslösung.",
  },
  {
    word: "engelli",
    previous: "191:bf678532",
    changes: {
      modern:
        "bedensel, zihinsel, ruhsal veya duyusal bir yetersizliği bulunan",
    },
    reason:
      "Die bisherige türkische Umschreibung ist zirkulär und unspezifisch.",
  },
  {
    word: "hıçkırık",
    previous: "188:bf341aff",
    changes: {
      modern:
        "diyaframın istemsiz kasılmasıyla oluşan kesik soluk alma ve ses çıkarma",
    },
    reason: "Präzisere Umschreibung des körperlichen Vorgangs.",
  },
  {
    word: "baba",
    previous: "161:1439482a",
    changes: {
      modern: "çocuğun erkek ebeveyni",
    },
    reason:
      "Das altertümliche ata ist keine hilfreiche moderne Umschreibung für Vater.",
  },
  {
    word: "aile",
    previous: "180:7bd56cb7",
    changes: {
      modern: "evlilik ve akrabalık bağlarıyla birbirine bağlı kişiler",
    },
    reason:
      "Familie und bloßer gemeinsamer Haushalt sind nicht gleichbedeutend.",
  },
  {
    word: "kardeş",
    previous: "204:ad721d49",
    changes: {
      modern: "annesi veya babası aynı olan kişi",
    },
    reason:
      "Die Umschreibung soll wie die Erklärung auch Halbgeschwister einschließen.",
  },
  {
    word: "hala",
    previous: "190:ee4c259f",
    changes: {
      note: "Schwester des Vaters. „Hâlâ“ mit Zirkumflexen bedeutet dagegen „immer noch“.",
    },
    reason: "Hala und hâlâ dürfen nicht derselben Bedeutung zugeordnet werden.",
  },
  {
    word: "baldız",
    previous: "194:2eaf45d5",
    changes: {
      meaning: "Schwester der Ehefrau / Schwägerin",
      modern: "erkeğin eşinin kız kardeşi",
    },
    reason:
      "„Schwägerin der Ehefrau“ bezeichnet eine andere Beziehung als die Schwester der Ehefrau.",
  },
  {
    word: "elti",
    previous: "193:e2f56c6a",
    changes: {
      modern: "kadının kocasının erkek kardeşinin eşi",
    },
    reason: "Der Schwager ist hier ausdrücklich der Bruder des Ehemanns.",
  },
  {
    word: "dul",
    previous: "200:ec6c2fe0",
    changes: {
      meaning: "verwitwet / geschieden",
      explanation:
        "Nach dem Tod des Ehepartners oder einer Scheidung nicht erneut verheiratet.",
      modern: "eşi ölmüş veya boşanmış olup yeniden evlenmemiş",
    },
    reason:
      "Alleinstehend ist zu weit; die Umschreibung unterschlägt Verwitwung.",
  },
  {
    word: "üvey",
    previous: "190:995efd92",
    changes: {
      modern:
        "anne veya babanın başka evliliği yoluyla oluşan aile bağını belirten",
    },
    reason:
      "Nicht blutsverwandt ist allein zu weit für eine Stiefverwandtschaft.",
  },
  {
    word: "susuz",
    previous: "186:352b56b0",
    changes: {
      modern: "suya ihtiyacı olan veya suyu bulunmayan",
    },
    reason: "Die Umschreibung muss neben wasserlos auch durstig erklären.",
  },
  {
    word: "kızarmış",
    previous: "190:cef3ba1a",
    changes: {
      meaning: "gebraten / gebräunt / errötet",
      explanation:
        "Durch Hitze gebräunt oder gegart; bei der Haut auch rot geworden.",
      modern: "ısı etkisiyle rengi değişip pişmiş; derisi kırmızılaşmış",
    },
    reason:
      "Die bisherige türkische Umschreibung meint errötetes Gesicht, die deutsche nur gegartes Essen.",
  },
  {
    word: "somun",
    previous: "190:13be496c",
    changes: {
      meaning: "Brotlaib / Schraubenmutter",
      modern: "bütün ekmek; cıvatanın üzerine geçirilen içi dişli parça",
    },
    reason: "Mutter ohne Zusatz ist als Familienbezeichnung missverständlich.",
  },
  {
    word: "poğaça",
    previous: "198:36f24dd0",
    changes: {
      meaning: "herzhaftes Kleingebäck",
    },
    reason: "Poğaça ist nicht zwingend gefüllt.",
  },
  {
    word: "salam",
    previous: "196:f3f2ea90",
    changes: {
      meaning: "Brühwurst / Aufschnittwurst",
      explanation:
        "Meist mild gewürzte Wurst aus fein zerkleinertem Fleisch, die häufig in Scheiben gegessen wird.",
      modern: "ince kıyılmış etin işlenmesiyle yapılan dilimlik et ürünü",
      note: "Türkisches salam ist meist eine Aufschnittwurst und nicht ohne Weiteres mit deutscher Salami gleichzusetzen.",
    },
    reason:
      "Türkisches salam ist nicht automatisch deutsche fermentierte Salami.",
  },
  {
    word: "ciğer",
    previous: "198:ed57a78c",
    changes: {
      meaning: "Leber / Lunge",
      explanation:
        "Bezeichnung für Leber oder Lunge, auch wenn diese als Lebensmittel verwendet werden.",
      modern: "karaciğer veya akciğer",
    },
    reason:
      "Innereien ist zu weit; das Wort bezeichnet besonders Leber oder Lunge.",
  },
  {
    word: "bakkal",
    previous: "208:e3d95549",
    changes: {
      explanation:
        "Lebensmittelhändler oder kleiner Laden für Lebensmittel und Alltagswaren.",
      modern: "gıda ve günlük ihtiyaç maddeleri satan kişi veya küçük dükkân",
    },
    reason: "Erklärung und Umschreibung müssen Händler und Laden abdecken.",
  },
  {
    word: "tere",
    previous: "185:b7bf1b90",
    changes: {
      modern: "keskin tadı olan, salatalarda kullanılan yeşillik",
    },
    reason:
      "„Keskin tatlı“ kann süß bedeuten; die Konstruktion ist missverständlich.",
  },
  {
    word: "karanfil",
    previous: "197:1631de58",
    changes: {
      modern:
        "kokulu süs çiçeği; baharat olarak kullanılan kurutulmuş çiçek tomurcuğu",
    },
    reason: "Die türkische Umschreibung unterschlägt die Gewürznelke.",
  },
  {
    word: "şekerleme",
    previous: "204:1537441",
    changes: {
      modern: "şekerli yiyecek; kısa ve hafif uyku",
    },
    reason:
      "Die häufige Bedeutung Nickerchen fehlt in der türkischen Umschreibung.",
  },
  {
    word: "çay",
    previous: "194:a060df56",
    changes: {
      meaning: "Tee / kleiner Fluss",
      explanation:
        "Aufguss aus Teeblättern; außerdem ein kleiner Fluss oder größerer Bach.",
      modern: "demlenmiş çay içeceği; dereden büyük, ırmaktan küçük akarsu",
    },
    reason:
      "Als Gewässer ist häufig ein kleiner Fluss oder größerer Bach gemeint; Umschreibung ergänzen.",
  },
  {
    word: "maden",
    previous: "202:13c1fa4b",
    changes: {
      meaning: "Bergwerk / Bodenschatz / Metall",
      explanation:
        "Natürlich vorkommender nutzbarer Rohstoff, besonders ein Metall; auch dessen Abbaustätte.",
      modern:
        "yer altından çıkarılan değerli ham madde; metal; çıkarıldığı ocak",
    },
    reason:
      "Die wichtige Bedeutung Metall fehlt, Mineral und Abbaustätte präzisieren.",
  },
  {
    word: "saka",
    previous: "190:da97c1bd",
    changes: {
      meaning: "Stieglitz / Wasserträger",
      explanation:
        "Kleiner Singvogel mit roter Gesichtszeichnung; historisch auch ein Wasserträger oder Wasserverkäufer.",
      modern: "küçük ötücü kuş; eskiden su taşıyıp satan kişi",
      difficulty: 2,
      note: "Die Vogelbedeutung und der historische Beruf müssen aus dem Buchsatz unterschieden werden.",
    },
    reason:
      "Historisches Wasserträger fehlt, was gerade in älteren Buchtexten irreführend wäre.",
  },
  {
    word: "arı",
    previous: "192:f217d522",
    changes: {
      modern: "bal yapan böcek; saf, katışıksız",
    },
    reason:
      "Die Umschreibung erklärt bisher die bereits genannte Reinheitsbedeutung nicht.",
  },
  {
    word: "pupa",
    previous: "201:85ee3ddb",
    changes: {
      difficulty: 2,
      note: "Biologischer Fachwortschatz zur Entwicklung von Insekten.",
    },
    reason:
      "Fachlicher biologischer Entwicklungsbegriff ist ein klarer Ausreißer im allgemeinen Alltagswortschatz.",
  },
  {
    word: "dokunaç",
    previous: "179:3bbf8dda",
    changes: {
      modern:
        "bazı hayvanların dokunma ve yakalama için kullandığı hareketli uzantı",
    },
    reason:
      "Fangarm durch seine Funktion statt durch eine unklare Zusammensetzung erklären.",
  },
  {
    word: "anten",
    previous: "188:5b0f71d",
    changes: {
      explanation:
        "Vorrichtung zum Empfangen oder Senden elektromagnetischer Wellen; auch ein tierischer Fühler.",
      modern: "radyo dalgalarını alan veya yayan aygıt; hayvanlarda duyarga",
    },
    reason:
      "Antenne ist kein beliebiges Empfangsgerät; der technische Sinn fehlt auf Türkisch.",
  },
  {
    word: "kıskaç",
    previous: "194:97b5a9b7",
    changes: {
      modern:
        "nesneleri sıkıştırarak tutmaya yarayan iki kollu organ veya araç",
    },
    reason: "Nicht durch dasselbe Wort umschreiben.",
  },
  {
    word: "fildişi",
    previous: "185:aef817a4",
    changes: {
      modern: "filin uzun kesici dişlerinden elde edilen sert madde",
    },
    reason: "Die bisherige Umschreibung ist weitgehend zirkulär.",
  },
  {
    word: "avlak",
    previous: "171:2e5dfb44",
    changes: {
      difficulty: 2,
      note: "Jagdlicher Fachwortschatz für ein zur Jagd bestimmtes Gebiet.",
    },
    reason:
      "Spezifischer jagdlicher und verwaltungsbezogener Begriff statt allgemeinem Alltagswort.",
  },
  {
    word: "zoka",
    previous: "187:639f0a26",
    changes: {
      difficulty: 2,
      note: "Fischereiwortschatz; bildlich auch im Ausdruck zokayı yutmak für auf einen Trick hereinfallen.",
    },
    reason: "Spezifischer Fischereibegriff statt allgemeinem Alltagswort.",
  },
  {
    word: "vahşi",
    previous: "173:d9e89c63",
    changes: {
      modern: "evcilleştirilmemiş; çok acımasız",
    },
    reason: "Wild oder grausam bedeutet nicht grundsätzlich räuberisch.",
  },
  {
    word: "ürkek",
    previous: "173:8ee8700a",
    changes: {
      explanation: "Leicht zu erschrecken und zum Zurückweichen neigend.",
    },
    reason:
      "Leicht erschreckend bedeutet andere erschreckend statt leicht erschrocken.",
  },
  {
    word: "zehir",
    previous: "179:4b93b893",
    changes: {
      modern: "canlıya zarar verebilen veya ölümüne yol açabilen madde",
    },
    reason:
      "Ağulu ist schwieriger und altertümlicher als das zu erklärende Wort.",
  },
  {
    word: "zehirli",
    previous: "164:2673773e",
    changes: {
      modern: "zehir içeren veya zehir etkisi gösteren",
    },
    reason: "Ağulu ist keine verständlichere moderne Umschreibung.",
  },
  {
    word: "ötüş",
    previous: "165:42371c1c",
    changes: {
      meaning: "Vogelruf / Vogelgesang",
    },
    reason: "Nicht jeder Vogellaut ist melodischer Gesang.",
  },
  {
    word: "çenek",
    previous: "183:fa07a0c2",
    changes: {
      difficulty: 3,
      note: "Botanischer Fachbegriff für das erste Blatt eines Pflanzenkeimlings.",
    },
    reason:
      "Seltener botanischer Fachbegriff für Keimblatt gehört nicht in allgemeinen B1-Alltagswortschatz.",
  },
  {
    word: "kamelya",
    previous: "198:90edafff",
    changes: {
      meaning: "Kamelie",
      explanation: "Immergrüner Zierstrauch mit großen, auffälligen Blüten.",
      modern: "çalı biçiminde yetişen, gösterişli çiçekli süs bitkisi",
      note: "Nicht mit kameriye, der Gartenlaube, verwechseln.",
    },
    reason:
      "Kamelie und Gartenlaube sind im Standardtürkischen kamelya und kameriye, nicht dieselbe Bedeutung.",
  },
  {
    word: "saz",
    previous: "196:201b4ada",
    changes: {
      modern: "kamış türü bitki; telli çalgı",
    },
    reason:
      "Kamışlı çalgı bezeichnet ein Rohrblattinstrument, aber saz ist ein Saiteninstrument.",
  },
  {
    word: "çeltik",
    previous: "192:488e67c9",
    changes: {
      meaning: "Rohreis / Reispflanze",
      explanation:
        "Reis mit noch vorhandener Spelzenhülle; auch die auf nassen Feldern angebaute Reispflanze.",
      modern: "kabuğu soyulmamış pirinç; bu taneleri veren bitki",
      difficulty: 2,
      note: "Landwirtschaftlicher Wortschatz für den Reisanbau und noch ungeschälten Reis.",
    },
    reason: "Auch ungeschälter Reis ist gemeint, nicht nur die Reispflanze.",
  },
  {
    word: "kanola",
    previous: "165:629d2d36",
    changes: {
      meaning: "Canola-Raps / Speiseraps",
      explanation: "Für die Gewinnung von Speiseöl gezüchtete Rapsform.",
      modern: "yemeklik yağ üretmek için yetiştirilen kolza çeşidi",
    },
    reason:
      "Canola bezeichnet eine für Speiseöl gezüchtete Rapsform, nicht beliebigen Raps.",
  },
  {
    word: "liken",
    previous: "185:589b857",
    changes: {
      modern: "mantar ile algin birlikte yaşamasıyla oluşan canlı topluluğu",
      difficulty: 2,
      note: "Biologischer Wortschatz für die Lebensgemeinschaft von Pilz und Alge.",
    },
    reason:
      "Biologischer Fachbegriff statt allgemeinem Alltagswort; natürliche türkische Umschreibung.",
  },
  {
    word: "don",
    previous: "170:19041a6c",
    changes: {
      meaning: "Frost / Unterhose",
      explanation:
        "Gefrieren bei Temperaturen unter null; außerdem eine Unterhose.",
      modern: "dondurucu soğuk; alt bedene giyilen iç çamaşırı",
    },
    reason: "Das häufige eigenständige Substantiv Unterhose fehlt.",
  },
  {
    word: "dolu",
    previous: "194:407e4061",
    changes: {
      meaning: "voll / Hagel",
      modern: "içi boş olmayan; buz taneleri biçiminde yağan yağış",
    },
    reason:
      "Die sehr häufige Bedeutung voll muss auch auf Türkisch erkennbar sein.",
  },
  {
    word: "sam",
    previous: "175:6d5c1ca5",
    changes: {
      difficulty: 3,
      note: "Seltener geografischer oder literarischer Ausdruck für einen sehr heißen trockenen Wind.",
    },
    reason:
      "Seltener Wüstenwindbegriff ist ein klarer Ausreißer gegenüber allgemeinem Alltagswortschatz.",
  },
  {
    word: "soğuk",
    previous: "169:a56c2ce6",
    changes: {
      modern: "sıcaklığı düşük",
    },
    reason:
      "Bei Temperatur ist sıcaklık präziser als die physikalische Wärmegröße ısı.",
  },
  {
    word: "sıcak",
    previous: "174:69865c8b",
    changes: {
      modern: "sıcaklığı yüksek",
    },
    reason:
      "Bei Temperatur ist sıcaklık präziser als die physikalische Wärmegröße ısı.",
  },
  {
    word: "yaş",
    previous: "176:5edbeada",
    changes: {
      modern: "ıslak; doğumdan beri geçen süre",
    },
    reason: "Die Umschreibung unterschlägt die wichtige Altersbedeutung.",
  },
  {
    word: "su",
    previous: "175:aa52cb67",
    changes: {
      modern: "renksiz, kokusuz ve canlılar için gerekli sıvı",
    },
    reason: "Wasser ist nicht bloß jede getrunkene Flüssigkeit.",
  },
  {
    word: "gaz",
    previous: "172:5f2039e7",
    changes: {
      explanation:
        "Ein Stoff ohne feste Form und ohne festes Volumen, der sich im verfügbaren Raum verteilt.",
      modern: "belirli şekli ve hacmi olmayan, bulunduğu kabı dolduran madde",
    },
    reason: "Flüchtiger Stoff und Gas sind nicht gleichbedeutend.",
  },
  {
    word: "kürek",
    previous: "195:4122aaeb",
    changes: {
      modern:
        "toprak gibi maddeleri aktarmaya yarayan araç; suya daldırılıp çekilerek tekneyi ilerleten araç",
    },
    reason: "Die Ruderbedeutung fehlt auf Türkisch.",
  },
  {
    word: "çapa",
    previous: "200:1b66454",
    changes: {
      meaning: "Hacke",
      explanation:
        "Gartenwerkzeug zum Lockern des Bodens und Entfernen von Unkraut.",
      note: "Der Schiffsanker wird im heutigen Standardtürkisch çıpa genannt.",
    },
    reason:
      "Gartenhacke und Schiffsanker heißen im Standardtürkischen çapa und çıpa.",
  },
  {
    word: "havza",
    previous: "202:683f98d6",
    changes: {
      difficulty: 2,
      note: "Geografischer Wortschatz für ein Einzugsgebiet oder Becken.",
    },
    reason:
      "Geografischer Fachbegriff ist ein klarer Ausreißer im allgemeinen Alltagswortschatz.",
  },
  {
    word: "rençper",
    previous: "186:bcbc9d45",
    changes: {
      difficulty: 3,
      note: "Traditioneller, heute seltenerer Ausdruck für Landarbeiter oder Bauer; häufig in älteren Texten.",
    },
    reason:
      "Der heute seltener gebrauchte traditionelle Ausdruck ist kein allgemeiner B1-Alltagsbegriff.",
  },
  {
    word: "harman",
    previous: "205:82b3f627",
    changes: {
      meaning: "Dreschen / Dreschplatz / Mischung",
      explanation:
        "Das Trennen des Korns von der Ähre, der dafür genutzte Platz oder eine Mischung verschiedener Stoffe.",
      modern:
        "tahılın başaktan ayrılması veya bunun yapıldığı yer; farklı ürünlerin karışımı",
    },
    reason:
      "Dreschvorgang und Mischung fehlen teilweise in Erklärung und Umschreibung.",
  },
  {
    word: "kepenk",
    previous: "203:1392a514",
    changes: {
      meaning: "Fensterladen / Rollladen",
      explanation:
        "Beweglicher Schutzverschluss vor einem Fenster oder einer Geschäftsöffnung.",
      modern: "pencereyi veya dükkân girişini dıştan kapatan hareketli kapak",
    },
    reason:
      "Laden kann ein Geschäft meinen; gemeint sind Fenster- oder Verschlussläden.",
  },
  {
    word: "sahtekâr",
    previous: "189:6fabab4",
    changes: {
      explanation:
        "Person, die andere durch Täuschung oder vorgetäuschte Echtheit betrügt.",
    },
    reason: "Unnatürliche und tautologische deutsche Erklärung.",
  },
  {
    word: "kaçak",
    previous: "202:dffca594",
    changes: {
      meaning: "auf der Flucht / unerlaubt",
      explanation:
        "Geflohen oder ohne die vorgeschriebene Erlaubnis tätig; bei Waren auch geschmuggelt.",
      modern: "kaçmış olan; izinsiz yapılan veya gizlice getirilen",
    },
    reason:
      "Flüchtig kann im Deutschen kurzzeitig heißen; Flucht und unerlaubtes Handeln unterscheiden.",
  },
  {
    word: "gümrük",
    previous: "206:ac5e4fae",
    changes: {
      explanation:
        "Behörde und Verfahren zur Kontrolle grenzüberschreitender Waren; auch die dabei erhobene Abgabe.",
      modern: "sınırdan geçen malların denetimi ve bu mallardan alınan vergi",
    },
    reason: "Zoll kann neben der Kontrolle auch Behörde und Abgabe bezeichnen.",
  },
  {
    word: "saf",
    previous: "183:1652eef4",
    changes: {
      meaning: "rein / gutgläubig / Reihe",
      explanation:
        "Unvermischt oder arglos vertrauend; als Substantiv auch eine Reihe nebeneinanderstehender Menschen.",
      modern:
        "katışıksız; kolay inanan; yan yana dizilmiş insanların oluşturduğu sıra",
    },
    reason:
      "Die häufige eigenständige Bedeutung Reihe fehlt, Reinheit ist auf Türkisch nicht abgedeckt.",
  },
  {
    word: "utangaçlık",
    previous: "180:9f4cb440",
    changes: {
      meaning: "Schüchternheit / Scheu",
      explanation:
        "Zurückhaltung oder Verlegenheit im Umgang mit anderen Menschen.",
    },
    reason:
      "Schamhaftigkeit kann sexuelle Zurückhaltung suggerieren statt allgemeiner Schüchternheit.",
  },
  {
    word: "pas",
    previous: "172:56ade6a3",
    changes: {
      meaning: "Rost / Pass",
      explanation:
        "Korrosionsschicht auf Eisen; im Sport die Weitergabe des Balls an einen Mitspieler.",
      modern:
        "demirde oluşan kızıl kahverengi aşınma tabakası; oyunda topu takım arkadaşına gönderme",
    },
    reason: "Rost ist kein Schimmel; die wichtige Sportbedeutung Pass fehlt.",
  },
  {
    word: "düzgün",
    previous: "186:d128f616",
    changes: {
      modern: "düzenli, uygun ve biçimi bozuk olmayan",
    },
    reason: "Glatt allein deckt ordentlich und ebenmäßig nicht ab.",
  },
  {
    word: "cetvel",
    previous: "175:fe888ab7",
    changes: {
      meaning: "Lineal / Tabelle",
      explanation:
        "Gerades Werkzeug zum Messen und Zeichnen; auch eine geordnete tabellarische Übersicht.",
      modern: "çizgi çizme ve ölçme aracı; bilgilerin sıralandığı çizelge",
    },
    reason:
      "Neben dem Lineal ist eine tabellarische Übersicht ein gebräuchlicher Sinn.",
  },
  {
    word: "klasör",
    previous: "193:7498f142",
    changes: {
      explanation:
        "Behälter zum geordneten Ablegen von Unterlagen; am Computer auch ein Verzeichnis für Dateien.",
      modern:
        "belgeleri düzenleyen kap; bilgisayarda dosyaları bir arada tutan dizin",
    },
    reason: "Auch ein Computerordner muss von der Umschreibung erfasst werden.",
  },
  {
    word: "kartuş",
    previous: "200:bb39821b",
    changes: {
      explanation:
        "Austauschbarer Tinten- oder Tonerbehälter; bei Waffen auch eine Patronenhülse mit Ladung.",
      modern: "yazıcıda değiştirilen mürekkep veya toner haznesi; silah fişeği",
    },
    reason: "Munition ist nicht bloß ein Behälterinhalt; Tonerpatronen fehlen.",
  },
  {
    word: "tarayıcı",
    previous: "192:2ee1b444",
    changes: {
      meaning: "Scanner / Webbrowser",
      explanation:
        "Gerät zum digitalen Erfassen von Vorlagen; auch ein Programm zum Anzeigen von Webseiten.",
      modern:
        "belgeleri sayısallaştıran aygıt; internet sayfalarını açıp gösteren yazılım",
    },
    reason: "Webbrowser ist eine wichtige heutige Bedeutung neben Scanner.",
  },
  {
    word: "kumanda",
    previous: "199:bca42ac8",
    changes: {
      modern: "yönetme, komut verme; bir cihazı uzaktan çalıştıran araç",
    },
    reason: "Die Tätigkeit der Steuerung fehlt in der türkischen Umschreibung.",
  },
  {
    word: "kurşun",
    previous: "182:2896efe8",
    changes: {
      modern: "ağır ve yumuşak metal; silahtan atılan mermi",
    },
    reason: "Die Umschreibung unterschlägt die Geschossbedeutung.",
  },
  {
    word: "mermi",
    previous: "182:d4e8156c",
    changes: {
      modern: "ateşli silahtan fırlatılan metal cisim",
    },
    reason:
      "Silah atımı ist der Schussvorgang, nicht das abgefeuerte Geschoss.",
  },
  {
    word: "yay",
    previous: "207:77281308",
    changes: {
      explanation:
        "Gebogenes Gerät zum Abschießen von Pfeilen; auch ein elastisches Maschinenteil.",
      modern:
        "ok atmaya yarayan gerili araç; esneyip eski biçimine dönen parça",
    },
    reason:
      "Ein Bogen ist keine Feuerwaffe; außerdem die Federbedeutung auf Türkisch erklären.",
  },
  {
    word: "sele",
    previous: "183:ec27ae24",
    changes: {
      modern: "bisiklet veya motosikletin oturma yeri",
    },
    reason:
      "Die Umschreibung soll den Fahrrad- oder Motorradsitz vom Reittiersattel unterscheiden.",
  },
  {
    word: "ahlaklı",
    previous: "232:53f67b2f",
    changes: {
      meaning: "moralisch anständig / integer",
    },
    reason:
      "Sittsam verengt den Begriff auf ein enges oder veraltetes Anstandsideal.",
  },
  {
    word: "ailesel",
    previous: "247:4d30204a",
    changes: {
      meaning: "familienbezogen / familiär",
    },
    reason: "Familiär bedingt ist enger als das allgemeine familienbezogen.",
  },
  {
    word: "arz",
    previous: "234:d62dfb74",
    changes: {
      meaning: "Angebot / Darlegung",
      explanation:
        "Am Markt angebotene Waren oder Leistungen; in formeller Sprache auch das Vorbringen eines Anliegens.",
      modern: "piyasaya sunulan mal veya hizmet; bir konuyu saygıyla bildirme",
    },
    reason:
      "Die im gehobenen Erzählen häufige Bedeutung des Vorbringens fehlte.",
  },
  {
    word: "arzuhâl",
    previous: "227:25dce197",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die seltene historische Behördenbezeichnung ist ein klarer C1-Ausreißer.",
  },
  {
    word: "aşılama",
    previous: "238:e7cd6ef0",
    changes: {
      meaning: "Impfung / Veredelung / Vermittlung",
      explanation:
        "Verabreichen eines Impfstoffs; auch Veredeln einer Pflanze oder übertragen das Vermitteln einer Überzeugung.",
      modern:
        "aşı yapma; bitkiyi başka bir çeşitle birleştirme; bir düşünceyi benimsetme",
    },
    reason:
      "Die häufigen landwirtschaftlichen und übertragenen Bedeutungen fehlten.",
  },
  {
    word: "atak",
    previous: "218:5ed2c988",
    changes: {
      meaning: "unternehmungslustig / Angriff / Anfall",
      explanation:
        "Als Adjektiv entschlossen und rasch handelnd; als Nomen ein Angriff oder ein plötzlich auftretender Anfall.",
      modern: "girişken; saldırı veya nöbet",
    },
    reason:
      "Neben dem Adjektiv sind Angriff und Anfall wichtige selbstständige Bedeutungen.",
  },
  {
    word: "azimkâr",
    previous: "228:144310ff",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Seltene gehobene Bezeichnung statt allgemeinem B2-Grundwortschatz.",
  },
  {
    word: "bağlama",
    previous: "228:53beb5ab",
    changes: {
      meaning: "Binden / Bağlama (Langhalslaute)",
      explanation:
        "Vorgang des Bindens oder Verknüpfens; außerdem eine türkische gezupfte Langhalslaute.",
      modern: "birbirine tutturma; uzun saplı telli çalgı",
      related: "bağlamak · saz · müzik",
    },
    reason: "Die verbreitete Instrumentenbezeichnung fehlte.",
  },
  {
    word: "bahis",
    previous: "226:15b04247",
    changes: {
      meaning: "Thema / Wette",
      explanation:
        "Gegenstand einer Erörterung; auch eine Vereinbarung über einen Einsatz bei unterschiedlicher Einschätzung eines Ausgangs.",
      modern: "konu; sonucu önceden kestirmeye dayalı karşılıklı iddia",
    },
    reason: "Die häufige zweite Bedeutung Wette fehlte.",
  },
  {
    word: "bakışım",
    previous: "227:40e28e08",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Seltenes fachsprachliches Synonym für simetri.",
  },
  {
    word: "başatlık",
    previous: "230:163bb882",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gehobene abstrakte Fachbezeichnung statt häufigem B2-Lernwort.",
  },
  {
    word: "başlıksız",
    previous: "225:3fc146cc",
    changes: {
      modern: "başlığı veya eser adı bulunmayan",
    },
    reason:
      "Die türkische Umschreibung verwechselte fehlenden Titel mit fehlendem Namen.",
  },
  {
    word: "bilinmeyen",
    previous: "244:972e1355",
    changes: {
      meaning: "unbekannt / Unbekannte",
      explanation:
        "Noch nicht bekannt oder bestimmt; als Nomen etwas, dessen Wert oder Wesen noch festgestellt werden muss.",
      modern: "henüz tanınmayan veya ne olduğu belirlenmemiş olan",
    },
    reason:
      "Die Umschreibung war zirkulär und der Gloss schloss die Adjektivverwendung aus.",
  },
  {
    word: "boşalma",
    previous: "240:4c8d2ba4",
    changes: {
      explanation:
        "Vorgang, bei dem der Inhalt eines Raums oder Behälters herausgelangt und dieser leer wird.",
      modern: "içindekilerin dışarı çıkması",
    },
    reason:
      "Die Erklärung und Umschreibung beschrieben den Endzustand statt des Leerwerdens.",
  },
  {
    word: "böbürlenme",
    previous: "225:380272c",
    changes: {
      modern: "kendisini üstün göstererek övünme",
    },
    reason:
      "Bloßes övünme kann berechtigten Stolz bedeuten, böbürlenme ist überheblich.",
  },
  {
    word: "brüt",
    previous: "227:82eaa25a",
    changes: {
      modern: "kesinti yapılmadan önceki toplam",
    },
    reason: "Kesintisiz bedeutet unterbrechungslos; gemeint ist vor Abzügen.",
  },
  {
    word: "buruk",
    previous: "224:f06b5b5",
    changes: {
      meaning: "herb / wehmütig",
      explanation:
        "Herb zusammenziehend im Geschmack; übertragen von einer leisen Traurigkeit oder getrübten Freude geprägt.",
      modern: "ağızda büzülme duygusu veren; sevinci hüzünle karışık",
    },
    reason: "Neben dem Gefühl ist der herbe Geschmack eine zentrale Bedeutung.",
  },
  {
    word: "bütünleme",
    previous: "239:7758ea22",
    changes: {
      meaning: "Ergänzung / Nachprüfung",
      explanation:
        "Ergänzung zu einem vollständigen Ganzen; im Bildungswesen auch eine Prüfung nach einem nicht bestandenen Fach.",
      modern: "tamamlama; başarısız olunan dersin telafi sınavı",
    },
    reason: "Die besonders im Bildungsalltag häufige Nachprüfung fehlte.",
  },
  {
    word: "cinsiyetsiz",
    previous: "244:b0893a45",
    changes: {
      meaning: "geschlechtslos / geschlechtsneutral",
      explanation:
        "Ohne Geschlechtsmerkmale oder ohne Zuordnung zu einem bestimmten Geschlecht.",
      modern: "cinsiyet özelliği taşımayan veya bir cinsiyete bağlanmayan",
    },
    reason: "Geschlechtsneutral ist nur eine Teilbedeutung von geschlechtslos.",
  },
  {
    word: "dağıtıcı",
    previous: "235:1bcb5fb2",
    changes: {
      meaning: "verteilend / Verteiler",
      explanation:
        "Für das Verteilen zuständig; auch eine Person oder Vorrichtung, die etwas weitergibt.",
    },
    reason: "Verteilerisch ist kein natürlicher deutscher Lerngloss.",
  },
  {
    word: "darbe",
    previous: "237:edd79b0",
    changes: {
      meaning: "Schlag / Rückschlag / Staatsstreich",
      explanation:
        "Kräftiger Stoß oder Schlag, übertragen ein schwerer Schaden; politisch die rechtswidrige Übernahme der Staatsgewalt.",
      modern: "vuruş; ağır zarar; zorla yönetime el koyma",
    },
    reason: "Der konkrete Schlag und der übertragene Rückschlag fehlten.",
  },
  {
    word: "denek",
    previous: "248:67716139",
    changes: {
      meaning: "Versuchsperson / Versuchstier",
      modern: "üzerinde bilimsel araştırma yapılan insan veya hayvan",
    },
    reason:
      "Die Erklärung umfasste Tiere, der deutsche Gloss aber nur Menschen.",
  },
  {
    word: "deneme",
    previous: "232:2d3cb6d8",
    changes: {
      meaning: "Versuch / Essay",
      modern: "sınama; kişisel görüşleri işleyen kısa yazı",
    },
    reason:
      "Der Essay wird erklärt, fehlt aber in beiden kurzen Bedeutungsfeldern.",
  },
  {
    word: "deneycilik",
    previous: "243:25d324a",
    changes: {
      meaning: "Empirismus",
      explanation:
        "Erkenntnistheoretische Auffassung, nach der Wissen vor allem aus Erfahrung und Beobachtung gewonnen wird.",
      modern: "bilginin kaynağını deneyim ve gözlemde gören görüş",
      related: "deneyim · gözlem · bilgi",
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Der philosophische Empirismus wurde fälschlich zu Experimentierfreude verengt.",
  },
  {
    word: "devlet",
    previous: "243:7ee7b5ac",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Sehr häufiges allgemeines politisches Grundwort, kein gehobenes B2-Einzelwort.",
  },
  {
    word: "direniş",
    previous: "250:28cea432",
    changes: {
      meaning: "Widerstand",
      explanation:
        "Aktives Entgegenwirken gegen Druck, Unterdrückung oder eine als unrechtmäßig empfundene Maßnahme.",
      modern: "baskıya veya bir müdahaleye karşı koyma",
    },
    reason: "Widerstand muss weder eine Bewegung noch gemeinschaftlich sein.",
  },
  {
    word: "diriltme",
    previous: "248:f2c2cc2a",
    changes: {
      meaning: "Wiederbelebung / Auferweckung",
      explanation:
        "Erneutes Lebendigmachen; übertragen auch das Wiederbeleben einer Idee oder Tradition.",
      modern: "yeniden yaşama döndürme; yeniden işler kılma",
    },
    reason:
      "Der religiöse und konkrete Sinn des Lebendigmachens war hinter einer unklaren Abstraktion verborgen.",
  },
  {
    word: "dirilme",
    previous: "238:cad27ba",
    changes: {
      meaning: "Auferstehung / Wiederaufleben",
      explanation:
        "Erneutes Lebendigwerden nach dem Tod; übertragen auch das erneute Aufleben einer Sache.",
      modern: "yeniden yaşama dönme; yeniden canlanma",
    },
    reason:
      "Der in historischen und religiösen Texten wichtige Auferstehungssinn fehlte.",
  },
  {
    word: "dolayısıyla",
    previous: "232:58790266",
    changes: {
      meaning: "daher / folglich / wegen",
      explanation:
        "Leitet eine Folge ein; nach einem Nomen kann es den Grund im Sinn von wegen angeben.",
      modern: "bu nedenle; bir şey yüzünden",
    },
    reason: "Die häufige nachgestellte Bedeutung wegen fehlte.",
  },
  {
    word: "doluluk",
    previous: "234:3b9bf99e",
    changes: {
      meaning: "Gefülltsein / Auslastung",
      explanation:
        "Zustand des Vollseins; auch der Anteil des genutzten Platzes an einer verfügbaren Kapazität.",
      modern: "içinin dolu olması; kullanılan kapasitenin oranı",
    },
    reason:
      "Der Begriff bezeichnet allgemein Gefülltsein, nicht nur Auslastung.",
  },
  {
    word: "duygulanım",
    previous: "229:a29142df",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Spezialisierter psychologischer Fachbegriff.",
  },
  {
    word: "düşkün",
    previous: "225:21b95126",
    changes: {
      meaning: "hinfällig / hilfsbedürftig / stark zugetan",
      explanation:
        "Körperlich oder sozial geschwächt und auf Hilfe angewiesen; mit einer Ergänzung auch jemandem oder etwas stark zugetan.",
      modern: "güçsüz ve yardıma muhtaç; birine veya bir şeye çok bağlı",
    },
    reason: "Die wichtigen Bedeutungen hinfällig und hilfsbedürftig fehlten.",
  },
  {
    word: "düşkünlük",
    previous: "236:3b338eb0",
    changes: {
      meaning: "Hinfälligkeit / Hilfsbedürftigkeit / starke Neigung",
      explanation:
        "Geschwächter oder hilfsbedürftiger Zustand; außerdem eine ausgeprägte Bindung an jemanden oder etwas.",
      modern: "güçsüz ve yardıma muhtaç olma; aşırı bağlılık",
    },
    reason:
      "Der Eintrag erfasste nur starke Bindung, nicht Hinfälligkeit oder Hilfsbedürftigkeit.",
  },
  {
    word: "düşünüm",
    previous: "244:cd83088",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Seltener philosophischer Reflexionsbegriff.",
  },
  {
    word: "ebeveyn",
    previous: "225:2680bae",
    changes: {
      meaning: "Eltern / Elternteil",
      explanation:
        "Mutter und Vater eines Kindes; je nach Gebrauch auch eine einzelne Person in der Elternrolle.",
      modern: "anne ve baba; bağlama göre anne veya babadan biri",
    },
    reason:
      "Die Grundbedeutung Eltern wurde durch den alleinigen Singular verengt.",
  },
  {
    word: "efendi",
    previous: "237:8ed141a1",
    changes: {
      meaning: "Herr / höflich und gesittet",
      explanation:
        "Höfliche Anrede oder historischer Titel für einen Herrn; als Adjektiv respektvoll und gesittet im Umgang.",
      modern: "saygı bildiren unvan; kibar ve görgülü",
    },
    reason: "Der zentrale historische Herr- und Anredesinn fehlte.",
  },
  {
    word: "eğretileme",
    previous: "259:7c126760",
    changes: {
      meaning: "Metapher",
      explanation:
        "Bildlicher Ausdruck, bei dem eine Bezeichnung aufgrund einer Ähnlichkeit auf etwas anderes übertragen wird.",
    },
    reason:
      "Die eindeutige Fachbezeichnung Metapher erleichtert die Abgrenzung vom allgemeinen bildlichen Ausdruck.",
  },
  {
    word: "eğretilik",
    previous: "260:34bff738",
    changes: {
      meaning: "Vorläufigkeit / fehlender Halt",
      explanation:
        "Nur vorläufiger, nicht fest sitzender oder unpassend wirkender Zustand.",
      modern: "geçici, dayanıksız veya yerine tam oturmamış olma",
    },
    reason:
      "Der deutsche Gloss war unnatürlich und die Bedeutung unvollständig.",
  },
  {
    word: "ekonomiklik",
    previous: "266:af90748f",
    changes: {
      modern: "kaynakları verimli ve ölçülü kullanma",
    },
    reason:
      "Tutarlı bezeichnet innere Stimmigkeit statt wirtschaftlichen Mitteleinsatz.",
  },
  {
    word: "emrivaki",
    previous: "246:3ae0a0d1",
    changes: {
      modern: "karşı çıkma fırsatı bırakmadan bir işi olmuş gibi dayatma",
    },
    reason:
      "Die feste türkische Entsprechung wird zusammengeschrieben. Eine verständliche Umschreibung erläutert den Ausdruck statt nur ein weiteres schwieriges Wort zu nennen.",
  },
  {
    word: "eskime",
    previous: "231:6baf9cd0",
    changes: {
      meaning: "Altern / Abnutzung / Veralten",
      explanation:
        "Durch Zeit oder Gebrauch an Zustand, Nutzbarkeit oder Aktualität verlieren.",
      modern: "zamanla yıpranma veya güncelliğini yitirme",
    },
    reason:
      "Altern und Abnutzung sind zentrale konkrete Bedeutungen neben Veralten.",
  },
  {
    word: "eskimiş",
    previous: "222:fb3ed168",
    changes: {
      meaning: "abgenutzt / veraltet",
      explanation:
        "Durch längeren Gebrauch abgenutzt oder durch neuere Entwicklungen nicht mehr zeitgemäß.",
      modern: "kullanımla yıpranmış veya güncelliğini yitirmiş",
    },
    reason:
      "Die konkrete Abnutzung wurde durch die rein zeitliche Bedeutung ausgeschlossen.",
  },
  {
    word: "evcilleştirme",
    previous: "244:b3876ee3",
    changes: {
      meaning: "Zähmung / Domestizierung",
      explanation:
        "Tiere an Menschen gewöhnen oder über Generationen für ein Leben in menschlicher Haltung verändern.",
      modern: "hayvanları insanla yaşamaya alıştırma",
    },
    reason:
      "Die Erklärung schloss die gebräuchliche Gewöhnung einzelner Tiere an Menschen aus.",
  },
  {
    word: "eyalet",
    previous: "247:2f7f56f5",
    changes: {
      meaning: "Provinz / Bundesstaat",
      explanation:
        "Größere Verwaltungseinheit, etwa eine osmanische Provinz oder ein Gliedstaat eines föderalen Staats.",
      modern: "büyük yönetim bölgesi",
      related: "vilayet · federasyon · yönetim",
    },
    reason:
      "Die historische Provinz ist für Buchtexte wesentlich und fehlt bei der reinen Föderationsdefinition.",
  },
  {
    word: "fıkra",
    previous: "247:a856e6c1",
    changes: {
      meaning: "Witz / kurze Kolumne / Absatz",
      explanation:
        "Kurze humorvolle Erzählung; auch ein kurzer Meinungsbeitrag in einer Zeitung oder ein Absatz eines Gesetzesartikels.",
      modern:
        "güldürücü kısa anlatı; kısa gazete yazısı; bir maddenin alt bölümü",
    },
    reason:
      "Die rechtliche und journalistische Bedeutung fehlte in den kurzen Bedeutungsfeldern.",
  },
  {
    word: "fizibilite",
    previous: "267:17d2e63b",
    changes: {
      meaning: "Machbarkeit / Machbarkeitsstudie",
      explanation:
        "Praktische und wirtschaftliche Umsetzbarkeit eines Vorhabens; auch die Untersuchung dieser Umsetzbarkeit.",
      modern: "yapılabilirlik; bunu araştıran inceleme",
    },
    reason:
      "Fizibilite bezeichnet zunächst Machbarkeit, nicht ausschließlich deren Prüfung.",
  },
  {
    word: "gaf",
    previous: "248:4468ea46",
    changes: {
      meaning: "Fauxpas / Taktlosigkeit",
    },
    reason:
      "Fettnäpfchen ist das Risiko bzw. die Situation, nicht die unpassende Handlung selbst.",
  },
  {
    word: "gençleşme",
    previous: "235:aa94cf27",
    changes: {
      modern: "daha genç duruma gelme; gençlerin oranının artması",
    },
    reason:
      "Die türkische Umschreibung erfasste einen Zustand statt der Veränderung.",
  },
  {
    word: "girişkenlik",
    previous: "242:5df2170d",
    changes: {
      meaning: "Initiative / Kontaktfreude",
    },
    reason:
      "Kontaktfreude erfasst die ebenso zentrale Eigeninitiative bei Aufgaben nicht.",
  },
  {
    word: "göreli",
    previous: "234:6e1c88f9",
    changes: {
      meaning: "relativ",
    },
    reason: "Der deutsche Kurzgloss war unnötig umständlich.",
  },
  {
    word: "görelilik",
    previous: "230:2662336a",
    changes: {
      modern: "bir ölçüte veya bakış açısına göre değişme",
    },
    reason:
      "Bağıntılı olma bezeichnet Abhängigkeit zu allgemein statt Relativität zu einem Maßstab.",
  },
  {
    word: "görgüsüz",
    previous: "258:c7c46e8a",
    changes: {
      meaning: "ungehobelt / ohne Umgangsformen",
    },
    reason:
      "Ungebildet verwechselt fehlende Umgangsformen mit fehlender Bildung.",
  },
  {
    word: "gösteriş",
    previous: "222:8ef6b754",
    changes: {
      meaning: "Prahlerei / demonstrativer Aufwand",
    },
    reason:
      "Prunk erfasst das demonstrative Prahlen und die Selbstdarstellung nur unzureichend.",
  },
  {
    word: "gösteri",
    previous: "239:c5ea63f5",
    changes: {
      meaning: "Darbietung / Demonstration",
      modern: "seyirlik sunum; toplu görüş bildirme",
    },
    reason:
      "Die Erklärung nennt die Demonstration, die kurzen Bedeutungsfelder unterschlagen sie.",
  },
  {
    word: "gravür",
    previous: "223:5d43aa0",
    changes: {
      meaning: "Gravur / Stich",
      explanation:
        "Durch Einritzen einer Platte gestaltete Darstellung; auch ein von einer solchen Platte hergestellter Druck.",
      modern: "kazıma yoluyla hazırlanan resim veya ondan alınan baskı",
    },
    reason:
      "Neben dem Eingravierten gehört der davon angefertigte Druck zur üblichen Bedeutung.",
  },
  {
    word: "güvenlikçi",
    previous: "242:b22eafb0",
    changes: {
      meaning: "Sicherheitsmitarbeiter / sicherheitsorientiert",
      explanation:
        "Als Nomen eine Person im Sicherheitsdienst; als Adjektiv besonders auf Sicherheitsmaßnahmen ausgerichtet.",
      modern: "güvenlik görevlisi; güvenliği öne çıkaran",
    },
    reason: "Die ebenfalls häufige politische Adjektivverwendung fehlte.",
  },
  {
    word: "güvensizlik",
    previous: "226:fea91ad8",
    changes: {
      meaning: "Misstrauen / Unsicherheit",
      modern: "güven duymama veya kendini emniyette hissetmeme",
    },
    reason:
      "Die Erklärung nennt Unsicherheit, die kurzen Bedeutungsfelder nur Misstrauen.",
  },
  {
    word: "hararet",
    previous: "225:b4815ede",
    changes: {
      meaning: "Hitze / Heftigkeit",
      modern: "yüksek sıcaklık; coşkunluk",
    },
    reason: "Die konkrete Wärmebedeutung fehlte im Kurzgloss.",
  },
  {
    word: "hararetli",
    previous: "217:44b78c1d",
    changes: {
      meaning: "heiß / hitzig",
      explanation:
        "Eine hohe Temperatur aufweisend; übertragen mit großer Leidenschaft oder Erregung verbunden.",
      modern: "sıcak; ateşli ve coşkulu",
    },
    reason: "Die konkrete Temperaturbedeutung fehlte.",
  },
  {
    word: "has",
    previous: "220:3ece504c",
    changes: {
      meaning: "eigen / rein / echt",
      explanation:
        "Einer Person oder Sache in besonderer Weise zugehörig; auch rein, unverfälscht oder von besonderer Güte.",
      modern: "birine veya bir şeye özgü; saf ve katışıksız",
    },
    reason:
      "Der deutsche Gloss war unnatürlich und der häufige Reinheitssinn fehlte.",
  },
  {
    word: "hayran",
    previous: "220:834e969",
    changes: {
      meaning: "bewundernd / Bewunderer",
      explanation:
        "Von starker Bewunderung erfüllt; als Nomen eine Person, die jemanden oder etwas besonders hoch schätzt.",
      modern: "birini veya bir şeyi büyük bir beğeniyle izleyen kişi",
    },
    reason: "Der sehr gebräuchliche nominale Bewunderer- bzw. Fan-Sinn fehlte.",
  },
  {
    word: "hazırlıklı",
    previous: "232:b499a438",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Alltägliches häufiges Adjektiv für vorbereitet.",
  },
  {
    word: "hekim",
    previous: "217:e18e8654",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Häufige allgemeine Berufsbezeichnung, für die Leselernstufe B1 passend.",
  },
  {
    word: "his",
    previous: "212:82888789",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Häufiger allgemeiner Begriff für Gefühl und Empfindung.",
  },
  {
    word: "iddialaşma",
    previous: "241:c0e5061e",
    changes: {
      meaning: "Streit um Behauptungen / Wetten",
      explanation:
        "Gegenseitig auf unterschiedlichen Behauptungen bestehen oder über deren Ausgang eine Wette eingehen.",
      modern: "bir konuda karşılıklı iddiada bulunma veya bahse girme",
    },
    reason:
      "Wetteifer ist nicht dasselbe wie gegenseitiges Behaupten oder Eingehen einer Wette.",
  },
  {
    word: "idealist",
    previous: "231:855e0b81",
    changes: {
      modern: "yüksek amaç ve değerlere bağlı",
    },
    reason:
      "Ülkücü kann eine spezifische politische Zuschreibung nahelegen; eine neutrale Erklärung ist geeigneter.",
  },
  {
    word: "iktisat",
    previous: "263:930c2bf4",
    changes: {
      meaning: "Wirtschaft / Volkswirtschaftslehre / Sparsamkeit",
      explanation:
        "Wirtschaft und ihre wissenschaftliche Untersuchung; auch sparsamer Umgang mit Geld oder anderen Mitteln.",
      modern: "ekonomi; kaynakları tutumlu kullanma",
    },
    reason:
      "Der Begriff umfasst auch Wirtschaft und Sparsamkeit, besonders in gehobenen Buchtexten.",
  },
  {
    word: "ilgisizlik",
    previous: "232:7f47f047",
    changes: {
      modern: "ilgi veya özen göstermeme",
    },
    reason:
      "Alakasızlık kann sachliche Zusammenhanglosigkeit meinen statt fehlender Anteilnahme.",
  },
  {
    word: "inisiyatif",
    previous: "248:ff488c26",
    changes: {
      meaning: "Initiative / eigener Entscheidungsspielraum",
      explanation:
        "Selbstständiges Entscheiden und Handeln; auch die Befugnis, ohne einzelne Vorgaben zu entscheiden.",
      modern:
        "kendi başına karar verme ve harekete geçme yeteneği veya yetkisi",
    },
    reason: "Die Umschreibung war auf zeitliches Zuvorkommen beschränkt.",
  },
  {
    word: "inkârcı",
    previous: "240:74f577b5",
    changes: {
      meaning: "leugnend / Leugner",
      explanation:
        "Eine Behauptung oder Tatsache zurückweisend; als Nomen eine Person, die etwas leugnet.",
      modern: "bir iddiayı veya gerçeği kabul etmeyen",
    },
    reason:
      "Leugnen setzt nicht voraus, dass ein Vorwurf tatsächlich offenkundig wahr ist.",
  },
  {
    word: "insanlık",
    previous: "236:8f59e1b2",
    changes: {
      meaning: "Menschheit / Menschlichkeit",
      modern: "insanların bütünü; insana yaraşır merhametli davranış",
    },
    reason:
      "Menschlichkeit wird erklärt, fehlt aber im deutschen und türkischen Kurzfeld.",
  },
  {
    word: "isabet",
    previous: "243:50e7e6e0",
    changes: {
      meaning: "Treffer / Richtigkeit",
      explanation:
        "Das Treffen eines Ziels; außerdem die Richtigkeit oder Angemessenheit einer Einschätzung.",
      modern: "hedefe değme; yerinde ve doğru olma",
    },
    reason:
      "Der konkrete Treffer ist eine zentrale Bedeutung, besonders in geschichtlichen Erzählungen.",
  },
  {
    word: "isabetli",
    previous: "228:c46aebe8",
    changes: {
      meaning: "treffend / zutreffend",
      explanation:
        "Ein Ziel treffend oder in einer Einschätzung richtig und angemessen.",
    },
    reason: "Die Erklärung schloss den konkreten Treffer aus.",
  },
  {
    word: "isabetsiz",
    previous: "226:4c3d5d88",
    changes: {
      meaning: "danebenliegend / unzutreffend",
      explanation:
        "Ein Ziel verfehlend oder in einer Einschätzung nicht richtig und angemessen.",
    },
    reason: "Die Erklärung schloss das Verfehlen eines konkreten Ziels aus.",
  },
  {
    word: "iskânlı",
    previous: "216:51a2f490",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Seltener verwaltungs- und siedlungsgeschichtlicher Ausdruck.",
  },
  {
    word: "istifa",
    previous: "237:9a89d814",
    changes: {
      meaning: "Rücktritt / Eigenkündigung",
    },
    reason:
      "Der Ausstieg aus einem normalen Arbeitsverhältnis ist eher Eigenkündigung als politischer Rücktritt.",
  },
  {
    word: "karalama",
    previous: "227:c252e991",
    changes: {
      meaning: "Kritzeln / Verunglimpfung",
      explanation:
        "Flüchtiges oder ungeordnetes Schreiben und Zeichnen; auch das Schädigen des Rufs anderer durch abwertende Behauptungen.",
      modern: "gelişigüzel yazıp çizme; birini kötüleme",
    },
    reason: "Das alltägliche Kritzeln als zentrale konkrete Bedeutung fehlte.",
  },
  {
    word: "karışma",
    previous: "240:3d6b0687",
    changes: {
      meaning: "Vermischung / Einmischung",
      explanation:
        "Vorgang, bei dem sich Dinge vermischen; auch das Eingreifen in fremde Angelegenheiten.",
      modern: "birbirine geçme; başkasının işine müdahale",
    },
    reason: "Die konkrete Vermischung wurde ausgeschlossen.",
  },
  {
    word: "katı",
    previous: "222:9eb128b1",
    changes: {
      meaning: "fest / hart / streng",
      explanation:
        "Als Stoff nicht flüssig oder gasförmig; auch hart und wenig nachgiebig oder im Verhalten sehr streng.",
      modern: "sıvı ya da gaz olmayan; sert; davranışta esnek olmayan",
    },
    reason:
      "Die häufige Stoffeigenschaft fest fehlte hinter der übertragenen Starrheit.",
  },
  {
    word: "katılma",
    previous: "231:78e3c1f4",
    changes: {
      meaning: "Teilnahme / Zustimmung",
      explanation:
        "Sich einer Gruppe oder Tätigkeit anschließen; auch einer Auffassung zustimmen.",
      modern: "bir işe veya topluluğa dâhil olma; bir görüşü benimseme",
    },
    reason:
      "Neben Teilnahme sind Hinzukommen und Zustimmung häufige Bedeutungen.",
  },
  {
    word: "kavramsallaştırma",
    previous: "251:6b141530",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Spezialisierter akademischer Begriff der Begriffsbildung.",
  },
  {
    word: "kayıtsız",
    previous: "232:27d4d5f1",
    changes: {
      meaning: "gleichgültig / unregistriert",
      explanation:
        "Ohne amtlichen oder schriftlichen Eintrag; übertragen ohne erkennbare Anteilnahme.",
      modern: "kaydı bulunmayan; ilgi göstermeyen",
    },
    reason: "Die konkrete Bedeutung ohne Registrierung fehlte.",
  },
  {
    word: "kesinti",
    previous: "232:b0138144",
    changes: {
      meaning: "Unterbrechung / Abzug",
      modern: "ara verme; bir tutardan düşülen miktar",
    },
    reason:
      "Der finanzielle Abzug wird erklärt, fehlt aber in den kurzen Bedeutungsfeldern.",
  },
  {
    word: "keskinlik",
    previous: "225:a6875fb0",
    changes: {
      explanation:
        "Gute Schneidfähigkeit einer Klinge; auch deutliche Ausprägung einer Kontur, Wahrnehmung oder Aussage.",
      modern: "iyi kesme özelliği; belirginlik",
    },
    reason:
      "Die zentrale konkrete Schneidkraft fehlte in der Erklärung und der Umschreibung.",
  },
  {
    word: "kod",
    previous: "220:fc6dc919",
    changes: {
      modern:
        "bilgiyi göstermeye veya işlem yaptırmaya yarayan işaret ve komut düzeni",
    },
    reason: "Ein Code ist nicht zwangsläufig verschlüsselt.",
  },
  {
    word: "kodlama",
    previous: "241:f21ca2db",
    changes: {
      modern: "bilgiyi belirli işaretlerle veya komutlarla ifade etme",
    },
    reason: "Kodla gösterme erklärt den Begriff nur zirkulär.",
  },
  {
    word: "komedi",
    previous: "222:8aaa5766",
    changes: {
      meaning: "Komödie",
      explanation:
        "Film, Bühnenstück oder anderes Werk, das mit komischen Situationen und Figuren unterhält.",
    },
    reason:
      "Komedi ist die Komödie bzw. das Komödiengenre, nicht die Eigenschaft Komik.",
  },
  {
    word: "konjonktür",
    previous: "251:98f35201",
    changes: {
      meaning: "Konjunktur / Gesamtlage",
      modern: "belirli bir dönemdeki genel koşullar",
    },
    reason:
      "Der türkische Begriff umfasst die politische Gesamtlage, nicht nur die wirtschaftliche Konjunktur.",
  },
  {
    word: "konsültasyon",
    previous: "256:b975ee8d",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Spezialisierte Bezeichnung für ärztliche oder fachliche Beratung.",
  },
  {
    word: "korkusuzluk",
    previous: "227:8d79c9c",
    changes: {
      explanation:
        "Fehlen von Furcht oder große Unerschrockenheit angesichts einer Gefahr.",
    },
    reason: "Handeln trotz Furcht beschreibt Mut, nicht Furchtlosigkeit.",
  },
  {
    word: "kötücül",
    previous: "222:2fe69122",
    changes: {
      meaning: "bösartig / böswillig",
      explanation:
        "Auf Schädigung gerichtet; in der Medizin auch für gefährlich fortschreitende Krankheiten oder Tumoren verwendet.",
      modern: "kötülük isteyen; tıpta tehlikeli biçimde ilerleyen",
    },
    reason: "Die medizinisch übliche Bedeutung bösartig fehlte.",
  },
  {
    word: "körelme",
    previous: "241:8372f0ed",
    changes: {
      modern: "keskinliğini, yeteneğini veya duyarlığını yitirme",
    },
    reason:
      "Die Umschreibung war auf Empfindsamkeit beschränkt, obwohl auch Schneiden und Fähigkeiten abstumpfen.",
  },
  {
    word: "metin",
    previous: "225:8d2b0473",
    changes: {
      meaning: "Text / standhaft",
      explanation:
        "Zusammenhängende sprachliche Darstellung; als gehobenes Adjektiv auch innerlich stark und standhaft.",
      modern: "yazılı veya sözlü anlatım bütünü; güçlü ve dayanıklı",
      difficulty: 1,
      note: "Häufig als „Text“; das Adjektiv „standhaft“ ist gehobener. Die passende Bedeutung ergibt sich aus dem Buchsatz.",
    },
    reason:
      "Der häufige Nomen-Sinn und der gehobene Adjektiv-Sinn müssen erkennbar getrennt werden.",
  },
  {
    word: "nafile",
    previous: "211:d359a3fd",
    changes: {
      meaning: "vergeblich / freiwillige Zusatzandacht",
      explanation:
        "Ohne den erhofften Nutzen; im religiösen Sprachgebrauch auch eine freiwillige, nicht vorgeschriebene Andacht.",
      modern: "boşuna; farz veya vacip olmayan ibadet",
      related: "boşuna · ibadet · namaz",
    },
    reason:
      "Die im religiösen Buchtext wichtige freiwillige Zusatzandacht fehlte.",
  },
  {
    word: "onurlu",
    previous: "208:52c158be",
    changes: {
      meaning: "ehrenhaft / würdevoll",
    },
    reason:
      "Ehrenvoll beschreibt oft ein Ereignis; für Personen passen ehrenhaft und würdevoll.",
  },
  {
    word: "onur",
    previous: "227:66254a61",
    changes: {
      meaning: "Würde / Ehre",
    },
    reason: "Ehre ist neben Würde eine zentrale gebräuchliche Entsprechung.",
  },
  {
    word: "özdeşleşme",
    previous: "246:2bf2f123",
    changes: {
      explanation:
        "Sich mit einer Person, Gruppe oder deren Sichtweise innerlich gleichsetzen.",
      modern:
        "kendini bir kişi veya topluluğun yerine koyarak onun duygu ve düşüncelerini paylaşma",
    },
    reason:
      "Starke Verbundenheit allein erklärt die identifikatorische Gleichsetzung nicht.",
  },
  {
    word: "özgü",
    previous: "217:2d988ec3",
    changes: {
      meaning: "eigen / charakteristisch für",
    },
    reason: "Der deutsche Kurzgloss war unnatürlich.",
  },
  {
    word: "resmî",
    previous: "245:239e0ab2",
    changes: {
      meaning: "amtlich / offiziell / förmlich",
      explanation:
        "Von einer zuständigen Stelle ausgegeben oder anerkannt; auch den formellen Regeln eines Anlasses entsprechend.",
      modern: "devlet veya yetkili makamla ilgili; usule uygun",
    },
    reason: "Der formelle Umgangssinn fehlte neben amtlich.",
  },
  {
    word: "sözleşmeli",
    previous: "259:63e3d7e0",
    changes: {
      meaning: "vertraglich gebunden / vertraglich beschäftigt",
      explanation:
        "Auf einem Vertrag beruhend oder durch einen Vertrag gebunden; besonders bei Beschäftigungsverhältnissen.",
    },
    reason: "Vertragliche Bindung ist nicht auf Beschäftigung beschränkt.",
  },
  {
    word: "şeffaflık",
    previous: "229:8cd6023c",
    changes: {
      explanation:
        "Eigenschaft, Licht und den Blick hindurchzulassen; übertragen die Nachvollziehbarkeit von Entscheidungen und Abläufen.",
      modern: "içinin görülebilmesi; yapılan işlerin açık ve anlaşılır olması",
    },
    reason:
      "Die konkrete Durchsichtigkeit fehlte hinter der übertragenen Transparenz.",
  },
  {
    word: "verimsiz",
    previous: "236:ffc3e05",
    changes: {
      meaning: "unergiebig / unproduktiv / ineffizient",
      explanation:
        "Wenig nutzbaren Ertrag hervorbringend; bei Arbeitsweisen auch geringe Ergebnisse im Verhältnis zum Aufwand erzielend.",
      modern: "az ürün veya sonuç veren",
    },
    reason:
      "Geringer Ertrag bedeutet nicht ausschließlich ineffizientes Verhältnis zum Aufwand.",
  },
  {
    word: "verimsizlik",
    previous: "235:f0f8c398",
    changes: {
      meaning: "geringer Ertrag / Ineffizienz",
      explanation:
        "Zustand, in dem wenig nutzbarer Ertrag entsteht, insbesondere im Verhältnis zu den eingesetzten Mitteln.",
    },
    reason: "Geringer Ertrag fehlt neben der engeren Ineffizienz.",
  },
  {
    word: "yakınsama",
    previous: "243:9b5a80e6",
    changes: {
      difficulty: 3,
      note: "Gehobener, fachlicher oder historischer Sprachgebrauch. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Spezialisierter mathematischer und wissenschaftlicher Begriff.",
  },
  {
    word: "yansıtma",
    previous: "239:e4670eee",
    changes: {
      meaning: "Spiegelung / Darstellung",
      explanation:
        "Zurückwerfen von Licht oder Schall; auch das Sichtbarmachen von Eigenschaften oder Eindrücken in einer Darstellung.",
      modern: "ışığı veya sesi geri gönderme; bir durumu gösterme",
    },
    reason: "Die konkrete Reflexion von Licht und Schall fehlte.",
  },
  {
    word: "yansıma",
    previous: "216:f79abf80",
    changes: {
      meaning: "Spiegelung / Reflexion / Auswirkung",
      explanation:
        "Zurückwerfen von Licht oder Schall an einer Oberfläche; übertragen die wahrnehmbare Auswirkung eines Vorgangs.",
      modern: "ışık ya da sesin bir yüzeyden geri dönmesi; bir olayın etkisi",
    },
    reason:
      "Widerhall verengt den Begriff auf ein akustisches Bild und unterschlägt die Reflexion.",
  },
  {
    word: "yürütme",
    previous: "229:f95a8ce0",
    changes: {
      meaning: "Durchführung / Exekutive",
      explanation:
        "Organisiertes Durchführen oder Fortführen einer Aufgabe; politisch die Staatsgewalt, die Gesetze praktisch umsetzt.",
      modern: "bir işi sürdürme veya uygulama; devletin uygulayıcı gücü",
    },
    reason:
      "Das allgemeine Durchführen einer Aufgabe fehlte hinter der politischen Exekutive.",
  },
  {
    word: "yayıncı",
    previous: "221:c6ef6772",
    changes: {
      meaning: "Verleger / Sender",
      explanation:
        "Person oder Organisation, die Bücher, andere Werke oder Rundfunkprogramme öffentlich zugänglich macht.",
      modern: "eserleri veya programları kamuya sunan kişi ya da kuruluş",
    },
    reason: "Verleger verengt den Begriff und schließt Rundfunkanbieter aus.",
  },
  {
    word: "yayıncılık",
    previous: "240:170bea1b",
    changes: {
      meaning: "Verlagswesen / Rundfunk",
      explanation:
        "Tätigkeit des Veröffentlichens von Büchern, anderen Werken oder Rundfunkprogrammen.",
      modern: "eserleri veya programları kamuya sunma işi",
    },
    reason: "Der Begriff umfasst auch Rundfunk, nicht nur das Verlagswesen.",
  },
  {
    word: "zorlayıcılık",
    previous: "251:6c6af8f1",
    changes: {
      meaning: "Zwangswirkung / hohe Anforderung",
      explanation:
        "Eigenschaft, Druck auszuüben oder von jemandem besonders große Anstrengung zu verlangen.",
      modern: "baskı yapma veya büyük çaba gerektirme niteliği",
    },
    reason:
      "Neben Zwang ist die häufige Bedeutung hohe Anforderungen stellend wichtig.",
  },
  {
    word: "gayriresmî",
    previous: "230:9e6e4ac1",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliches Adjektiv in allgemeinen Nachrichten und Sachtexten.",
  },
  {
    word: "resmiyet",
    previous: "255:34237a8d",
    changes: {
      modern: "resmî nitelik; ciddi ve mesafeli davranış",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher abstrakter Begriff; Umschreibung ergänzt die Förmlichkeit im Umgang.",
  },
  {
    word: "yetkilendirme",
    previous: "245:729ba364",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher formeller Verwaltungs- und Arbeitswortschatz.",
  },
  {
    word: "tekel",
    previous: "241:938507ee",
    changes: {
      modern: "bir alanın tek elde tutulması; tek satıcılık",
    },
    reason:
      "Türkische Umschreibung ergänzt allgemeine Alleinverfügung neben Handelsmonopol.",
  },
  {
    word: "kaymakamlık",
    previous: "275:83f70f23",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliche heutige Verwaltungsbezeichnung, keine historische Amtsbezeichnung.",
  },
  {
    word: "valilik",
    previous: "237:9a326fc6",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche heutige Verwaltungsbezeichnung.",
  },
  {
    word: "mütebahhir",
    previous: "254:540f0d22",
    changes: {
      modern: "bir alanda çok geniş ve derin bilgisi olan",
    },
    reason: "Natürliche türkische Umschreibung statt ungewöhnlicher Wortfolge.",
  },
  {
    word: "maaşlı",
    previous: "242:41e0289",
    changes: {
      meaning: "mit festem Gehalt / angestellt",
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Alltäglicher Arbeitswortschatz; besoldet wäre unnötig auf Beamte verengt.",
  },
  {
    word: "ücretli",
    previous: "254:b8399411",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Sehr gebräuchlicher Alltagsbegriff für kostenpflichtig beziehungsweise entlohnt.",
  },
  {
    word: "haraç",
    previous: "247:365c66f",
    changes: {
      modern: "tarihî vergi veya zorla alınan para",
    },
    reason:
      "Die türkische Umschreibung verlor die historische Abgabenbedeutung.",
  },
  {
    word: "vekil",
    previous: "279:19506581",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verbreiteter allgemeiner Begriff für Vertreter und Bevollmächtigte.",
  },
  {
    word: "tuyuğ",
    previous: "282:36219d23",
    changes: {
      modern: "aruz ölçüsüyle yazılan dört dizeli klasik şiir",
    },
    reason:
      "Eski Türkçe beschreibt eine Sprachstufe und trifft die Gedichtform nicht genau.",
  },
  {
    word: "müstezat",
    previous: "264:44b9b4cd",
    changes: {
      modern: "uzun dizelere kısa dizeler eklenen şiir",
    },
    reason: "Natürliche türkische Erläuterung der Zusatzverse.",
  },
  {
    word: "hüsnütalil",
    previous: "298:a1249b32",
    changes: {
      modern: "bir olayı gerçek dışı güzel bir nedene bağlama",
    },
    reason:
      "Die dichterisch erfundene Begründung fehlte in der türkischen Umschreibung.",
  },
  {
    word: "taklit",
    previous: "236:c00b5b58",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Begriff für Nachahmung.",
  },
  {
    word: "taklitçi",
    previous: "266:aa4ca80e",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Ausdruck, keine seltene Fachbedeutung.",
  },
  {
    word: "taklitçilik",
    previous: "279:a0e99c53",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Regelmäßige gebräuchliche Ableitung von taklit im allgemeinen Sprachgebrauch.",
  },
  {
    word: "müdebbir",
    previous: "258:3f78774",
    changes: {
      modern: "sonuçları düşünerek zamanında önlem alan",
    },
    reason: "Önlemli davranan ist keine natürliche klare Umschreibung.",
  },
  {
    word: "intikam",
    previous: "231:95158913",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches Wort für Rache in Erzählungen und Alltagssprache.",
  },
  {
    word: "imtihan",
    previous: "265:e1b4b36a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche formelle und übertragene Bezeichnung für Prüfung.",
  },
  {
    word: "imrenme",
    previous: "241:a413a0e",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Gefühlsbegriff, kein seltener Fachausdruck.",
  },
  {
    word: "nezih",
    previous: "248:f26bef9a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliches beschreibendes Adjektiv für gepflegte Orte und anständiges Verhalten.",
  },
  {
    word: "nüfuzlu",
    previous: "240:6b8adfc9",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher formeller Ausdruck für einflussreich.",
  },
  {
    word: "numune",
    previous: "257:6fdf79f9",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verbreiteter Ausdruck für Muster und Probe in allgemeinen Sachtexten.",
  },
  {
    word: "içselleştirme",
    previous: "259:87139590",
    changes: {
      modern: "düşünce ve değerleri benimseyip kendi tutumuna katma",
    },
    reason: "Benliğe katma ist zu unbestimmt für Verinnerlichung.",
  },
  {
    word: "şeyleştirme",
    previous: "275:1da591ae",
    changes: {
      modern: "insanı veya ilişkileri nesne gibi görme",
    },
    reason: "Erklärt den Fachbegriff ohne das bedeutungsarme şeye indirgeme.",
  },
  {
    word: "kırılganlık",
    previous: "291:a0e671a6",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verbreiteter abstrakter Begriff für Fragilität und Verletzlichkeit.",
  },
  {
    word: "kırılgan",
    previous: "258:497f4e55",
    changes: {
      modern: "kolay kırılan veya incinen",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die türkische Umschreibung unterschlug die körperliche Zerbrechlichkeit; gebräuchliches Adjektiv.",
  },
  {
    word: "tabakalaşma",
    previous: "292:48e101ed",
    changes: {
      meaning: "Schichtenbildung / soziale Schichtung",
      explanation:
        "Bildung voneinander abgegrenzter Schichten, etwa in Materialien oder in einer Gesellschaft.",
      modern: "katmanlara veya toplumsal gruplara ayrılma",
    },
    reason:
      "Nicht nur gesellschaftliche Schichtung, sondern auch allgemeine Schichtenbildung.",
  },
  {
    word: "tabaka",
    previous: "242:559df8ce",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Häufiger allgemeiner Begriff für eine Schicht oder Materiallage.",
  },
  {
    word: "mahrumiyet",
    previous: "255:7e709b5b",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches abstraktes Wort für Entbehrung und Mangel.",
  },
  {
    word: "yoksullaşma",
    previous: "247:dc3c0be4",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher Begriff der allgemeinen Berichterstattung für Verarmung.",
  },
  {
    word: "evrensel",
    previous: "259:a3b671a7",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Häufiges allgemeines Adjektiv für universell und allgemeingültig.",
  },
  {
    word: "tümden",
    previous: "255:cb904917",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Allgemein gebräuchliches Adverb für völlig.",
  },
  {
    word: "nedensel",
    previous: "245:ebe717ce",
    changes: {
      modern: "neden-sonuç ilişkisine dayanan",
    },
    reason: "Natürliche grammatische türkische Umschreibung.",
  },
  {
    word: "indirgemecilik",
    previous: "298:e480872f",
    changes: {
      modern: "karmaşık olguları daha basit unsurlarla açıklama",
    },
    reason:
      "Reduktionismus ist nicht zwingend eine Erklärung durch genau einen Faktor.",
  },
  {
    word: "indirgemeci",
    previous: "288:f99f4a76",
    changes: {
      modern: "karmaşık olguları basit unsurlara indirgeyen",
    },
    reason: "Die türkische Umschreibung war auf einen einzigen Faktor verengt.",
  },
  {
    word: "cumhuriyetçi",
    previous: "258:570aab82",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches Adjektiv des allgemeinen politischen Wortschatzes.",
  },
  {
    word: "özgürlükçü",
    previous: "250:affdd37a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreitete politische und gesellschaftliche Charakterisierung.",
  },
  {
    word: "tutuculuk",
    previous: "279:d5728d01",
    changes: {
      modern: "geleneksel düzeni koruma ve değişime mesafeli olma",
    },
    reason:
      "Değişime karşı bağlılık ist missverständlich und keine natürliche Definition von Konservatismus.",
  },
  {
    word: "muhafazakârlık",
    previous: "292:baafb966",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Häufiger Grundbegriff politischer Sachtexte.",
  },
  {
    word: "ilerici",
    previous: "287:f02d560b",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche politische und gesellschaftliche Charakterisierung.",
  },
  {
    word: "gerici",
    previous: "270:177b3ed2",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher politischer Ausdruck, kein seltenes Fachwort.",
  },
  {
    word: "revizyon",
    previous: "275:cbb60783",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Arbeits- und Sachtextbegriff für Überarbeitung.",
  },
  {
    word: "revizyonist",
    previous: "278:5f8a66b1",
    changes: {
      modern: "yerleşik görüş veya düzeni değiştirmeyi savunan",
    },
    reason:
      "Yeniden gözden geçirmeci ist unnatürlich und erklärt den Begriff unzureichend.",
  },
  {
    word: "avlu",
    previous: "242:423bfcd5",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Konkreter gebräuchlicher Begriff für Innenhof.",
  },
  {
    word: "sütun",
    previous: "258:6cc1c273",
    changes: {
      modern: "dikey destek veya yazı bölümü",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die türkische Umschreibung verlor die Textspalte; allgemeiner Wortschatz statt seltenes Fachwort.",
  },
  {
    word: "sütunlu",
    previous: "252:1a2b703c",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Durchsichtige gebräuchliche Ableitung des allgemeinen Begriffs sütun.",
  },
  {
    word: "nakış",
    previous: "251:99592902",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Begriff für Stickerei und Muster.",
  },
  {
    word: "hat",
    previous: "266:bff1547c",
    changes: {
      meaning: "Linie / Verbindung / Kalligrafie",
      explanation:
        "Linie oder Verbindung, etwa im Verkehr oder bei Telefonen; außerdem die Kunst der schönen Schrift.",
      modern: "çizgi veya bağlantı; güzel yazı sanatı",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die wichtige alltägliche Verbindungsbedeutung fehlte; der Gesamtbegriff ist nicht nur kalligrafischer Fachwortschatz.",
  },
  {
    word: "müze",
    previous: "270:1c1b81b2",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr gebräuchlicher konkreter Alltags- und Reisewortschatz.",
  },
  {
    word: "arkeolojik",
    previous: "264:8d482397",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliches Adjektiv in allgemeinen Kultur- und Nachrichtentexten.",
  },
  {
    word: "arkeolog",
    previous: "260:d3834dc8",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Geläufige Berufsbezeichnung des allgemeinen Bildungswortschatzes.",
  },
  {
    word: "kazı",
    previous: "251:af1518eb",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Ausdruck für Grabung und Erdarbeiten.",
  },
  {
    word: "mühür",
    previous: "254:658f0b33",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Ausdruck für Siegel und Stempel.",
  },
  {
    word: "mühürlü",
    previous: "251:be2b3ed0",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche durchsichtige Ableitung für versiegelt.",
  },
  {
    word: "mühürleme",
    previous: "265:77df8d0c",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher formeller Ausdruck für Versiegelung.",
  },
  {
    word: "örf",
    previous: "271:7614a65b",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verbreiteter kultureller Grundbegriff für Brauch und Gewohnheitsrecht.",
  },
  {
    word: "töre",
    previous: "266:9d9e178a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreiteter kultureller Grundbegriff für überlieferte Sitten.",
  },
  {
    word: "görenek",
    previous: "274:9e359a8f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Begriff für Bräuche.",
  },
  {
    word: "gösterilen",
    previous: "260:13ead983",
    changes: {
      meaning: "Gezeigtes / Signifikat",
      explanation:
        "Das, was gezeigt wird; in der Sprachwissenschaft die begriffliche Inhaltsseite eines Zeichens.",
      modern: "görünür kılınan şey; işaretin kavram yanı",
    },
    reason:
      "Neben der Fachbedeutung Signifikat existiert die allgemeine Partizipbedeutung das Gezeigte.",
  },
  {
    word: "edimsel",
    previous: "301:d1318e99",
    changes: {
      meaning: "wirklich / verwirklicht / performativ",
    },
    reason:
      "Aktuell kann fälschlich als zeitlich gegenwärtig verstanden werden; gemeint ist tatsächlich verwirklicht.",
  },
  {
    word: "etnoloji",
    previous: "274:dc049d9",
    changes: {
      modern: "toplulukların kültürlerini karşılaştıran bilim",
    },
    reason:
      "Halk bilimi bezeichnet üblicherweise Folkloristik und erklärt Ethnologie hier ungenau.",
  },
  {
    word: "basmakalıp",
    previous: "248:67c8053",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche allgemeine Charakterisierung für schablonenhaft.",
  },
  {
    word: "klişe",
    previous: "255:5e565cca",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Häufiger allgemeiner Begriff für Klischee.",
  },
  {
    word: "milliyetçi",
    previous: "243:9409e1f9",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Politischer Grundwortschatz in allgemeinen Nachrichten und Sachtexten.",
  },
  {
    word: "yurtsever",
    previous: "253:ee68ae2f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche politische und persönliche Charakterisierung.",
  },
  {
    word: "yurtseverlik",
    previous: "267:2975f9aa",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher politischer Grundbegriff.",
  },
  {
    word: "ırksal",
    previous: "262:46935bdf",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliches Adjektiv politischer und gesellschaftlicher Sachtexte.",
  },
  {
    word: "ırk",
    previous: "273:5e6bbe1f",
    changes: {
      modern:
        "hayvanlarda ortak kalıtsal özellikleri olan soy grubu; insanlar için tarihsel ve toplumsal sınıflama",
      difficulty: 2,
      meaning: "Rasse / Zuchtgruppe",
      explanation:
        "Bei Tieren eine Zuchtgruppe mit gemeinsamen erblichen Merkmalen; auf Menschen bezogen eine historische und soziale Zuschreibung, keine klar abgrenzbare biologische Gruppe.",
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Soy grubu sayımı ist keine sinnvolle Umschreibung; die wichtige Unterscheidung zwischen Tierzucht und menschlicher Zuschreibung fehlte. Tierzüchtung und soziale Zuschreibungen bei Menschen sachlich unterscheiden.",
  },
  {
    word: "soykırım",
    previous: "321:2dfbe800",
    changes: {
      modern:
        "ulusal, etnik, ırksal veya dinî bir grubu tamamen ya da kısmen yok etme amacı taşıyan eylemler",
      explanation:
        "Handlungen in der Absicht, eine nationale, ethnische, nach zugeschriebener Abstammung definierte oder religiöse Gruppe ganz oder teilweise zu vernichten.",
    },
    reason:
      "Die Absicht und die bezeichneten Gruppen unterscheiden Genozid von beliebiger Gruppenvernichtung. Die gezielte Absicht und die auch teilweise Vernichtung sind begriffsbestimmend.",
  },
  {
    word: "kıyım",
    previous: "255:d10f9471",
    changes: {
      explanation:
        "Tötung vieler Menschen oder anderer Lebewesen; übertragen auch ein rücksichtsloser massenhafter Abbau.",
      modern: "toplu öldürme; acımasızca yok etme veya işten çıkarma",
    },
    reason:
      "Auch die wichtige übertragene Verwendung für massenhafte Entlassungen wird erläutert.",
  },
  {
    word: "kesiklilik",
    previous: "281:48d9a3d7",
    changes: {
      meaning: "Diskontinuität / Unterbrochenheit",
    },
    reason: "Das Adverb abschnittsweise passte nicht zum Substantiv.",
  },
  {
    word: "yavaşlama",
    previous: "241:486998e9",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr gebräuchliche durchsichtige Bezeichnung für Verlangsamung.",
  },
  {
    word: "dinamik",
    previous: "220:b5fc2217",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Allgemein verbreitetes Adjektiv in Personen- und Prozessbeschreibungen.",
  },
  {
    word: "melankoli",
    previous: "250:a6c994d9",
    changes: {
      modern: "uzun süren durgunluk ve hüzün",
    },
    reason:
      "Kara sevda verengt Melancholie unbegründet auf heftige Liebesleidenschaft.",
  },
  {
    word: "melankolik",
    previous: "232:8a8a4d49",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Allgemein gebräuchliche Gemütsbeschreibung.",
  },
  {
    word: "mahcupça",
    previous: "262:632e6b45",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Adverbableitung eines allgemeinen Gefühlsworts.",
  },
  {
    word: "naz",
    previous: "293:7af8b861",
    changes: {
      modern: "ilgi görmek için isteksiz veya çekingen görünme",
    },
    reason:
      "Betont das absichtliche Sichzieren statt bloßer Schüchternheit aus Zuneigung.",
  },
  {
    word: "nazlı",
    previous: "251:af8fd14",
    changes: {
      modern: "kolay razı olmayan; fazla ilgi bekleyen",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die Umschreibung özenle büyütülmüş verlor das Sichzieren; gebräuchliches Adjektiv.",
  },
  {
    word: "taşkın",
    previous: "263:86696834",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlich sowohl im Wetterwortschatz als auch für unbeherrschtes Verhalten.",
  },
  {
    word: "gamze",
    previous: "246:ab2517d9",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Konkreter gebräuchlicher Begriff für ein Grübchen.",
  },
  {
    word: "hemfikir",
    previous: "253:c7d1f45f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Ausdruck für gleicher Meinung.",
  },
  {
    word: "hemşirelik",
    previous: "279:5b6203df",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliche Berufs- und Tätigkeitsbezeichnung der Krankenpflege.",
  },
  {
    word: "hamal",
    previous: "235:4897c451",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche konkrete Berufsbezeichnung statt seltenem Fachwort.",
  },
  {
    word: "hamallık",
    previous: "242:642d2fb3",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Durchsichtige Tätigkeitsableitung der gebräuchlichen Berufsbezeichnung.",
  },
  {
    word: "hazcı",
    previous: "241:8f0e27c1",
    changes: {
      modern: "hazzı temel değer sayan kişi",
    },
    reason:
      "Zevk düşkünü legt eine abwertende Genusssucht nahe und verengt den philosophischen Begriff.",
  },
  {
    word: "hazımsızlık",
    previous: "286:89a9f3a8",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher Gesundheitsbegriff mit verbreiteter übertragener Verwendung.",
  },
  {
    word: "hazmetme",
    previous: "268:79de5253",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Ausdruck für Verdauen und inneres Verarbeiten.",
  },
  {
    word: "hazım",
    previous: "270:1ffe2339",
    changes: {
      modern: "besinleri sindirme; yaşananları kabullenme",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die türkische Umschreibung ergänzt die übertragene Verarbeitung von Erlebtem.",
  },
  {
    word: "hüsran",
    previous: "270:7ac1c815",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches Wort für schmerzhafte Enttäuschung.",
  },
  {
    word: "suikast",
    previous: "260:395998f1",
    changes: {
      modern: "bir kişiyi öldürmek için planlanan saldırı",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Ein Attentat kann vollendet werden; die Umschreibung nur als Versuch war zu eng.",
  },
  {
    word: "sükûnetli",
    previous: "222:50b924b1",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Durchsichtige Adjektivableitung des bereits als B2 geführten sükûnet.",
  },
  {
    word: "sükûnetle",
    previous: "250:a8301ddd",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige Adverbialform des bereits als B2 geführten sükûnet.",
  },
  {
    word: "hayalci",
    previous: "278:9ccf5011",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliche persönliche Charakterisierung statt seltener Fachsprache.",
  },
  {
    word: "hayalcilik",
    previous: "261:bdfd3205",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Ableitung für Träumerei und Wirklichkeitsferne.",
  },
  {
    word: "hayalî",
    previous: "240:f0efcf28",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Ausdruck für imaginär und fiktiv.",
  },
  {
    word: "efsanevi",
    previous: "257:1c6a3c85",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreitetes Adjektiv in Erzählungen und allgemeinen Texten.",
  },
  {
    word: "destan",
    previous: "273:9f8f0f47",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher literarischer Grundbegriff.",
  },
  {
    word: "lirik",
    previous: "238:ffb7b910",
    changes: {
      modern: "kişisel duyguları şiirsel biçimde anlatan",
    },
    reason: "Duygusal şiirsel ist keine natürliche türkische Wortverbindung.",
  },
  {
    word: "trajedi",
    previous: "243:90abf9e3",
    changes: {
      meaning: "Tragödie / tragisches Unglück",
      explanation:
        "Ernstes Bühnenwerk mit leidvollem Ausgang; auch ein tief erschütterndes Unglück im wirklichen Leben.",
      modern: "acıklı oyun; derin acı veren olay",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die gebräuchliche übertragene Bedeutung eines tragischen Unglücks fehlte.",
  },
  {
    word: "trajik",
    previous: "278:d3d65a84",
    changes: {
      modern: "çok acı veren, üzücü",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Tragisch setzt keine tatsächliche Unvermeidbarkeit voraus; gebräuchliches Adjektiv.",
  },
  {
    word: "absürt",
    previous: "254:18ff5bed",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Ausdruck für widersinnig.",
  },
  {
    word: "absürtlük",
    previous: "251:17a99c27",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Abstraktbildung des allgemeinen Begriffs absurd.",
  },
  {
    word: "saçma",
    previous: "261:bd729a8f",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr häufiges Adjektiv der Alltagssprache für unsinnig.",
  },
  {
    word: "fantezi",
    previous: "279:2988126",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Allgemein gebräuchliches Wort für Fantasie und frei erfundene Vorstellungen.",
  },
  {
    word: "ideal",
    previous: "250:3ed2e126",
    changes: {
      meaning: "Ideal / ideal, bestmöglich",
      explanation:
        "Angestrebtes Leitbild oder ein besonders wünschenswerter Zustand; als Adjektiv für einen Zweck besonders geeignet.",
      modern: "ülkü; bir amaca en uygun olan",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Die verbreitete Adjektivbedeutung war nicht erfasst.",
  },
  {
    word: "ülkücü",
    previous: "308:f4d18d8e",
    changes: {
      meaning: "Idealist / Anhänger der Ülkücü-Bewegung",
      explanation:
        "Allgemein jemand mit hohen Idealen; im politischen Gebrauch Anhänger der türkisch-nationalistischen Ülkücü-Bewegung.",
      modern: "ideallere bağlı kişi; Ülkücü hareketin mensubu",
    },
    reason:
      "Die konkrete politische Bewegung sollte nicht mit beliebigem türkischem Nationalismus gleichgesetzt werden.",
  },
  {
    word: "ülkücülük",
    previous: "308:fad429a5",
    changes: {
      meaning: "Idealismus / Ideologie der Ülkücü-Bewegung",
      modern: "ideallere bağlılık; Ülkücü hareketin siyasi anlayışı",
    },
    reason:
      "Die politische Lesart bezeichnet eine bestimmte Bewegung statt jede Form türkischen Nationalismus.",
  },
  {
    word: "özlemli",
    previous: "256:40d95f53",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige gebräuchliche Gefühlsbeschreibung.",
  },
  {
    word: "hasretli",
    previous: "260:a66582fe",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Gefühlsbeschreibung für sehnsuchtsvoll.",
  },
  {
    word: "firari",
    previous: "256:5245854d",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreiteter Nachrichtenwortschatz für flüchtig.",
  },
  {
    word: "firar",
    previous: "260:360c5e7f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Begriff für unerlaubte Flucht.",
  },
  {
    word: "melamet",
    previous: "319:7ced27ea",
    changes: {
      modern: "kınama; gösterişten kaçınmayı esas alan tasavvuf anlayışı",
    },
    reason:
      "Die türkische Umschreibung erfasste bisher nur Tadel, nicht die erläuterte mystische Lesart.",
  },
  {
    word: "kanaatkâr",
    previous: "248:72214c4c",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches Charakterwort für genügsam.",
  },
  {
    word: "kanaatkârlık",
    previous: "265:138ec816",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher abstrakter Begriff für Genügsamkeit.",
  },
  {
    word: "doyum",
    previous: "266:f0bf51ac",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher allgemeiner Begriff für Befriedigung und Sättigung.",
  },
  {
    word: "tatmin",
    previous: "283:f6e82c14",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher allgemeiner Begriff für Befriedigung und Zufriedenstellung.",
  },
  {
    word: "tatminkâr",
    previous: "256:7384fd1f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verbreitete Bewertung für zufriedenstellende Leistungen und Ergebnisse.",
  },
  {
    word: "tatminsiz",
    previous: "267:687c1861",
    changes: {
      modern: "beklentisi veya ihtiyacı karşılanmamış",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Doyumsuz bedeutet auch unersättlich und verengt die bloße Unzufriedenheit.",
  },
  {
    word: "hoşnutluk",
    previous: "247:d467f37a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Ausdruck für Zufriedenheit.",
  },
  {
    word: "memnun",
    previous: "249:5015ad29",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr häufiger grundlegender Ausdruck für zufrieden und erfreut.",
  },
  {
    word: "tebessüm",
    previous: "264:81bf523a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher literarischer und allgemeiner Ausdruck für Lächeln.",
  },
  {
    word: "yüce",
    previous: "265:ecb8e69f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches gehobenes Adjektiv statt seltener C1-Fachsprache.",
  },
  {
    word: "bayağılık",
    previous: "280:3c63de56",
    changes: {
      modern: "sıradanlık; kabalık veya inceliksizlik",
    },
    reason:
      "Die türkische Umschreibung kabalık verlor die Bedeutung Gewöhnlichkeit.",
  },
  {
    word: "sıradanlık",
    previous: "261:41a586c5",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Durchsichtige gebräuchliche Abstraktbildung statt seltenem Fachwort.",
  },
  {
    word: "sıradan",
    previous: "254:843610b9",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr gebräuchliches Adjektiv für gewöhnlich und alltäglich.",
  },
  {
    word: "tekinsizlik",
    previous: "265:f111de0a",
    changes: {
      modern: "belirsiz bir tehlike sezme duygusu",
    },
    reason:
      "Güvensiz ürperti ist keine natürliche Umschreibung von Unheimlichkeit.",
  },
  {
    word: "bezgin",
    previous: "267:fc5f580c",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche allgemeine Gemütsbeschreibung.",
  },
  {
    word: "bezginlik",
    previous: "261:1ecfd54f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher abstrakter Begriff für Ermattung und Überdruss.",
  },
  {
    word: "bıkkınlık",
    previous: "280:69a0747e",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Gefühlsbegriff für Überdruss.",
  },
  {
    word: "tükeniş",
    previous: "250:7e0b62c6",
    changes: {
      modern: "gücün, kaynağın veya imkânın bitmesi",
    },
    reason: "Sona erme war zu unspezifisch für Aufzehrung und Erschöpfung.",
  },
  {
    word: "çıkmaz",
    previous: "290:b49d82ac",
    changes: {
      modern: "çıkışı olmayan yol; çözümsüz durum",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die wichtige wörtliche Bedeutung Sackgasse fehlte in der türkischen Umschreibung.",
  },
  {
    word: "ikilem",
    previous: "302:71738b1c",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreiteter allgemeiner Begriff für Dilemma und Zwiespalt.",
  },
  {
    word: "şatafat",
    previous: "266:24abefa8",
    changes: {
      modern: "aşırı gösterişli zenginlik veya süs",
    },
    reason: "Prunk umfasst luxuriöse äußere Pracht und nicht nur Schmuck.",
  },
  {
    word: "şatafatlı",
    previous: "260:fc0bd744",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Beschreibung für prunkvoll und protzig.",
  },
  {
    word: "ihtişam",
    previous: "268:3a872d18",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreiteter literarischer Grundbegriff für Pracht.",
  },
  {
    word: "ihtişamlı",
    previous: "278:d8cd08ce",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche gehobene Beschreibung für prächtig.",
  },
  {
    word: "heybetli",
    previous: "270:4446dc7",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreitete Beschreibung für imposante Erscheinungen.",
  },
  {
    word: "şevk",
    previous: "249:3049fb93",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Gefühls- und Motivationsbegriff.",
  },
  {
    word: "şevksiz",
    previous: "269:30b1c60a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige gebräuchliche Ableitung für lustlos.",
  },
  {
    word: "eda",
    previous: "285:e7f50031",
    changes: {
      meaning: "Ausdrucksweise / Erfüllung einer Pflicht",
      explanation:
        "Besondere Art des Auftretens oder Sprechens; auch das Erfüllen einer Pflicht oder Begleichen einer Schuld.",
      modern: "tavır ve söyleyiş; bir borcu veya görevi yerine getirme",
    },
    reason: "Die wichtige Lesart in borcu oder namazı eda etmek fehlte.",
  },
  {
    word: "yankı",
    previous: "253:aa837fe4",
    changes: {
      modern: "sesin geri dönmesi; bir sözün yarattığı tepki",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die seltenere ältere Entsprechung aksiseda ist keine verständliche moderne Umschreibung; allgemeiner Begriff.",
  },
  {
    word: "titreşim",
    previous: "248:d1870a86",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher technischer Alltagsbegriff, etwa bei Telefonen.",
  },
  {
    word: "tenkit",
    previous: "267:b66aa68f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreiteter formeller Ausdruck für Kritik.",
  },
  {
    word: "tespit",
    previous: "290:be8ddca2",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr gebräuchlicher Sachtext- und Verwaltungswortschatz.",
  },
  {
    word: "saptama",
    previous: "267:340d3d10",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Begriff für Feststellung.",
  },
  {
    word: "musallat",
    previous: "288:46373e11",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreiteter Ausdruck für lästiges Aufdrängen oder Anhaften.",
  },
  {
    word: "takatsiz",
    previous: "254:8579cb26",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche körperliche Zustandsbeschreibung.",
  },
  {
    word: "takat",
    previous: "256:6ed2fca8",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Begriff für Kraft und Belastbarkeit.",
  },
  {
    word: "takatsizlik",
    previous: "289:a141ec53",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige gebräuchliche Zustandsbeschreibung.",
  },
  {
    word: "takdim",
    previous: "265:fc351b9b",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher formeller Begriff für Vorstellung und Überreichung.",
  },
  {
    word: "telafi",
    previous: "287:5468141e",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Sehr verbreiteter allgemeiner Begriff für Ausgleich und Wiedergutmachung.",
  },
  {
    word: "temkin",
    previous: "277:9a84f26a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Begriff für Vorsicht.",
  },
  {
    word: "temkinli",
    previous: "252:cdea2b30",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches allgemeines Charakter- und Verhaltenswort.",
  },
  {
    word: "temkinsiz",
    previous: "257:b842fe98",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche durchsichtige Ableitung für unvorsichtig.",
  },
  {
    word: "temkinsizlik",
    previous: "288:fadf02c4",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche durchsichtige Abstraktbildung für Unvorsichtigkeit.",
  },
  {
    word: "tenezzül",
    previous: "280:9ff276d1",
    changes: {
      modern: "kendine yakıştırmadığı bir işi yapmaya razı olma",
    },
    reason:
      "Alçalma war zu allgemein und konnte als körperliches Absinken missverstanden werden.",
  },
  {
    word: "terbiyesiz",
    previous: "279:57c82930",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Häufiges Alltagswort für ungezogen und unverschämt.",
  },
  {
    word: "terbiyesizlik",
    previous: "282:d9dbf86b",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche durchsichtige Abstraktbildung.",
  },
  {
    word: "terzilik",
    previous: "276:160ab5d6",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Konkrete gebräuchliche Berufs- und Tätigkeitsbezeichnung.",
  },
  {
    word: "tezgâh",
    previous: "309:2be5da43",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher konkreter Ausdruck mit verbreiteter übertragener Lesart.",
  },
  {
    word: "tezgâhtar",
    previous: "265:ecb986e7",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche konkrete Berufsbezeichnung im Einzelhandel.",
  },
  {
    word: "tezgâhtarlık",
    previous: "287:beb611b0",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Durchsichtige Tätigkeitsbezeichnung einer alltäglichen Berufsbezeichnung.",
  },
  {
    word: "teşhircilik",
    previous: "307:eaa83c34",
    changes: {
      meaning: "Exhibitionismus / demonstrative Selbstdarstellung",
      explanation:
        "Absichtliches öffentliches Entblößen intimer Körperteile; übertragen ein aufdringliches Zur-Schau-Stellen der eigenen Person.",
      modern: "cinsel organları başkalarına gösterme; kendini aşırı sergileme",
    },
    reason:
      "Die sexuelle Hauptbedeutung sollte von bloßer öffentlicher Präsentation unterschieden werden.",
  },
  {
    word: "örgüt",
    previous: "275:d75de0e9",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Grundwortschatz allgemeiner Nachrichten und gesellschaftlicher Texte.",
  },
  {
    word: "örgütlenme",
    previous: "284:5cc33be5",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Ausdruck für Organisierung.",
  },
  {
    word: "örgütsel",
    previous: "298:d39be189",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige Adjektivableitung eines verbreiteten Grundbegriffs.",
  },
  {
    word: "örgütlü",
    previous: "268:ea659166",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Ausdruck für gemeinsam organisiert.",
  },
  {
    word: "teyitli",
    previous: "268:d0e4aa33",
    changes: {
      meaning: "bestätigt / abgesichert",
      explanation:
        "Eine Angabe oder Nachricht ist durch zusätzliche Quellen oder Belege bestätigt.",
    },
    reason: "Überprüft allein bedeutet noch nicht bestätigt.",
  },
  {
    word: "toptancı",
    previous: "276:75c4853",
    changes: {
      meaning: "Großhändler / pauschalierend",
      explanation:
        "Verkäufer an Wiederverkäufer oder gewerbliche Abnehmer; als Adjektiv etwas ohne Einzelfallprüfung verallgemeinernd.",
      modern: "toptan mal satan; ayrıntıları ayırmadan genelleyen",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Die verbreitete Adjektivbedeutung in toptancı yaklaşım fehlte.",
  },
  {
    word: "perakendeci",
    previous: "276:a4f1affc",
    changes: {
      modern: "malı doğrudan tüketiciye satan",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Einzelhandel wird durch Endverbraucher als Abnehmer definiert, nicht durch Einzelstückverkauf.",
  },
  {
    word: "toptancılık",
    previous: "281:f41bc3bd",
    changes: {
      modern: "diğer işletmelere veya satıcılara toplu satış",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die Abnehmerseite unterscheidet Großhandel von bloß großvolumigem Verkauf.",
  },
  {
    word: "perakendecilik",
    previous: "277:b166b050",
    changes: {
      modern: "malı doğrudan son tüketiciye satma",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Einzelhandel muss nicht aus dem Verkauf einzelner Stücke bestehen.",
  },
  {
    word: "toptan",
    previous: "299:e2d2f70a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Handels- und allgemeiner Ausdruck.",
  },
  {
    word: "muhasebecilik",
    previous: "306:530c5942",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Berufsbezeichnung im allgemeinen Arbeitswortschatz.",
  },
  {
    word: "muhayyer",
    previous: "275:a0e0352a",
    changes: {
      meaning: "frei in der Wahl",
    },
    reason:
      "Wahlberechtigt wird im Deutschen leicht als politisches Stimmrecht verstanden.",
  },
  {
    word: "muhtemel",
    previous: "258:5c59e0ba",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr verbreiteter allgemeiner Wahrscheinlichkeitsausdruck.",
  },
  {
    word: "muhtemelen",
    previous: "272:64cc8d55",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr häufiges Adverb der Alltagssprache für wahrscheinlich.",
  },
  {
    word: "sağduyu",
    previous: "282:1d4d818f",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Begriff für gesunden Menschenverstand.",
  },
  {
    word: "sağduyulu",
    previous: "279:2c5d0ddc",
    changes: {
      modern: "mantıklı ve ölçülü karar veren",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die einfachere Umschreibung erklärt das Wort ohne das gehobene aklıselim.",
  },
  {
    word: "akılcı",
    previous: "276:5d1d11b4",
    changes: {
      modern: "akla ve gerekçelere dayanan",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Usçu ist seltener und philosophisch enger als das allgemeine vernunftorientiert.",
  },
  {
    word: "bilinemezcilik",
    previous: "305:b40f7f19",
    changes: {
      modern:
        "Tanrı ve benzeri metafizik konularda kesin bilgiye ulaşılamayacağı görüşü",
    },
    reason:
      "Die bisherige Umschreibung ließ den Gegenstand der angeblichen Unerkennbarkeit offen.",
  },
  {
    word: "bilgelik",
    previous: "270:26684d72",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreiteter allgemeiner Begriff für Weisheit.",
  },
  {
    word: "bilge",
    previous: "259:db5d1515",
    changes: {
      modern: "hayatı derin bir anlayışla değerlendiren",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verständlichere Umschreibung als das ebenfalls gehobene hikmet sahibi.",
  },
  {
    word: "kâhinlik",
    previous: "285:205dc44f",
    changes: {
      explanation:
        "Praxis, durch die jemand vorgibt, zukünftige oder verborgene Ereignisse erkennen zu können.",
    },
    reason:
      "Die vorhandene Definition schrieb fälschlich anderen Menschen statt dem Wahrsager die Zukunftskenntnis zu.",
  },
  {
    word: "hezeyan",
    previous: "283:a50e5484",
    changes: {
      modern: "gerçekle bağdaşmayan düşünce veya anlamsız konuşma",
    },
    reason:
      "Sayrısal ist selten und erklärt weder den Wirklichkeitsverlust noch die wirre Rede verständlich.",
  },
  {
    word: "sorunsal",
    previous: "294:c4e08857",
    changes: {
      meaning: "Problemkomplex / problembezogen",
      explanation:
        "Zusammenhängender Fragenbereich; als Adjektiv auf ein Problem bezogen oder in seiner Lösung ungewiss.",
      modern: "bağlantılı sorunlar bütünü; sorunla ilgili",
    },
    reason:
      "Die auch adjektivische Verwendung wird von der nominalen Problemstellung unterschieden.",
  },
  {
    word: "sorunlu",
    previous: "292:85200b43",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Häufiges durchsichtigen Alltagsadjektiv für problematisch.",
  },
  {
    word: "olgucu",
    previous: "277:8cfa67b",
    changes: {
      modern: "bilgiyi gözlenebilir olgulara dayandıran",
    },
    reason:
      "Eine verständliche Umschreibung statt des ebenfalls fachsprachlichen positivist.",
  },
  {
    word: "pozitivist",
    previous: "286:eaece2a",
    changes: {
      modern: "bilgiyi gözlenebilir olgulara dayandıran",
    },
    reason: "Verhindert die bloße wechselseitige Erklärung mit olgucu.",
  },
  {
    word: "deneyci",
    previous: "264:61a5fb41",
    changes: {
      modern: "bilginin kaynağını deneyim ve gözlemde arayan",
    },
    reason: "Das seltenere görgücü erklärt Empirismus für Lernende nicht.",
  },
  {
    word: "görgücü",
    previous: "274:fd9794e5",
    changes: {
      modern: "deneyim ve gözlemi bilginin temel kaynağı sayan",
    },
    reason:
      "Ersetzt die bloße wechselseitige synonymische Erklärung durch eine Definition.",
  },
  {
    word: "maddecilik",
    previous: "278:208322a9",
    changes: {
      modern: "maddeyi varlığın temeli sayan görüş",
    },
    reason:
      "Özdekçilik ist ein selteneres Synonym und keine einfachere Erklärung.",
  },
  {
    word: "töz",
    previous: "275:45f055",
    changes: {
      modern:
        "özellikleri taşıyan, kendi başına var olduğu düşünülen temel varlık",
    },
    reason:
      "Das mehrdeutige cevher allein erklärt den philosophischen Begriff nicht ausreichend.",
  },
  {
    word: "cevher",
    previous: "270:6ba91caf",
    changes: {
      modern: "bir şeyin özü; işlenerek maden elde edilen ham madde",
    },
    reason:
      "Maden özü kann irreführend wie bereits gereinigtes Metall verstanden werden; gemeint ist auch Erz.",
  },
  {
    word: "cevherli",
    previous: "277:a89313fd",
    changes: {
      modern: "içinde maden bulunan; yetenekli ve değerli",
    },
    reason:
      "Die Personenbedeutung begabt wird nun ausdrücklich erfasst. Sowohl die Rohstoffbedeutung als auch die übertragene Begabung präzisieren.",
  },
  {
    word: "özne",
    previous: "258:597ec64e",
    changes: {
      meaning: "Subjekt (Grammatik / Philosophie)",
      explanation:
        "In der Grammatik der Satzteil, über den etwas ausgesagt wird; philosophisch die handelnde oder erkennende Instanz.",
      modern:
        "cümlede hakkında yargı bildirilen öge; eyleyen veya bilen varlık",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die gebräuchliche grammatische Bedeutung fehlte; Subjekt ist nicht immer die handelnde Person.",
  },
  {
    word: "vicdan",
    previous: "273:7b40cd87",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher moralischer Grundbegriff.",
  },
  {
    word: "vicdani",
    previous: "299:19e9a375",
    changes: {
      modern: "neyin doğru veya yanlış olduğuna dair iç duyguya dayalı",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verbreitete Adjektivableitung; die Umschreibung erklärt die Gewissensbeziehung.",
  },
  {
    word: "vicdansız",
    previous: "259:e8b23a37",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches allgemeines Charakterurteil.",
  },
  {
    word: "vicdansızlık",
    previous: "275:fda7cd5d",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige gebräuchliche Abstraktbildung.",
  },
  {
    word: "insaf",
    previous: "272:8d21b057",
    changes: {
      modern: "başkasının durumunu gözeterek adil ve ölçülü davranma",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Die Rücksicht und Milde werden verständlicher als durch ölçülü adalet erläutert.",
  },
  {
    word: "ahlaksız",
    previous: "282:b1679209",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliches allgemeines moralisches Urteil.",
  },
  {
    word: "iffetsiz",
    previous: "281:1504078",
    changes: {
      modern: "geleneksel cinsel ahlak kurallarına uymadığı söylenen",
    },
    reason:
      "Erklärt den abwertenden normabhängigen Ausdruck ohne die reine Wiederholung von iffet.",
  },
  {
    word: "edepli",
    previous: "252:da3d2bd0",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Alltagsadjektiv für gutes Benehmen.",
  },
  {
    word: "edepsiz",
    previous: "275:870029d3",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Häufiges Alltagsadjektiv für unanständig oder unverschämt.",
  },
  {
    word: "hürmetsiz",
    previous: "244:229689a3",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche durchsichtige Ableitung für respektlos.",
  },
  {
    word: "uysal",
    previous: "264:6712b1b6",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Allgemeines gebräuchliches Charakterwort.",
  },
  {
    word: "uysallık",
    previous: "274:12205a77",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige gebräuchliche Abstraktbildung.",
  },
  {
    word: "kurumsal",
    previous: "283:dbb6707d",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher Ausdruck im Arbeits- und Organisationswortschatz.",
  },
  {
    word: "kurumsallık",
    previous: "293:f58b151c",
    changes: {
      modern: "kişilere bağlı olmayan yerleşik kural ve işleyiş",
    },
    reason:
      "Kurallı kurum olma ist unnatürlich und erklärt die institutionelle Beständigkeit nur ungenau.",
  },
  {
    word: "merhum",
    previous: "265:24d3a147",
    changes: {
      modern: "saygıyla anılan ölmüş erkek",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliche respektvolle Bezeichnung; der Ton wird in der Umschreibung erfasst.",
  },
  {
    word: "malum",
    previous: "251:aa590d4a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Sehr verbreiteter formeller und gesprochener Ausdruck für bekannt.",
  },
  {
    word: "meşhur",
    previous: "269:4d08d70f",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Sehr häufiges Alltagsadjektiv für berühmt.",
  },
  {
    word: "şöhret",
    previous: "257:7a91e7dd",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Begriff für Ruhm und Bekanntheit.",
  },
  {
    word: "şöhretli",
    previous: "259:7fed0b31",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige gebräuchliche Adjektivableitung für berühmt.",
  },
  {
    word: "namlı",
    previous: "256:ad6042a6",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Charakterisierung für bekannt oder berüchtigt.",
  },
  {
    word: "mahir",
    previous: "264:ccb17276",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher gehobener Ausdruck für geschickt.",
  },
  {
    word: "muhafız",
    previous: "280:621e2bb5",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchlicher Begriff in Erzählungen und Nachrichten für Wächter.",
  },
  {
    word: "muhafızlık",
    previous: "288:8cf65906",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Durchsichtige Tätigkeitsableitung des gebräuchlichen muhafız.",
  },
  {
    word: "sefil",
    previous: "285:1aac0028",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreitete allgemeine Beschreibung von Elend und Verkommenheit.",
  },
  {
    word: "sefillik",
    previous: "286:cfafdba3",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche abstrakte Bezeichnung für Elend.",
  },
  {
    word: "misyon",
    previous: "312:a7d74a01",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verbreiteter Begriff in allgemeinen Berufs-, Organisations- und Sachtexten.",
  },
  {
    word: "misyoner",
    previous: "263:c481ef04",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliche Bezeichnung im allgemeinen religiösen und historischen Wortschatz.",
  },
  {
    word: "manastır",
    previous: "281:46b095fe",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliche konkrete Bezeichnung im kulturellen Reise- und Lesewortschatz.",
  },
  {
    word: "rahip",
    previous: "282:309d29b7",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Allgemein bekannte religiöse Personenbezeichnung.",
  },
  {
    word: "rahibe",
    previous: "294:c2ba7e4d",
    changes: {
      modern: "bir Hristiyan tarikatına bağlı kadın",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Hristiyan din kadını ist unnatürlich und grenzt eine Ordensfrau nicht von beliebigen gläubigen Frauen ab.",
  },
  {
    word: "haç",
    previous: "271:991c2c5",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Gebräuchliche Bezeichnung eines allgemein bekannten religiösen Symbols.",
  },
  {
    word: "papaz",
    previous: "288:177cb015",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreitete Bezeichnung für christliche Geistliche.",
  },
  {
    word: "papa",
    previous: "248:d062df20",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Bezeichnung in allgemeiner Berichterstattung.",
  },
  {
    word: "bazilika",
    previous: "294:1226ca9b",
    changes: {
      modern:
        "ortası yüksek, yanları alçak salonlu yapı; bazı kiliselere verilen onur unvanı",
    },
    reason:
      "Uzun salonlu eski yapı erklärt weder die Bauform noch den kirchlichen Ehrentitel.",
  },
  {
    word: "havra",
    previous: "250:d0e5e565",
    changes: {
      modern: "Yahudilerin dua edip toplandığı ibadet yeri",
    },
    reason: "Eine Definition ersetzt das bloße Synonym sinagog.",
  },
  {
    word: "ibadethane",
    previous: "277:566b4aff",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher allgemeiner Oberbegriff für Gebetsstätten.",
  },
  {
    word: "tapınak",
    previous: "235:5971b232",
    changes: {
      modern: "tanrısal varlıklara tapınmak için yapılan yapı",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Erklärt den konkreten Kulturbegriff statt bloß auf das Synonym mabet zu verweisen.",
  },
  {
    word: "müezzin",
    previous: "269:42281360",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche religiöse Personenbezeichnung.",
  },
  {
    word: "imam",
    previous: "285:bccc7408",
    changes: {
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Sehr verbreitete religiöse Personenbezeichnung der Alltagssprache.",
  },
  {
    word: "imamlık",
    previous: "285:5143f16d",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche Tätigkeits- und Amtsbezeichnung.",
  },
  {
    word: "kıble",
    previous: "244:15dbf435",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Verbreiteter religiöser Grundbegriff statt seltener historischer Fachsprache.",
  },
  {
    word: "ayet",
    previous: "250:b82c2a80",
    changes: {
      modern: "Kur'an surelerini oluşturan metin birimlerinden her biri",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Ein Koranvers muss kein syntaktisch vollständiger Satz sein; cümle war daher ungenau.",
  },
  {
    word: "sure",
    previous: "228:6325c3c",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher religiöser Grundbegriff.",
  },
  {
    word: "hadis",
    previous: "274:e401b4eb",
    changes: {
      modern: "Muhammed'in söz, davranış ve onaylarını aktaran rivayet",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Ein Hadith ist der Bericht über Äußerungen, Handlungen oder Billigungen und nicht die Handlung selbst.",
  },
  {
    word: "sünnet",
    previous: "320:103d3a02",
    changes: {
      explanation:
        "Das religiöse Vorbild Mohammeds; außerdem die Entfernung der Vorhaut am Penis.",
      modern:
        "Muhammed'in örnek davranışları; penis başını örten derinin kesilmesi",
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Dinî kesim kann als religiöses Schlachten verstanden werden und erklärt Beschneidung nicht.",
  },
  {
    word: "senetli",
    previous: "260:5115c314",
    changes: {
      meaning: "durch Urkunde / Schuldschein belegt",
      explanation:
        "Durch eine schriftliche Urkunde oder einen Schuldschein abgesichert, etwa ein Anspruch oder Geschäft.",
      modern: "belge veya borç senediyle güvenceye alınmış",
    },
    reason:
      "Senet kann eine Urkunde allgemein und nicht nur einen Schuldschein bezeichnen.",
  },
  {
    word: "seccade",
    previous: "262:e63c5e6a",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchlicher konkreter Begriff des religiösen Alltags.",
  },
  {
    word: "oruç",
    previous: "286:c16ff0f6",
    changes: {
      modern:
        "dinî amaçla belirli süre yeme, içme veya bazı davranışlardan uzak durma",
      difficulty: 1,
      note: "Wortschatz für Alltag und allgemeine Texte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason:
      "Dinî aç kalma war unvollständig; sehr gebräuchlicher Alltagsbegriff.",
  },
  {
    word: "secde",
    previous: "289:9154610",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Verbreiteter religiöser Grundbegriff.",
  },
  {
    word: "mevali",
    previous: "339:bc2b9ef1",
    changes: {
      modern:
        "bir koruyucuya bağlı kişiler; özellikle ilk dönem Arap olmayan Müslümanlar",
    },
    reason:
      "Der Begriff bezeichnet zuerst ein Klientelverhältnis und nicht ausschließlich ethnisch nichtarabische Muslime.",
  },
  {
    word: "gayrimüslim",
    previous: "259:dfc66f51",
    changes: {
      difficulty: 2,
      note: "Wortschatz für anspruchsvollere Erzählungen und Sachtexte. Die Bedeutung richtet sich nach dem Buchsatz.",
    },
    reason: "Gebräuchliche allgemeine religiöse Zugehörigkeitsbezeichnung.",
  },
  {
    word: "mürtet",
    previous: "285:d72205ed",
    changes: {
      meaning: "Apostat / vom Glauben Abgefallener",
      explanation:
        "In islamischer Terminologie jemand, der den Islam verlassen hat; allgemein ein Glaubensabtrünniger.",
      modern: "İslam'dan ayrıldığı belirtilen kişi",
    },
    reason:
      "Im üblichen islamischen Sprachgebrauch ist nicht jeder Religionswechsel gemeint.",
  },
  {
    word: "esrarlı",
    previous: "265:4cd505fd",
    changes: {
      modern: "gizli yönleri olan, gizemli",
    },
    reason:
      "Eine kurze natürliche Definition statt des bloßen Synonyms gizemli.",
  },
  {
    word: "esrar",
    previous: "273:f0d0a6b2",
    changes: {
      modern: "gizli şeyler; kenevirden elde edilen uyuşturucu madde",
    },
    reason:
      "Uyuşturucu ot ist umgangssprachlich und botanisch unpräzise; die zweite Bedeutung wird sachlich erläutert.",
  },
];
