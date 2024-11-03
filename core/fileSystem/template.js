//*
export function styleTemplate(name) {
    return `.${name} {
    position: relative;
    border-top: 1px solid #000;
    min-height: 100vh;
}`;
}
//*
export function sectionTemplate(name) {
    return `<section id="${name}" class="${name}">
    <div class="container">
        <h2 class="${name}__title title title--size-"></h2>
    </div>
</section>`;
}

//*
export function pageTemplate(name) {
    return `<!DOCTYPE html>
<html lang="ru-RU">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="format-detection" content="telephone=no">

    <title>${name}</title>

    @@include("../../template/base/favicon.html",{})

    <link rel="stylesheet" type="text/css" href="css/main.css">

</head>
<body data-scroll-offset>

    <!-- @@include("../../template/base/preloader.html",{}) -->
    @@include("../../template/menu-modal/menu-modal.html",{})

    <div class="wrapper">
      @@include("../../template/header/header.html",{})
      @@include("_include.g.html",{})
      @@include("../../template/footer/footer.html",{})
    </div>

    @@include("../../template/modal/modal-form/modal-form.html",{})

    <script src="js/libraries/libraries.js"></script>
    <script defer src="js/main/main.js"></script>
</body>
</html>`;
}
