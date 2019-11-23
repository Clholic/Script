/*
PicsArt app unlocks pro

Surge4.0:
http-response https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

QX1.0.0
^https:\/\/api\.(picsart|meiease)\.c(n|om)\/users\/show\/me\.json url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/PicsArt.js

Surge & QX Mitm = api.picsart.c*, api.meiease.c*
*/

/**
 * @supported A9DEBB136F7C 8DE20E8149AC ED6FD249DAAC AXXXC005
 */

let obj = JSON.parse($response.body);
obj.subscription.granted = "true";
$done({body: JSON.stringify(obj)});
