Handlebars.registerPartial("footer", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "footer.hbs\n\nWhat the what?\n";
},"useData":true}));
Handlebars.registerPartial("header", Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "// This is the file header.hbs - checking to see if this actually comes through.\n\nvar navItems = {\n  \"navItem1\": {\n    \"url\": \"professionals\",\n    \"text\": \"Find Professionals\"\n  },\n  \"navitem2\": {\n    \"url\": \"../signin\",\n    \"text\": \"Sign In\"\n  }\n};\n\nvar headerTemplateScript = $(#header).html();\n";
},"useData":true}));