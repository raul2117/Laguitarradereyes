var templates = [
    "root/externallib/text!root/plugins/laguitarradereyes/theme.css",
    "root/externallib/text!root/plugins/laguitarradereyes/login.html",
    "root/externallib/text!root/plugins/laguitarradereyes/program.html"
];

define(templates, function (theme, loginForm, program) {
    var plugin = {
        settings: {
            name: "laguitarradereyes2", // renombrado a laguitarradereyes2 para que no aparezaca en menu, original laguitarradereyes
            type: "general",
            menuURL: "#laguitarradereyes",
            icon: "plugins/events/icon.png",
            lang: {
                component: "core"
            }
        },

        routes: [
            ["laguitarradereyes", "show_program", "showProgram"]
        ],

        showProgram: function() {
            var tpl = {};
            var html = MM.tpl.render(program, tpl);
           // MM.panels.show('center', html, {title: MM.lang.s("laguitarradereyes")}); // comentada para que no aparezca en el menu
        }
    };

    // Inject allways our custom theme.
    $("#mobilecssurl").html(theme);

    // Replace the sign-up form with our custom template.
    $("#add-site_template").html(loginForm);



    // Inject allways our custom theme.
    MM.loadCachedRemoteCSS = function(e) {
        $("#mobilecssurl").html(theme);
    };

    // Do not display the manage accounts page.
    MM._displayManageAccounts = function() {
        MM._displayAddSite();
    };

    MM.registerPlugin(plugin);

});