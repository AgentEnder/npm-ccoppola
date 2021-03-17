#!/usr/bin/env node
import { white, cyan, green, bold, blue } from "colorette";
import { githubUrl, twitterUrl, websiteUrl } from "./consts/urls";

export function main() {
    // Text + chalk definitions
    var work = white(`${blue("Angular / Nx")}, Developer, Advocate`);
    var twitter = cyan(twitterUrl);
    var github = cyan(githubUrl);
    var site = cyan(websiteUrl);
    var npx = white("npx ccoppola");
    
    var newline = "\n";
    var heading = `${white("  Craigory Coppola /")} ${cyan("ccoppola")}`;
    var working = `${white(bold("     Work:"))}  ${work}`;
    var twittering = `${white(bold("  Twitter:"))}  ${twitter}`;
    var githubing = `${white(bold("   GitHub:"))}  ${github}`;
    var webing = `${white(bold("      Web:"))}  ${site}`;
    var carding = `${white(bold("     Card:"))}  ${npx}`;
    
    let output = `${heading}
    
    ${working}
    ${twittering}
    ${githubing}
    ${webing}
    ${carding}
    `;
    
    console.log(output);
}


if (require.main === module) {
    main();
}
