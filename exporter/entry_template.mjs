export const entry = `
<div class="content_container">
    <a target="_blank" rel="noopener noreferrer" href="{web}"
        ><img
            style="width: 200px;"
            class="item"
            style="flex:1;"
            src="{image}"
    /></a>

    <p class="itemm" style="flex:4;">
        <b>{title}</b><br />
        {description}
    </p>
    <p class="item" style="flex:2;">
        <br />{address}
        <a target="_blank" rel="noopener noreferrer" href="{web}">zur Webseite</a>
    </p>
</div>
`;
