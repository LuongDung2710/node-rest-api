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
Einem aktuellen Bericht der Weltgesundheitsorganisation (WHO) zufolge stellt die Hypertonie (Bluthochdruck) weltweit das gr????te Gesundheitsrisiko dar, noch vor Rauchen und Alkohol!
Entsprechend der ??? Global Burden of Disease Study 2010??? hat Bluthochdruck sogar das bislang f??hrende Risiko ???Hunger im Kindesalter??? abgel??st und gilt aktuell weltweit als Todesursache Nr.1!
  `,
        quelleId: "6",
        seite: 5,
    },
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
Volkskrankheit Bluthochdruck Risikofaktor f??r Herzinfarkt und Schlaganfall
  
Auswertungen von zahlreichen Studien untermauern unmissverst??ndlich das Verst??ndnis um Bluthochdruck als potentiellen Risikofaktor f??r zahlreiche Herzkreislauferkrankungen, aber auch f??r die h??ufig t??dlich endenden Herzinfarkte und Schlaganf??lle!
So sollen ca. 50% aller Todesf??lle in Deutschland direkt oder indirekt auf Bluthochdruck zur??ckzuf??hren sein, mehr als 400.000 Todesf??lle aufgrund Herzkreislauferkrankungen gehen indessen direkt auf das Konto von Bluthochdruck (Hypertonie) zur??ck!
  `,
        quelleId: "6",
        seite: 5,
    },
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
So ist Deutschland tats??chlich der Vorreiter mit 55% aller Einwohner, die unter Hypertonie (Bluthochdruck) leiden! Es handelt sich dabei um ein ernstzunehmendes Problem, das zunehmend mehr Menschen, tendenziell auch immer j??ngere betrifft. Steigender Leistungsdruck, denaturierte Ern??hrung (=Vitalstoffmangel!),  Bewegungsmangel und nicht zuletzt Medikamenteneinnahme werden hierf??r verantwortlich gemacht.
  `,
        quelleId: "6",
        seite: 6,
    },
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
Symptome f??r Bluthochdruck
Als besonders t??ckisch erweist sich die Tatsache, dass die Entwicklung von Bluthochdruck schleichend und zumeist unbemerkt vonstattengeht. W??hrend die wenigsten etwas B??ses ahnen, entwickelt sich der Bluthochdruck zu einem lebensbedrohenden Aspekt, sch??digt zun??chst unbemerkt die Arterien sowie den Herzmuskel.
  
Und so bemerken viele ihre Hypertonieerkrakung erst nach vielen Jahren, wenn bereits ernsthafte Folgesch??den eingetreten sind, bereits das Herz, das Hirn und die Nieren nach schulmedizinischem Verst??ndnis irreparabel in Mitleidenschaft gezogen wurden!
  `,
        quelleId: "6",
        seite: 6,
    },
    {
        usefulInformationImageId: images_bluthochdruck,
        text: `
Symptome f??r Bluthochdruck
  
Zu den typischen Symptomen des Bluthochdrucks geh??ren Kopfschmerzen, eine permanente Ersch??pfung samt Leistungsabfall, Schwindelgef??hle zu unterschiedlichen Tageszeiten, Kurzatmigkeit, deprimierte Stimmung, gesteigerte Nervosit??t. Diese k??nnen st??rker oder schw??cher ausfallen, f??r sich allein oder in Verbund. Im weiteren Verlauf ??u??ert sich Bluthochdruck nicht selten durch h??ufiges Nasenbluten und Ohrensausen.
  `,
        quelleId: "6",
        seite: 6,
    },
    {
        usefulInformationImageId: images_urshache,
        quelleId: "8",
        seite: 37,
        text: `
  Bin ich sauer? ??? der objektive pH-Test verr??t es:
  
  Symptome k??nnen durchaus subjektiv empfunden werden. Um Ihren S??ure-Basen-Zustand ganz objektiv festzustellen, besorgen Sie sich in der Apotheke s.g. ???pH-Teststreifen???. 
  
  Messen Sie an drei aufeinander folgenden Tagen jeweils morgens, mittags und abends mit Hilfe des Teststreifens Ihre Werte (f??r einige Sekunden darauf urinieren oder im Becher mit Urin reinhalten), und notieren Sie diese dann. Nehmen Sie im Anschlu?? den Durchschnittswert aller 9 Werte aus diesen 3 Tagen (zusammenaddieren und durch 9 dividieren) und Sie erhalten einen ziemlich genaue Auswertung zu Ihrem S??ure-Basen-Haushalt!
  
  Ziel sollte es sein, Ihren pH-Wert im Durchschnitt dauerhaft in den basischen Bereich zu verschieben (>7)
  
  <a href="https://www.waldkraft.bio/magenwohl-dein-barf-zusatz-bei-uebersaeuerung?number=WK10189V-001&sPartner=energiereich">???? Magenwohl - Dein BARF-Zusatz bei ??bers??uerung </a>
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
  Allergien
  
  Um den Organismus zu ents??uern, wird u.a. auch das Hormon ???Histamin??? ausgesch??ttet. Dieses Hormon wird aber bei allen Allergien ausgesch??ttet und gilt als Ausl??ser f??r allergische Reaktionen. Um also Allergien in Griff zu bekommen, liegt es auf der Hand, zun??chst den S??uregrad des K??rpers (pH-Wert) in Lot zu bringen, bevor man andere Ma??nahmen einleitet, um die Aussch??ttung des Hormons ???Histamin??? zu verhindern.
  
  <a href="https://www.waldkraft.bio/magenwohl-dein-barf-zusatz-bei-uebersaeuerung?number=WK10189V-001&sPartner=energiereich">???? Magenwohl - Dein BARF-Zusatz bei ??bers??uerung </a>
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
  Alterung
  
  W??hrend wir gegen chronologisches Altern nichts tun k??nnen, liegt die biologische Alterung durchaus weitestgehend in unseren H??nden. Entsprechend der Meinung vieler Forscher, liegt die Hauptursache des Alterns an S??uren, sowie Schlacken, die neutralisierte S??uren hinterlassen und die sich dann im K??rperinneren ansammeln. Desweiteren fordert die Neutralisierung der S??uren eine Entmineralisierung unseres Organismus, so der Haut, der Haare, N??gel, Knochen, Z??hne, Gelenkknorpel, Blutgef????e und Organe - beides in Verbund f??hrt zu alterstypischen Anzeichen und vorzeitigem Verschlei?? des K??rpers = Alterung  
  
  <a href="https://www.waldkraft.bio/magenwohl-dein-barf-zusatz-bei-uebersaeuerung?number=WK10189V-001&sPartner=energiereich">???? Magenwohl - Dein BARF-Zusatz bei ??bers??uerung </a>
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
  Arteriosklerose gilt als Hauptursache f??r Herzkreislauferkrankungen. Diese wiederum stellen den Grund f??r 50% aller Todesf??lle in den Industriel??ndern dar!
  
  Um zu ents??uern, ben??tigt der Organismus Mineralien. Da das hierf??r ben??tigte Kalzium in den Blutgef????en schneller zur Verf??gung steht, als das Kalzium in den Knochen, muss der sofort zur Verf??gung stehende Kalziumspeicher der Blutgef????e angezapft werden.
  So zapft der K??rper das Kalzium der mineralstoffreichen Intima (innere Schicht der Blutgef????e) an und zerst??rt diese damit. Es entstehen kleinste Mikrorisse.
  Um weiteren Schaden abzuwenden, produziert der K??rper verst??rkt Cholesterin, das die Risse flicken soll. Statt aber Kalzium zur??ck in den Blutgef????en einzulagern, [...]
  
  <a href="https://www.waldkraft.bio/magenwohl-dein-barf-zusatz-bei-uebersaeuerung?number=WK10189V-001&sPartner=energiereich">???? Magenwohl - Dein BARF-Zusatz bei ??bers??uerung </a>
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
Arthrose
  
Ob nun beim Bandscheibenvorfall oder der Arthrose ??? die Mechanismen sind stets die selben: zur Neutralisierung der S??uren zapft der K??rper aus dem Gelenkknorpel (beim Bandscheibenvorfall aus der Bandscheibe) die f??r die Neutralisierung n??tigen Mineralstoffe an.
Die Gelenkfl??ssigkeit, s.g. ???Synovia??? ver??ndert durch die Basenentnahme ihre Konstistenz und wird dickfl??ssig, die abgelagerten Schlackenkristalle bilden in Verbindung mit der dickfl??ssigen Synovia eine ???schmirgelartige??? Masse, dies f??hrt zun??chst zu Funktionseinbussen, im Laufe dieses Prozesses zum Untergang des Gelenkknorpels (bzw. der Bandscheibe beim Bandscheibenvorfall), der s.g. ???Arthrose???.
Ziel der Therapie mu?? hier hei??en, den K??rper zu ents??uern und anschlie??end zu remineralisieren, desweiteren den Knorpel mit kollagenaufbauenden [...]
  `,
    },
    {
        usefulInformationImageId: images_magenwohl,
        quelleId: "8",
        seite: 37,
        text: `
  Asthma
  
  Das allergische Asthma setzt aufgrund der ??bers??uerung das Hormon Histamin frei sowie L??hmung der Lungenkapillaren. Beides f??hrt zu der typischen allergischen Reaktion beim Asthma, der Bronchen- Verkrampfung und daraus resultierender Atemnot.
  Das nichtallergische Asthma resultiert ebenfalls aus ??bers??uerung - hier verkrampft die Atemmuskulatur aufgrund der vielen S??uren im K??rper, was den Asthma-Anfall provoziert.
  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 10,
        text: `
Das Problem ist das Unwissen, das Nicht-Wissen dessen, was auf der Welt geschieht, weil man sich nie damit auseinandergesetzt hat. Man kennt sich am Urlaubsort bestens aus, wei??, wo es das beste Essen gibt, informiert sich ??ber das neueste Handy, wei??, was der Mode-Trend ist und kennt die aktuelle Aufstellung der Fu??ballmannschaft. Aber das war es auch schon. Ein gro??er Teil der Menschen lebt ein banales, ein ???profanes??? Leben - wie Freimaurer ??ber die Nicht-Eingeweihten zu sagen pflegen. Der Normalb??rger will alles haben - Sex, Haus, Auto, Klamotten, Reisen - und alles so billig wie m??glich. Er hat das, was man ihm in der Schule und auf der Uni beigebracht hat, sch??n brav nachgeplappert und auswendig gelernt - und nie hinterfragt. Das sind die Menschen, die alles glauben, was in der Tagesschau kommt oder was die etablierten  Parteienvertreter ihnen vorgaukeln.  [...]

  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 12,
        text: `
Dieser erkl??rte mir damals, dass ihr ???gr????tes Problem die #??berbev??lkerung sei??? und: ???Wir haben Waffen entwickelt, sogenannte ,Ethno-Waffen\ die auf genetische Merkmale ansprechen und es uns so erm??glichen, nur bestimmte Bev??lkerungsteile bzw. Rassen zu dezimieren.??? Es ging hier um die aus seiner Sicht ???minderwertigen??? V??lker Afrikas, aber auch Bev??lkerungsteile der westlichen Welt. In seinen Augen sind die Volksmassen der Welt wie Tiere, da sie sich auch so verhalten w??rden. Die Menschen m??sse man wie eine Herde ansehen und auch so mit ihnen umgehen. ???Und was macht man mit Vieh????, fragte er mich. ???Markieren!??? Und deshalb bekommen die Menschen einen Chip unter die Haut - so seine Argumentation. ???Wer sucht, der wird finden! Doch die meisten Menschen wollen gar nicht suchen. Deswegen unterscheiden wir sie auch nicht von den Tieren, denn die suchen auch nicht. Klar?

  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 12,
        text: `
Ich stellte ihm damals auch die Frage, wann das Bargeld entzogen wird, was er folgenderma??en beantwortete: ???Das kommt darauf an, wie sich andere Faktoren entwickeln. Es wird neue Terroranschl??ge geben, da wir durch diese die Massen m??rbe machen. Die Menschen der Welt werden uns darum bitten, die Welt f??r sie sicherer zu machen, was wir durch unsere Technologie - die l??ngst entwickelt ist - auch tun werden. Das Bargeld wird verschwinden, doch es wird mit einem anderen Ereignis parallel laufen, ??ber das ich Ihnen leider nichts sagen kann. Sonst d??rfte ich Sie heute Nacht nicht mehr nach Hause lassen. ???

Nun, das war im Jahre 2003, und 2004 hatte ich es in meinem Buch ???H??nde weg von diesem Buch!??? auch nachweislich in diesem Wortlaut ver??ffentlicht. Es ist alles geplant! Die Menschen sind durch die Corona-Krise so hirngewaschen, dass sie [...]
  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 17,
        text: `
Die Neurodermitis war bei mir in der Jugend nicht so ausgepr??gt, was sich jedoch ??nderte, als ich mehrere Z??hne mit #Amalgam bef??llt bekam - damals war das noch so ??blich. Damit wurde das Hautleiden so schlimm, dass ich die #Neurodermitis am ganzen Leib hatte - eine Qual sondergleichen. Uber Jahre hinweg war es kaum auszuhalten mit der Juckerei, bis mein Vater dann meinte, dass das Amalgam raus und durch Gold-Inlays ersetzt werden m??sse. In dieser Zeit - damals war ich zirka 20 Jahre alt -, begann ich dann damit, mich intensiv mit dem Thema ???Gesundheit??? auseinanderzusetzen und besuchte nach meiner abgeschlossenen Raumausstatter-Ausbildung eine Heilpraktiker-Schule in M??nchen.[...]

  `,
    },

    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 21,
        text: `
Im Grunde ist das, was Dr. #Hamer beschreibt, absolut logisch. So, wie uns Arger auf den Magen schl??gt und permanenter Stress das Herz sch??digt, so ist das auch mit schockartigen Erlebnissen. Ich wei?? noch genau, als im Jahre 2010 aufgrund eines gro??en finanziellen Verlustes meine Haarfarbe innerhalb weniger Wochen von Braun auf Grau wechselte. Bei manchen Menschen geschieht das teilweise ??ber Nacht.

  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 22,
        text: `
Hinzuf??gen m??chte ich hier auch, dass Dr. Hamer nicht der Einzige ist, der zu dieser Erkenntnis gekommen ist. Alleine in den USA gibt es mehrere Therapeuten, die verstanden haben, dass jeder Krankheit, vor allem dem Krebs, ein traumatisches Ereignis zugrunde liegt, das es zu ergr??nden gilt. Erkenne ich die Ursache und l??se sie, so verschwindet auch die Krankheit. Es gibt Privatkliniken, auch in Deutschland, die zur normalen Praxis eine psychologische Onkologie haben, wo gezielt die Konflikte der Menschen behandelt werden - parallel zur Bestrahlung oder zu einem Eingriff.
  `,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 70,
        text: `
Ich kenne einige Frauen, die sich weigern, das gro??z??gige Geschenk ihrer Krankenkasse, das Mammografie-Screening anzunehmen. Ich geh??re auch dazu, weil ich der Meinung bin, dass die Risiken gr????er sind als der Nutzen. Der K??rper bildet st??ndig maligne Zellen, meist verschwinden sie wieder. Beim Mammografie-Screening wird mit  R??ntgenstrahlen gearbeitet, dadurch k??nnen schlummernde Krebszellen aktiviert werden. 10 Prozent aller gescreenten Frauen werden wegen Falsch-Diagnosen zu Opfern der Screening- und Krebsindustrie, Kritiker nennen das Mammografie-Screening ein ???Patienten-Rekrutierungs-Programm???.`,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 72,
        text: `
???Wenn ich an Krebs erkranken w??rde, dann w??rde ich mich auf gar keinen Fall in einem herk??mmlichen Krebszentrum behandeln lassen. Es haben nur jene Krebsopfer eine ??berlebenschance, die sich von diesen Zentren fernhalten.???
Prof. Charles Mathe, Krebsspezialist  
`,
    },
    {
        usefulInformationImageId: images_bilder,
        quelleId: "11",
        seite: 84,
        text: `
Wolfram Kunz schildert einen Fall, bei dem eine Kupferspirale Entz??ndungsherde im Gehirn ausl??ste: ???Eine Frau kam zu einem Heilpraktiker. Sie hatte gleich mehrere Entz??ndungsherde im Gehirn. Der behandelnde Arzt vermutete, sie m??sse irgendwo im K??rper einen Herd haben, wo diese Entz??ndungen herkommen. ... Beim Gespr??ch fand der Heilpraktiker heraus, dass sie aktuell noch eine Kupferspirale trug. ... Wie bel??mmert kann eine Medizin eigentlich sein? Zuerst implantiert man mit Gewalt eine Entz??ndung, und dann r??tselt man, wo diese wohl herkommt. Geht's eigentlich noch????  
`,
    },
    {
        usefulInformationImageId: images_alzheimer,
        quelleId: "7",
        seite: 5,
        text: `
??ber eine Million Deutsche leiden unter Demenz, f??r sehr viele folgt im sp??teren Stadium notgedrungen der Aufenthalt in einem Heim, wenn die Entwicklung der Erkrankung Dimensionen annimmt, die die Angeh??rigen ??berlasten, um die anspruchsvolle Pflege noch gew??hrleisten zu k??nnen. ??bersetzt bedeutet der lateinische Begriff ???Demenz??? ???ohne Geist???, was ziemlich genau den Verlauf der Erkrankung charakterisiert ??? einen Verlauf, der den fortschreitenden Verlust geistiger F??higkeit bedeutet!

Alzheimer, benannt nach dem deutschen Arzt Alois Alzheimer, der diese Erkrankung als Erster erforscht hat, ist die h??ufigste Form der Demenz, dadurch charakterisiert, dass
zun??chst das Kurzzeitged??chtnis, im Anschluss auch das Langzeitged??chtnis st??tig abnimmt. `,
    },
    {
        usefulInformationImageId: images_alzheimer,
        quelleId: "7",
        seite: 5,
        text: `
Rund 60% aller Demenz-Erkrankten sind der Alzheimer-Form zuzurechnen, bei 10-20% aller Demenz-Erkrankten ist diese auf eine St??rung der Hirndurchblutung zur??ckzuf??hren. Zu Beginn der Erkrankung ??u??ert sich diese zun??chst charakteristischerweise durch Wortfindungsprobleme sowie Ged??chtnisl??cken, es ist in diesem Stadium sehr schwierig da bereits eine normale Hirnalterung von der Alzheimer-Demenz zu unterscheiden.

Die Ursachen f??r die Alzheimer-Demenz sind bis zum heutigen Tage trotz aufw??ndiger Forschung nicht abschlie??end gekl??rt, neben einer genetischen Disposition werden mehrere Faktoren als m??gliche Ursache angenommen, wobei die Schulmedizin am st??rksten an der Plaque-Hypothese festh??lt.
  `,
    },
    {
        usefulInformationImageId: images_alzheimer,
        quelleId: "7",
        seite: 6,
        text: `
Als ziemlich gesichert gilt, dass die globale Umweltbelastung, die im zunehmenden Ma??e fortschreitende Vergiftung unserer Luft, unseres Wassers und unserer Lebensmittel eine gro??e Rolle spielt! Der zunehmende Einsatz von Pestiziden, Herbiziden und Fungiziden auf den Feldern, der wachsende Einsatz von Konservierungsstoffe, Farbstoffe, Glutamat u.a. durch die Lebensmittelindustrie, die ??ber das Blut zu unseren Hirnzellen transportiert werden fordern ??ber die Jahre und Jahrzehnte Tribut -, in dem Sie die Neuronen im Hirn stetig, daf??r nachhaltig sch??digen!

Selbiges gilt f??r Zahngifte, Amalgam, Palladium, Quecksilber ??? Begriffe, die untrennbar mit der Entstehung der besagten Erkrankungen in Verbindung gebracht werden. Aber auch ??bers??uerung des Organismus kann Alzheimer und Demenz beg??nstigen!  
  `,
    },
    {
        usefulInformationImageId: images_alzheimer,
        quelleId: "7",
        seite: 7,
        text: `
Eine gezielte Behandlung von Alzheimer und Demenz sollte das Ziel verfolgen, m??glichst die Hirnzellen zu entlasten und neu zu aktivieren.
W??hrend man bei fortschreitender Demenz von ???Fortschritt??? sprechen kann, wenn man den degenerativen Prozess der Erkrankung aufhalten, zumindest aber verz??gern kann, sollte man das ehrgeizige Ziel nicht aus den Augen lassen, m??glichst Besserung des Zustands herbei zu f??hren! Im Gegensatz zu dem, was uns die konventionelle Medizin
weismachen m??chte, l??sst sich Alzheimer und Demenz laut zahlreichen Studien positiv beeinflussen, Studien die der Schulmediziner jedoch auf der medizinischen Universit??t landl??ufig nicht zu Gesicht bekommt, Studien zu Naturheilsubstanzen, die nicht patentierbar sind und daher der Pharmaindustrie finanziell nichts nutzen und auch den ??rzten nicht allzuviel Profit einbringen (im Gegensatz zu Medikamenten aus der Giftk??che der Pharmaindustrie!)
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 13,
        text: `
Ginkgo - was ist das und wie hilft es gegen Alzheimer und Demenz?
Beim Ginkgo handelt es sich um die wahrscheinlich ??lteste Pflanzenart, die unser Planet jemals hervorgebracht hat und seit rund 200 Millionen Jahren beherbergt. Der Ginkgo Biloba ist der letzte ??berlebende der Pflanzenfamilie der Ginkgoaceen und geh??rt weder den Nadel-noch den Laubb??umen an, steht hingegen von seiner Art her irgendwo dazwischen und stellt f??r die heutige Zeit daher innerhalb der Botanik ein Ph??nomen dar.

Seine Langlebigkeit (nicht selten 4000 Jahre!) und Widerstandsf??higkeit ist legend??r, so weist der Ginkgo-Baum eine schier unglaubliche Resistenz gegen??ber Hitze, K??lte, Umweltbelastung, Gifte, Strahlen, Viren, Bakterien, Pilzen und Erkrankungen aller Art auf. Er ??berlebte nicht nur die Dinosaurier, sondern auch die Verschiebung der  Kontinente und ??berhaupt zahlreiche andere Katastrophen, so auch die Hiroshima-Bombe.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 14,
        text: `
W??hrend im betroffenen Gebiet s??mtliche andere Pflanzen ihren Tod fanden, hat dieser Baum nur wenige Hundert Meter vom Einschlagort der Bombe verkohlt ??berlebt, und im darauf folgenden Fr??hling brachte er viele frische Sch??sslinge samt Bl??ten hervor, was ihn in Japan zum Sinnesbild f??r Hoffnung, dem ???Baum der Hoffnung??? aufsteigen lie??.

Definitiv kein anderes Lebewesen hat so viele Epochen samt Katastrophen ??berstanden, wie der Ginkgo-Baum. All dies hat ihn im asiatischen Raum sehr schnell zu einem Mythos werden lassen, wenn man so will zu einem Tempelbaum, den die Asiaten regelrecht verehren.

Aber auch die Resistenz gegen??ber der Alterung und allerlei nat??rlichen Feinden hat den Menschen aufhorchen lassen - sollten sich diese erstaunlichen Eigenschaften auch auf den Menschen ??bertragen lassen, wenn dieser von seinen Fr??chten essen w??rde?  
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 14,
        text: `
Der Ginkgo wird seit ??ber 2000 Jahren in Asien als ???heiliger Baum??? angesehen und seit rund 5000 Jahren innerhalb der Naturheilkunde gegen eine Vielzahl an Erkrankungen und Gebrechen eingesetzt, dies sicherlich nicht von ungef??hr!

Ginkgo z??hlt zu den ??ltesten Naturheilmitteln ??berhaupt und blickt stolz auf eine ??ber 2000 Jahre alte Naturheiltradition zun??chst im asiatischen Raum, seit wenigen  Jahren nun verst??rkt aber auch in Nordamerika und Europa ??? speziell auch gegen Alzheimer und Demenz!
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 16,
        text: `
Zu diesem Zwecke werden die Samen sowie Extrakte aus den Gingko-Bl??ttern genutzt, in der westlichen Welt zuvor entsprechend zu Gingko-Tee, Gingko-Tropfen, Dragees oder Gingo-Tabletten verarbeitet. U.a. werden neben #Alzheimer und #Demenz
#Durchblutungsst??rungen,
#Magenbeschwerden, #Tinnitus,
#Asthma,
#Bronchitis,
#Gef????verschluss,
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

Die zahlreich im Ginkgo vorkommenden Flavonoide und Terpenoide sind es, denen wir in erster Linie die positive Wirkung auf unsere Gesundheit verdanken. Diese geh??ren den beiden Wirstoffgruppen Ginkgoflavonglykoside und Terpenlactone.

Es handelt sich also keinesfalls um einzelne Wirkstoffe, die diese breitgef??cherte Wirkung vollziehen. Vielmehr ist es die vollendete Komposition mehrerer  Wirkstoffgruppen, deren Wirkstoffe synergetisch miteinander wirken.

Unbedingt zu betonen ist aber, dass Ginkgo ??ber bestimmte Wirksubstanzen verf??gt, die sonst in keiner anderen Frucht vorkommen, die s.g. ???Ginkgolide???. Exakt dies stellt einen weiteren wichtigen Grund f??r die einzigartige Wirkung von Ginkgo auf unseren Organismus dar, und die Synthese der Ginkgolide in den Pflanzenzellen hat sogar dem Forscher E.J.Corey einen Nobelpreis f??r Chemie eingebracht!
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 17,
        text: `
Ginkgo Biloba - wie und wogegen wirkt Ginkgo Biloba? 
Die legend??re Resistenz des Ginkgo Biloba Baumes gegen??ber der Alterung, Hitze, K??lte, Umweltbelastung, Giften, Strahlen und etwaigen Erkrankungen lie?? die Menschen sehr fr??h aufhorchen - wie w??rde es sich verhalten, wenn man dessen Bestandteile konsumiert, lie??en sich diese verbl??ffenden Vorz??ge tats??chlich auch in irgendeiner Weise auf den Menschen ??bertragen?

In der Tat deuten die zahlreichen Studien darauf hin! Um die Thematik besser nachvollziehen zu k??nnen, macht es Sinn, zun??chst die allgemeine Wirkungsweise von Ginkgo zu durchleuchten, bevor wir zu der speziellen Wirkung bei Erkrankungen und Missst??nden gelangen.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 22,
        text: `
Die allgemeine Wirkung von Ginkgo Biloba l??sst sich bezeichnen als:

- antibakteriell
- pilzhemmend
- wurmt??tend
- antioxidativ / zellsch??tzend
- durchblutungsf??rdernd
- neuroprotektiv (nervensch??tzend)
- Hypoxie-hemmend
- antiallergisch
- krebshemmend
- verdauungsf??rdernd
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

Die antibakterielle sowie pilzhemmende Wirkung von Ginkgo ist vor allem den Flavonoiden zu verdanken, besonders den im Ginkgo enthaltenen Ginkgols??uren und dem Ginnol. Ginkgo Biloba erh??ht die Anzahl der Makrophagen (nat??rlichen Fresszellen), die sich dann verst??rkt um die Bakterien und Pilze k??mmern k??nnen.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 23,
        text: `
Der ???Saft??? unseres Lebens ist unser Blut und die wichtigsten Wirkungsmechanismen von Ginkgo Biloba ist die gesteigerte Durchblutung sowie der Schutz von menschlichem  Gewebe und Organen. Gerade diese Wirkung nimmt im Kampf gegen Alzheimer und Demenz eine wichtige Rolle ein!

In dem Ginkgo das Blut fl??ssiger macht und das Hirngewebe st??rker mit Blut durchstr??mt, erreicht es eine optimierte Versorgung der Hirnzellen mit N??hrstoffen und Sauerstoff, was h??ufig zur Verbesserung des Zustands f??hrt.  
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 23,
        text: `
Beruhigende Wirkung von Ginkgo Biloba

Die durchblutungsf??rderliche und nervensch??tzende Wirkung von Ginkgo wirkt sich beruhigend auf den gesamten K??rper aus, kann somit Stresszust??nden aber auch Erektionsproblemen des Mannes entgegenwirken und den Schlaf f??rdern ??? eine wichtige Komponente innerhalb der Behandlung von Alzheimer und Demenz!
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 29,
        text: `
Spezielle Wirkung von Ginkgo

schwerpunktm????iger Einsatz von Gingko innerhalb der TCM. In der traditionellen chinesischen Medizin kommen die Samen, die Bl??tter sowie die Wurzeln des Ginkgo Biloba zum Einsatz, die unterschiedlich, zumeist in Form eines Ginkgo-Tees verarbeitet und aufgenommen werden.

Innerhalb der westlichen Naturheilkunde erfolgt er Einsatz zumeist ??ber Ginkgo-Konzentrate in Form von Ginkgo-Extrakten, umh??llt durch eine Kapsel, als Pressling oder aber in Tropfenform.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 34,
        text: `
Die folgenden Leiden werden schwerpunktm????ig mit Ginkgo innerhalb der TCM therapiert:

- Asthma
- Husten
- Abwehrschw??che
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
- Schleimhautentz??ndung
- Arthritis
- Pr??menstruelles Syndrom
- Hyperaktivit??t
- Blennorrhoe
- Scheidenfluss
- Menstruationsprobleme
- verminderte Samenproduktion
- Magenprobleme
- Diabetes-Folgen
- Pr??vention eines Burnouts
- Unruhezust??nde
- Diarrh?? (Durchfall)
- Fieber
- Libidoprobleme
- Magenschleimhautentz??ndung (Gastritis)
- Krebs
- Folgen von Alkoholismus
- Venenentz??ndungen
- allgemein St??rkung des Chi
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 29,
        text: `
Aus diesen Einfl??ssen auf das Blutgeschehen resultieren die folgenden Vorz??ge

- Ginkgo verhindert Infarkte, Thrombosen, Emoblien, ??deme, Gewebssch??digung durch Sauerstoffmangel, Funktionsst??rungen aller Gewebeformen und Organe, Zelluntergang (Zelltod)

- Ginkgo f??rdert damit Leistungsf??higkeit des Hirns (Wirkung bei Alzheimer und Demenz), des gesamten Organismus samt aller Organe, Blutzirkulation, Sauerstoffversorgung, Abtransport von Stoffwechselschlacken

- Ginkgo sch??tzt und f??rdert das Gehirn und die Nervenzellen

- Ginkgo sch??tzt vor der Anf??lligkeit eines Sauerstoffmangels (Hypoxietoleranz wird erh??ht)  
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 36,
        text: `
Wirkung von Ginkgo gegen Demenz

In den USA ist Ginkgo ein anerkanntes Antidementivum. Ginkgo agiert als Nervenzellenprotektor, die Neurotransmitter (Botenstoffe im Gehirn) werden aktiviert und der Energiestoffwechsels des Gehirns optimiert, besonders im Bereich des Hippocampus, der bei Alzheimer Erkrankten betroffen ist. Ged??chtnisleistung, Lernf??higkeit, Konzentrationsf??higkeit und kognitive F??higkeiten werden signifikant erh??ht.

Die Wirksamkeit von Ginkgo gegen Demenz wurde in einer gro??angelegten, randomisierten Metaanalyse 2010 an 1838 Patienten mit dem Ginkgo-Extrakt EGB761 eindrucksvoll belegt. (Wang et al., 2010)  
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 36,
        text: `
Wirkung von Ginkgo gegen Alzheimer

Im Labor sowie im Tierversuch verminderte die Gabe von Ginkgo-Extrakt den typisch mit fortschreitender Alzheimer einhergehenden Zelltod der Nervenzellen sich einlagernder Proteine (??-Amyloid). Extrakte aus dem Ginkgo-Baum erh??hen die Anzahl der Rezeptoren im Hirn, f??rdern die Aufnahme von Cholin und die Produktion des Acetylcholin, was den durch Alzheimer beeintr??chtigten Hirnfunktionen zu Gute kommt. 

Von vielen ??rzten wird Ginkgo Biloba heutzutage als Dauerbehandlung eingesetzt, so hat die Auswertung von 13 000 Patientenprotokollen zu dem Ergebnis gef??hrt, dass vor allem das Erinnerungsverm??gen sowie die Wachheit aufgrund der Behandlung sich deutlich besserten.
  `,
    },
    {
        usefulInformationImageId: images_gingko,
        afflinksId: afflinks.ginkgo,
        quelleId: "7",
        seite: 36,
        text: `
Gingko Biloba als Schutz gegen vorzeitige Alterung Die hinduistische Heilkunde bezeichnet den Ginkgo Biloba als ???Lebenselexier, das die Zerst??rung des K??rpers aufhalten un zweitausend Sommer w??hrendes Leben erm??glicht???. Neben dem eindeutig in zahlreichen Studien nachgewiesenen Schutz vor freien Radikalen, die wiederum nachweislich an der Alterung (sowie zahlreiche Erkrankungen, die mit Alterung zusammenh??ngen, so Alzheimer und Demenz) des Organismus die Schuld tragen, konnte in Studien eine aktivierende Wirkung auf die Telomerase nachgewiesen werden. 

Telomerase ist ein Enzym, das die Telomere sch??tzt, die auch als ???Lebenslichter??? bezeichnet werden, da sie an den Enden der Chromosomen vor deren Verk??rzung und damit den gesamten Organismus vor Alterung sch??tzen. Hier kann Ginkgo entsprechend die Telomerase aktivieren und den sch??tzenden Effekt auf die Telomere ausl??sen. 
  
  `,
    },

    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 8,
        text: `
 Als N??chstes erhalten Sie in diesem Buch einen konkreten Leitfaden, um Ihrem Krebs bestm??glich zu begegnen, ihn zu heilen, Wiederauftreten zu vermeiden oder aber diesem einfach erfolgreich vorzubeugen!

Ich verspreche Ihnen, dass Sie noch nie etwas gelesen haben, das in irgendeiner Weise nur ann??hernd dieser ??u??erst brisanten, sowie n??tzlichen Informationsf??lle dieser Abhandlung nahekommt...!

Dieses Buch wird nicht nur Ihr Weltbild, Ihre Einstellung, sondern ebenfalls Ihr Leben ver??ndern-m??glicherweise sogar retten. ??ber 25 aufeinander aufbauende Kapitel werde ich Sie navigieren und Sie auf Ihrem Weg der Krebsheiltherapie begleiten! Ich habe weder viel f??r Esoterik, noch f??r Verschw??rungstheorien ??brig ??? Ihre Gesundheit liegt mir allerdings am Herzen!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 22,
        text: `
Medizinskandal Krebs

Richtiges Timing ist lebenswichtig, die Informationsflut jedoch enorm.

Timing spielt bei lebensbedrohlichen Erkrankungen immer eine entscheidende Rolle, denn jede Minute z??hlt und die Betroffenen bzw. ihre Angeh??rigen, die f??r sie recherchieren, haben es v??llig unvorbereitet gleich mit zwei Grundproblemen zu tun:

1) Die Zeit rennt und jede Minute z??hlt..!

2) Unter diesen denkbar widrigen Umst??nden klaren Kopf zu bewahren und aus einem regelrechten Ozean an Informationen die erfolgversprechendsten Therapiekonzepte zu fischen! 

Es ist f??r jeden, der sich frisch damit besch??ftigen muss ein Tauchgang ins kalte und tr??be Gew??sser, denn die Informationsflut ist erdr??ckend und die gegens??tzlichen Aussagen dabei sehr, sehr entmutigend...  
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 24,
        text: `
Ich bin mir der Verantwortung dieses Buches bewusst!

Es geh??rt desweiteren wohl sehr viel Courage und Verantwortungsbewusstsein dazu, sich zu entscheiden ein Buch f??r die Betroffenen zu schreiben, in dem man diese immense Verantwortung auf seine Schulter hievt, ihnen einen konkreten Leitfaden mit zahlreichen Insidertipps zu einer Therapieform mit den m??glichst besten Chancen auf Genesung liefern zu wollen!

Denn w??hrend Sie Ihre Zeit investieren, dieses Buch zu studieren, k??nnten Sie wertvolle Zeit verlieren, wenn Sie nicht die richtigen Informationen vorf??nden...Etwas, das ich niemals verantworten k??nnte ??? wenn ich mir nicht 100% sicher w??re!

Es gibt zahlreiche sehr gute und informative Krebsb??cher, aber die allerwenigsten stellen einen echten Leitfaden zur Krebsheilung dar.
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 270,
        text: `
Bei den allerwenigsten Menschen wird der Krebs entdeckt, und solange dieser vom Arzt nicht entdeckt wird, ist er in den weitaus meisten aller F??lle offensichtlich nicht t??dlich! Was passiert aber, wenn der Krebs entdeckt wird? Sobald der Krebs entdeckt wird, laufen gleich mehrere, im wahrsten Sinne des Wortes t??dliche Aktionen ab:

???? der Arzt konfrontiert einen mit einer Schreckensdiagnose

???? der Arzt beginnt einen Kampf gegen den Krebs mit Chemotherapie oder Bestrahlung

????  Arzt ??ffnet ggfs. den Bauchraum, um zu operieren

????  der Arzt sagt, man k??nne nichts mehr tun
 `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 271,
        text: `
Die Konfrontation mit dem Krebs

Da so gut wie kein Mensch (in der Regel nicht mal der Arzt!) wei??, dass Krebs 97% aller Menschen betrifft, aber ???nur??? f??r 25% aller Menschen gef??hrlich wird, ist eine solche Botschaft gleichbedeutend mit einem seelischen Trauma ??? der Patient f??rchtet zum ersten Mal um sein Leben!

Sie m??ssen sich vor Augen halten, dass er evtl. 10,20,30 oder mehr Jahre gar mit seinem Krebs gelebt hat, ohne auch nur einen Hauch von Unwohlsein zu versp??ren, nicht einmal ein Husten oder gelegentliches Kopfweh ??? dann die Schreckensdiagnose!  
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 273,
        text: `
In dem der Onkologe Chemotherapie und Bestrahlung auf den in den weitaus meisten F??llen harmlosen Krebs losjagt, sprengt er die besagte ???Kapselung??? des Krebses auf und der Krebs wird aggressiv!

In dem er den Bauchraum ??ffnet, um per Operation eine Entfernung des harmlosen Tumors vorzunehmen, kommt a) Sauerstoff an den Tumor ran, b)macht er den ???schlummernden??? Tumor aggressiv, c) verteilt er in vielen F??llen flei??ig Metastasen!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 273,
        text: `
Ansage, man k??nne nichts (mehr) tun! In dem der Arzt dem Patienten (der in den weitaus meisten F??llen ja nicht gef??hrdet ist!) er??ffnet, man k??nne nichts tun, begeht er einen folgeschweren Fehler ??? er sieht auch in diesem Fall wieder isoliert die Geschwulst, die f??r ihn irrt??mlicherweise die Gefahr darstellt, - und nicht die Erkrankung des Organismus, die dazu gef??hrt hat!
Statt also zu hinterfragen, was dazu gef??hrt haben wird ??? n??mlich in fast allen F??llen der falsche Lebensstil (falsche Ern??hrung, Zigaretten, Alkohol) oder die falschen Lebensbedingungen (Stress, Mobbing, Traumata, Umweltbelastung) und sich um die ??nderung exakt dieser Kausalit??ten zu k??mmern, besitzt er tats??chlich die Unverfrorenheit (oder Unwissenheit), zu sagen: man k??nne nichts tun!
Es ist exakt dieselbe Ansage bei Krebspatienten (wie meiner Mutter), die man erfolgreich behandelt hat und dann den ahnungslosen und gutgl??ubigen [...] 
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 298,
        text: `
Nebenwirkungen der Chemotherapie

Es mag irrational klingen, aber die gef??hrlichste Nebenwirkung der Chemotherapie ist tats??chlich: KREBS! Wie Sie gerade lesen konnten, erkranken sehr viele Chemotherapie-Patienten erkranken Jahre sp??ter erneut an Krebs, zumeist einem sehr viel aggressiveren, als dem zuvor. Es gibt aber auch noch zahlreiche andere Nebenwirkungen, die benannt werden m??ssen...
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 298,
        text: `
Die Krebsdiagnose ??? was ist zu tun?

Hilfreiche Tipps zum Umgang mit Krebsdiagnose

Die Krebsdiagnose stellt nach wie vor ein Schreckensszenario dar, dem sich als Betroffener niemand zu entziehen vermag ??? sie macht im ersten Moment ratlos, l??hmend und ist extrem be??ngstigend...

Ruhe bewahren als allerwichtigste Pflichtk??r! Wenn Sie oder aber ein Ihnen nahestehender Mensch mit der Diagnose Krebs konfrontiert wird, ist das Allerwichtigste, zun??chst ruhig zu bleiben und sich der Tatsache bewusst zu werden, egal was der (in der Regel wenig wissende) Schulmediziner behauptet, : DASS KREBS LANGE NICHT DAS TODESURTEIL BEDEUTET!

Stressoren und Traumata l??sen Krebswachstum aus! Weitestgehend ruhig zu bleiben ist nach einer solchen Schreckensdiagnose trotz der denkbar widrigen Umst??nde ENTSCHEIDEND wichtig, um das Krebswachstum nicht erst auszul??sen (wenn der Krebs ???eingekapselt ist???), oder aber unn??tig das Krebswachstum zu beschleunigen!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        seite: 298,
        text: `
Handeln statt zu verzweifeln!

Statt also zu verzweifeln, sollte man sich bewusst werden, dass der Arzt eben NICHT der liebe Gott ist und er:

a) weder das Wissen, noch ein moralisches Recht darauf hat, den Tod ??berhaupt zu prognostizieren!
b) dies beim besten Willen also eh nicht k??nnte und 
c) es alternative Wege gibt, die erfolgsversprechend sind, die er nicht mal kennen wird-, die es aber unbedingt lohnt zu gehen!  

Das einzig Richtige ist es, sich zu informieren und baldm??glichst zu handeln ??? in dem Sie dieses Buch lesen, tun Sie dieses und sind damit bereits auf dem besten Wege, die richtigen Entscheidungen zu treffen...!
  
  `,
    },
    {
        usefulInformationImageId: images_adipositas,
        quelleId: "13",
        text: `
  Desweiteren w??re es an der Zeit zu akzeptieren, dass die vielen Industriegifte in unserer Nahrung und unseren Getr??nken, unserer Atemluft und der Kleidung den Organismus so stark belasten, dass dieser prim??r damit besch??ftigt ist, gegen diese anzuk??mpfen, sich m??hsam zu entgiften, statt sich um die Fettverbrennung zu k??mmern ??? der komplette Stoffwechsel wird schlie??lich durch die besagten Umweltgifte gedrosselt, ein Aspekt, der den Herrschaften da oben nicht mal erw??hnungswert erscheint..! (in der folgenden Tabelle erfahren Sie in der ??ussersten Sparte, welche der genannten ???Fettkiller??? zugleich den K??rper entgiften!)
  `,
    },
    {
        usefulInformationImageId: images_adipositas,
        quelleId: "13",
        text: `
Auch die latente ??bers??uerung der Bev??lkerung spielt innerhalb dieses Desasters eine wichtige Rolle ??? der K??rper gibt sein Fettgewebe nur widerwillig her, um auch diese zur Kompensierung der ??bersch??ssigen, gef??hrlichen S??uren zu benutzen.

Last but not least ware es an der Zeit, abnehmwillige Personen dar??ber aufzukl??ren, dass es in der Natur v??llig ungef??hrliche und ??beraus effiziente s.g. ???Fettkiller??? gibt, die ??ber zahlreiche verschiedene Mechanismen dem K??rperfett v??llig nebenwirkungsfrei zu Leibe r??cken und den Abnehmvorgang sehr effektiv unterst??tzen k??nnen!
  `,
    },
    {
        usefulInformationImageId: images_adipositas,
        quelleId: "13",
        text: `
Erfahren Sie in diesem eBook u.a., welche Powersubstanzen aus der Natur:
???? den Gallenfluss f??rdern und so die Fettverbrennung vorantreiben!
???? den Widerstand des Insulins durchbrechen und Fettverbrennung selbst bei Menschen vorantreiben, die sonst Probleme damit haben!
???? die Thermogenese steigern, damit die Fettverbrennung erh??hen!
???? die Verdauung beschleunigen, Fetts??uren schneller aus dem Darm bef??rdert, noch lange bevor sie sich als K??rperfett einlagern k??nnen!
???? Die Bildung der Blutgef????e im Fettgewebe hemmen, so dass die Fettzellen weniger wachsen und sich nicht vermehren k??nnen!
???? die Beta-Oxidierung (Fettverbrennung) erh??hen!
???? Muskeln aufbauen und vor Muskelabbau w??hrend der Di??t sch??tzen!
  `,
    },
    {
        usefulInformationImageId: images_adipositas,
        quelleId: "13",
        text: `
UND JETZT DER ABSOLUTE KRACHER:

Die meisten stark ??bergewichtigen haben von Haus aus eine weitaus h??here Anzahl an Fettzellen, als ihre ???normalen??? Mitmenschen. 
  
W??hrend noch vor wenigen Jahren die Reduktion der Fettzellen aus wissenschaftlicher Sicht als v??llig ausgeschlossen galt (es galt das Statement, man kann Fettzelle aushungern, aber nicht eliminieren!), konnte die Powerstubstanz mit dem Namen Curcumin j??ngst in repr??sentativen Studien eindrucksvoll unter Beweis stellen, dass Sie den Zelltod von Fettzellen verursachen kann! Ganz nebenbei sch??tzt die besagte Substanz vor Herzinfarkten, Schlaganf??llen, Krebs, Arthritis und Diabetes, Krankheiten also, die besonders die ??bergewichtigen Menschen heimsuchen und Ihre Gesundheit gef??hrden...

<a href="https://grafvonkronenberg.group/produkt/256-Safran-extract-mit-curcumin-gueteklasse-1-15ml?gvkaf=11">Safran Extract Mit Curcumin G??teklasse 1 / 15ml</a>
<a href="https://c.kopp-verlag.de/kopp,verlag_4.html?1=546&3=0&4=&5=&d=https%3A%2F%2Fwww.kopp-verlag.de%2Fa%2Fkopp-vital-curcuma-kapseln%3Fprod_number%3D128352">???? Kopp Vital Curcuma Kapseln</a>

  `,
    },
    {
        usefulInformationImageId: images_aerzte,
        quelleId: "12",
        text: `
Der Massenm??rder im wei??en Kittel

Nichts ist fahrl??ssiger und t??dlicher, als der ??rztliche Satz: ???Sie m??ssen nichts ??ndern, leben Sie Ihr Leben wie gehabt!???. Es ist ein Satz, den t??glich Hunderttausende Krebspatienten h??ren und der zweifelsohne mit Abstand f??r die meisten Todesopfer an Krebs verantwortlich ist ??? ein Satz, der im Widerspruch zu allen wissenschaftlichen Fakten steht - in dem Onkologen diesen Satz aussprechen, t??ten sie mittelfristig ihren Patienten!

Krebsenstehung hat ihre Ursachen ??? so hart es sich anh??ren mag, man hat sehr best??ndig daraufhin ???gearbeitet??? (ob bewusst oder unbewusst, selbst verschuldet oder nicht...).
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Krebsursachen: 

Es sind auf Seiten der seelischen Komponente nicht selten die kleinen wie gro??en Traumata in Ihrem Leben, die wom??glich zum Krebs gef??hrt haben, bzw. diesen gef??rdert haben. Es muss also nicht der Tod eines geliebten Angeh??rigen oder aber die Scheidung gewesen sein, die Krebs ausgel??st oder gef??rdert haben ??? h??ufig sind es die kleinen Stresssituationen, denen Sie tagt??glich ausgesetzt sind und die sich ??ber viele Jahre aufsummieren!

Hierzu geh??rt beispielsweise Stress im Berufsleben, Mobbing, Stress mit der Ehefrau, den Kindern, den Vermietern, Nachbarn u.??.

Gehen Sie in sich, analysieren Sie m??gliche Stressoren und stellen Sie diese so schnell wie m??glich ab! W??hrend der meditative Part der seelischen Komponente etwas mehr Zeit ben??tigt, Sie sich also parallel dazu belesen sollten (zu empfehlen sind B??cher und Audio-DVDs von Dr. Carl Simonton, mehr dazu in entsprechendem Kapitel!) [...]
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Bewegen Sie sich an der frischen Luft - Ausdauersport t??tet Krebszellen!

Besonders den Radsport-Fans wird ein konkreter Fall in Erinnerung sein, in dem Ausdauersport die Krebstherapie positiv beeinflusst hat und dazu beigetragen hat, sich von Krebs zu heilen.

Die Rede ist nat??rlich von Lance Armstrong, dem siebenfachen Gewinner der Tour de France (der leider k??rzlich wegen unangenehmen Dingen verst??rkt im Fokus der ??ffentlichkeit stand)!

Wie die Presse berichtete, ???fuhr Armstrong dem Krebs davon...??? ! Konkret hat sich der 25 j??hrige, der aus dem heiteren Himmel mit der Diagnose ???Hodenkrebs??? mit Metastasen ins Gehirn und in die Lunge konfrontiert wurde und gleichzeitig mit der Aussage der ??rzteschaft, dass die Chance zu ??berleben sehr gering sind, dazu entschlossen um sein Leben zu k??mpfen! Bereits nach einem Jahr intensiver Krebsbehandlung, trat Armstrong wieder in die Pedale, um 
  `,
    },
    {
        usefulInformationImageId: images_sport,
        quelleId: "12",
        text: `
Sport erzeugt Hyperthermie - Hyperthermie t??tet Krebszellen

Im Kapitel 16 ???Die erfolgversprechendsten Alternativ-Therapien bei Krebs??? werden Sie lesen, wie effizient Hyperthermie Krebszellen zu t??ten vermag.

Nichts anderes entsteht beim Sport, lediglich nur in abgeschw??chter Form. Durch die starke Erw??rmung des K??rperinneren, wirkt sich diese positiv auf die Krebszellenvernichtung aus. Es bleibt daher festzuhalten, dass Sport insgesamt durchaus eine ernstzunehmende Komponente innerhalb unseres ???Goldenen Dreiecks der Krebsheiltherapie??? darstellt!

  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Ein Tumor kommt nicht ??ber Nacht und ein Tumor verschwindet auch nicht ??ber Nacht. Best??ndig falsche Lebensweise f??hrt zum Krebs und genauso best??ndig bek??mpfen wir den Tumor wieder!

Zwischenzeitlich haben Sie bereits eine der Kliniken aufgesucht, die ich im entsprechenden Kapitel empfehle und alle ??nderungen, die Sie vorgenommen haben mit Ihrem dort behandelnden Therapeuten besprochen!

Nehmen Sie gleich zu Ihrem allerersten Termin eine Liste der ???31 wichtigsten Krebskiller-Natursubstanzen???, die ich ausf??hrlich im Kapitel 19 dieses Buches erl??utere mit, und stimmen Sie einen Einnahmeplan f??r diese mit Ihrem Therapeuten Vorort ab! Diese entstammen direkt der ??u??erst erfolgreichen orthomolekularen Medizin, die bei Krebs ein Muss ist!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Was Sie tun m??ssen

Sie m??ssen also Ihre ??ngste bek??mpfen, sich von diesem Trauma der Diagnose durch regelm????iges Mentaltraining l??sen ??? dies als wichtigster Ratschlag in diesem gesamten Buch!

Die mentale Arbeit, Ern??hrungsumstellung, Entgiftung und Ents??uerung, die Organisation der eigenen Ern??hrung schwerpunktm????ig ??ber Lebensmittel, die in Studien krebshemmende Wirkung nachweisen konnten (siehe Kapitel 18), sowie Einnahme von s.g. ???Krebskiller-Natursubstanzen??? (Kapitel 19) werden die Gr??nde daf??r darstellen, dass Ihnen Ihr Krebs nicht das Leben nimmt, selbst wenn er nach der Vorstellung der Schulmedizin als ???austherapiert??? gelten sollte! (ein Begriff, ??ber den ich mich immer wieder h??llisch aufregen k??nnte!)
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Schulmedizin vs. Alternative Medizin - eine Entscheidungshilfe

Zun??chst mal ist es ein nachvollziehbarer Fakt, dass bei lebensbedrohlichen Krankheiten, die seitens der Schulmedizin als ???unheilbar??? gelten, f??r die es also (wie beispielsweise im Falle von Krebs) kein Standarttherapeutikum gibt, das die Krankheit unter Garantie heilt, man neben den standarisierten Wegen auch alternative Wege gehen sollte (muss!), um sich eine m??glichst hohe ??berlebenschance zu sichern, die nicht selten auch aus der Kombination von beidem resultiert.

Desweiteren ist es ebenfalls nur logisch, dass man die Aussage eines Arztes, die da h??ufig lautet: ???Es tut uns Leid, wir k??nnen nichts mehr f??r Sie tun...??? nicht zum Anlass nehmen DARF, sich nach Hause zu begeben und auf das Eintreten des Todes zu warten!
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Zusammenfassung der wichtigsten Do's und Don'ts bei Krebs, und um sich vor Krebs zu sch??tzen:

- meiden Sie Kontakt zu s??mtlichen chemischen Stoffen, so auch zu chemischen Reinigern!
- meiden Sie Hautkontakt mit Aluminium (Deos!)
- meiden Sie Kontakt zu industriellen Kosmetika
- meiden Sie Phthalate und Parabene in Ihren Kosmetika
- meiden Sie Kosmetika, die ??strogene beinhalten.
- stellen Sie um auf Bio-Lebensmittel bekannter Herkunft
- meiden Sie Pestizide, sowie Insektizide
- verwenden Sie chemiefreie Bio-Zahncreme
- meiden Sie Strahlenquellen (Handy, Mikrowellennahrung, Stromger??te usw.)
  `,
    },
    {
        usefulInformationImageId: images_krebs,
        quelleId: "12",
        text: `
Zusammenfassung der wichtigsten Do's und Don'ts bei Krebs, und um sich vor Krebs zu sch??tzen:

- schirmen Sie Ihre Wohnung vor Strahlen ab
- Trinken Sie Quellwasser in Flaschen oder aber gefiltertes Wasser
- Tragen Sie m??glichst Baumwollw??sche
- Waschen Sie Ihre W??sche mit Bio-Waschmitteln
- Konsumieren Sie Lebensmittel/Nahrungserg??nzungsmittel, die stark entgiftend wirken, z.B. Kombucha, Camu-Camu, Spirulina-Platensis (siehe auch ???Die wichtigsten Krebskiller- Natursubstanzen???)
- L??sen Sie sich von traumatischen Erlebnissen aus der Vergangenheit
- Lassen Sie Emotionen und Freude zu, teilen Sie diese mit anderen Menschen
- Meditieren Sie (Visualisierung!)
- Bewegen Sie sich t??glich 30-60 min an der frischen Luft
- Wenn m??glich, treiben Sie t??glich 20-30min Ausdauersport
  `,
    },
    {
        usefulInformationImageId: images_water,
        quelleId: "12",
        text: `
Trinken Sie stilles Wasser aus Glasflaschen! Wasser ist Leben, Wasser kann aber unter bestimmten Umst??nden das Leben erschweren und Krankheiten herbeif??hren.

W??hrend reines Wasser ents??uert, entschlackt und Gifte aus dem K??rper heraustransportiert, belastet und ??bers??uert kohlens??urehaltiges Wasser den Organismus und schw??cht sogar Ihr Immunsystem, auf das Sie aber bei Krebs besonders angewiesen sind!

Wasser aus Plastikflaschen kann Krebs verursachen! Alles andere als empfehlenswert ist das Wasser aus den Plastikflaschen, da Forscher darin Weichmacherreste entdecken konnten, die zur Unfruchtbarkeit, Lebersch??den und auch Krebs f??hren k??nnen! 1  

Osmosewasser: Ein so reines Wasser kann man auch noch mit der Destillation erhalten. Alle anderen Filterverfahren die ich kenne, insbesondere die vielen Varianten von Aktivkohlefiltern, erreichen diesen hohen Reinheitsgrad bei weitem nicht.

???? <a href="https://ebay.us/Yxv8Ew">Umkehrosmosefilteranlage bei Ebay </a>
  `,
    },

    {
        usefulInformationImageId: images_water,
        quelleId: "12",
        text: `
Zusammenfassung der wichtigsten Ern??hrungsrichtlinien bei Krebs:

1) Meiden Sie Zucker und zuckerhaltige Produkte
2) Setzen Sie m??glichst auf Bio-Kost, die so nat??rlich und frisch, wie irgendwo nur m??glich sein sollte
3) Meiden Sie alle Produkte tierischen Ursprungs, besonders aber Fleisch
4) Nehmen Sie unges??ttigte Fetts??uren zu sich
5) Essen Sie viel Rohkost aus biologischem Anbau
6) Trinken Sie viel frisch (selbst) gepresste S??fte aus Fr??chten, ausschlie??lich aus biologischem Anbau und bekannter Herkunft
7) Trinken Sie viel kohlens??urefreies Wasser aus Glasflaschen
  
  `,
    },
    {
        usefulInformationImageId: images_supplements,
        quelleId: "12",
        text: `
Nahrungserg??nzung tut Not

Apropos Vitalstoffe, ich will ehrlich mit Ihnen sein! Sie kommen nicht drum herum, Ihre Ern??hrung ??ber bestimmte Nahrungserg??nzungsmittel zu erg??nzen, da die normale Ern??hrung kaum noch Vitalstoffe bietet.  

Die Studien des renommierten Lebensmittellabors Karlsruhe und des Pharmakonzerns Geigy zeigen einen erschreckenden R??ckgang der Vitalstoffe in unserem Obst und Gem??se um bis zu 92%!

Als Ursache werden ausgelaugte B??den, Luftverschmutzung, zu schnelles Wachstum und lange Lagerung angegeben!

Welche Nahrungserg??nzung konkret Sinn macht, erfahren Sie im Kapitel 19 ???Die 31 wichtigsten Krebs-Natursubstanzen???.
`,
    },
    {
        usefulInformationImageId: images_supplements,
        quelleId: "12",
        text: `
3+3 = 243!

Die Synergie der Wirkung von verschiedenen Krebskiller-Natursubstanzen ist viel mehr als nur das Ergebnis deren Addition! W??hrend Sie in diesem Buch im Kapitel 19 in ausf??hrlicher Form erfahren, welche Natursubstanzen f??r sich allein beispielsweise:

- Brustkrebswachstum um 78% gesenkt
- Brustkrebsauftreten um 100% verhindert
- Hautkrebswachstum um 80% gesenkt  

...ist es die Kombination aus mehreren dieser hocheffektiven Natursubstanzen, die zu einer unbeschreiblich potenten Synergie-Wirkung f??hrt, die allen schulmedizinischen Behandlungsformen bei weitem ??berlegen ist ??? dabei ohne Nebenwirkungen und sehr kosteng??nstig! 

Als Beispiel hat eine Natursubstanz die Wirkung einer anderen um 1544% verbessert, w??hrend eine andere wiederum in Studien diese um 2000% steigerte! Auch hierzu benenne ich Ihnen im Kapitel 19 selbstverst??ndlich die entsprechenden Studien!
`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Wussten Sie, dass ...
??? ... die meisten Zivilisationserkrankungen (Krebs, Diabetes, Alzheimer, Parkinson usw.) auf die Oxidation der K??rperzelle zur??ckzuf??hren sind?
??? ... der Mensch gem???? wissenschaftlichen Erkenntnissen 120 Jahre alt werden k??nnte, wenn die K??rperzellen nicht oxidierten?
??? ... es einen einzigen Schutz vor Oxidation (freie Radikale) der Zelle gibt, n??mlich die Aufnahme sogenannter Antioxidantien?
??? ... im Gegensatz zu den anderen Antioxidantien die Alpha-Lipons??ure unseren gesamten K??rper bis ins Gehirn hinein besch??tzt, weswegen sie auch ???Universal-Antioxidans??? genannt wird? ??? ... des Weiteren die Alpha-Lipons??ure (ALA) die F??higkeit besitzt, die anderen Antioxidantien im Kampf gegen die gefr????igen freien Radikale zu regenerieren?


`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Wussten Sie, dass ...
??? ... die Alpha-Lipons??ure die Wirkung von Vitaminen, wie Vitamin C, E oder dem Coenzym Q10, verst??rkt?
??? ... die Alpha-Lipons??ure uns sehr metallbelastung und -vergiftung sch??tzt? erfolgreich gegen Schwer-
??? ... die Alpha-Lipons??ure bei Pilzvergiftung rettend sein kann? ??? ... die Alpha-Lipons??ure sehr effizient Radioaktivit??t aus unserem Organismus ausleitet?
??? ... mithilfe der Alpha-Lipons??ure Zucker effizienter in den Energiekreislauf gebracht wird, was f??r Diabetiker, ??bergewichtige und Sportler von elementarer Bedeutung ist?
??? ... die Alpha-Lipons??ure vor Diabetes und vor durch Diabetes ausgel??sten Nervensch??den sch??tzt?

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Wussten Sie, dass ...
??? ... Raucher einen besseren Schutz mit Alpha-Lipons??ure erfahren? 
??? ... die Alpha-Lipons??ure unsere Hautzellen regeneriert, verj??ngt, Falten gl??ttet und sogar Aknenarben zu 70???80 % entfernen kann?
??? ... die Alpha-Lipons??ure eine therapeutische Anwendung findet, unter anderem bei Diabetes, Leberzirrhose, Herzerkrankungen, Schwermetallvergiftung, Hauterkrankungen, Tr??bung der Augenlinse, Morbus Parkinson und Morbus Alzheimer?
??? ... unsere Nahrung nur sehr wenig Alpha-Lipons??ure beinhaltet und besonders Vegetarier hier zu kurz kommen k??nnten?
??? ... man die Nahrung mit Alpha-Lipons??ure in Form von Nahrungserg??nzungsmitteln bequem und kosteng??nstig erg??nzen kann?
  
`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure ??? was ist das genau?

Die Alpha-Lipons??ure wurde 1951 entdeckt, als Wissenschaftler erkannten, dass sie eine zentrale Rolle in der Umwandlung der Nahrung in Energie innerhalb unserer Mitochondrien (Kraftwerke der Zellen) spielt. Nach und nach brachten Forschungen weitere Vorz??ge der Alpha-Lipons??ure an den Tag. Herauskristallisiert haben sich vor allem drei F??higkeiten, welche die Alpha-Lipons??ure in Perfektion besitzt:

a) Schutz vor freien Radikalen (vor Zellalterung und Zellzerst??rung)
b) Entgiftung von Schwermetallen, Radioakti vit??t und Toxinen
c) Energieumwandlung
  
`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Wie bereits im Allgemein-Teil im Ansatz erw??hnt wurde, sind freie Radikale nicht nur f??r das Altern zust??ndig, sondern auch f??r sehr viele, teilweise t??dliche Erkrankungen, darunter Arteriosklerose, Herzkreislauferkrankungen, Schlaganfall, Krebs, Arthritis, Diabetes, Alzheimer, Atemwegserkrankungen, Blutgef????erkrankungen, Mukoviszidose, Entz??ndungen, Hepatitis, Down-Syndrom und andere.

Die Alpha-Lipons??ure versteht es wie kaum ein anderes Antioxidans, uns gegen diese zerst??rerischen freien Radikale (Oxidanten) zu besch??tzen und zeichnet sich innerhalb dieser Aufgabe wiederum durch drei einzigartige F??higkeiten aus:

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
1) Unser K??rper besteht aus w??ssrigen und fettigen Gewebeformen. Im Gegensatz zu den anderen Antioxidantien (das Vitamin C beispielsweise ist wasserl??slich und fungiert lediglich als Besch??tzer der w??ssrigen Gewebeformen, das Vitamin E ist dagegen fettl??slich und sch??tzt die fettigen Gewebearten im K??rper), vermag die Alpha-Lipons??ure sowohl w??ssrige als auch fettige Gewebe unseres K??rpers zu durchdringen und vor gefr????igen freien Radikalen zu besch??tzen. Somit besch??tzt sie alle Gewebeformen unseres K??rpers, weswegen sie auch oft als ???universelles Antioxidans??? bezeichnet wird.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
2) Die Alpha-Lipons??ure kann im Gegensatz zu den meisten anderen Antioxidantien aufgrund ihrer geringen Molekulargr????e sogar die Blut-Hirnschranke passieren und unsere Hirnzellen besch??tzen (siehe auch unter ???Wirkung??? die Studie zur F??rderung der Intelligenz durch Alpha-Lipons??ure). 

3) Des Weiteren vermag die Alpha-Lipons??ure andere Antioxidantien zu regenerieren, damit diesen die Energie im Kampf gegen die freien Radikale nicht ausgeht.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
b) Alpha-Lipons??ure radioaktiven Strahlen entgiftet uns von Schwermetallen und radioaktiven Strahlen

In Studien konnte die Alpha-Lipons??ure Schwermetalle, wie Amalgam, aus dem K??rper leiten und der Radioaktivit??t entgegenwirken, wie Versuche in Tschernobyl an verstrahlten Kindern eindrucksvoll belegen konnten (siehe Punkt ???Wirkung???).

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
c) Alpha-Lipons??ure als Energieumwandler

Die Alpha-Lipons??ure spielt eine zentrale Rolle in der Energieumwandlung von Nahrungszucker in Energie innerhalb der Mitochondrien. Hier agiert sie als Coenzym bei zahlreichen energieumwandelnden Enzymkomplexen und versteht es, Nahrungszucker (und Nahrungsfette) in Energie umzuwandeln, eine Eigenschaft, die besonders f??r Diabetiker, Abnehmwillige und Sportler sehr interessant sein sollte! F??r den Diabetiker ergibt sich daraus eine insulinsparende Wirkung, der Abnehmwillige speichert nicht mehr so viel [...]

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Vorkommen der Alpha-Lipons??ure (ALA) in der Nahrung

Die Alpha-Lipons??ure befindet sich in den meisten Lebensmitteln, allerdings nur spurenweise. H??here Konzentrationen finden sich in Fleisch, vor allem in rotem, besonders in Leber, Herz und Nieren. Aber auch Gem??sesorten, wie Spinat, Brokkoli oder Tomaten, beinhalten spurenweise Alpha-Lipons??ure. Die folgende Tabelle zeigt das Vorkommen der Alpha-Lipons??ure in den Nahrungsmitteln auf und verdeutlicht, wie schwer es ist, die zur Gesunderhaltung empfohlenen 100 mg ??ber die nat??rliche Nahrung aufzunehmen:  

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie zur Ausleitung von Radioaktivit??t aus dem K??rper durch Alpha- Lipons??ure nach Korkina et al. (1993)

Immer st??rker werden wir unfreiwillig durch radioaktive Strahlen belastet. Die Reaktorkatastrophe von Tschernobyl 1986 forderte bis zum heutigen Tage viele unschuldige Opfer, brachte aber auch Erkenntnisse zur Wirksamkeit der Alpha-Lipons??ure gegen Radioaktivit??t mit sich. Nach 28 Tagen der Verabreichung von Alpha-Lipons??ure an einige betroffene Kinder fanden die Wissenschaftler heraus, dass die Sch??den durch freie Radikale im Blut bei diesen Kindern auf das Niveau von Nichtbetroffenen sanken. Erstaunlicherweise konnte das Vitamin E im Alleingang bei diesen Opfern zwar keine positive Wirkung erzielen, in Kombination mit der Alpha- Lipons??ure aber fielen die Werte sogar unter die Norm zur??ck!

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie nach Dr. Parker: Alpha-Lipons??ure hilft bei Grauem Star und Augenproblemen.

Dr. Parker konnte in seinen Studien unter Beweis stellen, dass Alpha-Lipons??ure das Auftreten und die Symptome des Grauen Stars minimieren und allgemein die Augenfunktion verbessern kann. Die Alpha-Lipons??ure kann einen Katerakt verhindern, was ihrem Einfluss auf den Glutathiongehalt zugeschrieben wird.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie nach M??nch et al. (2000) und Hager et al. (2001): Alpha-Lipons??ure hilft bei Alzheimer und Demenz.

Beobachtungen von Diabetespatienten, die Alpha-Lipons??ure bekamen und gleichzeitig an Alzheimer litten, zeigten, dass sich die Alzheimer-Erkrankung nicht weiter verschlechterte und die Hirnleistungen konstant blieben. Hier ist vermutlich die antioxidative Wirkung der Alpha-Lipons??ure, die aufgrund ihrer geringen Molekulargr????e sogar das Hirn sch??tzen kann, f??r die Stabilisierung des Krankheitszustandes zust??ndig.

`,
    },
    {
        usefulInformationImageId: images_brain,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie von Packer und Colman (2000): Alpha-Lipons??ure erh??ht die Lernleistung und steigert das Denkverm??gen.

Die oben beschriebene F??higkeit der Alpha-Lipons??ure, die Blut-Hirn-Schranke zu ??berwinden und direkt im Hirn die Zellen und Blutgef????e vor oxidativer Zerst??rung zu sch??tzen, erweist sich als konzentrationssteigernd und erh??ht das Lernverm??gen und die Denkf??higkeit. Die Lipons??ure sch??tzt aber nicht nur vor weiterer oxidativer Zerst??rung, sondern kann sogar Hirnzellen regenerieren. Dr. Packer nimmt dabei an, dass die Alpha- Lipons??ure verbrauchte Schaltkreise in gealterten Gehirnzellen repariert und revitalisiert.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Studie nach Perricone (2001): Alpha-Lipons??ure hilft gegen Falten, Tr??nens??cke, aufgedunsene und fahle sowie fahle Haut

Dr. Perricone konnte in seinen Studien nachweisen, dass Alpha-Lipons??ure die folgenden Hautprobleme zu l??sen vermag:

- Tr??nens??cke und aufgedunsene Haut
- Linien und Falten
- Fahle und fahle Haut

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure als Regenerator der anderen Antioxidantien

Als w??rde die Rolle des ???Maestros??? innerhalb des Orchesters nicht reichen, bet??tigt sich die Alpha-Lipons??ure zus??tzlich noch als ???Coach??? innerhalb des ???antioxidativen Orchesters??? und sorgt daf??r, dass den anderen Mitspielern nicht die Puste ausgeht.

Wie bereits geschildert, verf??gen einige der Antioxidantien innerhalb des ???antioxidativen Orchesters??? ??ber die wichtige F??higkeit, anderen Antioxidantien ihre Kraft zur??ckzugeben, die im Kampf gegen die freien Radikale verloren geht. Hier bringt es aber die Alpha-Lipons??ure, wie kein anderes Antioxidans, zur Spitzenleistung, indem sie die anderen Antioxidantien, die im Kampf gegen die freien Radikale ihre Energie lassen, wieder regeneriert!

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Amalgam-Entgiftung durch Alpha-Lipons??ure

Der im letzten Jahrhundert breitfl??chige Einsatz von Amalgam als Zahnf??llung bei Millionen von Menschen d??rfte auch in vielen weiteren Jahren noch schleichend Opfer nach sich ziehen. Die Langzeitwirkungen dieses unfreiwillig in unserem K??rper eingelagerten Schwermetalls, das man ??ber Jahre oder Jahrzehnte ??ber die Mundschleimhaut direkt im Organismus aufgenommen hat, ist bis zum heutigen Tag unvorhersehbar, daf??r aber verheerend!

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Die nachfolgend genannten Erkrankungen gehen auf die Vergiftung durch Amalgamplomben zur??ck: 

- Allergien
- Alzheimer
- Augen-, Nasen- und Ohrenerkrankungen
- chronische Schmerzen
- Ersch??pfungssyndrom
- Fibromyalgie
- Frauenleiden
- Herz-Kreislauf-St??rung
- Kopfschmerzen
- Lateralsklerose
- Migr??ne
- Multiple chemische Sensitivit??t
- Multiple Sklerose
- Neuropathien
- Nierenst??rung
- Parkinson
- Pilze
- Psychiatrie
- Tumorbildung
- Verdauungsst??rung
- Zuckungen

Hier kann die Alpha-Lipons??ure ma??geblich punkten, indem sie das Quecksilber 12- bis 37-mal schneller ??ber die Galle ausscheiden l??sst.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure bei Diabetes mellitus

Diabetes mellitus, im Volksmund auch ???Zuckerkrankheit??? genannt, ist eine sehr unangenehme und folgenschwere Erkrankung, die rund 8???10 Millionen aller Deutschen betrifft.

Typ-1-Diabetes betrifft 10 % aller Diabetiker und entsteht aufgrund des Mangels am Hormon Insulin, weswegen man diese Art von Diabetes auch ???insulinabh??ngigen Diabetes mellitus??? bezeichnet. Diese Erkrankung beginnt im sehr jungen Alter, zumeist bereits schon im Kindes- und Jugendalter.

Der Diabetes-Typ 2, fr??her auch ???nicht insulinabh??ngiger Diabetes??? oder ???Altersdiabetes??? genannt, ist wiederum eine Erkrankung, die zumeist ??ltere Menschen betrifft und nicht zwingend eine Insulinbehandlung ben??tigt. Diese Diabetes-Art betrifft rund 90 % aller Diabetiker. Umweltfaktoren, ??bergewicht und steigender Zuckerkonsum fordern ihre Opfer, und so erkranken auch immer mehr junge Menschen an Diabetes Typ 2.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure verhindert Arteriosklerose und sch??tzt vor Herzkreislauferkrankungen, Herzinfarkt und Schlaganfall

Herzkreislauferkrankungen gelten mit ca. 50 % aller Todesf??lle als Todesursache Nr. 1 in den Industriel??ndern. Erwiesenerma??en geht diesen in fast s??mtlichen F??llen ein krankhafter Prozess voraus, den man Arteriosklerose bezeichnet.

Diese ist durch Plaqueablagerungen an der Gef????innenwand und eine schrittweise Sklerosierung (Verkalkung) und Verstopfung der Arterien gekennzeichnet. Wird der Blutfluss zum Herzen aufgrund einer solchen Verstopfung unterbunden, bekommt das Herz keinen Sauerstoff mehr und Teile des Herzmuskels sterben ab ??? man nennt dies auch Herzinfarkt. Handelt es sich um eine Hirnarterie, die aufgrund der Arteriosklerose verstopft wurde und die Durchblutung zum Hirn unterbindet, spricht man von einem Schlaganfall oder Hirnschlag.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure verhindert Herzinfarkt und lindert die Folgen

Laut Passwater (1995) haben russische Wissenschaftler bereits in den 70er- Jahren herausfinden k??nnen, dass die Alpha-Lipons??ure den Cholesteringehalt im Blut um 40 % und in der Aorta um 45 % reduzieren kann. Die Sauerstoffaufnahme des Herzens erh??ht sich um 72 %, in der Aorta sogar um 148 % und in der Leber um 128 %. 236 In einem weiteren Versuch konnten Forscher beweisen, dass die Gabe von Alpha-Lipons??ure die Herzsch??den aufgrund des vor??bergehend unterversorgten Herzmuskels und dann des schlagartigen Ruckflusses (Reperfusion) w??hrend eines Herzinfarktes von 80 auf 40 % senken kann. 237

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure verhindert die Folgen von Hirnschlag/ Schlaganfall

Dr. Packer konnte im Tierversuch an Ratten mit einer Gabe von Alpha-Linols??ure die Sterberate aufgrund einer Reperfusion beim provozierten Schlaganfall von 80 auf 25 % senken. Die 75 % der ??berlebenden Tiere hatten keinerlei Folgesch??den. 238

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure bei Grauem Star und Augenproblemen

Studien zufolge kann die Alpha-Lipons??ure das Auftreten oder die Symptome des Grauen Stars minimieren und allgemein die Augenfunktion verbessern. So konnte in einer Studie von Dr. Parker die zus??tzliche Gabe von Alpha- Lipons??ure einen Katerakt verhindern, was dem Einfluss von Alpha- Lipons??ure auf den Glutathiongehalt zuzuschreiben ist.

Die folgende Tabelle erl??utert die pr??ventive und therapeutische Wirkung der Alpha-Lipons??ure bei Katerakten: [...]

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure bei Alzheimer und Demenz

Beobachtungen von Diabetespatienten, die Alpha-Lipons??ure bekamen und gleichzeitig an Alzheimer litten, zeigten, dass sich deren Alzheimer- Erkrankung nicht weiter verschlechterte und ihre Hirnleistung konstant blieb. 239

Die positive Wirkung erkl??ren sich die ??rzte durch das Abfangen der freien Radikale und Botenstoffe durch die Alpha-Lipons??ure. Diese Botenstoffe f??hren zu Entz??ndungsreaktionen und sollen im Zuge der Immunabwehr die senilen Plaques angreifen, attackieren aber dar??ber hinaus noch die gesunden Zellen. Hier verhindert Alpha-Lipons??ure die direkte Zerst??rung der Hirnzellen. Des Weiteren vermutet man, dass der Einfluss der Alpha- Lipons??ure auf den Glucosestoffwechsel dem Energiespiegel der Hirnzellen zugutekommt. 

`,
    },
    {
        usefulInformationImageId: images_skin,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Alpha-Lipons??ure gegen Hautalterung

Die wenigsten Menschen wissen, dass die Haut das gr????te (je nach K??rperumfang und K??rpergr????e 1,5 bis 2 m 2 ), das schwerste (bis zu 10 kg) und funktionell das vielseitigste Organ des menschlichen K??rpers ist. Die Haut ??bernimmt sehr wichtige Aufgaben: Sie sch??tzt uns vor Umwelteinfl??ssen, bildet eine H??lle, ??bernimmt wichtige Funktionen beim Stoffwechsel und der Immunologie sowie bei der Hom??ostase (inneres Gleichgewicht) und dient nicht zuletzt der Repr??sentation und Kommunikation. 245

Zumeist dient uns die Haut jedoch als repr??sentatives Werkzeug unseres ??u??eren, aber wir nehmen sie sehr selten bewusst wahr, und dies meist dann, wenn wir uns verletzen, an hei??en Gegenst??nden verbrennen oder uns einen Sonnenbrand zuziehen. Optisch betrachtet ist es die Hautalterung in Form von Falten, fahler Farbe und Altersflecken, die nach und nach unser Spiegelbild ver??ndern, etwas, was den meisten von uns missf??llt, denn wer m??chte denn schon alt werden?

`,
    },
    {
        usefulInformationImageId: images_skin,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Was l??sst die Haut altern und was erzeugt Hautfalten?

Hautalterung und Falten sind das allerdeutlichste Zeichen einer Alterung; hierbei spielt aber das chronologische Altern (aufgrund der Lebensjahre) eine sekund??re Rolle, denn viel wichtiger ist das physiologische Altern (aufgrund der Beschaffenheit unserer Physis)!

Und so sind sich die Vitaminforscher heutzutage dar??ber einig, dass Menschen im h??heren Alter, die auch so aussehen, es selbst verschulden ??? n??mlich indem sie

a) den K??rper sch??dlichen Einfl??ssen, wie Rauchen, Alkohol, Stress und Sonne, aussetzen,
b) dem K??rper nicht die N??hrstoffe geben, die er ben??tigt, um die Haut zu regenerieren, und schlie??lich 
c) den K??rper nicht vor angreifenden freien Radikalen sch??tzen, indem sie regelm????ig Antioxidantien einnehmen!

`,
    },
    {
        usefulInformationImageId: images_skin,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Bis zum heutigen Tag herrscht der allgemeine Irrglaube vor, dass ??u??ere Anwendungen (Cremes, Lotions) im Falle der Haut wichtiger w??ren als innere Anwendungen, also die Einnahme von N??hrstoffen. Dies ist wohl der breitfl??chigen Werbung f??r allerlei Kosmetika und der fehlenden Aufkl??rung (der ???Big Pharma??? sei Dank!) ??ber den tats??chlichen Nutzen von Vitaminen und N??hrstoffen geschuldet.

Dem ist aber nicht so, denn in jedem Moment unseres Lebens, in jeder Sekunde, findet nicht nur ein Abbau, sondern auch ein Aufbau aller unserer Zellen statt, das hei??t, dass alles, was lebende Materie ist ??? und damit auch unsere Haut ???sich st??ndig zu erneuern versucht. Daf??r wird aber auch ???Baumaterial??? in Form von N??hr- und Vitalstoffen ben??tigt. Die Komplexit??t der Hautstruktur, ihre aus mehreren Hautschichten bestehende Dicke bringt es mit sich, dass ??u??ere Anwendungen in Form von Cremes 

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Die gezielte Wirkung der Alpha-Lipons??ure gegen Falten und Hautalterung

Wie wir in den vorigen Kapiteln lesen konnten, nimmt die Alpha-Lipons??ure innerhalb der antioxidativen Stoffe eine sehr dominante Stellung ein, indem sie im Gegensatz zu den meisten anderen in allen Gewebeformen (sowohl w??ssrigen als auch fettigen) ihre Wirkung entfaltet und die anderen Antioxidantien w??hrend ihres Kampfes gegen freie Radikale regeneriert. Auf diese Weise sorgt sie daf??r, dass Vitamin C, Vitamin E, Coenzym Q10 und andere nicht aufgebraucht werden oder ??? gar schlimmer noch ??? selbst zu freien Radikalen mutieren, womit sie eine Unterversorgung mit diesen Substanzen bis zu einem gewissen Grad sogar kompensieren kann.

`,
    },
    {
        usefulInformationImageId: images_alphalipon,
        quelleId: "3",
        afflinksId: afflinks.ala,
        text: `
Die gezielte Wirkung der Alpha-Lipons??ure gegen Falten und Hautalterung

Wie wir in den vorigen Kapiteln lesen konnten, nimmt die Alpha-Lipons??ure innerhalb der antioxidativen Stoffe eine sehr dominante Stellung ein, indem sie im Gegensatz zu den meisten anderen in allen Gewebeformen (sowohl w??ssrigen als auch fettigen) ihre Wirkung entfaltet und die anderen Antioxidantien w??hrend ihres Kampfes gegen freie Radikale regeneriert. Auf diese Weise sorgt sie daf??r, dass Vitamin C, Vitamin E, Coenzym Q10 und andere nicht aufgebraucht werden oder ??? gar schlimmer noch ??? selbst zu freien Radikalen mutieren, womit sie eine Unterversorgung mit diesen Substanzen bis zu einem gewissen Grad sogar kompensieren kann.

`,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Das Aussehen und der Geschmack

Die Aroniabeeren ??hneln vom Aussehen her den Heidelbeeren, schwarzbl??ulich von au??en und dunkelrot im Inneren (Fruchtfleisch). Der Geschmack ist am ehesten als herbs??uerlich zu bezeichnen, was dem tanninbezogenen Gerbs??uregehalt zu verdanken ist.

Aroniabeere ??? die Heilpflanze

Aufgrund ihres hohen Gehalts an potenziell heilwirksamen Inhaltsstoffen ist die Aroniabeere sowohl aufseiten der Pr??vention als auch in der Behandlung von etlichen Erkrankungen eine regelrechte Wohltat und brachte in zahlreichen Studien und Erfahrungsberichten von Naturheilpraktikern eine erstaunliche Wirkung zutage. Dies brachte ihr offiziell den Status einer Heilpflanze in Russland sowie in Polen ein, w??hrend sie in Deutschland zun??chst aufgrund ihrer intensiven r??tlich-violett f??rbenden Schale haupts??chlich als Farbstoff Verwendung fand.
  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Aroniabeeren ??? die Wirkstoffe

Die Aroniabeere strotzt vor lauter hochwirksamen Inhaltsstoffen; hierzu geh??ren Bioflavonoide, Vitamine, Mineralien und Spurenelemente.

Wirkstoffe der Aroniabeere/Apfelbeere im Einzelnen:
Vitamine in der Aroniabeere
Die Aroniabeere enth??lt von den fettl??slichen Vitaminen die Vitamine A, die Provitamin A, E und K und von den wasserl??slichen die Vitamine C, OPC, B1, B2 (Riboflavin), B3 (Niacin), B5, B6, B7, B9 (Fols??ure), B12, C und H.

Vitamin A/Provitamin A = 1,1???2,4 g/100 ml Aroniasaft
Vitamin E = 0,8???3,1 g/100ml
Vitamin K = 0,8???1,0 g/100ml

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
OPC, das wie rund 50 000 andere Substanzen eigentlich zu den Polyphenolen z??hlt, aber ebenfalls den Namen ???Vitamin P??? verliehen bekam, kommt in den Aroniabeeren in gro??en Mengen vor. OPC beansprucht eine Sonderstellung innerhalb der genannten Vitamine, da es neben dem Vitamin C zu den besonders wichtigen geh??rt und unter anderem ??ber ein ??berdurchschnittlich hohes Zellschutzpotenzial gegen??ber den Angriffen freier Radikale verf??gt. So ist die antioxidative (zellsch??tzende) Wirkung von OPC gegen??ber den freien Radikalen 18- bis 20-mal st??rker als die von Vitamin C und sogar 40- bis 50- mal st??rker als die von Vitamin E! 

Des Weiteren verst??rkt OPC die Wirkung der Vitamine C, E und Vitamin A im K??rper um den Faktor 10, es heftet sich aber im Gegensatz zu diesen Vitaminen direkt an die K??rpereiwei??e, besonders [...]

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Bereits 24 Stunden nach der allerersten Einnahme von OPC verdoppelt sich die Widerstandsf??higkeit der Blutgef????e; bei kontinuierlicher Einnahme verdreifacht sie sich sogar im weiteren Verlauf der regelm????igen Einnahme. OPC sch??tzt vor UV-Strahlen, verbessert die Sehst??rke und schwemmt Cholesterin aus unserem K??rper heraus.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Die Aroniabeere als reichhaltigste Quelle gegen zerst??rerische freie Radikale

Polyphenole haben ein rund 100-mal st??rkeres antioxidatives Potenzial als Vitamine (Vitamin C tr??gt gerade mal mit 15 % zum antioxidativen Schutz der Zellen bei).

Was die Aroniabeere f??r uns Menschen so besonders und interessant macht, ist die Tatsache, dass in diversen Untersuchungen und Studien ihre antioxidative Kapazit??t weitaus h??her lag als die anderer Fr??chte. Dies wird, abgesehen von dem hohen Anteil an Polyphenolen, unter anderem auch der hohen Bioverf??gbarkeit der Aroniabeere zugesprochen, die auch von der Partikelgr????e abh??ngt ??? diese liegt im Falle der Aroniabeere im Nanobereich.

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
- Immunsystem st??rkend
- antikanzerogen (krebsvorbeugend)
- antiinflammatorisch (entz??ndungshemmend)
- antimutagen
- blutdruckregulierend
- durchblutungsf??rdernd
- gef????sch??tzend
- herzkranzgef????entspannend
- stoffwechselanregend
- diuretisch (harntreibend)
- adstringierend
- regenerativ auf Muskel und Knochen
- schleiml??send
- Schwermetalle ausleitend
- wachstumsf??rderlich f??r Kinder und F??ten

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
- Entz??ndungen
- Gelenkerkrankungen (Arthritis, aktivierte Arthrose)
- Diabetes mellitus
- Krebs
- Hautkrankheiten, Allergien
- Asthma
- Alterung
- Magenentz??ndung [...]

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
- Harnr??hreninfektion
- Nierenerkrankungen
- Schilddr??senerkrankung
- Strahlensch??den
- Sch??den bei chemo- bzw. strahlentherapeutischen
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

Nach schulmedizinischem Verst??ndnis ist die Arteriosklerose die Vorstufe zum Herzinfarkt oder Schlaganfall. Die starke antioxidative Wirkung der Aroniabeere verhindert die Oxidation der LDL-Cholesterine und verbessert das Verh??ltnis der HDL- zu den LDL-Cholesterinen. Beides resultiert in einem zuverl??ssigen Schutz vor Plaqueablagerungen in den Blutgef????en, der Arteriosklerose.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Wirkung der Aroniabeeren gegen Bluthochdruck (Hypertonie) Die in den Aroniabeeren enthaltenen Bioflavonoide mit ihrer Vitamin P- Aktivit??t wirken sich in Verbindung mit anderen in der Aroniabeere enthaltenen Mineralien und Vitaminen positiv auf die Elastizit??t und Durchl??ssigkeit der Blutgef????e aus. Das Nervensystem wird beruhigt, und die Cholesterolablagerungen, die zur Arteriosklerose f??hren, werden verhindert. All dies macht die Aroniabeere zu einem potenten Heilmittel gegen Bluthochdruck.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Wirkung der Aroniabeeren bei Arthritis und aktivierter Arthrose Auch hier greifen die erw??hnten antientz??ndlichen Wirkungsmechanismen, wie die Drosselung der Cyclooxygenasen, die Hemmung der Lipoxygenasen sowie die Blockierung des Enzyms ???Phospholipase A2???, die allesamt den entz??ndlichen, gelenkzerst??rerischen Prozess im Gelenkinneren unterbinden und Erkrankungen wie Arthritis oder aktivierte Arthrose positiv beeinflussen k??nnen.

  `,
    },
    {
        usefulInformationImageId: images_aronia,
        quelleId: "3",
        afflinksId: afflinks.aronia,
        text: `
Aroniabeeren-Wirkung gegen Alterung

Der sehr hohe Anteil der Flavonoide, Pelyphenolen und Phenols??ure (Aronia gilt als eine der reichhaltigsten Quellen f??r Anthocyane) in der Aroniabeere sorgt f??r einen exzellenten Schutz vor freien Radikalen, die nicht nur f??r zahlreiche Zivilisationskrankheiten, wie Krebs, Herzkreislauferkrankungen, Diabetes oder Arthritis, zust??ndig sind, sondern zugleich auch f??r die Zellalterung.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
  `,
    },
    {
        usefulInformationImageId: images_aronia,
        afflinksId: afflinks.aronia,
        quelleId: "3",
        text: `
Viele Altersforscher vertreten die Meinung, der Mensch k??nnte ca. 120 Jahre alt werden, w??rde es ihm gelingen, die Angriffe der freien Radikale abzuwehren ??? eine Disziplin, welche die Aroniabeere meisterlich beherrscht ???, denn die Beere verf??gt ??ber einen ??berdurchschnittlich hohen Anteil an oligomeren Procyaniden (OPC), die ??ber ein beachtliches Zellschutzpotenzial verf??gen. Die Ellags??ure ??bernimmt zellregenerierende und zellreparative Ma??nahmen.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
  `,
    },
    {
        usefulInformationImageId: images_aronia,
        afflinksId: afflinks.aronia,
        quelleId: "3",
        text: `
Aroniasaft kaufen

Beim Kauf des Aroniasaftes gilt es, die Augen offen zu halten und darauf zu achten, dass es sich um 100 % reinen Aroniasaft handelt, den sogenannten ???100 %igen Direktsaft???. Nicht selten sind vermeintliche Aronias??fte im Handel zu finden, die nur geringf??gig Aroniasaft enthalten, daf??r mehr Wasser oder ein Saftgemisch aus mehreren Fr??chten. Der Saft sollte nicht zus??tzlich gezuckert oder mit Konservierungsstoffen versetzt sein. Des Weiteren sollte er luftdicht verpackt und vor Licht gesch??tzt sein.

  `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Astragalus membranaceus - Eine chinesische Wurzel mit erstaunlichen F??higkeiten

Der chinesische Name ???Huang Qi??? wiederum bedeutet ???gelber F??hrer???, was den Stellenwert der seit rund 4000 Jahren innerhalb der TCM (Traditionellen Chinesischen Medizin) verwendeten Pflanze bereits erahnen l??sst. In der Tat geh??rt der Astragalus zu den wichtigsten Pflanzen der traditionellen, chinesischen Medizin.

???Qi??? ist gleichbedeutend mit ???Lebenskraft??? ??? wird diese angeregt, wie man es auch vom Ginseng her kennt, werden Selbstheilungskr??fte aktiviert, und dementsprechend verschwinden viele Krankheiten und krankhafte Missst??nde von selbst.

  `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Wirkungsweise und Wirkung des Astragalus membranaceus

Wie bei allen Heilmitteln der Traditionellen Chinesischen Medizin ist es das perfekte Zusammenspiel der von ???Mutter Natur??? wundersam aufeinander abgestimmten Inhaltsstoffe, das zu der erstaunlichen Wirkung f??hrt, wie wir sie unter dem Punkt ???Astragalus Wirkstoffe??? abgehandelt haben. Besonders die zahlreich in Wurzeln, Heilpilzen und Wildbeeren vorkommenden Polysaccharide, Flavonoide sowie Saponine geh??ren mit steigender Tendenz zu den begehrten Objekten von Studien und erwiesen sich in j??ngster Vergangenheit auf vielf??ltige Weise als au??erordentlich wirkungsvoll gegen??ber zahlreichen Krankheitsbildern und Zust??nden.
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Wirkung von Astragalus auf das Herz

Astragalus wirkt sich au??erordentlich kr??ftigend auf das Herz aus, sorgt f??r eine st??rkere Durchblutung und ??konomische Arbeitsweise des Herzmuskels und sch??tzt es vor zerst??rerischen Oxidationsprozessen.

Wirkung von Astragalus auf die Lunge

Astragalus vermag die Lungenfunktion zu st??rken und Kurzatmigkeit und Asthmazust??nden entgegen zu wirken.

Wirkung von Astragalus auf die Milz

In Studien konnte eine signifikante Wirkung von Astragalus bei Milz-Mangel- Symptomen, wie M??digkeit, Durchfall, Appetitlosigkeit und verst??rkter Schwei??absonderung, unter Beweis gestellt werden.

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
- entz??ndungshemmend
- tonisierend/vitalisierend
- herzsch??tzend
- nervensch??tzend
- entstressend
- verj??ngend
- entgiftend
- diuretisch (entw??ssernd)

 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Wirkung von Astragalus membranaceus gegen Krebs

In Studien konnte Astragalus membranaceus beim kleinzelligen Lungentumor, beim Melanom sowie beim Nierenkrebs signifikante Wirkungen aufzeigen und die positive Wirkung einer Chemotherapie potenzieren, deren Nebenwirkungen hingegen schm??lern. Des Weiteren gelten zu kurze Telomere als instabil und krebsanf??llig. Astragalus sch??tzt die Telomere vor vorzeitiger Verk??rzung und k??nnte auf diese Weise m??glicherweise auch vor Krebs sch??tzen.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Verj??ngende Wirkung von Astragalus

Gerade die Auswirkung auf die k??rperliche und geistige Verj??ngung brachte dem Astragalus membranaceus eine fast schon explosive Popularit??t in westlichen L??ndern ein. Dies ist den Nobelpreistr??gern f??r Medizin aus dem Jahre 2009 zu verdanken, die sich um die Erforschung der Telomere sowie des zugeh??rigen ???Unsterblichkeitsenzyms??? Telomerase und den hieraus resultierenden Erkenntnissen ??ber die Zusammenh??nge mit Astragalus, die sehr bald folgen sollten, verdient gemacht haben.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Bei folgenden Krankheiten und Krankheitszust??nden findet Astragalus seit jeher Anwendung: (1/2)

- alle Erkrankungen, die mit einem schwachen zusammenh??ngen
- Erkrankungen, die mit einem Virus zusammenh??ngen
- Herzerkrankungen und Herzschw??che
- Bluthochdruck
- Lebererkrankungen
- Nierenerkrankungen
- Nervenkrankheiten
- Parkinson
- alle Allergienformen
- alle entz??ndlichen Erkrankungen (Arthritis usw.)
- Asthma
- Unfruchtbarkeit (m??nnl. Infertilit??t)
- Krebs
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Bei folgenden Krankheiten und Krankheitszust??nden findet Astragalus seit jeher Anwendung: (1/2)

- HIV/AIDS
- Autoimmunerkrankungen (z. B. Lupus)
- Geschw??re
- ??deme
- Wunden
- Verdauungsschw??che
- St??rungen des Hormonhaushalts
- Taubheit/L??hmung der Gliedma??en
- Diabetes mellitus und dessen Sp??tfolgen
- chronische Nephritis
- chronisches M??digkeitssyndrom
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

Untermauert durch Studien (siehe Punkt ???Astragalus-Studien???), wirkt Astragalus besonders auf die folgenden Krankheitszust??nde am Herzen positiv ein:

- Herzinsuffizienz
- Angina Pectoris
- Koronare Herzkrankheit
- Myocarditis
- Myokardisch??mie
- Des Weiteren ist Astragalus bei s??mtlichen Herzerkrankungen und allgemeiner

 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        quelleId: "3",
        afflinksId: afflinks.astragalus,
        text: `
Wirkung bei Allergien

In zahlreichen Studien konnte der Astragalus eine regulierende Wirkung auf das Immunsystem unter Beweis stellen, was bei allergischen Erkrankungen von allergr????ter Bedeutung ist.

Der Astragalus wird als Tragantwurzelextrakt bei Allergien angewandt, f??rdert hier die Synthese von IgG-Antik??rpern und tr??gt somit zur Eliminierung von Allergenen bei. Die Expression von T-bet mRNA und T-Helfer1-Zytokinen, wie etwa IFN-??, wird gef??rdert, die Aktivit??t derjenigen Gene, die w??hrend des Allergieprozesses am Entz??ndungsgeschehen beteiligt sind, wird reguliert, und die Aussch??ttung von Histamin wird unterbunden, was zur Verhinderung von Allergiesymptomen f??hrt. Hier hat sich Astragalus bei Pollenallergie, Hausstaubmilben- und Tierhaarallergie bestens bew??hrt.

 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Verj??ngung mit Astragalus

Der Astragalus nimmt die Herausforderung der Verj??ngung multifaktoriell auf durch:

- antioxidative Wirkung
- immunstimulierende Wirkung
- Antiglykierung
- Schutz der Telomere vor Verk??rzung
- verl??ngernde Wirkung der Telomere
- Reparatur der DNA

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Die drei Molekularbiologen, Jack W. Szostak, Elizabeth H. Blackburn und Carol W. Greider vom Karolinska Institut in Stockholm liefern in ihrer Arbeit grundlegende Antworten zur Funktion der Telomere an unseren Chromosomen sowie des zugeh??rigen ???Unsterblichkeitsenzyms??? ???Telomerase??? und erhalten damit den begehrten Nobelpreis f??r Medizin 2009. 

Zur Erl??uterung: Mit jeder Zellteilung werden die Enden der Chromosomen, die sogenannten Telomere, ein St??ck k??rzer. F??gt man aber den Telomeren ein Enzym namens ???Telomerase??? hinzu, werden die Chromosomenden von diesem Enzym synthetisiert und wieder angeh??ngt.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Bestimmte Telomerase-Aktivatoren aus der Astragaluswurzel, so zum Beispiel Astragaloside IV und Cycloastragenol, besitzen nun die erstaunliche F??higkeit, auch in den normalen K??rperzellen das Gen und damit die Telomerase zu aktivieren, damit die Telomere vor Verk??rzung zu sch??tzen und sogar eine Telomerverl??ngerung einzuleiten.

???Zum ersten Mal in der Geschichte der Medizin besteht potenziell die M??glichkeit, die nachteiligen Auswirkungen des Alterungs- und Abbauprozesses, der mit unzureichender Telomerase und kurzen Telomeren in Verbindung steht, auf effektive Weise zu mindern und m??glicherweise sogar vollst??ndig zu beseitigen.??? (Noel Thomas Patton, Gr??nder von TA Sciences)

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Die ber??hmte Havard University best??tigt die Telomerase-These der Alterung

Im November 2010 sorgte die Harvard Medical School f??r eine Sensation, indem sie einen Artikel ??ber ein Forschungsexperiment ver??ffentlichte, in dem es erstmals gelang, Alterungsprozesse von S??ugetieren nicht nur zu stoppen, sondern sogar umzukehren!

Die beschriebene Telomerase-Aktivierung f??hrte zur biologischen Verj??ngung von Hirnzellen, der Milz sowie den Fortpflanzungsorganen, und das biologische Alter von M??usen, die umgerechnet dem eines 80-j??hrigen Menschen entsprachen, konnte auf das Alter junger Erwachsener umgekehrt werden.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_astragalus,
        afflinksId: afflinks.astragalus,
        quelleId: "3",
        text: `
Auch Studien an der University of Toronto in Kanada konnten eindeutig belegen, dass die Erh??hung der Telomerase-Aktivit??t in normalen menschlichen Zellen mit der damit einhergehenden Verl??ngerung der Telomere zur tats??chlich erhofften Lebensverl??ngerung f??hrt.

Mehr als das ??? es verschwanden bestimmte Erkrankungen mit der Verj??ngung der Zellen von selbst, so zum Beispiel Alzheimer, Arthritis, Osteoporose. Die Forscher schlossen ihre Forschungen mit folgendem revolution??ren Fazit ab: ???Alterung verursacht nicht kurze Telomere, sondern kurze Telomere verursachen die Alterung.??? und ???Krankheiten machen nicht alt, sondern Alterung f??hrt erst zu diversen Erkrankungen???.
 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Colostrum/Kolostrumi - Wissenswertes im Vorfeld

Kolostrum (Colostrum) ist mehr als ein wunderbares Geschenk von Mutter Natur. Es ist die gr????tm??gliche R??ckversicherung der Natur f??r die ??berlebenschance eines Neugeborenen, um den Fortbestand sowohl der menschlichen als auch der tierischen Rasse zu sichern. Innerhalb der Geschenke von Mutter Natur nimmt das Kolostrum eine ganz besondere Rolle ein, denn es ist nicht irgendein N??hrstoff, sondern DER N??hrstoff schlechthin, mit der l??ngsten Einnahmetradition und der denkbar h??chsten m??glichen Einnahmefrequentierung ??? n??mlich von der Geburt und der S??ugung des ersten Lebewesens an.
 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Nun w??re es moralisch bedenklich, w??rde man K??lbern und Ziegenkindern etwas wegnehmen, das diese selbst f??r ihr Leben dringend ben??tigen. Aber es ist beruhigend zu erfahren, dass die Muttertiere Kolostrum in ??berschuss produzieren und der Mensch lediglich diesen f??r sich in Anspruch nimmt. Und so ist es kein Zufall, dass Millionen von Menschen weltweit sich dieses Geschenkes von Mutter Natur bedienen und die Anzahl der ??rzte steigt, die ihren Praxen Kolostrum anwenden, um Symptome von Allergien, Entz??ndungen und Infektionen (MS, AIDS, Krebs) bis hin zum Muskelabbau nicht nur zu lindern, sondern h??ufig sogar zu heilen.

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
???Ich verschreibe Kolostrum ungef??hr einem Drittel meiner Patienten. Nach Einnahme dieses Nahrungserg??nzungsmittels bl??hen diese Patienten ihren eigenen Berichten zufolge f??rmlich auf, und ihr Zustand bessert sich in der Regel betr??chtlich. Wenn wir dem Patienten helfen k??nnen, sich ohne die ??blichen Arzneimittel besser zu f??hlen, dann tun wir es auch. Meiner Meinung nach ist die moderne Ern??hrungsbiochemie ein sehr interessantes Gebiet ??? und Kolostrum geh??rt dazu." (Dr. med. Nikki Marie Welch)

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Herstellung und Verarbeitung von Kolostrum

Die schonende Verarbeitung des Kolostrums ist der unmittelbare Garant f??r den h??chstm??glichen Erhalt seiner faszinierenden N??hrstoffe. Im Optimalfall stammt das Kolostrum von Bio-Rindern, was eine Verseuchung mit Aufzuchthormonen, Pestiziden und Herbiziden ausschlie??t. Das Kolostrum f??r die Nahrungserg??nzungsproduktion wird innerhalb der ersten 36 Stunden nach der Geburt der K??lber (Rinderkolostrum) oder Ziegen (Ziegenkolostrum) gewonnen. Etwa 19 von den rund 34 Litern, die eine Kuh in dieser Zeit produziert, blieben ansonsten unverbraucht, lediglich den Rest beansprucht das K??lbchen f??r sich.

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Wirkstoffe im Kolostrum

In diesem Naturmittel sind rund 80 verschiedene Mikron??hrstoffe enthalten, die f??r die extrem potente Wirkung von Kolostrum zust??ndig sind. Es ist daher ein wesentlicher Punkt, sein Kind zu stillen, denn gem???? diverser Studien 347 leiden nicht gestillte Kinder sehr viel h??ufiger unter Nahrungsmittelallergien, Ekzemen, Atemwegsallergien und Verdauungsproblemen.

Die Forscher sind sich dar??ber einig, dass sie noch lange nicht alle Wirkstoffgruppen, geschweige denn einzelne Wirkstoffe haben identifizieren k??nnen, die zu den fantastischen gesundheitlichen Vorz??gen von Kolostrum f??hren, die sich auch Erwachsene ??ber entsprechende Kolostrumpr??parate zu eigen machen k??nnen.

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
So wirkt Kolostrum allgemein bei Allergien

Studien zufolge leiden Kinder, welche die Brust bekamen, viel seltener unter Allergien als Kinder, die nicht gestillt wurden. 405 Kolostrum verf??gt ??ber entsprechende Autoantik??rper, so zum Beispiel die polymorphkernigen Leukozyten, die die Immunreaktionen im K??rper, die zu Allergien f??hren, regulieren.  

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Wirkung von Kolostrum gegen Krebs

Jeder dritte Deutsche erkrankt mittlerweile an Krebs, jeder vierte verstirbt daran. Trotz milliardenschwerer Forschung und der F??higkeit, seit den 1960er- Jahren zum Mond zu fliegen, gibt es keine wissenschaftlichen Fortschritte, die dieser furchtbaren Gei??el der Menschheit trotzen k??nnten. Umso wichtiger sind die Pr??vention und im Falle einer Erkrankung eine zumindest erg??nzende Therapie mit Naturheilmitteln, wie bitteren Aprikosenkerne, sowie Kolostrum oder nat??rlichem Vitamin C.

 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Kolostrum gegen Alterung

Die altersvorbeugende Wirkung von Kolostrum f??hrt zu sichtbaren und nicht sichtbaren Verj??ngungen des Organismus. ??u??erlich wirkt sich die Verj??ngung durch eine jugendlichere Haut sowie das Verschwinden von Falten und Altersflecken aus, innerlich nehmen die im Alter zur??ckgegangene Muskelmasse zu und der K??rperfettanteil ab, und die Knochendichte wird erh??ht.

<a href="https://www.kopp-verlag.de/a/die-entschluesselung-des-alterns?&6=35578142&otpcytokenid=35578142">???? Der Telomer Effekt - Die Entschl??sselung des Alterns</a>
 `,
    },
    {
        usefulInformationImageId: images_colostrum,
        quelleId: "3",
        afflinksId: afflinks.colostrum,
        text: `
Wie wirkt Kolostrum gegen das Altern?

Kolostrum wirkt ??ber viele Inhaltsstoffe und Eigenschaften gegen das physiologische Altern unseres K??rpers. Die antioxidativen Eigenschaften sch??tzen unsere Zellen vor Degeneration, und die Wachstumsfaktoren (z. B. IGF-1) beschleunigen die Regeneration unseres Gewebes. Altersenzym ???Telomerase???

Kolostrum verf??gt ??ber ein Enzym namens ???Telomerase???, von dem die Anti- Aging-Wissenschaftler annehmen, dass es den Alterungsprozess bremsen kann. Dieses Enzym wird vom K??rper in kleinsten Mengen hergestellt und verhindert unter anderem die Verk??rzung der Chromosomenstr??nge bei der Zellteilung. Dieser Prozess f??rdert die Heilungsprozesse besch??digter Zellen, und viele Wissenschaftler begr??nden das Altern der Zellen mit der nachlassenden F??higkeit, diese wiederherzustellen, was Versuche an Menschen mit der ???Greisenkrankheit??? belegen, denen das Enzym ???Telomerase??? g??nzlich fehlt.
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Die medizinische Anwendung ist recht breit gef??chert und reicht von Alzheimer ??ber Diabetes bis hin zu Krebs; zur Anwendung kommt dabei zumeist das zun??chst gemahlene und dann getrocknete Rhizom (Wurzel) in pulverisierter Form. Wie wirkungsvoll dieses sein kann, wird am Beispiel von Krebs deutlich. Hier gibt es Expertenstimmen, die die ??berzeugung vertreten, es g??be keine Krebsart, die nicht auf die Behandlung mit Curcumin reagieren w??rde!

Ferner sch??tzt Curcumin das Herz vor Herzinfarkten, das Hirn vor Schlaganf??llen und die Leber vor einer Zirrhose; es senkt den Blutzuckerspiegel und sch??tzt auch vor den gef??rchteten Folgen der Diabetes.
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Naturforscher sind sich einig, dass l??ngt nicht alle Wirkstoffe aus der Kurkuma identifiziert werden konnten; f??r viele fehlen noch Bezeichnungen und Definitionen. Aus den rund 400 identifizierten Wirkstoffen sticht besonders das Curcumin als eines von 90 verschiedenen Curcumoiden, welche die Kurkuma beinhaltet, hervor
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
- Eiwei??
- Fetts??uren
- Sekund??re Pflanzenstoffe
- Enzyme
- Hormone
- ??therische ??le
- Bitterstoffe
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Allgemeine Wirkung von Curcumin (1/2)

- Curcumin wirkt antioxidativ (zellsch??tzend)
- Curcumin wirkt antiinflammatorisch (entz??ndungshemmend)
- Es zeigt eine immunmodelarische (Immunsystemaufbauende) Wirkung.
- Es verf??gt ??ber eine antibakterielle Wirkung.
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
- chemopr??ventiv
- choleretisch
- antiphlogistisch
- sauerstoffanreichend
- chlekinetisch
- antiisch??misch
- heilungsf??rdernd
- gallentreibend
- als Insektizid
- Es wirkt sich entgiftend auf den Organismus aus.
- Curcumin hat eine antikarzenogene (krebshemmende) Wirkung.
- Es ist cholesterinsenkend/lipidsenkend.
- Curcumin wirkt hepatoprotektiv (lebersch??tzend).
- Curucmin wirkt blutdrucksenkend.
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Antikarzinogene (krebshemmende) Wirkung

Die Wirkungsweise, mit der Curcumin Einfluss auf das Krebsgeschehen nimmt, kann zu Recht als ganzheitlich und multifaktoriell bezeichnet werden. Diesem wichtigen Thema ist ein eigener Punkt gewidmet: ???Curcumin bei Krebs???
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Auf die folgenden Erkrankungen und Missst??nde nimmt Curcumin/Kurkuma positiven Einfluss: (1/3)

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
- Konzentrationsschw??che
- Tumorentstehung/Krebs
- Entz??ndliche Erkrankungen
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
Auf die folgenden Erkrankungen und Missst??nde nimmt Curcumin/Kurkuma positiven Einfluss: (2/3)

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
- Bl??hungen
- Magendarmprobleme
- chronische M??digkeit
- Schuppenflechte
- Allergien
- Insektenstiche
- Erkrankungen der Atemwege
- Schlafst??rungen
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
Auf die folgenden Erkrankungen und Missst??nde nimmt Curcumin/Kurkuma positiven Einfluss: (3/3)

- Husten
- Epilepsie
- Lebererkrankungen/Leberschw??che
- Gr??ner Star
- Kennedy-Krankheit (spinale Muskelatro
- phie)
- Vorzeitige Alterung
- Zahnfleischentz??ndungen
- Uveitis (Entz??ndung der mittleren Augenhaut)
- ??bergewicht
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

Curcumin konnte in zahlreichen Studien einen Schutz f??r das Hirn vor neurodegenerativen Erkrankungen unter Beweis stellen. Als Ausl??ser von Alzheimer wird ??hnlich einer Arteriosklerose eine Ablagerung von Plaques (amyloide Plaques) in dem Bereich angesehen, in dem sich die Nervenzellen befinden. Dies f??hrt zur Unterbrechung der neurologischen Leitung von Signalen mit entsprechenden Funktionseinbu??en [...] 
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Wirkung gegen entz??ndliche Erkrankungen, so auch gegen Arthritis.

Entz??ndliche Erkrankungen werden ma??geblich ebenfalls durch freie Radikale verursacht. Curcumin verf??gt ??ber ausgesprochen starke antioxidative Eigenschaften und kann diesem Entstehungsmechanismus bereits effizient entgegentreten. Ein weiterer Mechanismus innerhalb des Arthritisgeschehens ist die Histaminaussch??ttung, die Curcumin ebenfalls beeinflussen kann. In zahlreichen Studien konnte Curcumin beweisen, dass es genauso wirksam oder noch wirksamer gegen Entz??ndungen im Organismus wirkt wie die klassischen Entz??ndungsblocker der Schulmedizin (Ibuprofen, Aspirin usw.), dies aber v??llig nebenwirkungsfrei!

<a href="https://www.kopp-verlag.de/a/kopp-vital-curcuma-kapseln?&6=35747624&otpcytokenid=35747624">???? Kopp Vital Curcuma Kapseln</a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=https://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-180-kapseln-im-glas-mit-kurkuma-mangan-kupfer">???? Coenzym Q10 Vita | 180 Kapseln im Glas (Mit Kurkuma + Mangan + Kupfer) </a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=hhttps://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-500-kapseln-mit-kurkuma-mangan-kupfer-vorratsbeutel">???? Coenzym Q10 Vita | 500 Kapseln (Mit Kurkuma + Mangan + Kupfer) Vorratsbeutel </a>
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Wirkung von Curcumin bei Arthrose

Die Arthrose ist im fortgeschrittenen Stadium durch Gelenkschmerzen und Bewegungseinschr??nkung gekennzeichnet. In einer Doppelblindstudie konnte der verwendete Curcumin-Phospholid-Komplex eine signifikante Besserung der Schmerzsymptomatik sowie der Beweglichkeit der Arthrosepatienten nachweisen. 427 Zu begr??nden ist dies unter anderem mit den antiinflamma- torischen Eigenschaften des Curcumin, die die Symptomatik der Schwellung, Schmerzen, Entz??ndungen und R??tung lindern und es dem Gewebe erlauben, sich zu regenerieren. Hier kann Curcumin nebenwirkungsbehaftete NSAR ersetzen.

<a href="https://www.kopp-verlag.de/a/kopp-vital-curcuma-kapseln?&6=35747624&otpcytokenid=35747624">???? Kopp Vital Curcuma Kapseln</a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=https://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-180-kapseln-im-glas-mit-kurkuma-mangan-kupfer">???? Coenzym Q10 Vita | 180 Kapseln im Glas (Mit Kurkuma + Mangan + Kupfer) </a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=hhttps://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-500-kapseln-mit-kurkuma-mangan-kupfer-vorratsbeutel">???? Coenzym Q10 Vita | 500 Kapseln (Mit Kurkuma + Mangan + Kupfer) Vorratsbeutel </a>
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        afflinksId: afflinks.curcuma,
        text: `
Wirkung von Curcumin bei Asthma und allgemeinen Erkrankungen der Atemwege

Die entz??ndungshemmende, antioxidative und die Histaminaussch??ttung unterdr??ckende Wirkung von Curcumin kann allergischem Asthma und zahlreichen Erkrankungen der Atemwege entgegenwirken (darunter Atemnotsyndrom, allergisches Asthma, ALI, COPD). Im Gegensatz zu den Standardmedikamenten auf Cortison-basis erfolgt eine Behandlung mit Curcumin v??llig nebenwirkungsfrei.

<a href="https://www.kopp-verlag.de/a/kopp-vital-curcuma-kapseln?&6=35747624&otpcytokenid=35747624">???? Kopp Vital Curcuma Kapseln</a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=https://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-180-kapseln-im-glas-mit-kurkuma-mangan-kupfer">???? Coenzym Q10 Vita | 180 Kapseln im Glas (Mit Kurkuma + Mangan + Kupfer) </a>
<a href="https://partnerprogramm.cellavita.de/go.cgi?pid=608&wmid=cc&cpid=1&target=hhttps://www.cellavita.de/gesundheit/nahrungsergaenzung/coenzym-q10/coenzym-q10-vita-500-kapseln-mit-kurkuma-mangan-kupfer-vorratsbeutel">???? Coenzym Q10 Vita | 500 Kapseln (Mit Kurkuma + Mangan + Kupfer) Vorratsbeutel </a>
 `,
    },
    {
        usefulInformationImageId: images_curcuma,
        quelleId: "3",
        text: `
Wirkung des Curcumin gegen Alterung

Curcumin aktiviert Gene, die f??r die Zellteilung und Zelldifferenzierung verantwortlich sind. Die Zellteilung ist eine Voraussetzung zur Verj??ngung aller Gewebeformen. Des Weiteren f??rdert es die Kollagensynthese und damit den Neuaufbau von Kollagenen, die zur Hauterneuerung und Faltenfreiheit f??hren.

Mit seiner neuroprotektiven Schutzwirkung und dem hieraus resultierenden Schutz vor Alzheimer und Demenz stellt Curcumin ein regelrechtes funktionelles Anti-Aging-Mittel dar.

 `,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Zu diesem Zwecke sammeln die Bienen Harz aus Baumknospen und verletzter Baumrinde (vorzugsweise aus Pappeln, aber auch Birke, Kiefer, Fichte, Erle und andere Baumarten kommen infrage) und vermischen es im Bienenstock mit eigenen Fermenten, Bl??tenpollen und Wachs, um f??r sich und ihre Nachkommen eine sterile und dichte, vor Regen, Hitze, K??lte und Wind gesch??tzte Behausung zu garantieren.

Bei dieser selbst hergestellten Masse handelt es sich um das, was wir Menschen schlie??lich dann ???Propolis??? nennen. Vereinfacht kann man also sagen, dass sich die Bienen Pflanzenextrakten bedienen, die an sich bereits sehr gesund sind, und deren Wirkung optimieren, indem sie diese mit eigenen Sekreten vermischen.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Unter anderem ist die Wiederentdeckung von Propolis einem d??nischen Bienenz??chter namens Karl Lund Aagaard zu verdanken, dessen Experimente alle Aspekte um das Bienenvolk und den Bienenstock beinhalteten, entsprechend also auch das Kittharz der Bienen, also Propolis.

Seine ersten Experimente hinsichtlich der gesundheitlichen Eigenschaften von Propolis unternahm er im Selbstversuch. Eine schlimme Halsentz??ndung, einhergehend mit hohem Fieber bot sich hierzu bestens an und klang zum Erstaunen seiner Frau, die von Beruf Krankenschwester war, ??ber Nacht bis auf eine noch leichte Halsr??tung v??llig ab. Diese Halsr??tung sollte einen Tag sp??ter komplett verschwinden.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Wirkstoffe im Propolis

Bis zum heutigen Tag konnten die Wissenschaftler eine Anzahl von ca. 200 Inhaltsstoffen darin identifizieren.

Zu den Wirkstoffen in Propolis geh??ren Vitamine, Mineralien, Spurenelemente, sekund??re Pflanzenstoffe und ??therische ??le. Die Hauptwirkstoffe sind aber ohne Frage die Flavonoide, die den sekund??ren Pflanzenstoffen angeh??ren.

Zun??chst muss man jedoch unbedingt vorausschicken, dass es nicht DAS standarisierte Propolis gibt; vielmehr h??ngt dessen Zusammensetzung (und damit auch die Wirksamkeit) stark von der Region (geografisch bedingte Eigenheiten von Pflanzen), in der die Bienen t??tig wurden, sowie von der Jahreszeit ab. Die Wirksamkeit kann also von Propolis zu Propolis variieren.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Revitalisierende Wirkung von Propolis

Indem es in Stoffwechselprozesse eingreift und diese beschleunigt, ist Propolis geradezu daf??r pr??destiniert, ??lteren und kranken Menschen wieder Energie zu schenken, indem es deren alters- oder krankheitsbedingte Stoffwechselprozesse wieder ankurbelt.

Zellverj??ngende Wirkung von Propolis

Propolis vermag nach Ansicht von Prof. Dr. E. D??rling die Zellverj??ngung nicht nur signifikant zu beschleunigen, sondern sogar zu verdoppeln!
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Antibakterielle, antivirale und antifungale Wirkung von Propolis

Im Gegensatz zu Antibiotika (also Penicillin & Co.), die lediglich ein Dutzend verschiedener Bakterienst??mme zu eliminieren verstehen, nimmt sich Propolis s??mtlicher Parasiten an, angefangen von Bakterien bis hin zu Viren und Pilzen. Dar??ber hinaus k??nnen diese Parasiten, im Gegensatz zur Sachlage bei Antibiotika, keine Resistenz gegen Propolis entwickeln, was dieses zu einer ausgezeichneten und immer beliebteren Alternative zu den sch??dlichen Antibiotika macht.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Schmerzlindernde Wirkung von Propolis

Die im Propolis enthaltenen Flavonoide sind nat??rliche Antagonisten (Gegenspieler) von Prostaglandinen, die bekanntlich innerhalb des Schmerzgeschehens eine urs??chliche Rolle spielen. Dies zieht eine regelrechte an??sthesierende Wirkung nach sich und stellt eine gesunde Alternative zu zahlreichen, h??ufig stark nebenwirkungsbehafteten Medikamenten der Schulmedizin dar.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Antiallergische Wirkung von Propolis

Die antiallergische Wirkung von Propolis ist vor allem auf die darin enthaltenen Flavonoide zur??ckzuf??hren. Bekanntlich entstehen Allergien aufgrund der Freisetzung von Histamin. Die Flavonoide im Propolis sch??tzen die Mastzelle, die das Histamin aussch??ttet, d??mmen deren Aussch??ttung ein und verhindern so direkt die allergischen Reaktionen.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Wirkung von Propolis gegen Altersbeschwerden ??? Anti-Aging

Die sicherlich aufsehenerregendste F??higkeit von Propolis bez??glich eines Anti-Aging-Effektes liegt in seiner Eigenschaft, die Zellverj??ngung um das Doppelte beschleunigen zu k??nnen. 473 Propolis erweist sich als ein potentes Mittel gegen s??mtliche Altersbeschwerden. Es sind in erster Linie die Angriffe von freien Radikalen, die uns altern lassen. So vermuten Experten, dass der Mensch 120 Jahre alt werden k??nnte, wenn es ihm gel??nge, s??mtliche Angriffe von freien Radikalen abzuwenden. Propolis hat in zahlreichen Experimenten sehr effiziente, antioxydative F??higkeiten unter Beweis stellen k??nnen. Des Weiteren baut unser Immunsystem mit fortschreitendem Alter stetig ab. Die immunst??rkende Wirkung von Propolis kann also auch diesem Alterungsaspekt gerecht werden.[...]
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Wirkung von Propolis bei Allergien

Zu den h??ufigsten Allergieformen z??hlen Pollenallergie (Heuschnupfen), Tierhaarallergie, Nahrungsmittelallergie, Insektenallergie sowie Hausstaubmilbenallergie. Die im Propolis zahlreich enthaltenen Flavonoide sch??tzen nicht nur die Mastzellen, die f??r die Histaminaussch??ttung zust??ndig sind, sondern hemmen diese an sich. Es gibt Berichte dar??ber, dass selbst extrem schwerste Allergief??lle, beispielsweise bei Heuschnupfen, nicht nur eine Linderung, sondern nach wiederholter Anwendung der Propolis-Behandlung eine komplette Heilung erfahren konnten und eine weitere Anwendung unn??tig war.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Wirkung von Propolis bei Durchblutungsst??rungen, Schaufensterkrankheit und Raucherbein 

Bei Durchblutungsst??rungen und der Schaufensterkrankheit sowie bei Raucherbeinen hat sich die Anwendung der Propolis-Salbe sehr gut bew??hrt. Mehrmals am Tag, vor allem vor dem Schlafengehen, die betroffenen Extremit??ten kr??ftig einreiben.

Wirkung von Propolis bei Hauterkrankungen, Akne, G??rtelrose, Herpes usw.

Propolis hat sich in Form einer Salbe in der ??u??eren Anwendung von zahlreichen Hauterkrankungen, von Akne ??ber G??rtelrose bis hin zu Herpes, als geradezu hervorragend herausgestellt.  
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Propolis Wirkung bei Rheuma/Arthritis

Propolis hat bei Rheuma- bzw. Arthritispatienten in Doppelblindstudien eine herausragende Wirkung erzielt und sollte ??u??erlich als Salbe angewandt werden.

In einem Doppelblindversuch hat man 28 Rheumapatienten mit einer Propolis-Salbe und einem Scheinpr??parat behandelt. Diejenigen Rheumapatienten, die mit der Propolis-Salbe behandelt wurden, erfuhren eine ???eindrucksvolle Besserung innerhalb der ersten Woche??? 475 Hierbei sollte man die betroffenen Gelenke 2???3 x t??glich mit einem d??nnen Film an Propolissalbe einreiben.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Propolis in der alternativen und komplement??ren Krebsbehandlung

W??hrend Propolis vor allem aufgrund seiner antibakteriellen und antiallergischen Eigenschaften ber??hmt geworden ist, zeigt es gerade in letzten Jahren weitere ungeahnte Potenziale, n??mlich im Kampf gegen Krebs! So zeigt die Krebsforschung seit Neustem starkes Interesse an diesem Naturstoff der Bienen, denn es scheint, als verf??ge Propolis ??ber direkte krebszellent??tende sowie das Krebswachstum hemmende Eigenschaften.
`,
    },
    {
        usefulInformationImageId: images_propolis,
        quelleId: "3",
        afflinksId: afflinks.propolis,
        text: `
Bei welchen Krebsarten wirkt Propolis?

Aufgrund der umfassenden, multifaktoriellen Wirkung kann man davon ausgehen, dass sich Propolis bei zahlreichen Krebsarten bew??hrt; hierzu muss man jedoch die weitere Forschung abwarten. Nachweislich konnte Propolis (im Tierversuch) die folgenden Krebsarten verhindern: 

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
Dermatitis ("Dermis" = dt. "Haut") ist ein Oberbegriff f??r Hautkrankheiten wie z.B. Neurodermitis, Ekzem und andere Hautbeschwerden mit entz??ndlichen Symptomen.

Empfehlung bei Dermatitis:

20% Propolis Tinktur: 2-3 Tropfen in eine Naturkosmetik-Creme untermischen.
Propolis Spray: Die betroffenen Stellen mit dem alkoholfreien Propolis Spray mehrfach t??glich bespr??hen.
Propolis Kapseln: T??glich 2 Kapseln am morgen f??r die innere Unterst??tzung.
`,
    },
    {
        usefulInformationImageId: images_propolis_bedrop
        ,
        quelleId: "2",
        afflinksId: afflinks.propolis_bedrop_dermatitis,
        text: `
Wissen zu NEURODERMITIS

Bei Neurodermitis handelt es sich um eine chronisch entz??ndliche, nicht ansteckende Hautkrankheit. Neurodermitis wird auch als atopische Dermatitis oder atopisches Ekzem bezeichnet. Die Veranlagung von Neurodermitis ist erblich. Die Diagnose und Ausbruch der Hautkrankheit erfolgt oft im fr??hen Kindesalter. Der Krankheitsverlauf zeichnet sich in Form von Sch??ben aus, die aufgrund von Umweltfaktoren wie z.B. Stress, Feuchtigkeit oder hautreizende Substanzen beg??nstigt werden k??nnen. Die Haut von Neurodermitiker ist gest??rt trocknet im Gegensatz zur "gesunden" Haut schneller aus, entz??ndet sich, wodurch Juckreiz und R??tungen ausgel??st werden. Therapiem??glichkeiten von Neurodermitis (atopischem Ekzem) sind unterschiedlich. Die klassische Schulmedizin greift in den meisten F??llen auf die altbekannte Cortisonsalbe zur??ck. [...] 

`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Eine aktuelle Studie, welche die Wirkung des Vitamin C aus der Camu Camu- Frucht auf Arteriosklerose sehr eindrucksvoll unter Beweis stellt, kommt aus Japan, genauer gesagt von der Medizinischen Universit??t in Saga. 

Zwanzig m??nnliche Raucher wurden in zwei Gruppen unterteilt, zehn von ihnen erhielten 1050 mg k??nstliches Vitamin C und die anderen zehn 70 ml reinen Camu Camu-Saft, was ebenfalls der Menge von 1050 mg Vitamin C entspricht.

Bereits nach einer Woche waren in der Camu Camu-Gruppe die Entz??ndungswerte und Werte des oxidativen Stresses signifikant zur??ckgegangen, w??hrend es in der Gruppe mit dem k??nstlichen Vitamin keinen Unterschied zur Ausgangslage gab!
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
KREBS
Auch den Krebs (Todesursache f??r ??ber 25 % aller Mitteleurop??er und US- Amerikaner) bek??mpft Vitamin C ??ber verschiedene Mechanismen,

Vitamin C
- entgiftet sehr zuverl??ssig unseren Organismus von krebserregenden Stoffen,
- senkt die Belastung durch Schwermetalle
- erh??ht die Eisenaufnahme (Schutz vor Blutarmut)
- aktiviert das Immunsystem und sch??tzt ??ber die Kollagensynthese das menschliche Gewebe vor den gefr????igen Krebszellen.

Angesicht der Tatsache, dass jeder Dritte an Krebs erkrankt (und jeder Vierte daran stirbt!) ist Pr??vention (Vorbeugung) absolut vonn??ten.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
ALZHEIMER/PARKINSON UND VITAMIN C

Neuere Studien haben bewiesen, dass die Oxidation und die Zerst??rung von Zellen auch f??r diese Krankheiten zust??ndig sind. Wir haben gelernt, dass nat??rliches Vitamin C, wie es die Camu Camu-Kapseln in bestm??glicher Qualit??t bieten, ein effizientes Antioxidans ist, und dass Vitamin C au??erdem die Hormonproduktion (unter anderem Dopamin und Melatonin) sowie die Neurotransmitter (Botenstoffe) im Gehirn verbessert. Die Aktivierung der Neurotransmitter erh??ht zudem die Konzentrationsf??higkeit sowie die Ged??chtnisleistung und verbessert die Reaktionsf??higkeit.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
VITAMIN C BEK??MPFT FALTEN (Hautalterung)

Da die Hautstruktur gr????tenteils ebenfalls aus den beiden Eiwei??en Kollagen und Elastin besteht, spielt die Kollagen- und Elastinsynthese (Wiederaufbau und Erhalt), die Vitamin C und OPC perfekt managen, die entscheidende Schl??sselrolle. Gerade OPC bindet sich direkt an Kollagen und Elastin, baut auf und regeneriert diese und sch??tzt sie vor freien Radikalen. Bei entsprechender Dosierung wird die Faltenbildung verlangsamt, vorhandene Falten werden gegl??ttet und ganz nebenbei wird der Neuentstehung von Falten zuverl??ssig vorgebeugt.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Vitamin C Studie an 4000 Frauen

Wissenschaftlern des Unilever-Forschungsinstitutes in Bedford, Gro??britannien, ist es gelungen, den Stoff ausfindig zu machen, der die Haut m??glichst lange jung und gesund erh??lt. 4000 Frauen im Alter ??ber 40 Jahren wurden nach ihren Essgewohnheiten befragt und anschlie??end ??ber weitere 30 Jahre lang beobachtet. Diejenigen, die verst??rkt Vitamin C zu sich nahmen, hatten weniger Falten ??? und je mehr sie davon nahmen, desto weniger Falten hatten sie.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
VITAMIN C GEGEN ENTZ??NDUNGEN (Arthritis, Bronchitis, Neurodermitis, Parodontitis, Meningitis)

Bei allen Entz??ndungen, die auf ???itis??? oder ???is??? enden, spielt die Oxidation (freie Radikale) die entscheidende Rolle. Da Vitamin C (und OPC) zu den effektivsten Radikalenf??ngern (Antioxidantien) geh??ren, verwundert es nicht, dass sie in entsprechenden Mengen das Aufkommen dieser entz??ndlichen Erkrankungen zu verhindern verm??gen. Entz??ndungen, Fieber und Schmerzen d??mmt Vitamin C ??ber die Synthese des PGE 1 (Prostaglandin ), das auf die Regulierung des Immunsystems Einfluss nimmt, ein. 
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Wie bereits in vorherigen Kapiteln ausf??hrlich berichtet, verhindert die derzeit weltweit empfohlene Menge an Vitamin C (zwischen 60 und 100 mg/Tag) lediglich Skorbut, also das Endstadium des Vitamin C-Mangels, der zum Tode f??hrt. Sie ist jedoch so gering gehalten, dass sie auf der anderen Seite die meisten Erkrankungen zul??sst.

Der Grund daf??r ist ganz einfach: w??rde der Mensch gen??gend nat??rliches Vitamin C und ??hnlich wirksame Natursubstanzen zu sich nehmen, w??rde er voraussichtlich kaum noch erkranken und damit der ???Big Pharma??? keine Einnahmen f??r teure Medikamente einbringen ??? Tote wiederum bringen kein Geld ein, au??er dem Leichenbestatter ...
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Bei den oben ausf??hrlich behandelten Erkrankungen haben Forscher eine niedrigere Vitamin-C-Konzentration im K??rper vorgefunden als bei Gesunden. Dies ist bereits ein deutlicher Hinweis darauf, dass der K??rper seine Vitamin C-Reserven aufbraucht, um mit der Erkrankung fertig zu werden. Da man mit der normalen Nahrung aber allerh??chstens 100 mg Vitamin C pro Tag aufnehmen kann, ist die zus??tzliche Nahrungserg??nzung mit nat??rlichen Vitamin-C-Pr??paraten unentbehrlich.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Selbsttest zur Feststellung des individuellen Vitamin C-Bedarfs bei Gesunden und Kranken

W??hrend die Empfehlung von 30???50 mg Vitamin C pro Kilo K??rpergewicht t??glich durchaus eine brauchbare Orientierung darstellt, gibt uns der Vitamin- Forscher Dr. Kinadeter eine Anleitung f??r einen genauen, individuellen Test des Vitamin-C-Bedarfs.

Gem???? Dr. Kinadeter beh??lt der K??rper immer nur so viel Vitamin-C bei sich, wie er ben??tigt; alles ??bersch??ssige wird ??ber die Blase und den Darm ausgeschieden.

Diese Ausscheidung aber hat etwas Gutes f??r sich, denn sie verhindert nach Dr. Kinadeter eventuelle Erkrankungen der Blase, der Prostata und des Darms.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Der Vitamin C Test (zur Ermittlung der pers??nlichen Tagesdosis)

ERSTER TAG: 1500 mg Vitamin C
Nach dem Fr??hst??ck, Mittagessen und dem Abendessen jeweils 0,5 g Vitamin C (m??glichst in Form von Camu Camu-Kapseln oder Camu Camu-Pulver bzw. Acerola!) zu sich nehmen.

ZWEITER TAG: 3000 mg Vitamin C
Nach dem Fr??hst??ck, Mittagessen und dem Abendessen jeweils 1 g Vitamin C zu sich nehmen. Usw. Man erh??ht auf diese Weise Schritt f??r Schritt die Vitamin-C-Zufuhr, bis [...]
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
AUGEN AUF BEIM KAUF VON LEBENSMITTELN MIT VITAMIN C

F??r den Menschen in der heutigen modernisierten Welt ist es v??llig unm??glich, ausschlie??lich ??ber die Nahrung gen??gend N??hrstoffe und Vitamine zu erhalten! Punkt, basta!

Neben einer Erg??nzung der Nahrung durch hochwertige, nat??rliche Nahrungserg??nzungsmittel (die beste Quelle hierf??r sind Produkte aus der Camu Camu-Frucht) sollte man dennoch m??glichst viel Obst und Gem??se verzehren, da die darin enthaltenen sekund??ren Stoffe und Enzyme den Prozess der Gesunderhaltung unterst??tzen.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Vitamin C-schonende Zubereitung

Statt das Gem??se zu kochen, setzen Sie auf kurzes Garen; dies erh??lt mehr N??hrwerte und mehr Vitamin C.

Kochen in Leitungswasser entzieht der Nahrung 50 % des Vitamin C, und zwar aufgrund des hohen Chlorgehaltes im Leitungswasser. 574 Man sollte das Gem??se erst in den Topf stecken, wenn das Wasser bereits kocht, dann kurz durchkochen, um m??glichst wenig Vitamin C beim Kochen zu verlieren.

Vermeiden Sie m??glichst eine l??ngere Lagerung von Obst und Gem??se. Wenn eine Lagerung unausweichlich ist, sorgen Sie daf??r, dass abgedunkelt gelagert wird.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Nat??rliches Vitamin C vor Ascorbins??ure?

Nat??rliches Vitamin C besteht aus dem kompletten Vitamin C-Komplex, also nicht ausschlie??lich aus der Ascorbins??ure, sondern ebenfalls aus Calcium Ascorbate, Ascorbyl Palmitat, Magnesium Ascorbate, Niacinamide Ascorbate einschlie??lich sekund??rer Pflanzenstoffe, Bioflavonoide, Hesperidin und Rutin. Erst dies garantiert die h??chstm??gliche Aufnahme und Verwertbarkeit vonseiten unseres K??rpers einschlie??lich der in dieser Abhandlung ausf??hrlich geschilderten gesundheitlichen Vorz??ge.
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Aber auch die kosteng??nstige Ascorbins??ure erf??llt ihren Zweck, jedoch gilt es bei der Einnahme einiges zu bedenken:

wie man dem Namen ???AscorbinS??URE??? bereits entnehmen kann, ??bers??uert Ascorbins??ure in h??heren Mengen unseren Organismus, was alles andere als gesund ist. Die Bioverf??gbarkeit der Ascrobins??ure, also die Aufnahme durch unseren Organismus, ist alles andere als ideal, was nicht verwundert, da es sich um ein k??nstliches Produkt und kein Produkt von Mutter Natur handelt!
`,
    },
    {
        usefulInformationImageId: images_camu
        ,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Camu Camu ??? die an Vitamin C reichste Frucht der Welt.

Selbstverst??ndlich eignet sich zur optimalen Vitamin C-Versorgung nichst so gut, wie das nat??rliche Vitamin C!

Nat??rliches Vitamin C erh??lt man im Handel z.B. gewonnen aus der Acerola- Frucht oder aber noch besser aus der Camu-Camu-Frucht. Camu Camu (lat. Myraciaria dubia), auch ???Bayberry Fruit??? genannt, ist eine im Amazonasgebiet weit verbreitete Frucht, die 30- bis 60-mal mehr Vitamin C beinhaltet als die Zitrusfr??chte Zitronen, Orangen oder Apfelsinen. Camu Camu enth??lt neben dem vollst??ndigen Vitamin C-Profil zahlreiche weitere N??hrstoffe, wie Beta-Carotin und Calcium, 10-mal mehr Eisen, 3-mal mehr Niacin, 2-mal mehr Riboflavin und sage und schreibe um 50 % mehr Phosphor als eine Orange.
`,
    },
    {
        usefulInformationImageId: images_camu,
        quelleId: "3",
        afflinksId: afflinks.camu,
        text: `
Die Camu Camu-Frucht ist die an Vitamin C reichste Frucht der Welt und bietet in ihrer nat??rlichen Vollkommenheit eine f??r uns Menschen perfekt abgestimmte Mischung an Vitaminen, Mineralien, sekund??ren Pflanzenstoffen und vielen bislang noch unerforschten weiteren Vitalstoffen.

Die synergetische Mischung der von der Naturk??che im perfekten Einklang zusammengestellten Zutaten aus Vitaminen, Mineralien, sekund??ren Pflanzenstoffen und Aminos??uren erh??ht und maximiert die Aufnahmef??higkeit des Vitamin C und ist daher jeder anderen Vitamin-C- Quelle hoch ??berlegen.

Die allerbeste Entscheidung f??r ein Vitamin C-Pr??parat ist zweifelsohne also ein Erzeugnis aus dem 100 % Camu Camu-Pulver, gefolgt von Acerola!  
`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Sehr wichtig erscheint an dieser Stelle der Hinweis darauf, dass der ??berzeugung aller Experten nach nicht einzelne isolierte Verbindungen aus dem Granatapfel, sondern stets das Zusammenspiel ALLER nat??rlichen Inhaltsstoffe zu den verbl??ffenden Erfolgen f??hrt! So zeigen Studien beispielsweise im Falle von Krebs auf, dass der Granatapfelsaft in seiner Gesamtheit im Hinblick auf die Wirkung den isolierten Enzymen, wie der Ellags??ure und Punicalagin sowie anderen Granatapfel-Extrakten, deutlich ??berlegen ist.
`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Was den Granatapfel auszeichnet, ist seine ausgesprochene Vielf??ltigkeit an Wirkstoffen, wie Vitaminen, Mineralien, Spurenelementen, sekund??ren Pflanzenstoffen sowie Fetts??uren. Wie ein Orchester k??nnen diese ??u??erst bioaktiven Substanzen im Einklang sehr vielen Krankheiten trotzen und zu einem erf??llten, l??ngeren Leben beitragen; sie bieten einen drei- bis zehnmal h??heren Schutz vor Oxidantien als unsere heimischen Obstsorten.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Sekund??re Pflanzenstoffe im Granatapfel  wirken sich folgenderma??en aus:

- antioxidativ,
- antimikrobiell,
- antiviral,
- antithrombotisch (gegen Verklumpung des Blutes),
- das Immunsystem aufbauend,
- antikanzerogen (tumorunterdr??ckend),
- antimutagen,
- verdauungsf??rdernd,
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
Das Herzkreislaufsystem stellt ein Paradebeispiel daf??r dar, wie wirkungsvoll der Granatapfel Krankheiten vorbeugen und diese gar heilen kann. Hier erweist sich der Granatapfel als Multitalent und wirkt gleich multifaktoriell:

- Senkung des Cholesterinspiegels: ??ber die Wirkung auf den Fettstoffwechsel k??nnen die im Granatapfel enthaltenen Polyphenole den  Cholesterinspiegel positiv beeinflussen, indem sie das schlechte Cholesterin (LDL) stark senken und das gute signifikant erh??hen (mehr dazu siehe unter Punkt ???Studien???).
`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Antithrombotische Wirkung: Verklumpte Blutpl??ttchen verdicken unser Blut, f??hren zu Bluthochdruck und k??nnen im weiteren Verlauf Schlaganfall und Herzinfarkt hervorrufen. Die im Granatapfel enthaltenen Polyphenole wirken antithrombotisch der Verklumpung der Blutpl??ttchen entgegen.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Blutdrucksenkende Wirkung: Wieder sind es die Polyphenole im Granatapfel, die in Studien eine signifikante Blutdrucksenkung unter Beweis stellen konnten (siehe Punkt ???Studien???).

Durchblutungsf??rdernde Wirkung: Die Myokarddurchblutung erh??ht sich mit dem Konsum des Granatapfelsaftes. Antiarteriosklerotische Wirkung: Durch die Hemmung der

Schaumzellbildung, die antientz??ndliche Wirkung und die Senkung der Cholesterinoxidation wirkt der Granatapfel Gef????verkalkung = Arteriosklerose optimal der entgegen.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Schutz gegen Hirnsch??den und Schlaganfall

Studien aus dem Jahre 2005 konnten an M??usen einen Schutz gegen??ber Hirnsch??den sowie Schlaganfall nachweisen, die infolge von Sauerstoffmangel auftreten. Die M??usejungen der mit Granatapfelsaft gef??tterten M??use wiesen 60 % weniger Hirnsch??den bei ihrer Geburt auf als die Kontrollgruppe.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf die Lunge 

Die im Granatapfel befindliche Ellags??ure entfaltet ihre Wirkung direkt in den Bronchien der Lunge. Dort sammelt sich die Ellags??ure neben der Atemluft an und neutralisiert als wirksames Antioxidans erfolgreich sch??dliche Luftbestandteile, wie sie aufgrund der Luftverunreinigung zustande kommen. Des Weiteren wirken die Polyphenole gegen Viren und Bakterien und so auf die Gesundheit der Bronchien und der gesamten Lunge ein.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf den Magen-Darm-Trakt

Die Polyphenole des Granatapfels entfalten bereits im Magen-Darm-Trakt ihre positive Wirkung. Dadurch, dass die Polyphenole aufgrund ihrer molekularen Struktur nicht alle den Darm ins Blut verlassen k??nnen, wirken sie innerhalb des Darms umso l??nger. Hier unterst??tzen sie den Organismus dabei, die gesunde Darmflora zu erhalten, indem sie sch??dliche Bakterien und krankmachende Viren abt??ten.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf Hirn und Nerven

In entsprechenden Studien konnte nachgewiesen werden, dass die im Granatapfel befindlichen Flavonoide die Hirnleistung verbessern k??nnen. Die Phenols??uren des Granatapfels sch??tzen die K??rpernerven vor den zerst??rerischen Abbauprozessen, die durch die freien Radikale entstehen.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf die Haut

Auch im Falle der Hautalterung schlagen die freien Radikale als Hauptursache f??r Alterungsprozesse gnadenlos zu. ???Kosmetik??? sowohl von innen als auch von au??en tut not, um vorzeitiger Hautalterung vorzubeugen! Hier k??nnen die Antioxidantien des Granatapfels ??ber den Verzehr innerlich die inneren Hautschichten und ??u??erlich in Form von Granatapfel-Cremes und Lotions die ??u??ere Hautschicht vor Angriffen der freien Radikale sch??tzen.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung auf Leber und Bauchspeicheldr??se

In der Leber k??nnen die Polyphenole diejenigen Enzyme, die f??r die Entgiftung zust??ndig sind, f??rdern. Des Weiteren sch??tzen sie als Antioxidantien die Leber, die w??hrend der Entgiftung ebenfalls freie Radikale freisetzt. Die Ellags??ure aus dem Granatapfel kann auch die Bauchspeicheldr??se sch??tzen, indem sie deren Entz??ndung vorbeugt.`,
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
Granatapfelsaft erh??ht die Herzdurchblutung

240 ml Granatapfelsaft aus einem Konzentrat, getrunken ??ber einen Zeitraum von drei Monaten, konnte in einer im Journal of Cardiology ver??ffentlichten Studie an 45 Patienten mit koronaren Herzerkrankungen, die Durchblutung des Herzmuskels in der Myokardszintigraphie unter Belastung um 17 % verbessern und die Angina Pectoris-Anf??lle halbieren. In der Kontrollgruppe (die keinen Granatapfelsaft trank) verschlechterte sich diese w??hrenddessen um 18 %.`,
    },
    {
        usefulInformationImageId: images_granatapfel,
        quelleId: "3",
        afflinksId: afflinks.granatapfel
        ,
        text: `
Wirkung des Granatapfelsaftes gegen Bluthochdruck (Hypertonie)

??ber die Regulierung des ACE-Enzyms (entspricht dem Prinzip der synthetischen ACE-Hemmer, nur ohne Nebenwirkungen) kann der Bluthochdruck bereits nach zwei Wochen um 5 % und nach einem Jahr um 21 % gesenkt werden ??? und dies bei einem t??glichen Konsum von 50 ml Granatapfelkonzentrat.`,
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Alles begann mit zuf??lligen Beobachtungen der Grapefruitkerne, als 1980 ein Hobbyg??rtner die erstaunliche Entdeckung machte, dass Grapefruitkerne, im Gegensatz zu allen anderen pflanzlichen Stoffen, auf dem Komposthaufen kaum verrotteten. Es war wohl ein reiner Zufall, dass dieser Hobby-G??rtner namens Dr. Jacob Harich in seinem eigentlichen Beruf Arzt mit Fachgebiet ???Immunologie??? war, was ihn dazu veranlasste, sich dieses unerkl??rlichen Ph??nomens anzunehmen.

Sehr schnell wurde ihm klar, dass die Grapefruitkerne dieses Ph??nomen offensichtlich einem potenten Schutzmechanismus zu verdanken haben, der die biologische Zersetzung sichert. Sollte diese Eigenschaft mit der oralen Aufnahme des Grapefruitkernextraktes auch auf den Menschen zu ??bertragen sein und den konventionellen 
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Der Grapefruitkernextrakt ist ein hochkonzentrierter, rein pflanzlicher Extrakt, der aus den Schalen und Kernen der Grapefruit gewonnen wird. Seine antimikrobiellen Eigenschaften k??nnen sehr wirkungsvoll f??r die unterschiedlichsten Anwendungen eingesetzt werden.

Kerne und Schalen werden getrocknet und zu feinem Pulver verarbeitet, mit gereinigtem Wasser verd??nnt und destilliert. Bei niedrigen Temperaturen entsteht aus der destillierten Masse ein reines konzentriertes Pulver (Citricidal??), das dann in pflanzlichem Glycerin aufgel??st wird.

Die Hauptbestandteile des Grapefruitkernextrakts sind Citricidal?? und Glycerin, Ascorbins??ure (Vitamin C), Bioflavonide, Vitamine, Aminos??uren, Fetts??uren etc. Je h??her der Gehalt an Citricidal?? ist, desto konzentrierter ist der f??r Menschen, Tiere und Pflanzen v??llig ungiftige Extrakt.
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Es ist das Zusammenspiel von einzigartig aufeinander eingespielten Wirkstoffen, die dem Grapefruitkern diese ph??nomenalen Eigenschaften im Kampf gegen Parasiten verleihen. Er verf??gt ??ber eine Anzahl sehr wirksamer Schutzstoffe, zu denen Glykoside, Limonoide und Flavonoide z??hlen:

- Hesperidin
- Naringin
- Limonin
- Rutin
- Quercetin
- Kaempferol
- Poncirin

Die eben aufgef??hrten Flavonoide geh??ren zu einer Pflanzenstoff-Gruppe, die nicht selten ??ber heilende Wirkungen verf??gen. Sie st??rken unsere Immunabwehr, indem sie unser Immunsystem durch den Darm stimulieren, was zu einer vermehrten Produktion von Antik??rpern f??hrt, die in der Folge den Kampf mit Bakterien, Viren und Pilzen erfolgreich aufnehmen. Das Kaempferol vermag zus??tzlich das Wachstum von bestimmten Bakterien, Viren und Pilzen direkt zu hemmen.
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Limonoide verleihen den Zitrusfr??chten den bitteren Geschmack und unterbinden bei Parasiten die Nahrungsaufnahme und damit deren Wachstum und Vermehrung.
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextraktwirkung

Die breit gef??cherte Wirkung des Grapefruitkernextrakts erstaunt viele Forscher in aller Welt; sie erstreckt sich ??ber s??mtliche Bereiche der Parasitenbek??mpfung, beginnt bei Bakterien ??ber Viren, Pilze und sonstige Parasiten, die uns Menschen (und unseren Tieren) das Leben schwer machen.

Man geht davon aus, dass der Grapefruitkernextrakt seine Wirkung innerhalb der cytoplasmischen Membran der Mikroorganismen entfaltet. Dabei sollen nach Annahme der Wissenschaftler die Wirkstoffe zu einer Desorganisation der cytoplasmischen Membran f??hren, wodurch die Aufnahme von Aminos??uren verhindert wird, was dem Aushungern des Parasiten gleichkommt.
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Die Aufnahme von Grapefruitkernextrakt kann dabei je nach Anwendungsbereich sowohl innerlich als auch ??u??erlich erfolgen. Studien konnten aufzeigen, dass der Grapefruitkernextrakt die F??higkeit besitzt, ??ber 800 verschiedene Bakterien und Viren zu vernichten.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Bakterienabt??tende Wirkung

Die antiseptische und bakterizide Wirkung des Grapefruitkernextraktes pr??destiniert ihn zu einem nat??rlichen Desinfektionsmittel bei allen Infektionserkrankungen, entz??ndlichen Prozessen und Hautunreinheiten. Studien konnten beweisen, dass der Grapefruitkernextrakt bereits bei einem Verd??nnungsverh??ltnis von 1:1000 seine antibakterielle Wirkung entfaltet. W??hrend Antibiotika nicht zwischen guten und schlechten Bakterien (z. B. den lebensnotwendigen Bakterien in der Darmflora) unterscheiden k??nnen, kommt es bei der Anwendung des Grapefruitkernextraktes bei normaler Dosierung zu keiner Zerst??rung der positiven Darmflorabakterien.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Pilzabt??tende Wirkung

Pilze setzen sich an der Haut an verschiedenen Stellen fest (bekanntestes Beispiel: Fu??pilz), befallen aber auch innere Organe und k??nnen an der betroffenen Stelle einen immensen gesundheitlichen Schaden anrichten. Die fungizide und antimykotische Wirkung des Grapefruchtkernextraktes nimmt es mit allen Sorten von Pilzbefall, der uns das Leben erschwert, auf. ??ber eine exzessive Antibiotikaeinnahme und Einnahme anderer Medikamente wird die Pilzerstellung im K??rper und am K??rper sogar gef??rdert. Laut aktuellen Studien zeigt der Grapefruitkernextrakt bei ??ber 100 verschiedenen Pilzarten Wirkung.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Immunaufbauende Wirkung
Der Grapefruitkernextrakt verf??gt ??ber immunst??rkende Eigenschaften und sch??tzt uns somit vor Angriffen von Krankheitserregern. W??hrend Antibiotika und andere Medikamente als Nebenwirkung das Immunsystem schw??chen, wird unser Immunsystem laut Studien durch die Einnahme des Grapefruitkernextraktes sogar gest??rkt. Der Grapefruitkernextrakt wirkt also in doppelter Hinsicht: Er zerst??rt die unerw??nschten Parasiten und st??rkt dar??ber hinaus das Immunsystem, das auch f??r sich den Kampf gegen Parasiten aufnimmt.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Wann f??ngt der Grapefruitkernextrakt zu wirken an?

Je nach Erkrankung und Schweregrad kann es besonders bei inneren Pilzerkrankungen sowie bei langwierigen und chronischen Erkrankungen mehrere Wochen bis Monate dauern, bis sich der erw??nschte Erfolg einstellt. Wie f??r alle Naturheilmethoden hei??t es also auch beim Grapefruitkernextrakt, Geduld zu bewahren und nicht zu fr??h aufzugeben.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grundregel 1:

Eine 2- bis 3-malige t??gliche Einnahme von 3???15 Tropfen, die es langsam zu steigern gilt, wobei die H??chstdosis nach einer Woche erreicht sein sollte. Diese schrittweise Steigerung ist vor allem dann vonn??ten, wenn ein Verdacht auf Darmpilze (Candida albicans) besteht. Dies ist deshalb so wichtig, weil die genannten Bakterien beim pl??tzlichen Absterben durch den Grapefruitkernextrakt zu Kopfschmerzen und Benommenheit f??hren k??nnen, was auch als ???Herxheimer Reaktion??? bezeichnet wird.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grundregel 2:

Pro 10 kg K??rpergewicht gelten 5 Tropfen als Tagesdosis (in besonderen Ausnahmef??llen kann diese Dosis auch verdoppelt werden).  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grundregel 3:

rapefruitkernextrakt wird in jedem Fall verd??nnt eingenommen, vorzugsweise in einem 200 ml Glas mit Wasser oder Fruchtsaft darin.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Bronchitis

Bronchitis basiert auf der Infektion der Atemwege, hier kann Grapefruitkernextrakt gute Hilfe leisten. 3 x t??glich eine L??sung von 10 Tropfen Grapefruitkernextrakt in einem Glas Wasser trinken. Zus??tzlich empfiehlt sich die ??u??ere Anwendung in Form von t??glich mehrmaligem Gurgeln (Verd??nnungsverh??ltnis: siehe oben.)

`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Durchfall

Durchfall kann aufgrund von Krankheitserregern im Darm hervorgerufen werden. 5???15 Tropfen Grapefruitkernextrakt in einem Glas Wasser verd??nnen und 3 x t??glich trinken.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Blasenentz??ndung

Die entz??ndungshemmende Wirkung des Grapefruitkernextraktes kann bei Blasenentz??ndung sehr hilfreich sein. Hierzu etwa 10 Tropfen Grapefruitkernextrakt in einem Glas Wasser aufl??sen und 3 x t??glich trinken.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Halsschmerzen und Rachenentz??ndung

Halsschmerzen und Rachenentz??ndung sind fast ausnahmslos auf bakteriellen Befall im Rachenraum zur??ckzuf??hren. Aufgrund seiner antibakteriellen Wirkung ist der Grapefruitkernextrakt pr??destiniert daf??r, hier Abhilfe zu schaffen.

Gurgeln Sie t??glich 4???6 x mit einer Grapefruitkernextrakt-Wasserl??sung (10 Tropfen in einem Glas Wasser verd??nnt).  
`

    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Magendarm-Grippe

Eine Magen-Darm-Grippe wird durch Krankheitserreger verursacht, was den Grapefruitkernextrakt aufgrund seiner antibakteriellen Wirkung als Therapeutikum pr??destiniert. 5???15 Tropfen Grapefruitkernextrakt in einem Glas Wasser verd??nnen und 2???3 x t??glich trinken.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Abszesse und Furunkel

Einige Tropfen des Grapefruitkernextraktes 3 x t??glich in etwas Wasser verd??nnt auf die betroffene Stelle auftragen. Bei stark infizierten Abszessen ist es m??glich, eine Mullbinde in der L??sung zu tr??nken und eine Kompresse aufzulegen (Dauer 8???12 Stunden). Unterst??tzend sollte man den Grapefruitkernextrakt 2???3 x t??glich innerlich einnehmen (5???15 Tropfen in einem Glas Wasser).  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Parodontose

1???3 Tropfen Grapefruitkernextrakt auf die Zahnb??rste auftragen und 3 x t??glich damit die Z??hne ausgiebig putzen. Unterst??tzend kann man eine Mundsp??lung mit GKE durchf??hren.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei G??rtelrose

Grapefruitkern??l mehrmals t??glich auf die betroffene Stelle auftragen. Innerlich kann man den Heilungsprozess unterst??tzen, indem man 5???15 Tropfen Grapefruitkern??l in einem Glas Wasser verd??nnt und diese L??sung 2???3 x t??glich trinkt.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Fu??pilz

Fu??pilz f??hlt sich wohl und gedeiht besonders gut im feuchten, warmen, dunklen Milieu; ideale Bedingungen bieten hierzu die F????e. Aufgrund seiner pilzabt??tenden Wirkung eignet sich hier Grapefruitkernextrakt daher bestens zur ??u??eren Anwendung gegen Fu??pilz. Vermischen Sie 100 ml Alkohol mit 60???80 Tropfen Grapefruitkernextrakt und betupfen Sie 2 x t??glich damit die Fu??pilzstellen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt bei Ohrenschmerzen und Mittelohrentz??ndung

Sehr h??ufig basieren Ohrenschmerzen auf entz??ndlichen Prozessen; hier kann die Behandlung mit Grapefruitkernextrakt Abhilfe verschaffen. 10 Tropfen Grapefruitkernextrakt mit Bio-Jojoba-??l oder Weizenkeim??l in den Geh??rgang tr??ufeln und anschlie??end mit etwas Watte verschlie??en, um das Auslaufen zu verhindern.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Grapefruitkernextrakt gegen Mundgeruch

Mundgeruch ist zumeist auf eine Bakterienansiedlung im Mundraum und besonders auf der Zunge zur??ckzuf??hren. Ca. 10 Tropfen Grapefruitkernextrakt in einem Glas Wasser aufl??sen und mehrmals t??glich damit gurgeln.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Einnahme von Grapefruitkernextrakt zur Pr??vention gegen Grippe

Wer f??r Infekte wie Grippe anf??llig ist, kann vorbeugend t??glich 3???5 Tropfen einnehmen; hierzu bietet sich Orangensaft bestens an. Als pr??ventive Entgiftungsma??nahme hat sich 1???2 x j??hrlich eine kurweise Anwendung von Grapefruitkernextrakt bew??hrt.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Schwei??f????e

In einem gew??hnlichen Eierbecher 10 Tropfen GKE vermischen und morgens und abends die betroffene Stelle mit dem Grapefruitkernextrakt einreiben.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Schwei??geruch

Etwa 15???20 Tropfen Grapefruitkernextrakt in eine Tasse Wasser geben und den Inhalt in eine Pumpspr??hflasche einf??llen, kr??ftig sch??tteln und unter den Armen spr??hen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Desinfektion von Nahrungsmitteln

Obst, Gem??se, Salate, Fleisch oder Fisch f??r einige Minuten in einem Grapefruitkernextrakt-Wassergemisch in einem Verh??ltnis von 20 Tropfen GKE auf 1 Liter Wasser einlegen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Kann der Grapefruitkernextrakt Antibiotika ersetzen?

Der Grapefruitkernextrakt ist in den meisten F??llen eine nebenwirkungsfreie und zugleich sehr effiziente Alternative zu Antibiotika. W??hrend Antibiotika lediglich Bakterien bek??mpfen und auch dabei sch??dliche nicht von den ???guten??? Bakterien unterscheiden (Darmflora-Bakterien), nimmt der Grapefruitkernextrakt sehr erfolgreich den Kampf gegen s??mtliche Krankheitserreger auf und verschont die ???guten??? Bakterien in unserem K??rper.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Wirkt Grapefruitkernextrakt auch gegen Umweltgifte?

Laut der Zeitschrift Fernsehwoche wirkt der Grapefruitkernextrakt auch gegen Schadstoffe wie Amalgam, Ozon, Benzol, Formaldehyd, Blei und Cadmium und schwemmt giftige Stoffe aus dem K??rper.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Kann die Einnahme des Grapefruitkernextraktes den K??rper ??bers??uern?

Trotz des ohne Frage sauren Milieus mit einem pH-Wert von 2???3 geh??rt der Grapefruitkernextrakt zu den basischen Nahrungsmitteln. Dies ist dem Gehalt an Bitterstoffen zu verdanken, die die Basenbildung anregen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Was, wenn der Grapefruitkernextrakt nicht wirkt?

Selbstverst??ndlich ist der Grapefruitkernextrakt kein Allheilmittel und in erster Linie auf die Vernichtung von Bakterien, Viren und Pilzen spezialisiert. Wenn der Grapefruitkernextrakt auch hier versagt, kann es verschiedene Gr??nde haben: Es kann die Dosierung zu gering sein oder der Organismus ist mit zu vielen Schlackstoffen und Giften belastet (in diesem Fall w??re zun??chst eine Entschlackungskur angesagt.).  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Kann man den Grapefruitkernextrakt auch w??hrend der Schwangerschaft anwenden? 

Zum Zeitpunkt der Erstellung des Codex Humanus lag weder eine wissenschaftliche Studie zu dieser Frage vor noch ist ein Fall zu Problemen w??hrend der Schwangerschaft bekannt. Im Zweifelsfall sollten Sie aber besser Ihren Arzt fragen.  
`
    },
    {
        usefulInformationImageId: images_gke,
        quelleId: "3",
        afflinksId: afflinks.gke
        ,
        text: `
Wie lange dauert es, bis die Wirkung des Grapefruitkernextrakts eintritt?

Abh??ngig davon, um welche Erkrankung es sich handelt, kann es besonders bei inneren Pilzerkrankungen sowie bei langwierigen und chronischen Erkrankungen mehrere Wochen bis Monate dauern, bis sich der erw??nschte Erfolg einstellt.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Was ist Gr??ner Tee, Gr??ntee oder Green Tea?

Gr??ntee, Gr??ner Tee, Green Tea ??? drei Begriffe die das Gleiche bezeichnen, n??mlich den K??nig unter den uns namentlich bekannten Teesorten, ein regelrechtes Elixier f??r unsere Gesundheit und unser Wohlbefinden. Doch was ist das Besondere am Gr??nen Tee, was macht den Gr??ntee aus? Nicht etwa der Geschmack oder das Aroma sind es, sondern die sagenhaften gesundheitlichen Vorz??ge und die Heilungskr??fte, die es gar mit t??dlichen Erkrankungen aufnehmen k??nnen, machen den Gr??ntee auch f??r uns Mitteleurop??er interessant.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Die gesundheitlichen Vorz??ge des Gr??nen Tees basieren dabei aber nicht etwa auf Mythen, Sagen und Vermutungen, vielmehr ist der Gr??ne Tee der wohl am intensivsten untersuchte Tee ??berhaupt, und viele Studien attestieren ihm wohltuende Wirkungen bis hin zur kompletten Heilung bei Erkrankungen wie   Arteriosklerose, Herzschw??che, Bluthochdruck (Hypertonie), Erk??ltungskrankheiten, Gicht, Pilzen, Krebserkrankungen, Multipler Sklerose, Gastritis oder etwaigen Entz??ndungsprozessen sowie Sodbrennen und viele andere mehr. Und als ob dies nicht schon reichte, beschr??nkt sich der Gr??ne Tee nicht nur auf gesundheitliche Vorz??ge, sondern verspricht neben der Gesunderhaltung eine Lebensverl??ngerung und gar optische Versch??nerung. Sch??n, gesund und lange lebend ??? ein Traum der Menschheit, den uns der Gr??ne Tee erf??llt?
`

    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
In Deutschland werden etwa 400 Tonnen Gr??ner Tee getrunken, eine unangemessen geringe Zahl angesichts der 16 500 Tonnen des Schwarzen Tees, die konsumiert werden ??? wir sind zuversichtlich und fest entschlossen, dazu beizutragen, dies mit dem Ihnen hier vorliegenden Codex Humanus zugunsten des Gr??nen Tees zu ??ndern. Begleiten Sie uns auf eine erkenntnisreiche Reise in das Innere des Gr??nen Tees mit all seinen Vorz??gen, die auch Ihr Leben vitaler, l??nger und lebenswerter werden lassen k??nnen ...  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Es wird Sie vielleicht erstaunen zu h??ren, dass ein wesentlicher Unterschied des Gr??nen Tees zum Schwarzen Tee in der Herstellung begr??ndet ist und man grunds??tzlich beide Teesorten aus ein und demselben Teeblatt herstellen kann. Bekannt ist, dass der Tee urspr??nglich gr??n war und in dieser bereits vor Tausenden von Jahren zu Heilzwecken verwendet wurde. Einer Sage nach soll der Gr??ne Tee als Getr??nk seine Anwendung rund 2700 Jahre v. Chr. gefunden haben, als der chinesische Kaiser Shen Nong Wasser in einem Topf abkochte und zuf??llig einige der Teebl??tter hineinfielen. Dem Kaiser schmeckte dieses neuartige Gebr??u, und es galt fortan als sein Lieblingsgetr??nk.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Gr??ner Tee, Gr??ntee, Green Tea: drei Namen f??r 1000 Sorten Um es kurz und schmerzlos zu machen: DEN Gr??nen Tee gibt es nicht, sondern viele verschiedene, gesunde Tees, die aufgrund eines ganz bestimmten, schonenden Herstellungsverfahrens ihrer gesundheitlichen Vorz??ge nicht beraubt werden (siehe Punkt ???Gr??nteeherstellung???). Die nat??rliche gr??ne Blattfarbe, die durch das schonende Verfahren ebenfalls erhalten bleibt, verleiht dem Gr??ntee seinen Namen. Genauer gesagt sind es aber mehr als 1000 verschiedene Sorten, die dem Gr??nen Tee zugeordnet werden.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Japanischer Gr??ntee vs. Chinesischer Gr??ntee

Es verwundert an dieser Stelle sicherlich nicht, dass die Hauptlieferanten des Gr??nen Tees asiatischer Herkunft sind, konkret China und Japan. W??hrend in Japan ausschlie??lich Gr??ner Tee hergestellt wird, hat dieser in China einen Anteil von 80 % der landesweiten Teeherstellung. In weitaus geringerem Ma??e wird Gr??ntee auch in Sri Lanka und Indien angebaut. Die Unterschiede sind dabei mehr geschmacklicher Natur: So lieben es die Chinesen traditionellerweise eher herb-rauchig und blumig, w??hrend die Japaner den frischen, grasigen Nachgeschmack sch??tzen. Der Geschmack und das Aroma werden weitgehend durch die Verarbeitung, aber auch durch das Anbauland (Klima, Bodenbeschaffenheit) und die Lagerung sowie den Transport bestimmt.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Die Chinesen verleihen ihrem Greentea sein herb-rauchiges Aroma, indem sie die Teebl??tter in Pfannen anr??sten; den blumigen Geschmack erh??lt der Gr??ntee ??ber Jasminbl??ten, die ihm beigef??gt werden. Und so ist der Jasmintee die bekannteste chinesische und eine weltweit sehr beliebte Gr??nteesorte. Die Japaner hingegen behandeln den Gr??ntee f??r ihr erw??nschtes frisch- grasiges Aroma mit Wasserdampf. Zu den bekannten japanischen Gr??ntee- Sorten z??hlen Sencha, Genmaicha, Bancha, Gyokuro und Kukicha:  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Japanische Gr??ntee-Sorten
- Gabalong
- Bancha
- Kabusecha
- Fukamushi-Cha
- Genmaicha (mit ger??steten Reisk??rnern angereicherter und dadurch aromatisierter Tee)
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
Chinesische Gr??ntee-Sorten
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
- Gr??ner Tee belebt auf die sanfte Art, h??lt Geist und K??rper wach, st??rkt die Konzentration,
- f??rdert die Durchblutung,
- steigert das Wohlbefinden,
- normalisiert den Blutdruck,  
- verbessert die Sauerstoffaufnahme und regt die Atmung an,
- st??rkt das Immunsystem,
- regt den Stoffwechsel an und f??rdert die Fettverbrennung,
- f??rdert die Selbstheilungskr??fte,
- f??rdert die Verdauung,
- beruhigt den Magen,
- entspannt K??rper und Geist,
- hilft bei der Entgiftung des Organismus,
- ist hautreinigend,
- verbessert das Sehverm??gen,
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Gr??ntee  
- beugt Gelenkschmerzen und Entz??ndungen vor,
- beugt dem Knochenabbau (Osteoporose) vor,
- hilft gegen Gicht,
- hilft bei chronischer M??digkeit,
- hilft bei Rachenentz??ndung,
- sch??tzt bei Diabetes,
- hilft bei Appetitlosigkeit,
- hilft bei Sodbrennen,
- wirkt bei Durchfall,
- wirkt Erk??ltungskrankheiten entgegen,  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Gr??ntee
- hilft bei Fu??pilz und anderen Pilzarten,
- hilft gegen Mundgeruch,
- unterst??tzt die Fettverbrennung und hilft beim Abnehmen,
- wirkt positiv auf Multiple Sklerose ein,
- sch??tzt vor Viren,
- wirkt positiv bei HIV/AIDS,
- hilft bei Alzheimer,
- hilft bei Parkinson,
- unterst??tzt den Urinfluss,
- hilft bei Sonnenbrand,
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
In einer Studie an 1900 Patienten, die einen akuten Myokardinfarkt erlitten haben, war bei denjenigen Patienten, die im Jahr vor dem Infarkt bis zu 14 Tassen Tee in der Woche tranken, die Sterberate um 20 % niedriger; bei mehr als 14 Tassen in der Woche sank die Sterberate sogar um die H??lfte. Yang und Koo zeigten auf, dass die im Gr??ntee enthaltenen Catechine der sch??dlichen LDL-Oxidation in Endothelzellen vorbeugen. In einer weiteren Studie konnten japanische Forscher unter Beweis stellen, dass das im Gr??ntee enthaltene EGCG die kollageninduzierte Thrombozytenaggregation (Verklumpung von Blut) komplett unterdr??ckt.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
W??hrend die H??lfte aller Todesf??lle in den Industriel??ndern auf Herzkreislauferkrankungen zur??ckzuf??hren sind, ist die zweith??ufigste Ursache der Krebs. Und so erkrankt in Deutschland heutzutage jeder Dritte 691 an Krebs und jeder Vierte verstirbt daran.  Japanische Forscher wollen erstmals den biochemischen Mechanismus beobachtet haben, der die krebshemmende Wirkung erkl??rt: Demnach heftet sich ein Inhaltsstoff des Gr??nen Tees gezielt an Tumorzellen und bremst dabei das Krebswachstum. Diese Andockstelle sei f??r die Ausbildung von Zellkontakten wichtig und komme auf verschiedenen Tumorzellen vor. Der Aussage nach soll der Genuss von lediglich zwei bis vier Tassen Gr??nen Tees t??glich diesen sch??tzenden Effekt ausl??sen. 
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Wirkung des Gr??ntees bei Alzheimer und Parkinson

Alzheimer und Parkinson z??hlen zu den neurodegenerativen Erkrankungen, die durch die Bildung von Amyloidfibrillen verursacht werden. Es wurde festgestellt, dass die im Gr??ntee enthaltene Substanz EGCG die Bildung von Amyloidfibrillen ??ber die Bindung an die nativen, noch ungefalteten Polypeptidketten verhindert. Dadurch werden statt der toxischen Amyloidfibrillen harmlose Oligomere gebildet.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Wirkung des Gr??ntees bei Zahnfleischerkrankungen
Das im Gr??ntee enthaltene Catechin verringert Zahnfleischerkrankungen, wie etwa Parodontose. 

Gr??ner Tee beugt Karies vor
Die im Gr??nen Tee enthaltene EGCG und ECG hemmen das Wachstum von Kariesbakterien, den Streptokokken. 706  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
EGCG (Epigallocatechin-Gallat)

EGCG scheint der wirksamste Inhaltsstoff im Gr??nen Tee zu sein, der schon fast wundersame Eigenschaften in der Pr??vention und der Behandlung zahlreicher Erkrankungen zu haben scheint. Diesem Inhaltsstoff gilt daher eine besondere Aufmerksamkeit.  

[...]
Das EGCG verf??gt dar??ber hinaus ??ber bluthemmende Eigenschaften, wie wir es vom Aspirin kennen. 713 Dies verhindert Gef????verschl??sse und wirkt damit Herzkreislauferkrankungen entgegen, unter anderem Herzinfarkt, Hirnschlag und Angina Pectoris.
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Bitterstoffe im Tee

Die Bitterstoffe im Gr??nen Tee sensibilisieren unsere Geschmacksnerven und trainieren unseren Geschmack, wieder auf urnat??rliche Lebensmittel entsprechend zu reagieren. So ist bekannt, dass Menschen in den Industriestaaten aufgrund der Industrialisierung der Nahrung weniger sensibilisiert und schlicht anders auf Geschmack reagieren. Die bitteren Stoffe im Gr??ntee k??nnen hier den nat??rlichen Geschmacksinn wiederherstellen.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Das Koffein im Gr??nen Tee wird schrittweise abgegeben, was pl??tzliche Koffein-Peaks verhindert und eine im Vergleich zum Kaffee oder Cola milde, daf??r aber langanhaltende Anregung gew??hrleistet. F??r die schrittweise Dosierung sind dabei die Gerbstoffe im Gr??ntee verantwortlich, die das Alkaloid, das f??r die aufputschende Wirkung verantwortlich ist, langsam und wohl dosiert in den Blutkreislauf entlassen.  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Gr??ner Tee bei Krebs

Krebs fordert das Leben jedes vierten Menschen, und so sollte man unbedingt pr??ventiv alle Ma??nahmen ergreifen, die der Krebsentstehung nebenwirkungsfrei trotzen. Wenn man bereits an Krebs erkrankt ist, ist es umso wichtiger, Ma??nahmen zu ergreifen, die nebenwirkungsfrei und nachweislich (siehe Punkt ???Studien???) dem Krebs entgegenwirken. Gr??ner Tee scheint auf vielfache Art vorbeugend und heilend gegen Krebs zu wirken. Der Biostoff EGCG kann vor Lungenkrebs sch??tzen, die Flavonoide k??nnen das Magenkrebs-, Dickdarmkrebs- und Brustkrebsrisiko mindern, die Saponine wirken Darmtumoren entgegen. Trinken Sie t??glich mindestens 1 Liter Gr??ntee, verteilt auf den Tag (z. B. zu jeder Mahlzeit je ein 300 ml K??nnchen). Etwa 5 min ziehen lassen, nicht mit Zucker s????en (Krebs liebt Zucker).  
`
    },
    {
        usefulInformationImageId: images_greentea,
        quelleId: "3",
        afflinksId: afflinks.greentea,
        text: `
Gr??ner Tee gegen Mundgeruch

Der Mundgeruch ist weitestgehend auf Bakterien zur??ckzuf??hren, die sich auf der Zunge ablagern. Da Gr??ntee antibakteriell wirkt, verhindert er die Vermehrung von Mikroorganismen im Mundbereich, kann den S??uregrad im Magen verringern sowie F??ulnisgasen entgegenwirken, die ??ber die Atemluft ausgeatmet ebenfalls zu Mundgeruch f??hren. Gegen Mundgeruch empfehlen sich sowohl Mundsp??lungen (2???3 min) mit Gr??ntee als auch das obligatorische Teetrinken zu den Mahlzeiten.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold - das wichtigste Elixier auf Erden? ???Unter allen Elixieren ist das Gold das h??chste und das wichtigste f??r uns. Das Gold kann den K??rper unzerbrechlich erhalten. [...] Trinkbares Gold heilt alle Krankheiten, es erneuert und stellt wieder her.??? (Paracelsus)

Was veranlasste Paracelsus, den Urvater der Heilkunde, dazu, ausgerechnet das Edelmetall Gold, das er als ein Allround-Heilmittel ansah, auf den h??chsten Sockel ??ber s??mtliche Naturheilmittel zu erheben?  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Welches unsch??tzbare Geschenk von ???Mutter Natur??? wird uns hier wohl seitens profitorientierter Institutionen und der Schulmedizin verheimlicht, das bereits die alten ??gypter, R??mer und Griechen, die chinesischen und indischen ??rzte anpriesen ??? noch lange vor Paracelsus und Avicenna, der Heiligen Hildegard von Bingen und schlie??lich im 19. Jahrhunderts sogar vor dem Bakteriologen Robert Koch?

Es handelt sich hierbei um Erkenntnisse, die von der modernen Forschung untermauert werden, jedoch wenig Beachtung seitens des etablierten medizinischen Establishments erfahren.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Der moderne Mensch d??rfte mit dem Edelmetall Gold noch am ehesten Schmuck, M??nzen, Luxus und in den letzten Jahren vor allem eine stabile Wertanlage f??r die Zukunft assoziieren. Dass es sich bei Gold um sehr viel mehr, n??mlich in erster Linie um ein unglaublich potentes, geradezu fundamentales Lebenselixier und einen Jungbrunnen per excellence handelt, der in unserem K??rper als Spurenelement (aus gutem Grund besonders stark vertreten im Hirn) nat??rlicherweise vorkommt und eine ph??nomenale, ganzheitliche Wirkung auf unsere Gesundheit, unsere Lebensenergie, Jugendlichkeit und sogar unseren Geist aus??bt, d??rfte den wenigsten bekannt sein.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Fernab jeglichen Esoterik-Gedanken handelt es sich beim kolloidalen Gold (auch als Nanogold, Mesogold, Goldkolloid und ???trinkbares Gold??? bezeichnet) wahrhaftig um ein Allround-Elixier einer anderen Dimension, das sowohl auf k??rperlicher als auch auf geistiger und seelischer Ebene ph??nomenale Dinge zu bewerkstelligen vermag.

In Zeiten von Stress, permanenter ??berlastung und Energiemangel ist die ??bergreifende Wirkung von kolloidalem Gold auf alle unsere energetischen Systeme f??r den modernen Menschen von unsch??tzbarer Bedeutung.

Aufgrund seiner elektrischen und magnetischen Felder vermag kolloidales Gold energetische Blockaden zu l??sen ??? unser K??rper, Geist und die Seele werden dadurch zur??ck in ihre vorgesehenen Schwingungsmuster gebracht, sp??rbar kehren Lebensenergie, Geistesfrische und k??rperliche Kraft zur??ck, w??hrend sich kleinere Wehwehchen und [...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wom??glich handelt es sich bei Gold sogar um das ??lteste Heilmittel der Menschheitsgeschichte ??berhaupt. So wurde Gold laut den ??ltesten medizinischen Aufzeichnungen bereits vor 5000 Jahren von ??gyptern angewandt, um den Energiefluss und die Lebenskraft zu st??rken sowie zur seelischen und k??rperlichen Reinigung.

Als unverzichtbare Arznei findet Gold seit Jahrtausenden Anwendung innerhalb der TCM (Traditionelle Chinesische Medizin) und dem indischen Ayurveda. Beide medizinischen Kulturen verwenden Gold nicht nur, um die Gesundheit zu st??rken bzw. wiederherzustellen, sondern ebenfalls, um Geistesfrische, Verj??ngung und Langlebigkeit zu erzielen.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Bei Schlagw??rtern wie ?????berlieferung??? und ???Tradition??? schrillen bei Skeptikern s??mtliche Alarmglocken. Erfreulicherweise m??ssen wir uns im Falle von Gold jedoch nicht mehr ausschlie??lich auf alte medizinische Schriften, ??berlieferungen und schamanische Intuition verlassen. Wie Sie im Weiteren lesen werden, brachte j??ngst die moderne Forschung mit ihren innovativen Mess- und Analyseverfahren Unglaubliches ans Tageslicht und best??tigt somit den jahrtausendelangen Einsatz des Goldes innerhalb der traditionellen Medizin.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold ??? die trinkbare Sonnenenergie

Was w??re unser Leben ohne Energie, und was w??re die Lebensenergie ohne Sonnenlicht? Gold wird traditionellerweise stets mit der Sonne in Verbindung gebracht. So wird innerhalb der TCM (Traditionelle Chinesische Medizin) dem Gold aufgrund der N??he zur Sonne eine zentrale Lebensenergie zugeschrieben, die daher dem m??nnliche Yang-Prinzip entspricht. Auch dies ist evtl. ein wichtiger Grund f??r den seit Menschengedenken ungebrochen hohen Wert des Goldes, dessen Eigenschaften man mit Lebenskraft, Wachstum und Heilung in Verbindung bringt. Und tats??chlich berichten   Anwender von kolloidalem Gold nach kurzer, regelm????iger Einnahme bereits von einer gesteigerten Lebensenergie, Lebensfreude, inneren Ausgeglichenheit und Kreativit??t, w??hrend zeitgleich Stress und Depressionen verschwinden ??? Gef??hle und Erfahrungen.[...]
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold so nat??rlich wie unser Organismus selbst Als Spurenelement kommt Gold nat??rlicherweise in unserem Organismus vor, besonders im Gehirn, wo es wichtige Aufgaben erf??llt. Auch in unserer Nahrung findet sich Gold wieder, so in M??hren, Chicor??e, besonders reichlich in Schalentieren (Krebsen, Muscheln, Krabben). Das Meerwasser enth??lt ??brigens 5???250 Gewichtsteile Gold auf 100 Mio. Teile Wasser. ??brigens: Dass alles Leben aus dem Meer stammt, ist im Grund nichts Neues. 

W??hrend kolloidales Silber (dem man die N??he zum Mond und damit das weibliche Yin-Prinzip zuweist) aktuell eine regelrechten Renaissance erlebt und sich erfreulicherweise Millionen von Menschen weltweit wieder die spektakul??re Wirkung des fast schon in Vergessenheit geratenen Elixiers tagt??glich zunutze machen, ist hierzulande dessen ???gro??er Bruder???, das kolloidale Gold, zwar [...]
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung kolloidales Gold

Bevor wir im weiteren Verlauf die spezielle Wirkung von kolloidalem Gold explizit f??r einzelne Erkrankungen durchleuchten, ist es sehr sinnvoll, zun??chst die allgemeine Wirkung von kolloidalem Gold zu kennen. Kl??ren wir aber zun??chst einmal den Begriff ???kolloidal???.

Unter dem Begriff ???kolloidal??? versteht man die zweitkleinste Einheit der Materie, direkt nach Atom. Es ist zugleich die kleinstm??gliche Form, in die eine Materie (K??rper, Material) zerlegt werden kann, ohne dabei seine urspr??nglichen Eigenschaften einzub????en.

Die kolloidale Form ist im ??brigen genauso wenig fremd f??r unseren K??rper wie das Gold selbst. Blut und Lymphe, unsere wichtigsten Lebenss??fte, sind nichts anderes als Kolloide.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
In dieser mikroskopisch kleinen und dennoch voll funktionierenden Form wird es dem Gold faktisch erm??glicht, unseren K??rper bis in die entlegensten und kleinsten Winkel zu durchdringen, um dort die erw??nschte Wirkung zu erzielen. Auf diese Weise erzielt das kolloidale Gold eine un??bertreffbare   Wirkung sogar auf das f??r die wenigsten Vitalstoffe erreichbare Hirn, indem es die Blut-Hirn-Schranke ??berwindet und unsere Denkprozesse, unsere Konzentration, aber auch die motorischen F??higkeiten sp??rbar und ??brigens auch messbar verbessert.

Mit einem Durchmesser von lediglich nur 0,126 nm befinden sich die Goldkolloide im Nanobereich (griechisch ???Nannos??? = Zwerg) und sind in etwa 2000-mal kleiner als das kleinste bekannte Bakterium. Dies f??hrt unmittelbar dazu, dass das Gold selbst in K??rperbereichen wirkt, die die Bakterien sch??tzend abweisen, z. B. die besagte Blut-Hirn-Schranke. Aufgrund der mikroskopisch kleinsten [...]

`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold verbessert den Informationsfluss unseres Erbguts um das bis zu 10.000-Fache!

Angesichts dessen ist es nicht ??bertrieben, im Zusammenhang mit den Forschungsergebnissen der Universit??t Basel zum kolloidalen Gold von einer regelrechten Sensation zu sprechen. So gelang es den Forschern der Universit??t Basel 1999 erstmals, die elektrische Leitf??higkeit von DNS-Molek??len zu messen.

Innerhalb dieser Forschung konnte nachgewiesen werden, dass der Informationsfluss der DNS unter der Anwendung von kolloidalem Gold um das bis zu 10.000-Fache verbessert werden konnte.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold erh??ht die Intelligenz um 20 %

Wie im Vorspann bereits geschildert und f??r die meisten Leser wohl nichts Neues, kommunizieren die Nervenzellen im Hirn ??ber elektrische Impulse. Erst ??ber diese Signale werden Informationen im Hirn von einem Neuron zum n??chsten gesendet. Der aufmerksame Leser k??nnte also schlussfolgern, dass eine regelm????ige Einnahme von kolloidalem Gold nicht nur die Weitergabe der Erbinformationen um das Vielfache erh??ht, sondern sich ebenfalls merklich positiv auf s??mtliche K??rperprozesse auswirken sollte, die von elektrischen Impulsen abh??ngen ??? so auch die Hirnleistung. Und das ist tats??chlich so! Innerhalb einer Pilotstudie stieg der

Intelligenzquotient (IQ) der Teilnehmer um sagenhafte 20 % ??? nachgewiesen   ??ber einen IQ-Test, den die Probanden zu Beginn und nach drei Monaten der Goldeinnahme ablegten.`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold wirkt stimmungsaufhellend

Durch L??sung innerlicher Blockaden, Beruhigung des Nervensystems und Aktivierung der inneren Energie sorgt Gold f??r innerliche Entspannung und ein harmonisches Weltbild. Nachweislich stimuliert Gold des Weiteren die Produktion endorphinartiger Hormone, die f??r gute Stimmung und ein harmonisches inneres Gef??hl sorgen.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold erh??ht die Leistungsf??higkeit und Energie

Die sich im Nanobereich befindenden kleinsten Goldpartikel breiten sich im Eiltempo im gesamten Organismus (auch in den Mitochondrien, den sog. Kraftwerken unserer Zellen) aus und bescheren uns einen ungeahnten Energieschub. Aufgrund der so optimierten interzellul??ren Kommunikation erh??ht sich unsere physiologische und geistige Leistungsf??higkeit sowohl sp??rbar als auch messbar.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold erh??ht die Bewegungskoordination

Unsere Bewegungskoordination h??ngt von der nervalen Interaktion zwischen Gro??hirn, R??ckenmark, Bewegungsnerv und schlie??lich Muskelfaser ab. Gesteuert wird diese Kommunikation ??ber elektrische Impulse. Wie wir weiter oben lesen konnten, verf??gt Gold mit ??ber die beste elektrische Leitf??higkeit aller Metalle. Die Einnahme von kolloidalem Gold verst??rkt die elektrischen   Impulse innerhalb der Nervenzellen und damit die intramuskul??re Koordination ??? etwas, von dem jeder Mensch, besonders aber ??ltere Menschen und Leistungssportler profitieren!
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold ??? ein potenter F??nger von freien Radikalen

Die sog. freien Radikale sind entscheidend mitverantwortlich f??r Alterungsprozesse und unz??hlige Erkrankungen, angefangen von ADHS ??ber Herz-Kreislauf-Erkrankungen, Autoimmunerkrankungen z. B. Multipler Sklerose, bis hin zu Krebs. Indem das kolloidale Gold zur Produktion von zwei ??u??erst effektiven Radikalf??ngern (sog. Antioxidantien) beitr??gt, namentlich Glutathion und SOD, sch??tzt es vor unz??hligen Erkrankungen und verlangsamt Alterungsprozesse.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold stimuliert das ???Methusalem-Enzym???

Das Enzym SOD ist unser wichtigstes enzymatisches Antioxidans und hat die Aufgabe, vor allem die f??r uns Menschen gef??hrlichsten Radikale abzuwehren, n??mlich die sog. Superoxide. Nicht umsonst wird das SOD auch als das ???Methusalem-Enzym??? tituliert. Nicht zu untersch??tzen ist auch die Funktion von Gluthation, eines ebenfalls sehr potenten Antioxidans, das au??erdem unseren Organismus von Entz??ndungen und Giften befreit.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold stimuliert das Immunsystem

In mehreren Studien konnte nachgewiesen werden, dass Gold die Fresszellen des Immunsystems (die sog. Makrophagen) stimuliert. Hier agiert Gold aber nicht einfach nur als Stimulator, sondern vielmehr als intelligenter Regulator. Dies hat den Vorteil, dass es zu keinen ??berschie??enden Immunreaktionen , die an sich unangenehme Symptome und Erkrankungen bedingen k??nnen (Allergien, Arthritis u. a.).  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wie bereits Robert Koch 1890 entdeckt hat, k??nnen Tuberkulosebakterien in der unmittelbaren N??he von Gold nicht ??berleben. In einer Studie von 2011 und einer weiteren von 2013 konnte die Wirksamkeit von Gold-Nanopartikeln gegen Salmonellen belegt werden.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Schutz vor Entz??ndungen

Chronische Entz??ndungen sind Symptome zahlreicher Erkrankungen und nicht selten aber leider gleichzeitig Ursachen weiterer entstehender Krankheiten ??? ein Teufelskreis, den es schnellstm??glich zu durchbrechen gilt. Auch beschleunigen Entz??ndungen nachweislich unsere biologische Alterung,   indem sie nicht zuletzt zur Verk??rzung unserer Telomere (der sog. Lebenslichter) beitragen.

Nicht nur im Therapiealltag, sondern ebenfalls in wissenschaftlichen Studien konnte Gold eine ausgesprochen entz??ndungshemmende Wirkung unter Beweis stellen. Die Forscher der Karolinska-Universit??tsklinik in Stockholm (Schweden) konnten j??ngst nachweisen, dass das kolloidale Gold ein Protein namens HMGB 1 stimuliert ??? ein Vorgang, der zum Abbau entz??ndlicher Prozesse beitr??gt.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold repariert unsere DNS

Das gesamte genetische Lebensprogramm einer Zelle ist innerhalb unserer DNS kodiert. In Kooperation mit der RNS steuert die DNS auf Zellebene s??mtliche K??rperabl??ufe, so auch die erforderliche Reparatur von t??glich innerhalb des Zellstoffwechsels anfallenden Zellsch??den. Indem das kolloidale Gold den Informationsfluss unserer DNS (Erbguts) um das 10.000-Fache verbessert, nimmt Gold einen entscheidenden Stellenwert innerhalb der Reparatur der DNS ein. Der K??rper nutzt also die Goldmolek??le zur Reparatur von DNS-Sch??den ??? Fakten, die u. a. von Dr. Gabriel Cousens best??tigt werden.   Nachweislich wird die DNS-Reparatur des Weiteren von dem im kolloidalen Gold enthaltenen Glutathion unterst??tzt.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold aktiviert mit der Zirbeldr??se unser ???drittes Auge???

Die Zirbeldr??se (auch ???Epiphyse??? genannt) ist nicht nur f??r die Steuerung unseres Tag-Nacht-Rhythmus in Verbindung mit der Melatoninproduktion verantwortlich ??? sie kann noch viel mehr! Kennen Sie das Gef??hl, wenn Sie sich beobachtet f??hlen, sich schlagartig umdrehen und tats??chlich jemanden entdecken, der Sie hinterr??cks anstarrt? Dies ist ein Ph??nomen, von dem bereits Platon im Zusammenhang mit dem sog. siebten Sinn sprach. M??ssen wir tats??chlich sehen, h??ren, riechen, schmecken und f??hlen, um die Dinge um uns herum wahrzunehmen? Keineswegs. ???Es gibt eine kleine Dr??se im Gehirn, [...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold aktiviert mit der Zirbeldr??se unser ???drittes Auge???

Bereits Ren?? Descartes (1596???1650), ein ber??hmter franz??sischer Philosoph, Naturwissenschaftler und Mathematiker, studierte die Zirbeldr??se und gelangte dabei zu der ??berzeugung, dass die Zirbeldr??se in Verbindung mit dem Sehen steht.

Verf??gen wir Menschen etwa ??ber ein weiteres Auge, das ???dritte Auge???, das ??ber die Funktion des physiologischen Sehens hinausgeht? Allerdings w??re dabei ???verf??gten???, also die Vergangenheitsform, der richtige Ausdruck. Denn w??hrend die Zirbeldr??se unserer Urahnen noch eine Gr????e von ca. 3 cm aufwies, haben der Mangel an nat??rlicher Sonnenenergie, sch??dliche Umwelteinfl??sse und der Einsatz von Giften, z. B. Fluoriden in unserer Zahnpasta, schleichend ??ber viele Jahrzehnte die Zirbeldr??se auf die heutigen 3???5 mm geschrumpft. Des Weiteren f??hren Energieblockaden im Hirn dazu, dass durch diesen Bereich nicht hinreichend Energie flie??t.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold aktiviert mit der Zirbeldr??se unser ???drittes Auge???

Moderne Forschung konnte aufzeigen, dass die innere Energie direkt durch das Zentrum der Zirbeldr??se geleitet wird. Beobachtungen von Ren?? Descartes konnten damit wissenschaftlich best??tigt und sogar physiologisch erkl??rt werden. Demnach versetzt uns die Zirbeldr??se in die au??erordentliche Bef??higung, elektromagnetische Felder in einem anderen Frequenzbereich wahrzunehmen. Indem wir die Energie durch die Zirbeldr??se leiten, k??nnen wir die uns umgebenden elektromagnetischen Felder sehr viel bewusster wahrnehmen und dadurch unsere Intuition verbessern. Daraus entstehen neben der st??rkeren Intuition eine gesch??rfte Wahrnehmung und sogar der Zugang zu spirituellen Erfahrungen.
  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold aktiviert mit der Zirbeldr??se unser ???drittes Auge???
  
Diese f??r den heutigen Menschen schon mystisch anmutenden Bef??higungen und Erfahrungen bleiben den modernen Menschen aufgrund der fehlenden Energie, die n??tig ist, um die Zirbeldr??se zu erreichen, vorenthalten. Daraus resultiert, dass uns die weiter oben beschriebene F??higkeit zur tieferen Intuition, Spiritualit??t, gesch??rften Wahrnehmung, aber auch das Feingesp??r f??r die Realit??t nur sehr begrenzt zur Verf??gung stehen.

Gold verst??rkt die flie??ende Energie in diesem Hirnbereich und die Funktion unserer Zirbeldr??se. Beides kann in die Wiedererlangung der oben genannten F??higkeiten m??nden. Damit ??ffnet kolloidales Gold unser ???drittes Auge???. Aus 1321???Sehen??? wird ???SEHEN??? ??? eine dem modernen Menschen bereits unbekannte Dimension! 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold erneuert das Bindegewebe und macht sch??n (1/2)

Eines der gr????ten Probleme der Hautalterung neben dem Einfluss der freien Radikale stellt die sog. Glykation dar. Wie der Name bereits erahnen l??sst, handelt es sich dabei um die negative Auswirkung von Zucker auf unser Bindegewebe. Mit steigender Zuckerkonzentration im Blut (verursacht durch zu hohen Zuckerkonsum oder aber Diabetes) entstehen sog. AGEs (Advanced Glycation Endproducts ??? zu Deutsch: fortgeschrittene Glykationsendprodukte) als Folge unkontrollierter Reaktion zwischen Zucker, Lipiden und Proteinen.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold erneuert das Bindegewebe und macht sch??n (2/2)

Die Kollagenfasern unseres Bindegewebes werden nach und nach hart und verlieren gleichsam an Elastizit??t. Falten und schlaffe Haut kennzeichnen ??u??erlich diesen Prozess als Teil eines Alterungsprozesses, dem man mit der Einnahme von kolloidalem Gold aber durchaus effektiv trotzen kann. Schlimmer als dieses prim??r optische Manko ist die Auswirkung selbiger AGEs auf unsere Blutgef????e, in denen Glykation die Entstehung der Arteriosklerose beg??nstigt.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Kolloidales Gold macht Glykation r??ckg??ngig

In Studien konnte kolloidales Gold einen ph??nomenalen Anti- Glykationseffekt unter Beweis stellen. So zeigte es sich, dass das kolloidale Gold nicht nur vor der sch??dlichen Verzuckerung sch??tzt, sondern zugleich in der Lage ist, bereits vorhandene Glykationssch??den in einem bemerkenswerten Umfang zu revidieren. Die Glykation innerhalb menschlicher Haut konnte damit um 56 % verringert werden. 723 Die durch Glykation bedingten Abst??nde zwischen den Gewebefasern verringerten sich in der menschlichen Haut des Weiteren um 40 %.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold verbessert die N??hrstoffaufnahme und optimiert Stoffwechselprozesse

Indem es die kolloidalen Eigenschaften des Blutes verbessert, optimiert kolloidales Gold unseren gesamten Stoffwechsel. So werden N??hrstoffe besser aufgenommen, Gifte effizienter ausgeschieden und die Verdauung gef??rdert. Auf diese Weise wird nicht nur der Zellstoffwechsel all unserer Gewebeformen und Organe beg??nstigt, sondern kolloidales Gold gilt, wie wir sp??ter noch lesen werden, dar??ber hinaus aufgrund der besagten Eigenschaften als hervorragendes Mittel gegen chronisches ??bergewicht.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold entgiftet den Organismus und reinigt K??rper, Geist und Seele

Durch die Optimierung der Stoffwechselvorg??nge reinigt Gold unseren K??rper. Der aus dem verbesserten elektromagnetischen Energiefluss resultierende positive Einfluss auf unsere innere Balance, die Intuition, gesch??rfte Wahrnehmung, Harmonisierung und Entstressung ???reinigt??? zugleich unsere Seele und unseren Geist.  
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
- antioxidativ (sch??tzt vor freien Radikalen),
- anti-entz??ndlich,
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

- verj??ngend,
- zellerneuernd,
- entgiftend,
- schlaff??rdernd (nachts).

Dar??ber hinaus gilt Folgendes:
- Gold erh??ht die interzellul??re Kommunikation.
- Gold harmonisiert unser Nervensystem.
- Gold aktiviert und regeneriert unser Dr??sensystem.
- Gold verbessert die Blutzirkulation.
- Gold macht agiler.
- Gold verbessert alle motorischen F??higkeiten.
- Gold erh??ht das (Selbst-)Bewusstsein.
- Gold steigert die Koordinationsf??higkeit.
- Gold steigert die Intelligenz.
- Gold verbessert unser Zeitempfinden.
- Gold erh??ht die Intuition.
- Gold beruhigt den Geist.
- Gold erh??ht die Wahrnehmung.
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

Moderne Forschung konnte eine effektive Wirkung von kolloidalem Gold gegen Allergien best??tigen. Sehr ??berzeugende Erkenntnisse verdanken wir in   diesem Zusammenhang Dr. Guy Abraham, der unter Einnahme des kolloidalen Goldes einen signifikanten R??ckgang des Allergien-ausl??senden Immunglobulins E (IgE) beobachtete. Etwa 90 % aller Allergien sind IgE-Allergien, die dem Typ I zuzuordnen sind. Hierzu geh??ren u. a. Heuschnupfen, allergische Bindehautentz??ndung, allergisches Asthma, Nahrungsmittelallergie, Quincke-??dem (Nesselsucht) u. a.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von Goldkolloiden gegen Krebs

Neben Stammzellforschung l??utet die Nanomedizin seit wenigen Jahren ein neues medizinisches Zeitalter ein ??? mit zahlreichen vielversprechenden Behandlungsans??tzen, selbst bei Krankheiten, vor denen die Schulmedizin bis dato kapitulierte.

Nach wie vor stellt die Krankheit Krebs die gr????te Gei??el der modernen Menschheit dar, leider auch mit steigender Tendenz. Sollte man der Krebsentstehungsthese, wie sie von der Schulmedizin propagiert wird, Vorzug gew??hren, w??re in diesem Fall kolloidales Gold die beste M??glichkeit, um Krebsentstehung zu vermeiden. Diese geht n??mlich davon aus, dass [...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Gold hilft bei Herz-Kreislauf-Problemen

Jeder einzelne Herzschlag wird durch eine elektrische Erregung gesteuert. Die Kontraktion des Herzmuskels wird dabei ??ber das Erregungsleitungssystem vom Sinusknoten eingeleitet. Durch die Optimierung der intrazellul??ren Kommunikation wirkt Gold als einer der besten Stromleiter ??berhaupt Herzrhythmusst??rungen (Arrhythmien) entgegen. 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Alterungsprophylaxe und Verj??ngung mit kolloidalem Gold (1/3)

Die Wirkung des kolloidalen Goldes l??sst sich sowohl der spannenden Kategorie der Alterungsprophylaxe (Verz??gerung der biologischen Alterung) als auch der weitaus faszinierenderen Kategorie des Reverse-Aging (biologischen Verj??ngung) zuordnen.

S??mtliche Aspekte der Alterungsprophylaxe sowie der biologischen Verj??ngung setzen an der zellul??ren Basis an. Nur wenn es uns gelingt, unsere 60???100 Billionen Zellen vor der weiteren Zerst??rung zu sch??tzen, betreiben wir erfolgreiches Anti-Aging. Die biologische Verj??ngung (Reverse-Aging) [...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Alterungsprophylaxe und Verj??ngung mit kolloidalem Gold (2/3) 

Ersteres (Anti-Aging) ist dabei um ein Vielfaches einfacher umzusetzen. Dies ist bereits mit gesunder Ern??hrung, einigen potenten Antioxidantien und zwei w??chentlichen Trainingseinheiten Sport an der frischen Luft verh??ltnism????ig leicht zu erreichen. Die Paradedisziplin ist und bleibt aber das Reverse-Aging, also nicht einfach nur die Verz??gerung von Alterungsprozessen, sondern sogar deren aktive Umkehr.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Alterungsprophylaxe und Verj??ngung mit kolloidalem Gold (3/3)

Wie wir weiter oben lesen konnten, fungiert kolloidales Gold als sehr effektiver Radikalf??nger und wirkt der Glykation und entz??ndlichen Prozessen im Organismus entgegen. Dies w??rde bereits ausreichen, um kolloidales Gold als hoch potentes Anti-Aging-Mittel einzustufen. Kolloidales Gold geht aber noch viel weiter:

Die DNS (unser Erbgut) steuert gemeinsam mit der RNS s??mtliche K??rperabl??ufe auf Zellebene. Hierzu geh??rt ebenfalls die lebenswichtige Reparatur von t??glich innerhalb des Zellstoffwechsels anfallenden Zellsch??den. Indem das kolloidale Gold den Informationsfluss unserer DNS um das bis zu 10.000-Fache verbessert, unterst??tzt es die Reparatur unserer 60???100 Billionen von Zellen, woraus ein ??beraus aktives Reverse-Aging, also die Umkehrung der biologischen Alterung, resultiert. Unterst??tzt wird dieser Verj??ngungsvorgang direkt ??ber die[...] 
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von kolloidalem Gold gegen Arthritis

Bereits 1997 gelang es Dr. Guy Abraham und Dr. Peter Himmel, innerhalb einer Studie zu beweisen, dass kolloidales Gold bei Arthritis schmerzlindernd und entz??ndungshemmend wirkt, die Beweglichkeit der Patienten erh??ht und Schwellungen minimiert. Motorische T??tigkeiten konnten bereits nach einer Woche der Einnahme von kolloidalem Gold besser ausgef??hrt werden.  
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Das Ringfinger-Ph??nomen
Bis heute spricht die Schulmedizin von einem Ph??nomen, das sich am Ringfinger von Personen darstellt, die unter Polyarthritis oder Arthrose leiden. W??hrend alle Finger schmerzen und bewegungseingeschr??nkt sind, bereitet ausgerechnet der Ringfinger, auf dem ein Goldring getragen wird, als einziger Finger keinerlei Beschwerden und ist voll beweglich. Des Weiteren ist dabei oftmals zu beobachten, dass der Goldring eine schwarze Umrandung auf der Haut hinterl??sst, wenn man unter einer Gelenkerkrankung leidet.

W??hrend also die Schulmedizin weiter??tselt, sind sich die Alternativmediziner l??ngst einig dahin gehend, dass der K??rper ??ber die Haut die heilende Substanz Gold regelrecht aufsaugt, um sich von seinen Leiden zu l??sen, weshalb der Ringfinger beweglich und schmerzfrei bleibt. Die dunkle Umrandung auf der Haut ist auf andere Legierungen zur??ckzuf??hren, da ein 750er-Gold zu nur 75 % aus reinem Gold besteht und zu...

`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von kolloidalem Gold gegen Depressionen und ??ngste

Die aktivierende und harmonisierende Wirkung des gesamten Dr??sensystems einerseits sowie die Aktivierung der Lebensenergie und Beruhigung des Nervensystems durch das kolloidale Gold andererseits f??hrten bereits in den fr??hen Jahren besonders in den USA zur erfolgreichen Behandlung von Depressionen und ??ngsten. Patienten berichten bereits nach wenigen Tagen der regelm????igen Einnahme von einer deutlichen Linderung der Symptome sowie einer gesteigerten Lebensfreude.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Potenzst??rkende Wirkung von kolloidalem Gold

Impotenz kann sehr mannigfaltige Ursachen haben, u. a. k??nnen Stress, ??berforderung, Dr??senalterung, aber auch andere Blockaden zum Nachlass unserer Potenz und Libido f??hren. Durch die Reaktivierung der Sexualdr??sen kann die Hormonproduktion angekurbelt werden, die Harmonisierung unseres Nervensystems l??st psychische und physische Blockaden, die das Sexualleben beeintr??chtigen. Bei einer l??ngeren Einnahme kann kolloidales Gold des Weiteren als ein nat??rliches Aphrodisiakum fungieren.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von Gold gegen Multiple Sklerose (MS)

Laut Edgar Cayce liegt die Hauptursache f??r MS im Mangel an Gold im Organismus, wodurch die Dr??sen nicht in der Lage seien, die zur ungest??rten Funktion des Nervensystems wichtigen Substanzen zu produzieren.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Wirkung von kolloidalem Gold bei PMS

Unter PMS (Pr??menstruelles Syndrom) versteht man das Auftreten verschiedener Beschwerden bei etwa jeder dritten Frau, die vier bis 14 Tage vor dem Einsetzen der weiblichen Regelblutung auftauchen und mit Beginn der Regel wieder enden. Indem das kolloidale Gold alle k??rperlichen und geistigen Funktionen harmonisiert, den K??rper entspannt und alle Dr??sen aktiviert, kann es dem PMS effizient ntgegenwirken.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Einnahme von kolloidalem Gold

Bereits in geringen Dosen hat sich kolloidales Gold als sehr wirksam erwiesen. Erwachsene Personen k??nnen zwei Teel??ffel (10???20 ml) t??glich einnehmen, bei Kindern reicht ein Teel??ffel. Hierbei ist eine Konzentration von zwischen 1 und 8 PPM gebr??uchlich. Als optimal hat sich die morgendliche Einnahme auf n??chternen Magen herausgestellt. Um die Aufnahme ??ber die Mundschleimhaut zu unterst??tzen, sollte man das Goldwasser ca. zwei Minuten im Mund behalten, bevor man es schluckt. Aufgrund der positiven elektrischen Ladung sollte man hierzu einen Plastik- oder Holzl??ffel verwenden.
`
    },
    {
        usefulInformationImageId: images_gold,
        quelleId: "3",
        afflinksId: afflinks.gold,
        text: `
Herstellung von kolloidalem Gold

Kolloidales Gold wird mit einem Elektrolyseger??t, zwei Goldelektroden und destilliertem Wasser erzeugt. Je nach Wasserbeschaffenheit und Elektrolyseger??t ist in einem 200-ml-Glas eine Zeit von ca. vier bis zw??lf Stunden vonn??ten, um eine Konzentration von 1 PPM kolloidalem Gold zu erzeugen. Die Lagerung sollte in einer braunen oder blauen Flasche, gesch??tzt vor Sonneneinstrahlung und W??rme erfolgen. Es ist wichtig, zu erw??hnen, dass man kolloidale Substanzen dabei weder im K??hlschrank noch in der direkten N??he von elektrischen Ger??ten aufbewahren sollte. Die Wirkung des kolloidalen Goldes l??sst zwischen dem dritten und vierten Monat mit der elektrischen Entladung der Kolloide allm??hlich nach.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
???Kolloidales Silber ist einer der wirkungsvollsten Bakterienkiller. Kolloidales Silber entpuppt sich als ein Wunder der modernen Medizin. Ein herk??mmliches Antibiotikum eliminiert vielleicht ein Dutzend verschiedene Krankheitserreger, aber kolloidales Silber t??tet etwa 650!???
Science Digest, M??rz 1978
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Kolloidales Silber, aber auch MMS, Grapefruitkernextrakt u.a. Substanzen, ??ber die wir ausf??hrlich im ???Codex Humanus??? berichten, geh??ren zu diesen ??u??erst effektiven Alternativen zum Antibiotikum ??? leider hat die Schulmedizin und die ???Big Pharma??? sehr viel daran gesetzt, diese traditionell verwendeten Schutzsubstanzen aus der Erinnerung der modernen Menschheit zu eigenen materiellen Gunsten zu l??schen. Konkret wurde zeitgleich mit der Patentierung des Penicillin den besagten Substanzen der Kampf angesagt!

Beim kolloidalen Silber handelt sich um eine h??chst effiziente, kosteng??nstige und zugleich in aller Regel nebenwirkungsfreie Behandlungsform gegen s??mtliche Parasiten, wie Bakterien, Viren, Pilze, Streptokokken, Staphylokokken und andere pathogene Organismen.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Kolloidales Silber vermag in einer Rekordzeit von sechs Minuten sage und schreibe bis zu 650 Krankheitserreger abzut??ten, und als w??re dies nicht genug, unterst??tzt es auch unser Immunsystem bei seiner Arbeit. Dies sind ph??nomenale Fakten, die aber mittlerweile gar nicht mal mehr so unbekannt sind. So erfreut sich kolloidales Silber einer st??tig wachsenden Fangemeinde, die dessen antibakterielle und antivirale Wirkung regelm????ig zu sch??tzen wei??...
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Weitaus unbekannter aber ist eine andere nicht minder faszinierende Wirkung von kolloidalem Silber, die das kolloidale Silber in Verbindung mit dessen antibakteriellen Wirkung zu einem regelrecht sensationellen Multitalent macht:

Gem???? Dr. Robert O. Becker, einem bekannten Wissenschaftler der Biomedizin der Syracuse University (USA), vernichtet Silber nicht nur feindliche Lebensformen, sondern unterst??tzt dar??ber hinaus die Neubildung des lebensnotwendigen Gewebes. Und "Neubildung" bedarf in diesem Fall einer selbst f??r den heutigen medizinischen Stand der Stammzellforschung fast schon neuen Definition - lesen Sie im Weiteren warum...
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Was genau ist kolloidales Silber?

Bevor wir zu den Eigenschaften des Silbers als zweites Wort innerhalb des zusammengesetzten Begriffs ???kolloidales Silber??? kommen, widmen wir uns zun??chst dem ersten W??rtchen ???kolloidal???. Unter einem Kolloid versteht man die zweitkleinste Einheit der Materie, direkt nach dem Atom. Es beschreibt also die kleinstm??gliche Form, in die eine Materie (K??rper, Material) zerlegt werden kann, ohne dabei seine urspr??nglichen Eigenschaften einzub????en.

In dieser mikroskopisch kleinen und dennoch v??llig funktionellen Form wird es dem Silber erm??glicht, unseren K??rper bis in die letzte Zelle zu durchdringen, um dort die erw??nschte Wirkung zu erzielen: die Eliminierung s??mtlicher k??rpersch??digender Parasiten, Bakterien, Viren und Pilze.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers (1)
Die genauen Wirkmechanismen des kolloidalen Silbers sind bis heute nicht abschlie??end gekl??rt. Vermutet wird ein magnetisches Feld der Silberatomgruppe, das um die Silberpartikel entsteht und zu deren erstaunlicher Wirkung f??hrt.

Im kolloidalen Silberwasser entsteht die sogenannte ???Brownsche Bewegung???, also ein kollektiv magnetisches Feld, dessen elektrische negative Polarisierung sich auf Krankheitserreger st??rend auswirkt.

Diese negative Polarisierung zerst??rt Enzyme, die bei einzelligen Krankheitserregern wie Bakterien, Pilzen und Viren, f??r die Sauerstoffgewinnung verantwortlich sind. Da dadurch die Atmungskette dieser Parasiten unterbrochen wird, ersticken sie innerhalb weniger Minuten.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers
Des Weiteren f??rdert offensichtlich die Anwendung von kolloidalem Silber unser Immunsystem, das dann seinerseits ebenfalls gegen die Krankheitserreger effektiv ank??mpfen kann. Die antibakterielle, antivirale und pilzhemmende Wirkung des kolloidalen Silbers ist seit Jahrtausenden bekannt. Im 19. Jahrhundert wurde es standardm????ig therapeutisch angewandt, und seine Wirkung wurde erst k??rzlich an der medizinischen Fakult??t der Universit??t Los Angeles offiziell best??tigt. Diese folgenden Abschnitte sind fundierten Informationen zum Thema ???kolloidales Silber??? gewidmet und sollen Ihnen Antworten auf alle Ihre Fragen dazu liefern.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers
Was sagen die Fachwelt und die Presse dazu?
???Jede Art von Pilz, Virus, Bakterium, Streptokokken, Staphylokokken und anderen pathogenen Organismen wird in drei bis vier Minuten abget??tet. Tats??chlich ist kein Bakterium bekannt, das nicht durch kolloidales Silber innerhalb von h??chstens sechs Minuten eliminiert wird, bei einer Konzentration von nur f??nf Milligramm pro Liter (ppm). Und selbst bei hohen Konzentrationen ??ber 100 ppm gibt es keine Nebenwirkungen.??? (Health Consciousness, Vol. 15, 4)
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers
Die Wirkung von kolloidalem Silber beruht auf zwei Faktoren: zum einen ist dies die bereits angesprochene Brownsche Bewegung, deren elektrische negative Polarisierung sich auf die Atmungskette der Krankheitserreger st??rend auswirkt und zu deren Erstickungstod f??hrt, zum anderen st??rkt seine Anwendung unser Immunsystem, das dann seinerseits die Krankheitserreger bek??mpfen kann. Hinzu gesellt sich die au??erordentliche F??higkeit, das Zellwachstum anzuregen und die Heilung von verletztem Gewebe um mehr als 50 % zu beschleunigen.
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Wirkung des kolloidalen Silbers
Aufgrund des enorm breiten Wirkungsspektrums des kolloidalen Silbers gegen??ber rund 650 Krankheitserregern (Bakterien, Viren, Pilze, Streptokokken, Staphylokokken sowie anderen pathogenen Organismen) sowie der F??rderung des Zellwachstums ist seine Wirksamkeit entsprechend bei unz??hlig vielen Erkrankungen nachvollziehbar. Schlie??lich h??ngen sehr viele Erkrankungen direkt oder indirekt mit diesen Parasiten oder der Zellzerst??rung zusammen, die das kolloidale Silber zu reparieren helfen kann. Und so konnte das kolloidale Silber bislang bei den nachfolgend genannten Erkrankungen Erfolge erzielen:
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
F??hrt kolloidales Silber zu Nebenwirkungen?
In normalen Dosen angewandt, f??hrt kolloidales Silber zu keinen Nebenwirkungen, und selbst f??r die allzu oft vonseiten der Gegner des kolloidalen Silbers angef??hrte Argyrie (ein kosmetisches Problem um eine grau-blaue F??rbung der Haut) bedarf einer durchschnittlichen oralen Einnahme von 3,8 Gramm pro Tag, was der millionenfachen Menge der ??blichen Dosierung von kolloidalem Silber beim Erwachsenen gleichkommt!

`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Herstellung von kolloidalem Silber

Die Herstellung des kolloidalen Silbers konzentriert sich darauf, m??glichst kleinste Partikel zu erzeugen. W??hrend das Silber fr??her mit einer Kolloidm??hle sehr aufwendig zermahlen wurde und bis in die 1930er-Jahre deshalb sehr teuer war, erm??glichen neue, moderne Herstellungsvarianten ein sehr wirkungsvolles, da aus kleineren Partikeln bestehendes und zudem viel g??nstigeres kolloidales Silber.
Die Kolloidm??hle wurde vom Bredig-Apparat abgel??st, der unter Starkstrom per elektrischem Lichtbogen das Abl??sen des Silbers von den Silberdr??hten erzielte.  
Erst viel sp??ter folgte der Silbergenerator, der bis heute in der Herstellung des kolloidalen Silbers seine Dienste leistet. Er arbeitet mit Niedrigspannung und erzeugt das kolloidale Silber mittels Elektrolyse.

`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Beschreibung der Herstellung kolloidalen Silbers mittels eines Silbergenerators (1/2)
- Den Strom an zwei Silberelektroden anlegen und in destilliertes Wasser h??ngen,
- wobei einer der beiden Silberdr??hte als Plus-, der andere als Minuspol fungiert.
- Schlie??t man den Generator an, so l??st der Strom die Silberpartikel und positiv geladene Silberionen.
- Am Minuspol entsteht Wasserstoffgas; die Elektronen werden vom Pluspol ersetzt, wenn die Silberpartikel gebildet werden.
- Flie??t der Strom durch das Silber, verlieren einige der Silberatome an der Grenzfl??che zum Wasser ein Elektron und werden zum Ion umgewandelt.  
`
    },
    {
        usefulInformationImageId: images_silber,
        quelleId: "3",
        afflinksId: afflinks.silber,
        text: `
Beschreibung der Herstellung kolloidalen Silbers mittels eines Silbergenerators (2/2)
- Die Silberionen l??sen sich in Wasser auf und produzieren so eine ionische Silberl??sung = Elektrolyseprozess.
- Einige der Silberionen nehmen w??hrend der Elektrolyse ein Elektron des durchflie??enden Stromes auf und werden in ein Atom zur??ckverwandelt.
- Diese Atome werden von anderen Atomen mittels der Waal???schen Kr??fte angezogen; es bilden sich kleine Metallpartikel. Auf diese Weise entstehen sowohl Ionen als auch Partikel.
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
- Achten Sie beim Erwerb eines Silbergenerators auf Qualit??t statt auf eine g??nstigen Preis; die Ger??te sollten genormt sein und m??glichst ??ber eine Anzeige zur Herstellung von kolloidalem Silber verf??gen.
- Benutzen Sie ausschlie??lich Silberst??be mit einem Reinheitsgrad von 99,99 %.
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
Kombucha-Teepilz-Getr??nk: Ein von Mythen umwobenes Elixier stellt sich vor ...

Ein Mythos entsteht bekanntlich dann, wenn sich unglaubliche Geschichten um etwas ranken, das ??ber ph??nomenale und zugleich nicht vollends erkl??rbare Eigenschaften oder Kr??fte verf??gt.

Auf kaum etwas trifft eine derartige Beschreibung so ideal zu wie auf den Kombucha-Teepilz, h??ufig auch ???Wunderpilz??? genannt, der bereits seit rund 2200 Jahren wahre Erfolgsgeschichten schreibt, die von Generation zu Generation weitergetragen werden. Es handelt sich um Geschichten, die ein weites Spektrum f??r sich einnehmen und von steigender Vitalit??t, Gesundheit, Versch??nerung bis hin zu wundersamen Heilungen handeln.

Kombucha ??? ein universelles Wundermittel? Was ist die Kombucha wirklich, welche Vorz??ge bietet sie, welche Vorteile k??nnen wir ihr entnehmen, was ist erwiesen und was ???nur??? weitergegeben?  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Zun??chst einmal sei klargestellt, dass es sich bei Kombucha nicht um einen klassischen Pilz im eigentlichen Sinne, sondern vielmehr um eine gelatineartige, elastische Masse handelt, gebildet aus einer Vielzahl von Hefezellen und Mikroben, die in einer Symbiose lebend offenbar Erstaunliches im Hinblick auf unsere Gesundheit, Leistungsf??higkeit und Aussehen zu vollbringen verm??gen.

Oberfl??chlich betrachtet, sieht der Kombucha-Teepilz wie ein Pfannkuchen aus. Es handel sich um eine gallertartige Scheibe, die je nach Teeart, mit der man den Teepilz ???anf??ttert???, eine wei??graue ??ber br??unliche bis hin zu r??tliche Farbe annehmen kann.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Bereits der Name ???Kombucha??? sorgt gewisserma??en f??r Verwirrung. Laut der ??berlieferung verdankt die Kombucha ihren Namen und ihre Entdeckung einem koreanischen Wanderm??nch namens ???Kombu???, der im Jahre 414 n. Chr. zum japanischen Kaiser Inkyo gerufen wurde, der unter schwerer Gastritis litt und der von Kombu mittels eines Teegetr??nkes von seinem Leiden befreit wurde.

In Windeseile sprach sich diese wundersame Heilung herum, und der Tee erhielt seinen Namen: ???Kombu-Cha??? = Tee des Kombu. Einer anderen ??berlieferten Geschichte wiederum zufolge, ist der Name ???Kombucha??? oder ???Combucha??? auf eine kosteng??nstige Alternative zum teuren Tee zur??ckzuf??hren, den die verarmte Bev??lkerung in Japan aus den Algen zubereitete und es heute noch tut.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Das Wort ???Combu??? bezieht sich auf die japanische gleichnamige Braunalge, die Endung ???Cha??? wiederum bedeutet auf Japanisch schlicht Tee = Algentee. In China soll er zwecks Erlangung der Unsterblichkeit getrunken worden sein, so glaubte man es zumindest. Politische Gr????en wie Stalin oder Ronald Reagan (gegen seine Krebserkrankung) sollen diesen regelm????ig konsumiert haben. Und glaubt man den Presseaussagen, so vertrauen Stargr????en wie Madonna, Barbara Streisand, Naomi Campbell, Claudia Schiffer, Kate Moss und viele [...]
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Ganz Hollywood scheint von Kombucha als Fitness- und Sch??nheitselixier zu schw??rmen, darunter auch so ber??hmte Namen wie der Regisseur Oliver Stone sowie die Schauspielerinnen Daryl Hannah und Linda Evans. 
Sind es aber nicht gerade diese Superstar vom Schlage einer Madonna, die ??ber teuer bezahlte Berater verf??gen, um die wirklich lohnenden Geheimtipps aufzusp??ren und sich einen Vorsprung auf dem Sektor der Sch??nheit, der Leistungsf??higkeit und Gesundheit vor der unerbittlichen Konkurrenz zu sichern? Auch diese Menschen haben lediglich einen Magen, der ??ber eine begrenzte Aufnahme an Nahrungsmitteln verf??gt ??? dass sie dabei sehr w??hlerisch sind, liegt auf der Hand.
Begeben Sie sich mit uns zusammen auf eine spannende Reise ins Zentrum dieses mythenbehafteten Zaubertranks und lassen Sie uns gemeinsam von Fakten und Erz??hlungen schw??rmen und wo es angebracht ist, Licht ins Dunkle eines wahren Mythos bringen.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha-Tee ??? Aussehen, Geruch, Geschmack
Der Kombucha-Tee nimmt die Farbe der verwendeten Teesorte an (dies tut mit der Zeit sogar der Kombucha-Pilz selbst), entsprechend also gr??nlich beim Gr??ntee, dunkel beim Schwarztee und r??tlich beim Kr??utertee. Der Geruch ist als leicht s????-s??uerlich einzustufen.
Es steht au??er Frage, dass s??mtliche Limonadegetr??nke in ihrem Ursprung der  Grundcharakteristik des Kombucha-Tees entstammen. So k??nnte man annehmen, dass die Kombucha bei deren Sch??pfung Pate stand. W??hrend man heute die prickelnd-erfrischenden Gasbl??schen in der Limonade oder Cola per Zugabe der Kohlens??ure k??nstlich erzeugt, entstehen die gleichen Bl??schen im Kombucha auf nat??rliche Weise w??hrend des G??rungsprozesses.
Der leicht s??uerliche Geschmack in der Limonade wird ??ber ungesunde Aromastoffe und S??uren erzeugt, der Kombucha-Tee erh??lt  [...].
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
In seinem Buch ???Kombucha ??? Mythos, Wahrheit, Faszination??? beschreibt G??nther W. Frank sehr treffend den Geschmack des Kombucha-Getr??nks als ???k??stlich, prickelnd und fruchtig???.
In der Tat dient der Kombucha-Tee vielen Menschen einfach nur als erfrischendes, leckeres Getr??nk ??? wenn man so will, eine Alternative zur Limonade. Der weitaus gr????ere Anteil der Kombucha-Konsumenten ist jedoch an dessen sagenhafter bis sagenumwobener, gesundheitlicher Wirkung interessiert. Dieser wollen wir in den folgenden Kapiteln auf den Grund gehen.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkungsweise und Wirkstoffe des Kombucha-Teepilzes
Trotz zahlreicher Untersuchungen und Analysen durch Wissenschaftler in der ganzen Welt konnte man bis zum heutigen Tag weder die exakte Zusammensetzung noch die genaue Wirkungsweise der Kombucha g??nzlich kl??ren.  
Angesichts weltweit seit Jahrhunderten sowohl durch Anwender als auch Therapeuten ??bermittelter und verschrifteter Heilungsgeschichten des traditionell vor allem im ostasiatischen und osteurop??ischen Raum als Volks- und Hausmittel angewandten Kombucha-Teepilzgetr??nkes, stellt sich nicht die Frage, OB die Kombucha wirkt, sondern vielmehr WIE und WOGEGEN der Tee daraus wirkt ...
Die eigentlichen Wurzeln werden in China vor 2200 Jahren vermutet; die Tatsache, dass die ??berlieferungen zur positiven Wirkung der Kombucha auf K??rper und Seele bis zum heutigen Tag andauern, sollte dabei jedem Skeptiker zu denken geben!

`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Der Vorliebe der Russen f??r G??rgetr??nke ist es wohl zu verdanken, dass sich die Kombucha von da aus rasch in ganz Russland und den baltischen L??ndern ausbreitete und um den Ersten Weltkrieg herum ??ber Polen in die ehemaligen deutschen Gebiete Eingang fand und ??ber den Austausch von deutschen und russischen Kriegsgefangen schlie??lich ihren Weg in den Westen fand.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wie die Kombucha wirkt
Biochemisch betrachtet, handelt es sich beim Kombucha-Teepilz um ein Wunderwerk der Natur. Angef??ttert mit Zucker und Gr??nem, Schwarzem oder Kr??utertee, wird bei einer Temperatur von 23 ??C (+/???5) im Kombucha- Pilz eine wahre Maschinerie aus komplexen, biochemischen Reaktionen (Assimilations- und Dissimilationsprozessen) in Gang gesetzt, die nach und nach eine Flut von zahlreichen wertvollen Stoffen in den Tee hinein freisetzt, die vorher nicht darin waren!  
Diese Prozesse laufen keineswegs unorganisiert ab. Ganz im Gegenteil ??? jeder Bestandteil erf??llt seine Rolle: Die im Pilz enthaltenen Hefen verg??ren den hinzugef??gten Zucker zu Kohlendioxid (der Grund f??r den prickelnden Geschmack) und geringen Mengen an Alkohol, der wiederum den im Pilz vorhandenen positiven Mikroorganismen als Nahrungsgrundlage dient.
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Diese setzen den Zucker in Zellulose um, die den Pilz wachsen l??sst. W??hrend diese den Alkohol verdaut, wandeln die positiven Bakterien ihn in Glucuron-, Glucon-Essig- und Milchs??ure (der Grund f??r den erfrischenden, s??uerlichen Geschmack) um und produzieren dabei ganz nebenbei zahlreiche Vitamine. Das hieraus entstehende Getr??nk ist es, das uns nach ca. acht bis zw??lf G??rtagen vollendet zur Verf??gung steht und mit zahlreichen positiven Effekten auf den menschlichen (und tierischen) K??rper aufwartet. Doch was macht die Kombucha so wirksam?  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkstoffe der Kombucha
Es ist das Zusammenspiel der gesamten Vitalstoffe im Kombucha-Tee, die im richtigen Verh??ltnis zueinander produziert werden, was dessen ph??nomenale Wirkung bei allerlei Erkrankungen und Zipperleinchen begr??ndet. Die nachfolgend aufgelisteten Wirkstoffe wurden bislang im Kombucha-Tee festgestellt; man geht aber davon aus, dass es eine Vielzahl weiterer Inhaltsstoffe gibt, die bislang unentdeckt blieben, jedoch im Zusammenspiel aller Komponenten ihre positive Wirkung auf den Organismus nicht minder erfolgreich verrichten: [...] 
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Hefepilze

Unz??hlige vitale Hefepilze verrichten viele verschiedene Aufgaben in unserem K??rper; sie st??rken das Immunsystem und sorgen f??r die Reinheit der Haut. Die immunst??rkende Wirkung der Kombucha hat dieser auch den Namen ???Virenkiller??? verliehen. In 1 ml Kombucha ist dabei die unglaubliche Menge von 10 Millionen lebender und hochwirksamer Hefen vorhanden.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Die Glucurons??ure geh??rt wohl zu den wichtigsten im Kombucha-Tee enthaltenen S??uren ??berhaupt. Erwiesenerma??en produziert die Leber Glucurons??ure, um die k??rpereigenen Stoffwechselgifte und Fremdstoffe (zum Beispiel Medikamente) zu binden.
Des Weiteren ist die Glucurons??ure am Aufbau anderer im K??rper f??r das Bindegewebe wichtiger S??uren beteiligt, so etwa der Hyalurons??ure, die als ein wichtiger Bestandteil des Bindegewebes unter anderem in der Gelenkfl??ssigkeit, in der Haut (macht 55 % der Hautsubstanz aus) ist und in den Knochen vorkommt.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Die Glucurons??ure ist ebenfalls ein Baustein der Mukoitinschwefels??ure (verantwortlich f??r die Magenschleimhaut und die Glask??rper des Auges) sowie Heparin, einem aus der Leber stammenden Stoff, der die Blutgerinnung verz??gert. Nicht zuletzt ist die Glucurons??ure am Aufbau von Chondroitin beteiligt, das einen weiteren wichtigen Bestandteil innerhalb unserer Gelenke bildet. Es ist davon auszugehen, dass die Glucurons??ure den gr????ten Beitrag dazu leistet, dass Kombucha in Verbindung mit positiven Effekten auf allerlei Gelenkprobleme, wie Arthritis, Arthrose, Gicht und Rheuma, gebracht wird und dar??ber hinaus eine positive Wirkung bei Bindegewebsschw??chen, Thrombosen, Problemen des Augenglask??rpers sowie Magenschleimhautproblemen zeigt.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Rechtsdrehende Milchs??ure
Neben der Glucurons??ure verdankt man der rechtsdrehenden Milchs??ure der Kombucha deren starke antibiotische Wirkung. Die rechtsdrehende Milchs??ure unterdr??ckt die Ausbreitung der F??ulnisbakterien im Darm und sorgt damit f??r eine gesunde Darmflora. W??hrend bekannt ist, dass ein ??bers??uerter K??rper alles andere als gesund ist, handelt es sich dabei unter anderem um die linksdrehende D(-)Milchs??ure, die dieses gef??hrliche ??bers??uern mitverursacht. Im Gegensatz dazu produziert Kombucha (beziehungsweise tun dies die Mikroorganismen) die rechtsdrehende, also die gesunde Milchs??ure. Laut Warburg kommt die linksdrehende Milchs??ure verst??rkt in b??sartigen Tumoren vor; seiner These nach kann sich der Krebs nicht entwickeln, wenn die rechtsdrehende Milchs??ure ??berwiegt.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Probiotische Milchs??urebakterien
Die gute, rechtsdrehende Milchs??ure also, die die Kombucha verst??rkt produziert, sorgt f??r eine gesunde Darmflora. Die hieraus resultierenden, guten Mikroorganismen (probiotische Milchs??urebakterien) produzieren wiederum unz??hlige f??r unsere Gesundheit unentbehrliche N??hrstoffe, wie Fols??ure, Biotin, Nikotins??ure, Vitamin K, Vitamin B12 und viele andere (Prinzip probiotischer Produkte).  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Eine gesunde Darmflora ist lebensnotwendig; nicht umsonst gilt unter den Naturmedizinern und Heilpraktikern der Leitsatz: ???Der Tod sitzt im Darm???. Eine funktionierende, gesunde Darmflora besteht aus unz??hligen, lebensnotwendigen Bakterienst??mmen, die im Gleichgewicht miteinander leben. Sie ist f??r ein funktionierendes Immunsystem von unentbehrlicher Bedeutung, und auch der Stoffwechsel kann nur dann funktionieren, wenn die Darmflora gesund ist. So erfolgt die Aufnahme von wichtigen Vitalstoffen, wie etwa den Vitaminen, in erster Linie mit Unterst??tzung der Dickdarmbakterien. Auf der anderen Seite werden die b??sartigen Eindringlinge, so die krankmachenden, b??sen Bakterien (wie der gef??rchtete Candida albicans), durch die guten Darmbakterien, die die Kombucha f??rdert, erfolgreich abgewehrt.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Verschiedene Enzyme:
Enzyme sind Bio-Katalysatoren, die in Zusammenarbeit mit zahlreichen biochemischen Prozessen in unserem gesamten Organismus lebenswichtige Aufgaben verrichten, kurz gesagt: ohne Enzyme kein Leben! Die Funktionen von Enzymen aufzulisten k??nnte ganze Bibliotheken f??llen; die wichtigsten Aufgaben sind:
- Verdauung,
- St??rkung des Immunsystems,
- Regulierung des Stoffwechsels,
- Entgiftung des Organismus,
- Entz??ndungshemmung,
- Wundheilung,
- antivirale und antibakterielle Wirkung,
- Verz??gerung von biologischer Alterung,
- Vorbeugung von Krankheiten wie Herzkreislaufdegeneration.
Die in der Kombucha bisher festgestellten Enzyme sind Amylase, Invertase, Katalase, Labenzym, Saccharase und das proteolytische Enzym.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wie ist das breite Wirkungsspektrum von Kombucha-Tee zu erkl??ren?

Zun??chst einmal muss ganz ehrlich zugegeben werden, dass die Kombucha, trotz aller faszinierender Berichte zur Wirkung bei unz??hligen Krankheitsbildern und krankhaften Zust??nden seit rund 2000 Jahren, vonseiten der Wissenschaft noch nicht bis ins letzte Detail erforscht worden ist. Es gibt jedoch dazu gerade aus dem osteurop??ischen Raum seit vielen Jahrzehnten ernsthafte, positive Studien sowie unz??hlig viele begeisterte Stimmen von ??rzten und Therapeuten, welche die Kombucha an ihren Patienten erfolgreich erproben konnten. Mehr dazu aber im weiteren Verlauf des Kapitels.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkung von Kombucha bei  Angina, Gichtschmerzen und Arteriosklerose
???Bei der Angina, insbesondere wenn es sich um Belag bei den Mandeln handelt, mu?? nicht nur mit dem Getr??nk gegurgelt, sondern dasselbe auch getrunken werden, und zwar zwecks Vernichtung der Bakterien, welche mit Speisen und Getr??nken in den Magen gelangten. Das Gurgeln f??hrt bei der Angina schnell Gesundung herbei, und bei Gichtschmerzen und Arteriosklerose wurden auch bei schweren F??llen staunenswerte Erfolge erzielt ...??? (Dr. L. Mollenda)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkung von Kombucha gegen Arterienverkalkung, Gicht, Darmtr??gheit 
???... sehr wirkungsvolles Mittel zur Bek??mpfung von Arterienverkalkung, Gicht und Darmtr??gheit??? es treten ???g??nstige Wirkungen ein, die sich bei Arterienverkalkung im Sinken des Blutdrucks, Aufh??ren der Angstgef??hle, der Reizbarkeit und der Schmerzen, des Kopfwehs, Schwindels usw. ??u??ert. Die Darmtr??gheit und ihre Begleiterscheinungen k??nnen ebenfalls rasch gebessert werden. Bei Verkalkung der Niere und der Haargef????e des Hirns erzielt man besonders g??nstige Ergebnisse.??? (Dr. Maxim Bing)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha-Wirkung gegen Krebs
???Kombucha hemmt b??sartiges Zellwachstum??? ??? ???Ich habe Kombucha an meine Patienten weitergegeben. Die Ergebnisse sind gut und die Patienten sind sehr zufrieden. Kombucha wurde mit gutem Erfolg angewandt bei Prostatabeschwerden, rheumatoider Arthritis, Knochenmark-Krebs, Fasergeschwulst im Uterus, Bindegewebsentz??ndung in der Lunge usw.??? (Dr. Soraya Shantiay)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkung von Kombucha bei Angina Pectoris
???Erfahrungen, welche daf??r sprechen, dass die Kombucha auch imstande ist, die ??beraus qu??lenden Anf??lle von Angina pectoris zu beeinflussen.??? (Prof. Dr. W. Wichowski) ???Die Tatsache, dass bei zahlreichen Personen oft qu??lende subjektive Beschwerden durch den regelm????igen Gebrauch der Kombucha beseitigt werden konnten, m????te allein gen??gen, die Verwendung dieses Mittels schon im gegenw??rtigen Stadium einem m??glichst gro??en Kreise der Bev??lkerung zug??nglich zu machen, ganz unabh??ngig davon, ob die wissenschaftliche Heilkunde eine Erkl??rung f??r die Wirksamkeit zu geben imstande ist oder nicht.??? (Ders.)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Wirkung von Kombucha gegen M??digkeit, Nervosit??t, H??morrhoiden, hohen Blutdruck
???Zusammenfassend kann man sagen, dass der Teepilz bzw. das durch denselben gebildete Extrakt als vorz??gliches Vorbeugungsmittel gegen Zuckerkrankheit, namentlich aber gegen Alterserscheinungen, wie Arterienverkalkung, hohen Blutdruck mit Folgeerscheinungen, wie Schwindel, Gicht, H??morrhoiden, sich bewiesen hat.??? (Dr. E. Arauner)

Wirkung von Kombucha bei Krebs
???In den achtziger Jahren verordneten wir unseren Krebspatienten den Kombucha-Tee und hatten einen guten Eindruck davon.??? (Dr. Josef Issels) ???Besonders die Milchs??ure im Kombucha-Tee ist wichtig f??r die Behandlung von Krebskranken. Ich rate allen Patienten: trinken Sie den Pilztee t??glich, auch wenn es nur ein Glas ist. Er hilft bei vielen Krankheiten.??? Dr. Veronika Carstens)  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha ??? ein Jungbrunnen?
Ewige Jugend und Vitalit??t ??? wer kann sich davon distanzieren, diesen Wunsch zumindest im Geheimen hin und wieder zu versp??ren? Unsere Gesellschaft ist diesbez??glich gepr??gt von Leitbildern und Erwartungen, die nicht zu erf??llen sind; nichtsdestotrotz liegt es in unserer Hand, uns ??ber eine gesunde Ern??hrung und Lebensweise Vitalit??t und Jugend bis ins hohe Alter erhalten zu k??nnen. Die Menschen altern zusehends immer schneller; dies ist in erster Linie den ver??nderten Umweltbedingungen (Gifte in der Luft, in Lebensmitteln, in der Kleidung usw.), dem neuzeitlichen Stress und falschen, s??urebildenden Ern??hrungsgewohnheiten zuzuschreiben.  
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha ??? ein Jungbrunnen?  
W??hrend wir pers??nlich nur sehr wenig gegen Umweltbelastung und Gifte um uns herum unternehmen k??nnen, sind wir es unserer Gesundheit schuldig, diese auf uns immer st??rker einwirkenden Giftstoffe mithilfe bestimmter Nahrungserg??nzungsmittel und Naturstoffe in unserem K??rper zu neutralisieren und aus ihm auszuschwemmen.
Wie wir bereits gelesen haben, verf??gt Kombucha mit ihrer Glucurons??ure ??ber die au??erordentliche F??higkeit, ??ber 200 Giftstoffe gleichzeitig zu neutralisieren. Des Weiteren sorgt die rechtsdrehende Milchs??ure daf??r, dass unser K??rper ents??uert und entschlackt wird.
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Kombucha ??? ein Jungbrunnen?  
Ferner ist die Glucurons??ure am Aufbau von S??uren beteiligt, die f??r das Bindegewebe enorm wichtig sind, wie die Hyalurons??ure. Diese ist ein wichtiger Bestandteil des Bindegewebes und macht 55 % der Hautsubstanz aus, was zu einer sp??r- und sichtbaren Elastizit??t der Haut beitr??gt und selbst tiefere Falten mit der Zeit verschwinden lassen kann.
Die vielen Vitamine und Enzyme unterst??tzen den Entgiftungs- und Verj??ngungsvorgang in optimaler Weise; so enth??lt Kombucha pro Liter ca. 1000 mg Vitamin C, welches f??r die Kollagen- und Elastinsynthese unseres Bindegewebes, so auch der Haut, zust??ndig ist.
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Zucker in Kombucha
???So viel Zucker? Kann das denn gesund sein???? So k??nnte manch ein gesundheitsbewusster Mensch denken ...
Keine Sorge, der Zucker dient dem Kombucha-Pilz lediglich als Nahrung und wird von diesem w??hrend der G??rung verwertet und in gesundheitlich wertvolle Substanzen umgewandelt. Ist der Kombucha-Tee fertig, beinhaltet er nicht mehr Zucker als Fruchts??fte, h??ufig noch weniger.
Die Empfehlungen reichen von 60???100 g Zucker pro Liter Kombucha-Tee. Dies unterliegt den individuellen S????ungsgewohnheiten; generell reichen aber 70 g aus. F??r einen erfolgreichen Ansatz empfiehlt sich Rohrohrzucker, aber auch normaler, wei??er Haushaltszucker kann verwendet werden. Fruchtzucker hingegen ist nicht geeignet, und mit Honig gelingt der Ansatz auch eher seltener. 
`
    },
    {
        usefulInformationImageId: images_kombucha,
        quelleId: "3",
        afflinksId: afflinks.kombucha,
        text: `
Ist der selbstgemachte Kombucha-Tee mit dem im Handel erh??ltlichen zu vergleichen ?
Aus vielen Gesichtspunkten ist er dies nicht! Zun??chst ist der im Handel erh??ltliche Kombucha-Tee mit ca. 5 EUR pro Liter sehr teuer, w??hrend man mit dem selbst gemachten Kombucha-Tee kaum Kosten hat. Des Weiteren ist das im Handel zu erwerbende Kombucha-Getr??nk frei von Wirkungen; dies deshalb, weil es aus Haltbarkeitsgr??nden pasteurisiert ist. Dies hat zur Folge, dass die gesundheitsf??rderlichen Bestandteile (Hefe und Bakterienkulturen) der Kombucha abget??tet werden.
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Laetril (Vitamin B17) ??? ein Naturheilmittel gegen Krebs?

V??llig unn??tig stellt die Erkrankung ???Krebs??? bis zum heutigen Tag eine Schreckensgestalt sondergleichen dar, dies mit steigender Tendenz. So erkrankt mittlerweile jeder 3te Mensch an Krebs, jeder 4te verstirbt daran. Die Zukunftsaussichten sehen dabei alles andere als rosig aus, und so rechnet die Weltgesundheitsorganisation (WHO) mit einem Anstieg von 70% an Neuerkrankungen in den kommenden Jahren..!

Eine Gei??el der modernen Menschheit, die es in dieser Form nicht mehr geben m??sste, w??rde die Schulmedizin im Sinne eines komplement??ren Ansatzes endlich mit der alternativen Heilkunde kooperieren und diese dabei zu einem gleichberechtigten Partner machen.

Die Interessen der m??chtigen ???Big Pharma??? und der etablierten ??rzteschaft kollidieren jedoch mit diesem Gedanken, da Natursubstanzen nicht patentierbar sind und [...]
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Laetril (Vitamin B17) ??? ein Naturheilmittel gegen Krebs?
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Laetril (Vitamin B17) ??? ein Naturheilmittel gegen Krebs?

Zu diesen ??u??erst effektiven, weitestgehend verheimlichten und seinerzeit aufs ??belste bek??mpften Natursubstanzen z??hlt ohne Frage Laetril, ein Wirkstoff gewonnen aus den bitteren Aprikosenkernen, auch unter dem Synonym ???Vitamin B17??? bekannt. Laetril, Amygdalin, Vitamin B17 ??? drei Begriffe, die das Gleiche beschreiben,

n??mlich den wohl umstrittensten, am gr??ndlichsten erforschten und am meisten bek??mpftesten, nat??rlichen Wirkstoff in der Geschichte der Medizin ??? gewonnen aus bitteren Aprikosenkernen! Keine alternative Behandlungsform gegen Krebs wurde jemals intensiver abgehandelt. Vitamin B 17 ist mehr als jeder andere Wirkstoff: Es ist der Inbegriff der wissenschaftlichen und philosophischen Kontroverse zwischen den Anh??ngern der alternativen Krebstherapien und den Angeh??rigen des medizinischen Establishments.
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Laetril (Vitamin B17) ??? ein Naturheilmittel gegen Krebs?

In den folgenden Kapiteln erfahren Sie die gesamte Geschichte von Vitamin B17, die Hintergr??nde einer unglaublichen Verschw??rung, Sie lesen ??ber objektive Fakten von beiden Seiten, Fakten, die f??r jeden Menschen, auch den gesunden, von Interesse sein k??nnten angesichts der Tatsache, dass statistisch gesehen jeder dritte Mensch 748 in Deutschland und den Industrienationen bereits an Krebs erkrankt und laut dem Statistischen Bundesamt in Wiesbaden jeder vierte Deutsche daran verstirbt 749 ??? Tendenz ??brigens steigend! Bilden Sie sich selbst Ihr Urteil ??ber Vitamin B17!
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Geschichte des Vitamin B17 bzw. Laetril, Amygdalin

Nachdem mehrere vom NCI (National Cancer Institute ??? Nationales Krebsinstitut in den USA) in Auftrag gegebene Studien zu Vitamin B17 (Laetril) positiv verlaufen sind, entschloss man sich zu einer l??ngeren Testreihe  am renommiertesten Krebsforschungszentrum der Welt, dem Memorial Sloan- Kettering unter der Leitung von Dr. Sugiura. Der mittlerweile verstorbene Dr. Sugiura galt mit 60 Jahren Berufserfahrung zum damaligen Zeitpunkt als Koryph??e auf dem Gebiet der Forschung. W??re es um die reine Wahrheit gegangen, so w??re Dr. Sugiura f??r diesen Job weltweit der geeignetste Mann gewesen; darum aber ging es ganz und gar nicht und so hat Sloan-Kettering die Rechnung ohne Dr. Sugiura gemacht.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Als Ergebnis der Studien berichtete Dr. Sugiura ??ber folgende f??nf Erkenntnisse:
1) Vitamin B 17 (Laetril, Amygdalin) verhindert die Metastasenbildung bei M??usen.
2) Laetril wirkt auf kleine Tumore wachstumshemmend.
3) Laetril (Vitamin B17) wirkt vorbeugend gegen Krebs.
4) Der Allgemeinzustand besserte sich.
5) Vitamin B17 (Laetril) lindert den Krebsschmerz.

Die Zusammenfassung der Effekte von Amygdalin bei M??usen mit prim??ren Brusttumoren im Bericht des Sloan-Kettering vom 13. Juni 1973 liest sich wie folgt:

???Die Ergebnisse zeigen deutlich, dass Amygdalin bei M??usen mit prim??ren Brusttumoren eine signifikante Hemmung des Auftretens von Lungenmetastasen bewirkt und die Hemmung des Prim??rtumorwachstums signifikant verst??rkt... Laetril schien auch das Auftreten neuer Tumore leicht einzuschr??nken... Generell ist stets eine Verbesserung im Gesundheitszustand und Aussehen der behandelten Tiere im Vergleich zur Kontrollgruppe zu beobachten ...???
`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Dr. Moss befand sich in einer regelrechten Zwickm??hle, denn er war auf dem besten Weg, eine ordentliche Karriere am Sloan- Kettering hinzulegen, erhielt regelm????ige Lohnerh??hungen und hatte eine Familie zu ern??hren. Doch h??tte er nie wieder in den Spiegel schauen k??nnen, wenn er der ??ffentlichkeit diese bizarre, menschenfeindliche L??ge vorenthalten h??tte.

Und so entschloss er sich kurzerhand, am 17.11.1977 im Hilton-Hotel vor zahlreichen eingeladenen Journalisten eine eigene Pressekonferenz abzuhalten und die L??ge am Sloan-Kettering kund zu tun! Erwartungsgem???? wurde er am n??chsten Tag gefeuert und befasst sich seitdem sehr erfolgreich mit der Erkundung alternativer Krebstherapien.

Diese Pressekonferenz hat eine regelrechte Lawine an Interesse f??r das Vitamin B17 ausgel??st, das mit Milliardeneinsatz im Auftrag der ???Big Pharma??? bek??mpft wurde. Diese Kampagne reichte bis in die obersten Etagen der Regierung und der ber??hmte Arzt [...] 

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Um es aber kurz zu halten: Viele Menschen wurden in den USA verhaftet und viele ??rzte verloren ihre Praxiszulassung. Vitamin B17 wurde kurzerhand f??r giftig und nutzlos erkl??rt, die Behandlung verboten, und selbst der Handel mit den bitteren Aprikosenkernen wurde in USA und Kanada untersagt!

Dr. Ralph Moss hat ??brigens sein Leben seitdem der Erkundung von alternativen Krebstherapien gewidmet, z??hlt zu den renommiertesten medizinischen Autoren und hat als anerkannter Experte und Berater zw??lf B??cher zum Thema ???Krebs??? geschrieben und drei Dokumentarfilme gedreht.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Verf??gen aber diese kosteng??nstigen (nicht patentierbaren) Naturstoffe, wie in diesem Fall Laetril aus bitteren Aprikosenkernen, ??ber ein g??nstiges ???Nutzen- Risiko-Profil???, wirken sie also letztendlich, ohne unserer Gesundheit auch nur ann??hernd zu schaden, so stehen diese ab dem Zeitpunkt der Markteinf??hrung in direkter Konkurrenz zu den teuren Medikamenten der Pharmaindustrie, die zudem nicht selten mit erheblichen Nebenwirkungen einhergehen. Damit werden sie automatisch zur Zielscheibe der m??chtigen ???Big Pharma???, die skrupellos keine M??hen und Gelder scheut, um dem Konkurrenten, der besser, sicherer und kosteng??nstiger ist, den Garaus zu machen!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Es ist ??brigens durchgesickert, dass Pharmaunternehmen sehr aufwendige Versuche unternommen haben, um Vitamin B17 synthetisch (k??nstlich) zu erzeugen, denn nur dies w??rde es erm??glichen, es zu patentieren. S??mtliche Versuche sind jedoch kl??glich gescheitert, was zeitgleich eine Kampfansage gegen das Vitamin B17 bedeutete!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
FAZIT

Nicht patentierbare Stoffe (Naturstoffe) bringen kein Geld, ganz im Gegenteil: Sie sind eine Bedrohung f??r ein Milliardengesch??ft! Die Krebserkrankung macht aber ca. 10 % des Gesamtumsatzes der

Pharmaindustrie aus, das sind ca. 40 Milliarden Dollar im Jahr! Dass die m??chtige Pharmaindustrie hierauf nicht verzichten m??chte, versteht sich von selbst.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Zusammenfassend l??sst sich also Folgendes sagen:

Laetril wirkt sehr selektiv ausschlie??lich auf die Krebszellen ein, indem es in der Krebszelle das giftige Hydrogenzyanid-Molek??l in einer 100- bis 3600- fachen Konzentration freisetzt (im Vergleich zu der Freisetzung in einer gesunden Zelle). Gleichzeitig verf??gt die Krebszelle nur unzureichend ??ber das Enzym Rhodanese, das in der gesunden Zelle zahlreich vorkommt und die ankommenden Gifte augenblicklich zum harmlosen Enzym ???Rhodanid??? neutralisiert!

Im ??brigen ist das Benzaldehyd-Molek??l f??r die schmerzstillende Wirkung von Laetril gegen den Krebsschmerz verantwortlich.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Nat??rliche Chemotherapie ??? ohne Nebenwirkungen!

??hnlich wie z.B. der Wirkstoff Curcumin aus dem indischen Kurkuma- Gew??rz (siehe entsprechendes Kapitel) und zahlreiche andere in diesem Buch erw??hnten Substanzen, verf??gt Laetril ??ber regelrechte zytotoxische und zytostatische Wirkung...

Zur Erkl??rung, bedeutet ???zytotoxisch??? ??bersetzt aus dem Griechischen so viel wie ???zellzerst??rend??? und ???zytostatisch??? bedeutet ???Zellwachstum hemmend???. Exakt also diejenigen Mechanismen, die wir aus der Chemotherapie kennen, allerdings mit dem einen wesentlichen Unterschied:

die Mutter Natur sorgt f??r uns, und will uns nicht schaden! So beziehen sich diese ??u??erst effizienten, zellzerst??rerischen und zellwachstumshemmenden Eigenschaften ausschlie??lich auf die b??sartigen Zellen, die Krebszelle ??? die gesunden Zellen werden dabei g??nzlich verschont!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Dosierung von Vitamin B17 zu Pr??ventionszwecken (Krebs vorbeugend!) 

Gem???? dem Autor des Bestsellers ???World Without Cancer???, G. Edward, empfiehlt Dr. Krebs, der Entdecker von Laetril, zu Pr??ventionszwecken ein Minimum von 50 mg Laetril f??r normale, gesunde Erwachsene.

Der Durchschnittswert von Laetril in einem bitteren Aprikosenkern liegt bei etwa 4???5 mg Laetril; dieser Wert kann bis um den Faktor 6 variieren!

Die zu Pr??ventionszwecken zumeist genannte Anzahl an bitteren Aprikosenkernen pro Tag liegt bei sieben, in den allermeisten F??llen zehn Kernen, was sich mit der Empfehlung ungef??hr deckt. Zahlreichen Quellen zufolge wurde bislang kein einziger Fall dokumentiert, bei dem jemand, der bittere Aprikosenkerne zur Vorbeugung von Krebs zu sich nahm, jemals an Krebs erkrankt w??re ??? ein bemerkenswerter Punkt angesichts der Tatsache, dass bittere Aprikosenkerne seit Jahrzehnten weltweit von Abermillionen von [...]

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Dosierung von Laetril zur Krebsbehandlung
Im Falle von Krebs w??re die ??bliche Dosis etwa 6 g Laetril intraven??s gespritzt, ??ber einen Zeitraum von in der Regel drei Wochen. Eine solche intensive Therapie sollte man selbstverst??ndlich niemals im Alleingang versuchen, sondern immer innerhalb einer ganzheitlichen metabolischen Therapie, angeleitet und ??berwacht von einem auf diesem Gebiet erfahrenen Arzt!
Dies deshalb, weil laut Laetril-Experten das massenhafte Absterben der Krebszellen Gifte erzeugt und deren Ausscheidung aus dem Organismus zu einer Vergiftung f??hren k??nne; das Laetril wird daher begleitend in Verbindung mit mehreren anderen Wirkstoffen verabreicht, unter anderem von hohen intraven??sen Dosen an Vitamin C.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Was ist Vitamin B17 (Laetril, Amygdalin)?

Vitamin B17, auch Laetril oder Amygdalin genannt, wird von alternativen Krebsmedizinern und Laetril-Forschern als ???nat??rliches Chemotherapeutikum??? bezeichnet, das in ??ber 1200 Pflanzen vorkommt. Das gr????te Vorkommen jedoch weisen bittere Aprikosenkerne auf; weiterhin findet sich Laetril in ??pfeln, Pflaumen und Pfirsichen.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Wie funktioniert Vitamin B17 (Laetril, Amygdalin)?

Laut seinem Entdecker Dr. Krebs wirkt es sehr selektiv und ausschlie??lich auf die Krebszellen ein, indem es dort in hoher Konzentration das giftige Hydrogenzyanid-Molek??l freisetzt; gleichzeitig wird die gesunde Zelle durch das Enzym Rhodanese gesch??tzt, wobei die ankommenden Gifte augenblicklich zu dem harmlosen Enzym Rhodanid neutralisiert werden.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Wirken alle Aprikosenkerne oder lediglich die bitteren?

Es handelt sich ausschlie??lich um die bitteren Aprikosenkerne, die den Wirkstoff Vitamin B17 (Laetril, Amygdalin) beinhalten ??? alle anderen Aprikosenkerne beinhalten wenig bis gar nichts davon und sind daher wirkungslos!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Reicht Vitamin B-17 als Krebstherapie?

Auf keinen Fall! Viele Erfolgsgeschichten von ehemals Krebserkrankten, die allein mit den bitteren Aprikosenkernen (Vitamin B17) ihren Krebs bek??mpft haben, k??nnten dazu verleiten, aber eines sollte dennoch klar sein: W??hrend Vitamin B17 wahrscheinlich bei jeder Krebsart eine positive Wirkung zeigt, reagieren jeder Mensch und jede Krebsart m??glicherweise unterschiedlich darauf!
Es w??re in weitaus den meisten F??llen fahrl??ssig, bei einer lebensbedrohenden Erkrankung wie dem Krebs zu pokern, sich mit einigen Pfund bitterer Aprikosenkerne zu bewaffnen und im Alleingang loszulegen! Vielmehr sollte das Vitamin B17 begleitend innerhalb einer ganzheitlichen Krebstherapie erfolgen, die von Laetril-??rzten angeleitet und begleitet wird!

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Des Weiteren sollte das Vitamin B-17 (Laetril) immer in Verbindung mit Enzymen aus der Ananas- und der Papaya-Frucht (Bromelain, Papain) eingenommen werden. Diese helfen, den ???Schutzpanzer??? des Tumors zu knacken, sodass ein besseres Eindringen durch Laetril in die Krebszelle erm??glicht wird.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Ist Laetril, Amygdalin (Vitamin B17) legal oder ist es verboten?

Zum jetzigen Zeitpunkt sind Aprikosenkerne und damit Vitamin B17 als Nahrungserg??nzungsmittel in der EU zugelassen und damit erlaubt! In den USA ist Laetril eingeschr??nkt erlaubt, in Kalifornien beispielsweise ist der Einsatz von Laetril/Amygdalin (Vitamin B17) gegen Krebs beim Menschen unter bestimmten Umst??nden untersagt.

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Was ist der Unterschied zwischen Aprikosenkernen und B17-Tabletten oder Infusionen? Und was ist besser zur Vorbeugung von Krebs und im Falle von akutem Krebs?

Die Rohform des Vitamin B17 sind die bitteren Aprikosenkerne. Laut Dr. Krebs sind diese zu Pr??ventionszwecken besser geeignet als Tabletten, schon deshalb, weil sie Unmengen von sekund??ren Pflanzenstoffen enthalten, die ebenfalls gesund sind.

Wenn Sie der Nachgeschmack (??hnlich Marzipan) der Aprikosenkerne nicht st??rt und Sie keine Probleme mit dem Kauen haben, sollten Sie zu Pr??ventionszwecken auf die bitteren Aprikosenkerne zur??ckgreifen. F??r alle anderen sind die Tabletten zum Zwecke [...]

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Funktioniert Vitamin B17 bei jeder Krebsart?

Nach Dr. Krebs ja! Seiner Aussage nach haben Krebszellen exakt die gleichen Eigenschaften und w??rden auf die gleiche Art und Weise von Laetril isoliert zerst??rt.

Wie aber bereits erw??hnt, w??re es unserer Meinung nach unverantwortlich, sich ausschlie??lich darauf zu verlassen! Hingegen sollte man eine lebensbedrohliche Erkrankung wie den Krebs ??ber das beschriebene Prinzip des ???goldenen Dreiecks der Krebsheilung??? ganzheitlich angehen. (Siehe mein Krebs-Buch!)

`
    },
    {
        usefulInformationImageId: images_b17,
        quelleId: "3",
        afflinksId: afflinks.b17,
        text: `
Kann Vitamin B17 noch nach Chemo und Bestrahlung helfen, wenn beides versagt hat?

Laut Dr. Krebs und vielen anderen Therapeuten kann es selbst dann noch helfen, wenn Chemotherapie und Bestrahlung versagt haben. Man sollte dabei jedoch nicht au??er Acht lassen, dass nicht selten gerade die Chemotherapie und die Bestrahlung den eigentlichen Schaden anrichten, der nicht zuletzt h??ufig auch zum Tode f??hrt. Jeder Mensch ist zu jedem Zeitpunkt ein Kandidat f??r die metabolische Krebsbehandlung mit Laetril!

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Hierzulande noch verh??ltnism????ig unbekannt, erfreut sich der Lapacho-Tee im gesamten S??damerika gro??er Popularit??t und gilt dort sowohl als Naturheilmittel gegen unz??hlige Leiden als auch als reiner Genusstee, den man in Gesellschaft seiner Liebsten tagt??glich zu sich nimmt.

Angesichts der stetig wachsenden, durchaus begr??ndeten Skepsis gegen??ber klassischen Medikamenten und des steigenden Interesses f??r gesunde Alternativen aus der Natur ist es lediglich eine Frage der Zeit, bis der Lapacho- Tee auch in unserem Kulturkreis Einzug h??lt.

Ein verst??rktes Interesse w??re angesichts des weiten Wirkungsspektrums dabei mehr als nachvollziehbar, zumal der Lapacho-Tee seine breit gef??cherte Wirkung gegen zahlreiche Erkrankungen und Missst??nde, im Gegensatz zu klassischen Medikamenten, v??llig nebenwirkungsfrei entfaltet.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Lapacho ??? das Gew??chs und die Tradition
Ohne Frage reiht sich der Lapacho-Tee, gewonnen aus dem Lapacho-Baum (wissenschaftliche Bezeichnung ???Tabebuia avellanedeae???), der von den Indianern respektvoll als ???Baum des Lebens??? oder ???Besch??tzer der Lebenskraft??? bezeichnet wird, in die obere Liga der Heilkr??uter ein. Seit Jahrhunderten als Heil- und Genusstee regelrecht verehrt, blickt er auf eine sehr lange Tradition innerhalb der indianischen Naturv??lker zur??ck.

Lapacho st??rkt das Immunsystem, entschlackt, wirkt Entz??ndungen entgegen und unterst??tzt einen geruhsamen Schlaf. Dar??ber hinaus bew??hrt er sich bei Erkrankungen von A wie Arthritis ??ber N wie Neurodermitis bis hin zu Z wie Zahnfleischentz??ndugen. Und selbst bei ernsteren Erkrankungen wie Krebs konnte der Lapacho-Tee in Studien eine positive Wirkung aufweisen.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Der Name Lapacho bezeichnet mehrere, bis zu 35 m hochwachsende Baumarten in den Regenw??ldern von Brasilien, Argentinien und Paraguay (darunter Handroanthus impetiginosus, Handroanthus serratifolius, Handroanthus heptaphyllus), die der Familie der Trompetenbaumgew??chse zuzuordnen sind und in der Bl??tezeit zwischen Mai und August wundersch??ne rote oder violette glockenf??rmige Bl??ten tragen.

Doch nicht etwa die Bl??ten, sondern einzig und allein die Rinde der Lapacho- B??ume steht im Fokus des Interesses. Bereits die Inka verwendeten die w??ssrigen Extrakte der Lapacho-Rinde zur Heilung und Linderung kleiner Wehwehchen bis hin zu ernsthaften Erkrankungen. Hierzu wird die Innenrinde (die sogenannte Bastschicht) des ansonsten sehr harten Holzes zum entsprechenden Extrakt verarbeitet. Da die Rinde nach der Ernte schnell wieder nachw??chst, besteht kein Grund zur Sorge um die Gesundheit des Baumes.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Der Geschmack des Lapacho-Tees ist abh??ngig von der Ziehzeit und dem Gef????, in dem der Tee gekocht und aufbewahrt wird. In der Regel ??hnelt er dem des Rotbuschtees und hat einen leichten Vanille-Nachgeschmack. L??sst man den Lapacho-Tee l??nger ziehen, erh??lt er ein herb-w??rziges Aroma.

??ber welche Wirkstoffe verf??gt der Lapacho-Tee?

Der Lapacho-Tee verf??gt ??ber eine Vielzahl optimal aufeinander abgestimmter Wirkstoffe in Form von Mineralien, Spurenelementen, Saponinen und anderen sekund??ren Pflanzenstoffen, die synergetisch ihre gesundheitlichen Vorz??ge entfalten.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Es ist exakt die wundersame Komposition all dieser Inhaltsstoffe in einer Perfektion, die der Mensch nicht nachzuahmen vermag, die dem Lapacho-Tee seine umfassende Heilkraft verleiht.

Hierzu geh??ren:

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
- Veratrums??ure
- Zink

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Die Beschaffenheit und Eigenschaft der Lapacho-Rinde erh??ht die Sauerstoffversorgung
Es ist die rote innere Rinde des Lapachobaumes, die den Sauerstoff in einer besonderen und f??r den Menschen sehr gut verf??gbaren und wertvollen Form zu binden vermag. So versorgt der Lapacho nicht nur die gesunden K??rperzellen mit viel Sauerstoff, sondern eliminiert ebenfalls erfolgreich Bakterien, Viren und Pilze und vermag sogar Arteriosklerose r??ckg??ngig zu machen.
Der sauerstoffanreichernde Effekt wird ??ber die Inhaltsstoffe Calcium und Eisen verst??rkt, die bekanntlich am Sauerstofftransport beteiligt sind.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Lapachol als vielseitiger Wirkstoff
Der im Lapacho vorkommende Wirkstoff ???Lapachol??? ist eines von zw??lf im Lapacho-Tee enthaltenen Chinone, die nachgewiesenerma??en eine antibiotische Wirkung entfalten. Lapachol wirkt dar??ber hinaus antiviral, entz??ndungshemmend, schmerzlindernd und gegen Geschw??re. Auch verf??gt es ??ber tumorhemmende Eigenschaften und kann sogar Malaria erfolgreich behandeln.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Anregender, vitalisierender Effekt von Lapachol
Ebenfalls erw??hnenswert ist der anregende Effekt der Naphthochinon- verbindungen ???Lapachol??? beziehungsweise ???Lapachon???.

Immunst??rkende Effekte des Lapachol
Des Weiteren aktiviert der im Lapacho enthaltene Wirkstoff ???Lapachol??? die Immunzellen und die Lymphozyten sowie die Granulozyten und st??rkt auf diese Weise unser Immunsystem.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Der Lapacho enth??lt viele Saponine. Diese wirken sich sch??tzend gegen jede Art von Pilzen aus und k??nnen sogar das Krebswachstum hemmen. Letzteres hat unter japanischen Forschern dazu gef??hrt, dass sie spezielle Lapacho- Saponine als Krebsheilmittel patentieren lie??en. 764 In Dosen von 1500 mg konnte das aus dem Lapacho-Tee isolierte Lapachol eine deutliche antitumorale Wirkung aufzeigen.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Selen als zellsch??tzendes Antioxidans und Entgiftungswirkstoff

Ein weiterer wichtiger Bestandteil des Lapacho-Tees ist das Antioxidans Selen, das ??ber die Neutralisierung der freien Radikale unsere Zellen vor Zerst??rung sch??tzt. Wie wichtig diese Eigenschaft ist, wird deutlich, wenn man bedenkt, dass die meisten Krankheiten sowie Alterungsprozesse auf die sch??dliche Einwirkung freier Radikale zur??ckzuf??hren sind.
Des Weiteren vermag das Selen den menschlichen K??rper zu entgiften und von Schwermetallen wie etwa Cadmium zu befreien.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Die Indianer nutzten und nutzen bis heute den Lapacho-Tee als einen Gesundheitsallrounder, aber auch als reinen Genusstee. Neben seiner schmerzlindernden Wirkung ist es vor allem seine Eigenschaft, die Anzahl der roten Blutk??rperchen deutlich zu steigern, die ihn f??r uns Menschen so interessant macht.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Sauerstoff bedeutet bekanntlich Leben. Wenn man sich nun vergegenw??rtigt, dass die Aufgabe der roten Blutk??rperchen darin besteht, den Sauerstoff zu transportieren und der Lapacho-Tee nachweislich eine signifikante Vermehrung der roten Blutk??rperchen bewerkstelligt, wird deutlich, wie wertvoll allein diese Eigenschaft des Lapacho bereits f??r unsere Gesundheit und unser Wohlbefinden sein kann und wie umfassend er einen Einfluss auf die Heilung etlicher Erkrankungen zu nehmen vermag.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Es ist die rote innere Rinde des Lapacho-Baumes, die gro??e Mengen an Sauerstoff in einer f??r den menschlichen Organismus besonders wertvollen und leicht verf??gbaren Form bindet. Diese Form des gebundenen Sauerstoffs vermag einerseits die K??rperzellen optimal zu versorgen, andererseits ganze Bakterienst??mme, Viren, Pilze und Protozoen abzut??ten und sch??dliche Ablagerungen (Arteriosklerose) von unseren Blutgef????en zu entfernen, ja sogar die Flexibilit??t unserer Arterien sogar wieder zu steigern.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

F??r gro??e Aufregung sorgte in diesem Zusammenhang ein Zeitungsinterview mit Prof. Walter Accorsi vom St??dtischen Hospital in Santo Andr??, der darin erkl??rte, dass ihm gleich zu Beginn seiner Experimente am Lapacho diese beiden besagten Eigenschaften auffielen: die schmerzstillende und sauerstoffanreichende Wirkung. Selbst bei Krebspatienten im fortgeschrittenen Stadium, die unter unertr??glichen Schmerzen litten, brachte der Lapacho diese ???zum Verschwinden???. Parallel dazu sorgte die Behandlung mit Lapacho daf??r, dass sich die Zahl der roten Blutk??rperchen in kurzer Zeit vervielfachte, was zur Folge hatte, dass der K??rper viel effizienter mit dem lebenswichtigen Sauerstoff versorgt wurde.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung des Lapacho-Tees

Sehr bezeichnend ist dabei die Aussage von Professor Accorsi zum breitgef??cherten Heilungspotenzial des Lapacho:

???Bereits bei den ersten Experimenten, die ich mit dem Mittel unternahm, entdeckte ich zwei Faktoren, die mir vor allem in Hinblick auf die Krebsbehandlung bedeutsam erschienen: einerseits lindert der Lapacho die Schmerzen, die durch die Krankheit ausgel??st werden, andererseits erh??ht sich auch die Zahl der roten Blutk??rperchen. Unser Erstaunen wurde immer gr????er! Die Lapachorinde schien buchst??blich alles zu heilen ??? Geschw??re, Diabetes, Rheuma ??? einfach alles. Dabei war vor allem die Geschwindigkeit, mit der die Heilung erfolgte, beeindruckend. So waren die meisten Patienten innerhalb eines Monats beschwerdefrei.???
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Bevor wir uns der spezifischen Wirkung des Lapacho-Tees widmen, erscheint
es als sehr sinnig, sich zun??chst dessen allgemeine Wirkung anzuschauen.
Der Lapacho-Tee wirkt im Allgemeinen:

- sauerstoffanreichend,
- die Anzahl der roten Blutzellen steigernd,
- blutreinigend,
- entz??ndungshemmend,
- antibakteriell,
- antitumoral,
- antiviral,
- antifungal (pilzt??tend),
- antioxidativ,
- das Immunsystem kr??ftigend,
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
es als sehr sinnig, sich zun??chst dessen allgemeine Wirkung anzuschauen.
Der Lapacho-Tee wirkt im Allgemeinen:

- entgiftend,
- entschlackend,
- fiebersenkend,
- wundheilend,
- hautreinigend,
- schleimhautberuhigend,
- tonisierend,
- revitalisierend,
- schwei??treibend,
- harntreibend,
- beruhigend,
- verdauungsf??rderlich.
`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Sauerstoffanreichernde Wirkung
Die erstaunliche, sauerstoffanreichernde Wirkung des Lapacho-Tees belebt die K??rperzellen und vernichtet in dieser besonderen, gebundenen Form sehr effektiv Bakterien, Protozoen, Pilze und Viren. Die Arteriosklerose (Gef????verkalkung) wird gel??st, die Blutgef????e werden wieder flexibel.

Entz??ndungshemmende Wirkung
Aufgrund seiner entz??ndungshemmenden Wirkung wird der Lapacho-Tee seit Hunderten von Jahren von Indianerv??lkern bei entz??ndlichen Erkrankungen mit Erfolg angewandt. Es kommt nicht nur zur Linderung, vielmehr werden sogar komplette Heilungen von schweren entz??ndlichen Erkrankungen wie Arthritis berichtet.

Antibakterielle und antivirale Wirkung
Der Lapacho-Tee wirkt au??erordentlich antibiotisch und zugleich antiviral, weswegen er seit Jahrhunderten als nat??rliches Antibiotikum angewandt wird und sich selbst bei Herpes und HIV-Viren sowie Malaria bestens bew??hrt hat. Besonders der Inhaltsstoff Lapachol sowie weitere zw??lf bislang erforschte Chinone verf??gen ??ber au??erordentliche antibiotische Eigenschaften.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Antifungale (pilzt??tende) Wirkung
Der Lapacho-Tee verf??gt ??ber eine antifungale (pilzt??tende) Wirkung, weswegen er traditionell sogar bei hartn??ckigen Pilzarten wie Candida albicans erfolgreich Anwendung findet.

Antioxidative Wirkung
Der Lapacho-Tee bindet ??ber die enthaltenen Chinone freie Radikale und wirkt sich auf diese Weise antioxidativ aus. Diese Erkenntnis kann man nicht hoch genug sch??tzen, bedenkt man, dass jede einzelne unserer K??rperzellen t??glich bis zu 10 000 x von freien Radikalen angegriffen wird und diese die Schuld an den meisten Krankheiten sowie der Zellalterung tragen.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Entgiftende Wirkung
Der Lapacho-Tee wirkt sich harmonisierend auf die Verdauungsorgane aus, regt die Leberfunktion und die Nierenarbeit an und hilft auf diese Weise dabei, den K??rper zu entgiften.

Wundheilende Wirkung von Lapacho
Der Lapacho-Tee wird traditionell seit Jahrhunderten von Indianerst??mmen erfolgreich zur Beschleunigung der Wundheilung benutzt, was auf den hohen Gehalt von Tannin sowie Calciumoxalat zur??ckgef??hrt wird. Hier macht man sich die adstringierende Wirkung des Lapacho zunutze. Damit ist eine F??higkeit gemeint, die Schleimh??ute und Haut bei Blutungen zusammenzuziehen, was eine beschleunigte Wundheilung erm??glicht.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung bei Neurodermitis

Bei allergischen Hautreizungen, wie etwa Neurodermitis, ist es grundlegend wichtig, das Immunsystem zu st??rken und den Organismus zu entgiften. Dies vermag der Lapacho-Tee bekanntlich sehr gut; dar??ber hinaus wirkt er entz??ndungshemmend und kann so eine echte Hilfe bei Neurodermitis darstellen. Wirkung bei ??demen  Auch bei ??demen gibt es zahlreiche Berichte von Patienten, denen es selbst in schwersten F??llen nach wenigen Wochen bereits besser erging, unter anderem dokumentiert durch die Sao Paulo Klinik in Brasilien.

`
    },
    {
        usefulInformationImageId: images_lapacho,
        quelleId: "3",
        afflinksId: afflinks.lapacho,
        text: `
Wirkung bei Zahnfleischentz??ndungen
Der Lapacho-Tee eignet sich aufgrund seiner regulierenden, entz??ndungshemmenden, adstringierenden und desinfizierenden Wirkung bestens zur Behandlung von Zahnfleischentz??ndungen und zur Unterst??tzung der Mundflora.

`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin ??? In welchen Nahrungsmitteln kommt es vor?
Wie wir weiter oben lesen konnten, k??nnen trotz optimaler Bedingungen lediglich 10 % des eigentlichen L-Carnitinbedarfs durch Eigensynthese des K??rpers bewerkstelligt werden. Dies ist entschieden zu wenig, um von den Vorz??gen des L-Carnitins zu profitieren. ??ber eine hierauf ausgerichtete Lebensmittelauswahl kann man versuchen, des Problems Herr zu werden. Die Realit??t sieht aber so aus, dass wir sch??tzungsweise pro Tag durchschnittlich nur 100???300 mg L-Carnitin aufnehmen; um auf 1000 mg zu kommen, m??ssten wir t??glich rund 750 g Fleisch essen. Fleisch spielt in der L-Carnitin- Versorgung deshalb eine so wichtige Rolle, weil L-Carnitin aus den beiden essenziellen Aminos??uren ???Lysin??? und ???Methionin??? hergestellt wird, Aminos??uren, die fast ausschlie??lich im Fleisch vorkommen.
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Allgemeine Wirkung

L-Carnitin nimmt vor allem einen positiven Einfluss auf unsere Skelettmuskulatur, das Herzkreislaufsystem sowie das Immunsystem und wirkt sich auf unseren Organismus folgenderma??en aus:

- Kraftsteigernd,
- die Fettverbrennung unterst??tzend,
- den Energiestoffwechsel unterst??tzend,
- die Muskulatur aufbauend,
- Prophylaktisch gegen Muskelverletzungen,
- vorbeugend gegen Muskelkater,
- muskelregenerativ,
- die Erholungsphasen verk??rzend,
- Nervensystem sch??tzend,
- die Herzleistung steigernd,
- die Durchblutung f??rdernd,
- w??hrend der Belastung die Herzfrequenz (Puls) senkend,
- entgiftend (toxische organische Substanzen werden aus dem K??rper transportiert),
- antidepressiv,
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung auf das Herzkreislaufsystem
Der Herzmuskel ist auf die Energie aus den Fetts??uren angewiesen, um seiner Funktion intakt und gesund nachzukommen. Nur mit Carnitin aber k??nnen diese Fetts??uren vom K??rper als Energielieferanten verwertet werden. L- Carnitin agiert dabei als Energietr??ger und erm??glicht es den Muskeln, dem Herzen sowie anderen Organen, die Fetts??uren als Energie zu verwerten. L- Carnitin st??rkt die Herzmuskulatur und kann auf diese Weise Herzerkrankungen sowie einem Herzinfarkt vorbeugen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung auf die Blutgef????e
Durch die gef????erweiternde Wirkung mittels des Einflusses auf die Endothel- sowie die glatten Muskelzellen unserer Blutgef????e ergeben sich aufgrund der damit gesteigerten Durchblutung zahlreiche Vorteile:
- Verbesserung der Herzdurchblutung,
- Senkung des Blutdrucks bei Hypertonikern,
- Reduktion der Herzfrequenz (Puls),
- Steigerung der Durchblutung der Skelettmuskulatur,
- Steigerung der Sauerstoffaufnahmef??higkeit der Skelettmuskulatur,
- Senkung des Laktatspiegels (Milchs??urespiegel w??hrend und nach anaerober Muskelbelastung),
- Reduktion der Muskelsch??den (einschlie??lich Muskelkater-Symptome),
- Steigerung der Muskelkraft,
- Verbesserung der Hirndurchblutung,
- Reduktion von Kopfschmerzen,
- gesteigerte Wachheit,
- Steigerung der Konzentrationsf??higkeit,
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung auf die Muskulatur
Es ist kein Zufall, dass im Herzmuskel, in der Skelettmuskulatur sowie im Hirn besonders viel L-Carnitin vorzufinden ist. Es handelt sich dabei um Organe, die stark auf die Energieverwertung aus den Fetts??uren angewiesen sind ??? diese aber kann nur mithilfe von L-Carnitin optimal ablaufen. Die Muskulatur erm??det nicht mehr so schnell, Muskelkater und selbst gr????eren Muskelsch??digungen kann vorgebeugt werden, h??ufigere Trainingseinheiten werden erm??glicht und h??here Leistungssteigerungen werden erzielt. In Tierversuchen konnte eine intraven??se Verabreichung von L-Carnitin die Muskelkraft um bis zu 34 % erh??hen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung das Gehirn und das zentrale Nervensystem
L-Carnitin verbessert die kognitive F??higkeit, es wirkt der Hirnalterung, Demenz und Alzheimer entgegen, es steigert die Konzentration und Aufnahmef??higkeit (Lernf??higkeit) und beschleunigt die Zellerneuerung der Hirnzellen. Im Gegensatz zu den meisten Antioxidantien vermag Acetyl-L- Carnitin die Blut-Hirn-Schranke zu passieren und hier die Bildung von Nerven-Wachstumsfaktor-Rezeptoren, sogenannten NGFR, einerseits zu f??rdern und andererseits diese selbst zu sch??tzen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin auf das Immunsystem
Es verwundert nicht, dass die Immunzellen au??erordentlich viel L-Carnitin beinhalten, denn L-Carnitin gilt als nat??rlicher Immunstimulator; es transportiert die langkettigen Fetts??uren f??r die ATP-Produktion direkt in die Mitochondrien hinein. L-Carnitin bietet einen optimalen Schutz f??r die Zellmembranen, die Abwehrzellen des Immunsystems werden aktiviert und in ihrer Funktion gest??rkt. In Studien konnte Acetyl-L-Carnitin (ALC) die Aktivit??t der Lymphozyten erh??hen, die Makrophagenproduktion aufrechterhalten und den TSH-Spiegel erh??hen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Zusammenfassend hat L-Carnitin folgende Effekte auf unser Immunsystem:
- Steigerung der Produktion der Antik??rper
- Erh??hung der TNF-Alpha-Aussch??ttung
- Freisetzung von TNF-Alpha und Interleukinen
- Hemmung der Aggregation von Thrombozyten und Makrophagen
- Aktivierung der wei??en Blutk??rperchen
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
Im Tierversuch gelang es dem Acetyl-L-Carnitin, die Zirbeldr??se dazu anzuregen, wieder verst??rkt das ???Regenerationshormon??? Melatonin auszusch??tten. Melatonin gilt in der Anti-Aging-Forschung als eines der wichtigsten Hormone, die nach Meinung vieler Wissenschaftler die physische Alterung aufhalten k??nnen. Dar??ber hinaus konnte Acetyl-L-Carnitin einen erh??hten Cortisol-Spiegel wieder normalisieren. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.nac,
        text: `
Wirkung von L-Carnitin bei Herzrhythmusst??rungen
L-Carnitin wirkt Herzrhythmusst??rungen antirhythmisch entgegen und verhilft auf diese Weise, Entgleisungen von Herzrhythmusst??rungen bis zu Kammerflimmern zu verhindern. Wirkung von L-Carnitin bei Myocardiopathie Besonders Leistungssportler und Profisportler sind f??r Myocardiopathie anf??llig; sie betrifft 80 % aller F??lle, in denen Sportler am Herzen erkrankt sind. L-Carnitin hat sich bestens bew??hrt, eine Erkrankung zu vermeiden und bei akuten Problemen die ??berlebenschance zu erh??hen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin bei Lebererkrankungen
L-Carnitin hat sich bestens zum Schutz und zum Aufbau von Leberzellen bew??hrt und wird unter anderem aus diesem Grund bei Alkoholismus eingesetzt. Eine geschw??chte, kranke Leber verliert das Potenzial, hinreichend L-Carnitin zu synthetisieren. Hier empfiehlt es sich daher aus mehreren Gr??nden, auf L-Carnitin-Nahrungserg??nzungsmittel zur??ckzugreifen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin bei Krebs
L-Carnitin entfaltet seine Wirkung bei Krebs ??ber mehrere Mechanismen: Zun??chst st??rkt es nachweislich unser Immunsystem, das stets eine prim??re Rolle im Kampf gegen Krebs einnimmt. Des Weiteren wirkt es sich entgiftend aus, kann also bestimmte toxischen Substanzen aus dem K??rper entfernen, die nicht selten als Verursacher der Tumorerkrankung fungieren. L-Carnitin kann aber noch mehr gegen Krebs ausrichten: Es kann die Nebenwirkungen einer Chemotherapie schm??lern und die gesunden Zellen st??rken. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin bei Muskelschwund
Wie wir noch im ???L-Carnitin beim Sport??? lesen werden, wirkt L-Carnitin sowohl antikatabol (vor Muskelabbau sch??tzend) als auch anabol, also muskelaufbauend. Damit der K??rper aus den eigenen Reserven 1 g L-Carnitin herstellen kann, muss er rund 30 g Muskelmasse daf??r abbauen. Eine zus??tzliche Zufuhr von L-Carnitin wirkt sich also muskelsch??tzend aus, was den antikatabolen Effekt erkl??rt. L-Carnitin verbessert dabei die Energieversorgung der Myofibrillen, erm??glicht h??here Belastungen und wirkt der vorzeitigen Erm??dung entgegen. Alles in allem erweist sich L-Carnitin als optimal, um gegen Muskelschwund anzuarbeiten. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Wirkung von L-Carnitin auf die Fruchtbarkeit
L-Carnitin empfiehlt sich auch zur F??rderung der Kinderzeugung. F??r M??nner, die ??ber zu wenig Spermien im Ejakulat verf??gen oder deren Spermien nicht hinreichend aktiv sind, kann L-Carnitin eine echte Hilfe sein und die Fruchtbarkeit steigern. Studien konnten diesbez??glich einen positiven Effekt nach 3???6 Monaten regelm????iger Einnahme von 1 g L-Carnitin/Tag nachweisen. Nennenswert ist in diesem Zusammenhang die Tatsache, dass Spermien gro??e Mengen an Acetyl-L-Carnitin speichern und Acetyl-L-Carnitin die einzige Energieform ist, die den Spermien zur Befruchtung der weiblichen Eizelle dient. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin und Schwangerschaft
Darf oder sollte man sogar w??hrend der Schwangerschaft L-Carnitin einnehmen?

Wie bei allen Nahrungserg??nzungsmitteln fragt sich die werdende Mutter, ob eine Einnahme w??hrend der Schwangerschaft erlaubt ist oder aber Schaden anrichten k??nnte. Letzteres kann verneint werden; viel interessanter ist aber die Notwendigkeit einer zus??tzlichen Einnahme von L-Carnitin w??hrend der Schwangerschaft, und zwar sowohl f??r die werdende Mutter als auch f??r das heranreifende Kind. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Kann man mit L-Carnitin besser abnehmen?
Die Frage, ob L-Carnitin die Fettverbrennung steigern und beim Abnehmen helfen kann, l??sst sich aus der heutigen wissenschaftlichen Sicht mit einem klaren ???JA??? beantworten. Um aber s??mtliche Illusionen erst gar nicht aufkommen zu lassen, vermag L-Carnitin zwar Fetts??uren zu transportieren, es kann diese aber nicht von allein freisetzen (verbrennen). `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin h??lt Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Gr??nde f??r Alterung
Freie Radikale lassen unsere Zellen altern: Innerhalb der Alterung spielen die freie Radikale eine zentrale Rolle. Es handelt sich dabei um sch??dliche Sauerstoffverbindungen, die in hohen Konzentrationen unsere K??rperzellen, Zellmembranen und sogar unsere DNS angreifen. Um Krankheiten vorzubeugen und die biologische Alterung zu verz??gern, ist daher das ???oxidative Gleichgewicht??? die oberste Pr??misse, ein Gleichgewicht also zwischen der unvermeidlichen Entstehung von freien Radikalen einerseits und sch??tzenden Antioxidantien andererseits. Die freien Radikale sind teilweise unumg??nglich; so werden zum Beispiel 3 % unserer Atemluft zu sch??dlichen freien Radikalen, aber auch Sonneneinstrahlung (UV-Strahlen) und Nahrung erzeugt sch??dliche, freie Radikale. 
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin h??lt Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Wir stehen diesen zerst??rerischen Sauerstoffverbindungen, die zur sch??digenden Zelloxidation f??hren, zum Gl??ck nicht v??llig machtlos gegen??ber, denn einerseits k??nnen wir die Entstehung der freien Radikale positiv beeinflussen, indem wir zum Beispiel nicht rauchen und keinen Alkohol konsumieren, tierische Fette in der Nahrung einschr??nken, die k??nstlichen Sonneneinstrahlungen (Solarium) vermeiden und einen ??bertriebenen Leistungssport einschr??nken. Andererseits stehen uns zahlreiche sehr potente Besch??tzer unserer Zellen in Form sogenannter Antioxidantien zur Verf??gung, so zum Beispiel in Form von Vitamin C, OPC, Co-Enzym Q10, Beta-Carotin, Selen, Alpha-Lipons??ure, L-Carnosin und anderen. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin h??lt Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Verzuckerung (Glykolisierung) l??sst unser Gewebe altern: Ein zweiter entscheidender Mechanismus der Alterung ist die sogenannte Glykolisierung. Hierbei handelt es sich um ??bersch??ssigen Zucker, der sich mit unseren K??rperproteinen verbindet und deren Funktion nachhaltig st??rt ??? dies macht sich nicht nur ??u??erlich in Form von Falten bemerkbar, sondern f??hrt ebenfalls innerlich zum Nachlassen etwaiger Funktionen, die man dann dem Alterungsprozess zuschreibt. L-Carnitin, vermag, besonders in der bioaktivsten Form von Acetyl-L-Carnitin, beiden Mechanismen der Alterung zu trotzen, indem es sowohl die Zellen vor freien Radikalen als auch vor Glykolisierung sch??tzt. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin h??lt Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Die Mechanismen gegen Alterungsprozesse im Einzelnen
Zusammenfassend kann man folgende Mechanismen benennen, ??ber die L- Carnitin dem Alterungsprozess entgegenwirkt:

- Schutz vor Angriffen freier Radikale;
- Erneuerung anderer, aufgebrauchter freier Radikale (z. B. Alpha- Lipons??ure);
- Steigerung anderer Antioxidantien (z. B. Glutathion);
- Reduktion des oxidativen Stresses;
- Zerst??rung von freien Radikalen;
- Schutz der Omega-3-Fetts??uren vor der Zerst??rung dieser durch freie Radikale;
- Entgegenwirken der Glykolisierung (Verzuckerung der k??rpereigenen Proteine);
- Steigerung der kognitiven F??higkeiten;
`
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin h??lt Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Die aufsehenerregende Nicuta Regenerationstherapie In einem aufsehenerregenden Experiment haben Forscher der namhaften University of California mit einer Kombination von Acetyl-L-Carnitin und Alpha-Lipons??ure Erstaunliches entdeckt: Die K??rperzellen der Versuchstiere haben, unter dem Elektronenmikroskop einwandfrei zu erkennen, die Struktur jugendlicher Zellen angenommen, etwas, das selbst renommierte Zellbiologen wie Prof. Dr. Bruce. N. Ames sprachlos machte. Um es mit den Worten von Dr. Tory M. Hagen zu schildern, einem Biomediziner, der an den Versuchen ebenfalls beteiligt war: ???Auf den Menschen ??bertragen w??rde die Wirkung der Substanzen aus einem 75 bis 80 Jahre alten Menschen eine Person mittleren Alters machen.??? `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
L-Carnitin Anti-Aging
L-Carnitin h??lt Alterung auf und kann sogar die Anzeichen der Alterung revidieren.

Die altersschwachen Ratten legten bereits nach einem Monat Behandlung mit Acetyl-L-Carnitin und Alpha-Lipons??ure jungendliche Verhaltensmuster an den Tag; die Leistungs- und Ged??chtnistests schlossen sie mit Bravour ab und reagierten dabei wie ihre jungen Artgenossen. Sehr bald legten sie das starke Paarungsverhalten junger Tiere an den Tag und ??berlebten die Vergleichsgruppe nichtbehandelter Artgenossen um Einiges. Die Forscher schlossen daraus, dass die Kombination von Acetyl-L-Carnitin und Alpha-Lipons??ure synergetisch zu einer Reduktion des oxidativen Stresses f??hrt und die Sch??den der RNA/DNA nicht nur verlangsamt, sondern gar verhindert und ???was noch viel aufsehenerregender ist ??? teilweise wieder r??ckg??ngig macht. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
??? L-Carnitin steigert im Tierversuch die Laufgeschwindigkeit und Ausdauer: Bereits nach zehn Tagen der Anwendung konnte Acetyl-L- Carnitin im Tierversuch die maximale Laufgeschwindigkeit sowie die Ausdauerleistungsf??higkeit erh??hen.

??? L-Carnitin steigert die Leistung von Radfahrern um 11???19 % und senkt die Regenerationszeit: An der Universit??t von Basel konnte unter der Leitung von Prof. Walter im Vergleich zum Placebo (Scheinmedikament) eine Leistungssteigerung bei Radfahrern in allen Testdurchl??ufen zwischen 11 % und 19 % werden. `
    },
    {
        usefulInformationImageId: images_carnitin,
        quelleId: "3",
        afflinksId: afflinks.carnitin,
        text: `
Acetyl-L-Carnitin beugt dem Sauerstoffmangel im Herzmuskel vor
ALC konnte in Studien unter Beweis stellen, dass es im Herzmuskel einem Sauerstoffmangel vorbeugen kann.805
Acetyl-L-Carnitin verbessert die Membranfunktionen des Herzmuskels In Studien konnte Acetyl-L-Carnitin den R??ckgang des Phosphat-Carriers revidieren und damit die Energie??bertragung innerhalb des Herzmuskels verbessern.

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
L-Carnitin kann bei Erwachsenen bis zu 5000 mg am Tag eingenommen werden; bei Kindern gilt eine Empfehlung von 25???100 mg pro kg K??rpergewicht. Da der menschliche K??rper erst ab dem 15. Lebensjahr ??ber eine voll funktionierende L-Carnitin-Synthese verf??gt, m??ssen S??uglinge und Kinder L-Carnitin in ausreichender Menge ??ber die Nahrung erhalten. Des Weiteren weisen Vegetarier, Veganer, Leistungssportler, Schwangere sowie Stillende und Menschen, die unter Eisenmangel leiden, Frauen, welche die Pille nehmen, und Menschen, die unter Dauerstress stehen, h??ufig zu niedrige L- Carnitin-Plasmawerte auf und sind daher auf eine zus??tzliche L-Carnitin- Einnahme angewiesen. Hier empfiehlt sich eine t??gliche Einnahme von bis 1000 mg L-Carnitin und eventuell mehr.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Was ist L-Carnosin ??? erfahren Sie Fakten
L-Carnosin ist ein Dipeptid, das sich aus den chemisch aneinander gebundenen Aminos??uren Beta-Alanin und L-Histadin zusammensetzt. Aufgrund der ausgesprochenen Schutzeffekte auf unser Gehirn wird es auch als ???Neuropeptid??? bezeichnet. Bislang noch ein echter Insider in Anti-Aging-Kreisen, erfreut sich das der breiten Masse erst seit relativ kurzer Zeit zur Verf??gung stehende L-Carnosin eines wachsenden Interesses. Dies kommt sicherlich nicht von ungef??hr, denn die verj??ngende Wirkung best??tigen viele Anwender bereits nach relativ kurzer Zeit, und immer mehr aktuelle Studien zu L-Carnosin lassen aufhorchen und sind mehr als verhei??ungsvoll ???
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Der Mensch lebt solange, solange sich seine K??rperzellen teilen k??nnen. Die Wissenschaft geht davon aus, dass sich die Zellen ca. 60???80 x teilen k??nnen, bevor sie versterben, man nennt dieses Limit auch ???Hayflick-Grenze???. Versterben die Zellen, stirbt der Mensch selbst. W??hrend die Alterung einer Zelle bis vor kurzer Zeit noch als irreversibel (nicht umkehrbar) galt, konnten australische Forscher j??ngst in aufsehenerregenden Experimenten das Gegenteil beweisen: In einem mit Carnosin getr??nkten N??hrmedium konnten sie die Lebenszeit menschlicher Zellen im Labor auf 413 Tage verl??ngern, w??hrend die Kontrollgruppe (ohne Carnosin) lediglich eine Lebensdauer von 130 Tagen erreichte!
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Und als w??re dies nicht genugschw??rmen ??rzte und Therapeuten von L- Carnosin zunehmend in h??chsten T??nen, wenn es beispielsweise um neurologische Erkrankungen, wie Alzheimer, Autismus, Parkinson und andere, geht. Dabei handelt es sich bei L-Carnosin um einen k??rpereigenen, zu 100 % nat??rlichen Stoff, der besonders geh??uft in langlebigen Zellen, wie den Muskel- und Nervenzellen, aber auch im Herzmuskel, in den Nieren, der Leber, dem Hirn und anderen Organen vorkommt. Jede einzelne unserer rund 70 Billionen K??rperzellen wird jeden Tag etwa 10 000 bis 80 000 Mal den Angriffen der freien Radikalen ausgesetzt, die eine zerst??rerische Wirkung nach sich ziehen, zu zahlreichen Erkrankungen und zu vorzeitiger Alterung f??hren.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin stellt eines der wirksamsten Antioxidantien dar, um diesen zerst??rerischen Angriffen zu trotzen, das uns die Natur zur Verf??gung bietet. Es ist ein erstklassiger Immunsystem-Booster, vor allem aber ein Zellerneuerer, der in vielen Studien unter Beweis stellen konnte, dass er nicht wie die anderen ???gew??hnlichen??? Antioxidantien unsere Zellen lediglich besch??tzen, sondern gar Zellen, die bereits gealtert sind, wieder verj??ngen und deren Lebenszyklus verl??ngern kann!
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Leider sinkt im Laufe unseres Lebens mit dem Alter unser L-Carnosin-Spiegel; es handelt sich dabei um einen Schwund um ca. 63 % zwischen dem 10. und 70. Lebensjahr. Viele Altersforscher geben exakt diesem Ph??nomen die Schuld an der physiologischen Alterung und den mit ihr verbundenen Erkrankungen. Obwohl L-Carnosin nat??rlicherweise im Fleisch vorkommt, sind diese Mengen verh??ltnism????ig gering. Besonders also Vegetarier und Veganer kommen in punkto L-Carnosin entscheidend zu kurz. Erfreulicherweise steht uns Menschen seit wenigen Jahren der Naturstoff ???L- Carnosin??? als Nahrungserg??nzung zur Verf??gung. Auch, oder gerade mit diesem nat??rlichen Mittel, wurde uns ein nicht geringer Einfluss auf unsere biologische Alterung, die M??glichkeit der biologischen Verj??ngung sowie die Vermeidung von zahlreichen Erkrankungen an die Hand gegeben. Lesen Sie in weiteren Punkten mehr[...] 
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Die antioxidative Wirkung von L-Carnosin

Rund 80 % aller Krankheiten, einschlie??lich der vorzeitigen Alterungsprozesse, gehen auf das Konto der Zellzerst??rung durch freie Radikale. Tagt??glich werden unsere ca. 70 Billionen Zellen rund 10???80 000 Angriffen von freien Radikalen ausgesetzt. Was sind freie Radikale? Freie Radikale entstehen durch Ozon, UV-Strahlung, Nikotin, Medikamente und Stress, aber auch ganz nat??rlich durch verschiedene Stoffwechselprozesse in unserem K??rper.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Schwermetallbindende Wirkung von L-Carnosin

Indem es sich mit toxischen Metallen, wie Blei, Quecksilber, Arsen, Nickel und Kadmium, sowie prooxidativen Metallen wie Kupfer und Zink verbindet, unterst??tzt es den K??rper, sich von diesen sch??dlichen Substanzen zu befreien. Spezielle Wirkung von L-Carnosin Die allgemeinen Vorz??ge des L-Carnosin versprechen eine breit gef??cherte, spezielle Wirkung auf diverse Krankheitszust??nde. Hierzu z??hlen die folgenden Erkrankungen oder unerw??nschte Zust??nde, auf die L-Carnosin positive Wirkung aus??ben kann: `
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Wirkung von L-Carnosin gegen Alzheimer

Es werden multifaktorielle Ursachen f??r Alzheimer diskutiert. Wahrscheinlich ist, dass ein Protein namens Proteasom, das f??r den Abbau und die Entfernung besch??digter Hirnzellen aus dem Gehirn verantwortlich ist, nicht ordnungsgem???? produziert wird. Hier entfacht L-Carnosin seine positive Wirkung, indem es das Proteasom sch??tzt und auf diese Weise hilft, Alzheimer zu vermeiden oder bei einer bestehenden Alzheimer-Krankheit Besserung bringen kann.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Weitere neurologische Erkrankungen und kognitive St??rungen, auf die L-Carnosin positiv einwirken kann

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

Laborversuche an Zellkulturen unterschiedlicher Krebsarten haben gezeigt, dass L-Carnosin offensichtlich eine zytotoxische (giftige) Wirkung auf menschliche Krebszellen hat. Die Zellkulturen waren sehr bald frei von Krebszellen, sobald L-Carnosin hinzugef??gt wurde. Wirkung bei altersbedingter Sehschw??che und Grauem Star L-Carnosin stellt sich in Form von speziellen Augentropfen mit der Bezeichnung ???NAC-Tropfen??? als ??u??erst effektiv gegen altersbedingte Sehschw??che und Grauen Star dar (siehe Punkt ???Studien??? ).
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Wirkung bei altersbedingter Sehschw??che und Grauem Star

L-Carnosin stellt sich in Form von speziellen Augentropfen mit der Bezeichnung ???NAC-Tropfen??? als ??u??erst effektiv gegen altersbedingte Sehschw??che und Grauen Star dar (siehe Punkt ???Studien??? ).
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
Wirkung von L-Carnosin auf Herzkreislauferkrankungen  

- L-Carnosin erh??ht die Kontraktion des Herzmuskels bei dessen Arbeit; das Herz kann effizienter und zugleich ??konomischer arbeiten.
- L-Carnosin senkt einen erh??hten Blutdruck, der das Herz nach und nach sch??digt.
- L-Carnosin senkt einen erh??hten Cholesterinspiegel, der zu Ablagerungen und Arteriosklerose f??hrt.
- L-Carnosin verhindert nicht nur die Entstehung von Arteriosklerose, sondern kann diese sogar teilweise r??ckg??ngig machen.
- L-Carnosin beugt einem Sauerstoffmangel bei Herzkranzerkrankungen vor.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin sch??tzt vor Schlaganfall

L-Carnosin kann durch seine blutdruck- und cholesterinspiegelsenkende sowie
durch seine protektive Wirkung gegen Arteriosklerose einem Schlaganfall vorbeugen.

L-Carnosin sch??tzt vor schlimmen Sch??den eines akuten Schlaganfalls

In Studien konnte L-Carnosin einen sch??tzenden Effekt auf die Hirnzellen w??hrend eines Schlaganfalls unter Beweis stellen. L-Carnosin agiert dabei als Neuro??bertr??ger und sch??tzt au??erdem das zellul??re Enzym ???Proteasom??? vor der Zerst??rung. Auf der anderen Seite sch??tzt es vor einer ??berstimulierung des Hirns durch bestimmte Rezeptoren.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin wirkt gegen Alterung und verj??ngt aktiv

Zumeist wird L-Carnosin mit Anti-Aging, also der biologischen Verj??ngung, assoziiert, die ihm in diversen Studien, auf die wir im sp??teren Verlauf noch eingehen werden, eine phantastische Wirkung attestiert.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin hilft in Studien gegen altersbedingte Sehschw??che und Grauen Star

L-Carnosin hilft innerlich wie ??u??erlich bei Augenproblemen. Auf der Basis von L-Carnosin, gelten Augentropfen (sogenannte NAC-Tropfen) in Fachkreisen als hochgradig effizient gegen altersbedingte Sehschw??che sowie Grauen Star. In 80 % der F??lle waren die L-Carnosin-Tropfen beim prim??ren Altersstar und in 100 % sogar beim reifen Altersstar wirksam.
`
    },
    {
        usefulInformationImageId: images_lcarnosin,
        quelleId: "3",
        afflinksId: afflinks.lcarnosin,
        text: `
L-Carnosin st??rkt in Studien auf nat??rliche Weise die Potenz

Die Produktion von Stickstoff-Sauerstoff ist die absolute Voraussetzung, um eine Erektion zu erlangen und diese dann m??glichst lange zu halten. F??r Stickstoff-Sauerstoff stellt aber Carnosin das nat??rliche Substrat dar. Es verwundert daher nicht, dass L-Carnosin Erektionsprobleme zu l??sen vermag.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
DER Schl??ssel zur ewigen Jugend und Gesundheit?

Sehr viele B??cher sind mittlerweile dar??ber geschrieben worden, und doch ist es nur wenigen Menschen gel??ufig. Selbst Mediziner wissen erstaunlich wenig dar??ber. Die Rede ist von Melatonin.

Stellen Sie sich vor, es g??be ein k??rpereigenes Hormon, das nicht nur das Altern verz??gert, sondern sogar biologisch verj??ngt. Und als w??re dies nicht genug, verhindert dieses Hormon leidbringende Erkrankungen, wie Krebs, Herzinfarkt, Schlaganfall, Diabetes, Grauen Star oder Alzheimer. Und da dies zum ultimativen Gl??ck noch nicht ganz reicht, steuert es unseren biologischen Rhythmus und gibt uns am Tage Energie zur Bew??ltigung unserer Tagesaufgaben und nachts verleiht es uns einen erholsamen, tiefen Schlaf ...
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
DER Schl??ssel zur ewigen Jugend und Gesundheit?

Die Rede kann nur von Melatonin sein, einem k??rpereigenen Hormon, das in der Zirbeld??se im Gehirn (Stammhirn) produziert wird.

Sicherlich w??rde man so etwas dem Reich der Mythen und M??rchen zuweisen, wenn ??? ja, wenn nicht die vielen aufsehenerregenden Arbeiten, Studien und Forschungen von namhaften ??rzten und Wissenschaftlern in aller Welt w??ren, die Melatonin im Hinblick auf Lebensverl??ngerung, Vorbeugung und Heilung von selbst als ???unheilbar??? geltenden Krankheiten erstaunliche Eigenschaften zuschreiben.

Erstmalig gelang es den Wissenschaftlern Dr. William Regelson und Walter Pierpoali, die Bedeutung der Zirbeldr??se f??r unsere Lebensdauer im Tierversuch nachzuweisen. Dazu wurden kurzerhand ??lteren M??usen die Zirbeldr??sen j??ngerer M??use, und umgekehrt j??ngeren M??usen die Zirbeldr??sen ??lterer M??use [...]
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Die j??ngeren M??use mit der ??lteren Zirbeldr??se erreichten im Durchschnitt lediglich 510 Tage, w??hrend die ??lteren M??use, denen man die j??ngere Zirbeldr??se verpflanzt hatte, dieses Alter auf durchschnittlich 1020 Tage verdoppeln konnten!

Um aber diesen erstaunlichen Effekt auch wirklich ausschlie??lich dem Melatonin zuschreiben zu k??nnen, entschied sich Dr. Regelson, einen Gegenversuch zu starten, in dem er einer Gruppe der M??use normale Ern??hrung und der anderen Gruppe zu der gleichen Ern??hrung zus??tzlich Melatonin verabreichte.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
W??hrend diejenigen M??use, die ausschlie??lich ihre Nahrung verabreicht bekamen, im ??blichen Alter von 24???25 Monaten verstarben, lebten die ???Melatonin-M??use??? noch sechs Monate l??nger, was 30 % Lebensverl??ngerung 1616und umgerechnet einer zus??tzlichen menschlichen Lebenszeit von 25???30 Jahren entspricht! Mehr noch: Im Gegensatz zu der Kontrollgruppe waren die zus??tzlich mit Melatonin gef??tterten M??use bis zu ihrem Tod vital und gesund! Sie fingen an, sich zu verj??ngen, bis sie das Verhalten und Aussehen von jungen M??usen annahmen.

Es handelte sich um einen Meilenstein in der Erforschung der biologischen Alterung, der der Zirbeldr??se seitdem eine sehr wichtige, wenn nicht gar entscheidende Funktion bei der Steuerung der Altersprozesse zukommen l??sst.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Des Weiteren ist es ein Beweis daf??r, dass die von Kritikern h??ufig angezweifelte Aufnahmef??higkeit und Verarbeitung des K??rpers von einer Melatonin-Nahrungserg??nzung zweifelsfrei funktioniert!

???Hmm???, k??nnten Sie jetzt sagen ??? ???... als Indiz daf??r, dass Melatonin der Schl??ssel zur Jugend ist, k??nnte man es ja vielleicht gelten lassen, was aber ist mit der sagenumwobenen Gesundheit, die Melatonin ebenfalls f??rdern soll???? In diesem Zusammenhang ist es interessant zu erw??hnen, dass die im oben erw??hnten Tierversuch mit Melatonin gef??tterten M??use allesamt bis zu ihrem Tod gesund blieben und krebsfrei verstarben, w??hrend die Nicht-Melatonin- M??usegruppe in der Mehrheit dem Krebs erlag!
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
???Das Wunderbare an Melatonin ist, dass es Ihr Leben verl??ngern und Ihre Gesundheit und Vitalit??t erhalten kann. Das wirklich Wunderbare an Melatonin ist die grosse Wirkung, die es auf unsere und auf zuk??nftige Generationen haben wird.

Wir begeben uns auf ein gemeinsames Abenteuer und sind die erste Generation, die die Macht hat, die Krankheiten und Schw??chen zu vermeiden, die als typisch f??r eine "normale" Alterung gelten. Zum ersten Mal haben wir die Macht, unsere Jugendlichkeit zu bewahren und unser ganzes Leben lang kr??ftig und munter zu bleiben.

Zum ersten Mal k??nnen wir nicht nur den k??rperlichen Verfall vermeiden, der mit der Alterung verbunden ist, sondern wir sind in der Lage, den Alterungsprozess hinauszuz??gern und sogar umzukehren. Das ist das echte Melatonin-Wunder.???
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin macht aber noch viel mehr; unter anderem ist es ein wichtiger Assistent des Immunsystems, indem es Angreifer und Erreger entdeckt und vernichtet. Dr. Walter Pierpaoli und Prof. William Regelson vertreten die Meinung, dass das Immunsystem im Alter zusammenbricht, weil die Zirbeldr??se aufgrund der eigenen Alterung ihre Funktion, n??mlich die Aussch??ttung von unter anderem Melatonin, nicht mehr ausreichend erf??llen kann.

Ihrer ??berzeugung nach kann eine zus??tzliche Einnahme des Melatonins unser Immunsystem auf den Stand unserer Jugend zur??ckf??hren; wir w??rden dadurch widerstandf??higer und ges??nder bleiben.840 Des Weiteren gilt Melatonin als eines der st??rksten bekannten Antioxidantien, das mit der 50- fachen St??rke von Vitamin C freie Radikale bek??mpft.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Die Zirbeldr??se ??? eine wichtige Lebensuhr

Die Zirbeldr??se bestimmt unter anderem unseren Lebensrhythmus. Im Tierreich sind diese Rhythmen besonders gut zu beobachten; so weckt die Zirbeldr??se im Fr??hjahr lustvolle Gef??hle, die zur Paarung f??hren, zum Herbst hin signalisiert sie den Zugv??geln, dass es Zeit ist zum Aufbruch in den warmen S??den, anderen Tieren gibt sie Signale, sich ein Winterquartier zu suchen, um diese zum Fr??hjahr aus ihrem Winterschlaf zu wecken. Bei uns Menschen hilft die Zirbeldr??se, den jahreszeitlichen Hormonspiegel zu erhalten; sie regelt unter anderem unser Wachstum und unsere Entwicklung von Kindheit an bis ins Erwachsenenalter.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Laut einer Graphik des Magazins ???Focus??? erreicht Melatonin im Alter von acht Jahren mit ca. 125 Picogramm pro ml Blut die h??chste Konzentration. Die erste starke Abnahme des Melatonins erfahren wir mit 16 Jahren im Zuge der Pubert??t (ca. 87 Picogramm/ml Blut). Mit 45 Jahren produzieren wir nur noch halb so viel Melatonin wie in der Kindheit (ca. 50 Picogramm/ml Blut) und mit 80 Jahren produziert die Zirbeldr??se kaum noch Melatonin (25 Picogramm/ml).

Parallel dazu macht sich die Alterung ab dem 45. Lebensjahr nun auch deutlich optisch bemerkbar; in unserem Inneren wirkt sie sich gleichzeitig negativ aus, f??hrt zu physiologischer Degeneration und macht uns f??r zahlreiche Erkrankungen anf??llig. Dies ist auch nicht verwunderlich, wird der Zirbeldr??se doch schlie??lich eine H??chstleistung an Funktionen zugemutet.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
S??mtliche Altersanzeichen aller unserer Organe seien in Wirklichkeit auf das Altern und damit den Funktionsnachlass der Zirbeldr??se zur??ckzuf??hren, so die These von Prof. William Regelson und Walter Pierpaoli. Nach 30 Jahren Forschung teilen die beiden die ??berzeugung, dass man die Altersuhr anhalten, ja gar zur??ckdrehen ??? und der Mensch 120 Jahre und ??lter werden k??nne. In R??ntgenuntersuchungen ??lterer Menschen l??sst sich die Degeneration der Zirbeldr??se visuell in Form von Kalkablagerungen darstellen. Diese Kalkablagerungen als Zeichen der Alterung der Zirbeldr??se f??hren zu einem stetigen Nachlass des Melatonins mit der hiermit verbundenen Zellalterung samt Funktionseinbu??en der Organe.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Des Weiteren f??hrt die Alterung zur Schrumpfung der Zirbeldr??se und zum Verlust der Pinealocyten, der Zellen also, die f??r die Melatoninproduktion zust??ndig sind. Gleichzeitig altert die Netzhaut unseres Auges, die die Lichtsignale an die Zirbeldr??se weiterleiten und zu einer immer unverl??sslichen Signal??bertragung f??hrt, ein Teufelskreis der Alterung. Im n??chsten Punkt ???Melatonin-Wirkung??? erfahren Sie mehr Fakten zu diesem hochinteressanten Thema.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin, die Wirkung ??? wie und wogegen wirkt es?
Noch vor wenigen Jahrzehnten von den Forschern und ??rzten als ???Blinddarm des Gehirns??? als unn??tz abgetan, haben die letzten Jahre v??llig neue, plausible Zusammenh??nge zwischen der Alterung und Erkrankungen an den Tag gelegt, die die Zirbeldr??se zu einer wichtigen Steuereinheit f??r unseren gesamten Organismus haben avancieren lassen. Mit der Alterung der Zirbeldr??se und damit dem Nachlassen der Melatoninproduktion altert der Mensch im Ganzen. W??hrend der Alterung wird der Mensch charakteristisch anf??lliger f??r allerlei Erkrankungen, so Herzkreislauferkrankungen, Diabetes, Krebs oder Impotenz. `
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
In der wissenschaftlichen Literatur wird dem Melatonin explizit die Wirkung auf die folgenden Erkrankungen und Missst??nde attestiert:

- Krebs
- Diabetes
- Rheuma
- Allergien
- Herzkreislauferkrankungen
- Schlafst??rungen
- Stress
- Migr??ne
- Jetlag
- Asthma
- Wechseljahresbeschwerden/Klimakterium
- Down-Syndrom
- Alzheimer
- Epilepsie
- Sehschw??che
- Grauer Star
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin als h??chst effizientes Antioxidans auf das Herz

Tagt??glich werden unsere K??rperzellen, so auch die Herzzellen, zum Ziel unz??hliger Angriffe vonseiten freier Radikale, die rund 70 000 x t??glich vorkommen. Die zerst??rerischen Eigenschaften der Oxidation kennen wir vom Metall, das durch Oxidation zu Rost wird, oder von Bildfarben, die verblassen, und ??l, das ranzig wird. Freie Radikale f??hren zu einer ebensolchen Oxidation und damit zur Zerst??rung unserer Zellen. Melatonin ist als k??rpereigenes Antioxidans 50-mal effizienter als Vitamin C und z??hlt daher zu den st??rksten bislang entdeckten Antioxidantien. Die sch??tzende Wirkung auf die Blutgef????e und das Herzgewebe verh??tet Herzinfarkt, Schlaganfall, Angina Pectoris, Herzversagen und andere Herzkreislauferkrankungen.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin auf den Blutdruck

Melatonin ist in seiner Funktion als ???Schlafbereiter??? blutdruckregulierend. Des Weiteren st??rkt es unser Immunsystem, sodass der K??rper weniger Cortisocosteroide produzieren muss, die aber nachweislich den Blutdruck erh??hen. Daher kann ein erh??hter Blutdruck mithilfe von Melatonin gesenkt werden. Im Tierversuch hat die Entfernung von Zirbeldr??sen zum sofortigen Anstieg des Blutdrucks gef??hrt.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin auf den Cholesterinspiegel

Melatonin senkt auch das LDL-Cholesterin, das als ???schlechtes??? Cholesterin zu Herzproblemen f??hrt. Die Zirbeldr??se, die f??r die Produktion und Aussch??ttung von Melatonin zust??ndig ist, scheint auch eine wichtige Rolle in der Regulierung der Cholesterinwerte einzunehmen, denn mit dem Entfernen der Zirbeldr??se schnellten im Tierversuch der Cholesterinspiegel sowie andere Triglyzeridwerte nach oben.

Die Forscher Pierpaoli und Regelson glauben, dass das Melatonin durch die Einflussnahme auf die Aussch??ttung von Schilddr??senhormonen einen regulierenden Einfluss auf den Cholesterinspiegel aus??bt.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin auf die elektrische Aktivit??t des Herzmuskels

Unser Herz arbeitet ??ber ein autonomes System, das auf elektrischen Impulsen basiert. Melatonin beeinflusst positiv die elektrische Aktivit??t des Herzmuskels ??ber den sogenannten ???Calcium-Kanal??? und optimiert so dessen Arbeit. Das Herz arbeitet ??konomischer und effizienter zugleich.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin-Wirkung bei Asthma

Einer Studie an der Hadassah Medical School der Hebr??ischen Universit??t in Israel zufolge stellte sich intraven??s verabreichtes Melatonin im Tierversuch als ???ausgezeichneter Bronchodilator??? heraus.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin gegen Krebs

Bereits Untersuchungen aus dem Jahr 1940 zeigten, dass eine in der Zirbeldr??se gebildete Substanz das Wachstum von Tumoren verhindern konnte, und umgekehrt, dass die Entnahme oder Zerst??rung der Zirbeldr??se zu einem schnelleren Wachstum und zur Wucherung von Tumoren f??hrte, auch wenn man die Substanz (Melatonin) zum damaligen Zeitpunkt noch nicht identifizieren konnte.

Tats??chlich produziert zu Beginn einer Krebserkrankung der K??rper mehr Melatonin, um den Tumor zu bek??mpfen. Neuere Studien konnten offenlegen, dass Melatonin das Wachstum von Brustkrebszellen im Labor sowie bei M??usen verlangsamt und bei Hamstern das Wachstum des Melanoms (Hautkrebs) um das F??nffache verlangsamt und die Metastasierung verz??gert.[...]
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin bei Depressionen

Besonders in den dunklen Wintermonaten leiden viele Menschen unter Depressionen. Melatonin als Gegenspieler von Serotonin von au??en zugef??hrt, so die Kritiker, k??nnten die Depressionen verschlimmern. Die Bef??rworter weisen wiederum auf die F??higkeit von Melatonin hin, Stress zu d??mpfen, und erw??hnen dessen Regulationsmechanismen, um die somatischen sowie die mentalen Regenerationsprozesse zu optimieren.847 Melatonin k??nnte also in richtigen Dosen und zur richtigen Tageszeiten verabreicht eventuell sehr hilfreich gegen Depressionen sein. Patienten, die an Depressionen leiden und in ??rztlicher Betreuung sind, sollten dieses allerdings zuvor mit ihrem behandelnden Arzt besprechen.`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin gegen chronische ??berforderung und Stress

Melatonin hat sich als echtes Antistress-Hormon herausgestellt. Dies erreicht es, indem einerseits das Stresshormon ???Cortisol??? sowie die Corticosteroide gehemmt und auf der anderen Seite psychoregenerative Kr??fte in Ruhephasen mobilisiert werden. Des Weiteren senkt Melatonin den Puls und den Blutdruck und sorgt somit f??r eine ??konomische Arbeit unseres Herzkreislaufsystems, was die Langlebigkeit des Herzens f??rdert.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung gegen Impotenz und schwache Libido

Auch im Falle der Impotenz oder einer schwachen Libido scheint Melatonin auf mehreren Fronten zu wirken, indem es Stressfaktoren abbaut. Impotenz, noch vor wenigen Jahren ein Schlagwort f??r fehlende Potenz eines alten Mannes, breitet sich zunehmend auch unter jungen M??nnern aus. Dies hat, neben Umweltfaktoren und falscher Ern??hrung, in erster Linie mit Stress im Beruf als Ursache zu tun. Da Melatonin die Stressoren reguliert und Stress direkt abbaut, kann einer stressbedingten Impotenz und schwacher Libido entgegengewirkt werden.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin sch??tzt die Sexualorgane vor Alterung

Erste Erkenntnisse zu diesem Mechanismus, der sich gravierend positiv auf die Potenz und Libido sowie auf die sexuelle Aktivit??t auswirkt, gewannen die Forscher Prof. Dr. William Regelson und Dr. Walter Pierpaoli im Tierversuch an ??lteren M??usen, die dem Alter eines 70-j??hrigen Menschen entsprachen. Versorgt mit Melatonin, wiesen deren Hoden und Eierst??cke nicht die f??r das hohe Alter typische Schrumpfung auf. Sowohl die m??nnlichen als auch die weiblichen Tiere blieben untypischerweise f??r das Alter sexuell aktiv.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin bei Alzheimer

Bei Alzheimer-Patienten l??sst sich ein niedriger Melatoninspiegel diagnostizieren, der m??glicherweise darauf zur??ckzuf??hren ist, dass die Nervenbahnen von der Zirbeldr??se zum Auge mit weniger Nerven versehen sind. Zu den Symptomen von Alzheimer geh??rt daher ein gest??rter Biorhythmus einschlie??lich eines gest??rten Schlaf-Wach-Rhythmus. Hier wird bereits von vielen ??rzten Melatonin verschrieben. Erfahrungsgem???? k??nnen Antioxidantien die Erkrankung hinausz??gern, h??ufig sogar die Symptome vermeiden. Da Melatonin als wichtigstes Antioxidans fungiert, ist ihm neben anderen Antioxidantien wie OPC, Vitamin C, Vitamin E, Selen oder Q10 ein hoher Stellenwert in der Therapie von Alzheimer beizumessen.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin bei Diabetes

Ein erstes ernst zu nehmendes Indiz daf??r, dass Melatonin bei Diabetes helfen kann oder diese erst gar nicht entstehen l??sst, ist die Tatsache, dass man bei Patienten, die unter insulinunabh??ngigem Diabetes (auch Altersdiabetes genannt) leiden, erniedrigte Melatonin-Werte vorfand. Indem das Melatonin dabei hilft, die Produktion von Wachstumshormonen zu kontrollieren, k??nnte es auch dabei helfen, Diabetes zu verhindern und den Blutzuckerspiegel zu regulieren.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung auf die Sehkraft und den Grauen Star

Neben der Zirbeldr??se und den Verdauungsorganen befindet sich Melatonin ebenfalls in der Augennetzhaut. Gem???? den Studien der beiden Melatonin- Forscher Prof. Regelson und Dr. Pierpaoli verbesserten sich alle Organe der mit Melatonin gef??tterten, alten M??use. Keine der mit Melatonin behandelten M??use ist an Grauem Star erkrankt. Es ist daher sehr wahrscheinlich, dass das Melatonin unsere Sehkraft verbessern und m??glicherweise vor Grauem Star sch??tzen kann.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wirkung von Melatonin bei Jetlag

Der Jetlag tritt dann auf, wenn in k??rzester Zeit mehrere Zeitzonen ??berflogen werden und die innere Uhr durcheinander ger??t. Jetlag-Symptome sind M??digkeit, Gereiztheit und Konzentrationsschw??che, aber auch Anf??lligkeit f??r Infektionen. Gerade davon betroffene Berufsgruppen, wie die der Piloten, Stewardessen oder Gesch??ftsreisenden, unterliegen einem gr????eren statistischen Risiko, an Herzleiden oder Immunschw??che zu erkranken. Der Botenstoff Melatonin vermag die biologische Uhr einzustellen, f??r geruhsamen Schlaf zu sorgen und so den oben genannten Krankheiten zu trotzen.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Kurz gesagt: Melatonin ist bestens dazu geeignet, einen erholsamen Schlaf zu f??rdern und wird sowohl bei Schlafproblemen als auch bei Jetlag empfohlen. Dies ist eine bemerkenswerte Tatsache, wenn man bedenkt, dass allein in der BRD 600???700 000 Menschen Schlafmittel einnehmen; w??hrend diese h??ufig zur Sucht f??hren und die Tiefschlafphase lediglich mit Verz??gerung einleiten, gilt Melatonin als nebenwirkungsfrei und f??hrt bereits nach 60 Minuten zur Tiefschlafphase.

`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Melatonin stoppt Alterung

Nicht nur im Kampf gegen Erkrankungen (das eine resultiert h??ufig aus dem anderen), sondern auch gegen Alterung bedient sich Melatonin verschiedener Mechanismen, die unsere Zellen verj??ngen und l??nger leben lassen. Umgekehrt haben die Forscher bei Kindern, die an Progerie (rasch voranschreitende Vergreisung) leiden, ein nahezu vollst??ndiges Melatonin-Defizit festgestellt.851 Es ist kein Zufall, dass der Schlaf als ???die t??gliche Verj??ngungskur??? bezeichnet wird, was sich bereits optisch durch eine glattere Haut manifestiert, denn ausschlie??lich w??hrend des Schlafs werden die Fl??ssigkeits- und Fettdepots unter der Haut aufgef??llt. Schlaf belebt den gesamten Organismus und gibt wieder Energien frei, er entspannt und erfrischt zugleich.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Regeneration der Zirbeldr??se als prim??res Ziel der Melatonineinnahme

Die Forscher Pierpaoli und Regelson konnten in ihren jahrelangen Studien den Nachweis erbringen, dass die zus??tzliche regelm????ige Einnahme von Melatonin nicht nur w??hrend der Einnahme Alterungsprozesse verlangsamt und Verj??ngung erzielt, sondern parallel dazu ??ber einen l??ngeren Einnahmezeitraum die gealterte, funktionseingeschr??nkte Zirbeldr??se neu beleben und wieder regenerieren kann.
`
    },
    {
        usefulInformationImageId: images_melatonin,
        quelleId: "3",
        afflinksId: afflinks.melatonin,
        text: `
Wann ist es zu sp??t f??r die Einnahme von Melatonin?
Kurz und knapp: NIE!

Gem???? den Untersuchungen von Prof. William Regelson, Dr. Walter Pierpaoli und vielen anderen Forschern stehen die Chancen auch bei Menschen gut, die l??ngst das 45. Lebensjahr ??berschritten haben, die Zirbeldr??se ??ber eine l??ngere, regelm????ige Melatonineinnahme wieder neu zu beleben und zu einer nat??rlichen Melatoninproduktion anzuregen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Was ist MMS?

Miracle Mineral Supplement, abgek??rzt MMS, bedeutet ??bersetzt auf Deutsch: Wundersames Mineralien-Nahrungserg??nzungsmittel Dies ist ein extrem verhei??ungsvoller Name f??r etwas, das kaum jemand kennt. Es geh??rt schon in der Tat eine geballte Ladung von positiven Wirkungen dazu, um eine derartig hochgegriffene Bezeichnung auch nur ann??hernd zu rechtfertigen!

Glaubt man dem Autor des Buches ???MMS: der Durchbruch???, Jim Humble, der zugleich derjenige ist, der MMS popul??r gemacht hat (MMS wurde erstmalig bereits 1926 von Dr. William Koch verwendet und ist seit den 1930er-Jahren in den USA in Gebrauch), dann hat sein ???wundersames??? Mittel bereits ??ber 75 000 Menschen geheilt, die an t??dlichen Erkrankungen wie Malaria, AIDS, Krebs, Hepatitis, Herpes oder Tuberkulose litten.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Die weitaus meisten Erfahrungen mit dem Mineralstoff MMS machte Humble in Afrika und Mexiko, da MMS weder in USA noch in Europa zugelassen ist und bestimmte M??chte stark daran interessiert zu sein scheinen, dass dieser Zustand unver??ndert bleibt. Laut Humble soll die Regierung von Malawi in S??dostafrika Testreihen mit MMS mit einer Heilungsquote von 99 % durchgef??hrt haben. Demnach waren ??ber 90 % aller behandelten Patienten innerhalb von maximal acht Stunden wieder gesund, und 60 % der in Uganda behandelten AIDS-Patienten waren binnen drei Tagen symptomfrei, 98 % innerhalb eines Monats. Sollten seine Behauptungen Best??tigung finden, ist die ambitionierte Bezeichnung um das ???wundersame Supplement??? durchaus als legitim zu betrachten ??? und es gibt sehr viele Indizien, die dieses untermauern. Mehr dazu lesen Sie in den folgenden Abschnitten
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Miracle Mineral Supplement ??? was ist das?

wird Sie sicherlich erstaunen zu lesen, dass der Hauptbestandteil dieses Miracle Mineral Supplement etwas ist, mit dem Sie bereits im Ihres Lebens unz??hlige Male aktiv oder passiv konfrontiert waren: mit der chemischen Formel (ClO2). kennen wir aus unz??hligen Anwendungen zwecks Desinfektion Wasser, in der Lebensmittelindustrie wird es als Entkeimungsmittel f??r verwendet und findet in den USA ebenfalls Anwendung als von H??hner-, Rinder- und anderem Fleisch.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Genauer analysiert besteht MMS zu 28 % aus Natriumchlorit-Pulver, das in destilliertem Wasser aufgel??st ist. Das Natriumchlorit-Pulver besteht wiederum zu 80 % aus Natriumchlorit und zu 19 % aus Natriumchlorid, das wir auch unter der Bezeichnung ???Kochsalz??? kennen. Das restliche 1 % besteht aus verschiedenen anderen Natrium-Chemikalien, die als ungiftig eingestuft wurden. Die tats??chliche Menge an Natriumchlorit im fertigen Pr??parat bel??uft sich somit auf 22,4 %. Da es sich beim Miracle Mineral Supplement (MMS) weder um ein offiziell zugelassenes Medikament noch um ein Nahrungserg??nzungsmittel handelt, und bislang alle Empfehlungen auf Beob- achtungen aus der Praxis basieren und nicht aufgrund von regul??ren Studien erfolgt sind, muss gleich an dieser Stelle betont werden, dass die Benutzung von MMS ausschlie??lich auf [...] 
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Dennoch kann MMS in exakt der von Jim Humble beschriebenen Form im Internet problemlos bezogen werden, auch wenn es offiziell aus den oben genannten Gr??nden nicht zur Anwendung f??r den menschlichen Organismus deklariert ist.
Nichtsdestotrotz geh??rt das Recht auf Information und freie Meinungsbildung zweifelsohne zu den Grundrechten eines jeden in einer Demokratie lebenden Menschen ??? in Jim Humbles Buch ???MMS: der Durchbruch??? findet sich eine Reihe von Briefen und Danksagungen samt Adressat und Kontaktadresse, die den therapeutischen Erfolg von MMS best??tigen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Im weiteren Verlauf dieser Abhandlung finden Sie eine ??u??erst interessante Stellungnahme eines renommierten Mediziners zu diesem Thema. Sehr viele Indizien, wenn bislang auch keine offiziell anerkannten Beweise, die f??r die Wirksamkeit von MMS sprechen, und die Freiheit auf Information sowie die M??glichkeit, sich danach selbst ein Bild machen zu d??rfen, sollten Sie sich nicht entgehen lassen!

Der gesamte Codex Humanus hat sich dem Zweck der Verbreitung dieser wohl f??r jeden Menschen interessanten Informationen verschrieben. Entscheiden Sie selbst, ob und wie Sie diese verwerten m??chten!
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Die Entdeckung des Miracle Mineral Supplement (MMS)

Von seinem Freund zur Goldsuche im Dschungel S??damerikas ??berredet, packte der 67-j??hrige Jim Humble alles Notwendige ein und verga?? das f??r ihn wichtigste Utensil dabei nicht: stabilisierten Sauerstoff! Von verschiedenen Quellen hatte Humble n??mlich erfahren, dass stabilisierter Sauerstoff (fachlicher Begriff ???Natriumchlorit??? mit der chemischen Formel NaClO2, nicht zu verwechseln mit Natriumchlorid) Wasser desinfiziert ???, eine Eigenschaft, die besonders im Dschungel eine lebenswichtige Rolle spielen kann, wenn Trinkwasser mit Typhusbakterien und anderen sch??dlichen Parasiten verseucht ist.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Von Natur aus sehr experimentierfreudig, ??berpr??fte Jim Humble bereits zu Hause die Aussagen seiner Bekannten, indem er Abwasser mit stabilisiertem Sauerstoff versah und eine Probe davon an ein Testlabor sandte. Das Ergebnis der Laboranalyse lautete: ???keimfrei???! Mit der Gewissheit, sein Trinkwasser im Notfall mit stabilisiertem Sauerstoff jederzeit desinfizieren zu k??nnen, startete er die Expedition nach S??damerika.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Im tiefsten Urwald Guaynas angekommen, forderte das von Malaria verseuchte Gebiet erste Opfer bei den Begleitern von Jim Humble. Keine Medikamente dabei und fern der Zivilisation war das Leben zweier Kameraden akut in Gefahr. Den beiden M??nnern ging es zunehmend schlechter und sie hatten nichts zu verlieren, au??er ihr Leben, und so willigten sie sofort ein, Humbles Trank zu probieren.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Humbles verabreichte beiden den stabilisierten Sauerstoff mit etwas Wasser. Binnen einer Stunde h??rte der Sch??ttelfrost auf, und vier Stunden sp??ter ging es den beiden so gut, dass sie bereits Scherze machten und mit den anderen M??nnern der Expedition zu wieder zu Abend essen konnten. Im Laufe der ausgedehnten Expedition zog es Humbles Team ??ber unz??hlige Meilen durch Guayna. Humble tat das, was man von einem guten Menschen erwartete, indem er versuchte, an Malaria und Typhus erkrankte Einheimische mit seinem stabilisierten Sauerstoff zu heilen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Mit der Mixtur gelang ihm lange nicht bei jedem die Heilung, aber eine imposante Heilungsrate von 70 % sorgte doch daf??r, dass sich diese ??ber Tausende von Meilen herumsprach, zumal diese Quote den Erfolg ??blicher Malaria-Medikamente ??berstieg. Von den Erfolgen seines ???Gesundheitstranks???, wie er ihn nannte, selbst ??berrascht, erz??hlte Jim Humble seinem Freund Bob Tate am Telefon von seinen Heilerfolgen bei Malaria. Beide beschlossen daraufhin, den Trank in Guyana zu verkaufen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Es sollte nur wenige Tage dauern, bis Humble und seine Crew vom Gesundheitsministerium von Guayna zu einem Verh??r zitiert wurden, dem das Verbot des Verkaufs des Trankes unter Androhung einer Gef??ngnisstrafe folgte. Wohl wissend, dass ihm die Beh??rden nicht folgen w??rden, tauchte Humble zun??chst im tiefsten Dschungel unter und besch??ftigte sich einige Monate mit der Goldmine, die er zwischenzeitlich entdeckt hatte. Ein halbes Jahr blieb er dort und als in der Stadt Gras ??ber die ganze Angelegenheit gewachsen war, wagte er es zur??ckzukommen, um ungehindert das n??chstm??gliche Flugzeug in die USA zu nehmen.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Die Weiterentwicklung
In den USA experimentierte er weiterhin an seinem stabilisierten Sauerstoff; erst im sp??teren Verlauf sollte er herausfinden, dass es sich dabei um Natriumchlorit handelte. Was ihm jedoch fehlte, waren eindeutige Beweise daf??r, dass sein Mittel wirklich Malaria bek??mpft. Schneller als ihm wahrscheinlich lieb war sollte er die Gelegenheit erhalten, in diesem Punkt sein eigenes Versuchskaninchen zu werden! Zwecks weiterer Goldsuche landete Jim Humble erneut in Guyana und erkrankte prompt an Malaria. Statt sich aber sofort mit den ??blichen Malaria-Tabletten behandeln zu lassen, trieb er es auf die Spitze und lie?? sich erst in ein Krankenhaus transportieren und sich das Blut abnehmen. Der Befund best??tigte eindeutig die Diagnose ???Malaria???, und auch jetzt verzichtete Humble auf die ??bliche Medikation; stattdessen [...]
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Bevor wir im Einzelnen die Wirkung von MMS bei allerlei Erkrankungen erl??utern, ist es zun??chst einmal von Interesse, seine allgemeine Wirkungsweise zu ergr??nden. Wird Natriumchlorit (NaClO2) mit einer S??ure (z. B. Essig, Zitronen- oder Limonensaft) angemischt, so entsteht dabei Chlordioxid (ClO2- Dioxychlor), ein Biozid, das in den Stoffwechsel der Viren eingreift und den N??hrstofftransport durch die Zellw??nde unterbindet. Das Chlordioxid raubt ??ber die Oxidation den Viren und Giftstoffen f??nf ihrer Elektronen, ein Oxidationsprozess, der zum Tod und anschlie??endem Zerfall der Viren oder Giftstoffe f??hrt.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Laut Humble ist Chlorodioxid der ???effizienteste Killer??? s??mtlicher Viren, Bakterien, Schimmel- und Hefepilze sowie anderen Parasiten. Nicht von ungef??hr wird es daher in Kliniken und in der Lebensmittelindustrie seit nunmehr ??ber 100 Jahren erfolgreich zur Sterilisierung eingesetzt. Es gibt wohl keinen anderen chemischen oder medizinischen Stoff, der eine vergleichbare Wirkung zeigt; in Verbindung von Natriumchlorit und Essig werden exakt diese Kr??fte in unserem Organismus frei, um unerw??nschte Mikroorganismen zu eliminieren.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Das Chlordioxid-Molek??l (ClO2) zerf??llt ebenfalls durch diese Reaktion und setzt Sauerstoff frei. Der Sauerstoff (O2) verbindet sich entweder mit dem Wasserstoff (H2) zu Wasser (H2O) oder mit Kohlenstoff (C) zu Kohlendioxid (CO2). Die Ladung des Chlor-Ions ist nun neutral und geht mit Natrium, also dem gew??hnlichen Speisesalz (NaCl), eine Verbindung ein.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Aus einem zuvor sehr aggressiven Oxidationsmolek??l werden demnach ??ber chemische Reaktionen, die in unserem K??rper stattfinden, drei harmlose Substanzen gebildet. W??hrend diese Grundsubstanzen entstehen, sterben sch??dliche Parasiten im Verlauf dieses Prozesses ab.
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
???Betrachtet man das Blut unter einem Dunkelfeld-Mikroskop, offenbart sich die belebende Wirkung von MMS. In belastetem Blut zeichnen sich die Oberfl??chen der roten Blutk??rperchen schlecht ab. Oft sind diese miteinander verklebt, was auf eine ??bers??uerung und einen Mangel an Wasser und Mineralstoffen hinweist. Eineinhalb Stunden nach der Einnahme von 10 Tropfen MMS, die mit S??ure aktiviert wurden, zeigt das selbe Blut eine deutliche Verbesserung: die roten Blutk??rperchen sind viel weniger verklumpt und ??? was noch wichtiger ist ??? die wei??en Blutzellen des Immunsystems bewegen sich zu den noch verbliebenen Kristallisationsklumpen hin. Die entsprechenden Filmaufnahmen belegen, dass die wei??en Blutk??rperchen nach der Einnahme von MMS 10x aktiver waren.???
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wie bedeutend diese vier S??tze sind, wird zum einen daran deutlich, wenn man sich vergegenw??rtigt, dass der Mensch bis zu 40 Tage ohne Nahrung, bis zu 5 Tage ohne Wasser und lediglich wenige Minuten ohne Sauerstoff ??berleben kann. Sauerstoff ist also der mit Abstand wichtigste Stoff f??r uns. Da rote Blutk??rperchen, wie wir weiter oben lesen konnten, f??r den Sauerstofftransport in die Zelle verantwortlich sind, ist deren Regenerierung und Aktivierung f??r unsere Gesundheit ungemein wichtig. Die Aktivierung der wei??en Blutk??rperchen, die f??r unser Immunsystem (Abwehr von Viren, Bakterien und anderen Sch??dlingen sowie Fremdstoffen) zust??ndig sind, um den Faktor 10 macht dies zu einem runden Paket. Damit w??re wohl die starke Wirkung von MMS auf unser Immunsystem eindeutig belegt und eine allgemeine, zellbelebende Wirkung ebenfalls.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wir halten zusammenfassend fest:

- MMS setzt die Kr??fte von Chlordioxid frei, das in der Desinfektion von Viren, Bakterien, Schimmelpilzen und anderen Parasiten als unschlagbar gilt.
- Gleichzeitig aktiviert es erheblich die wei??en Blutk??rperchen; damit st??rkt es das Immunsystem.
- Es versorgt ??ber die roten Blutk??rperchen unsere Zellen effizienter mit Sauerstoff.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Jim Humbles Empfehlungen f??r allgemeine Erkrankungen
- Beginnen Sie mit 1 Tropfen aktiviertem MMS.
- Steigern Sie die Dosis um einen weiteren Tropfen, wenn Sie keine ??belkeit versp??ren.
- Nehmen Sie jeweils eine Dosis morgens und eine abends.
- Erh??hen Sie die Dosis von einem Tag zum n??chsten um jeweils einen aktivierten Tropfen.
- Im Falle von ??belkeit die n??chste Dosis um 1 Tropfen senken, diese gesenkte Dosis 1???2 x verwenden und dann wieder versuchen zu erh??hen.
- Auf diese Weise schrittweise so lange die Dosis erh??hen, bis man [...]
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Jim Humbles MMS-Einnahmeprotokoll f??r Kinder

- Vorgehensweise wie beim Standard-Protokoll (siehe oben) mit dem Unterschied, dass die Kinder mit der H??lfte der Dosis beginnen (H??lfte des Glases auskippen!).
- Die maximale Tagesdosis betr??gt 3 Tropfen pro 12 kg K??rpergewicht.
- S??uglinge sollten niemals mehr als 2 Tropfen/Tag erhalten.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
MMS-Wirkung und Anwendung bei Malaria

Keine andere Krankheit wurde so h??ufig durch MMS geheilt wie Malaria. Laut Jim Humble hat das Miracle Mineral Supplement bereits 75 000 Patienten mit Malaria geheilt.

Bedenkt man, dass Jahr f??r Jahr ca. 1 Million Menschen an Malaria sterben, erzeugt es Fassungslosigkeit, dass nur wenige ??rzte jemals etwas von MMS geh??rt haben, geschweige denn dieses breitfl??chig Anwendung bei Malaria findet.

Anwendung: 15 Tropfen MMS, nach ein bis zwei Stunden weitere 15 Tropfen MMS. Sollten nach vier Stunden die Symptome nicht abgeklungen sein, eine dritte Dosis von 15 Tropfen MMS anschlie??en.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wirkung und Anwendung von MMS bei Paradontitis und  Zahnfleischentz??ndungen

Bei Infektionen und Entz??ndungen von Zahnfleisch zeigt sich MMS ??u??erst wirkungsvoll, und dies bereits in k??rzester Zeit. Ein entz??ndeter Zahn, so Jim Humble, l??sst sich bereits innerhalb von nur vier Stunden heilen, Parodontitis und andere Infektionen verschwinden nach sp??testens einer Woche, und nach drei Wochen ist damit zu rechnen, dass der gesamte Mundraum vollkommen gesund ist.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wirkung und Anwendung von MMS gegen Arteriosklerose

Arteriosklerose bezeichnet einen Zustand, bei dem die Blutgef????e aufgrund von Einlagerungen durch Cholesterin und Calcium schrittweise verstopfen, was zum Herzinfarkt oder Schlaganfall f??hren kann. Die vorherrschende Meinung der Schulmedizin, man k??nne Arteriosklerose nicht r??ckg??ngig machen, wurde durch unz??hlige repr??sentative Studien widerlegt. Laut Humble eignet sich MMS sehr gut dazu, in k??rzester Zeit die Plaques zu entfernen. In seinem Buch erw??hnt er, dass ihm mehrere Personen berichtet h??tten, dass sie mit MMS die cholesterinbedingten Ablagerungen in ihren Arterien reduzieren konnten. Darunter war eine Dame, deren Arterien zu 80 % verstopft waren und die nach 30 Tagen, w??hrend denen sie 3 x eine Dosis von je 15 Tropfen MMS nahm, ihre Verstopfung auf unter 50 % hat senken k??nnen!
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Wirkung und Anwendung bei Herpes

Jim Humble empfiehlt eine stufenweise Einnahme ??ber mehrere Wochen. Man soll mit 1 Tropfen beginnen und langsam steigern, bis man 5???6 x am Tag 2???4 Tropfen einnimmt. Nach zwei Wochen ist mit ersten Ergebnissen zu rechnen. Jim Humble empfiehlt die Kombination von MMS mit Dimethyl- sulfoxid (DMSO).
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `

Wirkung von MMS bei Diabetes

??hnlich wie bei verschiedenen Formen von Krebs (als sekund??rer Faktor!) und diversen Herzinfarkten vermuten viele Forscher hinter der Zuckerkrankheit bestimmte Viren. Der Virus, der vereinzelt f??r Diabetes verantwortlich gemacht wird, nennt sich Coxsackie-B-Virus. Dieser soll der Virusthese nach die Bauchspeicheldr??se angreifen und zur Bauchspeicheldr??senentz??ndung mit hieraus resultierender Diabetes f??hren.`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
MMS heilt Bauchspeicheldr??senkrebs

Humble beschreibt seine ersten Erfahrungen mit MMS bei Krebs als ??u??erst erfolgreich. Es handelte sich um einen Bauchspeicheldr??senkrebs, an dem einer seiner Bekannten litt. Als die ??rzte bei dem Mann ein Rezidiv feststellten, wollten sie ihn unbedingt operieren. Dieses lehnte Humbles Bekannter jedoch ab, stattdessen entschied er, es mit dem Chlordioxid, aktiviert mit Essig, zu versuchen! Bereits zwei Wochen sp??ter hatten sich die Krebswerte,[...]

`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Anwendung bei Krebs inklusive Leuk??mie:

1. Tag: morgens 2 Tropfen MMS, nachmittags 3 Tropfen MMS.

2. Tag: morgens 4 Tropfen MMS, danach alle vier Stunden 4 Tropfen, danach alle zwei Stunden 4 Tropfen.

Die Dosis sollte nun laut Jim Humble stetig erh??ht und die Abst??nde zwischen die Verabreichungen verkleinert werden. Man solle nicht z??gern, die Dosis auf 2 x t??glich 30 Tropfen oder 4 x t??glich 15 Tropfen zu erh??hen, falls n??tig. Sollte sich ??belkeit einstellen, die Dosis senken und erst wieder schrittweise steigern, sobald die ??belkeit abgeklungen ist.
`
    },
    {
        usefulInformationImageId: images_mms,
        quelleId: "3",
        afflinksId: afflinks.mms,
        text: `
Miracle Mineral Supplement erfolgreich bei Hautkrebs

Der Hautkrebs ist eine Besonderheit innerhalb von Tumoren, und zwar insofern, als dessen Entwicklung auf der Haut meistens ersichtlich ist. Beim Hautkrebs wird das MMS lokal auf die betroffene Hautstelle aufgetragen; innerhalb einer Woche verschwindet der Krebs f??r gew??hnlich.

Anwendung von MMS bei Hautkrebs:

15 Tropfen MMS 2 x t??glich 

(Jim Humble berichtet von einem Bekannten, der die Dosis bis auf 25 Tropfen steigerte und bei dem das Melanom nach zwei Wochen verschwunden war.869)
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Sicherlich haben auch Sie bereits davon geh??rt, dass es ???gute??? und ???schlechte??? Fette gibt. Fette also, die einerseits in unserer ??berflussgesellschaft durchaus krank machen k??nnen ??? andere Fette wiederum, die f??r unseren Organismus lebensnotwendig sind. Den Wenigsten ist dabei bekannt, dass es innerhalb der zweitgenannten Gruppe der guten Fette auch solche gibt, die als echte Gesundmacher fungieren k??nnen. Zu den Letzteren geh??ren zweifelsohne die Omega-3-Fetts??uren, die wichtige Stoffwechselfunktionen im menschlichen K??rper beeinflussen und aufgrund dessen sowohl der Vorbeugung als auch der Behandlung etlicher Erkrankungen, wie Krebs, Herzkreislauferkrankungen, Alzheimer und Arthritis bis hin zu Depressionen und Asthma dienen k??nnen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Gem???? einer Studie von Professor Michael Crawford vom Institute of Brain Chemistry beeinflussen Omega-3-Fetts??uren bereits im Mutterleib das Sehverm??gen und die Intelligenz des Embryos und ihre Einnahme durch die werdende Mutter kann selbst im Erwachsenenalter des Menschen noch dar??ber entscheiden, ob man f??r Gesundheitsprobleme, wie Herzkreislauferkrankungen, anf??llig ist oder nicht. Bei den Omega-3- Fetts??uren handelt es sich also um eine nat??rliche Substanz, die von Beginn unseres Lebens an dieses in erheblichem Ma??e[...]
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
30 g pro Tag k??nnen laut zahlreichen Studien das Risiko f??r einen t??dlichen Herzinfarkt oder pl??tzlichen Herztod um die H??lfte reduzieren. Dies ist bereits mit zwei bis drei Fischmahlzeiten pro Woche gew??hrleistet. Des Weiteren weisen j??ngste Studienergebnisse darauf hin, dass Omega-3-Fetts??uren ??ber die immens wichtige, einzigartige Eigenschaft verf??gen, die Verk??rzung der Telomere an unseren Chromosomen zu verlangsamen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Die Telomere dienen quasi als ???Schutzkappen??? f??r unsere Chromosomen und sch??tzen damit unsere Zellen vor Alterung. Die Telomerl??nge gilt unter den Altersforschern als untr??glicher Ma??stab f??r das biologische Lebensalter, und die F??higkeit der Omega-3-Fetts??uren, diese vor Verk??rzung zu sch??tzen, gilt als ein deutliches Indiz daf??r, dass Omega-3-Fetts??uren unsere Zellen, und damit uns, jung erhalten k??nnen und lebensverl??ngernd wirken.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
W??hrend wir uns um die Zufuhr der Omega-6-Fetts??uren nicht gesondert k??mmern m??ssen, da diese reichlich in unserer Nahrung vorhanden sind, stellen Omega-3-Fetts??uren eine besondere Herausforderung dar, denn diese kommen in unserer gewohnten, modernen Nahrung eher selten vor. War die urspr??ngliche Ern??hrung bez??glich der Omega-Fetts??uren fr??her in Balance, ist sie heute alles andere als ausgeglichen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Gem???? dem Ern??hrungsbericht 2004 der Deutschen Gesellschaft f??r Ern??hrung (DGE) nehmen M??nner durchschnittlich lediglich 250 mg EPA/DHA pro Tag auf, Frauen nur 150 mg EPA/DHA (N??heres siehe unten). Das optimale Verh??ltnis der Omega-Fetts??uren zueinander l??ge bei 2 bis 4 Omega-6- Fetts??uren zu 1 Omega-3-Fetts??ure. Tats??chlich liegt aber das heutige Verh??ltnis bei bis zu 20:1, was unserer Gesundheit schadet und was es dieser zu Liebe zu ??ndern gilt.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Zu den wichtigsten Omega-3-Fetts??uren z??hlen

Alpha-Linolens??ure (ALA): Die Alpha-Linolens??ure (ALA) ist dreifach ges??ttigt und kommt in Lein??l, Raps??l und Walnuss??l vor.

Eicosapentaens??ure (EPA): Die Eicosapentaens??ure (EPA) ist f??nffach unges??ttigt und entstammt dem Fett von Kaltwasserfischen, wie Makrele, Hering oder Lachs.

Docosahexaens??ure (DHA): Die Docosahexaens??ure (DHA) ist eine sechsfach unges??ttigte Fetts??ure aus Fisch??len und einigen Algen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Da Omega-3-Fetts??uren also haupts??chlich in fetten Kaltwasserfischen, wie Hering und Makrele, sowie in Pflanzen??len, wie Leinsamen??l, Raps??l und Soja??l, vorkommen, sollte man diese Lebensmittel innerhalb der individuellen Ern??hrungszusammenstellung entsprechend stark ber??cksichtigen, um eine hinreichende Versorgung und ein physiologisches Gleichgewicht der Omega- Fetts??uren zueinander zu gew??hrleisten. Die Wichtigkeit einer ausreichenden Zufuhr von Omega-3-Fetts??uren wird n??mlich deutlich, wenn man sich deren Funktionen und Aufgaben bewusst wird, die unter anderem f??r die
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Es verwundert daher nicht, dass Omega-3-Fetts??uren einen gro??en positiven Einfluss auf unsere Gesundheit nehmen und dabei selbst chronische Erkrankungen, wie Diabetes, Rheuma und Alzheimer, positiv beeinflussen k??nnen und dazu Herzinfarkt, Arteriosklerose und sogar Krebs vorbeugen k??nnen.

Auf den folgenden Seiten erfahren Sie alles Wissenswerte um die Omega-3- Fetts??uren. Sie erfahren Genaueres ??ber das Vorkommen, die vorbeugende und therapeutische Wirkung bis hin zur expliziten Anwendung bei konkreten Erkrankungen oder zu deren Vorbeugung, untermauert durch repr??sentative Studien.

`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Fette ??bernehmen einige lebenswichtige Funktionen, so unter anderem die Funktion der

- S??ttigung: Fettreiche Ern??hrung s??ttigt schneller als fettarme.
- Isolierung: Das Unterhautfettgewebe sch??tzt den K??rper vor K??lte.
- Schutz: Die inneren Organe werden vom Fettgewebe vor mechanischen Einfl??ssen gesch??tzt.
- Bau: Fett ist am Aufbau von Zellmembranen beteiligt.
- Bereitstellung der fettl??slichen Vitamine A, D, E und K.
- Vorstufe hormon??hnlicher Regelsubstanzen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Herztod prophylaktisch mit Omega-3-Fetts??uren um 40??? 45 % verringert Gem???? einer US-Studie an der Harvard Medical School in Boston an mehr als 45 000 Teilnehmern ohne vorangegangene Herzprobleme konnte eine t??gliche Zufuhr von 250 mg EPA/DHA das Risiko f??r einen pl??tzlichen Herztod um 40???50 % senken!
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Herzinfarkt und Schlaganfall um 30 % verringert, pl??tzlicher Herztod sank um 45 %

In einer gro??angelegten Studie an Patienten aus 172 italienischen Krankenh??usern an 11 000 Patienten erbrachte man den Beweis f??r die Schutzwirkung von Omega-3-Fetts??uren. Die Herzinfarkt- und Schlaganfallrate sank gegen??ber der Kontrollgruppe um 30 %, der pl??tzliche Herztod sank sogar um 45 %.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren bei entz??ndlichen Erkrankungen

In einer Studie konnten Omega-3-Fetts??uren das Auftreten von entz??ndlichen Erkrankungen mindern 

Omega-3-Fetts??uren in Studien bei Arthritis und Rheuma
Die Erh??hung des Verh??ltnisses von Omega-3- zu Omega-6-Fetts??uren konnte in Studien das Auftreten rheumatoider Arthritis senken.

Omega-3-Fetts??uren bei Arthritis und chronischer Gelenkarthrose
Omega-3-Fetts??uren wirken dem entz??ndlichen Zustand entgegen. Hierbei verdr??ngen die in den Omega-3-Fetts??uren enthaltenen EPA und DHA (Omega-3-Fetts??ure) die entz??ndungsf??rderliche Arachidons??ure (Omega-6- Fetts??ure) aus der Lipidmembran der Zelle und verhindern so die Bildung der im ??berma?? sch??digenden Eicosanoide 2 und Prostaglandin E2.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
US-Studie empfiehlt 3 g Fisch??l t??glich gegen rheumatische Arthritis

Laut einer US-Studie wirken sich 3 g Fisch??l t??glich positiv gegen rheumatische Arthritis aus.884 Dr. Paul Fortin analysiert mit seinem Wissenschaftlerteam in Boston 1995 elf klinische Studien, die den Nutzen der Omega-3-Fetts??uren bei Arthritis behandelten. Er konnte diese positiven Studien insgesamt best??tigen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren erg??nzen vorteilhaft die Behandlung von entz??ndlichen Erkrankungen und erm??glichen eine Verringerung der Medikamentendosis.

Eine enterale Ern??hrung mit mehrfach unges??ttigten Omega-3-Fetts??uren erzielt bessere Behandlungsergebnisse bei chronisch entz??ndlichen Erkrankungen, wie entz??ndliche Darmerkrankungen, Arteriosklerose, Lungenfibrose oder rheumatoide Prozesse als Medikamente allein und erlaubt dabei eine Verringerung der Dosis entz??ndungshemmender Medikamente, die ??ber zahlreiche Nebenwirkungen verf??gen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren und Diabetes

Bekanntlich sind Diabetiker stark gef??hrdet, an Herzkreislaufleiden zu erkranken. Omega-3-Fetts??uren sind regelrechte Schutzstoffe, die den Herzkreislauferkrankungen entgegenwirken. Einigen Studien zufolge konnte die Insulinresistenz sogar verbessert werden.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren erfolgreich bei Bronchitis, Asthma und anderen Atembeschwerden

Der Lungenschleim Asthmakranker verf??gt ??ber einen unverh??ltnism????ig hohen Anteil an Entz??ndungsbotenstoffen, die aus der Arachidons??ure der Omega-6-Fetts??uren gebildet werden. Omega-3-Fetts??uren gelten als Antagonisten der Omega-6-Fetts??uren, und die Korrektur des Missverh??ltnisses ??ber zus??tzliche Gaben von Omega-3-Fetts??uren verbessert daher die Atembeschwerden.896 Laut der angesehenen amerikanischen Fachzeitschrift Critical Care Medicine zeigen Omega-3-Fetts??uren selbst bei Schwerstf??llen, die an Atemnot leiden, entscheidende Wirkung.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren helfen gegen Demenz und Alzheimer

Demenz steigt mit fallendem Fischkonsum: Sowohl im Blut von

Alzheimer-Erkrankten als auch im Blut von Demenz-Patienten werden stets niedrige DHA-Werte beobachtet. Eine niederl??ndische Studie an 5000 Menschen im Alter von 55 Jahren und ??lter zeigte nach 21/2 Jahren Beobachtung, dass bei denjenigen, die wenig Fisch a??en, Demenz droht.908 Demenz f??llt mit steigender Erg??nzung durch Omega-3-Fetts??uren: Nach einer zw??lfmonatigen Zufuhr mit DHA konnte eine signifikante Verbesserung des Demenz-Auftretens beobachtet werden.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren wirken gegen Osteoporose

Calcium ist bekanntlich der wichtigste Baustoff f??r unsere Knochen. Verlieren die Knochen an Calcium, werden sie por??s und neigen zu Br??chen ??? man nennt diese Erkrankung auch Osteoporose. Beobachtungen haben ergeben, dass Menschen, die viele Omega-3-Fetts??uren konsumieren, tats??chlich eine h??here Knochendichte aufweisen. Omega-3-Fetts??uren erh??hen also die Aufnahme von Calcium im Darm, aktivieren au??erdem die Osteoblasten und deaktivieren die knochenabbauenden Osteoklasten.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fetts??uren bei Herzrhythmusst??rungen

Omega-3-Fetts??uren ??ben mithilfe verschiedener Mechanismen einen positiven Einfluss auf Herzrhythmusst??rungen aus. So lagern sie sich beispielsweise direkt an den Ionenkan??len in der Zellmembran der Herzmuskelzelle, die f??r die Kontraktion der Herzmuskelfaser zust??ndig ist, an und verringern die Erregbarkeit an diesen Kan??len und damit das Kammerflimmern.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren k??nnen Arteriosklerose r??ckg??ngig machen

Arteriosklerose gilt als DER Hauptgrund f??r die Entstehung von Herzkreislauferkrankungen bis hin zum Herzinfarkt und Schlaganfall. Nichts fordert mehr Tote in den Industriel??ndern, wie Arteriosklerose! In einer klinischen Studie an 233 Patienten, konnte Prof. Dr. von Schacky im Jahre 1999 nachweisen, dass durch die Gabe von 6 d g eines Fisch??lkonzentrats ??ber einen Zeitraum von 24 Monaten eine nachweisbare Verringerung der arteriosklerotischen Ver??nderungen erfolgte.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fetts??uren gegen Arthritis

Unsere moderne Ern??hrung verleitet dazu, mit Fleisch, Wurst, Eiern, Milch und Milchprodukten ein Zuviel an Botenstoffen aufzunehmen, die zu entz??ndlichen Reaktionen im K??rper f??hren. Zu diesen Botenstoffen z??hlen Eicosanoide, die aus der mehrfach unges??ttigten Fetts??ure ???Arachidons??ure??? gebildet werden.

Omega-3-Fetts??uren verhindern entz??ndungsf??rdernde Mediatoren sowie Gelenkschwellungen. EPA (Omega-3-Fetts??ure) bindet dabei diejenigen Wirkstoffe, die die Entz??ndungsbotenstoffe bilden und die sch??dliche Arachidons??ure aus den Zellen verdr??ngen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fetts??uren gegen Tinnitus

Einer gro??en Studie zufolge sind besonders diejenigen Menschen f??r Tinnitus anf??llig, die einen auff??llig niedrigen DHA-Spiegel aufweisen. Dies ist wahrscheinlich auf die gest??rte Flie??eigenschaft des Blutes im Innenohr zur??ckf??hrbar.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fetts??uren bei Diabetes

Diabetiker sind stark gef??hrdet, an Herzkreislaufleiden zu erkranken. Omega- 3-Fetts??uren sind regelrechte Schutzstoffe, die den Herzkreislauferkrankungen entgegenwirken. Einigen Studien zufolge konnte die Insulinresistenz sogar verbessert werden.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren und die Wirkung gegen Magen- und Zw??lffingerdarmgeschw??re 

Omega-3-Fetts??uren bek??mpfen wirkungsvoll das Bakterium ???Helicobacter???, das die Schleimh??ute des Magens und des Zw??lffingerdarms bef??llt und dort Geschw??re bildet.

Omega-3-Fetts??uren bek??mpfen das Bakterium und unterdr??cken dessen Fortpflanzung. Besonders bei denjenigen Menschen, die wenige Omega-3- Fetts??uren ??ber die Nahrung aufnehmen, taucht der Helicobacter besonders h??ufig auf.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren wirken bei Nierenerkrankungen

Die Einnahme von Omega-3-Fetts??uren konnte in Studien bei Entz??ndung der Glomeruli (kleinste Filtereinheit der Nieren), der IgA-Nephropathie (IgAN) positiv auf den Krankheitsverlauf einwirken.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren wirken gegen Osteoporose

Calcium ist bekanntlich der wichtigste Baustoff f??r unsere Knochen. Verlieren die Knochen an Calcium, werden sie por??s und neigen zu Br??chen ??? man nennt diese Erkrankung auch Osteoporose. Omega-3-Fetts??uren erh??hen die Aufnahme von Calcium im Darm, aktivieren au??erdem die Osteoblasten und deaktivieren die knochenabbauenden Osteoklasten.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren helfen bei Aufmerksamkeitsmangel- und Hyperaktivit??ts-Syndrom (ADHS)  

Personen mit Aufmerksamkeitsdefiziten und Hyperaktivit??tsst??rungen k??nnen von den regelm????igen Gaben von Omega-3-Fetts??uren stark profitieren, da Omega-3-Fetts??uren das im Gehirn verf??gbare Dopamin erh??hen. Hierbei wirken sie ??hnlich wie die g??ngigen Stimulantien, die zur Behandlung von ADHS eingesetzt werden. Die Wirkung hat sich ??brigens als langfristig erwiesen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fetts??uren bei Ekzemen und Schuppenflechte

Um schuppige, trockene Haut sowie Ekzeme und Schuppenflechte zu vermeiden, empfehlen Forscher Omega-3-Fetts??uren. Bei chronischen Entz??ndungskrankheiten, wie den Schuppenflechten, sollte die Einnahme langfristig erfolgen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3 Fetts??uren gegen Neurodermitis

Wenn Omega-3-Fetts??uren bei Ekzemen und Schuppenflechten helfen, liegt die Vermutung nahe, dass sie auch bei Neurodermitis helfen. Therapeutischen Erfahrungsberichten und pharmakologischen Untersuchungen zufolge helfen Omega-3-Fetts??uren auch gegen Neurodermitis.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fetts??uren auf die Hirnleistung

Aufgrund der verst??rkten Durchblutung des Gehirns wird die Hirnleistung verbessert und der Demenz vorgebeugt. Rund 1/5 unserer Gehirnfettmasse sowie der Fettmasse unseres Nervensystems besteht aus Docosahexaens??ure (DHA), die im fetthaltigen Meeresfisch sowie in bestimmten Algen vorkommt. Die Omega-3-Fetts??uren nehmen im Bereich des zentralen Nervensystems sowie im neurologischen und psychischen Bereich eine wichtige Rolle ein.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fetts??uren gegen Prostatakrebs

Es gilt als wissenschaftlich erwiesen, dass die regelm????ige Einnahme von Omega-3-Fetts??uren das Risiko f??r ein Prostatakarzinom senkt. Dahingehend lautet auch die Empfehlung der Health Foundation, Omega-3-Fetts??uren verst??rkt in der Ern??hrung zu ber??cksichtigen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Wirkung von Omega-3-Fetts??uren gegen Brustkrebs

In einer Vergleichsstudie zum Brustkrebsrisiko von Japanerinnen und Nordamerikanerinnen konnte ein f??nffach niedrigeres Risiko von Brustkrebs bei den Japanerinnen beobachtet werden, die traditionell mit der fischreichen Ern??hrung viel mehr Omega-3-Fetts??uren zu sich nehmen.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren und Vegetarier

Die Mangelsituation stellt sich gerade f??r Vegetarier nicht leichter dar, da diese bekanntlich sowohl Fisch als auch Fisch??l meiden. Hieraus folgt, dass die Zufuhr von EPA und DHA gering ausf??llt, was zu einem ausgepr??gten Mangel an Omega-3-Fetts??uren f??hren kann. F??r Ovo- beziehungsweise Ovo-Lacto- Vegetarier bieten sich indessen Eier an, besonders aus spezieller Herstellung, wenn die Legehennen mit DHA oder aber mit einem mit Leinsamen angereicherten Futter gef??ttert wurden. Zus??tzlich empfiehlt es sich, verst??rkt auf Lein-, Walnuss- und Raps??l zur??ckzugreifen; unterst??tzend kann eine Nahrungserg??nzung in Form von DHA-reichem Algen??l aufgenommen werden. Ein Engpass ist also selbst f??r Vegetarier durchaus vermeidbar.
`
    },
    {
        usefulInformationImageId: images_omega3,
        quelleId: "3",
        afflinksId: afflinks.omega3,
        text: `
Omega-3-Fetts??uren aus Fisch??l- und Mikroalgenkapseln

Wer lieber auf Nahrungserg??nzungen zur??ckgreift, erh??lt die Omega-3- Fetts??uren ebenfalls in Form von Fisch??lkapseln und Mikroalgenkapseln, die von der Wertigkeit mit den Omega-3-Fetts??uren aus nat??rlicher Nahrung vergleichbar sind. Grunds??tzlich wird angeraten, mit einer kleineren Dosis von ca. 0,5 g bis 1 g/Tag zu beginnen und diese Dosis schrittweise auf 1,5 bis 3 g pro Tag zu steigern. Dies gibt einem empfindlichen Magen-Darmtrakt die M??glichkeit, sich an die zus??tzliche Fettverdauung des Fisch??ls zu gew??hnen. Gleichzeitig wird die Aufnahme von 400???800 IU Vitamin E zu den Fischkapseln empfohlen.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Zumeist sind die Menschen anfangs sehr skeptisch, wenn sie von einer Naturheilsubstanz h??ren mit einem gro??en Spektrum an wunderbarer Wirkung.

Wie kann denn ein und dieselbe Substanz bei Augenproblemen helfen, Hautfalten reduzieren, Gelenke wieder schmerzfrei machen, Herzinfarkten vorbeugen und auch noch der biologischen Alterung entgegenwirken? Die Schulmedizin lehrt uns schlie??lich eine sehr isolierte Sichtweise - wir haben einen spezialisierten Augenarzt, einen Dermatologen und einen Orthop??den f??r die besagten Wehwehchen??? ein fataler Fehler, denn unser K??rper ist eine Einheit und daher sehr ganzheitlich zu betrachten..!
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Wie aber kann nun eine einzige Naturheilsubstanz positiven Einfluss auf all die Dinge nehmen? W??hrend Unwissende (nicht selten darunter promovierte Mediziner) sich wundern oder aber h??misch dar??ber spotten, ist die Erkl??rung f??r dieses Ph??nomen, das eigentlich keins ist, eine doch sehr einfache:

f??r die Entstehung zahlreicher Erkrankungen und Beschwerden ist die Ursache n??mlich sehr oft eine und dieselbe: Entz??ndungen, oxidativer Stress oder kollagene Degeneration beispielsweise!
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Symptome zeigen sich allerdings nur deshalb an unterschiedlichen Organen zuerst, weil jeder Mensch ein Individuum ist und entsprechend individuell andere Schwachpunkte aufweist.

Wenn die Augen, die Haut, die Gelenke, das Herz von Entz??ndungen, oxidativem Stress oder kollagenem Abbau bedroht sind, dann ist es doch nur verst??ndlich, wenn sie im Umkehrschluss alle gemeinsam von ein und derselben Natursubstanz, bis hin zum Abklingen jeglicher Beschwerden profitieren ??? n??mlich von einer Natursubstanz, die Entz??ndungen reduziert, oxidativen Stress abbaut und Kollagene repariert ??? hier w??ren wir bei OPC, einem Multitalent, das exakt diesen Anforderungen gerecht wird!
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Und da biologische Alterung vordergr??ndig durch freie Radikale, Entz??ndungsprozesse und Kollagendegeneration im K??rper verursacht wird, nimmt OPC auch diese Herausforderung erfolgreich auf seine starke Schulter???
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Vitaminmangel und die Rolle des OPC

Wie bereits weiter oben im Buch berichtet, ist der chronische Vitalstoffmangel in der Bev??lkerung das derzeit gr????te gesundheitliche Problem ??berhaupt.

Unabh??ngige Studien, wie die des renommierten Lebensmittellabors Karlsruhe (Sanatorium Oberthal), sowie des schweizer Pharmaunternehmens Geigy sind den staatlichen Beratungszentralen ein Dorn im Augen, und werden nicht an die ??rzte und die Bev??lkerung weitergetragen.

Waren es schlie??lich exakt diejenigen Studien, die unabh??ngig voneinander einen erschreckenden R??ckgang der Vitalstoffe in unserem Obst und Gem??se in den letzten 30 Jahren um bis zu 92% attestiert haben! Als Gr??nde hierf??r nennen die Studienverantwortlichen: ausgelaugte B??den, Luftverschmutzung, lange Lagerung und zu schnelles Wachstum.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

Bevor wir differenziert auf die einzelnen Krankheiten zu sprechen kommen, die OPC zu vermeiden und sogar zu heilen vermag, wird auf einige wichtige Mechanismen eingegangen, die das OPC so unsagbar wertvoll machen:

??? w??hrend Vitamin C 95 % des gesamten Stoffwechsels positiv beeinflusst, besitzt OPC die F??higkeit, diese Wirkung zu VERZEHNFACHEN.950

??? OPC gilt als eines der st??rksten Antioxidantien, 18???20 x so stark wie Vitamin C und 40???50 x so stark wie Vitamin E.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

??? im Gegensatz zu Vitamin C bindet sich OPC (Vitamin P) an Protein, besonders an Kollagen und Elastin. Da diese Organe haupts??chlich aus Elastin und Kollagen bestehen, verst??rkt OPC die Effizienz der Reparaturvorg??nge an Haut, Blutgef????en, inneren Organen, Knochen usw. um ein Vielfaches.

??? die Widerstandsf??higkeit der Blutgef????e verdoppelt sich beispielsweise bereits 24 Stunden nach der ersten Einnahme von OPC; insgesamt verdreifacht sie sich im Laufe der Zeit.

??? dies ist besonders bei Schlaganfallpatienten und Schlaganfallgef??hrdeten nicht hoch genug einzusch??tzen, wird der Schlaganfall (Hirnschlag) doch durch innere Blutungen im Hirnbereich verursacht.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

??? noch st??rker als Vitamin C vermag OPC die Haut zu regenerieren, alte Falten zu gl??tten und neuen vorzubeugen.

??? OPC verbessert die Flie??eigenschaft des Blutes, verhindert die Verklumpungsneigung desselben und erh??ht die Gef????elastizit??t.

??? in seiner Eigenschaft als Protektor verhindert OPC das Eindringen von UV-Strahlen in die Haut und wirkt hier ??hnlich wie eine Sonnenschutzcreme, was f??r Solariumg??nger von Interesse ist.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

??? w??hrend Vitamin C als das st??rkste wasserl??sliche Antioxidans gilt, wirkt OPC sowohl als wasserl??sliches als auch als fettl??sliches Antioxidans, erreicht also sch??tzend alle Zellen des menschlichen K??rpers.

??? ebenso wie Vitamin C durchdringt OPC die Hirnschranke und entfaltet seine antioxidative Wirkung auch an den Hirnzellen; dabei st??rkt es die Blutgef????e und h??lt diese elastisch.

??? OPC reguliert die Histamin- und Histidinherstellung, also die beiden Hauptausl??ser f??r diverse Entz??ndungen und Allergien. Dadurch verhindert oder lindert Vitamin P alle entz??ndlichen und allergischen Reaktionen im K??rper.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

Mithilfe des Internets lassen sich aber keine Informationen mehr unterdr??cken; au??erdem gibt es zu diesem Thema auch bereits einige sehr empfehlenswerte, qualifizierte B??cher auf dem Markt. Im folgenden Kapitel erhalten Sie ausf??hrlich alle Informationen zu OPC, dem Co-Vitamin von Vitamin C, das nach Meinung vieler Molekularbiologen und Vitaminexperten bereits dem Vitamin C den Rang abgelaufen hat und als eines der st??rksten, derzeit bekannten Antioxidantien weltweit gilt.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Ein Paradoxon, das ??ber Jahrhunderte Tausenden von Wissenschaftlern und Forschern Kopfzerbrechen bereitete, findet seinen Ursprung in Frankreich, genauer gesagt in Form von Rotwein. W??hrend allgemein bekannt ist, dass Alkohol unserer Gesundheit deutlich schadet, l??sst der Rotweingenuss Menschen offensichtlich l??nger und vor allem vitaler leben ...

F??r Aufmerksamkeit sorgte vor kurzer Zeit eine ??ltere Dame, mit 123 Jahren der ??lteste Mensch der Welt, als sie angab, t??glich bis zu einen Liter Rotwein zu trinken. Sie war keine Ausnahme, denn in der Tat z??hlen Franzosen aus dem S??den des Landes zu den ??ltesten und ges??ndesten Menschen der Welt.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

OPC (Vitamin P) ist der wichtigste Partner von Vitamin C und hat im Tierversuch bereits unter Beweis gestellt, dass er der einzige bekannte Stoff ist, der Vitamin C um die 10-fache Wirkung zu verst??rken vermag. Dies geschieht ??ber die sogenannte ???Redox-Reaktion??? (Reduktions-Oxidations-Reaktion), innerhalb derer das OPC verbrauchte Vitamin-C-Molek??le bis zu zehn Mal regenerieren kann.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Im Labor hat man Meerschweinchen in mehrere Gruppen eingeteilt und diese mit unterschiedlichen Vitamin C- und OPC-Mengen versorgt. Je mehr Vitamin C sie bekamen, desto kr??ftiger wurden sie und umso l??nger fiel ihre Lebensdauer aus. Das Erstaunliche war, dass sich selbst diejenigen Tiere, die mit sehr wenig Vitamin C versorgt wurden, zus??tzlich aber OPC erhielten, in einem ??hnlich guten Zustand befanden wie diejenigen, welche die vierfache Menge Vitamin C erhielten. Dies f??hrte zu der Erkenntnis, dass es sich beim OPC um den lange gesuchten Co-Partner von Vitamin C handeln musste.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Die Natur unterstreicht dies dadurch, dass das in Fr??chten und Gem??se enthaltene Vitamin C niemals ohne seinen Co-Partner, das OPC, vorkommt. OPC wird im gleichen z??gigen Tempo wie Vitamin C vom K??rper aufgenommen; es gelangt innerhalb von Bruchteilen von Sekunden ??ber die Mundschleimhaut in den Magen und ist bereits nach wenigen Minuten im Blut nachweisbar. Dies allein ist ein deutlicher Hinweis darauf, wie wichtig OPC f??r den Organismus ist, sodass es bevorzugt behandelt wird.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Vitamin P (OPC) erreicht seine h??chste Konzentration im Blut 45 Minuten nach der Einnahme und wird innerhalb von 72 Stunden verbraucht. Im Gegensatz zu Vitamin C ist daher eine mehrmalige Einnahme von OPC am Tag nicht n??tig.

W??hrend wir (wie Sie im Kapitel ???Vitamin C??? erfahren konnten) ca. 40 Orangen oder aber 7 kg Sauerkraut t??glich essen m??ssten, um unseren nat??rlichen Vitamin C-Bedarf abzudecken, ist die Bedarfsdeckung mit OPC (Vitamin P) auf nat??rlichem Wege ??hnlich unm??glich. Wir m??ssten hierf??r t??glich 2?? Liter Rotwein trinken (absolut nicht zu empfehlen) oder ?? kg Erdn??sse (mit H??utchen) essen.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Auch hier ist der OPC-Mangel in unserer technologisierten Nahrung den gleichen Faktoren wie beim Vitamin C zuzuschreiben, n??mlich der Einstufung der OPC-Quelle als ???Abfall??? (Schale von Obst und Gem??se) und deren Entfernung. Aber auch lange Lagerung und industrielle Verarbeitung sowie die Anreicherung von chemischen Haltbarkeitsstoffen tun ihr ??briges.

Dieser von Menschenhand verursachte Mangel an Vitamin C und Vitamin P (OPC) ist exakt der Grund f??r die steigenden Zivilisationskrankheiten, wie Allergien, Arteriosklerose, Herzkreislauferkrankungen, Gef????erkrankungen, Krebs und andere.

`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Entdeckung von OPC

Und in der Tat bietet die Natur einen imposanten Vergleich an, n??mlich in Gestalt der in der Natur freilebenden Tiere. Diese k??nnen nicht nur selbst Vitamin C herstellen, sondern besitzen die F??higkeit, instinktiv eine OPC- reiche Nahrung sehr selektiv auszuw??hlen.

Diese Tiere kennen keine der oben genannten Erkrankungen, die bei uns Menschen in vielen F??llen nach einem langen Leidensweg zum Tode f??hren. Selbst Grizzlyb??ren, die Cholesterinwerte von bis zu 400 aufweisen, kennen so etwas wie Arteriosklerose, geschweige denn Herzinfarkt oder Schlaganfall nicht.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Herstellung von OPC

Die Herstellung von OPC ist recht komplex und wird mittels eines komplizierten Extraktionsverfahrens vollzogen. Die Rohstoffe (Rinden, Kerne usw.) werden zun??chst zerkleinert und anschlie??end in Wasser erhitzt. Im anschlie??enden, von Dr. Masquelier patentierten Extraktionsverfahren, wird das OPC von den anderen Bestandteilen der Rohstoffe getrennt. Im Optimal- fall erh??lt man dann einen Anteil von 95 % an OPC, im Handel deklariert als ???OPC 95???. Ist die Zahl ???95??? nicht angemerkt, handelt es sich ??brigens zumeist um ein OPC mit einem Prozentanteil von lediglich 40 %.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

Bevor wir differenziert auf die einzelnen Krankheiten zu sprechen kommen, die OPC zu vermeiden und sogar zu heilen vermag, wird auf einige wichtige Mechanismen eingegangen, die das Vitamin P so wertvoll machen:

??? w??hrend Vitamin C 95 % des gesamten Stoffwechsels positiv beeinflusst, besitzt OPC die F??higkeit, diese Wirkung zu verzehnfachen
??? OPC gilt als eines der st??rksten Antioxidantien, 18???20 x so stark wie Vitamin C und 40???50 x so stark wie Vitamin E.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

??? im Gegensatz zu Vitamin C bindet sich OPC (Vitamin P) an Protein, besonders an Kollagen und Elastin. Da diese Organe haupts??chlich aus Elastin und Kollagen bestehen, verst??rkt OPC die Effizienz der Reparaturvorg??nge an Haut, Blutgef????en, inneren Organen, Knochen usw. um ein Vielfaches.
??? Die Widerstandsf??higkeit der Blutgef????e verdoppelt sich beispielsweise bereits 24 Stunden nach der ersten Einnahme von OPC; insgesamt verdreifacht sie sich im Laufe der Zeit.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

??? Noch st??rker als Vitamin C vermag OPC die Haut zu rege nerieren, alte Falten zu gl??tten und neuen vorzubeugen.
??? OPC verbessert die Flie??eigenschaft des Blutes, verhindert die Verklumpungsneigung desselben und erh??ht die Gef????elastizit??t.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

??? In seiner Eigenschaft als Protektor verhindert OPC das Eindringen von UV-Strahlen in die Haut und wirkt hier ??hnlich wie eine Sonnenschutzcreme, was f??r Solariumg??nger von Interesse ist.
??? W??hrend Vitamin C als das st??rkste wasserl??sliche Antioxidans gilt, wirkt OPC sowohl als wasserl??sliches als auch als fettl??sliches Antioxidans, erreicht also sch??tzend alle Zellen des menschlichen K??rpers.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Die Wirkung von OPC

??? Ebenso wie Vitamin C durchdringt OPC die Hirnschranke und entfaltet seine antioxidative Wirkung auch an den Hirnzellen; dabei st??rkt es die Blutgef????e und h??lt diese elastisch.
??? OPC reguliert die Histamin- und Histidinherstellung, also die beiden Hauptausl??ser f??r diverse Entz??ndungen und Allergien.
??? Dadurch verhindert oder lindert Vitamin P alle entz??ndlichen und allergischen Reaktionen im K??rper.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC und Vitamin C ??? ein unschlagbares Team

Sollten Sie sich die berechtigte Frage stellen, ob nun Vitamin C das OPC oder OPC das Vitamin C verst??rkt, hei??t die Antwort ganz einfach: beide Stoffe verst??rken und erg??nzen sich gegenseitig.

W??hrend die Vitamin C-Einnahme die Schutzwirkung von OPC (Vitamin P) verst??rkt, erfahren die wundersamen Funktionen des Vitamin C durch OPC eine Vervielfachung.

Zusammengefasst l??sst sich also sagen, dass das OPC gemeinsam mit Vitamin C an fast s??mtlichen Vorg??ngen im K??rper beteiligt ist, beide einander optimal erg??nzen und verst??rken und daher nach Sauerstoff und Wasser die wichtigsten Stoffe f??r den Menschen darstellen.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Wie l??sst sich der pers??nliche OPC-Bedarf errechnen?

Unumst????lich l??sst sich sagen, dass definitiv JEDER Mensch OPC braucht und von einer ausreichenden Zufuhr von OPC enorm profitiert. Da aber, wie bereits beschrieben, die moderne Lebensmittelverarbeitung, lange Lagerungszeiten, ausgelaugte B??den, der Einsatz von Pestiziden, Umwelteinfl??sse und anderes mehr OPC und Vitamin C fast g??nzlich aus unserer Ern??hrung verbannt haben und wir ??ber die nat??rliche Nahrung unm??glich gen??gend Vitamin C und OPC aufnehmen k??nnen, sollte es im Interesse eines jeden liegen, diesen Vitaminmangel durch hochwertige, nat??rliche Nahrungserg??nzungsmittel auszugleichen[...]
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Wie l??sst sich der pers??nliche OPC-Bedarf errechnen?

Die bisherigen Erfahrungswerte suggerieren eine Empfehlung von 2???3 mg OPC pro kg K??rpergewicht t??glich; eine Einnahme von weniger als 1 mg pro kg K??rpergewicht ist hingegen kaum sinnvoll. Der folgenden Tabelle k??nnen Sie bequem Ihre Einnahmeempfehlung f??r Vitamin P/OPC entnehmen: [...]
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC Gegen Entz??ndungen, Arthritis, Bronchitis, Neurodermitis, Parodontitis, Meningitis

Bei allen Entz??ndungen, die auf ???-itis??? bzw. ???-is??? enden spielt die Oxidation (freie Radikale) die entscheidende Rolle. Da OPC sehr starkes Antioxidans darstellt, bek??mpft es sehr effektiv das Auftreten von Entz??ndungen und aller damit zusammenh??ngenden Erkrankungen. Auf diese Weise beugt OPC/Vitamin P sehr erfolgreich entz??ndlichen Prozessen vor und lindert bereits bestehende Entz??ndungen und Krankheiten.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC steigert die Ged??chtnisleistung und beseitigt Konzentrationsschw??chen 

Ged??chtsnisleistungen und Konzentrationsschw??chen h??ngen gr????tenteils mit dem Nachlassen der Versorgung des Gehirns mit N??hrstoffen und Sauerstoff zusammen. Die Oxidation, im Endeffekt die Arteriosklerose, unterbinden eine optimale Zufuhr von Sauerstoff und N??hrstoffen. Aufgrund seiner geringen Molekulardichte vermag OPC die Hirnschranke zu ??berwinden und in seiner Eigenschaft als eines der st??rksten bekannten Antioxidantien (20 x so stark wie Vitamin C, 50 x so stark wie Vitamin E) hier seine Arbeit zu verrichten. OPC sch??tzt zuverl??ssig vor Sch??digungen der Hirnzellen und verst??rkt die Wirkung des Vitamin C um das Zehnfache. Dieses wiederum verbessert die Hormonproduktion, unter anderem von Dopamin und Melatonin, sowie der Neurotransmitter (Botenstoffe) im Gehirn. Die Aktivierung der [...]
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
Atemwegserkrankungen (Bronchitis, Asthma)

Wie beschrieben, ist OPC/Vitamin P stark entz??ndungshemmend und antiasthmatisch. Dies wirkt sich bei Atemwegserkrankungen wie Bronchitis und Asthma sehr positiv aus und kann den Ausbruch beider Krankheiten minimieren und sogar verhindern.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC gegen Parodontose

Nachweislich f??hrt der Mangel an OPC und Vitamin C zum Untergang der kleinsten Blutgef????e in unserem Zahnfleisch. Dadurch wird die Blutversorgung gest??rt und damit das Zahnfleischgewebe nicht gen??gend mit N??hrstoffen versorgt und so beeintr??chtigt. OPC als bester bekannter Kollagen- und Elastinmodulator st??rkt das Zahnfleischgewebe und beugt Parodontose zuverl??ssig vor.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC/Vitamin P bei Gicht

Auch Gicht geh??rt zu den entz??ndlichen Erkrankungen, die auf freie Radikale zur??ckzuf??hren ist. Kein Antioxidans kann ann??hernd so viele freie Radikale gleichzeitig in Zaum halten wie OPC. Gleichzeitig dockt OPC an den hyanilen Knorpel (Gelenkknorpel) an, sch??tzt diesen und baut ihn ??ber die Kollagen- synthese wieder auf. Des Weiteren wirkt OPC in diesem Bereich schmerzlindernd, was die Therapie erleichtert.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC gegen Arthritis/Arthrose

Die St??rke des OPCs liegt gerade in den beiden Faktoren, die die Gesunderhaltung der Gelenke garantieren: n??mlich dem Wirken gegen entz??ndliche Prozesse im Gelenk (Arthritis) und im Schutz und Neuaufbau des hyanilen Gelenkknorpels. So wird der Knorpel vor Arthritis und Arthrose gesch??tzt und sogar neu aufgebaut.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC/Vitamin P bei Osteoporose

Knochenschwund (Fachbegriff ???Osteoporose???) ereilt zumeist viele Frauen in den Wechseljahren ??? betrifft aber aufgrund des ungesunden Lebensstils und der Umweltfaktoren auch immer mehr junge Menschen beider Geschlechter. OPC vermag durch die Bildung von Prokollagen und die Kollagensynthese die Knochenmatrix zu unterst??tzen und so der Osteoporose vorzubeugen.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC hilft bei Krampfadern und Besenreisern

Durch die Reparaturvorg??nge an den Gef????w??nden, die Verbesserung der Elastizit??t und den gleichzeitigen Abbau von Ablagerungen wird Krampfadern sowie Besenreisern vorgebeugt; bestehende Krampfadern und Besenreiser k??nnen verschwinden.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC gegen H??morrhoiden

OPC verbessert die Elastizit??t der Blutgef????e im Anusbereich und verhindert Ablagerungen in den Blutgef????en; beides beugt H??morrhoiden vor und sorgt f??r Linderung.
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

Die Paradedisziplin von OPC ist die Straffung des Bindegewebes jeglicher Art. Durch den aktiven Aufbau und die Erneuerung des Kollagens und Elastins wird schlaffem Gewebe und Cellulitis vorgebeugt und eine bestehende Gewebeschw??che gemindert.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC bei Entgiftung

Erwiesenerma??en f??rdert OPC (Vitamin P) den Abfall der sogenannten Oxydasen und unterst??tzt die Leber beim Abbau von Toxinen und anderen giftigen Stoffen im K??rper. Besonders Menschen, die viel Alkohol trinken, rauchen oder Hormone einnehmen m??ssen, sind auf die Zufuhr von OPC angewiesen.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
ANTIOXIDATION = REGENERATION  ??? GESUND- und JUNGERHALTUNG

Im Umkehrschluss bedeutet diese Tatsache also, dass wir vor den meisten Erkrankungen verschont blieben und nach Abschluss unseres Wachstums biologisch NICHT altern w??rden, k??nnte der K??rper s??mtliche freie Radikale neutralisieren. Da OPC (Vitamin P) eines der effizienteste Antioxidantien ist (40???50 x so effektiv wie Vitamin E und 18???20 x so effektiv wie Vitamin C) kommt diesem eine immense Bedeutung zu.
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
KOLLAGEN-ELASTIN-RESYNTHESE = ERNEUERUNG DES GEWEBES/DER ORGANE

Grob dargestellt, bestehen die wichtigsten Gewebeformen des Menschen, die ??ber die Lebensdauer, das Alter, die Jugendlichkeit und die Gesundheit entscheiden (Haut, Blutgef????e, Nervenbahnen, Gelenke, Organe, Knochen usw.) haupts??chlich aus den beiden Eiwei??bausteinen (Aminos??uren) ???Elastin??? und ???Kollagen???. Was haben OPC und Vitamin C damit zu tun? Und was haben diese gemeinsam?

Ganz einfach: Sie sind die effizientesten Partner f??r den Neuaufbau und den Erhalt von Kollagen und Elastin. Ohne OPC und Vitamin C kann Ihr K??rper kein Kollagen und [...]
`
    },
    {
        usefulInformationImageId: images_opc,
        quelleId: "3",
        afflinksId: afflinks.opc,
        text: `
OPC Anti-Alterungs-Vitamin

Die Alterung nach Abschluss des Knochenwachstums ist auf die oxidative Zerst??rung der K??rperzellen durch freie Radikale zur??ckzuf??hren. Hierbei spielen die Antioxidantien die allerwichtigste Rolle, um dem biologischen Altern ein Schnippchen zu schlagen und die Alterung stark zu verz??gern. Wie wir bereits mehrmals gelesen haben, ist OPC eines der st??rksten Antioxidantien (18???20 x so stark wie Vitamin C und sogar 40???50 x so stark wie Vitamin E.)

So bek??mpft OPC alle freien Radikale im K??rper sehr zuverl??ssig und tr??gt dazu bei, dass man sein biologisches Altern stark verz??gert. Viele Molekularforscher behaupten, man k??nne[...]
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Gel??e Royale ??? der edle Saft, der aus Arbeitern K??nige macht

Wie w??rde es Ihnen gefallen, in den Genuss eines Saftes zu gelangen, der nicht nur ??ber Millionen von Jahren den Fortbestand der Bienen gesichert hat, sondern gar einzig und allein dar??ber entscheidet, ob eine Biene lebenslang eine kleine Arbeiterbiene bleibt oder aber sich physisch zu einer gro??en, langlebigen Bienenk??nigin entwickelt, die ??ber die unglaubliche Energie verf??gt, um zeitlebens Nachwuchs in die Welt zu setzen?

Gel??e Royale, Weiselfuttersaft, Bienenk??niginnenfuttersaft ??? gleich drei Bezeichnungen f??r ein weiteres Geschenk von ???Mutter Natur???, dem Sie als gesundheitsbewusster Mensch unbedingt Ihre Aufmerksamkeit widmen sollten.

Worum genau handelt es sich bei Gel??e Royale, und was kann es f??r unsere Gesundheit leisten?
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Gel??e Royale ist ein ganz besonderer, von Bienen produzierter Saft von dickfl??ssiger, klebriger Konsistenz. Spontan mag man hier sofort an Honig denken, bereits aber der zweite Teil des Namens, ???Royale???, l??sst auf die besondere, ja ???k??nigliche??? Wertigkeit des besagten Saftes schlie??en, die dem Honig rein vom gesundheitlichen Aspekt weitaus ??berlegen ist.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Entstehung von Gel??e Royale

Im Alter zwischen dem vierten und zw??lften Lebenstag sondert die Biene aus ihrer Futtersaftdr??se und Oberkieferdr??se Gel??e Royale ab, das in den ersten Larvenstadien den entstehenden Bienen als Nahrung dient.

Ausschlie??lich der Saft dieser Jungbienen (sog. Ammenbienen) kommt zwischen dem vierten und zw??lften Tag zum Einsatz. Dies erweist sich als sehr sinnvoll, da diese jungen Saftspender selbst ??ber entsprechend junge Zellen verf??gen, um ein m??glichst qualitativ hochwertiges Gel??e Royal zu erzeugen.

Im Gegensatz zum Honig, der zusammen mit Pollen danach allen Bienen als Nahrung dient, ist dieser ganz spezielle Saft einer einzigen ausgekorenen Biene im Stock vorbehalten: n??mlich der noch zu kr??nenden K??nigin!
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Mit Gel??e Royale wird die Jungk??nigin von den Arbeiterbienen aufgezogen. Intuitiv wissen also alle Bienen im Stock um die Wertigkeit des Gel??e Royal Bescheid ??? ein Elixier, das seinesgleichen sucht und eine Assoziation zum Kolostrum, der Erstmilch der S??ugetiere, erlaubt, das den S??ugetieren ebenfalls nur wenige Tage zur Verf??gung steht und ??ber unsagbares Potenzial f??r unsere Gesundheit verf??gt!
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Gewinnung von Gel??e Royale

Die Gewinnung von Gel??e Royale stellt eine wahrlich technische Herausforderung dar, weshalb es ausschlie??lich in gro??en, spezialisierten Imkereien gewonnen wird.

Zu diesem Zweck werden Zellen von K??niginnen in den Bienenstock eingesetzt und gleichzeitig die K??nigin selbst entfernt. Auf dieser Website erfahren Sie alles Wissenswerte zu diesem besonderen Elixier, das ??? im Gegensatz zu den erwachsenen Bienen ??? auch Ihnen (noch) zur Verf??gung steht. M??ge das Bienensterben aufgehalten werden, sonst wird sich der Mensch sehr bald auch um diesen besonderen Saft selbst berauben ???
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Vitamine

Zu den zahlreich in Gel??e Royale vorkommenden Vitaminen z??hlen vor allem die B-Vitamine (B1, B2, B3 und B4), Vitamin C, Vitamin E, Fols??ure, Pantothens??ure und Biotin.

Mineralstoffe

Des Weiteren verf??gt Gel??e Royale ??ber zahlreiche Mineralstoffe und Spurenelemente, auf die in der Literatur nicht n??her eingegangen wird. Womit wir zu einem weiteren Ph??nomen kommen, n??mlich zu zahlreichen, hochwirksamen Substanzen, die dem Gel??e Royale nachgesagt werden, ohne dass diese bis zum heutigen Tag mit herk??mmlichen Analysemethoden nachzuweisen w??ren.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Nicht identifizierte, einzigartige Substanzen

Zweifelsohne m??ssen wir Menschen uns damit abfinden, dass es zwischen Himmel und Erde Dinge gibt, die Erstaunliches bewirken, ohne dass wird dies jemals verstehen werden. Ebenso sind wir lange davon entfernt, s??mtliche existenten Vitalstoffe zu identifizieren ??? wahrscheinlich wird uns dieses Kunstst??ck auch niemals gelingen, ???Mutter Natur??? l??sst sich nicht komplett in die Karten schauen.

So vermuten Forscher, dass allein der Apfel ??ber 10.000 Vitalstoffe beherbergt ??? identifiziert haben wir nur einige wenige ??? Und so erlangte auch Gel??e Royal eine gewisse Mystik durch die Tatsache, dass die wohl wirksamsten Inhaltsstoffe darin bislang noch nicht identifiziert wurden. Es handelt sich dabei vor allem um zahlreiche hochkomplexe [...]
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkungsweise und Wirkung von Gel??e Royale

Die genaue Wirkungsweise von Gel??e Royale ist bis dato aufgrund der darin nicht vollst??ndig identifizierten, de facto aber hochwirksamen Wirkstoffe nicht vollst??ndig entschl??sselt. Die Forscher gehen davon aus, dass es gerade diese bislang nicht identifizierten, hormon??hnlichen Substanzen sind, die die Selbstheilungskr??fte des K??rpers mobilisieren, unseren Organismus st??rken und vor krankhaften Einfl??ssen sch??tzen.

Praxis sticht zweifelslos Theorie in jedem Fall. Sehr ??berzeugend ist daher der Fakt, dass es einzig und allein das Gel??e Royal ist, das aus einer durchschnittlichen Larve eine Bienenk??nigin werden l??sst, die weitaus gr????er, st??rker, ges??nder, langlebiger und leistungsf??higer ist als ihre Artgenossen!
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Allgemeine Wirkung von Gel??e Royale

Betrachten wir zun??chst kurz die allgemeine Wirkung von Gel??e Royale, bevor wir zu der speziellen Wirkung gegen zahlreiche Erkrankungen und Missst??nde kommen.

Gel??e Royale wirkt allgemein:
??? Immunst??rkend,
??? alterungsprophylaktisch (Anti-Aging),
??? energiespendend/tonisierend,
??? blutdruckregulierend,
??? entz??ndungshemmend,
??? antibakteriell/antimikrobiell,
??? antiviral,
??? cholesterinregulierend,
??? antitumoral,
??? potenzst??rkend,
??? hormonregulierend,
??? die Kollagensynthese anregend.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Spezielle Wirkung von Gele?? Royal bei Erkrankungen und Missst??nden

Bei den folgenden Erkrankungen wirkt sich Gel??e Royale ausgesprochen wirkungsvoll bis hilfreich aus:

??? ern??hrungsbedingten Mangelerkrankungen,
??? neurologischen Erkrankungen,
??? Immunschw??che,
??? Grippe,
??? Allergien,
??? Seneszenz (vorzeitige Alterung),
??? Krebs,
??? Diabetes,
??? Schlaganfall,
??? Infektionskrankheiten,
??? Atemwegsbeschwerden,
??? Impotenz,
??? Zeugungsunf??higkeit,
??? Asthenie (Kraftlosigkeit),
??? M??digkeit,
??? Meningitis (Hirnhautentz??ndung),
??? Unfruchtbarkeit beim Mann (Spermienmobilit??t),
??? Erkrankungen im Genitalbereich,
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Spezielle Wirkung von Gele?? Royal bei Erkrankungen und Missst??nden

Bei den folgenden Erkrankungen wirkt sich Gel??e Royale ausgesprochen wirkungsvoll bis hilfreich aus:

??? Arteriosklerose,
??? rheumatischer Arthritis,
??? chronischen Lungenerkrankungen,
??? Kehlkopfleiden,
??? Rachenleiden,
??? Magenblutung,
??? Beschwerden in den Wechseljahren,
??? Hormonmangel,
??? Anorexie (Appetitmangel),
??? An??mien,
??? arterieller Hypotonie (zu niedriger Blutdruck),
??? Hypertonie (zu hoher Blutdruck),
??? Angstzust??nden,
??? Depressionen,
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Spezielle Wirkung von Gele?? Royal bei Erkrankungen und Missst??nden

Bei den folgenden Erkrankungen wirkt sich Gel??e Royale ausgesprochen wirkungsvoll bis hilfreich aus:

??? Blutarmut,
??? Atherosklerose (Arterienverkalkung),
??? Xerodermie (krankhaft trockene Haut),
??? Blutarmut,
??? leichten Depressionen,
??? Leberproblemen,
??? Gallenproblemen,
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Spezielle Wirkung von Gele?? Royal bei Erkrankungen und Missst??nden

Bei den folgenden Erkrankungen wirkt sich Gel??e Royale ausgesprochen wirkungsvoll bis hilfreich aus:

??? Sch??ttell??hmung,
??? Herzmuskelschw??che,
??? Mittelohrentz??ndung,
??? Atemwegsentz??ndung,
??? Warzen,
??? Hautverletzungen,
??? Gewichtsverlust,
??? atopischer Dermatitis,
??? Makuladegeneration,
??? Schwellungen,
??? Parkinson,
??? Demenz,
??? Hepatitis,
??? Gallenwegserkrankungen,
??? Juckreiz,
??? Thorax-Schmerzen,
??? virenbedingter Leberentz??ndung.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gel??e Royale bei Krebs

In Studien konnte die Fetts??ure 10-Hydroxy-2-Decens??ure, die ??brigens weltweit ausschlie??lich nur im Gel??e Royale vorkommt, eine signifikante Anti- Krebswirkung demonstrieren! Prof. Osmanagic konnte im Therapiealltag mithilfe von Gel??e-Royal-Kapseln den Allgemeinzustand von Krebserkrankten stark verbessern. Operations- und Bestrahlungspatienten, die aufgrund ??belkeit, Brechreiz und weiterer Symptome bettl??gerig waren, erfuhren bereits zehn Tage nach Einnahme von Bl??tenpollen-Gelee-Royal- Tabletten (zwei St. eine halbe Std. vor dem Essen) starke Besserung. Die Leberwerte besserten sich und blieben selbst bei fortgesetzter Bestrahlung stabil, sodass die Patienten sehr bald wieder ihre Arbeit aufnehmen konnten.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gel??e Royal bei Beschwerden in den Wechseljahren

Herzklopfen, Hitzewallungen, Schwindelgef??hl, Schwei??ausbr??che, depressive Stimmung, Schlaflosigkeit, Nervosit??t, Konzentrationsprobleme sowie Kopfschmerzen sind nur einige der Symptome, die der Frau in den Wechseljahren (im Allgemeinen zwischen dem 42. und 65. Lebensjahr) das Leben schwermachen. Zu begr??nden ist dies durch Alterungsprozesse, die zu R??ckbildungsabl??ufen in den Eierst??cken und damit hormonellen Ver??nderungen f??hren.[...]
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gel??e Royale gegen Arthritis

Das bereits erw??hnte Protein MRJP3 wirkt sich entz??ndungshemmend aus, mit einer ausgepr??gten Wirkung auf Autoimmunerkrankungen, z. B. die rheumatoider Arthritis.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gel??e Royale bei Zeugungsunf??higkeit des Mannes

Speziell bei der letzteren Art der Impotenz, also der Zeugungsunf??higkeit des Mannes, konnte Gel??e Royale eine unglaubliche Wirkung erzielen. So hat sich in zahlreichen Studien die Anzahl der Spermien unter der Einnahme von Gel??e Royale sogar verdoppelt.

Wie wirkt Gel??e Royale gegen Zeugungsunf??higkeit?

Wesentliche Grundlage der Spermienbildung stellen Aminos??uren dar. Gel??e Royal verf??gt ??ber gro??e Mengen an Aminos??uren, speziell Glycin, Histidin und Arginin. In Verbindung mit dem Fruchtzucker, der ebenfalls reichlich in Gel??e Royale vorkommt, werden diese Baustoffe der Spermien mit Energie versorgt und die Spermienbildung durch die Pantothens??ure im Gel??e Royale angeregt.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Wirkung von Gel??e Royale gegen Arthritis

Das sich im Gel??e Royale befindende Protein mit der Bezeichnung MRJP3 (major royal jelly protein 3) unterdr??ckt allergische Reaktionen. Dieses Protein hat entz??ndungshemmende Eigenschaften und kann somit die Lebensqualit??t bei Patienten, die an Autoimmunkrankheiten, etwa der rheumatoiden Arthritis, leiden, verbessern.
`
    },
    {
        usefulInformationImageId: images_royal,
        quelleId: "3",
        afflinksId: afflinks.royal,
        text: `
Anti-Aging-Wirkung von Gel??e Royale

Die einzig und allein in Gel??e Royal vorkommende Fetts??ure 10-Hydroxy-2- Decens??ure stimuliert die Kollagensynthese, regeneriert die Hautzellen und wirkt der Hautalterung aktiv entgegen. Nicht umsonst wird Gel??e Royal in zahlreichen Kosmetika eingesetzt. Des Weiteren sind es gerade die zahlreichen, noch lange nicht abschlie??end erforschten, hochkomplizierten, hormon??hnlichen Verbindungen in Gel??e Royal, die f??r eine Steigerung unseres Immunsystems sorgen und auf diese Weise nicht zuletzt einem biologischen Alterungsprozess trotzen. Einer altersbedingten Asthenie (Kraftlosigkeit) und Abmagerung sowie der Altersan??mie kann Gel??e Royal sehr erfolgreich entgegenwirken.[...]
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
F??r jeden halbwegs intelligenten Menschen sind dies einfach zu viele ??berzeugende Argumente, die f??r die Einnahme des Q10 sprechen.

W??hrend sich das Coenzym Q10 als verh??ltnism????ig neuer Vitalstoff bereits seit L??ngerem in den USA und Japan zu Recht gr????ter Beliebtheit erfreut, allein in Japan von 10 Millionen Menschen regelm????ig eingenommen wird und sogar als anerkanntes Therapeutikum in Krankenh??usern Anwendung findet, ist man erstmalig durch die Ver??ffentlichung des Buches ???Herzwunder Q10??? von Dr. Emile G. Bliznakov auch bei uns darauf aufmerksam geworden.

Es ist stark zu hinterfragen, warum die ??rzte hierzulande nur vereinzelt N??heres dar??ber wissen, geschweige denn ihren Patienten Q10 empfehlen w??rden.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Was aber ist Coenzym Q10 und was macht es so wertvoll?

Q10 ist eine vitamin??hnliche, k??rpereigene Substanz, die in den Mitochondrien (den ???Kraftwerken??? unserer Zellen) ihre Arbeit verrichtet. Verk??rzt kann man zurecht behaupten, dass:

- Q10 ein Energiespender f??r alle Organe ist,
- unsere Organe dar??ber hinaus vor freien Radikalen sch??tzt und
- die Funktionsf??higkeit unserer K??rperzellen durch die Membran- stabilisierung sichert.

Das Buch ???Herzwunder Q10??? beschr??nkt sich schwerpunktm????ig auf eine fast schon wundersame Wirkung von Q10 auf den Herzmuskel ??? ohne Frage der bedeutendste Aspekt angesichts der Tatsache, dass das Herz unser wichtigstes Organ ist.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Wesentlich aber ist, dass nicht nur der Herzmuskel, sondern jede einzelne Zelle unseres K??rpers von dem Energieschub durch Q10 erheblich profitiert und dass Q10 des Weiteren ein enormes Potenzial als Antioxidans aufweist, uns also vor freien Radikalen und damit vor fr??hzeitiger Alterung und Erkrankung sch??tzt.

Um es deutlich auf den Punkt zu bringen: Ohne Q10 kann KEINE einzige K??rperzelle im menschlichen Organismus arbeiten.
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
- Welche Personengruppen einen erh??hten Q10-Bedarf aufweisen.
- Auf welche Erkrankungen das Coenzym Q10 nachweislich positiven Einfluss nehmen kann. einen
- Wie Sie sich pr??ventiv vor Erkrankungen mithilfe von Q10 sch??tzen k??nnen.
- Wie Sie Ihre physiologischen Alterungsprozesse mit Q10 stark verz??gern und sogar Verj??ngungsprozesse in Gang setzen k??nnen.
- Wie Sie als Sportler Ihre Leistung steigern und sich gleichzeitig vor der hohen Belastung freier Radikale sch??tzen k??nnen.
- Ob, und wenn ja, welche Nebenwirkungen Q10 aufweist.
- Wie viel Q10 empfohlen wird, um gesund und vital zu bleiben.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Coenzym Q10 ??? Was genau ist es und warum k??nnen alle Menschen davon enorm profitieren?

Beim Coenzym Q10 handelt es sich um eine vitamin??hnliche, k??rpereigene Substanz, die fast ??berall im K??rper vorhanden ist. Dieser Tatsache verdankt das Q10 ebenfalls den Namen ???Ubichinon??? (???allgegenw??rtig???). Das Vorhandensein im gesamten K??rper macht auch sehr viel Sinn, denn Q10 ist f??r die Energiegewinnung und Sauerstoffversorgung einer JEDEN einzelnen unserer K??rperzellen zust??ndig. S??mtliche Erkrankungen manifestieren sich aufgrund einer nicht intakten K??rperzelle. Q10 sorgt f??r eine ausreichende Energie- und Sauerstoffversorgung JEDER einzelnen der 60???100 Billionen im K??rper vorhandenen Zellen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Es trifft die Aussage zu: Gesunde Zellen bedeuten vollkommene Gesundheit ??? energielose Zellen bedeuten Erkrankung bis hin zum Zelltod. Q10 ??bt einen positiven Einfluss auf unsere Gesundheit, Lebensdauer und Lebensqualit??t aus.

Man kann also Q10 als ein Lebenselixier betrachten, und tats??chlich ALLES, was atmet oder jemals geatmet hat, muss Q10 enthalten haben ??? denn selbst f??r die Atmung, die allerwichtigste Funktion unseres Organismus, stellt Coenzym Q10 die n??tige Energie bereit.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 ??? Energiegarant und Besch??tzer unserer Zellen

Ob Atmung, Zellteilung, Bewegung, N??hrstoffaufnahme oder oder oder ??? Ausnahmslos JEDE Aktion in unserem K??rper erfordert eine Aktion der K??rperzellen ??? und jede Aktion der Zelle ist auf ihre Kraftwerke angewiesen, die f??r diese Aktion die Energie liefern, die sogenannten ???Mitochondrien???. In ihnen wandelt das Coenzym Q10 unsere Nahrung nach dem Verdauungsprozess in Energie f??r die K??rperzellen um. Den Z??ndfunken f??r die Aktivierung der Mitochondrien liefert in JEDEM FALL das Coenzym .Q10.

Beraubt man die Mitochondrien des Coenzyms Q10, so beraubt man die Zellen der Energie, und weil Q10 f??r die Energiegewinnung einer jeden einzelnen K??rperzelle verantwortlich ist, beraubt man sich damit der Lebensenergie.`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 als Antioxidans ??? der Zellschutz f??r unseren K??rper

Neben seinem unendlich hoch anzusiedelnden Beitrag f??r unsere Energieversorgung spielt Q10 als effektives Antioxidans (Radikalenf??nger) eine weitere enorme Rolle in unserem K??rper. Wie wir bereits im Kapitel ???Vitamin C??? ausf??hrlich erfahren konnten, sind es exakt die freien Radikale, die zu den sogenannten Zivilisationskrankheiten wie Arteriosklerose, Herzinfarkt, Schlaganfall, Diabetes, Arthritis, Krebs f??hren ??? des Weiteren f??hren freie Radikale zur Alterung unserer Zellen.

Vergleichbar mit dem Rostbefall an unserer Autokarosserie nagen die freien Radikale an unseren Zellen und richten nach und nach einen f??rchterlichen Schaden an, der zu Erkrankungen und Alterung f??hrt.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Unter anderem gehen die folgenden Erkrankungen auf die Angriffe freier Radikale zur??ck:
- Arteriosklerose
- Herzinfarkt
- Schlaganfall
- Atemwegserkrankungen
- Blutgef????krankheiten
- Krebs
- Diabetes
- Mukoviszidose
- Entz??ndungen
- Hepatitis
- Parkinson
- Alzheimer
- Arthritis
- Down-Syndrom
Die Tatsache, dass Q10 ??berall in unserem K??rper vorkommt, erkl??rt dessen Bef??higung, ??berall im K??rper freie Radikale abzufangen und neutralisieren zu k??nnen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Vorkommen von Coenzym-Q10 im menschlichen K??rper

Das Coenzym Q10 kommt verst??rkt in unserem Herzen vor, des Weiteren findet es sich in der Leber, der Bauchspeicheldr??se und in den Nieren. Bis zu einem gewissen Punkt ist der K??rper selbst in der Lage, Coenzym Q10 zu produzieren. Mit fortschreitendem Alter verliert jedoch der K??rper nach und nach die F??higkeit, Q10 zu synthetisieren (selbst herzustellen). W??hrend bei Erkrankungen der Bedarf an Q10 ansteigt, vermag der K??rper diesen Mehrbedarf nicht abzudecken; es findet also keine an den erh??hten Bedarf angepasste Nachregulierung statt, was sehr bald zu einem Q10-Defizit mit weitreichenden Folgen f??hrt.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Ferner ist die Tatsache erw??hnungswert, dass das Q10 verst??rkt in den von der Erkrankung betroffenen Bereich transportiert wird ??? ein weiterer Beweis daf??r, wie wichtig es f??r die Genesung ist.

Des Weiteren nehmen wir Coenzym Q10 mittels der Nahrungsaufnahme auf. Man geht von ca. 2 bis 20 mg Coenzym Q10-Aufnahme ??ber die Nahrung aus, wobei der Wert aufgrund ausgelaugter B??den, langer Lagerung, Pestiziden und der Nahrungszubereitung unzureichend niedrig ausf??llt, sodass man davon nicht gen??gend ??ber die nat??rliche Nahrung aufnehmen kann.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
In welchen Nahrungsmitteln kommt Q10 in welchen Mengen vor?

Coenzym Q10 kommt vor allem in:
- Fleisch (Rindfleisch, Gefl??gel, Leber),
- Fisch (besonders in Sardinen),
- Eiern,
- gr??nem Gem??se (besonders Spinat),
- N??ssen,
- Mandeln,
- Soja,
- in einigen pflanzlichen ??len und
- ??lhaltigen Pflanzen vor.
Um die f??r Gesunde empfohlene Zufuhr von 100 mg Coenzym Q10 zu gew??hrleisten, m??sste man beispielsweise 1,5 kg Sardinen t??glich essen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
In unseren Breiten gilt das Rindfleisch als Hauptlieferant f??r das Q10. Um jedoch 100 mg Q10 zu erhalten m??sste man ??ber 3 kg Rindfleisch t??glich zu sich nehmen, etwas, was physiologisch kaum m??glich ist und f??r Vegetarier ohnehin nicht infrage kommt.

W??hrend man noch vor nicht allzu langer Zeit f??r 1 g aus Rinderherzen extrahiertem Q10 knapp 1000 Euro zahlte (??brigens das 30-Fache des heutigen Goldpreises), ist die Versorgung mit Q10-Pr??paraten heute f??r jeden erschwinglich geworden.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Welche Personengruppen weisen einen erh??hten Q10 Bedarf auf?

Wie bereits erl??utert, ist Q10 die Voraussetzung f??r die Energieversorgung einer jeden einzelnen K??rperzelle. Den Aussagen von Dr. B. Diamant von der Universit??t in Kopenhagen und Dr. J. Karlsson vom Karolinska Institut in Stockholm zufolge erreichen aber lediglich 25 % aller gesunden Menschen ??? im Wesentlichen Kinder und Jugendliche ??? einen ges??ttigten Q10-Plasmaspiegel.

Es ist also nahezu JEDER Mensch sp??testens nach dem 20. Lebensjahr auf zus??tzliche Q10-Gaben angewiesen. Alle Patienten hingegen weisen einen zu niedrigen Q10-Plasmaspiegel auf; hier steht die Q10-Einnahme au??er Frage.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
W??hrend also JEDER von Q10 profitiert kann, sind einige Personengruppen nachweislich besonders auf ausreichende Q10-Gaben angewiesen.

Hierzu geh??ren insbesondere Personen, die:
- grunds??tzlich Menschen ??ber 40 Jahre alt sind,
- an Herzkreislauferkrankungen und Herzschw??che leiden,
- Frauen, welche die Pille einnehmen,
- Sportler, besonders Ausdauersportler,
- Menschen mit erh??hter psychischer und physischer Belastung,
- stressgeplagte Menschen,
- Menschen mit Behinderung, die keinen Sport treiben k??nnen/d??rfen,
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

??hnlich wie Vitamin C und OPC, die beide durch die ??berwindung der Blut- Hirn-Schranke und die Optimierung des Calciumumsatzes Depressionen vermindern, erweist sich Q10 hier als dritter Partner sehr hilfreich, indem es die Zell-zu-Zell-Kommunikation der Neuronen verbessert, und dies v??llig nebenwirkungsfrei, w??hrend die klassischen Antidepressiva Nebenwirkungen aufweisen, die von gef??hrlicher Blutdrucksenkung ??ber kardiovaskul??re St??rungen bis hin zu t??dlichen Herzrhythmusst??rungen f??hren. Im ??brigen k??nnen die genannten Nebenwirkungen mit zus??tzlichen Q10-Gaben abgemildert werden.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Coenzym Q10 gegen Pankreatitis (Bauspeicheldr??senentz??ndung)

Wie das Apotheker-Journal im Heft 9/93 berichtete, konnte bei 173 von 178 Patienten mit einer Q10-Prophylaxe das Absterben des Gewebes auf > 30 % des Gesamtorgans beschr??nkt werden, sodass chirurgische Operationen und intensive Therapien vermieden werden konnten.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 gegen Neurodermitis

Wie wir bereits erfahren haben, spielt Q10 beim Schutz f??r die Haut die wichtigste Rolle und wird deswegen in der Haut als erste Substanz verbraucht. Die Neurodermitis wird auf eine Fehlfunktion des Immunsystems zur??ckgef??hrt; das Immunsystem ist fehlgeleitet und bek??mpft Stoffe, die keine Feinde darstellen. Die schulmedizinische Antwort darauf sind Medikamente mit starken Nebenwirkungen. Diese Indikation ist jedoch ungen??gend. Da Q10 das Immunsystem stabilisiert und die Zellmembran- Kommunikation stark verbessert, sollte es als Begleittherapie bei Neurodermitis nicht fehlen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 erfolgreich im Kampf gegen Krebs

Ein Q10-Mangel bei Erkrankungen deutet ganz stark darauf hin, dass der K??rper das Q10 verst??rkt verbraucht, ergo f??r seine Genesung ben??tigt. Je st??rker eine Erkrankung den Q10-Mangel beg??nstigt, umso wichtiger ist es, hier so schnell wie m??glich den Ausgleich von au??en in Form einer Einnahme von Q10-Kapseln zu schaffen.

In einer Studie von Folkers et al. an 83 Krebspatienten mit acht unterschiedlichen Krebsarten stellte sich heraus, dass bei allen ein starkes Q10- Defizit vorherrschte, besonders bei Brustkrebs- und Lungenkrebspatienten. Dieser ausgepr??gte Q10-Mangel ist ein deutlicher Hinweis f??r die Wichtigkeit [...]
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Coenzym-Q10 sch??tzt vor Folgen der Operationen von Tumoren

Bekanntlich f??hrt der k??rperliche Stress einer Operation zur vermehrten Bildung der sch??digenden freien Radikale. Des Weiteren wird das Immunsystem w??hrend der Operation stark unterdr??ckt. In beiden F??llen kann Q10 unterst??tzend eingreifen, n??mlich als Antioxidans, und Immunsystemmodulator. Um die Wundheilung nach der OP zu unterst??tzen empfiehlt es sich, bereits mehrere Tage vor der OP, auf OPC und Vitamin C zur??ckzugreifen (Siehe die Abschnitte ???OPC??? und ???Vitamin C???)
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 als Schutz vor Nebenwirkungen von Chemotherapie

Die vielversprechenden Studien, welche die Effizienz von Coenzym Q10 untermauern, sprechen angesichts der Tatsache, dass Q10 selbst bei hohen Dosen in unz??hligen Studien keinerlei Nebenwirkungen gezeigt hat, deutlich f??r die Supplementierung von Q10 bei einer Krebserkrankung.

Wird man mit einer Chemotherapie behandelt, gesellt sich hierzu noch eine weitere positive Eigenschaft des Coenzyms Q10, n??mlich der Schutz vor deren Nebenwirkungen.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Umgekehrt f??hrt eine ausreichende regelm????ige Zufuhr von Q10, m??glichst in Verbindung mit OPC und Vitamin C, zu einem sichtbar verj??ngenden Ergebnis ??? der Hautalterung sowie diversen Hauterkrankungen wird effektiv vorgebeugt. Hierbei kommt der Zufuhr der N??hrstoffe von innen (durch die Einnahme von Q10 in Form von Kapselpr??paraten) eine h??here Bedeutung zu als der lokalen Anwendung in Form von Q10-Cremes. Laut einer Studie von Professor Hoppe kann die Hautalterung aufgrund des Abbaus des lichtinduzierten oxidativen Stresses verlangsamt werden.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Q10 mindert die Nebenwirkungen von Medikamenten

Erfahrungswerte in aller Welt, besonders in Japan, zeigen, dass das Coenzym Q10 nicht nur selbst keine Nebenwirkungen nach sich zieht, sondern sogar die Nebenwirkungen von Medikamenten verringern kann. Eine Studie von Takahashi et al. konnte nachweisen, dass die Herzinsuffizienz als typische Nebenwirkung des Medikaments ???Timolol???, das als Rezeptorenblocker fast ausschlie??lich gegen den Gr??nen Star (Glaukom) Anwendung findet, bei paralleler Medikation mit Q10 (90 mg/Tag) deutlich verringert werden konnte.
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Wie viel Q10 wird empfohlen, um gesund und vital zu bleiben?

Wie am Beispiel von Vitamin C bereits detailliert verdeutlicht, entscheidet die Einnahmemenge dar??ber, wie effizient Vitamine, Mineralien oder sekund??re Pflanzenstoffe wirken k??nnen.

Eine therapeutische Wirksamkeit wird von Experten ab einer t??glichen Dosis von 100 mg Q10 (Ubiquinon) erwartet; bei Herzproblemen werden 50???300 mg Q10 je nach der Schwere der Erkrankung empfohlen; Prof. Dr. Clark empfiehlt sogar 400 mg Q10 t??glich.

Die Verwertung und Erzeugung von Q10 variiert von Mensch zu Mensch. Wer auf Nummer sicher gehen will, kann den Q10-Gehalt ??ber eine Blutuntersuchung testen lassen. Die gr????ten k??rpereigenen Vorr??te an [...]  
`
    },
    {
        usefulInformationImageId: images_q10,
        quelleId: "3",
        afflinksId: afflinks.q10,
        text: `
Die gr????ten k??rpereigenen Vorr??te an Q10 weisen wir im Alter von 20 Jahren auf. Danach sinkt die Q10-Konzentration in unserem K??rper stetig bis auf die H??lfte und darunter. Eine t??gliche Zufuhr von 100 mg ist daher bei Gesunden empfehlenswert und unbedenklich. Bei Erkrankungen verh??lt sich die Sachlage anders. So k??nnen Dosen von 300 mg Q10 und mehr sehr sinnvoll sein. Nach Ansicht von Dr. Langsjoen sollten hohe Dosen Q10 bis zu 720 mg/Tag weitere Verbesserungen bei diversen Krankheiten erzielen.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen ??? was ist das?

Bei Selen handelt es sich um nicht weniger als ein ???essenzielles???, also lebenswichtiges, Spurenelement, das von unserem K??rper nicht selbst hergestellt wird und daher regelm????ig ??ber die Nahrung aufgenommen werden muss. Selen (Selenium) wurde 1817 von dem Schweden J??ns Jakob Berzelius entdeckt; es sollte jedoch bis in die Mitte der 70er-Jahre andauern, bis man Selenvorkommen auch nat??rlicherweise im menschlichen Organismus (10??? 15 mg) nachgewiesen hat.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen ist ein Bestandteil unserer Erdkruste und von der H??ufigkeit des Vorkommens darin auf Platz 60 angesetzt. Es erfordert 1 kg Erdmaterial, um 0,09 mg Selen zu gewinnen, was in etwa der Seltenheit des Goldvorkommens in der Erde entspricht. In der freien Natur oberhalb des Erdbodens kommt Selen viel h??ufiger vor und ist in fast allen Gew??ssern, Gesteinen und B??den vorzufinden. Benannt aufgrund seines silbernen Glanzes nach der griechischen Mondg??ttin ???Selene???, hat man Selen, lange noch bevor sein enormer Nutzen f??r unsere Gesundheit hieraus ersichtlich wurde, f??r den technischen Bedarf entdeckt.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Das Blatt wendete sich schlagartig, als man analysierte, dass es auf der Erde weitaus mehr Gebiete mit Selenmangel als mit einem Selen??berschuss gibt und man zudem feststellte, dass in den Gebieten, in denen ein leichter Selen??berschuss vorherrschte, Mensch und Tier vitaler und ges??nder waren, w??hrend in den Selen-Mangel-Gebieten (hierzu geh??rt auch Deutschland!) Menschen und auch Tiere weniger vital waren und vermehrt an Krankheiten litten. In der Tat haben zahlreiche Studien ergeben, dass besonders in den selenarmen Gegenden die Zahl der Menschen, die an Krebs, Herzkreislauferkrankungen und anderen Zivilisationskrankheiten leiden, dramatisch h??her ist, w??hrend auf der anderen Seite in den selenreichen Gegenden die Menschen gesund und vital bleiben und dabei ein ??berdurchschnittlich hohes Alter erreichen!  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Das Wissenschaftlerteam Schwarz und Foltz konnte 1957 nachweisen, dass Selen f??r den menschlichen Organismus essenziell, also lebensnotwendig ist. Selen ist ein Bestandteil zahlreicher wichtiger Enzyme in unserem Organismus und damit in entscheidende physiologische Abl??ufe im K??rper integriert. Nach und nach konnten dem Selen weitere wichtige Aufgaben im Organismus zugeordnet werden ??? eine Forschung, die bis heute noch andauert, aber bereits h??chst spannende Erkenntnisse ans Tageslicht gebracht hat und Selen zu einer entscheidend wichtigen Substanz innerhalb der Pr??vention und Therapie zahlreicher Erkrankungen macht. Erfahren Sie diese spannenden Details auf den folgenden Seiten, zum Beispiel dazu, dass Selen das Auftreten von Krebs, Herzinfarkten oder Arthritis stark hemmt und im Tierversuch das Leben um 175 % verl??ngert hat. Staunen Sie dar??ber, was Selenium als echtes Multitalent auch f??r Ihre Gesundheit zu tun imstande ist.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wussten Sie, dass ???
???? Selen ein ???essenzielles??? Spurenelement ist, das also f??r uns lebensnotwendig ist und ??ber die Nahrung aufgenommen werden muss?
???? Selen ein wichtiger Bestandteil von Enzymen ist, die f??r die Aktivierung von zahlreichen Hormonen und Stoffwechselfunktionen verantwortlich sind?
???? wir st??ndig von unz??hligen Giften umgeben sind und Selenium (Selen) als Bestandteil von Schutzenzymen innerhalb der Entgiftung des Organismus eine tragende Rolle spielt?
???? unsere K??rperzellen pro Tag rund 10 000 x von freien Radikalen (verursacht durch UV-Strahlen, Umweltgifte, Nahrung, Stress, Zigaretten) angegriffen werden, was uns erkranken und vorzeitig altern l??sst?
???? Selen als potentes Antioxidans diese gefr????igen freien Radikale abwehrt?
???? Selen uns vor UV-Strahlenbedingter und radioaktiver Belastung sch??tzt?  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
???? Krebs die Todesursache Nr. 2 ist und Selen seit Jahrzehnten von komplement??ren Onkologen innerhalb der Krebstherapie begleitend mit Erfolg eingesetzt wird?
???? Selen die positive Wirkung der Chemotherapie bei Krebs um den Faktor 10 verst??rken kann und die Nebenwirkungen lindert?
???? Selen die Wirkung einer Strahlentherapie optimiert und die Nebenwirkungen schm??lert?
???? folglich ??berall da, wo der Boden arm an Selen ist, auff??llig viele Menschen an Krankheiten wie Herzinfarkt und Krebs versterben und ??berall dort, wo die B??den reich an Selen sind, die Menschen krebsfrei und vital alt werden?
???? Selen im Tierversuch in Verbindung mit Vitamin E das Leben um 175 % verl??ngern konnte?
???? Selen unser Immunsystem st??rkt und Infektionen entgegenwirkt und bereits dadurch unz??hligen Erkrankungen trotzen kann?  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Allgemeine Wirkung von Selen auf unseren Organismus:

- Herzkreislauf sch??tzend
- Blutdruck senkend
- antioxidativ/zellsch??tzend
- entgiftend (Schwermetalle wie Blei, Cadmium, Amalgam, Quecksilber)
- entz??ndungshemmend
- antiviral
- antitumoral (Krebsentstehung vorbeugend)
- antimutagen
- Unterst??tzung des programmierten Zelltods entarteter und abnormer Zellen
- Unterst??tzung von Reparaturma??nahmen gesch??digter DNA (Erbgut)
- lebensverl??ngernd
- immunmodulierend (das Immunsystem st??rkend)
- leberst??rkend
- UV-Strahlenschutz
- Schutz vor radioaktiven Strahlen
- F??rderung der Spermienreife
- Schutz vor Allergenen
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Herzkreislaufsch??tzende Wirkung von Selenium

Selen sch??tzt vor der Verklumpung der Blutpl??ttchen und hat einen positiven Einfluss auf unsere Blutgef????e. Als potentes Antioxidans sch??tzt es die Herzmuskelzellen vor Besch??digungen seitens verschiedener Stoffwechselprodukte und normalisiert einen zu hohen Blutdruck.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Antioxidative Wirkung des Selen-Enzyms ???Glutathionperoxidase??? auf  unseren Organismus

Als hochpotentes Antioxidans sch??tzt das Selen-Enzym namens ???Glutathionperoxidase??? unsere K??rperzellen vor den Angriffen freier Radikale, die jede unserer rund 60 Trilliarden K??rperzellen ca. 10 000 x am Tag angreifen und so zu zahlreichen Erkrankungen und vorzeitiger Alterung (u. a. auch Krebs) f??hren. Diese gefr????igen Teilchen entstehen unter anderem aufgrund der Umweltbelastung, mit der Nahrung und innerhalb unserer eigener, normaler Stoffwechselvorg??nge.

Das Selen-Enzym ???Glutathionperoxidase??? wandelt die angriffslustigen freien Radikale in harmlose Derivate um und kann unsere Zellen auf diese Weise vor Schlimmerem bewahren!  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Entgiftende Wirkung durch Selen

Als Bestandteil wichtiger Schutzenzyme spielt Selen bei der Entgiftung des Organismus eine wichtige Rolle. Es bindet unter anderem toxische Schwermetalle, wie etwa die in den Autoabgasen zahlreich enthaltenen giftigen Stoffe ???Blei??? und ???Cadmium???, es bildet Abwehrmechanismen gegen die zerst??rerische Wirkung von Zink, Quecksilber, Zinn, Arsen und Kobalt sowie Amalgam in den Zahnplomben.

Des Weiteren f??rdert Selenium den Abbau sch??dlicher Substanzen im K??rper und wirkt sich auf die Leber st??rkend aus, die bekanntlich als das Entgiftungsorgan schlechthin in unserem Organismus fungiert.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Entz??ndungshemmende Wirkung von Selen  

Selen vermindert die Produktion von Zytokinen und Prostanoiden, die als Vorl??ufer f??r Entz??ndungsreaktionen gelten. Es unterst??tzt des Weiteren das Immunsystem im Kampf gegen Eindringlinge (Bakterien, Viren usw.) und macht also den Einsatz entz??ndlicher Substanzen zu deren Eliminierung nicht notwendig. Auch sch??tzt Selen die gesunden K??rperzellen vor den freien Radikalen, die im Entz??ndungsprozess entstehen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Antitumorale Wirkung von Selen

Die antitumorale Wirkung von Selenium ist sehr vielf??ltig und vor allem auf die folgenden Mechanismen zur??ckzuf??hren:

- Selen kurbelt das Immunsystem an. Dabei werden die NK-Zellen (nat??rlichen Killerzellen), welche die Tumorzellen angreifen, aktiviert und verst??rkt Antik??rper produziert.
- Selen senkt die Anzahl von Oberfl??chenmolek??len auf den Krebszellen und markiert diese quasi f??r die NK-Zellen, die die Krebszellen entdecken und zerst??ren.
- Selen hemmt das Wachstum der Tumorzellen ??ber direkte Eingriffe in deren Stoffwechsel.
- Selen neutralisiert Zellgifte.
- Selen neutralisiert die angreifenden freien Radikale.
- Die bereits angegriffenen Zellen werden wieder repariert.
- Selen sch??tzt den Organismus vor entarteten Zellen.
- Selen unterst??tzt den programmierten Zelltod bei entarteten Zellen  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
- Selen verhindert Chromosomensch??den.
- Durch Selen werden krebserregende Substanzen (Karzinogene) neutralisiert-
- Karzinogene Stoffwechselgifte werden von Selen gepuffert.
- Selen aktiviert bestimmte Enzyme, welche Reparaturmechanismen an den Genen ??bernehmen.
- Selenium sch??tzt vor radioaktiver Strahlung.
- Da Selen gerade bei Krebs eine ganz besondere Stellung einnimmt, ist diesem ein eigener Punkt ???Selen bei Krebs??? gewidmet.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Immunsystem st??rkende Wirkung von Selen

Das Immunsystem stellt unser biologisches Abwehrsystem dar, zu dessen Aufgaben es geh??rt, Gewebesch??digungen aufgrund von Krankheitserregern vorzubeugen. Hier nimmt das Immunsystem den Kampf gegen Bakterien, Viren und Pilze auf, zerst??rt mutierte, k??rpereigene Zellen und entfernt k??rperfremde Substanzen. Ein angeschlagenes Immunsystem f??hrt unweigerlich zu etwaigen Erkrankungen; auf der anderen Seite k??nnen Erkrankungen nur mithilfe eines intakten Immunsystems heilen. Indem es die Produktion von Antik??rpern f??rdert, st??rkt Selen unser Immunsystem. So konnte die Zahl der Antik??rper unter Zufuhr von Selenium im Tierversuch um den Faktor 30 erh??ht werden.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Unter anderem aber sind es die nachfolgend genannten Krankheitsbilder, die nachweislich von einer ausreichenden Selen-Zufuhr profitieren:

- Arteriosklerose (Gef????verkalkung)
- Herzkreislauferkrankungen (Angina Pectoris, Keshan-Krankheit, Schutz vor Herzinfarkt und ??hnlichem)
- Krebs/Tumorentstehung
- UV-Sch??den der Haut (sch??tzt vor vorzeitiger Hautalterung)
- Zeugungsunf??higkeit
- Allergien
- Diabetes mellitus
- Schilddr??senunterfunktion
- Autoimmunerkrankungen der Schilddr??se
- Hashimoto-Thyreoiditis
- Kashin-Beck-Syndrom
- myx??demat??ser endemischer Kretinismus
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

Die herzkreislaufsch??tzende Wirkung entfaltet Selen ??ber multifaktorielle Mechanismen: Zum einen sch??tzt es (besonders in Verbindung mit Vitamin E!) zuverl??ssig die Herzmuskelzellen vor Sch??digung vonseiten freier Radikale und normalisiert zudem einen hohen Blutdruck. Andererseits verringert Selen mit seinen halbmetallischen Eigenschaften den elektrischen Widerstand, was generell die Leitung aller Impulse im K??rper innerhalb der Nervenbahnen optimiert, so auch die elektromagnetischen Impulse des Sinusknotens am Herzmuskel. Eine Besonderheit ist die positive Einwirkung auf [...]
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Schutz vor Herzinfarkt

Selen f??rdert die nervale Reizgebung und verringert gleichzeitig den elektrischen Widerstand. Es verf??gt ??ber die Eigenschaft, im Bereich des Sinusknotens die nervale Reizgebung zu unterst??tzen. Auf diese Weise kann Selen den Herzschlag-Rhythmus optimieren und Herzproblemen bis hin zum Herzinfarkt vermeiden helfen. Als Pionier auf dem Gebiet der Erforschung des Seleneinflusses auf das Herzkreislaufsystem gilt der finnische Art Dr. Johan A. Bjorksten. Er analysierte als Erster die hohe Sterblichkeitsrate seiner Landsleute im Osten von Finnland und konnte in diesem Gebiet einen geradezu furchterregenden Selenmangel feststellen. Ferner konnte er feststellen, dass in L??ndern, deren Wasser auffallend wenig Selen enth??lt, Herzinfarkte drei bis vier Mal so h??ufig auftreten und in den selenarmen finnischen Gebieten sieben Mal so h??ufig sind wie in den selenreicheren Gebieten Finnlands.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen hilft bei akutem Herzinfarkt

War der Herzinfarkt nicht zu vermeiden, so stellt sich Selen im Hinblick auf eine geringere Herzmuskelsch??digung und der Rehabilitation als sehr hilfreich dar. W??hrend des Herzinfarkts werden sch??dliche Substanzen verst??rkt produziert, die das Herzgewebe zus??tzlich sch??digen, so zum Beispiel Laktat- dehydrogenase und Serum-Kreatinphosphokinase.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wirkung bei Diabetes

Zumindest partiell scheint Diabetes mit Selenmangel zusammenzuh??ngen. Nachweislich unterbindet ein Mangel an Selen und Vitamin E die Insulinproduktion. Des Weiteren ??bt ein Selenmangel einen negativen Einfluss auf die Langerhansschen Inseln der Bauchspeicheldr??se, die f??r die Produktion von Insulin und Glucagon zust??ndig sind, aus. Im Umkehrschluss kann also eine ausreichende Selenzufuhr Diabetes vorbeugen und eine bestehende Diabeteserkrankung positiv beeinflussen. Allgemein aber sind Diabetiker von starker oxidativer Belastung innerhalb ihrer Blutgef????e bedroht. Effiziente Antioxidantien, so auch Selen, k??nnen den oxidativen Stress in Zaum halten und die Gef????e des Diabetikers sch??tzen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Regulierende Wirkung von Selen auf die Schilddr??se

Unsere Schilddr??se ??bernimmt wichtige Aufgaben innerhalb unseres Organismus, beginnend bei der Steuerung des Energiehaushalts bis hin zur Steuerung der Stoffwechselvorg??nge. Selen ist ein Bestandteil des Enzyms ???Deiodase???, das f??r die Produktion von Schilddr??senhormonen zust??ndig ist.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wirkung von Selen bei Hashimoto-Thyreoiditis

Selen kann die Anzahl der Antik??rper gegen Thyreoperoxidase (TPO) signifikant senken; die Patienten f??hlen sich besser, so Professor George Kahaly von der Universit??tsklinik Mainz. Hierzu seien 200 ??g Natriumselenit/Tag erforderlich.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Wirkung von Selen gegen Muskelschwund

Aus einem Protokoll eines ??rzteteams der Universit??t G??teborg vom Internationalen Symposium ??ber Spurenelemente in M??nchen 1986 geht Folgendes hervor:
- Elektromyographische Messungen (EMG) zeigten eine Normalisierung des Muskeltonus im Laufe der Behandlung mit Protecton-Selen mit Vitamin E.
- Die Kraftleistungsf??higkeit an Armen und H??nden verbesserte sich.
- Die k??rperliche Verfassung verbesserte sich.
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

Interessanterweise enth??lt die Augenlinse und die Augennetzhaut reichhaltig Selen, w??hrend diese bei an fortgeschrittenem Grauen Star Erkrankten nur noch 1/6 des Selens enthalten.

Offensichtlich sch??tzt also das Selen unsere Augenlinse und die Netzhaut auch vor Umweltgiften, die ebenfalls die Ursache f??r Grauen Star sein k??nnen.

In Tierversuchen f??hrte der provozierte Selenmangel innerhalb der Ern??hrung zum Grauen Star; im Umkehrschluss kann das Sehverm??gen verbessert und der Graue Star mit einer ausreichenden Selenzufuhr vermieden werden.

`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen bei Rheuma und Arthritis

Arthritis, eine entz??ndliche, gelenkzerst??rende Erkrankung, die von der Schulmedizin bislang nicht beherrscht wird, kann mithilfe von Selen, am besten in Kombination mit Vitamin E, gelindert und h??ufig sogar geheilt werden. Ein Indiz f??r diese enorme Wirkung ist bereits die Tatsache, dass Arthritiserkrankte einen akuten Mangel beider Substanzen aufweisen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Die Ergebnisse waren verbl??ffend:

- Nach nur einem Monat berichteten die Arthritis-Patienten ??ber eine signifikante Schmerzlinderung und die Besserung ihres Gesamtzustands.

- In den folgenden Monaten der Selen-Therapie verschwanden Gelenkschwellungen, H??ftschmerzen und L??hmungserscheinungen an H??nden und Beinen.

- Innerhalb der Herbstsitzung der Arthritis-Gesellschaft wurden die Erfolge dieser Versuchsreihe bekanntgegeben und Selen zur Therapie bei Rheuma und Arthritis empfohlen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Ab wann wirkt Selen bei Arthritis?

Da Selen ein Naturheilmittel ist, setzt die heilende Wirkung zwar recht z??gig ein, diese aber verl??uft neben vielen anderen positiven Prozessen im Zuge der Selens??ttigung ab. Selenium ist kein Schmerzmittel im klassischen Sinne. Das Nachlassen von Schmerzen geht direkt mit dem Heilungsprozess einher; eine Zustandsbesserung ist in der Regel nach vier bis sechs Wochen zu erwarten ??? bis dahin kann es sogar zu einer Erstverschlimmerung kommen, die mit der Aktivierung des Immunsystems zusammenh??ngt, im Prinzip aber immer ein gutes Zeichen f??r das Einsetzen der Heilungsmechanismen ist!
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen bei Krebs

Zahlreiche Beobachtungen von ??rzten und Forschern aus aller Welt haben ein interessantes Ph??nomen best??tigt. In der Tat erkranken Menschen viel h??ufiger an Krebs in Gegenden, in denen die B??den ausgesprochen wenig bis gar kein Selen enthalten, um es ??ber die nat??rliche Nahrungskette an die Pflanzen, Tiere und schlie??lich den Menschen weiterzugeben!

Hieraus wurde geschlossen, dass Selenium ein au??ergew??hnlich hohes Zellschutzpotenzial aufweist, das selbst karzinogenen Stoffen und dem Krebsausbruch trotzen kann.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Sensationelle Heilungen von Krebs mithilfe von Selen

Erst nach dem Ersten Weltkrieg gelang es einem Therapeuten, die richtige Selen-Dosis f??r Krebspatienten herauszufinden. Dr. E. Watson-Williams konnte 6 von 18 Krebspatienten, die er mit intramuskul??ren und intraven??sen Selen-Injektionen behandelt hat, als geheilt entlassen; bei anderen f??nf Patienten kam es zur Schrumpfung der Tumore und zur Verbesserung des Allgemeinzustands. Zwei repr??sentative Studien aus den 1980er- und 1990er- Jahren zeigen unterdessen auf, dass das Risiko, an Krebs zu erkranken, bei unzureichender Selenversorgung um das 2???6- Fache steigt.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen wirkt gegen Krebs, indem es
- das Immunsystem insgesamt ankurbelt, also NK-Zellen (nat??rliche Killerzellen) aktiviert, welche die Tumore regelrecht aufl??sen.
- eine verst??rkte Produktion von Antik??rpern und anderen Botenstoffen bewirkt.
- die Anzahl von Oberfl??chenmolek??len auf den Krebszellen senkt und diese quasi f??r die NK-Zellen markiert, damit die NK-Zellen diese besser aufsp??ren und zerst??ren k??nnen.
- die Tumorzellen ??ber den Eingriff in deren Stoffwechsel am Wachstum hemmt.
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
- den Organismus vor entarteten Zellen sch??tzt.
- bei entarteten Zellen die Apoptose (den programmierten Zelltod) unterst??tzt
- Chromosomensch??den verhindert.
- karzinogene (krebserregende) Substanzen neutralisiert.
- karzinogene Stoffwechselgifte puffert/neutralisiert
- ??ber die Aktivierung bestimmter Enzyme Reparaturmechanismen an den Genen einleitet.
- vor radioaktiver Strahlung sch??tzt.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen wird innerhalb der komplement??ren Onkologie wie folgt eingesetzt:
- zur Vorbeugung von Krebs,
- in der aktiven Krebstherapie,
- begleitend zur Chemotherapie,
- begleitend zur Strahlentherapie,
- sowohl vor und w??hrend als auch nach der Tumor-OP und
- zur Nachsorge.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Gegen welche Krebsarten/Tumorarten hat Selen seine Wirksamkeit bewiesen?

Aktuelle Erkenntnisse lassen darauf schlie??en, dass der Einsatz von Selen innerhalb einer ganzheitlichen Behandlung bei allen Krebsarten mehr als sinnvoll ist.
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
-Leuk??mie
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

Weitere Tests anderer Forscher haben die positiven Ergebnisse best??tigen k??nnen. So konnte Dr. A. Todd bereits in den 1930er-Jahren die ??berlebensrate aller an Brustkrebs behandelten/operierten Frauen erh??hen. Aktuelle Forschungen am renommierten Hahn-Meitner-Institut in Berlin unter der Leitung von Prof. Dr. Peter Br??tter konnten unter Beweis stellen, dass eine t??gliche Dosis von 300 Mikrogramm Bio-Selen die Brustkrebsrate bei Frauen auf Null senkt.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen erfolgreich in der Vorbeugung von Prostatakrebs

Entsprechend einer Studie der renommierten Harvard School of Public Health an 34 000 M??nnern konnten die Wissenschaftler aufzeigen, dass M??nner mit hoher Selenaufnahme ein um die H??lfte gesenktes Risiko haben, an Prostatakrebs zu erkranken. 
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen w??hrend der Chemotherapie

Selen beeinflusst die Chemotherapie nicht negativ. Sowohl an Zellkulturen als auch an Patienten wurden verschiedene Studien mit dem Ziel durchgef??hrt herauszufinden, ob Selen die Wirksamkeit der Chemotherapie (Adriamycin/Cisplatin) irgendwie st??ren k??nnte. Keine der Studien konnte dieses best??tigen!

Ganz im Gegenteil: Selen verst??rkt die erw??nschte Wirkung der Chemotherapie um bis auf das 10-Fache!

Offenbar knackt Selen effizient den Schutz der Krebszelle gegen die Chemotherapie und verhindert so die Resistenz der Krebszellen gegen??ber den Chemotherapeutika, indem es Glutathion bindet, das ansonsten von der Krebszelle zum Schutz gegen??ber den Chemotherapeutika genutzt wird.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Selen mindert die unerw??nschten Nebenwirkungen der Strahlentherapie

In zahlreichen Studien konnte nachgewiesen werden, dass Selen die gesunden Zellen vor der Sch??digung der Strahlen w??hrend der Strahlentherapie sch??tzt, w??hrend die Krebszellen von diesem Schutz nicht profitieren. Damit beeinflusst Selen in keiner Weise negativ die Strahlentherapie, sch??tzt aber die gesunden Zellen vor den gef??rchteten Nebenwirkungen. Zus??tzlich sch??tzt es vor den unerw??nschten negativen Wirkungen auf das Immunsystem und verschont die Immunzellen um ein Drittel vor Besch??digungen.  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Kombination von Selen mit Vitamin E verl??ngert Leben um 175% !

W??hrend die blo??e Zugabe von Vitamin E das Leben von Laborm??usen um immerhin 30 % verl??ngerte, hat die Kombination von Vitamin E mit Selen unter der Leitung des Wissenschaftlers Prof. Dr. Richard Passwater eine sensationelle Lebensverl??ngerung um 175 % erzielt!  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Anzeichen f??r einen Selenmangel

Die folgenden Anzeichen beziehungsweise Symptome k??nnen mit einem Selenmangel einhergehen:

- wei??e Flecken unter den N??geln, br??chige N??gel,
- hellere Haare als sonst,
- Haarausfall,
- Hautbl??sse,
- M??digkeit,
- Herzrhythmusst??rungen,
- Nachlassen der Leistung,
- Leberst??rungen,
- Schilddr??senunterfunktion,
- Anf??lligkeit f??r Immunerkrankungen,  
- Unfruchtbarkeit beim Mann,
- Gelenkbeschwerden,
- Bluthochdruck,
- Wachstumsst??rungen bei Kindern,
- Herzkreislaufprobleme,
- Krebs.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Zu den Gebieten mit ausgesprochenem Selen-Mangel z??hlen:

- Deutschland (einwandfrei nachgewiesen 1987 durch Prof. Dr. Hartfiel von der Universit??t Bonn)
- ??sterreich
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

Da es sich bei Selen um ein Spurenelement handelt, braucht der Mensch zu seiner Gesunderhaltung nicht wirklich viel davon ??? daf??r aber eine stetige Menge, die er seinem Organismus regelm????ig zuf??hren muss! Bleibt die Selenversorgung l??nger mangelhaft bis ungen??gend, kann sich dies in ernsthaften Krankheiten, wie Krebs oder Herzkreislauferkrankungen, ??u??ern. Selen ist stets in Mengen von insgesamt 16???20 mg im K??rper eines gesunden Menschen vorhanden  
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Seleneinnahme zur Pr??vention von Krankheiten:

- Erwachsene: 50???200 ??g/Tag
- Jugendliche: 100???200 ??g/Tag
- Kinder: 50 ??g/Tag

Selenennahme bei Krankheiten

Eine therapeutische Dosis kann bis zu 1000 ??g/Tag betragen und sollte mit einem Heilpraktiker oder einem kundigen Therapeuten abgesprochen werden. Eine Blutuntersuchung sechs bis acht Wochen nach Beginn der Seleneinnahme kann n??tzlichen Aufschluss zur weiteren Dosierung liefern.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Welches Selenprodukt eignet sich?

Die meisten Heilpraktiker und Naturheilmediziner sind sich dar??ber einig, dass der Mensch den tats??chlichen Selenbedarf hierzulande auf nat??rlichem Wege (??ber Lebensmittel) kaum decken kann, was Studien von Blutuntersuchungen einwandfrei belegen. Es empfiehlt sich daher, besonders f??r Personen ??ber 40 und Risikogruppen, Immungeschw??chte und Krebsgef??hrdete, die nat??rliche Nahrung mit einem guten Selenpr??parat zu erg??nzen.
`
    },
    {
        usefulInformationImageId: images_selen,
        quelleId: "3",
        afflinksId: afflinks.selen,
        text: `
Bio-Selen vs. Natriumselenit

Viele Experten empfehlen die Aufnahme von organischem Selen, dem sogenannten ???Bio-Selen???, da die Verwertung von N??hrstoffen durch unseren K??rpers naturgem???? ??ber organische Quellen grunds??tzlich am effizientesten vonstattengeht.

Aktuell aber sind die Gegenstimmen in der ??berzahl, welche die ??berzeugung vertreten, dass die anorganische Selen-Form als Natriumselenit vom K??rper am besten verwertet werden kann.

Dieses wird in Therapien vieler Erkrankungen erfolgreich eingesetzt und scheint die modernere Variante zu sein, die sich bestens bew??hrt hat ??? vor allem zur Behandlung von vorliegenden Erkrankungen. Mehr hierzu auch im Punkt ???Selen-Produkte???.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Betrachtet man den menschlichen K??rper, so ist der Bedarf nach stabilen und gleichzeitig elastischen Elementen sehr hoch. So besteht unser gesamtes Blutgef????system, das insgesamt (inklusive der Kapillaren) rund 100 000 km Gesamtl??nge hat, in jungen Jahren aus einer elastischen und zugleich stabilen Struktur. Das gesamte Bindegewebe, die Haut, die Sehnen und B??nder sowie die Gelenkknorpel m??ssen diesen Anforderungen an Elastizit??t und Festigkeit zugleich standhalten. Ein unverzichtbarer N??hrstoff, damit dies lebenslang so bleibt, ist Silicium, und der Wissenschaftler Hugo Schulz geh??rte zu den Ersten, die erkannt haben, dass es kein menschliches Gewebe gibt, das frei von Silicium und ??? ergo ??? nicht auf Silicium angewiesen ist!
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Es sollten viele Jahre ins Land gehen, bis man die Wichtigkeit von Silicium auch in medizinischen Kreisen zu w??rdigen wusste. Vielleicht liegt dies gerade daran, dass Spurenelemente im K??rper so geringf??gig vorkommen, dass man ihnen nicht auf Anhieb ein derartiges Potenzial zuschreibt, wie es sich f??r Silicium darstellt. Ein grober Fehler ??? wei?? man doch mittlerweile seit L??ngerem um die lebenswichtigen Funktionen beispielsweise des Spurenelements Eisen Bescheid.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Nicht zuletzt wurde Silicium als entz??ndungshemmend und desinfizierend eingestuft.

Weitere wissenschaftliche Untersuchungen konnten belegen, dass es sich beim Silicium um einen essenzielles, also f??r unseren Organismus lebensnotwendiges Element handelt, vergleichbar sogar mit dem Vitamin C! Dies wird durch die Tatsache unterstrichen, dass das Silicium wichtige Vorg??nge innerhalb unseres Organismus bewerkstelligt, die ??berhaupt ausschlie??lich nur in Gegenwart von Silicium m??glich sind.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Bekannt ist, dass der Stamm der Hunzas, ein V??lkchen im Himalaya, ein mit Silicium angereichertes Gletscherwasser trinkt. Das Durchschnittsalter dieser Menschen betr??gt erstaunliche 130 Jahre bei optimaler Gesundheit!

Silicium ist des Weiteren der einzige bekannte Stoff, der ??ber die F??higkeit verf??gt, das 300-Fache seines Gewichtes an Wasser zu binden. Die gesunde Funktion unserer Zellen steht aber unmittelbar mit der Wasserbindungsf??higkeit in Verbindung, die erst eine ausreichende N??hrstoffzufuhr und funktionierende Stoffwechselprozesse erm??glicht. Die abbauende Entwicklung im menschlichen Organismus kennen wir von ??lteren Menschen, deren Haut mit dem Alter mit einhergehendem Silicium- Verlust aufgrund von Fl??ssigkeitsverlust schrumpelig wird und Falten bildet.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
So verf??gen Neugeborene ??ber den h??chsten Anteil an K??rperfl??ssigkeit. Im Laufe des Lebens sinkt das Verh??ltnis der Fl??ssigkeit zur Trockenmasse in unserem K??rper immer mehr.

??ber die Supplementierung von Silicium als k??rpereigenem Stoff, der ??ber die F??higkeit verf??gt, das 300-Fache an Wasser an sich zu binden, steht dem Menschen ein Mittel zur Verf??gung, um die biologische Alterung stark hinauszuz??gern und bis ins hohe Alter gesund und sch??n zu bleiben. Silicium also ein N??hrstoff, der zugleich gesund, sch??n und jung macht? Exakt so ist es, und vor noch nicht allzu langer Zeit h??tte die Wissenschaft solche Mechanismen niemals f??r m??glich gehalten. Gen??gend Gr??nde also, um dieses ganz besondere Element als wundervolles Geschenk von Mutter Natur genauer unter die Lupe zu nehmen!
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wussten Sie, dass
... Silicium anerkannterweise ein essenzielles (lebensnotwendiges) Element ist?
... Silicium direkt unser Immunsystem st??rkt und unsere Gesundheit auf diese Weise effektiv sch??tzt?
... Silicium den Zellstoffwechsel aktiviert und unsere Zellen erneuert und dadurch eine biologische Verj??ngung unseres K??rpers nach sich zieht?
... Silicium unser Bindegewebe st??rkt und wieder neu aufbaut?
... Falten, Cellulitis & Co. mit Silicium sowohl innerlich als auch ??u??erlich erfolgreich bek??mpft werden k??nnen?
... Silicium unsere splissigen Haare wieder gesund machen kann, br??chige Fingern??gel fest und die Haut wieder faltenfrei?
... Silicium unsere Blutgef????e elastisch h??lt und spr??de Blutgef????e wieder elastisch machen kann?
... Silicium Arteriosklerose (Arterienverkalkung) sogar teilweise r??ckg??ngig machen kann?
... Silicium (Kiesels??ure) unsere Knochen st??rken kann?
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wussten Sie, dass
... Silicium unsere Gelenke jung erh??lt und sogar Arthrose teilweise r??ckg??ngig machen kann?
... unser K??rper im Alter von zehn Jahren bereits anf??ngt, Silicium stetig abzubauen, auch wenn dieser Prozess erst mit 35 Jahren sichtbar wird?
... Silicium der einzige Stoff ist, der die 300-fache Menge Wasser an sich ziehen und Falten in wenigen Wochen auf nat??rliche Weise verschwinden lassen kann?
... Kiesels??ure (Silicium) s??mtliche Alterungsprozesse nicht nur bremsen, sondern nachweislich auch r??ckg??ngig machen kann?
... Silicium auch desinfizierend und entz??ndungshemmend wirkt?
... Silicium aufgrund seiner genannten F??higkeiten Menschen sch??n und gesund machen und gleichzeitig das Leben erheblich verl??ngern kann?
... rund 80 % aller Menschen unter Siliciummangel leiden und unn??tig altern, krank werden und an Jugendbl??te einb????en?
... nur die wenigsten ??rzte aufgrund der jungen Forschung von Silicium ??ber diese Erkenntnisse verf??gen?

`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium verj??ngt Blutgef????e und wirkt Arteriosklerose entgegen

In einer Studie konnten die Blutgef????e mit kolloidalem Silicium verj??ngt werden. Das Protein der Gef????w??nde hat sich verj??ngt, was zur Blutdrucksenkung und Vermehrung der Lymphozyten und Phagozytenf??hrte. In anderen Studien an Kaninchen konnte ebenfalls ein R??ckgang an Atheroml??sionen nach Erg??nzung der Nahrung mit Silicium nachgewiesen werden.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium verj??ngt in Studien die Haut

An 100 Frauen, die drei Wochen lang 3 x am Tag mit Silicium-Gel behandelt wurden, stellte man eine signifikante Verminderung der Faltentiefe fest. Unabh??ngig von den behandelten Hautstellen zeigte sich in den n??chsten sechs Monaten bei 40 % der behandelten Frauen ein bleibender Effekt und nach einem Jahr noch bei 35 % der Probandinnen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Signifikante Verj??ngung der Haut im Tierversuch

An haarlosen M??usen sollte die Strukturver??nderung der Haut unter Anwendung von Silicium untersucht werden. Zu diesem Zweck unterzog man die Haut von sechs Monate alten M??usen einem Vergleich mit der Haut von 17 Monate alten M??usen. Die 17 Monate alten M??use hatten ab dem Alter von 12 Monaten t??glich Silicium verabreicht bekommen, und zwar an f??nf Tagen in der Woche. Bei diesen M??usen stellte sich eine Neustrukturierung der Kollagen- und Elastinfasern, die sich neu aufgebaut hatten, ein, w??hrend die interfibrillaren R??ume und die St??rke der Lederhaut trotz chronologischer Alterung unver??ndert blieben. Die Struktur der Lederhaut entsprach den H??uten der sechs Monate alten, unbehandelten M??use.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Verj??ngungsmechanismen in weiteren Studien nachgewiesen

Den beiden Wissenschaftlern K. Letters und O. Scholl verdanken wir die Erkenntnis, dass der haupts??chliche Altersvorgang auf die Dehydrierung zur??ckzuf??hren, also gleichbedeutend mit der Austrocknung der K??rperzellen ist. Die Folge dieser Dehydrierung ist die Entquellung des Proteins, und infolgedessen kommt es zur Ausflockung und Gerinnung des k??rpereigenen Proteins. Den Wissenschaftlern Scholl und Gobor gelang es 1949, die beschriebenen Alterungsvorg??nge am menschlichen Gewebe mit 1 % l??slichem Silicium zu verz??gern und im Anschluss daran sogar umzukehren. Der Siliciumgehalt des Blutes stieg dabei ??ber mehrere Wochen auf bis zu 400 %.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium (Kiesels??ure) st??rkt die Haarstruktur und macht Haare deutlich dicker

Am Universit??ts-Klinikum Hamburg-Eppendorf konnte das Forscher-Team um Prof. Dr. med. Matthias Augustin an 55 Frauen mit d??nnem Haar nach sechs Monaten t??glicher Einnahme von Silicium-Gel (1 EL/Tag) eine Haarverdickung von durchschnittlich 13 % nachweisen. Diese Haarverdickung spiegelte sich in sichtbar mehr Volumen und strahlender Gesundheit wider. Des Weiteren wurde angef??hrt: ???Es kann davon ausgegangen werden, dass eine l??ngere Einnahme von Silicium-Gel zu einer weiteren St??rkung der Haare f??hrt.???
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

In einer Studie an 43 Patienten mit Zahnfleischentz??ndungen konnte der Siliciumforscher Kober mit einer Silicium-Zahnpaste nach vier bis f??nf Tagen Zahnfleischentz??ndungen stark mindern und Karies verringern.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
St??rkung des Immunsystems

Das Immunsystem ist ein biologisches Abwehrsystem in unserem Organismus, das die Aufgabe hat, Gewebesch??digungen aufgrund von Krankheitserregern zu verhindern.

Hierbei geht das Immunsystem gegen eingedrungene Mikroorganismen wie Bakterien, Viren und Pilzen vor, hat daneben aber auch die Aufgabe, fremde Substanzen zu entfernen, aber auch mutierte, k??rpereigene Zellen zu zerst??ren. Ist das Immunsystem angeschlagen, sind wir anf??llig f??r allerlei Erkrankungen. Umgekehrt k??nnen Erkrankungen nur mithilfe eines starken Immunsystems bew??ltigt werden.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium/Kieselerde macht eine Verj??ngung der Haut und des Bindegewebes m??glich

In Experimenten konnte nachgewiesen werden, dass Silicium nicht nur den Alterungsprozess verlangsamen kann, sondern sogar eine Verj??ngung erm??glicht! Man kann also selbst im fortgeschrittenen Alter mit der regelm????igen Einnahme von Kiesels??ure nicht nur die weitere Alterung stark verlangsamen, sondern seine Haut f??r jeden ersichtlich verj??ngen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Entz??ndungshemmende Wirkung

Man hat festgestellt, dass Menschen, die zu allerlei Entz??ndungen neigen, fast in allen F??llen unter Siliciummangel leiden. Eine innere sowie ??u??ere Anwendung von Silicium (aufgenommen ??ber den Magen oder aufgetragen in Form von Gel) hilft, solche Entz??ndungen zu heilen oder ihnen vorzubeugen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Desinfizierende Wirkung

Dem Silicium wird dar??ber hinaus eine leicht desinfizierende Wirkung zugesprochen, weswegen es bei Hauterkrankungen und Pilzen, auch ??u??erlich angewandt, Erfolge aufzeigt. Aus diesen allgemeinen, sehr breit gef??cherten Wirkungen, ergeben sich die spezifischen Wirkungen bei folgenden k??rperlichen Missst??nden und Erkrankungen:
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium f??r die Sch??nheit

Die regelm????ige orale Einnahme von Silicium-Pr??paraten wirkt sich st??rkend auf unsere K??rperzellen aus. Die Wirkung erfolgt stets von innen nach au??en, weswegen die optischen ??nderungen erst allm??hlich sichtbar werden. Nach mehreren Wochen regelm????iger Einnahme ist mit einer verbesserten Haarstruktur und einer glatteren Haut zu rechnen, und auch die Finger- und Fu??n??gel werden fester.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Diese Entwicklung setzt unmittelbar ein, wird aber erst nach Wochen regelm????iger Einnahme zeitversetzt sichtbar. Je nach Gewebeform und individueller Zellererneuerung dauert es ca. drei bis sechs Monate, bis diese Versch??nerungsmechanismen sichtbar werden. Die Haut erneuert sich alle 28 Tage, die Haare wachsen mit 1 cm pro Monat sehr langsam, und ein Nagel erneuert sich komplett nach rund f??nf bis sechs Monaten.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Aufnahmef??higkeit des K??rpers f??r Silicium

Die Voraussetzung f??r eine optimale Aufnahme von Silicium ist die kolloidale Form. Unter ???kolloidaler Form??? versteht man eine Gr????e der Siliciumteilchen, die lediglich eine Gr????enordnung h??her liegt als das Atom. Dies ist schon sehr klein. Die kleinsten kolloidalen Teilchen durchdringen leichter den Darm, um im Blut aufgenommen und zum Zielort transportiert zu werden. Zum Vergleich ist die Gr????e der Siliciumteilchen, die sich in der Kieselerde befinden, 1800 x gr????er als die Siliciumteilchen, die kolloidal im Silicium-Gel vorliegen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Darmst??rungen, Durchfall, Verstopfung, Bl??hungen und Bauchschmerzen

Silicium beziehungsweise die Kiesels??ure verf??gen ??ber die Eigenschaft, Entz??ndungssekrete sowie Giftstoffe und Schlacken im Darm zu binden. Die extreme Bindef??higkeit ist hier jener der Wasserbindung zu vergleichen, also um das 300-Fache des eigenen Gewichts. Ferner wirkt sich Silicium desinfizierend aus. Auf diese Weise wird den meisten Ursachen von Darmproblemen, Durchfall, Verstopfung, Bl??hungen und Bauchschmerzen auf nat??rliche Weise begegnet und bei dauerhafter Einnahme von Kiesels??ure vorgebeugt.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Kiesels??ure (Silicium) bei Entz??ndungen

Viele Naturheilmediziner sehen die Entz??ndung an sich als Ursprung einer jeden Erkrankung an; umso relevanter erscheint also die Rolle von Kiesels??ure, die bei allerlei Erkrankungen entz??ndungshemmend wirkt. Silicium kann innerlich (als Silicium-Gel, Heilerde usw.) aber auch ??u??erlich durch Auftragen angewandt werden und hat sich bei vielen entz??ndlichen Prozessen, von der Mandelentz??ndung bis hin zu etwaigen Hautentz??ndung bew??hrt. Zu erkl??ren ist die entz??ndungshemmende Wirkung durch die Bindung von Entz??ndungssekreten und die gleichzeitige Produktion von Lymphozyten und Phagozyten.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium auf das Bindegewebe

Zum Bindegewebe z??hlt man nicht nur die Haut, Sehnen, B??nder, Knorpel und Bandscheiben, sondern ebenfalls innere Bestandteile unserer Organe. Silicium ist in unterschiedlichen Mengen in allen menschlichen Gewebeformen vorzufinden und als Bestandteil unseres Bindegewebes sowohl in der fl??ssigen Grundsubstanz als auch in den einzelnen Eiwei??fasern des Bindegewebes. Es aktiviert den Zellstoffwechsel, festigt ihn und beugt dadurch Hautfalten, Cellulitis, Krampfadern, Arteriosklerose, Gelenkverschlei?? und Atembeschwerden vor.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Magen-Darm-Erkrankungen, Gastritis, Durchfall usw.

Bei Magen-Darm-Erkrankungen, Gastritis, Durchfall usw. findet der Einsatz von Silicium innerlich statt, zum Beispiel in Form von Silicium-Gel, Kieselerde oder Heilerde (enth??lt rund 50 % Silicium). Die Kiesels??ure breitet sich gro??fl??chig im Magen aus, puffert die ??bersch??ssige Magens??ure, bindet Giftstoffe, Krankheitserreger und Gase (Letzteres hilft gegen Bl??hungen!) und wirkt der Entz??ndung entgegen, indem sie die Entz??ndungserreger ausschaltet und Entz??ndungssekrete bindet. Durch die enorme Bindungsf??higkeit der im Gel enthaltenen Kiesels??ureteilchen werden die Erreger auf rein physikalische Art gebunden und verlieren ihre unangenehme Wirkung.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Arteriosklerose

Die Wirkung von Silicium bei Arteriosklerose (landl??ufig auch als ???Arterienverkalkung??? bezeichnet), gewinnt an Bedeutung, wenn man sich vergegenw??rtigt, dass rund 50 % aller Todesf??lle auf Herzkreislauferkrankungen zur??ckf??hrbar sind und diese in fast allen F??llen der Arteriosklerose zuzuschreiben sind. Das Herz pumpt das Blut entsprechend dem Herzschlag sto??artig. Damit dieses aber flie??end und gleichm????ig zu den Zielorganen transportiert werden kann, sind unsere Blutgef????e in den jungen Jahren elastisch. Bereits in der Jugendzeit aber ver??ndert sich die Struktur unserer Blutgef????e dadurch, dass sich Kalk und Cholesterin an den Innenw??nden der Arterien anheftet und die zuvor elastischen Blutgef????e nach und nach starr und br??chig machen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium gegen Bluthochdruck (Hypertonie)

Wie wir bereits gelesen haben, pumpt das Herz das Blut sto??artig durch unsere Blutgef????e. Um aber flie??end unsere Organe zu erreichen, ist es darauf angewiesen, dass unsere Blutgef????e das sto??artige Pumpen kompensieren, und dies ist nur m??glich, wenn die Blutgef????e elastisch sind. Im Laufe unseres Lebens lagert sich leider Kalk und Cholesterin darin ab, dies macht die Blutgef????e starr und br??chig. Da die Blutgef????e nun nicht mehr elastisch nachgeben k??nnen, muss der Blutdruck erh??ht werden, damit das Blut weiterhin zum Zielort transportiert werden kann.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Kiesels??ure (Silicium) gegen Sodbrennen

Die Kiesels??ure wirkt sich auf unseren S??ure-Basen-Haushalt basisch aus, puffert die ??bersch??ssige Magens??ure und breitet quasi einen Schutzmantel ??ber den Magen, indem sie sich gro??fl??chig ??ber die gesamte Magenoberfl??che legt.

Anwendung: 1???3 Essl??ffel Silicium-Gel am Tag
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium gegen Sehnenscheidenentz??ndung

Bei Sehnenscheidenentz??ndung wird eine sowohl ??u??erliche als auch innerliche Anwendung empfohlen. Silicium wirkt antientz??ndlich von innen wie von au??en und beschleunigt so die Heilungsprozesse.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium gegen Allergien

Da Allergene h??ufig ??ber die Haut und Schleimh??ute aufgenommen werden, kann die Festigkeit und Elastizit??t der Haut, die mit der Silicium-Einnahme einhergeht, diesen erfolgreich trotzen. Allergien entstehen aber h??ufig auch aufgrund einer gest??rten Darmflora, die Silicium regenerieren kann. Auch in diesem Fall sollte Silicium sowohl ??u??erlich als auch innerlich angewandt werden.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung bei Arthrose und Arthritis

Silicium wirkt entz??ndungshemmend auf das Gelenk ein; es verst??rkt die F??higkeit des hyalinen Knorpels, Wasser zu binden, und erh??ht dessen Elastizit??t.

Das Bindegewebe wird gest??rkt, der Knorpel kann sich sogar teilweise regenerieren, denn die Chondrozyten (Zellen in der Gelenkkapsel), die lebenslang stets den abgebauten Knorpel im Gelenk regenerieren, erh??hen im Beisein von Silicium ihre Aktivit??t um 243 %! Hieraus resultieren sehr bald ein deutlicher Schmerznachlass und eine erh??hte Beweglichkeit.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Zahnfleischentz??ndungen

Zahnfleischentz??ndungen werden durch Zahnstein, Verunreinigungen von Prothesen sowie schlecht sitzende F??llungen und Kronen verursacht. Mundsp??lungen mit Silicium-Gel k??nnen Abhilfe schaffen und die Entz??ndung hemmen, die Schwellung mindern und eventuell Zahnfleischbluten stillen. Sehr empfehlenswert sind Zahnpasten, die Silicium enthalten.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung gegen Osteoporose und Knochenschwund

Bekanntlich gehen die Osteoporose beziehungsweise der Knochenabbau mit einem Calciumabbau im Knochen einher. Eine zus??tzliche Calciumzufuhr ist also angezeigt. Silicium verf??gt ??ber die n??tzliche Eigenschaft, als sogenannter ???Calcium-Schlepper??? Calcium effizienter im Knochengewebe einzulagern. Des Weiteren wird die Synthese der Knochenmatrix stimuliert, was die Knochenverdichtung weiterhin verbessert.

Anwendung: 3 x t??glich einen Teel??ffel Silicium.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium/Kiesels??ure bei Zahnschmelzproblemen und Karies

Bekanntlich bestehen Z??hne aus Calcium. Da Silicium die Einlagerung von Calcium unterst??tzt, kann eine regelm????ige innerliche Anwendung der Karies und dem Zahnschmelzabbau entgegenwirken.

Anwendung: 3 Essl??ffel Silicium am Tag einnehmen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Krebs

Die Anregung zur Produktion von Phagozyten und zum Aufbau von Lymphozyten macht Silicium auch im Kampf gegen Krebs zu einem wertvollen Mittel. Silicium repariert das Zellprotein, indem es die Synthese normaler Proteink??rper wieder erm??glicht, und es hat die Bef??higung, die Aufl??sung von Zellw??nden, die von Karzinogenen verursacht wird, wieder zu normalisieren. Silicium verf??gt also ??ber die F??higkeit, ein besch??digtes oder denaturiertes Protein durch strukturelle Wiedereingliederung zu regenerieren.[...]
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium bei Atemwegsproblemen (Bronchialproblemen)

Die Bronchen und die Lungenl??ppchen sind eingebettet in ein elastisches Bindegewebe. Dieses befindet sich auch unter dem Lungenfell und enth??lt von Natur aus in jungen Jahren und bei Gesunden viel Silicium. Im zunehmenden Alter nimmt der Anteil des Siliciums ab. Diesem kann man mit Siliciumgaben von au??en begegnen.

Anwendung: 1 Essl??ffel Silicium-Gel t??glich.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium auf die Haare

Silicium gilt als einer der wichtigsten, wenn nicht DER wichtigste N??hrstoff f??r die Haare. In Studien konnte nachgewiesen werden, dass die Einnahme von Silicium-Gel bereits nach 24 Wochen bei 70 % der Probanden die Haarstruktur deutlich verbesserte. Das Haar war kr??ftiger, hatte mehr Glanz und weniger Spliss.1105 Eine sechsmonatige Einnahme von 1 Essl??ffel Silicium-Gel t??glich hat in Studien im Durchschnitt ein bis zu 16 % dickeres Haar erzeugt (siehe dazu [...]
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Wirkung von Silicium gegen Haarausfall

Haarausfall muss lange nicht immer genetisch bedingt sein. Sehr h??ufig verlieren die Haarwurzeln an Spannkraft und lockern sich. Das Silicium kann die Spannkraft der Haarwurzel st??rken und dem Haarausfall entgegenwirken.

Anwendung: T??glich 3 Teel??ffel Gr??ne Erde (Heilerde) oder Silicium-Erde.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium bremst Alterung und verj??ngt!

Die Alterung vollzieht sich von innen nach au??en, was so viel bedeutet, dass allen Merkmalen, die f??r uns sichtbar in Form von entstehenden Hautfalten, grauem Haar, glanzlosen Augen, schlaffem Bindegewebe usw. entstehen, stets innerliche, degenerative Ver??nderungen vorausgegangen sind, die, abgesehen vom ??sthetischen Problem, ein viel schwerwiegenderes Problem mit sich bringen.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium festigt unser Bindegewebe und gl??ttet Hautfalten

Haut, Sehnen, B??nder, Knorpel, Bandscheiben bestehen weitgehend aus Eiwei??molek??len. Silicium regt die Zellteilung an, aktiviert den Zellstoffwechsel unseres Bindegewebes und festigt es. Wissenschaftliche Studien attestieren dem Silicium eine wichtige Bedeutung innerhalb des Bindegewebestoffwechsels. ??ber bestimmte Enzyme beg??nstigt es die Bildung der Bindegewebsfasern ???Kollagen??? und ???Elastin???. W??hrend Elastin f??r die Elastizit??t der Haut zust??ndig ist, macht das Kollagen die Haut fest. Silicium ist also f??r die Synthese der Kollagen- und Elastinfasern im Bindegewebe unverzichtbar; ein Mangel daran verringert die Elastizit??t und Festigkeit des Bindegewebes und f??hrt im Falle der Haut zu Falten.
`
    },
    {
        usefulInformationImageId: images_silicium,
        quelleId: "3",
        afflinksId: afflinks.silicium,
        text: `
Silicium verj??ngt die Haut ??ber mehrere Mechanismen:

- ??ber die Einwirkung auf die Biosynthese des Elastins und des Kollagens wird die Hautelastizit??t erh??ht; der Gewebeverh??rtung, die aus der Lipidperoxydation und der nicht enzymatischen Glykosilation resultiert, wird entgegengewirkt.
- Der Zellstoffwechsel wird stimuliert, wodurch sich die Hautzellen schneller erneuern k??nnen.
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
- st??rkt die Haarstruktur,
- verhindert ein ??berm????ig fettendes Haar,
- optimiert die Mikrozirkulation,
- beschleunigt das Haarwachstum und
- verhindert den Haarausfall.
`
    },
]
