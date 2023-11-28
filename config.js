const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "5350876802"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '5350876802' 
global.devs = '5350876802';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVA2SDFUNWR2R1RVem1xWFNydC9STk9aOXpXKzNCYjUvcjBGU2VsL0tYZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2szV1IxZzBKRldYclpLY1VlMXVXSit5eXVSNk9xUXY2L0M3TEh5enMwdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFTC9odVQ3cW9xMjJDbDZ3bXIrY0FQOG1qYXVjbk9GelMwOEhBZzZOaEdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqMEVvWmNCK3B3dUNxendNQ1hGVmczSUE2U2hOTHU4ZjFremQ5TEhQdEZNPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFEdThYL3lSYzNUbnpxVW1oWDIvNnE5dEp6c05Hb25hKzFVSWpqNUVMM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitOb3c2NGVPSFptVFVFVnZSVjdidXIwN1hiZSt3YmtVQ3lUM1JXV2hpQTg9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyTlEwbitEb2VjK3Y2NE0vRVRac0YrK0NibVBKa3BTaWd3Z0NDNHZGNHNtM3h2aVFFeU01TEtuOTErZmVaOC9RdlA4UWhDeEdJdUVQWHN3MWNZcnhpQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE5MywiYWR2U2VjcmV0S2V5IjoiNXNUNXBRbytaMWRMOXF6RUR6Z3pEa1BXb0xTU0FuRmlFQ3BoNjIzYUdIWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiNU9wdUZ6WTFRVTZCZVJBZHVlZGEwUSIsInBob25lSWQiOiI1ZDhiOTA5MC0yNDYzLTQ3MmEtYjYyZS0wNmFjYWU3ZmQzNWQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2dNY3ZYUWt6dHU1S3hyZGtTeWRuVHZLUmtZPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIR1Q2eEtSZWhYUXFnMUNocGNPTVZnTjRvNkk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNQM2x4dnNFRU1tMm1hc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjVqS0lOci9lZmN3ZGV4QmN3cUI3Z2x6Z3FXekgyZFhZNTkvQmRZaVpRbXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjFiQ2ZQRXBGd3NYV3FwMEFvejkzQ3pPYnFqL0Q0cFdPY2FMWmNjSnNndkJyZVAyZkJHNGZHMDdpRlZvbHozUGZraS96Z0VZdDd5cEpQSGhEZFpQRkJRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJrY2MxWWgzUlZVWENxSzZYaCt1cVoyQ0FZeUw5YU5SYVExN0dJdi9VNzI1UDliUmhyalNGUXNEU0RFUmlaang5RGtlY0RDVXZ1MVVLYVI4bTl0eXhqdz09In0sIm1lIjp7ImlkIjoiNTM1MDg3NjgwMjoxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNhcmFoIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUzNTA4NzY4MDI6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlWXlpRGEvM24zTUhYc1FYTUtnZTRKYzRLbHN4OW5WMk9mZndYV0ltVUpzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAxMjA2ODU5fQ==",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'Sarah',
  packname:  process.env.PACK_NAME || 'Sarah',
   
  botname:   process.env.BOT_NAME === undefined ? "Sarah" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Sarah' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI IM ALIVE NOW' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
