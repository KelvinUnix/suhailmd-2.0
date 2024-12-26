const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Tanzania/Dodoma";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255678925070";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_40_12_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDk4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjksXG4gICAgICAgIDY2LFxuICAgICAgICA4MSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjEyLFxuICAgICAgICAzNixcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxLFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTE3LFxuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTc0LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTMsXG4gICAgICAgIDk2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxODUsXG4gICAgICAgIDcwLFxuICAgICAgICA4MixcbiAgICAgICAgMjE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE4MCxcbiAgICAgICAgODMsXG4gICAgICAgIDc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI0LFxuICAgICAgICA1NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQxLFxuICAgICAgICAxNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM5LFxuICAgICAgICA0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3LFxuICAgICAgICA2M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg3LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDUwLFxuICAgICAgICA0NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjIwLFxuICAgICAgICA0NCxcbiAgICAgICAgODUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTczLFxuICAgICAgICAyNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgNCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIyeGMrdkxqdlJldTBSU3o2TzJXWnJNR3RLY0J2amxVMGFybld3Qnp4cCtrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCYlF2b3k4aVQtQ0ZBQk5qaEp6ek1BXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg4YzJhZjI5LTMxNWUtNDcwNy1hMzAwLWFkMjU2MWZhNzEzMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1OCxcbiAgICAgIDEwMCxcbiAgICAgIDI1MSxcbiAgICAgIDM3LFxuICAgICAgMCxcbiAgICAgIDIzMCxcbiAgICAgIDgzLFxuICAgICAgMTUsXG4gICAgICAxNzIsXG4gICAgICAxMzYsXG4gICAgICA5NCxcbiAgICAgIDc5LFxuICAgICAgMTM2LFxuICAgICAgMjI0LFxuICAgICAgMjEwLFxuICAgICAgMjE4LFxuICAgICAgMTg5LFxuICAgICAgMTQ5LFxuICAgICAgMjQ3LFxuICAgICAgMzNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgNDcsXG4gICAgICAyMDksXG4gICAgICA2OSxcbiAgICAgIDE3MSxcbiAgICAgIDE0MSxcbiAgICAgIDEwNyxcbiAgICAgIDIzNSxcbiAgICAgIDE1NCxcbiAgICAgIDM0LFxuICAgICAgNDgsXG4gICAgICAxNTgsXG4gICAgICAxLFxuICAgICAgMjIyLFxuICAgICAgMTgwLFxuICAgICAgMjQ4LFxuICAgICAgMTQ2LFxuICAgICAgMTEyLFxuICAgICAgMTE1LFxuICAgICAgMjIyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkE2VEVOREhDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTU2Nzg5MjUwNzA6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NDg2NTgxODYzMjIyMjoyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNML2p2cmdHRUp2aXRyc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjc0eWZvL0hBZ1BRUytRR3E4UEFyOG5XcllwUGFhTjN2bEd1N1hhZWZjREk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwialNhTk9pc0FHWUZSeFdHS3ZrdDNQZE5zYVRMUEZnMHMzY3BhWmFmenRDTXpzd1B4T05YZDRLNW92Tk9iWEI5c05KdGNjaUp5MysraE5RaWxDK0pnRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUWYzSC9EKy9oQUZEbElxdngvL1JSeTg2Z0pRdGFHVmdmb1dYL2lucTllYWo2enNkS0xlUExYYzhFL01tTWphbE5Rd2pPOVdlSG52YVdIYWtkcTZCZ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU1Njc4OTI1MDcwOjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzUyNDIwMTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKS2lcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpLaS5qc29uIjogIntcImtleURhdGFcIjpcImxVWkMwSkFYbTZJSy9uUDg3VVJsV045c3Q3Y0NYdFF0RGVHa3VTOHV2Vnc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcyOTA4MTc5MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNTI0MTkyNDQyMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "UNIX-XMD",
  ownername:process.env.OWNER_NAME|| "UNIX-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
