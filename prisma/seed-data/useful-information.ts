import { Prisma } from "@prisma/client";

const images_silicium = '1';
const images_selen = '2';
const images_q10 = '3';
const images_royal = '4';
const images_germanium = '5';
const images_opc = '6';
const images_omega3 = '7';
const images_mms = '8';
const images_melatonin = '9';
const images_lcarnosin = '10';
const images_carnitin = '11'; 
const images_nac = '12';
const images_lapacho = '13';
const images_b17 = '14';
const images_kombucha = '15';
const images_silber = '16';
const images_gold = '17';
const images_greentea = '18';
const images_gke = '19';
const images_granatapfel = '20';
const images_camu = '21';
const images_propolis_bedrop = '22';
const images_propolis = '23';
const images_curcuma = '24';
const images_colostrum = '25';
const images_astragalus = '26';
const images_aronia = '27';
const images_skin = '28';
const images_brain = '29';
const images_alphalipon = '30';
const images_supplements = '31';
const images_hochdosiert = '32';
const images_water = '33';
const images_sport = '34';
const images_aerzte = '35';
const images_gingko = '36';
const images_bluthochdruck = '37';
const images_koriander = '38';
const images_gesundheit_verboten = '39';
const images_artemisia = '40';
const images_krebs = '41';
const images_adipositas = '42';
const images_magenwohl = '43';
const images_urshache = '44';
const images_bilder = '45';
const images_alzheimer = '46';

const afflinks = {
    silicium: '1',
    selen: '2',
    q10: '3',
    royal: '4',
    germanium: '5',
    opc: '6',
    omega3: '7',
    mms: '8',
    melatonin: '9',
    lcarnosin: '10',
    carnitin: '11',
    nac: `12`,
    lapacho: `13`,
    b17: `14`,
    kombucha: `15`,
    silber: `16`,
    gold: `17`,
    greentea: `18`,
    gke: `19`,
    granatapfel: `20`,
    ala: `21`,
    astragalus: `22`,
    aronia: `23`,
    camu: `24`,
    colostrum: `25`,
    curcuma: `26`,
    propolis: `27`,
    propolis_bedrop_dermatitis: `28`,
    ginkgo: `28`
}


export const usefulInformationDatas: Prisma.UsefulInformationUncheckedCreateInput[] = [
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
Einem aktuellen Bericht der Weltgesundheitsorganisation (WHO) zufolge stellt die Hypertonie (Bluthochdruck) weltweit das größte Gesundheitsrisiko dar, noch vor Rauchen und Alkohol!
Entsprechend der „ Global Burden of Disease Study 2010“ hat Bluthochdruck sogar das bislang führende Risiko „Hunger im Kindesalter“ abgelöst und gilt aktuell weltweit als Todesursache Nr.1!
  `,
        quelleId: "6",
        seite: 5,
    },
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
Volkskrankheit Bluthochdruck Risikofaktor für Herzinfarkt und Schlaganfall
  
Auswertungen von zahlreichen Studien untermauern unmissverständlich das Verständnis um Bluthochdruck als potentiellen Risikofaktor für zahlreiche Herzkreislauferkrankungen, aber auch für die häufig tödlich endenden Herzinfarkte und Schlaganfälle!
So sollen ca. 50% aller Todesfälle in Deutschland direkt oder indirekt auf Bluthochdruck zurückzuführen sein, mehr als 400.000 Todesfälle aufgrund Herzkreislauferkrankungen gehen indessen direkt auf das Konto von Bluthochdruck (Hypertonie) zurück!
  `,
        quelleId: "6",
        seite: 5,
    },
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
So ist Deutschland tatsächlich der Vorreiter mit 55% aller Einwohner, die unter Hypertonie (Bluthochdruck) leiden! Es handelt sich dabei um ein ernstzunehmendes Problem, das zunehmend mehr Menschen, tendenziell auch immer jüngere betrifft. Steigender Leistungsdruck, denaturierte Ernährung (=Vitalstoffmangel!),  Bewegungsmangel und nicht zuletzt Medikamenteneinnahme werden hierfür verantwortlich gemacht.
  `,
        quelleId: "6",
        seite: 6,
    },
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
Symptome für Bluthochdruck
Als besonders tückisch erweist sich die Tatsache, dass die Entwicklung von Bluthochdruck schleichend und zumeist unbemerkt vonstattengeht. Während die wenigsten etwas Böses ahnen, entwickelt sich der Bluthochdruck zu einem lebensbedrohenden Aspekt, schädigt zunächst unbemerkt die Arterien sowie den Herzmuskel.
  
Und so bemerken viele ihre Hypertonieerkrakung erst nach vielen Jahren, wenn bereits ernsthafte Folgeschäden eingetreten sind, bereits das Herz, das Hirn und die Nieren nach schulmedizinischem Verständnis irreparabel in Mitleidenschaft gezogen wurden!
  `,
        quelleId: "6",
        seite: 6,
    },
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
Symptome für Bluthochdruck
  
Zu den typischen Symptomen des Bluthochdrucks gehören Kopfschmerzen, eine permanente Erschöpfung samt Leistungsabfall, Schwindelgefühle zu unterschiedlichen Tageszeiten, Kurzatmigkeit, deprimierte Stimmung, gesteigerte Nervosität. Diese können stärker oder schwächer ausfallen, für sich allein oder in Verbund. Im weiteren Verlauf äußert sich Bluthochdruck nicht selten durch häufiges Nasenbluten und Ohrensausen.
  `,
        quelleId: "6",
        seite: 6,
    },
    {
        usefulInformationImageId: images_urshache,
        quelleId: "8",
        seite: 37,
        text: `
  Bin ich sauer? – der objektive pH-Test verrät es:
  
  Symptome können durchaus subjektiv empfunden werden. Um Ihren Säure-Basen-Zustand ganz objektiv festzustellen, besorgen Sie sich in der Apotheke s.g. „pH-Teststreifen“. 
  
  Messen Sie an drei aufeinander folgenden Tagen jeweils morgens, mittags und abends mit Hilfe des Teststreifens Ihre Werte (für einige Sekunden darauf urinieren oder im Becher mit Urin reinhalten), und notieren Sie diese dann. Nehmen Sie im Anschluß den Durchschnittswert aller 9 Werte aus diesen 3 Tagen (zusammenaddieren und durch 9 dividieren) und Sie erhalten einen ziemlich genaue Auswertung zu Ihrem Säure-Basen-Haushalt!
  
  Ziel sollte es sein, Ihren pH-Wert im Durchschnitt dauerhaft in den basischen Bereich zu verschieben (>7)
  
  <a href="https://www.waldkraft.bio/magenwohl-dein-barf-zusatz-bei-uebersaeuerung?number=WK10189V-001&sPartner=energiereich">👉 Magenwohl - Dein BARF-Zusatz bei Übersäuerung </a>
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
  Allergien
  
  Um den Organismus zu entsäuern, wird u.a. auch das Hormon „Histamin“ ausgeschüttet. Dieses Hormon wird aber bei allen Allergien ausgeschüttet und gilt als Auslöser für allergische Reaktionen. Um also Allergien in Griff zu bekommen, liegt es auf der Hand, zunächst den Säuregrad des Körpers (pH-Wert) in Lot zu bringen, bevor man andere Maßnahmen einleitet, um die Ausschüttung des Hormons „Histamin“ zu verhindern.
  
  <a href="https://www.waldkraft.bio/magenwohl-dein-barf-zusatz-bei-uebersaeuerung?number=WK10189V-001&sPartner=energiereich">👉 Magenwohl - Dein BARF-Zusatz bei Übersäuerung </a>
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
  Alterung
  
  Während wir gegen chronologisches Altern nichts tun können, liegt die biologische Alterung durchaus weitestgehend in unseren Händen. Entsprechend der Meinung vieler Forscher, liegt die Hauptursache des Alterns an Säuren, sowie Schlacken, die neutralisierte Säuren hinterlassen und die sich dann im Körperinneren ansammeln. Desweiteren fordert die Neutralisierung der Säuren eine Entmineralisierung unseres Organismus, so der Haut, der Haare, Nägel, Knochen, Zähne, Gelenkknorpel, Blutgefäße und Organe - beides in Verbund führt zu alterstypischen Anzeichen und vorzeitigem Verschleiß des Körpers = Alterung  
  
  <a href="https://www.waldkraft.bio/magenwohl-dein-barf-zusatz-bei-uebersaeuerung?number=WK10189V-001&sPartner=energiereich">👉 Magenwohl - Dein BARF-Zusatz bei Übersäuerung </a>
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
  Arteriosklerose gilt als Hauptursache für Herzkreislauferkrankungen. Diese wiederum stellen den Grund für 50% aller Todesfälle in den Industrieländern dar!
  
  Um zu entsäuern, benötigt der Organismus Mineralien. Da das hierfür benötigte Kalzium in den Blutgefäßen schneller zur Verfügung steht, als das Kalzium in den Knochen, muss der sofort zur Verfügung stehende Kalziumspeicher der Blutgefäße angezapft werden.
  So zapft der Körper das Kalzium der mineralstoffreichen Intima (innere Schicht der Blutgefäße) an und zerstört diese damit. Es entstehen kleinste Mikrorisse.
  Um weiteren Schaden abzuwenden, produziert der Körper verstärkt Cholesterin, das die Risse flicken soll. Statt aber Kalzium zurück in den Blutgefäßen einzulagern, [...]
  
  <a href="https://www.waldkraft.bio/magenwohl-dein-barf-zusatz-bei-uebersaeuerung?number=WK10189V-001&sPartner=energiereich">👉 Magenwohl - Dein BARF-Zusatz bei Übersäuerung </a>
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
Arthrose
  
Ob nun beim Bandscheibenvorfall oder der Arthrose – die Mechanismen sind stets die selben: zur Neutralisierung der Säuren zapft der Körper aus dem Gelenkknorpel (beim Bandscheibenvorfall aus der Bandscheibe) die für die Neutralisierung nötigen Mineralstoffe an.
Die Gelenkflüssigkeit, s.g. „Synovia“ verändert durch die Basenentnahme ihre Konstistenz und wird dickflüssig, die abgelagerten Schlackenkristalle bilden in Verbindung mit der dickflüssigen Synovia eine „schmirgelartige“ Masse, dies führt zunächst zu Funktionseinbussen, im Laufe dieses Prozesses zum Untergang des Gelenkknorpels (bzw. der Bandscheibe beim Bandscheibenvorfall), der s.g. „Arthrose“.
Ziel der Therapie muß hier heißen, den Körper zu entsäuern und anschließend zu remineralisieren, desweiteren den Knorpel mit kollagenaufbauenden [...]
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
  Asthma
  
  Das allergische Asthma setzt aufgrund der Übersäuerung das Hormon Histamin frei sowie Lähmung der Lungenkapillaren. Beides führt zu der typischen allergischen Reaktion beim Asthma, der Bronchen- Verkrampfung und daraus resultierender Atemnot.
  Das nichtallergische Asthma resultiert ebenfalls aus Übersäuerung - hier verkrampft die Atemmuskulatur aufgrund der vielen Säuren im Körper, was den Asthma-Anfall provoziert.
  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 10,
        text: `
Das Problem ist das Unwissen, das Nicht-Wissen dessen, was auf der Welt geschieht, weil man sich nie damit auseinandergesetzt hat. Man kennt sich am Urlaubsort bestens aus, weiß, wo es das beste Essen gibt, informiert sich über das neueste Handy, weiß, was der Mode-Trend ist und kennt die aktuelle Aufstellung der Fußballmannschaft. Aber das war es auch schon. Ein großer Teil der Menschen lebt ein banales, ein „profanes“ Leben - wie Freimaurer über die Nicht-Eingeweihten zu sagen pflegen. Der Normalbürger will alles haben - Sex, Haus, Auto, Klamotten, Reisen - und alles so billig wie möglich. Er hat das, was man ihm in der Schule und auf der Uni beigebracht hat, schön brav nachgeplappert und auswendig gelernt - und nie hinterfragt. Das sind die Menschen, die alles glauben, was in der Tagesschau kommt oder was die etablierten  Parteienvertreter ihnen vorgaukeln.  [...]

  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 12,
        text: `
Dieser erklärte mir damals, dass ihr „größtes Problem die #Überbevölkerung sei“ und: „Wir haben Waffen entwickelt, sogenannte ,Ethno-Waffen\ die auf genetische Merkmale ansprechen und es uns so ermöglichen, nur bestimmte Bevölkerungsteile bzw. Rassen zu dezimieren.“ Es ging hier um die aus seiner Sicht „minderwertigen“ Völker Afrikas, aber auch Bevölkerungsteile der westlichen Welt. In seinen Augen sind die Volksmassen der Welt wie Tiere, da sie sich auch so verhalten würden. Die Menschen müsse man wie eine Herde ansehen und auch so mit ihnen umgehen. „Und was macht man mit Vieh?“, fragte er mich. „Markieren!“ Und deshalb bekommen die Menschen einen Chip unter die Haut - so seine Argumentation. „Wer sucht, der wird finden! Doch die meisten Menschen wollen gar nicht suchen. Deswegen unterscheiden wir sie auch nicht von den Tieren, denn die suchen auch nicht. Klar?

  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 12,
        text: `
Ich stellte ihm damals auch die Frage, wann das Bargeld entzogen wird, was er folgendermaßen beantwortete: „Das kommt darauf an, wie sich andere Faktoren entwickeln. Es wird neue Terroranschläge geben, da wir durch diese die Massen mürbe machen. Die Menschen der Welt werden uns darum bitten, die Welt für sie sicherer zu machen, was wir durch unsere Technologie - die längst entwickelt ist - auch tun werden. Das Bargeld wird verschwinden, doch es wird mit einem anderen Ereignis parallel laufen, über das ich Ihnen leider nichts sagen kann. Sonst dürfte ich Sie heute Nacht nicht mehr nach Hause lassen. “

Nun, das war im Jahre 2003, und 2004 hatte ich es in meinem Buch „Hände weg von diesem Buch!“ auch nachweislich in diesem Wortlaut veröffentlicht. Es ist alles geplant! Die Menschen sind durch die Corona-Krise so hirngewaschen, dass sie [...]
  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 17,
        text: `
Die Neurodermitis war bei mir in der Jugend nicht so ausgeprägt, was sich jedoch änderte, als ich mehrere Zähne mit #Amalgam befüllt bekam - damals war das noch so üblich. Damit wurde das Hautleiden so schlimm, dass ich die #Neurodermitis am ganzen Leib hatte - eine Qual sondergleichen. Uber Jahre hinweg war es kaum auszuhalten mit der Juckerei, bis mein Vater dann meinte, dass das Amalgam raus und durch Gold-Inlays ersetzt werden müsse. In dieser Zeit - damals war ich zirka 20 Jahre alt -, begann ich dann damit, mich intensiv mit dem Thema „Gesundheit“ auseinanderzusetzen und besuchte nach meiner abgeschlossenen Raumausstatter-Ausbildung eine Heilpraktiker-Schule in München.[...]

  `,
    },

    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 21,
        text: `
Im Grunde ist das, was Dr. #Hamer beschreibt, absolut logisch. So, wie uns Arger auf den Magen schlägt und permanenter Stress das Herz schädigt, so ist das auch mit schockartigen Erlebnissen. Ich weiß noch genau, als im Jahre 2010 aufgrund eines großen finanziellen Verlustes meine Haarfarbe innerhalb weniger Wochen von Braun auf Grau wechselte. Bei manchen Menschen geschieht das teilweise über Nacht.

  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 22,
        text: `
Hinzufügen möchte ich hier auch, dass Dr. Hamer nicht der Einzige ist, der zu dieser Erkenntnis gekommen ist. Alleine in den USA gibt es mehrere Therapeuten, die verstanden haben, dass jeder Krankheit, vor allem dem Krebs, ein traumatisches Ereignis zugrunde liegt, das es zu ergründen gilt. Erkenne ich die Ursache und löse sie, so verschwindet auch die Krankheit. Es gibt Privatkliniken, auch in Deutschland, die zur normalen Praxis eine psychologische Onkologie haben, wo gezielt die Konflikte der Menschen behandelt werden - parallel zur Bestrahlung oder zu einem Eingriff.
  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 70,
        text: `
Ich kenne einige Frauen, die sich weigern, das großzügige Geschenk ihrer Krankenkasse, das Mammografie-Screening anzunehmen. Ich gehöre auch dazu, weil ich der Meinung bin, dass die Risiken größer sind als der Nutzen. Der Körper bildet ständig maligne Zellen, meist verschwinden sie wieder. Beim Mammografie-Screening wird mit  Röntgenstrahlen gearbeitet, dadurch können schlummernde Krebszellen aktiviert werden. 10 Prozent aller gescreenten Frauen werden wegen Falsch-Diagnosen zu Opfern der Screening- und Krebsindustrie, Kritiker nennen das Mammografie-Screening ein „Patienten-Rekrutierungs-Programm“.`,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 72,
        text: `
„Wenn ich an Krebs erkranken würde, dann würde ich mich auf gar keinen Fall in einem herkömmlichen Krebszentrum behandeln lassen. Es haben nur jene Krebsopfer eine Überlebenschance, die sich von diesen Zentren fernhalten.“
Prof. Charles Mathe, Krebsspezialist  
`,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 84,
        text: `
Wolfram Kunz schildert einen Fall, bei dem eine Kupferspirale Entzündungsherde im Gehirn auslöste: „Eine Frau kam zu einem Heilpraktiker. Sie hatte gleich mehrere Entzündungsherde im Gehirn. Der behandelnde Arzt vermutete, sie müsse irgendwo im Körper einen Herd haben, wo diese Entzündungen herkommen. ... Beim Gespräch fand der Heilpraktiker heraus, dass sie aktuell noch eine Kupferspirale trug. ... Wie belämmert kann eine Medizin eigentlich sein? Zuerst implantiert man mit Gewalt eine Entzündung, und dann rätselt man, wo diese wohl herkommt. Geht's eigentlich noch?“  
`,
    },
    {
        usefulInformationImageId: images_alzheimer,
        quelleId: "7",
        seite: 5,
        text: `
Über eine Million Deutsche leiden unter Demenz, für sehr viele folgt im späteren Stadium notgedrungen der Aufenthalt in einem Heim, wenn die Entwicklung der Erkrankung Dimensionen annimmt, die die Angehörigen überlasten, um die anspruchsvolle Pflege noch gewährleisten zu können. Übersetzt bedeutet der lateinische Begriff „Demenz“ „ohne Geist“, was ziemlich genau den Verlauf der Erkrankung charakterisiert – einen Verlauf, der den fortschreitenden Verlust geistiger Fähigkeit bedeutet!

Alzheimer, benannt nach dem deutschen Arzt Alois Alzheimer, der diese Erkrankung als Erster erforscht hat, ist die häufigste Form der Demenz, dadurch charakterisiert, dass
zunächst das Kurzzeitgedächtnis, im Anschluss auch das Langzeitgedächtnis stätig abnimmt. `,
    },
    {
        usefulInformationImageId: images_alzheimer,
        quelleId: "7",
        seite: 5,
        text: `
Rund 60% aller Demenz-Erkrankten sind der Alzheimer-Form zuzurechnen, bei 10-20% aller Demenz-Erkrankten ist diese auf eine Störung der Hirndurchblutung zurückzuführen. Zu Beginn der Erkrankung äußert sich diese zunächst charakteristischerweise durch Wortfindungsprobleme sowie Gedächtnislücken, es ist in diesem Stadium sehr schwierig da bereits eine normale Hirnalterung von der Alzheimer-Demenz zu unterscheiden.

Die Ursachen für die Alzheimer-Demenz sind bis zum heutigen Tage trotz aufwändiger Forschung nicht abschließend geklärt, neben einer genetischen Disposition werden mehrere Faktoren als mögliche Ursache angenommen, wobei die Schulmedizin am stärksten an der Plaque-Hypothese festhält.
  `,
    },
    {
        usefulInformationImageId: images_alzheimer,
        quelleId: "7",
        seite: 6,
        text: `
Als ziemlich gesichert gilt, dass die globale Umweltbelastung, die im zunehmenden Maße fortschreitende Vergiftung unserer Luft, unseres Wassers und unserer Lebensmittel eine große Rolle spielt! Der zunehmende Einsatz von Pestiziden, Herbiziden und Fungiziden auf den Feldern, der wachsende Einsatz von Konservierungsstoffe, Farbstoffe, Glutamat u.a. durch die Lebensmittelindustrie, die über das Blut zu unseren Hirnzellen transportiert werden fordern über die Jahre und Jahrzehnte Tribut -, in dem Sie die Neuronen im Hirn stetig, dafür nachhaltig schädigen!

Selbiges gilt für Zahngifte, Amalgam, Palladium, Quecksilber – Begriffe, die untrennbar mit der Entstehung der besagten Erkrankungen in Verbindung gebracht werden. Aber auch Übersäuerung des Organismus kann Alzheimer und Demenz begünstigen!  
  `,
    },
    {
        usefulInformationImageId: images_alzheimer,
        quelleId: "7",
        seite: 7,
        text: `
Eine gezielte Behandlung von Alzheimer und Demenz sollte das Ziel verfolgen, möglichst die Hirnzellen zu entlasten und neu zu aktivieren.
Während man bei fortschreitender Demenz von „Fortschritt“ sprechen kann, wenn man den degenerativen Prozess der Erkrankung aufhalten, zumindest aber verzögern kann, sollte man das ehrgeizige Ziel nicht aus den Augen lassen, möglichst Besserung des Zustands herbei zu führen! Im Gegensatz zu dem, was uns die konventionelle Medizin
weismachen möchte, lässt sich Alzheimer und Demenz laut zahlreichen Studien positiv beeinflussen, Studien die der Schulmediziner jedoch auf der medizinischen Universität landläufig nicht zu Gesicht bekommt, Studien zu Naturheilsubstanzen, die nicht patentierbar sind und daher der Pharmaindustrie finanziell nichts nutzen und auch den Ärzten nicht allzuviel Profit einbringen (im Gegensatz zu Medikamenten aus der Giftküche der Pharmaindustrie!)
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 13,
        text: `
Ginkgo - was ist das und wie hilft es gegen Alzheimer und Demenz?
Beim Ginkgo handelt es sich um die wahrscheinlich älteste Pflanzenart, die unser Planet jemals hervorgebracht hat und seit rund 200 Millionen Jahren beherbergt. Der Ginkgo Biloba ist der letzte Überlebende der Pflanzenfamilie der Ginkgoaceen und gehört weder den Nadel-noch den Laubbäumen an, steht hingegen von seiner Art her irgendwo dazwischen und stellt für die heutige Zeit daher innerhalb der Botanik ein Phänomen dar.

Seine Langlebigkeit (nicht selten 4000 Jahre!) und Widerstandsfähigkeit ist legendär, so weist der Ginkgo-Baum eine schier unglaubliche Resistenz gegenüber Hitze, Kälte, Umweltbelastung, Gifte, Strahlen, Viren, Bakterien, Pilzen und Erkrankungen aller Art auf. Er überlebte nicht nur die Dinosaurier, sondern auch die Verschiebung der  Kontinente und überhaupt zahlreiche andere Katastrophen, so auch die Hiroshima-Bombe.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 14,
        text: `
Während im betroffenen Gebiet sämtliche andere Pflanzen ihren Tod fanden, hat dieser Baum nur wenige Hundert Meter vom Einschlagort der Bombe verkohlt überlebt, und im darauf folgenden Frühling brachte er viele frische Schösslinge samt Blüten hervor, was ihn in Japan zum Sinnesbild für Hoffnung, dem „Baum der Hoffnung“ aufsteigen ließ.

Definitiv kein anderes Lebewesen hat so viele Epochen samt Katastrophen überstanden, wie der Ginkgo-Baum. All dies hat ihn im asiatischen Raum sehr schnell zu einem Mythos werden lassen, wenn man so will zu einem Tempelbaum, den die Asiaten regelrecht verehren.

Aber auch die Resistenz gegenüber der Alterung und allerlei natürlichen Feinden hat den Menschen aufhorchen lassen - sollten sich diese erstaunlichen Eigenschaften auch auf den Menschen übertragen lassen, wenn dieser von seinen Früchten essen würde?  
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 14,
        text: `
Der Ginkgo wird seit über 2000 Jahren in Asien als „heiliger Baum“ angesehen und seit rund 5000 Jahren innerhalb der Naturheilkunde gegen eine Vielzahl an Erkrankungen und Gebrechen eingesetzt, dies sicherlich nicht von ungefähr!

Ginkgo zählt zu den ältesten Naturheilmitteln überhaupt und blickt stolz auf eine über 2000 Jahre alte Naturheiltradition zunächst im asiatischen Raum, seit wenigen  Jahren nun verstärkt aber auch in Nordamerika und Europa – speziell auch gegen Alzheimer und Demenz!
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 16,
        text: `
Zu diesem Zwecke werden die Samen sowie Extrakte aus den Gingko-Blättern genutzt, in der westlichen Welt zuvor entsprechend zu Gingko-Tee, Gingko-Tropfen, Dragees oder Gingo-Tabletten verarbeitet. U.a. werden neben #Alzheimer und #Demenz
#Durchblutungsstörungen,
#Magenbeschwerden, #Tinnitus,
#Asthma,
#Bronchitis,
#Gefäßverschluss,
Folgen von #Diabetes,
#Herzkreislauferkrankungen uva. Krankheiten mit Ginkgo behandelt und auch bei Krebs hat Ginkgo mehrfach bereits die Wissenschaftler aufhorchen lassen.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 17,
        text: `
Inhaltsstoffe und Wirkstoffe von Gingko 

Die zahlreich im Ginkgo vorkommenden Flavonoide und Terpenoide sind es, denen wir in erster Linie die positive Wirkung auf unsere Gesundheit verdanken. Diese gehören den beiden Wirstoffgruppen Ginkgoflavonglykoside und Terpenlactone.

Es handelt sich also keinesfalls um einzelne Wirkstoffe, die diese breitgefächerte Wirkung vollziehen. Vielmehr ist es die vollendete Komposition mehrerer  Wirkstoffgruppen, deren Wirkstoffe synergetisch miteinander wirken.

Unbedingt zu betonen ist aber, dass Ginkgo über bestimmte Wirksubstanzen verfügt, die sonst in keiner anderen Frucht vorkommen, die s.g. „Ginkgolide“. Exakt dies stellt einen weiteren wichtigen Grund für die einzigartige Wirkung von Ginkgo auf unseren Organismus dar, und die Synthese der Ginkgolide in den Pflanzenzellen hat sogar dem Forscher E.J.Corey einen Nobelpreis für Chemie eingebracht!
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 17,
        text: `
Ginkgo Biloba - wie und wogegen wirkt Ginkgo Biloba? 
Die legendäre Resistenz des Ginkgo Biloba Baumes gegenüber der Alterung, Hitze, Kälte, Umweltbelastung, Giften, Strahlen und etwaigen Erkrankungen ließ die Menschen sehr früh aufhorchen - wie würde es sich verhalten, wenn man dessen Bestandteile konsumiert, ließen sich diese verblüffenden Vorzüge tatsächlich auch in irgendeiner Weise auf den Menschen übertragen?

In der Tat deuten die zahlreichen Studien darauf hin! Um die Thematik besser nachvollziehen zu können, macht es Sinn, zunächst die allgemeine Wirkungsweise von Ginkgo zu durchleuchten, bevor wir zu der speziellen Wirkung bei Erkrankungen und Missständen gelangen.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 22,
        text: `
Die allgemeine Wirkung von Ginkgo Biloba lässt sich bezeichnen als:

- antibakteriell
- pilzhemmend
- wurmtötend
- antioxidativ / zellschützend
- durchblutungsfördernd
- neuroprotektiv (nervenschützend)
- Hypoxie-hemmend
- antiallergisch
- krebshemmend
- verdauungsfördernd
- beruhigend
- schmerzstillend
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 23,
        text: `
Antibakterielle und pilzhemmende Wirkung von Gingko

Die antibakterielle sowie pilzhemmende Wirkung von Ginkgo ist vor allem den Flavonoiden zu verdanken, besonders den im Ginkgo enthaltenen Ginkgolsäuren und dem Ginnol. Ginkgo Biloba erhöht die Anzahl der Makrophagen (natürlichen Fresszellen), die sich dann verstärkt um die Bakterien und Pilze kümmern können.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 23,
        text: `
Der „Saft“ unseres Lebens ist unser Blut und die wichtigsten Wirkungsmechanismen von Ginkgo Biloba ist die gesteigerte Durchblutung sowie der Schutz von menschlichem  Gewebe und Organen. Gerade diese Wirkung nimmt im Kampf gegen Alzheimer und Demenz eine wichtige Rolle ein!

In dem Ginkgo das Blut flüssiger macht und das Hirngewebe stärker mit Blut durchströmt, erreicht es eine optimierte Versorgung der Hirnzellen mit Nährstoffen und Sauerstoff, was häufig zur Verbesserung des Zustands führt.  
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 23,
        text: `
Beruhigende Wirkung von Ginkgo Biloba

Die durchblutungsförderliche und nervenschützende Wirkung von Ginkgo wirkt sich beruhigend auf den gesamten Körper aus, kann somit Stresszuständen aber auch Erektionsproblemen des Mannes entgegenwirken und den Schlaf fördern – eine wichtige Komponente innerhalb der Behandlung von Alzheimer und Demenz!
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 29,
        text: `
Spezielle Wirkung von Ginkgo

schwerpunktmäßiger Einsatz von Gingko innerhalb der TCM. In der traditionellen chinesischen Medizin kommen die Samen, die Blätter sowie die Wurzeln des Ginkgo Biloba zum Einsatz, die unterschiedlich, zumeist in Form eines Ginkgo-Tees verarbeitet und aufgenommen werden.

Innerhalb der westlichen Naturheilkunde erfolgt er Einsatz zumeist über Ginkgo-Konzentrate in Form von Ginkgo-Extrakten, umhüllt durch eine Kapsel, als Pressling oder aber in Tropfenform.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 34,
        text: `
Die folgenden Leiden werden schwerpunktmäßig mit Ginkgo innerhalb der TCM therapiert:

- Asthma
- Husten
- Abwehrschwäche
- Nierenerkrankungen
- Bronchitis
- Allergien
- Gonorrhoe
- Husten
- Tuberkolose
- Hautkrankheiten
- Blaseninfektion
- Reizblase
- Tuberkulose
- Schleimhautentzündung
- Arthritis
- Prämenstruelles Syndrom
- Hyperaktivität
- Blennorrhoe
- Scheidenfluss
- Menstruationsprobleme
- verminderte Samenproduktion
- Magenprobleme
- Diabetes-Folgen
- Prävention eines Burnouts
- Unruhezustände
- Diarrhö (Durchfall)
- Fieber
- Libidoprobleme
- Magenschleimhautentzündung (Gastritis)
- Krebs
- Folgen von Alkoholismus
- Venenentzündungen
- allgemein Stärkung des Chi
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 29,
        text: `
Aus diesen Einflüssen auf das Blutgeschehen resultieren die folgenden Vorzüge

- Ginkgo verhindert Infarkte, Thrombosen, Emoblien, Ödeme, Gewebsschädigung durch Sauerstoffmangel, Funktionsstörungen aller Gewebeformen und Organe, Zelluntergang (Zelltod)

- Ginkgo fördert damit Leistungsfähigkeit des Hirns (Wirkung bei Alzheimer und Demenz), des gesamten Organismus samt aller Organe, Blutzirkulation, Sauerstoffversorgung, Abtransport von Stoffwechselschlacken

- Ginkgo schützt und fördert das Gehirn und die Nervenzellen

- Ginkgo schützt vor der Anfälligkeit eines Sauerstoffmangels (Hypoxietoleranz wird erhöht)  
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 36,
        text: `
Wirkung von Ginkgo gegen Demenz

In den USA ist Ginkgo ein anerkanntes Antidementivum. Ginkgo agiert als Nervenzellenprotektor, die Neurotransmitter (Botenstoffe im Gehirn) werden aktiviert und der Energiestoffwechsels des Gehirns optimiert, besonders im Bereich des Hippocampus, der bei Alzheimer Erkrankten betroffen ist. Gedächtnisleistung, Lernfähigkeit, Konzentrationsfähigkeit und kognitive Fähigkeiten werden signifikant erhöht.

Die Wirksamkeit von Ginkgo gegen Demenz wurde in einer großangelegten, randomisierten Metaanalyse 2010 an 1838 Patienten mit dem Ginkgo-Extrakt EGB761 eindrucksvoll belegt. (Wang et al., 2010)  
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 36,
        text: `
Wirkung von Ginkgo gegen Alzheimer

Im Labor sowie im Tierversuch verminderte die Gabe von Ginkgo-Extrakt den typisch mit fortschreitender Alzheimer einhergehenden Zelltod der Nervenzellen sich einlagernder Proteine (ß-Amyloid). Extrakte aus dem Ginkgo-Baum erhöhen die Anzahl der Rezeptoren im Hirn, fördern die Aufnahme von Cholin und die Produktion des Acetylcholin, was den durch Alzheimer beeinträchtigten Hirnfunktionen zu Gute kommt. 

Von vielen Ärzten wird Ginkgo Biloba heutzutage als Dauerbehandlung eingesetzt, so hat die Auswertung von 13 000 Patientenprotokollen zu dem Ergebnis geführt, dass vor allem das Erinnerungsvermögen sowie die Wachheit aufgrund der Behandlung sich deutlich besserten.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 36,
        text: `
Gingko Biloba als Schutz gegen vorzeitige Alterung Die hinduistische Heilkunde bezeichnet den Ginkgo Biloba als „Lebenselexier, das die Zerstörung des Körpers aufhalten un zweitausend Sommer währendes Leben ermöglicht“. Neben dem eindeutig in zahlreichen Studien nachgewiesenen Schutz vor freien Radikalen, die wiederum nachweislich an der Alterung (sowie zahlreiche Erkrankungen, die mit Alterung zusammenhängen, so Alzheimer und Demenz) des Organismus die Schuld tragen, konnte in Studien eine aktivierende Wirkung auf die Telomerase nachgewiesen werden. 

Telomerase ist ein Enzym, das die Telomere schützt, die auch als „Lebenslichter“ bezeichnet werden, da sie an den Enden der Chromosomen vor deren Verkürzung und damit den gesamten Organismus vor Alterung schützen. Hier kann Ginkgo entsprechend die Telomerase aktivieren und den schützenden Effekt auf die Telomere auslösen. 
  
  `,
    },

    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 8,
        text: `
 Als Nächstes erhalten Sie in diesem Buch einen konkreten Leitfaden, um Ihrem Krebs bestmöglich zu begegnen, ihn zu heilen, Wiederauftreten zu vermeiden oder aber diesem einfach erfolgreich vorzubeugen!

Ich verspreche Ihnen, dass Sie noch nie etwas gelesen haben, das in irgendeiner Weise nur annähernd dieser äußerst brisanten, sowie nützlichen Informationsfülle dieser Abhandlung nahekommt...!

Dieses Buch wird nicht nur Ihr Weltbild, Ihre Einstellung, sondern ebenfalls Ihr Leben verändern-möglicherweise sogar retten. Über 25 aufeinander aufbauende Kapitel werde ich Sie navigieren und Sie auf Ihrem Weg der Krebsheiltherapie begleiten! Ich habe weder viel für Esoterik, noch für Verschwörungstheorien übrig – Ihre Gesundheit liegt mir allerdings am Herzen!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 22,
        text: `
Medizinskandal Krebs

Richtiges Timing ist lebenswichtig, die Informationsflut jedoch enorm.

Timing spielt bei lebensbedrohlichen Erkrankungen immer eine entscheidende Rolle, denn jede Minute zählt und die Betroffenen bzw. ihre Angehörigen, die für sie recherchieren, haben es völlig unvorbereitet gleich mit zwei Grundproblemen zu tun:

1) Die Zeit rennt und jede Minute zählt..!

2) Unter diesen denkbar widrigen Umständen klaren Kopf zu bewahren und aus einem regelrechten Ozean an Informationen die erfolgversprechendsten Therapiekonzepte zu fischen! 

Es ist für jeden, der sich frisch damit beschäftigen muss ein Tauchgang ins kalte und trübe Gewässer, denn die Informationsflut ist erdrückend und die gegensätzlichen Aussagen dabei sehr, sehr entmutigend...  
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 24,
        text: `
Ich bin mir der Verantwortung dieses Buches bewusst!

Es gehört desweiteren wohl sehr viel Courage und Verantwortungsbewusstsein dazu, sich zu entscheiden ein Buch für die Betroffenen zu schreiben, in dem man diese immense Verantwortung auf seine Schulter hievt, ihnen einen konkreten Leitfaden mit zahlreichen Insidertipps zu einer Therapieform mit den möglichst besten Chancen auf Genesung liefern zu wollen!

Denn während Sie Ihre Zeit investieren, dieses Buch zu studieren, könnten Sie wertvolle Zeit verlieren, wenn Sie nicht die richtigen Informationen vorfänden...Etwas, das ich niemals verantworten könnte – wenn ich mir nicht 100% sicher wäre!

Es gibt zahlreiche sehr gute und informative Krebsbücher, aber die allerwenigsten stellen einen echten Leitfaden zur Krebsheilung dar.
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 270,
        text: `
Bei den allerwenigsten Menschen wird der Krebs entdeckt, und solange dieser vom Arzt nicht entdeckt wird, ist er in den weitaus meisten aller Fälle offensichtlich nicht tödlich! Was passiert aber, wenn der Krebs entdeckt wird? Sobald der Krebs entdeckt wird, laufen gleich mehrere, im wahrsten Sinne des Wortes tödliche Aktionen ab:

👉 der Arzt konfrontiert einen mit einer Schreckensdiagnose

👉 der Arzt beginnt einen Kampf gegen den Krebs mit Chemotherapie oder Bestrahlung

👉  Arzt öffnet ggfs. den Bauchraum, um zu operieren

👉  der Arzt sagt, man könne nichts mehr tun
 `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 271,
        text: `
Die Konfrontation mit dem Krebs

Da so gut wie kein Mensch (in der Regel nicht mal der Arzt!) weiß, dass Krebs 97% aller Menschen betrifft, aber „nur“ für 25% aller Menschen gefährlich wird, ist eine solche Botschaft gleichbedeutend mit einem seelischen Trauma – der Patient fürchtet zum ersten Mal um sein Leben!

Sie müssen sich vor Augen halten, dass er evtl. 10,20,30 oder mehr Jahre gar mit seinem Krebs gelebt hat, ohne auch nur einen Hauch von Unwohlsein zu verspüren, nicht einmal ein Husten oder gelegentliches Kopfweh – dann die Schreckensdiagnose!  
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 273,
        text: `
In dem der Onkologe Chemotherapie und Bestrahlung auf den in den weitaus meisten Fällen harmlosen Krebs losjagt, sprengt er die besagte „Kapselung“ des Krebses auf und der Krebs wird aggressiv!

In dem er den Bauchraum öffnet, um per Operation eine Entfernung des harmlosen Tumors vorzunehmen, kommt a) Sauerstoff an den Tumor ran, b)macht er den „schlummernden“ Tumor aggressiv, c) verteilt er in vielen Fällen fleißig Metastasen!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 273,
        text: `
Ansage, man könne nichts (mehr) tun! In dem der Arzt dem Patienten (der in den weitaus meisten Fällen ja nicht gefährdet ist!) eröffnet, man könne nichts tun, begeht er einen folgeschweren Fehler – er sieht auch in diesem Fall wieder isoliert die Geschwulst, die für ihn irrtümlicherweise die Gefahr darstellt, - und nicht die Erkrankung des Organismus, die dazu geführt hat!
Statt also zu hinterfragen, was dazu geführt haben wird – nämlich in fast allen Fällen der falsche Lebensstil (falsche Ernährung, Zigaretten, Alkohol) oder die falschen Lebensbedingungen (Stress, Mobbing, Traumata, Umweltbelastung) und sich um die Änderung exakt dieser Kausalitäten zu kümmern, besitzt er tatsächlich die Unverfrorenheit (oder Unwissenheit), zu sagen: man könne nichts tun!
Es ist exakt dieselbe Ansage bei Krebspatienten (wie meiner Mutter), die man erfolgreich behandelt hat und dann den ahnungslosen und gutgläubigen [...] 
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 298,
        text: `
Nebenwirkungen der Chemotherapie

Es mag irrational klingen, aber die gefährlichste Nebenwirkung der Chemotherapie ist tatsächlich: KREBS! Wie Sie gerade lesen konnten, erkranken sehr viele Chemotherapie-Patienten erkranken Jahre später erneut an Krebs, zumeist einem sehr viel aggressiveren, als dem zuvor. Es gibt aber auch noch zahlreiche andere Nebenwirkungen, die benannt werden müssen...
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 298,
        text: `
Die Krebsdiagnose – was ist zu tun?

Hilfreiche Tipps zum Umgang mit Krebsdiagnose

Die Krebsdiagnose stellt nach wie vor ein Schreckensszenario dar, dem sich als Betroffener niemand zu entziehen vermag – sie macht im ersten Moment ratlos, lähmend und ist extrem beängstigend...

Ruhe bewahren als allerwichtigste Pflichtkür! Wenn Sie oder aber ein Ihnen nahestehender Mensch mit der Diagnose Krebs konfrontiert wird, ist das Allerwichtigste, zunächst ruhig zu bleiben und sich der Tatsache bewusst zu werden, egal was der (in der Regel wenig wissende) Schulmediziner behauptet, : DASS KREBS LANGE NICHT DAS TODESURTEIL BEDEUTET!

Stressoren und Traumata lösen Krebswachstum aus! Weitestgehend ruhig zu bleiben ist nach einer solchen Schreckensdiagnose trotz der denkbar widrigen Umstände ENTSCHEIDEND wichtig, um das Krebswachstum nicht erst auszulösen (wenn der Krebs „eingekapselt ist“), oder aber unnötig das Krebswachstum zu beschleunigen!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 298,
        text: `
Handeln statt zu verzweifeln!

Statt also zu verzweifeln, sollte man sich bewusst werden, dass der Arzt eben NICHT der liebe Gott ist und er:

a) weder das Wissen, noch ein moralisches Recht darauf hat, den Tod überhaupt zu prognostizieren!
b) dies beim besten Willen also eh nicht könnte und 
c) es alternative Wege gibt, die erfolgsversprechend sind, die er nicht mal kennen wird-, die es aber unbedingt lohnt zu gehen!  

Das einzig Richtige ist es, sich zu informieren und baldmöglichst zu handeln – in dem Sie dieses Buch lesen, tun Sie dieses und sind damit bereits auf dem besten Wege, die richtigen Entscheidungen zu treffen...!
  
  `,
    },
    {
        usefulInformationImageId: images_adipositas,
        quelleId: "13",
        text: `
  Desweiteren wäre es an der Zeit zu akzeptieren, dass die vielen Industriegifte in unserer Nahrung und unseren Getränken, unserer Atemluft und der Kleidung den Organismus so stark belasten, dass dieser primär damit beschäftigt ist, gegen diese anzukämpfen, sich mühsam zu entgiften, statt sich um die Fettverbrennung zu kümmern – der komplette Stoffwechsel wird schließlich durch die besagten Umweltgifte gedrosselt, ein Aspekt, der den Herrschaften da oben nicht mal erwähnungswert erscheint..! (in der folgenden Tabelle erfahren Sie in der äussersten Sparte, welche der genannten „Fettkiller“ zugleich den Körper entgiften!)
  `,
    },
    {
        usefulInformationImageId: images_adipositas,
        quelleId: "13",
        text: `
Auch die latente Übersäuerung der Bevölkerung spielt innerhalb dieses Desasters eine wichtige Rolle – der Körper gibt sein Fettgewebe nur widerwillig her, um auch diese zur Kompensierung der überschüssigen, gefährlichen Säuren zu benutzen.

Last but not least ware es an der Zeit, abnehmwillige Personen darüber aufzuklären, dass es in der Natur völlig ungefährliche und überaus effiziente s.g. „Fettkiller“ gibt, die über zahlreiche verschiedene Mechanismen dem Körperfett völlig nebenwirkungsfrei zu Leibe rücken und den Abnehmvorgang sehr effektiv unterstützen können!
  `,
    },
    {
        usefulInformationImageId: images_adipositas,
        quelleId: "13",
        text: `
Erfahren Sie in diesem eBook u.a., welche Powersubstanzen aus der Natur:
👉 den Gallenfluss fördern und so die Fettverbrennung vorantreiben!
👉 den Widerstand des Insulins durchbrechen und Fettverbrennung selbst bei Menschen vorantreiben, die sonst Probleme damit haben!
👉 die Thermogenese steigern, damit die Fettverbrennung erhöhen!
👉 die Verdauung beschleunigen, Fettsäuren schneller aus dem Darm befördert, noch lange bevor sie sich als Körperfett einlagern können!
👉 Die Bildung der Blutgefäße im Fettgewebe hemmen, so dass die Fettzellen weniger wachsen und sich nicht vermehren können!
👉 die Beta-Oxidierung (Fettverbrennung) erhöhen!
👉 Muskeln aufbauen und vor Muskelabbau während der Diät schützen!
  `,
    },
    {
        usefulInformationImageId: images_adipositas,
        quelleId: "13",
        text: `
UND JETZT DER ABSOLUTE KRACHER:

Die meisten stark Übergewichtigen haben von Haus aus eine weitaus höhere Anzahl an Fettzellen, als ihre „normalen“ Mitmenschen. 
  
Während noch vor wenigen Jahren die Reduktion der Fettzellen aus wissenschaftlicher Sicht als völlig ausgeschlossen galt (es galt das Statement, man kann Fettzelle aushungern, aber nicht eliminieren!), konnte die Powerstubstanz mit dem Namen Curcumin jüngst in repräsentativen Studien eindrucksvoll unter Beweis stellen, dass Sie den Zelltod von Fettzellen verursachen kann! Ganz nebenbei schützt die besagte Substanz vor Herzinfarkten, Schlaganfällen, Krebs, Arthritis und Diabetes, Krankheiten also, die besonders die übergewichtigen Menschen heimsuchen und Ihre Gesundheit gefährden...

<a href="https://grafvonkronenberg.group/produkt/256-Safran-extract-mit-curcumin-gueteklasse-1-15ml?gvkaf=11">Safran Extract Mit Curcumin Güteklasse 1 / 15ml</a>
<a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-curcuma-kapseln%3Fprod_number%3D128352">👉 Kopp Vital Curcuma Kapseln</a>

  `,
    },
    {
        usefulInformationImageId: images_aerzte,
        quelleId: "12",
        text: `
Der Massenmörder im weißen Kittel

Nichts ist fahrlässiger und tödlicher, als der ärztliche Satz: „Sie müssen nichts ändern, leben Sie Ihr Leben wie gehabt!“. Es ist ein Satz, den täglich Hunderttausende Krebspatienten hören und der zweifelsohne mit Abstand für die meisten Todesopfer an Krebs verantwortlich ist – ein Satz, der im Widerspruch zu allen wissenschaftlichen Fakten steht - in dem Onkologen diesen Satz aussprechen, töten sie mittelfristig ihren Patienten!

Krebsenstehung hat ihre Ursachen – so hart es sich anhören mag, man hat sehr beständig daraufhin „gearbeitet“ (ob bewusst oder unbewusst, selbst verschuldet oder nicht...).
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Krebsursachen: 

Es sind auf Seiten der seelischen Komponente nicht selten die kleinen wie großen Traumata in Ihrem Leben, die womöglich zum Krebs geführt haben, bzw. diesen gefördert haben. Es muss also nicht der Tod eines geliebten Angehörigen oder aber die Scheidung gewesen sein, die Krebs ausgelöst oder gefördert haben – häufig sind es die kleinen Stresssituationen, denen Sie tagtäglich ausgesetzt sind und die sich über viele Jahre aufsummieren!

Hierzu gehört beispielsweise Stress im Berufsleben, Mobbing, Stress mit der Ehefrau, den Kindern, den Vermietern, Nachbarn u.ä.

Gehen Sie in sich, analysieren Sie mögliche Stressoren und stellen Sie diese so schnell wie möglich ab! Während der meditative Part der seelischen Komponente etwas mehr Zeit benötigt, Sie sich also parallel dazu belesen sollten (zu empfehlen sind Bücher und Audio-DVDs von Dr. Carl Simonton, mehr dazu in entsprechendem Kapitel!) [...]
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Bewegen Sie sich an der frischen Luft - Ausdauersport tötet Krebszellen!

Besonders den Radsport-Fans wird ein konkreter Fall in Erinnerung sein, in dem Ausdauersport die Krebstherapie positiv beeinflusst hat und dazu beigetragen hat, sich von Krebs zu heilen.

Die Rede ist natürlich von Lance Armstrong, dem siebenfachen Gewinner der Tour de France (der leider kürzlich wegen unangenehmen Dingen verstärkt im Fokus der Öffentlichkeit stand)!

Wie die Presse berichtete, „fuhr Armstrong dem Krebs davon...“ ! Konkret hat sich der 25 jährige, der aus dem heiteren Himmel mit der Diagnose „Hodenkrebs“ mit Metastasen ins Gehirn und in die Lunge konfrontiert wurde und gleichzeitig mit der Aussage der Ärzteschaft, dass die Chance zu überleben sehr gering sind, dazu entschlossen um sein Leben zu kämpfen! Bereits nach einem Jahr intensiver Krebsbehandlung, trat Armstrong wieder in die Pedale, um 
  `,
    },
    {
        usefulInformationImageId: images_sport,
        quelleId: "12",
        text: `
Sport erzeugt Hyperthermie - Hyperthermie tötet Krebszellen

Im Kapitel 16 „Die erfolgversprechendsten Alternativ-Therapien bei Krebs“ werden Sie lesen, wie effizient Hyperthermie Krebszellen zu töten vermag.

Nichts anderes entsteht beim Sport, lediglich nur in abgeschwächter Form. Durch die starke Erwärmung des Körperinneren, wirkt sich diese positiv auf die Krebszellenvernichtung aus. Es bleibt daher festzuhalten, dass Sport insgesamt durchaus eine ernstzunehmende Komponente innerhalb unseres „Goldenen Dreiecks der Krebsheiltherapie“ darstellt!

  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Ein Tumor kommt nicht über Nacht und ein Tumor verschwindet auch nicht über Nacht. Beständig falsche Lebensweise führt zum Krebs und genauso beständig bekämpfen wir den Tumor wieder!

Zwischenzeitlich haben Sie bereits eine der Kliniken aufgesucht, die ich im entsprechenden Kapitel empfehle und alle Änderungen, die Sie vorgenommen haben mit Ihrem dort behandelnden Therapeuten besprochen!

Nehmen Sie gleich zu Ihrem allerersten Termin eine Liste der „31 wichtigsten Krebskiller-Natursubstanzen“, die ich ausführlich im Kapitel 19 dieses Buches erläutere mit, und stimmen Sie einen Einnahmeplan für diese mit Ihrem Therapeuten Vorort ab! Diese entstammen direkt der äußerst erfolgreichen orthomolekularen Medizin, die bei Krebs ein Muss ist!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Was Sie tun müssen

Sie müssen also Ihre Ängste bekämpfen, sich von diesem Trauma der Diagnose durch regelmäßiges Mentaltraining lösen – dies als wichtigster Ratschlag in diesem gesamten Buch!

Die mentale Arbeit, Ernährungsumstellung, Entgiftung und Entsäuerung, die Organisation der eigenen Ernährung schwerpunktmäßig über Lebensmittel, die in Studien krebshemmende Wirkung nachweisen konnten (siehe Kapitel 18), sowie Einnahme von s.g. „Krebskiller-Natursubstanzen“ (Kapitel 19) werden die Gründe dafür darstellen, dass Ihnen Ihr Krebs nicht das Leben nimmt, selbst wenn er nach der Vorstellung der Schulmedizin als „austherapiert“ gelten sollte! (ein Begriff, über den ich mich immer wieder höllisch aufregen könnte!)
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Schulmedizin vs. Alternative Medizin - eine Entscheidungshilfe

Zunächst mal ist es ein nachvollziehbarer Fakt, dass bei lebensbedrohlichen Krankheiten, die seitens der Schulmedizin als „unheilbar“ gelten, für die es also (wie beispielsweise im Falle von Krebs) kein Standarttherapeutikum gibt, das die Krankheit unter Garantie heilt, man neben den standarisierten Wegen auch alternative Wege gehen sollte (muss!), um sich eine möglichst hohe Überlebenschance zu sichern, die nicht selten auch aus der Kombination von beidem resultiert.

Desweiteren ist es ebenfalls nur logisch, dass man die Aussage eines Arztes, die da häufig lautet: „Es tut uns Leid, wir können nichts mehr für Sie tun...“ nicht zum Anlass nehmen DARF, sich nach Hause zu begeben und auf das Eintreten des Todes zu warten!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Zusammenfassung der wichtigsten Do's und Don'ts bei Krebs, und um sich vor Krebs zu schützen:

- meiden Sie Kontakt zu sämtlichen chemischen Stoffen, so auch zu chemischen Reinigern!
- meiden Sie Hautkontakt mit Aluminium (Deos!)
- meiden Sie Kontakt zu industriellen Kosmetika
- meiden Sie Phthalate und Parabene in Ihren Kosmetika
- meiden Sie Kosmetika, die Östrogene beinhalten.
- stellen Sie um auf Bio-Lebensmittel bekannter Herkunft
- meiden Sie Pestizide, sowie Insektizide
- verwenden Sie chemiefreie Bio-Zahncreme
- meiden Sie Strahlenquellen (Handy, Mikrowellennahrung, Stromgeräte usw.)
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Zusammenfassung der wichtigsten Do's und Don'ts bei Krebs, und um sich vor Krebs zu schützen:

- schirmen Sie Ihre Wohnung vor Strahlen ab
- Trinken Sie Quellwasser in Flaschen oder aber gefiltertes Wasser
- Tragen Sie möglichst Baumwollwäsche
- Waschen Sie Ihre Wäsche mit Bio-Waschmitteln
- Konsumieren Sie Lebensmittel/Nahrungsergänzungsmittel, die stark entgiftend wirken, z.B. Kombucha, Camu-Camu, Spirulina-Platensis (siehe auch „Die wichtigsten Krebskiller- Natursubstanzen“)
- Lösen Sie sich von traumatischen Erlebnissen aus der Vergangenheit
- Lassen Sie Emotionen und Freude zu, teilen Sie diese mit anderen Menschen
- Meditieren Sie (Visualisierung!)
- Bewegen Sie sich täglich 30-60 min an der frischen Luft
- Wenn möglich, treiben Sie täglich 20-30min Ausdauersport
  `,
    },
    {
        usefulInformationImageId: images_water,
        quelleId: "12",
        text: `
Trinken Sie stilles Wasser aus Glasflaschen! Wasser ist Leben, Wasser kann aber unter bestimmten Umständen das Leben erschweren und Krankheiten herbeiführen.

Während reines Wasser entsäuert, entschlackt und Gifte aus dem Körper heraustransportiert, belastet und übersäuert kohlensäurehaltiges Wasser den Organismus und schwächt sogar Ihr Immunsystem, auf das Sie aber bei Krebs besonders angewiesen sind!

Wasser aus Plastikflaschen kann Krebs verursachen! Alles andere als empfehlenswert ist das Wasser aus den Plastikflaschen, da Forscher darin Weichmacherreste entdecken konnten, die zur Unfruchtbarkeit, Leberschäden und auch Krebs führen können! 1  

Osmosewasser: Ein so reines Wasser kann man auch noch mit der Destillation erhalten. Alle anderen Filterverfahren die ich kenne, insbesondere die vielen Varianten von Aktivkohlefiltern, erreichen diesen hohen Reinheitsgrad bei weitem nicht.

👉 <a href="https://ebay.us/Yxv8Ew">Umkehrosmosefilteranlage bei Ebay </a>
  `,
    },

    {
        usefulInformationImageId: images_water,
        quelleId: "12",
        text: `
Zusammenfassung der wichtigsten Ernährungsrichtlinien bei Krebs:

1) Meiden Sie Zucker und zuckerhaltige Produkte
2) Setzen Sie möglichst auf Bio-Kost, die so natürlich und frisch, wie irgendwo nur möglich sein sollte
3) Meiden Sie alle Produkte tierischen Ursprungs, besonders aber Fleisch
4) Nehmen Sie ungesättigte Fettsäuren zu sich
5) Essen Sie viel Rohkost aus biologischem Anbau
6) Trinken Sie viel frisch (selbst) gepresste Säfte aus Früchten, ausschließlich aus biologischem Anbau und bekannter Herkunft
7) Trinken Sie viel kohlensäurefreies Wasser aus Glasflaschen
  
  `,
    },
    {
        usefulInformationImageId: images_supplements,
        quelleId: "12",
        text: `
Nahrungsergänzung tut Not

Apropos Vitalstoffe, ich will ehrlich mit Ihnen sein! Sie kommen nicht drum herum, Ihre Ernährung über bestimmte Nahrungsergänzungsmittel zu ergänzen, da die normale Ernährung kaum noch Vitalstoffe bietet.  

Die Studien des renommierten Lebensmittellabors Karlsruhe und des Pharmakonzerns Geigy zeigen einen erschreckenden Rückgang der Vitalstoffe in unserem Obst und Gemüse um bis zu 92%!

Als Ursache werden ausgelaugte Böden, Luftverschmutzung, zu schnelles Wachstum und lange Lagerung angegeben!

Welche Nahrungsergänzung konkret Sinn macht, erfahren Sie im Kapitel 19 „Die 31 wichtigsten Krebs-Natursubstanzen“.
`,
    },
    {
        usefulInformationImageId: images_supplements,
        quelleId: "12",
        text: `
3+3 = 243!

Die Synergie der Wirkung von verschiedenen Krebskiller-Natursubstanzen ist viel mehr als nur das Ergebnis deren Addition! Während Sie in diesem Buch im Kapitel 19 in ausführlicher Form erfahren, welche Natursubstanzen für sich allein beispielsweise:

- Brustkrebswachstum um 78% gesenkt
- Brustkrebsauftreten um 100% verhindert
- Hautkrebswachstum um 80% gesenkt  

...ist es die Kombination aus mehreren dieser hocheffektiven Natursubstanzen, die zu einer unbeschreiblich potenten Synergie-Wirkung führt, die allen schulmedizinischen Behandlungsformen bei weitem überlegen ist – dabei ohne Nebenwirkungen und sehr kostengünstig! 

Als Beispiel hat eine Natursubstanz die Wirkung einer anderen um 1544% verbessert, während eine andere wiederum in Studien diese um 2000% steigerte! Auch hierzu benenne ich Ihnen im Kapitel 19 selbstverständlich die entsprechenden Studien!
`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Wussten Sie, dass ...
• ... die meisten Zivilisationserkrankungen (Krebs, Diabetes, Alzheimer, Parkinson usw.) auf die Oxidation der Körperzelle zurückzuführen sind?
• ... der Mensch gemäß wissenschaftlichen Erkenntnissen 120 Jahre alt werden könnte, wenn die Körperzellen nicht oxidierten?
• ... es einen einzigen Schutz vor Oxidation (freie Radikale) der Zelle gibt, nämlich die Aufnahme sogenannter Antioxidantien?
• ... im Gegensatz zu den anderen Antioxidantien die Alpha-Liponsäure unseren gesamten Körper bis ins Gehirn hinein beschützt, weswegen sie auch „Universal-Antioxidans“ genannt wird? • ... des Weiteren die Alpha-Liponsäure (ALA) die Fähigkeit besitzt, die anderen Antioxidantien im Kampf gegen die gefräßigen freien Radikale zu regenerieren?


`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Wussten Sie, dass ...
• ... die Alpha-Liponsäure die Wirkung von Vitaminen, wie Vitamin C, E oder dem Coenzym Q10, verstärkt?
• ... die Alpha-Liponsäure uns sehr metallbelastung und -vergiftung schützt? erfolgreich gegen Schwer-
• ... die Alpha-Liponsäure bei Pilzvergiftung rettend sein kann? • ... die Alpha-Liponsäure sehr effizient Radioaktivität aus unserem Organismus ausleitet?
• ... mithilfe der Alpha-Liponsäure Zucker effizienter in den Energiekreislauf gebracht wird, was für Diabetiker, Übergewichtige und Sportler von elementarer Bedeutung ist?
• ... die Alpha-Liponsäure vor Diabetes und vor durch Diabetes ausgelösten Nervenschäden schützt?

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Wussten Sie, dass ...
• ... Raucher einen besseren Schutz mit Alpha-Liponsäure erfahren? 
• ... die Alpha-Liponsäure unsere Hautzellen regeneriert, verjüngt, Falten glättet und sogar Aknenarben zu 70–80 % entfernen kann?
• ... die Alpha-Liponsäure eine therapeutische Anwendung findet, unter anderem bei Diabetes, Leberzirrhose, Herzerkrankungen, Schwermetallvergiftung, Hauterkrankungen, Trübung der Augenlinse, Morbus Parkinson und Morbus Alzheimer?
• ... unsere Nahrung nur sehr wenig Alpha-Liponsäure beinhaltet und besonders Vegetarier hier zu kurz kommen könnten?
• ... man die Nahrung mit Alpha-Liponsäure in Form von Nahrungsergänzungsmitteln bequem und kostengünstig ergänzen kann?
  
`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure – was ist das genau?

Die Alpha-Liponsäure wurde 1951 entdeckt, als Wissenschaftler erkannten, dass sie eine zentrale Rolle in der Umwandlung der Nahrung in Energie innerhalb unserer Mitochondrien (Kraftwerke der Zellen) spielt. Nach und nach brachten Forschungen weitere Vorzüge der Alpha-Liponsäure an den Tag. Herauskristallisiert haben sich vor allem drei Fähigkeiten, welche die Alpha-Liponsäure in Perfektion besitzt:

a) Schutz vor freien Radikalen (vor Zellalterung und Zellzerstörung)
b) Entgiftung von Schwermetallen, Radioakti vität und Toxinen
c) Energieumwandlung
  
`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Wie bereits im Allgemein-Teil im Ansatz erwähnt wurde, sind freie Radikale nicht nur für das Altern zuständig, sondern auch für sehr viele, teilweise tödliche Erkrankungen, darunter Arteriosklerose, Herzkreislauferkrankungen, Schlaganfall, Krebs, Arthritis, Diabetes, Alzheimer, Atemwegserkrankungen, Blutgefäßerkrankungen, Mukoviszidose, Entzündungen, Hepatitis, Down-Syndrom und andere.

Die Alpha-Liponsäure versteht es wie kaum ein anderes Antioxidans, uns gegen diese zerstörerischen freien Radikale (Oxidanten) zu beschützen und zeichnet sich innerhalb dieser Aufgabe wiederum durch drei einzigartige Fähigkeiten aus:

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
1) Unser Körper besteht aus wässrigen und fettigen Gewebeformen. Im Gegensatz zu den anderen Antioxidantien (das Vitamin C beispielsweise ist wasserlöslich und fungiert lediglich als Beschützer der wässrigen Gewebeformen, das Vitamin E ist dagegen fettlöslich und schützt die fettigen Gewebearten im Körper), vermag die Alpha-Liponsäure sowohl wässrige als auch fettige Gewebe unseres Körpers zu durchdringen und vor gefräßigen freien Radikalen zu beschützen. Somit beschützt sie alle Gewebeformen unseres Körpers, weswegen sie auch oft als „universelles Antioxidans“ bezeichnet wird.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
2) Die Alpha-Liponsäure kann im Gegensatz zu den meisten anderen Antioxidantien aufgrund ihrer geringen Molekulargröße sogar die Blut-Hirnschranke passieren und unsere Hirnzellen beschützen (siehe auch unter „Wirkung“ die Studie zur Förderung der Intelligenz durch Alpha-Liponsäure). 

3) Des Weiteren vermag die Alpha-Liponsäure andere Antioxidantien zu regenerieren, damit diesen die Energie im Kampf gegen die freien Radikale nicht ausgeht.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
b) Alpha-Liponsäure radioaktiven Strahlen entgiftet uns von Schwermetallen und radioaktiven Strahlen

In Studien konnte die Alpha-Liponsäure Schwermetalle, wie Amalgam, aus dem Körper leiten und der Radioaktivität entgegenwirken, wie Versuche in Tschernobyl an verstrahlten Kindern eindrucksvoll belegen konnten (siehe Punkt „Wirkung“).

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
c) Alpha-Liponsäure als Energieumwandler

Die Alpha-Liponsäure spielt eine zentrale Rolle in der Energieumwandlung von Nahrungszucker in Energie innerhalb der Mitochondrien. Hier agiert sie als Coenzym bei zahlreichen energieumwandelnden Enzymkomplexen und versteht es, Nahrungszucker (und Nahrungsfette) in Energie umzuwandeln, eine Eigenschaft, die besonders für Diabetiker, Abnehmwillige und Sportler sehr interessant sein sollte! Für den Diabetiker ergibt sich daraus eine insulinsparende Wirkung, der Abnehmwillige speichert nicht mehr so viel [...]

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Vorkommen der Alpha-Liponsäure (ALA) in der Nahrung

Die Alpha-Liponsäure befindet sich in den meisten Lebensmitteln, allerdings nur spurenweise. Höhere Konzentrationen finden sich in Fleisch, vor allem in rotem, besonders in Leber, Herz und Nieren. Aber auch Gemüsesorten, wie Spinat, Brokkoli oder Tomaten, beinhalten spurenweise Alpha-Liponsäure. Die folgende Tabelle zeigt das Vorkommen der Alpha-Liponsäure in den Nahrungsmitteln auf und verdeutlicht, wie schwer es ist, die zur Gesunderhaltung empfohlenen 100 mg über die natürliche Nahrung aufzunehmen:  

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie zur Ausleitung von Radioaktivität aus dem Körper durch Alpha- Liponsäure nach Korkina et al. (1993)

Immer stärker werden wir unfreiwillig durch radioaktive Strahlen belastet. Die Reaktorkatastrophe von Tschernobyl 1986 forderte bis zum heutigen Tage viele unschuldige Opfer, brachte aber auch Erkenntnisse zur Wirksamkeit der Alpha-Liponsäure gegen Radioaktivität mit sich. Nach 28 Tagen der Verabreichung von Alpha-Liponsäure an einige betroffene Kinder fanden die Wissenschaftler heraus, dass die Schäden durch freie Radikale im Blut bei diesen Kindern auf das Niveau von Nichtbetroffenen sanken. Erstaunlicherweise konnte das Vitamin E im Alleingang bei diesen Opfern zwar keine positive Wirkung erzielen, in Kombination mit der Alpha- Liponsäure aber fielen die Werte sogar unter die Norm zurück!

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie nach Dr. Parker: Alpha-Liponsäure hilft bei Grauem Star und Augenproblemen.

Dr. Parker konnte in seinen Studien unter Beweis stellen, dass Alpha-Liponsäure das Auftreten und die Symptome des Grauen Stars minimieren und allgemein die Augenfunktion verbessern kann. Die Alpha-Liponsäure kann einen Katerakt verhindern, was ihrem Einfluss auf den Glutathiongehalt zugeschrieben wird.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie nach Münch et al. (2000) und Hager et al. (2001): Alpha-Liponsäure hilft bei Alzheimer und Demenz.

Beobachtungen von Diabetespatienten, die Alpha-Liponsäure bekamen und gleichzeitig an Alzheimer litten, zeigten, dass sich die Alzheimer-Erkrankung nicht weiter verschlechterte und die Hirnleistungen konstant blieben. Hier ist vermutlich die antioxidative Wirkung der Alpha-Liponsäure, die aufgrund ihrer geringen Molekulargröße sogar das Hirn schützen kann, für die Stabilisierung des Krankheitszustandes zuständig.

`,
    },
    {
        usefulInformationImageId: images_brain,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie von Packer und Colman (2000): Alpha-Liponsäure erhöht die Lernleistung und steigert das Denkvermögen.

Die oben beschriebene Fähigkeit der Alpha-Liponsäure, die Blut-Hirn-Schranke zu überwinden und direkt im Hirn die Zellen und Blutgefäße vor oxidativer Zerstörung zu schützen, erweist sich als konzentrationssteigernd und erhöht das Lernvermögen und die Denkfähigkeit. Die Liponsäure schützt aber nicht nur vor weiterer oxidativer Zerstörung, sondern kann sogar Hirnzellen regenerieren. Dr. Packer nimmt dabei an, dass die Alpha- Liponsäure verbrauchte Schaltkreise in gealterten Gehirnzellen repariert und revitalisiert.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie nach Perricone (2001): Alpha-Liponsäure hilft gegen Falten, Tränensäcke, aufgedunsene und fahle sowie fahle Haut

Dr. Perricone konnte in seinen Studien nachweisen, dass Alpha-Liponsäure die folgenden Hautprobleme zu lösen vermag:

- Tränensäcke und aufgedunsene Haut
- Linien und Falten
- Fahle und fahle Haut

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure als Regenerator der anderen Antioxidantien

Als würde die Rolle des „Maestros“ innerhalb des Orchesters nicht reichen, betätigt sich die Alpha-Liponsäure zusätzlich noch als „Coach“ innerhalb des „antioxidativen Orchesters“ und sorgt dafür, dass den anderen Mitspielern nicht die Puste ausgeht.

Wie bereits geschildert, verfügen einige der Antioxidantien innerhalb des „antioxidativen Orchesters“ über die wichtige Fähigkeit, anderen Antioxidantien ihre Kraft zurückzugeben, die im Kampf gegen die freien Radikale verloren geht. Hier bringt es aber die Alpha-Liponsäure, wie kein anderes Antioxidans, zur Spitzenleistung, indem sie die anderen Antioxidantien, die im Kampf gegen die freien Radikale ihre Energie lassen, wieder regeneriert!

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Amalgam-Entgiftung durch Alpha-Liponsäure

Der im letzten Jahrhundert breitflächige Einsatz von Amalgam als Zahnfüllung bei Millionen von Menschen dürfte auch in vielen weiteren Jahren noch schleichend Opfer nach sich ziehen. Die Langzeitwirkungen dieses unfreiwillig in unserem Körper eingelagerten Schwermetalls, das man über Jahre oder Jahrzehnte über die Mundschleimhaut direkt im Organismus aufgenommen hat, ist bis zum heutigen Tag unvorhersehbar, dafür aber verheerend!

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Die nachfolgend genannten Erkrankungen gehen auf die Vergiftung durch Amalgamplomben zurück: 

- Allergien
- Alzheimer
- Augen-, Nasen- und Ohrenerkrankungen
- chronische Schmerzen
- Erschöpfungssyndrom
- Fibromyalgie
- Frauenleiden
- Herz-Kreislauf-Störung
- Kopfschmerzen
- Lateralsklerose
- Migräne
- Multiple chemische Sensitivität
- Multiple Sklerose
- Neuropathien
- Nierenstörung
- Parkinson
- Pilze
- Psychiatrie
- Tumorbildung
- Verdauungsstörung
- Zuckungen

Hier kann die Alpha-Liponsäure maßgeblich punkten, indem sie das Quecksilber 12- bis 37-mal schneller über die Galle ausscheiden lässt.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure bei Diabetes mellitus

Diabetes mellitus, im Volksmund auch „Zuckerkrankheit“ genannt, ist eine sehr unangenehme und folgenschwere Erkrankung, die rund 8–10 Millionen aller Deutschen betrifft.

Typ-1-Diabetes betrifft 10 % aller Diabetiker und entsteht aufgrund des Mangels am Hormon Insulin, weswegen man diese Art von Diabetes auch „insulinabhängigen Diabetes mellitus“ bezeichnet. Diese Erkrankung beginnt im sehr jungen Alter, zumeist bereits schon im Kindes- und Jugendalter.

Der Diabetes-Typ 2, früher auch „nicht insulinabhängiger Diabetes“ oder „Altersdiabetes“ genannt, ist wiederum eine Erkrankung, die zumeist ältere Menschen betrifft und nicht zwingend eine Insulinbehandlung benötigt. Diese Diabetes-Art betrifft rund 90 % aller Diabetiker. Umweltfaktoren, Übergewicht und steigender Zuckerkonsum fordern ihre Opfer, und so erkranken auch immer mehr junge Menschen an Diabetes Typ 2.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure verhindert Arteriosklerose und schützt vor Herzkreislauferkrankungen, Herzinfarkt und Schlaganfall

Herzkreislauferkrankungen gelten mit ca. 50 % aller Todesfälle als Todesursache Nr. 1 in den Industrieländern. Erwiesenermaßen geht diesen in fast sämtlichen Fällen ein krankhafter Prozess voraus, den man Arteriosklerose bezeichnet.

Diese ist durch Plaqueablagerungen an der Gefäßinnenwand und eine schrittweise Sklerosierung (Verkalkung) und Verstopfung der Arterien gekennzeichnet. Wird der Blutfluss zum Herzen aufgrund einer solchen Verstopfung unterbunden, bekommt das Herz keinen Sauerstoff mehr und Teile des Herzmuskels sterben ab – man nennt dies auch Herzinfarkt. Handelt es sich um eine Hirnarterie, die aufgrund der Arteriosklerose verstopft wurde und die Durchblutung zum Hirn unterbindet, spricht man von einem Schlaganfall oder Hirnschlag.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure verhindert Herzinfarkt und lindert die Folgen

Laut Passwater (1995) haben russische Wissenschaftler bereits in den 70er- Jahren herausfinden können, dass die Alpha-Liponsäure den Cholesteringehalt im Blut um 40 % und in der Aorta um 45 % reduzieren kann. Die Sauerstoffaufnahme des Herzens erhöht sich um 72 %, in der Aorta sogar um 148 % und in der Leber um 128 %. 236 In einem weiteren Versuch konnten Forscher beweisen, dass die Gabe von Alpha-Liponsäure die Herzschäden aufgrund des vorübergehend unterversorgten Herzmuskels und dann des schlagartigen Ruckflusses (Reperfusion) während eines Herzinfarktes von 80 auf 40 % senken kann. 237

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure verhindert die Folgen von Hirnschlag/ Schlaganfall

Dr. Packer konnte im Tierversuch an Ratten mit einer Gabe von Alpha-Linolsäure die Sterberate aufgrund einer Reperfusion beim provozierten Schlaganfall von 80 auf 25 % senken. Die 75 % der überlebenden Tiere hatten keinerlei Folgeschäden. 238

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure bei Grauem Star und Augenproblemen

Studien zufolge kann die Alpha-Liponsäure das Auftreten oder die Symptome des Grauen Stars minimieren und allgemein die Augenfunktion verbessern. So konnte in einer Studie von Dr. Parker die zusätzliche Gabe von Alpha- Liponsäure einen Katerakt verhindern, was dem Einfluss von Alpha- Liponsäure auf den Glutathiongehalt zuzuschreiben ist.

Die folgende Tabelle erläutert die präventive und therapeutische Wirkung der Alpha-Liponsäure bei Katerakten: [...]

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure bei Alzheimer und Demenz

Beobachtungen von Diabetespatienten, die Alpha-Liponsäure bekamen und gleichzeitig an Alzheimer litten, zeigten, dass sich deren Alzheimer- Erkrankung nicht weiter verschlechterte und ihre Hirnleistung konstant blieb. 239

Die positive Wirkung erklären sich die Ärzte durch das Abfangen der freien Radikale und Botenstoffe durch die Alpha-Liponsäure. Diese Botenstoffe führen zu Entzündungsreaktionen und sollen im Zuge der Immunabwehr die senilen Plaques angreifen, attackieren aber darüber hinaus noch die gesunden Zellen. Hier verhindert Alpha-Liponsäure die direkte Zerstörung der Hirnzellen. Des Weiteren vermutet man, dass der Einfluss der Alpha- Liponsäure auf den Glucosestoffwechsel dem Energiespiegel der Hirnzellen zugutekommt. 

`,
    },
    {
        usefulInformationImageId: images_skin,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Liponsäure gegen Hautalterung

Die wenigsten Menschen wissen, dass die Haut das größte (je nach Körperumfang und Körpergröße 1,5 bis 2 m 2 ), das schwerste (bis zu 10 kg) und funktionell das vielseitigste Organ des menschlichen Körpers ist. Die Haut übernimmt sehr wichtige Aufgaben: Sie schützt uns vor Umwelteinflüssen, bildet eine Hülle, übernimmt wichtige Funktionen beim Stoffwechsel und der Immunologie sowie bei der Homöostase (inneres Gleichgewicht) und dient nicht zuletzt der Repräsentation und Kommunikation. 245

Zumeist dient uns die Haut jedoch als repräsentatives Werkzeug unseres Äußeren, aber wir nehmen sie sehr selten bewusst wahr, und dies meist dann, wenn wir uns verletzen, an heißen Gegenständen verbrennen oder uns einen Sonnenbrand zuziehen. Optisch betrachtet ist es die Hautalterung in Form von Falten, fahler Farbe und Altersflecken, die nach und nach unser Spiegelbild verändern, etwas, was den meisten von uns missfällt, denn wer möchte denn schon alt werden?

`,
    },
    {
        usefulInformationImageId: images_skin,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Was lässt die Haut altern und was erzeugt Hautfalten?

Hautalterung und Falten sind das allerdeutlichste Zeichen einer Alterung; hierbei spielt aber das chronologische Altern (aufgrund der Lebensjahre) eine sekundäre Rolle, denn viel wichtiger ist das physiologische Altern (aufgrund der Beschaffenheit unserer Physis)!

Und so sind sich die Vitaminforscher heutzutage darüber einig, dass Menschen im höheren Alter, die auch so aussehen, es selbst verschulden – nämlich indem sie

a) den Körper schädlichen Einflüssen, wie Rauchen, Alkohol, Stress und Sonne, aussetzen,
b) dem Körper nicht die Nährstoffe geben, die er benötigt, um die Haut zu regenerieren, und schließlich 
c) den Körper nicht vor angreifenden freien Radikalen schützen, indem sie regelmäßig Antioxidantien einnehmen!

`,
    },
    {
        usefulInformationImageId: images_skin,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Bis zum heutigen Tag herrscht der allgemeine Irrglaube vor, dass äußere Anwendungen (Cremes, Lotions) im Falle der Haut wichtiger wären als innere Anwendungen, also die Einnahme von Nährstoffen. Dies ist wohl der breitflächigen Werbung für allerlei Kosmetika und der fehlenden Aufklärung (der „Big Pharma“ sei Dank!) über den tatsächlichen Nutzen von Vitaminen und Nährstoffen geschuldet.

Dem ist aber nicht so, denn in jedem Moment unseres Lebens, in jeder Sekunde, findet nicht nur ein Abbau, sondern auch ein Aufbau aller unserer Zellen statt, das heißt, dass alles, was lebende Materie ist – und damit auch unsere Haut –sich ständig zu erneuern versucht. Dafür wird aber auch „Baumaterial“ in Form von Nähr- und Vitalstoffen benötigt. Die Komplexität der Hautstruktur, ihre aus mehreren Hautschichten bestehende Dicke bringt es mit sich, dass äußere Anwendungen in Form von Cremes 

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Die gezielte Wirkung der Alpha-Liponsäure gegen Falten und Hautalterung

Wie wir in den vorigen Kapiteln lesen konnten, nimmt die Alpha-Liponsäure innerhalb der antioxidativen Stoffe eine sehr dominante Stellung ein, indem sie im Gegensatz zu den meisten anderen in allen Gewebeformen (sowohl wässrigen als auch fettigen) ihre Wirkung entfaltet und die anderen Antioxidantien während ihres Kampfes gegen freie Radikale regeneriert. Auf diese Weise sorgt sie dafür, dass Vitamin C, Vitamin E, Coenzym Q10 und andere nicht aufgebraucht werden oder – gar schlimmer noch – selbst zu freien Radikalen mutieren, womit sie eine Unterversorgung mit diesen Substanzen bis zu einem gewissen Grad sogar kompensieren kann.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Die gezielte Wirkung der Alpha-Liponsäure gegen Falten und Hautalterung

Wie wir in den vorigen Kapiteln lesen konnten, nimmt die Alpha-Liponsäure innerhalb der antioxidativen Stoffe eine sehr dominante Stellung ein, indem sie im Gegensatz zu den meisten anderen in allen Gewebeformen (sowohl wässrigen als auch fettigen) ihre Wirkung entfaltet und die anderen Antioxidantien während ihres Kampfes gegen freie Radikale regeneriert. Auf diese Weise sorgt sie dafür, dass Vitamin C, Vitamin E, Coenzym Q10 und andere nicht aufgebraucht werden oder – gar schlimmer noch – selbst zu freien Radikalen mutieren, womit sie eine Unterversorgung mit diesen Substanzen bis zu einem gewissen Grad sogar kompensieren kann.

`,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Das Aussehen und der Geschmack

Die Aroniabeeren ähneln vom Aussehen her den Heidelbeeren, schwarzbläulich von außen und dunkelrot im Inneren (Fruchtfleisch). Der Geschmack ist am ehesten als herbsäuerlich zu bezeichnen, was dem tanninbezogenen Gerbsäuregehalt zu verdanken ist.

Aroniabeere – die Heilpflanze

Aufgrund ihres hohen Gehalts an potenziell heilwirksamen Inhaltsstoffen ist die Aroniabeere sowohl aufseiten der Prävention als auch in der Behandlung von etlichen Erkrankungen eine regelrechte Wohltat und brachte in zahlreichen Studien und Erfahrungsberichten von Naturheilpraktikern eine erstaunliche Wirkung zutage. Dies brachte ihr offiziell den Status einer Heilpflanze in Russland sowie in Polen ein, während sie in Deutschland zunächst aufgrund ihrer intensiven rötlich-violett färbenden Schale hauptsächlich als Farbstoff Verwendung fand.
  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Aroniabeeren – die Wirkstoffe

Die Aroniabeere strotzt vor lauter hochwirksamen Inhaltsstoffen; hierzu gehören Bioflavonoide, Vitamine, Mineralien und Spurenelemente.

Wirkstoffe der Aroniabeere/Apfelbeere im Einzelnen:
Vitamine in der Aroniabeere
Die Aroniabeere enthält von den fettlöslichen Vitaminen die Vitamine A, die Provitamin A, E und K und von den wasserlöslichen die Vitamine C, OPC, B1, B2 (Riboflavin), B3 (Niacin), B5, B6, B7, B9 (Folsäure), B12, C und H.

Vitamin A/Provitamin A = 1,1–2,4 g/100 ml Aroniasaft
Vitamin E = 0,8–3,1 g/100ml
Vitamin K = 0,8–1,0 g/100ml

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
OPC, das wie rund 50 000 andere Substanzen eigentlich zu den Polyphenolen zählt, aber ebenfalls den Namen „Vitamin P“ verliehen bekam, kommt in den Aroniabeeren in großen Mengen vor. OPC beansprucht eine Sonderstellung innerhalb der genannten Vitamine, da es neben dem Vitamin C zu den besonders wichtigen gehört und unter anderem über ein überdurchschnittlich hohes Zellschutzpotenzial gegenüber den Angriffen freier Radikale verfügt. So ist die antioxidative (zellschützende) Wirkung von OPC gegenüber den freien Radikalen 18- bis 20-mal stärker als die von Vitamin C und sogar 40- bis 50- mal stärker als die von Vitamin E! 

Des Weiteren verstärkt OPC die Wirkung der Vitamine C, E und Vitamin A im Körper um den Faktor 10, es heftet sich aber im Gegensatz zu diesen Vitaminen direkt an die Körpereiweiße, besonders [...]

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Bereits 24 Stunden nach der allerersten Einnahme von OPC verdoppelt sich die Widerstandsfähigkeit der Blutgefäße; bei kontinuierlicher Einnahme verdreifacht sie sich sogar im weiteren Verlauf der regelmäßigen Einnahme. OPC schützt vor UV-Strahlen, verbessert die Sehstärke und schwemmt Cholesterin aus unserem Körper heraus.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Die Aroniabeere als reichhaltigste Quelle gegen zerstörerische freie Radikale

Polyphenole haben ein rund 100-mal stärkeres antioxidatives Potenzial als Vitamine (Vitamin C trägt gerade mal mit 15 % zum antioxidativen Schutz der Zellen bei).

Was die Aroniabeere für uns Menschen so besonders und interessant macht, ist die Tatsache, dass in diversen Untersuchungen und Studien ihre antioxidative Kapazität weitaus höher lag als die anderer Früchte. Dies wird, abgesehen von dem hohen Anteil an Polyphenolen, unter anderem auch der hohen Bioverfügbarkeit der Aroniabeere zugesprochen, die auch von der Partikelgröße abhängt – diese liegt im Falle der Aroniabeere im Nanobereich.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Allgemeine Wirkung der Aroniabeere

Die Aroniabeere weist eine multifaktorielle Wirkung auf und wirkt zusammenfassend allgemein

- antioxidativ (Zellschutz vor Angriffen freier Radikale)
- Immunsystem stärkend
- antikanzerogen (krebsvorbeugend)
- antiinflammatorisch (entzündungshemmend)
- antimutagen
- blutdruckregulierend
- durchblutungsfördernd
- gefäßschützend
- herzkranzgefäßentspannend
- stoffwechselanregend
- diuretisch (harntreibend)
- adstringierend
- regenerativ auf Muskel und Knochen
- schleimlösend
- Schwermetalle ausleitend
- wachstumsförderlich für Kinder und Föten

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Der Aroniabeere werden Heilungsmechanismen bei den folgenden Erkrankungen und Leiden zugeschrieben: (1/2)

- Herzkreislauferkrankungen (Schutz vor Herzinfarkt und Schlaganfall)
- Bluthochdruck
- Thromben/Blutgerinnsel
- Entzündungen
- Gelenkerkrankungen (Arthritis, aktivierte Arthrose)
- Diabetes mellitus
- Krebs
- Hautkrankheiten, Allergien
- Asthma
- Alterung
- Magenentzündung [...]

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Der Aroniabeere werden Heilungsmechanismen bei den folgenden Erkrankungen und Leiden zugeschrieben: (2/2)

[...]
- Magenschleimhauterkrankungen
- Darmerkrankungen
- Lebererkrankungen
- Gallenerkrankungen
- Kinderkrankheiten, wie Scharlach und Masern,
- Augenkrankheiten
- Harnröhreninfektion
- Nierenerkrankungen
- Schilddrüsenerkrankung
- Strahlenschäden
- Schäden bei chemo- bzw. strahlentherapeutischen
- bakterielle und virale Erkrankungen
- Neurodegeneration

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Wirkung der Aroniabeere bei Arteriosklerose

Nach schulmedizinischem Verständnis ist die Arteriosklerose die Vorstufe zum Herzinfarkt oder Schlaganfall. Die starke antioxidative Wirkung der Aroniabeere verhindert die Oxidation der LDL-Cholesterine und verbessert das Verhältnis der HDL- zu den LDL-Cholesterinen. Beides resultiert in einem zuverlässigen Schutz vor Plaqueablagerungen in den Blutgefäßen, der Arteriosklerose.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Wirkung der Aroniabeeren gegen Bluthochdruck (Hypertonie) Die in den Aroniabeeren enthaltenen Bioflavonoide mit ihrer Vitamin P- Aktivität wirken sich in Verbindung mit anderen in der Aroniabeere enthaltenen Mineralien und Vitaminen positiv auf die Elastizität und Durchlässigkeit der Blutgefäße aus. Das Nervensystem wird beruhigt, und die Cholesterolablagerungen, die zur Arteriosklerose führen, werden verhindert. All dies macht die Aroniabeere zu einem potenten Heilmittel gegen Bluthochdruck.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Wirkung der Aroniabeeren bei Arthritis und aktivierter Arthrose Auch hier greifen die erwähnten antientzündlichen Wirkungsmechanismen, wie die Drosselung der Cyclooxygenasen, die Hemmung der Lipoxygenasen sowie die Blockierung des Enzyms „Phospholipase A2“, die allesamt den entzündlichen, gelenkzerstörerischen Prozess im Gelenkinneren unterbinden und Erkrankungen wie Arthritis oder aktivierte Arthrose positiv beeinflussen können.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Aroniabeeren-Wirkung gegen Alterung

Der sehr hohe Anteil der Flavonoide, Pelyphenolen und Phenolsäure (Aronia gilt als eine der reichhaltigsten Quellen für Anthocyane) in der Aroniabeere sorgt für einen exzellenten Schutz vor freien Radikalen, die nicht nur für zahlreiche Zivilisationskrankheiten, wie Krebs, Herzkreislauferkrankungen, Diabetes oder Arthritis, zuständig sind, sondern zugleich auch für die Zellalterung.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">📕 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
  `,
    },
    {
        usefulInformationImageId: images_aronia,
        afflinksId: afflinks.aronia,
        quelleId: "3",
        text: `
Viele Altersforscher vertreten die Meinung, der Mensch könnte ca. 120 Jahre alt werden, würde es ihm gelingen, die Angriffe der freien Radikale abzuwehren – eine Disziplin, welche die Aroniabeere meisterlich beherrscht –, denn die Beere verfügt über einen überdurchschnittlich hohen Anteil an oligomeren Procyaniden (OPC), die über ein beachtliches Zellschutzpotenzial verfügen. Die Ellagsäure übernimmt zellregenerierende und zellreparative Maßnahmen.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">👉 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
  `,
    },
    {
        usefulInformationImageId: images_aronia,
        afflinksId: afflinks.aronia,
        quelleId: "3",
        text: `
Aroniasaft kaufen

Beim Kauf des Aroniasaftes gilt es, die Augen offen zu halten und darauf zu achten, dass es sich um 100 % reinen Aroniasaft handelt, den sogenannten „100 %igen Direktsaft“. Nicht selten sind vermeintliche Aroniasäfte im Handel zu finden, die nur geringfügig Aroniasaft enthalten, dafür mehr Wasser oder ein Saftgemisch aus mehreren Früchten. Der Saft sollte nicht zusätzlich gezuckert oder mit Konservierungsstoffen versetzt sein. Des Weiteren sollte er luftdicht verpackt und vor Licht geschützt sein.

  `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Astragalus membranaceus - Eine chinesische Wurzel mit erstaunlichen Fähigkeiten

Der chinesische Name „Huang Qi“ wiederum bedeutet „gelber Führer“, was den Stellenwert der seit rund 4000 Jahren innerhalb der TCM (Traditionellen Chinesischen Medizin) verwendeten Pflanze bereits erahnen lässt. In der Tat gehört der Astragalus zu den wichtigsten Pflanzen der traditionellen, chinesischen Medizin.

„Qi“ ist gleichbedeutend mit „Lebenskraft“ – wird diese angeregt, wie man es auch vom Ginseng her kennt, werden Selbstheilungskräfte aktiviert, und dementsprechend verschwinden viele Krankheiten und krankhafte Missstände von selbst.

  `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Wirkungsweise und Wirkung des Astragalus membranaceus

Wie bei allen Heilmitteln der Traditionellen Chinesischen Medizin ist es das perfekte Zusammenspiel der von „Mutter Natur“ wundersam aufeinander abgestimmten Inhaltsstoffe, das zu der erstaunlichen Wirkung führt, wie wir sie unter dem Punkt „Astragalus Wirkstoffe“ abgehandelt haben. Besonders die zahlreich in Wurzeln, Heilpilzen und Wildbeeren vorkommenden Polysaccharide, Flavonoide sowie Saponine gehören mit steigender Tendenz zu den begehrten Objekten von Studien und erwiesen sich in jüngster Vergangenheit auf vielfältige Weise als außerordentlich wirkungsvoll gegenüber zahlreichen Krankheitsbildern und Zuständen.
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Wirkung von Astragalus auf das Herz

Astragalus wirkt sich außerordentlich kräftigend auf das Herz aus, sorgt für eine stärkere Durchblutung und ökonomische Arbeitsweise des Herzmuskels und schützt es vor zerstörerischen Oxidationsprozessen.

Wirkung von Astragalus auf die Lunge

Astragalus vermag die Lungenfunktion zu stärken und Kurzatmigkeit und Asthmazuständen entgegen zu wirken.

Wirkung von Astragalus auf die Milz

In Studien konnte eine signifikante Wirkung von Astragalus bei Milz-Mangel- Symptomen, wie Müdigkeit, Durchfall, Appetitlosigkeit und verstärkter Schweißabsonderung, unter Beweis gestellt werden.

  `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Zusammengefasst wirkt der Astragalus membranaceus

- antioxidativ
- immunstimulierend
- antitumoral
- antiviral
- antibakteriell
- entzündungshemmend
- tonisierend/vitalisierend
- herzschützend
- nervenschützend
- entstressend
- verjüngend
- entgiftend
- diuretisch (entwässernd)

 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Wirkung von Astragalus membranaceus gegen Krebs

In Studien konnte Astragalus membranaceus beim kleinzelligen Lungentumor, beim Melanom sowie beim Nierenkrebs signifikante Wirkungen aufzeigen und die positive Wirkung einer Chemotherapie potenzieren, deren Nebenwirkungen hingegen schmälern. Des Weiteren gelten zu kurze Telomere als instabil und krebsanfällig. Astragalus schützt die Telomere vor vorzeitiger Verkürzung und könnte auf diese Weise möglicherweise auch vor Krebs schützen.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">📕 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Verjüngende Wirkung von Astragalus

Gerade die Auswirkung auf die körperliche und geistige Verjüngung brachte dem Astragalus membranaceus eine fast schon explosive Popularität in westlichen Ländern ein. Dies ist den Nobelpreisträgern für Medizin aus dem Jahre 2009 zu verdanken, die sich um die Erforschung der Telomere sowie des zugehörigen „Unsterblichkeitsenzyms“ Telomerase und den hieraus resultierenden Erkenntnissen über die Zusammenhänge mit Astragalus, die sehr bald folgen sollten, verdient gemacht haben.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">📕 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Bei folgenden Krankheiten und Krankheitszuständen findet Astragalus seit jeher Anwendung: (1/2)

- alle Erkrankungen, die mit einem schwachen zusammenhängen
- Erkrankungen, die mit einem Virus zusammenhängen
- Herzerkrankungen und Herzschwäche
- Bluthochdruck
- Lebererkrankungen
- Nierenerkrankungen
- Nervenkrankheiten
- Parkinson
- alle Allergienformen
- alle entzündlichen Erkrankungen (Arthritis usw.)
- Asthma
- Unfruchtbarkeit (männl. Infertilität)
- Krebs
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Bei folgenden Krankheiten und Krankheitszuständen findet Astragalus seit jeher Anwendung: (1/2)

- HIV/AIDS
- Autoimmunerkrankungen (z. B. Lupus)
- Geschwüre
- Ödeme
- Wunden
- Verdauungsschwäche
- Störungen des Hormonhaushalts
- Taubheit/Lähmung der Gliedmaßen
- Diabetes mellitus und dessen Spätfolgen
- chronische Nephritis
- chronisches Müdigkeitssyndrom
- Albuminurie
- Aszites

 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Spezifische Wirkung bei Herzkrankheiten

Untermauert durch Studien (siehe Punkt „Astragalus-Studien“), wirkt Astragalus besonders auf die folgenden Krankheitszustände am Herzen positiv ein:

- Herzinsuffizienz
- Angina Pectoris
- Koronare Herzkrankheit
- Myocarditis
- Myokardischämie
- Des Weiteren ist Astragalus bei sämtlichen Herzerkrankungen und allgemeiner

 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Wirkung bei Allergien

In zahlreichen Studien konnte der Astragalus eine regulierende Wirkung auf das Immunsystem unter Beweis stellen, was bei allergischen Erkrankungen von allergrößter Bedeutung ist.

Der Astragalus wird als Tragantwurzelextrakt bei Allergien angewandt, fördert hier die Synthese von IgG-Antikörpern und trägt somit zur Eliminierung von Allergenen bei. Die Expression von T-bet mRNA und T-Helfer1-Zytokinen, wie etwa IFN-γ, wird gefördert, die Aktivität derjenigen Gene, die während des Allergieprozesses am Entzündungsgeschehen beteiligt sind, wird reguliert, und die Ausschüttung von Histamin wird unterbunden, was zur Verhinderung von Allergiesymptomen führt. Hier hat sich Astragalus bei Pollenallergie, Hausstaubmilben- und Tierhaarallergie bestens bewährt.

 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Verjüngung mit Astragalus

Der Astragalus nimmt die Herausforderung der Verjüngung multifaktoriell auf durch:

- antioxidative Wirkung
- immunstimulierende Wirkung
- Antiglykierung
- Schutz der Telomere vor Verkürzung
- verlängernde Wirkung der Telomere
- Reparatur der DNA

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">📕 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Die drei Molekularbiologen, Jack W. Szostak, Elizabeth H. Blackburn und Carol W. Greider vom Karolinska Institut in Stockholm liefern in ihrer Arbeit grundlegende Antworten zur Funktion der Telomere an unseren Chromosomen sowie des zugehörigen „Unsterblichkeitsenzyms“ „Telomerase“ und erhalten damit den begehrten Nobelpreis für Medizin 2009. 

Zur Erläuterung: Mit jeder Zellteilung werden die Enden der Chromosomen, die sogenannten Telomere, ein Stück kürzer. Fügt man aber den Telomeren ein Enzym namens „Telomerase“ hinzu, werden die Chromosomenden von diesem Enzym synthetisiert und wieder angehängt.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">📕 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Bestimmte Telomerase-Aktivatoren aus der Astragaluswurzel, so zum Beispiel Astragaloside IV und Cycloastragenol, besitzen nun die erstaunliche Fähigkeit, auch in den normalen Körperzellen das Gen und damit die Telomerase zu aktivieren, damit die Telomere vor Verkürzung zu schützen und sogar eine Telomerverlängerung einzuleiten.

„Zum ersten Mal in der Geschichte der Medizin besteht potenziell die Möglichkeit, die nachteiligen Auswirkungen des Alterungs- und Abbauprozesses, der mit unzureichender Telomerase und kurzen Telomeren in Verbindung steht, auf effektive Weise zu mindern und möglicherweise sogar vollständig zu beseitigen.“ (Noel Thomas Patton, Gründer von TA Sciences)

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">📕 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Die berühmte Havard University bestätigt die Telomerase-These der Alterung

Im November 2010 sorgte die Harvard Medical School für eine Sensation, indem sie einen Artikel über ein Forschungsexperiment veröffentlichte, in dem es erstmals gelang, Alterungsprozesse von Säugetieren nicht nur zu stoppen, sondern sogar umzukehren!

Die beschriebene Telomerase-Aktivierung führte zur biologischen Verjüngung von Hirnzellen, der Milz sowie den Fortpflanzungsorganen, und das biologische Alter von Mäusen, die umgerechnet dem eines 80-jährigen Menschen entsprachen, konnte auf das Alter junger Erwachsener umgekehrt werden.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">📕 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Auch Studien an der University of Toronto in Kanada konnten eindeutig belegen, dass die Erhöhung der Telomerase-Aktivität in normalen menschlichen Zellen mit der damit einhergehenden Verlängerung der Telomere zur tatsächlich erhofften Lebensverlängerung führt.

Mehr als das – es verschwanden bestimmte Erkrankungen mit der Verjüngung der Zellen von selbst, so zum Beispiel Alzheimer, Arthritis, Osteoporose. Die Forscher schlossen ihre Forschungen mit folgendem revolutionären Fazit ab: „Alterung verursacht nicht kurze Telomere, sondern kurze Telomere verursachen die Alterung.“ und „Krankheiten machen nicht alt, sondern Alterung führt erst zu diversen Erkrankungen“.
 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Colostrum/Kolostrumi - Wissenswertes im Vorfeld

Kolostrum (Colostrum) ist mehr als ein wunderbares Geschenk von Mutter Natur. Es ist die größtmögliche Rückversicherung der Natur für die Überlebenschance eines Neugeborenen, um den Fortbestand sowohl der menschlichen als auch der tierischen Rasse zu sichern. Innerhalb der Geschenke von Mutter Natur nimmt das Kolostrum eine ganz besondere Rolle ein, denn es ist nicht irgendein Nährstoff, sondern DER Nährstoff schlechthin, mit der längsten Einnahmetradition und der denkbar höchsten möglichen Einnahmefrequentierung – nämlich von der Geburt und der Säugung des ersten Lebewesens an.
 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Nun wäre es moralisch bedenklich, würde man Kälbern und Ziegenkindern etwas wegnehmen, das diese selbst für ihr Leben dringend benötigen. Aber es ist beruhigend zu erfahren, dass die Muttertiere Kolostrum in Überschuss produzieren und der Mensch lediglich diesen für sich in Anspruch nimmt. Und so ist es kein Zufall, dass Millionen von Menschen weltweit sich dieses Geschenkes von Mutter Natur bedienen und die Anzahl der Ärzte steigt, die ihren Praxen Kolostrum anwenden, um Symptome von Allergien, Entzündungen und Infektionen (MS, AIDS, Krebs) bis hin zum Muskelabbau nicht nur zu lindern, sondern häufig sogar zu heilen.

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
„Ich verschreibe Kolostrum ungefähr einem Drittel meiner Patienten. Nach Einnahme dieses Nahrungsergänzungsmittels blühen diese Patienten ihren eigenen Berichten zufolge förmlich auf, und ihr Zustand bessert sich in der Regel beträchtlich. Wenn wir dem Patienten helfen können, sich ohne die üblichen Arzneimittel besser zu fühlen, dann tun wir es auch. Meiner Meinung nach ist die moderne Ernährungsbiochemie ein sehr interessantes Gebiet – und Kolostrum gehört dazu." (Dr. med. Nikki Marie Welch)

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Herstellung und Verarbeitung von Kolostrum

Die schonende Verarbeitung des Kolostrums ist der unmittelbare Garant für den höchstmöglichen Erhalt seiner faszinierenden Nährstoffe. Im Optimalfall stammt das Kolostrum von Bio-Rindern, was eine Verseuchung mit Aufzuchthormonen, Pestiziden und Herbiziden ausschließt. Das Kolostrum für die Nahrungsergänzungsproduktion wird innerhalb der ersten 36 Stunden nach der Geburt der Kälber (Rinderkolostrum) oder Ziegen (Ziegenkolostrum) gewonnen. Etwa 19 von den rund 34 Litern, die eine Kuh in dieser Zeit produziert, blieben ansonsten unverbraucht, lediglich den Rest beansprucht das Kälbchen für sich.

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Wirkstoffe im Kolostrum

In diesem Naturmittel sind rund 80 verschiedene Mikronährstoffe enthalten, die für die extrem potente Wirkung von Kolostrum zuständig sind. Es ist daher ein wesentlicher Punkt, sein Kind zu stillen, denn gemäß diverser Studien 347 leiden nicht gestillte Kinder sehr viel häufiger unter Nahrungsmittelallergien, Ekzemen, Atemwegsallergien und Verdauungsproblemen.

Die Forscher sind sich darüber einig, dass sie noch lange nicht alle Wirkstoffgruppen, geschweige denn einzelne Wirkstoffe haben identifizieren können, die zu den fantastischen gesundheitlichen Vorzügen von Kolostrum führen, die sich auch Erwachsene über entsprechende Kolostrumpräparate zu eigen machen können.

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
So wirkt Kolostrum allgemein bei Allergien

Studien zufolge leiden Kinder, welche die Brust bekamen, viel seltener unter Allergien als Kinder, die nicht gestillt wurden. 405 Kolostrum verfügt über entsprechende Autoantikörper, so zum Beispiel die polymorphkernigen Leukozyten, die die Immunreaktionen im Körper, die zu Allergien führen, regulieren.  

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Wirkung von Kolostrum gegen Krebs

Jeder dritte Deutsche erkrankt mittlerweile an Krebs, jeder vierte verstirbt daran. Trotz milliardenschwerer Forschung und der Fähigkeit, seit den 1960er- Jahren zum Mond zu fliegen, gibt es keine wissenschaftlichen Fortschritte, die dieser furchtbaren Geißel der Menschheit trotzen könnten. Umso wichtiger sind die Prävention und im Falle einer Erkrankung eine zumindest ergänzende Therapie mit Naturheilmitteln, wie bitteren Aprikosenkerne, sowie Kolostrum oder natürlichem Vitamin C.

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Kolostrum gegen Alterung

Die altersvorbeugende Wirkung von Kolostrum führt zu sichtbaren und nicht sichtbaren Verjüngungen des Organismus. Äußerlich wirkt sich die Verjüngung durch eine jugendlichere Haut sowie das Verschwinden von Falten und Altersflecken aus, innerlich nehmen die im Alter zurückgegangene Muskelmasse zu und der Körperfettanteil ab, und die Knochendichte wird erhöht.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">📕 Der Telomer Effekt - Die Entschlüsselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Wie wirkt Kolostrum gegen das Altern?

Kolostrum wirkt über viele Inhaltsstoffe und Eigenschaften gegen das physiologische Altern unseres Körpers. Die antioxidativen Eigenschaften schützen unsere Zellen vor Degeneration, und die Wachstumsfaktoren (z. B. IGF-1) beschleunigen die Regeneration unseres Gewebes. Altersenzym „Telomerase“

Kolostrum verfügt über ein Enzym namens „Telomerase“, von dem die Anti- Aging-Wissenschaftler annehmen, dass es den Alterungsprozess bremsen kann. Dieses Enzym wird vom Körper in kleinsten Mengen hergestellt und verhindert unter anderem die Verkürzung der Chromosomenstränge bei der Zellteilung. Dieser Prozess fördert die Heilungsprozesse beschädigter Zellen, und viele Wissenschaftler begründen das Altern der Zellen mit der nachlassenden Fähigkeit, diese wiederherzustellen, was Versuche an Menschen mit der „Greisenkrankheit“ belegen, denen das Enzym „Telomerase“ gänzlich fehlt.
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Die medizinische Anwendung ist recht breit gefächert und reicht von Alzheimer über Diabetes bis hin zu Krebs; zur Anwendung kommt dabei zumeist das zunächst gemahlene und dann getrocknete Rhizom (Wurzel) in pulverisierter Form. Wie wirkungsvoll dieses sein kann, wird am Beispiel von Krebs deutlich. Hier gibt es Expertenstimmen, die die Überzeugung vertreten, es gäbe keine Krebsart, die nicht auf die Behandlung mit Curcumin reagieren würde!

Ferner schützt Curcumin das Herz vor Herzinfarkten, das Hirn vor Schlaganfällen und die Leber vor einer Zirrhose; es senkt den Blutzuckerspiegel und schützt auch vor den gefürchteten Folgen der Diabetes.
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Naturforscher sind sich einig, dass längt nicht alle Wirkstoffe aus der Kurkuma identifiziert werden konnten; für viele fehlen noch Bezeichnungen und Definitionen. Aus den rund 400 identifizierten Wirkstoffen sticht besonders das Curcumin als eines von 90 verschiedenen Curcumoiden, welche die Kurkuma beinhaltet, hervor
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Die folgenden Wirkstoffgruppen kommen in der Kurkuma vor:

- Vitamine
- Mineralien
- Spurenelemente
- Kohlenhydrate
- Eiweiß
- Fettsäuren
- Sekundäre Pflanzenstoffe
- Enzyme
- Hormone
- Ätherische Öle
- Bitterstoffe
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Allgemeine Wirkung von Curcumin (1/2)

- Curcumin wirkt antioxidativ (zellschützend)
- Curcumin wirkt antiinflammatorisch (entzündungshemmend)
- Es zeigt eine immunmodelarische (Immunsystemaufbauende) Wirkung.
- Es verfügt über eine antibakterielle Wirkung.
- Curcumin zeigt antimykotische (pilzhemmende) Wirkungen
- es ist Zellmembran festigend
- genregulativ
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Allgemeine Wirkung von Curcumin (2/2)

- neuroprotektiv
- chemopräventiv
- choleretisch
- antiphlogistisch
- sauerstoffanreichend
- chlekinetisch
- antiischämisch
- heilungsfördernd
- gallentreibend
- als Insektizid
- Es wirkt sich entgiftend auf den Organismus aus.
- Curcumin hat eine antikarzenogene (krebshemmende) Wirkung.
- Es ist cholesterinsenkend/lipidsenkend.
- Curcumin wirkt hepatoprotektiv (leberschützend).
- Curucmin wirkt blutdrucksenkend.
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Antikarzinogene (krebshemmende) Wirkung

Die Wirkungsweise, mit der Curcumin Einfluss auf das Krebsgeschehen nimmt, kann zu Recht als ganzheitlich und multifaktoriell bezeichnet werden. Diesem wichtigen Thema ist ein eigener Punkt gewidmet: „Curcumin bei Krebs“
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Auf die folgenden Erkrankungen und Missstände nimmt Curcumin/Kurkuma positiven Einfluss: (1/3)

- Herzkreislauferkrankungen
- Schutz vor Herzinfarkt
- Schutz vor Schlaganfall
- Schutz vor Thrombosen
- Krampfadern
- Schutz vor Vireninfektionen
- Schutz vor Pilzen
- Herpes-Virus-1
- Darmpolypen
- Alzheimer
- Konzentrationsschwäche
- Tumorentstehung/Krebs
- Entzündliche Erkrankungen
- Arthritis
- Arthrose
- Psoriasis
- Infektionen
- Hauterkrankungen
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Auf die folgenden Erkrankungen und Missstände nimmt Curcumin/Kurkuma positiven Einfluss: (2/3)

- Akne
- Juckreiz
- Nesselsucht
- Multiple Sklerose
- Depressionen
- Impotenz
- Menstruationsbeschwerden (PMS)
- Gallensteine
- Nierensteine
- Reizblase
- Blähungen
- Magendarmprobleme
- chronische Müdigkeit
- Schuppenflechte
- Allergien
- Insektenstiche
- Erkrankungen der Atemwege
- Schlafstörungen
- Asthma
- Bronchitis
- Lungenfibrose
- Mukoviszidose
- Darmerkrankungen (Morbus Crohn, Colitis Ulcerosa)
- Durchfall
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Auf die folgenden Erkrankungen und Missstände nimmt Curcumin/Kurkuma positiven Einfluss: (3/3)

- Husten
- Epilepsie
- Lebererkrankungen/Leberschwäche
- Grüner Star
- Kennedy-Krankheit (spinale Muskelatro
- phie)
- Vorzeitige Alterung
- Zahnfleischentzündungen
- Uveitis (Entzündung der mittleren Augenhaut)
- Übergewicht
- Beschwerden nach den Wechseljahren
- HIV/AIDS
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Wirkung von Curcumin bei Alzheimer

Curcumin konnte in zahlreichen Studien einen Schutz für das Hirn vor neurodegenerativen Erkrankungen unter Beweis stellen. Als Auslöser von Alzheimer wird ähnlich einer Arteriosklerose eine Ablagerung von Plaques (amyloide Plaques) in dem Bereich angesehen, in dem sich die Nervenzellen befinden. Dies führt zur Unterbrechung der neurologischen Leitung von Signalen mit entsprechenden Funktionseinbußen [...] 
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Wirkung gegen entzündliche Erkrankungen, so auch gegen Arthritis.

Entzündliche Erkrankungen werden maßgeblich ebenfalls durch freie Radikale verursacht. Curcumin verfügt über ausgesprochen starke antioxidative Eigenschaften und kann diesem Entstehungsmechanismus bereits effizient entgegentreten. Ein weiterer Mechanismus innerhalb des Arthritisgeschehens ist die Histaminausschüttung, die Curcumin ebenfalls beeinflussen kann. In zahlreichen Studien konnte Curcumin beweisen, dass es genauso wirksam oder noch wirksamer gegen Entzündungen im Organismus wirkt wie die klassischen Entzündungsblocker der Schulmedizin (Ibuprofen, Aspirin usw.), dies aber völlig nebenwirkungsfrei!

<a href="https://www.kopp-verlag.de/a/kopp-vital-curcuma-kapseln?&6=35747624&otpcytokenid=35747624">👉 Kopp Vital Curcuma Kapseln</a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=https://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-180-kapseln-im-glas-mit-kurkuma-mangan-kupfer">👉 Coenzym Q10 Vita | 180 Kapseln im Glas (Mit Kurkuma + Mangan + Kupfer) </a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=hhttps://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-500-kapseln-mit-kurkuma-mangan-kupfer-vorratsbeutel">👉 Coenzym Q10 Vita | 500 Kapseln (Mit Kurkuma + Mangan + Kupfer) Vorratsbeutel </a>
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Wirkung von Curcumin bei Arthrose

Die Arthrose ist im fortgeschrittenen Stadium durch Gelenkschmerzen und Bewegungseinschränkung gekennzeichnet. In einer Doppelblindstudie konnte der verwendete Curcumin-Phospholid-Komplex eine signifikante Besserung der Schmerzsymptomatik sowie der Beweglichkeit der Arthrosepatienten nachweisen. 427 Zu begründen ist dies unter anderem mit den antiinflamma- torischen Eigenschaften des Curcumin, die die Symptomatik der Schwellung, Schmerzen, Entzündungen und Rötung lindern und es dem Gewebe erlauben, sich zu regenerieren. Hier kann Curcumin nebenwirkungsbehaftete NSAR ersetzen.

<a href="https://www.kopp-verlag.de/a/kopp-vital-curcuma-kapseln?&6=35747624&otpcytokenid=35747624">👉 Kopp Vital Curcuma Kapseln</a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=https://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-180-kapseln-im-glas-mit-kurkuma-mangan-kupfer">👉 Coenzym Q10 Vita | 180 Kapseln im Glas (Mit Kurkuma + Mangan + Kupfer) </a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=hhttps://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-500-kapseln-mit-kurkuma-mangan-kupfer-vorratsbeutel">👉 Coenzym Q10 Vita | 500 Kapseln (Mit Kurkuma + Mangan + Kupfer) Vorratsbeutel </a>
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Wirkung von Curcumin bei Asthma und allgemeinen Erkrankungen der Atemwege

Die entzündungshemmende, antioxidative und die Histaminausschüttung unterdrückende Wirkung von Curcumin kann allergischem Asthma und zahlreichen Erkrankungen der Atemwege entgegenwirken (darunter Atemnotsyndrom, allergisches Asthma, ALI, COPD). Im Gegensatz zu den Standardmedikamenten auf Cortison-basis erfolgt eine Behandlung mit Curcumin völlig nebenwirkungsfrei.

<a href="https://www.kopp-verlag.de/a/kopp-vital-curcuma-kapseln?&6=35747624&otpcytokenid=35747624">👉 Kopp Vital Curcuma Kapseln</a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=https://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-180-kapseln-im-glas-mit-kurkuma-mangan-kupfer">👉 Coenzym Q10 Vita | 180 Kapseln im Glas (Mit Kurkuma + Mangan + Kupfer) </a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=hhttps://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-500-kapseln-mit-kurkuma-mangan-kupfer-vorratsbeutel">👉 Coenzym Q10 Vita | 500 Kapseln (Mit Kurkuma + Mangan + Kupfer) Vorratsbeutel </a>
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        text: `
Wirkung des Curcumin gegen Alterung

Curcumin aktiviert Gene, die für die Zellteilung und Zelldifferenzierung verantwortlich sind. Die Zellteilung ist eine Voraussetzung zur Verjüngung aller Gewebeformen. Des Weiteren fördert es die Kollagensynthese und damit den Neuaufbau von Kollagenen, die zur Hauterneuerung und Faltenfreiheit führen.

Mit seiner neuroprotektiven Schutzwirkung und dem hieraus resultierenden Schutz vor Alzheimer und Demenz stellt Curcumin ein regelrechtes funktionelles Anti-Aging-Mittel dar.

 `,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Zu diesem Zwecke sammeln die Bienen Harz aus Baumknospen und verletzter Baumrinde (vorzugsweise aus Pappeln, aber auch Birke, Kiefer, Fichte, Erle und andere Baumarten kommen infrage) und vermischen es im Bienenstock mit eigenen Fermenten, Blütenpollen und Wachs, um für sich und ihre Nachkommen eine sterile und dichte, vor Regen, Hitze, Kälte und Wind geschützte Behausung zu garantieren.

Bei dieser selbst hergestellten Masse handelt es sich um das, was wir Menschen schließlich dann „Propolis“ nennen. Vereinfacht kann man also sagen, dass sich die Bienen Pflanzenextrakten bedienen, die an sich bereits sehr gesund sind, und deren Wirkung optimieren, indem sie diese mit eigenen Sekreten vermischen.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Unter anderem ist die Wiederentdeckung von Propolis einem dänischen Bienenzüchter namens Karl Lund Aagaard zu verdanken, dessen Experimente alle Aspekte um das Bienenvolk und den Bienenstock beinhalteten, entsprechend also auch das Kittharz der Bienen, also Propolis.

Seine ersten Experimente hinsichtlich der gesundheitlichen Eigenschaften von Propolis unternahm er im Selbstversuch. Eine schlimme Halsentzündung, einhergehend mit hohem Fieber bot sich hierzu bestens an und klang zum Erstaunen seiner Frau, die von Beruf Krankenschwester war, über Nacht bis auf eine noch leichte Halsrötung völlig ab. Diese Halsrötung sollte einen Tag später komplett verschwinden.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Wirkstoffe im Propolis

Bis zum heutigen Tag konnten die Wissenschaftler eine Anzahl von ca. 200 Inhaltsstoffen darin identifizieren.

Zu den Wirkstoffen in Propolis gehören Vitamine, Mineralien, Spurenelemente, sekundäre Pflanzenstoffe und ätherische Öle. Die Hauptwirkstoffe sind aber ohne Frage die Flavonoide, die den sekundären Pflanzenstoffen angehören.

Zunächst muss man jedoch unbedingt vorausschicken, dass es nicht DAS standarisierte Propolis gibt; vielmehr hängt dessen Zusammensetzung (und damit auch die Wirksamkeit) stark von der Region (geografisch bedingte Eigenheiten von Pflanzen), in der die Bienen tätig wurden, sowie von der Jahreszeit ab. Die Wirksamkeit kann also von Propolis zu Propolis variieren.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Revitalisierende Wirkung von Propolis

Indem es in Stoffwechselprozesse eingreift und diese beschleunigt, ist Propolis geradezu dafür prädestiniert, älteren und kranken Menschen wieder Energie zu schenken, indem es deren alters- oder krankheitsbedingte Stoffwechselprozesse wieder ankurbelt.

Zellverjüngende Wirkung von Propolis

Propolis vermag nach Ansicht von Prof. Dr. E. Dörling die Zellverjüngung nicht nur signifikant zu beschleunigen, sondern sogar zu verdoppeln!
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Antibakterielle, antivirale und antifungale Wirkung von Propolis

Im Gegensatz zu Antibiotika (also Penicillin & Co.), die lediglich ein Dutzend verschiedener Bakterienstämme zu eliminieren verstehen, nimmt sich Propolis sämtlicher Parasiten an, angefangen von Bakterien bis hin zu Viren und Pilzen. Darüber hinaus können diese Parasiten, im Gegensatz zur Sachlage bei Antibiotika, keine Resistenz gegen Propolis entwickeln, was dieses zu einer ausgezeichneten und immer beliebteren Alternative zu den schädlichen Antibiotika macht.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Schmerzlindernde Wirkung von Propolis

Die im Propolis enthaltenen Flavonoide sind natürliche Antagonisten (Gegenspieler) von Prostaglandinen, die bekanntlich innerhalb des Schmerzgeschehens eine ursächliche Rolle spielen. Dies zieht eine regelrechte anästhesierende Wirkung nach sich und stellt eine gesunde Alternative zu zahlreichen, häufig stark nebenwirkungsbehafteten Medikamenten der Schulmedizin dar.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Antiallergische Wirkung von Propolis

Die antiallergische Wirkung von Propolis ist vor allem auf die darin enthaltenen Flavonoide zurückzuführen. Bekanntlich entstehen Allergien aufgrund der Freisetzung von Histamin. Die Flavonoide im Propolis schützen die Mastzelle, die das Histamin ausschüttet, dämmen deren Ausschüttung ein und verhindern so direkt die allergischen Reaktionen.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Wirkung von Propolis gegen Altersbeschwerden – Anti-Aging

Die sicherlich aufsehenerregendste Fähigkeit von Propolis bezüglich eines Anti-Aging-Effektes liegt in seiner Eigenschaft, die Zellverjüngung um das Doppelte beschleunigen zu können. 473 Propolis erweist sich als ein potentes Mittel gegen sämtliche Altersbeschwerden. Es sind in erster Linie die Angriffe von freien Radikalen, die uns altern lassen. So vermuten Experten, dass der Mensch 120 Jahre alt werden könnte, wenn es ihm gelänge, sämtliche Angriffe von freien Radikalen abzuwenden. Propolis hat in zahlreichen Experimenten sehr effiziente, antioxydative Fähigkeiten unter Beweis stellen können. Des Weiteren baut unser Immunsystem mit fortschreitendem Alter stetig ab. Die immunstärkende Wirkung von Propolis kann also auch diesem Alterungsaspekt gerecht werden.[...]
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Wirkung von Propolis bei Allergien

Zu den häufigsten Allergieformen zählen Pollenallergie (Heuschnupfen), Tierhaarallergie, Nahrungsmittelallergie, Insektenallergie sowie Hausstaubmilbenallergie. Die im Propolis zahlreich enthaltenen Flavonoide schützen nicht nur die Mastzellen, die für die Histaminausschüttung zuständig sind, sondern hemmen diese an sich. Es gibt Berichte darüber, dass selbst extrem schwerste Allergiefälle, beispielsweise bei Heuschnupfen, nicht nur eine Linderung, sondern nach wiederholter Anwendung der Propolis-Behandlung eine komplette Heilung erfahren konnten und eine weitere Anwendung unnötig war.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Wirkung von Propolis bei Durchblutungsstörungen, Schaufensterkrankheit und Raucherbein 

Bei Durchblutungsstörungen und der Schaufensterkrankheit sowie bei Raucherbeinen hat sich die Anwendung der Propolis-Salbe sehr gut bewährt. Mehrmals am Tag, vor allem vor dem Schlafengehen, die betroffenen Extremitäten kräftig einreiben.

Wirkung von Propolis bei Hauterkrankungen, Akne, Gürtelrose, Herpes usw.

Propolis hat sich in Form einer Salbe in der äußeren Anwendung von zahlreichen Hauterkrankungen, von Akne über Gürtelrose bis hin zu Herpes, als geradezu hervorragend herausgestellt.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Propolis Wirkung bei Rheuma/Arthritis

Propolis hat bei Rheuma- bzw. Arthritispatienten in Doppelblindstudien eine herausragende Wirkung erzielt und sollte äußerlich als Salbe angewandt werden.

In einem Doppelblindversuch hat man 28 Rheumapatienten mit einer Propolis-Salbe und einem Scheinpräparat behandelt. Diejenigen Rheumapatienten, die mit der Propolis-Salbe behandelt wurden, erfuhren eine „eindrucksvolle Besserung innerhalb der ersten Woche“ 475 Hierbei sollte man die betroffenen Gelenke 2–3 x täglich mit einem dünnen Film an Propolissalbe einreiben.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Propolis in der alternativen und komplementären Krebsbehandlung

Während Propolis vor allem aufgrund seiner antibakteriellen und antiallergischen Eigenschaften berühmt geworden ist, zeigt es gerade in letzten Jahren weitere ungeahnte Potenziale, nämlich im Kampf gegen Krebs! So zeigt die Krebsforschung seit Neustem starkes Interesse an diesem Naturstoff der Bienen, denn es scheint, als verfüge Propolis über direkte krebszellentötende sowie das Krebswachstum hemmende Eigenschaften.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Bei welchen Krebsarten wirkt Propolis?

Aufgrund der umfassenden, multifaktoriellen Wirkung kann man davon ausgehen, dass sich Propolis bei zahlreichen Krebsarten bewährt; hierzu muss man jedoch die weitere Forschung abwarten. Nachweislich konnte Propolis (im Tierversuch) die folgenden Krebsarten verhindern: 

- Brustkrebs
- Darmkrebs
- Nierenkrebs
- Hautkrebs
`,
    },
    {
        quelleId: "2",
        afflinksId: afflinks.propolis_bedrop_dermatitis,
        text: `
Wissen zu Dermatitis 
Dermatitis ("Dermis" = dt. "Haut") ist ein Oberbegriff für Hautkrankheiten wie z.B. Neurodermitis, Ekzem und andere Hautbeschwerden mit entzündlichen Symptomen.

Empfehlung bei Dermatitis:

20% Propolis Tinktur: 2-3 Tropfen in eine Naturkosmetik-Creme untermischen.
Propolis Spray: Die betroffenen Stellen mit dem alkoholfreien Propolis Spray mehrfach täglich besprühen.
Propolis Kapseln: Täglich 2 Kapseln am morgen für die innere Unterstützung.
`,
    },
    {
        usefulInformationImageId: images_propolis_bedrop
        ,
        quelleId: "2",
        afflinksId: afflinks.propolis_bedrop_dermatitis,
        text: `
Wissen zu NEURODERMITIS

Bei Neurodermitis handelt es sich um eine chronisch entzündliche, nicht ansteckende Hautkrankheit. Neurodermitis wird auch als atopische Dermatitis oder atopisches Ekzem bezeichnet. Die Veranlagung von Neurodermitis ist erblich. Die Diagnose und Ausbruch der Hautkrankheit erfolgt oft im frühen Kindesalter. Der Krankheitsverlauf zeichnet sich in Form von Schüben aus, die aufgrund von Umweltfaktoren wie z.B. Stress, Feuchtigkeit oder hautreizende Substanzen begünstigt werden können. Die Haut von Neurodermitiker ist gestört trocknet im Gegensatz zur "gesunden" Haut schneller aus, entzündet sich, wodurch Juckreiz und Rötungen ausgelöst werden. Therapiemöglichkeiten von Neurodermitis (atopischem Ekzem) sind unterschiedlich. Die klassische Schulmedizin greift in den meisten Fällen auf die altbekannte Cortisonsalbe zurück. [...] 

`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Eine aktuelle Studie, welche die Wirkung des Vitamin C aus der Camu Camu- Frucht auf Arteriosklerose sehr eindrucksvoll unter Beweis stellt, kommt aus Japan, genauer gesagt von der Medizinischen Universität in Saga. 

Zwanzig männliche Raucher wurden in zwei Gruppen unterteilt, zehn von ihnen erhielten 1050 mg künstliches Vitamin C und die anderen zehn 70 ml reinen Camu Camu-Saft, was ebenfalls der Menge von 1050 mg Vitamin C entspricht.

Bereits nach einer Woche waren in der Camu Camu-Gruppe die Entzündungswerte und Werte des oxidativen Stresses signifikant zurückgegangen, während es in der Gruppe mit dem künstlichen Vitamin keinen Unterschied zur Ausgangslage gab!
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
KREBS
Auch den Krebs (Todesursache für über 25 % aller Mitteleuropäer und US- Amerikaner) bekämpft Vitamin C über verschiedene Mechanismen,

Vitamin C
- entgiftet sehr zuverlässig unseren Organismus von krebserregenden Stoffen,
- senkt die Belastung durch Schwermetalle
- erhöht die Eisenaufnahme (Schutz vor Blutarmut)
- aktiviert das Immunsystem und schützt über die Kollagensynthese das menschliche Gewebe vor den gefräßigen Krebszellen.

Angesicht der Tatsache, dass jeder Dritte an Krebs erkrankt (und jeder Vierte daran stirbt!) ist Prävention (Vorbeugung) absolut vonnöten.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
ALZHEIMER/PARKINSON UND VITAMIN C

Neuere Studien haben bewiesen, dass die Oxidation und die Zerstörung von Zellen auch für diese Krankheiten zuständig sind. Wir haben gelernt, dass natürliches Vitamin C, wie es die Camu Camu-Kapseln in bestmöglicher Qualität bieten, ein effizientes Antioxidans ist, und dass Vitamin C außerdem die Hormonproduktion (unter anderem Dopamin und Melatonin) sowie die Neurotransmitter (Botenstoffe) im Gehirn verbessert. Die Aktivierung der Neurotransmitter erhöht zudem die Konzentrationsfähigkeit sowie die Gedächtnisleistung und verbessert die Reaktionsfähigkeit.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
VITAMIN C BEKÄMPFT FALTEN (Hautalterung)

Da die Hautstruktur größtenteils ebenfalls aus den beiden Eiweißen Kollagen und Elastin besteht, spielt die Kollagen- und Elastinsynthese (Wiederaufbau und Erhalt), die Vitamin C und OPC perfekt managen, die entscheidende Schlüsselrolle. Gerade OPC bindet sich direkt an Kollagen und Elastin, baut auf und regeneriert diese und schützt sie vor freien Radikalen. Bei entsprechender Dosierung wird die Faltenbildung verlangsamt, vorhandene Falten werden geglättet und ganz nebenbei wird der Neuentstehung von Falten zuverlässig vorgebeugt.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Vitamin C Studie an 4000 Frauen

Wissenschaftlern des Unilever-Forschungsinstitutes in Bedford, Großbritannien, ist es gelungen, den Stoff ausfindig zu machen, der die Haut möglichst lange jung und gesund erhält. 4000 Frauen im Alter über 40 Jahren wurden nach ihren Essgewohnheiten befragt und anschließend über weitere 30 Jahre lang beobachtet. Diejenigen, die verstärkt Vitamin C zu sich nahmen, hatten weniger Falten – und je mehr sie davon nahmen, desto weniger Falten hatten sie.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
VITAMIN C GEGEN ENTZÜNDUNGEN (Arthritis, Bronchitis, Neurodermitis, Parodontitis, Meningitis)

Bei allen Entzündungen, die auf „itis“ oder „is“ enden, spielt die Oxidation (freie Radikale) die entscheidende Rolle. Da Vitamin C (und OPC) zu den effektivsten Radikalenfängern (Antioxidantien) gehören, verwundert es nicht, dass sie in entsprechenden Mengen das Aufkommen dieser entzündlichen Erkrankungen zu verhindern vermögen. Entzündungen, Fieber und Schmerzen dämmt Vitamin C über die Synthese des PGE 1 (Prostaglandin ), das auf die Regulierung des Immunsystems Einfluss nimmt, ein. 
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Wie bereits in vorherigen Kapiteln ausführlich berichtet, verhindert die derzeit weltweit empfohlene Menge an Vitamin C (zwischen 60 und 100 mg/Tag) lediglich Skorbut, also das Endstadium des Vitamin C-Mangels, der zum Tode führt. Sie ist jedoch so gering gehalten, dass sie auf der anderen Seite die meisten Erkrankungen zulässt.

Der Grund dafür ist ganz einfach: würde der Mensch genügend natürliches Vitamin C und ähnlich wirksame Natursubstanzen zu sich nehmen, würde er voraussichtlich kaum noch erkranken und damit der „Big Pharma“ keine Einnahmen für teure Medikamente einbringen – Tote wiederum bringen kein Geld ein, außer dem Leichenbestatter ...
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Bei den oben ausführlich behandelten Erkrankungen haben Forscher eine niedrigere Vitamin-C-Konzentration im Körper vorgefunden als bei Gesunden. Dies ist bereits ein deutlicher Hinweis darauf, dass der Körper seine Vitamin C-Reserven aufbraucht, um mit der Erkrankung fertig zu werden. Da man mit der normalen Nahrung aber allerhöchstens 100 mg Vitamin C pro Tag aufnehmen kann, ist die zusätzliche Nahrungsergänzung mit natürlichen Vitamin-C-Präparaten unentbehrlich.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Selbsttest zur Feststellung des individuellen Vitamin C-Bedarfs bei Gesunden und Kranken

Während die Empfehlung von 30–50 mg Vitamin C pro Kilo Körpergewicht täglich durchaus eine brauchbare Orientierung darstellt, gibt uns der Vitamin- Forscher Dr. Kinadeter eine Anleitung für einen genauen, individuellen Test des Vitamin-C-Bedarfs.

Gemäß Dr. Kinadeter behält der Körper immer nur so viel Vitamin-C bei sich, wie er benötigt; alles Überschüssige wird über die Blase und den Darm ausgeschieden.

Diese Ausscheidung aber hat etwas Gutes für sich, denn sie verhindert nach Dr. Kinadeter eventuelle Erkrankungen der Blase, der Prostata und des Darms.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Der Vitamin C Test (zur Ermittlung der persönlichen Tagesdosis)

ERSTER TAG: 1500 mg Vitamin C
Nach dem Frühstück, Mittagessen und dem Abendessen jeweils 0,5 g Vitamin C (möglichst in Form von Camu Camu-Kapseln oder Camu Camu-Pulver bzw. Acerola!) zu sich nehmen.

ZWEITER TAG: 3000 mg Vitamin C
Nach dem Frühstück, Mittagessen und dem Abendessen jeweils 1 g Vitamin C zu sich nehmen. Usw. Man erhöht auf diese Weise Schritt für Schritt die Vitamin-C-Zufuhr, bis [...]
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
AUGEN AUF BEIM KAUF VON LEBENSMITTELN MIT VITAMIN C

Für den Menschen in der heutigen modernisierten Welt ist es völlig unmöglich, ausschließlich über die Nahrung genügend Nährstoffe und Vitamine zu erhalten! Punkt, basta!

Neben einer Ergänzung der Nahrung durch hochwertige, natürliche Nahrungsergänzungsmittel (die beste Quelle hierfür sind Produkte aus der Camu Camu-Frucht) sollte man dennoch möglichst viel Obst und Gemüse verzehren, da die darin enthaltenen sekundären Stoffe und Enzyme den Prozess der Gesunderhaltung unterstützen.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Vitamin C-schonende Zubereitung

Statt das Gemüse zu kochen, setzen Sie auf kurzes Garen; dies erhält mehr Nährwerte und mehr Vitamin C.

Kochen in Leitungswasser entzieht der Nahrung 50 % des Vitamin C, und zwar aufgrund des hohen Chlorgehaltes im Leitungswasser. 574 Man sollte das Gemüse erst in den Topf stecken, wenn das Wasser bereits kocht, dann kurz durchkochen, um möglichst wenig Vitamin C beim Kochen zu verlieren.

Vermeiden Sie möglichst eine längere Lagerung von Obst und Gemüse. Wenn eine Lagerung unausweichlich ist, sorgen Sie dafür, dass abgedunkelt gelagert wird.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Natürliches Vitamin C vor Ascorbinsäure?

Natürliches Vitamin C besteht aus dem kompletten Vitamin C-Komplex, also nicht ausschließlich aus der Ascorbinsäure, sondern ebenfalls aus Calcium Ascorbate, Ascorbyl Palmitat, Magnesium Ascorbate, Niacinamide Ascorbate einschließlich sekundärer Pflanzenstoffe, Bioflavonoide, Hesperidin und Rutin. Erst dies garantiert die höchstmögliche Aufnahme und Verwertbarkeit vonseiten unseres Körpers einschließlich der in dieser Abhandlung ausführlich geschilderten gesundheitlichen Vorzüge.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Aber auch die kostengünstige Ascorbinsäure erfüllt ihren Zweck, jedoch gilt es bei der Einnahme einiges zu bedenken:

wie man dem Namen „AscorbinSÄURE“ bereits entnehmen kann, übersäuert Ascorbinsäure in höheren Mengen unseren Organismus, was alles andere als gesund ist. Die Bioverfügbarkeit der Ascrobinsäure, also die Aufnahme durch unseren Organismus, ist alles andere als ideal, was nicht verwundert, da es sich um ein künstliches Produkt und kein Produkt von Mutter Natur handelt!
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Camu Camu – die an Vitamin C reichste Frucht der Welt.

Selbstverständlich eignet sich zur optimalen Vitamin C-Versorgung nichst so gut, wie das natürliche Vitamin C!

Natürliches Vitamin C erhält man im Handel z.B. gewonnen aus der Acerola- Frucht oder aber noch besser aus der Camu-Camu-Frucht. Camu Camu (lat. Myraciaria dubia), auch „Bayberry Fruit“ genannt, ist eine im Amazonasgebiet weit verbreitete Frucht, die 30- bis 60-mal mehr Vitamin C beinhaltet als die Zitrusfrüchte Zitronen, Orangen oder Apfelsinen. Camu Camu enthält neben dem vollständigen Vitamin C-Profil zahlreiche weitere Nährstoffe, wie Beta-Carotin und Calcium, 10-mal mehr Eisen, 3-mal mehr Niacin, 2-mal mehr Riboflavin und sage und schreibe um 50 % mehr Phosphor als eine Orange.
`,
    },
    {
        usefulInformationImageId: images_camu,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Die Camu Camu-Frucht ist die an Vitamin C reichste Frucht der Welt und bietet in ihrer natürlichen Vollkommenheit eine für uns Menschen perfekt abgestimmte Mischung an Vitaminen, Mineralien, sekundären Pflanzenstoffen und vielen bislang noch unerforschten weiteren Vitalstoffen.

Die synergetische Mischung der von der Naturküche im perfekten Einklang zusammengestellten Zutaten aus Vitaminen, Mineralien, sekundären Pflanzenstoffen und Aminosäuren erhöht und maximiert die Aufnahmefähigkeit des Vitamin C und ist daher jeder anderen Vitamin-C- Quelle hoch überlegen.

Die allerbeste Entscheidung für ein Vitamin C-Präparat ist zweifelsohne also ein Erzeugnis aus dem 100 % Camu Camu-Pulver, gefolgt von Acerola!  
`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Sehr wichtig erscheint an dieser Stelle der Hinweis darauf, dass der Überzeugung aller Experten nach nicht einzelne isolierte Verbindungen aus dem Granatapfel, sondern stets das Zusammenspiel ALLER natürlichen Inhaltsstoffe zu den verblüffenden Erfolgen führt! So zeigen Studien beispielsweise im Falle von Krebs auf, dass der Granatapfelsaft in seiner Gesamtheit im Hinblick auf die Wirkung den isolierten Enzymen, wie der Ellagsäure und Punicalagin sowie anderen Granatapfel-Extrakten, deutlich überlegen ist.
`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Was den Granatapfel auszeichnet, ist seine ausgesprochene Vielfältigkeit an Wirkstoffen, wie Vitaminen, Mineralien, Spurenelementen, sekundären Pflanzenstoffen sowie Fettsäuren. Wie ein Orchester können diese äußerst bioaktiven Substanzen im Einklang sehr vielen Krankheiten trotzen und zu einem erfüllten, längeren Leben beitragen; sie bieten einen drei- bis zehnmal höheren Schutz vor Oxidantien als unsere heimischen Obstsorten.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Sekundäre Pflanzenstoffe im Granatapfel  wirken sich folgendermaßen aus:

- antioxidativ,
- antimikrobiell,
- antiviral,
- antithrombotisch (gegen Verklumpung des Blutes),
- das Immunsystem aufbauend,
- antikanzerogen (tumorunterdrückend),
- antimutagen,
- verdauungsfördernd,
- den Blutdruck regulierend,
- den Blutzuckerspiegel regulierend,
- antiproliferativ
- und lipidsenkend (Cholesterinspiegel senkend).`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Das Herzkreislaufsystem stellt ein Paradebeispiel dafür dar, wie wirkungsvoll der Granatapfel Krankheiten vorbeugen und diese gar heilen kann. Hier erweist sich der Granatapfel als Multitalent und wirkt gleich multifaktoriell:

- Senkung des Cholesterinspiegels: Über die Wirkung auf den Fettstoffwechsel können die im Granatapfel enthaltenen Polyphenole den  Cholesterinspiegel positiv beeinflussen, indem sie das schlechte Cholesterin (LDL) stark senken und das gute signifikant erhöhen (mehr dazu siehe unter Punkt „Studien“).
`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Antithrombotische Wirkung: Verklumpte Blutplättchen verdicken unser Blut, führen zu Bluthochdruck und können im weiteren Verlauf Schlaganfall und Herzinfarkt hervorrufen. Die im Granatapfel enthaltenen Polyphenole wirken antithrombotisch der Verklumpung der Blutplättchen entgegen.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Blutdrucksenkende Wirkung: Wieder sind es die Polyphenole im Granatapfel, die in Studien eine signifikante Blutdrucksenkung unter Beweis stellen konnten (siehe Punkt „Studien“).

Durchblutungsfördernde Wirkung: Die Myokarddurchblutung erhöht sich mit dem Konsum des Granatapfelsaftes. Antiarteriosklerotische Wirkung: Durch die Hemmung der

Schaumzellbildung, die antientzündliche Wirkung und die Senkung der Cholesterinoxidation wirkt der Granatapfel Gefäßverkalkung = Arteriosklerose optimal der entgegen.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Schutz gegen Hirnschäden und Schlaganfall

Studien aus dem Jahre 2005 konnten an Mäusen einen Schutz gegenüber Hirnschäden sowie Schlaganfall nachweisen, die infolge von Sauerstoffmangel auftreten. Die Mäusejungen der mit Granatapfelsaft gefütterten Mäuse wiesen 60 % weniger Hirnschäden bei ihrer Geburt auf als die Kontrollgruppe.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf die Lunge 

Die im Granatapfel befindliche Ellagsäure entfaltet ihre Wirkung direkt in den Bronchien der Lunge. Dort sammelt sich die Ellagsäure neben der Atemluft an und neutralisiert als wirksames Antioxidans erfolgreich schädliche Luftbestandteile, wie sie aufgrund der Luftverunreinigung zustande kommen. Des Weiteren wirken die Polyphenole gegen Viren und Bakterien und so auf die Gesundheit der Bronchien und der gesamten Lunge ein.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf den Magen-Darm-Trakt

Die Polyphenole des Granatapfels entfalten bereits im Magen-Darm-Trakt ihre positive Wirkung. Dadurch, dass die Polyphenole aufgrund ihrer molekularen Struktur nicht alle den Darm ins Blut verlassen können, wirken sie innerhalb des Darms umso länger. Hier unterstützen sie den Organismus dabei, die gesunde Darmflora zu erhalten, indem sie schädliche Bakterien und krankmachende Viren abtöten.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf Hirn und Nerven

In entsprechenden Studien konnte nachgewiesen werden, dass die im Granatapfel befindlichen Flavonoide die Hirnleistung verbessern können. Die Phenolsäuren des Granatapfels schützen die Körpernerven vor den zerstörerischen Abbauprozessen, die durch die freien Radikale entstehen.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf die Haut

Auch im Falle der Hautalterung schlagen die freien Radikale als Hauptursache für Alterungsprozesse gnadenlos zu. „Kosmetik“ sowohl von innen als auch von außen tut not, um vorzeitiger Hautalterung vorzubeugen! Hier können die Antioxidantien des Granatapfels über den Verzehr innerlich die inneren Hautschichten und äußerlich in Form von Granatapfel-Cremes und Lotions die äußere Hautschicht vor Angriffen der freien Radikale schützen.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf Leber und Bauchspeicheldrüse

In der Leber können die Polyphenole diejenigen Enzyme, die für die Entgiftung zuständig sind, fördern. Des Weiteren schützen sie als Antioxidantien die Leber, die während der Entgiftung ebenfalls freie Radikale freisetzt. Die Ellagsäure aus dem Granatapfel kann auch die Bauchspeicheldrüse schützen, indem sie deren Entzündung vorbeugt.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Granatapfelsaft erhöht die Herzdurchblutung

240 ml Granatapfelsaft aus einem Konzentrat, getrunken über einen Zeitraum von drei Monaten, konnte in einer im Journal of Cardiology veröffentlichten Studie an 45 Patienten mit koronaren Herzerkrankungen, die Durchblutung des Herzmuskels in der Myokardszintigraphie unter Belastung um 17 % verbessern und die Angina Pectoris-Anfälle halbieren. In der Kontrollgruppe (die keinen Granatapfelsaft trank) verschlechterte sich diese währenddessen um 18 %.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung des Granatapfelsaftes gegen Bluthochdruck (Hypertonie)

Über die Regulierung des ACE-Enzyms (entspricht dem Prinzip der synthetischen ACE-Hemmer, nur ohne Nebenwirkungen) kann der Bluthochdruck bereits nach zwei Wochen um 5 % und nach einem Jahr um 21 % gesenkt werden – und dies bei einem täglichen Konsum von 50 ml Granatapfelkonzentrat.`,
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Alles begann mit zufälligen Beobachtungen der Grapefruitkerne, als 1980 ein Hobbygärtner die erstaunliche Entdeckung machte, dass Grapefruitkerne, im Gegensatz zu allen anderen pflanzlichen Stoffen, auf dem Komposthaufen kaum verrotteten. Es war wohl ein reiner Zufall, dass dieser Hobby-Gärtner namens Dr. Jacob Harich in seinem eigentlichen Beruf Arzt mit Fachgebiet „Immunologie“ war, was ihn dazu veranlasste, sich dieses unerklärlichen Phänomens anzunehmen.

Sehr schnell wurde ihm klar, dass die Grapefruitkerne dieses Phänomen offensichtlich einem potenten Schutzmechanismus zu verdanken haben, der die biologische Zersetzung sichert. Sollte diese Eigenschaft mit der oralen Aufnahme des Grapefruitkernextraktes auch auf den Menschen zu übertragen sein und den konventionellen 
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Der Grapefruitkernextrakt ist ein hochkonzentrierter, rein pflanzlicher Extrakt, der aus den Schalen und Kernen der Grapefruit gewonnen wird. Seine antimikrobiellen Eigenschaften können sehr wirkungsvoll für die unterschiedlichsten Anwendungen eingesetzt werden.

Kerne und Schalen werden getrocknet und zu feinem Pulver verarbeitet, mit gereinigtem Wasser verdünnt und destilliert. Bei niedrigen Temperaturen entsteht aus der destillierten Masse ein reines konzentriertes Pulver (Citricidal®), das dann in pflanzlichem Glycerin aufgelöst wird.

Die Hauptbestandteile des Grapefruitkernextrakts sind Citricidal® und Glycerin, Ascorbinsäure (Vitamin C), Bioflavonide, Vitamine, Aminosäuren, Fettsäuren etc. Je höher der Gehalt an Citricidal® ist, desto konzentrierter ist der für Menschen, Tiere und Pflanzen völlig ungiftige Extrakt.
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Es ist das Zusammenspiel von einzigartig aufeinander eingespielten Wirkstoffen, die dem Grapefruitkern diese phänomenalen Eigenschaften im Kampf gegen Parasiten verleihen. Er verfügt über eine Anzahl sehr wirksamer Schutzstoffe, zu denen Glykoside, Limonoide und Flavonoide zählen:

- Hesperidin
- Naringin
- Limonin
- Rutin
- Quercetin
- Kaempferol
- Poncirin

Die eben aufgeführten Flavonoide gehören zu einer Pflanzenstoff-Gruppe, die nicht selten über heilende Wirkungen verfügen. Sie stärken unsere Immunabwehr, indem sie unser Immunsystem durch den Darm stimulieren, was zu einer vermehrten Produktion von Antikörpern führt, die in der Folge den Kampf mit Bakterien, Viren und Pilzen erfolgreich aufnehmen. Das Kaempferol vermag zusätzlich das Wachstum von bestimmten Bakterien, Viren und Pilzen direkt zu hemmen.
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Limonoide verleihen den Zitrusfrüchten den bitteren Geschmack und unterbinden bei Parasiten die Nahrungsaufnahme und damit deren Wachstum und Vermehrung.
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextraktwirkung

Die breit gefächerte Wirkung des Grapefruitkernextrakts erstaunt viele Forscher in aller Welt; sie erstreckt sich über sämtliche Bereiche der Parasitenbekämpfung, beginnt bei Bakterien über Viren, Pilze und sonstige Parasiten, die uns Menschen (und unseren Tieren) das Leben schwer machen.

Man geht davon aus, dass der Grapefruitkernextrakt seine Wirkung innerhalb der cytoplasmischen Membran der Mikroorganismen entfaltet. Dabei sollen nach Annahme der Wissenschaftler die Wirkstoffe zu einer Desorganisation der cytoplasmischen Membran führen, wodurch die Aufnahme von Aminosäuren verhindert wird, was dem Aushungern des Parasiten gleichkommt.
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Die Aufnahme von Grapefruitkernextrakt kann dabei je nach Anwendungsbereich sowohl innerlich als auch äußerlich erfolgen. Studien konnten aufzeigen, dass der Grapefruitkernextrakt die Fähigkeit besitzt, über 800 verschiedene Bakterien und Viren zu vernichten.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Bakterienabtötende Wirkung

Die antiseptische und bakterizide Wirkung des Grapefruitkernextraktes prädestiniert ihn zu einem natürlichen Desinfektionsmittel bei allen Infektionserkrankungen, entzündlichen Prozessen und Hautunreinheiten. Studien konnten beweisen, dass der Grapefruitkernextrakt bereits bei einem Verdünnungsverhältnis von 1:1000 seine antibakterielle Wirkung entfaltet. Während Antibiotika nicht zwischen guten und schlechten Bakterien (z. B. den lebensnotwendigen Bakterien in der Darmflora) unterscheiden können, kommt es bei der Anwendung des Grapefruitkernextraktes bei normaler Dosierung zu keiner Zerstörung der positiven Darmflorabakterien.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Pilzabtötende Wirkung

Pilze setzen sich an der Haut an verschiedenen Stellen fest (bekanntestes Beispiel: Fußpilz), befallen aber auch innere Organe und können an der betroffenen Stelle einen immensen gesundheitlichen Schaden anrichten. Die fungizide und antimykotische Wirkung des Grapefruchtkernextraktes nimmt es mit allen Sorten von Pilzbefall, der uns das Leben erschwert, auf. Über eine exzessive Antibiotikaeinnahme und Einnahme anderer Medikamente wird die Pilzerstellung im Körper und am Körper sogar gefördert. Laut aktuellen Studien zeigt der Grapefruitkernextrakt bei über 100 verschiedenen Pilzarten Wirkung.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Immunaufbauende Wirkung
Der Grapefruitkernextrakt verfügt über immunstärkende Eigenschaften und schützt uns somit vor Angriffen von Krankheitserregern. Während Antibiotika und andere Medikamente als Nebenwirkung das Immunsystem schwächen, wird unser Immunsystem laut Studien durch die Einnahme des Grapefruitkernextraktes sogar gestärkt. Der Grapefruitkernextrakt wirkt also in doppelter Hinsicht: Er zerstört die unerwünschten Parasiten und stärkt darüber hinaus das Immunsystem, das auch für sich den Kampf gegen Parasiten aufnimmt.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Wann fängt der Grapefruitkernextrakt zu wirken an?

Je nach Erkrankung und Schweregrad kann es besonders bei inneren Pilzerkrankungen sowie bei langwierigen und chronischen Erkrankungen mehrere Wochen bis Monate dauern, bis sich der erwünschte Erfolg einstellt. Wie für alle Naturheilmethoden heißt es also auch beim Grapefruitkernextrakt, Geduld zu bewahren und nicht zu früh aufzugeben.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grundregel 1:

Eine 2- bis 3-malige tägliche Einnahme von 3–15 Tropfen, die es langsam zu steigern gilt, wobei die Höchstdosis nach einer Woche erreicht sein sollte. Diese schrittweise Steigerung ist vor allem dann vonnöten, wenn ein Verdacht auf Darmpilze (Candida albicans) besteht. Dies ist deshalb so wichtig, weil die genannten Bakterien beim plötzlichen Absterben durch den Grapefruitkernextrakt zu Kopfschmerzen und Benommenheit führen können, was auch als „Herxheimer Reaktion“ bezeichnet wird.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grundregel 2:

Pro 10 kg Körpergewicht gelten 5 Tropfen als Tagesdosis (in besonderen Ausnahmefällen kann diese Dosis auch verdoppelt werden).  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grundregel 3:

rapefruitkernextrakt wird in jedem Fall verdünnt eingenommen, vorzugsweise in einem 200 ml Glas mit Wasser oder Fruchtsaft darin.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Bronchitis

Bronchitis basiert auf der Infektion der Atemwege, hier kann Grapefruitkernextrakt gute Hilfe leisten. 3 x täglich eine Lösung von 10 Tropfen Grapefruitkernextrakt in einem Glas Wasser trinken. Zusätzlich empfiehlt sich die äußere Anwendung in Form von täglich mehrmaligem Gurgeln (Verdünnungsverhältnis: siehe oben.)

`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Durchfall

Durchfall kann aufgrund von Krankheitserregern im Darm hervorgerufen werden. 5–15 Tropfen Grapefruitkernextrakt in einem Glas Wasser verdünnen und 3 x täglich trinken.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Blasenentzündung

Die entzündungshemmende Wirkung des Grapefruitkernextraktes kann bei Blasenentzündung sehr hilfreich sein. Hierzu etwa 10 Tropfen Grapefruitkernextrakt in einem Glas Wasser auflösen und 3 x täglich trinken.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Halsschmerzen und Rachenentzündung

Halsschmerzen und Rachenentzündung sind fast ausnahmslos auf bakteriellen Befall im Rachenraum zurückzuführen. Aufgrund seiner antibakteriellen Wirkung ist der Grapefruitkernextrakt prädestiniert dafür, hier Abhilfe zu schaffen.

Gurgeln Sie täglich 4–6 x mit einer Grapefruitkernextrakt-Wasserlösung (10 Tropfen in einem Glas Wasser verdünnt).  
`

    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Magendarm-Grippe

Eine Magen-Darm-Grippe wird durch Krankheitserreger verursacht, was den Grapefruitkernextrakt aufgrund seiner antibakteriellen Wirkung als Therapeutikum prädestiniert. 5–15 Tropfen Grapefruitkernextrakt in einem Glas Wasser verdünnen und 2–3 x täglich trinken.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Abszesse und Furunkel

Einige Tropfen des Grapefruitkernextraktes 3 x täglich in etwas Wasser verdünnt auf die betroffene Stelle auftragen. Bei stark infizierten Abszessen ist es möglich, eine Mullbinde in der Lösung zu tränken und eine Kompresse aufzulegen (Dauer 8–12 Stunden). Unterstützend sollte man den Grapefruitkernextrakt 2–3 x täglich innerlich einnehmen (5–15 Tropfen in einem Glas Wasser).  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Parodontose

1–3 Tropfen Grapefruitkernextrakt auf die Zahnbürste auftragen und 3 x täglich damit die Zähne ausgiebig putzen. Unterstützend kann man eine Mundspülung mit GKE durchführen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Gürtelrose

Grapefruitkernöl mehrmals täglich auf die betroffene Stelle auftragen. Innerlich kann man den Heilungsprozess unterstützen, indem man 5–15 Tropfen Grapefruitkernöl in einem Glas Wasser verdünnt und diese Lösung 2–3 x täglich trinkt.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Fußpilz

Fußpilz fühlt sich wohl und gedeiht besonders gut im feuchten, warmen, dunklen Milieu; ideale Bedingungen bieten hierzu die Füße. Aufgrund seiner pilzabtötenden Wirkung eignet sich hier Grapefruitkernextrakt daher bestens zur äußeren Anwendung gegen Fußpilz. Vermischen Sie 100 ml Alkohol mit 60–80 Tropfen Grapefruitkernextrakt und betupfen Sie 2 x täglich damit die Fußpilzstellen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Ohrenschmerzen und Mittelohrentzündung

Sehr häufig basieren Ohrenschmerzen auf entzündlichen Prozessen; hier kann die Behandlung mit Grapefruitkernextrakt Abhilfe verschaffen. 10 Tropfen Grapefruitkernextrakt mit Bio-Jojoba-Öl oder Weizenkeimöl in den Gehörgang träufeln und anschließend mit etwas Watte verschließen, um das Auslaufen zu verhindern.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Mundgeruch

Mundgeruch ist zumeist auf eine Bakterienansiedlung im Mundraum und besonders auf der Zunge zurückzuführen. Ca. 10 Tropfen Grapefruitkernextrakt in einem Glas Wasser auflösen und mehrmals täglich damit gurgeln.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Einnahme von Grapefruitkernextrakt zur Prävention gegen Grippe

Wer für Infekte wie Grippe anfällig ist, kann vorbeugend täglich 3–5 Tropfen einnehmen; hierzu bietet sich Orangensaft bestens an. Als präventive Entgiftungsmaßnahme hat sich 1–2 x jährlich eine kurweise Anwendung von Grapefruitkernextrakt bewährt.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Schweißfüße

In einem gewöhnlichen Eierbecher 10 Tropfen GKE vermischen und morgens und abends die betroffene Stelle mit dem Grapefruitkernextrakt einreiben.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Schweißgeruch

Etwa 15–20 Tropfen Grapefruitkernextrakt in eine Tasse Wasser geben und den Inhalt in eine Pumpsprühflasche einfüllen, kräftig schütteln und unter den Armen sprühen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Desinfektion von Nahrungsmitteln

Obst, Gemüse, Salate, Fleisch oder Fisch für einige Minuten in einem Grapefruitkernextrakt-Wassergemisch in einem Verhältnis von 20 Tropfen GKE auf 1 Liter Wasser einlegen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Kann der Grapefruitkernextrakt Antibiotika ersetzen?

Der Grapefruitkernextrakt ist in den meisten Fällen eine nebenwirkungsfreie und zugleich sehr effiziente Alternative zu Antibiotika. Während Antibiotika lediglich Bakterien bekämpfen und auch dabei schädliche nicht von den „guten“ Bakterien unterscheiden (Darmflora-Bakterien), nimmt der Grapefruitkernextrakt sehr erfolgreich den Kampf gegen sämtliche Krankheitserreger auf und verschont die „guten“ Bakterien in unserem Körper.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Wirkt Grapefruitkernextrakt auch gegen Umweltgifte?

Laut der Zeitschrift Fernsehwoche wirkt der Grapefruitkernextrakt auch gegen Schadstoffe wie Amalgam, Ozon, Benzol, Formaldehyd, Blei und Cadmium und schwemmt giftige Stoffe aus dem Körper.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Kann die Einnahme des Grapefruitkernextraktes den Körper übersäuern?

Trotz des ohne Frage sauren Milieus mit einem pH-Wert von 2–3 gehört der Grapefruitkernextrakt zu den basischen Nahrungsmitteln. Dies ist dem Gehalt an Bitterstoffen zu verdanken, die die Basenbildung anregen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Was, wenn der Grapefruitkernextrakt nicht wirkt?

Selbstverständlich ist der Grapefruitkernextrakt kein Allheilmittel und in erster Linie auf die Vernichtung von Bakterien, Viren und Pilzen spezialisiert. Wenn der Grapefruitkernextrakt auch hier versagt, kann es verschiedene Gründe haben: Es kann die Dosierung zu gering sein oder der Organismus ist mit zu vielen Schlackstoffen und Giften belastet (in diesem Fall wäre zunächst eine Entschlackungskur angesagt.).  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Kann man den Grapefruitkernextrakt auch während der Schwangerschaft anwenden? 

Zum Zeitpunkt der Erstellung des Codex Humanus lag weder eine wissenschaftliche Studie zu dieser Frage vor noch ist ein Fall zu Problemen während der Schwangerschaft bekannt. Im Zweifelsfall sollten Sie aber besser Ihren Arzt fragen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Wie lange dauert es, bis die Wirkung des Grapefruitkernextrakts eintritt?

Abhängig davon, um welche Erkrankung es sich handelt, kann es besonders bei inneren Pilzerkrankungen sowie bei langwierigen und chronischen Erkrankungen mehrere Wochen bis Monate dauern, bis sich der erwünschte Erfolg einstellt.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Was ist Grüner Tee, Grüntee oder Green Tea?

Grüntee, Grüner Tee, Green Tea – drei Begriffe die das Gleiche bezeichnen, nämlich den König unter den uns namentlich bekannten Teesorten, ein regelrechtes Elixier für unsere Gesundheit und unser Wohlbefinden. Doch was ist das Besondere am Grünen Tee, was macht den Grüntee aus? Nicht etwa der Geschmack oder das Aroma sind es, sondern die sagenhaften gesundheitlichen Vorzüge und die Heilungskräfte, die es gar mit tödlichen Erkrankungen aufnehmen können, machen den Grüntee auch für uns Mitteleuropäer interessant.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Die gesundheitlichen Vorzüge des Grünen Tees basieren dabei aber nicht etwa auf Mythen, Sagen und Vermutungen, vielmehr ist der Grüne Tee der wohl am intensivsten untersuchte Tee überhaupt, und viele Studien attestieren ihm wohltuende Wirkungen bis hin zur kompletten Heilung bei Erkrankungen wie   Arteriosklerose, Herzschwäche, Bluthochdruck (Hypertonie), Erkältungskrankheiten, Gicht, Pilzen, Krebserkrankungen, Multipler Sklerose, Gastritis oder etwaigen Entzündungsprozessen sowie Sodbrennen und viele andere mehr. Und als ob dies nicht schon reichte, beschränkt sich der Grüne Tee nicht nur auf gesundheitliche Vorzüge, sondern verspricht neben der Gesunderhaltung eine Lebensverlängerung und gar optische Verschönerung. Schön, gesund und lange lebend – ein Traum der Menschheit, den uns der Grüne Tee erfüllt?
`

    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
In Deutschland werden etwa 400 Tonnen Grüner Tee getrunken, eine unangemessen geringe Zahl angesichts der 16 500 Tonnen des Schwarzen Tees, die konsumiert werden – wir sind zuversichtlich und fest entschlossen, dazu beizutragen, dies mit dem Ihnen hier vorliegenden Codex Humanus zugunsten des Grünen Tees zu ändern. Begleiten Sie uns auf eine erkenntnisreiche Reise in das Innere des Grünen Tees mit all seinen Vorzügen, die auch Ihr Leben vitaler, länger und lebenswerter werden lassen können ...  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Es wird Sie vielleicht erstaunen zu hören, dass ein wesentlicher Unterschied des Grünen Tees zum Schwarzen Tee in der Herstellung begründet ist und man grundsätzlich beide Teesorten aus ein und demselben Teeblatt herstellen kann. Bekannt ist, dass der Tee ursprünglich grün war und in dieser bereits vor Tausenden von Jahren zu Heilzwecken verwendet wurde. Einer Sage nach soll der Grüne Tee als Getränk seine Anwendung rund 2700 Jahre v. Chr. gefunden haben, als der chinesische Kaiser Shen Nong Wasser in einem Topf abkochte und zufällig einige der Teeblätter hineinfielen. Dem Kaiser schmeckte dieses neuartige Gebräu, und es galt fortan als sein Lieblingsgetränk.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Grüner Tee, Grüntee, Green Tea: drei Namen für 1000 Sorten Um es kurz und schmerzlos zu machen: DEN Grünen Tee gibt es nicht, sondern viele verschiedene, gesunde Tees, die aufgrund eines ganz bestimmten, schonenden Herstellungsverfahrens ihrer gesundheitlichen Vorzüge nicht beraubt werden (siehe Punkt „Grünteeherstellung“). Die natürliche grüne Blattfarbe, die durch das schonende Verfahren ebenfalls erhalten bleibt, verleiht dem Grüntee seinen Namen. Genauer gesagt sind es aber mehr als 1000 verschiedene Sorten, die dem Grünen Tee zugeordnet werden.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Japanischer Grüntee vs. Chinesischer Grüntee

Es verwundert an dieser Stelle sicherlich nicht, dass die Hauptlieferanten des Grünen Tees asiatischer Herkunft sind, konkret China und Japan. Während in Japan ausschließlich Grüner Tee hergestellt wird, hat dieser in China einen Anteil von 80 % der landesweiten Teeherstellung. In weitaus geringerem Maße wird Grüntee auch in Sri Lanka und Indien angebaut. Die Unterschiede sind dabei mehr geschmacklicher Natur: So lieben es die Chinesen traditionellerweise eher herb-rauchig und blumig, während die Japaner den frischen, grasigen Nachgeschmack schätzen. Der Geschmack und das Aroma werden weitgehend durch die Verarbeitung, aber auch durch das Anbauland (Klima, Bodenbeschaffenheit) und die Lagerung sowie den Transport bestimmt.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Die Chinesen verleihen ihrem Greentea sein herb-rauchiges Aroma, indem sie die Teeblätter in Pfannen anrösten; den blumigen Geschmack erhält der Grüntee über Jasminblüten, die ihm beigefügt werden. Und so ist der Jasmintee die bekannteste chinesische und eine weltweit sehr beliebte Grünteesorte. Die Japaner hingegen behandeln den Grüntee für ihr erwünschtes frisch- grasiges Aroma mit Wasserdampf. Zu den bekannten japanischen Grüntee- Sorten zählen Sencha, Genmaicha, Bancha, Gyokuro und Kukicha:  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Japanische Grüntee-Sorten
- Gabalong
- Bancha
- Kabusecha
- Fukamushi-Cha
- Genmaicha (mit gerösteten Reiskörnern angereicherter und dadurch aromatisierter Tee)
- Matcha
- Gyokuro
- Kukicha
- Sencha
- Hojicha
- Yonkon  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Chinesische Grüntee-Sorten
- Gunpowder
- Cris Cross
- Lung Ching bzw. Longjing
- Chun Mee
- Li-Zi Xiang
- Pi Lo Chun
- Mao Feng, Mao Feng Cris Cross
- Mao Jian
- Yuncui
- Tian Mu Quing Ding
- Sencha  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
- Grüner Tee belebt auf die sanfte Art, hält Geist und Körper wach, stärkt die Konzentration,
- fördert die Durchblutung,
- steigert das Wohlbefinden,
- normalisiert den Blutdruck,  
- verbessert die Sauerstoffaufnahme und regt die Atmung an,
- stärkt das Immunsystem,
- regt den Stoffwechsel an und fördert die Fettverbrennung,
- fördert die Selbstheilungskräfte,
- fördert die Verdauung,
- beruhigt den Magen,
- entspannt Körper und Geist,
- hilft bei der Entgiftung des Organismus,
- ist hautreinigend,
- verbessert das Sehvermögen,
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Grüntee  
- beugt Gelenkschmerzen und Entzündungen vor,
- beugt dem Knochenabbau (Osteoporose) vor,
- hilft gegen Gicht,
- hilft bei chronischer Müdigkeit,
- hilft bei Rachenentzündung,
- schützt bei Diabetes,
- hilft bei Appetitlosigkeit,
- hilft bei Sodbrennen,
- wirkt bei Durchfall,
- wirkt Erkältungskrankheiten entgegen,  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Grüntee
- hilft bei Fußpilz und anderen Pilzarten,
- hilft gegen Mundgeruch,
- unterstützt die Fettverbrennung und hilft beim Abnehmen,
- wirkt positiv auf Multiple Sklerose ein,
- schützt vor Viren,
- wirkt positiv bei HIV/AIDS,
- hilft bei Alzheimer,
- hilft bei Parkinson,
- unterstützt den Urinfluss,
- hilft bei Sonnenbrand,
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
In einer Studie an 1900 Patienten, die einen akuten Myokardinfarkt erlitten haben, war bei denjenigen Patienten, die im Jahr vor dem Infarkt bis zu 14 Tassen Tee in der Woche tranken, die Sterberate um 20 % niedriger; bei mehr als 14 Tassen in der Woche sank die Sterberate sogar um die Hälfte. Yang und Koo zeigten auf, dass die im Grüntee enthaltenen Catechine der schädlichen LDL-Oxidation in Endothelzellen vorbeugen. In einer weiteren Studie konnten japanische Forscher unter Beweis stellen, dass das im Grüntee enthaltene EGCG die kollageninduzierte Thrombozytenaggregation (Verklumpung von Blut) komplett unterdrückt.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Während die Hälfte aller Todesfälle in den Industrieländern auf Herzkreislauferkrankungen zurückzuführen sind, ist die zweithäufigste Ursache der Krebs. Und so erkrankt in Deutschland heutzutage jeder Dritte 691 an Krebs und jeder Vierte verstirbt daran.  Japanische Forscher wollen erstmals den biochemischen Mechanismus beobachtet haben, der die krebshemmende Wirkung erklärt: Demnach heftet sich ein Inhaltsstoff des Grünen Tees gezielt an Tumorzellen und bremst dabei das Krebswachstum. Diese Andockstelle sei für die Ausbildung von Zellkontakten wichtig und komme auf verschiedenen Tumorzellen vor. Der Aussage nach soll der Genuss von lediglich zwei bis vier Tassen Grünen Tees täglich diesen schützenden Effekt auslösen. 
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Wirkung des Grüntees bei Alzheimer und Parkinson

Alzheimer und Parkinson zählen zu den neurodegenerativen Erkrankungen, die durch die Bildung von Amyloidfibrillen verursacht werden. Es wurde festgestellt, dass die im Grüntee enthaltene Substanz EGCG die Bildung von Amyloidfibrillen über die Bindung an die nativen, noch ungefalteten Polypeptidketten verhindert. Dadurch werden statt der toxischen Amyloidfibrillen harmlose Oligomere gebildet.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Wirkung des Grüntees bei Zahnfleischerkrankungen
Das im Grüntee enthaltene Catechin verringert Zahnfleischerkrankungen, wie etwa Parodontose. 

Grüner Tee beugt Karies vor
Die im Grünen Tee enthaltene EGCG und ECG hemmen das Wachstum von Kariesbakterien, den Streptokokken. 706  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
EGCG (Epigallocatechin-Gallat)

EGCG scheint der wirksamste Inhaltsstoff im Grünen Tee zu sein, der schon fast wundersame Eigenschaften in der Prävention und der Behandlung zahlreicher Erkrankungen zu haben scheint. Diesem Inhaltsstoff gilt daher eine besondere Aufmerksamkeit.  

[...]
Das EGCG verfügt darüber hinaus über bluthemmende Eigenschaften, wie wir es vom Aspirin kennen. 713 Dies verhindert Gefäßverschlüsse und wirkt damit Herzkreislauferkrankungen entgegen, unter anderem Herzinfarkt, Hirnschlag und Angina Pectoris.
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Bitterstoffe im Tee

Die Bitterstoffe im Grünen Tee sensibilisieren unsere Geschmacksnerven und trainieren unseren Geschmack, wieder auf urnatürliche Lebensmittel entsprechend zu reagieren. So ist bekannt, dass Menschen in den Industriestaaten aufgrund der Industrialisierung der Nahrung weniger sensibilisiert und schlicht anders auf Geschmack reagieren. Die bitteren Stoffe im Grüntee können hier den natürlichen Geschmacksinn wiederherstellen.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Das Koffein im Grünen Tee wird schrittweise abgegeben, was plötzliche Koffein-Peaks verhindert und eine im Vergleich zum Kaffee oder Cola milde, dafür aber langanhaltende Anregung gewährleistet. Für die schrittweise Dosierung sind dabei die Gerbstoffe im Grüntee verantwortlich, die das Alkaloid, das für die aufputschende Wirkung verantwortlich ist, langsam und wohl dosiert in den Blutkreislauf entlassen.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Grüner Tee bei Krebs

Krebs fordert das Leben jedes vierten Menschen, und so sollte man unbedingt präventiv alle Maßnahmen ergreifen, die der Krebsentstehung nebenwirkungsfrei trotzen. Wenn man bereits an Krebs erkrankt ist, ist es umso wichtiger, Maßnahmen zu ergreifen, die nebenwirkungsfrei und nachweislich (siehe Punkt „Studien“) dem Krebs entgegenwirken. Grüner Tee scheint auf vielfache Art vorbeugend und heilend gegen Krebs zu wirken. Der Biostoff EGCG kann vor Lungenkrebs schützen, die Flavonoide können das Magenkrebs-, Dickdarmkrebs- und Brustkrebsrisiko mindern, die Saponine wirken Darmtumoren entgegen. Trinken Sie täglich mindestens 1 Liter Grüntee, verteilt auf den Tag (z. B. zu jeder Mahlzeit je ein 300 ml Kännchen). Etwa 5 min ziehen lassen, nicht mit Zucker süßen (Krebs liebt Zucker).  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Grüner Tee gegen Mundgeruch

Der Mundgeruch ist weitestgehend auf Bakterien zurückzuführen, die sich auf der Zunge ablagern. Da Grüntee antibakteriell wirkt, verhindert er die Vermehrung von Mikroorganismen im Mundbereich, kann den Säuregrad im Magen verringern sowie Fäulnisgasen entgegenwirken, die über die Atemluft ausgeatmet ebenfalls zu Mundgeruch führen. Gegen Mundgeruch empfehlen sich sowohl Mundspülungen (2–3 min) mit Grüntee als auch das obligatorische Teetrinken zu den Mahlzeiten.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold - das wichtigste Elixier auf Erden? „Unter allen Elixieren ist das Gold das höchste und das wichtigste für uns. Das Gold kann den Körper unzerbrechlich erhalten. [...] Trinkbares Gold heilt alle Krankheiten, es erneuert und stellt wieder her.“ (Paracelsus)

Was veranlasste Paracelsus, den Urvater der Heilkunde, dazu, ausgerechnet das Edelmetall Gold, das er als ein Allround-Heilmittel ansah, auf den höchsten Sockel über sämtliche Naturheilmittel zu erheben?  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Welches unschätzbare Geschenk von „Mutter Natur“ wird uns hier wohl seitens profitorientierter Institutionen und der Schulmedizin verheimlicht, das bereits die alten Ägypter, Römer und Griechen, die chinesischen und indischen Ärzte anpriesen ‒ noch lange vor Paracelsus und Avicenna, der Heiligen Hildegard von Bingen und schließlich im 19. Jahrhunderts sogar vor dem Bakteriologen Robert Koch?

Es handelt sich hierbei um Erkenntnisse, die von der modernen Forschung untermauert werden, jedoch wenig Beachtung seitens des etablierten medizinischen Establishments erfahren.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Der moderne Mensch dürfte mit dem Edelmetall Gold noch am ehesten Schmuck, Münzen, Luxus und in den letzten Jahren vor allem eine stabile Wertanlage für die Zukunft assoziieren. Dass es sich bei Gold um sehr viel mehr, nämlich in erster Linie um ein unglaublich potentes, geradezu fundamentales Lebenselixier und einen Jungbrunnen per excellence handelt, der in unserem Körper als Spurenelement (aus gutem Grund besonders stark vertreten im Hirn) natürlicherweise vorkommt und eine phänomenale, ganzheitliche Wirkung auf unsere Gesundheit, unsere Lebensenergie, Jugendlichkeit und sogar unseren Geist ausübt, dürfte den wenigsten bekannt sein.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Fernab jeglichen Esoterik-Gedanken handelt es sich beim kolloidalen Gold (auch als Nanogold, Mesogold, Goldkolloid und „trinkbares Gold“ bezeichnet) wahrhaftig um ein Allround-Elixier einer anderen Dimension, das sowohl auf körperlicher als auch auf geistiger und seelischer Ebene phänomenale Dinge zu bewerkstelligen vermag.

In Zeiten von Stress, permanenter Überlastung und Energiemangel ist die übergreifende Wirkung von kolloidalem Gold auf alle unsere energetischen Systeme für den modernen Menschen von unschätzbarer Bedeutung.

Aufgrund seiner elektrischen und magnetischen Felder vermag kolloidales Gold energetische Blockaden zu lösen ‒ unser Körper, Geist und die Seele werden dadurch zurück in ihre vorgesehenen Schwingungsmuster gebracht, spürbar kehren Lebensenergie, Geistesfrische und körperliche Kraft zurück, während sich kleinere Wehwehchen und [...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Womöglich handelt es sich bei Gold sogar um das älteste Heilmittel der Menschheitsgeschichte überhaupt. So wurde Gold laut den ältesten medizinischen Aufzeichnungen bereits vor 5000 Jahren von Ägyptern angewandt, um den Energiefluss und die Lebenskraft zu stärken sowie zur seelischen und körperlichen Reinigung.

Als unverzichtbare Arznei findet Gold seit Jahrtausenden Anwendung innerhalb der TCM (Traditionelle Chinesische Medizin) und dem indischen Ayurveda. Beide medizinischen Kulturen verwenden Gold nicht nur, um die Gesundheit zu stärken bzw. wiederherzustellen, sondern ebenfalls, um Geistesfrische, Verjüngung und Langlebigkeit zu erzielen.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Bei Schlagwörtern wie „Überlieferung“ und „Tradition“ schrillen bei Skeptikern sämtliche Alarmglocken. Erfreulicherweise müssen wir uns im Falle von Gold jedoch nicht mehr ausschließlich auf alte medizinische Schriften, Überlieferungen und schamanische Intuition verlassen. Wie Sie im Weiteren lesen werden, brachte jüngst die moderne Forschung mit ihren innovativen Mess- und Analyseverfahren Unglaubliches ans Tageslicht und bestätigt somit den jahrtausendelangen Einsatz des Goldes innerhalb der traditionellen Medizin.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold ‒ die trinkbare Sonnenenergie

Was wäre unser Leben ohne Energie, und was wäre die Lebensenergie ohne Sonnenlicht? Gold wird traditionellerweise stets mit der Sonne in Verbindung gebracht. So wird innerhalb der TCM (Traditionelle Chinesische Medizin) dem Gold aufgrund der Nähe zur Sonne eine zentrale Lebensenergie zugeschrieben, die daher dem männliche Yang-Prinzip entspricht. Auch dies ist evtl. ein wichtiger Grund für den seit Menschengedenken ungebrochen hohen Wert des Goldes, dessen Eigenschaften man mit Lebenskraft, Wachstum und Heilung in Verbindung bringt. Und tatsächlich berichten   Anwender von kolloidalem Gold nach kurzer, regelmäßiger Einnahme bereits von einer gesteigerten Lebensenergie, Lebensfreude, inneren Ausgeglichenheit und Kreativität, während zeitgleich Stress und Depressionen verschwinden ‒ Gefühle und Erfahrungen.[...]
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold so natürlich wie unser Organismus selbst Als Spurenelement kommt Gold natürlicherweise in unserem Organismus vor, besonders im Gehirn, wo es wichtige Aufgaben erfüllt. Auch in unserer Nahrung findet sich Gold wieder, so in Möhren, Chicorée, besonders reichlich in Schalentieren (Krebsen, Muscheln, Krabben). Das Meerwasser enthält übrigens 5‒250 Gewichtsteile Gold auf 100 Mio. Teile Wasser. Übrigens: Dass alles Leben aus dem Meer stammt, ist im Grund nichts Neues. 

Während kolloidales Silber (dem man die Nähe zum Mond und damit das weibliche Yin-Prinzip zuweist) aktuell eine regelrechten Renaissance erlebt und sich erfreulicherweise Millionen von Menschen weltweit wieder die spektakuläre Wirkung des fast schon in Vergessenheit geratenen Elixiers tagtäglich zunutze machen, ist hierzulande dessen „großer Bruder“, das kolloidale Gold, zwar [...]
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung kolloidales Gold

Bevor wir im weiteren Verlauf die spezielle Wirkung von kolloidalem Gold explizit für einzelne Erkrankungen durchleuchten, ist es sehr sinnvoll, zunächst die allgemeine Wirkung von kolloidalem Gold zu kennen. Klären wir aber zunächst einmal den Begriff „kolloidal“.

Unter dem Begriff „kolloidal“ versteht man die zweitkleinste Einheit der Materie, direkt nach Atom. Es ist zugleich die kleinstmögliche Form, in die eine Materie (Körper, Material) zerlegt werden kann, ohne dabei seine ursprünglichen Eigenschaften einzubüßen.

Die kolloidale Form ist im Übrigen genauso wenig fremd für unseren Körper wie das Gold selbst. Blut und Lymphe, unsere wichtigsten Lebenssäfte, sind nichts anderes als Kolloide.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
In dieser mikroskopisch kleinen und dennoch voll funktionierenden Form wird es dem Gold faktisch ermöglicht, unseren Körper bis in die entlegensten und kleinsten Winkel zu durchdringen, um dort die erwünschte Wirkung zu erzielen. Auf diese Weise erzielt das kolloidale Gold eine unübertreffbare   Wirkung sogar auf das für die wenigsten Vitalstoffe erreichbare Hirn, indem es die Blut-Hirn-Schranke überwindet und unsere Denkprozesse, unsere Konzentration, aber auch die motorischen Fähigkeiten spürbar und übrigens auch messbar verbessert.

Mit einem Durchmesser von lediglich nur 0,126 nm befinden sich die Goldkolloide im Nanobereich (griechisch „Nannos“ = Zwerg) und sind in etwa 2000-mal kleiner als das kleinste bekannte Bakterium. Dies führt unmittelbar dazu, dass das Gold selbst in Körperbereichen wirkt, die die Bakterien schützend abweisen, z. B. die besagte Blut-Hirn-Schranke. Aufgrund der mikroskopisch kleinsten [...]

`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold verbessert den Informationsfluss unseres Erbguts um das bis zu 10.000-Fache!

Angesichts dessen ist es nicht übertrieben, im Zusammenhang mit den Forschungsergebnissen der Universität Basel zum kolloidalen Gold von einer regelrechten Sensation zu sprechen. So gelang es den Forschern der Universität Basel 1999 erstmals, die elektrische Leitfähigkeit von DNS-Molekülen zu messen.

Innerhalb dieser Forschung konnte nachgewiesen werden, dass der Informationsfluss der DNS unter der Anwendung von kolloidalem Gold um das bis zu 10.000-Fache verbessert werden konnte.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold erhöht die Intelligenz um 20 %

Wie im Vorspann bereits geschildert und für die meisten Leser wohl nichts Neues, kommunizieren die Nervenzellen im Hirn über elektrische Impulse. Erst über diese Signale werden Informationen im Hirn von einem Neuron zum nächsten gesendet. Der aufmerksame Leser könnte also schlussfolgern, dass eine regelmäßige Einnahme von kolloidalem Gold nicht nur die Weitergabe der Erbinformationen um das Vielfache erhöht, sondern sich ebenfalls merklich positiv auf sämtliche Körperprozesse auswirken sollte, die von elektrischen Impulsen abhängen ‒ so auch die Hirnleistung. Und das ist tatsächlich so! Innerhalb einer Pilotstudie stieg der

Intelligenzquotient (IQ) der Teilnehmer um sagenhafte 20 % ‒ nachgewiesen   über einen IQ-Test, den die Probanden zu Beginn und nach drei Monaten der Goldeinnahme ablegten.`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold wirkt stimmungsaufhellend

Durch Lösung innerlicher Blockaden, Beruhigung des Nervensystems und Aktivierung der inneren Energie sorgt Gold für innerliche Entspannung und ein harmonisches Weltbild. Nachweislich stimuliert Gold des Weiteren die Produktion endorphinartiger Hormone, die für gute Stimmung und ein harmonisches inneres Gefühl sorgen.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold erhöht die Leistungsfähigkeit und Energie

Die sich im Nanobereich befindenden kleinsten Goldpartikel breiten sich im Eiltempo im gesamten Organismus (auch in den Mitochondrien, den sog. Kraftwerken unserer Zellen) aus und bescheren uns einen ungeahnten Energieschub. Aufgrund der so optimierten interzellulären Kommunikation erhöht sich unsere physiologische und geistige Leistungsfähigkeit sowohl spürbar als auch messbar.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold erhöht die Bewegungskoordination

Unsere Bewegungskoordination hängt von der nervalen Interaktion zwischen Großhirn, Rückenmark, Bewegungsnerv und schließlich Muskelfaser ab. Gesteuert wird diese Kommunikation über elektrische Impulse. Wie wir weiter oben lesen konnten, verfügt Gold mit über die beste elektrische Leitfähigkeit aller Metalle. Die Einnahme von kolloidalem Gold verstärkt die elektrischen   Impulse innerhalb der Nervenzellen und damit die intramuskuläre Koordination ‒ etwas, von dem jeder Mensch, besonders aber ältere Menschen und Leistungssportler profitieren!
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold ‒ ein potenter Fänger von freien Radikalen

Die sog. freien Radikale sind entscheidend mitverantwortlich für Alterungsprozesse und unzählige Erkrankungen, angefangen von ADHS über Herz-Kreislauf-Erkrankungen, Autoimmunerkrankungen z. B. Multipler Sklerose, bis hin zu Krebs. Indem das kolloidale Gold zur Produktion von zwei äußerst effektiven Radikalfängern (sog. Antioxidantien) beiträgt, namentlich Glutathion und SOD, schützt es vor unzähligen Erkrankungen und verlangsamt Alterungsprozesse.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold stimuliert das „Methusalem-Enzym“

Das Enzym SOD ist unser wichtigstes enzymatisches Antioxidans und hat die Aufgabe, vor allem die für uns Menschen gefährlichsten Radikale abzuwehren, nämlich die sog. Superoxide. Nicht umsonst wird das SOD auch als das „Methusalem-Enzym“ tituliert. Nicht zu unterschätzen ist auch die Funktion von Gluthation, eines ebenfalls sehr potenten Antioxidans, das außerdem unseren Organismus von Entzündungen und Giften befreit.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold stimuliert das Immunsystem

In mehreren Studien konnte nachgewiesen werden, dass Gold die Fresszellen des Immunsystems (die sog. Makrophagen) stimuliert. Hier agiert Gold aber nicht einfach nur als Stimulator, sondern vielmehr als intelligenter Regulator. Dies hat den Vorteil, dass es zu keinen überschießenden Immunreaktionen , die an sich unangenehme Symptome und Erkrankungen bedingen können (Allergien, Arthritis u. a.).  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wie bereits Robert Koch 1890 entdeckt hat, können Tuberkulosebakterien in der unmittelbaren Nähe von Gold nicht überleben. In einer Studie von 2011 und einer weiteren von 2013 konnte die Wirksamkeit von Gold-Nanopartikeln gegen Salmonellen belegt werden.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Schutz vor Entzündungen

Chronische Entzündungen sind Symptome zahlreicher Erkrankungen und nicht selten aber leider gleichzeitig Ursachen weiterer entstehender Krankheiten ‒ ein Teufelskreis, den es schnellstmöglich zu durchbrechen gilt. Auch beschleunigen Entzündungen nachweislich unsere biologische Alterung,   indem sie nicht zuletzt zur Verkürzung unserer Telomere (der sog. Lebenslichter) beitragen.

Nicht nur im Therapiealltag, sondern ebenfalls in wissenschaftlichen Studien konnte Gold eine ausgesprochen entzündungshemmende Wirkung unter Beweis stellen. Die Forscher der Karolinska-Universitätsklinik in Stockholm (Schweden) konnten jüngst nachweisen, dass das kolloidale Gold ein Protein namens HMGB 1 stimuliert ‒ ein Vorgang, der zum Abbau entzündlicher Prozesse beiträgt.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold repariert unsere DNS

Das gesamte genetische Lebensprogramm einer Zelle ist innerhalb unserer DNS kodiert. In Kooperation mit der RNS steuert die DNS auf Zellebene sämtliche Körperabläufe, so auch die erforderliche Reparatur von täglich innerhalb des Zellstoffwechsels anfallenden Zellschäden. Indem das kolloidale Gold den Informationsfluss unserer DNS (Erbguts) um das 10.000-Fache verbessert, nimmt Gold einen entscheidenden Stellenwert innerhalb der Reparatur der DNS ein. Der Körper nutzt also die Goldmoleküle zur Reparatur von DNS-Schäden ‒ Fakten, die u. a. von Dr. Gabriel Cousens bestätigt werden.   Nachweislich wird die DNS-Reparatur des Weiteren von dem im kolloidalen Gold enthaltenen Glutathion unterstützt.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold aktiviert mit der Zirbeldrüse unser „drittes Auge“

Die Zirbeldrüse (auch „Epiphyse“ genannt) ist nicht nur für die Steuerung unseres Tag-Nacht-Rhythmus in Verbindung mit der Melatoninproduktion verantwortlich ‒ sie kann noch viel mehr! Kennen Sie das Gefühl, wenn Sie sich beobachtet fühlen, sich schlagartig umdrehen und tatsächlich jemanden entdecken, der Sie hinterrücks anstarrt? Dies ist ein Phänomen, von dem bereits Platon im Zusammenhang mit dem sog. siebten Sinn sprach. Müssen wir tatsächlich sehen, hören, riechen, schmecken und fühlen, um die Dinge um uns herum wahrzunehmen? Keineswegs. „Es gibt eine kleine Drüse im Gehirn, [...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold aktiviert mit der Zirbeldrüse unser „drittes Auge“

Bereits René Descartes (1596‒1650), ein berühmter französischer Philosoph, Naturwissenschaftler und Mathematiker, studierte die Zirbeldrüse und gelangte dabei zu der Überzeugung, dass die Zirbeldrüse in Verbindung mit dem Sehen steht.

Verfügen wir Menschen etwa über ein weiteres Auge, das „dritte Auge“, das über die Funktion des physiologischen Sehens hinausgeht? Allerdings wäre dabei „verfügten“, also die Vergangenheitsform, der richtige Ausdruck. Denn während die Zirbeldrüse unserer Urahnen noch eine Größe von ca. 3 cm aufwies, haben der Mangel an natürlicher Sonnenenergie, schädliche Umwelteinflüsse und der Einsatz von Giften, z. B. Fluoriden in unserer Zahnpasta, schleichend über viele Jahrzehnte die Zirbeldrüse auf die heutigen 3‒5 mm geschrumpft. Des Weiteren führen Energieblockaden im Hirn dazu, dass durch diesen Bereich nicht hinreichend Energie fließt.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold aktiviert mit der Zirbeldrüse unser „drittes Auge“

Moderne Forschung konnte aufzeigen, dass die innere Energie direkt durch das Zentrum der Zirbeldrüse geleitet wird. Beobachtungen von René Descartes konnten damit wissenschaftlich bestätigt und sogar physiologisch erklärt werden. Demnach versetzt uns die Zirbeldrüse in die außerordentliche Befähigung, elektromagnetische Felder in einem anderen Frequenzbereich wahrzunehmen. Indem wir die Energie durch die Zirbeldrüse leiten, können wir die uns umgebenden elektromagnetischen Felder sehr viel bewusster wahrnehmen und dadurch unsere Intuition verbessern. Daraus entstehen neben der stärkeren Intuition eine geschärfte Wahrnehmung und sogar der Zugang zu spirituellen Erfahrungen.
  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold aktiviert mit der Zirbeldrüse unser „drittes Auge“
  
Diese für den heutigen Menschen schon mystisch anmutenden Befähigungen und Erfahrungen bleiben den modernen Menschen aufgrund der fehlenden Energie, die nötig ist, um die Zirbeldrüse zu erreichen, vorenthalten. Daraus resultiert, dass uns die weiter oben beschriebene Fähigkeit zur tieferen Intuition, Spiritualität, geschärften Wahrnehmung, aber auch das Feingespür für die Realität nur sehr begrenzt zur Verfügung stehen.

Gold verstärkt die fließende Energie in diesem Hirnbereich und die Funktion unserer Zirbeldrüse. Beides kann in die Wiedererlangung der oben genannten Fähigkeiten münden. Damit öffnet kolloidales Gold unser „drittes Auge“. Aus 1321„Sehen“ wird „SEHEN“ ‒ eine dem modernen Menschen bereits unbekannte Dimension! 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold erneuert das Bindegewebe und macht schön (1/2)

Eines der größten Probleme der Hautalterung neben dem Einfluss der freien Radikale stellt die sog. Glykation dar. Wie der Name bereits erahnen lässt, handelt es sich dabei um die negative Auswirkung von Zucker auf unser Bindegewebe. Mit steigender Zuckerkonzentration im Blut (verursacht durch zu hohen Zuckerkonsum oder aber Diabetes) entstehen sog. AGEs (Advanced Glycation Endproducts ‒ zu Deutsch: fortgeschrittene Glykationsendprodukte) als Folge unkontrollierter Reaktion zwischen Zucker, Lipiden und Proteinen.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold erneuert das Bindegewebe und macht schön (2/2)

Die Kollagenfasern unseres Bindegewebes werden nach und nach hart und verlieren gleichsam an Elastizität. Falten und schlaffe Haut kennzeichnen äußerlich diesen Prozess als Teil eines Alterungsprozesses, dem man mit der Einnahme von kolloidalem Gold aber durchaus effektiv trotzen kann. Schlimmer als dieses primär optische Manko ist die Auswirkung selbiger AGEs auf unsere Blutgefäße, in denen Glykation die Entstehung der Arteriosklerose begünstigt.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold macht Glykation rückgängig

In Studien konnte kolloidales Gold einen phänomenalen Anti- Glykationseffekt unter Beweis stellen. So zeigte es sich, dass das kolloidale Gold nicht nur vor der schädlichen Verzuckerung schützt, sondern zugleich in der Lage ist, bereits vorhandene Glykationsschäden in einem bemerkenswerten Umfang zu revidieren. Die Glykation innerhalb menschlicher Haut konnte damit um 56 % verringert werden. 723 Die durch Glykation bedingten Abstände zwischen den Gewebefasern verringerten sich in der menschlichen Haut des Weiteren um 40 %.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold verbessert die Nährstoffaufnahme und optimiert Stoffwechselprozesse

Indem es die kolloidalen Eigenschaften des Blutes verbessert, optimiert kolloidales Gold unseren gesamten Stoffwechsel. So werden Nährstoffe besser aufgenommen, Gifte effizienter ausgeschieden und die Verdauung gefördert. Auf diese Weise wird nicht nur der Zellstoffwechsel all unserer Gewebeformen und Organe begünstigt, sondern kolloidales Gold gilt, wie wir später noch lesen werden, darüber hinaus aufgrund der besagten Eigenschaften als hervorragendes Mittel gegen chronisches Übergewicht.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold entgiftet den Organismus und reinigt Körper, Geist und Seele

Durch die Optimierung der Stoffwechselvorgänge reinigt Gold unseren Körper. Der aus dem verbesserten elektromagnetischen Energiefluss resultierende positive Einfluss auf unsere innere Balance, die Intuition, geschärfte Wahrnehmung, Harmonisierung und Entstressung „reinigt“ zugleich unsere Seele und unseren Geist.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Zusammenfassend wirkt Gold u. a.: (1/2)
- regulativ,
- reparativ,
- regenerativ,
- energetisch,
- beruhigend,
- aktivierend,
- antioxidativ (schützt vor freien Radikalen),
- anti-entzündlich,
- antibakteriell,
- antiviral,
- anti-tumoral,
- stimmungsaufhellend,  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Zusammenfassend wirkt Gold u. a.: (2/2)

- verjüngend,
- zellerneuernd,
- entgiftend,
- schlaffördernd (nachts).

Darüber hinaus gilt Folgendes:
- Gold erhöht die interzelluläre Kommunikation.
- Gold harmonisiert unser Nervensystem.
- Gold aktiviert und regeneriert unser Drüsensystem.
- Gold verbessert die Blutzirkulation.
- Gold macht agiler.
- Gold verbessert alle motorischen Fähigkeiten.
- Gold erhöht das (Selbst-)Bewusstsein.
- Gold steigert die Koordinationsfähigkeit.
- Gold steigert die Intelligenz.
- Gold verbessert unser Zeitempfinden.
- Gold erhöht die Intuition.
- Gold beruhigt den Geist.
- Gold erhöht die Wahrnehmung.
- Gold beschleunigt die Wundheilung.

Und vieles mehr ...
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von kolloidalem Gold gegen Allergien

Moderne Forschung konnte eine effektive Wirkung von kolloidalem Gold gegen Allergien bestätigen. Sehr überzeugende Erkenntnisse verdanken wir in   diesem Zusammenhang Dr. Guy Abraham, der unter Einnahme des kolloidalen Goldes einen signifikanten Rückgang des Allergien-auslösenden Immunglobulins E (IgE) beobachtete. Etwa 90 % aller Allergien sind IgE-Allergien, die dem Typ I zuzuordnen sind. Hierzu gehören u. a. Heuschnupfen, allergische Bindehautentzündung, allergisches Asthma, Nahrungsmittelallergie, Quincke-Ödem (Nesselsucht) u. a.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von Goldkolloiden gegen Krebs

Neben Stammzellforschung läutet die Nanomedizin seit wenigen Jahren ein neues medizinisches Zeitalter ein ‒ mit zahlreichen vielversprechenden Behandlungsansätzen, selbst bei Krankheiten, vor denen die Schulmedizin bis dato kapitulierte.

Nach wie vor stellt die Krankheit Krebs die größte Geißel der modernen Menschheit dar, leider auch mit steigender Tendenz. Sollte man der Krebsentstehungsthese, wie sie von der Schulmedizin propagiert wird, Vorzug gewähren, wäre in diesem Fall kolloidales Gold die beste Möglichkeit, um Krebsentstehung zu vermeiden. Diese geht nämlich davon aus, dass [...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold hilft bei Herz-Kreislauf-Problemen

Jeder einzelne Herzschlag wird durch eine elektrische Erregung gesteuert. Die Kontraktion des Herzmuskels wird dabei über das Erregungsleitungssystem vom Sinusknoten eingeleitet. Durch die Optimierung der intrazellulären Kommunikation wirkt Gold als einer der besten Stromleiter überhaupt Herzrhythmusstörungen (Arrhythmien) entgegen. 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Alterungsprophylaxe und Verjüngung mit kolloidalem Gold (1/3)

Die Wirkung des kolloidalen Goldes lässt sich sowohl der spannenden Kategorie der Alterungsprophylaxe (Verzögerung der biologischen Alterung) als auch der weitaus faszinierenderen Kategorie des Reverse-Aging (biologischen Verjüngung) zuordnen.

Sämtliche Aspekte der Alterungsprophylaxe sowie der biologischen Verjüngung setzen an der zellulären Basis an. Nur wenn es uns gelingt, unsere 60‒100 Billionen Zellen vor der weiteren Zerstörung zu schützen, betreiben wir erfolgreiches Anti-Aging. Die biologische Verjüngung (Reverse-Aging) [...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Alterungsprophylaxe und Verjüngung mit kolloidalem Gold (2/3) 

Ersteres (Anti-Aging) ist dabei um ein Vielfaches einfacher umzusetzen. Dies ist bereits mit gesunder Ernährung, einigen potenten Antioxidantien und zwei wöchentlichen Trainingseinheiten Sport an der frischen Luft verhältnismäßig leicht zu erreichen. Die Paradedisziplin ist und bleibt aber das Reverse-Aging, also nicht einfach nur die Verzögerung von Alterungsprozessen, sondern sogar deren aktive Umkehr.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Alterungsprophylaxe und Verjüngung mit kolloidalem Gold (3/3)

Wie wir weiter oben lesen konnten, fungiert kolloidales Gold als sehr effektiver Radikalfänger und wirkt der Glykation und entzündlichen Prozessen im Organismus entgegen. Dies würde bereits ausreichen, um kolloidales Gold als hoch potentes Anti-Aging-Mittel einzustufen. Kolloidales Gold geht aber noch viel weiter:

Die DNS (unser Erbgut) steuert gemeinsam mit der RNS sämtliche Körperabläufe auf Zellebene. Hierzu gehört ebenfalls die lebenswichtige Reparatur von täglich innerhalb des Zellstoffwechsels anfallenden Zellschäden. Indem das kolloidale Gold den Informationsfluss unserer DNS um das bis zu 10.000-Fache verbessert, unterstützt es die Reparatur unserer 60‒100 Billionen von Zellen, woraus ein überaus aktives Reverse-Aging, also die Umkehrung der biologischen Alterung, resultiert. Unterstützt wird dieser Verjüngungsvorgang direkt über die[...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von kolloidalem Gold gegen Arthritis

Bereits 1997 gelang es Dr. Guy Abraham und Dr. Peter Himmel, innerhalb einer Studie zu beweisen, dass kolloidales Gold bei Arthritis schmerzlindernd und entzündungshemmend wirkt, die Beweglichkeit der Patienten erhöht und Schwellungen minimiert. Motorische Tätigkeiten konnten bereits nach einer Woche der Einnahme von kolloidalem Gold besser ausgeführt werden.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Das Ringfinger-Phänomen
Bis heute spricht die Schulmedizin von einem Phänomen, das sich am Ringfinger von Personen darstellt, die unter Polyarthritis oder Arthrose leiden. Während alle Finger schmerzen und bewegungseingeschränkt sind, bereitet ausgerechnet der Ringfinger, auf dem ein Goldring getragen wird, als einziger Finger keinerlei Beschwerden und ist voll beweglich. Des Weiteren ist dabei oftmals zu beobachten, dass der Goldring eine schwarze Umrandung auf der Haut hinterlässt, wenn man unter einer Gelenkerkrankung leidet.

Während also die Schulmedizin weiterätselt, sind sich die Alternativmediziner längst einig dahin gehend, dass der Körper über die Haut die heilende Substanz Gold regelrecht aufsaugt, um sich von seinen Leiden zu lösen, weshalb der Ringfinger beweglich und schmerzfrei bleibt. Die dunkle Umrandung auf der Haut ist auf andere Legierungen zurückzuführen, da ein 750er-Gold zu nur 75 % aus reinem Gold besteht und zu...

`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von kolloidalem Gold gegen Depressionen und Ängste

Die aktivierende und harmonisierende Wirkung des gesamten Drüsensystems einerseits sowie die Aktivierung der Lebensenergie und Beruhigung des Nervensystems durch das kolloidale Gold andererseits führten bereits in den frühen Jahren besonders in den USA zur erfolgreichen Behandlung von Depressionen und Ängsten. Patienten berichten bereits nach wenigen Tagen der regelmäßigen Einnahme von einer deutlichen Linderung der Symptome sowie einer gesteigerten Lebensfreude.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Potenzstärkende Wirkung von kolloidalem Gold

Impotenz kann sehr mannigfaltige Ursachen haben, u. a. können Stress, Überforderung, Drüsenalterung, aber auch andere Blockaden zum Nachlass unserer Potenz und Libido führen. Durch die Reaktivierung der Sexualdrüsen kann die Hormonproduktion angekurbelt werden, die Harmonisierung unseres Nervensystems löst psychische und physische Blockaden, die das Sexualleben beeinträchtigen. Bei einer längeren Einnahme kann kolloidales Gold des Weiteren als ein natürliches Aphrodisiakum fungieren.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von Gold gegen Multiple Sklerose (MS)

Laut Edgar Cayce liegt die Hauptursache für MS im Mangel an Gold im Organismus, wodurch die Drüsen nicht in der Lage seien, die zur ungestörten Funktion des Nervensystems wichtigen Substanzen zu produzieren.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von kolloidalem Gold bei PMS

Unter PMS (Prämenstruelles Syndrom) versteht man das Auftreten verschiedener Beschwerden bei etwa jeder dritten Frau, die vier bis 14 Tage vor dem Einsetzen der weiblichen Regelblutung auftauchen und mit Beginn der Regel wieder enden. Indem das kolloidale Gold alle körperlichen und geistigen Funktionen harmonisiert, den Körper entspannt und alle Drüsen aktiviert, kann es dem PMS effizient ntgegenwirken.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Einnahme von kolloidalem Gold

Bereits in geringen Dosen hat sich kolloidales Gold als sehr wirksam erwiesen. Erwachsene Personen können zwei Teelöffel (10‒20 ml) täglich einnehmen, bei Kindern reicht ein Teelöffel. Hierbei ist eine Konzentration von zwischen 1 und 8 PPM gebräuchlich. Als optimal hat sich die morgendliche Einnahme auf nüchternen Magen herausgestellt. Um die Aufnahme über die Mundschleimhaut zu unterstützen, sollte man das Goldwasser ca. zwei Minuten im Mund behalten, bevor man es schluckt. Aufgrund der positiven elektrischen Ladung sollte man hierzu einen Plastik- oder Holzlöffel verwenden.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Herstellung von kolloidalem Gold

Kolloidales Gold wird mit einem Elektrolysegerät, zwei Goldelektroden und destilliertem Wasser erzeugt. Je nach Wasserbeschaffenheit und Elektrolysegerät ist in einem 200-ml-Glas eine Zeit von ca. vier bis zwölf Stunden vonnöten, um eine Konzentration von 1 PPM kolloidalem Gold zu erzeugen. Die Lagerung sollte in einer braunen oder blauen Flasche, geschützt vor Sonneneinstrahlung und Wärme erfolgen. Es ist wichtig, zu erwähnen, dass man kolloidale Substanzen dabei weder im Kühlschrank noch in der direkten Nähe von elektrischen Geräten aufbewahren sollte. Die Wirkung des kolloidalen Goldes lässt zwischen dem dritten und vierten Monat mit der elektrischen Entladung der Kolloide allmählich nach.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
„Kolloidales Silber ist einer der wirkungsvollsten Bakterienkiller. Kolloidales Silber entpuppt sich als ein Wunder der modernen Medizin. Ein herkömmliches Antibiotikum eliminiert vielleicht ein Dutzend verschiedene Krankheitserreger, aber kolloidales Silber tötet etwa 650!“
Science Digest, März 1978
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Kolloidales Silber, aber auch MMS, Grapefruitkernextrakt u.a. Substanzen, über die wir ausführlich im „Codex Humanus“ berichten, gehören zu diesen äußerst effektiven Alternativen zum Antibiotikum – leider hat die Schulmedizin und die „Big Pharma“ sehr viel daran gesetzt, diese traditionell verwendeten Schutzsubstanzen aus der Erinnerung der modernen Menschheit zu eigenen materiellen Gunsten zu löschen. Konkret wurde zeitgleich mit der Patentierung des Penicillin den besagten Substanzen der Kampf angesagt!

Beim kolloidalen Silber handelt sich um eine höchst effiziente, kostengünstige und zugleich in aller Regel nebenwirkungsfreie Behandlungsform gegen sämtliche Parasiten, wie Bakterien, Viren, Pilze, Streptokokken, Staphylokokken und andere pathogene Organismen.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Kolloidales Silber vermag in einer Rekordzeit von sechs Minuten sage und schreibe bis zu 650 Krankheitserreger abzutöten, und als wäre dies nicht genug, unterstützt es auch unser Immunsystem bei seiner Arbeit. Dies sind phänomenale Fakten, die aber mittlerweile gar nicht mal mehr so unbekannt sind. So erfreut sich kolloidales Silber einer stätig wachsenden Fangemeinde, die dessen antibakterielle und antivirale Wirkung regelmäßig zu schätzen weiß...
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Weitaus unbekannter aber ist eine andere nicht minder faszinierende Wirkung von kolloidalem Silber, die das kolloidale Silber in Verbindung mit dessen antibakteriellen Wirkung zu einem regelrecht sensationellen Multitalent macht:

Gemäß Dr. Robert O. Becker, einem bekannten Wissenschaftler der Biomedizin der Syracuse University (USA), vernichtet Silber nicht nur feindliche Lebensformen, sondern unterstützt darüber hinaus die Neubildung des lebensnotwendigen Gewebes. Und "Neubildung" bedarf in diesem Fall einer selbst für den heutigen medizinischen Stand der Stammzellforschung fast schon neuen Definition - lesen Sie im Weiteren warum...
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Was genau ist kolloidales Silber?

Bevor wir zu den Eigenschaften des Silbers als zweites Wort innerhalb des zusammengesetzten Begriffs „kolloidales Silber“ kommen, widmen wir uns zunächst dem ersten Wörtchen „kolloidal“. Unter einem Kolloid versteht man die zweitkleinste Einheit der Materie, direkt nach dem Atom. Es beschreibt also die kleinstmögliche Form, in die eine Materie (Körper, Material) zerlegt werden kann, ohne dabei seine ursprünglichen Eigenschaften einzubüßen.

In dieser mikroskopisch kleinen und dennoch völlig funktionellen Form wird es dem Silber ermöglicht, unseren Körper bis in die letzte Zelle zu durchdringen, um dort die erwünschte Wirkung zu erzielen: die Eliminierung sämtlicher körperschädigender Parasiten, Bakterien, Viren und Pilze.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers (1)
Die genauen Wirkmechanismen des kolloidalen Silbers sind bis heute nicht abschließend geklärt. Vermutet wird ein magnetisches Feld der Silberatomgruppe, das um die Silberpartikel entsteht und zu deren erstaunlicher Wirkung führt.

Im kolloidalen Silberwasser entsteht die sogenannte „Brownsche Bewegung“, also ein kollektiv magnetisches Feld, dessen elektrische negative Polarisierung sich auf Krankheitserreger störend auswirkt.

Diese negative Polarisierung zerstört Enzyme, die bei einzelligen Krankheitserregern wie Bakterien, Pilzen und Viren, für die Sauerstoffgewinnung verantwortlich sind. Da dadurch die Atmungskette dieser Parasiten unterbrochen wird, ersticken sie innerhalb weniger Minuten.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers
Des Weiteren fördert offensichtlich die Anwendung von kolloidalem Silber unser Immunsystem, das dann seinerseits ebenfalls gegen die Krankheitserreger effektiv ankämpfen kann. Die antibakterielle, antivirale und pilzhemmende Wirkung des kolloidalen Silbers ist seit Jahrtausenden bekannt. Im 19. Jahrhundert wurde es standardmäßig therapeutisch angewandt, und seine Wirkung wurde erst kürzlich an der medizinischen Fakultät der Universität Los Angeles offiziell bestätigt. Diese folgenden Abschnitte sind fundierten Informationen zum Thema „kolloidales Silber“ gewidmet und sollen Ihnen Antworten auf alle Ihre Fragen dazu liefern.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers
Was sagen die Fachwelt und die Presse dazu?
„Jede Art von Pilz, Virus, Bakterium, Streptokokken, Staphylokokken und anderen pathogenen Organismen wird in drei bis vier Minuten abgetötet. Tatsächlich ist kein Bakterium bekannt, das nicht durch kolloidales Silber innerhalb von höchstens sechs Minuten eliminiert wird, bei einer Konzentration von nur fünf Milligramm pro Liter (ppm). Und selbst bei hohen Konzentrationen über 100 ppm gibt es keine Nebenwirkungen.“ (Health Consciousness, Vol. 15, 4)
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers
Die Wirkung von kolloidalem Silber beruht auf zwei Faktoren: zum einen ist dies die bereits angesprochene Brownsche Bewegung, deren elektrische negative Polarisierung sich auf die Atmungskette der Krankheitserreger störend auswirkt und zu deren Erstickungstod führt, zum anderen stärkt seine Anwendung unser Immunsystem, das dann seinerseits die Krankheitserreger bekämpfen kann. Hinzu gesellt sich die außerordentliche Fähigkeit, das Zellwachstum anzuregen und die Heilung von verletztem Gewebe um mehr als 50 % zu beschleunigen.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers
Aufgrund des enorm breiten Wirkungsspektrums des kolloidalen Silbers gegenüber rund 650 Krankheitserregern (Bakterien, Viren, Pilze, Streptokokken, Staphylokokken sowie anderen pathogenen Organismen) sowie der Förderung des Zellwachstums ist seine Wirksamkeit entsprechend bei unzählig vielen Erkrankungen nachvollziehbar. Schließlich hängen sehr viele Erkrankungen direkt oder indirekt mit diesen Parasiten oder der Zellzerstörung zusammen, die das kolloidale Silber zu reparieren helfen kann. Und so konnte das kolloidale Silber bislang bei den nachfolgend genannten Erkrankungen Erfolge erzielen:
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Führt kolloidales Silber zu Nebenwirkungen?
In normalen Dosen angewandt, führt kolloidales Silber zu keinen Nebenwirkungen, und selbst für die allzu oft vonseiten der Gegner des kolloidalen Silbers angeführte Argyrie (ein kosmetisches Problem um eine grau-blaue Färbung der Haut) bedarf einer durchschnittlichen oralen Einnahme von 3,8 Gramm pro Tag, was der millionenfachen Menge der üblichen Dosierung von kolloidalem Silber beim Erwachsenen gleichkommt!

`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Herstellung von kolloidalem Silber

Die Herstellung des kolloidalen Silbers konzentriert sich darauf, möglichst kleinste Partikel zu erzeugen. Während das Silber früher mit einer Kolloidmühle sehr aufwendig zermahlen wurde und bis in die 1930er-Jahre deshalb sehr teuer war, ermöglichen neue, moderne Herstellungsvarianten ein sehr wirkungsvolles, da aus kleineren Partikeln bestehendes und zudem viel günstigeres kolloidales Silber.
Die Kolloidmühle wurde vom Bredig-Apparat abgelöst, der unter Starkstrom per elektrischem Lichtbogen das Ablösen des Silbers von den Silberdrähten erzielte.  
Erst viel später folgte der Silbergenerator, der bis heute in der Herstellung des kolloidalen Silbers seine Dienste leistet. Er arbeitet mit Niedrigspannung und erzeugt das kolloidale Silber mittels Elektrolyse.

`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Beschreibung der Herstellung kolloidalen Silbers mittels eines Silbergenerators (1/2)
- Den Strom an zwei Silberelektroden anlegen und in destilliertes Wasser hängen,
- wobei einer der beiden Silberdrähte als Plus-, der andere als Minuspol fungiert.
- Schließt man den Generator an, so löst der Strom die Silberpartikel und positiv geladene Silberionen.
- Am Minuspol entsteht Wasserstoffgas; die Elektronen werden vom Pluspol ersetzt, wenn die Silberpartikel gebildet werden.
- Fließt der Strom durch das Silber, verlieren einige der Silberatome an der Grenzfläche zum Wasser ein Elektron und werden zum Ion umgewandelt.  
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Beschreibung der Herstellung kolloidalen Silbers mittels eines Silbergenerators (2/2)
- Die Silberionen lösen sich in Wasser auf und produzieren so eine ionische Silberlösung = Elektrolyseprozess.
- Einige der Silberionen nehmen während der Elektrolyse ein Elektron des durchfließenden Stromes auf und werden in ein Atom zurückverwandelt.
- Diese Atome werden von anderen Atomen mittels der Waal‘schen Kräfte angezogen; es bilden sich kleine Metallpartikel. Auf diese Weise entstehen sowohl Ionen als auch Partikel.
- Die positiv geladenen Kationen bewegen sich zum positiv geladenen Minuspol und nehmen dort Elektronen auf.
- Die negativ geladenen Anionen bewegen sich zum positiv geladenen Pluspol.
- Wo Kationen und Anionen vorliegen, versuchen diese gegenseitig ihre Ladung auszugleichen.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Was gilt es bei der Herstellung von kolloidalem Silber zu beachten?
- Achten Sie beim Erwerb eines Silbergenerators auf Qualität statt auf eine günstigen Preis; die Geräte sollten genormt sein und möglichst über eine Anzeige zur Herstellung von kolloidalem Silber verfügen.
- Benutzen Sie ausschließlich Silberstäbe mit einem Reinheitsgrad von 99,99 %.
- Meiden Sie anderes Silbermaterial; dieses neigt zu Verunreinigungen!
- Erwerben Sie destilliertes Wasser in einer Apotheke; dieses ist frei von Verunreinigungen
- Verfahren Sie im Weiteren nach Herstellerangaben.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha-Teepilz-Getränk: Ein von Mythen umwobenes Elixier stellt sich vor ...

Ein Mythos entsteht bekanntlich dann, wenn sich unglaubliche Geschichten um etwas ranken, das über phänomenale und zugleich nicht vollends erklärbare Eigenschaften oder Kräfte verfügt.

Auf kaum etwas trifft eine derartige Beschreibung so ideal zu wie auf den Kombucha-Teepilz, häufig auch „Wunderpilz“ genannt, der bereits seit rund 2200 Jahren wahre Erfolgsgeschichten schreibt, die von Generation zu Generation weitergetragen werden. Es handelt sich um Geschichten, die ein weites Spektrum für sich einnehmen und von steigender Vitalität, Gesundheit, Verschönerung bis hin zu wundersamen Heilungen handeln.

Kombucha – ein universelles Wundermittel? Was ist die Kombucha wirklich, welche Vorzüge bietet sie, welche Vorteile können wir ihr entnehmen, was ist erwiesen und was „nur“ weitergegeben?  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Zunächst einmal sei klargestellt, dass es sich bei Kombucha nicht um einen klassischen Pilz im eigentlichen Sinne, sondern vielmehr um eine gelatineartige, elastische Masse handelt, gebildet aus einer Vielzahl von Hefezellen und Mikroben, die in einer Symbiose lebend offenbar Erstaunliches im Hinblick auf unsere Gesundheit, Leistungsfähigkeit und Aussehen zu vollbringen vermögen.

Oberflächlich betrachtet, sieht der Kombucha-Teepilz wie ein Pfannkuchen aus. Es handel sich um eine gallertartige Scheibe, die je nach Teeart, mit der man den Teepilz „anfüttert“, eine weißgraue über bräunliche bis hin zu rötliche Farbe annehmen kann.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Bereits der Name „Kombucha“ sorgt gewissermaßen für Verwirrung. Laut der Überlieferung verdankt die Kombucha ihren Namen und ihre Entdeckung einem koreanischen Wandermönch namens „Kombu“, der im Jahre 414 n. Chr. zum japanischen Kaiser Inkyo gerufen wurde, der unter schwerer Gastritis litt und der von Kombu mittels eines Teegetränkes von seinem Leiden befreit wurde.

In Windeseile sprach sich diese wundersame Heilung herum, und der Tee erhielt seinen Namen: „Kombu-Cha“ = Tee des Kombu. Einer anderen überlieferten Geschichte wiederum zufolge, ist der Name „Kombucha“ oder „Combucha“ auf eine kostengünstige Alternative zum teuren Tee zurückzuführen, den die verarmte Bevölkerung in Japan aus den Algen zubereitete und es heute noch tut.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Das Wort „Combu“ bezieht sich auf die japanische gleichnamige Braunalge, die Endung „Cha“ wiederum bedeutet auf Japanisch schlicht Tee = Algentee. In China soll er zwecks Erlangung der Unsterblichkeit getrunken worden sein, so glaubte man es zumindest. Politische Größen wie Stalin oder Ronald Reagan (gegen seine Krebserkrankung) sollen diesen regelmäßig konsumiert haben. Und glaubt man den Presseaussagen, so vertrauen Stargrößen wie Madonna, Barbara Streisand, Naomi Campbell, Claudia Schiffer, Kate Moss und viele [...]
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Ganz Hollywood scheint von Kombucha als Fitness- und Schönheitselixier zu schwärmen, darunter auch so berühmte Namen wie der Regisseur Oliver Stone sowie die Schauspielerinnen Daryl Hannah und Linda Evans. 
Sind es aber nicht gerade diese Superstar vom Schlage einer Madonna, die über teuer bezahlte Berater verfügen, um die wirklich lohnenden Geheimtipps aufzuspüren und sich einen Vorsprung auf dem Sektor der Schönheit, der Leistungsfähigkeit und Gesundheit vor der unerbittlichen Konkurrenz zu sichern? Auch diese Menschen haben lediglich einen Magen, der über eine begrenzte Aufnahme an Nahrungsmitteln verfügt – dass sie dabei sehr wählerisch sind, liegt auf der Hand.
Begeben Sie sich mit uns zusammen auf eine spannende Reise ins Zentrum dieses mythenbehafteten Zaubertranks und lassen Sie uns gemeinsam von Fakten und Erzählungen schwärmen und wo es angebracht ist, Licht ins Dunkle eines wahren Mythos bringen.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha-Tee – Aussehen, Geruch, Geschmack
Der Kombucha-Tee nimmt die Farbe der verwendeten Teesorte an (dies tut mit der Zeit sogar der Kombucha-Pilz selbst), entsprechend also grünlich beim Grüntee, dunkel beim Schwarztee und rötlich beim Kräutertee. Der Geruch ist als leicht süß-säuerlich einzustufen.
Es steht außer Frage, dass sämtliche Limonadegetränke in ihrem Ursprung der  Grundcharakteristik des Kombucha-Tees entstammen. So könnte man annehmen, dass die Kombucha bei deren Schöpfung Pate stand. Während man heute die prickelnd-erfrischenden Gasbläschen in der Limonade oder Cola per Zugabe der Kohlensäure künstlich erzeugt, entstehen die gleichen Bläschen im Kombucha auf natürliche Weise während des Gärungsprozesses.
Der leicht säuerliche Geschmack in der Limonade wird über ungesunde Aromastoffe und Säuren erzeugt, der Kombucha-Tee erhält  [...].
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
In seinem Buch „Kombucha – Mythos, Wahrheit, Faszination“ beschreibt Günther W. Frank sehr treffend den Geschmack des Kombucha-Getränks als „köstlich, prickelnd und fruchtig“.
In der Tat dient der Kombucha-Tee vielen Menschen einfach nur als erfrischendes, leckeres Getränk – wenn man so will, eine Alternative zur Limonade. Der weitaus größere Anteil der Kombucha-Konsumenten ist jedoch an dessen sagenhafter bis sagenumwobener, gesundheitlicher Wirkung interessiert. Dieser wollen wir in den folgenden Kapiteln auf den Grund gehen.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkungsweise und Wirkstoffe des Kombucha-Teepilzes
Trotz zahlreicher Untersuchungen und Analysen durch Wissenschaftler in der ganzen Welt konnte man bis zum heutigen Tag weder die exakte Zusammensetzung noch die genaue Wirkungsweise der Kombucha gänzlich klären.  
Angesichts weltweit seit Jahrhunderten sowohl durch Anwender als auch Therapeuten übermittelter und verschrifteter Heilungsgeschichten des traditionell vor allem im ostasiatischen und osteuropäischen Raum als Volks- und Hausmittel angewandten Kombucha-Teepilzgetränkes, stellt sich nicht die Frage, OB die Kombucha wirkt, sondern vielmehr WIE und WOGEGEN der Tee daraus wirkt ...
Die eigentlichen Wurzeln werden in China vor 2200 Jahren vermutet; die Tatsache, dass die Überlieferungen zur positiven Wirkung der Kombucha auf Körper und Seele bis zum heutigen Tag andauern, sollte dabei jedem Skeptiker zu denken geben!

`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Der Vorliebe der Russen für Gärgetränke ist es wohl zu verdanken, dass sich die Kombucha von da aus rasch in ganz Russland und den baltischen Ländern ausbreitete und um den Ersten Weltkrieg herum über Polen in die ehemaligen deutschen Gebiete Eingang fand und über den Austausch von deutschen und russischen Kriegsgefangen schließlich ihren Weg in den Westen fand.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wie die Kombucha wirkt
Biochemisch betrachtet, handelt es sich beim Kombucha-Teepilz um ein Wunderwerk der Natur. Angefüttert mit Zucker und Grünem, Schwarzem oder Kräutertee, wird bei einer Temperatur von 23 °C (+/−5) im Kombucha- Pilz eine wahre Maschinerie aus komplexen, biochemischen Reaktionen (Assimilations- und Dissimilationsprozessen) in Gang gesetzt, die nach und nach eine Flut von zahlreichen wertvollen Stoffen in den Tee hinein freisetzt, die vorher nicht darin waren!  
Diese Prozesse laufen keineswegs unorganisiert ab. Ganz im Gegenteil – jeder Bestandteil erfüllt seine Rolle: Die im Pilz enthaltenen Hefen vergären den hinzugefügten Zucker zu Kohlendioxid (der Grund für den prickelnden Geschmack) und geringen Mengen an Alkohol, der wiederum den im Pilz vorhandenen positiven Mikroorganismen als Nahrungsgrundlage dient.
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Diese setzen den Zucker in Zellulose um, die den Pilz wachsen lässt. Während diese den Alkohol verdaut, wandeln die positiven Bakterien ihn in Glucuron-, Glucon-Essig- und Milchsäure (der Grund für den erfrischenden, säuerlichen Geschmack) um und produzieren dabei ganz nebenbei zahlreiche Vitamine. Das hieraus entstehende Getränk ist es, das uns nach ca. acht bis zwölf Gärtagen vollendet zur Verfügung steht und mit zahlreichen positiven Effekten auf den menschlichen (und tierischen) Körper aufwartet. Doch was macht die Kombucha so wirksam?  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkstoffe der Kombucha
Es ist das Zusammenspiel der gesamten Vitalstoffe im Kombucha-Tee, die im richtigen Verhältnis zueinander produziert werden, was dessen phänomenale Wirkung bei allerlei Erkrankungen und Zipperleinchen begründet. Die nachfolgend aufgelisteten Wirkstoffe wurden bislang im Kombucha-Tee festgestellt; man geht aber davon aus, dass es eine Vielzahl weiterer Inhaltsstoffe gibt, die bislang unentdeckt blieben, jedoch im Zusammenspiel aller Komponenten ihre positive Wirkung auf den Organismus nicht minder erfolgreich verrichten: [...] 
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Hefepilze

Unzählige vitale Hefepilze verrichten viele verschiedene Aufgaben in unserem Körper; sie stärken das Immunsystem und sorgen für die Reinheit der Haut. Die immunstärkende Wirkung der Kombucha hat dieser auch den Namen „Virenkiller“ verliehen. In 1 ml Kombucha ist dabei die unglaubliche Menge von 10 Millionen lebender und hochwirksamer Hefen vorhanden.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Die Glucuronsäure gehört wohl zu den wichtigsten im Kombucha-Tee enthaltenen Säuren überhaupt. Erwiesenermaßen produziert die Leber Glucuronsäure, um die körpereigenen Stoffwechselgifte und Fremdstoffe (zum Beispiel Medikamente) zu binden.
Des Weiteren ist die Glucuronsäure am Aufbau anderer im Körper für das Bindegewebe wichtiger Säuren beteiligt, so etwa der Hyaluronsäure, die als ein wichtiger Bestandteil des Bindegewebes unter anderem in der Gelenkflüssigkeit, in der Haut (macht 55 % der Hautsubstanz aus) ist und in den Knochen vorkommt.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Die Glucuronsäure ist ebenfalls ein Baustein der Mukoitinschwefelsäure (verantwortlich für die Magenschleimhaut und die Glaskörper des Auges) sowie Heparin, einem aus der Leber stammenden Stoff, der die Blutgerinnung verzögert. Nicht zuletzt ist die Glucuronsäure am Aufbau von Chondroitin beteiligt, das einen weiteren wichtigen Bestandteil innerhalb unserer Gelenke bildet. Es ist davon auszugehen, dass die Glucuronsäure den größten Beitrag dazu leistet, dass Kombucha in Verbindung mit positiven Effekten auf allerlei Gelenkprobleme, wie Arthritis, Arthrose, Gicht und Rheuma, gebracht wird und darüber hinaus eine positive Wirkung bei Bindegewebsschwächen, Thrombosen, Problemen des Augenglaskörpers sowie Magenschleimhautproblemen zeigt.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Rechtsdrehende Milchsäure
Neben der Glucuronsäure verdankt man der rechtsdrehenden Milchsäure der Kombucha deren starke antibiotische Wirkung. Die rechtsdrehende Milchsäure unterdrückt die Ausbreitung der Fäulnisbakterien im Darm und sorgt damit für eine gesunde Darmflora. Während bekannt ist, dass ein übersäuerter Körper alles andere als gesund ist, handelt es sich dabei unter anderem um die linksdrehende D(-)Milchsäure, die dieses gefährliche Übersäuern mitverursacht. Im Gegensatz dazu produziert Kombucha (beziehungsweise tun dies die Mikroorganismen) die rechtsdrehende, also die gesunde Milchsäure. Laut Warburg kommt die linksdrehende Milchsäure verstärkt in bösartigen Tumoren vor; seiner These nach kann sich der Krebs nicht entwickeln, wenn die rechtsdrehende Milchsäure überwiegt.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Probiotische Milchsäurebakterien
Die gute, rechtsdrehende Milchsäure also, die die Kombucha verstärkt produziert, sorgt für eine gesunde Darmflora. Die hieraus resultierenden, guten Mikroorganismen (probiotische Milchsäurebakterien) produzieren wiederum unzählige für unsere Gesundheit unentbehrliche Nährstoffe, wie Folsäure, Biotin, Nikotinsäure, Vitamin K, Vitamin B12 und viele andere (Prinzip probiotischer Produkte).  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Eine gesunde Darmflora ist lebensnotwendig; nicht umsonst gilt unter den Naturmedizinern und Heilpraktikern der Leitsatz: „Der Tod sitzt im Darm“. Eine funktionierende, gesunde Darmflora besteht aus unzähligen, lebensnotwendigen Bakterienstämmen, die im Gleichgewicht miteinander leben. Sie ist für ein funktionierendes Immunsystem von unentbehrlicher Bedeutung, und auch der Stoffwechsel kann nur dann funktionieren, wenn die Darmflora gesund ist. So erfolgt die Aufnahme von wichtigen Vitalstoffen, wie etwa den Vitaminen, in erster Linie mit Unterstützung der Dickdarmbakterien. Auf der anderen Seite werden die bösartigen Eindringlinge, so die krankmachenden, bösen Bakterien (wie der gefürchtete Candida albicans), durch die guten Darmbakterien, die die Kombucha fördert, erfolgreich abgewehrt.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Verschiedene Enzyme:
Enzyme sind Bio-Katalysatoren, die in Zusammenarbeit mit zahlreichen biochemischen Prozessen in unserem gesamten Organismus lebenswichtige Aufgaben verrichten, kurz gesagt: ohne Enzyme kein Leben! Die Funktionen von Enzymen aufzulisten könnte ganze Bibliotheken füllen; die wichtigsten Aufgaben sind:
- Verdauung,
- Stärkung des Immunsystems,
- Regulierung des Stoffwechsels,
- Entgiftung des Organismus,
- Entzündungshemmung,
- Wundheilung,
- antivirale und antibakterielle Wirkung,
- Verzögerung von biologischer Alterung,
- Vorbeugung von Krankheiten wie Herzkreislaufdegeneration.
Die in der Kombucha bisher festgestellten Enzyme sind Amylase, Invertase, Katalase, Labenzym, Saccharase und das proteolytische Enzym.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wie ist das breite Wirkungsspektrum von Kombucha-Tee zu erklären?

Zunächst einmal muss ganz ehrlich zugegeben werden, dass die Kombucha, trotz aller faszinierender Berichte zur Wirkung bei unzähligen Krankheitsbildern und krankhaften Zuständen seit rund 2000 Jahren, vonseiten der Wissenschaft noch nicht bis ins letzte Detail erforscht worden ist. Es gibt jedoch dazu gerade aus dem osteuropäischen Raum seit vielen Jahrzehnten ernsthafte, positive Studien sowie unzählig viele begeisterte Stimmen von Ärzten und Therapeuten, welche die Kombucha an ihren Patienten erfolgreich erproben konnten. Mehr dazu aber im weiteren Verlauf des Kapitels.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkung von Kombucha bei  Angina, Gichtschmerzen und Arteriosklerose
„Bei der Angina, insbesondere wenn es sich um Belag bei den Mandeln handelt, muß nicht nur mit dem Getränk gegurgelt, sondern dasselbe auch getrunken werden, und zwar zwecks Vernichtung der Bakterien, welche mit Speisen und Getränken in den Magen gelangten. Das Gurgeln führt bei der Angina schnell Gesundung herbei, und bei Gichtschmerzen und Arteriosklerose wurden auch bei schweren Fällen staunenswerte Erfolge erzielt ...“ (Dr. L. Mollenda)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkung von Kombucha gegen Arterienverkalkung, Gicht, Darmträgheit 
„... sehr wirkungsvolles Mittel zur Bekämpfung von Arterienverkalkung, Gicht und Darmträgheit“ es treten „günstige Wirkungen ein, die sich bei Arterienverkalkung im Sinken des Blutdrucks, Aufhören der Angstgefühle, der Reizbarkeit und der Schmerzen, des Kopfwehs, Schwindels usw. äußert. Die Darmträgheit und ihre Begleiterscheinungen können ebenfalls rasch gebessert werden. Bei Verkalkung der Niere und der Haargefäße des Hirns erzielt man besonders günstige Ergebnisse.“ (Dr. Maxim Bing)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha-Wirkung gegen Krebs
„Kombucha hemmt bösartiges Zellwachstum“ – „Ich habe Kombucha an meine Patienten weitergegeben. Die Ergebnisse sind gut und die Patienten sind sehr zufrieden. Kombucha wurde mit gutem Erfolg angewandt bei Prostatabeschwerden, rheumatoider Arthritis, Knochenmark-Krebs, Fasergeschwulst im Uterus, Bindegewebsentzündung in der Lunge usw.“ (Dr. Soraya Shantiay)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkung von Kombucha bei Angina Pectoris
„Erfahrungen, welche dafür sprechen, dass die Kombucha auch imstande ist, die überaus quälenden Anfälle von Angina pectoris zu beeinflussen.“ (Prof. Dr. W. Wichowski) „Die Tatsache, dass bei zahlreichen Personen oft quälende subjektive Beschwerden durch den regelmäßigen Gebrauch der Kombucha beseitigt werden konnten, müßte allein genügen, die Verwendung dieses Mittels schon im gegenwärtigen Stadium einem möglichst großen Kreise der Bevölkerung zugänglich zu machen, ganz unabhängig davon, ob die wissenschaftliche Heilkunde eine Erklärung für die Wirksamkeit zu geben imstande ist oder nicht.“ (Ders.)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkung von Kombucha gegen Müdigkeit, Nervosität, Hämorrhoiden, hohen Blutdruck
„Zusammenfassend kann man sagen, dass der Teepilz bzw. das durch denselben gebildete Extrakt als vorzügliches Vorbeugungsmittel gegen Zuckerkrankheit, namentlich aber gegen Alterserscheinungen, wie Arterienverkalkung, hohen Blutdruck mit Folgeerscheinungen, wie Schwindel, Gicht, Hämorrhoiden, sich bewiesen hat.“ (Dr. E. Arauner)

Wirkung von Kombucha bei Krebs
„In den achtziger Jahren verordneten wir unseren Krebspatienten den Kombucha-Tee und hatten einen guten Eindruck davon.“ (Dr. Josef Issels) „Besonders die Milchsäure im Kombucha-Tee ist wichtig für die Behandlung von Krebskranken. Ich rate allen Patienten: trinken Sie den Pilztee täglich, auch wenn es nur ein Glas ist. Er hilft bei vielen Krankheiten.“ Dr. Veronika Carstens)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha – ein Jungbrunnen?
Ewige Jugend und Vitalität – wer kann sich davon distanzieren, diesen Wunsch zumindest im Geheimen hin und wieder zu verspüren? Unsere Gesellschaft ist diesbezüglich geprägt von Leitbildern und Erwartungen, die nicht zu erfüllen sind; nichtsdestotrotz liegt es in unserer Hand, uns über eine gesunde Ernährung und Lebensweise Vitalität und Jugend bis ins hohe Alter erhalten zu können. Die Menschen altern zusehends immer schneller; dies ist in erster Linie den veränderten Umweltbedingungen (Gifte in der Luft, in Lebensmitteln, in der Kleidung usw.), dem neuzeitlichen Stress und falschen, säurebildenden Ernährungsgewohnheiten zuzuschreiben.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha – ein Jungbrunnen?  
Während wir persönlich nur sehr wenig gegen Umweltbelastung und Gifte um uns herum unternehmen können, sind wir es unserer Gesundheit schuldig, diese auf uns immer stärker einwirkenden Giftstoffe mithilfe bestimmter Nahrungsergänzungsmittel und Naturstoffe in unserem Körper zu neutralisieren und aus ihm auszuschwemmen.
Wie wir bereits gelesen haben, verfügt Kombucha mit ihrer Glucuronsäure über die außerordentliche Fähigkeit, über 200 Giftstoffe gleichzeitig zu neutralisieren. Des Weiteren sorgt die rechtsdrehende Milchsäure dafür, dass unser Körper entsäuert und entschlackt wird.
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha – ein Jungbrunnen?  
Ferner ist die Glucuronsäure am Aufbau von Säuren beteiligt, die für das Bindegewebe enorm wichtig sind, wie die Hyaluronsäure. Diese ist ein wichtiger Bestandteil des Bindegewebes und macht 55 % der Hautsubstanz aus, was zu einer spür- und sichtbaren Elastizität der Haut beiträgt und selbst tiefere Falten mit der Zeit verschwinden lassen kann.
Die vielen Vitamine und Enzyme unterstützen den Entgiftungs- und Verjüngungsvorgang in optimaler Weise; so enthält Kombucha pro Liter ca. 1000 mg Vitamin C, welches für die Kollagen- und Elastinsynthese unseres Bindegewebes, so auch der Haut, zuständig ist.
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Zucker in Kombucha
„So viel Zucker? Kann das denn gesund sein?“ So könnte manch ein gesundheitsbewusster Mensch denken ...
Keine Sorge, der Zucker dient dem Kombucha-Pilz lediglich als Nahrung und wird von diesem während der Gärung verwertet und in gesundheitlich wertvolle Substanzen umgewandelt. Ist der Kombucha-Tee fertig, beinhaltet er nicht mehr Zucker als Fruchtsäfte, häufig noch weniger.
Die Empfehlungen reichen von 60–100 g Zucker pro Liter Kombucha-Tee. Dies unterliegt den individuellen Süßungsgewohnheiten; generell reichen aber 70 g aus. Für einen erfolgreichen Ansatz empfiehlt sich Rohrohrzucker, aber auch normaler, weißer Haushaltszucker kann verwendet werden. Fruchtzucker hingegen ist nicht geeignet, und mit Honig gelingt der Ansatz auch eher seltener. 
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Ist der selbstgemachte Kombucha-Tee mit dem im Handel erhältlichen zu vergleichen ?
Aus vielen Gesichtspunkten ist er dies nicht! Zunächst ist der im Handel erhältliche Kombucha-Tee mit ca. 5 EUR pro Liter sehr teuer, während man mit dem selbst gemachten Kombucha-Tee kaum Kosten hat. Des Weiteren ist das im Handel zu erwerbende Kombucha-Getränk frei von Wirkungen; dies deshalb, weil es aus Haltbarkeitsgründen pasteurisiert ist. Dies hat zur Folge, dass die gesundheitsförderlichen Bestandteile (Hefe und Bakterienkulturen) der Kombucha abgetötet werden.
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Laetril (Vitamin B17) – ein Naturheilmittel gegen Krebs?

Völlig unnötig stellt die Erkrankung „Krebs“ bis zum heutigen Tag eine Schreckensgestalt sondergleichen dar, dies mit steigender Tendenz. So erkrankt mittlerweile jeder 3te Mensch an Krebs, jeder 4te verstirbt daran. Die Zukunftsaussichten sehen dabei alles andere als rosig aus, und so rechnet die Weltgesundheitsorganisation (WHO) mit einem Anstieg von 70% an Neuerkrankungen in den kommenden Jahren..!

Eine Geißel der modernen Menschheit, die es in dieser Form nicht mehr geben müsste, würde die Schulmedizin im Sinne eines komplementären Ansatzes endlich mit der alternativen Heilkunde kooperieren und diese dabei zu einem gleichberechtigten Partner machen.

Die Interessen der mächtigen „Big Pharma“ und der etablierten Ärzteschaft kollidieren jedoch mit diesem Gedanken, da Natursubstanzen nicht patentierbar sind und [...]
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Laetril (Vitamin B17) – ein Naturheilmittel gegen Krebs?
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Laetril (Vitamin B17) – ein Naturheilmittel gegen Krebs?

Zu diesen äußerst effektiven, weitestgehend verheimlichten und seinerzeit aufs Übelste bekämpften Natursubstanzen zählt ohne Frage Laetril, ein Wirkstoff gewonnen aus den bitteren Aprikosenkernen, auch unter dem Synonym „Vitamin B17“ bekannt. Laetril, Amygdalin, Vitamin B17 – drei Begriffe, die das Gleiche beschreiben,

nämlich den wohl umstrittensten, am gründlichsten erforschten und am meisten bekämpftesten, natürlichen Wirkstoff in der Geschichte der Medizin – gewonnen aus bitteren Aprikosenkernen! Keine alternative Behandlungsform gegen Krebs wurde jemals intensiver abgehandelt. Vitamin B 17 ist mehr als jeder andere Wirkstoff: Es ist der Inbegriff der wissenschaftlichen und philosophischen Kontroverse zwischen den Anhängern der alternativen Krebstherapien und den Angehörigen des medizinischen Establishments.
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Laetril (Vitamin B17) – ein Naturheilmittel gegen Krebs?

In den folgenden Kapiteln erfahren Sie die gesamte Geschichte von Vitamin B17, die Hintergründe einer unglaublichen Verschwörung, Sie lesen über objektive Fakten von beiden Seiten, Fakten, die für jeden Menschen, auch den gesunden, von Interesse sein könnten angesichts der Tatsache, dass statistisch gesehen jeder dritte Mensch 748 in Deutschland und den Industrienationen bereits an Krebs erkrankt und laut dem Statistischen Bundesamt in Wiesbaden jeder vierte Deutsche daran verstirbt 749 – Tendenz übrigens steigend! Bilden Sie sich selbst Ihr Urteil über Vitamin B17!
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Geschichte des Vitamin B17 bzw. Laetril, Amygdalin

Nachdem mehrere vom NCI (National Cancer Institute – Nationales Krebsinstitut in den USA) in Auftrag gegebene Studien zu Vitamin B17 (Laetril) positiv verlaufen sind, entschloss man sich zu einer längeren Testreihe  am renommiertesten Krebsforschungszentrum der Welt, dem Memorial Sloan- Kettering unter der Leitung von Dr. Sugiura. Der mittlerweile verstorbene Dr. Sugiura galt mit 60 Jahren Berufserfahrung zum damaligen Zeitpunkt als Koryphäe auf dem Gebiet der Forschung. Wäre es um die reine Wahrheit gegangen, so wäre Dr. Sugiura für diesen Job weltweit der geeignetste Mann gewesen; darum aber ging es ganz und gar nicht und so hat Sloan-Kettering die Rechnung ohne Dr. Sugiura gemacht.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Als Ergebnis der Studien berichtete Dr. Sugiura über folgende fünf Erkenntnisse:
1) Vitamin B 17 (Laetril, Amygdalin) verhindert die Metastasenbildung bei Mäusen.
2) Laetril wirkt auf kleine Tumore wachstumshemmend.
3) Laetril (Vitamin B17) wirkt vorbeugend gegen Krebs.
4) Der Allgemeinzustand besserte sich.
5) Vitamin B17 (Laetril) lindert den Krebsschmerz.

Die Zusammenfassung der Effekte von Amygdalin bei Mäusen mit primären Brusttumoren im Bericht des Sloan-Kettering vom 13. Juni 1973 liest sich wie folgt:

„Die Ergebnisse zeigen deutlich, dass Amygdalin bei Mäusen mit primären Brusttumoren eine signifikante Hemmung des Auftretens von Lungenmetastasen bewirkt und die Hemmung des Primärtumorwachstums signifikant verstärkt... Laetril schien auch das Auftreten neuer Tumore leicht einzuschränken... Generell ist stets eine Verbesserung im Gesundheitszustand und Aussehen der behandelten Tiere im Vergleich zur Kontrollgruppe zu beobachten ...“
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Dr. Moss befand sich in einer regelrechten Zwickmühle, denn er war auf dem besten Weg, eine ordentliche Karriere am Sloan- Kettering hinzulegen, erhielt regelmäßige Lohnerhöhungen und hatte eine Familie zu ernähren. Doch hätte er nie wieder in den Spiegel schauen können, wenn er der Öffentlichkeit diese bizarre, menschenfeindliche Lüge vorenthalten hätte.

Und so entschloss er sich kurzerhand, am 17.11.1977 im Hilton-Hotel vor zahlreichen eingeladenen Journalisten eine eigene Pressekonferenz abzuhalten und die Lüge am Sloan-Kettering kund zu tun! Erwartungsgemäß wurde er am nächsten Tag gefeuert und befasst sich seitdem sehr erfolgreich mit der Erkundung alternativer Krebstherapien.

Diese Pressekonferenz hat eine regelrechte Lawine an Interesse für das Vitamin B17 ausgelöst, das mit Milliardeneinsatz im Auftrag der „Big Pharma“ bekämpft wurde. Diese Kampagne reichte bis in die obersten Etagen der Regierung und der berühmte Arzt [...] 

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Um es aber kurz zu halten: Viele Menschen wurden in den USA verhaftet und viele Ärzte verloren ihre Praxiszulassung. Vitamin B17 wurde kurzerhand für giftig und nutzlos erklärt, die Behandlung verboten, und selbst der Handel mit den bitteren Aprikosenkernen wurde in USA und Kanada untersagt!

Dr. Ralph Moss hat übrigens sein Leben seitdem der Erkundung von alternativen Krebstherapien gewidmet, zählt zu den renommiertesten medizinischen Autoren und hat als anerkannter Experte und Berater zwölf Bücher zum Thema „Krebs“ geschrieben und drei Dokumentarfilme gedreht.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Verfügen aber diese kostengünstigen (nicht patentierbaren) Naturstoffe, wie in diesem Fall Laetril aus bitteren Aprikosenkernen, über ein günstiges „Nutzen- Risiko-Profil“, wirken sie also letztendlich, ohne unserer Gesundheit auch nur annähernd zu schaden, so stehen diese ab dem Zeitpunkt der Markteinführung in direkter Konkurrenz zu den teuren Medikamenten der Pharmaindustrie, die zudem nicht selten mit erheblichen Nebenwirkungen einhergehen. Damit werden sie automatisch zur Zielscheibe der mächtigen „Big Pharma“, die skrupellos keine Mühen und Gelder scheut, um dem Konkurrenten, der besser, sicherer und kostengünstiger ist, den Garaus zu machen!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Es ist übrigens durchgesickert, dass Pharmaunternehmen sehr aufwendige Versuche unternommen haben, um Vitamin B17 synthetisch (künstlich) zu erzeugen, denn nur dies würde es ermöglichen, es zu patentieren. Sämtliche Versuche sind jedoch kläglich gescheitert, was zeitgleich eine Kampfansage gegen das Vitamin B17 bedeutete!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
FAZIT

Nicht patentierbare Stoffe (Naturstoffe) bringen kein Geld, ganz im Gegenteil: Sie sind eine Bedrohung für ein Milliardengeschäft! Die Krebserkrankung macht aber ca. 10 % des Gesamtumsatzes der

Pharmaindustrie aus, das sind ca. 40 Milliarden Dollar im Jahr! Dass die mächtige Pharmaindustrie hierauf nicht verzichten möchte, versteht sich von selbst.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Zusammenfassend lässt sich also Folgendes sagen:

Laetril wirkt sehr selektiv ausschließlich auf die Krebszellen ein, indem es in der Krebszelle das giftige Hydrogenzyanid-Molekül in einer 100- bis 3600- fachen Konzentration freisetzt (im Vergleich zu der Freisetzung in einer gesunden Zelle). Gleichzeitig verfügt die Krebszelle nur unzureichend über das Enzym Rhodanese, das in der gesunden Zelle zahlreich vorkommt und die ankommenden Gifte augenblicklich zum harmlosen Enzym „Rhodanid“ neutralisiert!

Im Übrigen ist das Benzaldehyd-Molekül für die schmerzstillende Wirkung von Laetril gegen den Krebsschmerz verantwortlich.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Natürliche Chemotherapie – ohne Nebenwirkungen!

Ähnlich wie z.B. der Wirkstoff Curcumin aus dem indischen Kurkuma- Gewürz (siehe entsprechendes Kapitel) und zahlreiche andere in diesem Buch erwähnten Substanzen, verfügt Laetril über regelrechte zytotoxische und zytostatische Wirkung...

Zur Erklärung, bedeutet „zytotoxisch“ übersetzt aus dem Griechischen so viel wie „zellzerstörend“ und „zytostatisch“ bedeutet „Zellwachstum hemmend“. Exakt also diejenigen Mechanismen, die wir aus der Chemotherapie kennen, allerdings mit dem einen wesentlichen Unterschied:

die Mutter Natur sorgt für uns, und will uns nicht schaden! So beziehen sich diese äußerst effizienten, zellzerstörerischen und zellwachstumshemmenden Eigenschaften ausschließlich auf die bösartigen Zellen, die Krebszelle – die gesunden Zellen werden dabei gänzlich verschont!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Dosierung von Vitamin B17 zu Präventionszwecken (Krebs vorbeugend!) 

Gemäß dem Autor des Bestsellers „World Without Cancer“, G. Edward, empfiehlt Dr. Krebs, der Entdecker von Laetril, zu Präventionszwecken ein Minimum von 50 mg Laetril für normale, gesunde Erwachsene.

Der Durchschnittswert von Laetril in einem bitteren Aprikosenkern liegt bei etwa 4–5 mg Laetril; dieser Wert kann bis um den Faktor 6 variieren!

Die zu Präventionszwecken zumeist genannte Anzahl an bitteren Aprikosenkernen pro Tag liegt bei sieben, in den allermeisten Fällen zehn Kernen, was sich mit der Empfehlung ungefähr deckt. Zahlreichen Quellen zufolge wurde bislang kein einziger Fall dokumentiert, bei dem jemand, der bittere Aprikosenkerne zur Vorbeugung von Krebs zu sich nahm, jemals an Krebs erkrankt wäre – ein bemerkenswerter Punkt angesichts der Tatsache, dass bittere Aprikosenkerne seit Jahrzehnten weltweit von Abermillionen von [...]

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Dosierung von Laetril zur Krebsbehandlung
Im Falle von Krebs wäre die übliche Dosis etwa 6 g Laetril intravenös gespritzt, über einen Zeitraum von in der Regel drei Wochen. Eine solche intensive Therapie sollte man selbstverständlich niemals im Alleingang versuchen, sondern immer innerhalb einer ganzheitlichen metabolischen Therapie, angeleitet und überwacht von einem auf diesem Gebiet erfahrenen Arzt!
Dies deshalb, weil laut Laetril-Experten das massenhafte Absterben der Krebszellen Gifte erzeugt und deren Ausscheidung aus dem Organismus zu einer Vergiftung führen könne; das Laetril wird daher begleitend in Verbindung mit mehreren anderen Wirkstoffen verabreicht, unter anderem von hohen intravenösen Dosen an Vitamin C.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Was ist Vitamin B17 (Laetril, Amygdalin)?

Vitamin B17, auch Laetril oder Amygdalin genannt, wird von alternativen Krebsmedizinern und Laetril-Forschern als „natürliches Chemotherapeutikum“ bezeichnet, das in über 1200 Pflanzen vorkommt. Das größte Vorkommen jedoch weisen bittere Aprikosenkerne auf; weiterhin findet sich Laetril in Äpfeln, Pflaumen und Pfirsichen.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Wie funktioniert Vitamin B17 (Laetril, Amygdalin)?

Laut seinem Entdecker Dr. Krebs wirkt es sehr selektiv und ausschließlich auf die Krebszellen ein, indem es dort in hoher Konzentration das giftige Hydrogenzyanid-Molekül freisetzt; gleichzeitig wird die gesunde Zelle durch das Enzym Rhodanese geschützt, wobei die ankommenden Gifte augenblicklich zu dem harmlosen Enzym Rhodanid neutralisiert werden.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Wirken alle Aprikosenkerne oder lediglich die bitteren?

Es handelt sich ausschließlich um die bitteren Aprikosenkerne, die den Wirkstoff Vitamin B17 (Laetril, Amygdalin) beinhalten – alle anderen Aprikosenkerne beinhalten wenig bis gar nichts davon und sind daher wirkungslos!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Reicht Vitamin B-17 als Krebstherapie?

Auf keinen Fall! Viele Erfolgsgeschichten von ehemals Krebserkrankten, die allein mit den bitteren Aprikosenkernen (Vitamin B17) ihren Krebs bekämpft haben, könnten dazu verleiten, aber eines sollte dennoch klar sein: Während Vitamin B17 wahrscheinlich bei jeder Krebsart eine positive Wirkung zeigt, reagieren jeder Mensch und jede Krebsart möglicherweise unterschiedlich darauf!
Es wäre in weitaus den meisten Fällen fahrlässig, bei einer lebensbedrohenden Erkrankung wie dem Krebs zu pokern, sich mit einigen Pfund bitterer Aprikosenkerne zu bewaffnen und im Alleingang loszulegen! Vielmehr sollte das Vitamin B17 begleitend innerhalb einer ganzheitlichen Krebstherapie erfolgen, die von Laetril-Ärzten angeleitet und begleitet wird!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Des Weiteren sollte das Vitamin B-17 (Laetril) immer in Verbindung mit Enzymen aus der Ananas- und der Papaya-Frucht (Bromelain, Papain) eingenommen werden. Diese helfen, den „Schutzpanzer“ des Tumors zu knacken, sodass ein besseres Eindringen durch Laetril in die Krebszelle ermöglicht wird.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Ist Laetril, Amygdalin (Vitamin B17) legal oder ist es verboten?

Zum jetzigen Zeitpunkt sind Aprikosenkerne und damit Vitamin B17 als Nahrungsergänzungsmittel in der EU zugelassen und damit erlaubt! In den USA ist Laetril eingeschränkt erlaubt, in Kalifornien beispielsweise ist der Einsatz von Laetril/Amygdalin (Vitamin B17) gegen Krebs beim Menschen unter bestimmten Umständen untersagt.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Was ist der Unterschied zwischen Aprikosenkernen und B17-Tabletten oder Infusionen? Und was ist besser zur Vorbeugung von Krebs und im Falle von akutem Krebs?

Die Rohform des Vitamin B17 sind die bitteren Aprikosenkerne. Laut Dr. Krebs sind diese zu Präventionszwecken besser geeignet als Tabletten, schon deshalb, weil sie Unmengen von sekundären Pflanzenstoffen enthalten, die ebenfalls gesund sind.

Wenn Sie der Nachgeschmack (ähnlich Marzipan) der Aprikosenkerne nicht stört und Sie keine Probleme mit dem Kauen haben, sollten Sie zu Präventionszwecken auf die bitteren Aprikosenkerne zurückgreifen. Für alle anderen sind die Tabletten zum Zwecke [...]

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Funktioniert Vitamin B17 bei jeder Krebsart?

Nach Dr. Krebs ja! Seiner Aussage nach haben Krebszellen exakt die gleichen Eigenschaften und würden auf die gleiche Art und Weise von Laetril isoliert zerstört.

Wie aber bereits erwähnt, wäre es unserer Meinung nach unverantwortlich, sich ausschließlich darauf zu verlassen! Hingegen sollte man eine lebensbedrohliche Erkrankung wie den Krebs über das beschriebene Prinzip des „goldenen Dreiecks der Krebsheilung“ ganzheitlich angehen. (Siehe mein Krebs-Buch!)

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Kann Vitamin B17 noch nach Chemo und Bestrahlung helfen, wenn beides versagt hat?

Laut Dr. Krebs und vielen anderen Therapeuten kann es selbst dann noch helfen, wenn Chemotherapie und Bestrahlung versagt haben. Man sollte dabei jedoch nicht außer Acht lassen, dass nicht selten gerade die Chemotherapie und die Bestrahlung den eigentlichen Schaden anrichten, der nicht zuletzt häufig auch zum Tode führt. Jeder Mensch ist zu jedem Zeitpunkt ein Kandidat für die metabolische Krebsbehandlung mit Laetril!

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Hierzulande noch verhältnismäßig unbekannt, erfreut sich der Lapacho-Tee im gesamten Südamerika großer Popularität und gilt dort sowohl als Naturheilmittel gegen unzählige Leiden als auch als reiner Genusstee, den man in Gesellschaft seiner Liebsten tagtäglich zu sich nimmt.

Angesichts der stetig wachsenden, durchaus begründeten Skepsis gegenüber klassischen Medikamenten und des steigenden Interesses für gesunde Alternativen aus der Natur ist es lediglich eine Frage der Zeit, bis der Lapacho- Tee auch in unserem Kulturkreis Einzug hält.

Ein verstärktes Interesse wäre angesichts des weiten Wirkungsspektrums dabei mehr als nachvollziehbar, zumal der Lapacho-Tee seine breit gefächerte Wirkung gegen zahlreiche Erkrankungen und Missstände, im Gegensatz zu klassischen Medikamenten, völlig nebenwirkungsfrei entfaltet.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Lapacho – das Gewächs und die Tradition
Ohne Frage reiht sich der Lapacho-Tee, gewonnen aus dem Lapacho-Baum (wissenschaftliche Bezeichnung „Tabebuia avellanedeae“), der von den Indianern respektvoll als „Baum des Lebens“ oder „Beschützer der Lebenskraft“ bezeichnet wird, in die obere Liga der Heilkräuter ein. Seit Jahrhunderten als Heil- und Genusstee regelrecht verehrt, blickt er auf eine sehr lange Tradition innerhalb der indianischen Naturvölker zurück.

Lapacho stärkt das Immunsystem, entschlackt, wirkt Entzündungen entgegen und unterstützt einen geruhsamen Schlaf. Darüber hinaus bewährt er sich bei Erkrankungen von A wie Arthritis über N wie Neurodermitis bis hin zu Z wie Zahnfleischentzündugen. Und selbst bei ernsteren Erkrankungen wie Krebs konnte der Lapacho-Tee in Studien eine positive Wirkung aufweisen.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Der Name Lapacho bezeichnet mehrere, bis zu 35 m hochwachsende Baumarten in den Regenwäldern von Brasilien, Argentinien und Paraguay (darunter Handroanthus impetiginosus, Handroanthus serratifolius, Handroanthus heptaphyllus), die der Familie der Trompetenbaumgewächse zuzuordnen sind und in der Blütezeit zwischen Mai und August wunderschöne rote oder violette glockenförmige Blüten tragen.

Doch nicht etwa die Blüten, sondern einzig und allein die Rinde der Lapacho- Bäume steht im Fokus des Interesses. Bereits die Inka verwendeten die wässrigen Extrakte der Lapacho-Rinde zur Heilung und Linderung kleiner Wehwehchen bis hin zu ernsthaften Erkrankungen. Hierzu wird die Innenrinde (die sogenannte Bastschicht) des ansonsten sehr harten Holzes zum entsprechenden Extrakt verarbeitet. Da die Rinde nach der Ernte schnell wieder nachwächst, besteht kein Grund zur Sorge um die Gesundheit des Baumes.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Der Geschmack des Lapacho-Tees ist abhängig von der Ziehzeit und dem Gefäß, in dem der Tee gekocht und aufbewahrt wird. In der Regel ähnelt er dem des Rotbuschtees und hat einen leichten Vanille-Nachgeschmack. Lässt man den Lapacho-Tee länger ziehen, erhält er ein herb-würziges Aroma.

Über welche Wirkstoffe verfügt der Lapacho-Tee?

Der Lapacho-Tee verfügt über eine Vielzahl optimal aufeinander abgestimmter Wirkstoffe in Form von Mineralien, Spurenelementen, Saponinen und anderen sekundären Pflanzenstoffen, die synergetisch ihre gesundheitlichen Vorzüge entfalten.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Es ist exakt die wundersame Komposition all dieser Inhaltsstoffe in einer Perfektion, die der Mensch nicht nachzuahmen vermag, die dem Lapacho-Tee seine umfassende Heilkraft verleiht.

Hierzu gehören:

- Calcium
- Eisen
- Kalium
- Kupfer
- Magnesium
- Mangan
- Natrium
- Jod
- Selen
- Chrom
- Gold
- Barium
- Bor
- Kobalt
- Phosphor
- Strontium
- Saponine
- Silicium
- Lapachol
- Xylodion
- Veratrumaldehyd
- Veratrumsäure
- Zink

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Die Beschaffenheit und Eigenschaft der Lapacho-Rinde erhöht die Sauerstoffversorgung
Es ist die rote innere Rinde des Lapachobaumes, die den Sauerstoff in einer besonderen und für den Menschen sehr gut verfügbaren und wertvollen Form zu binden vermag. So versorgt der Lapacho nicht nur die gesunden Körperzellen mit viel Sauerstoff, sondern eliminiert ebenfalls erfolgreich Bakterien, Viren und Pilze und vermag sogar Arteriosklerose rückgängig zu machen.
Der sauerstoffanreichernde Effekt wird über die Inhaltsstoffe Calcium und Eisen verstärkt, die bekanntlich am Sauerstofftransport beteiligt sind.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Lapachol als vielseitiger Wirkstoff
Der im Lapacho vorkommende Wirkstoff „Lapachol“ ist eines von zwölf im Lapacho-Tee enthaltenen Chinone, die nachgewiesenermaßen eine antibiotische Wirkung entfalten. Lapachol wirkt darüber hinaus antiviral, entzündungshemmend, schmerzlindernd und gegen Geschwüre. Auch verfügt es über tumorhemmende Eigenschaften und kann sogar Malaria erfolgreich behandeln.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Anregender, vitalisierender Effekt von Lapachol
Ebenfalls erwähnenswert ist der anregende Effekt der Naphthochinon- verbindungen „Lapachol“ beziehungsweise „Lapachon“.

Immunstärkende Effekte des Lapachol
Des Weiteren aktiviert der im Lapacho enthaltene Wirkstoff „Lapachol“ die Immunzellen und die Lymphozyten sowie die Granulozyten und stärkt auf diese Weise unser Immunsystem.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Der Lapacho enthält viele Saponine. Diese wirken sich schützend gegen jede Art von Pilzen aus und können sogar das Krebswachstum hemmen. Letzteres hat unter japanischen Forschern dazu geführt, dass sie spezielle Lapacho- Saponine als Krebsheilmittel patentieren ließen. 764 In Dosen von 1500 mg konnte das aus dem Lapacho-Tee isolierte Lapachol eine deutliche antitumorale Wirkung aufzeigen.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Selen als zellschützendes Antioxidans und Entgiftungswirkstoff

Ein weiterer wichtiger Bestandteil des Lapacho-Tees ist das Antioxidans Selen, das über die Neutralisierung der freien Radikale unsere Zellen vor Zerstörung schützt. Wie wichtig diese Eigenschaft ist, wird deutlich, wenn man bedenkt, dass die meisten Krankheiten sowie Alterungsprozesse auf die schädliche Einwirkung freier Radikale zurückzuführen sind.
Des Weiteren vermag das Selen den menschlichen Körper zu entgiften und von Schwermetallen wie etwa Cadmium zu befreien.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Die Indianer nutzten und nutzen bis heute den Lapacho-Tee als einen Gesundheitsallrounder, aber auch als reinen Genusstee. Neben seiner schmerzlindernden Wirkung ist es vor allem seine Eigenschaft, die Anzahl der roten Blutkörperchen deutlich zu steigern, die ihn für uns Menschen so interessant macht.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Sauerstoff bedeutet bekanntlich Leben. Wenn man sich nun vergegenwärtigt, dass die Aufgabe der roten Blutkörperchen darin besteht, den Sauerstoff zu transportieren und der Lapacho-Tee nachweislich eine signifikante Vermehrung der roten Blutkörperchen bewerkstelligt, wird deutlich, wie wertvoll allein diese Eigenschaft des Lapacho bereits für unsere Gesundheit und unser Wohlbefinden sein kann und wie umfassend er einen Einfluss auf die Heilung etlicher Erkrankungen zu nehmen vermag.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Es ist die rote innere Rinde des Lapacho-Baumes, die große Mengen an Sauerstoff in einer für den menschlichen Organismus besonders wertvollen und leicht verfügbaren Form bindet. Diese Form des gebundenen Sauerstoffs vermag einerseits die Körperzellen optimal zu versorgen, andererseits ganze Bakterienstämme, Viren, Pilze und Protozoen abzutöten und schädliche Ablagerungen (Arteriosklerose) von unseren Blutgefäßen zu entfernen, ja sogar die Flexibilität unserer Arterien sogar wieder zu steigern.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Für große Aufregung sorgte in diesem Zusammenhang ein Zeitungsinterview mit Prof. Walter Accorsi vom Städtischen Hospital in Santo André, der darin erklärte, dass ihm gleich zu Beginn seiner Experimente am Lapacho diese beiden besagten Eigenschaften auffielen: die schmerzstillende und sauerstoffanreichende Wirkung. Selbst bei Krebspatienten im fortgeschrittenen Stadium, die unter unerträglichen Schmerzen litten, brachte der Lapacho diese „zum Verschwinden“. Parallel dazu sorgte die Behandlung mit Lapacho dafür, dass sich die Zahl der roten Blutkörperchen in kurzer Zeit vervielfachte, was zur Folge hatte, dass der Körper viel effizienter mit dem lebenswichtigen Sauerstoff versorgt wurde.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Sehr bezeichnend ist dabei die Aussage von Professor Accorsi zum breitgefächerten Heilungspotenzial des Lapacho:

„Bereits bei den ersten Experimenten, die ich mit dem Mittel unternahm, entdeckte ich zwei Faktoren, die mir vor allem in Hinblick auf die Krebsbehandlung bedeutsam erschienen: einerseits lindert der Lapacho die Schmerzen, die durch die Krankheit ausgelöst werden, andererseits erhöht sich auch die Zahl der roten Blutkörperchen. Unser Erstaunen wurde immer größer! Die Lapachorinde schien buchstäblich alles zu heilen – Geschwüre, Diabetes, Rheuma – einfach alles. Dabei war vor allem die Geschwindigkeit, mit der die Heilung erfolgte, beeindruckend. So waren die meisten Patienten innerhalb eines Monats beschwerdefrei.“
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Bevor wir uns der spezifischen Wirkung des Lapacho-Tees widmen, erscheint
es als sehr sinnig, sich zunächst dessen allgemeine Wirkung anzuschauen.
Der Lapacho-Tee wirkt im Allgemeinen:

- sauerstoffanreichend,
- die Anzahl der roten Blutzellen steigernd,
- blutreinigend,
- entzündungshemmend,
- antibakteriell,
- antitumoral,
- antiviral,
- antifungal (pilztötend),
- antioxidativ,
- das Immunsystem kräftigend,
- blutdruckregulierend,
- basenbildend,
- schmerzlindernd,
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Bevor wir uns der spezifischen Wirkung des Lapacho-Tees widmen, erscheint
es als sehr sinnig, sich zunächst dessen allgemeine Wirkung anzuschauen.
Der Lapacho-Tee wirkt im Allgemeinen:

- entgiftend,
- entschlackend,
- fiebersenkend,
- wundheilend,
- hautreinigend,
- schleimhautberuhigend,
- tonisierend,
- revitalisierend,
- schweißtreibend,
- harntreibend,
- beruhigend,
- verdauungsförderlich.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Sauerstoffanreichernde Wirkung
Die erstaunliche, sauerstoffanreichernde Wirkung des Lapacho-Tees belebt die Körperzellen und vernichtet in dieser besonderen, gebundenen Form sehr effektiv Bakterien, Protozoen, Pilze und Viren. Die Arteriosklerose (Gefäßverkalkung) wird gelöst, die Blutgefäße werden wieder flexibel.

Entzündungshemmende Wirkung
Aufgrund seiner entzündungshemmenden Wirkung wird der Lapacho-Tee seit Hunderten von Jahren von Indianervölkern bei entzündlichen Erkrankungen mit Erfolg angewandt. Es kommt nicht nur zur Linderung, vielmehr werden sogar komplette Heilungen von schweren entzündlichen Erkrankungen wie Arthritis berichtet.

Antibakterielle und antivirale Wirkung
Der Lapacho-Tee wirkt außerordentlich antibiotisch und zugleich antiviral, weswegen er seit Jahrhunderten als natürliches Antibiotikum angewandt wird und sich selbst bei Herpes und HIV-Viren sowie Malaria bestens bewährt hat. Besonders der Inhaltsstoff Lapachol sowie weitere zwölf bislang erforschte Chinone verfügen über außerordentliche antibiotische Eigenschaften.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Antifungale (pilztötende) Wirkung
Der Lapacho-Tee verfügt über eine antifungale (pilztötende) Wirkung, weswegen er traditionell sogar bei hartnäckigen Pilzarten wie Candida albicans erfolgreich Anwendung findet.

Antioxidative Wirkung
Der Lapacho-Tee bindet über die enthaltenen Chinone freie Radikale und wirkt sich auf diese Weise antioxidativ aus. Diese Erkenntnis kann man nicht hoch genug schätzen, bedenkt man, dass jede einzelne unserer Körperzellen täglich bis zu 10 000 x von freien Radikalen angegriffen wird und diese die Schuld an den meisten Krankheiten sowie der Zellalterung tragen.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Entgiftende Wirkung
Der Lapacho-Tee wirkt sich harmonisierend auf die Verdauungsorgane aus, regt die Leberfunktion und die Nierenarbeit an und hilft auf diese Weise dabei, den Körper zu entgiften.

Wundheilende Wirkung von Lapacho
Der Lapacho-Tee wird traditionell seit Jahrhunderten von Indianerstämmen erfolgreich zur Beschleunigung der Wundheilung benutzt, was auf den hohen Gehalt von Tannin sowie Calciumoxalat zurückgeführt wird. Hier macht man sich die adstringierende Wirkung des Lapacho zunutze. Damit ist eine Fähigkeit gemeint, die Schleimhäute und Haut bei Blutungen zusammenzuziehen, was eine beschleunigte Wundheilung ermöglicht.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung bei Neurodermitis

Bei allergischen Hautreizungen, wie etwa Neurodermitis, ist es grundlegend wichtig, das Immunsystem zu stärken und den Organismus zu entgiften. Dies vermag der Lapacho-Tee bekanntlich sehr gut; darüber hinaus wirkt er entzündungshemmend und kann so eine echte Hilfe bei Neurodermitis darstellen. Wirkung bei Ödemen  Auch bei Ödemen gibt es zahlreiche Berichte von Patienten, denen es selbst in schwersten Fällen nach wenigen Wochen bereits besser erging, unter anderem dokumentiert durch die Sao Paulo Klinik in Brasilien.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung bei Zahnfleischentzündungen
Der Lapacho-Tee eignet sich aufgrund seiner regulierenden, entzündungshemmenden, adstringierenden und desinfizierenden Wirkung bestens zur Behandlung von Zahnfleischentzündungen und zur Unterstützung der Mundflora.

`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin – In welchen Nahrungsmitteln kommt es vor?
Wie wir weiter oben lesen konnten, können trotz optimaler Bedingungen lediglich 10 % des eigentlichen L-Carnitinbedarfs durch Eigensynthese des Körpers bewerkstelligt werden. Dies ist entschieden zu wenig, um von den Vorzügen des L-Carnitins zu profitieren. Über eine hierauf ausgerichtete Lebensmittelauswahl kann man versuchen, des Problems Herr zu werden. Die Realität sieht aber so aus, dass wir schätzungsweise pro Tag durchschnittlich nur 100–300 mg L-Carnitin aufnehmen; um auf 1000 mg zu kommen, müssten wir täglich rund 750 g Fleisch essen. Fleisch spielt in der L-Carnitin- Versorgung deshalb eine so wichtige Rolle, weil L-Carnitin aus den beiden essenziellen Aminosäuren „Lysin“ und „Methionin“ hergestellt wird, Aminosäuren, die fast ausschließlich im Fleisch vorkommen.
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Allgemeine Wirkung

L-Carnitin nimmt vor allem einen positiven Einfluss auf unsere Skelettmuskulatur, das Herzkreislaufsystem sowie das Immunsystem und wirkt sich auf unseren Organismus folgendermaßen aus:

- Kraftsteigernd,
- die Fettverbrennung unterstützend,
- den Energiestoffwechsel unterstützend,
- die Muskulatur aufbauend,
- Prophylaktisch gegen Muskelverletzungen,
- vorbeugend gegen Muskelkater,
- muskelregenerativ,
- die Erholungsphasen verkürzend,
- Nervensystem schützend,
- die Herzleistung steigernd,
- die Durchblutung fördernd,
- während der Belastung die Herzfrequenz (Puls) senkend,
- entgiftend (toxische organische Substanzen werden aus dem Körper transportiert),
- antidepressiv,
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung auf das Herzkreislaufsystem
Der Herzmuskel ist auf die Energie aus den Fettsäuren angewiesen, um seiner Funktion intakt und gesund nachzukommen. Nur mit Carnitin aber können diese Fettsäuren vom Körper als Energielieferanten verwertet werden. L- Carnitin agiert dabei als Energieträger und ermöglicht es den Muskeln, dem Herzen sowie anderen Organen, die Fettsäuren als Energie zu verwerten. L- Carnitin stärkt die Herzmuskulatur und kann auf diese Weise Herzerkrankungen sowie einem Herzinfarkt vorbeugen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung auf die Blutgefäße
Durch die gefäßerweiternde Wirkung mittels des Einflusses auf die Endothel- sowie die glatten Muskelzellen unserer Blutgefäße ergeben sich aufgrund der damit gesteigerten Durchblutung zahlreiche Vorteile:
- Verbesserung der Herzdurchblutung,
- Senkung des Blutdrucks bei Hypertonikern,
- Reduktion der Herzfrequenz (Puls),
- Steigerung der Durchblutung der Skelettmuskulatur,
- Steigerung der Sauerstoffaufnahmefähigkeit der Skelettmuskulatur,
- Senkung des Laktatspiegels (Milchsäurespiegel während und nach anaerober Muskelbelastung),
- Reduktion der Muskelschäden (einschließlich Muskelkater-Symptome),
- Steigerung der Muskelkraft,
- Verbesserung der Hirndurchblutung,
- Reduktion von Kopfschmerzen,
- gesteigerte Wachheit,
- Steigerung der Konzentrationsfähigkeit,
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung auf die Muskulatur
Es ist kein Zufall, dass im Herzmuskel, in der Skelettmuskulatur sowie im Hirn besonders viel L-Carnitin vorzufinden ist. Es handelt sich dabei um Organe, die stark auf die Energieverwertung aus den Fettsäuren angewiesen sind – diese aber kann nur mithilfe von L-Carnitin optimal ablaufen. Die Muskulatur ermüdet nicht mehr so schnell, Muskelkater und selbst größeren Muskelschädigungen kann vorgebeugt werden, häufigere Trainingseinheiten werden ermöglicht und höhere Leistungssteigerungen werden erzielt. In Tierversuchen konnte eine intravenöse Verabreichung von L-Carnitin die Muskelkraft um bis zu 34 % erhöhen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung das Gehirn und das zentrale Nervensystem
L-Carnitin verbessert die kognitive Fähigkeit, es wirkt der Hirnalterung, Demenz und Alzheimer entgegen, es steigert die Konzentration und Aufnahmefähigkeit (Lernfähigkeit) und beschleunigt die Zellerneuerung der Hirnzellen. Im Gegensatz zu den meisten Antioxidantien vermag Acetyl-L- Carnitin die Blut-Hirn-Schranke zu passieren und hier die Bildung von Nerven-Wachstumsfaktor-Rezeptoren, sogenannten NGFR, einerseits zu fördern und andererseits diese selbst zu schützen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin auf das Immunsystem
Es verwundert nicht, dass die Immunzellen außerordentlich viel L-Carnitin beinhalten, denn L-Carnitin gilt als natürlicher Immunstimulator; es transportiert die langkettigen Fettsäuren für die ATP-Produktion direkt in die Mitochondrien hinein. L-Carnitin bietet einen optimalen Schutz für die Zellmembranen, die Abwehrzellen des Immunsystems werden aktiviert und in ihrer Funktion gestärkt. In Studien konnte Acetyl-L-Carnitin (ALC) die Aktivität der Lymphozyten erhöhen, die Makrophagenproduktion aufrechterhalten und den TSH-Spiegel erhöhen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Zusammenfassend hat L-Carnitin folgende Effekte auf unser Immunsystem:
- Steigerung der Produktion der Antikörper
- Erhöhung der TNF-Alpha-Ausschüttung
- Freisetzung von TNF-Alpha und Interleukinen
- Hemmung der Aggregation von Thrombozyten und Makrophagen
- Aktivierung der weißen Blutkörperchen
- Hemmung der Aggregation der Erythrozyten
- Immunstimulans bei Infektionserkrankungen wie zum Beispiel Tuberkulose
- Aktivierung der Makrophagen und Monozyten
- Stimulierung menschlicher T- und B-Lymphozyten
- Steigerung der Proliferation der Lymphozyten
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung auf das Hormonsystem
Im Tierversuch gelang es dem Acetyl-L-Carnitin, die Zirbeldrüse dazu anzuregen, wieder verstärkt das „Regenerationshormon“ Melatonin auszuschütten. Melatonin gilt in der Anti-Aging-Forschung als eines der wichtigsten Hormone, die nach Meinung vieler Wissenschaftler die physische Alterung aufhalten können. Darüber hinaus konnte Acetyl-L-Carnitin einen erhöhten Cortisol-Spiegel wieder normalisieren. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.nac,
        text: `
Wirkung von L-Carnitin bei Herzrhythmusstörungen
L-Carnitin wirkt Herzrhythmusstörungen antirhythmisch entgegen und verhilft auf diese Weise, Entgleisungen von Herzrhythmusstörungen bis zu Kammerflimmern zu verhindern. Wirkung von L-Carnitin bei Myocardiopathie Besonders Leistungssportler und Profisportler sind für Myocardiopathie anfällig; sie betrifft 80 % aller Fälle, in denen Sportler am Herzen erkrankt sind. L-Carnitin hat sich bestens bewährt, eine Erkrankung zu vermeiden und bei akuten Problemen die Überlebenschance zu erhöhen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin bei Lebererkrankungen
L-Carnitin hat sich bestens zum Schutz und zum Aufbau von Leberzellen bewährt und wird unter anderem aus diesem Grund bei Alkoholismus eingesetzt. Eine geschwächte, kranke Leber verliert das Potenzial, hinreichend L-Carnitin zu synthetisieren. Hier empfiehlt es sich daher aus mehreren Gründen, auf L-Carnitin-Nahrungsergänzungsmittel zurückzugreifen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin bei Krebs
L-Carnitin entfaltet seine Wirkung bei Krebs über mehrere Mechanismen: Zunächst stärkt es nachweislich unser Immunsystem, das stets eine primäre Rolle im Kampf gegen Krebs einnimmt. Des Weiteren wirkt es sich entgiftend aus, kann also bestimmte toxischen Substanzen aus dem Körper entfernen, die nicht selten als Verursacher der Tumorerkrankung fungieren. L-Carnitin kann aber noch mehr gegen Krebs ausrichten: Es kann die Nebenwirkungen einer Chemotherapie schmälern und die gesunden Zellen stärken. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin bei Muskelschwund
Wie wir noch im „L-Carnitin beim Sport“ lesen werden, wirkt L-Carnitin sowohl antikatabol (vor Muskelabbau schützend) als auch anabol, also muskelaufbauend. Damit der Körper aus den eigenen Reserven 1 g L-Carnitin herstellen kann, muss er rund 30 g Muskelmasse dafür abbauen. Eine zusätzliche Zufuhr von L-Carnitin wirkt sich also muskelschützend aus, was den antikatabolen Effekt erklärt. L-Carnitin verbessert dabei die Energieversorgung der Myofibrillen, ermöglicht höhere Belastungen und wirkt der vorzeitigen Ermüdung entgegen. Alles in allem erweist sich L-Carnitin als optimal, um gegen Muskelschwund anzuarbeiten. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin auf die Fruchtbarkeit
L-Carnitin empfiehlt sich auch zur Förderung der Kinderzeugung. Für Männer, die über zu wenig Spermien im Ejakulat verfügen oder deren Spermien nicht hinreichend aktiv sind, kann L-Carnitin eine echte Hilfe sein und die Fruchtbarkeit steigern. Studien konnten diesbezüglich einen positiven Effekt nach 3–6 Monaten regelmäßiger Einnahme von 1 g L-Carnitin/Tag nachweisen. Nennenswert ist in diesem Zusammenhang die Tatsache, dass Spermien große Mengen an Acetyl-L-Carnitin speichern und Acetyl-L-Carnitin die einzige Energieform ist, die den Spermien zur Befruchtung der weiblichen Eizelle dient. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin und Schwangerschaft
Darf oder sollte man sogar während der Schwangerschaft L-Carnitin einnehmen?

Wie bei allen Nahrungsergänzungsmitteln fragt sich die werdende Mutter, ob eine Einnahme während der Schwangerschaft erlaubt ist oder aber Schaden anrichten könnte. Letzteres kann verneint werden; viel interessanter ist aber die Notwendigkeit einer zusätzlichen Einnahme von L-Carnitin während der Schwangerschaft, und zwar sowohl für die werdende Mutter als auch für das heranreifende Kind. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Kann man mit L-Carnitin besser abnehmen?
Die Frage, ob L-Carnitin die Fettverbrennung steigern und beim Abnehmen helfen kann, lässt sich aus der heutigen wissenschaftlichen Sicht mit einem klaren „JA“ beantworten. Um aber sämtliche Illusionen erst gar nicht aufkommen zu lassen, vermag L-Carnitin zwar Fettsäuren zu transportieren, es kann diese aber nicht von allein freisetzen (verbrennen). `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin hält Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Gründe für Alterung
Freie Radikale lassen unsere Zellen altern: Innerhalb der Alterung spielen die freie Radikale eine zentrale Rolle. Es handelt sich dabei um schädliche Sauerstoffverbindungen, die in hohen Konzentrationen unsere Körperzellen, Zellmembranen und sogar unsere DNS angreifen. Um Krankheiten vorzubeugen und die biologische Alterung zu verzögern, ist daher das „oxidative Gleichgewicht“ die oberste Prämisse, ein Gleichgewicht also zwischen der unvermeidlichen Entstehung von freien Radikalen einerseits und schützenden Antioxidantien andererseits. Die freien Radikale sind teilweise unumgänglich; so werden zum Beispiel 3 % unserer Atemluft zu schädlichen freien Radikalen, aber auch Sonneneinstrahlung (UV-Strahlen) und Nahrung erzeugt schädliche, freie Radikale. 
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin hält Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Wir stehen diesen zerstörerischen Sauerstoffverbindungen, die zur schädigenden Zelloxidation führen, zum Glück nicht völlig machtlos gegenüber, denn einerseits können wir die Entstehung der freien Radikale positiv beeinflussen, indem wir zum Beispiel nicht rauchen und keinen Alkohol konsumieren, tierische Fette in der Nahrung einschränken, die künstlichen Sonneneinstrahlungen (Solarium) vermeiden und einen übertriebenen Leistungssport einschränken. Andererseits stehen uns zahlreiche sehr potente Beschützer unserer Zellen in Form sogenannter Antioxidantien zur Verfügung, so zum Beispiel in Form von Vitamin C, OPC, Co-Enzym Q10, Beta-Carotin, Selen, Alpha-Liponsäure, L-Carnosin und anderen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin hält Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Verzuckerung (Glykolisierung) lässt unser Gewebe altern: Ein zweiter entscheidender Mechanismus der Alterung ist die sogenannte Glykolisierung. Hierbei handelt es sich um überschüssigen Zucker, der sich mit unseren Körperproteinen verbindet und deren Funktion nachhaltig stört – dies macht sich nicht nur äußerlich in Form von Falten bemerkbar, sondern führt ebenfalls innerlich zum Nachlassen etwaiger Funktionen, die man dann dem Alterungsprozess zuschreibt. L-Carnitin, vermag, besonders in der bioaktivsten Form von Acetyl-L-Carnitin, beiden Mechanismen der Alterung zu trotzen, indem es sowohl die Zellen vor freien Radikalen als auch vor Glykolisierung schützt. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin hält Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Die Mechanismen gegen Alterungsprozesse im Einzelnen
Zusammenfassend kann man folgende Mechanismen benennen, über die L- Carnitin dem Alterungsprozess entgegenwirkt:

- Schutz vor Angriffen freier Radikale;
- Erneuerung anderer, aufgebrauchter freier Radikale (z. B. Alpha- Liponsäure);
- Steigerung anderer Antioxidantien (z. B. Glutathion);
- Reduktion des oxidativen Stresses;
- Zerstörung von freien Radikalen;
- Schutz der Omega-3-Fettsäuren vor der Zerstörung dieser durch freie Radikale;
- Entgegenwirken der Glykolisierung (Verzuckerung der körpereigenen Proteine);
- Steigerung der kognitiven Fähigkeiten;
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin hält Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Die aufsehenerregende Nicuta Regenerationstherapie In einem aufsehenerregenden Experiment haben Forscher der namhaften University of California mit einer Kombination von Acetyl-L-Carnitin und Alpha-Liponsäure Erstaunliches entdeckt: Die Körperzellen der Versuchstiere haben, unter dem Elektronenmikroskop einwandfrei zu erkennen, die Struktur jugendlicher Zellen angenommen, etwas, das selbst renommierte Zellbiologen wie Prof. Dr. Bruce. N. Ames sprachlos machte. Um es mit den Worten von Dr. Tory M. Hagen zu schildern, einem Biomediziner, der an den Versuchen ebenfalls beteiligt war: „Auf den Menschen übertragen würde die Wirkung der Substanzen aus einem 75 bis 80 Jahre alten Menschen eine Person mittleren Alters machen.“ `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin hält Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Die altersschwachen Ratten legten bereits nach einem Monat Behandlung mit Acetyl-L-Carnitin und Alpha-Liponsäure jungendliche Verhaltensmuster an den Tag; die Leistungs- und Gedächtnistests schlossen sie mit Bravour ab und reagierten dabei wie ihre jungen Artgenossen. Sehr bald legten sie das starke Paarungsverhalten junger Tiere an den Tag und überlebten die Vergleichsgruppe nichtbehandelter Artgenossen um Einiges. Die Forscher schlossen daraus, dass die Kombination von Acetyl-L-Carnitin und Alpha-Liponsäure synergetisch zu einer Reduktion des oxidativen Stresses führt und die Schäden der RNA/DNA nicht nur verlangsamt, sondern gar verhindert und –was noch viel aufsehenerregender ist – teilweise wieder rückgängig macht. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
• L-Carnitin steigert im Tierversuch die Laufgeschwindigkeit und Ausdauer: Bereits nach zehn Tagen der Anwendung konnte Acetyl-L- Carnitin im Tierversuch die maximale Laufgeschwindigkeit sowie die Ausdauerleistungsfähigkeit erhöhen.

• L-Carnitin steigert die Leistung von Radfahrern um 11–19 % und senkt die Regenerationszeit: An der Universität von Basel konnte unter der Leitung von Prof. Walter im Vergleich zum Placebo (Scheinmedikament) eine Leistungssteigerung bei Radfahrern in allen Testdurchläufen zwischen 11 % und 19 % werden. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Acetyl-L-Carnitin beugt dem Sauerstoffmangel im Herzmuskel vor
ALC konnte in Studien unter Beweis stellen, dass es im Herzmuskel einem Sauerstoffmangel vorbeugen kann.805
Acetyl-L-Carnitin verbessert die Membranfunktionen des Herzmuskels In Studien konnte Acetyl-L-Carnitin den Rückgang des Phosphat-Carriers revidieren und damit die Energieübertragung innerhalb des Herzmuskels verbessern.

Acetyl-L-Carnitin erfolgreich gegen die Schaufensterkrankheit
In Studien steigerte das Acetyl-L-Carnitin die Beindurchblutung und wirkte der peripheren arteriellen Verschlusskrankheit, der sogenannten Schaufensterkrankheit, entgegen.
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Anwendung und Einnahmeempfehlungen
L-Carnitin kann bei Erwachsenen bis zu 5000 mg am Tag eingenommen werden; bei Kindern gilt eine Empfehlung von 25–100 mg pro kg Körpergewicht. Da der menschliche Körper erst ab dem 15. Lebensjahr über eine voll funktionierende L-Carnitin-Synthese verfügt, müssen Säuglinge und Kinder L-Carnitin in ausreichender Menge über die Nahrung erhalten. Des Weiteren weisen Vegetarier, Veganer, Leistungssportler, Schwangere sowie Stillende und Menschen, die unter Eisenmangel leiden, Frauen, welche die Pille nehmen, und Menschen, die unter Dauerstress stehen, häufig zu niedrige L- Carnitin-Plasmawerte auf und sind daher auf eine zusätzliche L-Carnitin- Einnahme angewiesen. Hier empfiehlt sich eine tägliche Einnahme von bis 1000 mg L-Carnitin und eventuell mehr.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Was ist L-Carnosin – erfahren Sie Fakten
L-Carnosin ist ein Dipeptid, das sich aus den chemisch aneinander gebundenen Aminosäuren Beta-Alanin und L-Histadin zusammensetzt. Aufgrund der ausgesprochenen Schutzeffekte auf unser Gehirn wird es auch als „Neuropeptid“ bezeichnet. Bislang noch ein echter Insider in Anti-Aging-Kreisen, erfreut sich das der breiten Masse erst seit relativ kurzer Zeit zur Verfügung stehende L-Carnosin eines wachsenden Interesses. Dies kommt sicherlich nicht von ungefähr, denn die verjüngende Wirkung bestätigen viele Anwender bereits nach relativ kurzer Zeit, und immer mehr aktuelle Studien zu L-Carnosin lassen aufhorchen und sind mehr als verheißungsvoll …
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Der Mensch lebt solange, solange sich seine Körperzellen teilen können. Die Wissenschaft geht davon aus, dass sich die Zellen ca. 60–80 x teilen können, bevor sie versterben, man nennt dieses Limit auch „Hayflick-Grenze“. Versterben die Zellen, stirbt der Mensch selbst. Während die Alterung einer Zelle bis vor kurzer Zeit noch als irreversibel (nicht umkehrbar) galt, konnten australische Forscher jüngst in aufsehenerregenden Experimenten das Gegenteil beweisen: In einem mit Carnosin getränkten Nährmedium konnten sie die Lebenszeit menschlicher Zellen im Labor auf 413 Tage verlängern, während die Kontrollgruppe (ohne Carnosin) lediglich eine Lebensdauer von 130 Tagen erreichte!
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Und als wäre dies nicht genugschwärmen Ärzte und Therapeuten von L- Carnosin zunehmend in höchsten Tönen, wenn es beispielsweise um neurologische Erkrankungen, wie Alzheimer, Autismus, Parkinson und andere, geht. Dabei handelt es sich bei L-Carnosin um einen körpereigenen, zu 100 % natürlichen Stoff, der besonders gehäuft in langlebigen Zellen, wie den Muskel- und Nervenzellen, aber auch im Herzmuskel, in den Nieren, der Leber, dem Hirn und anderen Organen vorkommt. Jede einzelne unserer rund 70 Billionen Körperzellen wird jeden Tag etwa 10 000 bis 80 000 Mal den Angriffen der freien Radikalen ausgesetzt, die eine zerstörerische Wirkung nach sich ziehen, zu zahlreichen Erkrankungen und zu vorzeitiger Alterung führen.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin stellt eines der wirksamsten Antioxidantien dar, um diesen zerstörerischen Angriffen zu trotzen, das uns die Natur zur Verfügung bietet. Es ist ein erstklassiger Immunsystem-Booster, vor allem aber ein Zellerneuerer, der in vielen Studien unter Beweis stellen konnte, dass er nicht wie die anderen „gewöhnlichen“ Antioxidantien unsere Zellen lediglich beschützen, sondern gar Zellen, die bereits gealtert sind, wieder verjüngen und deren Lebenszyklus verlängern kann!
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Leider sinkt im Laufe unseres Lebens mit dem Alter unser L-Carnosin-Spiegel; es handelt sich dabei um einen Schwund um ca. 63 % zwischen dem 10. und 70. Lebensjahr. Viele Altersforscher geben exakt diesem Phänomen die Schuld an der physiologischen Alterung und den mit ihr verbundenen Erkrankungen. Obwohl L-Carnosin natürlicherweise im Fleisch vorkommt, sind diese Mengen verhältnismäßig gering. Besonders also Vegetarier und Veganer kommen in punkto L-Carnosin entscheidend zu kurz. Erfreulicherweise steht uns Menschen seit wenigen Jahren der Naturstoff „L- Carnosin“ als Nahrungsergänzung zur Verfügung. Auch, oder gerade mit diesem natürlichen Mittel, wurde uns ein nicht geringer Einfluss auf unsere biologische Alterung, die Möglichkeit der biologischen Verjüngung sowie die Vermeidung von zahlreichen Erkrankungen an die Hand gegeben. Lesen Sie in weiteren Punkten mehr[...] 
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Die antioxidative Wirkung von L-Carnosin

Rund 80 % aller Krankheiten, einschließlich der vorzeitigen Alterungsprozesse, gehen auf das Konto der Zellzerstörung durch freie Radikale. Tagtäglich werden unsere ca. 70 Billionen Zellen rund 10–80 000 Angriffen von freien Radikalen ausgesetzt. Was sind freie Radikale? Freie Radikale entstehen durch Ozon, UV-Strahlung, Nikotin, Medikamente und Stress, aber auch ganz natürlich durch verschiedene Stoffwechselprozesse in unserem Körper.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Schwermetallbindende Wirkung von L-Carnosin

Indem es sich mit toxischen Metallen, wie Blei, Quecksilber, Arsen, Nickel und Kadmium, sowie prooxidativen Metallen wie Kupfer und Zink verbindet, unterstützt es den Körper, sich von diesen schädlichen Substanzen zu befreien. Spezielle Wirkung von L-Carnosin Die allgemeinen Vorzüge des L-Carnosin versprechen eine breit gefächerte, spezielle Wirkung auf diverse Krankheitszustände. Hierzu zählen die folgenden Erkrankungen oder unerwünschte Zustände, auf die L-Carnosin positive Wirkung ausüben kann: `
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Wirkung von L-Carnosin gegen Alzheimer

Es werden multifaktorielle Ursachen für Alzheimer diskutiert. Wahrscheinlich ist, dass ein Protein namens Proteasom, das für den Abbau und die Entfernung beschädigter Hirnzellen aus dem Gehirn verantwortlich ist, nicht ordnungsgemäß produziert wird. Hier entfacht L-Carnosin seine positive Wirkung, indem es das Proteasom schützt und auf diese Weise hilft, Alzheimer zu vermeiden oder bei einer bestehenden Alzheimer-Krankheit Besserung bringen kann.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Weitere neurologische Erkrankungen und kognitive Störungen, auf die L-Carnosin positiv einwirken kann

Neben Alzheimer und Demenz kann L-Carnosin die folgenden Erkrankungen
positiv beeinflussen oder ihnen vorbeugen:

- Parkinson
- Epilepsie
- Schizophrenie
- Depressionen
- Schlaganfall
- Legasthenie
- Tourette-Syndrom
- Asperger-Syndrom
- Autismus
- Dyspraxie
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Wirkung von L-Carnosin gegen Krebs

Laborversuche an Zellkulturen unterschiedlicher Krebsarten haben gezeigt, dass L-Carnosin offensichtlich eine zytotoxische (giftige) Wirkung auf menschliche Krebszellen hat. Die Zellkulturen waren sehr bald frei von Krebszellen, sobald L-Carnosin hinzugefügt wurde. Wirkung bei altersbedingter Sehschwäche und Grauem Star L-Carnosin stellt sich in Form von speziellen Augentropfen mit der Bezeichnung „NAC-Tropfen“ als äußerst effektiv gegen altersbedingte Sehschwäche und Grauen Star dar (siehe Punkt „Studien“ ).
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Wirkung bei altersbedingter Sehschwäche und Grauem Star

L-Carnosin stellt sich in Form von speziellen Augentropfen mit der Bezeichnung „NAC-Tropfen“ als äußerst effektiv gegen altersbedingte Sehschwäche und Grauen Star dar (siehe Punkt „Studien“ ).
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Wirkung von L-Carnosin auf Herzkreislauferkrankungen  

- L-Carnosin erhöht die Kontraktion des Herzmuskels bei dessen Arbeit; das Herz kann effizienter und zugleich ökonomischer arbeiten.
- L-Carnosin senkt einen erhöhten Blutdruck, der das Herz nach und nach schädigt.
- L-Carnosin senkt einen erhöhten Cholesterinspiegel, der zu Ablagerungen und Arteriosklerose führt.
- L-Carnosin verhindert nicht nur die Entstehung von Arteriosklerose, sondern kann diese sogar teilweise rückgängig machen.
- L-Carnosin beugt einem Sauerstoffmangel bei Herzkranzerkrankungen vor.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin schützt vor Schlaganfall

L-Carnosin kann durch seine blutdruck- und cholesterinspiegelsenkende sowie
durch seine protektive Wirkung gegen Arteriosklerose einem Schlaganfall vorbeugen.

L-Carnosin schützt vor schlimmen Schäden eines akuten Schlaganfalls

In Studien konnte L-Carnosin einen schützenden Effekt auf die Hirnzellen während eines Schlaganfalls unter Beweis stellen. L-Carnosin agiert dabei als Neuroüberträger und schützt außerdem das zelluläre Enzym „Proteasom“ vor der Zerstörung. Auf der anderen Seite schützt es vor einer Überstimulierung des Hirns durch bestimmte Rezeptoren.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin wirkt gegen Alterung und verjüngt aktiv

Zumeist wird L-Carnosin mit Anti-Aging, also der biologischen Verjüngung, assoziiert, die ihm in diversen Studien, auf die wir im späteren Verlauf noch eingehen werden, eine phantastische Wirkung attestiert.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin hilft in Studien gegen altersbedingte Sehschwäche und Grauen Star

L-Carnosin hilft innerlich wie äußerlich bei Augenproblemen. Auf der Basis von L-Carnosin, gelten Augentropfen (sogenannte NAC-Tropfen) in Fachkreisen als hochgradig effizient gegen altersbedingte Sehschwäche sowie Grauen Star. In 80 % der Fälle waren die L-Carnosin-Tropfen beim primären Altersstar und in 100 % sogar beim reifen Altersstar wirksam.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin stärkt in Studien auf natürliche Weise die Potenz

Die Produktion von Stickstoff-Sauerstoff ist die absolute Voraussetzung, um eine Erektion zu erlangen und diese dann möglichst lange zu halten. Für Stickstoff-Sauerstoff stellt aber Carnosin das natürliche Substrat dar. Es verwundert daher nicht, dass L-Carnosin Erektionsprobleme zu lösen vermag.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
DER Schlüssel zur ewigen Jugend und Gesundheit?

Sehr viele Bücher sind mittlerweile darüber geschrieben worden, und doch ist es nur wenigen Menschen geläufig. Selbst Mediziner wissen erstaunlich wenig darüber. Die Rede ist von Melatonin.

Stellen Sie sich vor, es gäbe ein körpereigenes Hormon, das nicht nur das Altern verzögert, sondern sogar biologisch verjüngt. Und als wäre dies nicht genug, verhindert dieses Hormon leidbringende Erkrankungen, wie Krebs, Herzinfarkt, Schlaganfall, Diabetes, Grauen Star oder Alzheimer. Und da dies zum ultimativen Glück noch nicht ganz reicht, steuert es unseren biologischen Rhythmus und gibt uns am Tage Energie zur Bewältigung unserer Tagesaufgaben und nachts verleiht es uns einen erholsamen, tiefen Schlaf ...
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
DER Schlüssel zur ewigen Jugend und Gesundheit?

Die Rede kann nur von Melatonin sein, einem körpereigenen Hormon, das in der Zirbeldüse im Gehirn (Stammhirn) produziert wird.

Sicherlich würde man so etwas dem Reich der Mythen und Märchen zuweisen, wenn – ja, wenn nicht die vielen aufsehenerregenden Arbeiten, Studien und Forschungen von namhaften Ärzten und Wissenschaftlern in aller Welt wären, die Melatonin im Hinblick auf Lebensverlängerung, Vorbeugung und Heilung von selbst als „unheilbar“ geltenden Krankheiten erstaunliche Eigenschaften zuschreiben.

Erstmalig gelang es den Wissenschaftlern Dr. William Regelson und Walter Pierpoali, die Bedeutung der Zirbeldrüse für unsere Lebensdauer im Tierversuch nachzuweisen. Dazu wurden kurzerhand älteren Mäusen die Zirbeldrüsen jüngerer Mäuse, und umgekehrt jüngeren Mäusen die Zirbeldrüsen älterer Mäuse [...]
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Die jüngeren Mäuse mit der älteren Zirbeldrüse erreichten im Durchschnitt lediglich 510 Tage, während die älteren Mäuse, denen man die jüngere Zirbeldrüse verpflanzt hatte, dieses Alter auf durchschnittlich 1020 Tage verdoppeln konnten!

Um aber diesen erstaunlichen Effekt auch wirklich ausschließlich dem Melatonin zuschreiben zu können, entschied sich Dr. Regelson, einen Gegenversuch zu starten, in dem er einer Gruppe der Mäuse normale Ernährung und der anderen Gruppe zu der gleichen Ernährung zusätzlich Melatonin verabreichte.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Während diejenigen Mäuse, die ausschließlich ihre Nahrung verabreicht bekamen, im üblichen Alter von 24–25 Monaten verstarben, lebten die „Melatonin-Mäuse“ noch sechs Monate länger, was 30 % Lebensverlängerung 1616und umgerechnet einer zusätzlichen menschlichen Lebenszeit von 25–30 Jahren entspricht! Mehr noch: Im Gegensatz zu der Kontrollgruppe waren die zusätzlich mit Melatonin gefütterten Mäuse bis zu ihrem Tod vital und gesund! Sie fingen an, sich zu verjüngen, bis sie das Verhalten und Aussehen von jungen Mäusen annahmen.

Es handelte sich um einen Meilenstein in der Erforschung der biologischen Alterung, der der Zirbeldrüse seitdem eine sehr wichtige, wenn nicht gar entscheidende Funktion bei der Steuerung der Altersprozesse zukommen lässt.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Des Weiteren ist es ein Beweis dafür, dass die von Kritikern häufig angezweifelte Aufnahmefähigkeit und Verarbeitung des Körpers von einer Melatonin-Nahrungsergänzung zweifelsfrei funktioniert!

„Hmm“, könnten Sie jetzt sagen – „... als Indiz dafür, dass Melatonin der Schlüssel zur Jugend ist, könnte man es ja vielleicht gelten lassen, was aber ist mit der sagenumwobenen Gesundheit, die Melatonin ebenfalls fördern soll?“ In diesem Zusammenhang ist es interessant zu erwähnen, dass die im oben erwähnten Tierversuch mit Melatonin gefütterten Mäuse allesamt bis zu ihrem Tod gesund blieben und krebsfrei verstarben, während die Nicht-Melatonin- Mäusegruppe in der Mehrheit dem Krebs erlag!
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
„Das Wunderbare an Melatonin ist, dass es Ihr Leben verlängern und Ihre Gesundheit und Vitalität erhalten kann. Das wirklich Wunderbare an Melatonin ist die grosse Wirkung, die es auf unsere und auf zukünftige Generationen haben wird.

Wir begeben uns auf ein gemeinsames Abenteuer und sind die erste Generation, die die Macht hat, die Krankheiten und Schwächen zu vermeiden, die als typisch für eine "normale" Alterung gelten. Zum ersten Mal haben wir die Macht, unsere Jugendlichkeit zu bewahren und unser ganzes Leben lang kräftig und munter zu bleiben.

Zum ersten Mal können wir nicht nur den körperlichen Verfall vermeiden, der mit der Alterung verbunden ist, sondern wir sind in der Lage, den Alterungsprozess hinauszuzögern und sogar umzukehren. Das ist das echte Melatonin-Wunder.“
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin macht aber noch viel mehr; unter anderem ist es ein wichtiger Assistent des Immunsystems, indem es Angreifer und Erreger entdeckt und vernichtet. Dr. Walter Pierpaoli und Prof. William Regelson vertreten die Meinung, dass das Immunsystem im Alter zusammenbricht, weil die Zirbeldrüse aufgrund der eigenen Alterung ihre Funktion, nämlich die Ausschüttung von unter anderem Melatonin, nicht mehr ausreichend erfüllen kann.

Ihrer Überzeugung nach kann eine zusätzliche Einnahme des Melatonins unser Immunsystem auf den Stand unserer Jugend zurückführen; wir würden dadurch widerstandfähiger und gesünder bleiben.840 Des Weiteren gilt Melatonin als eines der stärksten bekannten Antioxidantien, das mit der 50- fachen Stärke von Vitamin C freie Radikale bekämpft.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Die Zirbeldrüse – eine wichtige Lebensuhr

Die Zirbeldrüse bestimmt unter anderem unseren Lebensrhythmus. Im Tierreich sind diese Rhythmen besonders gut zu beobachten; so weckt die Zirbeldrüse im Frühjahr lustvolle Gefühle, die zur Paarung führen, zum Herbst hin signalisiert sie den Zugvögeln, dass es Zeit ist zum Aufbruch in den warmen Süden, anderen Tieren gibt sie Signale, sich ein Winterquartier zu suchen, um diese zum Frühjahr aus ihrem Winterschlaf zu wecken. Bei uns Menschen hilft die Zirbeldrüse, den jahreszeitlichen Hormonspiegel zu erhalten; sie regelt unter anderem unser Wachstum und unsere Entwicklung von Kindheit an bis ins Erwachsenenalter.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Laut einer Graphik des Magazins „Focus“ erreicht Melatonin im Alter von acht Jahren mit ca. 125 Picogramm pro ml Blut die höchste Konzentration. Die erste starke Abnahme des Melatonins erfahren wir mit 16 Jahren im Zuge der Pubertät (ca. 87 Picogramm/ml Blut). Mit 45 Jahren produzieren wir nur noch halb so viel Melatonin wie in der Kindheit (ca. 50 Picogramm/ml Blut) und mit 80 Jahren produziert die Zirbeldrüse kaum noch Melatonin (25 Picogramm/ml).

Parallel dazu macht sich die Alterung ab dem 45. Lebensjahr nun auch deutlich optisch bemerkbar; in unserem Inneren wirkt sie sich gleichzeitig negativ aus, führt zu physiologischer Degeneration und macht uns für zahlreiche Erkrankungen anfällig. Dies ist auch nicht verwunderlich, wird der Zirbeldrüse doch schließlich eine Höchstleistung an Funktionen zugemutet.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Sämtliche Altersanzeichen aller unserer Organe seien in Wirklichkeit auf das Altern und damit den Funktionsnachlass der Zirbeldrüse zurückzuführen, so die These von Prof. William Regelson und Walter Pierpaoli. Nach 30 Jahren Forschung teilen die beiden die Überzeugung, dass man die Altersuhr anhalten, ja gar zurückdrehen – und der Mensch 120 Jahre und älter werden könne. In Röntgenuntersuchungen älterer Menschen lässt sich die Degeneration der Zirbeldrüse visuell in Form von Kalkablagerungen darstellen. Diese Kalkablagerungen als Zeichen der Alterung der Zirbeldrüse führen zu einem stetigen Nachlass des Melatonins mit der hiermit verbundenen Zellalterung samt Funktionseinbußen der Organe.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Des Weiteren führt die Alterung zur Schrumpfung der Zirbeldrüse und zum Verlust der Pinealocyten, der Zellen also, die für die Melatoninproduktion zuständig sind. Gleichzeitig altert die Netzhaut unseres Auges, die die Lichtsignale an die Zirbeldrüse weiterleiten und zu einer immer unverlässlichen Signalübertragung führt, ein Teufelskreis der Alterung. Im nächsten Punkt „Melatonin-Wirkung“ erfahren Sie mehr Fakten zu diesem hochinteressanten Thema.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin, die Wirkung – wie und wogegen wirkt es?
Noch vor wenigen Jahrzehnten von den Forschern und Ärzten als „Blinddarm des Gehirns“ als unnütz abgetan, haben die letzten Jahre völlig neue, plausible Zusammenhänge zwischen der Alterung und Erkrankungen an den Tag gelegt, die die Zirbeldrüse zu einer wichtigen Steuereinheit für unseren gesamten Organismus haben avancieren lassen. Mit der Alterung der Zirbeldrüse und damit dem Nachlassen der Melatoninproduktion altert der Mensch im Ganzen. Während der Alterung wird der Mensch charakteristisch anfälliger für allerlei Erkrankungen, so Herzkreislauferkrankungen, Diabetes, Krebs oder Impotenz. `
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
In der wissenschaftlichen Literatur wird dem Melatonin explizit die Wirkung auf die folgenden Erkrankungen und Missstände attestiert:

- Krebs
- Diabetes
- Rheuma
- Allergien
- Herzkreislauferkrankungen
- Schlafstörungen
- Stress
- Migräne
- Jetlag
- Asthma
- Wechseljahresbeschwerden/Klimakterium
- Down-Syndrom
- Alzheimer
- Epilepsie
- Sehschwäche
- Grauer Star
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin als höchst effizientes Antioxidans auf das Herz

Tagtäglich werden unsere Körperzellen, so auch die Herzzellen, zum Ziel unzähliger Angriffe vonseiten freier Radikale, die rund 70 000 x täglich vorkommen. Die zerstörerischen Eigenschaften der Oxidation kennen wir vom Metall, das durch Oxidation zu Rost wird, oder von Bildfarben, die verblassen, und Öl, das ranzig wird. Freie Radikale führen zu einer ebensolchen Oxidation und damit zur Zerstörung unserer Zellen. Melatonin ist als körpereigenes Antioxidans 50-mal effizienter als Vitamin C und zählt daher zu den stärksten bislang entdeckten Antioxidantien. Die schützende Wirkung auf die Blutgefäße und das Herzgewebe verhütet Herzinfarkt, Schlaganfall, Angina Pectoris, Herzversagen und andere Herzkreislauferkrankungen.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin auf den Blutdruck

Melatonin ist in seiner Funktion als „Schlafbereiter“ blutdruckregulierend. Des Weiteren stärkt es unser Immunsystem, sodass der Körper weniger Cortisocosteroide produzieren muss, die aber nachweislich den Blutdruck erhöhen. Daher kann ein erhöhter Blutdruck mithilfe von Melatonin gesenkt werden. Im Tierversuch hat die Entfernung von Zirbeldrüsen zum sofortigen Anstieg des Blutdrucks geführt.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin auf den Cholesterinspiegel

Melatonin senkt auch das LDL-Cholesterin, das als „schlechtes“ Cholesterin zu Herzproblemen führt. Die Zirbeldrüse, die für die Produktion und Ausschüttung von Melatonin zuständig ist, scheint auch eine wichtige Rolle in der Regulierung der Cholesterinwerte einzunehmen, denn mit dem Entfernen der Zirbeldrüse schnellten im Tierversuch der Cholesterinspiegel sowie andere Triglyzeridwerte nach oben.

Die Forscher Pierpaoli und Regelson glauben, dass das Melatonin durch die Einflussnahme auf die Ausschüttung von Schilddrüsenhormonen einen regulierenden Einfluss auf den Cholesterinspiegel ausübt.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin auf die elektrische Aktivität des Herzmuskels

Unser Herz arbeitet über ein autonomes System, das auf elektrischen Impulsen basiert. Melatonin beeinflusst positiv die elektrische Aktivität des Herzmuskels über den sogenannten „Calcium-Kanal“ und optimiert so dessen Arbeit. Das Herz arbeitet ökonomischer und effizienter zugleich.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin-Wirkung bei Asthma

Einer Studie an der Hadassah Medical School der Hebräischen Universität in Israel zufolge stellte sich intravenös verabreichtes Melatonin im Tierversuch als „ausgezeichneter Bronchodilator“ heraus.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin gegen Krebs

Bereits Untersuchungen aus dem Jahr 1940 zeigten, dass eine in der Zirbeldrüse gebildete Substanz das Wachstum von Tumoren verhindern konnte, und umgekehrt, dass die Entnahme oder Zerstörung der Zirbeldrüse zu einem schnelleren Wachstum und zur Wucherung von Tumoren führte, auch wenn man die Substanz (Melatonin) zum damaligen Zeitpunkt noch nicht identifizieren konnte.

Tatsächlich produziert zu Beginn einer Krebserkrankung der Körper mehr Melatonin, um den Tumor zu bekämpfen. Neuere Studien konnten offenlegen, dass Melatonin das Wachstum von Brustkrebszellen im Labor sowie bei Mäusen verlangsamt und bei Hamstern das Wachstum des Melanoms (Hautkrebs) um das Fünffache verlangsamt und die Metastasierung verzögert.[...]
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin bei Depressionen

Besonders in den dunklen Wintermonaten leiden viele Menschen unter Depressionen. Melatonin als Gegenspieler von Serotonin von außen zugeführt, so die Kritiker, könnten die Depressionen verschlimmern. Die Befürworter weisen wiederum auf die Fähigkeit von Melatonin hin, Stress zu dämpfen, und erwähnen dessen Regulationsmechanismen, um die somatischen sowie die mentalen Regenerationsprozesse zu optimieren.847 Melatonin könnte also in richtigen Dosen und zur richtigen Tageszeiten verabreicht eventuell sehr hilfreich gegen Depressionen sein. Patienten, die an Depressionen leiden und in ärztlicher Betreuung sind, sollten dieses allerdings zuvor mit ihrem behandelnden Arzt besprechen.`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin gegen chronische Überforderung und Stress

Melatonin hat sich als echtes Antistress-Hormon herausgestellt. Dies erreicht es, indem einerseits das Stresshormon „Cortisol“ sowie die Corticosteroide gehemmt und auf der anderen Seite psychoregenerative Kräfte in Ruhephasen mobilisiert werden. Des Weiteren senkt Melatonin den Puls und den Blutdruck und sorgt somit für eine ökonomische Arbeit unseres Herzkreislaufsystems, was die Langlebigkeit des Herzens fördert.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung gegen Impotenz und schwache Libido

Auch im Falle der Impotenz oder einer schwachen Libido scheint Melatonin auf mehreren Fronten zu wirken, indem es Stressfaktoren abbaut. Impotenz, noch vor wenigen Jahren ein Schlagwort für fehlende Potenz eines alten Mannes, breitet sich zunehmend auch unter jungen Männern aus. Dies hat, neben Umweltfaktoren und falscher Ernährung, in erster Linie mit Stress im Beruf als Ursache zu tun. Da Melatonin die Stressoren reguliert und Stress direkt abbaut, kann einer stressbedingten Impotenz und schwacher Libido entgegengewirkt werden.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin schützt die Sexualorgane vor Alterung

Erste Erkenntnisse zu diesem Mechanismus, der sich gravierend positiv auf die Potenz und Libido sowie auf die sexuelle Aktivität auswirkt, gewannen die Forscher Prof. Dr. William Regelson und Dr. Walter Pierpaoli im Tierversuch an älteren Mäusen, die dem Alter eines 70-jährigen Menschen entsprachen. Versorgt mit Melatonin, wiesen deren Hoden und Eierstöcke nicht die für das hohe Alter typische Schrumpfung auf. Sowohl die männlichen als auch die weiblichen Tiere blieben untypischerweise für das Alter sexuell aktiv.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin bei Alzheimer

Bei Alzheimer-Patienten lässt sich ein niedriger Melatoninspiegel diagnostizieren, der möglicherweise darauf zurückzuführen ist, dass die Nervenbahnen von der Zirbeldrüse zum Auge mit weniger Nerven versehen sind. Zu den Symptomen von Alzheimer gehört daher ein gestörter Biorhythmus einschließlich eines gestörten Schlaf-Wach-Rhythmus. Hier wird bereits von vielen Ärzten Melatonin verschrieben. Erfahrungsgemäß können Antioxidantien die Erkrankung hinauszögern, häufig sogar die Symptome vermeiden. Da Melatonin als wichtigstes Antioxidans fungiert, ist ihm neben anderen Antioxidantien wie OPC, Vitamin C, Vitamin E, Selen oder Q10 ein hoher Stellenwert in der Therapie von Alzheimer beizumessen.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin bei Diabetes

Ein erstes ernst zu nehmendes Indiz dafür, dass Melatonin bei Diabetes helfen kann oder diese erst gar nicht entstehen lässt, ist die Tatsache, dass man bei Patienten, die unter insulinunabhängigem Diabetes (auch Altersdiabetes genannt) leiden, erniedrigte Melatonin-Werte vorfand. Indem das Melatonin dabei hilft, die Produktion von Wachstumshormonen zu kontrollieren, könnte es auch dabei helfen, Diabetes zu verhindern und den Blutzuckerspiegel zu regulieren.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung auf die Sehkraft und den Grauen Star

Neben der Zirbeldrüse und den Verdauungsorganen befindet sich Melatonin ebenfalls in der Augennetzhaut. Gemäß den Studien der beiden Melatonin- Forscher Prof. Regelson und Dr. Pierpaoli verbesserten sich alle Organe der mit Melatonin gefütterten, alten Mäuse. Keine der mit Melatonin behandelten Mäuse ist an Grauem Star erkrankt. Es ist daher sehr wahrscheinlich, dass das Melatonin unsere Sehkraft verbessern und möglicherweise vor Grauem Star schützen kann.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin bei Jetlag

Der Jetlag tritt dann auf, wenn in kürzester Zeit mehrere Zeitzonen überflogen werden und die innere Uhr durcheinander gerät. Jetlag-Symptome sind Müdigkeit, Gereiztheit und Konzentrationsschwäche, aber auch Anfälligkeit für Infektionen. Gerade davon betroffene Berufsgruppen, wie die der Piloten, Stewardessen oder Geschäftsreisenden, unterliegen einem größeren statistischen Risiko, an Herzleiden oder Immunschwäche zu erkranken. Der Botenstoff Melatonin vermag die biologische Uhr einzustellen, für geruhsamen Schlaf zu sorgen und so den oben genannten Krankheiten zu trotzen.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Kurz gesagt: Melatonin ist bestens dazu geeignet, einen erholsamen Schlaf zu fördern und wird sowohl bei Schlafproblemen als auch bei Jetlag empfohlen. Dies ist eine bemerkenswerte Tatsache, wenn man bedenkt, dass allein in der BRD 600–700 000 Menschen Schlafmittel einnehmen; während diese häufig zur Sucht führen und die Tiefschlafphase lediglich mit Verzögerung einleiten, gilt Melatonin als nebenwirkungsfrei und führt bereits nach 60 Minuten zur Tiefschlafphase.

`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin stoppt Alterung

Nicht nur im Kampf gegen Erkrankungen (das eine resultiert häufig aus dem anderen), sondern auch gegen Alterung bedient sich Melatonin verschiedener Mechanismen, die unsere Zellen verjüngen und länger leben lassen. Umgekehrt haben die Forscher bei Kindern, die an Progerie (rasch voranschreitende Vergreisung) leiden, ein nahezu vollständiges Melatonin-Defizit festgestellt.851 Es ist kein Zufall, dass der Schlaf als „die tägliche Verjüngungskur“ bezeichnet wird, was sich bereits optisch durch eine glattere Haut manifestiert, denn ausschließlich während des Schlafs werden die Flüssigkeits- und Fettdepots unter der Haut aufgefüllt. Schlaf belebt den gesamten Organismus und gibt wieder Energien frei, er entspannt und erfrischt zugleich.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Regeneration der Zirbeldrüse als primäres Ziel der Melatonineinnahme

Die Forscher Pierpaoli und Regelson konnten in ihren jahrelangen Studien den Nachweis erbringen, dass die zusätzliche regelmäßige Einnahme von Melatonin nicht nur während der Einnahme Alterungsprozesse verlangsamt und Verjüngung erzielt, sondern parallel dazu über einen längeren Einnahmezeitraum die gealterte, funktionseingeschränkte Zirbeldrüse neu beleben und wieder regenerieren kann.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wann ist es zu spät für die Einnahme von Melatonin?
Kurz und knapp: NIE!

Gemäß den Untersuchungen von Prof. William Regelson, Dr. Walter Pierpaoli und vielen anderen Forschern stehen die Chancen auch bei Menschen gut, die längst das 45. Lebensjahr überschritten haben, die Zirbeldrüse über eine längere, regelmäßige Melatonineinnahme wieder neu zu beleben und zu einer natürlichen Melatoninproduktion anzuregen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Was ist MMS?

Miracle Mineral Supplement, abgekürzt MMS, bedeutet übersetzt auf Deutsch: Wundersames Mineralien-Nahrungsergänzungsmittel Dies ist ein extrem verheißungsvoller Name für etwas, das kaum jemand kennt. Es gehört schon in der Tat eine geballte Ladung von positiven Wirkungen dazu, um eine derartig hochgegriffene Bezeichnung auch nur annähernd zu rechtfertigen!

Glaubt man dem Autor des Buches „MMS: der Durchbruch“, Jim Humble, der zugleich derjenige ist, der MMS populär gemacht hat (MMS wurde erstmalig bereits 1926 von Dr. William Koch verwendet und ist seit den 1930er-Jahren in den USA in Gebrauch), dann hat sein „wundersames“ Mittel bereits über 75 000 Menschen geheilt, die an tödlichen Erkrankungen wie Malaria, AIDS, Krebs, Hepatitis, Herpes oder Tuberkulose litten.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Die weitaus meisten Erfahrungen mit dem Mineralstoff MMS machte Humble in Afrika und Mexiko, da MMS weder in USA noch in Europa zugelassen ist und bestimmte Mächte stark daran interessiert zu sein scheinen, dass dieser Zustand unverändert bleibt. Laut Humble soll die Regierung von Malawi in Südostafrika Testreihen mit MMS mit einer Heilungsquote von 99 % durchgeführt haben. Demnach waren über 90 % aller behandelten Patienten innerhalb von maximal acht Stunden wieder gesund, und 60 % der in Uganda behandelten AIDS-Patienten waren binnen drei Tagen symptomfrei, 98 % innerhalb eines Monats. Sollten seine Behauptungen Bestätigung finden, ist die ambitionierte Bezeichnung um das „wundersame Supplement“ durchaus als legitim zu betrachten – und es gibt sehr viele Indizien, die dieses untermauern. Mehr dazu lesen Sie in den folgenden Abschnitten
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Miracle Mineral Supplement – was ist das?

wird Sie sicherlich erstaunen zu lesen, dass der Hauptbestandteil dieses Miracle Mineral Supplement etwas ist, mit dem Sie bereits im Ihres Lebens unzählige Male aktiv oder passiv konfrontiert waren: mit der chemischen Formel (ClO2). kennen wir aus unzähligen Anwendungen zwecks Desinfektion Wasser, in der Lebensmittelindustrie wird es als Entkeimungsmittel für verwendet und findet in den USA ebenfalls Anwendung als von Hühner-, Rinder- und anderem Fleisch.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Genauer analysiert besteht MMS zu 28 % aus Natriumchlorit-Pulver, das in destilliertem Wasser aufgelöst ist. Das Natriumchlorit-Pulver besteht wiederum zu 80 % aus Natriumchlorit und zu 19 % aus Natriumchlorid, das wir auch unter der Bezeichnung „Kochsalz“ kennen. Das restliche 1 % besteht aus verschiedenen anderen Natrium-Chemikalien, die als ungiftig eingestuft wurden. Die tatsächliche Menge an Natriumchlorit im fertigen Präparat beläuft sich somit auf 22,4 %. Da es sich beim Miracle Mineral Supplement (MMS) weder um ein offiziell zugelassenes Medikament noch um ein Nahrungsergänzungsmittel handelt, und bislang alle Empfehlungen auf Beob- achtungen aus der Praxis basieren und nicht aufgrund von regulären Studien erfolgt sind, muss gleich an dieser Stelle betont werden, dass die Benutzung von MMS ausschließlich auf [...] 
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Dennoch kann MMS in exakt der von Jim Humble beschriebenen Form im Internet problemlos bezogen werden, auch wenn es offiziell aus den oben genannten Gründen nicht zur Anwendung für den menschlichen Organismus deklariert ist.
Nichtsdestotrotz gehört das Recht auf Information und freie Meinungsbildung zweifelsohne zu den Grundrechten eines jeden in einer Demokratie lebenden Menschen – in Jim Humbles Buch „MMS: der Durchbruch“ findet sich eine Reihe von Briefen und Danksagungen samt Adressat und Kontaktadresse, die den therapeutischen Erfolg von MMS bestätigen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Im weiteren Verlauf dieser Abhandlung finden Sie eine äußerst interessante Stellungnahme eines renommierten Mediziners zu diesem Thema. Sehr viele Indizien, wenn bislang auch keine offiziell anerkannten Beweise, die für die Wirksamkeit von MMS sprechen, und die Freiheit auf Information sowie die Möglichkeit, sich danach selbst ein Bild machen zu dürfen, sollten Sie sich nicht entgehen lassen!

Der gesamte Codex Humanus hat sich dem Zweck der Verbreitung dieser wohl für jeden Menschen interessanten Informationen verschrieben. Entscheiden Sie selbst, ob und wie Sie diese verwerten möchten!
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Die Entdeckung des Miracle Mineral Supplement (MMS)

Von seinem Freund zur Goldsuche im Dschungel Südamerikas überredet, packte der 67-jährige Jim Humble alles Notwendige ein und vergaß das für ihn wichtigste Utensil dabei nicht: stabilisierten Sauerstoff! Von verschiedenen Quellen hatte Humble nämlich erfahren, dass stabilisierter Sauerstoff (fachlicher Begriff „Natriumchlorit“ mit der chemischen Formel NaClO2, nicht zu verwechseln mit Natriumchlorid) Wasser desinfiziert –, eine Eigenschaft, die besonders im Dschungel eine lebenswichtige Rolle spielen kann, wenn Trinkwasser mit Typhusbakterien und anderen schädlichen Parasiten verseucht ist.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Von Natur aus sehr experimentierfreudig, überprüfte Jim Humble bereits zu Hause die Aussagen seiner Bekannten, indem er Abwasser mit stabilisiertem Sauerstoff versah und eine Probe davon an ein Testlabor sandte. Das Ergebnis der Laboranalyse lautete: „keimfrei“! Mit der Gewissheit, sein Trinkwasser im Notfall mit stabilisiertem Sauerstoff jederzeit desinfizieren zu können, startete er die Expedition nach Südamerika.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Im tiefsten Urwald Guaynas angekommen, forderte das von Malaria verseuchte Gebiet erste Opfer bei den Begleitern von Jim Humble. Keine Medikamente dabei und fern der Zivilisation war das Leben zweier Kameraden akut in Gefahr. Den beiden Männern ging es zunehmend schlechter und sie hatten nichts zu verlieren, außer ihr Leben, und so willigten sie sofort ein, Humbles Trank zu probieren.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Humbles verabreichte beiden den stabilisierten Sauerstoff mit etwas Wasser. Binnen einer Stunde hörte der Schüttelfrost auf, und vier Stunden später ging es den beiden so gut, dass sie bereits Scherze machten und mit den anderen Männern der Expedition zu wieder zu Abend essen konnten. Im Laufe der ausgedehnten Expedition zog es Humbles Team über unzählige Meilen durch Guayna. Humble tat das, was man von einem guten Menschen erwartete, indem er versuchte, an Malaria und Typhus erkrankte Einheimische mit seinem stabilisierten Sauerstoff zu heilen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Mit der Mixtur gelang ihm lange nicht bei jedem die Heilung, aber eine imposante Heilungsrate von 70 % sorgte doch dafür, dass sich diese über Tausende von Meilen herumsprach, zumal diese Quote den Erfolg üblicher Malaria-Medikamente überstieg. Von den Erfolgen seines „Gesundheitstranks“, wie er ihn nannte, selbst überrascht, erzählte Jim Humble seinem Freund Bob Tate am Telefon von seinen Heilerfolgen bei Malaria. Beide beschlossen daraufhin, den Trank in Guyana zu verkaufen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Es sollte nur wenige Tage dauern, bis Humble und seine Crew vom Gesundheitsministerium von Guayna zu einem Verhör zitiert wurden, dem das Verbot des Verkaufs des Trankes unter Androhung einer Gefängnisstrafe folgte. Wohl wissend, dass ihm die Behörden nicht folgen würden, tauchte Humble zunächst im tiefsten Dschungel unter und beschäftigte sich einige Monate mit der Goldmine, die er zwischenzeitlich entdeckt hatte. Ein halbes Jahr blieb er dort und als in der Stadt Gras über die ganze Angelegenheit gewachsen war, wagte er es zurückzukommen, um ungehindert das nächstmögliche Flugzeug in die USA zu nehmen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Die Weiterentwicklung
In den USA experimentierte er weiterhin an seinem stabilisierten Sauerstoff; erst im späteren Verlauf sollte er herausfinden, dass es sich dabei um Natriumchlorit handelte. Was ihm jedoch fehlte, waren eindeutige Beweise dafür, dass sein Mittel wirklich Malaria bekämpft. Schneller als ihm wahrscheinlich lieb war sollte er die Gelegenheit erhalten, in diesem Punkt sein eigenes Versuchskaninchen zu werden! Zwecks weiterer Goldsuche landete Jim Humble erneut in Guyana und erkrankte prompt an Malaria. Statt sich aber sofort mit den üblichen Malaria-Tabletten behandeln zu lassen, trieb er es auf die Spitze und ließ sich erst in ein Krankenhaus transportieren und sich das Blut abnehmen. Der Befund bestätigte eindeutig die Diagnose „Malaria“, und auch jetzt verzichtete Humble auf die übliche Medikation; stattdessen [...]
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Bevor wir im Einzelnen die Wirkung von MMS bei allerlei Erkrankungen erläutern, ist es zunächst einmal von Interesse, seine allgemeine Wirkungsweise zu ergründen. Wird Natriumchlorit (NaClO2) mit einer Säure (z. B. Essig, Zitronen- oder Limonensaft) angemischt, so entsteht dabei Chlordioxid (ClO2- Dioxychlor), ein Biozid, das in den Stoffwechsel der Viren eingreift und den Nährstofftransport durch die Zellwände unterbindet. Das Chlordioxid raubt über die Oxidation den Viren und Giftstoffen fünf ihrer Elektronen, ein Oxidationsprozess, der zum Tod und anschließendem Zerfall der Viren oder Giftstoffe führt.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Laut Humble ist Chlorodioxid der „effizienteste Killer“ sämtlicher Viren, Bakterien, Schimmel- und Hefepilze sowie anderen Parasiten. Nicht von ungefähr wird es daher in Kliniken und in der Lebensmittelindustrie seit nunmehr über 100 Jahren erfolgreich zur Sterilisierung eingesetzt. Es gibt wohl keinen anderen chemischen oder medizinischen Stoff, der eine vergleichbare Wirkung zeigt; in Verbindung von Natriumchlorit und Essig werden exakt diese Kräfte in unserem Organismus frei, um unerwünschte Mikroorganismen zu eliminieren.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Das Chlordioxid-Molekül (ClO2) zerfällt ebenfalls durch diese Reaktion und setzt Sauerstoff frei. Der Sauerstoff (O2) verbindet sich entweder mit dem Wasserstoff (H2) zu Wasser (H2O) oder mit Kohlenstoff (C) zu Kohlendioxid (CO2). Die Ladung des Chlor-Ions ist nun neutral und geht mit Natrium, also dem gewöhnlichen Speisesalz (NaCl), eine Verbindung ein.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Aus einem zuvor sehr aggressiven Oxidationsmolekül werden demnach über chemische Reaktionen, die in unserem Körper stattfinden, drei harmlose Substanzen gebildet. Während diese Grundsubstanzen entstehen, sterben schädliche Parasiten im Verlauf dieses Prozesses ab.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Auswirkung von MMS auf unser Blut

Die positive Wirkungsweise von Miracle Mineral Supplement ist nicht nur per Blutuntersuchung messbar, wenn man etwa nach aktiven Viren sucht, sondern unter einem Spezialmikroskop sehr eindrucksvoll live zu beobachten!
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
„Betrachtet man das Blut unter einem Dunkelfeld-Mikroskop, offenbart sich die belebende Wirkung von MMS. In belastetem Blut zeichnen sich die Oberflächen der roten Blutkörperchen schlecht ab. Oft sind diese miteinander verklebt, was auf eine Übersäuerung und einen Mangel an Wasser und Mineralstoffen hinweist. Eineinhalb Stunden nach der Einnahme von 10 Tropfen MMS, die mit Säure aktiviert wurden, zeigt das selbe Blut eine deutliche Verbesserung: die roten Blutkörperchen sind viel weniger verklumpt und – was noch wichtiger ist – die weißen Blutzellen des Immunsystems bewegen sich zu den noch verbliebenen Kristallisationsklumpen hin. Die entsprechenden Filmaufnahmen belegen, dass die weißen Blutkörperchen nach der Einnahme von MMS 10x aktiver waren.“
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wie bedeutend diese vier Sätze sind, wird zum einen daran deutlich, wenn man sich vergegenwärtigt, dass der Mensch bis zu 40 Tage ohne Nahrung, bis zu 5 Tage ohne Wasser und lediglich wenige Minuten ohne Sauerstoff überleben kann. Sauerstoff ist also der mit Abstand wichtigste Stoff für uns. Da rote Blutkörperchen, wie wir weiter oben lesen konnten, für den Sauerstofftransport in die Zelle verantwortlich sind, ist deren Regenerierung und Aktivierung für unsere Gesundheit ungemein wichtig. Die Aktivierung der weißen Blutkörperchen, die für unser Immunsystem (Abwehr von Viren, Bakterien und anderen Schädlingen sowie Fremdstoffen) zuständig sind, um den Faktor 10 macht dies zu einem runden Paket. Damit wäre wohl die starke Wirkung von MMS auf unser Immunsystem eindeutig belegt und eine allgemeine, zellbelebende Wirkung ebenfalls.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wir halten zusammenfassend fest:

- MMS setzt die Kräfte von Chlordioxid frei, das in der Desinfektion von Viren, Bakterien, Schimmelpilzen und anderen Parasiten als unschlagbar gilt.
- Gleichzeitig aktiviert es erheblich die weißen Blutkörperchen; damit stärkt es das Immunsystem.
- Es versorgt über die roten Blutkörperchen unsere Zellen effizienter mit Sauerstoff.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Jim Humbles Empfehlungen für allgemeine Erkrankungen
- Beginnen Sie mit 1 Tropfen aktiviertem MMS.
- Steigern Sie die Dosis um einen weiteren Tropfen, wenn Sie keine Übelkeit verspüren.
- Nehmen Sie jeweils eine Dosis morgens und eine abends.
- Erhöhen Sie die Dosis von einem Tag zum nächsten um jeweils einen aktivierten Tropfen.
- Im Falle von Übelkeit die nächste Dosis um 1 Tropfen senken, diese gesenkte Dosis 1–2 x verwenden und dann wieder versuchen zu erhöhen.
- Auf diese Weise schrittweise so lange die Dosis erhöhen, bis man [...]
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Jim Humbles MMS-Einnahmeprotokoll für Kinder

- Vorgehensweise wie beim Standard-Protokoll (siehe oben) mit dem Unterschied, dass die Kinder mit der Hälfte der Dosis beginnen (Hälfte des Glases auskippen!).
- Die maximale Tagesdosis beträgt 3 Tropfen pro 12 kg Körpergewicht.
- Säuglinge sollten niemals mehr als 2 Tropfen/Tag erhalten.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
MMS-Wirkung und Anwendung bei Malaria

Keine andere Krankheit wurde so häufig durch MMS geheilt wie Malaria. Laut Jim Humble hat das Miracle Mineral Supplement bereits 75 000 Patienten mit Malaria geheilt.

Bedenkt man, dass Jahr für Jahr ca. 1 Million Menschen an Malaria sterben, erzeugt es Fassungslosigkeit, dass nur wenige Ärzte jemals etwas von MMS gehört haben, geschweige denn dieses breitflächig Anwendung bei Malaria findet.

Anwendung: 15 Tropfen MMS, nach ein bis zwei Stunden weitere 15 Tropfen MMS. Sollten nach vier Stunden die Symptome nicht abgeklungen sein, eine dritte Dosis von 15 Tropfen MMS anschließen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wirkung und Anwendung von MMS bei Paradontitis und  Zahnfleischentzündungen

Bei Infektionen und Entzündungen von Zahnfleisch zeigt sich MMS äußerst wirkungsvoll, und dies bereits in kürzester Zeit. Ein entzündeter Zahn, so Jim Humble, lässt sich bereits innerhalb von nur vier Stunden heilen, Parodontitis und andere Infektionen verschwinden nach spätestens einer Woche, und nach drei Wochen ist damit zu rechnen, dass der gesamte Mundraum vollkommen gesund ist.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wirkung und Anwendung von MMS gegen Arteriosklerose

Arteriosklerose bezeichnet einen Zustand, bei dem die Blutgefäße aufgrund von Einlagerungen durch Cholesterin und Calcium schrittweise verstopfen, was zum Herzinfarkt oder Schlaganfall führen kann. Die vorherrschende Meinung der Schulmedizin, man könne Arteriosklerose nicht rückgängig machen, wurde durch unzählige repräsentative Studien widerlegt. Laut Humble eignet sich MMS sehr gut dazu, in kürzester Zeit die Plaques zu entfernen. In seinem Buch erwähnt er, dass ihm mehrere Personen berichtet hätten, dass sie mit MMS die cholesterinbedingten Ablagerungen in ihren Arterien reduzieren konnten. Darunter war eine Dame, deren Arterien zu 80 % verstopft waren und die nach 30 Tagen, während denen sie 3 x eine Dosis von je 15 Tropfen MMS nahm, ihre Verstopfung auf unter 50 % hat senken können!
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wirkung und Anwendung bei Herpes

Jim Humble empfiehlt eine stufenweise Einnahme über mehrere Wochen. Man soll mit 1 Tropfen beginnen und langsam steigern, bis man 5–6 x am Tag 2–4 Tropfen einnimmt. Nach zwei Wochen ist mit ersten Ergebnissen zu rechnen. Jim Humble empfiehlt die Kombination von MMS mit Dimethyl- sulfoxid (DMSO).
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `

Wirkung von MMS bei Diabetes

Ähnlich wie bei verschiedenen Formen von Krebs (als sekundärer Faktor!) und diversen Herzinfarkten vermuten viele Forscher hinter der Zuckerkrankheit bestimmte Viren. Der Virus, der vereinzelt für Diabetes verantwortlich gemacht wird, nennt sich Coxsackie-B-Virus. Dieser soll der Virusthese nach die Bauchspeicheldrüse angreifen und zur Bauchspeicheldrüsenentzündung mit hieraus resultierender Diabetes führen.`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
MMS heilt Bauchspeicheldrüsenkrebs

Humble beschreibt seine ersten Erfahrungen mit MMS bei Krebs als äußerst erfolgreich. Es handelte sich um einen Bauchspeicheldrüsenkrebs, an dem einer seiner Bekannten litt. Als die Ärzte bei dem Mann ein Rezidiv feststellten, wollten sie ihn unbedingt operieren. Dieses lehnte Humbles Bekannter jedoch ab, stattdessen entschied er, es mit dem Chlordioxid, aktiviert mit Essig, zu versuchen! Bereits zwei Wochen später hatten sich die Krebswerte,[...]

`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Anwendung bei Krebs inklusive Leukämie:

1. Tag: morgens 2 Tropfen MMS, nachmittags 3 Tropfen MMS.

2. Tag: morgens 4 Tropfen MMS, danach alle vier Stunden 4 Tropfen, danach alle zwei Stunden 4 Tropfen.

Die Dosis sollte nun laut Jim Humble stetig erhöht und die Abstände zwischen die Verabreichungen verkleinert werden. Man solle nicht zögern, die Dosis auf 2 x täglich 30 Tropfen oder 4 x täglich 15 Tropfen zu erhöhen, falls nötig. Sollte sich Übelkeit einstellen, die Dosis senken und erst wieder schrittweise steigern, sobald die Übelkeit abgeklungen ist.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Miracle Mineral Supplement erfolgreich bei Hautkrebs

Der Hautkrebs ist eine Besonderheit innerhalb von Tumoren, und zwar insofern, als dessen Entwicklung auf der Haut meistens ersichtlich ist. Beim Hautkrebs wird das MMS lokal auf die betroffene Hautstelle aufgetragen; innerhalb einer Woche verschwindet der Krebs für gewöhnlich.

Anwendung von MMS bei Hautkrebs:

15 Tropfen MMS 2 x täglich 

(Jim Humble berichtet von einem Bekannten, der die Dosis bis auf 25 Tropfen steigerte und bei dem das Melanom nach zwei Wochen verschwunden war.869)
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Sicherlich haben auch Sie bereits davon gehört, dass es „gute“ und „schlechte“ Fette gibt. Fette also, die einerseits in unserer Überflussgesellschaft durchaus krank machen können – andere Fette wiederum, die für unseren Organismus lebensnotwendig sind. Den Wenigsten ist dabei bekannt, dass es innerhalb der zweitgenannten Gruppe der guten Fette auch solche gibt, die als echte Gesundmacher fungieren können. Zu den Letzteren gehören zweifelsohne die Omega-3-Fettsäuren, die wichtige Stoffwechselfunktionen im menschlichen Körper beeinflussen und aufgrund dessen sowohl der Vorbeugung als auch der Behandlung etlicher Erkrankungen, wie Krebs, Herzkreislauferkrankungen, Alzheimer und Arthritis bis hin zu Depressionen und Asthma dienen können.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Gemäß einer Studie von Professor Michael Crawford vom Institute of Brain Chemistry beeinflussen Omega-3-Fettsäuren bereits im Mutterleib das Sehvermögen und die Intelligenz des Embryos und ihre Einnahme durch die werdende Mutter kann selbst im Erwachsenenalter des Menschen noch darüber entscheiden, ob man für Gesundheitsprobleme, wie Herzkreislauferkrankungen, anfällig ist oder nicht. Bei den Omega-3- Fettsäuren handelt es sich also um eine natürliche Substanz, die von Beginn unseres Lebens an dieses in erheblichem Maße[...]
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
30 g pro Tag können laut zahlreichen Studien das Risiko für einen tödlichen Herzinfarkt oder plötzlichen Herztod um die Hälfte reduzieren. Dies ist bereits mit zwei bis drei Fischmahlzeiten pro Woche gewährleistet. Des Weiteren weisen jüngste Studienergebnisse darauf hin, dass Omega-3-Fettsäuren über die immens wichtige, einzigartige Eigenschaft verfügen, die Verkürzung der Telomere an unseren Chromosomen zu verlangsamen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Die Telomere dienen quasi als „Schutzkappen“ für unsere Chromosomen und schützen damit unsere Zellen vor Alterung. Die Telomerlänge gilt unter den Altersforschern als untrüglicher Maßstab für das biologische Lebensalter, und die Fähigkeit der Omega-3-Fettsäuren, diese vor Verkürzung zu schützen, gilt als ein deutliches Indiz dafür, dass Omega-3-Fettsäuren unsere Zellen, und damit uns, jung erhalten können und lebensverlängernd wirken.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Während wir uns um die Zufuhr der Omega-6-Fettsäuren nicht gesondert kümmern müssen, da diese reichlich in unserer Nahrung vorhanden sind, stellen Omega-3-Fettsäuren eine besondere Herausforderung dar, denn diese kommen in unserer gewohnten, modernen Nahrung eher selten vor. War die ursprüngliche Ernährung bezüglich der Omega-Fettsäuren früher in Balance, ist sie heute alles andere als ausgeglichen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Gemäß dem Ernährungsbericht 2004 der Deutschen Gesellschaft für Ernährung (DGE) nehmen Männer durchschnittlich lediglich 250 mg EPA/DHA pro Tag auf, Frauen nur 150 mg EPA/DHA (Näheres siehe unten). Das optimale Verhältnis der Omega-Fettsäuren zueinander läge bei 2 bis 4 Omega-6- Fettsäuren zu 1 Omega-3-Fettsäure. Tatsächlich liegt aber das heutige Verhältnis bei bis zu 20:1, was unserer Gesundheit schadet und was es dieser zu Liebe zu ändern gilt.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Zu den wichtigsten Omega-3-Fettsäuren zählen

Alpha-Linolensäure (ALA): Die Alpha-Linolensäure (ALA) ist dreifach gesättigt und kommt in Leinöl, Rapsöl und Walnussöl vor.

Eicosapentaensäure (EPA): Die Eicosapentaensäure (EPA) ist fünffach ungesättigt und entstammt dem Fett von Kaltwasserfischen, wie Makrele, Hering oder Lachs.

Docosahexaensäure (DHA): Die Docosahexaensäure (DHA) ist eine sechsfach ungesättigte Fettsäure aus Fischölen und einigen Algen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Da Omega-3-Fettsäuren also hauptsächlich in fetten Kaltwasserfischen, wie Hering und Makrele, sowie in Pflanzenölen, wie Leinsamenöl, Rapsöl und Sojaöl, vorkommen, sollte man diese Lebensmittel innerhalb der individuellen Ernährungszusammenstellung entsprechend stark berücksichtigen, um eine hinreichende Versorgung und ein physiologisches Gleichgewicht der Omega- Fettsäuren zueinander zu gewährleisten. Die Wichtigkeit einer ausreichenden Zufuhr von Omega-3-Fettsäuren wird nämlich deutlich, wenn man sich deren Funktionen und Aufgaben bewusst wird, die unter anderem für die
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Es verwundert daher nicht, dass Omega-3-Fettsäuren einen großen positiven Einfluss auf unsere Gesundheit nehmen und dabei selbst chronische Erkrankungen, wie Diabetes, Rheuma und Alzheimer, positiv beeinflussen können und dazu Herzinfarkt, Arteriosklerose und sogar Krebs vorbeugen können.

Auf den folgenden Seiten erfahren Sie alles Wissenswerte um die Omega-3- Fettsäuren. Sie erfahren Genaueres über das Vorkommen, die vorbeugende und therapeutische Wirkung bis hin zur expliziten Anwendung bei konkreten Erkrankungen oder zu deren Vorbeugung, untermauert durch repräsentative Studien.

`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Fette übernehmen einige lebenswichtige Funktionen, so unter anderem die Funktion der

- Sättigung: Fettreiche Ernährung sättigt schneller als fettarme.
- Isolierung: Das Unterhautfettgewebe schützt den Körper vor Kälte.
- Schutz: Die inneren Organe werden vom Fettgewebe vor mechanischen Einflüssen geschützt.
- Bau: Fett ist am Aufbau von Zellmembranen beteiligt.
- Bereitstellung der fettlöslichen Vitamine A, D, E und K.
- Vorstufe hormonähnlicher Regelsubstanzen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Herztod prophylaktisch mit Omega-3-Fettsäuren um 40– 45 % verringert Gemäß einer US-Studie an der Harvard Medical School in Boston an mehr als 45 000 Teilnehmern ohne vorangegangene Herzprobleme konnte eine tägliche Zufuhr von 250 mg EPA/DHA das Risiko für einen plötzlichen Herztod um 40–50 % senken!
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Herzinfarkt und Schlaganfall um 30 % verringert, plötzlicher Herztod sank um 45 %

In einer großangelegten Studie an Patienten aus 172 italienischen Krankenhäusern an 11 000 Patienten erbrachte man den Beweis für die Schutzwirkung von Omega-3-Fettsäuren. Die Herzinfarkt- und Schlaganfallrate sank gegenüber der Kontrollgruppe um 30 %, der plötzliche Herztod sank sogar um 45 %.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren bei entzündlichen Erkrankungen

In einer Studie konnten Omega-3-Fettsäuren das Auftreten von entzündlichen Erkrankungen mindern 

Omega-3-Fettsäuren in Studien bei Arthritis und Rheuma
Die Erhöhung des Verhältnisses von Omega-3- zu Omega-6-Fettsäuren konnte in Studien das Auftreten rheumatoider Arthritis senken.

Omega-3-Fettsäuren bei Arthritis und chronischer Gelenkarthrose
Omega-3-Fettsäuren wirken dem entzündlichen Zustand entgegen. Hierbei verdrängen die in den Omega-3-Fettsäuren enthaltenen EPA und DHA (Omega-3-Fettsäure) die entzündungsförderliche Arachidonsäure (Omega-6- Fettsäure) aus der Lipidmembran der Zelle und verhindern so die Bildung der im Übermaß schädigenden Eicosanoide 2 und Prostaglandin E2.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
US-Studie empfiehlt 3 g Fischöl täglich gegen rheumatische Arthritis

Laut einer US-Studie wirken sich 3 g Fischöl täglich positiv gegen rheumatische Arthritis aus.884 Dr. Paul Fortin analysiert mit seinem Wissenschaftlerteam in Boston 1995 elf klinische Studien, die den Nutzen der Omega-3-Fettsäuren bei Arthritis behandelten. Er konnte diese positiven Studien insgesamt bestätigen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren ergänzen vorteilhaft die Behandlung von entzündlichen Erkrankungen und ermöglichen eine Verringerung der Medikamentendosis.

Eine enterale Ernährung mit mehrfach ungesättigten Omega-3-Fettsäuren erzielt bessere Behandlungsergebnisse bei chronisch entzündlichen Erkrankungen, wie entzündliche Darmerkrankungen, Arteriosklerose, Lungenfibrose oder rheumatoide Prozesse als Medikamente allein und erlaubt dabei eine Verringerung der Dosis entzündungshemmender Medikamente, die über zahlreiche Nebenwirkungen verfügen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren und Diabetes

Bekanntlich sind Diabetiker stark gefährdet, an Herzkreislaufleiden zu erkranken. Omega-3-Fettsäuren sind regelrechte Schutzstoffe, die den Herzkreislauferkrankungen entgegenwirken. Einigen Studien zufolge konnte die Insulinresistenz sogar verbessert werden.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren erfolgreich bei Bronchitis, Asthma und anderen Atembeschwerden

Der Lungenschleim Asthmakranker verfügt über einen unverhältnismäßig hohen Anteil an Entzündungsbotenstoffen, die aus der Arachidonsäure der Omega-6-Fettsäuren gebildet werden. Omega-3-Fettsäuren gelten als Antagonisten der Omega-6-Fettsäuren, und die Korrektur des Missverhältnisses über zusätzliche Gaben von Omega-3-Fettsäuren verbessert daher die Atembeschwerden.896 Laut der angesehenen amerikanischen Fachzeitschrift Critical Care Medicine zeigen Omega-3-Fettsäuren selbst bei Schwerstfällen, die an Atemnot leiden, entscheidende Wirkung.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren helfen gegen Demenz und Alzheimer

Demenz steigt mit fallendem Fischkonsum: Sowohl im Blut von

Alzheimer-Erkrankten als auch im Blut von Demenz-Patienten werden stets niedrige DHA-Werte beobachtet. Eine niederländische Studie an 5000 Menschen im Alter von 55 Jahren und älter zeigte nach 21/2 Jahren Beobachtung, dass bei denjenigen, die wenig Fisch aßen, Demenz droht.908 Demenz fällt mit steigender Ergänzung durch Omega-3-Fettsäuren: Nach einer zwölfmonatigen Zufuhr mit DHA konnte eine signifikante Verbesserung des Demenz-Auftretens beobachtet werden.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren wirken gegen Osteoporose

Calcium ist bekanntlich der wichtigste Baustoff für unsere Knochen. Verlieren die Knochen an Calcium, werden sie porös und neigen zu Brüchen – man nennt diese Erkrankung auch Osteoporose. Beobachtungen haben ergeben, dass Menschen, die viele Omega-3-Fettsäuren konsumieren, tatsächlich eine höhere Knochendichte aufweisen. Omega-3-Fettsäuren erhöhen also die Aufnahme von Calcium im Darm, aktivieren außerdem die Osteoblasten und deaktivieren die knochenabbauenden Osteoklasten.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fettsäuren bei Herzrhythmusstörungen

Omega-3-Fettsäuren üben mithilfe verschiedener Mechanismen einen positiven Einfluss auf Herzrhythmusstörungen aus. So lagern sie sich beispielsweise direkt an den Ionenkanälen in der Zellmembran der Herzmuskelzelle, die für die Kontraktion der Herzmuskelfaser zuständig ist, an und verringern die Erregbarkeit an diesen Kanälen und damit das Kammerflimmern.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren können Arteriosklerose rückgängig machen

Arteriosklerose gilt als DER Hauptgrund für die Entstehung von Herzkreislauferkrankungen bis hin zum Herzinfarkt und Schlaganfall. Nichts fordert mehr Tote in den Industrieländern, wie Arteriosklerose! In einer klinischen Studie an 233 Patienten, konnte Prof. Dr. von Schacky im Jahre 1999 nachweisen, dass durch die Gabe von 6 d g eines Fischölkonzentrats über einen Zeitraum von 24 Monaten eine nachweisbare Verringerung der arteriosklerotischen Veränderungen erfolgte.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fettsäuren gegen Arthritis

Unsere moderne Ernährung verleitet dazu, mit Fleisch, Wurst, Eiern, Milch und Milchprodukten ein Zuviel an Botenstoffen aufzunehmen, die zu entzündlichen Reaktionen im Körper führen. Zu diesen Botenstoffen zählen Eicosanoide, die aus der mehrfach ungesättigten Fettsäure „Arachidonsäure“ gebildet werden.

Omega-3-Fettsäuren verhindern entzündungsfördernde Mediatoren sowie Gelenkschwellungen. EPA (Omega-3-Fettsäure) bindet dabei diejenigen Wirkstoffe, die die Entzündungsbotenstoffe bilden und die schädliche Arachidonsäure aus den Zellen verdrängen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fettsäuren gegen Tinnitus

Einer großen Studie zufolge sind besonders diejenigen Menschen für Tinnitus anfällig, die einen auffällig niedrigen DHA-Spiegel aufweisen. Dies ist wahrscheinlich auf die gestörte Fließeigenschaft des Blutes im Innenohr zurückführbar.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fettsäuren bei Diabetes

Diabetiker sind stark gefährdet, an Herzkreislaufleiden zu erkranken. Omega- 3-Fettsäuren sind regelrechte Schutzstoffe, die den Herzkreislauferkrankungen entgegenwirken. Einigen Studien zufolge konnte die Insulinresistenz sogar verbessert werden.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren und die Wirkung gegen Magen- und Zwölffingerdarmgeschwüre 

Omega-3-Fettsäuren bekämpfen wirkungsvoll das Bakterium „Helicobacter“, das die Schleimhäute des Magens und des Zwölffingerdarms befällt und dort Geschwüre bildet.

Omega-3-Fettsäuren bekämpfen das Bakterium und unterdrücken dessen Fortpflanzung. Besonders bei denjenigen Menschen, die wenige Omega-3- Fettsäuren über die Nahrung aufnehmen, taucht der Helicobacter besonders häufig auf.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren wirken bei Nierenerkrankungen

Die Einnahme von Omega-3-Fettsäuren konnte in Studien bei Entzündung der Glomeruli (kleinste Filtereinheit der Nieren), der IgA-Nephropathie (IgAN) positiv auf den Krankheitsverlauf einwirken.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren wirken gegen Osteoporose

Calcium ist bekanntlich der wichtigste Baustoff für unsere Knochen. Verlieren die Knochen an Calcium, werden sie porös und neigen zu Brüchen – man nennt diese Erkrankung auch Osteoporose. Omega-3-Fettsäuren erhöhen die Aufnahme von Calcium im Darm, aktivieren außerdem die Osteoblasten und deaktivieren die knochenabbauenden Osteoklasten.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren helfen bei Aufmerksamkeitsmangel- und Hyperaktivitäts-Syndrom (ADHS)  

Personen mit Aufmerksamkeitsdefiziten und Hyperaktivitätsstörungen können von den regelmäßigen Gaben von Omega-3-Fettsäuren stark profitieren, da Omega-3-Fettsäuren das im Gehirn verfügbare Dopamin erhöhen. Hierbei wirken sie ähnlich wie die gängigen Stimulantien, die zur Behandlung von ADHS eingesetzt werden. Die Wirkung hat sich übrigens als langfristig erwiesen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fettsäuren bei Ekzemen und Schuppenflechte

Um schuppige, trockene Haut sowie Ekzeme und Schuppenflechte zu vermeiden, empfehlen Forscher Omega-3-Fettsäuren. Bei chronischen Entzündungskrankheiten, wie den Schuppenflechten, sollte die Einnahme langfristig erfolgen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3 Fettsäuren gegen Neurodermitis

Wenn Omega-3-Fettsäuren bei Ekzemen und Schuppenflechten helfen, liegt die Vermutung nahe, dass sie auch bei Neurodermitis helfen. Therapeutischen Erfahrungsberichten und pharmakologischen Untersuchungen zufolge helfen Omega-3-Fettsäuren auch gegen Neurodermitis.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fettsäuren auf die Hirnleistung

Aufgrund der verstärkten Durchblutung des Gehirns wird die Hirnleistung verbessert und der Demenz vorgebeugt. Rund 1/5 unserer Gehirnfettmasse sowie der Fettmasse unseres Nervensystems besteht aus Docosahexaensäure (DHA), die im fetthaltigen Meeresfisch sowie in bestimmten Algen vorkommt. Die Omega-3-Fettsäuren nehmen im Bereich des zentralen Nervensystems sowie im neurologischen und psychischen Bereich eine wichtige Rolle ein.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fettsäuren gegen Prostatakrebs

Es gilt als wissenschaftlich erwiesen, dass die regelmäßige Einnahme von Omega-3-Fettsäuren das Risiko für ein Prostatakarzinom senkt. Dahingehend lautet auch die Empfehlung der Health Foundation, Omega-3-Fettsäuren verstärkt in der Ernährung zu berücksichtigen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fettsäuren gegen Brustkrebs

In einer Vergleichsstudie zum Brustkrebsrisiko von Japanerinnen und Nordamerikanerinnen konnte ein fünffach niedrigeres Risiko von Brustkrebs bei den Japanerinnen beobachtet werden, die traditionell mit der fischreichen Ernährung viel mehr Omega-3-Fettsäuren zu sich nehmen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren und Vegetarier

Die Mangelsituation stellt sich gerade für Vegetarier nicht leichter dar, da diese bekanntlich sowohl Fisch als auch Fischöl meiden. Hieraus folgt, dass die Zufuhr von EPA und DHA gering ausfällt, was zu einem ausgeprägten Mangel an Omega-3-Fettsäuren führen kann. Für Ovo- beziehungsweise Ovo-Lacto- Vegetarier bieten sich indessen Eier an, besonders aus spezieller Herstellung, wenn die Legehennen mit DHA oder aber mit einem mit Leinsamen angereicherten Futter gefüttert wurden. Zusätzlich empfiehlt es sich, verstärkt auf Lein-, Walnuss- und Rapsöl zurückzugreifen; unterstützend kann eine Nahrungsergänzung in Form von DHA-reichem Algenöl aufgenommen werden. Ein Engpass ist also selbst für Vegetarier durchaus vermeidbar.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fettsäuren aus Fischöl- und Mikroalgenkapseln

Wer lieber auf Nahrungsergänzungen zurückgreift, erhält die Omega-3- Fettsäuren ebenfalls in Form von Fischölkapseln und Mikroalgenkapseln, die von der Wertigkeit mit den Omega-3-Fettsäuren aus natürlicher Nahrung vergleichbar sind. Grundsätzlich wird angeraten, mit einer kleineren Dosis von ca. 0,5 g bis 1 g/Tag zu beginnen und diese Dosis schrittweise auf 1,5 bis 3 g pro Tag zu steigern. Dies gibt einem empfindlichen Magen-Darmtrakt die Möglichkeit, sich an die zusätzliche Fettverdauung des Fischöls zu gewöhnen. Gleichzeitig wird die Aufnahme von 400–800 IU Vitamin E zu den Fischkapseln empfohlen.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Zumeist sind die Menschen anfangs sehr skeptisch, wenn sie von einer Naturheilsubstanz hören mit einem großen Spektrum an wunderbarer Wirkung.

Wie kann denn ein und dieselbe Substanz bei Augenproblemen helfen, Hautfalten reduzieren, Gelenke wieder schmerzfrei machen, Herzinfarkten vorbeugen und auch noch der biologischen Alterung entgegenwirken? Die Schulmedizin lehrt uns schließlich eine sehr isolierte Sichtweise - wir haben einen spezialisierten Augenarzt, einen Dermatologen und einen Orthopäden für die besagten Wehwehchen– ein fataler Fehler, denn unser Körper ist eine Einheit und daher sehr ganzheitlich zu betrachten..!
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Wie aber kann nun eine einzige Naturheilsubstanz positiven Einfluss auf all die Dinge nehmen? Während Unwissende (nicht selten darunter promovierte Mediziner) sich wundern oder aber hämisch darüber spotten, ist die Erklärung für dieses Phänomen, das eigentlich keins ist, eine doch sehr einfache:

für die Entstehung zahlreicher Erkrankungen und Beschwerden ist die Ursache nämlich sehr oft eine und dieselbe: Entzündungen, oxidativer Stress oder kollagene Degeneration beispielsweise!
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Symptome zeigen sich allerdings nur deshalb an unterschiedlichen Organen zuerst, weil jeder Mensch ein Individuum ist und entsprechend individuell andere Schwachpunkte aufweist.

Wenn die Augen, die Haut, die Gelenke, das Herz von Entzündungen, oxidativem Stress oder kollagenem Abbau bedroht sind, dann ist es doch nur verständlich, wenn sie im Umkehrschluss alle gemeinsam von ein und derselben Natursubstanz, bis hin zum Abklingen jeglicher Beschwerden profitieren – nämlich von einer Natursubstanz, die Entzündungen reduziert, oxidativen Stress abbaut und Kollagene repariert – hier wären wir bei OPC, einem Multitalent, das exakt diesen Anforderungen gerecht wird!
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Und da biologische Alterung vordergründig durch freie Radikale, Entzündungsprozesse und Kollagendegeneration im Körper verursacht wird, nimmt OPC auch diese Herausforderung erfolgreich auf seine starke Schulter…
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Vitaminmangel und die Rolle des OPC

Wie bereits weiter oben im Buch berichtet, ist der chronische Vitalstoffmangel in der Bevölkerung das derzeit größte gesundheitliche Problem überhaupt.

Unabhängige Studien, wie die des renommierten Lebensmittellabors Karlsruhe (Sanatorium Oberthal), sowie des schweizer Pharmaunternehmens Geigy sind den staatlichen Beratungszentralen ein Dorn im Augen, und werden nicht an die Ärzte und die Bevölkerung weitergetragen.

Waren es schließlich exakt diejenigen Studien, die unabhängig voneinander einen erschreckenden Rückgang der Vitalstoffe in unserem Obst und Gemüse in den letzten 30 Jahren um bis zu 92% attestiert haben! Als Gründe hierfür nennen die Studienverantwortlichen: ausgelaugte Böden, Luftverschmutzung, lange Lagerung und zu schnelles Wachstum.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

Bevor wir differenziert auf die einzelnen Krankheiten zu sprechen kommen, die OPC zu vermeiden und sogar zu heilen vermag, wird auf einige wichtige Mechanismen eingegangen, die das OPC so unsagbar wertvoll machen:

• während Vitamin C 95 % des gesamten Stoffwechsels positiv beeinflusst, besitzt OPC die Fähigkeit, diese Wirkung zu VERZEHNFACHEN.950

• OPC gilt als eines der stärksten Antioxidantien, 18–20 x so stark wie Vitamin C und 40–50 x so stark wie Vitamin E.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

• im Gegensatz zu Vitamin C bindet sich OPC (Vitamin P) an Protein, besonders an Kollagen und Elastin. Da diese Organe hauptsächlich aus Elastin und Kollagen bestehen, verstärkt OPC die Effizienz der Reparaturvorgänge an Haut, Blutgefäßen, inneren Organen, Knochen usw. um ein Vielfaches.

• die Widerstandsfähigkeit der Blutgefäße verdoppelt sich beispielsweise bereits 24 Stunden nach der ersten Einnahme von OPC; insgesamt verdreifacht sie sich im Laufe der Zeit.

• dies ist besonders bei Schlaganfallpatienten und Schlaganfallgefährdeten nicht hoch genug einzuschätzen, wird der Schlaganfall (Hirnschlag) doch durch innere Blutungen im Hirnbereich verursacht.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

• noch stärker als Vitamin C vermag OPC die Haut zu regenerieren, alte Falten zu glätten und neuen vorzubeugen.

• OPC verbessert die Fließeigenschaft des Blutes, verhindert die Verklumpungsneigung desselben und erhöht die Gefäßelastizität.

• in seiner Eigenschaft als Protektor verhindert OPC das Eindringen von UV-Strahlen in die Haut und wirkt hier ähnlich wie eine Sonnenschutzcreme, was für Solariumgänger von Interesse ist.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

• während Vitamin C als das stärkste wasserlösliche Antioxidans gilt, wirkt OPC sowohl als wasserlösliches als auch als fettlösliches Antioxidans, erreicht also schützend alle Zellen des menschlichen Körpers.

• ebenso wie Vitamin C durchdringt OPC die Hirnschranke und entfaltet seine antioxidative Wirkung auch an den Hirnzellen; dabei stärkt es die Blutgefäße und hält diese elastisch.

• OPC reguliert die Histamin- und Histidinherstellung, also die beiden Hauptauslöser für diverse Entzündungen und Allergien. Dadurch verhindert oder lindert Vitamin P alle entzündlichen und allergischen Reaktionen im Körper.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

Mithilfe des Internets lassen sich aber keine Informationen mehr unterdrücken; außerdem gibt es zu diesem Thema auch bereits einige sehr empfehlenswerte, qualifizierte Bücher auf dem Markt. Im folgenden Kapitel erhalten Sie ausführlich alle Informationen zu OPC, dem Co-Vitamin von Vitamin C, das nach Meinung vieler Molekularbiologen und Vitaminexperten bereits dem Vitamin C den Rang abgelaufen hat und als eines der stärksten, derzeit bekannten Antioxidantien weltweit gilt.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Ein Paradoxon, das über Jahrhunderte Tausenden von Wissenschaftlern und Forschern Kopfzerbrechen bereitete, findet seinen Ursprung in Frankreich, genauer gesagt in Form von Rotwein. Während allgemein bekannt ist, dass Alkohol unserer Gesundheit deutlich schadet, lässt der Rotweingenuss Menschen offensichtlich länger und vor allem vitaler leben ...

Für Aufmerksamkeit sorgte vor kurzer Zeit eine ältere Dame, mit 123 Jahren der älteste Mensch der Welt, als sie angab, täglich bis zu einen Liter Rotwein zu trinken. Sie war keine Ausnahme, denn in der Tat zählen Franzosen aus dem Süden des Landes zu den ältesten und gesündesten Menschen der Welt.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

OPC (Vitamin P) ist der wichtigste Partner von Vitamin C und hat im Tierversuch bereits unter Beweis gestellt, dass er der einzige bekannte Stoff ist, der Vitamin C um die 10-fache Wirkung zu verstärken vermag. Dies geschieht über die sogenannte „Redox-Reaktion“ (Reduktions-Oxidations-Reaktion), innerhalb derer das OPC verbrauchte Vitamin-C-Moleküle bis zu zehn Mal regenerieren kann.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Im Labor hat man Meerschweinchen in mehrere Gruppen eingeteilt und diese mit unterschiedlichen Vitamin C- und OPC-Mengen versorgt. Je mehr Vitamin C sie bekamen, desto kräftiger wurden sie und umso länger fiel ihre Lebensdauer aus. Das Erstaunliche war, dass sich selbst diejenigen Tiere, die mit sehr wenig Vitamin C versorgt wurden, zusätzlich aber OPC erhielten, in einem ähnlich guten Zustand befanden wie diejenigen, welche die vierfache Menge Vitamin C erhielten. Dies führte zu der Erkenntnis, dass es sich beim OPC um den lange gesuchten Co-Partner von Vitamin C handeln musste.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Die Natur unterstreicht dies dadurch, dass das in Früchten und Gemüse enthaltene Vitamin C niemals ohne seinen Co-Partner, das OPC, vorkommt. OPC wird im gleichen zügigen Tempo wie Vitamin C vom Körper aufgenommen; es gelangt innerhalb von Bruchteilen von Sekunden über die Mundschleimhaut in den Magen und ist bereits nach wenigen Minuten im Blut nachweisbar. Dies allein ist ein deutlicher Hinweis darauf, wie wichtig OPC für den Organismus ist, sodass es bevorzugt behandelt wird.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Vitamin P (OPC) erreicht seine höchste Konzentration im Blut 45 Minuten nach der Einnahme und wird innerhalb von 72 Stunden verbraucht. Im Gegensatz zu Vitamin C ist daher eine mehrmalige Einnahme von OPC am Tag nicht nötig.

Während wir (wie Sie im Kapitel „Vitamin C“ erfahren konnten) ca. 40 Orangen oder aber 7 kg Sauerkraut täglich essen müssten, um unseren natürlichen Vitamin C-Bedarf abzudecken, ist die Bedarfsdeckung mit OPC (Vitamin P) auf natürlichem Wege ähnlich unmöglich. Wir müssten hierfür täglich 2¼ Liter Rotwein trinken (absolut nicht zu empfehlen) oder ½ kg Erdnüsse (mit Häutchen) essen.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Auch hier ist der OPC-Mangel in unserer technologisierten Nahrung den gleichen Faktoren wie beim Vitamin C zuzuschreiben, nämlich der Einstufung der OPC-Quelle als „Abfall“ (Schale von Obst und Gemüse) und deren Entfernung. Aber auch lange Lagerung und industrielle Verarbeitung sowie die Anreicherung von chemischen Haltbarkeitsstoffen tun ihr Übriges.

Dieser von Menschenhand verursachte Mangel an Vitamin C und Vitamin P (OPC) ist exakt der Grund für die steigenden Zivilisationskrankheiten, wie Allergien, Arteriosklerose, Herzkreislauferkrankungen, Gefäßerkrankungen, Krebs und andere.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Und in der Tat bietet die Natur einen imposanten Vergleich an, nämlich in Gestalt der in der Natur freilebenden Tiere. Diese können nicht nur selbst Vitamin C herstellen, sondern besitzen die Fähigkeit, instinktiv eine OPC- reiche Nahrung sehr selektiv auszuwählen.

Diese Tiere kennen keine der oben genannten Erkrankungen, die bei uns Menschen in vielen Fällen nach einem langen Leidensweg zum Tode führen. Selbst Grizzlybären, die Cholesterinwerte von bis zu 400 aufweisen, kennen so etwas wie Arteriosklerose, geschweige denn Herzinfarkt oder Schlaganfall nicht.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Herstellung von OPC

Die Herstellung von OPC ist recht komplex und wird mittels eines komplizierten Extraktionsverfahrens vollzogen. Die Rohstoffe (Rinden, Kerne usw.) werden zunächst zerkleinert und anschließend in Wasser erhitzt. Im anschließenden, von Dr. Masquelier patentierten Extraktionsverfahren, wird das OPC von den anderen Bestandteilen der Rohstoffe getrennt. Im Optimal- fall erhält man dann einen Anteil von 95 % an OPC, im Handel deklariert als „OPC 95“. Ist die Zahl „95“ nicht angemerkt, handelt es sich übrigens zumeist um ein OPC mit einem Prozentanteil von lediglich 40 %.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

Bevor wir differenziert auf die einzelnen Krankheiten zu sprechen kommen, die OPC zu vermeiden und sogar zu heilen vermag, wird auf einige wichtige Mechanismen eingegangen, die das Vitamin P so wertvoll machen:

• während Vitamin C 95 % des gesamten Stoffwechsels positiv beeinflusst, besitzt OPC die Fähigkeit, diese Wirkung zu verzehnfachen
• OPC gilt als eines der stärksten Antioxidantien, 18–20 x so stark wie Vitamin C und 40–50 x so stark wie Vitamin E.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

• im Gegensatz zu Vitamin C bindet sich OPC (Vitamin P) an Protein, besonders an Kollagen und Elastin. Da diese Organe hauptsächlich aus Elastin und Kollagen bestehen, verstärkt OPC die Effizienz der Reparaturvorgänge an Haut, Blutgefäßen, inneren Organen, Knochen usw. um ein Vielfaches.
• Die Widerstandsfähigkeit der Blutgefäße verdoppelt sich beispielsweise bereits 24 Stunden nach der ersten Einnahme von OPC; insgesamt verdreifacht sie sich im Laufe der Zeit.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

• Noch stärker als Vitamin C vermag OPC die Haut zu rege nerieren, alte Falten zu glätten und neuen vorzubeugen.
• OPC verbessert die Fließeigenschaft des Blutes, verhindert die Verklumpungsneigung desselben und erhöht die Gefäßelastizität.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

• In seiner Eigenschaft als Protektor verhindert OPC das Eindringen von UV-Strahlen in die Haut und wirkt hier ähnlich wie eine Sonnenschutzcreme, was für Solariumgänger von Interesse ist.
• Während Vitamin C als das stärkste wasserlösliche Antioxidans gilt, wirkt OPC sowohl als wasserlösliches als auch als fettlösliches Antioxidans, erreicht also schützend alle Zellen des menschlichen Körpers.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

• Ebenso wie Vitamin C durchdringt OPC die Hirnschranke und entfaltet seine antioxidative Wirkung auch an den Hirnzellen; dabei stärkt es die Blutgefäße und hält diese elastisch.
• OPC reguliert die Histamin- und Histidinherstellung, also die beiden Hauptauslöser für diverse Entzündungen und Allergien.
• Dadurch verhindert oder lindert Vitamin P alle entzündlichen und allergischen Reaktionen im Körper.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC und Vitamin C – ein unschlagbares Team

Sollten Sie sich die berechtigte Frage stellen, ob nun Vitamin C das OPC oder OPC das Vitamin C verstärkt, heißt die Antwort ganz einfach: beide Stoffe verstärken und ergänzen sich gegenseitig.

Während die Vitamin C-Einnahme die Schutzwirkung von OPC (Vitamin P) verstärkt, erfahren die wundersamen Funktionen des Vitamin C durch OPC eine Vervielfachung.

Zusammengefasst lässt sich also sagen, dass das OPC gemeinsam mit Vitamin C an fast sämtlichen Vorgängen im Körper beteiligt ist, beide einander optimal ergänzen und verstärken und daher nach Sauerstoff und Wasser die wichtigsten Stoffe für den Menschen darstellen.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Wie lässt sich der persönliche OPC-Bedarf errechnen?

Unumstößlich lässt sich sagen, dass definitiv JEDER Mensch OPC braucht und von einer ausreichenden Zufuhr von OPC enorm profitiert. Da aber, wie bereits beschrieben, die moderne Lebensmittelverarbeitung, lange Lagerungszeiten, ausgelaugte Böden, der Einsatz von Pestiziden, Umwelteinflüsse und anderes mehr OPC und Vitamin C fast gänzlich aus unserer Ernährung verbannt haben und wir über die natürliche Nahrung unmöglich genügend Vitamin C und OPC aufnehmen können, sollte es im Interesse eines jeden liegen, diesen Vitaminmangel durch hochwertige, natürliche Nahrungsergänzungsmittel auszugleichen[...]
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Wie lässt sich der persönliche OPC-Bedarf errechnen?

Die bisherigen Erfahrungswerte suggerieren eine Empfehlung von 2–3 mg OPC pro kg Körpergewicht täglich; eine Einnahme von weniger als 1 mg pro kg Körpergewicht ist hingegen kaum sinnvoll. Der folgenden Tabelle können Sie bequem Ihre Einnahmeempfehlung für Vitamin P/OPC entnehmen: [...]
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC Gegen Entzündungen, Arthritis, Bronchitis, Neurodermitis, Parodontitis, Meningitis

Bei allen Entzündungen, die auf „-itis“ bzw. „-is“ enden spielt die Oxidation (freie Radikale) die entscheidende Rolle. Da OPC sehr starkes Antioxidans darstellt, bekämpft es sehr effektiv das Auftreten von Entzündungen und aller damit zusammenhängenden Erkrankungen. Auf diese Weise beugt OPC/Vitamin P sehr erfolgreich entzündlichen Prozessen vor und lindert bereits bestehende Entzündungen und Krankheiten.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC steigert die Gedächtnisleistung und beseitigt Konzentrationsschwächen 

Gedächtsnisleistungen und Konzentrationsschwächen hängen größtenteils mit dem Nachlassen der Versorgung des Gehirns mit Nährstoffen und Sauerstoff zusammen. Die Oxidation, im Endeffekt die Arteriosklerose, unterbinden eine optimale Zufuhr von Sauerstoff und Nährstoffen. Aufgrund seiner geringen Molekulardichte vermag OPC die Hirnschranke zu überwinden und in seiner Eigenschaft als eines der stärksten bekannten Antioxidantien (20 x so stark wie Vitamin C, 50 x so stark wie Vitamin E) hier seine Arbeit zu verrichten. OPC schützt zuverlässig vor Schädigungen der Hirnzellen und verstärkt die Wirkung des Vitamin C um das Zehnfache. Dieses wiederum verbessert die Hormonproduktion, unter anderem von Dopamin und Melatonin, sowie der Neurotransmitter (Botenstoffe) im Gehirn. Die Aktivierung der [...]
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Atemwegserkrankungen (Bronchitis, Asthma)

Wie beschrieben, ist OPC/Vitamin P stark entzündungshemmend und antiasthmatisch. Dies wirkt sich bei Atemwegserkrankungen wie Bronchitis und Asthma sehr positiv aus und kann den Ausbruch beider Krankheiten minimieren und sogar verhindern.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC gegen Parodontose

Nachweislich führt der Mangel an OPC und Vitamin C zum Untergang der kleinsten Blutgefäße in unserem Zahnfleisch. Dadurch wird die Blutversorgung gestört und damit das Zahnfleischgewebe nicht genügend mit Nährstoffen versorgt und so beeinträchtigt. OPC als bester bekannter Kollagen- und Elastinmodulator stärkt das Zahnfleischgewebe und beugt Parodontose zuverlässig vor.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC/Vitamin P bei Gicht

Auch Gicht gehört zu den entzündlichen Erkrankungen, die auf freie Radikale zurückzuführen ist. Kein Antioxidans kann annähernd so viele freie Radikale gleichzeitig in Zaum halten wie OPC. Gleichzeitig dockt OPC an den hyanilen Knorpel (Gelenkknorpel) an, schützt diesen und baut ihn über die Kollagen- synthese wieder auf. Des Weiteren wirkt OPC in diesem Bereich schmerzlindernd, was die Therapie erleichtert.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC gegen Arthritis/Arthrose

Die Stärke des OPCs liegt gerade in den beiden Faktoren, die die Gesunderhaltung der Gelenke garantieren: nämlich dem Wirken gegen entzündliche Prozesse im Gelenk (Arthritis) und im Schutz und Neuaufbau des hyanilen Gelenkknorpels. So wird der Knorpel vor Arthritis und Arthrose geschützt und sogar neu aufgebaut.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC/Vitamin P bei Osteoporose

Knochenschwund (Fachbegriff „Osteoporose“) ereilt zumeist viele Frauen in den Wechseljahren – betrifft aber aufgrund des ungesunden Lebensstils und der Umweltfaktoren auch immer mehr junge Menschen beider Geschlechter. OPC vermag durch die Bildung von Prokollagen und die Kollagensynthese die Knochenmatrix zu unterstützen und so der Osteoporose vorzubeugen.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC hilft bei Krampfadern und Besenreisern

Durch die Reparaturvorgänge an den Gefäßwänden, die Verbesserung der Elastizität und den gleichzeitigen Abbau von Ablagerungen wird Krampfadern sowie Besenreisern vorgebeugt; bestehende Krampfadern und Besenreiser können verschwinden.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC gegen Hämorrhoiden

OPC verbessert die Elastizität der Blutgefäße im Anusbereich und verhindert Ablagerungen in den Blutgefäßen; beides beugt Hämorrhoiden vor und sorgt für Linderung.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC bei Akne und Pickel

Durch die beschleunigte Regeneration der Haut (aufgrund der Kollagen- und Elastinsynthese) erneuert sich die Haut schneller, und es wird der Akne oder Pickeln vorgebeugt.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC/Vitamin P gegen Cellulitis/schwaches Bindegewebe

Die Paradedisziplin von OPC ist die Straffung des Bindegewebes jeglicher Art. Durch den aktiven Aufbau und die Erneuerung des Kollagens und Elastins wird schlaffem Gewebe und Cellulitis vorgebeugt und eine bestehende Gewebeschwäche gemindert.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC bei Entgiftung

Erwiesenermaßen fördert OPC (Vitamin P) den Abfall der sogenannten Oxydasen und unterstützt die Leber beim Abbau von Toxinen und anderen giftigen Stoffen im Körper. Besonders Menschen, die viel Alkohol trinken, rauchen oder Hormone einnehmen müssen, sind auf die Zufuhr von OPC angewiesen.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
ANTIOXIDATION = REGENERATION  – GESUND- und JUNGERHALTUNG

Im Umkehrschluss bedeutet diese Tatsache also, dass wir vor den meisten Erkrankungen verschont blieben und nach Abschluss unseres Wachstums biologisch NICHT altern würden, könnte der Körper sämtliche freie Radikale neutralisieren. Da OPC (Vitamin P) eines der effizienteste Antioxidantien ist (40–50 x so effektiv wie Vitamin E und 18–20 x so effektiv wie Vitamin C) kommt diesem eine immense Bedeutung zu.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
KOLLAGEN-ELASTIN-RESYNTHESE = ERNEUERUNG DES GEWEBES/DER ORGANE

Grob dargestellt, bestehen die wichtigsten Gewebeformen des Menschen, die über die Lebensdauer, das Alter, die Jugendlichkeit und die Gesundheit entscheiden (Haut, Blutgefäße, Nervenbahnen, Gelenke, Organe, Knochen usw.) hauptsächlich aus den beiden Eiweißbausteinen (Aminosäuren) „Elastin“ und „Kollagen“. Was haben OPC und Vitamin C damit zu tun? Und was haben diese gemeinsam?

Ganz einfach: Sie sind die effizientesten Partner für den Neuaufbau und den Erhalt von Kollagen und Elastin. Ohne OPC und Vitamin C kann Ihr Körper kein Kollagen und [...]
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC Anti-Alterungs-Vitamin

Die Alterung nach Abschluss des Knochenwachstums ist auf die oxidative Zerstörung der Körperzellen durch freie Radikale zurückzuführen. Hierbei spielen die Antioxidantien die allerwichtigste Rolle, um dem biologischen Altern ein Schnippchen zu schlagen und die Alterung stark zu verzögern. Wie wir bereits mehrmals gelesen haben, ist OPC eines der stärksten Antioxidantien (18–20 x so stark wie Vitamin C und sogar 40–50 x so stark wie Vitamin E.)

So bekämpft OPC alle freien Radikale im Körper sehr zuverlässig und trägt dazu bei, dass man sein biologisches Altern stark verzögert. Viele Molekularforscher behaupten, man könne[...]
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Gelée Royale – der edle Saft, der aus Arbeitern Könige macht

Wie würde es Ihnen gefallen, in den Genuss eines Saftes zu gelangen, der nicht nur über Millionen von Jahren den Fortbestand der Bienen gesichert hat, sondern gar einzig und allein darüber entscheidet, ob eine Biene lebenslang eine kleine Arbeiterbiene bleibt oder aber sich physisch zu einer großen, langlebigen Bienenkönigin entwickelt, die über die unglaubliche Energie verfügt, um zeitlebens Nachwuchs in die Welt zu setzen?

Gelée Royale, Weiselfuttersaft, Bienenköniginnenfuttersaft ‒ gleich drei Bezeichnungen für ein weiteres Geschenk von „Mutter Natur“, dem Sie als gesundheitsbewusster Mensch unbedingt Ihre Aufmerksamkeit widmen sollten.

Worum genau handelt es sich bei Gelée Royale, und was kann es für unsere Gesundheit leisten?
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Gelée Royale ist ein ganz besonderer, von Bienen produzierter Saft von dickflüssiger, klebriger Konsistenz. Spontan mag man hier sofort an Honig denken, bereits aber der zweite Teil des Namens, „Royale“, lässt auf die besondere, ja „königliche“ Wertigkeit des besagten Saftes schließen, die dem Honig rein vom gesundheitlichen Aspekt weitaus überlegen ist.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Entstehung von Gelée Royale

Im Alter zwischen dem vierten und zwölften Lebenstag sondert die Biene aus ihrer Futtersaftdrüse und Oberkieferdrüse Gelée Royale ab, das in den ersten Larvenstadien den entstehenden Bienen als Nahrung dient.

Ausschließlich der Saft dieser Jungbienen (sog. Ammenbienen) kommt zwischen dem vierten und zwölften Tag zum Einsatz. Dies erweist sich als sehr sinnvoll, da diese jungen Saftspender selbst über entsprechend junge Zellen verfügen, um ein möglichst qualitativ hochwertiges Gelée Royal zu erzeugen.

Im Gegensatz zum Honig, der zusammen mit Pollen danach allen Bienen als Nahrung dient, ist dieser ganz spezielle Saft einer einzigen ausgekorenen Biene im Stock vorbehalten: nämlich der noch zu krönenden Königin!
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Mit Gelée Royale wird die Jungkönigin von den Arbeiterbienen aufgezogen. Intuitiv wissen also alle Bienen im Stock um die Wertigkeit des Gelée Royal Bescheid ‒ ein Elixier, das seinesgleichen sucht und eine Assoziation zum Kolostrum, der Erstmilch der Säugetiere, erlaubt, das den Säugetieren ebenfalls nur wenige Tage zur Verfügung steht und über unsagbares Potenzial für unsere Gesundheit verfügt!
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Gewinnung von Gelée Royale

Die Gewinnung von Gelée Royale stellt eine wahrlich technische Herausforderung dar, weshalb es ausschließlich in großen, spezialisierten Imkereien gewonnen wird.

Zu diesem Zweck werden Zellen von Königinnen in den Bienenstock eingesetzt und gleichzeitig die Königin selbst entfernt. Auf dieser Website erfahren Sie alles Wissenswerte zu diesem besonderen Elixier, das – im Gegensatz zu den erwachsenen Bienen – auch Ihnen (noch) zur Verfügung steht. Möge das Bienensterben aufgehalten werden, sonst wird sich der Mensch sehr bald auch um diesen besonderen Saft selbst berauben …
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Vitamine

Zu den zahlreich in Gelée Royale vorkommenden Vitaminen zählen vor allem die B-Vitamine (B1, B2, B3 und B4), Vitamin C, Vitamin E, Folsäure, Pantothensäure und Biotin.

Mineralstoffe

Des Weiteren verfügt Gelée Royale über zahlreiche Mineralstoffe und Spurenelemente, auf die in der Literatur nicht näher eingegangen wird. Womit wir zu einem weiteren Phänomen kommen, nämlich zu zahlreichen, hochwirksamen Substanzen, die dem Gelée Royale nachgesagt werden, ohne dass diese bis zum heutigen Tag mit herkömmlichen Analysemethoden nachzuweisen wären.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Nicht identifizierte, einzigartige Substanzen

Zweifelsohne müssen wir Menschen uns damit abfinden, dass es zwischen Himmel und Erde Dinge gibt, die Erstaunliches bewirken, ohne dass wird dies jemals verstehen werden. Ebenso sind wir lange davon entfernt, sämtliche existenten Vitalstoffe zu identifizieren – wahrscheinlich wird uns dieses Kunststück auch niemals gelingen, „Mutter Natur“ lässt sich nicht komplett in die Karten schauen.

So vermuten Forscher, dass allein der Apfel über 10.000 Vitalstoffe beherbergt – identifiziert haben wir nur einige wenige … Und so erlangte auch Gelée Royal eine gewisse Mystik durch die Tatsache, dass die wohl wirksamsten Inhaltsstoffe darin bislang noch nicht identifiziert wurden. Es handelt sich dabei vor allem um zahlreiche hochkomplexe [...]
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkungsweise und Wirkung von Gelée Royale

Die genaue Wirkungsweise von Gelée Royale ist bis dato aufgrund der darin nicht vollständig identifizierten, de facto aber hochwirksamen Wirkstoffe nicht vollständig entschlüsselt. Die Forscher gehen davon aus, dass es gerade diese bislang nicht identifizierten, hormonähnlichen Substanzen sind, die die Selbstheilungskräfte des Körpers mobilisieren, unseren Organismus stärken und vor krankhaften Einflüssen schützen.

Praxis sticht zweifelslos Theorie in jedem Fall. Sehr überzeugend ist daher der Fakt, dass es einzig und allein das Gelée Royal ist, das aus einer durchschnittlichen Larve eine Bienenkönigin werden lässt, die weitaus größer, stärker, gesünder, langlebiger und leistungsfähiger ist als ihre Artgenossen!
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Allgemeine Wirkung von Gelée Royale

Betrachten wir zunächst kurz die allgemeine Wirkung von Gelée Royale, bevor wir zu der speziellen Wirkung gegen zahlreiche Erkrankungen und Missstände kommen.

Gelée Royale wirkt allgemein:
• Immunstärkend,
• alterungsprophylaktisch (Anti-Aging),
• energiespendend/tonisierend,
• blutdruckregulierend,
• entzündungshemmend,
• antibakteriell/antimikrobiell,
• antiviral,
• cholesterinregulierend,
• antitumoral,
• potenzstärkend,
• hormonregulierend,
• die Kollagensynthese anregend.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Spezielle Wirkung von Geleé Royal bei Erkrankungen und Missständen

Bei den folgenden Erkrankungen wirkt sich Gelée Royale ausgesprochen wirkungsvoll bis hilfreich aus:

• ernährungsbedingten Mangelerkrankungen,
• neurologischen Erkrankungen,
• Immunschwäche,
• Grippe,
• Allergien,
• Seneszenz (vorzeitige Alterung),
• Krebs,
• Diabetes,
• Schlaganfall,
• Infektionskrankheiten,
• Atemwegsbeschwerden,
• Impotenz,
• Zeugungsunfähigkeit,
• Asthenie (Kraftlosigkeit),
• Müdigkeit,
• Meningitis (Hirnhautentzündung),
• Unfruchtbarkeit beim Mann (Spermienmobilität),
• Erkrankungen im Genitalbereich,
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Spezielle Wirkung von Geleé Royal bei Erkrankungen und Missständen

Bei den folgenden Erkrankungen wirkt sich Gelée Royale ausgesprochen wirkungsvoll bis hilfreich aus:

• Arteriosklerose,
• rheumatischer Arthritis,
• chronischen Lungenerkrankungen,
• Kehlkopfleiden,
• Rachenleiden,
• Magenblutung,
• Beschwerden in den Wechseljahren,
• Hormonmangel,
• Anorexie (Appetitmangel),
• Anämien,
• arterieller Hypotonie (zu niedriger Blutdruck),
• Hypertonie (zu hoher Blutdruck),
• Angstzuständen,
• Depressionen,
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Spezielle Wirkung von Geleé Royal bei Erkrankungen und Missständen

Bei den folgenden Erkrankungen wirkt sich Gelée Royale ausgesprochen wirkungsvoll bis hilfreich aus:

• Blutarmut,
• Atherosklerose (Arterienverkalkung),
• Xerodermie (krankhaft trockene Haut),
• Blutarmut,
• leichten Depressionen,
• Leberproblemen,
• Gallenproblemen,
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Spezielle Wirkung von Geleé Royal bei Erkrankungen und Missständen

Bei den folgenden Erkrankungen wirkt sich Gelée Royale ausgesprochen wirkungsvoll bis hilfreich aus:

• Schüttellähmung,
• Herzmuskelschwäche,
• Mittelohrentzündung,
• Atemwegsentzündung,
• Warzen,
• Hautverletzungen,
• Gewichtsverlust,
• atopischer Dermatitis,
• Makuladegeneration,
• Schwellungen,
• Parkinson,
• Demenz,
• Hepatitis,
• Gallenwegserkrankungen,
• Juckreiz,
• Thorax-Schmerzen,
• virenbedingter Leberentzündung.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gelée Royale bei Krebs

In Studien konnte die Fettsäure 10-Hydroxy-2-Decensäure, die übrigens weltweit ausschließlich nur im Gelée Royale vorkommt, eine signifikante Anti- Krebswirkung demonstrieren! Prof. Osmanagic konnte im Therapiealltag mithilfe von Gelée-Royal-Kapseln den Allgemeinzustand von Krebserkrankten stark verbessern. Operations- und Bestrahlungspatienten, die aufgrund Übelkeit, Brechreiz und weiterer Symptome bettlägerig waren, erfuhren bereits zehn Tage nach Einnahme von Blütenpollen-Gelee-Royal- Tabletten (zwei St. eine halbe Std. vor dem Essen) starke Besserung. Die Leberwerte besserten sich und blieben selbst bei fortgesetzter Bestrahlung stabil, sodass die Patienten sehr bald wieder ihre Arbeit aufnehmen konnten.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gelée Royal bei Beschwerden in den Wechseljahren

Herzklopfen, Hitzewallungen, Schwindelgefühl, Schweißausbrüche, depressive Stimmung, Schlaflosigkeit, Nervosität, Konzentrationsprobleme sowie Kopfschmerzen sind nur einige der Symptome, die der Frau in den Wechseljahren (im Allgemeinen zwischen dem 42. und 65. Lebensjahr) das Leben schwermachen. Zu begründen ist dies durch Alterungsprozesse, die zu Rückbildungsabläufen in den Eierstöcken und damit hormonellen Veränderungen führen.[...]
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gelée Royale gegen Arthritis

Das bereits erwähnte Protein MRJP3 wirkt sich entzündungshemmend aus, mit einer ausgeprägten Wirkung auf Autoimmunerkrankungen, z. B. die rheumatoider Arthritis.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gelée Royale bei Zeugungsunfähigkeit des Mannes

Speziell bei der letzteren Art der Impotenz, also der Zeugungsunfähigkeit des Mannes, konnte Gelée Royale eine unglaubliche Wirkung erzielen. So hat sich in zahlreichen Studien die Anzahl der Spermien unter der Einnahme von Gelée Royale sogar verdoppelt.

Wie wirkt Gelée Royale gegen Zeugungsunfähigkeit?

Wesentliche Grundlage der Spermienbildung stellen Aminosäuren dar. Gelée Royal verfügt über große Mengen an Aminosäuren, speziell Glycin, Histidin und Arginin. In Verbindung mit dem Fruchtzucker, der ebenfalls reichlich in Gelée Royale vorkommt, werden diese Baustoffe der Spermien mit Energie versorgt und die Spermienbildung durch die Pantothensäure im Gelée Royale angeregt.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gelée Royale gegen Arthritis

Das sich im Gelée Royale befindende Protein mit der Bezeichnung MRJP3 (major royal jelly protein 3) unterdrückt allergische Reaktionen. Dieses Protein hat entzündungshemmende Eigenschaften und kann somit die Lebensqualität bei Patienten, die an Autoimmunkrankheiten, etwa der rheumatoiden Arthritis, leiden, verbessern.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Anti-Aging-Wirkung von Gelée Royale

Die einzig und allein in Gelée Royal vorkommende Fettsäure 10-Hydroxy-2- Decensäure stimuliert die Kollagensynthese, regeneriert die Hautzellen und wirkt der Hautalterung aktiv entgegen. Nicht umsonst wird Gelée Royal in zahlreichen Kosmetika eingesetzt. Des Weiteren sind es gerade die zahlreichen, noch lange nicht abschließend erforschten, hochkomplizierten, hormonähnlichen Verbindungen in Gelée Royal, die für eine Steigerung unseres Immunsystems sorgen und auf diese Weise nicht zuletzt einem biologischen Alterungsprozess trotzen. Einer altersbedingten Asthenie (Kraftlosigkeit) und Abmagerung sowie der Altersanämie kann Gelée Royal sehr erfolgreich entgegenwirken.[...]
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Für jeden halbwegs intelligenten Menschen sind dies einfach zu viele überzeugende Argumente, die für die Einnahme des Q10 sprechen.

Während sich das Coenzym Q10 als verhältnismäßig neuer Vitalstoff bereits seit Längerem in den USA und Japan zu Recht größter Beliebtheit erfreut, allein in Japan von 10 Millionen Menschen regelmäßig eingenommen wird und sogar als anerkanntes Therapeutikum in Krankenhäusern Anwendung findet, ist man erstmalig durch die Veröffentlichung des Buches „Herzwunder Q10“ von Dr. Emile G. Bliznakov auch bei uns darauf aufmerksam geworden.

Es ist stark zu hinterfragen, warum die Ärzte hierzulande nur vereinzelt Näheres darüber wissen, geschweige denn ihren Patienten Q10 empfehlen würden.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Was aber ist Coenzym Q10 und was macht es so wertvoll?

Q10 ist eine vitaminähnliche, körpereigene Substanz, die in den Mitochondrien (den „Kraftwerken“ unserer Zellen) ihre Arbeit verrichtet. Verkürzt kann man zurecht behaupten, dass:

- Q10 ein Energiespender für alle Organe ist,
- unsere Organe darüber hinaus vor freien Radikalen schützt und
- die Funktionsfähigkeit unserer Körperzellen durch die Membran- stabilisierung sichert.

Das Buch „Herzwunder Q10“ beschränkt sich schwerpunktmäßig auf eine fast schon wundersame Wirkung von Q10 auf den Herzmuskel – ohne Frage der bedeutendste Aspekt angesichts der Tatsache, dass das Herz unser wichtigstes Organ ist.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Wesentlich aber ist, dass nicht nur der Herzmuskel, sondern jede einzelne Zelle unseres Körpers von dem Energieschub durch Q10 erheblich profitiert und dass Q10 des Weiteren ein enormes Potenzial als Antioxidans aufweist, uns also vor freien Radikalen und damit vor frühzeitiger Alterung und Erkrankung schützt.

Um es deutlich auf den Punkt zu bringen: Ohne Q10 kann KEINE einzige Körperzelle im menschlichen Organismus arbeiten.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Im weiteren Verlauf erfahren Sie:

- Was Q10 genau ist und warum jeder Mensch unendlich davon profitiert.
- In welchen Nahrungsmitteln Q10 vorkommt.
- Welche Personengruppen einen erhöhten Q10-Bedarf aufweisen.
- Auf welche Erkrankungen das Coenzym Q10 nachweislich positiven Einfluss nehmen kann. einen
- Wie Sie sich präventiv vor Erkrankungen mithilfe von Q10 schützen können.
- Wie Sie Ihre physiologischen Alterungsprozesse mit Q10 stark verzögern und sogar Verjüngungsprozesse in Gang setzen können.
- Wie Sie als Sportler Ihre Leistung steigern und sich gleichzeitig vor der hohen Belastung freier Radikale schützen können.
- Ob, und wenn ja, welche Nebenwirkungen Q10 aufweist.
- Wie viel Q10 empfohlen wird, um gesund und vital zu bleiben.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Coenzym Q10 – Was genau ist es und warum können alle Menschen davon enorm profitieren?

Beim Coenzym Q10 handelt es sich um eine vitaminähnliche, körpereigene Substanz, die fast überall im Körper vorhanden ist. Dieser Tatsache verdankt das Q10 ebenfalls den Namen „Ubichinon“ („allgegenwärtig“). Das Vorhandensein im gesamten Körper macht auch sehr viel Sinn, denn Q10 ist für die Energiegewinnung und Sauerstoffversorgung einer JEDEN einzelnen unserer Körperzellen zuständig. Sämtliche Erkrankungen manifestieren sich aufgrund einer nicht intakten Körperzelle. Q10 sorgt für eine ausreichende Energie- und Sauerstoffversorgung JEDER einzelnen der 60–100 Billionen im Körper vorhandenen Zellen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Es trifft die Aussage zu: Gesunde Zellen bedeuten vollkommene Gesundheit – energielose Zellen bedeuten Erkrankung bis hin zum Zelltod. Q10 übt einen positiven Einfluss auf unsere Gesundheit, Lebensdauer und Lebensqualität aus.

Man kann also Q10 als ein Lebenselixier betrachten, und tatsächlich ALLES, was atmet oder jemals geatmet hat, muss Q10 enthalten haben – denn selbst für die Atmung, die allerwichtigste Funktion unseres Organismus, stellt Coenzym Q10 die nötige Energie bereit.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 – Energiegarant und Beschützer unserer Zellen

Ob Atmung, Zellteilung, Bewegung, Nährstoffaufnahme oder oder oder … Ausnahmslos JEDE Aktion in unserem Körper erfordert eine Aktion der Körperzellen – und jede Aktion der Zelle ist auf ihre Kraftwerke angewiesen, die für diese Aktion die Energie liefern, die sogenannten „Mitochondrien“. In ihnen wandelt das Coenzym Q10 unsere Nahrung nach dem Verdauungsprozess in Energie für die Körperzellen um. Den Zündfunken für die Aktivierung der Mitochondrien liefert in JEDEM FALL das Coenzym .Q10.

Beraubt man die Mitochondrien des Coenzyms Q10, so beraubt man die Zellen der Energie, und weil Q10 für die Energiegewinnung einer jeden einzelnen Körperzelle verantwortlich ist, beraubt man sich damit der Lebensenergie.`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 als Antioxidans – der Zellschutz für unseren Körper

Neben seinem unendlich hoch anzusiedelnden Beitrag für unsere Energieversorgung spielt Q10 als effektives Antioxidans (Radikalenfänger) eine weitere enorme Rolle in unserem Körper. Wie wir bereits im Kapitel „Vitamin C“ ausführlich erfahren konnten, sind es exakt die freien Radikale, die zu den sogenannten Zivilisationskrankheiten wie Arteriosklerose, Herzinfarkt, Schlaganfall, Diabetes, Arthritis, Krebs führen – des Weiteren führen freie Radikale zur Alterung unserer Zellen.

Vergleichbar mit dem Rostbefall an unserer Autokarosserie nagen die freien Radikale an unseren Zellen und richten nach und nach einen fürchterlichen Schaden an, der zu Erkrankungen und Alterung führt.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Unter anderem gehen die folgenden Erkrankungen auf die Angriffe freier Radikale zurück:
- Arteriosklerose
- Herzinfarkt
- Schlaganfall
- Atemwegserkrankungen
- Blutgefäßkrankheiten
- Krebs
- Diabetes
- Mukoviszidose
- Entzündungen
- Hepatitis
- Parkinson
- Alzheimer
- Arthritis
- Down-Syndrom
Die Tatsache, dass Q10 überall in unserem Körper vorkommt, erklärt dessen Befähigung, überall im Körper freie Radikale abzufangen und neutralisieren zu können.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Vorkommen von Coenzym-Q10 im menschlichen Körper

Das Coenzym Q10 kommt verstärkt in unserem Herzen vor, des Weiteren findet es sich in der Leber, der Bauchspeicheldrüse und in den Nieren. Bis zu einem gewissen Punkt ist der Körper selbst in der Lage, Coenzym Q10 zu produzieren. Mit fortschreitendem Alter verliert jedoch der Körper nach und nach die Fähigkeit, Q10 zu synthetisieren (selbst herzustellen). Während bei Erkrankungen der Bedarf an Q10 ansteigt, vermag der Körper diesen Mehrbedarf nicht abzudecken; es findet also keine an den erhöhten Bedarf angepasste Nachregulierung statt, was sehr bald zu einem Q10-Defizit mit weitreichenden Folgen führt.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Ferner ist die Tatsache erwähnungswert, dass das Q10 verstärkt in den von der Erkrankung betroffenen Bereich transportiert wird – ein weiterer Beweis dafür, wie wichtig es für die Genesung ist.

Des Weiteren nehmen wir Coenzym Q10 mittels der Nahrungsaufnahme auf. Man geht von ca. 2 bis 20 mg Coenzym Q10-Aufnahme über die Nahrung aus, wobei der Wert aufgrund ausgelaugter Böden, langer Lagerung, Pestiziden und der Nahrungszubereitung unzureichend niedrig ausfällt, sodass man davon nicht genügend über die natürliche Nahrung aufnehmen kann.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
In welchen Nahrungsmitteln kommt Q10 in welchen Mengen vor?

Coenzym Q10 kommt vor allem in:
- Fleisch (Rindfleisch, Geflügel, Leber),
- Fisch (besonders in Sardinen),
- Eiern,
- grünem Gemüse (besonders Spinat),
- Nüssen,
- Mandeln,
- Soja,
- in einigen pflanzlichen Ölen und
- ölhaltigen Pflanzen vor.
Um die für Gesunde empfohlene Zufuhr von 100 mg Coenzym Q10 zu gewährleisten, müsste man beispielsweise 1,5 kg Sardinen täglich essen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
In unseren Breiten gilt das Rindfleisch als Hauptlieferant für das Q10. Um jedoch 100 mg Q10 zu erhalten müsste man über 3 kg Rindfleisch täglich zu sich nehmen, etwas, was physiologisch kaum möglich ist und für Vegetarier ohnehin nicht infrage kommt.

Während man noch vor nicht allzu langer Zeit für 1 g aus Rinderherzen extrahiertem Q10 knapp 1000 Euro zahlte (übrigens das 30-Fache des heutigen Goldpreises), ist die Versorgung mit Q10-Präparaten heute für jeden erschwinglich geworden.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Welche Personengruppen weisen einen erhöhten Q10 Bedarf auf?

Wie bereits erläutert, ist Q10 die Voraussetzung für die Energieversorgung einer jeden einzelnen Körperzelle. Den Aussagen von Dr. B. Diamant von der Universität in Kopenhagen und Dr. J. Karlsson vom Karolinska Institut in Stockholm zufolge erreichen aber lediglich 25 % aller gesunden Menschen – im Wesentlichen Kinder und Jugendliche – einen gesättigten Q10-Plasmaspiegel.

Es ist also nahezu JEDER Mensch spätestens nach dem 20. Lebensjahr auf zusätzliche Q10-Gaben angewiesen. Alle Patienten hingegen weisen einen zu niedrigen Q10-Plasmaspiegel auf; hier steht die Q10-Einnahme außer Frage.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Während also JEDER von Q10 profitiert kann, sind einige Personengruppen nachweislich besonders auf ausreichende Q10-Gaben angewiesen.

Hierzu gehören insbesondere Personen, die:
- grundsätzlich Menschen über 40 Jahre alt sind,
- an Herzkreislauferkrankungen und Herzschwäche leiden,
- Frauen, welche die Pille einnehmen,
- Sportler, besonders Ausdauersportler,
- Menschen mit erhöhter psychischer und physischer Belastung,
- stressgeplagte Menschen,
- Menschen mit Behinderung, die keinen Sport treiben können/dürfen,
- Diabetiker
- Krebserkrankte,
- HIV-Erkrankte [...]
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 gegen Depressionen

Ähnlich wie Vitamin C und OPC, die beide durch die Überwindung der Blut- Hirn-Schranke und die Optimierung des Calciumumsatzes Depressionen vermindern, erweist sich Q10 hier als dritter Partner sehr hilfreich, indem es die Zell-zu-Zell-Kommunikation der Neuronen verbessert, und dies völlig nebenwirkungsfrei, während die klassischen Antidepressiva Nebenwirkungen aufweisen, die von gefährlicher Blutdrucksenkung über kardiovaskuläre Störungen bis hin zu tödlichen Herzrhythmusstörungen führen. Im Übrigen können die genannten Nebenwirkungen mit zusätzlichen Q10-Gaben abgemildert werden.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Coenzym Q10 gegen Pankreatitis (Bauspeicheldrüsenentzündung)

Wie das Apotheker-Journal im Heft 9/93 berichtete, konnte bei 173 von 178 Patienten mit einer Q10-Prophylaxe das Absterben des Gewebes auf > 30 % des Gesamtorgans beschränkt werden, sodass chirurgische Operationen und intensive Therapien vermieden werden konnten.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 gegen Neurodermitis

Wie wir bereits erfahren haben, spielt Q10 beim Schutz für die Haut die wichtigste Rolle und wird deswegen in der Haut als erste Substanz verbraucht. Die Neurodermitis wird auf eine Fehlfunktion des Immunsystems zurückgeführt; das Immunsystem ist fehlgeleitet und bekämpft Stoffe, die keine Feinde darstellen. Die schulmedizinische Antwort darauf sind Medikamente mit starken Nebenwirkungen. Diese Indikation ist jedoch ungenügend. Da Q10 das Immunsystem stabilisiert und die Zellmembran- Kommunikation stark verbessert, sollte es als Begleittherapie bei Neurodermitis nicht fehlen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 erfolgreich im Kampf gegen Krebs

Ein Q10-Mangel bei Erkrankungen deutet ganz stark darauf hin, dass der Körper das Q10 verstärkt verbraucht, ergo für seine Genesung benötigt. Je stärker eine Erkrankung den Q10-Mangel begünstigt, umso wichtiger ist es, hier so schnell wie möglich den Ausgleich von außen in Form einer Einnahme von Q10-Kapseln zu schaffen.

In einer Studie von Folkers et al. an 83 Krebspatienten mit acht unterschiedlichen Krebsarten stellte sich heraus, dass bei allen ein starkes Q10- Defizit vorherrschte, besonders bei Brustkrebs- und Lungenkrebspatienten. Dieser ausgeprägte Q10-Mangel ist ein deutlicher Hinweis für die Wichtigkeit [...]
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Coenzym-Q10 schützt vor Folgen der Operationen von Tumoren

Bekanntlich führt der körperliche Stress einer Operation zur vermehrten Bildung der schädigenden freien Radikale. Des Weiteren wird das Immunsystem während der Operation stark unterdrückt. In beiden Fällen kann Q10 unterstützend eingreifen, nämlich als Antioxidans, und Immunsystemmodulator. Um die Wundheilung nach der OP zu unterstützen empfiehlt es sich, bereits mehrere Tage vor der OP, auf OPC und Vitamin C zurückzugreifen (Siehe die Abschnitte „OPC“ und „Vitamin C“)
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 als Schutz vor Nebenwirkungen von Chemotherapie

Die vielversprechenden Studien, welche die Effizienz von Coenzym Q10 untermauern, sprechen angesichts der Tatsache, dass Q10 selbst bei hohen Dosen in unzähligen Studien keinerlei Nebenwirkungen gezeigt hat, deutlich für die Supplementierung von Q10 bei einer Krebserkrankung.

Wird man mit einer Chemotherapie behandelt, gesellt sich hierzu noch eine weitere positive Eigenschaft des Coenzyms Q10, nämlich der Schutz vor deren Nebenwirkungen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Umgekehrt führt eine ausreichende regelmäßige Zufuhr von Q10, möglichst in Verbindung mit OPC und Vitamin C, zu einem sichtbar verjüngenden Ergebnis – der Hautalterung sowie diversen Hauterkrankungen wird effektiv vorgebeugt. Hierbei kommt der Zufuhr der Nährstoffe von innen (durch die Einnahme von Q10 in Form von Kapselpräparaten) eine höhere Bedeutung zu als der lokalen Anwendung in Form von Q10-Cremes. Laut einer Studie von Professor Hoppe kann die Hautalterung aufgrund des Abbaus des lichtinduzierten oxidativen Stresses verlangsamt werden.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 mindert die Nebenwirkungen von Medikamenten

Erfahrungswerte in aller Welt, besonders in Japan, zeigen, dass das Coenzym Q10 nicht nur selbst keine Nebenwirkungen nach sich zieht, sondern sogar die Nebenwirkungen von Medikamenten verringern kann. Eine Studie von Takahashi et al. konnte nachweisen, dass die Herzinsuffizienz als typische Nebenwirkung des Medikaments „Timolol“, das als Rezeptorenblocker fast ausschließlich gegen den Grünen Star (Glaukom) Anwendung findet, bei paralleler Medikation mit Q10 (90 mg/Tag) deutlich verringert werden konnte.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Wie viel Q10 wird empfohlen, um gesund und vital zu bleiben?

Wie am Beispiel von Vitamin C bereits detailliert verdeutlicht, entscheidet die Einnahmemenge darüber, wie effizient Vitamine, Mineralien oder sekundäre Pflanzenstoffe wirken können.

Eine therapeutische Wirksamkeit wird von Experten ab einer täglichen Dosis von 100 mg Q10 (Ubiquinon) erwartet; bei Herzproblemen werden 50–300 mg Q10 je nach der Schwere der Erkrankung empfohlen; Prof. Dr. Clark empfiehlt sogar 400 mg Q10 täglich.

Die Verwertung und Erzeugung von Q10 variiert von Mensch zu Mensch. Wer auf Nummer sicher gehen will, kann den Q10-Gehalt über eine Blutuntersuchung testen lassen. Die größten körpereigenen Vorräte an [...]  
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Die größten körpereigenen Vorräte an Q10 weisen wir im Alter von 20 Jahren auf. Danach sinkt die Q10-Konzentration in unserem Körper stetig bis auf die Hälfte und darunter. Eine tägliche Zufuhr von 100 mg ist daher bei Gesunden empfehlenswert und unbedenklich. Bei Erkrankungen verhält sich die Sachlage anders. So können Dosen von 300 mg Q10 und mehr sehr sinnvoll sein. Nach Ansicht von Dr. Langsjoen sollten hohe Dosen Q10 bis zu 720 mg/Tag weitere Verbesserungen bei diversen Krankheiten erzielen.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen – was ist das?

Bei Selen handelt es sich um nicht weniger als ein „essenzielles“, also lebenswichtiges, Spurenelement, das von unserem Körper nicht selbst hergestellt wird und daher regelmäßig über die Nahrung aufgenommen werden muss. Selen (Selenium) wurde 1817 von dem Schweden Jöns Jakob Berzelius entdeckt; es sollte jedoch bis in die Mitte der 70er-Jahre andauern, bis man Selenvorkommen auch natürlicherweise im menschlichen Organismus (10– 15 mg) nachgewiesen hat.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen ist ein Bestandteil unserer Erdkruste und von der Häufigkeit des Vorkommens darin auf Platz 60 angesetzt. Es erfordert 1 kg Erdmaterial, um 0,09 mg Selen zu gewinnen, was in etwa der Seltenheit des Goldvorkommens in der Erde entspricht. In der freien Natur oberhalb des Erdbodens kommt Selen viel häufiger vor und ist in fast allen Gewässern, Gesteinen und Böden vorzufinden. Benannt aufgrund seines silbernen Glanzes nach der griechischen Mondgöttin „Selene“, hat man Selen, lange noch bevor sein enormer Nutzen für unsere Gesundheit hieraus ersichtlich wurde, für den technischen Bedarf entdeckt.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Das Blatt wendete sich schlagartig, als man analysierte, dass es auf der Erde weitaus mehr Gebiete mit Selenmangel als mit einem Selenüberschuss gibt und man zudem feststellte, dass in den Gebieten, in denen ein leichter Selenüberschuss vorherrschte, Mensch und Tier vitaler und gesünder waren, während in den Selen-Mangel-Gebieten (hierzu gehört auch Deutschland!) Menschen und auch Tiere weniger vital waren und vermehrt an Krankheiten litten. In der Tat haben zahlreiche Studien ergeben, dass besonders in den selenarmen Gegenden die Zahl der Menschen, die an Krebs, Herzkreislauferkrankungen und anderen Zivilisationskrankheiten leiden, dramatisch höher ist, während auf der anderen Seite in den selenreichen Gegenden die Menschen gesund und vital bleiben und dabei ein überdurchschnittlich hohes Alter erreichen!  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Das Wissenschaftlerteam Schwarz und Foltz konnte 1957 nachweisen, dass Selen für den menschlichen Organismus essenziell, also lebensnotwendig ist. Selen ist ein Bestandteil zahlreicher wichtiger Enzyme in unserem Organismus und damit in entscheidende physiologische Abläufe im Körper integriert. Nach und nach konnten dem Selen weitere wichtige Aufgaben im Organismus zugeordnet werden – eine Forschung, die bis heute noch andauert, aber bereits höchst spannende Erkenntnisse ans Tageslicht gebracht hat und Selen zu einer entscheidend wichtigen Substanz innerhalb der Prävention und Therapie zahlreicher Erkrankungen macht. Erfahren Sie diese spannenden Details auf den folgenden Seiten, zum Beispiel dazu, dass Selen das Auftreten von Krebs, Herzinfarkten oder Arthritis stark hemmt und im Tierversuch das Leben um 175 % verlängert hat. Staunen Sie darüber, was Selenium als echtes Multitalent auch für Ihre Gesundheit zu tun imstande ist.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wussten Sie, dass …
👉 Selen ein „essenzielles“ Spurenelement ist, das also für uns lebensnotwendig ist und über die Nahrung aufgenommen werden muss?
👉 Selen ein wichtiger Bestandteil von Enzymen ist, die für die Aktivierung von zahlreichen Hormonen und Stoffwechselfunktionen verantwortlich sind?
👉 wir ständig von unzähligen Giften umgeben sind und Selenium (Selen) als Bestandteil von Schutzenzymen innerhalb der Entgiftung des Organismus eine tragende Rolle spielt?
👉 unsere Körperzellen pro Tag rund 10 000 x von freien Radikalen (verursacht durch UV-Strahlen, Umweltgifte, Nahrung, Stress, Zigaretten) angegriffen werden, was uns erkranken und vorzeitig altern lässt?
👉 Selen als potentes Antioxidans diese gefräßigen freien Radikale abwehrt?
👉 Selen uns vor UV-Strahlenbedingter und radioaktiver Belastung schützt?  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
👉 Krebs die Todesursache Nr. 2 ist und Selen seit Jahrzehnten von komplementären Onkologen innerhalb der Krebstherapie begleitend mit Erfolg eingesetzt wird?
👉 Selen die positive Wirkung der Chemotherapie bei Krebs um den Faktor 10 verstärken kann und die Nebenwirkungen lindert?
👉 Selen die Wirkung einer Strahlentherapie optimiert und die Nebenwirkungen schmälert?
👉 folglich überall da, wo der Boden arm an Selen ist, auffällig viele Menschen an Krankheiten wie Herzinfarkt und Krebs versterben und überall dort, wo die Böden reich an Selen sind, die Menschen krebsfrei und vital alt werden?
👉 Selen im Tierversuch in Verbindung mit Vitamin E das Leben um 175 % verlängern konnte?
👉 Selen unser Immunsystem stärkt und Infektionen entgegenwirkt und bereits dadurch unzähligen Erkrankungen trotzen kann?  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Allgemeine Wirkung von Selen auf unseren Organismus:

- Herzkreislauf schützend
- Blutdruck senkend
- antioxidativ/zellschützend
- entgiftend (Schwermetalle wie Blei, Cadmium, Amalgam, Quecksilber)
- entzündungshemmend
- antiviral
- antitumoral (Krebsentstehung vorbeugend)
- antimutagen
- Unterstützung des programmierten Zelltods entarteter und abnormer Zellen
- Unterstützung von Reparaturmaßnahmen geschädigter DNA (Erbgut)
- lebensverlängernd
- immunmodulierend (das Immunsystem stärkend)
- leberstärkend
- UV-Strahlenschutz
- Schutz vor radioaktiven Strahlen
- Förderung der Spermienreife
- Schutz vor Allergenen
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Herzkreislaufschützende Wirkung von Selenium

Selen schützt vor der Verklumpung der Blutplättchen und hat einen positiven Einfluss auf unsere Blutgefäße. Als potentes Antioxidans schützt es die Herzmuskelzellen vor Beschädigungen seitens verschiedener Stoffwechselprodukte und normalisiert einen zu hohen Blutdruck.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Antioxidative Wirkung des Selen-Enzyms „Glutathionperoxidase“ auf  unseren Organismus

Als hochpotentes Antioxidans schützt das Selen-Enzym namens „Glutathionperoxidase“ unsere Körperzellen vor den Angriffen freier Radikale, die jede unserer rund 60 Trilliarden Körperzellen ca. 10 000 x am Tag angreifen und so zu zahlreichen Erkrankungen und vorzeitiger Alterung (u. a. auch Krebs) führen. Diese gefräßigen Teilchen entstehen unter anderem aufgrund der Umweltbelastung, mit der Nahrung und innerhalb unserer eigener, normaler Stoffwechselvorgänge.

Das Selen-Enzym „Glutathionperoxidase“ wandelt die angriffslustigen freien Radikale in harmlose Derivate um und kann unsere Zellen auf diese Weise vor Schlimmerem bewahren!  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Entgiftende Wirkung durch Selen

Als Bestandteil wichtiger Schutzenzyme spielt Selen bei der Entgiftung des Organismus eine wichtige Rolle. Es bindet unter anderem toxische Schwermetalle, wie etwa die in den Autoabgasen zahlreich enthaltenen giftigen Stoffe „Blei“ und „Cadmium“, es bildet Abwehrmechanismen gegen die zerstörerische Wirkung von Zink, Quecksilber, Zinn, Arsen und Kobalt sowie Amalgam in den Zahnplomben.

Des Weiteren fördert Selenium den Abbau schädlicher Substanzen im Körper und wirkt sich auf die Leber stärkend aus, die bekanntlich als das Entgiftungsorgan schlechthin in unserem Organismus fungiert.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Entzündungshemmende Wirkung von Selen  

Selen vermindert die Produktion von Zytokinen und Prostanoiden, die als Vorläufer für Entzündungsreaktionen gelten. Es unterstützt des Weiteren das Immunsystem im Kampf gegen Eindringlinge (Bakterien, Viren usw.) und macht also den Einsatz entzündlicher Substanzen zu deren Eliminierung nicht notwendig. Auch schützt Selen die gesunden Körperzellen vor den freien Radikalen, die im Entzündungsprozess entstehen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Antitumorale Wirkung von Selen

Die antitumorale Wirkung von Selenium ist sehr vielfältig und vor allem auf die folgenden Mechanismen zurückzuführen:

- Selen kurbelt das Immunsystem an. Dabei werden die NK-Zellen (natürlichen Killerzellen), welche die Tumorzellen angreifen, aktiviert und verstärkt Antikörper produziert.
- Selen senkt die Anzahl von Oberflächenmolekülen auf den Krebszellen und markiert diese quasi für die NK-Zellen, die die Krebszellen entdecken und zerstören.
- Selen hemmt das Wachstum der Tumorzellen über direkte Eingriffe in deren Stoffwechsel.
- Selen neutralisiert Zellgifte.
- Selen neutralisiert die angreifenden freien Radikale.
- Die bereits angegriffenen Zellen werden wieder repariert.
- Selen schützt den Organismus vor entarteten Zellen.
- Selen unterstützt den programmierten Zelltod bei entarteten Zellen  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
- Selen verhindert Chromosomenschäden.
- Durch Selen werden krebserregende Substanzen (Karzinogene) neutralisiert-
- Karzinogene Stoffwechselgifte werden von Selen gepuffert.
- Selen aktiviert bestimmte Enzyme, welche Reparaturmechanismen an den Genen übernehmen.
- Selenium schützt vor radioaktiver Strahlung.
- Da Selen gerade bei Krebs eine ganz besondere Stellung einnimmt, ist diesem ein eigener Punkt „Selen bei Krebs“ gewidmet.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Immunsystem stärkende Wirkung von Selen

Das Immunsystem stellt unser biologisches Abwehrsystem dar, zu dessen Aufgaben es gehört, Gewebeschädigungen aufgrund von Krankheitserregern vorzubeugen. Hier nimmt das Immunsystem den Kampf gegen Bakterien, Viren und Pilze auf, zerstört mutierte, körpereigene Zellen und entfernt körperfremde Substanzen. Ein angeschlagenes Immunsystem führt unweigerlich zu etwaigen Erkrankungen; auf der anderen Seite können Erkrankungen nur mithilfe eines intakten Immunsystems heilen. Indem es die Produktion von Antikörpern fördert, stärkt Selen unser Immunsystem. So konnte die Zahl der Antikörper unter Zufuhr von Selenium im Tierversuch um den Faktor 30 erhöht werden.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Unter anderem aber sind es die nachfolgend genannten Krankheitsbilder, die nachweislich von einer ausreichenden Selen-Zufuhr profitieren:

- Arteriosklerose (Gefäßverkalkung)
- Herzkreislauferkrankungen (Angina Pectoris, Keshan-Krankheit, Schutz vor Herzinfarkt und Ähnlichem)
- Krebs/Tumorentstehung
- UV-Schäden der Haut (schützt vor vorzeitiger Hautalterung)
- Zeugungsunfähigkeit
- Allergien
- Diabetes mellitus
- Schilddrüsenunterfunktion
- Autoimmunerkrankungen der Schilddrüse
- Hashimoto-Thyreoiditis
- Kashin-Beck-Syndrom
- myxödematöser endemischer Kretinismus
- Arthritis/Rheuma
- Haarausfall
- Depressionen
- Morbus Bechterew
- Morbus Crohn
- Morbus Basedow
- Parkinson
- AIDS
- beschleunigte Alterung
- Muskelschwund
- Augenerkrankungen (Grauer Star)
- Netzhautprobleme als Folge von Diabetes
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wirkung von Selen bei Herzkreislauferkrankungen

Die herzkreislaufschützende Wirkung entfaltet Selen über multifaktorielle Mechanismen: Zum einen schützt es (besonders in Verbindung mit Vitamin E!) zuverlässig die Herzmuskelzellen vor Schädigung vonseiten freier Radikale und normalisiert zudem einen hohen Blutdruck. Andererseits verringert Selen mit seinen halbmetallischen Eigenschaften den elektrischen Widerstand, was generell die Leitung aller Impulse im Körper innerhalb der Nervenbahnen optimiert, so auch die elektromagnetischen Impulse des Sinusknotens am Herzmuskel. Eine Besonderheit ist die positive Einwirkung auf [...]
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Schutz vor Herzinfarkt

Selen fördert die nervale Reizgebung und verringert gleichzeitig den elektrischen Widerstand. Es verfügt über die Eigenschaft, im Bereich des Sinusknotens die nervale Reizgebung zu unterstützen. Auf diese Weise kann Selen den Herzschlag-Rhythmus optimieren und Herzproblemen bis hin zum Herzinfarkt vermeiden helfen. Als Pionier auf dem Gebiet der Erforschung des Seleneinflusses auf das Herzkreislaufsystem gilt der finnische Art Dr. Johan A. Bjorksten. Er analysierte als Erster die hohe Sterblichkeitsrate seiner Landsleute im Osten von Finnland und konnte in diesem Gebiet einen geradezu furchterregenden Selenmangel feststellen. Ferner konnte er feststellen, dass in Ländern, deren Wasser auffallend wenig Selen enthält, Herzinfarkte drei bis vier Mal so häufig auftreten und in den selenarmen finnischen Gebieten sieben Mal so häufig sind wie in den selenreicheren Gebieten Finnlands.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen hilft bei akutem Herzinfarkt

War der Herzinfarkt nicht zu vermeiden, so stellt sich Selen im Hinblick auf eine geringere Herzmuskelschädigung und der Rehabilitation als sehr hilfreich dar. Während des Herzinfarkts werden schädliche Substanzen verstärkt produziert, die das Herzgewebe zusätzlich schädigen, so zum Beispiel Laktat- dehydrogenase und Serum-Kreatinphosphokinase.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wirkung bei Diabetes

Zumindest partiell scheint Diabetes mit Selenmangel zusammenzuhängen. Nachweislich unterbindet ein Mangel an Selen und Vitamin E die Insulinproduktion. Des Weiteren übt ein Selenmangel einen negativen Einfluss auf die Langerhansschen Inseln der Bauchspeicheldrüse, die für die Produktion von Insulin und Glucagon zuständig sind, aus. Im Umkehrschluss kann also eine ausreichende Selenzufuhr Diabetes vorbeugen und eine bestehende Diabeteserkrankung positiv beeinflussen. Allgemein aber sind Diabetiker von starker oxidativer Belastung innerhalb ihrer Blutgefäße bedroht. Effiziente Antioxidantien, so auch Selen, können den oxidativen Stress in Zaum halten und die Gefäße des Diabetikers schützen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Regulierende Wirkung von Selen auf die Schilddrüse

Unsere Schilddrüse übernimmt wichtige Aufgaben innerhalb unseres Organismus, beginnend bei der Steuerung des Energiehaushalts bis hin zur Steuerung der Stoffwechselvorgänge. Selen ist ein Bestandteil des Enzyms „Deiodase“, das für die Produktion von Schilddrüsenhormonen zuständig ist.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wirkung von Selen bei Hashimoto-Thyreoiditis

Selen kann die Anzahl der Antikörper gegen Thyreoperoxidase (TPO) signifikant senken; die Patienten fühlen sich besser, so Professor George Kahaly von der Universitätsklinik Mainz. Hierzu seien 200 μg Natriumselenit/Tag erforderlich.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wirkung von Selen gegen Muskelschwund

Aus einem Protokoll eines Ärzteteams der Universität Göteborg vom Internationalen Symposium über Spurenelemente in München 1986 geht Folgendes hervor:
- Elektromyographische Messungen (EMG) zeigten eine Normalisierung des Muskeltonus im Laufe der Behandlung mit Protecton-Selen mit Vitamin E.
- Die Kraftleistungsfähigkeit an Armen und Händen verbesserte sich.
- Die körperliche Verfassung verbesserte sich.
- 6 Patienten mit schwerem Muskelschwund wurden geheilt.
- 3 von 6 konnten nach einer mehrmonatigen Behandlung mit Selen den Rollstuhl verlassen und wieder gehen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wirkung auf die Sehkraft, bei Grauem Star/Katerakt und Diabetessymptomen

Interessanterweise enthält die Augenlinse und die Augennetzhaut reichhaltig Selen, während diese bei an fortgeschrittenem Grauen Star Erkrankten nur noch 1/6 des Selens enthalten.

Offensichtlich schützt also das Selen unsere Augenlinse und die Netzhaut auch vor Umweltgiften, die ebenfalls die Ursache für Grauen Star sein können.

In Tierversuchen führte der provozierte Selenmangel innerhalb der Ernährung zum Grauen Star; im Umkehrschluss kann das Sehvermögen verbessert und der Graue Star mit einer ausreichenden Selenzufuhr vermieden werden.

`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen bei Rheuma und Arthritis

Arthritis, eine entzündliche, gelenkzerstörende Erkrankung, die von der Schulmedizin bislang nicht beherrscht wird, kann mithilfe von Selen, am besten in Kombination mit Vitamin E, gelindert und häufig sogar geheilt werden. Ein Indiz für diese enorme Wirkung ist bereits die Tatsache, dass Arthritiserkrankte einen akuten Mangel beider Substanzen aufweisen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Die Ergebnisse waren verblüffend:

- Nach nur einem Monat berichteten die Arthritis-Patienten über eine signifikante Schmerzlinderung und die Besserung ihres Gesamtzustands.

- In den folgenden Monaten der Selen-Therapie verschwanden Gelenkschwellungen, Hüftschmerzen und Lähmungserscheinungen an Händen und Beinen.

- Innerhalb der Herbstsitzung der Arthritis-Gesellschaft wurden die Erfolge dieser Versuchsreihe bekanntgegeben und Selen zur Therapie bei Rheuma und Arthritis empfohlen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Ab wann wirkt Selen bei Arthritis?

Da Selen ein Naturheilmittel ist, setzt die heilende Wirkung zwar recht zügig ein, diese aber verläuft neben vielen anderen positiven Prozessen im Zuge der Selensättigung ab. Selenium ist kein Schmerzmittel im klassischen Sinne. Das Nachlassen von Schmerzen geht direkt mit dem Heilungsprozess einher; eine Zustandsbesserung ist in der Regel nach vier bis sechs Wochen zu erwarten – bis dahin kann es sogar zu einer Erstverschlimmerung kommen, die mit der Aktivierung des Immunsystems zusammenhängt, im Prinzip aber immer ein gutes Zeichen für das Einsetzen der Heilungsmechanismen ist!
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen bei Krebs

Zahlreiche Beobachtungen von Ärzten und Forschern aus aller Welt haben ein interessantes Phänomen bestätigt. In der Tat erkranken Menschen viel häufiger an Krebs in Gegenden, in denen die Böden ausgesprochen wenig bis gar kein Selen enthalten, um es über die natürliche Nahrungskette an die Pflanzen, Tiere und schließlich den Menschen weiterzugeben!

Hieraus wurde geschlossen, dass Selenium ein außergewöhnlich hohes Zellschutzpotenzial aufweist, das selbst karzinogenen Stoffen und dem Krebsausbruch trotzen kann.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Sensationelle Heilungen von Krebs mithilfe von Selen

Erst nach dem Ersten Weltkrieg gelang es einem Therapeuten, die richtige Selen-Dosis für Krebspatienten herauszufinden. Dr. E. Watson-Williams konnte 6 von 18 Krebspatienten, die er mit intramuskulären und intravenösen Selen-Injektionen behandelt hat, als geheilt entlassen; bei anderen fünf Patienten kam es zur Schrumpfung der Tumore und zur Verbesserung des Allgemeinzustands. Zwei repräsentative Studien aus den 1980er- und 1990er- Jahren zeigen unterdessen auf, dass das Risiko, an Krebs zu erkranken, bei unzureichender Selenversorgung um das 2–6- Fache steigt.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen wirkt gegen Krebs, indem es
- das Immunsystem insgesamt ankurbelt, also NK-Zellen (natürliche Killerzellen) aktiviert, welche die Tumore regelrecht auflösen.
- eine verstärkte Produktion von Antikörpern und anderen Botenstoffen bewirkt.
- die Anzahl von Oberflächenmolekülen auf den Krebszellen senkt und diese quasi für die NK-Zellen markiert, damit die NK-Zellen diese besser aufspüren und zerstören können.
- die Tumorzellen über den Eingriff in deren Stoffwechsel am Wachstum hemmt.
- Zellgifte neutralisiert.
- freie Radikale neutralisiert.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen wirkt gegen Krebs, indem es
- angegriffene Zellen wieder repariert.
- den Organismus vor entarteten Zellen schützt.
- bei entarteten Zellen die Apoptose (den programmierten Zelltod) unterstützt
- Chromosomenschäden verhindert.
- karzinogene (krebserregende) Substanzen neutralisiert.
- karzinogene Stoffwechselgifte puffert/neutralisiert
- über die Aktivierung bestimmter Enzyme Reparaturmechanismen an den Genen einleitet.
- vor radioaktiver Strahlung schützt.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen wird innerhalb der komplementären Onkologie wie folgt eingesetzt:
- zur Vorbeugung von Krebs,
- in der aktiven Krebstherapie,
- begleitend zur Chemotherapie,
- begleitend zur Strahlentherapie,
- sowohl vor und während als auch nach der Tumor-OP und
- zur Nachsorge.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Gegen welche Krebsarten/Tumorarten hat Selen seine Wirksamkeit bewiesen?

Aktuelle Erkenntnisse lassen darauf schließen, dass der Einsatz von Selen innerhalb einer ganzheitlichen Behandlung bei allen Krebsarten mehr als sinnvoll ist.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen halbiert die Sterblichkeit bei Krebspatienten um 50 %

Innerhalb einer Studie, in der man die Wirkung von Selen auf verschiedene Krebsarten untersucht hat, konnte man als Fazit festhalten, dass Selen die  Krebssterblichkeit um 50 % senkt!1069 Besonders aber bei den folgenden Krebsarten hat Selen in Studien und Therapieerfahrungen Erfolge gezeigt:

-Brustkrebs
-Magenkrebs
-Darmkrebs
-Leukämie
-Lungenkrebs
-Leberkrebs
-Prostatakrebs
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen-Therapie erfolgreich bei Brustkrebs

Weitere Tests anderer Forscher haben die positiven Ergebnisse bestätigen können. So konnte Dr. A. Todd bereits in den 1930er-Jahren die Überlebensrate aller an Brustkrebs behandelten/operierten Frauen erhöhen. Aktuelle Forschungen am renommierten Hahn-Meitner-Institut in Berlin unter der Leitung von Prof. Dr. Peter Brätter konnten unter Beweis stellen, dass eine tägliche Dosis von 300 Mikrogramm Bio-Selen die Brustkrebsrate bei Frauen auf Null senkt.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen erfolgreich in der Vorbeugung von Prostatakrebs

Entsprechend einer Studie der renommierten Harvard School of Public Health an 34 000 Männern konnten die Wissenschaftler aufzeigen, dass Männer mit hoher Selenaufnahme ein um die Hälfte gesenktes Risiko haben, an Prostatakrebs zu erkranken. 
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen während der Chemotherapie

Selen beeinflusst die Chemotherapie nicht negativ. Sowohl an Zellkulturen als auch an Patienten wurden verschiedene Studien mit dem Ziel durchgeführt herauszufinden, ob Selen die Wirksamkeit der Chemotherapie (Adriamycin/Cisplatin) irgendwie stören könnte. Keine der Studien konnte dieses bestätigen!

Ganz im Gegenteil: Selen verstärkt die erwünschte Wirkung der Chemotherapie um bis auf das 10-Fache!

Offenbar knackt Selen effizient den Schutz der Krebszelle gegen die Chemotherapie und verhindert so die Resistenz der Krebszellen gegenüber den Chemotherapeutika, indem es Glutathion bindet, das ansonsten von der Krebszelle zum Schutz gegenüber den Chemotherapeutika genutzt wird.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen mindert die unerwünschten Nebenwirkungen der Strahlentherapie

In zahlreichen Studien konnte nachgewiesen werden, dass Selen die gesunden Zellen vor der Schädigung der Strahlen während der Strahlentherapie schützt, während die Krebszellen von diesem Schutz nicht profitieren. Damit beeinflusst Selen in keiner Weise negativ die Strahlentherapie, schützt aber die gesunden Zellen vor den gefürchteten Nebenwirkungen. Zusätzlich schützt es vor den unerwünschten negativen Wirkungen auf das Immunsystem und verschont die Immunzellen um ein Drittel vor Beschädigungen.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Kombination von Selen mit Vitamin E verlängert Leben um 175% !

Während die bloße Zugabe von Vitamin E das Leben von Labormäusen um immerhin 30 % verlängerte, hat die Kombination von Vitamin E mit Selen unter der Leitung des Wissenschaftlers Prof. Dr. Richard Passwater eine sensationelle Lebensverlängerung um 175 % erzielt!  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Anzeichen für einen Selenmangel

Die folgenden Anzeichen beziehungsweise Symptome können mit einem Selenmangel einhergehen:

- weiße Flecken unter den Nägeln, brüchige Nägel,
- hellere Haare als sonst,
- Haarausfall,
- Hautblässe,
- Müdigkeit,
- Herzrhythmusstörungen,
- Nachlassen der Leistung,
- Leberstörungen,
- Schilddrüsenunterfunktion,
- Anfälligkeit für Immunerkrankungen,  
- Unfruchtbarkeit beim Mann,
- Gelenkbeschwerden,
- Bluthochdruck,
- Wachstumsstörungen bei Kindern,
- Herzkreislaufprobleme,
- Krebs.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Zu den Gebieten mit ausgesprochenem Selen-Mangel zählen:

- Deutschland (einwandfrei nachgewiesen 1987 durch Prof. Dr. Hartfiel von der Universität Bonn)
- Österreich
- Schweiz
- England
- Schottland
- Kanada
- Skandinavien
- Australien  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Seleneinnahme

Da es sich bei Selen um ein Spurenelement handelt, braucht der Mensch zu seiner Gesunderhaltung nicht wirklich viel davon – dafür aber eine stetige Menge, die er seinem Organismus regelmäßig zuführen muss! Bleibt die Selenversorgung länger mangelhaft bis ungenügend, kann sich dies in ernsthaften Krankheiten, wie Krebs oder Herzkreislauferkrankungen, äußern. Selen ist stets in Mengen von insgesamt 16–20 mg im Körper eines gesunden Menschen vorhanden  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Seleneinnahme zur Prävention von Krankheiten:

- Erwachsene: 50–200 µg/Tag
- Jugendliche: 100–200 µg/Tag
- Kinder: 50 µg/Tag

Selenennahme bei Krankheiten

Eine therapeutische Dosis kann bis zu 1000 µg/Tag betragen und sollte mit einem Heilpraktiker oder einem kundigen Therapeuten abgesprochen werden. Eine Blutuntersuchung sechs bis acht Wochen nach Beginn der Seleneinnahme kann nützlichen Aufschluss zur weiteren Dosierung liefern.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Welches Selenprodukt eignet sich?

Die meisten Heilpraktiker und Naturheilmediziner sind sich darüber einig, dass der Mensch den tatsächlichen Selenbedarf hierzulande auf natürlichem Wege (über Lebensmittel) kaum decken kann, was Studien von Blutuntersuchungen einwandfrei belegen. Es empfiehlt sich daher, besonders für Personen über 40 und Risikogruppen, Immungeschwächte und Krebsgefährdete, die natürliche Nahrung mit einem guten Selenpräparat zu ergänzen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Bio-Selen vs. Natriumselenit

Viele Experten empfehlen die Aufnahme von organischem Selen, dem sogenannten „Bio-Selen“, da die Verwertung von Nährstoffen durch unseren Körpers naturgemäß über organische Quellen grundsätzlich am effizientesten vonstattengeht.

Aktuell aber sind die Gegenstimmen in der Überzahl, welche die Überzeugung vertreten, dass die anorganische Selen-Form als Natriumselenit vom Körper am besten verwertet werden kann.

Dieses wird in Therapien vieler Erkrankungen erfolgreich eingesetzt und scheint die modernere Variante zu sein, die sich bestens bewährt hat – vor allem zur Behandlung von vorliegenden Erkrankungen. Mehr hierzu auch im Punkt „Selen-Produkte“.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Betrachtet man den menschlichen Körper, so ist der Bedarf nach stabilen und gleichzeitig elastischen Elementen sehr hoch. So besteht unser gesamtes Blutgefäßsystem, das insgesamt (inklusive der Kapillaren) rund 100 000 km Gesamtlänge hat, in jungen Jahren aus einer elastischen und zugleich stabilen Struktur. Das gesamte Bindegewebe, die Haut, die Sehnen und Bänder sowie die Gelenkknorpel müssen diesen Anforderungen an Elastizität und Festigkeit zugleich standhalten. Ein unverzichtbarer Nährstoff, damit dies lebenslang so bleibt, ist Silicium, und der Wissenschaftler Hugo Schulz gehörte zu den Ersten, die erkannt haben, dass es kein menschliches Gewebe gibt, das frei von Silicium und – ergo – nicht auf Silicium angewiesen ist!
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Es sollten viele Jahre ins Land gehen, bis man die Wichtigkeit von Silicium auch in medizinischen Kreisen zu würdigen wusste. Vielleicht liegt dies gerade daran, dass Spurenelemente im Körper so geringfügig vorkommen, dass man ihnen nicht auf Anhieb ein derartiges Potenzial zuschreibt, wie es sich für Silicium darstellt. Ein grober Fehler – weiß man doch mittlerweile seit Längerem um die lebenswichtigen Funktionen beispielsweise des Spurenelements Eisen Bescheid.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Nicht zuletzt wurde Silicium als entzündungshemmend und desinfizierend eingestuft.

Weitere wissenschaftliche Untersuchungen konnten belegen, dass es sich beim Silicium um einen essenzielles, also für unseren Organismus lebensnotwendiges Element handelt, vergleichbar sogar mit dem Vitamin C! Dies wird durch die Tatsache unterstrichen, dass das Silicium wichtige Vorgänge innerhalb unseres Organismus bewerkstelligt, die überhaupt ausschließlich nur in Gegenwart von Silicium möglich sind.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Bekannt ist, dass der Stamm der Hunzas, ein Völkchen im Himalaya, ein mit Silicium angereichertes Gletscherwasser trinkt. Das Durchschnittsalter dieser Menschen beträgt erstaunliche 130 Jahre bei optimaler Gesundheit!

Silicium ist des Weiteren der einzige bekannte Stoff, der über die Fähigkeit verfügt, das 300-Fache seines Gewichtes an Wasser zu binden. Die gesunde Funktion unserer Zellen steht aber unmittelbar mit der Wasserbindungsfähigkeit in Verbindung, die erst eine ausreichende Nährstoffzufuhr und funktionierende Stoffwechselprozesse ermöglicht. Die abbauende Entwicklung im menschlichen Organismus kennen wir von älteren Menschen, deren Haut mit dem Alter mit einhergehendem Silicium- Verlust aufgrund von Flüssigkeitsverlust schrumpelig wird und Falten bildet.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
So verfügen Neugeborene über den höchsten Anteil an Körperflüssigkeit. Im Laufe des Lebens sinkt das Verhältnis der Flüssigkeit zur Trockenmasse in unserem Körper immer mehr.

Über die Supplementierung von Silicium als körpereigenem Stoff, der über die Fähigkeit verfügt, das 300-Fache an Wasser an sich zu binden, steht dem Menschen ein Mittel zur Verfügung, um die biologische Alterung stark hinauszuzögern und bis ins hohe Alter gesund und schön zu bleiben. Silicium also ein Nährstoff, der zugleich gesund, schön und jung macht? Exakt so ist es, und vor noch nicht allzu langer Zeit hätte die Wissenschaft solche Mechanismen niemals für möglich gehalten. Genügend Gründe also, um dieses ganz besondere Element als wundervolles Geschenk von Mutter Natur genauer unter die Lupe zu nehmen!
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wussten Sie, dass
... Silicium anerkannterweise ein essenzielles (lebensnotwendiges) Element ist?
... Silicium direkt unser Immunsystem stärkt und unsere Gesundheit auf diese Weise effektiv schützt?
... Silicium den Zellstoffwechsel aktiviert und unsere Zellen erneuert und dadurch eine biologische Verjüngung unseres Körpers nach sich zieht?
... Silicium unser Bindegewebe stärkt und wieder neu aufbaut?
... Falten, Cellulitis & Co. mit Silicium sowohl innerlich als auch äußerlich erfolgreich bekämpft werden können?
... Silicium unsere splissigen Haare wieder gesund machen kann, brüchige Fingernägel fest und die Haut wieder faltenfrei?
... Silicium unsere Blutgefäße elastisch hält und spröde Blutgefäße wieder elastisch machen kann?
... Silicium Arteriosklerose (Arterienverkalkung) sogar teilweise rückgängig machen kann?
... Silicium (Kieselsäure) unsere Knochen stärken kann?
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wussten Sie, dass
... Silicium unsere Gelenke jung erhält und sogar Arthrose teilweise rückgängig machen kann?
... unser Körper im Alter von zehn Jahren bereits anfängt, Silicium stetig abzubauen, auch wenn dieser Prozess erst mit 35 Jahren sichtbar wird?
... Silicium der einzige Stoff ist, der die 300-fache Menge Wasser an sich ziehen und Falten in wenigen Wochen auf natürliche Weise verschwinden lassen kann?
... Kieselsäure (Silicium) sämtliche Alterungsprozesse nicht nur bremsen, sondern nachweislich auch rückgängig machen kann?
... Silicium auch desinfizierend und entzündungshemmend wirkt?
... Silicium aufgrund seiner genannten Fähigkeiten Menschen schön und gesund machen und gleichzeitig das Leben erheblich verlängern kann?
... rund 80 % aller Menschen unter Siliciummangel leiden und unnötig altern, krank werden und an Jugendblüte einbüßen?
... nur die wenigsten Ärzte aufgrund der jungen Forschung von Silicium über diese Erkenntnisse verfügen?

`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium verjüngt Blutgefäße und wirkt Arteriosklerose entgegen

In einer Studie konnten die Blutgefäße mit kolloidalem Silicium verjüngt werden. Das Protein der Gefäßwände hat sich verjüngt, was zur Blutdrucksenkung und Vermehrung der Lymphozyten und Phagozytenführte. In anderen Studien an Kaninchen konnte ebenfalls ein Rückgang an Atheromläsionen nach Ergänzung der Nahrung mit Silicium nachgewiesen werden.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium verjüngt in Studien die Haut

An 100 Frauen, die drei Wochen lang 3 x am Tag mit Silicium-Gel behandelt wurden, stellte man eine signifikante Verminderung der Faltentiefe fest. Unabhängig von den behandelten Hautstellen zeigte sich in den nächsten sechs Monaten bei 40 % der behandelten Frauen ein bleibender Effekt und nach einem Jahr noch bei 35 % der Probandinnen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Signifikante Verjüngung der Haut im Tierversuch

An haarlosen Mäusen sollte die Strukturveränderung der Haut unter Anwendung von Silicium untersucht werden. Zu diesem Zweck unterzog man die Haut von sechs Monate alten Mäusen einem Vergleich mit der Haut von 17 Monate alten Mäusen. Die 17 Monate alten Mäuse hatten ab dem Alter von 12 Monaten täglich Silicium verabreicht bekommen, und zwar an fünf Tagen in der Woche. Bei diesen Mäusen stellte sich eine Neustrukturierung der Kollagen- und Elastinfasern, die sich neu aufgebaut hatten, ein, während die interfibrillaren Räume und die Stärke der Lederhaut trotz chronologischer Alterung unverändert blieben. Die Struktur der Lederhaut entsprach den Häuten der sechs Monate alten, unbehandelten Mäuse.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Verjüngungsmechanismen in weiteren Studien nachgewiesen

Den beiden Wissenschaftlern K. Letters und O. Scholl verdanken wir die Erkenntnis, dass der hauptsächliche Altersvorgang auf die Dehydrierung zurückzuführen, also gleichbedeutend mit der Austrocknung der Körperzellen ist. Die Folge dieser Dehydrierung ist die Entquellung des Proteins, und infolgedessen kommt es zur Ausflockung und Gerinnung des körpereigenen Proteins. Den Wissenschaftlern Scholl und Gobor gelang es 1949, die beschriebenen Alterungsvorgänge am menschlichen Gewebe mit 1 % löslichem Silicium zu verzögern und im Anschluss daran sogar umzukehren. Der Siliciumgehalt des Blutes stieg dabei über mehrere Wochen auf bis zu 400 %.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium (Kieselsäure) stärkt die Haarstruktur und macht Haare deutlich dicker

Am Universitäts-Klinikum Hamburg-Eppendorf konnte das Forscher-Team um Prof. Dr. med. Matthias Augustin an 55 Frauen mit dünnem Haar nach sechs Monaten täglicher Einnahme von Silicium-Gel (1 EL/Tag) eine Haarverdickung von durchschnittlich 13 % nachweisen. Diese Haarverdickung spiegelte sich in sichtbar mehr Volumen und strahlender Gesundheit wider. Des Weiteren wurde angeführt: „Es kann davon ausgegangen werden, dass eine längere Einnahme von Silicium-Gel zu einer weiteren Stärkung der Haare führt.“
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium hilft bei Osteoporose

Silicium verdichtet in Studien die Knochenstruktur und hilft so gegen Osteoporose.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium-Gel wirkt Zahnfleischbluten und Karies entgegen

In einer Studie an 43 Patienten mit Zahnfleischentzündungen konnte der Siliciumforscher Kober mit einer Silicium-Zahnpaste nach vier bis fünf Tagen Zahnfleischentzündungen stark mindern und Karies verringern.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Stärkung des Immunsystems

Das Immunsystem ist ein biologisches Abwehrsystem in unserem Organismus, das die Aufgabe hat, Gewebeschädigungen aufgrund von Krankheitserregern zu verhindern.

Hierbei geht das Immunsystem gegen eingedrungene Mikroorganismen wie Bakterien, Viren und Pilzen vor, hat daneben aber auch die Aufgabe, fremde Substanzen zu entfernen, aber auch mutierte, körpereigene Zellen zu zerstören. Ist das Immunsystem angeschlagen, sind wir anfällig für allerlei Erkrankungen. Umgekehrt können Erkrankungen nur mithilfe eines starken Immunsystems bewältigt werden.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium/Kieselerde macht eine Verjüngung der Haut und des Bindegewebes möglich

In Experimenten konnte nachgewiesen werden, dass Silicium nicht nur den Alterungsprozess verlangsamen kann, sondern sogar eine Verjüngung ermöglicht! Man kann also selbst im fortgeschrittenen Alter mit der regelmäßigen Einnahme von Kieselsäure nicht nur die weitere Alterung stark verlangsamen, sondern seine Haut für jeden ersichtlich verjüngen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Entzündungshemmende Wirkung

Man hat festgestellt, dass Menschen, die zu allerlei Entzündungen neigen, fast in allen Fällen unter Siliciummangel leiden. Eine innere sowie äußere Anwendung von Silicium (aufgenommen über den Magen oder aufgetragen in Form von Gel) hilft, solche Entzündungen zu heilen oder ihnen vorzubeugen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Desinfizierende Wirkung

Dem Silicium wird darüber hinaus eine leicht desinfizierende Wirkung zugesprochen, weswegen es bei Hauterkrankungen und Pilzen, auch äußerlich angewandt, Erfolge aufzeigt. Aus diesen allgemeinen, sehr breit gefächerten Wirkungen, ergeben sich die spezifischen Wirkungen bei folgenden körperlichen Missständen und Erkrankungen:
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium für die Schönheit

Die regelmäßige orale Einnahme von Silicium-Präparaten wirkt sich stärkend auf unsere Körperzellen aus. Die Wirkung erfolgt stets von innen nach außen, weswegen die optischen Änderungen erst allmählich sichtbar werden. Nach mehreren Wochen regelmäßiger Einnahme ist mit einer verbesserten Haarstruktur und einer glatteren Haut zu rechnen, und auch die Finger- und Fußnägel werden fester.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Diese Entwicklung setzt unmittelbar ein, wird aber erst nach Wochen regelmäßiger Einnahme zeitversetzt sichtbar. Je nach Gewebeform und individueller Zellererneuerung dauert es ca. drei bis sechs Monate, bis diese Verschönerungsmechanismen sichtbar werden. Die Haut erneuert sich alle 28 Tage, die Haare wachsen mit 1 cm pro Monat sehr langsam, und ein Nagel erneuert sich komplett nach rund fünf bis sechs Monaten.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Aufnahmefähigkeit des Körpers für Silicium

Die Voraussetzung für eine optimale Aufnahme von Silicium ist die kolloidale Form. Unter „kolloidaler Form“ versteht man eine Größe der Siliciumteilchen, die lediglich eine Größenordnung höher liegt als das Atom. Dies ist schon sehr klein. Die kleinsten kolloidalen Teilchen durchdringen leichter den Darm, um im Blut aufgenommen und zum Zielort transportiert zu werden. Zum Vergleich ist die Größe der Siliciumteilchen, die sich in der Kieselerde befinden, 1800 x größer als die Siliciumteilchen, die kolloidal im Silicium-Gel vorliegen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Darmstörungen, Durchfall, Verstopfung, Blähungen und Bauchschmerzen

Silicium beziehungsweise die Kieselsäure verfügen über die Eigenschaft, Entzündungssekrete sowie Giftstoffe und Schlacken im Darm zu binden. Die extreme Bindefähigkeit ist hier jener der Wasserbindung zu vergleichen, also um das 300-Fache des eigenen Gewichts. Ferner wirkt sich Silicium desinfizierend aus. Auf diese Weise wird den meisten Ursachen von Darmproblemen, Durchfall, Verstopfung, Blähungen und Bauchschmerzen auf natürliche Weise begegnet und bei dauerhafter Einnahme von Kieselsäure vorgebeugt.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Kieselsäure (Silicium) bei Entzündungen

Viele Naturheilmediziner sehen die Entzündung an sich als Ursprung einer jeden Erkrankung an; umso relevanter erscheint also die Rolle von Kieselsäure, die bei allerlei Erkrankungen entzündungshemmend wirkt. Silicium kann innerlich (als Silicium-Gel, Heilerde usw.) aber auch äußerlich durch Auftragen angewandt werden und hat sich bei vielen entzündlichen Prozessen, von der Mandelentzündung bis hin zu etwaigen Hautentzündung bewährt. Zu erklären ist die entzündungshemmende Wirkung durch die Bindung von Entzündungssekreten und die gleichzeitige Produktion von Lymphozyten und Phagozyten.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium auf das Bindegewebe

Zum Bindegewebe zählt man nicht nur die Haut, Sehnen, Bänder, Knorpel und Bandscheiben, sondern ebenfalls innere Bestandteile unserer Organe. Silicium ist in unterschiedlichen Mengen in allen menschlichen Gewebeformen vorzufinden und als Bestandteil unseres Bindegewebes sowohl in der flüssigen Grundsubstanz als auch in den einzelnen Eiweißfasern des Bindegewebes. Es aktiviert den Zellstoffwechsel, festigt ihn und beugt dadurch Hautfalten, Cellulitis, Krampfadern, Arteriosklerose, Gelenkverschleiß und Atembeschwerden vor.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Magen-Darm-Erkrankungen, Gastritis, Durchfall usw.

Bei Magen-Darm-Erkrankungen, Gastritis, Durchfall usw. findet der Einsatz von Silicium innerlich statt, zum Beispiel in Form von Silicium-Gel, Kieselerde oder Heilerde (enthält rund 50 % Silicium). Die Kieselsäure breitet sich großflächig im Magen aus, puffert die überschüssige Magensäure, bindet Giftstoffe, Krankheitserreger und Gase (Letzteres hilft gegen Blähungen!) und wirkt der Entzündung entgegen, indem sie die Entzündungserreger ausschaltet und Entzündungssekrete bindet. Durch die enorme Bindungsfähigkeit der im Gel enthaltenen Kieselsäureteilchen werden die Erreger auf rein physikalische Art gebunden und verlieren ihre unangenehme Wirkung.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Arteriosklerose

Die Wirkung von Silicium bei Arteriosklerose (landläufig auch als „Arterienverkalkung“ bezeichnet), gewinnt an Bedeutung, wenn man sich vergegenwärtigt, dass rund 50 % aller Todesfälle auf Herzkreislauferkrankungen zurückführbar sind und diese in fast allen Fällen der Arteriosklerose zuzuschreiben sind. Das Herz pumpt das Blut entsprechend dem Herzschlag stoßartig. Damit dieses aber fließend und gleichmäßig zu den Zielorganen transportiert werden kann, sind unsere Blutgefäße in den jungen Jahren elastisch. Bereits in der Jugendzeit aber verändert sich die Struktur unserer Blutgefäße dadurch, dass sich Kalk und Cholesterin an den Innenwänden der Arterien anheftet und die zuvor elastischen Blutgefäße nach und nach starr und brüchig machen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium gegen Bluthochdruck (Hypertonie)

Wie wir bereits gelesen haben, pumpt das Herz das Blut stoßartig durch unsere Blutgefäße. Um aber fließend unsere Organe zu erreichen, ist es darauf angewiesen, dass unsere Blutgefäße das stoßartige Pumpen kompensieren, und dies ist nur möglich, wenn die Blutgefäße elastisch sind. Im Laufe unseres Lebens lagert sich leider Kalk und Cholesterin darin ab, dies macht die Blutgefäße starr und brüchig. Da die Blutgefäße nun nicht mehr elastisch nachgeben können, muss der Blutdruck erhöht werden, damit das Blut weiterhin zum Zielort transportiert werden kann.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Kieselsäure (Silicium) gegen Sodbrennen

Die Kieselsäure wirkt sich auf unseren Säure-Basen-Haushalt basisch aus, puffert die überschüssige Magensäure und breitet quasi einen Schutzmantel über den Magen, indem sie sich großflächig über die gesamte Magenoberfläche legt.

Anwendung: 1–3 Esslöffel Silicium-Gel am Tag
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium gegen Sehnenscheidenentzündung

Bei Sehnenscheidenentzündung wird eine sowohl äußerliche als auch innerliche Anwendung empfohlen. Silicium wirkt antientzündlich von innen wie von außen und beschleunigt so die Heilungsprozesse.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium gegen Allergien

Da Allergene häufig über die Haut und Schleimhäute aufgenommen werden, kann die Festigkeit und Elastizität der Haut, die mit der Silicium-Einnahme einhergeht, diesen erfolgreich trotzen. Allergien entstehen aber häufig auch aufgrund einer gestörten Darmflora, die Silicium regenerieren kann. Auch in diesem Fall sollte Silicium sowohl äußerlich als auch innerlich angewandt werden.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung bei Arthrose und Arthritis

Silicium wirkt entzündungshemmend auf das Gelenk ein; es verstärkt die Fähigkeit des hyalinen Knorpels, Wasser zu binden, und erhöht dessen Elastizität.

Das Bindegewebe wird gestärkt, der Knorpel kann sich sogar teilweise regenerieren, denn die Chondrozyten (Zellen in der Gelenkkapsel), die lebenslang stets den abgebauten Knorpel im Gelenk regenerieren, erhöhen im Beisein von Silicium ihre Aktivität um 243 %! Hieraus resultieren sehr bald ein deutlicher Schmerznachlass und eine erhöhte Beweglichkeit.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Zahnfleischentzündungen

Zahnfleischentzündungen werden durch Zahnstein, Verunreinigungen von Prothesen sowie schlecht sitzende Füllungen und Kronen verursacht. Mundspülungen mit Silicium-Gel können Abhilfe schaffen und die Entzündung hemmen, die Schwellung mindern und eventuell Zahnfleischbluten stillen. Sehr empfehlenswert sind Zahnpasten, die Silicium enthalten.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung gegen Osteoporose und Knochenschwund

Bekanntlich gehen die Osteoporose beziehungsweise der Knochenabbau mit einem Calciumabbau im Knochen einher. Eine zusätzliche Calciumzufuhr ist also angezeigt. Silicium verfügt über die nützliche Eigenschaft, als sogenannter „Calcium-Schlepper“ Calcium effizienter im Knochengewebe einzulagern. Des Weiteren wird die Synthese der Knochenmatrix stimuliert, was die Knochenverdichtung weiterhin verbessert.

Anwendung: 3 x täglich einen Teelöffel Silicium.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium/Kieselsäure bei Zahnschmelzproblemen und Karies

Bekanntlich bestehen Zähne aus Calcium. Da Silicium die Einlagerung von Calcium unterstützt, kann eine regelmäßige innerliche Anwendung der Karies und dem Zahnschmelzabbau entgegenwirken.

Anwendung: 3 Esslöffel Silicium am Tag einnehmen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Krebs

Die Anregung zur Produktion von Phagozyten und zum Aufbau von Lymphozyten macht Silicium auch im Kampf gegen Krebs zu einem wertvollen Mittel. Silicium repariert das Zellprotein, indem es die Synthese normaler Proteinkörper wieder ermöglicht, und es hat die Befähigung, die Auflösung von Zellwänden, die von Karzinogenen verursacht wird, wieder zu normalisieren. Silicium verfügt also über die Fähigkeit, ein beschädigtes oder denaturiertes Protein durch strukturelle Wiedereingliederung zu regenerieren.[...]
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Atemwegsproblemen (Bronchialproblemen)

Die Bronchen und die Lungenläppchen sind eingebettet in ein elastisches Bindegewebe. Dieses befindet sich auch unter dem Lungenfell und enthält von Natur aus in jungen Jahren und bei Gesunden viel Silicium. Im zunehmenden Alter nimmt der Anteil des Siliciums ab. Diesem kann man mit Siliciumgaben von außen begegnen.

Anwendung: 1 Esslöffel Silicium-Gel täglich.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium auf die Haare

Silicium gilt als einer der wichtigsten, wenn nicht DER wichtigste Nährstoff für die Haare. In Studien konnte nachgewiesen werden, dass die Einnahme von Silicium-Gel bereits nach 24 Wochen bei 70 % der Probanden die Haarstruktur deutlich verbesserte. Das Haar war kräftiger, hatte mehr Glanz und weniger Spliss.1105 Eine sechsmonatige Einnahme von 1 Esslöffel Silicium-Gel täglich hat in Studien im Durchschnitt ein bis zu 16 % dickeres Haar erzeugt (siehe dazu [...]
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium gegen Haarausfall

Haarausfall muss lange nicht immer genetisch bedingt sein. Sehr häufig verlieren die Haarwurzeln an Spannkraft und lockern sich. Das Silicium kann die Spannkraft der Haarwurzel stärken und dem Haarausfall entgegenwirken.

Anwendung: Täglich 3 Teelöffel Grüne Erde (Heilerde) oder Silicium-Erde.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium bremst Alterung und verjüngt!

Die Alterung vollzieht sich von innen nach außen, was so viel bedeutet, dass allen Merkmalen, die für uns sichtbar in Form von entstehenden Hautfalten, grauem Haar, glanzlosen Augen, schlaffem Bindegewebe usw. entstehen, stets innerliche, degenerative Veränderungen vorausgegangen sind, die, abgesehen vom ästhetischen Problem, ein viel schwerwiegenderes Problem mit sich bringen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium festigt unser Bindegewebe und glättet Hautfalten

Haut, Sehnen, Bänder, Knorpel, Bandscheiben bestehen weitgehend aus Eiweißmolekülen. Silicium regt die Zellteilung an, aktiviert den Zellstoffwechsel unseres Bindegewebes und festigt es. Wissenschaftliche Studien attestieren dem Silicium eine wichtige Bedeutung innerhalb des Bindegewebestoffwechsels. Über bestimmte Enzyme begünstigt es die Bildung der Bindegewebsfasern „Kollagen“ und „Elastin“. Während Elastin für die Elastizität der Haut zuständig ist, macht das Kollagen die Haut fest. Silicium ist also für die Synthese der Kollagen- und Elastinfasern im Bindegewebe unverzichtbar; ein Mangel daran verringert die Elastizität und Festigkeit des Bindegewebes und führt im Falle der Haut zu Falten.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium verjüngt die Haut über mehrere Mechanismen:

- Über die Einwirkung auf die Biosynthese des Elastins und des Kollagens wird die Hautelastizität erhöht; der Gewebeverhärtung, die aus der Lipidperoxydation und der nicht enzymatischen Glykosilation resultiert, wird entgegengewirkt.
- Der Zellstoffwechsel wird stimuliert, wodurch sich die Hautzellen schneller erneuern können.
- Die Haut speichert entschieden mehr Wasser (ab dem 40. Lebensjahr trocknet die Haut ohne Silicium nach und nach aus!).
- Die angreifenden freien Radikale werden abgewehrt.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium festigt das Haar und verleiht ihm neuen Glanz

- Silicium stimuliert die Zellen der Kopfhaut und der Haarwurzel und
- stärkt die Haarstruktur,
- verhindert ein übermäßig fettendes Haar,
- optimiert die Mikrozirkulation,
- beschleunigt das Haarwachstum und
- verhindert den Haarausfall.
`
    },
]
