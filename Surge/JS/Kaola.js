/*
[Script]
http-request ^https://sp\.kaola\.com/api/openad$ script-path=https://Choler.github.io/Surge/Script/Kaola.js

[MITM]
hostname = sp.kaola.com
*/

/**
 * @supported A9DEBB136F7C 8DE20E8149AC ED6FD249DAAC AXXXC005
 */

var data = {
  body: "{}",
  headers: {
    "Content-Type": "application/json"
  }
};
$done({response: data});
