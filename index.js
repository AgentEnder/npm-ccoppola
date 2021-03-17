#!/usr/bin/env node
const {white, cyan, green,bold, blue} = require("colorette")

// Text + chalk definitions
var work = white(`${blue('Angular / Nx')}, Developer, Advocate`)
var twitter = cyan('https://twitter.com/enderagent')
var github = cyan('https://github.com/agentender')
var site = cyan('https://craigory.dev')
var npx = white('npx ccoppola')

var newline = '\n'
var heading = `${white('  Craigory Coppola /')} ${cyan('ccoppola')}`
var working = `${white(bold('     Work:'))}  ${work}`
var twittering = `${white(bold('  Twitter:'))}  ${twitter}`
var githubing = `${white(bold('   GitHub:'))}  ${github}`
var webing = `${white(bold('      Web:'))}  ${site}`
var carding = `${white(bold('     Card:'))}  ${npx}`

let output = heading + newline + newline + working  + newline + twittering + newline + githubing + newline + webing  + newline  + newline + carding


console.log(output)
