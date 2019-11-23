/*
VUE Vlog app unlocks pro

Surge4.0:
http-response https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/VUE.js

QX 1.0.0:
^https:\/\/api\.vuevideo\.net\/api\/v1\/(users\/.+\/profile|subtitle\/prepare) url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/VUE.js

Surge & QX Mitm = api.vuevideo.net
*/

/**
 * @supported A9DEBB136F7C 8DE20E8149AC ED6FD249DAAC AXXXC005
 */

body = $response.body.replace(/\"isPremium\":false/, "\"isPremium\":true").replace(/\"valid\":false/, "\"valid\":true")
$done({body});
