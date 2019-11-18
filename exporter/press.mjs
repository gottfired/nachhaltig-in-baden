import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";


const entry = `
<div class="presse_link_outerst">
<a style="text-decoration: none; color: inherit;" href="{web}">
    <div class="presse_link_outer">
        <div class="presse_link_inner1">
            {title}
            <span class="details">
                {description}
            </span>
            <div class="background"></div>
        </div>
        <div class="presse_link_inner2">
            Mehr Infos →
        </div>
    </div>
</a>
</div>
`;

const data = [
    {
        title: "Neue Bezirksgruppe für das Klimavolksbegehren in Baden",
        description: `4.11.2019, Bezirksblätter`,
        web: "https://www.meinbezirk.at/baden/c-lokales/neue-bezirksgruppe-fuer-das-klimavolksbegehren-in-baden_a3733182?fbclid=IwAR0pYN1aOomh6-sKi-PWEXAr-xUz1gKq1bzweKlFIChbpqj6ekAaejw9Yj0"
    }, {
        title: "KLIMAHELDINNEN - DAS NACHHALTIGKEITS-MAGAZIN",
        description: `21.09.2019 - 25.09.2019, ProSieben Sat1 Puls4`,
        web: "presse/klimaheldinnen.html"
    }, {
        title: "ORF Sendung Essperimente 2.0 Fortsetzung",
        description: `02.09.2019 & 03.09.2019, ORF`,
        web: "presse/das-essperiment.html"
    }, {
        title: "ORF Sendung Essperimente 2.0",
        description: `1.7.2019, ORF`,
        web: "presse/essperimente.html"
    }, {
        title: "Klimawandel und was wir dagegen tun können",
        description: `Juli 2019, Pfarrblatt Leesdorf`,
        web: "presse/pfarrblatt-90.html"
    }, {
        title: "Nachhaltig in Baden aktiv",
        description: `22.05.2019, NÖN`,
        web: "presse/nachhaltig-in-baden-alktiv.html"
    }, {
        title: "Nachhaltiges Leben leicht gemacht",
        description: `Frühling 2019, Baden Passion`,
        web: "presse/nachhaltiges-leben-leicht-gemacht.html"
    }, {
        title: "Mit einem Klick zu mehr Nachhaltigkeit",
        description: `08.03.2019, Kurier`,
        web: "presse/mit-einem-klick-zu-mehr-nachhaltigkeit.html"
    }, {
        title: "Tipps für ein nachhaltiges Leben in Baden",
        description: `14.02.2019, Badener Zeitung`,
        web: "presse/tipps-fur-ein-nachhaltiges-leben-in-baden.html"
    }, {
        title: "Brauche ich wirklich Avocados?",
        description: `14.02.2019, Badener Zeitung`,
        web: "presse/brauche-ich-wirklich-avocados.html"
    }, {
        title: 'Mutter und Sohn in "Mission" Nachhaltigkeit',
        description: `13.02.2019, Bezirksblätter`,
        web: "presse/mutter-und-sohn-in-mission-nachhaltigkeit.html"
    }, {
        title: "Mutter & Sohn für Nachhaltigkeit",
        description: `13.02.2019, Bezirksblätter`,
        web: "presse/mutter-und-sohn-fuer-nachhaltigkeit.html"
    }
];

export function generate() {
    // Get script dir
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    // Read head
    const head = fs.readFileSync(path.join(__dirname, "/head.html"), "utf8");

    // Read template to string
    const template = fs.readFileSync(
        path.join(__dirname, "/press_template.html"),
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
        })
        .join("\n\n");

    // replace() in template and write result html file
    fs.writeFileSync(
        "presse.html",
        template.replace("{head}", head).replace("{content}", entries)
    );
}
