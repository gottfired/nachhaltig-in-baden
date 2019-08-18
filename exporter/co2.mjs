import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { entry } from "./entry_template.mjs";

const data = [
    {
        title: "Regreen",
        description: `Regreen ist ein junges Startup, das die Kompensation der CO2
        Emissionen durch die Unterstützung hochwertiger Klimaschutzprojekte im In- und
        Ausland anbietet. (z. B. Schutz des Waldbestandes durch den Einsatz von effizienten
        Kochern in Ruanda, Wärmepumpe für das Österreichische Rote Kreuz in
        Niederösterreich, Biomasse Einzelanlage für den Zoo in Innsbruck)`,
        web: "https://www.regreen.at/",
        image: "https://www.regreen.at/images/regreen_logo_RGB_500px.png",
        address: `Adresse: Johann-Teufel-Gasse 74 - 80/10,<br>
        1230 Wien<br>
        Telefon: +43 6601242418<br>
        E-Mail: office@regreen.at<br>`
    },
    {
        title: "Regenwald der Österreicher",
        description: `Der Verein widmet sich der
        Erhaltung eines bedrohten Regenwaldgebietes in Costa Rica. Seit fast 30 Jahren ist
        sein Ziel der Freikauf von Grundstücken und die Wiederbewaldung.
        Auf bereits gekauften Flächen werden pro Hektar bis zu 800 Bäume aus 100 Arten
        gepflanzt.  Ein Baum entzieht der Erdatmosphäre 700 kg CO<sub>2</sub> und kostet 18 Euro. Sie
        können Ihren ökologischen Fussabdruck verringern und Ihren persönlichen CO 2 -Ausstoss 
        durch den symbolischen Kauf von Regenwaldbäumen kompensieren.`,
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
