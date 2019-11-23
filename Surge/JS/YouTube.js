/*
[Script]
http-request ^https://[\s\S]*\.googlevideo\.com/.*&(oad|ctier) script-path=https://Choler.github.io/Surge/Script/YouTube.js

[MITM]
hostname = *.googlevideo.com
*/

/**
 * @supported A9DEBB136F7C 8DE20E8149AC ED6FD249DAAC AXXXC005
 */

var data = {
  body: "{}",
  headers: {
    "Content-Type": "multipart/byteranges"
  }
};
$done({response: data});
