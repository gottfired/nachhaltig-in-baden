import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { entry } from "./entry_template.mjs";

const data = [
    {
        title: "Mundraub",
        description:
            "Früchte von öffentlich stehenden Bäumen und Sträuchern werden oft nicht abgeerntet und gehen so kaputt. Mit Hilfe der Mundraub-Landkarte wird dem entgegen gewirkt: Kennen Sie einen Obstbaum im öffentlichen Raum - tragen Sie ihn bitte in der Landkarte ein. So wird das Wissen über diese Schätze in der nächsten Umgebung geteilt und hoffentlich können sich mehr Menschen an den Früchten erfreuen und sie ernten",
        web: "http://mundraub.org/",
        image: "bilder/mundraub.svg"
    },
    {
        title: "Heckentag",
        description:
            "Am NÖ Heckentag bekommen Sie perfekt an unsere Standortbedingungen angepasste Sträucher und Bäume, die aus unserer Region stammen. Die Auswahl reicht von Schmetterlings-, Beeren- über Sichtschutzhecken bis zu Obstbäumchen. Online vorbestellen, im November können die Pflanzen dann gekauft und abgeholt werden. ",
        web: "https://www.heckentag.at/",
        image: "https://www.heckentag.at/logo_rgv.png",
        address: `Zeile 85, A-2020 Aspersdorf<br>
        Telefon: 02952 4344-830 (jeden Donnerstag von 9.00 bis 12.00 Uhr)<br>
        Email: office@heckentag.at<br>`
    },
    {
        title: "Gartenernte",
        description: `Diese Plattform bietet die Möglichkeit, Gemüse,Obst,
        Bäume, Bienenprodukte, Gemüsepflänzchen und andere Gartenprodukte (z. B. große Sirupauswahl) zum Verkauf
        anzubieten oder direkt private Anbieter in der Region zu finden und bei ihnen einzukaufen.`,
        web: "https://www.gartenernte.at/",
        image: "bilder/Gartenernte_Logo_300dpi_CMYK.jpg",
        address: `Telefon: +43 1 7896267<br>
        E-Mail: office@gartenernte.at<br>`
    },
    {
        title: "Gärtnern im Gutenbrunnerpark: Gemeinschaftsgarten",
        description: `Für Menschen, die
        keine eigenen Möglichkeiten fürs Gärtnern haben oder einfach
        noch mehr machen wollen, Neues kennenlernen oder sich auch nur sinnvoll im Freien
        betätigen wollen 
        In Hochbeeten, einer Kartoffelkiste und einfach am Boden wird unter fachkundiger Leitung
        Gemüse gepflanzt, der Verein engagiert sich besonders dabei, Schulklassen das Gärtnern zu
        ermöglichen, sowohl Einpflanzen als auch Ernten sind schöne Feste für die Kinder, bei denen
        es auch noch zusätzliche Stationen mit Wissenswertem über den Garten gibt, z. B.
        Nützlingshotel. In diesem öffentlichen Garten können schmackhaftes Gemüse, duftende
        Kräuter sowie Beerenobst frei geerntet werden. Jeder ist eingeladen zum Mitmachen, zum
        Ernten und zum Genießen. Unser Tipp: die Gärtnerinnen teilen ihr Wissen gerne – einfach
        fragen, da lernt sicher jeder was dabei!! Von April bis September
        `,
        web:
            "https://www.naturimgarten.at/unser-angebot/gemeinschaftsg%C3%A4rtnerinnen/garten/baden-gutenbrunnerpark.html",
        image:
            "https://www.naturimgarten.at/assets/images/4/garten03-b99f2a02.jpg",
        address: ` E-Mail: unsergarten@baden.at<br>`
    },
    {
        title: "Natur im Garten",
        description: `Diese niederösterreichische Gartenbewegung
        bietet viel Wissenswertes über das pestizidfreie Gärtnern ohne Kunstdünger und Torf auf
        dem eigenen Balkon, im eigenen Garten, aber auch im öffentlichen Grünbereich: Vorträge,
        Workshops, Webinare, genauso wie Broschüren, Informationsblätter und Feste, alles was der
        Hobbygärtner braucht. Unser Tipp: die Beratung am Gartentelefon ist erstklassig – egal
        welche Fragen man hat.`,
        web: "https://www.naturimgarten.at/",
        image:
            "https://www.naturimgarten.at/assets/images/b/nig-logo-ae9a1f56.png",
        address: ` Telefon: 02742/ 74333 <br>
        E-Mail: gartentelefon@naturimgarten.at<br>`
    },
    {
        title: "Regionalstandort Baden",
        description: `Experten von &quot;Natur im Garten&quot;
        beraten gerne bei jeglichen Fragen rund um Garten,
        biologisches Gärtnern, Schädlinge etc. Die Beratungen finden jeweils Freitag von 9-13h im Gärtnerhaus im
        Doblhoffpark statt, Voranmeldung ist unbedingt erforderlich!`,
        web: "https://www.naturimgarten.at/",
        image:
            "https://www.naturimgarten.at/assets/images/b/nig-logo-ae9a1f56.png",
        address: `Gärtnerhaus im Doblhoffpark<br>Adresse: Pelzgasse 1, <br>
        2500 Baden<br>
        Telefon: 02742/ 74333 <br>
        E-Mail: gartentelefon@naturimgarten.at<br>`
    },
    {
        title: "Chwala Kompost Erde Kies GmbH",
        description: `Firma Chwala fühlt sich dem
        natürlichen Kreislauf verpflichtet, es ist ihnen dabei wichtig, dass
        sich der natürliche Kreislauf schließt und aus Grün- und Grasschnitt eine Grundlage für neues
        Pflanzen-Wachstum entsteht Sie können Ihren Grün- und Grasschnitt dort abliefern, dieser wird
        umweltfreundlich und ohne chemische Zusätze zu hochwertigem Rohkompost weiterverarbeitet.
        Ebenso können Sie dort hochwertigen Kompost kaufen.`,
        web: "https://kompost-erde-kies.at/",
        image:
            "https://kompost-erde-kies.at/wp-content/uploads/2015/02/logo_single_mobile.jpg",
        address: `Adresse: Fasangasse 41, <br>
        2540 Bad Vöslau<br>
        Telefon: +43 (0)2252-79 09 26<br>
        E-Mail: office@kompost-erde-kies.at<br>`
    },
    {
        title: "Stockreiter",
        description: `In Niederösterreich gibt es 80 Kompostanlagen, die
        biogene Abfälle von Biotonnen
        und Grünschnittsammelplätzen weiterverarbeiten, Kompost eignet sich für jeden
        Garten, Balkon, Dachbegrünung etc.`,
        web: "http://www.stockreiter.co.at/",
        image:
            "http://www.stockreiter.co.at/images/komposthof_termine_350x235.jpg",
        address: `Adresse: Hohenluckengasse, <br>2551 Lindabrunn<br>
        Telefon: 02256/81269<br>
        E-Mail: kompost@stockreiter.co.at<br>`
    },
    {
        title: "Garten der Begegnung",
        description: `Der Garten der Begegnung ist ein öko-soziales Landwirtschaftsprojekt,
        in dem Interessierte, TraiskirchnerInnen, SchülerInnen und Asylsuchende gemeinsam
        Obst und Gemüse ökologisch anbauen und verarbeiten.
        Der Garten ist ein Ort, der für alle offen ist. Hier kann man einander kennenlernen, sich
        austauschen und an der frischen Luft einer sinnvollen und gesunden Tätigkeit nachgehen und dabei
        viel voneinander lernen.
        Öffnungszeiten Landwirtschaft: DI &amp; FR 14-18:00, Achtung: Winterpause
        Unser Tipp: Orientalisches Frühstück am Samstag ab 11h`,
        web: "https://www.gartenderbegegnung.com/",
        image:
            "https://static.wixstatic.com/media/7c62bd_22c77bc40e4c4a889514cfb7643f935e~mv2.png/v1/fill/w_612,h_120,al_c,q_80,usm_0.66_1.00_0.01/7c62bd_22c77bc40e4c4a889514cfb7643f935e~mv2.webp",
        address: `Adresse: Akademiestraße Ecke Einödgasse,<br>
        2514 Traiskirchen<br>
        Telefon:  0699 11176565<br>`
    },
    {
        title: "Biomasserecycling",
        description: `Dieser Partnerbetrieb von Natur im Garten
        verarbeiten biogene Abfälle verschiedener Art,
        hauptsächlich Strauchschnitt, Pferdemist, Laub/Mähgut und die Biotonne der Gemeinde.
        Ziel ist die Rückführung von Biomasseabfall in den Naturkreislauf durch optimale Kompostierung.
        Durch Bindung von CO² im Humus tragen wir zum Klimaschutz bei.`,
        web: "https://www.biomasserecycling.at/",
        image:
            "https://image.jimcdn.com/app/cms/image/transf/dimension=102x10000:format=png/path/s39e3d42f4b715fde/image/i6d932edae4f9b5c3/version/1464646883/image.png",
        address: `Adresse: Hauptstraße 29,<br>
        2482 Münchendorf<br>
        Telefon: 02259 2323<br>
        E-Mail: info@biomasserecycling.at<br>`
    },
    {
        title: "Karl Kuchner",
        description: `>Der Familienbetrieb Karl Kuchner ist Hersteller und
        Verarbeiter für Kompost,
        Erde und Landwirtschaftprodukte. Die Firma liefert alles, was Sie für den
        Gartenbau benötigen: Kompost in verschiedenen Siebgrößen,
        Kompostmischerde, Spezialerde mit Quarzsand, Hochbeeterde,
        Schotterrasenerde und Kompost - Schredderprodukte. Nicht nur die Lieferung der
        Kompostprodukte steht im Vordergrund sondern auch die Abholung von
        Gartenabfällen, Baum und Strauchschnitt sowie Grünschitt ab 1m³. Nach
        Absprache können Sie Ihre Gartenabfälle auch anliefern.`,
        web: "http://kuchner-kompost.at/",
        image: "bilder/kuchner.jpg",
        address: `Adresse: Pöllau 4,<br>
        2560 Berndorf<br>
        Telefon: 02672 854 23<br>
        E-Mail: karl.kuchner@aon.at<br>`
    },
    {
        title: "Natürlich Kopp",
        description: `Firma Kopp veredelt beste biogene Rohstoffe wie
        Grünschnitt,
        verschiedene  Miste, Urgesteinsmehl, Erde, Tone und Biotonne zu nach Waldboden
        duftenden Kompost. Dieses braune Gold wird in weiterer Folge mit verschiedenen
        Sanden, Ton, Pflanzfasern nach standardisierten Rezepten zu Spezialerden
        gemischt. (Kompost, Blumenerde, Anzuchterde, Hochbeeterde etc. )Die
        Herstellung  von qualitativ hochwertigem, gut pflanzenverträglichen
        Kompost  wird mit viel Erfahrung, Fingerspitzengefühl und Sorgfalt betrieben.
        Entgeltliche Grünschnittüberbahme von Montag bis Samstag zu den Öffnungszeiten.`,
        web: "http://natuerlichkopp.at/",
        image: "http://natuerlichkopp.at/images/home/LOGO 2.png",
        address: `Adresse: Trumauerstr. 100,<br>
        2514 Traiskirchen<br>
        Telefon: 0699/ 184 951 52<br>
        E-Mail: office@natuerlichkopp.at<br>`
    },
    {
        title: "Gartenbauverein Baden",
        description: `Gegründet im Jahr 1864 um damalige brennende
        Themen wie das Aufkommen der
        Reblaus zu diskutieren, möchte der Gartenbauverein weiterhin viele Gartenfreunde
        erreichen und Menschen für das Gärtnern begeistern. Die Programmschwerpunkte
        für 2019 sind Vorträge zum Thema Klimawandel und ökologische Gartenpflege,
        Workshops für Kinder sowie Gartenausflüge. Das gesamte Programm finden Sie auf
        der Facebook Seite des Vereins, sowie in analoger Form im Bildungsstandort von „Natur im Garten&quot; in der
        Pelzgasse`,
        web: "https://www.facebook.com/gartenbauvereinbaden1864",
        image: "bilder/gartenbauverein.jpg",
        address: `Gärtnerhaus im Doblhoffpark<br>
        Adresse: Pelzgasse 1, <br>2500 Baden<br>
        Telefon: 0677 61343242<br>
        E-Mail: gartenbauvereinbaden@gmx.at<br>`
    },
    {
        title: "Kräuterspaziergänge",
        description: `Andrea Hofmann von Joando lädt zu einem ca. 2
        stündigen
        Spaziergang in die nähere Umgebung von Baden ein, hier lernen Sie viel über
        unsere Wildkräuter und bekommen auch tolle Koch- bzw. Kosmetiktipps – sehr
        spannend! Termine finden Sie in unserem Kalender`,
        web: "https://www.joando.at/BLOG/?p=1383",
        image: "bilder/kraeuterspziergaenge.jpg",
        address: `Adresse: Bahngasse 2a/1,<br>
        2500 Baden<br>
        Telefon: 06769661707<br>
        E-Mail: andrea.hofmann@joando.at<br>`
    },
    {
        title: "Garten Österreich",
        description: `Christoph Zagler vergibt in Grossau für das heurige
        Jahr Selbsternteflächen – der perfekt Weg zum Do It Yourself Garten! Voraussetzung ist rein biologischer
        Anbau. Werden Sie Ihr eigener Gärtner und genießen Sie Ihr selbst angebautes und geerntetes Gemüse. Weiters
        sind gemeinsame Sessions und Austausch zum Thema Kochen und Haltbarmachen der geernteten Lebensmittel geplant,
        Ziel ist es, einen eigenen Vorrat anzulegen, um nicht Lebensmittel aus dem Supermarkt kaufen zu müssen – wie
        zu Großmutters Zeiten.`,
        web:
            "https://www.facebook.com/pg/Garten-%C3%96sterreich-211551728968676/about/",
        image: "bilder/gartenOesterreich.jpg",
        address: ` Telefon: 0664 88542199<br>
        E-Mail: chriscuda1974@gmail.com<br>`
    },
    {
        title: "Wildkräuterwerkstatt",
        description: `Die zwei Kräuterpädagoginnen Andrea Mozelt und
        Elisabeth Pölzl führen in Wampersdorf die Wildkräuterwerkstatt. Hier organisieren sie regelmäßig
        Wildkräuterspaziergänge, bei denen sie gerne ihr Wissen über unsere regionalen Wildkräuter und diverse Koch-
        und Anwendungsmöglichkeiten weitergeben (gemeinsames abschließendes Kochen und Essen inklusive). Außerdem gibt
        es spannende workshops zu Themen wie Hausapotheke oder Räuchern in den Rauhnächten.`,
        web: "https://www.facebook.com/Naturdetektive/",
        image: "bilder/wildkraeuterwerkstatt.jpg",
        address: `Adresse: Gartenstr. 10,<br>
        2485 Wampersdorf<br>
        Telefon: 0676/3802069,<br>
        0699/17745366<br>
        E-Mail: w.a.mozelt@gmx.at,<br>
        epoelzl@gmx.net<br>`
    },
    {
        title: "Wurmkiste",
        description: `Unter dem Sitzbankerl von www.wurmkiste.at verstecken sich
        Hausbewohner, die still und unauffällig Küchenabfall verwerten: Mikroorganismen und Regenwürmer, die binnen
        weniger Monate aus Apfel, Kaffeesud & Co wertvollen Humus zum Düngen von Balkonkisterl oder Gemüsebeet
        zaubern. Kein Vorwissen oder grüner Daumen nötig, man lernt durch Anwendung, Beobachtung und Ausprobieren.
        (Keine Werbeschaltung, sondern Erfahrungswerte einer begeisterten Anfängerin!)Wurmkompostierung funktoniert
        geruchlos und braucht nur wenig Platz und Pflege. Erhältlich über den online-shop oder auf verschiedenen
        Messen.`,
        web: "https://wurmkiste.at/",
        image: "bilder/wurmkiste.png",
        address: `Telefon: 0043 7766 42200<br>
        E-Mail: office@wurmkiste.at<br>`
    }
];

export function generate() {
    // Get script dir
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    // Read head
    const head = fs.readFileSync(path.join(__dirname, "/head.html"), "utf8");

    // Read template to string
    const template = fs.readFileSync(
        path.join(__dirname, "/gardening_template.html"),
        "utf8"
    );

    // Convert data array to html sections using entry template
    // then .join() to a single content string
    const entries = data
        .map(element => {
            return entry
                .replace("{title}", element.title)
                .replace("{description}", element.description)
                .replace(/{web}/g, element.web)
                .replace("{image}", element.image)
                .replace("{address}", element.address || "");
        })
        .join("\n\n");

    // replace() in template and write result html file
    fs.writeFileSync(
        "gardening.html",
        template.replace("{head}", head).replace("{content}", entries)
    );
}
