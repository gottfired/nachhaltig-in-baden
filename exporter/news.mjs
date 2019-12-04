import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";


const entry = `
<h1 style="font-size: 26px; margin-left: 20px;">{title}</h1>
<div class="news_content_container">
  <a target="_blank" rel="noopener noreferrer" href="{web}"><img
      style="width: 200px; flex:1; padding-top: 10px; margin-left: 20px;" class="item"
      src="{image}"></a>

  <div class="item" id="news_pre_text" style="flex: 3; ">

    <p>{description}</p>
    <button onclick="location.href='{web}'" class="btn" id="btn1"
      style="padding: 10px 12px;">weiterlesen</button>
  </div>

</div>
<hr class="subborder">

<div style="color: #043926; display: flex; height: 40px; margin-bottom: 20px;">
  <i id="news_symbol" style="padding-top: 22px;" class="fa fa-user"></i>
  <p style="margin-left: 10px; margin-right: 10px;">{author}</p><br>

  <i id="news_symbol" style="padding-top: 22px;" class="fas fa-calendar-day"></i>
  <p style="margin-left: 10px;">{date}</p>
</div>

<hr class="border">
`;

const data = [
    {
        title: "Klimavolksbegehren",
        description: `Am Wochenmarkt in Baden läuteten am 15. November um 5 vor 12 Uhr ein dutzend Wecker. Gleichzeitig verharrten dreidutzend AktivistInnen für eine Minute reglos, um auf die Klimakrise aufmerksam zu machen.
        Die Unterstützungserklärung kann in ganz Österreich unabhängig vom Hauptwohnsitz in jedem beliebigen Gemeindeamt, Magistrat oder Magistratischem Bezirksamt geleistet werden. Mit der Handysigantur oder der Bürgerkarte kann die Unterstützung auch bequem von zu Hause vom Sofa aus geleistet werden. Der Gemeindeamt am Hauptplatz in Baden hat jeden Wochentag von 8 bis 12.00 Uhr geöffnet (Unterstützungserklärungen Parterre re, Zi. 3) .`,
        web: "https://klimavolksbegehren.at/",
        image: "bilder/wecker_klimavolksbegehren.jpg",
        author: "Heidrun",
        date: "19.11.2019"
    }, {
        title: "Handarbeitstreff",
        description: `Unser erstes Handarbeitstreffen am 4. Oktober war ein großer Erfolg, 12 Frauen zwischen 14 und 86 Jahren
        trafen sich um
        gemeinsam aus Wollresten Kleidung für Kinder in Osteuropa zu stricken und zu häkeln und hatten sehr viel
        Freude dabei!
        Nächster Termin: Freitag, 8.11. 16-18h in der Pfarre Leesdorf. Wir haben noch genügend Wollreste :)
        Herzlich eingeladen sind alle, die gerne Handarbeiten oder es lernen wollen - wir teilen unser Wissen
        gerne.
        Egal ob ihr unser Projekt unterstützen wollt oder an einem eigenen Werkstück weitermachen und einfach
        die Gesellschaft genießen - wir freuen uns auf euch!!
        (Regelmäßige, weitere Termine siehe Kalender)`,
        web: "news/0006.html",
        image: "bilder/handarbeitstreff.jpg",
        author: "Heidrun",
        date: "06.10.2019"
    }, {
        title: "DIY Workshop Kosmetik- und Reinigungsmittel selbst herstellen am 19. September",
        description: `Das war unser erster Workshop: Kosmetik und Reinigungsmittel selbst herstellen.
        Toll war's! Vielen Dank an die Expertinnen: Michaela Lehner, Gerti Jaksch-Fliegenschnee, Eva Leitner,
        Sigrid Hauser und Irina Hufnagl`,
        web: "news/0005.html",
        image: "bilder/diyWorkshop.jpg",
        author: "Heidrun",
        date: "19.09.2019"
    }, {
        title: "Schülerforum Nachhaltigkeit Baden",
        description: `Im Rahmen der 6. KLIMA & UMWELT FILMTAGE BADEN fand das erste „Schülerforum Nachhaltigkeit Baden“ statt. 83
        Jugendliche aus Baden, Mödling und Berndorf haben sich damit auseinander gesetzt, wie ein gutes Leben
        künftig mit weniger Ressourcenverbrauch möglich ist. Es wurden auch visionäre Ideen und Maßnahmen
        entwickelt. Zu den Ergebnissen zählen unter anderem: plastikfreier Einkauf, Repaircafe für Baden, autofreie
        Innenstädte, mehr Unterstützung durch die Regierung für die Anliegen der Jugend im Klimaschutz.`,
        web: "news/0004.html",
        image: "bilder/titel.JPG",
        author: "Gerfried Koch",
        date: "27.06.2019"
    }, {
        title: "Treeday Map",
        description: `Über Treeday findest du nachhaltige Unternehmen in Baden und darüber hinaus: Lebensmittelgeschäfte,
        Restaurants, Hotels, Mode uvm.`,
        web: "news/0003.html",
        image: "bilder/treeday baum_RGB.png",
        author: "Florian",
        date: "09.05.2019"
    }, {
        title: "Greta Thunberg",
        description: `Die junge schwedische Klimaschutzaktivistin ist unsere Heldin! Die 16-jährige Klimaaktivistin hat mit ihrem
        „Schulstreik für das Klima“, oder „Skolstrejk för klimatet“ auf schwedisch, am 20. August 2018 vor dem
        Schwedischen Reichstag in Stockholm begonnen und Schule geschwänzt um auf den Klimaschutz aufmerksam zu
        machen.`,
        web: "news/0002.html",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Greta_Thunberg%2C_2018_%28cropped%29.jpg/170px-Greta_Thunberg%2C_2018_%28cropped%29.jpg",
        author: "Heidrun",
        date: "10.02.2019"
    },
];

export function generate() {
    // Get script dir
    const __dirname = path.dirname(fileURLToPath(import.meta.url));

    // Read head
    const head = fs.readFileSync(path.join(__dirname, "/head.html"), "utf8");

    // Read template to string
    const template = fs.readFileSync(
        path.join(__dirname, "/news_template.html"),
        "utf8"
    );

    // Convert data array to html sections using entry template
    // then .join() to a single content string
    const entries = data
        .map(element => {
            return entry
                .replace("{title}", element.title)
                .replace("{description}", element.description)
                .replace("{image}", element.image)
                .replace("{author}", element.author)
                .replace("{date}", element.date)
                .replace(/{web}/g, element.web)
        })
        .join("\n\n");

    // replace() in template and write result html file
    fs.writeFileSync(
        "news.html",
        template.replace("{head}", head).replace("{content}", entries)
    );
}
