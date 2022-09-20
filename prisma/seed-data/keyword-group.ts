import { Prisma } from "@prisma/client";

export const keywordGroupDatas: Prisma.KeywordGroupUncheckedCreateInput[] = [
//     {
//         name: "Krebs",
//         html: `<a href="https://t.me/cdl_protokolle/49287">👉 180 Krebskiller-Lebensmittel von A-Z </a>`,
//         keywords: {
//             create: {
//                 text: 'krebs',
//             }
//         }
//     },
//     {
//         name: "Arthr",
//         image: 'https://grafvonkronenberg.group/498-large_default/dmso-schmerz-lavendel-balsam-mct-oel-vitamin-e-aloe-vera-bienenwachs-40ml.jpg',
//         html: `Gelenkschmerzen, Arthritis, Arthrose? Unsere speziellen DMSO Salben helfen dir meist in kürzester Zeit, dass die Beschwerden zurück gehen. 

//     <a href="https://grafvonkronenberg.group/produkt/257-dmso-schmerz-lavendel-balsam-mct-oel-vitamin-e-aloe-vera-bienenwachs-40ml?gvkaf=11">👉 Einmal in Lavendel:  </a>

//     <a href="https://grafvonkronenberg.group/produkt/266-dmso-schmerz-eukalyptus-balsam-mct-oel-vitamin-e-aloe-vera-bienenwachs-40ml?gvkaf=11">👉 oder Eukalyptus:</a>

//     Die mit dem Wappen,
//     die machen das schon.....`,
//         keywords: {
//             create: {
//                 text: 'arthr',
//             }
//         }

//     },
//     {
//         name: "Endometriose",
//         html: `Bei Frauen, die an Endometriose leiden, kann regelmässig auch eine höhere Belastung mit bestimmten Schadstoffen festgestellt werden – so eine Studie vom Herbst 2021. Eine entsprechende Überprüfung und ggf. eine Ausleitung sollte daher bei einer Endometriosetherapie unbedingt berücksichtigt werden.

//     Entgiftung mit Zeolith

//     <a href="https://ebay.us/27RFBw">👉 Zeolith bei Ebay (50µm) 85-95% Klinoptilolith</a>
//     <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fnaturzeolith-500-g-vegan">👉 Naturzeolith 500g, vegan bei Kopp (20µm) - 93% Klinoptilolith</a>`,
//         keywords: {
//             create: {
//                 text: 'endometriose',
//             }
//         }

//     },
//     {
//         name: "Rheuma",
//         html: `DMSO zur innerlichen Anwendung
//     Innerliche Behandlung bei Rheuma, Migräne, Blasenentzündungen (interstitielle Zystitis)', Schmerzen 

//     Beispiel: 1 bis 3 Teelöffel DMSO in einem 0,3 l Getränk (Saft, Wasser, Tee etc.) verrühren. Für einen besseren Geschmack, kann man eine Zitrone nutzen.

//     DMSO oral eingenommen verursacht allerdings einen üblen knoblauchartigen Geruch...`,
//         keywords: {
//             create: {
//                 text: 'rheuma',
//             }
//         }

//     },
//     {
//         name: "Magnesium",
//         html: `👉 <a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=https://www.cellavita.de/search?sSearch=magnesium&p=1">Magnesium Produkte von Cellavita</a>

//     👉 <a href="https://www.kopp-verlag.de/?6=41939272&query=magnesium&channel=de&sid=6a30Ot1q772GahD0ys1GWHzNvK8R6b&act=search&websale8=kopp-verlag&otpcytokenid=41939272">Magnesium Produkte vom Kopp Verlag</a>

//     👉 <a href="https://www.waldkraft.bio/vitadermal-magnesium-oel-dmso-borax-250ml?sPartner=energiereich">VitaDermal+ – Magnesium-Öl + DMSO + Borax – 250ml</a>`,
//         keywords: {
//             create: {
//                 text: 'magnesium',
//             }
//         }
//     },
//     {
//         name: 'Glutat*.ion',
//         html: ` 👉 <a href='https://www.waldkraft.bio/liposomales-glutathion-aus-reduziertem-l-glutathion?number=PA10047&sPartner=energiereich'>Liposomales Glutathion (aus reduziertem L-Glutathion) bei Waldkraft kaufen</a>`,
//         keywords: {
//             create: {
//                 text: 'glutat*.ion'
//             }
//         }
//     },
//     {
//         name: "Schwarzkümmel",
//         html: `Schwarzkümmelöl (black cumin seed) gilt als <a href="https://t.me/cdl_protokolle/30552">👉 Ivermectin Ersatz </a>
// <a href="https://www.kopp-verlag.de/a/kopp-vital-bio-schwarzkuemmeloel-vegan?&6=28453120&otpcytokenid=28453120">👉 Kopp Vital Bio Schwarzkümmelöl - vegan</a>`,
//         keywords: {
//             create: {
//                 text: 'schwarzkümmel(.)*',
//             }
//         }
//     },
//     {
//         name: "Ivermectin",
//         html: `Schwarzkümmelöl (black cumin seed) gilt als <a href="https://t.me/cdl_protokolle/30552"👉 Ivermectin Ersatz </a>
//     <a href="https://www.kopp-verlag.de/a/kopp-vital-bio-schwarzkuemmeloel-vegan?&6=28453120&otpcytokenid=28453120">👉 Kopp Vital Bio Schwarzkümmelöl - vegan</a>`,
//         keywords: {
//             create: {
//                 text: 'ivermectin',
//             }
//         }
//     },
//     {
//         name: "Kiefernadel",
//         image: `https://www.bhf.org.uk/-/media/news-images/2021/august/covid19esc-640x410.jpg`,
//         html: `‼️ACHTUNG WICHTIG‼️

//     Durch <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42724716&otpcytokenid=42724716">👉 LÖWENZAHNEXTRAKT</a> soll es den SPIKE Proteinen NICHT möglich sein anzudocken. Neben Kiefernadel-Tee die ersten wirklichen Lösungsansätze neben den üblichen Möglichkeiten. 

//     ✅ <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42724716&otpcytokenid=42724716"> LÖWENZAHNEXTRAKT</a> blockiert SARS CoV-2 Spike-Proteine und ihre Varianten

//     ✅ Die University of Freiburg, (Engesserstraße 4, 79108 Freiburg, Germany) fand heraus, dass der gewöhnliche Löwenzahn (Taraxacum officinale) die Spike-Proteine daran hindern kann, an die ACE2-Zelloberflächenrezeptoren in menschlichen Lungen- und Nierenzellen zu binden.

//     👉 <a href="https://uncutnews.ch/forschung-extrakt-aus-loewenzahnblaettern-blockiert-die-bindung-von-spike-proteinen-an-den-ace2-zelloberflaechenrezeptor/">HIER den kompletten Bericht nachlesen!</a>

//     HIER bekommt Ihr diesen <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42724716&otpcytokenid=42724716">👉 wertvollen Extrakt</a>, OHNE Zusätze und sogar fermentiert. (bitte zugreifen, solange noch vorrätig, es kommt schon zu Engpässen)`,
//         keywords: {
//             create: {
//                 text: 'kiefernadel.*'
//             }
//         }

//     },
//     {
//         name: 'Magelpilz',
//         html: `CDL wirkt auch antifungal (gegen Pilze). Die Graf von Kronenberg Gruppe hat dafür ein spezielles Gel auf CDL Basis entwickelt. 
//     <a href="https://grafvonkronenberg.group/produkt/33-napiad-nagelpflege-soft-fluid-gel?gvkaf=11">👉 NaPiad Nagelpflege Soft Fluid Gel</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'nagelpilz',
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Parasit',
//         html: `Für die Parasitenkur oder Leberkur empfehlen wir die 

//     <a href="https://grafvonkronenberg.group/produkt/127-juglandis-parasiten-kur-nach-dr-hulda-clark?gvkaf=11">👉 Juglandis Kur Nach Dr. Hulda Clark</a>

//     Bei Parasitenbefall wird <a href="https://t.me/cdl_protokolle/28">👉 Protokoll P</a> empfohlen.

//     Bei diesem Protokoll ist <a href="https://t.me/cdl_protokolle/23802">👉 Rizinusöl</a> sehr wichtig.`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'parasit',

//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Ensteine and Hulda',
//         html: `Anwendung findet die <a href="https://grafvonkronenberg.group/produkt/205-chanca-piedra-steinbrecher?gvkaf=11">👉 Staude Chanca Piedra</a> bei Nieren- und Gallensteinen aber auch bei Steinen in Leber und Blase. Ebenso wird sie zur Stärkung der Leber verschrieben.`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'ensteine',
//                     },
//                     {
//                         text: 'hulda'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Niere',
//         html: `<a href="https://grafvonkronenberg.group/produkt/40-tantum-1-nierentee-reinigung-100g?gvkaf=11">👉 Tantum 1 - Nierentee zur Nierenreinigung</a>
//     Alle Kräuter gut vermischen. Abends 2 gehäufte Esslöffel in 500ml kaltes Wasser geben und über Nacht bedeckt stehen lassen. Morgens kurz zum Sieden bringen, dann abseihen.

//     Flüssigkeit in 6-8 Portionen über den Tag verteilt entfernt von den Mahlzeiten trinken.

//     Tee kann warm oder kalt getrunken werden. Nicht süßen. Die Kur wird 20 Tage lang durchgeführt und sollte nach jeder zweiten Leberreinigung wiederholt werden.`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Niere'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Leber',
//         html: `Für die Parasitenkur oder Leberkur empfehlen wir die 

//     <a href="https://grafvonkronenberg.group/produkt/127-juglandis-parasiten-kur-nach-dr-hulda-clark?gvkaf=11">👉 Juglandis Kur Nach Dr. Hulda Clark</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'leber'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Herpes',
//         html: `Das Thema Herpes kennt so gut wie jeder: Schmerzhafte kleine Bläschen, die wieder abheilen, jedoch immer wieder vorkommen können. Jedoch kann Herpes auch an anderen Körperteilen auftreten, zum Beispiel im Intimbereich. Verursacht wird Herpes (Lippenherpes/Genitalherpes) von Herpes-simplex-Viren (HSV)

//     <a href="https://t.me/cdl_protokolle/36479">❔ Was ist Herpes? </a>

//     <a href="https://t.me/cdl_protokolle/36103">🐝 Propolis bei Herpes </a>

//     <a href="https://t.me/cdl_protokolle/33502">🚚 Empfehlung bei Herpes </a>

//     Diese Naturprodukte helfen bei Herpes:

//     <a href="https://bedrop.de/collections/propolis-tinktur/products/propolis-tinktur-tropfen-20-prozent-30ml?a_aid=168&a_cid=fc6342e0">💧 Propolis Tinktur 20%</a>

//     <a href="https://bedrop.de/collections/propolis-mundspray/products/propolis-tinktur-mundspray-wasserloslich-30ml?a_aid=168&a_cid=fc6342e0">👄 Propolis Tinktur 5% (Mund-) Spray</a>

//     <a href="https://bedrop.de/collections/propolis-kapseln/products/propolis-qualitat-60-kapseln-imker?a_aid=168&a_cid=fc6342e0">💊 Propolis Kapseln</a>

//     <a href="https://bedrop.de/products/manuka-honig-mgo-400-140g?a_aid=168&a_cid=fc6342e0">🍯 Manuka Honig</a>

//     <a href="https://bedrop.de/collections/vorteilspakete-artikel-sets/products/propolis-einsteiger-set-spray-20-tinktur-kapseln-reines-propolisextrakt?a_aid=168&a_cid=fc6342e0">💧👄💊Propolis Einsteiger Set | Spray Tinktur & Kapseln kostenloser</a>
//             `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'herpes'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Gürtelrose',
//         html: `Hilfe zu Gürtelrose

//     <a href="https://t.me/cdl_protokolle/71143">👉 Propolis hat sich in Form einer Salbe in der äußeren Anwendung von [...] Gürtelrose [...] als geradezu hervorragend herausgestellt.</a>  

//     <a href="https://t.me/cdl_protokolle/70469">👉 Gürtelrose ist in der Liste der Krankheiten die CDL heilen kann enthalten</a> 

//     <a href="https://t.me/cdl_protokolle/69409">👉 Bei Gürtelrose ist Entgiftung sehr wichtig </a>

//     <a href="https://t.me/cdl_protokolle/67992">👉 Geimpfte erleiden aktuell massenweise Gürtelrose</a> 

//     <a href="https://t.me/cdl_protokolle/63845">👉 Erfolgsbericht von Ati bei Gürtelrose</a> 

//     <a href="https://t.me/cdl_protokolle/62842">👉 Grapefruitkernextrakt bei Gürtelrose</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'gürtelrose'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'leberzirrhose',
//         html: `🧑‍⚕️Erste Hilfe bei Leberzirrhose 💊

//     <a href="https://t.me/cdl_protokolle/70675">👉 Die Alpha-Liponsäure findet eine therapeutische Anwendung bei Leberzirrhose</a> 

//     <a href="https://t.me/cdl_protokolle/92284">👉 Leberzirrhose alternativ behandeln laut Codex Humanus</a> 

//     <a href="https://t.me/cdl_protokolle/84149">👉 Curcumin schützt in Studien vor Leberzirrhose und Leberfibrose </a>

//     <a href="https://t.me/cdl_protokolle/85393">👉 Leberkur nach Juglandis Kur Nach Dr. Hulda Clark </a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Leberzirrhose'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Osteoporose',
//         html: `🦴🦴 Erste Hilfe bei Osteoporose 🦴🦴

//     <a href="https://t.me/cdl_protokolle/92876">👉 Zeolith kann Osteoporose positiv beeindlussen und die Knochenmineraldichte erhöhen.</a>

//     <a href="https://t.me/cdl_protokolle/92483">👉 Omega-3-Fettsäuren wirken gegen Osteoporose</a>

//     <a href="https://t.me/cdl_protokolle/83917">👉 Grüntee beugt dem Knochenabbau (Osteoporose) vor</a>

//     <a href="https://t.me/cdl_protokolle/81163">👉 OPC/Vitamin P bei Osteoporose</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'osteoporose'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Ebv and Epstein',
//         html: `<a href="https://grafvonkronenberg.group/produkt/50-ebv-pulver-mixtur-rezeptur?gvkaf=11">👉 EBV Pulver Mixtur Inspiriert Durch Medical Food</a> 

//     EBV (Epstein Barr Virus) Kräuter/Pulver Mischung / Kur nach einer verbesserten Rezeptur unter wissenschaftlichen Aspekten im Mischungsverhältnis hergestellt. Bei jeder Entgiftungskur, sei es Heilfasten oder jedes andere Verfahren hängt der Erfolg und die Verträglichkeit der Maßnahme auch von IHRER eigenen Essgewohnheit ab. Wir können Sie bei Ihren Maßnahmen nur unterstützend mit begleiten. 

//     <a href="https://grafvonkronenberg.group/produkt/50-ebv-pulver-mixtur-rezeptur?gvkaf=11">Diese 25 erlesene Kräuter wirken synergetisch.</a>👉  `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'epstein'
//                     },
//                     {
//                         text: 'ebv'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Entgift and Darm appear in one message',
//         html: `Bauchgefühl eine wohltuende Mischung für den Darm
//     <a href="https://www.waldkraft.bio/bauchgefuehl-kapseln-530-stk.?sPartner=energiereich">👉 Bauchgefühl Pulver </a>
//     - Liefert Vitamin C zur Erhöhung der Eisenaufnahme, zur Verringerung von Müdigkeit und Ermüdung und zur Unterstützung eines normalen Energiestoffwechsels.

//     Für die Unterstützung der Entgiftung empfehlen wir außerdem das  <a href="https://grafvonkronenberg.group/produkt/43-kur-paket-premium-tantum-12-und-3-plus-aufbau-programm?gvkaf=11">👉 Kur Paket Premium 4 </a>bestehend aus  
//     - Nierentee 100g
//     - Lebertee 100g
//     - Darm Sanierung Kur 100g
//     - Entgiftung/Reinigung/Verdauung 100g`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'entgift.*darm|darm.*entgift'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Cdl and Cds appear in one message',
//         html: `🧠 Wieder etwas schlauer geworden. 
//     CDL und CDS sind identisch. Dabei steht CD für Chlordioxid. 
//     L steht für Lösung 🇩🇪 während 
//     S für Solution 🇺🇸 🇬🇧 steht.     
//     Eigentlich ganz einfach oder?
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'cdl.*cds|cds.*cdl'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Herxheimer.*',
//         html: `💡 Was ist die <a href="https://t.me/cdl_protokolle/20902">👉 Herxheimer Reaktion?</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'herxheimer.*'
//                     }
//                 ]
//             }
//         }
//     },
//     // Supplement
//     {
//         name: 'Cdl and Mms appear in one msg',
//         html: `Der Unterschied zwischen CDL und MMS ist eine der häufigst gestellten Fragen. Das Wichtigste zuerst, Sowohl CDL als auch MMS enthalten Chlordioxid, also das Gas welches für die heilende / desinfizierende Wirkung verantwortlich ist. Man muss einzig allein bei der Dosierung unterscheiden. 1ml CDL entspricht einem (ativiertem) Tropfen MMS.  Hier findest du einige andere Antworten zu deiner Frage: 

//     <a href="https://t.me/cdl_protokolle/42181">👉 Von Rainer</a> 
//     <a href="https://t.me/cdl_protokolle/22649">👉 Video Erklärung von Andreas Kalcker</a>
//     <a href="https://t.me/cdl_protokolle/22252">👉 Eine zauberhafte Erklärung von Zauberfee</a>

//     Wer weiss wie CDL hergestellt wird (nämlich im ersten Schritt aus MMS) der kennt auch automatisch den Unterschied.

//     📺 <a href="https://t.me/cdl_protokolle/8250">Video CDL selbst herstellen (Gurkenglasmethode) Andreas Kalcker Methode</a>

//     Und wer WEISS muss weniger glauben. Also Lesen vertreibt alle Unsicherheiten: 

//     📕 <a href="https://t.me/c/1530359886/3">Gesundheit verboten - Unheilbar war gestern</a>

//         <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fosa-vita-cdl-03-0-inklusive-pipette">💊 OSA VITA® CDL 0,3 % inklusive Pipette (Kopp)</a>

//         <a href="https://ebay.us/8X5VXW">💊 CDL bei Ebay</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'cdl.*mms|mms.*cdl'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Zeolit.*',
//         html: `<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=https://www.cellavita.de/search?sSearch=zeolith">👉 Zeolith bei Cellavita Klinoptilolith</a>
//     <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fnaturzeolith-500-g-vegan">👉 Naturzeolith 500g, vegan bei Kopp (20µm) - 93% Klinoptilolith</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'zeolit.*'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Melatonin',
//         html: `Melatonin - das lebenswichtige Hormon für einen gesunden Schlaf

//     Melatonin spielt leider eine sehr unterschätzte Rolle, im menschlichen Körper. 
//     Es wird von der Zirbeldrüse im Gehirn gesteuert und ist unter anderem dafür Verantwortlich unser Schlafverhalten zu regulieren. 

//     Mögliche Folgen bei Schlafentzug können z.b. sein: 
//     - Depression
//     - negative Auswirkung auf unsere Organe
//     - vorzeitige Hautalterung

//     Melatonin hilft dir unter anderem bei:
//     - Jetlag
//     - Krebstherapie
//     - Haarwachstum
//     - Hautregeneration
//     - Covid 19
//     - Anti-Aging
//     - Herz/Kreislauf Erkrankung
//     - Winterdepression
//     - Gedächnisleistung
//     - hochwertiges Antioxidants, welches die Hautzellen vor UV-induziertem oxidativem Stress schützt. 

//     ✔️Ca. 30 - 60 min. vor dem Schlafen gehen einnehmen. 
//     ✔️Kein Gewöhnungseffekt
//     ✔️Keine Abhängigkeit

//     <a href="https://bit.ly/394J9pU">👉 Waldkraft Melatonin ⋄ Rosenöl Drops </a>
//     <a href="https://bit.ly/3lcxT00">👉 Kopp Vital Melatonin PLus Kapseln </a>
//     <a href="https://ebay.us/dTFuoG">👉 Melatonin bei Ebay </a>`,
//         image: 'https://images.healthshots.com/healthshots/en/uploads/2022/07/25192321/sleeping-habits-in-children-1600x900.jpg',
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'melatonin'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'D3',
//         html: `Vitamin D3 immer in Kombination mit Vitamin K2 nehmen. Ein hoher Vitamin D3 Spiegel schützt vor Corona. Die Älteren unter euch wissen dass man Corona damals (vor 2019) noch Grippe nannte. Zum Vitamin D3 gehört auch noch Magnesium. Ohne ausreichend Magnesium wird auch das D3 nicht ordentlich verstoffwechselt oder es wird problematisch bezüglich Krämpfe/ Reparaturarbeiten. Der Bedarf an elementarem Magnesium ist recht hoch (700/ 800mg). 

//     <a href="https://www.kopp-verlag.de/a/kopp-vital-vitamin-d3-tropfen?&6=27955475&otpcytokenid=27955475">👉 Vital Vitamin D3 Tropfen (1000 IE pro Tropfen)</a> 
//     <a href="https://www.kopp-verlag.de/a/kopp-vital-vitamin-k2-tropfen-vegan?&6=27955513&otpcytokenid=27955513">👉 Vital Vitamin K2 Tropfen </a>
//     <a href="https://www.kopp-verlag.de/a/kopp-vital-magnesium-oel-100-0-zechstein-1000-ml-vegan?&6=27955527&otpcytokenid=27955527">👉 Vital Magnesium-Öl </a> `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'd3'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'opc',
//         html: `<a href="https://www.kopp-verlag.de/KERN-Gesundes-OPC-SUPERFOOD-Traubenkernoel.htm?websale8=kopp-verlag&pi=A5555992&&6=34536000&otpcytokenid=34536000">👉 KERN-Gesundes OPC - SUPERFOOD Traubenkernöl</a>

//     Wusstest du, dass OPC die Wirkung von Vitamin C verzehnfacht? 

//     <a href="https://www.kopp-verlag.de/a/kopp-vital-opc-dual-plus-kapseln-2?&6=28586844&otpcytokenid=28586844">👉 Kopp Vital OPC Dual Plus Kapseln </a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'opc'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: '(.*)acetyl(.*)',
//         html: `N-Acetyl-L-Cystein ist im Körper in zahlreiche Stoffwechselprozesse involviert, ist Bestandteil von Haaren und Nägeln, aber auch Haut, Muskeln und Knochen und beeinflusst das Immunsystem.  

//     Ein Mangel an L-Cystein kann zu folgenden Beschwerden führen:

//     - Infektionen der Atemwege
//     - hohe Infektanfälligkeit durch Schwächung des Immunsystems
//     - gestörte Entgiftungsmechanismen in der Leber
//     - brüchige Haare und Nägel
//     - rissige, spröde, Haut

//     <a href="https://www.waldkraft.bio/nac-n-acetyl-l-cystein-hochrein?sPartner=energiereich">👉 NAC – N-Acetyl-L-Cystein – hochrein kaufen </a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: '(.*)acetyl(.*)'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Ausleit',
//         html: `<a href="https://t.me/cdl_protokolle/14923">📢 NEU! AI-Protokoll (Anti-Impf-Protokoll) der Comusav</a>

//     <a href="https://t.me/cdl_protokolle/5078">📺 CDL kann die Impfung / das Spike Protein ausleiten </a>

//     <a href="https://t.me/cdl_protokolle/7988">📘 Hinweis! Bitte Basiswissen aneignen </a>

//     <a href="https://grafvonkronenberg.group/produkt/321-koriander-co-schwermetall-ausleitung?gvkaf=11">🌿 Schwermetall Ausleitung mit Koriander und Co.</a> 

//     <a href="https://telegra.ph/Schwermetalle-ausleiten--Anleitung-03-26">❓ Wie leite ich Schwermetalle und Gifte aus meinem Körper ❔</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'ausleit'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Hgf',
//         html: `Klicke hier um zu den <a href="https://t.me/cdl_protokolle/9593">👉 Häufig gestellten Fragen</a> zu kommen. 

//     Achja, auch  <a href="https://t.me/cdl_protokolle/13">👉 im Startmenü</a> werden viele grundlegende Themen behandelt. 

//     Wird deine Frage da nicht behandelt, dann stell Sie uns gerne in die Gruppe. Wir helfen gerne.
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'hgf'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Cdl and Video are in the same msg',
//         html: `CDL bezogene Videos:

//     📺 <a href="https://t.me/cdl_protokolle/35864">Vortrag von Andreas Kalcker im Februar 2022</a>

//     📺 <a href="https://t.me/cdl_protokolle/20694">Lauterbach, Spahn und die Pharma HASSEN CDL. Hier siehst du warum</a>

//     📺 <a href="https://t.me/cdl_protokolle/8166">Malaria ist heilbar</a>

//     📺 <a href="https://t.me/cdl_protokolle/5078">CDL kann die Impfung / das Spike Protein ausleiten</a> 

//     📺 <a href="https://t.me/cdl_protokolle/8250">Video CDL selbst herstellen (Gurkenglasmethode) Andreas Kalcker Methode</a> 

//     📺 <a href="https://t.me/cdl_protokolle/14281">Video CDL selbst herstellen (Gurkenglasmethode) Johann Biacsics Methode</a>

//     📺 <a href="https://t.me/cdl_protokolle/11160">400 Symptome für wenige Euro ausheilbar.</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'cdl.*video|video.*cdl'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Tropfen and Bml appear in the same msg',
//         html: `<a href="https://t.me/cdl_protokolle/13073">👉  Tropfen oder ml? Die Angaben können verwirrend sein.</a>
//         `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'tropfen.*bml|bml.*tropfen'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Cdl and Selbst appear in the same msg',
//         html: `So kannst du CDL mit <a href="https://ebay.us/8r9AXB">👉 NaClO2 (Natriumchlorit)</a>  und <a href="https://ebay.us/8r9AXB">👉 HCL 4% (Salzsäure)</a>  selbst herstellen.

//     Du benötigst: 

//     - 1 Schnappsglas
//     - 1 Einmachglas
//     - <a href="https://ebay.us/deTMTX">👉 1 Spritze</a> 
//     - <a href="https://ebay.us/8r9AXB">👉 NACLO2 25%</a> 
//     - <a href="https://ebay.us/8r9AXB">👉 HCL 4%</a> 

//     Hier geht es zur <a href="https://t.me/cdl_protokolle/4777">👉 Videoanleitung</a>  

//     Wer keine Lust CDL selbst zu machen finden hier <a href="https://bit.ly/3DsZxhX">👉 fertiges CDL</a> .
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'cdl.*selbst|selbst.*cdl'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'heizen',
//         html: `<a href="https://www.blick.ch/ausland/britischer-wirtschaftsminister-warnt-wegen-gaskrise-vor-sehr-schwierigem-winter-werden-in-europa-millionen-menschen-frieren-id16855779.html">Britischer Wirtschaftsminister warnt wegen Gaskrise vor «sehr schwierigem Winter»</a>

//     Schütze Dich und Deine Familie und bereite dich vor:
//     <a href="https://www.kopp-verlag.de/a/heizstrahler-fuer-gaskartuschen?&6=42817076&otpcytokenid=42817076">👉 Heizstrahler für Gaskartuschen</a>
//     <a href="https://www.kopp-verlag.de/a/mr.-heater-mobile-gasheizung-inkl.-umruestschlauch-fuer-gasflasche?&6=42817128&otpcytokenid=42817128">👉 Mr. Heater Mobile Gasheizung inkl. Umrüstschlauch für Gasflasche</a>
//     <a href="https://www.kopp-verlag.de/a/petroleumheizung-mit-loeschautomatik?&6=42817168&otpcytokenid=42817168">👉 Petroleumheizung mit Löschautomatik</a>
//     <a href="https://www.kopp-verlag.de/a/raketenofen?&6=42817232&otpcytokenid=42817232">👉 Raketenofen - Kochen ohne Strom (mit Holz)</a>
//     <a href="https://ebay.us/jcnpdd">👉 Brennpaste bei Ebay (Indoor-geeignet)</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'heizen'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Spike',
//         html: `+‼️ACHTUNG WICHTIG‼️

//     Durch <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42864300&otpcytokenid=42864300">LÖWENZAHNEXTRAKT</a> soll es den SPIKE Proteinen NICHT möglich sein anzudocken. Neben Kiefernadel-Tee die ersten wirklichen Lösungsansätze neben den üblichen Möglichkeiten. 

//     ✅ <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42864300&otpcytokenid=42864300">LÖWENZAHNEXTRAKT</a> blockiert SARS CoV-2 Spike-Proteine und ihre Varianten

//     ✅ Die University of Freiburg, (Engesserstraße 4, 79108 Freiburg, Germany) fand heraus, dass der gewöhnliche Löwenzahn (Taraxacum officinale) die Spike-Proteine daran hindern kann, an die ACE2-Zelloberflächenrezeptoren in menschlichen Lungen- und Nierenzellen zu binden.

//     👉 HIER den <a href="https://uncutnews.ch/forschung-extrakt-aus-loewenzahnblaettern-blockiert-die-bindung-von-spike-proteinen-an-den-ace2-zelloberflaechenrezeptor/">kompletten Bericht</a> nachlesen!

//     HIER bekommt Ihr diesen 👉  <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42864300&otpcytokenid=42864300">wertvollen Extrakt</a> OHNE Zusätze und sogar fermentiert. (bitte zugreifen, solange noch vorrätig, es kommt schon zu Engpässen)
//     `,
//         image: `https://www.news-medical.net/images/news/ImageForNews_712485_16515722121186511.jpg`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'spike'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Löwenzahn',
//         html: `‼️ACHTUNG WICHTIG‼️

//     Durch <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42864300&otpcytokenid=42864300">LÖWENZAHNEXTRAKT</a> soll es den SPIKE Proteinen NICHT möglich sein anzudocken. Neben Kiefernadel-Tee die ersten wirklichen Lösungsansätze neben den üblichen Möglichkeiten. 

//     ✅ <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42864300&otpcytokenid=42864300">LÖWENZAHNEXTRAKT</a> blockiert SARS CoV-2 Spike-Proteine und ihre Varianten

//     ✅ Die University of Freiburg, (Engesserstraße 4, 79108 Freiburg, Germany) fand heraus, dass der gewöhnliche Löwenzahn (Taraxacum officinale) die Spike-Proteine daran hindern kann, an die ACE2-Zelloberflächenrezeptoren in menschlichen Lungen- und Nierenzellen zu binden.

//     👉 HIER den <a href="https://uncutnews.ch/forschung-extrakt-aus-loewenzahnblaettern-blockiert-die-bindung-von-spike-proteinen-an-den-ace2-zelloberflaechenrezeptor/">kompletten Bericht</a> nachlesen!

//     HIER bekommt Ihr diesen 👉  <a href="https://www.kopp-verlag.de/a/herrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan?&6=42864300&otpcytokenid=42864300">wertvollen Extrakt</a> OHNE Zusätze und sogar fermentiert. (bitte zugreifen, solange noch vorrätig, es kommt schon zu Engpässen)
//     `,
//         image: `https://www.news-medical.net/images/news/ImageForNews_712485_16515722121186511.jpg`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'löwenzahn'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Blackout',
//         html: `⚡️⚡️ Stromausfall - Blackout ⚡️⚡️

//     🆘 <a href="https://www.kopp-verlag.de/a/hyundai-stromgenerator-hy2000si-d-3?&6=27954685&otpcytokenid=27954685">Notstromaggregat zur Stromversorgung bei Stromausfällen</a> 🆘

//      Was ist wenn die Heizung im Winter ausfällt?  <a href="https://www.kopp-verlag.de/?6=27954761&query=heizen&channel=de&sid=Zq4lAhNGxsTW8gLvyA7aOCjbbQhupe&act=search&websale8=kopp-verlag&otpcytokenid=27954761">👉 Heizalternativen</a> 
//     `,
//         image: `https://www.rnd.de/resizer/kR5QAB-883y5uSKUFVljLcljKmA=/428x241/filters:quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/madsack/XYVDYC5CABER3DPBKEE57YRW6A.jpeg`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'blackout'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: '#Regel.*',
//         html: `Bitte beachte die <a href="https://t.me/cdl_protokolle/24305">Gruppenregeln</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: '#regel.*'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Cdl and Kaufen appear in the same msg',
//         html: `💦 Frisch produziertes CDL in sicherer Waldkraft-Qualität
//     💦 Bereits aktiviert, d.h. sofort einsatzbereit
//     💦 In pharmazeutischer Braunglasflasche
//     💦 Inkl. HDPE-Pipette zur genauen Dosierung
//     💦 Nach Originalrezeptur mit destilliertem Reinstwasser


//     💦 Chlordioxid ist der wirksamste Bakterienkiller, den die Menschheit kennt.“ (Amerikanische Gesellschaft für Analytische Chemie, 1999)


//     <a href="https://www.waldkraft.bio/cdl/cds-chlordioxid-in-originalrezeptur-chlordioxidloesung?sPartner=energiereich">👉 Jetzt bei Waldkraft kaufen </a>

//     <a href="https://www.waldkraft.bio/das-cdl-handbuch-gesundheit-in-eigener-verantwortung?sPartner=energiereich">📕 Das CDL-Handbuch - Gesundheit in eigener Verantwortung</a>

//     <a href="https://www.waldkraft.bio/gesundheit-verboten-andreas-kalcker?sPartner=energiereich">📕 Gesundheit verboten (Andreas Kalcker)</a>

//     <a href="https://www.waldkraft.bio/bye-bye-covid-andreas-kalcker?sPartner=energiereich">📕 Bye Bye Covid Andreas Kalcker</a>`,
//         image: `https://www.waldkraft.bio/media/image/3f/e6/d9/CDL-50ml-Mockup.png`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'cdl.*kaufen|kaufen.*cdl'
//                     },
//                     {
//                         text: 'cdl.*pipette|pipette.*cdl'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Alzheimer',
//         html: `Das Wissen in diesem Buch über 👉 ALZHEIMER möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.alzheimer-demenz.info/?a_aid=59fee147af35c">📕 Medizinskandal Alzheimer & Demenz</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Alzheimer'
//                     },
//                     {
//                         text: 'Demenz'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Adipositas',
//         html: `Das Wissen in diesem Buch über 👉 ADIPOSITAS möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.fett-killer.net/?a_aid=59fee147af35c">📕 Medizinskandal Adipositas</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Adipositas'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Alterung',
//         html: `Das Wissen in diesem Buch über 👉 ALTERUNG möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.alterung.org/?a_aid=59fee147af35c">📕 Medizinskandal Alterung</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Alterung'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Arthrose',
//         html: `Das Wissen in diesem Buch über 👉 ARTHROSE möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.arthrose-heilung.net/?a_aid=59fee147af35c">📕 Medizinskandal Arthrose</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Arthrose'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Allergie',
//         html: `Das Wissen in diesem Buch über 👉 ALLERGIE möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.allergie-heilung.net/?a_aid=59fee147af35c">📕 Medizinskandal Allergie</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Allergie'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Arteriosklerose',
//         html: `Das Wissen in diesem Buch über 👉 ARTERIOSKLEROSE möchte die Pharma am liebsten verbannen. 
//     <a href="https://www.vitaminum.net/31/medizinskandal-arteriosklerose?a_aid=59fee147af35c">📕 Medizinskandal Arteriosklerose</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Arteriosklerose'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Arthritis',
//         html: `Das Wissen in diesem Buch über 👉 ARTHRITIS möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.arthritis-heilung.com/?a_aid=59fee147af35c">📕 Medizinskandal Arthritis</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Arthritis'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Asthma and Bronchitis',
//         html: `Das Wissen in diesem Buch über 👉 BRONCHITIS möchte die Pharma am liebsten verbannen. 
//     <a href="https://www.vitaminum.net/27/medizinskandal-asthma-/-bronchitis?c=5&a_aid=59fee147af35c">📕 Medizinskandal Asthma/Bronchitis</a>`,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Bronchitis'
//                     }, {
//                         text: 'Asthma'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Bluthochdruck',
//         html: `Das Wissen in diesem Buch über 👉 BLUTHOCHDRUCK möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.bluthochdruck-therapie.com/?a_aid=59fee147af35c">📕 Medizinskandal Bluthochdruck</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Bluthochdruck'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Borreliose',
//         html: `Das Wissen in diesem Buch über 👉 BORRELIOSE möchte die Pharma am liebsten verbannen. 
//     <a href="https://www.vitaminum.net/29/medizinskandal-borreliose?a_aid=59fee147af35c">📕 Medizinskandal Borreliose</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Borreliose'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Depression',
//         html: `Das Wissen in diesem Buch über 👉 DEPRESSION möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.depressionen-behandlung.com/?a_aid=59fee147af35c">📕 Medizinskandal Depressionen</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Depression'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Diabetes',
//         html: `Das Wissen in diesem Buch über 👉 DIABETES möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.diabetes-behandlung.com/?a_aid=59fee147af35c">📕 Medizinskandal Diabetes</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Diabetes'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Krebs',
//         html: `Das Wissen in diesem Buch über 👉 KREBS möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.brisante-krebsheilung.com/?a_aid=59fee147af35c">📕 Medizinskandal Krebs</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Krebs'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Herzinfarkt',
//         html: `Das Wissen in diesem Buch über 👉 HERZINFARKT möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.herzinfarkt-vorbeugen.com/?a_aid=59fee147af35c">📕 Medizinskandal Herzinfarkt</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Herzinfarkt'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Impotenz',
//         html: `Das Wissen in diesem Buch über 👉 IMPOTENZ möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.potenz-turbo.com/?a_aid=59fee147af35c">📕 Medizinskandal Impotenz</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Impotenz'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Migräne and Kopfschmerzen',
//         html: `Das Wissen in diesem Buch über 👉 MIGRÄNE möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.migraene-kopfschmerzen.info/?a_aid=59fee147af35c">📕 Medizinskandal Migräne/Kopfschmerzen</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Kopfschmerzen'
//                     },
//                     {
//                         text: "Migräne"
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Pilzerkrankungen',
//         html: `Das Wissen in diesem Buch über 👉 PILZERKRANKUNGEN möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.pilzkrankheiten.org/?a_aid=59fee147af35c">📕 Medizinskandal Pilzerkrankungen</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Pilzerkrankungen'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Schlaganfall',
//         html: `Das Wissen in diesem Buch über 👉 SCHLAGANFALL möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.schlaganfall-vermeiden.com/?a_aid=59fee147af35c">📕 Medizinskandal Schlaganfall</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Schlaganfall'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Übersäuerung',
//         html: `Das Wissen in diesem Buch über 👉 ÜBERSÄUERUNG möchte die Pharma am liebsten verbannen. 
//     <a href="http://www.entsaeuern-entschlacken.info/?a_aid=59fee147af35c">📕 Medizinskandal Übersäuerung</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Übersäuerung'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Chlorella',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=random-ad&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-bio-chlorella-presslinge-vegan-2">Kopp Vital Bio-Chlorella Presslinge - vegan</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Chlorella'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Spirulina',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=random-ad&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-bio-spirulina-presslingenbsp%253b-vegan-2">Kopp Vital Bio-Spirulina Presslinge - vegan</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Spirulina'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Dosenbrot and Brot',
//         html: `👉 <a href="https://bit.ly/3yu35wk">Roggen-Vollkorn Dosenbrot</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Brot'
//                     },
//                     {
//                         text: 'Dosenbrot'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Cistus',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-bio-cistus-incanus-teekraut">Kopp Vital Bio-Cistus incanus Teekraut</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Cistus'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Notwasserbeutel',
//         html: `👉 <a href="https://bit.ly/3t12ukH">10er-Set Notwasserbeutel à 20 Liter</a> `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Notwasserbeutel'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'h2o2 and wasserstoffperoxid',
//         html: `👉 <a href="https://bit.ly/3DyhJ9B">Kopp Wasserstoffperoxid 11,9% (Ph.Eur.) 1 L</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'wasserstoffperoxid'
//                     },
//                     {
//                         text: 'h2o2'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Notstromaggregat and blackout and stromaus',
//         html: `👉 <a href="https://bit.ly/39qkBaT">Tragbares Notstromaggregat zur Stromversorgung bei Stromausfällen</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'stromaus'
//                     }, {
//                         text: 'blackout'
//                     }, {
//                         text: 'Notstromaggregat'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'stromaus',
//         html: `👉 <a href="https://bit.ly/39qkBaT">Tragbares Notstromaggregat zur Stromversorgung bei Stromausfällen</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'stromaus'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Codex Humanus',
//         html: `👉 <a href="https://bit.ly/freivonpharma">Codex Humanus - Bald verboten?</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Codex Humanus'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Grapefruit',
//         html: `👉 <a href="https://bit.ly/2WbbfwD">🍀 Kopp Vital Bio-Grapefruitkern-Extrakt 🍀</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Grapefruit'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'sango',
//         html: `👉 <a href="https://www.waldkraft.bio/sango-koralle--ideale-quelle-von-calcium-und-magnesium--120-kapseln?sPartner=energiereich">Sango-Koralle - die idealste Quelle von Calcium und Magnesium (120 Kapseln)</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'sango'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'msm',
//         html: `👉 <a href="https://bit.ly/3ENUMQJ">Kopp Vital MSM Kapseln - vegan</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'msm'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Kolloidales',
//         html: `👉 <a href="https://bit.ly/2ZxZp15">Kolloidales Silber 25ppm</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Kolloidales'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Zirbeldrüse',
//         html: `👉 <a href="https://bit.ly/3inuMBW">Geheimnisvolle Zirbeldrüse</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Zirbeldrüse'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Kokosöl',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=random-ad&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-bio-kokosoel-vegan-11">Kopp Vital Bio-Kokosöl - vegan</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Kokosöl'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Chia',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=random-ad&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-bio-chia-samen-im-buegelglas-vegan-17">Kopp Vital Bio Chia-Samen im Bügelglas</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Chia'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Astaxanthin',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=random-ad&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-astaxanthin-kapseln-vegan-13">Kopp Vital Astaxanthin Kapseln - vegan</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Astaxanthin'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Weihrauch',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=random-ad&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-weihrauch-kapseln-vegan-2">Kopp Vital Weihrauch Kapseln - vegan</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Weihrauch'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Arginin',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=random-ad&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-arginin-kapseln-13">Kopp Vital Arginin Kapseln</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Arginin'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Goji',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=random-ad&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-bio-goji-beeren-13">Kopp Vital Bio-Goji Beeren</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Goji'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Heiz',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=impffreigesund&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fpetroleumheizung-mit-loeschautomatik">⚡️Petroleumheizung mit Löschautomatik⚡️</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Heiz'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'löwenzahn',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fherrensmark-loewenzahn-extrakt-mit-milchsaeurebakterien-vegan">LÖWENZAHNEXTRAKT</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'löwenzahn'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Kollagen',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/drehen-sie-die-jahre-zurueck-mit-kollagen?&6=25823047&otpcytokenid=25823047">Drehen Sie die Jahre zurück mit Kollagen</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Kollagen'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Bingen',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/hildegard-von-bingennbsp%3bpilogal-galgant-tabs?&6=27242331&otpcytokenid=27242331">Hildegard von Bingen Pilogal ® Galgant-Tabs</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Bingen'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Karaffe',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/vitalkaraffe-golden-alladin-mit-zirbenholzdeckel-13-liter?&6=27355905&otpcytokenid=27355905">Vitalkaraffe Golden Alladin mit Zirbenholzdeckel 1,3 Liter</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Karaffe'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Dörr',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/infrarot-doerrautomat?&6=30304620&otpcytokenid=30304620">Infrarot-Dörrautomat</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Dörr'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'ferment',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/fermentations-set-kilner-4?&6=30305152&otpcytokenid=30305152">Fermentations-Set Kilner®</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'ferment'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'butter',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/butterfass-kilner-4?&6=30305174&otpcytokenid=30305174">Butterfass Kilner®</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'butter'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'brotback',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/brotbackautomat?&6=30305328&otpcytokenid=30305328">Brotbackautomat</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'brotback'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'artemisia',
//         html: `👉 <a href="https://grafvonkronenberg.group/produkt/157-artemisia-annua-salbe-mit-dmso-vit-e-manzanilla-oel-bienenwachs-40ml?gvkaf=11">Artemisia Annua Salbe Mit DMSO</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'artemisia'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'zahn',
//         html: `👉 <a href="https://grafvonkronenberg.group/produkt/311-zahnfix-revital-40ml?gvkaf=11">ZahnFix Revital 40ml</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'zahn'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'zähne',
//         html: `👉 <a href="https://grafvonkronenberg.group/produkt/311-zahnfix-revital-40ml?gvkaf=11">ZahnFix Revital 40ml</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'zähne'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'arthr',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/dr.-niedermaier-regulatpro-arthro-3er-pack?&6=32195728&otpcytokenid=32195728">Dr. Niedermaier Regulatpro Arthro 3er-Pack</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'arthr'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'germanium',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/kolloidales-germanium-konzentration-100-ppm-250-ml?&6=32203258&otpcytokenid=32203258">Kolloidales Germanium - Konzentration 100 ppm - 250 ml</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'germanium'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'gold',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/kolloidales-germanium-konzentration-100-ppm-250-ml?&6=32203738&otpcytokenid=32203738">Kolloidales Gold 5 ppm</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'gold'
//                     }
//                 ]
//             }
//         }
//     },
//     {
//         name: 'vitamin c',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/kopp-vital-cranberry-acerola-kapseln?&6=32209370&otpcytokenid=32209370">Kopp Vital Cranberry-Acerola Kapseln</a>
//     👉 <a href="https://www.kopp-verlag.de/a/kopp-vital-liposomales-vitamin-c?&6=27242369&otpcytokenid=27242369">Kopp Vital Liposomales Vitamin C</a>
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'vitamin c'
//                     }
//                 ]
//             }
//         }
//     },
//     {
//         name: 'curcum and kurkum',
//         html: `👉 <a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-curcuma-kapseln%3Fprod_number%3D128352">Kopp Vital Curcuma Kapseln</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'curcum'
//                     },
//                     {
//                         text: 'kurkum'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'kurkum',
//         html: ``,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'kurkum'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'opc',
//         html: `👉 <a href="https://www.kopp-verlag.de/KERN-Gesundes-OPC-SUPERFOOD-Traubenkernoel.htm?websale8=kopp-verlag&pi=A5555992&&6=34536000&otpcytokenid=34536000">KERN-Gesundes OPC - SUPERFOOD Traubenkernöl</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'opc'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'bingen',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/hildegard-von-bingen-1?&6=33868892&otpcytokenid=33868892">Hildegard von Bingen</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'bingen'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'guayusa',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/guayusa-bio-energytee-lose?&6=35362036&otpcytokenid=35362036kj">Guayusa Bio-Energytee lose</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'guayusa'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'dünge',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/duenger-selbstmach-set-2?&6=35362330&otpcytokenid=35362330">Dünger-Selbstmach-Set</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'dünge'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'htp and schlaf',
//         html: `👉 <a href="https://www.waldkraft.bio/5-htp-wohlfuehl-drops-griffonia-und-safran?number=PA10001&sPartner=energiereich">5-htp Wohlfühl Drops - Griffonia und Safran</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'htp'
//                     },
//                     {
//                         text: 'schlaf'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'schlaf',
//         html: ``,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'schlaf'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'artemisia and beifuß',
//         html: `👉 <a href="https://www.waldkraft.bio/artemisia-einjaehriger-beifuss?number=WK10139.2&sPartner=energiereich">Artemisia – Einjähriger Beifuß</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'beifuß'
//                     }, {
//                         text: 'artemisia'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'artemisia and manzanilla',
//         html: `👉 <a href="https://www.waldkraft.bio/artemisia-annua-balsam-beifuss-salbe-mit-dmso-vitamin-e-bienenwachs-und-manzanilla-oel?sPartner=energiereich">Artemisia Annua Balsam - Beifuß-Salbe mit DMSO, Vitamin E, Bienenwachs und Manzanilla-Öl</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'manzanilla'
//                     }, {
//                         text: 'artemisia'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Weihrauch and Arthrose',
//         html: `👉 <a href="https://www.waldkraft.bio/arthridea-die-goettin-der-gelenke?sPartner=energiereich">Arthridea Drops - Astaxanthin, Weihrauch und Hyaluron</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Weihrauch'
//                     },
//                     {
//                         text: 'Arthrose'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Astaxanthin',
//         html: `👉 <a href="https://www.waldkraft.bio/astaxanthin-aus-island-100-ml?number=PA10294&sPartner=energiereich">Astaxanthin aus Island 100 ml</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Astaxanthin'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Darm',
//         html: `👉 <a href="https://www.waldkraft.bio/bauchgefuehl-kapseln-530-stk.?sPartner=energiereich">Bauchgefühl Pulver</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Darm'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Gerstengras',
//         html: `👉 <a href="https://www.waldkraft.bio/gerstengras-saftpulver-bio?number=PA10290&sPartner=energiereich">Gerstengras Saftpulver Bio</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Gerstengras'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Borax',
//         html: `👉 <a href="https://www.waldkraft.bio/borax-99-9-reinheit-natriumtetraborat-380g?sPartner=energiereich">Borax 99,9% Reinheit (Natriumtetraborat) 380g</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Borax'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'Cannasan',
//         html: `👉 <a href="https://www.waldkraft.bio/cannasan-gold-5-10-ml?sPartner=energiereich">Cannasan Gold</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'Cannasan'
//                     }
//                 ]
//             }
//         }
//     }, {
//         name: 'zink',
//         html: `👉 <a href="https://www.kopp-verlag.de/a/kopp-vital-zink-dual-plus-kapseln-2?&6=42371800&otpcytokenid=42371800">Kopp Vital Zink Dual Plus Kapseln</a> 
//     `,
//         keywords: {
//             createMany: {
//                 data: [
//                     {
//                         text: 'zink'
//                     }
//                 ]
//             }
//         }
//     }, 
    {
        name: 'katze',
        html: `Bitte abonniere auch unsere neue Gruppe für Haustiere, und stelle deine Frage da. Das hilft allen langfristig die Übersicht zu bewahren. 

    <a href="https://t.me/+H1AVvU4mE5U5NWNi">❤️ Gesunde 🐶🐱🐴 Haustiere ❤️ </a>

    Auch deine geliebte 🐱 benötigt für optimales Wachstum hochwertige Nahrungsergänzungsmittel. Dein spezieller 🐱10% Gutschein🐱 auf deine erste Bestellung lautet energiereich
    `,
        additional: {
            inline_keyboard: [
                [
                    { text: "Gelenke & Bewegung", url: "https://bit.ly/3CWmREr" },
                    { text: "Magen & Darm", url: "https://bit.ly/3iXsBG1" },
                ],
                [
                    { text: "Leber-Niere", url: "https://bit.ly/3sr2UAO" },
                    { text: "Schadstoffe ausleiten", url: "https://bit.ly/3iZ2tui" },
                ],
                [
                    { text: "Parasitenbefall", url: "https://bit.ly/37TWZe3" },
                    { text: "Haut und Fell", url: "https://bit.ly/2W7fNny" },
                ],
                [
                    { text: "BARF-Zusätze", url: "https://bit.ly/2W8fqJJ" },
                    { text: "Immunsystem", url: "https://bit.ly/3y2OpEm" },
                ],
                [
                    { text: "Nerven & Stress", url: "https://bit.ly/3gg1NPz" },
                    { text: "Bakterien & Viren", url: "https://bit.ly/37RuP3i" },
                ],
                [
                    { text: "Labortests", url: "https://bit.ly/37S0XUz" },
                    { text: "Geschenkgutscheine", url: "https://bit.ly/3gd9ndN" },
                ],
            ]
        },
        keywords: {
            createMany: {
                data: [
                    {
                        text: 'katze'
                    }
                ]
            }
        }
    }, {
        name: 'pferd',
        html: `Bitte abonniere auch unsere neue Gruppe für Haustiere, und stelle deine Frage da. Das hilft allen langfristig die Übersicht zu bewahren. 

    <a href="https://t.me/+H1AVvU4mE5U5NWNi">❤️ Gesunde 🐶🐱🐴 Haustiere ❤️ </a>

    Auch dein 🐴 Pferd benötigt hochwertige Nahrungsergänzungsmittel. Dein spezieller 🐴10% Gutschein🐴 auf deine erste Bestellung lautet energiereich
    `,
        additional: {
            inline_keyboard: [
                [
                    { text: "Gelenke & Bewegungsapparat", url: "https://bit.ly/3sAVH11" },
                    { text: "Magen Darm", url: "https://bit.ly/3gg5Afz" },
                ],
                [
                    { text: "Ausleiten", url: "https://bit.ly/3srlc4V" },
                    { text: "Bei Parasiten", url: "https://bit.ly/3CVQMfT" },
                ],
                [
                    { text: "Haut / Fell", url: "https://bit.ly/3CYzNK4" },
                    { text: "Immunsystem unterstützen", url: "https://bit.ly/3D0zhv5" },
                ],
                [
                    { text: "Nerven / Stress", url: "https://bit.ly/3z37Iim" },
                    { text: "Bakterien / Viren", url: "https://bit.ly/3mfEU2y" },
                ],
                [
                    { text: "Labortests", url: "https://bit.ly/3z19bp5" },
                    { text: "Cannasan", url: "https://bit.ly/3CWDgsv" },
                ],
                [
                    { text: "Hanf Pellets", url: "https://bit.ly/3jYEL0o" },
                    { text: "MSM", url: "https://bit.ly/2W2uxny" },
                ],
                [{ text: "Ozonisierte Öle", url: "https://bit.ly/3iU0lnE" }]
            ]
        },
        keywords: {
            createMany: {
                data: [
                    {
                        text: 'pferd'
                    }
                ]
            }
        }
    }, {
        name: 'Hund\b',
        html: `Bitte abonniere auch unsere neue Gruppe für Haustiere, und stelle deine Frage da. Das hilft allen langfristig die Übersicht zu bewahren. 

    <a href="https://t.me/+H1AVvU4mE5U5NWNi">❤️ Gesunde 🐶🐱🐴 Haustiere ❤️ </a>

    Auch dein geliebter 🐶 benötigt für optimales Wachstum hochwertige Nahrungsergänzungsmittel. Dein spezieller 🐶10% Gutschein🐶 auf deine erste Bestellung lautet energiereich
    `,
        additional: {
            inline_keyboard: [
                [
                    { text: "Bewegungsapparat", url: "https://bit.ly/3ySyVUJ" },
                    { text: "Parasiten", url: "https://bit.ly/3gcKLSc" },
                ],
                [
                    { text: "Nerven & Stress", url: "https://bit.ly/3m7y3Im" },
                    { text: "Leckerli", url: "https://bit.ly/3mkDALw" },
                ],
                [
                    { text: "Leber & Niere", url: "https://bit.ly/3xYV0Q2" },
                    { text: "Haut & Fell", url: "https://bit.ly/37S99nB" },
                ],
                [
                    { text: "Bakterien & Viren", url: "https://bit.ly/3mcv2q1" },
                    { text: "Magen-Darm", url: "https://bit.ly/3y7OBm1" },
                ],
                [
                    { text: "BARF-Zusätze", url: "https://bit.ly/2W74egr" },
                    { text: "Labortests", url: "https://bit.ly/3k1dyud" },
                ],
                [
                    { text: "Ausleitung", url: "https://bit.ly/3CPILZQ" },
                    { text: "Immunstärkung", url: "https://bit.ly/3ssF2wC" },
                ],
            ]
        },
        keywords: {
            createMany: {
                data: [
                    {
                        text: 'hund\b'
                    }
                ]
            }
        }
    },
    // {
    //     name: 'headache',
    //     html: `👉 <a href="https://www.kopp-verlag.de/a/kolloidales-germanium-konzentration-100-ppm-250-ml?&6=32203738&otpcytokenid=32203738">Headache is a real problem</a> 
    // `,
    //     keywords: {
    //         createMany: {
    //             data: [
    //                 {
    //                     text: 'gold'
    //                 }
    //             ]
    //         }
    //     }
    // },
]
