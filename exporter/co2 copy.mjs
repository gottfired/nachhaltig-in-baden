import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { entry } from "./entry_template.mjs";

const data = [
    {
        title: "Second Passion",
        description: `Bei Second Passion gibt es Kleidungsstücke von Größe 32 bis 48, Schuhe von Größe 35 bis 41, Taschen, Accessoires und vieles mehr! Die Stücke kommen von Privatpersonen (unter anderen Bloggern, Schauspielerinnen, Society-Ladies) und auch von Geschäftsauflösungen. Große Auswahl !! Neben dem Online-handel gibt es auch ein Geschäft!`,
        web: "https://www.secondpassion.com/",
        image: "https://nachhaltig-in-baden.com/bilder/secondPassion.jpg",
        address: `Adresse: Abt Karl Straße 12<br>
        3390 Melk <br>
        Telefon: +43 668 8191854<br>
        E-Mail: office@secondpassion.com`
    },
    {
        title: "Nähwerkstatt - Garten der Begegnung",
        description: `Gemeinsam etwas zu machen verbindet, von einander zu lernen noch mehr. So ist die Nähwerkstatt ein guter Treffpunkt für Österreicher und AsylwerberInnen. Geflüchtete Menschen, die bereits in ihrer Heimat als SchneiderInnen gearbeitet haben, freuen sich über Aufträge für Hemden, Kleider, Taschen u.v.m. gegen Spenden. Einheimische Nähbegeisterte sind jedoch genauso willkommen – sei es als HelferInnen bei Fertigung und/oder Design oder um eigene Projekte umzusetzen bzw. umsetzen zu lassen.`,
        web: "https://www.regenwald.at/home/",
        image: "bilder/Logo-RWdOe.jpg",
        address: `Adresse: Veilchenweg 6,<br>
        A-2301 Groß-Enzersdorf<br>
        Telefon: +43-(0)1-470 19 35<br>
        E-Mail: info@regenwald.at<br>`
    },
    {
        title: "Atomsfair",
        description: `Atomsfair gibt Tipps zum klimafreundlichen Reisen und lädt
        ein zum CO2 kompensieren, sollte man doch einmal geflogen sein. Unser Tipp: der Vergleich der
        CO2 Emissionen von der geflogene Strecke, von einem Jahr Autofahren und von dem
        klimaverträglichen Jahresbudgets eines Menschen.
        Außerdem bietet die Seite die Möglichkeit, über verschiedene Projekte (mit CDM-
        Gold Standard Gütesiegel) die Emissionen zu kompensieren.`,
        web: "https://www.atmosfair.de/de/",
        image:
            "https://www.atmosfair.de/wp-content/themes/inspirekt_child/images/atmosfair_logo_de.png",
        address: `Adresse: Zossener Straße 55-58,<br>
        10961 Berlin<br>
        Telefon: +49 (0) 30 120 84 80 – 0 <br>
        E-Mail: info@atmosfair.de<br>`
    },
    {
        title: "KlimAktiv",
        description: `KlimAktiv unterstützt Sie im Klimaschutz: Hier finden Sie
        einen CO 2 -Rechner für Privatpersonen und Unternehmen. Klimaschutz geht uns alle an. Aber wissen Sie, wo Sie
        stehen? ...und welche
        Maßnahmen zukünftig Ihren CO 2 -Fußabdruck entscheidend verbessern können? 
        Finden Sie heraus, in welchen Bereichen Sie bereits einen Beitrag zum
        Klimaschutz leisten und wo noch Ihre Potentiale heute und auch morgen
        verborgen sind.
        `,
        web: "http://www.klimaktiv.de/",
        image:
            "http://www.klimaktiv.de/media/images/01_logos/intern/klimaktiv/logo_klimaktiv.svg",
        address: `Adresse: Nauklerstr. 60,<br>72074 Tübingen<br>
        Telefon: +49 7071 5496 880 <br>
        E-Mail: info@klimaktiv.de<br>`
    }
];

export function generate() {
    // Get script dir
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    // Read head
    const head = fs.readFileSync(path.join(__dirname, "/head.html"), "utf8");

    // Read template to string
    const template = fs.readFileSync(
        path.join(__dirname, "/CO2Komp_template.html"),
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
        "CO2Komp.html",
        template.replace("{head}", head).replace("{content}", entries)
    );
}
