(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const zh=[{id:"Akkadian",value:13},{id:"Albanian",value:105},{id:"Arabic",value:340},{id:"Aramaic",value:137},{id:"Arawak",value:2},{id:"Armenian",value:2670},{id:"Austronesian",value:3},{id:"Avestan",value:12272},{id:"Basque",value:165},{id:"Breton",value:1540},{id:"Carib",value:5},{id:"Catalan",value:801},{id:"Celtic",value:1753},{id:"Cherokee",value:51},{id:"Chinese",value:1640},{id:"Church Slavonic",value:50717},{id:"Coptic",value:19},{id:"Cornish",value:143},{id:"Cree",value:29},{id:"Croatian",value:145},{id:"Czech",value:107},{id:"Danish",value:45348},{id:"Delaware",value:51},{id:"Dravidian",value:3},{id:"Dutch",value:186466},{id:"Egyptian",value:52},{id:"Estonian",value:2},{id:"Fang",value:6},{id:"Finnish",value:2085},{id:"Flemish",value:643},{id:"Fon",value:1},{id:"French",value:62239},{id:"Frisian",value:178294},{id:"Ga",value:4221},{id:"Gaelic",value:394},{id:"Georgian",value:26},{id:"German",value:254507},{id:"Germanic",value:240390},{id:"Gothic",value:101370},{id:"Greek",value:54606},{id:"Haitian",value:2},{id:"Hawaiian",value:8},{id:"Hebrew",value:1872},{id:"Hindi",value:19},{id:"Hittite",value:12466},{id:"Hungarian",value:19},{id:"Icelandic",value:1183},{id:"Indic",value:10},{id:"Indo-European",value:5613},{id:"Iranian",value:606},{id:"Irish",value:38850},{id:"Italian",value:10395},{id:"Japanese",value:416},{id:"Korean",value:71},{id:"Kru",value:17},{id:"Lao",value:46},{id:"Latin",value:114674},{id:"Latvian",value:119},{id:"Lithuanian",value:47864},{id:"Low German",value:5847},{id:"Macedonian",value:2},{id:"Malay",value:13},{id:"Malayalam",value:2},{id:"Manchu",value:4},{id:"Mandar",value:8},{id:"Manx",value:5},{id:"Maori",value:20},{id:"Mari",value:896},{id:"Middle Dutch",value:106562},{id:"Middle English",value:149372},{id:"Middle French",value:3},{id:"Middle High German",value:7396},{id:"Middle Irish",value:580},{id:"Modern Greek",value:128},{id:"Mongo",value:4},{id:"Mongolian",value:4},{id:"Nahuatl",value:52},{id:"Neapolitan",value:1},{id:"North American Indian",value:1372},{id:"Norwegian",value:1702},{id:"Occitan",value:6},{id:"Ojibwa",value:1146},{id:"Old Church Slavonic",value:50717},{id:"Old English",value:273619},{id:"Old French",value:42843},{id:"Old High German",value:161115},{id:"Old Irish",value:36733},{id:"Old Norse",value:157246},{id:"Old Persian",value:7915},{id:"Old Provençal",value:214},{id:"Ossetian",value:10},{id:"Pali",value:77},{id:"Persian",value:8344},{id:"Phoenician",value:4},{id:"Polish",value:802},{id:"Portuguese",value:1934},{id:"Provençal",value:652},{id:"Romance",value:692},{id:"Romanian",value:17},{id:"Russian",value:23873},{id:"Sanskrit",value:23184},{id:"Scots",value:659},{id:"Semitic",value:35},{id:"Slavic",value:3211},{id:"Slovenian",value:27},{id:"Somali",value:10},{id:"Spanish",value:10245},{id:"Swedish",value:30471},{id:"Syriac",value:1},{id:"Tai",value:2},{id:"Tamil",value:2},{id:"Telugu",value:2},{id:"Thai",value:1},{id:"Tibetan",value:6},{id:"Turkish",value:82},{id:"Twi",value:78},{id:"Vai",value:36},{id:"Walloon",value:13},{id:"Welsh",value:6132},{id:"Yiddish",value:647}],Vh=[{source:"Akkadian",target:"Arabic",value:9},{source:"Akkadian",target:"French",value:4},{source:"Akkadian",target:"Greek",value:4},{source:"Akkadian",target:"Hebrew",value:9},{source:"Akkadian",target:"Latin",value:4},{source:"Akkadian",target:"Old English",value:4},{source:"Akkadian",target:"Old French",value:4},{source:"Akkadian",target:"Semitic",value:4},{source:"Albanian",target:"Armenian",value:4},{source:"Albanian",target:"Carib",value:2},{source:"Albanian",target:"Celtic",value:4},{source:"Albanian",target:"Chinese",value:2},{source:"Albanian",target:"Church Slavonic",value:2},{source:"Albanian",target:"Croatian",value:3},{source:"Albanian",target:"Czech",value:50},{source:"Albanian",target:"Danish",value:1},{source:"Albanian",target:"Dutch",value:80},{source:"Albanian",target:"French",value:29},{source:"Albanian",target:"Frisian",value:50},{source:"Albanian",target:"Ga",value:3},{source:"Albanian",target:"Gaelic",value:3},{source:"Albanian",target:"German",value:96},{source:"Albanian",target:"Germanic",value:80},{source:"Albanian",target:"Gothic",value:80},{source:"Albanian",target:"Greek",value:84},{source:"Albanian",target:"Hebrew",value:14},{source:"Albanian",target:"Hungarian",value:3},{source:"Albanian",target:"Irish",value:64},{source:"Albanian",target:"Italian",value:7},{source:"Albanian",target:"Kru",value:6},{source:"Albanian",target:"Latin",value:47},{source:"Albanian",target:"Latvian",value:52},{source:"Albanian",target:"Lithuanian",value:57},{source:"Albanian",target:"Middle Dutch",value:12},{source:"Albanian",target:"Middle English",value:24},{source:"Albanian",target:"Old Church Slavonic",value:2},{source:"Albanian",target:"Old English",value:94},{source:"Albanian",target:"Old French",value:27},{source:"Albanian",target:"Old High German",value:85},{source:"Albanian",target:"Old Irish",value:64},{source:"Albanian",target:"Old Norse",value:65},{source:"Albanian",target:"Persian",value:2},{source:"Albanian",target:"Polish",value:5},{source:"Albanian",target:"Romance",value:2},{source:"Albanian",target:"Russian",value:58},{source:"Albanian",target:"Sanskrit",value:34},{source:"Albanian",target:"Slavic",value:2},{source:"Albanian",target:"Spanish",value:5},{source:"Albanian",target:"Swedish",value:4},{source:"Albanian",target:"Welsh",value:16},{source:"Arabic",target:"Catalan",value:15},{source:"Arabic",target:"Chinese",value:8},{source:"Arabic",target:"Church Slavonic",value:1},{source:"Arabic",target:"Danish",value:9},{source:"Arabic",target:"Dutch",value:9},{source:"Arabic",target:"Egyptian",value:1},{source:"Arabic",target:"French",value:321},{source:"Arabic",target:"Frisian",value:9},{source:"Arabic",target:"Ga",value:2},{source:"Arabic",target:"German",value:50},{source:"Arabic",target:"Germanic",value:15},{source:"Arabic",target:"Gothic",value:9},{source:"Arabic",target:"Greek",value:24},{source:"Arabic",target:"Hebrew",value:11},{source:"Arabic",target:"Hungarian",value:9},{source:"Arabic",target:"Indo-European",value:6},{source:"Arabic",target:"Irish",value:38},{source:"Arabic",target:"Italian",value:233},{source:"Arabic",target:"Latin",value:294},{source:"Arabic",target:"Malay",value:8},{source:"Arabic",target:"Mandar",value:8},{source:"Arabic",target:"Middle English",value:53},{source:"Arabic",target:"Occitan",value:6},{source:"Arabic",target:"Old Church Slavonic",value:1},{source:"Arabic",target:"Old English",value:38},{source:"Arabic",target:"Old French",value:276},{source:"Arabic",target:"Old High German",value:9},{source:"Arabic",target:"Old Irish",value:4},{source:"Arabic",target:"Old Norse",value:9},{source:"Arabic",target:"Persian",value:14},{source:"Arabic",target:"Polish",value:9},{source:"Arabic",target:"Portuguese",value:9},{source:"Arabic",target:"Provençal",value:15},{source:"Arabic",target:"Russian",value:45},{source:"Arabic",target:"Sanskrit",value:1},{source:"Arabic",target:"Semitic",value:5},{source:"Arabic",target:"Slavic",value:9},{source:"Arabic",target:"Spanish",value:275},{source:"Arabic",target:"Turkish",value:9},{source:"Arabic",target:"Welsh",value:29},{source:"Aramaic",target:"Croatian",value:6},{source:"Aramaic",target:"Dutch",value:6},{source:"Aramaic",target:"French",value:137},{source:"Aramaic",target:"German",value:13},{source:"Aramaic",target:"Greek",value:14},{source:"Aramaic",target:"Hebrew",value:130},{source:"Aramaic",target:"Hungarian",value:6},{source:"Aramaic",target:"Iranian",value:6},{source:"Aramaic",target:"Irish",value:6},{source:"Aramaic",target:"Italian",value:14},{source:"Aramaic",target:"Latin",value:136},{source:"Aramaic",target:"Lithuanian",value:6},{source:"Aramaic",target:"Old English",value:13},{source:"Aramaic",target:"Old French",value:130},{source:"Aramaic",target:"Old High German",value:7},{source:"Aramaic",target:"Old Persian",value:6},{source:"Aramaic",target:"Persian",value:6},{source:"Aramaic",target:"Polish",value:6},{source:"Aramaic",target:"Russian",value:6},{source:"Aramaic",target:"Semitic",value:8},{source:"Aramaic",target:"Spanish",value:13},{source:"Aramaic",target:"Swedish",value:6},{source:"Aramaic",target:"Turkish",value:6},{source:"Aramaic",target:"Welsh",value:6},{source:"Arawak",target:"Breton",value:2},{source:"Arawak",target:"Carib",value:2},{source:"Arawak",target:"French",value:2},{source:"Arawak",target:"German",value:2},{source:"Arawak",target:"Haitian",value:2},{source:"Arawak",target:"Portuguese",value:2},{source:"Arawak",target:"Spanish",value:2},{source:"Arawak",target:"Tai",value:2},{source:"Armenian",target:"Avestan",value:767},{source:"Armenian",target:"Breton",value:22},{source:"Armenian",target:"Church Slavonic",value:1159},{source:"Armenian",target:"Danish",value:1126},{source:"Armenian",target:"Dutch",value:2495},{source:"Armenian",target:"French",value:124},{source:"Armenian",target:"Frisian",value:2443},{source:"Armenian",target:"Georgian",value:1},{source:"Armenian",target:"German",value:2542},{source:"Armenian",target:"Germanic",value:2537},{source:"Armenian",target:"Gothic",value:2065},{source:"Armenian",target:"Greek",value:1752},{source:"Armenian",target:"Hebrew",value:1},{source:"Armenian",target:"Hittite",value:33},{source:"Armenian",target:"Indo-European",value:343},{source:"Armenian",target:"Irish",value:864},{source:"Armenian",target:"Italian",value:16},{source:"Armenian",target:"Latin",value:1725},{source:"Armenian",target:"Lithuanian",value:1711},{source:"Armenian",target:"Middle Dutch",value:1156},{source:"Armenian",target:"Middle English",value:2510},{source:"Armenian",target:"Middle Irish",value:16},{source:"Armenian",target:"Old Church Slavonic",value:1159},{source:"Armenian",target:"Old English",value:2644},{source:"Armenian",target:"Old French",value:123},{source:"Armenian",target:"Old High German",value:2490},{source:"Armenian",target:"Old Irish",value:811},{source:"Armenian",target:"Old Norse",value:2158},{source:"Armenian",target:"Persian",value:73},{source:"Armenian",target:"Russian",value:772},{source:"Armenian",target:"Sanskrit",value:2073},{source:"Armenian",target:"Semitic",value:1},{source:"Armenian",target:"Slavic",value:778},{source:"Armenian",target:"Spanish",value:16},{source:"Armenian",target:"Swedish",value:793},{source:"Armenian",target:"Welsh",value:864},{source:"Austronesian",target:"Malay",value:3},{source:"Avestan",target:"Breton",value:49},{source:"Avestan",target:"Church Slavonic",value:10188},{source:"Avestan",target:"Danish",value:831},{source:"Avestan",target:"Delaware",value:35},{source:"Avestan",target:"Dutch",value:11895},{source:"Avestan",target:"Flemish",value:14},{source:"Avestan",target:"French",value:3309},{source:"Avestan",target:"Frisian",value:5752},{source:"Avestan",target:"Ga",value:23},{source:"Avestan",target:"German",value:12077},{source:"Avestan",target:"Germanic",value:12036},{source:"Avestan",target:"Gothic",value:11809},{source:"Avestan",target:"Greek",value:8193},{source:"Avestan",target:"Hittite",value:2127},{source:"Avestan",target:"Indo-European",value:387},{source:"Avestan",target:"Iranian",value:271},{source:"Avestan",target:"Irish",value:3632},{source:"Avestan",target:"Italian",value:102},{source:"Avestan",target:"Latin",value:10879},{source:"Avestan",target:"Lithuanian",value:5731},{source:"Avestan",target:"Low German",value:46},{source:"Avestan",target:"Middle Dutch",value:5148},{source:"Avestan",target:"Middle English",value:6762},{source:"Avestan",target:"Middle Irish",value:60},{source:"Avestan",target:"Old Church Slavonic",value:10188},{source:"Avestan",target:"Old English",value:12066},{source:"Avestan",target:"Old French",value:196},{source:"Avestan",target:"Old High German",value:3951},{source:"Avestan",target:"Old Irish",value:3568},{source:"Avestan",target:"Old Norse",value:8866},{source:"Avestan",target:"Old Persian",value:2437},{source:"Avestan",target:"Persian",value:2595},{source:"Avestan",target:"Polish",value:27},{source:"Avestan",target:"Russian",value:1854},{source:"Avestan",target:"Sanskrit",value:7895},{source:"Avestan",target:"Spanish",value:102},{source:"Avestan",target:"Swedish",value:138},{source:"Avestan",target:"Welsh",value:948},{source:"Basque",target:"Breton",value:18},{source:"Basque",target:"Celtic",value:147},{source:"Basque",target:"Church Slavonic",value:147},{source:"Basque",target:"Dutch",value:147},{source:"Basque",target:"French",value:18},{source:"Basque",target:"Frisian",value:147},{source:"Basque",target:"Ga",value:18},{source:"Basque",target:"Gaelic",value:18},{source:"Basque",target:"German",value:165},{source:"Basque",target:"Germanic",value:165},{source:"Basque",target:"Gothic",value:147},{source:"Basque",target:"Icelandic",value:18},{source:"Basque",target:"Irish",value:18},{source:"Basque",target:"Latin",value:147},{source:"Basque",target:"Lithuanian",value:147},{source:"Basque",target:"Middle Dutch",value:147},{source:"Basque",target:"Middle English",value:147},{source:"Basque",target:"Old Church Slavonic",value:147},{source:"Basque",target:"Old English",value:165},{source:"Basque",target:"Old French",value:18},{source:"Basque",target:"Old High German",value:147},{source:"Basque",target:"Old Norse",value:165},{source:"Basque",target:"Polish",value:147},{source:"Basque",target:"Russian",value:147},{source:"Basque",target:"Slavic",value:147},{source:"Basque",target:"Welsh",value:18},{source:"Breton",target:"Carib",value:2},{source:"Breton",target:"Celtic",value:13},{source:"Breton",target:"Church Slavonic",value:59},{source:"Breton",target:"Cornish",value:3},{source:"Breton",target:"Danish",value:173},{source:"Breton",target:"Delaware",value:35},{source:"Breton",target:"Dutch",value:1376},{source:"Breton",target:"Flemish",value:38},{source:"Breton",target:"French",value:107},{source:"Breton",target:"Frisian",value:244},{source:"Breton",target:"Ga",value:38},{source:"Breton",target:"Gaelic",value:21},{source:"Breton",target:"German",value:1479},{source:"Breton",target:"Germanic",value:1464},{source:"Breton",target:"Gothic",value:231},{source:"Breton",target:"Greek",value:188},{source:"Breton",target:"Haitian",value:2},{source:"Breton",target:"Hebrew",value:24},{source:"Breton",target:"Hittite",value:128},{source:"Breton",target:"Icelandic",value:18},{source:"Breton",target:"Indo-European",value:16},{source:"Breton",target:"Irish",value:233},{source:"Breton",target:"Italian",value:15},{source:"Breton",target:"Latin",value:295},{source:"Breton",target:"Lithuanian",value:176},{source:"Breton",target:"Low German",value:5},{source:"Breton",target:"Manx",value:5},{source:"Breton",target:"Middle Dutch",value:1371},{source:"Breton",target:"Middle English",value:129},{source:"Breton",target:"Middle High German",value:106},{source:"Breton",target:"Middle Irish",value:16},{source:"Breton",target:"Old Church Slavonic",value:59},{source:"Breton",target:"Old English",value:1495},{source:"Breton",target:"Old French",value:72},{source:"Breton",target:"Old High German",value:1448},{source:"Breton",target:"Old Irish",value:174},{source:"Breton",target:"Old Norse",value:295},{source:"Breton",target:"Polish",value:14},{source:"Breton",target:"Portuguese",value:15},{source:"Breton",target:"Russian",value:3},{source:"Breton",target:"Sanskrit",value:147},{source:"Breton",target:"Spanish",value:20},{source:"Breton",target:"Swedish",value:67},{source:"Breton",target:"Tai",value:2},{source:"Breton",target:"Welsh",value:182},{source:"Carib",target:"Dutch",value:2},{source:"Carib",target:"French",value:2},{source:"Carib",target:"German",value:4},{source:"Carib",target:"Germanic",value:2},{source:"Carib",target:"Greek",value:3},{source:"Carib",target:"Haitian",value:2},{source:"Carib",target:"Latin",value:3},{source:"Carib",target:"Middle Dutch",value:2},{source:"Carib",target:"Middle English",value:1},{source:"Carib",target:"Old English",value:3},{source:"Carib",target:"Old High German",value:2},{source:"Carib",target:"Old Norse",value:2},{source:"Carib",target:"Portuguese",value:2},{source:"Carib",target:"Russian",value:2},{source:"Carib",target:"Slavic",value:2},{source:"Carib",target:"Spanish",value:2},{source:"Carib",target:"Tai",value:2},{source:"Catalan",target:"Church Slavonic",value:186},{source:"Catalan",target:"Danish",value:337},{source:"Catalan",target:"Dutch",value:389},{source:"Catalan",target:"French",value:801},{source:"Catalan",target:"Ga",value:190},{source:"Catalan",target:"German",value:602},{source:"Catalan",target:"Germanic",value:265},{source:"Catalan",target:"Gothic",value:21},{source:"Catalan",target:"Greek",value:521},{source:"Catalan",target:"Icelandic",value:186},{source:"Catalan",target:"Indo-European",value:192},{source:"Catalan",target:"Italian",value:801},{source:"Catalan",target:"Japanese",value:2},{source:"Catalan",target:"Latin",value:778},{source:"Catalan",target:"Lithuanian",value:186},{source:"Catalan",target:"Middle Dutch",value:335},{source:"Catalan",target:"Middle English",value:191},{source:"Catalan",target:"Norwegian",value:335},{source:"Catalan",target:"Occitan",value:6},{source:"Catalan",target:"Old Church Slavonic",value:186},{source:"Catalan",target:"Old English",value:521},{source:"Catalan",target:"Old French",value:748},{source:"Catalan",target:"Old High German",value:2},{source:"Catalan",target:"Old Norse",value:186},{source:"Catalan",target:"Persian",value:5},{source:"Catalan",target:"Portuguese",value:376},{source:"Catalan",target:"Provençal",value:67},{source:"Catalan",target:"Russian",value:186},{source:"Catalan",target:"Spanish",value:793},{source:"Catalan",target:"Swedish",value:23},{source:"Celtic",target:"Church Slavonic",value:279},{source:"Celtic",target:"Coptic",value:2},{source:"Celtic",target:"Cornish",value:143},{source:"Celtic",target:"Croatian",value:3},{source:"Celtic",target:"Danish",value:214},{source:"Celtic",target:"Dutch",value:1266},{source:"Celtic",target:"Egyptian",value:2},{source:"Celtic",target:"French",value:479},{source:"Celtic",target:"Frisian",value:1158},{source:"Celtic",target:"Ga",value:622},{source:"Celtic",target:"Gaelic",value:52},{source:"Celtic",target:"German",value:1424},{source:"Celtic",target:"Germanic",value:1392},{source:"Celtic",target:"Gothic",value:732},{source:"Celtic",target:"Greek",value:109},{source:"Celtic",target:"Hebrew",value:21},{source:"Celtic",target:"Hungarian",value:3},{source:"Celtic",target:"Indo-European",value:63},{source:"Celtic",target:"Irish",value:784},{source:"Celtic",target:"Italian",value:135},{source:"Celtic",target:"Latin",value:592},{source:"Celtic",target:"Latvian",value:64},{source:"Celtic",target:"Lithuanian",value:269},{source:"Celtic",target:"Low German",value:71},{source:"Celtic",target:"Manx",value:5},{source:"Celtic",target:"Middle Dutch",value:1210},{source:"Celtic",target:"Middle English",value:956},{source:"Celtic",target:"Middle High German",value:132},{source:"Celtic",target:"Middle Irish",value:119},{source:"Celtic",target:"Norwegian",value:4},{source:"Celtic",target:"Old Church Slavonic",value:279},{source:"Celtic",target:"Old English",value:1427},{source:"Celtic",target:"Old French",value:321},{source:"Celtic",target:"Old High German",value:1251},{source:"Celtic",target:"Old Irish",value:711},{source:"Celtic",target:"Old Norse",value:976},{source:"Celtic",target:"Old Provençal",value:4},{source:"Celtic",target:"Polish",value:269},{source:"Celtic",target:"Portuguese",value:18},{source:"Celtic",target:"Provençal",value:6},{source:"Celtic",target:"Romance",value:87},{source:"Celtic",target:"Russian",value:266},{source:"Celtic",target:"Sanskrit",value:87},{source:"Celtic",target:"Slavic",value:337},{source:"Celtic",target:"Spanish",value:82},{source:"Celtic",target:"Swedish",value:196},{source:"Celtic",target:"Welsh",value:437},{source:"Chinese",target:"Church Slavonic",value:58},{source:"Chinese",target:"Dutch",value:675},{source:"Chinese",target:"French",value:523},{source:"Chinese",target:"Frisian",value:972},{source:"Chinese",target:"German",value:1096},{source:"Chinese",target:"Germanic",value:1036},{source:"Chinese",target:"Gothic",value:972},{source:"Chinese",target:"Greek",value:1174},{source:"Chinese",target:"Indo-European",value:423},{source:"Chinese",target:"Italian",value:375},{source:"Chinese",target:"Japanese",value:6},{source:"Chinese",target:"Korean",value:52},{source:"Chinese",target:"Latin",value:1118},{source:"Chinese",target:"Lithuanian",value:377},{source:"Chinese",target:"Malay",value:8},{source:"Chinese",target:"Manchu",value:4},{source:"Chinese",target:"Mandar",value:8},{source:"Chinese",target:"Middle Dutch",value:663},{source:"Chinese",target:"Middle English",value:431},{source:"Chinese",target:"Mongo",value:4},{source:"Chinese",target:"Mongolian",value:4},{source:"Chinese",target:"Nahuatl",value:52},{source:"Chinese",target:"Old Church Slavonic",value:58},{source:"Chinese",target:"Old English",value:1497},{source:"Chinese",target:"Old French",value:515},{source:"Chinese",target:"Old High German",value:1032},{source:"Chinese",target:"Old Norse",value:982},{source:"Chinese",target:"Old Persian",value:657},{source:"Chinese",target:"Persian",value:665},{source:"Chinese",target:"Portuguese",value:8},{source:"Chinese",target:"Russian",value:62},{source:"Chinese",target:"Sanskrit",value:605},{source:"Chinese",target:"Slavic",value:4},{source:"Chinese",target:"Spanish",value:12},{source:"Chinese",target:"Turkish",value:8},{source:"Church Slavonic",target:"Cornish",value:119},{source:"Church Slavonic",target:"Croatian",value:107},{source:"Church Slavonic",target:"Czech",value:24},{source:"Church Slavonic",target:"Danish",value:11646},{source:"Church Slavonic",target:"Delaware",value:35},{source:"Church Slavonic",target:"Dutch",value:29872},{source:"Church Slavonic",target:"Egyptian",value:26},{source:"Church Slavonic",target:"Estonian",value:2},{source:"Church Slavonic",target:"Finnish",value:1190},{source:"Church Slavonic",target:"Flemish",value:14},{source:"Church Slavonic",target:"French",value:4849},{source:"Church Slavonic",target:"Frisian",value:23539},{source:"Church Slavonic",target:"Ga",value:40},{source:"Church Slavonic",target:"Gaelic",value:2},{source:"Church Slavonic",target:"German",value:50564},{source:"Church Slavonic",target:"Germanic",value:50418},{source:"Church Slavonic",target:"Gothic",value:19777},{source:"Church Slavonic",target:"Greek",value:33096},{source:"Church Slavonic",target:"Hebrew",value:87},{source:"Church Slavonic",target:"Hittite",value:11187},{source:"Church Slavonic",target:"Icelandic",value:337},{source:"Church Slavonic",target:"Indo-European",value:1189},{source:"Church Slavonic",target:"Iranian",value:7},{source:"Church Slavonic",target:"Irish",value:33071},{source:"Church Slavonic",target:"Italian",value:388},{source:"Church Slavonic",target:"Korean",value:52},{source:"Church Slavonic",target:"Kru",value:1},{source:"Church Slavonic",target:"Latin",value:41836},{source:"Church Slavonic",target:"Lithuanian",value:42595},{source:"Church Slavonic",target:"Low German",value:355},{source:"Church Slavonic",target:"Manchu",value:4},{source:"Church Slavonic",target:"Middle Dutch",value:11271},{source:"Church Slavonic",target:"Middle English",value:37262},{source:"Church Slavonic",target:"Middle High German",value:367},{source:"Church Slavonic",target:"Middle Irish",value:248},{source:"Church Slavonic",target:"Mongo",value:4},{source:"Church Slavonic",target:"Mongolian",value:4},{source:"Church Slavonic",target:"Nahuatl",value:52},{source:"Church Slavonic",target:"Norwegian",value:156},{source:"Church Slavonic",target:"Old Church Slavonic",value:50717},{source:"Church Slavonic",target:"Old English",value:50591},{source:"Church Slavonic",target:"Old French",value:477},{source:"Church Slavonic",target:"Old High German",value:41100},{source:"Church Slavonic",target:"Old Irish",value:32569},{source:"Church Slavonic",target:"Old Norse",value:21114},{source:"Church Slavonic",target:"Old Persian",value:6745},{source:"Church Slavonic",target:"Ossetian",value:10},{source:"Church Slavonic",target:"Persian",value:6908},{source:"Church Slavonic",target:"Polish",value:429},{source:"Church Slavonic",target:"Portuguese",value:186},{source:"Church Slavonic",target:"Russian",value:22634},{source:"Church Slavonic",target:"Sanskrit",value:14843},{source:"Church Slavonic",target:"Slavic",value:933},{source:"Church Slavonic",target:"Spanish",value:496},{source:"Church Slavonic",target:"Swedish",value:1774},{source:"Church Slavonic",target:"Welsh",value:2530},{source:"Coptic",target:"Dutch",value:16},{source:"Coptic",target:"Egyptian",value:3},{source:"Coptic",target:"French",value:19},{source:"Coptic",target:"German",value:16},{source:"Coptic",target:"Greek",value:18},{source:"Coptic",target:"Hebrew",value:16},{source:"Coptic",target:"Italian",value:16},{source:"Coptic",target:"Latin",value:19},{source:"Coptic",target:"Old English",value:17},{source:"Coptic",target:"Old French",value:18},{source:"Coptic",target:"Old Provençal",value:2},{source:"Coptic",target:"Phoenician",value:1},{source:"Coptic",target:"Polish",value:16},{source:"Coptic",target:"Provençal",value:2},{source:"Coptic",target:"Russian",value:16},{source:"Coptic",target:"Spanish",value:17},{source:"Coptic",target:"Swedish",value:16},{source:"Cornish",target:"Dutch",value:119},{source:"Cornish",target:"French",value:23},{source:"Cornish",target:"Frisian",value:119},{source:"Cornish",target:"Ga",value:3},{source:"Cornish",target:"German",value:119},{source:"Cornish",target:"Germanic",value:119},{source:"Cornish",target:"Gothic",value:119},{source:"Cornish",target:"Irish",value:138},{source:"Cornish",target:"Italian",value:18},{source:"Cornish",target:"Latin",value:19},{source:"Cornish",target:"Lithuanian",value:119},{source:"Cornish",target:"Middle Dutch",value:119},{source:"Cornish",target:"Middle English",value:122},{source:"Cornish",target:"Old Church Slavonic",value:119},{source:"Cornish",target:"Old English",value:137},{source:"Cornish",target:"Old French",value:5},{source:"Cornish",target:"Old High German",value:119},{source:"Cornish",target:"Old Irish",value:120},{source:"Cornish",target:"Old Norse",value:119},{source:"Cornish",target:"Polish",value:119},{source:"Cornish",target:"Russian",value:119},{source:"Cornish",target:"Slavic",value:119},{source:"Cornish",target:"Welsh",value:6},{source:"Cree",target:"French",value:18},{source:"Cree",target:"Greek",value:4},{source:"Cree",target:"Latin",value:4},{source:"Cree",target:"Middle English",value:15},{source:"Cree",target:"Old French",value:3},{source:"Cree",target:"Somali",value:10},{source:"Croatian",target:"Czech",value:1},{source:"Croatian",target:"Danish",value:62},{source:"Croatian",target:"Dutch",value:80},{source:"Croatian",target:"French",value:72},{source:"Croatian",target:"Frisian",value:45},{source:"Croatian",target:"Ga",value:3},{source:"Croatian",target:"Gaelic",value:3},{source:"Croatian",target:"German",value:117},{source:"Croatian",target:"Germanic",value:85},{source:"Croatian",target:"Gothic",value:4},{source:"Croatian",target:"Greek",value:120},{source:"Croatian",target:"Hungarian",value:9},{source:"Croatian",target:"Indo-European",value:36},{source:"Croatian",target:"Iranian",value:6},{source:"Croatian",target:"Irish",value:51},{source:"Croatian",target:"Italian",value:35},{source:"Croatian",target:"Latin",value:145},{source:"Croatian",target:"Latvian",value:1},{source:"Croatian",target:"Lithuanian",value:54},{source:"Croatian",target:"Middle Dutch",value:45},{source:"Croatian",target:"Middle English",value:36},{source:"Croatian",target:"Old Church Slavonic",value:107},{source:"Croatian",target:"Old English",value:120},{source:"Croatian",target:"Old French",value:30},{source:"Croatian",target:"Old High German",value:45},{source:"Croatian",target:"Old Norse",value:46},{source:"Croatian",target:"Old Persian",value:6},{source:"Croatian",target:"Persian",value:6},{source:"Croatian",target:"Polish",value:90},{source:"Croatian",target:"Russian",value:36},{source:"Croatian",target:"Sanskrit",value:62},{source:"Croatian",target:"Slavic",value:108},{source:"Croatian",target:"Spanish",value:71},{source:"Croatian",target:"Swedish",value:6},{source:"Croatian",target:"Turkish",value:6},{source:"Croatian",target:"Welsh",value:12},{source:"Czech",target:"Dutch",value:92},{source:"Czech",target:"French",value:2},{source:"Czech",target:"Frisian",value:74},{source:"Czech",target:"German",value:93},{source:"Czech",target:"Germanic",value:93},{source:"Czech",target:"Gothic",value:75},{source:"Czech",target:"Greek",value:84},{source:"Czech",target:"Indo-European",value:19},{source:"Czech",target:"Irish",value:63},{source:"Czech",target:"Latin",value:34},{source:"Czech",target:"Latvian",value:51},{source:"Czech",target:"Lithuanian",value:100},{source:"Czech",target:"Middle English",value:23},{source:"Czech",target:"Middle High German",value:18},{source:"Czech",target:"Old Church Slavonic",value:24},{source:"Czech",target:"Old English",value:93},{source:"Czech",target:"Old French",value:2},{source:"Czech",target:"Old High German",value:74},{source:"Czech",target:"Old Irish",value:50},{source:"Czech",target:"Old Norse",value:75},{source:"Czech",target:"Polish",value:37},{source:"Czech",target:"Russian",value:93},{source:"Czech",target:"Sanskrit",value:13},{source:"Czech",target:"Slavic",value:20},{source:"Czech",target:"Welsh",value:14},{source:"Danish",target:"Dutch",value:31213},{source:"Danish",target:"Finnish",value:793},{source:"Danish",target:"Flemish",value:4},{source:"Danish",target:"French",value:2774},{source:"Danish",target:"Frisian",value:30099},{source:"Danish",target:"Ga",value:371},{source:"Danish",target:"Gaelic",value:256},{source:"Danish",target:"German",value:44770},{source:"Danish",target:"Germanic",value:43037},{source:"Danish",target:"Gothic",value:19201},{source:"Danish",target:"Greek",value:5969},{source:"Danish",target:"Hebrew",value:566},{source:"Danish",target:"Hindi",value:16},{source:"Danish",target:"Hittite",value:9109},{source:"Danish",target:"Hungarian",value:9},{source:"Danish",target:"Icelandic",value:104},{source:"Danish",target:"Indo-European",value:2414},{source:"Danish",target:"Iranian",value:321},{source:"Danish",target:"Irish",value:7069},{source:"Danish",target:"Italian",value:1941},{source:"Danish",target:"Japanese",value:2},{source:"Danish",target:"Korean",value:19},{source:"Danish",target:"Latin",value:12618},{source:"Danish",target:"Latvian",value:64},{source:"Danish",target:"Lithuanian",value:12238},{source:"Danish",target:"Low German",value:1097},{source:"Danish",target:"Maori",value:20},{source:"Danish",target:"Middle Dutch",value:19159},{source:"Danish",target:"Middle English",value:18220},{source:"Danish",target:"Middle High German",value:950},{source:"Danish",target:"Middle Irish",value:25},{source:"Danish",target:"Modern Greek",value:51},{source:"Danish",target:"Norwegian",value:1066},{source:"Danish",target:"Old Church Slavonic",value:11646},{source:"Danish",target:"Old English",value:44170},{source:"Danish",target:"Old French",value:1185},{source:"Danish",target:"Old High German",value:27521},{source:"Danish",target:"Old Irish",value:6652},{source:"Danish",target:"Old Norse",value:37595},{source:"Danish",target:"Old Persian",value:4524},{source:"Danish",target:"Old Provençal",value:2},{source:"Danish",target:"Ossetian",value:10},{source:"Danish",target:"Persian",value:4559},{source:"Danish",target:"Polish",value:199},{source:"Danish",target:"Portuguese",value:108},{source:"Danish",target:"Provençal",value:2},{source:"Danish",target:"Romance",value:115},{source:"Danish",target:"Russian",value:1117},{source:"Danish",target:"Sanskrit",value:6760},{source:"Danish",target:"Scots",value:5},{source:"Danish",target:"Slavic",value:972},{source:"Danish",target:"Slovenian",value:27},{source:"Danish",target:"Spanish",value:1822},{source:"Danish",target:"Swedish",value:19565},{source:"Danish",target:"Welsh",value:1562},{source:"Danish",target:"Yiddish",value:273},{source:"Delaware",target:"Dutch",value:16},{source:"Delaware",target:"Frisian",value:51},{source:"Delaware",target:"German",value:51},{source:"Delaware",target:"Germanic",value:51},{source:"Delaware",target:"Gothic",value:35},{source:"Delaware",target:"Greek",value:35},{source:"Delaware",target:"Irish",value:35},{source:"Delaware",target:"Latin",value:35},{source:"Delaware",target:"Lithuanian",value:35},{source:"Delaware",target:"Low German",value:16},{source:"Delaware",target:"Old Church Slavonic",value:35},{source:"Delaware",target:"Old English",value:51},{source:"Delaware",target:"Old High German",value:51},{source:"Delaware",target:"Old Irish",value:35},{source:"Delaware",target:"Old Norse",value:35},{source:"Delaware",target:"Sanskrit",value:35},{source:"Dravidian",target:"French",value:1},{source:"Dravidian",target:"German",value:1},{source:"Dravidian",target:"Greek",value:1},{source:"Dravidian",target:"Hindi",value:2},{source:"Dravidian",target:"Latin",value:1},{source:"Dravidian",target:"Malay",value:2},{source:"Dravidian",target:"Malayalam",value:2},{source:"Dravidian",target:"Middle High German",value:1},{source:"Dravidian",target:"Old French",value:1},{source:"Dravidian",target:"Portuguese",value:2},{source:"Dravidian",target:"Sanskrit",value:1},{source:"Dravidian",target:"Tamil",value:2},{source:"Dravidian",target:"Telugu",value:2},{source:"Dutch",target:"Egyptian",value:27},{source:"Dutch",target:"Fang",value:6},{source:"Dutch",target:"Finnish",value:2083},{source:"Dutch",target:"Flemish",value:612},{source:"Dutch",target:"French",value:30432},{source:"Dutch",target:"Frisian",value:160514},{source:"Dutch",target:"Ga",value:2205},{source:"Dutch",target:"Gaelic",value:19},{source:"Dutch",target:"Georgian",value:25},{source:"Dutch",target:"German",value:185866},{source:"Dutch",target:"Germanic",value:178012},{source:"Dutch",target:"Gothic",value:83642},{source:"Dutch",target:"Greek",value:29082},{source:"Dutch",target:"Hebrew",value:989},{source:"Dutch",target:"Hittite",value:11655},{source:"Dutch",target:"Hungarian",value:10},{source:"Dutch",target:"Icelandic",value:893},{source:"Dutch",target:"Indo-European",value:3931},{source:"Dutch",target:"Iranian",value:598},{source:"Dutch",target:"Irish",value:18835},{source:"Dutch",target:"Italian",value:3438},{source:"Dutch",target:"Japanese",value:2},{source:"Dutch",target:"Korean",value:19},{source:"Dutch",target:"Kru",value:7},{source:"Dutch",target:"Lao",value:46},{source:"Dutch",target:"Latin",value:56266},{source:"Dutch",target:"Latvian",value:50},{source:"Dutch",target:"Lithuanian",value:27206},{source:"Dutch",target:"Low German",value:5256},{source:"Dutch",target:"Malay",value:8},{source:"Dutch",target:"Manchu",value:4},{source:"Dutch",target:"Mandar",value:8},{source:"Dutch",target:"Mari",value:837},{source:"Dutch",target:"Middle Dutch",value:106562},{source:"Dutch",target:"Middle English",value:104385},{source:"Dutch",target:"Middle High German",value:3765},{source:"Dutch",target:"Middle Irish",value:186},{source:"Dutch",target:"Mongo",value:4},{source:"Dutch",target:"Mongolian",value:4},{source:"Dutch",target:"North American Indian",value:1146},{source:"Dutch",target:"Norwegian",value:1010},{source:"Dutch",target:"Ojibwa",value:1146},{source:"Dutch",target:"Old Church Slavonic",value:29872},{source:"Dutch",target:"Old English",value:184301},{source:"Dutch",target:"Old French",value:15457},{source:"Dutch",target:"Old High German",value:125836},{source:"Dutch",target:"Old Irish",value:17135},{source:"Dutch",target:"Old Norse",value:123536},{source:"Dutch",target:"Old Persian",value:7786},{source:"Dutch",target:"Old Provençal",value:4},{source:"Dutch",target:"Ossetian",value:10},{source:"Dutch",target:"Persian",value:8115},{source:"Dutch",target:"Polish",value:713},{source:"Dutch",target:"Portuguese",value:525},{source:"Dutch",target:"Provençal",value:238},{source:"Dutch",target:"Romance",value:31},{source:"Dutch",target:"Russian",value:5183},{source:"Dutch",target:"Sanskrit",value:20112},{source:"Dutch",target:"Scots",value:646},{source:"Dutch",target:"Slavic",value:2490},{source:"Dutch",target:"Slovenian",value:27},{source:"Dutch",target:"Spanish",value:4048},{source:"Dutch",target:"Swedish",value:18049},{source:"Dutch",target:"Turkish",value:71},{source:"Dutch",target:"Twi",value:40},{source:"Dutch",target:"Walloon",value:11},{source:"Dutch",target:"Welsh",value:5374},{source:"Dutch",target:"Yiddish",value:138},{source:"Egyptian",target:"French",value:51},{source:"Egyptian",target:"Frisian",value:26},{source:"Egyptian",target:"Ga",value:1},{source:"Egyptian",target:"German",value:29},{source:"Egyptian",target:"Germanic",value:27},{source:"Egyptian",target:"Gothic",value:1},{source:"Egyptian",target:"Greek",value:45},{source:"Egyptian",target:"Hebrew",value:1},{source:"Egyptian",target:"Italian",value:10},{source:"Egyptian",target:"Latin",value:51},{source:"Egyptian",target:"Low German",value:1},{source:"Egyptian",target:"Middle Dutch",value:26},{source:"Egyptian",target:"Middle English",value:31},{source:"Egyptian",target:"Old Church Slavonic",value:26},{source:"Egyptian",target:"Old English",value:31},{source:"Egyptian",target:"Old French",value:23},{source:"Egyptian",target:"Old High German",value:27},{source:"Egyptian",target:"Old Provençal",value:2},{source:"Egyptian",target:"Phoenician",value:1},{source:"Egyptian",target:"Portuguese",value:10},{source:"Egyptian",target:"Provençal",value:3},{source:"Egyptian",target:"Semitic",value:1},{source:"Egyptian",target:"Slavic",value:26},{source:"Egyptian",target:"Spanish",value:37},{source:"Estonian",target:"Finnish",value:2},{source:"Estonian",target:"Frisian",value:2},{source:"Estonian",target:"German",value:2},{source:"Estonian",target:"Germanic",value:2},{source:"Estonian",target:"Gothic",value:2},{source:"Estonian",target:"Lithuanian",value:2},{source:"Estonian",target:"Old Church Slavonic",value:2},{source:"Estonian",target:"Old English",value:2},{source:"Estonian",target:"Old High German",value:2},{source:"Estonian",target:"Old Norse",value:2},{source:"Estonian",target:"Swedish",value:2},{source:"Fang",target:"Frisian",value:6},{source:"Fang",target:"German",value:6},{source:"Fang",target:"Germanic",value:6},{source:"Fang",target:"Gothic",value:6},{source:"Fang",target:"Latin",value:6},{source:"Fang",target:"Middle Dutch",value:6},{source:"Fang",target:"Middle English",value:6},{source:"Fang",target:"Old English",value:6},{source:"Fang",target:"Old Norse",value:6},{source:"Finnish",target:"French",value:445},{source:"Finnish",target:"Frisian",value:1717},{source:"Finnish",target:"Ga",value:326},{source:"Finnish",target:"German",value:2085},{source:"Finnish",target:"Germanic",value:2085},{source:"Finnish",target:"Gothic",value:1226},{source:"Finnish",target:"Greek",value:293},{source:"Finnish",target:"Indo-European",value:292},{source:"Finnish",target:"Iranian",value:287},{source:"Finnish",target:"Irish",value:824},{source:"Finnish",target:"Italian",value:1},{source:"Finnish",target:"Latin",value:305},{source:"Finnish",target:"Lithuanian",value:364},{source:"Finnish",target:"Low German",value:14},{source:"Finnish",target:"Middle Dutch",value:583},{source:"Finnish",target:"Middle English",value:1176},{source:"Finnish",target:"Middle High German",value:362},{source:"Finnish",target:"Old Church Slavonic",value:1190},{source:"Finnish",target:"Old English",value:2085},{source:"Finnish",target:"Old High German",value:1746},{source:"Finnish",target:"Old Irish",value:824},{source:"Finnish",target:"Old Norse",value:1099},{source:"Finnish",target:"Romance",value:1},{source:"Finnish",target:"Russian",value:362},{source:"Finnish",target:"Sanskrit",value:5},{source:"Finnish",target:"Slavic",value:4},{source:"Finnish",target:"Spanish",value:288},{source:"Finnish",target:"Swedish",value:1289},{source:"Finnish",target:"Welsh",value:829},{source:"Flemish",target:"French",value:100},{source:"Flemish",target:"Frisian",value:481},{source:"Flemish",target:"Ga",value:16},{source:"Flemish",target:"German",value:639},{source:"Flemish",target:"Germanic",value:540},{source:"Flemish",target:"Gothic",value:14},{source:"Flemish",target:"Greek",value:22},{source:"Flemish",target:"Hebrew",value:24},{source:"Flemish",target:"Indo-European",value:14},{source:"Flemish",target:"Irish",value:24},{source:"Flemish",target:"Italian",value:61},{source:"Flemish",target:"Latin",value:27},{source:"Flemish",target:"Low German",value:67},{source:"Flemish",target:"Middle Dutch",value:572},{source:"Flemish",target:"Middle English",value:506},{source:"Flemish",target:"Middle High German",value:33},{source:"Flemish",target:"Norwegian",value:4},{source:"Flemish",target:"Old Church Slavonic",value:14},{source:"Flemish",target:"Old English",value:525},{source:"Flemish",target:"Old French",value:13},{source:"Flemish",target:"Old High German",value:506},{source:"Flemish",target:"Old Norse",value:119},{source:"Flemish",target:"Polish",value:14},{source:"Flemish",target:"Sanskrit",value:47},{source:"Flemish",target:"Swedish",value:11},{source:"Flemish",target:"Twi",value:33},{source:"Flemish",target:"Walloon",value:11},{source:"Fon",target:"Middle English",value:1},{source:"French",target:"Frisian",value:23459},{source:"French",target:"Ga",value:1231},{source:"French",target:"Gaelic",value:45},{source:"French",target:"Georgian",value:1},{source:"French",target:"German",value:37366},{source:"French",target:"Germanic",value:34524},{source:"French",target:"Gothic",value:5703},{source:"French",target:"Greek",value:5626},{source:"French",target:"Haitian",value:2},{source:"French",target:"Hawaiian",value:8},{source:"French",target:"Hebrew",value:1066},{source:"French",target:"Hittite",value:85},{source:"French",target:"Hungarian",value:10},{source:"French",target:"Icelandic",value:925},{source:"French",target:"Indo-European",value:2043},{source:"French",target:"Iranian",value:294},{source:"French",target:"Irish",value:704},{source:"French",target:"Italian",value:9609},{source:"French",target:"Japanese",value:17},{source:"French",target:"Latin",value:46839},{source:"French",target:"Latvian",value:4},{source:"French",target:"Lithuanian",value:1520},{source:"French",target:"Low German",value:594},{source:"French",target:"Malay",value:8},{source:"French",target:"Manchu",value:4},{source:"French",target:"Mandar",value:8},{source:"French",target:"Mari",value:92},{source:"French",target:"Middle Dutch",value:13595},{source:"French",target:"Middle English",value:26113},{source:"French",target:"Middle French",value:3},{source:"French",target:"Middle High German",value:468},{source:"French",target:"Middle Irish",value:255},{source:"French",target:"Modern Greek",value:51},{source:"French",target:"Mongo",value:4},{source:"French",target:"Mongolian",value:4},{source:"French",target:"Neapolitan",value:1},{source:"French",target:"North American Indian",value:226},{source:"French",target:"Norwegian",value:514},{source:"French",target:"Occitan",value:6},{source:"French",target:"Old Church Slavonic",value:4849},{source:"French",target:"Old English",value:38896},{source:"French",target:"Old French",value:42843},{source:"French",target:"Old High German",value:14404},{source:"French",target:"Old Irish",value:415},{source:"French",target:"Old Norse",value:28184},{source:"French",target:"Old Persian",value:55},{source:"French",target:"Old Provençal",value:214},{source:"French",target:"Pali",value:77},{source:"French",target:"Persian",value:151},{source:"French",target:"Phoenician",value:3},{source:"French",target:"Polish",value:136},{source:"French",target:"Portuguese",value:1927},{source:"French",target:"Provençal",value:651},{source:"French",target:"Romance",value:607},{source:"French",target:"Romanian",value:17},{source:"French",target:"Russian",value:387},{source:"French",target:"Sanskrit",value:3891},{source:"French",target:"Scots",value:651},{source:"French",target:"Semitic",value:31},{source:"French",target:"Slavic",value:641},{source:"French",target:"Spanish",value:9697},{source:"French",target:"Swedish",value:2265},{source:"French",target:"Syriac",value:1},{source:"French",target:"Tai",value:2},{source:"French",target:"Tibetan",value:6},{source:"French",target:"Turkish",value:25},{source:"French",target:"Vai",value:36},{source:"French",target:"Walloon",value:13},{source:"French",target:"Welsh",value:473},{source:"Frisian",target:"Ga",value:2420},{source:"Frisian",target:"Gaelic",value:62},{source:"Frisian",target:"Georgian",value:25},{source:"Frisian",target:"German",value:177747},{source:"Frisian",target:"Germanic",value:174467},{source:"Frisian",target:"Gothic",value:85318},{source:"Frisian",target:"Greek",value:25211},{source:"Frisian",target:"Hebrew",value:579},{source:"Frisian",target:"Hittite",value:12316},{source:"Frisian",target:"Hungarian",value:9},{source:"Frisian",target:"Icelandic",value:776},{source:"Frisian",target:"Indo-European",value:4432},{source:"Frisian",target:"Iranian",value:592},{source:"Frisian",target:"Irish",value:19128},{source:"Frisian",target:"Italian",value:1714},{source:"Frisian",target:"Japanese",value:221},{source:"Frisian",target:"Korean",value:19},{source:"Frisian",target:"Kru",value:1},{source:"Frisian",target:"Lao",value:46},{source:"Frisian",target:"Latin",value:54646},{source:"Frisian",target:"Latvian",value:50},{source:"Frisian",target:"Lithuanian",value:24036},{source:"Frisian",target:"Low German",value:2647},{source:"Frisian",target:"Maori",value:20},{source:"Frisian",target:"Mari",value:825},{source:"Frisian",target:"Middle Dutch",value:91753},{source:"Frisian",target:"Middle English",value:99730},{source:"Frisian",target:"Middle High German",value:3194},{source:"Frisian",target:"Middle Irish",value:160},{source:"Frisian",target:"North American Indian",value:1146},{source:"Frisian",target:"Norwegian",value:414},{source:"Frisian",target:"Ojibwa",value:1146},{source:"Frisian",target:"Old Church Slavonic",value:23539},{source:"Frisian",target:"Old English",value:177946},{source:"Frisian",target:"Old French",value:13359},{source:"Frisian",target:"Old High German",value:122763},{source:"Frisian",target:"Old Irish",value:17472},{source:"Frisian",target:"Old Norse",value:125159},{source:"Frisian",target:"Old Persian",value:7767},{source:"Frisian",target:"Persian",value:7886},{source:"Frisian",target:"Polish",value:515},{source:"Frisian",target:"Portuguese",value:1},{source:"Frisian",target:"Romance",value:31},{source:"Frisian",target:"Romanian",value:17},{source:"Frisian",target:"Russian",value:4415},{source:"Frisian",target:"Sanskrit",value:18150},{source:"Frisian",target:"Scots",value:646},{source:"Frisian",target:"Slavic",value:2363},{source:"Frisian",target:"Slovenian",value:27},{source:"Frisian",target:"Spanish",value:2155},{source:"Frisian",target:"Swedish",value:14584},{source:"Frisian",target:"Welsh",value:4830},{source:"Frisian",target:"Yiddish",value:136},{source:"Ga",target:"Gaelic",value:394},{source:"Ga",target:"German",value:2982},{source:"Ga",target:"Germanic",value:2941},{source:"Ga",target:"Gothic",value:897},{source:"Ga",target:"Greek",value:576},{source:"Ga",target:"Hebrew",value:26},{source:"Ga",target:"Hindi",value:16},{source:"Ga",target:"Hungarian",value:3},{source:"Ga",target:"Icelandic",value:18},{source:"Ga",target:"Indo-European",value:23},{source:"Ga",target:"Irish",value:804},{source:"Ga",target:"Italian",value:415},{source:"Ga",target:"Japanese",value:223},{source:"Ga",target:"Latin",value:1834},{source:"Ga",target:"Lithuanian",value:41},{source:"Ga",target:"Low German",value:253},{source:"Ga",target:"Middle Dutch",value:1431},{source:"Ga",target:"Middle English",value:1661},{source:"Ga",target:"Middle High German",value:31},{source:"Ga",target:"Middle Irish",value:3},{source:"Ga",target:"Norwegian",value:87},{source:"Ga",target:"Old Church Slavonic",value:40},{source:"Ga",target:"Old English",value:3059},{source:"Ga",target:"Old French",value:1079},{source:"Ga",target:"Old High German",value:2191},{source:"Ga",target:"Old Irish",value:745},{source:"Ga",target:"Old Norse",value:2724},{source:"Ga",target:"Old Provençal",value:3},{source:"Ga",target:"Polish",value:3},{source:"Ga",target:"Portuguese",value:190},{source:"Ga",target:"Provençal",value:5},{source:"Ga",target:"Romance",value:68},{source:"Ga",target:"Russian",value:2},{source:"Ga",target:"Sanskrit",value:52},{source:"Ga",target:"Slavic",value:78},{source:"Ga",target:"Spanish",value:371},{source:"Ga",target:"Swedish",value:450},{source:"Ga",target:"Walloon",value:11},{source:"Ga",target:"Welsh",value:364},{source:"Gaelic",target:"German",value:345},{source:"Gaelic",target:"Germanic",value:343},{source:"Gaelic",target:"Gothic",value:20},{source:"Gaelic",target:"Greek",value:33},{source:"Gaelic",target:"Hungarian",value:3},{source:"Gaelic",target:"Icelandic",value:18},{source:"Gaelic",target:"Irish",value:290},{source:"Gaelic",target:"Italian",value:19},{source:"Gaelic",target:"Latin",value:18},{source:"Gaelic",target:"Lithuanian",value:3},{source:"Gaelic",target:"Low German",value:1},{source:"Gaelic",target:"Middle Dutch",value:15},{source:"Gaelic",target:"Middle English",value:94},{source:"Gaelic",target:"Middle Irish",value:2},{source:"Gaelic",target:"Old Church Slavonic",value:2},{source:"Gaelic",target:"Old English",value:345},{source:"Gaelic",target:"Old French",value:42},{source:"Gaelic",target:"Old High German",value:310},{source:"Gaelic",target:"Old Irish",value:236},{source:"Gaelic",target:"Old Norse",value:349},{source:"Gaelic",target:"Polish",value:3},{source:"Gaelic",target:"Russian",value:2},{source:"Gaelic",target:"Spanish",value:22},{source:"Gaelic",target:"Swedish",value:239},{source:"Gaelic",target:"Welsh",value:278},{source:"Georgian",target:"German",value:25},{source:"Georgian",target:"Greek",value:1},{source:"Georgian",target:"Hebrew",value:1},{source:"Georgian",target:"Hittite",value:1},{source:"Georgian",target:"Icelandic",value:25},{source:"Georgian",target:"Indo-European",value:1},{source:"Georgian",target:"Latin",value:1},{source:"Georgian",target:"Low German",value:25},{source:"Georgian",target:"Middle Dutch",value:25},{source:"Georgian",target:"Old English",value:25},{source:"Georgian",target:"Old French",value:1},{source:"Georgian",target:"Semitic",value:1},{source:"German",target:"Germanic",value:240390},{source:"German",target:"Gothic",value:100893},{source:"German",target:"Greek",value:51074},{source:"German",target:"Haitian",value:2},{source:"German",target:"Hebrew",value:1112},{source:"German",target:"Hindi",value:16},{source:"German",target:"Hittite",value:12401},{source:"German",target:"Hungarian",value:19},{source:"German",target:"Icelandic",value:1176},{source:"German",target:"Indo-European",value:5102},{source:"German",target:"Iranian",value:605},{source:"German",target:"Irish",value:38362},{source:"German",target:"Italian",value:5507},{source:"German",target:"Japanese",value:405},{source:"German",target:"Korean",value:71},{source:"German",target:"Kru",value:7},{source:"German",target:"Lao",value:46},{source:"German",target:"Latin",value:91134},{source:"German",target:"Latvian",value:116},{source:"German",target:"Lithuanian",value:47164},{source:"German",target:"Low German",value:5847},{source:"German",target:"Malay",value:8},{source:"German",target:"Manchu",value:4},{source:"German",target:"Mandar",value:8},{source:"German",target:"Maori",value:20},{source:"German",target:"Mari",value:837},{source:"German",target:"Middle Dutch",value:106177},{source:"German",target:"Middle English",value:134972},{source:"German",target:"Middle French",value:2},{source:"German",target:"Middle High German",value:7396},{source:"German",target:"Middle Irish",value:341},{source:"German",target:"Modern Greek",value:128},{source:"German",target:"Mongo",value:4},{source:"German",target:"Mongolian",value:4},{source:"German",target:"Nahuatl",value:52},{source:"German",target:"North American Indian",value:1299},{source:"German",target:"Norwegian",value:1413},{source:"German",target:"Occitan",value:6},{source:"German",target:"Ojibwa",value:1146},{source:"German",target:"Old Church Slavonic",value:50564},{source:"German",target:"Old English",value:249744},{source:"German",target:"Old French",value:20376},{source:"German",target:"Old High German",value:161115},{source:"German",target:"Old Irish",value:36503},{source:"German",target:"Old Norse",value:155264},{source:"German",target:"Old Persian",value:7871},{source:"German",target:"Old Provençal",value:56},{source:"German",target:"Ossetian",value:10},{source:"German",target:"Persian",value:8214},{source:"German",target:"Polish",value:793},{source:"German",target:"Portuguese",value:1018},{source:"German",target:"Provençal",value:331},{source:"German",target:"Romance",value:193},{source:"German",target:"Romanian",value:17},{source:"German",target:"Russian",value:23845},{source:"German",target:"Sanskrit",value:22729},{source:"German",target:"Scots",value:659},{source:"German",target:"Semitic",value:8},{source:"German",target:"Slavic",value:2780},{source:"German",target:"Slovenian",value:27},{source:"German",target:"Spanish",value:5999},{source:"German",target:"Swedish",value:30150},{source:"German",target:"Tai",value:2},{source:"German",target:"Turkish",value:71},{source:"German",target:"Twi",value:49},{source:"German",target:"Walloon",value:11},{source:"German",target:"Welsh",value:5871},{source:"German",target:"Yiddish",value:412},{source:"Germanic",target:"Gothic",value:98218},{source:"Germanic",target:"Greek",value:48319},{source:"Germanic",target:"Hebrew",value:692},{source:"Germanic",target:"Hindi",value:16},{source:"Germanic",target:"Hittite",value:12401},{source:"Germanic",target:"Hungarian",value:12},{source:"Germanic",target:"Icelandic",value:1151},{source:"Germanic",target:"Indo-European",value:5011},{source:"Germanic",target:"Iranian",value:599},{source:"Germanic",target:"Irish",value:37846},{source:"Germanic",target:"Italian",value:3530},{source:"Germanic",target:"Japanese",value:394},{source:"Germanic",target:"Korean",value:19},{source:"Germanic",target:"Kru",value:7},{source:"Germanic",target:"Lao",value:46},{source:"Germanic",target:"Latin",value:85156},{source:"Germanic",target:"Latvian",value:115},{source:"Germanic",target:"Lithuanian",value:46544},{source:"Germanic",target:"Low German",value:4839},{source:"Germanic",target:"Manchu",value:4},{source:"Germanic",target:"Mari",value:837},{source:"Germanic",target:"Middle Dutch",value:102230},{source:"Germanic",target:"Middle English",value:130518},{source:"Germanic",target:"Middle French",value:2},{source:"Germanic",target:"Middle High German",value:4553},{source:"Germanic",target:"Middle Irish",value:321},{source:"Germanic",target:"Modern Greek",value:128},{source:"Germanic",target:"Mongo",value:4},{source:"Germanic",target:"Mongolian",value:4},{source:"Germanic",target:"North American Indian",value:1299},{source:"Germanic",target:"Norwegian",value:607},{source:"Germanic",target:"Occitan",value:6},{source:"Germanic",target:"Ojibwa",value:1146},{source:"Germanic",target:"Old Church Slavonic",value:50418},{source:"Germanic",target:"Old English",value:238048},{source:"Germanic",target:"Old French",value:18195},{source:"Germanic",target:"Old High German",value:156720},{source:"Germanic",target:"Old Irish",value:36410},{source:"Germanic",target:"Old Norse",value:152083},{source:"Germanic",target:"Old Persian",value:7407},{source:"Germanic",target:"Old Provençal",value:45},{source:"Germanic",target:"Ossetian",value:10},{source:"Germanic",target:"Persian",value:7739},{source:"Germanic",target:"Polish",value:748},{source:"Germanic",target:"Portuguese",value:480},{source:"Germanic",target:"Provençal",value:309},{source:"Germanic",target:"Romance",value:193},{source:"Germanic",target:"Russian",value:23587},{source:"Germanic",target:"Sanskrit",value:22444},{source:"Germanic",target:"Scots",value:656},{source:"Germanic",target:"Slavic",value:2754},{source:"Germanic",target:"Slovenian",value:27},{source:"Germanic",target:"Spanish",value:4395},{source:"Germanic",target:"Swedish",value:29279},{source:"Germanic",target:"Turkish",value:57},{source:"Germanic",target:"Twi",value:7},{source:"Germanic",target:"Walloon",value:11},{source:"Germanic",target:"Welsh",value:5754},{source:"Germanic",target:"Yiddish",value:138},{source:"Gothic",target:"Greek",value:21654},{source:"Gothic",target:"Hebrew",value:475},{source:"Gothic",target:"Hindi",value:16},{source:"Gothic",target:"Hittite",value:7578},{source:"Gothic",target:"Hungarian",value:12},{source:"Gothic",target:"Icelandic",value:87},{source:"Gothic",target:"Indo-European",value:2541},{source:"Gothic",target:"Iranian",value:278},{source:"Gothic",target:"Irish",value:8931},{source:"Gothic",target:"Italian",value:764},{source:"Gothic",target:"Japanese",value:221},{source:"Gothic",target:"Latin",value:34765},{source:"Gothic",target:"Latvian",value:51},{source:"Gothic",target:"Lithuanian",value:16964},{source:"Gothic",target:"Low German",value:2701},{source:"Gothic",target:"Mari",value:21},{source:"Gothic",target:"Middle Dutch",value:38015},{source:"Gothic",target:"Middle English",value:56144},{source:"Gothic",target:"Middle High German",value:3071},{source:"Gothic",target:"Middle Irish",value:79},{source:"Gothic",target:"Modern Greek",value:51},{source:"Gothic",target:"Norwegian",value:169},{source:"Gothic",target:"Old Church Slavonic",value:19777},{source:"Gothic",target:"Old English",value:101266},{source:"Gothic",target:"Old French",value:814},{source:"Gothic",target:"Old High German",value:59448},{source:"Gothic",target:"Old Irish",value:7806},{source:"Gothic",target:"Old Norse",value:76128},{source:"Gothic",target:"Old Persian",value:7768},{source:"Gothic",target:"Persian",value:7929},{source:"Gothic",target:"Polish",value:440},{source:"Gothic",target:"Provençal",value:17},{source:"Gothic",target:"Romance",value:72},{source:"Gothic",target:"Russian",value:4457},{source:"Gothic",target:"Sanskrit",value:20545},{source:"Gothic",target:"Scots",value:641},{source:"Gothic",target:"Slavic",value:2173},{source:"Gothic",target:"Spanish",value:620},{source:"Gothic",target:"Swedish",value:11805},{source:"Gothic",target:"Welsh",value:5009},{source:"Gothic",target:"Yiddish",value:90},{source:"Greek",target:"Hebrew",value:982},{source:"Greek",target:"Hittite",value:3085},{source:"Greek",target:"Hungarian",value:19},{source:"Greek",target:"Icelandic",value:378},{source:"Greek",target:"Indo-European",value:3126},{source:"Greek",target:"Iranian",value:301},{source:"Greek",target:"Irish",value:29551},{source:"Greek",target:"Italian",value:1939},{source:"Greek",target:"Japanese",value:221},{source:"Greek",target:"Korean",value:52},{source:"Greek",target:"Kru",value:7},{source:"Greek",target:"Latin",value:45118},{source:"Greek",target:"Latvian",value:51},{source:"Greek",target:"Lithuanian",value:32737},{source:"Greek",target:"Low German",value:408},{source:"Greek",target:"Macedonian",value:2},{source:"Greek",target:"Malay",value:8},{source:"Greek",target:"Manchu",value:4},{source:"Greek",target:"Mandar",value:8},{source:"Greek",target:"Mari",value:1},{source:"Greek",target:"Middle Dutch",value:11856},{source:"Greek",target:"Middle English",value:36539},{source:"Greek",target:"Middle French",value:3},{source:"Greek",target:"Middle High German",value:2075},{source:"Greek",target:"Middle Irish",value:148},{source:"Greek",target:"Modern Greek",value:128},{source:"Greek",target:"Mongo",value:4},{source:"Greek",target:"Mongolian",value:4},{source:"Greek",target:"Nahuatl",value:52},{source:"Greek",target:"Norwegian",value:519},{source:"Greek",target:"Old Church Slavonic",value:33096},{source:"Greek",target:"Old English",value:52663},{source:"Greek",target:"Old French",value:4192},{source:"Greek",target:"Old High German",value:41140},{source:"Greek",target:"Old Irish",value:28901},{source:"Greek",target:"Old Norse",value:18327},{source:"Greek",target:"Old Persian",value:3638},{source:"Greek",target:"Old Provençal",value:16},{source:"Greek",target:"Persian",value:3971},{source:"Greek",target:"Phoenician",value:1},{source:"Greek",target:"Polish",value:187},{source:"Greek",target:"Portuguese",value:369},{source:"Greek",target:"Provençal",value:125},{source:"Greek",target:"Romance",value:73},{source:"Greek",target:"Russian",value:21105},{source:"Greek",target:"Sanskrit",value:11803},{source:"Greek",target:"Scots",value:641},{source:"Greek",target:"Semitic",value:22},{source:"Greek",target:"Slavic",value:1414},{source:"Greek",target:"Spanish",value:1924},{source:"Greek",target:"Swedish",value:4302},{source:"Greek",target:"Syriac",value:1},{source:"Greek",target:"Turkish",value:77},{source:"Greek",target:"Walloon",value:1},{source:"Greek",target:"Welsh",value:2552},{source:"Haitian",target:"Portuguese",value:2},{source:"Haitian",target:"Spanish",value:2},{source:"Haitian",target:"Tai",value:2},{source:"Hawaiian",target:"Latin",value:8},{source:"Hawaiian",target:"Old French",value:8},{source:"Hebrew",target:"Hittite",value:1},{source:"Hebrew",target:"Indo-European",value:31},{source:"Hebrew",target:"Irish",value:38},{source:"Hebrew",target:"Italian",value:824},{source:"Hebrew",target:"Latin",value:1258},{source:"Hebrew",target:"Lithuanian",value:64},{source:"Hebrew",target:"Low German",value:76},{source:"Hebrew",target:"Middle Dutch",value:950},{source:"Hebrew",target:"Middle English",value:854},{source:"Hebrew",target:"Old Church Slavonic",value:87},{source:"Hebrew",target:"Old English",value:1433},{source:"Hebrew",target:"Old French",value:573},{source:"Hebrew",target:"Old High German",value:995},{source:"Hebrew",target:"Old Irish",value:14},{source:"Hebrew",target:"Old Norse",value:603},{source:"Hebrew",target:"Persian",value:1},{source:"Hebrew",target:"Phoenician",value:2},{source:"Hebrew",target:"Polish",value:16},{source:"Hebrew",target:"Portuguese",value:11},{source:"Hebrew",target:"Provençal",value:99},{source:"Hebrew",target:"Romance",value:1},{source:"Hebrew",target:"Russian",value:17},{source:"Hebrew",target:"Sanskrit",value:80},{source:"Hebrew",target:"Semitic",value:22},{source:"Hebrew",target:"Spanish",value:824},{source:"Hebrew",target:"Swedish",value:27},{source:"Hebrew",target:"Syriac",value:1},{source:"Hebrew",target:"Turkish",value:1},{source:"Hindi",target:"Indo-European",value:16},{source:"Hindi",target:"Latin",value:16},{source:"Hindi",target:"Malay",value:2},{source:"Hindi",target:"Malayalam",value:2},{source:"Hindi",target:"Middle English",value:16},{source:"Hindi",target:"Middle High German",value:16},{source:"Hindi",target:"Old English",value:16},{source:"Hindi",target:"Old High German",value:16},{source:"Hindi",target:"Old Norse",value:16},{source:"Hindi",target:"Portuguese",value:2},{source:"Hindi",target:"Sanskrit",value:17},{source:"Hindi",target:"Tamil",value:2},{source:"Hindi",target:"Telugu",value:2},{source:"Hittite",target:"Indo-European",value:20},{source:"Hittite",target:"Irish",value:7657},{source:"Hittite",target:"Italian",value:5},{source:"Hittite",target:"Latin",value:8222},{source:"Hittite",target:"Lithuanian",value:11473},{source:"Hittite",target:"Middle Dutch",value:5084},{source:"Hittite",target:"Middle English",value:7952},{source:"Hittite",target:"Middle High German",value:106},{source:"Hittite",target:"Middle Irish",value:2},{source:"Hittite",target:"Norwegian",value:19},{source:"Hittite",target:"Old Church Slavonic",value:11187},{source:"Hittite",target:"Old English",value:12445},{source:"Hittite",target:"Old French",value:65},{source:"Hittite",target:"Old High German",value:10202},{source:"Hittite",target:"Old Irish",value:7653},{source:"Hittite",target:"Old Norse",value:12241},{source:"Hittite",target:"Old Persian",value:6361},{source:"Hittite",target:"Persian",value:6361},{source:"Hittite",target:"Provençal",value:5},{source:"Hittite",target:"Russian",value:74},{source:"Hittite",target:"Sanskrit",value:7485},{source:"Hittite",target:"Semitic",value:1},{source:"Hittite",target:"Slavic",value:51},{source:"Hittite",target:"Swedish",value:25},{source:"Hittite",target:"Welsh",value:53},{source:"Hungarian",target:"Iranian",value:6},{source:"Hungarian",target:"Irish",value:15},{source:"Hungarian",target:"Italian",value:19},{source:"Hungarian",target:"Latin",value:9},{source:"Hungarian",target:"Lithuanian",value:9},{source:"Hungarian",target:"Middle English",value:9},{source:"Hungarian",target:"Old English",value:18},{source:"Hungarian",target:"Old French",value:3},{source:"Hungarian",target:"Old High German",value:9},{source:"Hungarian",target:"Old Norse",value:9},{source:"Hungarian",target:"Old Persian",value:6},{source:"Hungarian",target:"Persian",value:6},{source:"Hungarian",target:"Polish",value:18},{source:"Hungarian",target:"Portuguese",value:1},{source:"Hungarian",target:"Russian",value:15},{source:"Hungarian",target:"Slavic",value:9},{source:"Hungarian",target:"Spanish",value:19},{source:"Hungarian",target:"Swedish",value:6},{source:"Hungarian",target:"Turkish",value:6},{source:"Hungarian",target:"Welsh",value:9},{source:"Icelandic",target:"Indo-European",value:237},{source:"Icelandic",target:"Irish",value:34},{source:"Icelandic",target:"Italian",value:237},{source:"Icelandic",target:"Latin",value:944},{source:"Icelandic",target:"Lithuanian",value:196},{source:"Icelandic",target:"Low German",value:154},{source:"Icelandic",target:"Middle Dutch",value:752},{source:"Icelandic",target:"Middle English",value:76},{source:"Icelandic",target:"Modern Greek",value:51},{source:"Icelandic",target:"Norwegian",value:138},{source:"Icelandic",target:"Old Church Slavonic",value:337},{source:"Icelandic",target:"Old English",value:1170},{source:"Icelandic",target:"Old French",value:255},{source:"Icelandic",target:"Old High German",value:792},{source:"Icelandic",target:"Old Irish",value:4},{source:"Icelandic",target:"Old Norse",value:1023},{source:"Icelandic",target:"Ossetian",value:10},{source:"Icelandic",target:"Persian",value:33},{source:"Icelandic",target:"Portuguese",value:186},{source:"Icelandic",target:"Romance",value:51},{source:"Icelandic",target:"Russian",value:196},{source:"Icelandic",target:"Sanskrit",value:184},{source:"Icelandic",target:"Spanish",value:901},{source:"Icelandic",target:"Swedish",value:243},{source:"Icelandic",target:"Welsh",value:69},{source:"Indo-European",target:"Iranian",value:565},{source:"Indo-European",target:"Irish",value:1147},{source:"Indo-European",target:"Italian",value:881},{source:"Indo-European",target:"Korean",value:52},{source:"Indo-European",target:"Latin",value:3438},{source:"Indo-European",target:"Lithuanian",value:1359},{source:"Indo-European",target:"Low German",value:161},{source:"Indo-European",target:"Middle Dutch",value:1949},{source:"Indo-European",target:"Middle English",value:3163},{source:"Indo-European",target:"Middle High German",value:27},{source:"Indo-European",target:"Modern Greek",value:51},{source:"Indo-European",target:"Nahuatl",value:52},{source:"Indo-European",target:"Norwegian",value:19},{source:"Indo-European",target:"Occitan",value:6},{source:"Indo-European",target:"Old Church Slavonic",value:1189},{source:"Indo-European",target:"Old English",value:5514},{source:"Indo-European",target:"Old French",value:869},{source:"Indo-European",target:"Old High German",value:3393},{source:"Indo-European",target:"Old Irish",value:98},{source:"Indo-European",target:"Old Norse",value:4162},{source:"Indo-European",target:"Old Persian",value:55},{source:"Indo-European",target:"Old Provençal",value:7},{source:"Indo-European",target:"Persian",value:55},{source:"Indo-European",target:"Polish",value:178},{source:"Indo-European",target:"Portuguese",value:211},{source:"Indo-European",target:"Provençal",value:13},{source:"Indo-European",target:"Romance",value:51},{source:"Indo-European",target:"Romanian",value:17},{source:"Indo-European",target:"Russian",value:445},{source:"Indo-European",target:"Sanskrit",value:816},{source:"Indo-European",target:"Scots",value:641},{source:"Indo-European",target:"Semitic",value:2},{source:"Indo-European",target:"Slavic",value:118},{source:"Indo-European",target:"Spanish",value:827},{source:"Indo-European",target:"Swedish",value:916},{source:"Indo-European",target:"Welsh",value:820},{source:"Iranian",target:"Irish",value:13},{source:"Iranian",target:"Italian",value:6},{source:"Iranian",target:"Latin",value:301},{source:"Iranian",target:"Lithuanian",value:13},{source:"Iranian",target:"Middle Dutch",value:558},{source:"Iranian",target:"Middle English",value:294},{source:"Iranian",target:"Old Church Slavonic",value:7},{source:"Iranian",target:"Old English",value:605},{source:"Iranian",target:"Old French",value:1},{source:"Iranian",target:"Old High German",value:565},{source:"Iranian",target:"Old Norse",value:599},{source:"Iranian",target:"Old Persian",value:6},{source:"Iranian",target:"Persian",value:7},{source:"Iranian",target:"Polish",value:40},{source:"Iranian",target:"Russian",value:6},{source:"Iranian",target:"Sanskrit",value:34},{source:"Iranian",target:"Spanish",value:293},{source:"Iranian",target:"Swedish",value:293},{source:"Iranian",target:"Turkish",value:6},{source:"Iranian",target:"Welsh",value:6},{source:"Irish",target:"Italian",value:500},{source:"Irish",target:"Kru",value:1},{source:"Irish",target:"Latin",value:35213},{source:"Irish",target:"Latvian",value:50},{source:"Irish",target:"Lithuanian",value:32984},{source:"Irish",target:"Low German",value:416},{source:"Irish",target:"Manx",value:5},{source:"Irish",target:"Mari",value:21},{source:"Irish",target:"Middle Dutch",value:7692},{source:"Irish",target:"Middle English",value:35102},{source:"Irish",target:"Middle High German",value:20},{source:"Irish",target:"Middle Irish",value:580},{source:"Irish",target:"Old Church Slavonic",value:33071},{source:"Irish",target:"Old English",value:38433},{source:"Irish",target:"Old French",value:538},{source:"Irish",target:"Old High German",value:34694},{source:"Irish",target:"Old Irish",value:36733},{source:"Irish",target:"Old Norse",value:13904},{source:"Irish",target:"Old Persian",value:2236},{source:"Irish",target:"Persian",value:2410},{source:"Irish",target:"Polish",value:239},{source:"Irish",target:"Portuguese",value:49},{source:"Irish",target:"Provençal",value:5},{source:"Irish",target:"Russian",value:19783},{source:"Irish",target:"Sanskrit",value:5736},{source:"Irish",target:"Slavic",value:998},{source:"Irish",target:"Spanish",value:154},{source:"Irish",target:"Swedish",value:2965},{source:"Irish",target:"Turkish",value:6},{source:"Irish",target:"Welsh",value:5030},{source:"Italian",target:"Japanese",value:2},{source:"Italian",target:"Latin",value:8718},{source:"Italian",target:"Latvian",value:2},{source:"Italian",target:"Lithuanian",value:1119},{source:"Italian",target:"Low German",value:650},{source:"Italian",target:"Manchu",value:4},{source:"Italian",target:"Middle Dutch",value:2034},{source:"Italian",target:"Middle English",value:3181},{source:"Italian",target:"Middle French",value:2},{source:"Italian",target:"Middle High German",value:317},{source:"Italian",target:"Middle Irish",value:29},{source:"Italian",target:"Modern Greek",value:51},{source:"Italian",target:"Mongo",value:4},{source:"Italian",target:"Mongolian",value:4},{source:"Italian",target:"North American Indian",value:153},{source:"Italian",target:"Norwegian",value:335},{source:"Italian",target:"Occitan",value:6},{source:"Italian",target:"Old Church Slavonic",value:388},{source:"Italian",target:"Old English",value:5914},{source:"Italian",target:"Old French",value:7536},{source:"Italian",target:"Old High German",value:2085},{source:"Italian",target:"Old Irish",value:65},{source:"Italian",target:"Old Norse",value:1735},{source:"Italian",target:"Old Persian",value:33},{source:"Italian",target:"Old Provençal",value:72},{source:"Italian",target:"Pali",value:77},{source:"Italian",target:"Persian",value:45},{source:"Italian",target:"Polish",value:151},{source:"Italian",target:"Portuguese",value:1808},{source:"Italian",target:"Provençal",value:505},{source:"Italian",target:"Romance",value:486},{source:"Italian",target:"Romanian",value:17},{source:"Italian",target:"Russian",value:359},{source:"Italian",target:"Sanskrit",value:217},{source:"Italian",target:"Semitic",value:13},{source:"Italian",target:"Slavic",value:513},{source:"Italian",target:"Spanish",value:8066},{source:"Italian",target:"Swedish",value:778},{source:"Italian",target:"Turkish",value:13},{source:"Italian",target:"Welsh",value:101},{source:"Japanese",target:"Latin",value:232},{source:"Japanese",target:"Middle English",value:9},{source:"Japanese",target:"Middle High German",value:9},{source:"Japanese",target:"Old English",value:409},{source:"Japanese",target:"Old French",value:8},{source:"Japanese",target:"Old High German",value:223},{source:"Japanese",target:"Old Norse",value:236},{source:"Japanese",target:"Portuguese",value:2},{source:"Japanese",target:"Spanish",value:2},{source:"Japanese",target:"Swedish",value:2},{source:"Korean",target:"Middle Dutch",value:19},{source:"Korean",target:"Middle English",value:19},{source:"Korean",target:"Nahuatl",value:52},{source:"Korean",target:"Old Church Slavonic",value:52},{source:"Korean",target:"Old English",value:71},{source:"Korean",target:"Old High German",value:19},{source:"Korean",target:"Old Norse",value:19},{source:"Korean",target:"Old Persian",value:52},{source:"Korean",target:"Persian",value:52},{source:"Korean",target:"Russian",value:52},{source:"Kru",target:"Low German",value:1},{source:"Kru",target:"Middle Dutch",value:7},{source:"Kru",target:"Middle English",value:7},{source:"Kru",target:"Middle Irish",value:1},{source:"Kru",target:"Old Church Slavonic",value:1},{source:"Kru",target:"Old English",value:7},{source:"Kru",target:"Old High German",value:1},{source:"Kru",target:"Old Norse",value:1},{source:"Lao",target:"Old English",value:46},{source:"Lao",target:"Old Norse",value:46},{source:"Lao",target:"Yiddish",value:46},{source:"Latin",target:"Latvian",value:69},{source:"Latin",target:"Lithuanian",value:38702},{source:"Latin",target:"Low German",value:970},{source:"Latin",target:"Macedonian",value:2},{source:"Latin",target:"Manchu",value:4},{source:"Latin",target:"Mari",value:875},{source:"Latin",target:"Middle Dutch",value:22988},{source:"Latin",target:"Middle English",value:66404},{source:"Latin",target:"Middle French",value:3},{source:"Latin",target:"Middle High German",value:5087},{source:"Latin",target:"Middle Irish",value:456},{source:"Latin",target:"Modern Greek",value:51},{source:"Latin",target:"Mongo",value:4},{source:"Latin",target:"Mongolian",value:4},{source:"Latin",target:"North American Indian",value:226},{source:"Latin",target:"Norwegian",value:387},{source:"Latin",target:"Occitan",value:6},{source:"Latin",target:"Old Church Slavonic",value:41836},{source:"Latin",target:"Old English",value:93927},{source:"Latin",target:"Old French",value:37373},{source:"Latin",target:"Old High German",value:53723},{source:"Latin",target:"Old Irish",value:33331},{source:"Latin",target:"Old Norse",value:51738},{source:"Latin",target:"Old Persian",value:3180},{source:"Latin",target:"Old Provençal",value:161},{source:"Latin",target:"Ossetian",value:10},{source:"Latin",target:"Pali",value:77},{source:"Latin",target:"Persian",value:3541},{source:"Latin",target:"Phoenician",value:3},{source:"Latin",target:"Polish",value:383},{source:"Latin",target:"Portuguese",value:1884},{source:"Latin",target:"Provençal",value:570},{source:"Latin",target:"Romance",value:668},{source:"Latin",target:"Romanian",value:17},{source:"Latin",target:"Russian",value:21800},{source:"Latin",target:"Sanskrit",value:13193},{source:"Latin",target:"Scots",value:641},{source:"Latin",target:"Semitic",value:31},{source:"Latin",target:"Slavic",value:2223},{source:"Latin",target:"Slovenian",value:27},{source:"Latin",target:"Spanish",value:8911},{source:"Latin",target:"Swedish",value:6353},{source:"Latin",target:"Syriac",value:1},{source:"Latin",target:"Tibetan",value:6},{source:"Latin",target:"Turkish",value:69},{source:"Latin",target:"Vai",value:36},{source:"Latin",target:"Walloon",value:2},{source:"Latin",target:"Welsh",value:3471},{source:"Latvian",target:"Lithuanian",value:53},{source:"Latvian",target:"Low German",value:64},{source:"Latvian",target:"Middle English",value:64},{source:"Latvian",target:"Middle High German",value:65},{source:"Latvian",target:"Old English",value:117},{source:"Latvian",target:"Old French",value:4},{source:"Latvian",target:"Old High German",value:115},{source:"Latvian",target:"Old Irish",value:50},{source:"Latvian",target:"Old Norse",value:51},{source:"Latvian",target:"Romance",value:66},{source:"Latvian",target:"Russian",value:54},{source:"Latvian",target:"Sanskrit",value:65},{source:"Latvian",target:"Slavic",value:65},{source:"Latvian",target:"Swedish",value:64},{source:"Lithuanian",target:"Low German",value:839},{source:"Lithuanian",target:"Manchu",value:4},{source:"Lithuanian",target:"Middle Dutch",value:9352},{source:"Lithuanian",target:"Middle English",value:35032},{source:"Lithuanian",target:"Middle High German",value:506},{source:"Lithuanian",target:"Middle Irish",value:250},{source:"Lithuanian",target:"Mongo",value:4},{source:"Lithuanian",target:"Mongolian",value:4},{source:"Lithuanian",target:"Norwegian",value:29},{source:"Lithuanian",target:"Old Church Slavonic",value:42595},{source:"Lithuanian",target:"Old English",value:47457},{source:"Lithuanian",target:"Old French",value:1087},{source:"Lithuanian",target:"Old High German",value:40106},{source:"Lithuanian",target:"Old Irish",value:32148},{source:"Lithuanian",target:"Old Norse",value:19236},{source:"Lithuanian",target:"Old Persian",value:6449},{source:"Lithuanian",target:"Ossetian",value:10},{source:"Lithuanian",target:"Persian",value:6710},{source:"Lithuanian",target:"Polish",value:416},{source:"Lithuanian",target:"Portuguese",value:222},{source:"Lithuanian",target:"Romance",value:2},{source:"Lithuanian",target:"Russian",value:21125},{source:"Lithuanian",target:"Sanskrit",value:11434},{source:"Lithuanian",target:"Slavic",value:2227},{source:"Lithuanian",target:"Spanish",value:466},{source:"Lithuanian",target:"Swedish",value:3100},{source:"Lithuanian",target:"Turkish",value:6},{source:"Lithuanian",target:"Welsh",value:2180},{source:"Low German",target:"Maori",value:20},{source:"Low German",target:"Middle Dutch",value:4314},{source:"Low German",target:"Middle English",value:2045},{source:"Low German",target:"Middle High German",value:313},{source:"Low German",target:"Middle Irish",value:1},{source:"Low German",target:"Norwegian",value:316},{source:"Low German",target:"Old Church Slavonic",value:355},{source:"Low German",target:"Old English",value:4986},{source:"Low German",target:"Old French",value:199},{source:"Low German",target:"Old High German",value:1809},{source:"Low German",target:"Old Irish",value:39},{source:"Low German",target:"Old Norse",value:3480},{source:"Low German",target:"Old Persian",value:8},{source:"Low German",target:"Persian",value:50},{source:"Low German",target:"Polish",value:12},{source:"Low German",target:"Romance",value:65},{source:"Low German",target:"Russian",value:76},{source:"Low German",target:"Sanskrit",value:1157},{source:"Low German",target:"Slavic",value:90},{source:"Low German",target:"Spanish",value:57},{source:"Low German",target:"Swedish",value:1814},{source:"Low German",target:"Twi",value:7},{source:"Low German",target:"Welsh",value:35},{source:"Low German",target:"Yiddish",value:2},{source:"Macedonian",target:"Old English",value:2},{source:"Macedonian",target:"Spanish",value:2},{source:"Malay",target:"Malayalam",value:2},{source:"Malay",target:"Mandar",value:8},{source:"Malay",target:"Persian",value:8},{source:"Malay",target:"Portuguese",value:10},{source:"Malay",target:"Russian",value:8},{source:"Malay",target:"Spanish",value:8},{source:"Malay",target:"Tamil",value:2},{source:"Malay",target:"Telugu",value:2},{source:"Malay",target:"Turkish",value:8},{source:"Malayalam",target:"Portuguese",value:2},{source:"Malayalam",target:"Tamil",value:2},{source:"Malayalam",target:"Telugu",value:2},{source:"Manchu",target:"Middle English",value:4},{source:"Manchu",target:"Mongo",value:4},{source:"Manchu",target:"Mongolian",value:4},{source:"Manchu",target:"Old Church Slavonic",value:4},{source:"Manchu",target:"Old English",value:4},{source:"Manchu",target:"Old French",value:4},{source:"Manchu",target:"Old Norse",value:4},{source:"Manchu",target:"Slavic",value:4},{source:"Manchu",target:"Spanish",value:4},{source:"Mandar",target:"Persian",value:8},{source:"Mandar",target:"Portuguese",value:8},{source:"Mandar",target:"Russian",value:8},{source:"Mandar",target:"Spanish",value:8},{source:"Mandar",target:"Turkish",value:8},{source:"Manx",target:"Old Irish",value:5},{source:"Manx",target:"Welsh",value:5},{source:"Maori",target:"Norwegian",value:20},{source:"Mari",target:"Middle Dutch",value:837},{source:"Mari",target:"Middle English",value:75},{source:"Mari",target:"Middle French",value:1},{source:"Mari",target:"Old English",value:837},{source:"Mari",target:"Old French",value:56},{source:"Mari",target:"Old High German",value:837},{source:"Mari",target:"Old Irish",value:21},{source:"Mari",target:"Old Norse",value:33},{source:"Mari",target:"Polish",value:2},{source:"Mari",target:"Sanskrit",value:21},{source:"Middle Dutch",target:"Middle English",value:54690},{source:"Middle Dutch",target:"Middle High German",value:2943},{source:"Middle Dutch",target:"Middle Irish",value:70},{source:"Middle Dutch",target:"Norwegian",value:634},{source:"Middle Dutch",target:"Old Church Slavonic",value:11271},{source:"Middle Dutch",target:"Old English",value:105628},{source:"Middle Dutch",target:"Old French",value:1479},{source:"Middle Dutch",target:"Old High German",value:89324},{source:"Middle Dutch",target:"Old Irish",value:7142},{source:"Middle Dutch",target:"Old Norse",value:69608},{source:"Middle Dutch",target:"Old Persian",value:616},{source:"Middle Dutch",target:"Old Provençal",value:2},{source:"Middle Dutch",target:"Ossetian",value:10},{source:"Middle Dutch",target:"Persian",value:771},{source:"Middle Dutch",target:"Polish",value:596},{source:"Middle Dutch",target:"Portuguese",value:2},{source:"Middle Dutch",target:"Provençal",value:181},{source:"Middle Dutch",target:"Romance",value:30},{source:"Middle Dutch",target:"Russian",value:3e3},{source:"Middle Dutch",target:"Sanskrit",value:9922},{source:"Middle Dutch",target:"Scots",value:1},{source:"Middle Dutch",target:"Slavic",value:1655},{source:"Middle Dutch",target:"Slovenian",value:27},{source:"Middle Dutch",target:"Spanish",value:2943},{source:"Middle Dutch",target:"Swedish",value:9615},{source:"Middle Dutch",target:"Turkish",value:57},{source:"Middle Dutch",target:"Walloon",value:11},{source:"Middle Dutch",target:"Welsh",value:1546},{source:"Middle Dutch",target:"Yiddish",value:92},{source:"Middle English",target:"Middle High German",value:2587},{source:"Middle English",target:"Middle Irish",value:166},{source:"Middle English",target:"Modern Greek",value:51},{source:"Middle English",target:"Mongo",value:4},{source:"Middle English",target:"Mongolian",value:4},{source:"Middle English",target:"North American Indian",value:1146},{source:"Middle English",target:"Norwegian",value:557},{source:"Middle English",target:"Ojibwa",value:1146},{source:"Middle English",target:"Old Church Slavonic",value:37262},{source:"Middle English",target:"Old English",value:141464},{source:"Middle English",target:"Old French",value:20038},{source:"Middle English",target:"Old High German",value:83678},{source:"Middle English",target:"Old Irish",value:34191},{source:"Middle English",target:"Old Norse",value:70848},{source:"Middle English",target:"Old Persian",value:2269},{source:"Middle English",target:"Old Provençal",value:117},{source:"Middle English",target:"Pali",value:77},{source:"Middle English",target:"Persian",value:2376},{source:"Middle English",target:"Phoenician",value:2},{source:"Middle English",target:"Polish",value:351},{source:"Middle English",target:"Portuguese",value:687},{source:"Middle English",target:"Provençal",value:137},{source:"Middle English",target:"Romance",value:204},{source:"Middle English",target:"Russian",value:20865},{source:"Middle English",target:"Sanskrit",value:10517},{source:"Middle English",target:"Scots",value:15},{source:"Middle English",target:"Semitic",value:14},{source:"Middle English",target:"Slavic",value:2269},{source:"Middle English",target:"Spanish",value:3197},{source:"Middle English",target:"Swedish",value:11084},{source:"Middle English",target:"Tibetan",value:6},{source:"Middle English",target:"Turkish",value:57},{source:"Middle English",target:"Twi",value:2},{source:"Middle English",target:"Welsh",value:3358},{source:"Middle French",target:"Slavic",value:2},{source:"Middle French",target:"Spanish",value:2},{source:"Middle High German",target:"Norwegian",value:29},{source:"Middle High German",target:"Old Church Slavonic",value:367},{source:"Middle High German",target:"Old English",value:7087},{source:"Middle High German",target:"Old French",value:296},{source:"Middle High German",target:"Old High German",value:2937},{source:"Middle High German",target:"Old Irish",value:5},{source:"Middle High German",target:"Old Norse",value:3328},{source:"Middle High German",target:"Persian",value:14},{source:"Middle High German",target:"Polish",value:18},{source:"Middle High German",target:"Portuguese",value:9},{source:"Middle High German",target:"Provençal",value:179},{source:"Middle High German",target:"Romance",value:64},{source:"Middle High German",target:"Russian",value:382},{source:"Middle High German",target:"Sanskrit",value:138},{source:"Middle High German",target:"Slavic",value:64},{source:"Middle High German",target:"Spanish",value:304},{source:"Middle High German",target:"Swedish",value:272},{source:"Middle High German",target:"Turkish",value:57},{source:"Middle High German",target:"Twi",value:42},{source:"Middle High German",target:"Welsh",value:80},{source:"Middle Irish",target:"Old Church Slavonic",value:248},{source:"Middle Irish",target:"Old English",value:329},{source:"Middle Irish",target:"Old French",value:230},{source:"Middle Irish",target:"Old High German",value:233},{source:"Middle Irish",target:"Old Irish",value:274},{source:"Middle Irish",target:"Old Norse",value:294},{source:"Middle Irish",target:"Old Persian",value:4},{source:"Middle Irish",target:"Persian",value:4},{source:"Middle Irish",target:"Polish",value:34},{source:"Middle Irish",target:"Portuguese",value:13},{source:"Middle Irish",target:"Russian",value:166},{source:"Middle Irish",target:"Sanskrit",value:202},{source:"Middle Irish",target:"Slavic",value:34},{source:"Middle Irish",target:"Spanish",value:29},{source:"Middle Irish",target:"Swedish",value:4},{source:"Middle Irish",target:"Welsh",value:78},{source:"Modern Greek",target:"Old English",value:128},{source:"Modern Greek",target:"Old French",value:51},{source:"Modern Greek",target:"Old High German",value:51},{source:"Modern Greek",target:"Old Norse",value:51},{source:"Modern Greek",target:"Romance",value:51},{source:"Modern Greek",target:"Spanish",value:51},{source:"Modern Greek",target:"Swedish",value:51},{source:"Modern Greek",target:"Welsh",value:51},{source:"Mongo",target:"Mongolian",value:4},{source:"Mongo",target:"Old Church Slavonic",value:4},{source:"Mongo",target:"Old English",value:4},{source:"Mongo",target:"Old French",value:4},{source:"Mongo",target:"Old Norse",value:4},{source:"Mongo",target:"Slavic",value:4},{source:"Mongo",target:"Spanish",value:4},{source:"Mongolian",target:"Old Church Slavonic",value:4},{source:"Mongolian",target:"Old English",value:4},{source:"Mongolian",target:"Old French",value:4},{source:"Mongolian",target:"Old Norse",value:4},{source:"Mongolian",target:"Slavic",value:4},{source:"Mongolian",target:"Spanish",value:4},{source:"Nahuatl",target:"Old Church Slavonic",value:52},{source:"Nahuatl",target:"Old English",value:52},{source:"Nahuatl",target:"Old Persian",value:52},{source:"Nahuatl",target:"Persian",value:52},{source:"Nahuatl",target:"Russian",value:52},{source:"Neapolitan",target:"Spanish",value:1},{source:"North American Indian",target:"Ojibwa",value:1146},{source:"North American Indian",target:"Old English",value:1299},{source:"North American Indian",target:"Old French",value:226},{source:"North American Indian",target:"Old High German",value:153},{source:"North American Indian",target:"Portuguese",value:153},{source:"North American Indian",target:"Spanish",value:153},{source:"Norwegian",target:"Old Church Slavonic",value:156},{source:"Norwegian",target:"Old English",value:1073},{source:"Norwegian",target:"Old French",value:489},{source:"Norwegian",target:"Old High German",value:350},{source:"Norwegian",target:"Old Norse",value:589},{source:"Norwegian",target:"Russian",value:27},{source:"Norwegian",target:"Sanskrit",value:175},{source:"Norwegian",target:"Spanish",value:335},{source:"Norwegian",target:"Swedish",value:703},{source:"Norwegian",target:"Yiddish",value:273},{source:"Occitan",target:"Old French",value:6},{source:"Occitan",target:"Provençal",value:6},{source:"Ojibwa",target:"Old English",value:1146},{source:"Old Church Slavonic",target:"Old English",value:50591},{source:"Old Church Slavonic",target:"Old French",value:477},{source:"Old Church Slavonic",target:"Old High German",value:41100},{source:"Old Church Slavonic",target:"Old Irish",value:32569},{source:"Old Church Slavonic",target:"Old Norse",value:21114},{source:"Old Church Slavonic",target:"Old Persian",value:6745},{source:"Old Church Slavonic",target:"Ossetian",value:10},{source:"Old Church Slavonic",target:"Persian",value:6908},{source:"Old Church Slavonic",target:"Polish",value:429},{source:"Old Church Slavonic",target:"Portuguese",value:186},{source:"Old Church Slavonic",target:"Russian",value:22634},{source:"Old Church Slavonic",target:"Sanskrit",value:14843},{source:"Old Church Slavonic",target:"Slavic",value:933},{source:"Old Church Slavonic",target:"Spanish",value:496},{source:"Old Church Slavonic",target:"Swedish",value:1774},{source:"Old Church Slavonic",target:"Welsh",value:2530},{source:"Old English",target:"Old French",value:22075},{source:"Old English",target:"Old High German",value:160592},{source:"Old English",target:"Old Irish",value:36541},{source:"Old English",target:"Old Norse",value:155484},{source:"Old English",target:"Old Persian",value:7888},{source:"Old English",target:"Old Provençal",value:56},{source:"Old English",target:"Ossetian",value:10},{source:"Old English",target:"Persian",value:8294},{source:"Old English",target:"Phoenician",value:1},{source:"Old English",target:"Polish",value:756},{source:"Old English",target:"Portuguese",value:883},{source:"Old English",target:"Provençal",value:174},{source:"Old English",target:"Romance",value:194},{source:"Old English",target:"Romanian",value:17},{source:"Old English",target:"Russian",value:23773},{source:"Old English",target:"Sanskrit",value:22701},{source:"Old English",target:"Scots",value:656},{source:"Old English",target:"Semitic",value:14},{source:"Old English",target:"Slavic",value:2771},{source:"Old English",target:"Slovenian",value:27},{source:"Old English",target:"Spanish",value:6048},{source:"Old English",target:"Swedish",value:29724},{source:"Old English",target:"Turkish",value:63},{source:"Old English",target:"Twi",value:16},{source:"Old English",target:"Welsh",value:5945},{source:"Old English",target:"Yiddish",value:376},{source:"Old French",target:"Old High German",value:1896},{source:"Old French",target:"Old Irish",value:339},{source:"Old French",target:"Old Norse",value:14913},{source:"Old French",target:"Old Persian",value:49},{source:"Old French",target:"Old Provençal",value:205},{source:"Old French",target:"Pali",value:77},{source:"Old French",target:"Persian",value:130},{source:"Old French",target:"Phoenician",value:2},{source:"Old French",target:"Polish",value:60},{source:"Old French",target:"Portuguese",value:1866},{source:"Old French",target:"Provençal",value:578},{source:"Old French",target:"Romance",value:597},{source:"Old French",target:"Romanian",value:17},{source:"Old French",target:"Russian",value:309},{source:"Old French",target:"Sanskrit",value:632},{source:"Old French",target:"Scots",value:10},{source:"Old French",target:"Semitic",value:26},{source:"Old French",target:"Slavic",value:472},{source:"Old French",target:"Spanish",value:7092},{source:"Old French",target:"Swedish",value:1488},{source:"Old French",target:"Syriac",value:1},{source:"Old French",target:"Tibetan",value:6},{source:"Old French",target:"Turkish",value:4},{source:"Old French",target:"Vai",value:36},{source:"Old French",target:"Walloon",value:1},{source:"Old French",target:"Welsh",value:318},{source:"Old High German",target:"Old Irish",value:34078},{source:"Old High German",target:"Old Norse",value:99880},{source:"Old High German",target:"Old Persian",value:5681},{source:"Old High German",target:"Old Provençal",value:14},{source:"Old High German",target:"Ossetian",value:10},{source:"Old High German",target:"Persian",value:5979},{source:"Old High German",target:"Polish",value:557},{source:"Old High German",target:"Portuguese",value:297},{source:"Old High German",target:"Provençal",value:33},{source:"Old High German",target:"Romance",value:146},{source:"Old High German",target:"Russian",value:23238},{source:"Old High German",target:"Sanskrit",value:16005},{source:"Old High German",target:"Scots",value:646},{source:"Old High German",target:"Semitic",value:8},{source:"Old High German",target:"Slavic",value:2587},{source:"Old High German",target:"Slovenian",value:27},{source:"Old High German",target:"Spanish",value:2853},{source:"Old High German",target:"Swedish",value:16251},{source:"Old High German",target:"Turkish",value:57},{source:"Old High German",target:"Twi",value:7},{source:"Old High German",target:"Welsh",value:4711},{source:"Old High German",target:"Yiddish",value:90},{source:"Old Irish",target:"Old Norse",value:12522},{source:"Old Irish",target:"Old Persian",value:2209},{source:"Old Irish",target:"Persian",value:2369},{source:"Old Irish",target:"Polish",value:133},{source:"Old Irish",target:"Portuguese",value:35},{source:"Old Irish",target:"Provençal",value:5},{source:"Old Irish",target:"Russian",value:19640},{source:"Old Irish",target:"Sanskrit",value:5543},{source:"Old Irish",target:"Slavic",value:900},{source:"Old Irish",target:"Spanish",value:65},{source:"Old Irish",target:"Swedish",value:2582},{source:"Old Irish",target:"Welsh",value:4027},{source:"Old Norse",target:"Old Persian",value:7771},{source:"Old Norse",target:"Old Provençal",value:14},{source:"Old Norse",target:"Ossetian",value:10},{source:"Old Norse",target:"Persian",value:7820},{source:"Old Norse",target:"Polish",value:573},{source:"Old Norse",target:"Portuguese",value:210},{source:"Old Norse",target:"Provençal",value:38},{source:"Old Norse",target:"Romance",value:88},{source:"Old Norse",target:"Russian",value:5296},{source:"Old Norse",target:"Sanskrit",value:17962},{source:"Old Norse",target:"Scots",value:645},{source:"Old Norse",target:"Slavic",value:2602},{source:"Old Norse",target:"Slovenian",value:27},{source:"Old Norse",target:"Spanish",value:2828},{source:"Old Norse",target:"Swedish",value:26941},{source:"Old Norse",target:"Turkish",value:57},{source:"Old Norse",target:"Welsh",value:4211},{source:"Old Norse",target:"Yiddish",value:139},{source:"Old Persian",target:"Persian",value:7915},{source:"Old Persian",target:"Polish",value:6},{source:"Old Persian",target:"Russian",value:87},{source:"Old Persian",target:"Sanskrit",value:7122},{source:"Old Persian",target:"Spanish",value:33},{source:"Old Persian",target:"Swedish",value:9},{source:"Old Persian",target:"Turkish",value:6},{source:"Old Persian",target:"Welsh",value:11},{source:"Old Provençal",target:"Portuguese",value:10},{source:"Old Provençal",target:"Provençal",value:214},{source:"Old Provençal",target:"Spanish",value:38},{source:"Ossetian",target:"Russian",value:10},{source:"Ossetian",target:"Sanskrit",value:10},{source:"Ossetian",target:"Swedish",value:10},{source:"Pali",target:"Spanish",value:77},{source:"Persian",target:"Polish",value:8},{source:"Persian",target:"Portuguese",value:8},{source:"Persian",target:"Provençal",value:5},{source:"Persian",target:"Russian",value:98},{source:"Persian",target:"Sanskrit",value:7489},{source:"Persian",target:"Semitic",value:1},{source:"Persian",target:"Spanish",value:48},{source:"Persian",target:"Swedish",value:78},{source:"Persian",target:"Turkish",value:20},{source:"Persian",target:"Welsh",value:169},{source:"Phoenician",target:"Semitic",value:2},{source:"Phoenician",target:"Spanish",value:1},{source:"Polish",target:"Portuguese",value:1},{source:"Polish",target:"Russian",value:625},{source:"Polish",target:"Sanskrit",value:106},{source:"Polish",target:"Slavic",value:548},{source:"Polish",target:"Spanish",value:192},{source:"Polish",target:"Swedish",value:26},{source:"Polish",target:"Turkish",value:6},{source:"Polish",target:"Welsh",value:24},{source:"Portuguese",target:"Provençal",value:51},{source:"Portuguese",target:"Romance",value:423},{source:"Portuguese",target:"Russian",value:195},{source:"Portuguese",target:"Sanskrit",value:2},{source:"Portuguese",target:"Slavic",value:423},{source:"Portuguese",target:"Spanish",value:1931},{source:"Portuguese",target:"Swedish",value:32},{source:"Portuguese",target:"Tai",value:2},{source:"Portuguese",target:"Tamil",value:2},{source:"Portuguese",target:"Telugu",value:2},{source:"Portuguese",target:"Turkish",value:8},{source:"Portuguese",target:"Welsh",value:16},{source:"Provençal",target:"Sanskrit",value:5},{source:"Provençal",target:"Spanish",value:427},{source:"Provençal",target:"Turkish",value:2},{source:"Provençal",target:"Welsh",value:5},{source:"Romance",target:"Russian",value:2},{source:"Romance",target:"Sanskrit",value:64},{source:"Romance",target:"Slavic",value:487},{source:"Romance",target:"Spanish",value:503},{source:"Romance",target:"Swedish",value:115},{source:"Romance",target:"Welsh",value:51},{source:"Romanian",target:"Russian",value:17},{source:"Romanian",target:"Spanish",value:17},{source:"Romanian",target:"Swedish",value:17},{source:"Russian",target:"Sanskrit",value:3344},{source:"Russian",target:"Semitic",value:1},{source:"Russian",target:"Slavic",value:831},{source:"Russian",target:"Spanish",value:428},{source:"Russian",target:"Swedish",value:143},{source:"Russian",target:"Turkish",value:15},{source:"Russian",target:"Welsh",value:724},{source:"Sanskrit",target:"Semitic",value:3},{source:"Sanskrit",target:"Slavic",value:1020},{source:"Sanskrit",target:"Spanish",value:252},{source:"Sanskrit",target:"Swedish",value:1345},{source:"Sanskrit",target:"Thai",value:1},{source:"Sanskrit",target:"Turkish",value:1},{source:"Sanskrit",target:"Twi",value:33},{source:"Sanskrit",target:"Welsh",value:2365},{source:"Scots",target:"Swedish",value:5},{source:"Semitic",target:"Spanish",value:12},{source:"Semitic",target:"Turkish",value:1},{source:"Slavic",target:"Spanish",value:573},{source:"Slavic",target:"Swedish",value:1520},{source:"Slavic",target:"Welsh",value:778},{source:"Spanish",target:"Swedish",value:633},{source:"Spanish",target:"Tai",value:2},{source:"Spanish",target:"Turkish",value:14},{source:"Spanish",target:"Welsh",value:227},{source:"Swedish",target:"Turkish",value:63},{source:"Swedish",target:"Welsh",value:2349},{source:"Swedish",target:"Yiddish",value:3},{source:"Tamil",target:"Telugu",value:2},{source:"Turkish",target:"Welsh",value:6}],Wh={nodes:zh,links:Vh};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ko="159",rn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jh=0,Ls=1,Xh=2,oc=1,qh=2,mn=3,Gn=0,Pt=1,yn=2,Mn=0,Cr=1,Os=2,Is=3,Ds=4,$h=5,$n=100,Yh=101,Kh=102,Ns=103,Fs=104,Zh=200,Jh=201,Qh=202,ed=203,So=204,Eo=205,td=206,nd=207,rd=208,id=209,ad=210,od=211,sd=212,ld=213,ud=214,cd=0,hd=1,dd=2,ta=3,fd=4,pd=5,gd=6,md=7,Zo=0,vd=1,_d=2,Fn=0,yd=1,xd=2,bd=3,Md=4,Sd=5,sc=300,Lr=301,Or=302,wo=303,To=304,pa=306,Ao=1e3,Yt=1001,Co=1002,At=1003,Us=1004,Ra=1005,Bt=1006,Ed=1007,ci=1008,Un=1009,wd=1010,Td=1011,Jo=1012,lc=1013,Dn=1014,Nn=1015,Ir=1016,uc=1017,cc=1018,Kn=1020,Ad=1021,Kt=1023,Cd=1024,Pd=1025,Zn=1026,Dr=1027,Rd=1028,hc=1029,Ld=1030,dc=1031,fc=1033,La=33776,Oa=33777,Ia=33778,Da=33779,Gs=35840,ks=35841,Bs=35842,Hs=35843,pc=36196,zs=37492,Vs=37496,Ws=37808,js=37809,Xs=37810,qs=37811,$s=37812,Ys=37813,Ks=37814,Zs=37815,Js=37816,Qs=37817,el=37818,tl=37819,nl=37820,rl=37821,Na=36492,il=36494,al=36495,Od=36283,ol=36284,sl=36285,ll=36286,gc=3e3,Jn=3001,Id=3200,Dd=3201,mc=0,Nd=1,zt="",gt="srgb",En="srgb-linear",Qo="display-p3",ga="display-p3-linear",na="linear",Qe="srgb",ra="rec709",ia="p3",rr=7680,ul=519,Fd=512,Ud=513,Gd=514,vc=515,kd=516,Bd=517,Hd=518,zd=519,cl=35044,hl="300 es",Po=1035,xn=2e3,aa=2001;class tn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const a=i.indexOf(t);a!==-1&&i.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const i=r.slice(0);for(let a=0,s=i.length;a<s;a++)i[a].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dl=1234567;const ii=Math.PI/180,hi=180/Math.PI;function Ur(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(xt[n&255]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function es(n,e){return(n%e+e)%e}function Vd(n,e,t,r,i){return r+(n-e)*(i-r)/(t-e)}function Wd(n,e,t){return n!==e?(t-n)/(e-n):0}function ai(n,e,t){return(1-t)*n+t*e}function jd(n,e,t,r){return ai(n,e,1-Math.exp(-t*r))}function Xd(n,e=1){return e-Math.abs(es(n,e*2)-e)}function qd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function $d(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Yd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Kd(n,e){return n+Math.random()*(e-n)}function Zd(n){return n*(.5-Math.random())}function Jd(n){n!==void 0&&(dl=n);let e=dl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Qd(n){return n*ii}function ef(n){return n*hi}function Ro(n){return(n&n-1)===0&&n!==0}function tf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function oa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function nf(n,e,t,r,i){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),u=a((e+r)/2),c=s((e+r)/2),h=a((e-r)/2),f=s((e-r)/2),p=a((r-e)/2),m=s((r-e)/2);switch(i){case"XYX":n.set(o*c,l*h,l*f,o*u);break;case"YZY":n.set(l*f,o*c,l*h,o*u);break;case"ZXZ":n.set(l*h,l*f,o*c,o*u);break;case"XZX":n.set(o*c,l*m,l*p,o*u);break;case"YXY":n.set(l*p,o*c,l*m,o*u);break;case"ZYZ":n.set(l*m,l*p,o*c,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function wt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Lo={DEG2RAD:ii,RAD2DEG:hi,generateUUID:Ur,clamp:mt,euclideanModulo:es,mapLinear:Vd,inverseLerp:Wd,lerp:ai,damp:jd,pingpong:Xd,smoothstep:qd,smootherstep:$d,randInt:Yd,randFloat:Kd,randFloatSpread:Zd,seededRandom:Jd,degToRad:Qd,radToDeg:ef,isPowerOfTwo:Ro,ceilPowerOfTwo:tf,floorPowerOfTwo:oa,setQuaternionFromProperEuler:nf,normalize:wt,denormalize:Mr};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6],this.y=i[1]*t+i[4]*r+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*r-s*i+e.x,this.y=a*i+s*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,r,i,a,s,o,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,i,a,s,o,l,u)}set(e,t,r,i,a,s,o,l,u){const c=this.elements;return c[0]=e,c[1]=i,c[2]=o,c[3]=t,c[4]=a,c[5]=l,c[6]=r,c[7]=s,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,a=this.elements,s=r[0],o=r[3],l=r[6],u=r[1],c=r[4],h=r[7],f=r[2],p=r[5],m=r[8],v=i[0],g=i[3],d=i[6],M=i[1],_=i[4],x=i[7],y=i[2],S=i[5],w=i[8];return a[0]=s*v+o*M+l*y,a[3]=s*g+o*_+l*S,a[6]=s*d+o*x+l*w,a[1]=u*v+c*M+h*y,a[4]=u*g+c*_+h*S,a[7]=u*d+c*x+h*w,a[2]=f*v+p*M+m*y,a[5]=f*g+p*_+m*S,a[8]=f*d+p*x+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return t*s*c-t*o*u-r*a*c+r*o*l+i*a*u-i*s*l}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=c*s-o*u,f=o*l-c*a,p=u*a-s*l,m=t*h+r*f+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(i*u-c*r)*v,e[2]=(o*r-i*s)*v,e[3]=f*v,e[4]=(c*t-i*l)*v,e[5]=(i*a-o*t)*v,e[6]=p*v,e[7]=(r*l-u*t)*v,e[8]=(s*t-r*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,i,a,s,o){const l=Math.cos(a),u=Math.sin(a);return this.set(r*l,r*u,-r*(l*s+u*o)+s+e,-i*u,i*l,-i*(-u*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fa.makeScale(e,t)),this}rotate(e){return this.premultiply(Fa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<9;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fa=new We;function _c(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function di(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rf(){const n=di("canvas");return n.style.display="block",n}const fl={};function oi(n){n in fl||(fl[n]=!0,console.warn(n))}const pl=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gl=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xi={[En]:{transfer:na,primaries:ra,toReference:n=>n,fromReference:n=>n},[gt]:{transfer:Qe,primaries:ra,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ga]:{transfer:na,primaries:ia,toReference:n=>n.applyMatrix3(gl),fromReference:n=>n.applyMatrix3(pl)},[Qo]:{transfer:Qe,primaries:ia,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gl),fromReference:n=>n.applyMatrix3(pl).convertLinearToSRGB()}},af=new Set([En,ga]),Ye={enabled:!0,_workingColorSpace:En,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!af.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const r=xi[e].toReference,i=xi[t].fromReference;return i(r(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return xi[n].primaries},getTransfer:function(n){return n===zt?na:xi[n].transfer}};function Pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ua(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ir;class yc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ir===void 0&&(ir=di("canvas")),ir.width=e.width,ir.height=e.height;const r=ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=ir}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=di("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const i=r.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=Pr(a[s]/255)*255;return r.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Pr(t[r]/255)*255):t[r]=Pr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let of=0;class xc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:of++}),this.uuid=Ur(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(Ga(i[s].image)):a.push(Ga(i[s]))}else a=Ga(i);r.url=a}return t||(e.images[this.uuid]=r),r}}function Ga(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?yc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sf=0;class Lt extends tn{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,r=Yt,i=Yt,a=Bt,s=ci,o=Kt,l=Un,u=Lt.DEFAULT_ANISOTROPY,c=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Ur(),this.name="",this.source=new xc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===Jn?gt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ao:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ao:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?Jn:gc}set encoding(e){oi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?gt:zt}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=sc;Lt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,r=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,i){return this.x=e,this.y=t,this.z=r,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*r+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*r+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*r+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*r+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,i,a;const l=e.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],m=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+v)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,x=(p+1)/2,y=(d+1)/2,S=(c+f)/4,w=(h+v)/4,L=(m+g)/4;return _>x&&_>y?_<.01?(r=0,i=.707106781,a=.707106781):(r=Math.sqrt(_),i=S/r,a=w/r):x>y?x<.01?(r=.707106781,i=0,a=.707106781):(i=Math.sqrt(x),r=S/i,a=L/i):y<.01?(r=.707106781,i=.707106781,a=0):(a=Math.sqrt(y),r=w/a,i=L/a),this.set(r,i,a,t),this}let M=Math.sqrt((g-m)*(g-m)+(h-v)*(h-v)+(f-c)*(f-c));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(h-v)/M,this.z=(f-c)/M,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends tn{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const i={width:e,height:t,depth:1};r.encoding!==void 0&&(oi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),r.colorSpace=r.encoding===Jn?gt:zt),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},r),this.texture=new Lt(i,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=r.generateMipmaps,this.texture.internalFormat=r.internalFormat,this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}setSize(e,t,r=1){(this.width!==e||this.height!==t||this.depth!==r)&&(this.width=e,this.height=t,this.depth=r,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=r,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends lf{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class bc extends Lt{constructor(e=null,t=1,r=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uf extends Lt{constructor(e=null,t=1,r=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class en{constructor(e=0,t=0,r=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=i}static slerpFlat(e,t,r,i,a,s,o){let l=r[i+0],u=r[i+1],c=r[i+2],h=r[i+3];const f=a[s+0],p=a[s+1],m=a[s+2],v=a[s+3];if(o===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=m,e[t+3]=v;return}if(h!==v||l!==f||u!==p||c!==m){let g=1-o;const d=l*f+u*p+c*m+h*v,M=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const y=Math.sqrt(_),S=Math.atan2(y,d*M);g=Math.sin(g*S)/y,o=Math.sin(o*S)/y}const x=o*M;if(l=l*g+f*x,u=u*g+p*x,c=c*g+m*x,h=h*g+v*x,g===1-o){const y=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=y,u*=y,c*=y,h*=y}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=h}static multiplyQuaternionsFlat(e,t,r,i,a,s){const o=r[i],l=r[i+1],u=r[i+2],c=r[i+3],h=a[s],f=a[s+1],p=a[s+2],m=a[s+3];return e[t]=o*m+c*h+l*p-u*f,e[t+1]=l*m+c*f+u*h-o*p,e[t+2]=u*m+c*p+o*f-l*h,e[t+3]=c*m-o*h-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,i){return this._x=e,this._y=t,this._z=r,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const r=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,u=o(r/2),c=o(i/2),h=o(a/2),f=l(r/2),p=l(i/2),m=l(a/2);switch(s){case"XYZ":this._x=f*c*h+u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h-f*p*m;break;case"YXZ":this._x=f*c*h+u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h+f*p*m;break;case"ZXY":this._x=f*c*h-u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h-f*p*m;break;case"ZYX":this._x=f*c*h-u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h+f*p*m;break;case"YZX":this._x=f*c*h+u*p*m,this._y=u*p*h+f*c*m,this._z=u*c*m-f*p*h,this._w=u*c*h-f*p*m;break;case"XZY":this._x=f*c*h-u*p*m,this._y=u*p*h-f*c*m,this._z=u*c*m+f*p*h,this._w=u*c*h+f*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,i=Math.sin(r);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],i=t[4],a=t[8],s=t[1],o=t[5],l=t[9],u=t[2],c=t[6],h=t[10],f=r+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(a-u)*p,this._z=(s-i)*p}else if(r>o&&r>h){const p=2*Math.sqrt(1+r-o-h);this._w=(c-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(a+u)/p}else if(o>h){const p=2*Math.sqrt(1+o-r-h);this._w=(a-u)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-r-o);this._w=(s-i)/p,this._x=(a+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const i=Math.min(1,t/r);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,i=e._y,a=e._z,s=e._w,o=t._x,l=t._y,u=t._z,c=t._w;return this._x=r*c+s*o+i*u-a*l,this._y=i*c+s*l+a*o-r*u,this._z=a*c+s*u+r*l-i*o,this._w=s*c-r*o-i*l-a*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+r*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=r,this._y=i,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*r+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,o),h=Math.sin((1-t)*c)/u,f=Math.sin(t*c)/u;return this._w=s*h+this._w*f,this._x=r*h+this._x*f,this._y=i*h+this._y*f,this._z=a*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=Math.random(),t=Math.sqrt(1-e),r=Math.sqrt(e),i=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(i),r*Math.sin(a),r*Math.cos(a),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,r=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ml.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ml.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*i,this.y=a[1]*t+a[4]*r+a[7]*i,this.z=a[2]*t+a[5]*r+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*r+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*r+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*r+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,r=this.y,i=this.z,a=e.x,s=e.y,o=e.z,l=e.w,u=2*(s*i-o*r),c=2*(o*t-a*i),h=2*(a*r-s*t);return this.x=t+l*u+s*h-o*c,this.y=r+l*c+o*u-a*h,this.z=i+l*h+a*c-s*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*i,this.y=a[1]*t+a[5]*r+a[9]*i,this.z=a[2]*t+a[6]*r+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(t,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,i=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=i*l-a*o,this.y=a*s-r*l,this.z=r*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return ka.copy(this).projectOnVector(e),this.sub(ka)}reflect(e){return this.sub(ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,i=this.z-e.z;return t*t+r*r+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const i=Math.sin(t)*e;return this.x=i*Math.sin(r),this.y=Math.cos(t)*e,this.z=i*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,r=Math.sqrt(1-e**2);return this.x=r*Math.cos(t),this.y=r*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ka=new O,ml=new en;class tr{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Vt):Vt.fromBufferAttribute(a,s),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bi.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),bi.copy(r.boundingBox)),bi.applyMatrix4(e.matrixWorld),this.union(bi)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zr),Mi.subVectors(this.max,zr),ar.subVectors(e.a,zr),or.subVectors(e.b,zr),sr.subVectors(e.c,zr),An.subVectors(or,ar),Cn.subVectors(sr,or),Vn.subVectors(ar,sr);let t=[0,-An.z,An.y,0,-Cn.z,Cn.y,0,-Vn.z,Vn.y,An.z,0,-An.x,Cn.z,0,-Cn.x,Vn.z,0,-Vn.x,-An.y,An.x,0,-Cn.y,Cn.x,0,-Vn.y,Vn.x,0];return!Ba(t,ar,or,sr,Mi)||(t=[1,0,0,0,1,0,0,0,1],!Ba(t,ar,or,sr,Mi))?!1:(Si.crossVectors(An,Cn),t=[Si.x,Si.y,Si.z],Ba(t,ar,or,sr,Mi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const un=[new O,new O,new O,new O,new O,new O,new O,new O],Vt=new O,bi=new tr,ar=new O,or=new O,sr=new O,An=new O,Cn=new O,Vn=new O,zr=new O,Mi=new O,Si=new O,Wn=new O;function Ba(n,e,t,r,i){for(let a=0,s=n.length-3;a<=s;a+=3){Wn.fromArray(n,a);const o=i.x*Math.abs(Wn.x)+i.y*Math.abs(Wn.y)+i.z*Math.abs(Wn.z),l=e.dot(Wn),u=t.dot(Wn),c=r.dot(Wn);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const cf=new tr,Vr=new O,Ha=new O;class ma{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):cf.setFromPoints(e).getCenter(r);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),i=(r-this.radius)*.5;this.center.addScaledVector(Vr,i/r),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(Ha)),this.expandByPoint(Vr.copy(e.center).sub(Ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const cn=new O,za=new O,Ei=new O,Pn=new O,Va=new O,wi=new O,Wa=new O;class va{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cn.copy(this.origin).addScaledVector(this.direction,t),cn.distanceToSquared(e))}distanceSqToSegment(e,t,r,i){za.copy(e).add(t).multiplyScalar(.5),Ei.copy(t).sub(e).normalize(),Pn.copy(this.origin).sub(za);const a=e.distanceTo(t)*.5,s=-this.direction.dot(Ei),o=Pn.dot(this.direction),l=-Pn.dot(Ei),u=Pn.lengthSq(),c=Math.abs(1-s*s);let h,f,p,m;if(c>0)if(h=s*l-o,f=s*o-l,m=a*c,h>=0)if(f>=-m)if(f<=m){const v=1/c;h*=v,f*=v,p=h*(h+s*f+2*o)+f*(s*h+f+2*l)+u}else f=a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+u;else f=-a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+u;else f<=-m?(h=Math.max(0,-(-s*a+o)),f=h>0?-a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+u):f<=m?(h=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+u):(h=Math.max(0,-(s*a+o)),f=h>0?a:Math.min(Math.max(-a,-l),a),p=-h*h+f*(f+2*l)+u);else f=s>0?-a:a,h=Math.max(0,-(s*f+o)),p=-h*h+f*(f+2*l)+u;return r&&r.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(za).addScaledVector(Ei,f),p}intersectSphere(e,t){cn.subVectors(e.center,this.origin);const r=cn.dot(this.direction),i=cn.dot(cn)-r*r,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=r-s,l=r+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,i,a,s,o,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(r=(e.min.x-f.x)*u,i=(e.max.x-f.x)*u):(r=(e.max.x-f.x)*u,i=(e.min.x-f.x)*u),c>=0?(a=(e.min.y-f.y)*c,s=(e.max.y-f.y)*c):(a=(e.max.y-f.y)*c,s=(e.min.y-f.y)*c),r>s||a>i||((a>r||isNaN(r))&&(r=a),(s<i||isNaN(i))&&(i=s),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),r>l||o>i)||((o>r||r!==r)&&(r=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(r>=0?r:i,t)}intersectsBox(e){return this.intersectBox(e,cn)!==null}intersectTriangle(e,t,r,i,a){Va.subVectors(t,e),wi.subVectors(r,e),Wa.crossVectors(Va,wi);let s=this.direction.dot(Wa),o;if(s>0){if(i)return null;o=1}else if(s<0)o=-1,s=-s;else return null;Pn.subVectors(this.origin,e);const l=o*this.direction.dot(wi.crossVectors(Pn,wi));if(l<0)return null;const u=o*this.direction.dot(Va.cross(Pn));if(u<0||l+u>s)return null;const c=-o*Pn.dot(Wa);return c<0?null:this.at(c/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,r,i,a,s,o,l,u,c,h,f,p,m,v,g){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,i,a,s,o,l,u,c,h,f,p,m,v,g)}set(e,t,r,i,a,s,o,l,u,c,h,f,p,m,v,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=r,d[12]=i,d[1]=a,d[5]=s,d[9]=o,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=m,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,i=1/lr.setFromMatrixColumn(e,0).length(),a=1/lr.setFromMatrixColumn(e,1).length(),s=1/lr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*i,t[1]=r[1]*i,t[2]=r[2]*i,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*s,t[9]=r[9]*s,t[10]=r[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,i=e.y,a=e.z,s=Math.cos(r),o=Math.sin(r),l=Math.cos(i),u=Math.sin(i),c=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const f=s*c,p=s*h,m=o*c,v=o*h;t[0]=l*c,t[4]=-l*h,t[8]=u,t[1]=p+m*u,t[5]=f-v*u,t[9]=-o*l,t[2]=v-f*u,t[6]=m+p*u,t[10]=s*l}else if(e.order==="YXZ"){const f=l*c,p=l*h,m=u*c,v=u*h;t[0]=f+v*o,t[4]=m*o-p,t[8]=s*u,t[1]=s*h,t[5]=s*c,t[9]=-o,t[2]=p*o-m,t[6]=v+f*o,t[10]=s*l}else if(e.order==="ZXY"){const f=l*c,p=l*h,m=u*c,v=u*h;t[0]=f-v*o,t[4]=-s*h,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*c,t[9]=v-f*o,t[2]=-s*u,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const f=s*c,p=s*h,m=o*c,v=o*h;t[0]=l*c,t[4]=m*u-p,t[8]=f*u+v,t[1]=l*h,t[5]=v*u+f,t[9]=p*u-m,t[2]=-u,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,p=s*u,m=o*l,v=o*u;t[0]=l*c,t[4]=v-f*h,t[8]=m*h+p,t[1]=h,t[5]=s*c,t[9]=-o*c,t[2]=-u*c,t[6]=p*h+m,t[10]=f-v*h}else if(e.order==="XZY"){const f=s*l,p=s*u,m=o*l,v=o*u;t[0]=l*c,t[4]=-h,t[8]=u*c,t[1]=f*h+v,t[5]=s*c,t[9]=p*h-m,t[2]=m*h-p,t[6]=o*c,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hf,e,df)}lookAt(e,t,r){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Rn.crossVectors(r,Dt),Rn.lengthSq()===0&&(Math.abs(r.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Rn.crossVectors(r,Dt)),Rn.normalize(),Ti.crossVectors(Dt,Rn),i[0]=Rn.x,i[4]=Ti.x,i[8]=Dt.x,i[1]=Rn.y,i[5]=Ti.y,i[9]=Dt.y,i[2]=Rn.z,i[6]=Ti.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,i=t.elements,a=this.elements,s=r[0],o=r[4],l=r[8],u=r[12],c=r[1],h=r[5],f=r[9],p=r[13],m=r[2],v=r[6],g=r[10],d=r[14],M=r[3],_=r[7],x=r[11],y=r[15],S=i[0],w=i[4],L=i[8],b=i[12],A=i[1],k=i[5],U=i[9],J=i[13],C=i[2],R=i[6],N=i[10],j=i[14],ie=i[3],te=i[7],G=i[11],Y=i[15];return a[0]=s*S+o*A+l*C+u*ie,a[4]=s*w+o*k+l*R+u*te,a[8]=s*L+o*U+l*N+u*G,a[12]=s*b+o*J+l*j+u*Y,a[1]=c*S+h*A+f*C+p*ie,a[5]=c*w+h*k+f*R+p*te,a[9]=c*L+h*U+f*N+p*G,a[13]=c*b+h*J+f*j+p*Y,a[2]=m*S+v*A+g*C+d*ie,a[6]=m*w+v*k+g*R+d*te,a[10]=m*L+v*U+g*N+d*G,a[14]=m*b+v*J+g*j+d*Y,a[3]=M*S+_*A+x*C+y*ie,a[7]=M*w+_*k+x*R+y*te,a[11]=M*L+_*U+x*N+y*G,a[15]=M*b+_*J+x*j+y*Y,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],i=e[8],a=e[12],s=e[1],o=e[5],l=e[9],u=e[13],c=e[2],h=e[6],f=e[10],p=e[14],m=e[3],v=e[7],g=e[11],d=e[15];return m*(+a*l*h-i*u*h-a*o*f+r*u*f+i*o*p-r*l*p)+v*(+t*l*p-t*u*f+a*s*f-i*s*p+i*u*c-a*l*c)+g*(+t*u*h-t*o*p-a*s*h+r*s*p+a*o*c-r*u*c)+d*(-i*o*c-t*l*h+t*o*f+i*s*h-r*s*f+r*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],i=e[2],a=e[3],s=e[4],o=e[5],l=e[6],u=e[7],c=e[8],h=e[9],f=e[10],p=e[11],m=e[12],v=e[13],g=e[14],d=e[15],M=h*g*u-v*f*u+v*l*p-o*g*p-h*l*d+o*f*d,_=m*f*u-c*g*u-m*l*p+s*g*p+c*l*d-s*f*d,x=c*v*u-m*h*u+m*o*p-s*v*p-c*o*d+s*h*d,y=m*h*l-c*v*l-m*o*f+s*v*f+c*o*g-s*h*g,S=t*M+r*_+i*x+a*y;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/S;return e[0]=M*w,e[1]=(v*f*a-h*g*a-v*i*p+r*g*p+h*i*d-r*f*d)*w,e[2]=(o*g*a-v*l*a+v*i*u-r*g*u-o*i*d+r*l*d)*w,e[3]=(h*l*a-o*f*a-h*i*u+r*f*u+o*i*p-r*l*p)*w,e[4]=_*w,e[5]=(c*g*a-m*f*a+m*i*p-t*g*p-c*i*d+t*f*d)*w,e[6]=(m*l*a-s*g*a-m*i*u+t*g*u+s*i*d-t*l*d)*w,e[7]=(s*f*a-c*l*a+c*i*u-t*f*u-s*i*p+t*l*p)*w,e[8]=x*w,e[9]=(m*h*a-c*v*a-m*r*p+t*v*p+c*r*d-t*h*d)*w,e[10]=(s*v*a-m*o*a+m*r*u-t*v*u-s*r*d+t*o*d)*w,e[11]=(c*o*a-s*h*a-c*r*u+t*h*u+s*r*p-t*o*p)*w,e[12]=y*w,e[13]=(c*v*i-m*h*i+m*r*f-t*v*f-c*r*g+t*h*g)*w,e[14]=(m*o*i-s*v*i-m*r*l+t*v*l+s*r*g-t*o*g)*w,e[15]=(s*h*i-c*o*i+c*r*l-t*h*l-s*r*f+t*o*f)*w,this}scale(e){const t=this.elements,r=e.x,i=e.y,a=e.z;return t[0]*=r,t[4]*=i,t[8]*=a,t[1]*=r,t[5]*=i,t[9]*=a,t[2]*=r,t[6]*=i,t[10]*=a,t[3]*=r,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,i))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),i=Math.sin(t),a=1-r,s=e.x,o=e.y,l=e.z,u=a*s,c=a*o;return this.set(u*s+r,u*o-i*l,u*l+i*o,0,u*o+i*l,c*o+r,c*l-i*s,0,u*l-i*o,c*l+i*s,a*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,i,a,s){return this.set(1,r,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,r){const i=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,u=a+a,c=s+s,h=o+o,f=a*u,p=a*c,m=a*h,v=s*c,g=s*h,d=o*h,M=l*u,_=l*c,x=l*h,y=r.x,S=r.y,w=r.z;return i[0]=(1-(v+d))*y,i[1]=(p+x)*y,i[2]=(m-_)*y,i[3]=0,i[4]=(p-x)*S,i[5]=(1-(f+d))*S,i[6]=(g+M)*S,i[7]=0,i[8]=(m+_)*w,i[9]=(g-M)*w,i[10]=(1-(f+v))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,r){const i=this.elements;let a=lr.set(i[0],i[1],i[2]).length();const s=lr.set(i[4],i[5],i[6]).length(),o=lr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const u=1/a,c=1/s,h=1/o;return Wt.elements[0]*=u,Wt.elements[1]*=u,Wt.elements[2]*=u,Wt.elements[4]*=c,Wt.elements[5]*=c,Wt.elements[6]*=c,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),r.x=a,r.y=s,r.z=o,this}makePerspective(e,t,r,i,a,s,o=xn){const l=this.elements,u=2*a/(t-e),c=2*a/(r-i),h=(t+e)/(t-e),f=(r+i)/(r-i);let p,m;if(o===xn)p=-(s+a)/(s-a),m=-2*s*a/(s-a);else if(o===aa)p=-s/(s-a),m=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,r,i,a,s,o=xn){const l=this.elements,u=1/(t-e),c=1/(r-i),h=1/(s-a),f=(t+e)*u,p=(r+i)*c;let m,v;if(o===xn)m=(s+a)*h,v=-2*h;else if(o===aa)m=a*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let i=0;i<16;i++)if(t[i]!==r[i])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const lr=new O,Wt=new et,hf=new O(0,0,0),df=new O(1,1,1),Rn=new O,Ti=new O,Dt=new O,vl=new et,_l=new en;class _a{constructor(e=0,t=0,r=0,i=_a.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,i=this._order){return this._x=e,this._y=t,this._z=r,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],l=i[1],u=i[5],c=i[9],h=i[2],f=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,u));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return vl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vl,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _l.setFromEuler(this),this.setFromQuaternion(_l,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_a.DEFAULT_ORDER="XYZ";class ts{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ff=0;const yl=new O,ur=new en,hn=new et,Ai=new O,Wr=new O,pf=new O,gf=new en,xl=new O(1,0,0),bl=new O(0,1,0),Ml=new O(0,0,1),mf={type:"added"},vf={type:"removed"};class _t extends tn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Ur(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new O,t=new _a,r=new en,i=new O(1,1,1);function a(){r.setFromEuler(t,!1)}function s(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new et},normalMatrix:{value:new We}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ts,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.multiply(ur),this}rotateOnWorldAxis(e,t){return ur.setFromAxisAngle(e,t),this.quaternion.premultiply(ur),this}rotateX(e){return this.rotateOnAxis(xl,e)}rotateY(e){return this.rotateOnAxis(bl,e)}rotateZ(e){return this.rotateOnAxis(Ml,e)}translateOnAxis(e,t){return yl.copy(e).applyQuaternion(this.quaternion),this.position.add(yl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xl,e)}translateY(e){return this.translateOnAxis(bl,e)}translateZ(e){return this.translateOnAxis(Ml,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hn.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ai.copy(e):Ai.set(e,t,r);const i=this.parent;this.updateWorldMatrix(!0,!1),Wr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hn.lookAt(Wr,Ai,this.up):hn.lookAt(Ai,Wr,this.up),this.quaternion.setFromRotationMatrix(hn),i&&(hn.extractRotation(i.matrixWorld),ur.setFromRotationMatrix(hn),this.quaternion.premultiply(ur.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vf)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hn.multiply(e.parent.matrixWorld)),e.applyMatrix4(hn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,i=this.children.length;r<i;r++){const s=this.children[r].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,e,pf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wr,gf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,i=t.length;r<i;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,i=t.length;r<i;r++){const a=t[r];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(a(e.materials,this.material[l]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),u=s(e.textures),c=s(e.images),h=s(e.shapes),f=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),c.length>0&&(r.images=c),h.length>0&&(r.shapes=h),f.length>0&&(r.skeletons=f),p.length>0&&(r.animations=p),m.length>0&&(r.nodes=m)}return r.object=i,r;function s(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const i=e.children[r];this.add(i.clone())}return this}}_t.DEFAULT_UP=new O(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new O,dn=new O,ja=new O,fn=new O,cr=new O,hr=new O,Sl=new O,Xa=new O,qa=new O,$a=new O;let Ci=!1;class $t{constructor(e=new O,t=new O,r=new O){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,i){i.subVectors(r,t),jt.subVectors(e,t),i.cross(jt);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,r,i,a){jt.subVectors(i,t),dn.subVectors(r,t),ja.subVectors(e,t);const s=jt.dot(jt),o=jt.dot(dn),l=jt.dot(ja),u=dn.dot(dn),c=dn.dot(ja),h=s*u-o*o;if(h===0)return a.set(-2,-1,-1);const f=1/h,p=(u*l-o*c)*f,m=(s*c-o*l)*f;return a.set(1-p-m,m,p)}static containsPoint(e,t,r,i){return this.getBarycoord(e,t,r,i,fn),fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getUV(e,t,r,i,a,s,o,l){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),this.getInterpolation(e,t,r,i,a,s,o,l)}static getInterpolation(e,t,r,i,a,s,o,l){return this.getBarycoord(e,t,r,i,fn),l.setScalar(0),l.addScaledVector(a,fn.x),l.addScaledVector(s,fn.y),l.addScaledVector(o,fn.z),l}static isFrontFacing(e,t,r,i){return jt.subVectors(r,t),dn.subVectors(e,t),jt.cross(dn).dot(i)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,i){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,r,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),jt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return $t.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,r,i,a){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),$t.getInterpolation(e,this.a,this.b,this.c,t,r,i,a)}getInterpolation(e,t,r,i,a){return $t.getInterpolation(e,this.a,this.b,this.c,t,r,i,a)}containsPoint(e){return $t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,i=this.b,a=this.c;let s,o;cr.subVectors(i,r),hr.subVectors(a,r),Xa.subVectors(e,r);const l=cr.dot(Xa),u=hr.dot(Xa);if(l<=0&&u<=0)return t.copy(r);qa.subVectors(e,i);const c=cr.dot(qa),h=hr.dot(qa);if(c>=0&&h<=c)return t.copy(i);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return s=l/(l-c),t.copy(r).addScaledVector(cr,s);$a.subVectors(e,a);const p=cr.dot($a),m=hr.dot($a);if(m>=0&&p<=m)return t.copy(a);const v=p*u-l*m;if(v<=0&&u>=0&&m<=0)return o=u/(u-m),t.copy(r).addScaledVector(hr,o);const g=c*m-p*h;if(g<=0&&h-c>=0&&p-m>=0)return Sl.subVectors(a,i),o=(h-c)/(h-c+(p-m)),t.copy(i).addScaledVector(Sl,o);const d=1/(g+v+f);return s=v*d,o=f*d,t.copy(r).addScaledVector(cr,s).addScaledVector(hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ln={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Ya(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,t),this}setRGB(e,t,r,i=Ye.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ye.toWorkingColorSpace(this,i),this}setHSL(e,t,r,i=Ye.workingColorSpace){if(e=es(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,s=2*r-a;this.r=Ya(s,a,e+1/3),this.g=Ya(s,a,e),this.b=Ya(s,a,e-1/3)}return Ye.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function r(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){const r=Mc[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return Ye.fromWorkingColorSpace(bt.copy(this),e),Math.round(mt(bt.r*255,0,255))*65536+Math.round(mt(bt.g*255,0,255))*256+Math.round(mt(bt.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ye.workingColorSpace){Ye.fromWorkingColorSpace(bt.copy(this),t);const r=bt.r,i=bt.g,a=bt.b,s=Math.max(r,i,a),o=Math.min(r,i,a);let l,u;const c=(o+s)/2;if(o===s)l=0,u=0;else{const h=s-o;switch(u=c<=.5?h/(s+o):h/(2-s-o),s){case r:l=(i-a)/h+(i<a?6:0);break;case i:l=(a-r)/h+2;break;case a:l=(r-i)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=gt){Ye.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,r=bt.g,i=bt.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(i*255)})`}offsetHSL(e,t,r){return this.getHSL(Ln),this.setHSL(Ln.h+e,Ln.s+t,Ln.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ln),e.getHSL(Pi);const r=ai(Ln.h,Pi.h,t),i=ai(Ln.s,Pi.s,t),a=ai(Ln.l,Pi.l,t);return this.setHSL(r,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*i,this.g=a[1]*t+a[4]*r+a[7]*i,this.b=a[2]*t+a[5]*r+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Xe;Xe.NAMES=Mc;let _f=0;class Gr extends tn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=Ur(),this.name="",this.type="Material",this.blending=Cr,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=So,this.blendDst=Eo,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(r):i&&i.isVector3&&r&&r.isVector3?i.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Cr&&(r.blending=this.blending),this.side!==Gn&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==So&&(r.blendSrc=this.blendSrc),this.blendDst!==Eo&&(r.blendDst=this.blendDst),this.blendEquation!==$n&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ta&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ul&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function i(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=i(e.textures),s=i(e.images);a.length>0&&(r.textures=a),s.length>0&&(r.images=s)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const i=t.length;r=new Array(i);for(let a=0;a!==i;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ns extends Gr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new O,Ri=new me;class Qt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn('THREE.BufferAttribute: "updateRange" is deprecated and removed in r169. Use "addUpdateRange()" instead.'),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[r+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ri.fromBufferAttribute(this,t),Ri.applyMatrix3(e),this.setXY(t,Ri.x,Ri.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Mr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=wt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mr(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mr(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mr(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this}setXYZW(e,t,r,i,a){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),r=wt(r,this.array),i=wt(i,this.array),a=wt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cl&&(e.usage=this.usage),e}}class Sc extends Qt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Ec extends Qt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ut extends Qt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let yf=0;const kt=new et,Ka=new _t,dr=new O,Nt=new tr,jr=new tr,pt=new O;class Ut extends tn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Ur(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_c(e)?Ec:Sc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new We().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,r){return kt.makeTranslation(e,t,r),this.applyMatrix4(kt),this}scale(e,t,r){return kt.makeScale(e,t,r),this.applyMatrix4(kt),this}lookAt(e){return Ka.lookAt(e),Ka.updateMatrix(),this.applyMatrix4(Ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dr).negate(),this.translate(dr.x,dr.y,dr.z),this}setFromPoints(e){const t=[];for(let r=0,i=e.length;r<i;r++){const a=e[r];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ut(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,i=t.length;r<i;r++){const a=t[r];Nt.setFromBufferAttribute(a),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const r=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];jr.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Nt.min,jr.min),Nt.expandByPoint(pt),pt.addVectors(Nt.max,jr.max),Nt.expandByPoint(pt)):(Nt.expandByPoint(jr.min),Nt.expandByPoint(jr.max))}Nt.getCenter(r);let i=0;for(let a=0,s=e.count;a<s;a++)pt.fromBufferAttribute(e,a),i=Math.max(i,r.distanceToSquared(pt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)pt.fromBufferAttribute(o,u),l&&(dr.fromBufferAttribute(e,u),pt.add(dr)),i=Math.max(i,r.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=e.array,i=t.position.array,a=t.normal.array,s=t.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<o;A++)u[A]=new O,c[A]=new O;const h=new O,f=new O,p=new O,m=new me,v=new me,g=new me,d=new O,M=new O;function _(A,k,U){h.fromArray(i,A*3),f.fromArray(i,k*3),p.fromArray(i,U*3),m.fromArray(s,A*2),v.fromArray(s,k*2),g.fromArray(s,U*2),f.sub(h),p.sub(h),v.sub(m),g.sub(m);const J=1/(v.x*g.y-g.x*v.y);isFinite(J)&&(d.copy(f).multiplyScalar(g.y).addScaledVector(p,-v.y).multiplyScalar(J),M.copy(p).multiplyScalar(v.x).addScaledVector(f,-g.x).multiplyScalar(J),u[A].add(d),u[k].add(d),u[U].add(d),c[A].add(M),c[k].add(M),c[U].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:r.length}]);for(let A=0,k=x.length;A<k;++A){const U=x[A],J=U.start,C=U.count;for(let R=J,N=J+C;R<N;R+=3)_(r[R+0],r[R+1],r[R+2])}const y=new O,S=new O,w=new O,L=new O;function b(A){w.fromArray(a,A*3),L.copy(w);const k=u[A];y.copy(k),y.sub(w.multiplyScalar(w.dot(k))).normalize(),S.crossVectors(L,k);const J=S.dot(c[A])<0?-1:1;l[A*4]=y.x,l[A*4+1]=y.y,l[A*4+2]=y.z,l[A*4+3]=J}for(let A=0,k=x.length;A<k;++A){const U=x[A],J=U.start,C=U.count;for(let R=J,N=J+C;R<N;R+=3)b(r[R+0]),b(r[R+1]),b(r[R+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Qt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let f=0,p=r.count;f<p;f++)r.setXYZ(f,0,0,0);const i=new O,a=new O,s=new O,o=new O,l=new O,u=new O,c=new O,h=new O;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),v=e.getX(f+1),g=e.getX(f+2);i.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),c.subVectors(s,a),h.subVectors(i,a),c.cross(h),o.fromBufferAttribute(r,m),l.fromBufferAttribute(r,v),u.fromBufferAttribute(r,g),o.add(c),l.add(c),u.add(c),r.setXYZ(m,o.x,o.y,o.z),r.setXYZ(v,l.x,l.y,l.z),r.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=t.count;f<p;f+=3)i.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),c.subVectors(s,a),h.subVectors(i,a),c.cross(h),r.setXYZ(f+0,c.x,c.y,c.z),r.setXYZ(f+1,c.x,c.y,c.z),r.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,h=o.normalized,f=new u.constructor(l.length*c);let p=0,m=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*c;for(let d=0;d<c;d++)f[m++]=u[p++]}return new Qt(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,r=this.index.array,i=this.attributes;for(const o in i){const l=i[o],u=e(l,r);t.setAttribute(o,u)}const a=this.morphAttributes;for(const o in a){const l=[],u=a[o];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=e(f,r);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const u=s[o];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const l in r){const u=r[l];e.data.attributes[l]=u.toJSON(e.data)}const i={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(i[l]=c,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const i=e.attributes;for(const u in i){const c=i[u];this.setAttribute(u,c.clone(t))}const a=e.morphAttributes;for(const u in a){const c=[],h=a[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let u=0,c=s.length;u<c;u++){const h=s[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const El=new et,jn=new va,Li=new ma,wl=new O,fr=new O,pr=new O,gr=new O,Za=new O,Oi=new O,Ii=new me,Di=new me,Ni=new me,Tl=new O,Al=new O,Cl=new O,Fi=new O,Ui=new O;class Zt extends _t{constructor(e=new Ut,t=new ns){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const r=this.geometry,i=r.attributes.position,a=r.morphAttributes.position,s=r.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){Oi.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=o[l],h=a[l];c!==0&&(Za.fromBufferAttribute(h,e),s?Oi.addScaledVector(Za,c):Oi.addScaledVector(Za.sub(t),c))}t.add(Oi)}return t}raycast(e,t){const r=this.geometry,i=this.material,a=this.matrixWorld;i!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Li.copy(r.boundingSphere),Li.applyMatrix4(a),jn.copy(e.ray).recast(e.near),!(Li.containsPoint(jn.origin)===!1&&(jn.intersectSphere(Li,wl)===null||jn.origin.distanceToSquared(wl)>(e.far-e.near)**2))&&(El.copy(a).invert(),jn.copy(e.ray).applyMatrix4(El),!(r.boundingBox!==null&&jn.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,jn)))}_computeIntersections(e,t,r){let i;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,u=a.attributes.uv,c=a.attributes.uv1,h=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const g=f[m],d=s[g.materialIndex],M=Math.max(g.start,p.start),_=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let x=M,y=_;x<y;x+=3){const S=o.getX(x),w=o.getX(x+1),L=o.getX(x+2);i=Gi(this,d,e,r,u,c,h,S,w,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=m,d=v;g<d;g+=3){const M=o.getX(g),_=o.getX(g+1),x=o.getX(g+2);i=Gi(this,s,e,r,u,c,h,M,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,v=f.length;m<v;m++){const g=f[m],d=s[g.materialIndex],M=Math.max(g.start,p.start),_=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=M,y=_;x<y;x+=3){const S=x,w=x+1,L=x+2;i=Gi(this,d,e,r,u,c,h,S,w,L),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{const m=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=m,d=v;g<d;g+=3){const M=g,_=g+1,x=g+2;i=Gi(this,s,e,r,u,c,h,M,_,x),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}}function xf(n,e,t,r,i,a,s,o){let l;if(e.side===Pt?l=r.intersectTriangle(s,a,i,!0,o):l=r.intersectTriangle(i,a,s,e.side===Gn,o),l===null)return null;Ui.copy(o),Ui.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Ui);return u<t.near||u>t.far?null:{distance:u,point:Ui.clone(),object:n}}function Gi(n,e,t,r,i,a,s,o,l,u){n.getVertexPosition(o,fr),n.getVertexPosition(l,pr),n.getVertexPosition(u,gr);const c=xf(n,e,t,r,fr,pr,gr,Fi);if(c){i&&(Ii.fromBufferAttribute(i,o),Di.fromBufferAttribute(i,l),Ni.fromBufferAttribute(i,u),c.uv=$t.getInterpolation(Fi,fr,pr,gr,Ii,Di,Ni,new me)),a&&(Ii.fromBufferAttribute(a,o),Di.fromBufferAttribute(a,l),Ni.fromBufferAttribute(a,u),c.uv1=$t.getInterpolation(Fi,fr,pr,gr,Ii,Di,Ni,new me),c.uv2=c.uv1),s&&(Tl.fromBufferAttribute(s,o),Al.fromBufferAttribute(s,l),Cl.fromBufferAttribute(s,u),c.normal=$t.getInterpolation(Fi,fr,pr,gr,Tl,Al,Cl,new O),c.normal.dot(r.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new O,materialIndex:0};$t.getNormal(fr,pr,gr,h.normal),c.face=h}return c}class gi extends Ut{constructor(e=1,t=1,r=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const l=[],u=[],c=[],h=[];let f=0,p=0;m("z","y","x",-1,-1,r,t,e,s,a,0),m("z","y","x",1,-1,r,t,-e,s,a,1),m("x","z","y",1,1,e,r,t,i,s,2),m("x","z","y",1,-1,e,r,-t,i,s,3),m("x","y","z",1,-1,e,t,r,i,a,4),m("x","y","z",-1,-1,e,t,-r,i,a,5),this.setIndex(l),this.setAttribute("position",new ut(u,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2));function m(v,g,d,M,_,x,y,S,w,L,b){const A=x/w,k=y/L,U=x/2,J=y/2,C=S/2,R=w+1,N=L+1;let j=0,ie=0;const te=new O;for(let G=0;G<N;G++){const Y=G*k-J;for(let ee=0;ee<R;ee++){const W=ee*A-U;te[v]=W*M,te[g]=Y*_,te[d]=C,u.push(te.x,te.y,te.z),te[v]=0,te[g]=0,te[d]=S>0?1:-1,c.push(te.x,te.y,te.z),h.push(ee/w),h.push(1-G/L),j+=1}}for(let G=0;G<L;G++)for(let Y=0;Y<w;Y++){const ee=f+Y+R*G,W=f+Y+R*(G+1),z=f+(Y+1)+R*(G+1),V=f+(Y+1)+R*G;l.push(ee,W,V),l.push(W,z,V),ie+=6}o.addGroup(p,ie,b),p+=ie,f+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Nr(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const i=n[t][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=i.clone():Array.isArray(i)?e[t][r]=i.slice():e[t][r]=i}}return e}function Tt(n){const e={};for(let t=0;t<n.length;t++){const r=Nr(n[t]);for(const i in r)e[i]=r[i]}return e}function bf(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function wc(n){return n.getRenderTarget()===null?n.outputColorSpace:Ye.workingColorSpace}const Tc={clone:Nr,merge:Tt};var Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wn extends Gr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=bf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?t.uniforms[i]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[i]={type:"m4",value:s.toArray()}:t.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const i in this.extensions)this.extensions[i]===!0&&(r[i]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Ac extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=xn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends Ac{constructor(e=50,t=1,r=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ii*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hi*2*Math.atan(Math.tan(ii*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,r,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ii*.5*this.fov)/this.zoom,r=2*t,i=this.aspect*r,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,u=s.fullHeight;a+=s.offsetX*i/l,t-=s.offsetY*r/u,i*=s.width/l,r*=s.height/u}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const mr=-90,vr=1;class Ef extends _t{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ht(mr,vr,e,t);i.layers=this.layers,this.add(i);const a=new Ht(mr,vr,e,t);a.layers=this.layers,this.add(a);const s=new Ht(mr,vr,e,t);s.layers=this.layers,this.add(s);const o=new Ht(mr,vr,e,t);o.layers=this.layers,this.add(o);const l=new Ht(mr,vr,e,t);l.layers=this.layers,this.add(l);const u=new Ht(mr,vr,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,i,a,s,o,l]=t;for(const u of t)this.remove(u);if(e===xn)r.up.set(0,1,0),r.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===aa)r.up.set(0,-1,0),r.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,u,c]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,i),e.render(t,a),e.setRenderTarget(r,1,i),e.render(t,s),e.setRenderTarget(r,2,i),e.render(t,o),e.setRenderTarget(r,3,i),e.render(t,l),e.setRenderTarget(r,4,i),e.render(t,u),r.texture.generateMipmaps=v,e.setRenderTarget(r,5,i),e.render(t,c),e.setRenderTarget(h,f,p),e.xr.enabled=m,r.texture.needsPMREMUpdate=!0}}class Cc extends Lt{constructor(e,t,r,i,a,s,o,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,r,i,a,s,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wf extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},i=[r,r,r,r,r,r];t.encoding!==void 0&&(oi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?gt:zt),this.texture=new Cc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new gi(5,5,5),a=new wn({name:"CubemapFromEquirect",uniforms:Nr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Pt,blending:Mn});a.uniforms.tEquirect.value=t;const s=new Zt(i,a),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=Bt),new Ef(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,r,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,r,i);e.setRenderTarget(a)}}const Ja=new O,Tf=new O,Af=new We;class vn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,i){return this.normal.set(e,t,r),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const i=Ja.subVectors(r,t).cross(Tf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ja),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Af.getNormalMatrix(e),i=this.coplanarPoint(Ja).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xn=new ma,ki=new O;class rs{constructor(e=new vn,t=new vn,r=new vn,i=new vn,a=new vn,s=new vn){this.planes=[e,t,r,i,a,s]}set(e,t,r,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=xn){const r=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],l=i[3],u=i[4],c=i[5],h=i[6],f=i[7],p=i[8],m=i[9],v=i[10],g=i[11],d=i[12],M=i[13],_=i[14],x=i[15];if(r[0].setComponents(l-a,f-u,g-p,x-d).normalize(),r[1].setComponents(l+a,f+u,g+p,x+d).normalize(),r[2].setComponents(l+s,f+c,g+m,x+M).normalize(),r[3].setComponents(l-s,f-c,g-m,x-M).normalize(),r[4].setComponents(l-o,f-h,g-v,x-_).normalize(),t===xn)r[5].setComponents(l+o,f+h,g+v,x+_).normalize();else if(t===aa)r[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){return Xn.center.set(0,0,0),Xn.radius=.7071067811865476,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,r=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const i=t[r];if(ki.x=i.normal.x>0?e.max.x:e.min.x,ki.y=i.normal.y>0?e.max.y:e.min.y,ki.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ki)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Pc(){let n=null,e=!1,t=null,r=null;function i(a,s){t(a,s),r=n.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(i),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Cf(n,e){const t=e.isWebGL2,r=new WeakMap;function i(u,c){const h=u.array,f=u.usage,p=h.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,h,f),u.onUploadCallback();let v;if(h instanceof Float32Array)v=n.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)v=n.SHORT;else if(h instanceof Uint32Array)v=n.UNSIGNED_INT;else if(h instanceof Int32Array)v=n.INT;else if(h instanceof Int8Array)v=n.BYTE;else if(h instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:m,type:v,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:p}}function a(u,c,h){const f=c.array,p=c._updateRange,m=c.updateRanges;if(n.bindBuffer(h,u),p.count===-1&&m.length===0&&n.bufferSubData(h,0,f),m.length!==0){for(let v=0,g=m.length;v<g;v++){const d=m[v];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),r.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=r.get(u);c&&(n.deleteBuffer(c.buffer),r.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const f=r.get(u);(!f||f.version<u.version)&&r.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=r.get(u);if(h===void 0)r.set(u,i(u,c));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(h.buffer,u,c),h.version=u.version}}return{get:s,remove:o,update:l}}class is extends Ut{constructor(e=1,t=1,r=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(r),l=Math.floor(i),u=o+1,c=l+1,h=e/o,f=t/l,p=[],m=[],v=[],g=[];for(let d=0;d<c;d++){const M=d*f-s;for(let _=0;_<u;_++){const x=_*h-a;m.push(x,-M,0),v.push(0,0,1),g.push(_/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<o;M++){const _=M+u*d,x=M+u*(d+1),y=M+1+u*(d+1),S=M+1+u*d;p.push(_,x,S),p.push(x,y,S)}this.setIndex(p),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new is(e.width,e.height,e.widthSegments,e.heightSegments)}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,If=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Df=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Uf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Gf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Vf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$f=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ep=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ip=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ap=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ip=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Np=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Up=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wp=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,jp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Xp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ng=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ig=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,hg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,fg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_g=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ng=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Fg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ug=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$g=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Yg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Qg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,im=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,om=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:Pf,alphahash_pars_fragment:Rf,alphamap_fragment:Lf,alphamap_pars_fragment:Of,alphatest_fragment:If,alphatest_pars_fragment:Df,aomap_fragment:Nf,aomap_pars_fragment:Ff,batching_pars_vertex:Uf,batching_vertex:Gf,begin_vertex:kf,beginnormal_vertex:Bf,bsdfs:Hf,iridescence_fragment:zf,bumpmap_pars_fragment:Vf,clipping_planes_fragment:Wf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:qf,color_fragment:$f,color_pars_fragment:Yf,color_pars_vertex:Kf,color_vertex:Zf,common:Jf,cube_uv_reflection_fragment:Qf,defaultnormal_vertex:ep,displacementmap_pars_vertex:tp,displacementmap_vertex:np,emissivemap_fragment:rp,emissivemap_pars_fragment:ip,colorspace_fragment:ap,colorspace_pars_fragment:op,envmap_fragment:sp,envmap_common_pars_fragment:lp,envmap_pars_fragment:up,envmap_pars_vertex:cp,envmap_physical_pars_fragment:Mp,envmap_vertex:hp,fog_vertex:dp,fog_pars_vertex:fp,fog_fragment:pp,fog_pars_fragment:gp,gradientmap_pars_fragment:mp,lightmap_fragment:vp,lightmap_pars_fragment:_p,lights_lambert_fragment:yp,lights_lambert_pars_fragment:xp,lights_pars_begin:bp,lights_toon_fragment:Sp,lights_toon_pars_fragment:Ep,lights_phong_fragment:wp,lights_phong_pars_fragment:Tp,lights_physical_fragment:Ap,lights_physical_pars_fragment:Cp,lights_fragment_begin:Pp,lights_fragment_maps:Rp,lights_fragment_end:Lp,logdepthbuf_fragment:Op,logdepthbuf_pars_fragment:Ip,logdepthbuf_pars_vertex:Dp,logdepthbuf_vertex:Np,map_fragment:Fp,map_pars_fragment:Up,map_particle_fragment:Gp,map_particle_pars_fragment:kp,metalnessmap_fragment:Bp,metalnessmap_pars_fragment:Hp,morphcolor_vertex:zp,morphnormal_vertex:Vp,morphtarget_pars_vertex:Wp,morphtarget_vertex:jp,normal_fragment_begin:Xp,normal_fragment_maps:qp,normal_pars_fragment:$p,normal_pars_vertex:Yp,normal_vertex:Kp,normalmap_pars_fragment:Zp,clearcoat_normal_fragment_begin:Jp,clearcoat_normal_fragment_maps:Qp,clearcoat_pars_fragment:eg,iridescence_pars_fragment:tg,opaque_fragment:ng,packing:rg,premultiplied_alpha_fragment:ig,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:sg,roughnessmap_fragment:lg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:hg,shadowmap_vertex:dg,shadowmask_pars_fragment:fg,skinbase_vertex:pg,skinning_pars_vertex:gg,skinning_vertex:mg,skinnormal_vertex:vg,specularmap_fragment:_g,specularmap_pars_fragment:yg,tonemapping_fragment:xg,tonemapping_pars_fragment:bg,transmission_fragment:Mg,transmission_pars_fragment:Sg,uv_pars_fragment:Eg,uv_pars_vertex:wg,uv_vertex:Tg,worldpos_vertex:Ag,background_vert:Cg,background_frag:Pg,backgroundCube_vert:Rg,backgroundCube_frag:Lg,cube_vert:Og,cube_frag:Ig,depth_vert:Dg,depth_frag:Ng,distanceRGBA_vert:Fg,distanceRGBA_frag:Ug,equirect_vert:Gg,equirect_frag:kg,linedashed_vert:Bg,linedashed_frag:Hg,meshbasic_vert:zg,meshbasic_frag:Vg,meshlambert_vert:Wg,meshlambert_frag:jg,meshmatcap_vert:Xg,meshmatcap_frag:qg,meshnormal_vert:$g,meshnormal_frag:Yg,meshphong_vert:Kg,meshphong_frag:Zg,meshphysical_vert:Jg,meshphysical_frag:Qg,meshtoon_vert:em,meshtoon_frag:tm,points_vert:nm,points_frag:rm,shadow_vert:im,shadow_frag:am,sprite_vert:om,sprite_frag:sm},ge={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},an={basic:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Tt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Tt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Tt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Xe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Tt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Tt([ge.points,ge.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Tt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Tt([ge.common,ge.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Tt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Tt([ge.sprite,ge.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Tt([ge.common,ge.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Tt([ge.lights,ge.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};an.physical={uniforms:Tt([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Bi={r:0,b:0,g:0};function lm(n,e,t,r,i,a,s){const o=new Xe(0);let l=a===!0?0:1,u,c,h=null,f=0,p=null;function m(g,d){let M=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),M=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?r.buffers.color.setClear(0,0,0,1,s):x==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,s),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===pa)?(c===void 0&&(c=new Zt(new gi(1,1,1),new wn({name:"BackgroundCubeMaterial",uniforms:Nr(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,S,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(_.colorSpace)!==Qe,(h!==_||f!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new Zt(new is(2,2),new wn({name:"BackgroundMaterial",uniforms:Nr(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Ye.getTransfer(_.colorSpace)!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function v(g,d){g.getRGB(Bi,wc(n)),r.buffers.color.setClear(Bi.r,Bi.g,Bi.b,d,s)}return{getClearColor:function(){return o},setClearColor:function(g,d=1){o.set(g),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,v(o,l)},render:m}}function um(n,e,t,r){const i=n.getParameter(n.MAX_VERTEX_ATTRIBS),a=r.isWebGL2?null:e.get("OES_vertex_array_object"),s=r.isWebGL2||a!==null,o={},l=g(null);let u=l,c=!1;function h(C,R,N,j,ie){let te=!1;if(s){const G=v(j,N,R);u!==G&&(u=G,p(u.object)),te=d(C,j,N,ie),te&&M(C,j,N,ie)}else{const G=R.wireframe===!0;(u.geometry!==j.id||u.program!==N.id||u.wireframe!==G)&&(u.geometry=j.id,u.program=N.id,u.wireframe=G,te=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,L(C,R,N,j),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function f(){return r.isWebGL2?n.createVertexArray():a.createVertexArrayOES()}function p(C){return r.isWebGL2?n.bindVertexArray(C):a.bindVertexArrayOES(C)}function m(C){return r.isWebGL2?n.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function v(C,R,N){const j=N.wireframe===!0;let ie=o[C.id];ie===void 0&&(ie={},o[C.id]=ie);let te=ie[R.id];te===void 0&&(te={},ie[R.id]=te);let G=te[j];return G===void 0&&(G=g(f()),te[j]=G),G}function g(C){const R=[],N=[],j=[];for(let ie=0;ie<i;ie++)R[ie]=0,N[ie]=0,j[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:j,object:C,attributes:{},index:null}}function d(C,R,N,j){const ie=u.attributes,te=R.attributes;let G=0;const Y=N.getAttributes();for(const ee in Y)if(Y[ee].location>=0){const z=ie[ee];let V=te[ee];if(V===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(V=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(V=C.instanceColor)),z===void 0||z.attribute!==V||V&&z.data!==V.data)return!0;G++}return u.attributesNum!==G||u.index!==j}function M(C,R,N,j){const ie={},te=R.attributes;let G=0;const Y=N.getAttributes();for(const ee in Y)if(Y[ee].location>=0){let z=te[ee];z===void 0&&(ee==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),ee==="instanceColor"&&C.instanceColor&&(z=C.instanceColor));const V={};V.attribute=z,z&&z.data&&(V.data=z.data),ie[ee]=V,G++}u.attributes=ie,u.attributesNum=G,u.index=j}function _(){const C=u.newAttributes;for(let R=0,N=C.length;R<N;R++)C[R]=0}function x(C){y(C,0)}function y(C,R){const N=u.newAttributes,j=u.enabledAttributes,ie=u.attributeDivisors;N[C]=1,j[C]===0&&(n.enableVertexAttribArray(C),j[C]=1),ie[C]!==R&&((r.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[r.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,R),ie[C]=R)}function S(){const C=u.newAttributes,R=u.enabledAttributes;for(let N=0,j=R.length;N<j;N++)R[N]!==C[N]&&(n.disableVertexAttribArray(N),R[N]=0)}function w(C,R,N,j,ie,te,G){G===!0?n.vertexAttribIPointer(C,R,N,ie,te):n.vertexAttribPointer(C,R,N,j,ie,te)}function L(C,R,N,j){if(r.isWebGL2===!1&&(C.isInstancedMesh||j.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const ie=j.attributes,te=N.getAttributes(),G=R.defaultAttributeValues;for(const Y in te){const ee=te[Y];if(ee.location>=0){let W=ie[Y];if(W===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){const z=W.normalized,V=W.itemSize,ne=t.get(W);if(ne===void 0)continue;const D=ne.buffer,Z=ne.type,se=ne.bytesPerElement,de=r.isWebGL2===!0&&(Z===n.INT||Z===n.UNSIGNED_INT||W.gpuType===lc);if(W.isInterleavedBufferAttribute){const ve=W.data,B=ve.stride,Je=W.offset;if(ve.isInstancedInterleavedBuffer){for(let ye=0;ye<ee.locationSize;ye++)y(ee.location+ye,ve.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ye=0;ye<ee.locationSize;ye++)x(ee.location+ye);n.bindBuffer(n.ARRAY_BUFFER,D);for(let ye=0;ye<ee.locationSize;ye++)w(ee.location+ye,V/ee.locationSize,Z,z,B*se,(Je+V/ee.locationSize*ye)*se,de)}else{if(W.isInstancedBufferAttribute){for(let ve=0;ve<ee.locationSize;ve++)y(ee.location+ve,W.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let ve=0;ve<ee.locationSize;ve++)x(ee.location+ve);n.bindBuffer(n.ARRAY_BUFFER,D);for(let ve=0;ve<ee.locationSize;ve++)w(ee.location+ve,V/ee.locationSize,Z,z,V*se,V/ee.locationSize*ve*se,de)}}else if(G!==void 0){const z=G[Y];if(z!==void 0)switch(z.length){case 2:n.vertexAttrib2fv(ee.location,z);break;case 3:n.vertexAttrib3fv(ee.location,z);break;case 4:n.vertexAttrib4fv(ee.location,z);break;default:n.vertexAttrib1fv(ee.location,z)}}}}S()}function b(){U();for(const C in o){const R=o[C];for(const N in R){const j=R[N];for(const ie in j)m(j[ie].object),delete j[ie];delete R[N]}delete o[C]}}function A(C){if(o[C.id]===void 0)return;const R=o[C.id];for(const N in R){const j=R[N];for(const ie in j)m(j[ie].object),delete j[ie];delete R[N]}delete o[C.id]}function k(C){for(const R in o){const N=o[R];if(N[C.id]===void 0)continue;const j=N[C.id];for(const ie in j)m(j[ie].object),delete j[ie];delete N[C.id]}}function U(){J(),c=!0,u!==l&&(u=l,p(u.object))}function J(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:U,resetDefaultState:J,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:x,disableUnusedAttributes:S}}function cm(n,e,t,r){const i=r.isWebGL2;let a;function s(c){a=c}function o(c,h){n.drawArrays(a,c,h),t.update(h,a,1)}function l(c,h,f){if(f===0)return;let p,m;if(i)p=n,m="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](a,c,h,f),t.update(h,a,f)}function u(c,h,f){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f;m++)this.render(c[m],h[m]);else{p.multiDrawArraysWEBGL(a,c,0,h,0,f);let m=0;for(let v=0;v<f;v++)m+=h[v];t.update(m,a,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function hm(n,e,t){let r;function i(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const s=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=a(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=s||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,x=s||e.has("OES_texture_float"),y=_&&x,S=s?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:s,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:a,precision:o,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:m,maxAttributes:v,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:y,maxSamples:S}}function dm(n){const e=this;let t=null,r=0,i=!1,a=!1;const s=new vn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||r!==0||i;return i=f,r=h.length,p},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,f){t=c(h,f,0)},this.setState=function(h,f,p){const m=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,d=n.get(h);if(!i||m===null||m.length===0||a&&!g)a?c(null):u();else{const M=a?0:r,_=M*4;let x=d.clippingState||null;l.value=x,x=c(m,f,_,p);for(let y=0;y!==_;++y)x[y]=t[y];d.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function c(h,f,p,m){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,m!==!0||g===null){const d=p+v*4,M=f.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<d)&&(g=new Float32Array(d));for(let _=0,x=p;_!==v;++_,x+=4)s.copy(h[_]).applyMatrix4(M,o),s.normal.toArray(g,x),g[x+3]=s.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function fm(n){let e=new WeakMap;function t(s,o){return o===wo?s.mapping=Lr:o===To&&(s.mapping=Or),s}function r(s){if(s&&s.isTexture){const o=s.mapping;if(o===wo||o===To)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const u=new wf(l.height/2);return u.fromEquirectangularTexture(n,s),e.set(s,u),s.addEventListener("dispose",i),t(u.texture,s.mapping)}else return null}}return s}function i(s){const o=s.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:r,dispose:a}}class as extends Ac{constructor(e=-1,t=1,r=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=r-e,s=r+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,s=a+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Er=4,Pl=[.125,.215,.35,.446,.526,.582],Yn=20,Qa=new as,Rl=new Xe;let eo=null,to=0,no=0;const qn=(1+Math.sqrt(5))/2,_r=1/qn,Ll=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,qn,_r),new O(0,qn,-_r),new O(_r,0,qn),new O(-_r,0,qn),new O(qn,_r,0),new O(-qn,_r,0)];class Ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,i=100){eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,r,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(eo,to,no),e.scissorTest=!1,Hi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Or?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),eo=this._renderer.getRenderTarget(),to=this._renderer.getActiveCubeFace(),no=this._renderer.getActiveMipmapLevel();const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Ir,format:Kt,colorSpace:En,depthBuffer:!1},i=Il(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Il(e,t,r);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pm(a)),this._blurMaterial=gm(a,e,t)}return i}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,r,i){const o=new Ht(90,1,t,r),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(Rl),c.toneMapping=Fn,c.autoClear=!1;const p=new ns({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),m=new Zt(new gi,p);let v=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,v=!0):(p.color.copy(Rl),v=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):M===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const _=this._cubeSize;Hi(i,M*_,d>2?_:0,_,_),c.setRenderTarget(i),v&&c.render(m,o),c.render(e,o)}m.geometry.dispose(),m.material.dispose(),c.toneMapping=f,c.autoClear=h,e.background=g}_textureToCubeUV(e,t){const r=this._renderer,i=e.mapping===Lr||e.mapping===Or;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dl());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new Zt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Hi(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(s,Qa)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=Ll[(i-1)%Ll.length];this._blur(e,i-1,i,a,s)}t.autoClear=r}_blur(e,t,r,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,r,i,"latitudinal",a),this._halfBlur(s,e,r,r,i,"longitudinal",a)}_halfBlur(e,t,r,i,a,s,o){const l=this._renderer,u=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Zt(this._lodPlanes[i],u),f=u.uniforms,p=this._sizeLods[r]-1,m=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Yn-1),v=a/m,g=isFinite(a)?1+Math.floor(c*v):Yn;g>Yn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Yn}`);const d=[];let M=0;for(let w=0;w<Yn;++w){const L=w/v,b=Math.exp(-L*L/2);d.push(b),w===0?M+=b:w<g&&(M+=2*b)}for(let w=0;w<d.length;w++)d[w]=d[w]/M;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=d,f.latitudinal.value=s==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=m,f.mipInt.value=_-r;const x=this._sizeLods[i],y=3*x*(i>_-Er?i-_+Er:0),S=4*(this._cubeSize-x);Hi(t,y,S,3*x,2*x),l.setRenderTarget(t),l.render(h,Qa)}}function pm(n){const e=[],t=[],r=[];let i=n;const a=n-Er+1+Pl.length;for(let s=0;s<a;s++){const o=Math.pow(2,i);t.push(o);let l=1/o;s>n-Er?l=Pl[s-n+Er-1]:s===0&&(l=0),r.push(l);const u=1/(o-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,m=6,v=3,g=2,d=1,M=new Float32Array(v*m*p),_=new Float32Array(g*m*p),x=new Float32Array(d*m*p);for(let S=0;S<p;S++){const w=S%3*2/3-1,L=S>2?0:-1,b=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];M.set(b,v*m*S),_.set(f,g*m*S);const A=[S,S,S,S,S,S];x.set(A,d*m*S)}const y=new Ut;y.setAttribute("position",new Qt(M,v)),y.setAttribute("uv",new Qt(_,g)),y.setAttribute("faceIndex",new Qt(x,d)),e.push(y),i>Er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function Il(n,e,t){const r=new kn(n,e,t);return r.texture.mapping=pa,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Hi(n,e,t,r,i){n.viewport.set(e,t,r,i),n.scissor.set(e,t,r,i)}function gm(n,e,t){const r=new Float32Array(Yn),i=new O(0,1,0);return new wn({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Dl(){return new wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function Nl(){return new wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mn,depthTest:!1,depthWrite:!1})}function os(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function mm(n){let e=new WeakMap,t=null;function r(o){if(o&&o.isTexture){const l=o.mapping,u=l===wo||l===To,c=l===Lr||l===Or;if(u||c)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new Ol(n)),h=u?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||c&&h&&i(h)){t===null&&(t=new Ol(n));const f=u?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",a),f.texture}else return null}}}return o}function i(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function a(o){const l=o.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:s}}function vm(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let i;switch(r){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(r)}return e[r]=i,i}return{has:function(r){return t(r)!==null},init:function(r){r.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(r){const i=t(r);return i===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),i}}}function _m(n,e,t,r){const i={},a=new WeakMap;function s(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);for(const m in f.morphAttributes){const v=f.morphAttributes[m];for(let g=0,d=v.length;g<d;g++)e.remove(v[g])}f.removeEventListener("dispose",s),delete i[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),r.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",s),i[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER);const p=h.morphAttributes;for(const m in p){const v=p[m];for(let g=0,d=v.length;g<d;g++)e.update(v[g],n.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,m=h.attributes.position;let v=0;if(p!==null){const M=p.array;v=p.version;for(let _=0,x=M.length;_<x;_+=3){const y=M[_+0],S=M[_+1],w=M[_+2];f.push(y,S,S,w,w,y)}}else if(m!==void 0){const M=m.array;v=m.version;for(let _=0,x=M.length/3-1;_<x;_+=3){const y=_+0,S=_+1,w=_+2;f.push(y,S,S,w,w,y)}}else return;const g=new(_c(f)?Ec:Sc)(f,1);g.version=v;const d=a.get(h);d&&e.remove(d),a.set(h,g)}function c(h){const f=a.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return a.get(h)}return{get:o,update:l,getWireframeAttribute:c}}function ym(n,e,t,r){const i=r.isWebGL2;let a;function s(p){a=p}let o,l;function u(p){o=p.type,l=p.bytesPerElement}function c(p,m){n.drawElements(a,m,o,p*l),t.update(m,a,1)}function h(p,m,v){if(v===0)return;let g,d;if(i)g=n,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](a,m,o,p*l,v),t.update(m,a,v)}function f(p,m,v){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<v;d++)this.render(p[d]/l,m[d]);else{g.multiDrawElementsWEBGL(a,m,0,o,p,0,v);let d=0;for(let M=0;M<v;M++)d+=m[M];t.update(d,a,1)}}this.setMode=s,this.setIndex=u,this.render=c,this.renderInstances=h,this.renderMultiDraw=f}function xm(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:r}}function bm(n,e){return n[0]-e[0]}function Mm(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Sm(n,e,t){const r={},i=new Float32Array(8),a=new WeakMap,s=new vt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,c,h){const f=u.morphTargetInfluences;if(e.isWebGL2===!0){const m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=m!==void 0?m.length:0;let g=a.get(c);if(g===void 0||g.count!==v){let R=function(){J.dispose(),a.delete(c),c.removeEventListener("dispose",R)};var p=R;g!==void 0&&g.texture.dispose();const _=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,S=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],L=c.morphAttributes.color||[];let b=0;_===!0&&(b=1),x===!0&&(b=2),y===!0&&(b=3);let A=c.attributes.position.count*b,k=1;A>e.maxTextureSize&&(k=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const U=new Float32Array(A*k*4*v),J=new bc(U,A,k,v);J.type=Nn,J.needsUpdate=!0;const C=b*4;for(let N=0;N<v;N++){const j=S[N],ie=w[N],te=L[N],G=A*k*4*N;for(let Y=0;Y<j.count;Y++){const ee=Y*C;_===!0&&(s.fromBufferAttribute(j,Y),U[G+ee+0]=s.x,U[G+ee+1]=s.y,U[G+ee+2]=s.z,U[G+ee+3]=0),x===!0&&(s.fromBufferAttribute(ie,Y),U[G+ee+4]=s.x,U[G+ee+5]=s.y,U[G+ee+6]=s.z,U[G+ee+7]=0),y===!0&&(s.fromBufferAttribute(te,Y),U[G+ee+8]=s.x,U[G+ee+9]=s.y,U[G+ee+10]=s.z,U[G+ee+11]=te.itemSize===4?s.w:1)}}g={count:v,texture:J,size:new me(A,k)},a.set(c,g),c.addEventListener("dispose",R)}let d=0;for(let _=0;_<f.length;_++)d+=f[_];const M=c.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const m=f===void 0?0:f.length;let v=r[c.id];if(v===void 0||v.length!==m){v=[];for(let x=0;x<m;x++)v[x]=[x,0];r[c.id]=v}for(let x=0;x<m;x++){const y=v[x];y[0]=x,y[1]=f[x]}v.sort(Mm);for(let x=0;x<8;x++)x<m&&v[x][1]?(o[x][0]=v[x][0],o[x][1]=v[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(bm);const g=c.morphAttributes.position,d=c.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const y=o[x],S=y[0],w=y[1];S!==Number.MAX_SAFE_INTEGER&&w?(g&&c.getAttribute("morphTarget"+x)!==g[S]&&c.setAttribute("morphTarget"+x,g[S]),d&&c.getAttribute("morphNormal"+x)!==d[S]&&c.setAttribute("morphNormal"+x,d[S]),i[x]=w,M+=w):(g&&c.hasAttribute("morphTarget"+x)===!0&&c.deleteAttribute("morphTarget"+x),d&&c.hasAttribute("morphNormal"+x)===!0&&c.deleteAttribute("morphNormal"+x),i[x]=0)}const _=c.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",_),h.getUniforms().setValue(n,"morphTargetInfluences",i)}}return{update:l}}function Em(n,e,t,r){let i=new WeakMap;function a(l){const u=r.render.frame,c=l.geometry,h=e.get(l,c);if(i.get(h)!==u&&(e.update(h),i.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==u&&(f.update(),i.set(f,u))}return h}function s(){i=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:s}}class Rc extends Lt{constructor(e,t,r,i,a,s,o,l,u,c){if(c=c!==void 0?c:Zn,c!==Zn&&c!==Dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&c===Zn&&(r=Dn),r===void 0&&c===Dr&&(r=Kn),super(null,i,a,s,o,l,c,r,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lc=new Lt,Oc=new Rc(1,1);Oc.compareFunction=vc;const Ic=new bc,Dc=new uf,Nc=new Cc,Fl=[],Ul=[],Gl=new Float32Array(16),kl=new Float32Array(9),Bl=new Float32Array(4);function kr(n,e,t){const r=n[0];if(r<=0||r>0)return n;const i=e*t;let a=Fl[i];if(a===void 0&&(a=new Float32Array(i),Fl[i]=a),e!==0){r.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function ct(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function ht(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function ya(n,e){let t=Ul[e];t===void 0&&(t=new Int32Array(e),Ul[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function wm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2fv(this.addr,e),ht(t,e)}}function Am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;n.uniform3fv(this.addr,e),ht(t,e)}}function Cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4fv(this.addr,e),ht(t,e)}}function Pm(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,r))return;Bl.set(r),n.uniformMatrix2fv(this.addr,!1,Bl),ht(t,r)}}function Rm(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,r))return;kl.set(r),n.uniformMatrix3fv(this.addr,!1,kl),ht(t,r)}}function Lm(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(ct(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,r))return;Gl.set(r),n.uniformMatrix4fv(this.addr,!1,Gl),ht(t,r)}}function Om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2iv(this.addr,e),ht(t,e)}}function Dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3iv(this.addr,e),ht(t,e)}}function Nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4iv(this.addr,e),ht(t,e)}}function Fm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;n.uniform2uiv(this.addr,e),ht(t,e)}}function Gm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;n.uniform3uiv(this.addr,e),ht(t,e)}}function km(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;n.uniform4uiv(this.addr,e),ht(t,e)}}function Bm(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i);const a=this.type===n.SAMPLER_2D_SHADOW?Oc:Lc;t.setTexture2D(e||a,i)}function Hm(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture3D(e||Dc,i)}function zm(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTextureCube(e||Nc,i)}function Vm(n,e,t){const r=this.cache,i=t.allocateTextureUnit();r[0]!==i&&(n.uniform1i(this.addr,i),r[0]=i),t.setTexture2DArray(e||Ic,i)}function Wm(n){switch(n){case 5126:return wm;case 35664:return Tm;case 35665:return Am;case 35666:return Cm;case 35674:return Pm;case 35675:return Rm;case 35676:return Lm;case 5124:case 35670:return Om;case 35667:case 35671:return Im;case 35668:case 35672:return Dm;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Um;case 36295:return Gm;case 36296:return km;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return zm;case 36289:case 36303:case 36311:case 36292:return Vm}}function jm(n,e){n.uniform1fv(this.addr,e)}function Xm(n,e){const t=kr(e,this.size,2);n.uniform2fv(this.addr,t)}function qm(n,e){const t=kr(e,this.size,3);n.uniform3fv(this.addr,t)}function $m(n,e){const t=kr(e,this.size,4);n.uniform4fv(this.addr,t)}function Ym(n,e){const t=kr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Km(n,e){const t=kr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Zm(n,e){const t=kr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Jm(n,e){n.uniform1iv(this.addr,e)}function Qm(n,e){n.uniform2iv(this.addr,e)}function ev(n,e){n.uniform3iv(this.addr,e)}function tv(n,e){n.uniform4iv(this.addr,e)}function nv(n,e){n.uniform1uiv(this.addr,e)}function rv(n,e){n.uniform2uiv(this.addr,e)}function iv(n,e){n.uniform3uiv(this.addr,e)}function av(n,e){n.uniform4uiv(this.addr,e)}function ov(n,e,t){const r=this.cache,i=e.length,a=ya(t,i);ct(r,a)||(n.uniform1iv(this.addr,a),ht(r,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Lc,a[s])}function sv(n,e,t){const r=this.cache,i=e.length,a=ya(t,i);ct(r,a)||(n.uniform1iv(this.addr,a),ht(r,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Dc,a[s])}function lv(n,e,t){const r=this.cache,i=e.length,a=ya(t,i);ct(r,a)||(n.uniform1iv(this.addr,a),ht(r,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Nc,a[s])}function uv(n,e,t){const r=this.cache,i=e.length,a=ya(t,i);ct(r,a)||(n.uniform1iv(this.addr,a),ht(r,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Ic,a[s])}function cv(n){switch(n){case 5126:return jm;case 35664:return Xm;case 35665:return qm;case 35666:return $m;case 35674:return Ym;case 35675:return Km;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return Qm;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return rv;case 36295:return iv;case 36296:return av;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return uv}}class hv{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Wm(t.type)}}class dv{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cv(t.type)}}class fv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],r)}}}const ro=/(\w+)(\])?(\[|\.)?/g;function Hl(n,e){n.seq.push(e),n.map[e.id]=e}function pv(n,e,t){const r=n.name,i=r.length;for(ro.lastIndex=0;;){const a=ro.exec(r),s=ro.lastIndex;let o=a[1];const l=a[2]==="]",u=a[3];if(l&&(o=o|0),u===void 0||u==="["&&s+2===i){Hl(t,u===void 0?new hv(o,n,e):new dv(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new fv(o),Hl(t,h)),t=h}}}class Yi{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<r;++i){const a=e.getActiveUniform(t,i),s=e.getUniformLocation(t,a.name);pv(a,s,this)}}setValue(e,t,r,i){const a=this.map[t];a!==void 0&&a.setValue(e,r,i)}setOptional(e,t,r){const i=t[r];i!==void 0&&this.setValue(e,r,i)}static upload(e,t,r,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const r=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&r.push(s)}return r}}function zl(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const gv=37297;let mv=0;function vv(n,e){const t=n.split(`
`),r=[],i=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=i;s<a;s++){const o=s+1;r.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return r.join(`
`)}function _v(n){const e=Ye.getPrimaries(Ye.workingColorSpace),t=Ye.getPrimaries(n);let r;switch(e===t?r="":e===ia&&t===ra?r="LinearDisplayP3ToLinearSRGB":e===ra&&t===ia&&(r="LinearSRGBToLinearDisplayP3"),n){case En:case ga:return[r,"LinearTransferOETF"];case gt:case Qo:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[r,"LinearTransferOETF"]}}function Vl(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),i=n.getShaderInfoLog(e).trim();if(r&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+vv(n.getShaderSource(e),s)}else return i}function yv(n,e){const t=_v(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function xv(n,e){let t;switch(e){case yd:t="Linear";break;case xd:t="Reinhard";break;case bd:t="OptimizedCineon";break;case Md:t="ACESFilmic";break;case Sd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qr).join(`
`)}function Mv(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Sv(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){const a=n.getActiveAttrib(e,i),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Qr(n){return n!==""}function Wl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ev=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oo(n){return n.replace(Ev,Tv)}const wv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Tv(n,e){let t=ke[e];if(t===void 0){const r=wv.get(e);if(r!==void 0)t=ke[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Oo(t)}const Av=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xl(n){return n.replace(Av,Cv)}function Cv(n,e,t,r){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function ql(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===oc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rv(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lr:case Or:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Or:e="ENVMAP_MODE_REFRACTION";break}return e}function Ov(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case vd:e="ENVMAP_BLENDING_MIX";break;case _d:e="ENVMAP_BLENDING_ADD";break}return e}function Iv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function Dv(n,e,t,r){const i=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Pv(t),u=Rv(t),c=Lv(t),h=Ov(t),f=Iv(t),p=t.isWebGL2?"":bv(t),m=Mv(a),v=i.createProgram();let g,d,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qr).join(`
`),g.length>0&&(g+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qr).join(`
`),d.length>0&&(d+=`
`)):(g=[ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),d=[p,ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Fn?xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,yv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qr).join(`
`)),s=Oo(s),s=Wl(s,t),s=jl(s,t),o=Oo(o),o=Wl(o,t),o=jl(o,t),s=Xl(s),o=Xl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=M+g+s,x=M+d+o,y=zl(i,i.VERTEX_SHADER,_),S=zl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,y),i.attachShader(v,S),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function w(k){if(n.debug.checkShaderErrors){const U=i.getProgramInfoLog(v).trim(),J=i.getShaderInfoLog(y).trim(),C=i.getShaderInfoLog(S).trim();let R=!0,N=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(R=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,v,y,S);else{const j=Vl(i,y,"vertex"),ie=Vl(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Program Info Log: `+U+`
`+j+`
`+ie)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(J===""||C==="")&&(N=!1);N&&(k.diagnostics={runnable:R,programLog:U,vertexShader:{log:J,prefix:g},fragmentShader:{log:C,prefix:d}})}i.deleteShader(y),i.deleteShader(S),L=new Yi(i,v),b=Sv(i,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=i.getProgramParameter(v,gv)),A},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=y,this.fragmentShader=S,this}let Nv=0;class Fv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(r),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Uv(e),t.set(e,r)),r}}class Uv{constructor(e){this.id=Nv++,this.code=e,this.usedTimes=0}}function Gv(n,e,t,r,i,a,s){const o=new ts,l=new Fv,u=[],c=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return b===0?"uv":`uv${b}`}function g(b,A,k,U,J){const C=U.fog,R=J.geometry,N=b.isMeshStandardMaterial?U.environment:null,j=(b.isMeshStandardMaterial?t:e).get(b.envMap||N),ie=j&&j.mapping===pa?j.image.height:null,te=m[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const G=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Y=G!==void 0?G.length:0;let ee=0;R.morphAttributes.position!==void 0&&(ee=1),R.morphAttributes.normal!==void 0&&(ee=2),R.morphAttributes.color!==void 0&&(ee=3);let W,z,V,ne;if(te){const St=an[te];W=St.vertexShader,z=St.fragmentShader}else W=b.vertexShader,z=b.fragmentShader,l.update(b),V=l.getVertexShaderID(b),ne=l.getFragmentShaderID(b);const D=n.getRenderTarget(),Z=J.isInstancedMesh===!0,se=J.isBatchedMesh===!0,de=!!b.map,ve=!!b.matcap,B=!!j,Je=!!b.aoMap,ye=!!b.lightMap,Le=!!b.bumpMap,we=!!b.normalMap,je=!!b.displacementMap,De=!!b.emissiveMap,Ne=!!b.metalnessMap,qe=!!b.roughnessMap,st=b.anisotropy>0,lt=b.clearcoat>0,P=b.iridescence>0,E=b.sheen>0,X=b.transmission>0,le=st&&!!b.anisotropyMap,oe=lt&&!!b.clearcoatMap,ue=lt&&!!b.clearcoatNormalMap,Ee=lt&&!!b.clearcoatRoughnessMap,fe=P&&!!b.iridescenceMap,_e=P&&!!b.iridescenceThicknessMap,I=E&&!!b.sheenColorMap,he=E&&!!b.sheenRoughnessMap,re=!!b.specularMap,Oe=!!b.specularColorMap,Te=!!b.specularIntensityMap,Pe=X&&!!b.transmissionMap,Me=X&&!!b.thicknessMap,be=!!b.gradientMap,He=!!b.alphaMap,F=b.alphaTest>0,pe=!!b.alphaHash,ae=!!b.extensions,Q=!!R.attributes.uv1,ce=!!R.attributes.uv2,Ce=!!R.attributes.uv3;let ze=Fn;return b.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ze=n.toneMapping),{isWebGL2:c,shaderID:te,shaderType:b.type,shaderName:b.name,vertexShader:W,fragmentShader:z,defines:b.defines,customVertexShaderID:V,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:se,instancing:Z,instancingColor:Z&&J.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:D===null?n.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:En,map:de,matcap:ve,envMap:B,envMapMode:B&&j.mapping,envMapCubeUVHeight:ie,aoMap:Je,lightMap:ye,bumpMap:Le,normalMap:we,displacementMap:f&&je,emissiveMap:De,normalMapObjectSpace:we&&b.normalMapType===Nd,normalMapTangentSpace:we&&b.normalMapType===mc,metalnessMap:Ne,roughnessMap:qe,anisotropy:st,anisotropyMap:le,clearcoat:lt,clearcoatMap:oe,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ee,iridescence:P,iridescenceMap:fe,iridescenceThicknessMap:_e,sheen:E,sheenColorMap:I,sheenRoughnessMap:he,specularMap:re,specularColorMap:Oe,specularIntensityMap:Te,transmission:X,transmissionMap:Pe,thicknessMap:Me,gradientMap:be,opaque:b.transparent===!1&&b.blending===Cr,alphaMap:He,alphaTest:F,alphaHash:pe,combine:b.combine,mapUv:de&&v(b.map.channel),aoMapUv:Je&&v(b.aoMap.channel),lightMapUv:ye&&v(b.lightMap.channel),bumpMapUv:Le&&v(b.bumpMap.channel),normalMapUv:we&&v(b.normalMap.channel),displacementMapUv:je&&v(b.displacementMap.channel),emissiveMapUv:De&&v(b.emissiveMap.channel),metalnessMapUv:Ne&&v(b.metalnessMap.channel),roughnessMapUv:qe&&v(b.roughnessMap.channel),anisotropyMapUv:le&&v(b.anisotropyMap.channel),clearcoatMapUv:oe&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:ue&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:I&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:he&&v(b.sheenRoughnessMap.channel),specularMapUv:re&&v(b.specularMap.channel),specularColorMapUv:Oe&&v(b.specularColorMap.channel),specularIntensityMapUv:Te&&v(b.specularIntensityMap.channel),transmissionMapUv:Pe&&v(b.transmissionMap.channel),thicknessMapUv:Me&&v(b.thicknessMap.channel),alphaMapUv:He&&v(b.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(we||st),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUv1s:Q,vertexUv2s:ce,vertexUv3s:Ce,pointsUvs:J.isPoints===!0&&!!R.attributes.uv&&(de||He),fog:!!C,useFog:b.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:J.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:ee,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&k.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,useLegacyLights:n._useLegacyLights,decodeVideoTexture:de&&b.map.isVideoTexture===!0&&Ye.getTransfer(b.map.colorSpace)===Qe,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===yn,flipSided:b.side===Pt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:ae&&b.extensions.derivatives===!0,extensionFragDepth:ae&&b.extensions.fragDepth===!0,extensionDrawBuffers:ae&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:ae&&b.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||r.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||r.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||r.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const A=[];if(b.shaderID?A.push(b.shaderID):(A.push(b.customVertexShaderID),A.push(b.customFragmentShaderID)),b.defines!==void 0)for(const k in b.defines)A.push(k),A.push(b.defines[k]);return b.isRawShaderMaterial===!1&&(M(A,b),_(A,b),A.push(n.outputColorSpace)),A.push(b.customProgramCacheKey),A.join()}function M(b,A){b.push(A.precision),b.push(A.outputColorSpace),b.push(A.envMapMode),b.push(A.envMapCubeUVHeight),b.push(A.mapUv),b.push(A.alphaMapUv),b.push(A.lightMapUv),b.push(A.aoMapUv),b.push(A.bumpMapUv),b.push(A.normalMapUv),b.push(A.displacementMapUv),b.push(A.emissiveMapUv),b.push(A.metalnessMapUv),b.push(A.roughnessMapUv),b.push(A.anisotropyMapUv),b.push(A.clearcoatMapUv),b.push(A.clearcoatNormalMapUv),b.push(A.clearcoatRoughnessMapUv),b.push(A.iridescenceMapUv),b.push(A.iridescenceThicknessMapUv),b.push(A.sheenColorMapUv),b.push(A.sheenRoughnessMapUv),b.push(A.specularMapUv),b.push(A.specularColorMapUv),b.push(A.specularIntensityMapUv),b.push(A.transmissionMapUv),b.push(A.thicknessMapUv),b.push(A.combine),b.push(A.fogExp2),b.push(A.sizeAttenuation),b.push(A.morphTargetsCount),b.push(A.morphAttributeCount),b.push(A.numDirLights),b.push(A.numPointLights),b.push(A.numSpotLights),b.push(A.numSpotLightMaps),b.push(A.numHemiLights),b.push(A.numRectAreaLights),b.push(A.numDirLightShadows),b.push(A.numPointLightShadows),b.push(A.numSpotLightShadows),b.push(A.numSpotLightShadowsWithMaps),b.push(A.numLightProbes),b.push(A.shadowMapType),b.push(A.toneMapping),b.push(A.numClippingPlanes),b.push(A.numClipIntersection),b.push(A.depthPacking)}function _(b,A){o.disableAll(),A.isWebGL2&&o.enable(0),A.supportsVertexTextures&&o.enable(1),A.instancing&&o.enable(2),A.instancingColor&&o.enable(3),A.matcap&&o.enable(4),A.envMap&&o.enable(5),A.normalMapObjectSpace&&o.enable(6),A.normalMapTangentSpace&&o.enable(7),A.clearcoat&&o.enable(8),A.iridescence&&o.enable(9),A.alphaTest&&o.enable(10),A.vertexColors&&o.enable(11),A.vertexAlphas&&o.enable(12),A.vertexUv1s&&o.enable(13),A.vertexUv2s&&o.enable(14),A.vertexUv3s&&o.enable(15),A.vertexTangents&&o.enable(16),A.anisotropy&&o.enable(17),A.alphaHash&&o.enable(18),A.batching&&o.enable(19),b.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.skinning&&o.enable(4),A.morphTargets&&o.enable(5),A.morphNormals&&o.enable(6),A.morphColors&&o.enable(7),A.premultipliedAlpha&&o.enable(8),A.shadowMapEnabled&&o.enable(9),A.useLegacyLights&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),b.push(o.mask)}function x(b){const A=m[b.type];let k;if(A){const U=an[A];k=Tc.clone(U.uniforms)}else k=b.uniforms;return k}function y(b,A){let k;for(let U=0,J=u.length;U<J;U++){const C=u[U];if(C.cacheKey===A){k=C,++k.usedTimes;break}}return k===void 0&&(k=new Dv(n,A,b,a),u.push(k)),k}function S(b){if(--b.usedTimes===0){const A=u.indexOf(b);u[A]=u[u.length-1],u.pop(),b.destroy()}}function w(b){l.remove(b)}function L(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:x,acquireProgram:y,releaseProgram:S,releaseShaderCache:w,programs:u,dispose:L}}function kv(){let n=new WeakMap;function e(a){let s=n.get(a);return s===void 0&&(s={},n.set(a,s)),s}function t(a){n.delete(a)}function r(a,s,o){n.get(a)[s]=o}function i(){n=new WeakMap}return{get:e,remove:t,update:r,dispose:i}}function Bv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function $l(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Yl(){const n=[];let e=0;const t=[],r=[],i=[];function a(){e=0,t.length=0,r.length=0,i.length=0}function s(h,f,p,m,v,g){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:m,renderOrder:h.renderOrder,z:v,group:g},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=m,d.renderOrder=h.renderOrder,d.z=v,d.group=g),e++,d}function o(h,f,p,m,v,g){const d=s(h,f,p,m,v,g);p.transmission>0?r.push(d):p.transparent===!0?i.push(d):t.push(d)}function l(h,f,p,m,v,g){const d=s(h,f,p,m,v,g);p.transmission>0?r.unshift(d):p.transparent===!0?i.unshift(d):t.unshift(d)}function u(h,f){t.length>1&&t.sort(h||Bv),r.length>1&&r.sort(f||$l),i.length>1&&i.sort(f||$l)}function c(){for(let h=e,f=n.length;h<f;h++){const p=n[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:r,transparent:i,init:a,push:o,unshift:l,finish:c,sort:u}}function Hv(){let n=new WeakMap;function e(r,i){const a=n.get(r);let s;return a===void 0?(s=new Yl,n.set(r,[s])):i>=a.length?(s=new Yl,a.push(s)):s=a[i],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function zv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Xe};break;case"SpotLight":t={position:new O,direction:new O,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new O,halfWidth:new O,halfHeight:new O};break}return n[e.id]=t,t}}}function Vv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wv=0;function jv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Xv(n,e){const t=new zv,r=Vv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const a=new O,s=new et,o=new et;function l(c,h){let f=0,p=0,m=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let v=0,g=0,d=0,M=0,_=0,x=0,y=0,S=0,w=0,L=0,b=0;c.sort(jv);const A=h===!0?Math.PI:1;for(let U=0,J=c.length;U<J;U++){const C=c[U],R=C.color,N=C.intensity,j=C.distance,ie=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=R.r*N*A,p+=R.g*N*A,m+=R.b*N*A;else if(C.isLightProbe){for(let te=0;te<9;te++)i.probe[te].addScaledVector(C.sh.coefficients[te],N);b++}else if(C.isDirectionalLight){const te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*A),C.castShadow){const G=C.shadow,Y=r.get(C);Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,i.directionalShadow[v]=Y,i.directionalShadowMap[v]=ie,i.directionalShadowMatrix[v]=C.shadow.matrix,x++}i.directional[v]=te,v++}else if(C.isSpotLight){const te=t.get(C);te.position.setFromMatrixPosition(C.matrixWorld),te.color.copy(R).multiplyScalar(N*A),te.distance=j,te.coneCos=Math.cos(C.angle),te.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),te.decay=C.decay,i.spot[d]=te;const G=C.shadow;if(C.map&&(i.spotLightMap[w]=C.map,w++,G.updateMatrices(C),C.castShadow&&L++),i.spotLightMatrix[d]=G.matrix,C.castShadow){const Y=r.get(C);Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,i.spotShadow[d]=Y,i.spotShadowMap[d]=ie,S++}d++}else if(C.isRectAreaLight){const te=t.get(C);te.color.copy(R).multiplyScalar(N),te.halfWidth.set(C.width*.5,0,0),te.halfHeight.set(0,C.height*.5,0),i.rectArea[M]=te,M++}else if(C.isPointLight){const te=t.get(C);if(te.color.copy(C.color).multiplyScalar(C.intensity*A),te.distance=C.distance,te.decay=C.decay,C.castShadow){const G=C.shadow,Y=r.get(C);Y.shadowBias=G.bias,Y.shadowNormalBias=G.normalBias,Y.shadowRadius=G.radius,Y.shadowMapSize=G.mapSize,Y.shadowCameraNear=G.camera.near,Y.shadowCameraFar=G.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=ie,i.pointShadowMatrix[g]=C.shadow.matrix,y++}i.point[g]=te,g++}else if(C.isHemisphereLight){const te=t.get(C);te.skyColor.copy(C.color).multiplyScalar(N*A),te.groundColor.copy(C.groundColor).multiplyScalar(N*A),i.hemi[_]=te,_++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=p,i.ambient[2]=m;const k=i.hash;(k.directionalLength!==v||k.pointLength!==g||k.spotLength!==d||k.rectAreaLength!==M||k.hemiLength!==_||k.numDirectionalShadows!==x||k.numPointShadows!==y||k.numSpotShadows!==S||k.numSpotMaps!==w||k.numLightProbes!==b)&&(i.directional.length=v,i.spot.length=d,i.rectArea.length=M,i.point.length=g,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+w-L,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=b,k.directionalLength=v,k.pointLength=g,k.spotLength=d,k.rectAreaLength=M,k.hemiLength=_,k.numDirectionalShadows=x,k.numPointShadows=y,k.numSpotShadows=S,k.numSpotMaps=w,k.numLightProbes=b,i.version=Wv++)}function u(c,h){let f=0,p=0,m=0,v=0,g=0;const d=h.matrixWorldInverse;for(let M=0,_=c.length;M<_;M++){const x=c[M];if(x.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(d),f++}else if(x.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),y.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),y.direction.sub(a),y.direction.transformDirection(d),m++}else if(x.isRectAreaLight){const y=i.rectArea[v];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),o.identity(),s.copy(x.matrixWorld),s.premultiply(d),o.extractRotation(s),y.halfWidth.set(x.width*.5,0,0),y.halfHeight.set(0,x.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),v++}else if(x.isPointLight){const y=i.point[p];y.position.setFromMatrixPosition(x.matrixWorld),y.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const y=i.hemi[g];y.direction.setFromMatrixPosition(x.matrixWorld),y.direction.transformDirection(d),g++}}}return{setup:l,setupView:u,state:i}}function Kl(n,e){const t=new Xv(n,e),r=[],i=[];function a(){r.length=0,i.length=0}function s(h){r.push(h)}function o(h){i.push(h)}function l(h){t.setup(r,h)}function u(h){t.setupView(r,h)}return{init:a,state:{lightsArray:r,shadowsArray:i,lights:t},setupLights:l,setupLightsView:u,pushLight:s,pushShadow:o}}function qv(n,e){let t=new WeakMap;function r(a,s=0){const o=t.get(a);let l;return o===void 0?(l=new Kl(n,e),t.set(a,[l])):s>=o.length?(l=new Kl(n,e),o.push(l)):l=o[s],l}function i(){t=new WeakMap}return{get:r,dispose:i}}class $v extends Gr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yv extends Gr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jv(n,e,t){let r=new rs;const i=new me,a=new me,s=new vt,o=new $v({depthPacking:Dd}),l=new Yv,u={},c=t.maxTextureSize,h={[Gn]:Pt,[Pt]:Gn,[yn]:yn},f=new wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Kv,fragmentShader:Zv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Ut;m.setAttribute("position",new Qt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Zt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let d=this.type;this.render=function(y,S,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||y.length===0)return;const L=n.getRenderTarget(),b=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),k=n.state;k.setBlending(Mn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const U=d!==mn&&this.type===mn,J=d===mn&&this.type!==mn;for(let C=0,R=y.length;C<R;C++){const N=y[C],j=N.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const ie=j.getFrameExtents();if(i.multiply(ie),a.copy(j.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(a.x=Math.floor(c/ie.x),i.x=a.x*ie.x,j.mapSize.x=a.x),i.y>c&&(a.y=Math.floor(c/ie.y),i.y=a.y*ie.y,j.mapSize.y=a.y)),j.map===null||U===!0||J===!0){const G=this.type!==mn?{minFilter:At,magFilter:At}:{};j.map!==null&&j.map.dispose(),j.map=new kn(i.x,i.y,G),j.map.texture.name=N.name+".shadowMap",j.camera.updateProjectionMatrix()}n.setRenderTarget(j.map),n.clear();const te=j.getViewportCount();for(let G=0;G<te;G++){const Y=j.getViewport(G);s.set(a.x*Y.x,a.y*Y.y,a.x*Y.z,a.y*Y.w),k.viewport(s),j.updateMatrices(N,G),r=j.getFrustum(),x(S,w,j.camera,N,this.type)}j.isPointLightShadow!==!0&&this.type===mn&&M(j,w),j.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(L,b,A)};function M(y,S){const w=e.update(v);f.defines.VSM_SAMPLES!==y.blurSamples&&(f.defines.VSM_SAMPLES=y.blurSamples,p.defines.VSM_SAMPLES=y.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),y.mapPass===null&&(y.mapPass=new kn(i.x,i.y)),f.uniforms.shadow_pass.value=y.map.texture,f.uniforms.resolution.value=y.mapSize,f.uniforms.radius.value=y.radius,n.setRenderTarget(y.mapPass),n.clear(),n.renderBufferDirect(S,null,w,f,v,null),p.uniforms.shadow_pass.value=y.mapPass.texture,p.uniforms.resolution.value=y.mapSize,p.uniforms.radius.value=y.radius,n.setRenderTarget(y.map),n.clear(),n.renderBufferDirect(S,null,w,p,v,null)}function _(y,S,w,L){let b=null;const A=w.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(A!==void 0)b=A;else if(b=w.isPointLight===!0?l:o,n.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const k=b.uuid,U=S.uuid;let J=u[k];J===void 0&&(J={},u[k]=J);let C=J[U];C===void 0&&(C=b.clone(),J[U]=C),b=C}if(b.visible=S.visible,b.wireframe=S.wireframe,L===mn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:h[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,w.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=n.properties.get(b);k.light=w}return b}function x(y,S,w,L,b){if(y.visible===!1)return;if(y.layers.test(S.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&b===mn)&&(!y.frustumCulled||r.intersectsObject(y))){y.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,y.matrixWorld);const U=e.update(y),J=y.material;if(Array.isArray(J)){const C=U.groups;for(let R=0,N=C.length;R<N;R++){const j=C[R],ie=J[j.materialIndex];if(ie&&ie.visible){const te=_(y,ie,L,b);y.onBeforeShadow(n,y,S,w,U,te,j),n.renderBufferDirect(w,null,U,te,y,j),y.onAfterShadow(n,y,S,w,U,te,j)}}}else if(J.visible){const C=_(y,J,L,b);y.onBeforeShadow(n,y,S,w,U,C,null),n.renderBufferDirect(w,null,U,C,y,null),y.onAfterShadow(n,y,S,w,U,C,null)}}const k=y.children;for(let U=0,J=k.length;U<J;U++)x(k[U],S,w,L,b)}}function Qv(n,e,t){const r=t.isWebGL2;function i(){let F=!1;const pe=new vt;let ae=null;const Q=new vt(0,0,0,0);return{setMask:function(ce){ae!==ce&&!F&&(n.colorMask(ce,ce,ce,ce),ae=ce)},setLocked:function(ce){F=ce},setClear:function(ce,Ce,ze,dt,St){St===!0&&(ce*=dt,Ce*=dt,ze*=dt),pe.set(ce,Ce,ze,dt),Q.equals(pe)===!1&&(n.clearColor(ce,Ce,ze,dt),Q.copy(pe))},reset:function(){F=!1,ae=null,Q.set(-1,0,0,0)}}}function a(){let F=!1,pe=null,ae=null,Q=null;return{setTest:function(ce){ce?se(n.DEPTH_TEST):de(n.DEPTH_TEST)},setMask:function(ce){pe!==ce&&!F&&(n.depthMask(ce),pe=ce)},setFunc:function(ce){if(ae!==ce){switch(ce){case cd:n.depthFunc(n.NEVER);break;case hd:n.depthFunc(n.ALWAYS);break;case dd:n.depthFunc(n.LESS);break;case ta:n.depthFunc(n.LEQUAL);break;case fd:n.depthFunc(n.EQUAL);break;case pd:n.depthFunc(n.GEQUAL);break;case gd:n.depthFunc(n.GREATER);break;case md:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ae=ce}},setLocked:function(ce){F=ce},setClear:function(ce){Q!==ce&&(n.clearDepth(ce),Q=ce)},reset:function(){F=!1,pe=null,ae=null,Q=null}}}function s(){let F=!1,pe=null,ae=null,Q=null,ce=null,Ce=null,ze=null,dt=null,St=null;return{setTest:function(Ze){F||(Ze?se(n.STENCIL_TEST):de(n.STENCIL_TEST))},setMask:function(Ze){pe!==Ze&&!F&&(n.stencilMask(Ze),pe=Ze)},setFunc:function(Ze,Et,nn){(ae!==Ze||Q!==Et||ce!==nn)&&(n.stencilFunc(Ze,Et,nn),ae=Ze,Q=Et,ce=nn)},setOp:function(Ze,Et,nn){(Ce!==Ze||ze!==Et||dt!==nn)&&(n.stencilOp(Ze,Et,nn),Ce=Ze,ze=Et,dt=nn)},setLocked:function(Ze){F=Ze},setClear:function(Ze){St!==Ze&&(n.clearStencil(Ze),St=Ze)},reset:function(){F=!1,pe=null,ae=null,Q=null,ce=null,Ce=null,ze=null,dt=null,St=null}}}const o=new i,l=new a,u=new s,c=new WeakMap,h=new WeakMap;let f={},p={},m=new WeakMap,v=[],g=null,d=!1,M=null,_=null,x=null,y=null,S=null,w=null,L=null,b=new Xe(0,0,0),A=0,k=!1,U=null,J=null,C=null,R=null,N=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,te=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(G)[1]),ie=te>=1):G.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),ie=te>=2);let Y=null,ee={};const W=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),V=new vt().fromArray(W),ne=new vt().fromArray(z);function D(F,pe,ae,Q){const ce=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(F,Ce),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<ae;ze++)r&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(pe,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(pe+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ce}const Z={};Z[n.TEXTURE_2D]=D(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=D(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),r&&(Z[n.TEXTURE_2D_ARRAY]=D(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=D(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),se(n.DEPTH_TEST),l.setFunc(ta),De(!1),Ne(Ls),se(n.CULL_FACE),we(Mn);function se(F){f[F]!==!0&&(n.enable(F),f[F]=!0)}function de(F){f[F]!==!1&&(n.disable(F),f[F]=!1)}function ve(F,pe){return p[F]!==pe?(n.bindFramebuffer(F,pe),p[F]=pe,r&&(F===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=pe),F===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=pe)),!0):!1}function B(F,pe){let ae=v,Q=!1;if(F)if(ae=m.get(pe),ae===void 0&&(ae=[],m.set(pe,ae)),F.isWebGLMultipleRenderTargets){const ce=F.texture;if(ae.length!==ce.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let Ce=0,ze=ce.length;Ce<ze;Ce++)ae[Ce]=n.COLOR_ATTACHMENT0+Ce;ae.length=ce.length,Q=!0}}else ae[0]!==n.COLOR_ATTACHMENT0&&(ae[0]=n.COLOR_ATTACHMENT0,Q=!0);else ae[0]!==n.BACK&&(ae[0]=n.BACK,Q=!0);Q&&(t.isWebGL2?n.drawBuffers(ae):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ae))}function Je(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const ye={[$n]:n.FUNC_ADD,[Yh]:n.FUNC_SUBTRACT,[Kh]:n.FUNC_REVERSE_SUBTRACT};if(r)ye[Ns]=n.MIN,ye[Fs]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(ye[Ns]=F.MIN_EXT,ye[Fs]=F.MAX_EXT)}const Le={[Zh]:n.ZERO,[Jh]:n.ONE,[Qh]:n.SRC_COLOR,[So]:n.SRC_ALPHA,[ad]:n.SRC_ALPHA_SATURATE,[rd]:n.DST_COLOR,[td]:n.DST_ALPHA,[ed]:n.ONE_MINUS_SRC_COLOR,[Eo]:n.ONE_MINUS_SRC_ALPHA,[id]:n.ONE_MINUS_DST_COLOR,[nd]:n.ONE_MINUS_DST_ALPHA,[od]:n.CONSTANT_COLOR,[sd]:n.ONE_MINUS_CONSTANT_COLOR,[ld]:n.CONSTANT_ALPHA,[ud]:n.ONE_MINUS_CONSTANT_ALPHA};function we(F,pe,ae,Q,ce,Ce,ze,dt,St,Ze){if(F===Mn){d===!0&&(de(n.BLEND),d=!1);return}if(d===!1&&(se(n.BLEND),d=!0),F!==$h){if(F!==M||Ze!==k){if((_!==$n||S!==$n)&&(n.blendEquation(n.FUNC_ADD),_=$n,S=$n),Ze)switch(F){case Cr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Os:n.blendFunc(n.ONE,n.ONE);break;case Is:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ds:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Os:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Is:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ds:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,y=null,w=null,L=null,b.set(0,0,0),A=0,M=F,k=Ze}return}ce=ce||pe,Ce=Ce||ae,ze=ze||Q,(pe!==_||ce!==S)&&(n.blendEquationSeparate(ye[pe],ye[ce]),_=pe,S=ce),(ae!==x||Q!==y||Ce!==w||ze!==L)&&(n.blendFuncSeparate(Le[ae],Le[Q],Le[Ce],Le[ze]),x=ae,y=Q,w=Ce,L=ze),(dt.equals(b)===!1||St!==A)&&(n.blendColor(dt.r,dt.g,dt.b,St),b.copy(dt),A=St),M=F,k=!1}function je(F,pe){F.side===yn?de(n.CULL_FACE):se(n.CULL_FACE);let ae=F.side===Pt;pe&&(ae=!ae),De(ae),F.blending===Cr&&F.transparent===!1?we(Mn):we(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),o.setMask(F.colorWrite);const Q=F.stencilWrite;u.setTest(Q),Q&&(u.setMask(F.stencilWriteMask),u.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),u.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),st(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):de(n.SAMPLE_ALPHA_TO_COVERAGE)}function De(F){U!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),U=F)}function Ne(F){F!==jh?(se(n.CULL_FACE),F!==J&&(F===Ls?n.cullFace(n.BACK):F===Xh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):de(n.CULL_FACE),J=F}function qe(F){F!==C&&(ie&&n.lineWidth(F),C=F)}function st(F,pe,ae){F?(se(n.POLYGON_OFFSET_FILL),(R!==pe||N!==ae)&&(n.polygonOffset(pe,ae),R=pe,N=ae)):de(n.POLYGON_OFFSET_FILL)}function lt(F){F?se(n.SCISSOR_TEST):de(n.SCISSOR_TEST)}function P(F){F===void 0&&(F=n.TEXTURE0+j-1),Y!==F&&(n.activeTexture(F),Y=F)}function E(F,pe,ae){ae===void 0&&(Y===null?ae=n.TEXTURE0+j-1:ae=Y);let Q=ee[ae];Q===void 0&&(Q={type:void 0,texture:void 0},ee[ae]=Q),(Q.type!==F||Q.texture!==pe)&&(Y!==ae&&(n.activeTexture(ae),Y=ae),n.bindTexture(F,pe||Z[F]),Q.type=F,Q.texture=pe)}function X(){const F=ee[Y];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function le(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ue(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function _e(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function I(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function re(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Te(F){V.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),V.copy(F))}function Pe(F){ne.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ne.copy(F))}function Me(F,pe){let ae=h.get(pe);ae===void 0&&(ae=new WeakMap,h.set(pe,ae));let Q=ae.get(F);Q===void 0&&(Q=n.getUniformBlockIndex(pe,F.name),ae.set(F,Q))}function be(F,pe){const Q=h.get(pe).get(F);c.get(pe)!==Q&&(n.uniformBlockBinding(pe,Q,F.__bindingPointIndex),c.set(pe,Q))}function He(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),r===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Y=null,ee={},p={},m=new WeakMap,v=[],g=null,d=!1,M=null,_=null,x=null,y=null,S=null,w=null,L=null,b=new Xe(0,0,0),A=0,k=!1,U=null,J=null,C=null,R=null,N=null,V.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:se,disable:de,bindFramebuffer:ve,drawBuffers:B,useProgram:Je,setBlending:we,setMaterial:je,setFlipSided:De,setCullFace:Ne,setLineWidth:qe,setPolygonOffset:st,setScissorTest:lt,activeTexture:P,bindTexture:E,unbindTexture:X,compressedTexImage2D:le,compressedTexImage3D:oe,texImage2D:re,texImage3D:Oe,updateUBOMapping:Me,uniformBlockBinding:be,texStorage2D:I,texStorage3D:he,texSubImage2D:ue,texSubImage3D:Ee,compressedTexSubImage2D:fe,compressedTexSubImage3D:_e,scissor:Te,viewport:Pe,reset:He}}function e_(n,e,t,r,i,a,s){const o=i.isWebGL2,l=i.maxTextures,u=i.maxCubemapSize,c=i.maxTextureSize,h=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let v;const g=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(P,E){return d?new OffscreenCanvas(P,E):di("canvas")}function _(P,E,X,le){let oe=1;if((P.width>le||P.height>le)&&(oe=le/Math.max(P.width,P.height)),oe<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const ue=E?oa:Math.floor,Ee=ue(oe*P.width),fe=ue(oe*P.height);v===void 0&&(v=M(Ee,fe));const _e=X?M(Ee,fe):v;return _e.width=Ee,_e.height=fe,_e.getContext("2d").drawImage(P,0,0,Ee,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+Ee+"x"+fe+")."),_e}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function x(P){return Ro(P.width)&&Ro(P.height)}function y(P){return o?!1:P.wrapS!==Yt||P.wrapT!==Yt||P.minFilter!==At&&P.minFilter!==Bt}function S(P,E){return P.generateMipmaps&&E&&P.minFilter!==At&&P.minFilter!==Bt}function w(P){n.generateMipmap(P)}function L(P,E,X,le,oe=!1){if(o===!1)return E;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue=E;if(E===n.RED&&(X===n.FLOAT&&(ue=n.R32F),X===n.HALF_FLOAT&&(ue=n.R16F),X===n.UNSIGNED_BYTE&&(ue=n.R8)),E===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ue=n.R8UI),X===n.UNSIGNED_SHORT&&(ue=n.R16UI),X===n.UNSIGNED_INT&&(ue=n.R32UI),X===n.BYTE&&(ue=n.R8I),X===n.SHORT&&(ue=n.R16I),X===n.INT&&(ue=n.R32I)),E===n.RG&&(X===n.FLOAT&&(ue=n.RG32F),X===n.HALF_FLOAT&&(ue=n.RG16F),X===n.UNSIGNED_BYTE&&(ue=n.RG8)),E===n.RGBA){const Ee=oe?na:Ye.getTransfer(le);X===n.FLOAT&&(ue=n.RGBA32F),X===n.HALF_FLOAT&&(ue=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ue=Ee===Qe?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function b(P,E,X){return S(P,X)===!0||P.isFramebufferTexture&&P.minFilter!==At&&P.minFilter!==Bt?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function A(P){return P===At||P===Us||P===Ra?n.NEAREST:n.LINEAR}function k(P){const E=P.target;E.removeEventListener("dispose",k),J(E),E.isVideoTexture&&m.delete(E)}function U(P){const E=P.target;E.removeEventListener("dispose",U),R(E)}function J(P){const E=r.get(P);if(E.__webglInit===void 0)return;const X=P.source,le=g.get(X);if(le){const oe=le[E.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&C(P),Object.keys(le).length===0&&g.delete(X)}r.remove(P)}function C(P){const E=r.get(P);n.deleteTexture(E.__webglTexture);const X=P.source,le=g.get(X);delete le[E.__cacheKey],s.memory.textures--}function R(P){const E=P.texture,X=r.get(P),le=r.get(E);if(le.__webglTexture!==void 0&&(n.deleteTexture(le.__webglTexture),s.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(X.__webglFramebuffer[oe]))for(let ue=0;ue<X.__webglFramebuffer[oe].length;ue++)n.deleteFramebuffer(X.__webglFramebuffer[oe][ue]);else n.deleteFramebuffer(X.__webglFramebuffer[oe]);X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer[oe])}else{if(Array.isArray(X.__webglFramebuffer))for(let oe=0;oe<X.__webglFramebuffer.length;oe++)n.deleteFramebuffer(X.__webglFramebuffer[oe]);else n.deleteFramebuffer(X.__webglFramebuffer);if(X.__webglDepthbuffer&&n.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&n.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let oe=0;oe<X.__webglColorRenderbuffer.length;oe++)X.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(X.__webglColorRenderbuffer[oe]);X.__webglDepthRenderbuffer&&n.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let oe=0,ue=E.length;oe<ue;oe++){const Ee=r.get(E[oe]);Ee.__webglTexture&&(n.deleteTexture(Ee.__webglTexture),s.memory.textures--),r.remove(E[oe])}r.remove(E),r.remove(P)}let N=0;function j(){N=0}function ie(){const P=N;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),N+=1,P}function te(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function G(P,E){const X=r.get(P);if(P.isVideoTexture&&st(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){const le=P.image;if(le===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(le.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(X,P,E);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+E)}function Y(P,E){const X=r.get(P);if(P.version>0&&X.__version!==P.version){se(X,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+E)}function ee(P,E){const X=r.get(P);if(P.version>0&&X.__version!==P.version){se(X,P,E);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+E)}function W(P,E){const X=r.get(P);if(P.version>0&&X.__version!==P.version){de(X,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+E)}const z={[Ao]:n.REPEAT,[Yt]:n.CLAMP_TO_EDGE,[Co]:n.MIRRORED_REPEAT},V={[At]:n.NEAREST,[Us]:n.NEAREST_MIPMAP_NEAREST,[Ra]:n.NEAREST_MIPMAP_LINEAR,[Bt]:n.LINEAR,[Ed]:n.LINEAR_MIPMAP_NEAREST,[ci]:n.LINEAR_MIPMAP_LINEAR},ne={[Fd]:n.NEVER,[zd]:n.ALWAYS,[Ud]:n.LESS,[vc]:n.LEQUAL,[Gd]:n.EQUAL,[Hd]:n.GEQUAL,[kd]:n.GREATER,[Bd]:n.NOTEQUAL};function D(P,E,X){if(X?(n.texParameteri(P,n.TEXTURE_WRAP_S,z[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,z[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,z[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,V[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,V[E.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Yt||E.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,A(E.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,A(E.minFilter)),E.minFilter!==At&&E.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ne[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const le=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===At||E.minFilter!==Ra&&E.minFilter!==ci||E.type===Nn&&e.has("OES_texture_float_linear")===!1||o===!1&&E.type===Ir&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||r.get(E).__currentAnisotropy)&&(n.texParameterf(P,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy)}}function Z(P,E){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",k));const le=E.source;let oe=g.get(le);oe===void 0&&(oe={},g.set(le,oe));const ue=te(E);if(ue!==P.__cacheKey){oe[ue]===void 0&&(oe[ue]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,X=!0),oe[ue].usedTimes++;const Ee=oe[P.__cacheKey];Ee!==void 0&&(oe[P.__cacheKey].usedTimes--,Ee.usedTimes===0&&C(E)),P.__cacheKey=ue,P.__webglTexture=oe[ue].texture}return X}function se(P,E,X){let le=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(le=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(le=n.TEXTURE_3D);const oe=Z(P,E),ue=E.source;t.bindTexture(le,P.__webglTexture,n.TEXTURE0+X);const Ee=r.get(ue);if(ue.version!==Ee.__version||oe===!0){t.activeTexture(n.TEXTURE0+X);const fe=Ye.getPrimaries(Ye.workingColorSpace),_e=E.colorSpace===zt?null:Ye.getPrimaries(E.colorSpace),I=E.colorSpace===zt||fe===_e?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,I);const he=y(E)&&x(E.image)===!1;let re=_(E.image,he,!1,c);re=lt(E,re);const Oe=x(re)||o,Te=a.convert(E.format,E.colorSpace);let Pe=a.convert(E.type),Me=L(E.internalFormat,Te,Pe,E.colorSpace,E.isVideoTexture);D(le,E,Oe);let be;const He=E.mipmaps,F=o&&E.isVideoTexture!==!0&&Me!==pc,pe=Ee.__version===void 0||oe===!0,ae=b(E,re,Oe);if(E.isDepthTexture)Me=n.DEPTH_COMPONENT,o?E.type===Nn?Me=n.DEPTH_COMPONENT32F:E.type===Dn?Me=n.DEPTH_COMPONENT24:E.type===Kn?Me=n.DEPTH24_STENCIL8:Me=n.DEPTH_COMPONENT16:E.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Zn&&Me===n.DEPTH_COMPONENT&&E.type!==Jo&&E.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=Dn,Pe=a.convert(E.type)),E.format===Dr&&Me===n.DEPTH_COMPONENT&&(Me=n.DEPTH_STENCIL,E.type!==Kn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Kn,Pe=a.convert(E.type))),pe&&(F?t.texStorage2D(n.TEXTURE_2D,1,Me,re.width,re.height):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,Te,Pe,null));else if(E.isDataTexture)if(He.length>0&&Oe){F&&pe&&t.texStorage2D(n.TEXTURE_2D,ae,Me,He[0].width,He[0].height);for(let Q=0,ce=He.length;Q<ce;Q++)be=He[Q],F?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,be.width,be.height,Te,Pe,be.data):t.texImage2D(n.TEXTURE_2D,Q,Me,be.width,be.height,0,Te,Pe,be.data);E.generateMipmaps=!1}else F?(pe&&t.texStorage2D(n.TEXTURE_2D,ae,Me,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,re.width,re.height,Te,Pe,re.data)):t.texImage2D(n.TEXTURE_2D,0,Me,re.width,re.height,0,Te,Pe,re.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Me,He[0].width,He[0].height,re.depth);for(let Q=0,ce=He.length;Q<ce;Q++)be=He[Q],E.format!==Kt?Te!==null?F?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,re.depth,Te,be.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,Me,be.width,be.height,re.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,be.width,be.height,re.depth,Te,Pe,be.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,Me,be.width,be.height,re.depth,0,Te,Pe,be.data)}else{F&&pe&&t.texStorage2D(n.TEXTURE_2D,ae,Me,He[0].width,He[0].height);for(let Q=0,ce=He.length;Q<ce;Q++)be=He[Q],E.format!==Kt?Te!==null?F?t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,be.width,be.height,Te,be.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,Me,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,be.width,be.height,Te,Pe,be.data):t.texImage2D(n.TEXTURE_2D,Q,Me,be.width,be.height,0,Te,Pe,be.data)}else if(E.isDataArrayTexture)F?(pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,Me,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Te,Pe,re.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Me,re.width,re.height,re.depth,0,Te,Pe,re.data);else if(E.isData3DTexture)F?(pe&&t.texStorage3D(n.TEXTURE_3D,ae,Me,re.width,re.height,re.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Te,Pe,re.data)):t.texImage3D(n.TEXTURE_3D,0,Me,re.width,re.height,re.depth,0,Te,Pe,re.data);else if(E.isFramebufferTexture){if(pe)if(F)t.texStorage2D(n.TEXTURE_2D,ae,Me,re.width,re.height);else{let Q=re.width,ce=re.height;for(let Ce=0;Ce<ae;Ce++)t.texImage2D(n.TEXTURE_2D,Ce,Me,Q,ce,0,Te,Pe,null),Q>>=1,ce>>=1}}else if(He.length>0&&Oe){F&&pe&&t.texStorage2D(n.TEXTURE_2D,ae,Me,He[0].width,He[0].height);for(let Q=0,ce=He.length;Q<ce;Q++)be=He[Q],F?t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Te,Pe,be):t.texImage2D(n.TEXTURE_2D,Q,Me,Te,Pe,be);E.generateMipmaps=!1}else F?(pe&&t.texStorage2D(n.TEXTURE_2D,ae,Me,re.width,re.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Te,Pe,re)):t.texImage2D(n.TEXTURE_2D,0,Me,Te,Pe,re);S(E,Oe)&&w(le),Ee.__version=ue.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function de(P,E,X){if(E.image.length!==6)return;const le=Z(P,E),oe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+X);const ue=r.get(oe);if(oe.version!==ue.__version||le===!0){t.activeTexture(n.TEXTURE0+X);const Ee=Ye.getPrimaries(Ye.workingColorSpace),fe=E.colorSpace===zt?null:Ye.getPrimaries(E.colorSpace),_e=E.colorSpace===zt||Ee===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const I=E.isCompressedTexture||E.image[0].isCompressedTexture,he=E.image[0]&&E.image[0].isDataTexture,re=[];for(let Q=0;Q<6;Q++)!I&&!he?re[Q]=_(E.image[Q],!1,!0,u):re[Q]=he?E.image[Q].image:E.image[Q],re[Q]=lt(E,re[Q]);const Oe=re[0],Te=x(Oe)||o,Pe=a.convert(E.format,E.colorSpace),Me=a.convert(E.type),be=L(E.internalFormat,Pe,Me,E.colorSpace),He=o&&E.isVideoTexture!==!0,F=ue.__version===void 0||le===!0;let pe=b(E,Oe,Te);D(n.TEXTURE_CUBE_MAP,E,Te);let ae;if(I){He&&F&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,be,Oe.width,Oe.height);for(let Q=0;Q<6;Q++){ae=re[Q].mipmaps;for(let ce=0;ce<ae.length;ce++){const Ce=ae[ce];E.format!==Kt?Pe!==null?He?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ce.width,Ce.height,Pe,Ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ce.width,Ce.height,Pe,Me,Ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,be,Ce.width,Ce.height,0,Pe,Me,Ce.data)}}}else{ae=E.mipmaps,He&&F&&(ae.length>0&&pe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,be,re[0].width,re[0].height));for(let Q=0;Q<6;Q++)if(he){He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,re[Q].width,re[Q].height,Pe,Me,re[Q].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,be,re[Q].width,re[Q].height,0,Pe,Me,re[Q].data);for(let ce=0;ce<ae.length;ce++){const ze=ae[ce].image[Q].image;He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,ze.width,ze.height,Pe,Me,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,be,ze.width,ze.height,0,Pe,Me,ze.data)}}else{He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Pe,Me,re[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,be,Pe,Me,re[Q]);for(let ce=0;ce<ae.length;ce++){const Ce=ae[ce];He?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,Pe,Me,Ce.image[Q]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,be,Pe,Me,Ce.image[Q])}}}S(E,Te)&&w(n.TEXTURE_CUBE_MAP),ue.__version=oe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ve(P,E,X,le,oe,ue){const Ee=a.convert(X.format,X.colorSpace),fe=a.convert(X.type),_e=L(X.internalFormat,Ee,fe,X.colorSpace);if(!r.get(E).__hasExternalTextures){const he=Math.max(1,E.width>>ue),re=Math.max(1,E.height>>ue);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ue,_e,he,re,E.depth,0,Ee,fe,null):t.texImage2D(oe,ue,_e,he,re,0,Ee,fe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),qe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,le,oe,r.get(X).__webglTexture,0,Ne(E)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,le,oe,r.get(X).__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function B(P,E,X){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let le=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(X||qe(E)){const oe=E.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Nn?le=n.DEPTH_COMPONENT32F:oe.type===Dn&&(le=n.DEPTH_COMPONENT24));const ue=Ne(E);qe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ue,le,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ue,le,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,le,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const le=Ne(E);X&&qe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,E.width,E.height):qe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,le,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const le=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let oe=0;oe<le.length;oe++){const ue=le[oe],Ee=a.convert(ue.format,ue.colorSpace),fe=a.convert(ue.type),_e=L(ue.internalFormat,Ee,fe,ue.colorSpace),I=Ne(E);X&&qe(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,I,_e,E.width,E.height):qe(E)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,I,_e,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,_e,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Je(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),G(E.depthTexture,0);const le=r.get(E.depthTexture).__webglTexture,oe=Ne(E);if(E.depthTexture.format===Zn)qe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,le,0);else if(E.depthTexture.format===Dr)qe(E)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function ye(P){const E=r.get(P),X=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Je(E.__webglFramebuffer,P)}else if(X){E.__webglDepthbuffer=[];for(let le=0;le<6;le++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[le]),E.__webglDepthbuffer[le]=n.createRenderbuffer(),B(E.__webglDepthbuffer[le],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),B(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Le(P,E,X){const le=r.get(P);E!==void 0&&ve(le.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&ye(P)}function we(P){const E=P.texture,X=r.get(P),le=r.get(E);P.addEventListener("dispose",U),P.isWebGLMultipleRenderTargets!==!0&&(le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture()),le.__version=E.version,s.memory.textures++);const oe=P.isWebGLCubeRenderTarget===!0,ue=P.isWebGLMultipleRenderTargets===!0,Ee=x(P)||o;if(oe){X.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(o&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer[fe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)X.__webglFramebuffer[fe][_e]=n.createFramebuffer()}else X.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(o&&E.mipmaps&&E.mipmaps.length>0){X.__webglFramebuffer=[];for(let fe=0;fe<E.mipmaps.length;fe++)X.__webglFramebuffer[fe]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(ue)if(i.drawBuffers){const fe=P.texture;for(let _e=0,I=fe.length;_e<I;_e++){const he=r.get(fe[_e]);he.__webglTexture===void 0&&(he.__webglTexture=n.createTexture(),s.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&qe(P)===!1){const fe=ue?E:[E];X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){const I=fe[_e];X.__webglColorRenderbuffer[_e]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[_e]);const he=a.convert(I.format,I.colorSpace),re=a.convert(I.type),Oe=L(I.internalFormat,he,re,I.colorSpace,P.isXRRenderTarget===!0),Te=Ne(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,Oe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_e,n.RENDERBUFFER,X.__webglColorRenderbuffer[_e])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),B(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,le.__webglTexture),D(n.TEXTURE_CUBE_MAP,E,Ee);for(let fe=0;fe<6;fe++)if(o&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ve(X.__webglFramebuffer[fe][_e],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,_e);else ve(X.__webglFramebuffer[fe],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);S(E,Ee)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){const fe=P.texture;for(let _e=0,I=fe.length;_e<I;_e++){const he=fe[_e],re=r.get(he);t.bindTexture(n.TEXTURE_2D,re.__webglTexture),D(n.TEXTURE_2D,he,Ee),ve(X.__webglFramebuffer,P,he,n.COLOR_ATTACHMENT0+_e,n.TEXTURE_2D,0),S(he,Ee)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let fe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?fe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,le.__webglTexture),D(fe,E,Ee),o&&E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)ve(X.__webglFramebuffer[_e],P,E,n.COLOR_ATTACHMENT0,fe,_e);else ve(X.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,fe,0);S(E,Ee)&&w(fe),t.unbindTexture()}P.depthBuffer&&ye(P)}function je(P){const E=x(P)||o,X=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let le=0,oe=X.length;le<oe;le++){const ue=X[le];if(S(ue,E)){const Ee=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,fe=r.get(ue).__webglTexture;t.bindTexture(Ee,fe),w(Ee),t.unbindTexture()}}}function De(P){if(o&&P.samples>0&&qe(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],X=P.width,le=P.height;let oe=n.COLOR_BUFFER_BIT;const ue=[],Ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=r.get(P),_e=P.isWebGLMultipleRenderTargets===!0;if(_e)for(let I=0;I<E.length;I++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let I=0;I<E.length;I++){ue.push(n.COLOR_ATTACHMENT0+I),P.depthBuffer&&ue.push(Ee);const he=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(he===!1&&(P.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),_e&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[I]),he===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ee]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ee])),_e){const re=r.get(E[I]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,re,0)}n.blitFramebuffer(0,0,X,le,0,0,X,le,oe,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ue)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),_e)for(let I=0;I<E.length;I++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.RENDERBUFFER,fe.__webglColorRenderbuffer[I]);const he=r.get(E[I]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+I,n.TEXTURE_2D,he,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Ne(P){return Math.min(h,P.samples)}function qe(P){const E=r.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function st(P){const E=s.render.frame;m.get(P)!==E&&(m.set(P,E),P.update())}function lt(P,E){const X=P.colorSpace,le=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Po||X!==En&&X!==zt&&(Ye.getTransfer(X)===Qe?o===!1?e.has("EXT_sRGB")===!0&&le===Kt?(P.format=Po,P.minFilter=Bt,P.generateMipmaps=!1):E=yc.sRGBToLinear(E):(le!==Kt||oe!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),E}this.allocateTextureUnit=ie,this.resetTextureUnits=j,this.setTexture2D=G,this.setTexture2DArray=Y,this.setTexture3D=ee,this.setTextureCube=W,this.rebindTextures=Le,this.setupRenderTarget=we,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ye,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=qe}function t_(n,e,t){const r=t.isWebGL2;function i(a,s=zt){let o;const l=Ye.getTransfer(s);if(a===Un)return n.UNSIGNED_BYTE;if(a===uc)return n.UNSIGNED_SHORT_4_4_4_4;if(a===cc)return n.UNSIGNED_SHORT_5_5_5_1;if(a===wd)return n.BYTE;if(a===Td)return n.SHORT;if(a===Jo)return n.UNSIGNED_SHORT;if(a===lc)return n.INT;if(a===Dn)return n.UNSIGNED_INT;if(a===Nn)return n.FLOAT;if(a===Ir)return r?n.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(a===Ad)return n.ALPHA;if(a===Kt)return n.RGBA;if(a===Cd)return n.LUMINANCE;if(a===Pd)return n.LUMINANCE_ALPHA;if(a===Zn)return n.DEPTH_COMPONENT;if(a===Dr)return n.DEPTH_STENCIL;if(a===Po)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(a===Rd)return n.RED;if(a===hc)return n.RED_INTEGER;if(a===Ld)return n.RG;if(a===dc)return n.RG_INTEGER;if(a===fc)return n.RGBA_INTEGER;if(a===La||a===Oa||a===Ia||a===Da)if(l===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(a===La)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Oa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Da)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(a===La)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Oa)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Da)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Gs||a===ks||a===Bs||a===Hs)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(a===Gs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ks)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Bs)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Hs)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===pc)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===zs||a===Vs)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(a===zs)return l===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(a===Vs)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Ws||a===js||a===Xs||a===qs||a===$s||a===Ys||a===Ks||a===Zs||a===Js||a===Qs||a===el||a===tl||a===nl||a===rl)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(a===Ws)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===js)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Xs)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===qs)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===$s)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ys)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Ks)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Zs)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Js)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Qs)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===el)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===tl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===nl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===rl)return l===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Na||a===il||a===al)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(a===Na)return l===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===il)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===al)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Od||a===ol||a===sl||a===ll)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(a===Na)return o.COMPRESSED_RED_RGTC1_EXT;if(a===ol)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===sl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ll)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Kn?r?n.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[a]!==void 0?n[a]:null}return{convert:i}}class n_ extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let wr=class extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}};const r_={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let i=null,a=null,s=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){s=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,r),d=this._getHandJoint(u,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,m=.005;u.inputState.pinching&&f>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,r),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r_)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new wr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class i_ extends tn{constructor(e,t){super();const r=this;let i=null,a=1,s=null,o="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,m=null;const v=t.getContextAttributes();let g=null,d=null;const M=[],_=[],x=new me;let y=null;const S=new Ht;S.layers.enable(1),S.viewport=new vt;const w=new Ht;w.layers.enable(2),w.viewport=new vt;const L=[S,w],b=new n_;b.layers.enable(1),b.layers.enable(2);let A=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let z=M[W];return z===void 0&&(z=new io,M[W]=z),z.getTargetRaySpace()},this.getControllerGrip=function(W){let z=M[W];return z===void 0&&(z=new io,M[W]=z),z.getGripSpace()},this.getHand=function(W){let z=M[W];return z===void 0&&(z=new io,M[W]=z),z.getHandSpace()};function U(W){const z=_.indexOf(W.inputSource);if(z===-1)return;const V=M[z];V!==void 0&&(V.update(W.inputSource,W.frame,u||s),V.dispatchEvent({type:W.type,data:W.inputSource}))}function J(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",C);for(let W=0;W<M.length;W++){const z=_[W];z!==null&&(_[W]=null,M[W].disconnect(z))}A=null,k=null,e.setRenderTarget(g),p=null,f=null,h=null,i=null,d=null,ee.stop(),r.isPresenting=!1,e.setPixelRatio(y),e.setSize(x.width,x.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){a=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||s},this.setReferenceSpace=function(W){u=W},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",J),i.addEventListener("inputsourceschange",C),v.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(x),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const z={antialias:i.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new kn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let z=null,V=null,ne=null;v.depth&&(ne=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=v.stencil?Dr:Zn,V=v.stencil?Kn:Dn);const D={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:a};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(D),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new kn(f.textureWidth,f.textureHeight,{format:Kt,type:Un,depthTexture:new Rc(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Z=e.properties.get(d);Z.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,s=await i.requestReferenceSpace(o),ee.setContext(i),ee.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function C(W){for(let z=0;z<W.removed.length;z++){const V=W.removed[z],ne=_.indexOf(V);ne>=0&&(_[ne]=null,M[ne].disconnect(V))}for(let z=0;z<W.added.length;z++){const V=W.added[z];let ne=_.indexOf(V);if(ne===-1){for(let Z=0;Z<M.length;Z++)if(Z>=_.length){_.push(V),ne=Z;break}else if(_[Z]===null){_[Z]=V,ne=Z;break}if(ne===-1)break}const D=M[ne];D&&D.connect(V)}}const R=new O,N=new O;function j(W,z,V){R.setFromMatrixPosition(z.matrixWorld),N.setFromMatrixPosition(V.matrixWorld);const ne=R.distanceTo(N),D=z.projectionMatrix.elements,Z=V.projectionMatrix.elements,se=D[14]/(D[10]-1),de=D[14]/(D[10]+1),ve=(D[9]+1)/D[5],B=(D[9]-1)/D[5],Je=(D[8]-1)/D[0],ye=(Z[8]+1)/Z[0],Le=se*Je,we=se*ye,je=ne/(-Je+ye),De=je*-Je;z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(De),W.translateZ(je),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ne=se+je,qe=de+je,st=Le-De,lt=we+(ne-De),P=ve*de/qe*Ne,E=B*de/qe*Ne;W.projectionMatrix.makePerspective(st,lt,P,E,Ne,qe),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function ie(W,z){z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;b.near=w.near=S.near=W.near,b.far=w.far=S.far=W.far,(A!==b.near||k!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,k=b.far);const z=W.parent,V=b.cameras;ie(b,z);for(let ne=0;ne<V.length;ne++)ie(V[ne],z);V.length===2?j(b,S,w):b.projectionMatrix.copy(S.projectionMatrix),te(W,b,z)};function te(W,z,V){V===null?W.matrix.copy(z.matrixWorld):(W.matrix.copy(V.matrixWorld),W.matrix.invert(),W.matrix.multiply(z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(z.projectionMatrix),W.projectionMatrixInverse.copy(z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=hi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=W)};let G=null;function Y(W,z){if(c=z.getViewerPose(u||s),m=z,c!==null){const V=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ne=!1;V.length!==b.cameras.length&&(b.cameras.length=0,ne=!0);for(let D=0;D<V.length;D++){const Z=V[D];let se=null;if(p!==null)se=p.getViewport(Z);else{const ve=h.getViewSubImage(f,Z);se=ve.viewport,D===0&&(e.setRenderTargetTextures(d,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(d))}let de=L[D];de===void 0&&(de=new Ht,de.layers.enable(D),de.viewport=new vt,L[D]=de),de.matrix.fromArray(Z.transform.matrix),de.matrix.decompose(de.position,de.quaternion,de.scale),de.projectionMatrix.fromArray(Z.projectionMatrix),de.projectionMatrixInverse.copy(de.projectionMatrix).invert(),de.viewport.set(se.x,se.y,se.width,se.height),D===0&&(b.matrix.copy(de.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ne===!0&&b.cameras.push(de)}}for(let V=0;V<M.length;V++){const ne=_[V],D=M[V];ne!==null&&D!==void 0&&D.update(ne,z,u||s)}G&&G(W,z),z.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:z}),m=null}const ee=new Pc;ee.setAnimationLoop(Y),this.setAnimationLoop=function(W){G=W},this.dispose=function(){}}}function a_(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function r(g,d){d.color.getRGB(g.fogColor.value,wc(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function i(g,d,M,_,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?a(g,d):d.isMeshToonMaterial?(a(g,d),h(g,d)):d.isMeshPhongMaterial?(a(g,d),c(g,d)):d.isMeshStandardMaterial?(a(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,x)):d.isMeshMatcapMaterial?(a(g,d),m(g,d)):d.isMeshDepthMaterial?a(g,d):d.isMeshDistanceMaterial?(a(g,d),v(g,d)):d.isMeshNormalMaterial?a(g,d):d.isLineBasicMaterial?(s(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,M,_):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function a(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Pt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Pt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(g.envMap.value=M,g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function s(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,M,_){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*M,g.scale.value=_*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function h(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,M){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Pt&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const M=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function o_(n,e,t,r){let i={},a={},s=[];const o=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){const x=_.program;r.uniformBlockBinding(M,x)}function u(M,_){let x=i[M.id];x===void 0&&(m(M),x=c(M),i[M.id]=x,M.addEventListener("dispose",g));const y=_.program;r.updateUBOMapping(M,y);const S=e.render.frame;a[M.id]!==S&&(f(M),a[M.id]=S)}function c(M){const _=h();M.__bindingPointIndex=_;const x=n.createBuffer(),y=M.__size,S=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,y,S),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function h(){for(let M=0;M<o;M++)if(s.indexOf(M)===-1)return s.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const _=i[M.id],x=M.uniforms,y=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let S=0,w=x.length;S<w;S++){const L=x[S];if(p(L,S,y)===!0){const b=L.__offset,A=Array.isArray(L.value)?L.value:[L.value];let k=0;for(let U=0;U<A.length;U++){const J=A[U],C=v(J);typeof J=="number"?(L.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,b+k,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=J.elements[0],L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=J.elements[0],L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=J.elements[0]):(J.toArray(L.__data,k),k+=C.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,b,L.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(M,_,x){const y=M.value;if(x[_]===void 0){if(typeof y=="number")x[_]=y;else{const S=Array.isArray(y)?y:[y],w=[];for(let L=0;L<S.length;L++)w.push(S[L].clone());x[_]=w}return!0}else if(typeof y=="number"){if(x[_]!==y)return x[_]=y,!0}else{const S=Array.isArray(x[_])?x[_]:[x[_]],w=Array.isArray(y)?y:[y];for(let L=0;L<S.length;L++){const b=S[L];if(b.equals(w[L])===!1)return b.copy(w[L]),!0}}return!1}function m(M){const _=M.uniforms;let x=0;const y=16;let S=0;for(let w=0,L=_.length;w<L;w++){const b=_[w],A={boundary:0,storage:0},k=Array.isArray(b.value)?b.value:[b.value];for(let U=0,J=k.length;U<J;U++){const C=k[U],R=v(C);A.boundary+=R.boundary,A.storage+=R.storage}if(b.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=x,w>0){S=x%y;const U=y-S;S!==0&&U-A.boundary<0&&(x+=y-S,b.__offset=x)}x+=A.storage}return S=x%y,S>0&&(x+=y-S),M.__size=x,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function g(M){const _=M.target;_.removeEventListener("dispose",g);const x=s.indexOf(_.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(i[_.id]),delete i[_.id],delete a[_.id]}function d(){for(const M in i)n.deleteBuffer(i[M]);s=[],i={},a={}}return{bind:l,update:u,dispose:d}}class Fc{constructor(e={}){const{canvas:t=rf(),context:r=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;r!==null?f=r.getContextAttributes().alpha:f=s;const p=new Uint32Array(4),m=new Int32Array(4);let v=null,g=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Fn,this.toneMappingExposure=1;const _=this;let x=!1,y=0,S=0,w=null,L=-1,b=null;const A=new vt,k=new vt;let U=null;const J=new Xe(0);let C=0,R=t.width,N=t.height,j=1,ie=null,te=null;const G=new vt(0,0,R,N),Y=new vt(0,0,R,N);let ee=!1;const W=new rs;let z=!1,V=!1,ne=null;const D=new et,Z=new me,se=new O,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ve(){return w===null?j:1}let B=r;function Je(T,H){for(let $=0;$<T.length;$++){const K=T[$],q=t.getContext(K,H);if(q!==null)return q}return null}try{const T={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ko}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",pe,!1),B===null){const H=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&H.shift(),B=Je(H,T),B===null)throw Je(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ye,Le,we,je,De,Ne,qe,st,lt,P,E,X,le,oe,ue,Ee,fe,_e,I,he,re,Oe,Te,Pe;function Me(){ye=new vm(B),Le=new hm(B,ye,e),ye.init(Le),Oe=new t_(B,ye,Le),we=new Qv(B,ye,Le),je=new xm(B),De=new kv,Ne=new e_(B,ye,we,De,Le,Oe,je),qe=new fm(_),st=new mm(_),lt=new Cf(B,Le),Te=new um(B,ye,lt,Le),P=new _m(B,lt,je,Te),E=new Em(B,P,lt,je),I=new Sm(B,Le,Ne),Ee=new dm(De),X=new Gv(_,qe,st,ye,Le,Te,Ee),le=new a_(_,De),oe=new Hv,ue=new qv(ye,Le),_e=new lm(_,qe,st,we,E,f,l),fe=new Jv(_,E,Le),Pe=new o_(B,je,Le,we),he=new cm(B,ye,je,Le),re=new ym(B,ye,je,Le),je.programs=X.programs,_.capabilities=Le,_.extensions=ye,_.properties=De,_.renderLists=oe,_.shadowMap=fe,_.state=we,_.info=je}Me();const be=new i_(_,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const T=ye.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ye.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(T){T!==void 0&&(j=T,this.setSize(R,N,!1))},this.getSize=function(T){return T.set(R,N)},this.setSize=function(T,H,$=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}R=T,N=H,t.width=Math.floor(T*j),t.height=Math.floor(H*j),$===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(R*j,N*j).floor()},this.setDrawingBufferSize=function(T,H,$){R=T,N=H,j=$,t.width=Math.floor(T*$),t.height=Math.floor(H*$),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(G)},this.setViewport=function(T,H,$,K){T.isVector4?G.set(T.x,T.y,T.z,T.w):G.set(T,H,$,K),we.viewport(A.copy(G).multiplyScalar(j).floor())},this.getScissor=function(T){return T.copy(Y)},this.setScissor=function(T,H,$,K){T.isVector4?Y.set(T.x,T.y,T.z,T.w):Y.set(T,H,$,K),we.scissor(k.copy(Y).multiplyScalar(j).floor())},this.getScissorTest=function(){return ee},this.setScissorTest=function(T){we.setScissorTest(ee=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){te=T},this.getClearColor=function(T){return T.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(T=!0,H=!0,$=!0){let K=0;if(T){let q=!1;if(w!==null){const xe=w.texture.format;q=xe===fc||xe===dc||xe===hc}if(q){const xe=w.texture.type,Ae=xe===Un||xe===Dn||xe===Jo||xe===Kn||xe===uc||xe===cc,Ie=_e.getClearColor(),Fe=_e.getClearAlpha(),Be=Ie.r,Ue=Ie.g,Ge=Ie.b;Ae?(p[0]=Be,p[1]=Ue,p[2]=Ge,p[3]=Fe,B.clearBufferuiv(B.COLOR,0,p)):(m[0]=Be,m[1]=Ue,m[2]=Ge,m[3]=Fe,B.clearBufferiv(B.COLOR,0,m))}else K|=B.COLOR_BUFFER_BIT}H&&(K|=B.DEPTH_BUFFER_BIT),$&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),oe.dispose(),ue.dispose(),De.dispose(),qe.dispose(),st.dispose(),E.dispose(),Te.dispose(),Pe.dispose(),X.dispose(),be.dispose(),be.removeEventListener("sessionstart",St),be.removeEventListener("sessionend",Ze),ne&&(ne.dispose(),ne=null),Et.stop()};function He(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const T=je.autoReset,H=fe.enabled,$=fe.autoUpdate,K=fe.needsUpdate,q=fe.type;Me(),je.autoReset=T,fe.enabled=H,fe.autoUpdate=$,fe.needsUpdate=K,fe.type=q}function pe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ae(T){const H=T.target;H.removeEventListener("dispose",ae),Q(H)}function Q(T){ce(T),De.remove(T)}function ce(T){const H=De.get(T).programs;H!==void 0&&(H.forEach(function($){X.releaseProgram($)}),T.isShaderMaterial&&X.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,$,K,q,xe){H===null&&(H=de);const Ae=q.isMesh&&q.matrixWorld.determinant()<0,Ie=Gh(T,H,$,K,q);we.setMaterial(K,Ae);let Fe=$.index,Be=1;if(K.wireframe===!0){if(Fe=P.getWireframeAttribute($),Fe===void 0)return;Be=2}const Ue=$.drawRange,Ge=$.attributes.position;let at=Ue.start*Be,It=(Ue.start+Ue.count)*Be;xe!==null&&(at=Math.max(at,xe.start*Be),It=Math.min(It,(xe.start+xe.count)*Be)),Fe!==null?(at=Math.max(at,0),It=Math.min(It,Fe.count)):Ge!=null&&(at=Math.max(at,0),It=Math.min(It,Ge.count));const ft=It-at;if(ft<0||ft===1/0)return;Te.setup(q,K,Ie,$,Fe);let ln,rt=he;if(Fe!==null&&(ln=lt.get(Fe),rt=re,rt.setIndex(ln)),q.isMesh)K.wireframe===!0?(we.setLineWidth(K.wireframeLinewidth*ve()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(q.isLine){let Ve=K.linewidth;Ve===void 0&&(Ve=1),we.setLineWidth(Ve*ve()),q.isLineSegments?rt.setMode(B.LINES):q.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else q.isPoints?rt.setMode(B.POINTS):q.isSprite&&rt.setMode(B.TRIANGLES);if(q.isBatchedMesh)rt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)rt.renderInstances(at,ft,q.count);else if($.isInstancedBufferGeometry){const Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ta=Math.min($.instanceCount,Ve);rt.renderInstances(at,ft,Ta)}else rt.render(at,ft)};function Ce(T,H,$){T.transparent===!0&&T.side===yn&&T.forceSinglePass===!1?(T.side=Pt,T.needsUpdate=!0,yi(T,H,$),T.side=Gn,T.needsUpdate=!0,yi(T,H,$),T.side=yn):yi(T,H,$)}this.compile=function(T,H,$=null){$===null&&($=T),g=ue.get($),g.init(),M.push(g),$.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),T!==$&&T.traverseVisible(function(q){q.isLight&&q.layers.test(H.layers)&&(g.pushLight(q),q.castShadow&&g.pushShadow(q))}),g.setupLights(_._useLegacyLights);const K=new Set;return T.traverse(function(q){const xe=q.material;if(xe)if(Array.isArray(xe))for(let Ae=0;Ae<xe.length;Ae++){const Ie=xe[Ae];Ce(Ie,$,q),K.add(Ie)}else Ce(xe,$,q),K.add(xe)}),M.pop(),g=null,K},this.compileAsync=function(T,H,$=null){const K=this.compile(T,H,$);return new Promise(q=>{function xe(){if(K.forEach(function(Ae){De.get(Ae).currentProgram.isReady()&&K.delete(Ae)}),K.size===0){q(T);return}setTimeout(xe,10)}ye.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ze=null;function dt(T){ze&&ze(T)}function St(){Et.stop()}function Ze(){Et.start()}const Et=new Pc;Et.setAnimationLoop(dt),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(T){ze=T,be.setAnimationLoop(T),T===null?Et.stop():Et.start()},be.addEventListener("sessionstart",St),be.addEventListener("sessionend",Ze),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(H),H=be.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,H,w),g=ue.get(T,M.length),g.init(),M.push(g),D.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),W.setFromProjectionMatrix(D),V=this.localClippingEnabled,z=Ee.init(this.clippingPlanes,V),v=oe.get(T,d.length),v.init(),d.push(v),nn(T,H,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(ie,te),this.info.render.frame++,z===!0&&Ee.beginShadows();const $=g.state.shadowsArray;if(fe.render($,T,H),z===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),_e.render(v,T),g.setupLights(_._useLegacyLights),H.isArrayCamera){const K=H.cameras;for(let q=0,xe=K.length;q<xe;q++){const Ae=K[q];ws(v,T,Ae,Ae.viewport)}}else ws(v,T,H);w!==null&&(Ne.updateMultisampleRenderTarget(w),Ne.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,H),Te.resetDefaultState(),L=-1,b=null,M.pop(),M.length>0?g=M[M.length-1]:g=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function nn(T,H,$,K){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||W.intersectsSprite(T)){K&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(D);const Ae=E.update(T),Ie=T.material;Ie.visible&&v.push(T,Ae,Ie,$,se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||W.intersectsObject(T))){const Ae=E.update(T),Ie=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),se.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),se.copy(Ae.boundingSphere.center)),se.applyMatrix4(T.matrixWorld).applyMatrix4(D)),Array.isArray(Ie)){const Fe=Ae.groups;for(let Be=0,Ue=Fe.length;Be<Ue;Be++){const Ge=Fe[Be],at=Ie[Ge.materialIndex];at&&at.visible&&v.push(T,Ae,at,$,se.z,Ge)}}else Ie.visible&&v.push(T,Ae,Ie,$,se.z,null)}}const xe=T.children;for(let Ae=0,Ie=xe.length;Ae<Ie;Ae++)nn(xe[Ae],H,$,K)}function ws(T,H,$,K){const q=T.opaque,xe=T.transmissive,Ae=T.transparent;g.setupLightsView($),z===!0&&Ee.setGlobalState(_.clippingPlanes,$),xe.length>0&&Uh(q,xe,H,$),K&&we.viewport(A.copy(K)),q.length>0&&_i(q,H,$),xe.length>0&&_i(xe,H,$),Ae.length>0&&_i(Ae,H,$),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Uh(T,H,$,K){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;const xe=Le.isWebGL2;ne===null&&(ne=new kn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Ir:Un,minFilter:ci,samples:xe?4:0})),_.getDrawingBufferSize(Z),xe?ne.setSize(Z.x,Z.y):ne.setSize(oa(Z.x),oa(Z.y));const Ae=_.getRenderTarget();_.setRenderTarget(ne),_.getClearColor(J),C=_.getClearAlpha(),C<1&&_.setClearColor(16777215,.5),_.clear();const Ie=_.toneMapping;_.toneMapping=Fn,_i(T,$,K),Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne);let Fe=!1;for(let Be=0,Ue=H.length;Be<Ue;Be++){const Ge=H[Be],at=Ge.object,It=Ge.geometry,ft=Ge.material,ln=Ge.group;if(ft.side===yn&&at.layers.test(K.layers)){const rt=ft.side;ft.side=Pt,ft.needsUpdate=!0,Ts(at,$,K,It,ft,ln),ft.side=rt,ft.needsUpdate=!0,Fe=!0}}Fe===!0&&(Ne.updateMultisampleRenderTarget(ne),Ne.updateRenderTargetMipmap(ne)),_.setRenderTarget(Ae),_.setClearColor(J,C),_.toneMapping=Ie}function _i(T,H,$){const K=H.isScene===!0?H.overrideMaterial:null;for(let q=0,xe=T.length;q<xe;q++){const Ae=T[q],Ie=Ae.object,Fe=Ae.geometry,Be=K===null?Ae.material:K,Ue=Ae.group;Ie.layers.test($.layers)&&Ts(Ie,H,$,Fe,Be,Ue)}}function Ts(T,H,$,K,q,xe){T.onBeforeRender(_,H,$,K,q,xe),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(_,H,$,K,T,xe),q.transparent===!0&&q.side===yn&&q.forceSinglePass===!1?(q.side=Pt,q.needsUpdate=!0,_.renderBufferDirect($,H,K,q,T,xe),q.side=Gn,q.needsUpdate=!0,_.renderBufferDirect($,H,K,q,T,xe),q.side=yn):_.renderBufferDirect($,H,K,q,T,xe),T.onAfterRender(_,H,$,K,q,xe)}function yi(T,H,$){H.isScene!==!0&&(H=de);const K=De.get(T),q=g.state.lights,xe=g.state.shadowsArray,Ae=q.state.version,Ie=X.getParameters(T,q.state,xe,H,$),Fe=X.getProgramCacheKey(Ie);let Be=K.programs;K.environment=T.isMeshStandardMaterial?H.environment:null,K.fog=H.fog,K.envMap=(T.isMeshStandardMaterial?st:qe).get(T.envMap||K.environment),Be===void 0&&(T.addEventListener("dispose",ae),Be=new Map,K.programs=Be);let Ue=Be.get(Fe);if(Ue!==void 0){if(K.currentProgram===Ue&&K.lightsStateVersion===Ae)return Cs(T,Ie),Ue}else Ie.uniforms=X.getUniforms(T),T.onBuild($,Ie,_),T.onBeforeCompile(Ie,_),Ue=X.acquireProgram(Ie,Fe),Be.set(Fe,Ue),K.uniforms=Ie.uniforms;const Ge=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=Ee.uniform),Cs(T,Ie),K.needsLights=Bh(T),K.lightsStateVersion=Ae,K.needsLights&&(Ge.ambientLightColor.value=q.state.ambient,Ge.lightProbe.value=q.state.probe,Ge.directionalLights.value=q.state.directional,Ge.directionalLightShadows.value=q.state.directionalShadow,Ge.spotLights.value=q.state.spot,Ge.spotLightShadows.value=q.state.spotShadow,Ge.rectAreaLights.value=q.state.rectArea,Ge.ltc_1.value=q.state.rectAreaLTC1,Ge.ltc_2.value=q.state.rectAreaLTC2,Ge.pointLights.value=q.state.point,Ge.pointLightShadows.value=q.state.pointShadow,Ge.hemisphereLights.value=q.state.hemi,Ge.directionalShadowMap.value=q.state.directionalShadowMap,Ge.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ge.spotShadowMap.value=q.state.spotShadowMap,Ge.spotLightMatrix.value=q.state.spotLightMatrix,Ge.spotLightMap.value=q.state.spotLightMap,Ge.pointShadowMap.value=q.state.pointShadowMap,Ge.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=Ue,K.uniformsList=null,Ue}function As(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=Yi.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Cs(T,H){const $=De.get(T);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function Gh(T,H,$,K,q){H.isScene!==!0&&(H=de),Ne.resetTextureUnits();const xe=H.fog,Ae=K.isMeshStandardMaterial?H.environment:null,Ie=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:En,Fe=(K.isMeshStandardMaterial?st:qe).get(K.envMap||Ae),Be=K.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ue=!!$.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ge=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,It=!!$.morphAttributes.color;let ft=Fn;K.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ft=_.toneMapping);const ln=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,rt=ln!==void 0?ln.length:0,Ve=De.get(K),Ta=g.state.lights;if(z===!0&&(V===!0||T!==b)){const Gt=T===b&&K.id===L;Ee.setState(K,T,Gt)}let it=!1;K.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ta.state.version||Ve.outputColorSpace!==Ie||q.isBatchedMesh&&Ve.batching===!1||!q.isBatchedMesh&&Ve.batching===!0||q.isInstancedMesh&&Ve.instancing===!1||!q.isInstancedMesh&&Ve.instancing===!0||q.isSkinnedMesh&&Ve.skinning===!1||!q.isSkinnedMesh&&Ve.skinning===!0||q.isInstancedMesh&&Ve.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ve.instancingColor===!1&&q.instanceColor!==null||Ve.envMap!==Fe||K.fog===!0&&Ve.fog!==xe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ee.numPlanes||Ve.numIntersection!==Ee.numIntersection)||Ve.vertexAlphas!==Be||Ve.vertexTangents!==Ue||Ve.morphTargets!==Ge||Ve.morphNormals!==at||Ve.morphColors!==It||Ve.toneMapping!==ft||Le.isWebGL2===!0&&Ve.morphTargetsCount!==rt)&&(it=!0):(it=!0,Ve.__version=K.version);let Hn=Ve.currentProgram;it===!0&&(Hn=yi(K,H,q));let Ps=!1,Hr=!1,Aa=!1;const yt=Hn.getUniforms(),zn=Ve.uniforms;if(we.useProgram(Hn.program)&&(Ps=!0,Hr=!0,Aa=!0),K.id!==L&&(L=K.id,Hr=!0),Ps||b!==T){yt.setValue(B,"projectionMatrix",T.projectionMatrix),yt.setValue(B,"viewMatrix",T.matrixWorldInverse);const Gt=yt.map.cameraPosition;Gt!==void 0&&Gt.setValue(B,se.setFromMatrixPosition(T.matrixWorld)),Le.logarithmicDepthBuffer&&yt.setValue(B,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&yt.setValue(B,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,Hr=!0,Aa=!0)}if(q.isSkinnedMesh){yt.setOptional(B,q,"bindMatrix"),yt.setOptional(B,q,"bindMatrixInverse");const Gt=q.skeleton;Gt&&(Le.floatVertexTextures?(Gt.boneTexture===null&&Gt.computeBoneTexture(),yt.setValue(B,"boneTexture",Gt.boneTexture,Ne)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}q.isBatchedMesh&&(yt.setOptional(B,q,"batchingTexture"),yt.setValue(B,"batchingTexture",q._matricesTexture,Ne));const Ca=$.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0&&Le.isWebGL2===!0)&&I.update(q,$,Hn),(Hr||Ve.receiveShadow!==q.receiveShadow)&&(Ve.receiveShadow=q.receiveShadow,yt.setValue(B,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(zn.envMap.value=Fe,zn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),Hr&&(yt.setValue(B,"toneMappingExposure",_.toneMappingExposure),Ve.needsLights&&kh(zn,Aa),xe&&K.fog===!0&&le.refreshFogUniforms(zn,xe),le.refreshMaterialUniforms(zn,K,j,N,ne),Yi.upload(B,As(Ve),zn,Ne)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Yi.upload(B,As(Ve),zn,Ne),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&yt.setValue(B,"center",q.center),yt.setValue(B,"modelViewMatrix",q.modelViewMatrix),yt.setValue(B,"normalMatrix",q.normalMatrix),yt.setValue(B,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Gt=K.uniformsGroups;for(let Pa=0,Hh=Gt.length;Pa<Hh;Pa++)if(Le.isWebGL2){const Rs=Gt[Pa];Pe.update(Rs,Hn),Pe.bind(Rs,Hn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hn}function kh(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Bh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,H,$){De.get(T.texture).__webglTexture=H,De.get(T.depthTexture).__webglTexture=$;const K=De.get(T);K.__hasExternalTextures=!0,K.__hasExternalTextures&&(K.__autoAllocateDepthBuffer=$===void 0,K.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const $=De.get(T);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,$=0){w=T,y=H,S=$;let K=!0,q=null,xe=!1,Ae=!1;if(T){const Fe=De.get(T);Fe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(B.FRAMEBUFFER,null),K=!1):Fe.__webglFramebuffer===void 0?Ne.setupRenderTarget(T):Fe.__hasExternalTextures&&Ne.rebindTextures(T,De.get(T.texture).__webglTexture,De.get(T.depthTexture).__webglTexture);const Be=T.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(Ae=!0);const Ue=De.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[H])?q=Ue[H][$]:q=Ue[H],xe=!0):Le.isWebGL2&&T.samples>0&&Ne.useMultisampledRTT(T)===!1?q=De.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?q=Ue[$]:q=Ue,A.copy(T.viewport),k.copy(T.scissor),U=T.scissorTest}else A.copy(G).multiplyScalar(j).floor(),k.copy(Y).multiplyScalar(j).floor(),U=ee;if(we.bindFramebuffer(B.FRAMEBUFFER,q)&&Le.drawBuffers&&K&&we.drawBuffers(T,q),we.viewport(A),we.scissor(k),we.setScissorTest(U),xe){const Fe=De.get(T.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+H,Fe.__webglTexture,$)}else if(Ae){const Fe=De.get(T.texture),Be=H||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Fe.__webglTexture,$||0,Be)}L=-1},this.readRenderTargetPixels=function(T,H,$,K,q,xe,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=De.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){we.bindFramebuffer(B.FRAMEBUFFER,Ie);try{const Fe=T.texture,Be=Fe.format,Ue=Fe.type;if(Be!==Kt&&Oe.convert(Be)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ge=Ue===Ir&&(ye.has("EXT_color_buffer_half_float")||Le.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Ue!==Un&&Oe.convert(Ue)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ue===Nn&&(Le.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Ge){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-K&&$>=0&&$<=T.height-q&&B.readPixels(H,$,K,q,Oe.convert(Be),Oe.convert(Ue),xe)}finally{const Fe=w!==null?De.get(w).__webglFramebuffer:null;we.bindFramebuffer(B.FRAMEBUFFER,Fe)}}},this.copyFramebufferToTexture=function(T,H,$=0){const K=Math.pow(2,-$),q=Math.floor(H.image.width*K),xe=Math.floor(H.image.height*K);Ne.setTexture2D(H,0),B.copyTexSubImage2D(B.TEXTURE_2D,$,0,0,T.x,T.y,q,xe),we.unbindTexture()},this.copyTextureToTexture=function(T,H,$,K=0){const q=H.image.width,xe=H.image.height,Ae=Oe.convert($.format),Ie=Oe.convert($.type);Ne.setTexture2D($,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,$.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,$.unpackAlignment),H.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,K,T.x,T.y,q,xe,Ae,Ie,H.image.data):H.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,K,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Ae,H.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,K,T.x,T.y,Ae,Ie,H.image),K===0&&$.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(T,H,$,K,q=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const xe=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Ie=T.max.z-T.min.z+1,Fe=Oe.convert(K.format),Be=Oe.convert(K.type);let Ue;if(K.isData3DTexture)Ne.setTexture3D(K,0),Ue=B.TEXTURE_3D;else if(K.isDataArrayTexture)Ne.setTexture2DArray(K,0),Ue=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,K.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,K.unpackAlignment);const Ge=B.getParameter(B.UNPACK_ROW_LENGTH),at=B.getParameter(B.UNPACK_IMAGE_HEIGHT),It=B.getParameter(B.UNPACK_SKIP_PIXELS),ft=B.getParameter(B.UNPACK_SKIP_ROWS),ln=B.getParameter(B.UNPACK_SKIP_IMAGES),rt=$.isCompressedTexture?$.mipmaps[0]:$.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,rt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,rt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,T.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,T.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,T.min.z),$.isDataTexture||$.isData3DTexture?B.texSubImage3D(Ue,q,H.x,H.y,H.z,xe,Ae,Ie,Fe,Be,rt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(Ue,q,H.x,H.y,H.z,xe,Ae,Ie,Fe,rt.data)):B.texSubImage3D(Ue,q,H.x,H.y,H.z,xe,Ae,Ie,Fe,Be,rt),B.pixelStorei(B.UNPACK_ROW_LENGTH,Ge),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,at),B.pixelStorei(B.UNPACK_SKIP_PIXELS,It),B.pixelStorei(B.UNPACK_SKIP_ROWS,ft),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ln),q===0&&K.generateMipmaps&&B.generateMipmap(Ue),we.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ne.setTextureCube(T,0):T.isData3DTexture?Ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ne.setTexture2DArray(T,0):Ne.setTexture2D(T,0),we.unbindTexture()},this.resetState=function(){y=0,S=0,w=null,we.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Qo?"display-p3":"srgb",t.unpackColorSpace=Ye.workingColorSpace===ga?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?Jn:gc}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?gt:En}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class s_ extends Fc{}s_.prototype.isWebGL1Renderer=!0;class l_ extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Uc extends Gr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Zl=new O,Jl=new O,Ql=new et,ao=new va,zi=new ma;class u_ extends _t{constructor(e=new Ut,t=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let i=1,a=t.count;i<a;i++)Zl.fromBufferAttribute(t,i-1),Jl.fromBufferAttribute(t,i),r[i]=r[i-1],r[i]+=Zl.distanceTo(Jl);e.setAttribute("lineDistance",new ut(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,s=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),zi.copy(r.boundingSphere),zi.applyMatrix4(i),zi.radius+=a,e.ray.intersectsSphere(zi)===!1)return;Ql.copy(i).invert(),ao.copy(e.ray).applyMatrix4(Ql);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=new O,c=new O,h=new O,f=new O,p=this.isLineSegments?2:1,m=r.index,g=r.attributes.position;if(m!==null){const d=Math.max(0,s.start),M=Math.min(m.count,s.start+s.count);for(let _=d,x=M-1;_<x;_+=p){const y=m.getX(_),S=m.getX(_+1);if(u.fromBufferAttribute(g,y),c.fromBufferAttribute(g,S),ao.distanceSqToSegment(u,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(f);L<e.near||L>e.far||t.push({distance:L,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,s.start),M=Math.min(g.count,s.start+s.count);for(let _=d,x=M-1;_<x;_+=p){if(u.fromBufferAttribute(g,_),c.fromBufferAttribute(g,_+1),ao.distanceSqToSegment(u,c,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(f);S<e.near||S>e.far||t.push({distance:S,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const i=t[r[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=i.length;a<s;a++){const o=i[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,i=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)r=this.getPoint(s/e),a+=r.distanceTo(i),t.push(a),i=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let i=0;const a=r.length;let s;t?s=t:s=e*r[a-1];let o=0,l=a-1,u;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),u=r[i]-s,u<0)o=i+1;else if(u>0)l=i-1;else{l=i;break}if(i=l,r[i]===s)return i/(a-1);const c=r[i],f=r[i+1]-c,p=(s-c)/f;return(i+p)/(a-1)}getTangent(e,t){let i=e-1e-4,a=e+1e-4;i<0&&(i=0),a>1&&(a=1);const s=this.getPoint(i),o=this.getPoint(a),l=t||(s.isVector2?new me:new O);return l.copy(o).sub(s).normalize(),l}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new O,i=[],a=[],s=[],o=new O,l=new et;for(let p=0;p<=e;p++){const m=p/e;i[p]=this.getTangentAt(m,new O)}a[0]=new O,s[0]=new O;let u=Number.MAX_VALUE;const c=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);c<=u&&(u=c,r.set(1,0,0)),h<=u&&(u=h,r.set(0,1,0)),f<=u&&r.set(0,0,1),o.crossVectors(i[0],r).normalize(),a[0].crossVectors(i[0],o),s[0].crossVectors(i[0],a[0]);for(let p=1;p<=e;p++){if(a[p]=a[p-1].clone(),s[p]=s[p-1].clone(),o.crossVectors(i[p-1],i[p]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos(mt(i[p-1].dot(i[p]),-1,1));a[p].applyMatrix4(l.makeRotationAxis(o,m))}s[p].crossVectors(i[p],a[p])}if(t===!0){let p=Math.acos(mt(a[0].dot(a[e]),-1,1));p/=e,i[0].dot(o.crossVectors(a[0],a[e]))>0&&(p=-p);for(let m=1;m<=e;m++)a[m].applyMatrix4(l.makeRotationAxis(i[m],p*m)),s[m].crossVectors(i[m],a[m])}return{tangents:i,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Gc extends Tn{constructor(e=0,t=0,r=1,i=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=i,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t){const r=t||new me,i=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=i;for(;a>i;)a-=i;a<Number.EPSILON&&(s?a=0:a=i),this.aClockwise===!0&&!s&&(a===i?a=-i:a=a-i);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),u=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,p=u-this.aY;l=f*c-p*h+this.aX,u=f*h+p*c+this.aY}return r.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class c_ extends Gc{constructor(e,t,r,i,a,s){super(e,t,r,r,i,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function ss(){let n=0,e=0,t=0,r=0;function i(a,s,o,l){n=a,e=o,t=-3*a+3*s-2*o-l,r=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,u){i(s,o,u*(o-a),u*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,u,c,h){let f=(s-a)/u-(o-a)/(u+c)+(o-s)/c,p=(o-s)/c-(l-s)/(c+h)+(l-o)/h;f*=c,p*=c,i(s,o,f,p)},calc:function(a){const s=a*a,o=s*a;return n+e*a+t*s+r*o}}}const Vi=new O,oo=new ss,so=new ss,lo=new ss;class h_ extends Tn{constructor(e=[],t=!1,r="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=i}getPoint(e,t=new O){const r=t,i=this.points,a=i.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let u,c;this.closed||o>0?u=i[(o-1)%a]:(Vi.subVectors(i[0],i[1]).add(i[0]),u=Vi);const h=i[o%a],f=i[(o+1)%a];if(this.closed||o+2<a?c=i[(o+2)%a]:(Vi.subVectors(i[a-1],i[a-2]).add(i[a-1]),c=Vi),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(h),p),v=Math.pow(h.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(c),p);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),oo.initNonuniformCatmullRom(u.x,h.x,f.x,c.x,m,v,g),so.initNonuniformCatmullRom(u.y,h.y,f.y,c.y,m,v,g),lo.initNonuniformCatmullRom(u.z,h.z,f.z,c.z,m,v,g)}else this.curveType==="catmullrom"&&(oo.initCatmullRom(u.x,h.x,f.x,c.x,this.tension),so.initCatmullRom(u.y,h.y,f.y,c.y,this.tension),lo.initCatmullRom(u.z,h.z,f.z,c.z,this.tension));return r.set(oo.calc(l),so.calc(l),lo.calc(l)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const i=e.points[t];this.points.push(new O().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function eu(n,e,t,r,i){const a=(r-e)*.5,s=(i-t)*.5,o=n*n,l=n*o;return(2*t-2*r+a+s)*l+(-3*t+3*r-2*a-s)*o+a*n+t}function d_(n,e){const t=1-n;return t*t*e}function f_(n,e){return 2*(1-n)*n*e}function p_(n,e){return n*n*e}function si(n,e,t,r){return d_(n,e)+f_(n,t)+p_(n,r)}function g_(n,e){const t=1-n;return t*t*t*e}function m_(n,e){const t=1-n;return 3*t*t*n*e}function v_(n,e){return 3*(1-n)*n*n*e}function __(n,e){return n*n*n*e}function li(n,e,t,r,i){return g_(n,e)+m_(n,t)+v_(n,r)+__(n,i)}class y_ extends Tn{constructor(e=new me,t=new me,r=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new me){const r=t,i=this.v0,a=this.v1,s=this.v2,o=this.v3;return r.set(li(e,i.x,a.x,s.x,o.x),li(e,i.y,a.y,s.y,o.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class kc extends Tn{constructor(e=new O,t=new O,r=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=i}getPoint(e,t=new O){const r=t,i=this.v0,a=this.v1,s=this.v2,o=this.v3;return r.set(li(e,i.x,a.x,s.x,o.x),li(e,i.y,a.y,s.y,o.y),li(e,i.z,a.z,s.z,o.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class x_ extends Tn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b_ extends Tn{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class M_ extends Tn{constructor(e=new me,t=new me,r=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new me){const r=t,i=this.v0,a=this.v1,s=this.v2;return r.set(si(e,i.x,a.x,s.x),si(e,i.y,a.y,s.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ls extends Tn{constructor(e=new O,t=new O,r=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new O){const r=t,i=this.v0,a=this.v1,s=this.v2;return r.set(si(e,i.x,a.x,s.x),si(e,i.y,a.y,s.y),si(e,i.z,a.z,s.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class S_ extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){const r=t,i=this.points,a=(i.length-1)*e,s=Math.floor(a),o=a-s,l=i[s===0?s:s-1],u=i[s],c=i[s>i.length-2?i.length-1:s+1],h=i[s>i.length-3?i.length-1:s+2];return r.set(eu(o,l.x,u.x,c.x,h.x),eu(o,l.y,u.y,c.y,h.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const i=e.points[t];this.points.push(new me().fromArray(i))}return this}}var E_=Object.freeze({__proto__:null,ArcCurve:c_,CatmullRomCurve3:h_,CubicBezierCurve:y_,CubicBezierCurve3:kc,EllipseCurve:Gc,LineCurve:x_,LineCurve3:b_,QuadraticBezierCurve:M_,QuadraticBezierCurve3:ls,SplineCurve:S_});class xa extends Ut{constructor(e=1,t=1,r=1,i=32,a=1,s=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:i,heightSegments:a,openEnded:s,thetaStart:o,thetaLength:l};const u=this;i=Math.floor(i),a=Math.floor(a);const c=[],h=[],f=[],p=[];let m=0;const v=[],g=r/2;let d=0;M(),s===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(p,2));function M(){const x=new O,y=new O;let S=0;const w=(t-e)/r;for(let L=0;L<=a;L++){const b=[],A=L/a,k=A*(t-e)+e;for(let U=0;U<=i;U++){const J=U/i,C=J*l+o,R=Math.sin(C),N=Math.cos(C);y.x=k*R,y.y=-A*r+g,y.z=k*N,h.push(y.x,y.y,y.z),x.set(R,w,N).normalize(),f.push(x.x,x.y,x.z),p.push(J,1-A),b.push(m++)}v.push(b)}for(let L=0;L<i;L++)for(let b=0;b<a;b++){const A=v[b][L],k=v[b+1][L],U=v[b+1][L+1],J=v[b][L+1];c.push(A,k,J),c.push(k,U,J),S+=6}u.addGroup(d,S,0),d+=S}function _(x){const y=m,S=new me,w=new O;let L=0;const b=x===!0?e:t,A=x===!0?1:-1;for(let U=1;U<=i;U++)h.push(0,g*A,0),f.push(0,A,0),p.push(.5,.5),m++;const k=m;for(let U=0;U<=i;U++){const C=U/i*l+o,R=Math.cos(C),N=Math.sin(C);w.x=b*N,w.y=g*A,w.z=b*R,h.push(w.x,w.y,w.z),f.push(0,A,0),S.x=R*.5+.5,S.y=N*.5*A+.5,p.push(S.x,S.y),m++}for(let U=0;U<i;U++){const J=y+U,C=k+U;x===!0?c.push(C,C+1,J):c.push(C+1,C,J),L+=3}u.addGroup(d,L,x===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class us extends xa{constructor(e=1,t=1,r=32,i=1,a=!1,s=0,o=Math.PI*2){super(0,e,t,r,i,a,s,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:s,thetaLength:o}}static fromJSON(e){return new us(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ba extends Ut{constructor(e=1,t=32,r=16,i=0,a=Math.PI*2,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:i,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const l=Math.min(s+o,Math.PI);let u=0;const c=[],h=new O,f=new O,p=[],m=[],v=[],g=[];for(let d=0;d<=r;d++){const M=[],_=d/r;let x=0;d===0&&s===0?x=.5/t:d===r&&l===Math.PI&&(x=-.5/t);for(let y=0;y<=t;y++){const S=y/t;h.x=-e*Math.cos(i+S*a)*Math.sin(s+_*o),h.y=e*Math.cos(s+_*o),h.z=e*Math.sin(i+S*a)*Math.sin(s+_*o),m.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),g.push(S+x,1-_),M.push(u++)}c.push(M)}for(let d=0;d<r;d++)for(let M=0;M<t;M++){const _=c[d][M+1],x=c[d][M],y=c[d+1][M],S=c[d+1][M+1];(d!==0||s>0)&&p.push(_,x,S),(d!==r-1||l<Math.PI)&&p.push(x,y,S)}this.setIndex(p),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class cs extends Ut{constructor(e=new ls(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,r=1,i=8,a=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:i,closed:a};const s=e.computeFrenetFrames(t,a);this.tangents=s.tangents,this.normals=s.normals,this.binormals=s.binormals;const o=new O,l=new O,u=new me;let c=new O;const h=[],f=[],p=[],m=[];v(),this.setIndex(m),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(f,3)),this.setAttribute("uv",new ut(p,2));function v(){for(let _=0;_<t;_++)g(_);g(a===!1?t:0),M(),d()}function g(_){c=e.getPointAt(_/t,c);const x=s.normals[_],y=s.binormals[_];for(let S=0;S<=i;S++){const w=S/i*Math.PI*2,L=Math.sin(w),b=-Math.cos(w);l.x=b*x.x+L*y.x,l.y=b*x.y+L*y.y,l.z=b*x.z+L*y.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=c.x+r*l.x,o.y=c.y+r*l.y,o.z=c.z+r*l.z,h.push(o.x,o.y,o.z)}}function d(){for(let _=1;_<=t;_++)for(let x=1;x<=i;x++){const y=(i+1)*(_-1)+(x-1),S=(i+1)*_+(x-1),w=(i+1)*_+x,L=(i+1)*(_-1)+x;m.push(y,S,L),m.push(S,w,L)}}function M(){for(let _=0;_<=t;_++)for(let x=0;x<=i;x++)u.x=_/t,u.y=x/i,p.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new cs(new E_[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class w_ extends Gr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mc,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const tu={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class T_{constructor(e,t,r){const i=this;let a=!1,s=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this.itemStart=function(c){o++,a===!1&&i.onStart!==void 0&&i.onStart(c,s,o),a=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,o),s===o&&(a=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const p=u[h],m=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null}}}const A_=new T_;class hs{constructor(e){this.manager=e!==void 0?e:A_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const r=this;return new Promise(function(i,a){r.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}hs.DEFAULT_MATERIAL_NAME="__DEFAULT";class C_ extends hs{constructor(e){super(e)}load(e,t,r,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=tu.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=di("img");function l(){c(),tu.add(e,this),t&&t(this),a.manager.itemEnd(e)}function u(h){c(),i&&i(h),a.manager.itemError(e),a.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class P_ extends hs{constructor(e){super(e)}load(e,t,r,i){const a=new Lt,s=new C_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},r,i),a}}class Bc extends _t{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const uo=new et,nu=new O,ru=new O;class R_{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(nu),ru.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ru),t.updateMatrixWorld(),uo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uo),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(uo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class L_ extends R_{constructor(){super(new as(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class O_ extends Bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_t.DEFAULT_UP),this.updateMatrix(),this.target=new _t,this.shadow=new L_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class I_ extends Bc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=iu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=iu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function iu(){return(typeof performance>"u"?Date:performance).now()}class zc{constructor(e,t,r=0,i=1/0){this.ray=new va(e,t),this.near=r,this.far=i,this.camera=null,this.layers=new ts,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,r=[]){return Io(e,this,r,t),r.sort(au),r}intersectObjects(e,t=!0,r=[]){for(let i=0,a=e.length;i<a;i++)Io(e[i],this,r,t);return r.sort(au),r}}function au(n,e){return n.distance-e.distance}function Io(n,e,t,r){if(n.layers.test(e.layers)&&n.raycast(e,t),r===!0){const i=n.children;for(let a=0,s=i.length;a<s;a++)Io(i[a],e,t,!0)}}class Do{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ko}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ko);class D_ extends _t{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new me(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const yr=new O,ou=new et,su=new et,lu=new O,uu=new O;class N_{constructor(e={}){const t=this;let r,i,a,s;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:r,height:i}},this.render=function(p,m){p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),ou.copy(m.matrixWorldInverse),su.multiplyMatrices(m.projectionMatrix,ou),u(p,p,m),f(p)},this.setSize=function(p,m){r=p,i=m,a=r/2,s=i/2,l.style.width=p+"px",l.style.height=m+"px"};function u(p,m,v){if(p.isCSS2DObject){yr.setFromMatrixPosition(p.matrixWorld),yr.applyMatrix4(su);const g=p.visible===!0&&yr.z>=-1&&yr.z<=1&&p.layers.test(v.layers)===!0;if(p.element.style.display=g===!0?"":"none",g===!0){p.onBeforeRender(t,m,v);const M=p.element;M.style.transform="translate("+-100*p.center.x+"%,"+-100*p.center.y+"%)translate("+(yr.x*a+a)+"px,"+(-yr.y*s+s)+"px)",M.parentNode!==l&&l.appendChild(M),p.onAfterRender(t,m,v)}const d={distanceToCameraSquared:c(v,p)};o.objects.set(p,d)}for(let g=0,d=p.children.length;g<d;g++)u(p.children[g],m,v)}function c(p,m){return lu.setFromMatrixPosition(p.matrixWorld),uu.setFromMatrixPosition(m.matrixWorld),lu.distanceToSquared(uu)}function h(p){const m=[];return p.traverse(function(v){v.isCSS2DObject&&m.push(v)}),m}function f(p){const m=h(p).sort(function(g,d){if(g.renderOrder!==d.renderOrder)return d.renderOrder-g.renderOrder;const M=o.objects.get(g).distanceToCameraSquared,_=o.objects.get(d).distanceToCameraSquared;return M-_}),v=m.length;for(let g=0,d=m.length;g<d;g++)m[g].element.style.zIndex=v-g}}}const xr=new vn,On=new zc,Xr=new me,cu=new O,Wi=new O,co=new O,hu=new et;class F_ extends tn{constructor(e,t,r){super(),r.style.touchAction="none";let i=null,a=null;const s=[],o=this;function l(){r.addEventListener("pointermove",p),r.addEventListener("pointerdown",m),r.addEventListener("pointerup",v),r.addEventListener("pointerleave",v)}function u(){r.removeEventListener("pointermove",p),r.removeEventListener("pointerdown",m),r.removeEventListener("pointerup",v),r.removeEventListener("pointerleave",v),r.style.cursor=""}function c(){u()}function h(){return e}function f(){return On}function p(d){if(o.enabled!==!1){if(g(d),On.setFromCamera(Xr,t),i){On.ray.intersectPlane(xr,Wi)&&i.position.copy(Wi.sub(cu).applyMatrix4(hu)),o.dispatchEvent({type:"drag",object:i});return}if(d.pointerType==="mouse"||d.pointerType==="pen")if(s.length=0,On.setFromCamera(Xr,t),On.intersectObjects(e,o.recursive,s),s.length>0){const M=s[0].object;xr.setFromNormalAndCoplanarPoint(t.getWorldDirection(xr.normal),co.setFromMatrixPosition(M.matrixWorld)),a!==M&&a!==null&&(o.dispatchEvent({type:"hoveroff",object:a}),r.style.cursor="auto",a=null),a!==M&&(o.dispatchEvent({type:"hoveron",object:M}),r.style.cursor="pointer",a=M)}else a!==null&&(o.dispatchEvent({type:"hoveroff",object:a}),r.style.cursor="auto",a=null)}}function m(d){o.enabled!==!1&&(g(d),s.length=0,On.setFromCamera(Xr,t),On.intersectObjects(e,o.recursive,s),s.length>0&&(i=o.transformGroup===!0?e[0]:s[0].object,xr.setFromNormalAndCoplanarPoint(t.getWorldDirection(xr.normal),co.setFromMatrixPosition(i.matrixWorld)),On.ray.intersectPlane(xr,Wi)&&(hu.copy(i.parent.matrixWorld).invert(),cu.copy(Wi).sub(co.setFromMatrixPosition(i.matrixWorld))),r.style.cursor="move",o.dispatchEvent({type:"dragstart",object:i})))}function v(){o.enabled!==!1&&(i&&(o.dispatchEvent({type:"dragend",object:i}),i=null),r.style.cursor=a?"pointer":"auto")}function g(d){const M=r.getBoundingClientRect();Xr.x=(d.clientX-M.left)/M.width*2-1,Xr.y=-(d.clientY-M.top)/M.height*2+1}l(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=l,this.deactivate=u,this.dispose=c,this.getObjects=h,this.getRaycaster=f}}function U_(n,e,t){var r,i=1;n==null&&(n=0),e==null&&(e=0),t==null&&(t=0);function a(){var s,o=r.length,l,u=0,c=0,h=0;for(s=0;s<o;++s)l=r[s],u+=l.x||0,c+=l.y||0,h+=l.z||0;for(u=(u/o-n)*i,c=(c/o-e)*i,h=(h/o-t)*i,s=0;s<o;++s)l=r[s],u&&(l.x-=u),c&&(l.y-=c),h&&(l.z-=h)}return a.initialize=function(s){r=s},a.x=function(s){return arguments.length?(n=+s,a):n},a.y=function(s){return arguments.length?(e=+s,a):e},a.z=function(s){return arguments.length?(t=+s,a):t},a.strength=function(s){return arguments.length?(i=+s,a):i},a}function G_(n){const e=+this._x.call(null,n);return Vc(this.cover(e),e,n)}function Vc(n,e,t){if(isNaN(e))return n;var r,i=n._root,a={data:t},s=n._x0,o=n._x1,l,u,c,h,f;if(!i)return n._root=a,n;for(;i.length;)if((c=e>=(l=(s+o)/2))?s=l:o=l,r=i,!(i=i[h=+c]))return r[h]=a,n;if(u=+n._x.call(null,i.data),e===u)return a.next=i,r?r[h]=a:n._root=a,n;do r=r?r[h]=new Array(2):n._root=new Array(2),(c=e>=(l=(s+o)/2))?s=l:o=l;while((h=+c)==(f=+(u>=l)));return r[f]=i,r[h]=a,n}function k_(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e);let r=1/0,i=-1/0;for(let a=0,s;a<e;++a)isNaN(s=+this._x.call(null,n[a]))||(t[a]=s,s<r&&(r=s),s>i&&(i=s));if(r>i)return this;this.cover(r).cover(i);for(let a=0;a<e;++a)Vc(this,t[a],n[a]);return this}function B_(n){if(isNaN(n=+n))return this;var e=this._x0,t=this._x1;if(isNaN(e))t=(e=Math.floor(n))+1;else{for(var r=t-e||1,i=this._root,a,s;e>n||n>=t;)switch(s=+(n<e),a=new Array(2),a[s]=i,i=a,r*=2,s){case 0:t=e+r;break;case 1:e=t-r;break}this._root&&this._root.length&&(this._root=i)}return this._x0=e,this._x1=t,this}function H_(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function z_(n){return arguments.length?this.cover(+n[0][0]).cover(+n[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function Sn(n,e,t){this.node=n,this.x0=e,this.x1=t}function V_(n,e){var t,r=this._x0,i,a,s=this._x1,o=[],l=this._root,u,c;for(l&&o.push(new Sn(l,r,s)),e==null?e=1/0:(r=n-e,s=n+e);u=o.pop();)if(!(!(l=u.node)||(i=u.x0)>s||(a=u.x1)<r))if(l.length){var h=(i+a)/2;o.push(new Sn(l[1],h,a),new Sn(l[0],i,h)),(c=+(n>=h))&&(u=o[o.length-1],o[o.length-1]=o[o.length-1-c],o[o.length-1-c]=u)}else{var f=Math.abs(n-+this._x.call(null,l.data));f<e&&(e=f,r=n-f,s=n+f,t=l.data)}return t}function W_(n){if(isNaN(l=+this._x.call(null,n)))return this;var e,t=this._root,r,i,a,s=this._x0,o=this._x1,l,u,c,h,f;if(!t)return this;if(t.length)for(;;){if((c=l>=(u=(s+o)/2))?s=u:o=u,e=t,!(t=t[h=+c]))return this;if(!t.length)break;e[h+1&1]&&(r=e,f=h)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[h]=a:delete e[h],(t=e[0]||e[1])&&t===(e[1]||e[0])&&!t.length&&(r?r[f]=t:this._root=t),this):(this._root=a,this)}function j_(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function X_(){return this._root}function q_(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function $_(n){var e=[],t,r=this._root,i,a,s;for(r&&e.push(new Sn(r,this._x0,this._x1));t=e.pop();)if(!n(r=t.node,a=t.x0,s=t.x1)&&r.length){var o=(a+s)/2;(i=r[1])&&e.push(new Sn(i,o,s)),(i=r[0])&&e.push(new Sn(i,a,o))}return this}function Y_(n){var e=[],t=[],r;for(this._root&&e.push(new Sn(this._root,this._x0,this._x1));r=e.pop();){var i=r.node;if(i.length){var a,s=r.x0,o=r.x1,l=(s+o)/2;(a=i[0])&&e.push(new Sn(a,s,l)),(a=i[1])&&e.push(new Sn(a,l,o))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.x1);return this}function K_(n){return n[0]}function Z_(n){return arguments.length?(this._x=n,this):this._x}function Wc(n,e){var t=new ds(e??K_,NaN,NaN);return n==null?t:t.addAll(n)}function ds(n,e,t){this._x=n,this._x0=e,this._x1=t,this._root=void 0}function du(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Ot=Wc.prototype=ds.prototype;Ot.copy=function(){var n=new ds(this._x,this._x0,this._x1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=du(e),n;for(t=[{source:e,target:n._root=new Array(2)}];e=t.pop();)for(var i=0;i<2;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(2)}):e.target[i]=du(r));return n};Ot.add=G_;Ot.addAll=k_;Ot.cover=B_;Ot.data=H_;Ot.extent=z_;Ot.find=V_;Ot.remove=W_;Ot.removeAll=j_;Ot.root=X_;Ot.size=q_;Ot.visit=$_;Ot.visitAfter=Y_;Ot.x=Z_;function J_(n){const e=+this._x.call(null,n),t=+this._y.call(null,n);return jc(this.cover(e,t),e,t,n)}function jc(n,e,t,r){if(isNaN(e)||isNaN(t))return n;var i,a=n._root,s={data:r},o=n._x0,l=n._y0,u=n._x1,c=n._y1,h,f,p,m,v,g,d,M;if(!a)return n._root=s,n;for(;a.length;)if((v=e>=(h=(o+u)/2))?o=h:u=h,(g=t>=(f=(l+c)/2))?l=f:c=f,i=a,!(a=a[d=g<<1|v]))return i[d]=s,n;if(p=+n._x.call(null,a.data),m=+n._y.call(null,a.data),e===p&&t===m)return s.next=a,i?i[d]=s:n._root=s,n;do i=i?i[d]=new Array(4):n._root=new Array(4),(v=e>=(h=(o+u)/2))?o=h:u=h,(g=t>=(f=(l+c)/2))?l=f:c=f;while((d=g<<1|v)===(M=(m>=f)<<1|p>=h));return i[M]=a,i[d]=s,n}function Q_(n){var e,t,r=n.length,i,a,s=new Array(r),o=new Array(r),l=1/0,u=1/0,c=-1/0,h=-1/0;for(t=0;t<r;++t)isNaN(i=+this._x.call(null,e=n[t]))||isNaN(a=+this._y.call(null,e))||(s[t]=i,o[t]=a,i<l&&(l=i),i>c&&(c=i),a<u&&(u=a),a>h&&(h=a));if(l>c||u>h)return this;for(this.cover(l,u).cover(c,h),t=0;t<r;++t)jc(this,s[t],o[t],n[t]);return this}function e0(n,e){if(isNaN(n=+n)||isNaN(e=+e))return this;var t=this._x0,r=this._y0,i=this._x1,a=this._y1;if(isNaN(t))i=(t=Math.floor(n))+1,a=(r=Math.floor(e))+1;else{for(var s=i-t||1,o=this._root,l,u;t>n||n>=i||r>e||e>=a;)switch(u=(e<r)<<1|n<t,l=new Array(4),l[u]=o,o=l,s*=2,u){case 0:i=t+s,a=r+s;break;case 1:t=i-s,a=r+s;break;case 2:i=t+s,r=a-s;break;case 3:t=i-s,r=a-s;break}this._root&&this._root.length&&(this._root=o)}return this._x0=t,this._y0=r,this._x1=i,this._y1=a,this}function t0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function n0(n){return arguments.length?this.cover(+n[0][0],+n[0][1]).cover(+n[1][0],+n[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function Ct(n,e,t,r,i){this.node=n,this.x0=e,this.y0=t,this.x1=r,this.y1=i}function r0(n,e,t){var r,i=this._x0,a=this._y0,s,o,l,u,c=this._x1,h=this._y1,f=[],p=this._root,m,v;for(p&&f.push(new Ct(p,i,a,c,h)),t==null?t=1/0:(i=n-t,a=e-t,c=n+t,h=e+t,t*=t);m=f.pop();)if(!(!(p=m.node)||(s=m.x0)>c||(o=m.y0)>h||(l=m.x1)<i||(u=m.y1)<a))if(p.length){var g=(s+l)/2,d=(o+u)/2;f.push(new Ct(p[3],g,d,l,u),new Ct(p[2],s,d,g,u),new Ct(p[1],g,o,l,d),new Ct(p[0],s,o,g,d)),(v=(e>=d)<<1|n>=g)&&(m=f[f.length-1],f[f.length-1]=f[f.length-1-v],f[f.length-1-v]=m)}else{var M=n-+this._x.call(null,p.data),_=e-+this._y.call(null,p.data),x=M*M+_*_;if(x<t){var y=Math.sqrt(t=x);i=n-y,a=e-y,c=n+y,h=e+y,r=p.data}}return r}function i0(n){if(isNaN(c=+this._x.call(null,n))||isNaN(h=+this._y.call(null,n)))return this;var e,t=this._root,r,i,a,s=this._x0,o=this._y0,l=this._x1,u=this._y1,c,h,f,p,m,v,g,d;if(!t)return this;if(t.length)for(;;){if((m=c>=(f=(s+l)/2))?s=f:l=f,(v=h>=(p=(o+u)/2))?o=p:u=p,e=t,!(t=t[g=v<<1|m]))return this;if(!t.length)break;(e[g+1&3]||e[g+2&3]||e[g+3&3])&&(r=e,d=g)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[g]=a:delete e[g],(t=e[0]||e[1]||e[2]||e[3])&&t===(e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[d]=t:this._root=t),this):(this._root=a,this)}function a0(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function o0(){return this._root}function s0(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function l0(n){var e=[],t,r=this._root,i,a,s,o,l;for(r&&e.push(new Ct(r,this._x0,this._y0,this._x1,this._y1));t=e.pop();)if(!n(r=t.node,a=t.x0,s=t.y0,o=t.x1,l=t.y1)&&r.length){var u=(a+o)/2,c=(s+l)/2;(i=r[3])&&e.push(new Ct(i,u,c,o,l)),(i=r[2])&&e.push(new Ct(i,a,c,u,l)),(i=r[1])&&e.push(new Ct(i,u,s,o,c)),(i=r[0])&&e.push(new Ct(i,a,s,u,c))}return this}function u0(n){var e=[],t=[],r;for(this._root&&e.push(new Ct(this._root,this._x0,this._y0,this._x1,this._y1));r=e.pop();){var i=r.node;if(i.length){var a,s=r.x0,o=r.y0,l=r.x1,u=r.y1,c=(s+l)/2,h=(o+u)/2;(a=i[0])&&e.push(new Ct(a,s,o,c,h)),(a=i[1])&&e.push(new Ct(a,c,o,l,h)),(a=i[2])&&e.push(new Ct(a,s,h,c,u)),(a=i[3])&&e.push(new Ct(a,c,h,l,u))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.x1,r.y1);return this}function c0(n){return n[0]}function h0(n){return arguments.length?(this._x=n,this):this._x}function d0(n){return n[1]}function f0(n){return arguments.length?(this._y=n,this):this._y}function Xc(n,e,t){var r=new fs(e??c0,t??d0,NaN,NaN,NaN,NaN);return n==null?r:r.addAll(n)}function fs(n,e,t,r,i,a){this._x=n,this._y=e,this._x0=t,this._y0=r,this._x1=i,this._y1=a,this._root=void 0}function fu(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Rt=Xc.prototype=fs.prototype;Rt.copy=function(){var n=new fs(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=fu(e),n;for(t=[{source:e,target:n._root=new Array(4)}];e=t.pop();)for(var i=0;i<4;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(4)}):e.target[i]=fu(r));return n};Rt.add=J_;Rt.addAll=Q_;Rt.cover=e0;Rt.data=t0;Rt.extent=n0;Rt.find=r0;Rt.remove=i0;Rt.removeAll=a0;Rt.root=o0;Rt.size=s0;Rt.visit=l0;Rt.visitAfter=u0;Rt.x=h0;Rt.y=f0;function p0(n){const e=+this._x.call(null,n),t=+this._y.call(null,n),r=+this._z.call(null,n);return qc(this.cover(e,t,r),e,t,r,n)}function qc(n,e,t,r,i){if(isNaN(e)||isNaN(t)||isNaN(r))return n;var a,s=n._root,o={data:i},l=n._x0,u=n._y0,c=n._z0,h=n._x1,f=n._y1,p=n._z1,m,v,g,d,M,_,x,y,S,w,L;if(!s)return n._root=o,n;for(;s.length;)if((x=e>=(m=(l+h)/2))?l=m:h=m,(y=t>=(v=(u+f)/2))?u=v:f=v,(S=r>=(g=(c+p)/2))?c=g:p=g,a=s,!(s=s[w=S<<2|y<<1|x]))return a[w]=o,n;if(d=+n._x.call(null,s.data),M=+n._y.call(null,s.data),_=+n._z.call(null,s.data),e===d&&t===M&&r===_)return o.next=s,a?a[w]=o:n._root=o,n;do a=a?a[w]=new Array(8):n._root=new Array(8),(x=e>=(m=(l+h)/2))?l=m:h=m,(y=t>=(v=(u+f)/2))?u=v:f=v,(S=r>=(g=(c+p)/2))?c=g:p=g;while((w=S<<2|y<<1|x)===(L=(_>=g)<<2|(M>=v)<<1|d>=m));return a[L]=s,a[w]=o,n}function g0(n){Array.isArray(n)||(n=Array.from(n));const e=n.length,t=new Float64Array(e),r=new Float64Array(e),i=new Float64Array(e);let a=1/0,s=1/0,o=1/0,l=-1/0,u=-1/0,c=-1/0;for(let h=0,f,p,m,v;h<e;++h)isNaN(p=+this._x.call(null,f=n[h]))||isNaN(m=+this._y.call(null,f))||isNaN(v=+this._z.call(null,f))||(t[h]=p,r[h]=m,i[h]=v,p<a&&(a=p),p>l&&(l=p),m<s&&(s=m),m>u&&(u=m),v<o&&(o=v),v>c&&(c=v));if(a>l||s>u||o>c)return this;this.cover(a,s,o).cover(l,u,c);for(let h=0;h<e;++h)qc(this,t[h],r[h],i[h],n[h]);return this}function m0(n,e,t){if(isNaN(n=+n)||isNaN(e=+e)||isNaN(t=+t))return this;var r=this._x0,i=this._y0,a=this._z0,s=this._x1,o=this._y1,l=this._z1;if(isNaN(r))s=(r=Math.floor(n))+1,o=(i=Math.floor(e))+1,l=(a=Math.floor(t))+1;else{for(var u=s-r||1,c=this._root,h,f;r>n||n>=s||i>e||e>=o||a>t||t>=l;)switch(f=(t<a)<<2|(e<i)<<1|n<r,h=new Array(8),h[f]=c,c=h,u*=2,f){case 0:s=r+u,o=i+u,l=a+u;break;case 1:r=s-u,o=i+u,l=a+u;break;case 2:s=r+u,i=o-u,l=a+u;break;case 3:r=s-u,i=o-u,l=a+u;break;case 4:s=r+u,o=i+u,a=l-u;break;case 5:r=s-u,o=i+u,a=l-u;break;case 6:s=r+u,i=o-u,a=l-u;break;case 7:r=s-u,i=o-u,a=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=r,this._y0=i,this._z0=a,this._x1=s,this._y1=o,this._z1=l,this}function v0(){var n=[];return this.visit(function(e){if(!e.length)do n.push(e.data);while(e=e.next)}),n}function _0(n){return arguments.length?this.cover(+n[0][0],+n[0][1],+n[0][2]).cover(+n[1][0],+n[1][1],+n[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function Ke(n,e,t,r,i,a,s){this.node=n,this.x0=e,this.y0=t,this.z0=r,this.x1=i,this.y1=a,this.z1=s}function y0(n,e,t,r){var i,a=this._x0,s=this._y0,o=this._z0,l,u,c,h,f,p,m=this._x1,v=this._y1,g=this._z1,d=[],M=this._root,_,x;for(M&&d.push(new Ke(M,a,s,o,m,v,g)),r==null?r=1/0:(a=n-r,s=e-r,o=t-r,m=n+r,v=e+r,g=t+r,r*=r);_=d.pop();)if(!(!(M=_.node)||(l=_.x0)>m||(u=_.y0)>v||(c=_.z0)>g||(h=_.x1)<a||(f=_.y1)<s||(p=_.z1)<o))if(M.length){var y=(l+h)/2,S=(u+f)/2,w=(c+p)/2;d.push(new Ke(M[7],y,S,w,h,f,p),new Ke(M[6],l,S,w,y,f,p),new Ke(M[5],y,u,w,h,S,p),new Ke(M[4],l,u,w,y,S,p),new Ke(M[3],y,S,c,h,f,w),new Ke(M[2],l,S,c,y,f,w),new Ke(M[1],y,u,c,h,S,w),new Ke(M[0],l,u,c,y,S,w)),(x=(t>=w)<<2|(e>=S)<<1|n>=y)&&(_=d[d.length-1],d[d.length-1]=d[d.length-1-x],d[d.length-1-x]=_)}else{var L=n-+this._x.call(null,M.data),b=e-+this._y.call(null,M.data),A=t-+this._z.call(null,M.data),k=L*L+b*b+A*A;if(k<r){var U=Math.sqrt(r=k);a=n-U,s=e-U,o=t-U,m=n+U,v=e+U,g=t+U,i=M.data}}return i}function x0(n){if(isNaN(f=+this._x.call(null,n))||isNaN(p=+this._y.call(null,n))||isNaN(m=+this._z.call(null,n)))return this;var e,t=this._root,r,i,a,s=this._x0,o=this._y0,l=this._z0,u=this._x1,c=this._y1,h=this._z1,f,p,m,v,g,d,M,_,x,y,S;if(!t)return this;if(t.length)for(;;){if((M=f>=(v=(s+u)/2))?s=v:u=v,(_=p>=(g=(o+c)/2))?o=g:c=g,(x=m>=(d=(l+h)/2))?l=d:h=d,e=t,!(t=t[y=x<<2|_<<1|M]))return this;if(!t.length)break;(e[y+1&7]||e[y+2&7]||e[y+3&7]||e[y+4&7]||e[y+5&7]||e[y+6&7]||e[y+7&7])&&(r=e,S=y)}for(;t.data!==n;)if(i=t,!(t=t.next))return this;return(a=t.next)&&delete t.next,i?(a?i.next=a:delete i.next,this):e?(a?e[y]=a:delete e[y],(t=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&t===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!t.length&&(r?r[S]=t:this._root=t),this):(this._root=a,this)}function b0(n){for(var e=0,t=n.length;e<t;++e)this.remove(n[e]);return this}function M0(){return this._root}function S0(){var n=0;return this.visit(function(e){if(!e.length)do++n;while(e=e.next)}),n}function E0(n){var e=[],t,r=this._root,i,a,s,o,l,u,c;for(r&&e.push(new Ke(r,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));t=e.pop();)if(!n(r=t.node,a=t.x0,s=t.y0,o=t.z0,l=t.x1,u=t.y1,c=t.z1)&&r.length){var h=(a+l)/2,f=(s+u)/2,p=(o+c)/2;(i=r[7])&&e.push(new Ke(i,h,f,p,l,u,c)),(i=r[6])&&e.push(new Ke(i,a,f,p,h,u,c)),(i=r[5])&&e.push(new Ke(i,h,s,p,l,f,c)),(i=r[4])&&e.push(new Ke(i,a,s,p,h,f,c)),(i=r[3])&&e.push(new Ke(i,h,f,o,l,u,p)),(i=r[2])&&e.push(new Ke(i,a,f,o,h,u,p)),(i=r[1])&&e.push(new Ke(i,h,s,o,l,f,p)),(i=r[0])&&e.push(new Ke(i,a,s,o,h,f,p))}return this}function w0(n){var e=[],t=[],r;for(this._root&&e.push(new Ke(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));r=e.pop();){var i=r.node;if(i.length){var a,s=r.x0,o=r.y0,l=r.z0,u=r.x1,c=r.y1,h=r.z1,f=(s+u)/2,p=(o+c)/2,m=(l+h)/2;(a=i[0])&&e.push(new Ke(a,s,o,l,f,p,m)),(a=i[1])&&e.push(new Ke(a,f,o,l,u,p,m)),(a=i[2])&&e.push(new Ke(a,s,p,l,f,c,m)),(a=i[3])&&e.push(new Ke(a,f,p,l,u,c,m)),(a=i[4])&&e.push(new Ke(a,s,o,m,f,p,h)),(a=i[5])&&e.push(new Ke(a,f,o,m,u,p,h)),(a=i[6])&&e.push(new Ke(a,s,p,m,f,c,h)),(a=i[7])&&e.push(new Ke(a,f,p,m,u,c,h))}t.push(r)}for(;r=t.pop();)n(r.node,r.x0,r.y0,r.z0,r.x1,r.y1,r.z1);return this}function T0(n){return n[0]}function A0(n){return arguments.length?(this._x=n,this):this._x}function C0(n){return n[1]}function P0(n){return arguments.length?(this._y=n,this):this._y}function R0(n){return n[2]}function L0(n){return arguments.length?(this._z=n,this):this._z}function $c(n,e,t,r){var i=new ps(e??T0,t??C0,r??R0,NaN,NaN,NaN,NaN,NaN,NaN);return n==null?i:i.addAll(n)}function ps(n,e,t,r,i,a,s,o,l){this._x=n,this._y=e,this._z=t,this._x0=r,this._y0=i,this._z0=a,this._x1=s,this._y1=o,this._z1=l,this._root=void 0}function pu(n){for(var e={data:n.data},t=e;n=n.next;)t=t.next={data:n.data};return e}var Mt=$c.prototype=ps.prototype;Mt.copy=function(){var n=new ps(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,t,r;if(!e)return n;if(!e.length)return n._root=pu(e),n;for(t=[{source:e,target:n._root=new Array(8)}];e=t.pop();)for(var i=0;i<8;++i)(r=e.source[i])&&(r.length?t.push({source:r,target:e.target[i]=new Array(8)}):e.target[i]=pu(r));return n};Mt.add=p0;Mt.addAll=g0;Mt.cover=m0;Mt.data=v0;Mt.extent=_0;Mt.find=y0;Mt.remove=x0;Mt.removeAll=b0;Mt.root=M0;Mt.size=S0;Mt.visit=E0;Mt.visitAfter=w0;Mt.x=A0;Mt.y=P0;Mt.z=L0;function bn(n){return function(){return n}}function _n(n){return(n()-.5)*1e-6}function O0(n){return n.index}function gu(n,e){var t=n.get(e);if(!t)throw new Error("node not found: "+e);return t}function I0(n){var e=O0,t=f,r,i=bn(30),a,s,o,l,u,c,h=1;n==null&&(n=[]);function f(d){return 1/Math.min(l[d.source.index],l[d.target.index])}function p(d){for(var M=0,_=n.length;M<h;++M)for(var x=0,y,S,w,L=0,b=0,A=0,k,U;x<_;++x)y=n[x],S=y.source,w=y.target,L=w.x+w.vx-S.x-S.vx||_n(c),o>1&&(b=w.y+w.vy-S.y-S.vy||_n(c)),o>2&&(A=w.z+w.vz-S.z-S.vz||_n(c)),k=Math.sqrt(L*L+b*b+A*A),k=(k-a[x])/k*d*r[x],L*=k,b*=k,A*=k,w.vx-=L*(U=u[x]),o>1&&(w.vy-=b*U),o>2&&(w.vz-=A*U),S.vx+=L*(U=1-U),o>1&&(S.vy+=b*U),o>2&&(S.vz+=A*U)}function m(){if(s){var d,M=s.length,_=n.length,x=new Map(s.map((S,w)=>[e(S,w,s),S])),y;for(d=0,l=new Array(M);d<_;++d)y=n[d],y.index=d,typeof y.source!="object"&&(y.source=gu(x,y.source)),typeof y.target!="object"&&(y.target=gu(x,y.target)),l[y.source.index]=(l[y.source.index]||0)+1,l[y.target.index]=(l[y.target.index]||0)+1;for(d=0,u=new Array(_);d<_;++d)y=n[d],u[d]=l[y.source.index]/(l[y.source.index]+l[y.target.index]);r=new Array(_),v(),a=new Array(_),g()}}function v(){if(s)for(var d=0,M=n.length;d<M;++d)r[d]=+t(n[d],d,n)}function g(){if(s)for(var d=0,M=n.length;d<M;++d)a[d]=+i(n[d],d,n)}return p.initialize=function(d,...M){s=d,c=M.find(_=>typeof _=="function")||Math.random,o=M.find(_=>[1,2,3].includes(_))||2,m()},p.links=function(d){return arguments.length?(n=d,m(),p):n},p.id=function(d){return arguments.length?(e=d,p):e},p.iterations=function(d){return arguments.length?(h=+d,p):h},p.strength=function(d){return arguments.length?(t=typeof d=="function"?d:bn(+d),v(),p):t},p.distance=function(d){return arguments.length?(i=typeof d=="function"?d:bn(+d),g(),p):i},p}var D0={value:()=>{}};function Yc(){for(var n=0,e=arguments.length,t={},r;n<e;++n){if(!(r=arguments[n]+"")||r in t||/[\s.]/.test(r))throw new Error("illegal type: "+r);t[r]=[]}return new Ki(t)}function Ki(n){this._=n}function N0(n,e){return n.trim().split(/^|\s+/).map(function(t){var r="",i=t.indexOf(".");if(i>=0&&(r=t.slice(i+1),t=t.slice(0,i)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:r}})}Ki.prototype=Yc.prototype={constructor:Ki,on:function(n,e){var t=this._,r=N0(n+"",t),i,a=-1,s=r.length;if(arguments.length<2){for(;++a<s;)if((i=(n=r[a]).type)&&(i=F0(t[i],n.name)))return i;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++a<s;)if(i=(n=r[a]).type)t[i]=mu(t[i],n.name,e);else if(e==null)for(i in t)t[i]=mu(t[i],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new Ki(n)},call:function(n,e){if((i=arguments.length-2)>0)for(var t=new Array(i),r=0,i,a;r<i;++r)t[r]=arguments[r+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(a=this._[n],r=0,i=a.length;r<i;++r)a[r].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var r=this._[n],i=0,a=r.length;i<a;++i)r[i].value.apply(e,t)}};function F0(n,e){for(var t=0,r=n.length,i;t<r;++t)if((i=n[t]).name===e)return i.value}function mu(n,e,t){for(var r=0,i=n.length;r<i;++r)if(n[r].name===e){n[r]=D0,n=n.slice(0,r).concat(n.slice(r+1));break}return t!=null&&n.push({name:e,value:t}),n}var Fr=0,ei=0,qr=0,Kc=1e3,sa,ti,la=0,er=0,Ma=0,fi=typeof performance=="object"&&performance.now?performance:Date,Zc=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function Jc(){return er||(Zc(U0),er=fi.now()+Ma)}function U0(){er=0}function No(){this._call=this._time=this._next=null}No.prototype=Qc.prototype={constructor:No,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?Jc():+t)+(e==null?0:+e),!this._next&&ti!==this&&(ti?ti._next=this:sa=this,ti=this),this._call=n,this._time=t,Fo()},stop:function(){this._call&&(this._call=null,this._time=1/0,Fo())}};function Qc(n,e,t){var r=new No;return r.restart(n,e,t),r}function G0(){Jc(),++Fr;for(var n=sa,e;n;)(e=er-n._time)>=0&&n._call.call(void 0,e),n=n._next;--Fr}function vu(){er=(la=fi.now())+Ma,Fr=ei=0;try{G0()}finally{Fr=0,B0(),er=0}}function k0(){var n=fi.now(),e=n-la;e>Kc&&(Ma-=e,la=n)}function B0(){for(var n,e=sa,t,r=1/0;e;)e._call?(r>e._time&&(r=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:sa=t);ti=n,Fo(r)}function Fo(n){if(!Fr){ei&&(ei=clearTimeout(ei));var e=n-er;e>24?(n<1/0&&(ei=setTimeout(vu,n-fi.now()-Ma)),qr&&(qr=clearInterval(qr))):(qr||(la=fi.now(),qr=setInterval(k0,Kc)),Fr=1,Zc(vu))}}const H0=1664525,z0=1013904223,_u=4294967296;function V0(){let n=1;return()=>(n=(H0*n+z0)%_u)/_u}var yu=3;function ho(n){return n.x}function xu(n){return n.y}function W0(n){return n.z}var j0=10,X0=Math.PI*(3-Math.sqrt(5)),q0=Math.PI*20/(9+Math.sqrt(221));function $0(n,e){e=e||2;var t=Math.min(yu,Math.max(1,Math.round(e))),r,i=1,a=.001,s=1-Math.pow(a,1/300),o=0,l=.6,u=new Map,c=Qc(p),h=Yc("tick","end"),f=V0();n==null&&(n=[]);function p(){m(),h.call("tick",r),i<a&&(c.stop(),h.call("end",r))}function m(d){var M,_=n.length,x;d===void 0&&(d=1);for(var y=0;y<d;++y)for(i+=(o-i)*s,u.forEach(function(S){S(i)}),M=0;M<_;++M)x=n[M],x.fx==null?x.x+=x.vx*=l:(x.x=x.fx,x.vx=0),t>1&&(x.fy==null?x.y+=x.vy*=l:(x.y=x.fy,x.vy=0)),t>2&&(x.fz==null?x.z+=x.vz*=l:(x.z=x.fz,x.vz=0));return r}function v(){for(var d=0,M=n.length,_;d<M;++d){if(_=n[d],_.index=d,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||t>1&&isNaN(_.y)||t>2&&isNaN(_.z)){var x=j0*(t>2?Math.cbrt(.5+d):t>1?Math.sqrt(.5+d):d),y=d*X0,S=d*q0;t===1?_.x=x:t===2?(_.x=x*Math.cos(y),_.y=x*Math.sin(y)):(_.x=x*Math.sin(y)*Math.cos(S),_.y=x*Math.cos(y),_.z=x*Math.sin(y)*Math.sin(S))}(isNaN(_.vx)||t>1&&isNaN(_.vy)||t>2&&isNaN(_.vz))&&(_.vx=0,t>1&&(_.vy=0),t>2&&(_.vz=0))}}function g(d){return d.initialize&&d.initialize(n,f,t),d}return v(),r={tick:m,restart:function(){return c.restart(p),r},stop:function(){return c.stop(),r},numDimensions:function(d){return arguments.length?(t=Math.min(yu,Math.max(1,Math.round(d))),u.forEach(g),r):t},nodes:function(d){return arguments.length?(n=d,v(),u.forEach(g),r):n},alpha:function(d){return arguments.length?(i=+d,r):i},alphaMin:function(d){return arguments.length?(a=+d,r):a},alphaDecay:function(d){return arguments.length?(s=+d,r):+s},alphaTarget:function(d){return arguments.length?(o=+d,r):o},velocityDecay:function(d){return arguments.length?(l=1-d,r):1-l},randomSource:function(d){return arguments.length?(f=d,u.forEach(g),r):f},force:function(d,M){return arguments.length>1?(M==null?u.delete(d):u.set(d,g(M)),r):u.get(d)},find:function(){var d=Array.prototype.slice.call(arguments),M=d.shift()||0,_=(t>1?d.shift():null)||0,x=(t>2?d.shift():null)||0,y=d.shift()||1/0,S=0,w=n.length,L,b,A,k,U,J;for(y*=y,S=0;S<w;++S)U=n[S],L=M-U.x,b=_-(U.y||0),A=x-(U.z||0),k=L*L+b*b+A*A,k<y&&(J=U,y=k);return J},on:function(d,M){return arguments.length>1?(h.on(d,M),r):h.on(d)}}}function Y0(){var n,e,t,r,i,a=bn(-30),s,o=1,l=1/0,u=.81;function c(m){var v,g=n.length,d=(e===1?Wc(n,ho):e===2?Xc(n,ho,xu):e===3?$c(n,ho,xu,W0):null).visitAfter(f);for(i=m,v=0;v<g;++v)t=n[v],d.visit(p)}function h(){if(n){var m,v=n.length,g;for(s=new Array(v),m=0;m<v;++m)g=n[m],s[g.index]=+a(g,m,n)}}function f(m){var v=0,g,d,M=0,_,x,y,S,w=m.length;if(w){for(_=x=y=S=0;S<w;++S)(g=m[S])&&(d=Math.abs(g.value))&&(v+=g.value,M+=d,_+=d*(g.x||0),x+=d*(g.y||0),y+=d*(g.z||0));v*=Math.sqrt(4/w),m.x=_/M,e>1&&(m.y=x/M),e>2&&(m.z=y/M)}else{g=m,g.x=g.data.x,e>1&&(g.y=g.data.y),e>2&&(g.z=g.data.z);do v+=s[g.data.index];while(g=g.next)}m.value=v}function p(m,v,g,d,M){if(!m.value)return!0;var _=[g,d,M][e-1],x=m.x-t.x,y=e>1?m.y-t.y:0,S=e>2?m.z-t.z:0,w=_-v,L=x*x+y*y+S*S;if(w*w/u<L)return L<l&&(x===0&&(x=_n(r),L+=x*x),e>1&&y===0&&(y=_n(r),L+=y*y),e>2&&S===0&&(S=_n(r),L+=S*S),L<o&&(L=Math.sqrt(o*L)),t.vx+=x*m.value*i/L,e>1&&(t.vy+=y*m.value*i/L),e>2&&(t.vz+=S*m.value*i/L)),!0;if(m.length||L>=l)return;(m.data!==t||m.next)&&(x===0&&(x=_n(r),L+=x*x),e>1&&y===0&&(y=_n(r),L+=y*y),e>2&&S===0&&(S=_n(r),L+=S*S),L<o&&(L=Math.sqrt(o*L)));do m.data!==t&&(w=s[m.data.index]*i/L,t.vx+=x*w,e>1&&(t.vy+=y*w),e>2&&(t.vz+=S*w));while(m=m.next)}return c.initialize=function(m,...v){n=m,r=v.find(g=>typeof g=="function")||Math.random,e=v.find(g=>[1,2,3].includes(g))||2,h()},c.strength=function(m){return arguments.length?(a=typeof m=="function"?m:bn(+m),h(),c):a},c.distanceMin=function(m){return arguments.length?(o=m*m,c):Math.sqrt(o)},c.distanceMax=function(m){return arguments.length?(l=m*m,c):Math.sqrt(l)},c.theta=function(m){return arguments.length?(u=m*m,c):Math.sqrt(u)},c}function K0(n,e,t,r){var i,a,s=bn(.1),o,l;typeof n!="function"&&(n=bn(+n)),e==null&&(e=0),t==null&&(t=0),r==null&&(r=0);function u(h){for(var f=0,p=i.length;f<p;++f){var m=i[f],v=m.x-e||1e-6,g=(m.y||0)-t||1e-6,d=(m.z||0)-r||1e-6,M=Math.sqrt(v*v+g*g+d*d),_=(l[f]-M)*o[f]*h/M;m.vx+=v*_,a>1&&(m.vy+=g*_),a>2&&(m.vz+=d*_)}}function c(){if(i){var h,f=i.length;for(o=new Array(f),l=new Array(f),h=0;h<f;++h)l[h]=+n(i[h],h,i),o[h]=isNaN(l[h])?0:+s(i[h],h,i)}}return u.initialize=function(h,...f){i=h,a=f.find(p=>[1,2,3].includes(p))||2,c()},u.strength=function(h){return arguments.length?(s=typeof h=="function"?h:bn(+h),c(),u):s},u.radius=function(h){return arguments.length?(n=typeof h=="function"?h:bn(+h),c(),u):n},u.x=function(h){return arguments.length?(e=+h,u):e},u.y=function(h){return arguments.length?(t=+h,u):t},u.z=function(h){return arguments.length?(r=+h,u):r},u}function eh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gs=function(e){J0(e);var t=Z0(e);return e.on=t.on,e.off=t.off,e.fire=t.fire,e};function Z0(n){var e=Object.create(null);return{on:function(t,r,i){if(typeof r!="function")throw new Error("callback is expected to be a function");var a=e[t];return a||(a=e[t]=[]),a.push({callback:r,ctx:i}),n},off:function(t,r){var i=typeof t>"u";if(i)return e=Object.create(null),n;if(e[t]){var a=typeof r!="function";if(a)delete e[t];else for(var s=e[t],o=0;o<s.length;++o)s[o].callback===r&&s.splice(o,1)}return n},fire:function(t){var r=e[t];if(!r)return n;var i;arguments.length>1&&(i=Array.prototype.splice.call(arguments,1));for(var a=0;a<r.length;++a){var s=r[a];s.callback.apply(s.ctx,i)}return n}}}function J0(n){if(!n)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],t=0;t<e.length;++t)if(n.hasOwnProperty(e[t]))throw new Error("Subject cannot be eventified, since it already has property '"+e[t]+"'")}var Q0=ty,ey=gs;function ty(n){if(n=n||{},"uniqueLinkId"in n&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),n.multigraph=n.uniqueLinkId),n.multigraph===void 0&&(n.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,t=new Map,r={},i=0,a=n.multigraph?x:_,s=[],o=N,l=N,u=N,c=N,h={version:20,addNode:v,addLink:M,removeLink:L,removeNode:d,getNode:g,getNodeCount:y,getLinkCount:S,getEdgeCount:S,getLinksCount:S,getNodesCount:y,getLinks:w,forEachNode:te,forEachLinkedNode:J,forEachLink:U,beginUpdate:u,endUpdate:c,clear:k,hasLink:A,hasNode:g,getLink:A};return ey(h),f(),h;function f(){var G=h.on;h.on=Y;function Y(){return h.beginUpdate=u=j,h.endUpdate=c=ie,o=p,l=m,h.on=G,G.apply(h,arguments)}}function p(G,Y){s.push({link:G,changeType:Y})}function m(G,Y){s.push({node:G,changeType:Y})}function v(G,Y){if(G===void 0)throw new Error("Invalid node identifier");u();var ee=g(G);return ee?(ee.data=Y,l(ee,"update")):(ee=new ny(G,Y),l(ee,"add")),e.set(G,ee),c(),ee}function g(G){return e.get(G)}function d(G){var Y=g(G);if(!Y)return!1;u();var ee=Y.links;return ee&&(ee.forEach(b),Y.links=null),e.delete(G),l(Y,"remove"),c(),!0}function M(G,Y,ee){u();var W=g(G)||v(G),z=g(Y)||v(Y),V=a(G,Y,ee),ne=t.has(V.id);return t.set(V.id,V),bu(W,V),G!==Y&&bu(z,V),o(V,ne?"update":"add"),c(),V}function _(G,Y,ee){var W=ji(G,Y),z=t.get(W);return z?(z.data=ee,z):new Mu(G,Y,ee,W)}function x(G,Y,ee){var W=ji(G,Y),z=r.hasOwnProperty(W);if(z||A(G,Y)){z||(r[W]=0);var V="@"+ ++r[W];W=ji(G+V,Y+V)}return new Mu(G,Y,ee,W)}function y(){return e.size}function S(){return t.size}function w(G){var Y=g(G);return Y?Y.links:null}function L(G,Y){return Y!==void 0&&(G=A(G,Y)),b(G)}function b(G){if(!G||!t.get(G.id))return!1;u(),t.delete(G.id);var Y=g(G.fromId),ee=g(G.toId);return Y&&Y.links.delete(G),ee&&ee.links.delete(G),o(G,"remove"),c(),!0}function A(G,Y){if(!(G===void 0||Y===void 0))return t.get(ji(G,Y))}function k(){u(),te(function(G){d(G.id)}),c()}function U(G){if(typeof G=="function")for(var Y=t.values(),ee=Y.next();!ee.done;){if(G(ee.value))return!0;ee=Y.next()}}function J(G,Y,ee){var W=g(G);if(W&&W.links&&typeof Y=="function")return ee?R(W.links,G,Y):C(W.links,G,Y)}function C(G,Y,ee){for(var W,z=G.values(),V=z.next();!V.done;){var ne=V.value,D=ne.fromId===Y?ne.toId:ne.fromId;if(W=ee(e.get(D),ne),W)return!0;V=z.next()}}function R(G,Y,ee){for(var W,z=G.values(),V=z.next();!V.done;){var ne=V.value;if(ne.fromId===Y&&(W=ee(e.get(ne.toId),ne),W))return!0;V=z.next()}}function N(){}function j(){i+=1}function ie(){i-=1,i===0&&s.length>0&&(h.fire("changed",s),s.length=0)}function te(G){if(typeof G!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+G);for(var Y=e.values(),ee=Y.next();!ee.done;){if(G(ee.value))return!0;ee=Y.next()}}}function ny(n,e){this.id=n,this.links=null,this.data=e}function bu(n,e){n.links?n.links.add(e):n.links=new Set([e])}function Mu(n,e,t,r){this.fromId=n,this.toId=e,this.data=t,this.id=r}function ji(n,e){return n.toString()+"👉 "+e.toString()}const ry=eh(Q0);var ms={exports:{}},mi={exports:{}},th=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const iy=th;var Br=function(e){return t;function t(r,i){let a=i&&i.indent||0,s=i&&i.join!==void 0?i.join:`
`,o=Array(a+1).join(" "),l=[];for(let u=0;u<e;++u){let c=iy(u),h=u===0?"":o;l.push(h+r.replace(/{var}/g,c))}return l.join(s)}};const nh=Br;mi.exports=ay;mi.exports.generateCreateBodyFunctionBody=rh;mi.exports.getVectorCode=ah;mi.exports.getBodyCode=ih;function ay(n,e){let t=rh(n,e),{Body:r}=new Function(t)();return r}function rh(n,e){return`
${ah(n,e)}
${ih(n)}
return {Body: Body, Vector: Vector};
`}function ih(n){let e=nh(n),t=e("{var}",{join:", "});return`
function Body(${t}) {
  this.isPinned = false;
  this.pos = new Vector(${t});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${t}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function ah(n,e){let t=nh(n),r="";return e&&(r=`${t(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${t("{var}",{join:", "})}) {
  ${r}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${t('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${t("this.{var} = v.{var};",{indent:4})}
    } else {
      ${t('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${t("this.{var} = ",{join:""})}0;
  };`}var oy=mi.exports,Bn={exports:{}};const vs=Br,In=th;Bn.exports=sy;Bn.exports.generateQuadTreeFunctionBody=oh;Bn.exports.getInsertStackCode=hh;Bn.exports.getQuadNodeCode=ch;Bn.exports.isSamePosition=sh;Bn.exports.getChildBodyCode=uh;Bn.exports.setChildBodyCode=lh;function sy(n){let e=oh(n);return new Function(e)()}function oh(n){let e=vs(n),t=Math.pow(2,n);return`
${hh()}
${ch(n)}
${sh(n)}
${uh(n)}
${lh(n)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${s("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${In(0)} - node.min_${In(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${a()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${i(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function i(o){let l=[],u=Array(o+1).join(" ");for(let c=0;c<n;++c)l.push(u+`if (${In(c)} > max_${In(c)}) {`),l.push(u+`  quadIdx = quadIdx + ${Math.pow(2,c)};`),l.push(u+`  min_${In(c)} = max_${In(c)};`),l.push(u+`  max_${In(c)} = node.max_${In(c)};`),l.push(u+"}");return l.join(`
`)}function a(){let o=Array(11).join(" "),l=[];for(let u=0;u<t;++u)l.push(o+`if (node.quad${u}) {`),l.push(o+`  queue[pushIdx] = node.quad${u};`),l.push(o+"  queueLength += 1;"),l.push(o+"  pushIdx += 1;"),l.push(o+"}");return l.join(`
`)}function s(o){let l=[];for(let u=0;u<t;++u)l.push(`${o}quad${u} = null;`);return l.join(`
`)}}function sh(n){let e=vs(n);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function lh(n){var e=Math.pow(2,n);return`
function setChild(node, idx, child) {
  ${t()}
}`;function t(){let r=[];for(let i=0;i<e;++i){let a=i===0?"  ":"  else ";r.push(`${a}if (idx === ${i}) node.quad${i} = child;`)}return r.join(`
`)}}function uh(n){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let t=[],r=Math.pow(2,n);for(let i=0;i<r;++i)t.push(`  if (idx === ${i}) return node.quad${i};`);return t.join(`
`)}}function ch(n){let e=vs(n),t=Math.pow(2,n);var r=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${i("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return r;function i(a){let s=[];for(let o=0;o<t;++o)s.push(`${a}quad${o} = null;`);return s.join(`
`)}}function hh(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var ly=Bn.exports,_s={exports:{}};_s.exports=cy;_s.exports.generateFunctionBody=dh;const uy=Br;function cy(n){let e=dh(n);return new Function("bodies","settings","random",e)}function dh(n){let e=uy(n);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var hy=_s.exports,ys={exports:{}};const dy=Br;ys.exports=fy;ys.exports.generateCreateDragForceFunctionBody=fh;function fy(n){let e=fh(n);return new Function("options",e)}function fh(n){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${dy(n)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var py=ys.exports,xs={exports:{}};const gy=Br;xs.exports=my;xs.exports.generateCreateSpringForceFunctionBody=ph;function my(n){let e=ph(n);return new Function("options","random",e)}function ph(n){let e=gy(n);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var vy=xs.exports,bs={exports:{}};const _y=Br;bs.exports=yy;bs.exports.generateIntegratorFunctionBody=gh;function yy(n){let e=gh(n);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function gh(n){let e=_y(n);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var xy=bs.exports,fo,Su;function by(){if(Su)return fo;Su=1,fo=n;function n(e,t,r,i){this.from=e,this.to=t,this.length=r,this.coefficient=i}return fo}var po,Eu;function My(){if(Eu)return po;Eu=1,po=n;function n(e,t){var r;if(e||(e={}),t){for(r in t)if(t.hasOwnProperty(r)){var i=e.hasOwnProperty(r),a=typeof t[r],s=!i||typeof e[r]!==a;s?e[r]=t[r]:a==="object"&&(e[r]=n(e[r],t[r]))}}return e}return po}var $r={exports:{}},wu;function Sy(){if(wu)return $r.exports;wu=1,$r.exports=n,$r.exports.random=n,$r.exports.randomIterator=o;function n(l){var u=typeof l=="number"?l:+new Date;return new e(u)}function e(l){this.seed=l}e.prototype.next=s,e.prototype.nextDouble=a,e.prototype.uniform=a,e.prototype.gaussian=t;function t(){var l,u,c;do u=this.nextDouble()*2-1,c=this.nextDouble()*2-1,l=u*u+c*c;while(l>=1||l===0);return u*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=r;function r(){var l=1.5,u=Math.pow(i(1+l)*Math.sin(Math.PI*l/2)/(i((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*u/Math.pow(Math.abs(this.gaussian()),1/l)}function i(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function a(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function s(l){return Math.floor(this.nextDouble()*l)}function o(l,u){var c=u||n();if(typeof c.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:f,shuffle:h};function h(){var p,m,v;for(p=l.length-1;p>0;--p)m=c.next(p+1),v=l[m],l[m]=l[p],l[p]=v;return l}function f(p){var m,v,g;for(m=l.length-1;m>0;--m)v=c.next(m+1),g=l[v],l[v]=l[m],l[m]=g,p(g);l.length&&p(l[0])}}return $r.exports}var mh=Ry,Ey=oy,wy=ly,Ty=hy,Ay=py,Cy=vy,Py=xy,Tu={};function Ry(n){var e=by(),t=My(),r=gs;if(n){if(n.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(n.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}n=t(n,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var i=Tu[n.dimensions];if(!i){var a=n.dimensions;i={Body:Ey(a,n.debug),createQuadTree:wy(a),createBounds:Ty(a),createDragForce:Ay(a),createSpringForce:Cy(a),integrate:Py(a)},Tu[a]=i}var s=i.Body,o=i.createQuadTree,l=i.createBounds,u=i.createDragForce,c=i.createSpringForce,h=i.integrate,f=R=>new s(R),p=Sy().random(42),m=[],v=[],g=o(n,p),d=l(m,n,p),M=c(n,p),_=u(n),x=0,y=[],S=new Map,w=0;A("nbody",J),A("spring",C);var L={bodies:m,quadTree:g,springs:v,settings:n,addForce:A,removeForce:k,getForces:U,step:function(){for(var R=0;R<y.length;++R)y[R](w);var N=h(m,n.timeStep,n.adaptiveTimeStepWeight);return w+=1,N},addBody:function(R){if(!R)throw new Error("Body is required");return m.push(R),R},addBodyAt:function(R){if(!R)throw new Error("Body position is required");var N=f(R);return m.push(N),N},removeBody:function(R){if(R){var N=m.indexOf(R);if(!(N<0))return m.splice(N,1),m.length===0&&d.reset(),!0}},addSpring:function(R,N,j,ie){if(!R||!N)throw new Error("Cannot add null spring to force simulator");typeof j!="number"&&(j=-1);var te=new e(R,N,j,ie>=0?ie:-1);return v.push(te),te},getTotalMovement:function(){return x},removeSpring:function(R){if(R){var N=v.indexOf(R);if(N>-1)return v.splice(N,1),!0}},getBestNewBodyPosition:function(R){return d.getBestNewPosition(R)},getBBox:b,getBoundingBox:b,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(R){return R!==void 0?(n.gravity=R,g.options({gravity:R}),this):n.gravity},theta:function(R){return R!==void 0?(n.theta=R,g.options({theta:R}),this):n.theta},random:p};return Ly(n,L),r(L),L;function b(){return d.update(),d.box}function A(R,N){if(S.has(R))throw new Error("Force "+R+" is already added");S.set(R,N),y.push(N)}function k(R){var N=y.indexOf(S.get(R));N<0||(y.splice(N,1),S.delete(R))}function U(){return S}function J(){if(m.length!==0){g.insertBodies(m);for(var R=m.length;R--;){var N=m[R];N.isPinned||(N.reset(),g.updateBodyForce(N),_.update(N))}}}function C(){for(var R=v.length;R--;)M.update(v[R])}}function Ly(n,e){for(var t in n)Oy(n,e,t)}function Oy(n,e,t){if(n.hasOwnProperty(t)&&typeof e[t]!="function"){var r=Number.isFinite(n[t]);r?e[t]=function(i){if(i!==void 0){if(!Number.isFinite(i))throw new Error("Value of "+t+" should be a valid number.");return n[t]=i,e}return n[t]}:e[t]=function(i){return i!==void 0?(n[t]=i,e):n[t]}}}ms.exports=Dy;ms.exports.simulator=mh;var Iy=gs;function Dy(n,e){if(!n)throw new Error("Graph structure cannot be undefined");var t=e&&e.createSimulator||mh,r=t(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var i=n.version>19?J:U;e&&typeof e.nodeMass=="function"&&(i=e.nodeMass);var a=new Map,s={},o=0,l=r.settings.springTransform||Ny;_(),g();var u=!1,c={step:function(){if(o===0)return h(!0),!0;var C=r.step();c.lastMove=C,c.fire("step");var R=C/o,N=R<=.01;return h(N),N},getNodePosition:function(C){return k(C).pos},setNodePosition:function(C){var R=k(C);R.setPosition.apply(R,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(C){var R=s[C];if(R)return{from:R.from.pos,to:R.to.pos}},getGraphRect:function(){return r.getBBox()},forEachBody:f,pinNode:function(C,R){var N=k(C.id);N.isPinned=!!R},isNodePinned:function(C){return k(C.id).isPinned},dispose:function(){n.off("changed",M),c.fire("disposed")},getBody:v,getSpring:m,getForceVectorLength:p,simulator:r,graph:n,lastMove:0};return Iy(c),c;function h(C){u!==C&&(u=C,d(C))}function f(C){a.forEach(C)}function p(){var C=0,R=0;return f(function(N){C+=Math.abs(N.force.x),R+=Math.abs(N.force.y)}),Math.sqrt(C*C+R*R)}function m(C,R){var N;if(R===void 0)typeof C!="object"?N=C:N=C.id;else{var j=n.hasLink(C,R);if(!j)return;N=j.id}return s[N]}function v(C){return a.get(C)}function g(){n.on("changed",M)}function d(C){c.fire("stable",C)}function M(C){for(var R=0;R<C.length;++R){var N=C[R];N.changeType==="add"?(N.node&&x(N.node.id),N.link&&S(N.link)):N.changeType==="remove"&&(N.node&&y(N.node),N.link&&w(N.link))}o=n.getNodesCount()}function _(){o=0,n.forEachNode(function(C){x(C.id),o+=1}),n.forEachLink(S)}function x(C){var R=a.get(C);if(!R){var N=n.getNode(C);if(!N)throw new Error("initBody() was called with unknown node id");var j=N.position;if(!j){var ie=L(N);j=r.getBestNewBodyPosition(ie)}R=r.addBodyAt(j),R.id=C,a.set(C,R),b(C),A(N)&&(R.isPinned=!0)}}function y(C){var R=C.id,N=a.get(R);N&&(a.delete(R),r.removeBody(N))}function S(C){b(C.fromId),b(C.toId);var R=a.get(C.fromId),N=a.get(C.toId),j=r.addSpring(R,N,C.length);l(C,j),s[C.id]=j}function w(C){var R=s[C.id];if(R){var N=n.getNode(C.fromId),j=n.getNode(C.toId);N&&b(N.id),j&&b(j.id),delete s[C.id],r.removeSpring(R)}}function L(C){var R=[];if(!C.links)return R;for(var N=Math.min(C.links.length,2),j=0;j<N;++j){var ie=C.links[j],te=ie.fromId!==C.id?a.get(ie.fromId):a.get(ie.toId);te&&te.pos&&R.push(te)}return R}function b(C){var R=a.get(C);if(R.mass=i(C),Number.isNaN(R.mass))throw new Error("Node mass should be a number")}function A(C){return C&&(C.isPinned||C.data&&C.data.isPinned)}function k(C){var R=a.get(C);return R||(x(C),R=a.get(C)),R}function U(C){var R=n.getLinks(C);return R?1+R.length/3:1}function J(C){var R=n.getLinks(C);return R?1+R.size/3:1}}function Ny(){}var Fy=ms.exports;const Uy=eh(Fy);function Uo(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var Gy=typeof global=="object"&&global&&global.Object===Object&&global;const ky=Gy;var By=typeof self=="object"&&self&&self.Object===Object&&self,Hy=ky||By||Function("return this")();const vh=Hy;var zy=function(){return vh.Date.now()};const go=zy;var Vy=/\s/;function Wy(n){for(var e=n.length;e--&&Vy.test(n.charAt(e)););return e}var jy=/^\s+/;function Xy(n){return n&&n.slice(0,Wy(n)+1).replace(jy,"")}var qy=vh.Symbol;const ua=qy;var _h=Object.prototype,$y=_h.hasOwnProperty,Yy=_h.toString,Yr=ua?ua.toStringTag:void 0;function Ky(n){var e=$y.call(n,Yr),t=n[Yr];try{n[Yr]=void 0;var r=!0}catch{}var i=Yy.call(n);return r&&(e?n[Yr]=t:delete n[Yr]),i}var Zy=Object.prototype,Jy=Zy.toString;function Qy(n){return Jy.call(n)}var ex="[object Null]",tx="[object Undefined]",Au=ua?ua.toStringTag:void 0;function nx(n){return n==null?n===void 0?tx:ex:Au&&Au in Object(n)?Ky(n):Qy(n)}function rx(n){return n!=null&&typeof n=="object"}var ix="[object Symbol]";function ax(n){return typeof n=="symbol"||rx(n)&&nx(n)==ix}var Cu=NaN,ox=/^[-+]0x[0-9a-f]+$/i,sx=/^0b[01]+$/i,lx=/^0o[0-7]+$/i,ux=parseInt;function Pu(n){if(typeof n=="number")return n;if(ax(n))return Cu;if(Uo(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=Uo(e)?e+"":e}if(typeof n!="string")return n===0?n:+n;n=Xy(n);var t=sx.test(n);return t||lx.test(n)?ux(n.slice(2),t?2:8):ox.test(n)?Cu:+n}var cx="Expected a function",hx=Math.max,dx=Math.min;function fx(n,e,t){var r,i,a,s,o,l,u=0,c=!1,h=!1,f=!0;if(typeof n!="function")throw new TypeError(cx);e=Pu(e)||0,Uo(t)&&(c=!!t.leading,h="maxWait"in t,a=h?hx(Pu(t.maxWait)||0,e):a,f="trailing"in t?!!t.trailing:f);function p(S){var w=r,L=i;return r=i=void 0,u=S,s=n.apply(L,w),s}function m(S){return u=S,o=setTimeout(d,e),c?p(S):s}function v(S){var w=S-l,L=S-u,b=e-w;return h?dx(b,a-L):b}function g(S){var w=S-l,L=S-u;return l===void 0||w>=e||w<0||h&&L>=a}function d(){var S=go();if(g(S))return M(S);o=setTimeout(d,v(S))}function M(S){return o=void 0,f&&r?p(S):(r=i=void 0,s)}function _(){o!==void 0&&clearTimeout(o),u=0,r=l=i=o=void 0}function x(){return o===void 0?s:M(go())}function y(){var S=go(),w=g(S);if(r=arguments,i=this,l=S,w){if(o===void 0)return m(l);if(h)return clearTimeout(o),o=setTimeout(d,e),p(l)}return o===void 0&&(o=setTimeout(d,e)),s}return y.cancel=_,y.flush=x,y}function px(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,a,s,o=[],l=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=a.call(t)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}function gx(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Ru(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,Mx(r.key),r)}}function mx(n,e,t){return e&&Ru(n.prototype,e),t&&Ru(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function vx(n,e){return _x(n)||px(n,e)||yx(n,e)||xx()}function _x(n){if(Array.isArray(n))return n}function yx(n,e){if(n){if(typeof n=="string")return Lu(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Lu(n,e)}}function Lu(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function xx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Mx(n){var e=bx(n,"string");return typeof e=="symbol"?e:String(e)}var Sx=mx(function n(e,t){var r=t.default,i=r===void 0?null:r,a=t.triggerUpdate,s=a===void 0?!0:a,o=t.onChange,l=o===void 0?function(u,c){}:o;gx(this,n),this.name=e,this.defaultVal=i,this.triggerUpdate=s,this.onChange=l});function Ms(n){var e=n.stateInit,t=e===void 0?function(){return{}}:e,r=n.props,i=r===void 0?{}:r,a=n.methods,s=a===void 0?{}:a,o=n.aliases,l=o===void 0?{}:o,u=n.init,c=u===void 0?function(){}:u,h=n.update,f=h===void 0?function(){}:h,p=Object.keys(i).map(function(m){return new Sx(m,i[m])});return function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},t instanceof Function?t(m):t,{initialised:!1}),g={};function d(x){return M(x,m),_(),d}var M=function(y,S){c.call(d,y,v,S),v.initialised=!0},_=fx(function(){v.initialised&&(f.call(d,v,g),g={})},1);return p.forEach(function(x){d[x.name]=y(x);function y(S){var w=S.name,L=S.triggerUpdate,b=L===void 0?!1:L,A=S.onChange,k=A===void 0?function(C,R){}:A,U=S.defaultVal,J=U===void 0?null:U;return function(C){var R=v[w];if(!arguments.length)return R;var N=C===void 0?J:C;return v[w]=N,k.call(d,N,v,R),!g.hasOwnProperty(w)&&(g[w]=R),b&&_(),d}}}),Object.keys(s).forEach(function(x){d[x]=function(){for(var y,S=arguments.length,w=new Array(S),L=0;L<S;L++)w[L]=arguments[L];return(y=s[x]).call.apply(y,[d,v].concat(w))}}),Object.entries(l).forEach(function(x){var y=vx(x,2),S=y[0],w=y[1];return d[S]=d[w]}),d.resetProps=function(){return p.forEach(function(x){d[x.name](x.defaultVal)}),d},d.resetProps(),v._rerender=_,d}}var $e=function(n){return typeof n=="function"?n:typeof n=="string"?function(e){return e[n]}:function(e){return n}};class Ou extends Map{constructor(e,t=Tx){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:t}}),e!=null)for(const[r,i]of e)this.set(r,i)}get(e){return super.get(Iu(this,e))}has(e){return super.has(Iu(this,e))}set(e,t){return super.set(Ex(this,e),t)}delete(e){return super.delete(wx(this,e))}}function Iu({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):t}function Ex({_intern:n,_key:e},t){const r=e(t);return n.has(r)?n.get(r):(n.set(r,t),t)}function wx({_intern:n,_key:e},t){const r=e(t);return n.has(r)&&(t=n.get(r),n.delete(r)),t}function Tx(n){return n!==null&&typeof n=="object"?n.valueOf():n}function Ax(n,e){let t;if(e===void 0)for(const r of n)r!=null&&(t<r||t===void 0&&r>=r)&&(t=r);else{let r=-1;for(let i of n)(i=e(i,++r,n))!=null&&(t<i||t===void 0&&i>=i)&&(t=i)}return t}function Cx(n,e){let t;if(e===void 0)for(const r of n)r!=null&&(t>r||t===void 0&&r>=r)&&(t=r);else{let r=-1;for(let i of n)(i=e(i,++r,n))!=null&&(t>i||t===void 0&&i>=i)&&(t=i)}return t}function Px(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,a,s,o=[],l=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=a.call(t)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}function Rx(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function Lx(n,e){if(n==null)return{};var t=Rx(n,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Ox(n,e){return Nx(n)||Px(n,e)||yh(n,e)||Gx()}function Ix(n){return Dx(n)||Fx(n)||yh(n)||Ux()}function Dx(n){if(Array.isArray(n))return Go(n)}function Nx(n){if(Array.isArray(n))return n}function Fx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function yh(n,e){if(n){if(typeof n=="string")return Go(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Go(n,e)}}function Go(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Ux(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Gx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Bx(n){var e=kx(n,"string");return typeof e=="symbol"?e:String(e)}var Du=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,i=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(o){return{keyAccessor:o,isProp:!(o instanceof Function)}}),a=n.reduce(function(o,l){var u=o,c=l;return i.forEach(function(h,f){var p=h.keyAccessor,m=h.isProp,v;if(m){var g=c,d=g[p],M=Lx(g,[p].map(Bx));v=d,c=M}else v=p(c,f);f+1<i.length?(u.hasOwnProperty(v)||(u[v]={}),u=u[v]):t?(u.hasOwnProperty(v)||(u[v]=[]),u[v].push(c)):u[v]=c}),o},{});t instanceof Function&&function o(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;u===i.length?Object.keys(l).forEach(function(c){return l[c]=t(l[c])}):Object.values(l).forEach(function(c){return o(c,u+1)})}(a);var s=a;return r&&(s=[],function o(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];u.length===i.length?s.push({keys:u,vals:l}):Object.entries(l).forEach(function(c){var h=Ox(c,2),f=h[0],p=h[1];return o(p,[].concat(Ix(u),[f]))})}(a),e instanceof Array&&e.length===0&&s.length===1&&(s[0].keys=[])),s};function Hx(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,a,s,o=[],l=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=a.call(t)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}function Nu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function zx(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Nu(Object(t),!0).forEach(function(r){xh(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Nu(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function xh(n,e,t){return e=Zx(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Vx(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function Wx(n,e){if(n==null)return{};var t=Vx(n,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function bh(n,e){return Xx(n)||Hx(n,e)||Mh(n,e)||Yx()}function ca(n){return jx(n)||qx(n)||Mh(n)||$x()}function jx(n){if(Array.isArray(n))return ko(n)}function Xx(n){if(Array.isArray(n))return n}function qx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Mh(n,e){if(n){if(typeof n=="string")return ko(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ko(n,e)}}function ko(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function $x(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Yx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kx(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Zx(n){var e=Kx(n,"string");return typeof e=="symbol"?e:String(e)}var Jx=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function Qx(n,e,t){var r={enter:[],update:[],exit:[]};if(t){var s=Du(n,t,!1),o=Du(e,t,!1),l=Object.assign({},s,o);Object.entries(l).forEach(function(u){var c=bh(u,2),h=c[0],f=c[1],p=s.hasOwnProperty(h)?o.hasOwnProperty(h)?"update":"exit":"enter";r[p].push(p==="update"?[s[h],o[h]]:f)})}else{var i=new Set(n),a=new Set(e);new Set([].concat(ca(i),ca(a))).forEach(function(u){var c=i.has(u)?a.has(u)?"update":"exit":"enter";r[c].push(c==="update"?[u,u]:u)})}return r}function eb(n,e,t){var r=t.objBindAttr,i=r===void 0?"__obj":r,a=t.dataBindAttr,s=a===void 0?"__data":a,o=t.idAccessor,l=t.purge,u=l===void 0?!1:l,c=function(g){return g.hasOwnProperty(s)},h=e.filter(function(v){return!c(v)}),f=e.filter(c).map(function(v){return v[s]}),p=n,m=u?{enter:p,exit:f,update:[]}:Qx(f,p,o);return m.update=m.update.map(function(v){var g=bh(v,2),d=g[0],M=g[1];return d!==M&&(M[i]=d[i],M[i][s]=M),M}),m.exit=m.exit.concat(h.map(function(v){return xh({},i,v)})),m}function tb(n,e,t,r,i){var a=i.createObj,s=a===void 0?function(L){return{}}:a,o=i.updateObj,l=o===void 0?function(L,b){}:o,u=i.exitObj,c=u===void 0?function(L){}:u,h=i.objBindAttr,f=h===void 0?"__obj":h,p=i.dataBindAttr,m=p===void 0?"__data":p,v=Wx(i,Jx),g=eb(n,e,zx({objBindAttr:f,dataBindAttr:m},v)),d=g.enter,M=g.update,_=g.exit;_.forEach(function(L){var b=L[f];delete L[f],c(b),r(b)});var x=S(d),y=[].concat(ca(d),ca(M));w(y),x.forEach(t);function S(L){var b=[];return L.forEach(function(A){var k=s(A);k&&(k[m]=A,A[f]=k,b.push(k))}),b}function w(L){L.forEach(function(b){var A=b[f];A&&(A[m]=b,l(A,b))})}}function nb(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}const Fu=Symbol("implicit");function Sh(){var n=new Ou,e=[],t=[],r=Fu;function i(a){let s=n.get(a);if(s===void 0){if(r!==Fu)return r;n.set(a,s=e.push(a)-1)}return t[s%t.length]}return i.domain=function(a){if(!arguments.length)return e.slice();e=[],n=new Ou;for(const s of a)n.has(s)||n.set(s,e.push(s)-1);return i},i.range=function(a){return arguments.length?(t=Array.from(a),i):t.slice()},i.unknown=function(a){return arguments.length?(r=a,i):r},i.copy=function(){return Sh(e,t).unknown(r)},nb.apply(i,arguments),i}function rb(n){for(var e=n.length/6|0,t=new Array(e),r=0;r<e;)t[r]="#"+n.slice(r*6,++r*6);return t}const ib=rb("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function ha(n){"@babel/helpers - typeof";return ha=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ha(n)}var ab=/^\s+/,ob=/\s+$/;function Se(n,e){if(n=n||"",e=e||{},n instanceof Se)return n;if(!(this instanceof Se))return new Se(n,e);var t=sb(n);this._originalInput=n,this._r=t.r,this._g=t.g,this._b=t.b,this._a=t.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||t.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=t.ok}Se.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),t,r,i,a,s,o;return t=e.r/255,r=e.g/255,i=e.b/255,t<=.03928?a=t/12.92:a=Math.pow((t+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),i<=.03928?o=i/12.92:o=Math.pow((i+.055)/1.055,2.4),.2126*a+.7152*s+.0722*o},setAlpha:function(e){return this._a=Eh(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=Gu(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=Gu(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.v*100);return this._a==1?"hsv("+t+", "+r+"%, "+i+"%)":"hsva("+t+", "+r+"%, "+i+"%, "+this._roundA+")"},toHsl:function(){var e=Uu(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=Uu(this._r,this._g,this._b),t=Math.round(e.h*360),r=Math.round(e.s*100),i=Math.round(e.l*100);return this._a==1?"hsl("+t+", "+r+"%, "+i+"%)":"hsla("+t+", "+r+"%, "+i+"%, "+this._roundA+")"},toHex:function(e){return ku(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return hb(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(nt(this._r,255)*100)+"%",g:Math.round(nt(this._g,255)*100)+"%",b:Math.round(nt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(nt(this._r,255)*100)+"%, "+Math.round(nt(this._g,255)*100)+"%, "+Math.round(nt(this._b,255)*100)+"%)":"rgba("+Math.round(nt(this._r,255)*100)+"%, "+Math.round(nt(this._g,255)*100)+"%, "+Math.round(nt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:Sb[ku(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var t="#"+Bu(this._r,this._g,this._b,this._a),r=t,i=this._gradientType?"GradientType = 1, ":"";if(e){var a=Se(e);r="#"+Bu(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+i+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,i=this._a<1&&this._a>=0,a=!t&&i&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return a?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(r=this.toRgbString()),e==="prgb"&&(r=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(r=this.toHexString()),e==="hex3"&&(r=this.toHexString(!0)),e==="hex4"&&(r=this.toHex8String(!0)),e==="hex8"&&(r=this.toHex8String()),e==="name"&&(r=this.toName()),e==="hsl"&&(r=this.toHslString()),e==="hsv"&&(r=this.toHsvString()),r||this.toHexString())},clone:function(){return Se(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(gb,arguments)},brighten:function(){return this._applyModification(mb,arguments)},darken:function(){return this._applyModification(vb,arguments)},desaturate:function(){return this._applyModification(db,arguments)},saturate:function(){return this._applyModification(fb,arguments)},greyscale:function(){return this._applyModification(pb,arguments)},spin:function(){return this._applyModification(_b,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(bb,arguments)},complement:function(){return this._applyCombination(yb,arguments)},monochromatic:function(){return this._applyCombination(Mb,arguments)},splitcomplement:function(){return this._applyCombination(xb,arguments)},triad:function(){return this._applyCombination(Hu,[3])},tetrad:function(){return this._applyCombination(Hu,[4])}};Se.fromRatio=function(n,e){if(ha(n)=="object"){var t={};for(var r in n)n.hasOwnProperty(r)&&(r==="a"?t[r]=n[r]:t[r]=ni(n[r]));n=t}return Se(n,e)};function sb(n){var e={r:0,g:0,b:0},t=1,r=null,i=null,a=null,s=!1,o=!1;return typeof n=="string"&&(n=Ab(n)),ha(n)=="object"&&(pn(n.r)&&pn(n.g)&&pn(n.b)?(e=lb(n.r,n.g,n.b),s=!0,o=String(n.r).substr(-1)==="%"?"prgb":"rgb"):pn(n.h)&&pn(n.s)&&pn(n.v)?(r=ni(n.s),i=ni(n.v),e=cb(n.h,r,i),s=!0,o="hsv"):pn(n.h)&&pn(n.s)&&pn(n.l)&&(r=ni(n.s),a=ni(n.l),e=ub(n.h,r,a),s=!0,o="hsl"),n.hasOwnProperty("a")&&(t=n.a)),t=Eh(t),{ok:s,format:n.format||o,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}function lb(n,e,t){return{r:nt(n,255)*255,g:nt(e,255)*255,b:nt(t,255)*255}}function Uu(n,e,t){n=nt(n,255),e=nt(e,255),t=nt(t,255);var r=Math.max(n,e,t),i=Math.min(n,e,t),a,s,o=(r+i)/2;if(r==i)a=s=0;else{var l=r-i;switch(s=o>.5?l/(2-r-i):l/(r+i),r){case n:a=(e-t)/l+(e<t?6:0);break;case e:a=(t-n)/l+2;break;case t:a=(n-e)/l+4;break}a/=6}return{h:a,s,l:o}}function ub(n,e,t){var r,i,a;n=nt(n,360),e=nt(e,100),t=nt(t,100);function s(u,c,h){return h<0&&(h+=1),h>1&&(h-=1),h<1/6?u+(c-u)*6*h:h<1/2?c:h<2/3?u+(c-u)*(2/3-h)*6:u}if(e===0)r=i=a=t;else{var o=t<.5?t*(1+e):t+e-t*e,l=2*t-o;r=s(l,o,n+1/3),i=s(l,o,n),a=s(l,o,n-1/3)}return{r:r*255,g:i*255,b:a*255}}function Gu(n,e,t){n=nt(n,255),e=nt(e,255),t=nt(t,255);var r=Math.max(n,e,t),i=Math.min(n,e,t),a,s,o=r,l=r-i;if(s=r===0?0:l/r,r==i)a=0;else{switch(r){case n:a=(e-t)/l+(e<t?6:0);break;case e:a=(t-n)/l+2;break;case t:a=(n-e)/l+4;break}a/=6}return{h:a,s,v:o}}function cb(n,e,t){n=nt(n,360)*6,e=nt(e,100),t=nt(t,100);var r=Math.floor(n),i=n-r,a=t*(1-e),s=t*(1-i*e),o=t*(1-(1-i)*e),l=r%6,u=[t,s,a,a,o,t][l],c=[o,t,t,s,a,a][l],h=[a,a,o,t,t,s][l];return{r:u*255,g:c*255,b:h*255}}function ku(n,e,t,r){var i=[Jt(Math.round(n).toString(16)),Jt(Math.round(e).toString(16)),Jt(Math.round(t).toString(16))];return r&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function hb(n,e,t,r,i){var a=[Jt(Math.round(n).toString(16)),Jt(Math.round(e).toString(16)),Jt(Math.round(t).toString(16)),Jt(wh(r))];return i&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)&&a[3].charAt(0)==a[3].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function Bu(n,e,t,r){var i=[Jt(wh(r)),Jt(Math.round(n).toString(16)),Jt(Math.round(e).toString(16)),Jt(Math.round(t).toString(16))];return i.join("")}Se.equals=function(n,e){return!n||!e?!1:Se(n).toRgbString()==Se(e).toRgbString()};Se.random=function(){return Se.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function db(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.s-=e/100,t.s=Sa(t.s),Se(t)}function fb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.s+=e/100,t.s=Sa(t.s),Se(t)}function pb(n){return Se(n).desaturate(100)}function gb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.l+=e/100,t.l=Sa(t.l),Se(t)}function mb(n,e){e=e===0?0:e||10;var t=Se(n).toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),Se(t)}function vb(n,e){e=e===0?0:e||10;var t=Se(n).toHsl();return t.l-=e/100,t.l=Sa(t.l),Se(t)}function _b(n,e){var t=Se(n).toHsl(),r=(t.h+e)%360;return t.h=r<0?360+r:r,Se(t)}function yb(n){var e=Se(n).toHsl();return e.h=(e.h+180)%360,Se(e)}function Hu(n,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var t=Se(n).toHsl(),r=[Se(n)],i=360/e,a=1;a<e;a++)r.push(Se({h:(t.h+a*i)%360,s:t.s,l:t.l}));return r}function xb(n){var e=Se(n).toHsl(),t=e.h;return[Se(n),Se({h:(t+72)%360,s:e.s,l:e.l}),Se({h:(t+216)%360,s:e.s,l:e.l})]}function bb(n,e,t){e=e||6,t=t||30;var r=Se(n).toHsl(),i=360/t,a=[Se(n)];for(r.h=(r.h-(i*e>>1)+720)%360;--e;)r.h=(r.h+i)%360,a.push(Se(r));return a}function Mb(n,e){e=e||6;for(var t=Se(n).toHsv(),r=t.h,i=t.s,a=t.v,s=[],o=1/e;e--;)s.push(Se({h:r,s:i,v:a})),a=(a+o)%1;return s}Se.mix=function(n,e,t){t=t===0?0:t||50;var r=Se(n).toRgb(),i=Se(e).toRgb(),a=t/100,s={r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a};return Se(s)};Se.readability=function(n,e){var t=Se(n),r=Se(e);return(Math.max(t.getLuminance(),r.getLuminance())+.05)/(Math.min(t.getLuminance(),r.getLuminance())+.05)};Se.isReadable=function(n,e,t){var r=Se.readability(n,e),i,a;switch(a=!1,i=Cb(t),i.level+i.size){case"AAsmall":case"AAAlarge":a=r>=4.5;break;case"AAlarge":a=r>=3;break;case"AAAsmall":a=r>=7;break}return a};Se.mostReadable=function(n,e,t){var r=null,i=0,a,s,o,l;t=t||{},s=t.includeFallbackColors,o=t.level,l=t.size;for(var u=0;u<e.length;u++)a=Se.readability(n,e[u]),a>i&&(i=a,r=Se(e[u]));return Se.isReadable(n,r,{level:o,size:l})||!s?r:(t.includeFallbackColors=!1,Se.mostReadable(n,["#fff","#000"],t))};var Bo=Se.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Sb=Se.hexNames=Eb(Bo);function Eb(n){var e={};for(var t in n)n.hasOwnProperty(t)&&(e[n[t]]=t);return e}function Eh(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function nt(n,e){wb(n)&&(n="100%");var t=Tb(n);return n=Math.min(e,Math.max(0,parseFloat(n))),t&&(n=parseInt(n*e,10)/100),Math.abs(n-e)<1e-6?1:n%e/parseFloat(e)}function Sa(n){return Math.min(1,Math.max(0,n))}function Ft(n){return parseInt(n,16)}function wb(n){return typeof n=="string"&&n.indexOf(".")!=-1&&parseFloat(n)===1}function Tb(n){return typeof n=="string"&&n.indexOf("%")!=-1}function Jt(n){return n.length==1?"0"+n:""+n}function ni(n){return n<=1&&(n=n*100+"%"),n}function wh(n){return Math.round(parseFloat(n)*255).toString(16)}function zu(n){return Ft(n)/255}var Xt=function(){var n="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",t="(?:"+e+")|(?:"+n+")",r="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?",i="[\\s|\\(]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")[,|\\s]+("+t+")\\s*\\)?";return{CSS_UNIT:new RegExp(t),rgb:new RegExp("rgb"+r),rgba:new RegExp("rgba"+i),hsl:new RegExp("hsl"+r),hsla:new RegExp("hsla"+i),hsv:new RegExp("hsv"+r),hsva:new RegExp("hsva"+i),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function pn(n){return!!Xt.CSS_UNIT.exec(n)}function Ab(n){n=n.replace(ab,"").replace(ob,"").toLowerCase();var e=!1;if(Bo[n])n=Bo[n],e=!0;else if(n=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t;return(t=Xt.rgb.exec(n))?{r:t[1],g:t[2],b:t[3]}:(t=Xt.rgba.exec(n))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Xt.hsl.exec(n))?{h:t[1],s:t[2],l:t[3]}:(t=Xt.hsla.exec(n))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Xt.hsv.exec(n))?{h:t[1],s:t[2],v:t[3]}:(t=Xt.hsva.exec(n))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Xt.hex8.exec(n))?{r:Ft(t[1]),g:Ft(t[2]),b:Ft(t[3]),a:zu(t[4]),format:e?"name":"hex8"}:(t=Xt.hex6.exec(n))?{r:Ft(t[1]),g:Ft(t[2]),b:Ft(t[3]),format:e?"name":"hex"}:(t=Xt.hex4.exec(n))?{r:Ft(t[1]+""+t[1]),g:Ft(t[2]+""+t[2]),b:Ft(t[3]+""+t[3]),a:zu(t[4]+""+t[4]),format:e?"name":"hex8"}:(t=Xt.hex3.exec(n))?{r:Ft(t[1]+""+t[1]),g:Ft(t[2]+""+t[2]),b:Ft(t[3]+""+t[3]),format:e?"name":"hex"}:!1}function Cb(n){var e,t;return n=n||{level:"AA",size:"small"},e=(n.level||"AA").toUpperCase(),t=(n.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:e,size:t}}function Pb(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,a,s,o=[],l=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=a.call(t)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}function Vu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function Th(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Vu(Object(t),!0).forEach(function(r){Ss(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):Vu(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function Ho(n){"@babel/helpers - typeof";return Ho=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ho(n)}function Rb(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Wu(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,Rh(r.key),r)}}function Lb(n,e,t){return e&&Wu(n.prototype,e),t&&Wu(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}function Ss(n,e,t){return e=Rh(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Ob(n,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&fa(n,e)}function da(n){return da=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},da(n)}function fa(n,e){return fa=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},fa(n,e)}function Ah(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Zi(n,e,t){return Ah()?Zi=Reflect.construct.bind():Zi=function(i,a,s){var o=[null];o.push.apply(o,a);var l=Function.bind.apply(i,o),u=new l;return s&&fa(u,s.prototype),u},Zi.apply(null,arguments)}function Ib(n,e){if(n==null)return{};var t={},r=Object.keys(n),i,a;for(a=0;a<r.length;a++)i=r[a],!(e.indexOf(i)>=0)&&(t[i]=n[i]);return t}function Db(n,e){if(n==null)return{};var t=Ib(n,e),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)r=a[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}function Ch(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Nb(n,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Ch(n)}function Fb(n){var e=Ah();return function(){var r=da(n),i;if(e){var a=da(this).constructor;i=Reflect.construct(r,arguments,a)}else i=r.apply(this,arguments);return Nb(this,i)}}function ju(n,e){return Gb(n)||Pb(n,e)||Ph(n,e)||Hb()}function qt(n){return Ub(n)||kb(n)||Ph(n)||Bb()}function Ub(n){if(Array.isArray(n))return zo(n)}function Gb(n){if(Array.isArray(n))return n}function kb(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ph(n,e){if(n){if(typeof n=="string")return zo(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return zo(n,e)}}function zo(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function Bb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Hb(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zb(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Rh(n){var e=zb(n,"string");return typeof e=="symbol"?e:String(e)}var Vb=function n(e){e instanceof Array?e.forEach(n):(e.map&&e.map.dispose(),e.dispose())},Wb=function n(e){e.geometry&&e.geometry.dispose(),e.material&&Vb(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(n)},Vo=function(e){for(;e.children.length;){var t=e.children[0];e.remove(t),Wb(t)}},jb=["objFilter"];function Kr(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=t.objFilter,i=r===void 0?function(){return!0}:r,a=Db(t,jb);return tb(n,e.children.filter(i),function(s){return e.add(s)},function(s){e.remove(s),Vo(s)},Th({objBindAttr:"__threeObj"},a))}var Zr=function(e){return isNaN(e)?parseInt(Se(e).toHex(),16):e},mo=function(e){return isNaN(e)?Se(e).getAlpha():1},Xb=Sh(ib);function Xu(n,e,t){!e||typeof t!="string"||n.filter(function(r){return!r[t]}).forEach(function(r){r[t]=Xb(e(r))})}function qb(n,e){var t=n.nodes,r=n.links,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=i.nodeFilter,s=a===void 0?function(){return!0}:a,o=i.onLoopError,l=o===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:o,u={};t.forEach(function(p){return u[e(p)]={data:p,out:[],depth:-1,skip:!s(p)}}),r.forEach(function(p){var m=p.source,v=p.target,g=x(m),d=x(v);if(!u.hasOwnProperty(g))throw"Missing source node with id: ".concat(g);if(!u.hasOwnProperty(d))throw"Missing target node with id: ".concat(d);var M=u[g],_=u[d];M.out.push(_);function x(y){return Ho(y)==="object"?e(y):y}});var c=[];f(Object.values(u));var h=Object.assign.apply(Object,[{}].concat(qt(Object.entries(u).filter(function(p){var m=ju(p,2),v=m[1];return!v.skip}).map(function(p){var m=ju(p,2),v=m[0],g=m[1];return Ss({},v,g.depth)}))));return h;function f(p){for(var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,g=function(){var y=p[d];if(m.indexOf(y)!==-1){var S=[].concat(qt(m.slice(m.indexOf(y))),[y]).map(function(w){return e(w.data)});return c.some(function(w){return w.length===S.length&&w.every(function(L,b){return L===S[b]})})||(c.push(S),l(S)),"continue"}v>y.depth&&(y.depth=v,f(y.out,[].concat(qt(m),[y]),v+(y.skip?0:1)))},d=0,M=p.length;d<M;d++)var _=g()}}var Re=window.THREE?window.THREE:{Group:wr,Mesh:Zt,MeshLambertMaterial:w_,Color:Xe,BufferGeometry:Ut,BufferAttribute:Qt,Matrix4:et,Vector3:O,SphereGeometry:ba,CylinderGeometry:xa,TubeGeometry:cs,ConeGeometry:us,Line:u_,LineBasicMaterial:Uc,QuadraticBezierCurve3:ls,CubicBezierCurve3:kc,Box3:tr},qu={graph:ry,forcelayout:Uy},$b=2,$u=new Re.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Xi=new Re.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",Yb=Ms({props:{jsonUrl:{onChange:function(e,t){var r=this;e&&!t.fetchingJson&&(t.fetchingJson=!0,t.onLoading(),fetch(e).then(function(i){return i.json()}).then(function(i){t.fetchingJson=!1,t.onFinishLoading(i),r.graphData(i)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,t){t.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,t){var r=t.d3ForceLayout.force("charge");r&&r.strength(e>2?-60:-30),e<3&&i(t.graphData.nodes,"z"),e<2&&i(t.graphData.nodes,"y");function i(a,s){a.forEach(function(o){delete o[s],delete o["v".concat(s)]})}}},dagMode:{onChange:function(e,t){!e&&t.forceEngine==="d3"&&(t.graphData.nodes||[]).forEach(function(r){return r.fx=r.fy=r.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,t){t.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,t,r){return r===void 0?e.d3ForceLayout.force(t):(e.d3ForceLayout.force(t,r),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var t=e.forceEngine!=="ngraph";return e.engineRunning&&r(),i(),a(),this;function r(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||t&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[t?"tick":"step"](),e.onEngineTick());var s=$e(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(f){var p=f.__threeObj;if(p){var m=t?f:e.layout.getNodePosition(f[e.nodeId]),v=s(f);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?p.children[0]:p,{x:m.x,y:m.y,z:m.z},f)||v)&&(p.position.x=m.x,p.position.y=m.y||0,p.position.z=m.z||0)}});var o=$e(e.linkWidth),l=$e(e.linkCurvature),u=$e(e.linkCurveRotation),c=$e(e.linkThreeObjectExtend);e.graphData.links.forEach(function(f){var p=f.__lineObj;if(p){var m=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),v=m[t?"source":"from"],g=m[t?"target":"to"];if(!(!v||!g||!v.hasOwnProperty("x")||!g.hasOwnProperty("x"))){h(f);var d=c(f);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(d?p.children[1]:p,{start:{x:v.x,y:v.y,z:v.z},end:{x:g.x,y:g.y,z:g.z}},f)&&!d)){var M=30,_=f.__curve,x=p.children.length?p.children[0]:p;if(x.type==="Line"){if(_)x.geometry.setFromPoints(_.getPoints(M));else{var y=x.geometry.getAttribute("position");(!y||!y.array||y.array.length!==6)&&x.geometry[$u]("position",y=new Re.BufferAttribute(new Float32Array(2*3),3)),y.array[0]=v.x,y.array[1]=v.y||0,y.array[2]=v.z||0,y.array[3]=g.x,y.array[4]=g.y||0,y.array[5]=g.z||0,y.needsUpdate=!0}x.geometry.computeBoundingSphere()}else if(x.type==="Mesh")if(_){x.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(x.position.set(0,0,0),x.rotation.set(0,0,0),x.scale.set(1,1,1));var U=Math.ceil(o(f)*10)/10,J=U/2,C=new Re.TubeGeometry(_,M,J,e.linkResolution,!1);x.geometry.dispose(),x.geometry=C}else{if(!x.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var S=Math.ceil(o(f)*10)/10,w=S/2,L=new Re.CylinderGeometry(w,w,1,e.linkResolution,1,!1);L[Xi](new Re.Matrix4().makeTranslation(0,1/2,0)),L[Xi](new Re.Matrix4().makeRotationX(Math.PI/2)),x.geometry.dispose(),x.geometry=L}var b=new Re.Vector3(v.x,v.y||0,v.z||0),A=new Re.Vector3(g.x,g.y||0,g.z||0),k=b.distanceTo(A);x.position.x=b.x,x.position.y=b.y,x.position.z=b.z,x.scale.z=k,x.parent.localToWorld(A),x.lookAt(A)}}}}});function h(f){var p=t?f:e.layout.getLinkPosition(e.layout.graph.getLink(f.source,f.target).id),m=p[t?"source":"from"],v=p[t?"target":"to"];if(!(!m||!v||!m.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var g=l(f);if(!g)f.__curve=null;else{var d=new Re.Vector3(m.x,m.y||0,m.z||0),M=new Re.Vector3(v.x,v.y||0,v.z||0),_=d.distanceTo(M),x,y=u(f);if(_>0){var S=v.x-m.x,w=v.y-m.y||0,L=new Re.Vector3().subVectors(M,d),b=L.clone().multiplyScalar(g).cross(S!==0||w!==0?new Re.Vector3(0,0,1):new Re.Vector3(0,1,0)).applyAxisAngle(L.normalize(),y).add(new Re.Vector3().addVectors(d,M).divideScalar(2));x=new Re.QuadraticBezierCurve3(d,b,M)}else{var A=g*70,k=-y,U=k+Math.PI/2;x=new Re.CubicBezierCurve3(d,new Re.Vector3(A*Math.cos(U),A*Math.sin(U),0).add(d),new Re.Vector3(A*Math.cos(k),A*Math.sin(k),0).add(d),M)}f.__curve=x}}}}function i(){var s=$e(e.linkDirectionalArrowRelPos),o=$e(e.linkDirectionalArrowLength),l=$e(e.nodeVal);e.graphData.links.forEach(function(u){var c=u.__arrowObj;if(c){var h=t?u:e.layout.getLinkPosition(e.layout.graph.getLink(u.source,u.target).id),f=h[t?"source":"from"],p=h[t?"target":"to"];if(!(!f||!p||!f.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var m=Math.cbrt(Math.max(0,l(f)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,l(p)||1))*e.nodeRelSize,g=o(u),d=s(u),M=u.__curve?function(L){return u.__curve.getPoint(L)}:function(L){var b=function(k,U,J,C){return U[k]+(J[k]-U[k])*C||0};return{x:b("x",f,p,L),y:b("y",f,p,L),z:b("z",f,p,L)}},_=u.__curve?u.__curve.getLength():Math.sqrt(["x","y","z"].map(function(L){return Math.pow((p[L]||0)-(f[L]||0),2)}).reduce(function(L,b){return L+b},0)),x=m+g+(_-m-v-g)*d,y=M(x/_),S=M((x-g)/_);["x","y","z"].forEach(function(L){return c.position[L]=S[L]});var w=Zi(Re.Vector3,qt(["x","y","z"].map(function(L){return y[L]})));c.parent.localToWorld(w),c.lookAt(w)}}})}function a(){var s=$e(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(o){var l=o.__photonsObj&&o.__photonsObj.children,u=o.__singleHopPhotonsObj&&o.__singleHopPhotonsObj.children;if(!((!u||!u.length)&&(!l||!l.length))){var c=t?o:e.layout.getLinkPosition(e.layout.graph.getLink(o.source,o.target).id),h=c[t?"source":"from"],f=c[t?"target":"to"];if(!(!h||!f||!h.hasOwnProperty("x")||!f.hasOwnProperty("x"))){var p=s(o),m=o.__curve?function(g){return o.__curve.getPoint(g)}:function(g){var d=function(_,x,y,S){return x[_]+(y[_]-x[_])*S||0};return{x:d("x",h,f,g),y:d("y",h,f,g),z:d("z",h,f,g)}},v=[].concat(qt(l||[]),qt(u||[]));v.forEach(function(g,d){var M=g.parent.__linkThreeObjType==="singleHopPhotons";if(g.hasOwnProperty("__progressRatio")||(g.__progressRatio=M?0:d/l.length),g.__progressRatio+=p,g.__progressRatio>=1)if(!M)g.__progressRatio=g.__progressRatio%1;else{g.parent.remove(g),Vo(g);return}var _=g.__progressRatio,x=m(_);["x","y","z"].forEach(function(y){return g.position[y]=x[y]})})}}})}},emitParticle:function(e,t){if(t&&e.graphData.links.includes(t)){if(!t.__singleHopPhotonsObj){var r=new Re.Group;r.__linkThreeObjType="singleHopPhotons",t.__singleHopPhotonsObj=r,e.graphScene.add(r)}var i=$e(e.linkDirectionalParticleWidth),a=Math.ceil(i(t)*10)/10/2,s=e.linkDirectionalParticleResolution,o=new Re.SphereGeometry(a,s,s),l=$e(e.linkColor),u=$e(e.linkDirectionalParticleColor),c=u(t)||l(t)||"#f0f0f0",h=new Re.Color(Zr(c)),f=e.linkOpacity*3,p=new Re.MeshLambertMaterial({color:h,transparent:!0,opacity:f});t.__singleHopPhotonsObj.add(new Re.Mesh(o,p))}return this},getGraphBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var r=function i(a){var s=[];if(a.geometry){a.geometry.computeBoundingBox();var o=new Re.Box3;o.copy(a.geometry.boundingBox).applyMatrix4(a.matrixWorld),s.push(o)}return s.concat.apply(s,qt((a.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&t(l.__data)}).map(i)))}(e.graphScene);return r.length?Object.assign.apply(Object,qt(["x","y","z"].map(function(i){return Ss({},i,[Cx(r,function(a){return a.min[i]}),Ax(r,function(a){return a.max[i]})])}))):null}},stateInit:function(){return{d3ForceLayout:$0().force("link",I0()).force("charge",Y0()).force("center",U_()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,t){t.graphScene=e},update:function(e,t){var r=function(V){return V.some(function(ne){return t.hasOwnProperty(ne)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&r(["nodeAutoColorBy","graphData","nodeColor"])&&Xu(e.graphData.nodes,$e(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&r(["linkAutoColorBy","graphData","linkColor"])&&Xu(e.graphData.links,$e(e.linkAutoColorBy),e.linkColor),e._flushObjects||r(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var i=$e(e.nodeThreeObject),a=$e(e.nodeThreeObjectExtend),s=$e(e.nodeVal),o=$e(e.nodeColor),l=$e(e.nodeVisibility),u={},c={};Kr(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||r(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(V){return V.__graphObjType==="node"},createObj:function(V){var ne=i(V),D=a(V);ne&&e.nodeThreeObject===ne&&(ne=ne.clone());var Z;return ne&&!D?Z=ne:(Z=new Re.Mesh,Z.__graphDefaultObj=!0,ne&&D&&Z.add(ne)),Z.__graphObjType="node",Z},updateObj:function(V,ne){if(V.__graphDefaultObj){var D=s(ne)||1,Z=Math.cbrt(D)*e.nodeRelSize,se=e.nodeResolution;(!V.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||V.geometry.parameters.radius!==Z||V.geometry.parameters.widthSegments!==se)&&(u.hasOwnProperty(D)||(u[D]=new Re.SphereGeometry(Z,se,se)),V.geometry.dispose(),V.geometry=u[D]);var de=o(ne),ve=new Re.Color(Zr(de||"#ffffaa")),B=e.nodeOpacity*mo(de);(V.material.type!=="MeshLambertMaterial"||!V.material.color.equals(ve)||V.material.opacity!==B)&&(c.hasOwnProperty(de)||(c[de]=new Re.MeshLambertMaterial({color:ve,transparent:!0,opacity:B})),V.material.dispose(),V.material=c[de])}}})}if(e._flushObjects||r(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var h=$e(e.linkThreeObject),f=$e(e.linkThreeObjectExtend),p=$e(e.linkMaterial),m=$e(e.linkVisibility),v=$e(e.linkColor),g=$e(e.linkWidth),d={},M={},_={},x=e.graphData.links.filter(m);if(Kr(x,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||r(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(V){return V.__graphObjType==="link"},exitObj:function(V){var ne=V.__data&&V.__data.__singleHopPhotonsObj;ne&&(ne.parent.remove(ne),Vo(ne),delete V.__data.__singleHopPhotonsObj)},createObj:function(V){var ne=h(V),D=f(V);ne&&e.linkThreeObject===ne&&(ne=ne.clone());var Z;if(!ne||D){var se=!!g(V);if(se)Z=new Re.Mesh;else{var de=new Re.BufferGeometry;de[$u]("position",new Re.BufferAttribute(new Float32Array(2*3),3)),Z=new Re.Line(de)}}var ve;return ne?D?(ve=new Re.Group,ve.__graphDefaultObj=!0,ve.add(Z),ve.add(ne)):ve=ne:(ve=Z,ve.__graphDefaultObj=!0),ve.renderOrder=10,ve.__graphObjType="link",ve},updateObj:function(V,ne){if(V.__graphDefaultObj){var D=V.children.length?V.children[0]:V,Z=Math.ceil(g(ne)*10)/10,se=!!Z;if(se){var de=Z/2,ve=e.linkResolution;if(!D.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||D.geometry.parameters.radiusTop!==de||D.geometry.parameters.radialSegments!==ve){if(!d.hasOwnProperty(Z)){var B=new Re.CylinderGeometry(de,de,1,ve,1,!1);B[Xi](new Re.Matrix4().makeTranslation(0,1/2,0)),B[Xi](new Re.Matrix4().makeRotationX(Math.PI/2)),d[Z]=B}D.geometry.dispose(),D.geometry=d[Z]}}var Je=p(ne);if(Je)D.material=Je;else{var ye=v(ne),Le=new Re.Color(Zr(ye||"#f0f0f0")),we=e.linkOpacity*mo(ye),je=se?"MeshLambertMaterial":"LineBasicMaterial";if(D.material.type!==je||!D.material.color.equals(Le)||D.material.opacity!==we){var De=se?M:_;De.hasOwnProperty(ye)||(De[ye]=new Re[je]({color:Le,transparent:we<1,opacity:we,depthWrite:we>=1})),D.material.dispose(),D.material=De[ye]}}}}}),e.linkDirectionalArrowLength||t.hasOwnProperty("linkDirectionalArrowLength")){var y=$e(e.linkDirectionalArrowLength),S=$e(e.linkDirectionalArrowColor);Kr(x.filter(y),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(V){return V.__linkThreeObjType==="arrow"},createObj:function(){var V=new Re.Mesh(void 0,new Re.MeshLambertMaterial({transparent:!0}));return V.__linkThreeObjType="arrow",V},updateObj:function(V,ne){var D=y(ne),Z=e.linkDirectionalArrowResolution;if(!V.geometry.type.match(/^Cone(Buffer)?Geometry$/)||V.geometry.parameters.height!==D||V.geometry.parameters.radialSegments!==Z){var se=new Re.ConeGeometry(D*.25,D,Z);se.translate(0,D/2,0),se.rotateX(Math.PI/2),V.geometry.dispose(),V.geometry=se}var de=S(ne)||v(ne)||"#f0f0f0";V.material.color=new Re.Color(Zr(de)),V.material.opacity=e.linkOpacity*3*mo(de)}})}if(e.linkDirectionalParticles||t.hasOwnProperty("linkDirectionalParticles")){var w=$e(e.linkDirectionalParticles),L=$e(e.linkDirectionalParticleWidth),b=$e(e.linkDirectionalParticleColor),A={},k={};Kr(x.filter(w),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(V){return V.__linkThreeObjType==="photons"},createObj:function(){var V=new Re.Group;return V.__linkThreeObjType="photons",V},updateObj:function(V,ne){var D=Math.round(Math.abs(w(ne))),Z=!!V.children.length&&V.children[0],se=Math.ceil(L(ne)*10)/10/2,de=e.linkDirectionalParticleResolution,ve;Z&&Z.geometry.parameters.radius===se&&Z.geometry.parameters.widthSegments===de?ve=Z.geometry:(k.hasOwnProperty(se)||(k[se]=new Re.SphereGeometry(se,de,de)),ve=k[se],Z&&Z.geometry.dispose());var B=b(ne)||v(ne)||"#f0f0f0",Je=new Re.Color(Zr(B)),ye=e.linkOpacity*3,Le;Z&&Z.material.color.equals(Je)&&Z.material.opacity===ye?Le=Z.material:(A.hasOwnProperty(B)||(A[B]=new Re.MeshLambertMaterial({color:Je,transparent:!0,opacity:ye})),Le=A[B],Z&&Z.material.dispose()),Kr(qt(new Array(D)).map(function(we,je){return{idx:je}}),V,{idAccessor:function(je){return je.idx},createObj:function(){return new Re.Mesh(ve,Le)},updateObj:function(je){je.geometry=ve,je.material=Le}})}})}}if(e._flushObjects=!1,r(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(z){z.source=z[e.linkSource],z.target=z[e.linkTarget]});var U=e.forceEngine!=="ngraph",J;if(U){(J=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var C=e.d3ForceLayout.force("link");C&&C.id(function(z){return z[e.nodeId]}).links(e.graphData.links);var R=e.dagMode&&qb(e.graphData,function(z){return z[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),N=Math.max.apply(Math,qt(Object.values(R||[]))),j=e.dagLevelDistance||e.graphData.nodes.length/(N||1)*$b*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var ie=function(V,ne){return function(D){return V?(R[D[e.nodeId]]-N/2)*j*(ne?-1:1):void 0}},te=ie(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),G=ie(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),Y=ie(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(z){z.fx=te(z),z.fy=G(z),z.fz=Y(z)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?K0(function(z){var V=R[z[e.nodeId]]||-1;return(e.dagMode==="radialin"?N-V:V)*j}).strength(function(z){return e.dagNodeFilter(z)?1:0}):null)}else{var ee=qu.graph();e.graphData.nodes.forEach(function(z){ee.addNode(z[e.nodeId])}),e.graphData.links.forEach(function(z){ee.addLink(z.source,z.target)}),J=qu.forcelayout(ee,Th({dimensions:e.numDimensions},e.ngraphPhysics)),J.graph=ee}for(var W=0;W<e.warmupTicks&&!(U&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);W++)J[U?"tick":"step"]();e.layout=J,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function Kb(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=function(i){Ob(s,i);var a=Fb(s);function s(){var o;Rb(this,s);for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return o=a.call.apply(a,[this].concat(u)),o.__kapsuleInstance=n().apply(void 0,[].concat(qt(t?[Ch(o)]:[]),u)),o}return Lb(s)}(e);return Object.keys(n()).forEach(function(i){return r.prototype[i]=function(){var a,s=(a=this.__kapsuleInstance)[i].apply(a,arguments);return s===this.__kapsuleInstance?this:s}}),r}var Zb=window.THREE?window.THREE:{Group:wr},Lh=Kb(Yb,Zb.Group,!0);const vo={type:"change"},_o={type:"start"},yo={type:"end"};class Jb extends tn{constructor(e,t){super();const r=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN},this.target=new O;const a=1e-6,s=new O;let o=1,l=i.NONE,u=i.NONE,c=0,h=0,f=0;const p=new O,m=new me,v=new me,g=new O,d=new me,M=new me,_=new me,x=new me,y=[],S={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const D=r.domElement.getBoundingClientRect(),Z=r.domElement.ownerDocument.documentElement;r.screen.left=D.left+window.pageXOffset-Z.clientLeft,r.screen.top=D.top+window.pageYOffset-Z.clientTop,r.screen.width=D.width,r.screen.height=D.height};const w=function(){const D=new me;return function(se,de){return D.set((se-r.screen.left)/r.screen.width,(de-r.screen.top)/r.screen.height),D}}(),L=function(){const D=new me;return function(se,de){return D.set((se-r.screen.width*.5-r.screen.left)/(r.screen.width*.5),(r.screen.height+2*(r.screen.top-de))/r.screen.width),D}}();this.rotateCamera=function(){const D=new O,Z=new en,se=new O,de=new O,ve=new O,B=new O;return function(){B.set(v.x-m.x,v.y-m.y,0);let ye=B.length();ye?(p.copy(r.object.position).sub(r.target),se.copy(p).normalize(),de.copy(r.object.up).normalize(),ve.crossVectors(de,se).normalize(),de.setLength(v.y-m.y),ve.setLength(v.x-m.x),B.copy(de.add(ve)),D.crossVectors(B,p).normalize(),ye*=r.rotateSpeed,Z.setFromAxisAngle(D,ye),p.applyQuaternion(Z),r.object.up.applyQuaternion(Z),g.copy(D),f=ye):!r.staticMoving&&f&&(f*=Math.sqrt(1-r.dynamicDampingFactor),p.copy(r.object.position).sub(r.target),Z.setFromAxisAngle(g,f),p.applyQuaternion(Z),r.object.up.applyQuaternion(Z)),m.copy(v)}}(),this.zoomCamera=function(){let D;l===i.TOUCH_ZOOM_PAN?(D=c/h,c=h,r.object.isPerspectiveCamera?p.multiplyScalar(D):r.object.isOrthographicCamera?(r.object.zoom=Lo.clamp(r.object.zoom/D,r.minZoom,r.maxZoom),o!==r.object.zoom&&r.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(D=1+(M.y-d.y)*r.zoomSpeed,D!==1&&D>0&&(r.object.isPerspectiveCamera?p.multiplyScalar(D):r.object.isOrthographicCamera?(r.object.zoom=Lo.clamp(r.object.zoom/D,r.minZoom,r.maxZoom),o!==r.object.zoom&&r.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),r.staticMoving?d.copy(M):d.y+=(M.y-d.y)*this.dynamicDampingFactor)},this.panCamera=function(){const D=new me,Z=new O,se=new O;return function(){if(D.copy(x).sub(_),D.lengthSq()){if(r.object.isOrthographicCamera){const ve=(r.object.right-r.object.left)/r.object.zoom/r.domElement.clientWidth,B=(r.object.top-r.object.bottom)/r.object.zoom/r.domElement.clientWidth;D.x*=ve,D.y*=B}D.multiplyScalar(p.length()*r.panSpeed),se.copy(p).cross(r.object.up).setLength(D.x),se.add(Z.copy(r.object.up).setLength(D.y)),r.object.position.add(se),r.target.add(se),r.staticMoving?_.copy(x):_.add(D.subVectors(x,_).multiplyScalar(r.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!r.noZoom||!r.noPan)&&(p.lengthSq()>r.maxDistance*r.maxDistance&&(r.object.position.addVectors(r.target,p.setLength(r.maxDistance)),d.copy(M)),p.lengthSq()<r.minDistance*r.minDistance&&(r.object.position.addVectors(r.target,p.setLength(r.minDistance)),d.copy(M)))},this.update=function(){p.subVectors(r.object.position,r.target),r.noRotate||r.rotateCamera(),r.noZoom||r.zoomCamera(),r.noPan||r.panCamera(),r.object.position.addVectors(r.target,p),r.object.isPerspectiveCamera?(r.checkDistances(),r.object.lookAt(r.target),s.distanceToSquared(r.object.position)>a&&(r.dispatchEvent(vo),s.copy(r.object.position))):r.object.isOrthographicCamera?(r.object.lookAt(r.target),(s.distanceToSquared(r.object.position)>a||o!==r.object.zoom)&&(r.dispatchEvent(vo),s.copy(r.object.position),o=r.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=i.NONE,u=i.NONE,r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.up.copy(r.up0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),p.subVectors(r.object.position,r.target),r.object.lookAt(r.target),r.dispatchEvent(vo),s.copy(r.object.position),o=r.object.zoom};function b(D){r.enabled!==!1&&(y.length===0&&(r.domElement.setPointerCapture(D.pointerId),r.domElement.addEventListener("pointermove",A),r.domElement.addEventListener("pointerup",k)),W(D),D.pointerType==="touch"?te(D):R(D))}function A(D){r.enabled!==!1&&(D.pointerType==="touch"?G(D):N(D))}function k(D){r.enabled!==!1&&(D.pointerType==="touch"?Y(D):j(),z(D),y.length===0&&(r.domElement.releasePointerCapture(D.pointerId),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",k)))}function U(D){z(D)}function J(D){r.enabled!==!1&&(window.removeEventListener("keydown",J),u===i.NONE&&(D.code===r.keys[i.ROTATE]&&!r.noRotate?u=i.ROTATE:D.code===r.keys[i.ZOOM]&&!r.noZoom?u=i.ZOOM:D.code===r.keys[i.PAN]&&!r.noPan&&(u=i.PAN)))}function C(){r.enabled!==!1&&(u=i.NONE,window.addEventListener("keydown",J))}function R(D){if(l===i.NONE)switch(D.button){case r.mouseButtons.LEFT:l=i.ROTATE;break;case r.mouseButtons.MIDDLE:l=i.ZOOM;break;case r.mouseButtons.RIGHT:l=i.PAN;break}const Z=u!==i.NONE?u:l;Z===i.ROTATE&&!r.noRotate?(v.copy(L(D.pageX,D.pageY)),m.copy(v)):Z===i.ZOOM&&!r.noZoom?(d.copy(w(D.pageX,D.pageY)),M.copy(d)):Z===i.PAN&&!r.noPan&&(_.copy(w(D.pageX,D.pageY)),x.copy(_)),r.dispatchEvent(_o)}function N(D){const Z=u!==i.NONE?u:l;Z===i.ROTATE&&!r.noRotate?(m.copy(v),v.copy(L(D.pageX,D.pageY))):Z===i.ZOOM&&!r.noZoom?M.copy(w(D.pageX,D.pageY)):Z===i.PAN&&!r.noPan&&x.copy(w(D.pageX,D.pageY))}function j(){l=i.NONE,r.dispatchEvent(yo)}function ie(D){if(r.enabled!==!1&&r.noZoom!==!0){switch(D.preventDefault(),D.deltaMode){case 2:d.y-=D.deltaY*.025;break;case 1:d.y-=D.deltaY*.01;break;default:d.y-=D.deltaY*25e-5;break}r.dispatchEvent(_o),r.dispatchEvent(yo)}}function te(D){switch(V(D),y.length){case 1:l=i.TOUCH_ROTATE,v.copy(L(y[0].pageX,y[0].pageY)),m.copy(v);break;default:l=i.TOUCH_ZOOM_PAN;const Z=y[0].pageX-y[1].pageX,se=y[0].pageY-y[1].pageY;h=c=Math.sqrt(Z*Z+se*se);const de=(y[0].pageX+y[1].pageX)/2,ve=(y[0].pageY+y[1].pageY)/2;_.copy(w(de,ve)),x.copy(_);break}r.dispatchEvent(_o)}function G(D){switch(V(D),y.length){case 1:m.copy(v),v.copy(L(D.pageX,D.pageY));break;default:const Z=ne(D),se=D.pageX-Z.x,de=D.pageY-Z.y;h=Math.sqrt(se*se+de*de);const ve=(D.pageX+Z.x)/2,B=(D.pageY+Z.y)/2;x.copy(w(ve,B));break}}function Y(D){switch(y.length){case 0:l=i.NONE;break;case 1:l=i.TOUCH_ROTATE,v.copy(L(D.pageX,D.pageY)),m.copy(v);break;case 2:l=i.TOUCH_ZOOM_PAN;for(let Z=0;Z<y.length;Z++)if(y[Z].pointerId!==D.pointerId){const se=S[y[Z].pointerId];v.copy(L(se.x,se.y)),m.copy(v);break}break}r.dispatchEvent(yo)}function ee(D){r.enabled!==!1&&D.preventDefault()}function W(D){y.push(D)}function z(D){delete S[D.pointerId];for(let Z=0;Z<y.length;Z++)if(y[Z].pointerId==D.pointerId){y.splice(Z,1);return}}function V(D){let Z=S[D.pointerId];Z===void 0&&(Z=new me,S[D.pointerId]=Z),Z.set(D.pageX,D.pageY)}function ne(D){const Z=D.pointerId===y[0].pointerId?y[1]:y[0];return S[Z.pointerId]}this.dispose=function(){r.domElement.removeEventListener("contextmenu",ee),r.domElement.removeEventListener("pointerdown",b),r.domElement.removeEventListener("pointercancel",U),r.domElement.removeEventListener("wheel",ie),r.domElement.removeEventListener("pointermove",A),r.domElement.removeEventListener("pointerup",k),window.removeEventListener("keydown",J),window.removeEventListener("keyup",C)},this.domElement.addEventListener("contextmenu",ee),this.domElement.addEventListener("pointerdown",b),this.domElement.addEventListener("pointercancel",U),this.domElement.addEventListener("wheel",ie,{passive:!1}),window.addEventListener("keydown",J),window.addEventListener("keyup",C),this.handleResize(),this.update()}}const Yu={type:"change"},xo={type:"start"},Ku={type:"end"},qi=new va,Zu=new vn,Qb=Math.cos(70*Lo.DEG2RAD);class eM extends tn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:rn.ROTATE,MIDDLE:rn.DOLLY,RIGHT:rn.PAN},this.touches={ONE:nr.ROTATE,TWO:nr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(I){I.addEventListener("keydown",E),this._domElementKeyEvents=I},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){r.target0.copy(r.target),r.position0.copy(r.object.position),r.zoom0=r.object.zoom},this.reset=function(){r.target.copy(r.target0),r.object.position.copy(r.position0),r.object.zoom=r.zoom0,r.object.updateProjectionMatrix(),r.dispatchEvent(Yu),r.update(),a=i.NONE},this.update=function(){const I=new O,he=new en().setFromUnitVectors(e.up,new O(0,1,0)),re=he.clone().invert(),Oe=new O,Te=new en,Pe=new O,Me=2*Math.PI;return function(He=null){const F=r.object.position;I.copy(F).sub(r.target),I.applyQuaternion(he),o.setFromVector3(I),r.autoRotate&&a===i.NONE&&k(b(He)),r.enableDamping?(o.theta+=l.theta*r.dampingFactor,o.phi+=l.phi*r.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let pe=r.minAzimuthAngle,ae=r.maxAzimuthAngle;isFinite(pe)&&isFinite(ae)&&(pe<-Math.PI?pe+=Me:pe>Math.PI&&(pe-=Me),ae<-Math.PI?ae+=Me:ae>Math.PI&&(ae-=Me),pe<=ae?o.theta=Math.max(pe,Math.min(ae,o.theta)):o.theta=o.theta>(pe+ae)/2?Math.max(pe,o.theta):Math.min(ae,o.theta)),o.phi=Math.max(r.minPolarAngle,Math.min(r.maxPolarAngle,o.phi)),o.makeSafe(),r.enableDamping===!0?r.target.addScaledVector(c,r.dampingFactor):r.target.add(c),r.target.sub(r.cursor),r.target.clampLength(r.minTargetRadius,r.maxTargetRadius),r.target.add(r.cursor),r.zoomToCursor&&S||r.object.isOrthographicCamera?o.radius=te(o.radius):o.radius=te(o.radius*u),I.setFromSpherical(o),I.applyQuaternion(re),F.copy(r.target).add(I),r.object.lookAt(r.target),r.enableDamping===!0?(l.theta*=1-r.dampingFactor,l.phi*=1-r.dampingFactor,c.multiplyScalar(1-r.dampingFactor)):(l.set(0,0,0),c.set(0,0,0));let Q=!1;if(r.zoomToCursor&&S){let ce=null;if(r.object.isPerspectiveCamera){const Ce=I.length();ce=te(Ce*u);const ze=Ce-ce;r.object.position.addScaledVector(x,ze),r.object.updateMatrixWorld()}else if(r.object.isOrthographicCamera){const Ce=new O(y.x,y.y,0);Ce.unproject(r.object),r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/u)),r.object.updateProjectionMatrix(),Q=!0;const ze=new O(y.x,y.y,0);ze.unproject(r.object),r.object.position.sub(ze).add(Ce),r.object.updateMatrixWorld(),ce=I.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),r.zoomToCursor=!1;ce!==null&&(this.screenSpacePanning?r.target.set(0,0,-1).transformDirection(r.object.matrix).multiplyScalar(ce).add(r.object.position):(qi.origin.copy(r.object.position),qi.direction.set(0,0,-1).transformDirection(r.object.matrix),Math.abs(r.object.up.dot(qi.direction))<Qb?e.lookAt(r.target):(Zu.setFromNormalAndCoplanarPoint(r.object.up,r.target),qi.intersectPlane(Zu,r.target))))}else r.object.isOrthographicCamera&&(r.object.zoom=Math.max(r.minZoom,Math.min(r.maxZoom,r.object.zoom/u)),r.object.updateProjectionMatrix(),Q=!0);return u=1,S=!1,Q||Oe.distanceToSquared(r.object.position)>s||8*(1-Te.dot(r.object.quaternion))>s||Pe.distanceToSquared(r.target)>0?(r.dispatchEvent(Yu),Oe.copy(r.object.position),Te.copy(r.object.quaternion),Pe.copy(r.target),!0):!1}}(),this.dispose=function(){r.domElement.removeEventListener("contextmenu",oe),r.domElement.removeEventListener("pointerdown",De),r.domElement.removeEventListener("pointercancel",qe),r.domElement.removeEventListener("wheel",P),r.domElement.removeEventListener("pointermove",Ne),r.domElement.removeEventListener("pointerup",qe),r._domElementKeyEvents!==null&&(r._domElementKeyEvents.removeEventListener("keydown",E),r._domElementKeyEvents=null)};const r=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,o=new Do,l=new Do;let u=1;const c=new O,h=new me,f=new me,p=new me,m=new me,v=new me,g=new me,d=new me,M=new me,_=new me,x=new O,y=new me;let S=!1;const w=[],L={};function b(I){return I!==null?2*Math.PI/60*r.autoRotateSpeed*I:2*Math.PI/60/60*r.autoRotateSpeed}function A(){return Math.pow(.95,r.zoomSpeed)}function k(I){l.theta-=I}function U(I){l.phi-=I}const J=function(){const I=new O;return function(re,Oe){I.setFromMatrixColumn(Oe,0),I.multiplyScalar(-re),c.add(I)}}(),C=function(){const I=new O;return function(re,Oe){r.screenSpacePanning===!0?I.setFromMatrixColumn(Oe,1):(I.setFromMatrixColumn(Oe,0),I.crossVectors(r.object.up,I)),I.multiplyScalar(re),c.add(I)}}(),R=function(){const I=new O;return function(re,Oe){const Te=r.domElement;if(r.object.isPerspectiveCamera){const Pe=r.object.position;I.copy(Pe).sub(r.target);let Me=I.length();Me*=Math.tan(r.object.fov/2*Math.PI/180),J(2*re*Me/Te.clientHeight,r.object.matrix),C(2*Oe*Me/Te.clientHeight,r.object.matrix)}else r.object.isOrthographicCamera?(J(re*(r.object.right-r.object.left)/r.object.zoom/Te.clientWidth,r.object.matrix),C(Oe*(r.object.top-r.object.bottom)/r.object.zoom/Te.clientHeight,r.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),r.enablePan=!1)}}();function N(I){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?u/=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function j(I){r.object.isPerspectiveCamera||r.object.isOrthographicCamera?u*=I:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),r.enableZoom=!1)}function ie(I){if(!r.zoomToCursor)return;S=!0;const he=r.domElement.getBoundingClientRect(),re=I.clientX-he.left,Oe=I.clientY-he.top,Te=he.width,Pe=he.height;y.x=re/Te*2-1,y.y=-(Oe/Pe)*2+1,x.set(y.x,y.y,1).unproject(r.object).sub(r.object.position).normalize()}function te(I){return Math.max(r.minDistance,Math.min(r.maxDistance,I))}function G(I){h.set(I.clientX,I.clientY)}function Y(I){ie(I),d.set(I.clientX,I.clientY)}function ee(I){m.set(I.clientX,I.clientY)}function W(I){f.set(I.clientX,I.clientY),p.subVectors(f,h).multiplyScalar(r.rotateSpeed);const he=r.domElement;k(2*Math.PI*p.x/he.clientHeight),U(2*Math.PI*p.y/he.clientHeight),h.copy(f),r.update()}function z(I){M.set(I.clientX,I.clientY),_.subVectors(M,d),_.y>0?N(A()):_.y<0&&j(A()),d.copy(M),r.update()}function V(I){v.set(I.clientX,I.clientY),g.subVectors(v,m).multiplyScalar(r.panSpeed),R(g.x,g.y),m.copy(v),r.update()}function ne(I){ie(I),I.deltaY<0?j(A()):I.deltaY>0&&N(A()),r.update()}function D(I){let he=!1;switch(I.code){case r.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?U(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):R(0,r.keyPanSpeed),he=!0;break;case r.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?U(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):R(0,-r.keyPanSpeed),he=!0;break;case r.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?k(2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):R(r.keyPanSpeed,0),he=!0;break;case r.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?k(-2*Math.PI*r.rotateSpeed/r.domElement.clientHeight):R(-r.keyPanSpeed,0),he=!0;break}he&&(I.preventDefault(),r.update())}function Z(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),he=.5*(w[0].pageY+w[1].pageY);h.set(I,he)}}function se(){if(w.length===1)m.set(w[0].pageX,w[0].pageY);else{const I=.5*(w[0].pageX+w[1].pageX),he=.5*(w[0].pageY+w[1].pageY);m.set(I,he)}}function de(){const I=w[0].pageX-w[1].pageX,he=w[0].pageY-w[1].pageY,re=Math.sqrt(I*I+he*he);d.set(0,re)}function ve(){r.enableZoom&&de(),r.enablePan&&se()}function B(){r.enableZoom&&de(),r.enableRotate&&Z()}function Je(I){if(w.length==1)f.set(I.pageX,I.pageY);else{const re=_e(I),Oe=.5*(I.pageX+re.x),Te=.5*(I.pageY+re.y);f.set(Oe,Te)}p.subVectors(f,h).multiplyScalar(r.rotateSpeed);const he=r.domElement;k(2*Math.PI*p.x/he.clientHeight),U(2*Math.PI*p.y/he.clientHeight),h.copy(f)}function ye(I){if(w.length===1)v.set(I.pageX,I.pageY);else{const he=_e(I),re=.5*(I.pageX+he.x),Oe=.5*(I.pageY+he.y);v.set(re,Oe)}g.subVectors(v,m).multiplyScalar(r.panSpeed),R(g.x,g.y),m.copy(v)}function Le(I){const he=_e(I),re=I.pageX-he.x,Oe=I.pageY-he.y,Te=Math.sqrt(re*re+Oe*Oe);M.set(0,Te),_.set(0,Math.pow(M.y/d.y,r.zoomSpeed)),N(_.y),d.copy(M)}function we(I){r.enableZoom&&Le(I),r.enablePan&&ye(I)}function je(I){r.enableZoom&&Le(I),r.enableRotate&&Je(I)}function De(I){r.enabled!==!1&&(w.length===0&&(r.domElement.setPointerCapture(I.pointerId),r.domElement.addEventListener("pointermove",Ne),r.domElement.addEventListener("pointerup",qe)),ue(I),I.pointerType==="touch"?X(I):st(I))}function Ne(I){r.enabled!==!1&&(I.pointerType==="touch"?le(I):lt(I))}function qe(I){Ee(I),w.length===0&&(r.domElement.releasePointerCapture(I.pointerId),r.domElement.removeEventListener("pointermove",Ne),r.domElement.removeEventListener("pointerup",qe)),r.dispatchEvent(Ku),a=i.NONE}function st(I){let he;switch(I.button){case 0:he=r.mouseButtons.LEFT;break;case 1:he=r.mouseButtons.MIDDLE;break;case 2:he=r.mouseButtons.RIGHT;break;default:he=-1}switch(he){case rn.DOLLY:if(r.enableZoom===!1)return;Y(I),a=i.DOLLY;break;case rn.ROTATE:if(I.ctrlKey||I.metaKey||I.shiftKey){if(r.enablePan===!1)return;ee(I),a=i.PAN}else{if(r.enableRotate===!1)return;G(I),a=i.ROTATE}break;case rn.PAN:if(I.ctrlKey||I.metaKey||I.shiftKey){if(r.enableRotate===!1)return;G(I),a=i.ROTATE}else{if(r.enablePan===!1)return;ee(I),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&r.dispatchEvent(xo)}function lt(I){switch(a){case i.ROTATE:if(r.enableRotate===!1)return;W(I);break;case i.DOLLY:if(r.enableZoom===!1)return;z(I);break;case i.PAN:if(r.enablePan===!1)return;V(I);break}}function P(I){r.enabled===!1||r.enableZoom===!1||a!==i.NONE||(I.preventDefault(),r.dispatchEvent(xo),ne(I),r.dispatchEvent(Ku))}function E(I){r.enabled===!1||r.enablePan===!1||D(I)}function X(I){switch(fe(I),w.length){case 1:switch(r.touches.ONE){case nr.ROTATE:if(r.enableRotate===!1)return;Z(),a=i.TOUCH_ROTATE;break;case nr.PAN:if(r.enablePan===!1)return;se(),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(r.touches.TWO){case nr.DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;ve(),a=i.TOUCH_DOLLY_PAN;break;case nr.DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;B(),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&r.dispatchEvent(xo)}function le(I){switch(fe(I),a){case i.TOUCH_ROTATE:if(r.enableRotate===!1)return;Je(I),r.update();break;case i.TOUCH_PAN:if(r.enablePan===!1)return;ye(I),r.update();break;case i.TOUCH_DOLLY_PAN:if(r.enableZoom===!1&&r.enablePan===!1)return;we(I),r.update();break;case i.TOUCH_DOLLY_ROTATE:if(r.enableZoom===!1&&r.enableRotate===!1)return;je(I),r.update();break;default:a=i.NONE}}function oe(I){r.enabled!==!1&&I.preventDefault()}function ue(I){w.push(I)}function Ee(I){delete L[I.pointerId];for(let he=0;he<w.length;he++)if(w[he].pointerId==I.pointerId){w.splice(he,1);return}}function fe(I){let he=L[I.pointerId];he===void 0&&(he=new me,L[I.pointerId]=he),he.set(I.pageX,I.pageY)}function _e(I){const he=I.pointerId===w[0].pointerId?w[1]:w[0];return L[he.pointerId]}r.domElement.addEventListener("contextmenu",oe),r.domElement.addEventListener("pointerdown",De),r.domElement.addEventListener("pointercancel",qe),r.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const tM={type:"change"};class nM extends tn{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const r=this,i=1e-6,a=new en,s=new O;this.tmpQuaternion=new en,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new O(0,0,0),this.rotationVector=new O(0,0,0),this.keydown=function(m){if(!(m.altKey||this.enabled===!1)){switch(m.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(m){if(this.enabled!==!1){switch(m.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(m){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(m.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(m){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),g=v.size[0]/2,d=v.size[1]/2;this.moveState.yawLeft=-(m.pageX-v.offset[0]-g)/g,this.moveState.pitchDown=(m.pageY-v.offset[1]-d)/d,this.updateRotationVector()}},this.pointerup=function(m){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(m.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(m){this.enabled!==!1&&m.preventDefault()},this.update=function(m){if(this.enabled===!1)return;const v=m*r.movementSpeed,g=m*r.rollSpeed;r.object.translateX(r.moveVector.x*v),r.object.translateY(r.moveVector.y*v),r.object.translateZ(r.moveVector.z*v),r.tmpQuaternion.set(r.rotationVector.x*g,r.rotationVector.y*g,r.rotationVector.z*g,1).normalize(),r.object.quaternion.multiply(r.tmpQuaternion),(s.distanceToSquared(r.object.position)>i||8*(1-a.dot(r.object.quaternion))>i)&&(r.dispatchEvent(tM),a.copy(r.object.quaternion),s.copy(r.object.position))},this.updateMovementVector=function(){const m=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-m+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",o),this.domElement.removeEventListener("pointerdown",u),this.domElement.removeEventListener("pointermove",l),this.domElement.removeEventListener("pointerup",c),this.domElement.removeEventListener("pointercancel",h),window.removeEventListener("keydown",f),window.removeEventListener("keyup",p)};const o=this.contextMenu.bind(this),l=this.pointermove.bind(this),u=this.pointerdown.bind(this),c=this.pointerup.bind(this),h=this.pointercancel.bind(this),f=this.keydown.bind(this),p=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",o),this.domElement.addEventListener("pointerdown",u),this.domElement.addEventListener("pointermove",l),this.domElement.addEventListener("pointerup",c),this.domElement.addEventListener("pointercancel",h),window.addEventListener("keydown",f),window.addEventListener("keyup",p),this.updateMovementVector(),this.updateRotationVector()}}const rM={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const iM=new as(-1,1,1,-1,0,1);class aM extends Ut{constructor(){super(),this.setAttribute("position",new ut([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ut([0,2,0,0,2,0],2))}}const oM=new aM;class sM{constructor(e){this._mesh=new Zt(oM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class lM extends Ea{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof wn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tc.clone(e.uniforms),this.material=new wn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new sM(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ju extends Ea{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const i=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),a.buffers.stencil.setFunc(i.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(i.EQUAL,1,4294967295),a.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),a.buffers.stencil.setLocked(!0)}}class uM extends Ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class cM{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new me);this._width=r.width,this._height=r.height,t=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ir}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new lM(rM),this.copyPass.material.blending=Mn,this.clock=new Hc}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let i=0,a=this.passes.length;i<a;i++){const s=this.passes[i];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),s.needsSwap){if(r){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Ju!==void 0&&(s instanceof Ju?r=!0:s instanceof uM&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class hM extends Ea{constructor(e,t,r=null,i=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=i,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,r){const i=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=i}}function Wo(){return Wo=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Wo.apply(this,arguments)}function dM(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function pi(n,e){return pi=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},pi(n,e)}function fM(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,pi(n,e)}function jo(n){return jo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},jo(n)}function pM(n){try{return Function.toString.call(n).indexOf("[native code]")!==-1}catch{return typeof n=="function"}}function gM(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ji(n,e,t){return gM()?Ji=Reflect.construct.bind():Ji=function(i,a,s){var o=[null];o.push.apply(o,a);var l=Function.bind.apply(i,o),u=new l;return s&&pi(u,s.prototype),u},Ji.apply(null,arguments)}function Xo(n){var e=typeof Map=="function"?new Map:void 0;return Xo=function(r){if(r===null||!pM(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof e<"u"){if(e.has(r))return e.get(r);e.set(r,i)}function i(){return Ji(r,arguments,jo(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),pi(i,r)},Xo(n)}var Tr=function(n){fM(e,n);function e(t){var r;return r=n.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this,dM(r)}return e}(Xo(Error));function bo(n){return Math.round(n*255)}function mM(n,e,t){return bo(n)+","+bo(e)+","+bo(t)}function Qu(n,e,t,r){if(r===void 0&&(r=mM),e===0)return r(t,t,t);var i=(n%360+360)%360/60,a=(1-Math.abs(2*t-1))*e,s=a*(1-Math.abs(i%2-1)),o=0,l=0,u=0;i>=0&&i<1?(o=a,l=s):i>=1&&i<2?(o=s,l=a):i>=2&&i<3?(l=a,u=s):i>=3&&i<4?(l=s,u=a):i>=4&&i<5?(o=s,u=a):i>=5&&i<6&&(o=a,u=s);var c=t-a/2,h=o+c,f=l+c,p=u+c;return r(h,f,p)}var ec={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function vM(n){if(typeof n!="string")return n;var e=n.toLowerCase();return ec[e]?"#"+ec[e]:n}var _M=/^#[a-fA-F0-9]{6}$/,yM=/^#[a-fA-F0-9]{8}$/,xM=/^#[a-fA-F0-9]{3}$/,bM=/^#[a-fA-F0-9]{4}$/,Mo=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,MM=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,SM=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,EM=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Es(n){if(typeof n!="string")throw new Tr(3);var e=vM(n);if(e.match(_M))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(yM)){var t=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:t}}if(e.match(xM))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(bM)){var r=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:r}}var i=Mo.exec(e);if(i)return{red:parseInt(""+i[1],10),green:parseInt(""+i[2],10),blue:parseInt(""+i[3],10)};var a=MM.exec(e.substring(0,50));if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10),alpha:parseFloat(""+a[4])>1?parseFloat(""+a[4])/100:parseFloat(""+a[4])};var s=SM.exec(e);if(s){var o=parseInt(""+s[1],10),l=parseInt(""+s[2],10)/100,u=parseInt(""+s[3],10)/100,c="rgb("+Qu(o,l,u)+")",h=Mo.exec(c);if(!h)throw new Tr(4,e,c);return{red:parseInt(""+h[1],10),green:parseInt(""+h[2],10),blue:parseInt(""+h[3],10)}}var f=EM.exec(e.substring(0,50));if(f){var p=parseInt(""+f[1],10),m=parseInt(""+f[2],10)/100,v=parseInt(""+f[3],10)/100,g="rgb("+Qu(p,m,v)+")",d=Mo.exec(g);if(!d)throw new Tr(4,e,g);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10),alpha:parseFloat(""+f[4])>1?parseFloat(""+f[4])/100:parseFloat(""+f[4])}}throw new Tr(5)}var wM=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},tc=wM;function br(n){var e=n.toString(16);return e.length===1?"0"+e:e}function nc(n,e,t){if(typeof n=="number"&&typeof e=="number"&&typeof t=="number")return tc("#"+br(n)+br(e)+br(t));if(typeof n=="object"&&e===void 0&&t===void 0)return tc("#"+br(n.red)+br(n.green)+br(n.blue));throw new Tr(6)}function TM(n,e,t,r){if(typeof n=="string"&&typeof e=="number"){var i=Es(n);return"rgba("+i.red+","+i.green+","+i.blue+","+e+")"}else{if(typeof n=="number"&&typeof e=="number"&&typeof t=="number"&&typeof r=="number")return r>=1?nc(n,e,t):"rgba("+n+","+e+","+t+","+r+")";if(typeof n=="object"&&e===void 0&&t===void 0&&r===void 0)return n.alpha>=1?nc(n.red,n.green,n.blue):"rgba("+n.red+","+n.green+","+n.blue+","+n.alpha+")"}throw new Tr(7)}function Oh(n,e,t){return function(){var i=t.concat(Array.prototype.slice.call(arguments));return i.length>=e?n.apply(this,i):Oh(n,e,i)}}function AM(n){return Oh(n,n.length,[])}function CM(n,e,t){return Math.max(n,Math.min(e,t))}function PM(n,e){if(e==="transparent")return e;var t=Es(e),r=typeof t.alpha=="number"?t.alpha:1,i=Wo({},t,{alpha:CM(0,1,(r*100+parseFloat(n)*100)/100)});return TM(i)}var RM=AM(PM),LM=RM,Qn=Object.freeze({Linear:Object.freeze({None:function(n){return n},In:function(n){return this.None(n)},Out:function(n){return this.None(n)},InOut:function(n){return this.None(n)}}),Quadratic:Object.freeze({In:function(n){return n*n},Out:function(n){return n*(2-n)},InOut:function(n){return(n*=2)<1?.5*n*n:-.5*(--n*(n-2)-1)}}),Cubic:Object.freeze({In:function(n){return n*n*n},Out:function(n){return--n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n:.5*((n-=2)*n*n+2)}}),Quartic:Object.freeze({In:function(n){return n*n*n*n},Out:function(n){return 1- --n*n*n*n},InOut:function(n){return(n*=2)<1?.5*n*n*n*n:-.5*((n-=2)*n*n*n-2)}}),Quintic:Object.freeze({In:function(n){return n*n*n*n*n},Out:function(n){return--n*n*n*n*n+1},InOut:function(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}}),Sinusoidal:Object.freeze({In:function(n){return 1-Math.sin((1-n)*Math.PI/2)},Out:function(n){return Math.sin(n*Math.PI/2)},InOut:function(n){return .5*(1-Math.sin(Math.PI*(.5-n)))}}),Exponential:Object.freeze({In:function(n){return n===0?0:Math.pow(1024,n-1)},Out:function(n){return n===1?1:1-Math.pow(2,-10*n)},InOut:function(n){return n===0?0:n===1?1:(n*=2)<1?.5*Math.pow(1024,n-1):.5*(-Math.pow(2,-10*(n-1))+2)}}),Circular:Object.freeze({In:function(n){return 1-Math.sqrt(1-n*n)},Out:function(n){return Math.sqrt(1- --n*n)},InOut:function(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}}),Elastic:Object.freeze({In:function(n){return n===0?0:n===1?1:-Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI)},Out:function(n){return n===0?0:n===1?1:Math.pow(2,-10*n)*Math.sin((n-.1)*5*Math.PI)+1},InOut:function(n){return n===0?0:n===1?1:(n*=2,n<1?-.5*Math.pow(2,10*(n-1))*Math.sin((n-1.1)*5*Math.PI):.5*Math.pow(2,-10*(n-1))*Math.sin((n-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(n){var e=1.70158;return n===1?1:n*n*((e+1)*n-e)},Out:function(n){var e=1.70158;return n===0?0:--n*n*((e+1)*n+e)+1},InOut:function(n){var e=2.5949095;return(n*=2)<1?.5*(n*n*((e+1)*n-e)):.5*((n-=2)*n*((e+1)*n+e)+2)}}),Bounce:Object.freeze({In:function(n){return 1-Qn.Bounce.Out(1-n)},Out:function(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375},InOut:function(n){return n<.5?Qn.Bounce.In(n*2)*.5:Qn.Bounce.Out(n*2-1)*.5+.5}}),generatePow:function(n){return n===void 0&&(n=4),n=n<Number.EPSILON?Number.EPSILON:n,n=n>1e4?1e4:n,{In:function(e){return Math.pow(e,n)},Out:function(e){return 1-Math.pow(1-e,n)},InOut:function(e){return e<.5?Math.pow(e*2,n)/2:(1-Math.pow(2-e*2,n))/2+.5}}}}),ri=function(){return performance.now()},OM=function(){function n(){this._tweens={},this._tweensAddedDuringUpdate={}}return n.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},n.prototype.removeAll=function(){this._tweens={}},n.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},n.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},n.prototype.update=function(e,t){e===void 0&&(e=ri()),t===void 0&&(t=!1);var r=Object.keys(this._tweens);if(r.length===0)return!1;for(;r.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<r.length;i++){var a=this._tweens[r[i]],s=!t;a&&a.update(e,s)===!1&&!t&&delete this._tweens[r[i]]}r=Object.keys(this._tweensAddedDuringUpdate)}return!0},n}(),Ar={Linear:function(n,e){var t=n.length-1,r=t*e,i=Math.floor(r),a=Ar.Utils.Linear;return e<0?a(n[0],n[1],r):e>1?a(n[t],n[t-1],t-r):a(n[i],n[i+1>t?t:i+1],r-i)},Bezier:function(n,e){for(var t=0,r=n.length-1,i=Math.pow,a=Ar.Utils.Bernstein,s=0;s<=r;s++)t+=i(1-e,r-s)*i(e,s)*n[s]*a(r,s);return t},CatmullRom:function(n,e){var t=n.length-1,r=t*e,i=Math.floor(r),a=Ar.Utils.CatmullRom;return n[0]===n[t]?(e<0&&(i=Math.floor(r=t*(1+e))),a(n[(i-1+t)%t],n[i],n[(i+1)%t],n[(i+2)%t],r-i)):e<0?n[0]-(a(n[0],n[0],n[1],n[1],-r)-n[0]):e>1?n[t]-(a(n[t],n[t],n[t-1],n[t-1],r-t)-n[t]):a(n[i?i-1:0],n[i],n[t<i+1?t:i+1],n[t<i+2?t:i+2],r-i)},Utils:{Linear:function(n,e,t){return(e-n)*t+n},Bernstein:function(n,e){var t=Ar.Utils.Factorial;return t(n)/t(e)/t(n-e)},Factorial:function(){var n=[1];return function(e){var t=1;if(n[e])return n[e];for(var r=e;r>1;r--)t*=r;return n[e]=t,t}}(),CatmullRom:function(n,e,t,r,i){var a=(t-n)*.5,s=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*t+a+s)*l+(-3*e+3*t-2*a-s)*o+a*i+e}}},IM=function(){function n(){}return n.nextId=function(){return n._nextId++},n._nextId=0,n}(),qo=new OM,rc=function(){function n(e,t){t===void 0&&(t=qo),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=Qn.Linear.None,this._interpolationFunction=Ar.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=IM.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return n.prototype.getId=function(){return this._id},n.prototype.isPlaying=function(){return this._isPlaying},n.prototype.isPaused=function(){return this._isPaused},n.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},n.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},n.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},n.prototype.start=function(e,t){if(e===void 0&&(e=ri()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var r in this._valuesStartRepeat)this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var a in this._valuesEnd)i[a]=this._valuesEnd[a];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},n.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},n.prototype._setupProperties=function(e,t,r,i,a){for(var s in r){var o=e[s],l=Array.isArray(o),u=l?"array":typeof o,c=!l&&Array.isArray(r[s]);if(!(u==="undefined"||u==="function")){if(c){var h=r[s];if(h.length===0)continue;for(var f=[o],p=0,m=h.length;p<m;p+=1){var v=this._handleRelativeValue(o,h[p]);if(isNaN(v)){c=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(v)}c&&(r[s]=f)}if((u==="object"||l)&&o&&!c){t[s]=l?[]:{};var g=o;for(var d in g)t[s][d]=g[d];i[s]=l?[]:{};var h=r[s];if(!this._isDynamic){var M={};for(var d in h)M[d]=h[d];r[s]=h=M}this._setupProperties(g,t[s],h,i[s],a)}else(typeof t[s]>"u"||a)&&(t[s]=o),l||(t[s]*=1),c?i[s]=r[s].slice().reverse():i[s]=t[s]||0}}},n.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},n.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},n.prototype.pause=function(e){return e===void 0&&(e=ri()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},n.prototype.resume=function(e){return e===void 0&&(e=ri()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},n.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},n.prototype.group=function(e){return e===void 0&&(e=qo),this._group=e,this},n.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},n.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},n.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},n.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},n.prototype.easing=function(e){return e===void 0&&(e=Qn.Linear.None),this._easingFunction=e,this},n.prototype.interpolation=function(e){return e===void 0&&(e=Ar.Linear),this._interpolationFunction=e,this},n.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},n.prototype.onStart=function(e){return this._onStartCallback=e,this},n.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},n.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},n.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},n.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},n.prototype.onStop=function(e){return this._onStopCallback=e,this},n.prototype.update=function(e,t){if(e===void 0&&(e=ri()),t===void 0&&(t=!0),this._isPaused)return!0;var r,i,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),i=(e-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var s=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,s),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(r in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[r]=="string"&&(this._valuesStartRepeat[r]=this._valuesStartRepeat[r]+parseFloat(this._valuesEnd[r])),this._yoyo&&this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,l=this._chainedTweens.length;o<l;o++)this._chainedTweens[o].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},n.prototype._updateProperties=function(e,t,r,i){for(var a in r)if(t[a]!==void 0){var s=t[a]||0,o=r[a],l=Array.isArray(e[a]),u=Array.isArray(o),c=!l&&u;c?e[a]=this._interpolationFunction(o,i):typeof o=="object"&&o?this._updateProperties(e[a],s,o,i):(o=this._handleRelativeValue(s,o),typeof o=="number"&&(e[a]=s+(o-s)*i))}},n.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},n.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],r=this._valuesEnd[e];typeof r=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(r):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},n}(),sn=qo;sn.getAll.bind(sn);sn.removeAll.bind(sn);sn.add.bind(sn);sn.remove.bind(sn);var DM=sn.update.bind(sn);function NM(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var FM=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;NM(FM);function UM(n,e){var t=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(t!=null){var r,i,a,s,o=[],l=!0,u=!1;try{if(a=(t=t.call(n)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(r=a.call(t)).done)&&(o.push(r.value),o.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&t.return!=null&&(s=t.return(),Object(s)!==s))return}finally{if(u)throw i}}return o}}function GM(n,e,t){return e=XM(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function kM(n,e){return HM(n)||UM(n,e)||Ih(n,e)||WM()}function Jr(n){return BM(n)||zM(n)||Ih(n)||VM()}function BM(n){if(Array.isArray(n))return $o(n)}function HM(n){if(Array.isArray(n))return n}function zM(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Ih(n,e){if(n){if(typeof n=="string")return $o(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $o(n,e)}}function $o(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function VM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WM(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function XM(n){var e=jM(n,"string");return typeof e=="symbol"?e:String(e)}var tt=window.THREE?window.THREE:{WebGLRenderer:Fc,Scene:l_,PerspectiveCamera:Ht,Raycaster:zc,SRGBColorSpace:gt,TextureLoader:P_,Vector2:me,Vector3:O,Box3:tr,Color:Xe,Mesh:Zt,SphereGeometry:ba,MeshBasicMaterial:ns,BackSide:Pt,EventDispatcher:tn,MOUSE:rn,Quaternion:en,Spherical:Do,Clock:Hc},Dh=Ms({props:{width:{default:window.innerWidth,onChange:function(e,t,r){isNaN(e)&&(t.width=r)}},height:{default:window.innerHeight,onChange:function(e,t,r){isNaN(e)&&(t.height=r)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,t){t.hoverObj=null,t.toolTipElem&&(t.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(e.clock.getDelta()),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(a){return a.render(e.scene,e.camera)}),e.enablePointerInteraction){var t=null;if(e.hoverDuringDrag||!e.isPointerDragging){var r=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(a){return e.hoverFilter(a.object)}).sort(function(a,s){return e.hoverOrderComparator(a.object,s.object)}),i=r.length?r[0]:null;t=i?i.object:null,e.intersectionPoint=i?i.point:null}t!==e.hoverObj&&(e.onHover(t,e.hoverObj),e.toolTipElem.innerHTML=t&&$e(e.tooltipContent)(t)||"",e.hoverObj=t)}DM()}return this},getPointerPos:function(e){var t=e.pointerPos,r=t.x,i=t.y;return{x:r,y:i}},cameraPosition:function(e,t,r,i){var a=e.camera;if(t&&e.initialised){var s=t,o=r||{x:0,y:0,z:0};if(!i)c(s),h(o);else{var l=Object.assign({},a.position),u=f();new rc(l).to(s,i).easing(Qn.Quadratic.Out).onUpdate(c).start(),new rc(u).to(o,i/3).easing(Qn.Quadratic.Out).onUpdate(h).start()}return this}return Object.assign({},a.position,{lookAt:f()});function c(p){var m=p.x,v=p.y,g=p.z;m!==void 0&&(a.position.x=m),v!==void 0&&(a.position.y=v),g!==void 0&&(a.position.z=g)}function h(p){var m=new tt.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=m:a.lookAt(m)}function f(){return Object.assign(new tt.Vector3(0,0,-1e3).applyQuaternion(a.quaternion).add(a.position))}},zoomToFit:function(e){for(var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,i=arguments.length,a=new Array(i>3?i-3:0),s=3;s<i;s++)a[s-3]=arguments[s];return this.fitToBbox(this.getBbox.apply(this,a),t,r)},fitToBbox:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,a=e.camera;if(t){var s=new tt.Vector3(0,0,0),o=Math.max.apply(Math,Jr(Object.entries(t).map(function(p){var m=kM(p,2),v=m[0],g=m[1];return Math.max.apply(Math,Jr(g.map(function(d){return Math.abs(s[v]-d)})))})))*2,l=(1-i*2/e.height)*a.fov,u=o/Math.atan(l*Math.PI/180),c=u/a.aspect,h=Math.max(u,c);if(h>0){var f=s.clone().sub(a.position).normalize().multiplyScalar(-h);this.cameraPosition(f,s,r)}}return this},getBbox:function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},r=new tt.Box3(new tt.Vector3(0,0,0),new tt.Vector3(0,0,0)),i=e.objects.filter(t);return i.length?(i.forEach(function(a){return r.expandByObject(a)}),Object.assign.apply(Object,Jr(["x","y","z"].map(function(a){return GM({},a,[r.min[a],r.max[a]])})))):null},getScreenCoords:function(e,t,r,i){var a=new tt.Vector3(t,r,i);return a.project(this.camera()),{x:(a.x+1)*e.width/2,y:-(a.y-1)*e.height/2}},getSceneCoords:function(e,t,r){var i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,a=new tt.Vector2(t/e.width*2-1,-(r/e.height)*2+1),s=new tt.Raycaster;return s.setFromCamera(a,e.camera),Object.assign({},s.ray.at(i,new tt.Vector3))},intersectingObjects:function(e,t,r){var i=new tt.Vector2(t/e.width*2-1,-(r/e.height)*2+1),a=new tt.Raycaster;return a.params.Line.threshold=e.lineHoverPrecision,a.setFromCamera(i,e.camera),a.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new tt.Scene,camera:new tt.PerspectiveCamera,clock:new tt.Clock}},init:function(e,t){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=r.controlType,a=i===void 0?"trackball":i,s=r.rendererConfig,o=s===void 0?{}:s,l=r.extraRenderers,u=l===void 0?[]:l,c=r.waitForLoadComplete,h=c===void 0?!0:c;e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.className="scene-container",t.container.style.position="relative",t.container.appendChild(t.navInfo=document.createElement("div")),t.navInfo.className="scene-nav-info",t.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[a]||"",t.navInfo.style.display=t.showNavInfo?null:"none",t.toolTipElem=document.createElement("div"),t.toolTipElem.classList.add("scene-tooltip"),t.container.appendChild(t.toolTipElem),t.pointerPos=new tt.Vector2,t.pointerPos.x=-2,t.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(f){return t.container.addEventListener(f,function(p){if(f==="pointerdown"&&(t.isPointerPressed=!0),!t.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||t.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(g){return Math.abs(g)>1}))&&(t.isPointerDragging=!0),t.enablePointerInteraction){var m=v(t.container);t.pointerPos.x=p.pageX-m.left,t.pointerPos.y=p.pageY-m.top,t.toolTipElem.style.top="".concat(t.pointerPos.y,"px"),t.toolTipElem.style.left="".concat(t.pointerPos.x,"px"),t.toolTipElem.style.transform="translate(-".concat(t.pointerPos.x/t.width*100,"%, ").concat(t.height-t.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(g){var d=g.getBoundingClientRect(),M=window.pageXOffset||document.documentElement.scrollLeft,_=window.pageYOffset||document.documentElement.scrollTop;return{top:d.top+_,left:d.left+M}}},{passive:!0})}),t.container.addEventListener("pointerup",function(f){t.isPointerPressed=!1,!(t.isPointerDragging&&(t.isPointerDragging=!1,!t.clickAfterDrag))&&requestAnimationFrame(function(){f.button===0&&t.onClick(t.hoverObj||null,f,t.intersectionPoint),f.button===2&&t.onRightClick&&t.onRightClick(t.hoverObj||null,f,t.intersectionPoint)})},{passive:!0,capture:!0}),t.container.addEventListener("contextmenu",function(f){t.onRightClick&&f.preventDefault()}),t.renderer=new tt.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},o)),t.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),t.container.appendChild(t.renderer.domElement),t.extraRenderers=u,t.extraRenderers.forEach(function(f){f.domElement.style.position="absolute",f.domElement.style.top="0px",f.domElement.style.pointerEvents="none",t.container.appendChild(f.domElement)}),t.postProcessingComposer=new cM(t.renderer),t.postProcessingComposer.addPass(new hM(t.scene,t.camera)),t.controls=new{trackball:Jb,orbit:eM,fly:nM}[a](t.camera,t.renderer.domElement),a==="fly"&&(t.controls.movementSpeed=300,t.controls.rollSpeed=Math.PI/6,t.controls.dragToLook=!0),(a==="trackball"||a==="orbit")&&(t.controls.minDistance=.1,t.controls.maxDistance=t.skyRadius,t.controls.addEventListener("start",function(){t.controlsEngaged=!0}),t.controls.addEventListener("change",function(){t.controlsEngaged&&(t.controlsDragging=!0)}),t.controls.addEventListener("end",function(){t.controlsEngaged=!1,t.controlsDragging=!1})),[t.renderer,t.postProcessingComposer].concat(Jr(t.extraRenderers)).forEach(function(f){return f.setSize(t.width,t.height)}),t.camera.aspect=t.width/t.height,t.camera.updateProjectionMatrix(),t.camera.position.z=1e3,t.scene.add(t.skysphere=new tt.Mesh),t.skysphere.visible=!1,t.loadComplete=t.scene.visible=!h,window.scene=t.scene},update:function(e,t){if(e.width&&e.height&&(t.hasOwnProperty("width")||t.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(Jr(e.extraRenderers)).forEach(function(a){return a.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),t.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&t.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new tt.SphereGeometry(e.skyRadius)),t.hasOwnProperty("backgroundColor")){var r=Es(e.backgroundColor).alpha;r===void 0&&(r=1),e.renderer.setClearColor(new tt.Color(LM(1,e.backgroundColor)),r)}t.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new tt.TextureLoader().load(e.backgroundImageUrl,function(a){a.colorSpace=tt.SRGBColorSpace,e.skysphere.material=new tt.MeshBasicMaterial({map:a,side:tt.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&i()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&i())),t.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),t.hasOwnProperty("lights")&&((t.lights||[]).forEach(function(a){return e.scene.remove(a)}),e.lights.forEach(function(a){return e.scene.add(a)})),t.hasOwnProperty("objects")&&((t.objects||[]).forEach(function(a){return e.scene.remove(a)}),e.objects.forEach(function(a){return e.scene.add(a)}));function i(){e.loadComplete=e.scene.visible=!0}}});function qM(n,e){e===void 0&&(e={});var t=e.insertAt;if(!(!n||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",t==="top"&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n))}}var $M=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;qM($M);function ic(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),t.push.apply(t,r)}return t}function $i(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?ic(Object(t),!0).forEach(function(r){vi(n,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):ic(Object(t)).forEach(function(r){Object.defineProperty(n,r,Object.getOwnPropertyDescriptor(t,r))})}return n}function vi(n,e,t){return e=eS(e),e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function wa(n){return YM(n)||KM(n)||ZM(n)||JM()}function YM(n){if(Array.isArray(n))return Yo(n)}function KM(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ZM(n,e){if(n){if(typeof n=="string")return Yo(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Yo(n,e)}}function Yo(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function JM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function QM(n,e){if(typeof n!="object"||n===null)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var r=t.call(n,e||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function eS(n){var e=QM(n,"string");return typeof e=="symbol"?e:String(e)}function Nh(n,e){var t=new e;return t._destructor&&t._destructor(),{linkProp:function(i){return{default:t[i](),onChange:function(s,o){o[n][i](s)},triggerUpdate:!1}},linkMethod:function(i){return function(a){for(var s=a[n],o=arguments.length,l=new Array(o>1?o-1:0),u=1;u<o;u++)l[u-1]=arguments[u];var c=s[i].apply(s,l);return c===s?this:c}}}}var ac=window.THREE?window.THREE:{AmbientLight:I_,DirectionalLight:O_,Vector3:O},tS=170,Fh=Nh("forceGraph",Lh),nS=Object.assign.apply(Object,wa(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(n){return vi({},n,Fh.linkProp(n))}))),rS=Object.assign.apply(Object,wa(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(n){return vi({},n,Fh.linkMethod(n))}))),Qi=Nh("renderObjs",Dh),iS=Object.assign.apply(Object,wa(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(n){return vi({},n,Qi.linkProp(n))}))),aS=Object.assign.apply(Object,wa(["lights","cameraPosition","postProcessingComposer"].map(function(n){return vi({},n,Qi.linkMethod(n))})).concat([{graph2ScreenCoords:Qi.linkMethod("getScreenCoords"),screen2GraphCoords:Qi.linkMethod("getSceneCoords")}])),oS=Ms({props:$i($i({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,t){return t.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,t){var r=t.renderObjs.controls();r&&(r.enabled=e,e&&r.domElement&&r.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},nS),iS),methods:$i($i({zoomToFit:function(e,t,r){for(var i,a=arguments.length,s=new Array(a>3?a-3:0),o=3;o<a;o++)s[o-3]=arguments[o];return e.renderObjs.fitToBbox((i=e.forceGraph).getGraphBbox.apply(i,s),t,r),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},rS),aS),stateInit:function(e){var t=e.controlType,r=e.rendererConfig,i=e.extraRenderers,a=new Lh;return{forceGraph:a,renderObjs:Dh({controlType:t,rendererConfig:r,extraRenderers:i}).objects([a]).lights([new ac.AmbientLight(13421772,Math.PI),new ac.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,t){e.innerHTML="",e.appendChild(t.container=document.createElement("div")),t.container.style.position="relative";var r=document.createElement("div");t.container.appendChild(r),t.renderObjs(r);var i=t.renderObjs.camera(),a=t.renderObjs.renderer(),s=t.renderObjs.controls();s.enabled=!!t.enableNavigationControls,t.lastSetCameraZ=i.position.z;var o;t.container.appendChild(o=document.createElement("div")),o.className="graph-info-msg",o.textContent="",t.forceGraph.onLoading(function(){o.textContent="Loading..."}).onFinishLoading(function(){o.textContent=""}).onUpdate(function(){t.graphData=t.forceGraph.graphData(),i.position.x===0&&i.position.y===0&&i.position.z===t.lastSetCameraZ&&t.graphData.nodes.length&&(i.lookAt(t.forceGraph.position),t.lastSetCameraZ=i.position.z=Math.cbrt(t.graphData.nodes.length)*tS)}).onFinishUpdate(function(){if(t._dragControls){var l=t.graphData.nodes.find(function(c){return c.__initialFixedPos&&!c.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:t._dragControls.dispose(),t._dragControls=void 0}if(t.enableNodeDrag&&t.enablePointerInteraction&&t.forceEngine==="d3"){var u=t._dragControls=new F_(t.graphData.nodes.map(function(c){return c.__threeObj}).filter(function(c){return c}),i,a.domElement);u.addEventListener("dragstart",function(c){s.enabled=!1,c.object.__initialPos=c.object.position.clone(),c.object.__prevPos=c.object.position.clone();var h=gn(c.object).__data;!h.__initialFixedPos&&(h.__initialFixedPos={fx:h.fx,fy:h.fy,fz:h.fz}),!h.__initialPos&&(h.__initialPos={x:h.x,y:h.y,z:h.z}),["x","y","z"].forEach(function(f){return h["f".concat(f)]=h[f]}),a.domElement.classList.add("grabbable")}),u.addEventListener("drag",function(c){var h=gn(c.object);if(!c.object.hasOwnProperty("__graphObjType")){var f=c.object.__initialPos,p=c.object.__prevPos,m=c.object.position;h.position.add(m.clone().sub(p)),p.copy(m),m.copy(f)}var v=h.__data,g=h.position,d={x:g.x-v.x,y:g.y-v.y,z:g.z-v.z};["x","y","z"].forEach(function(M){return v["f".concat(M)]=v[M]=g[M]}),t.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,t.onNodeDrag(v,d)}),u.addEventListener("dragend",function(c){delete c.object.__initialPos,delete c.object.__prevPos;var h=gn(c.object).__data;h.__disposeControlsAfterDrag&&(u.dispose(),delete h.__disposeControlsAfterDrag);var f=h.__initialFixedPos,p=h.__initialPos,m={x:p.x-h.x,y:p.y-h.y,z:p.z-h.z};f&&(["x","y","z"].forEach(function(v){var g="f".concat(v);f[g]===void 0&&delete h[g]}),delete h.__initialFixedPos,delete h.__initialPos,h.__dragged&&(delete h.__dragged,t.onNodeDragEnd(h,m))),t.forceGraph.d3AlphaTarget(0).resetCountdown(),t.enableNavigationControls&&(s.enabled=!0,s.domElement&&s.domElement.ownerDocument&&s.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),a.domElement.classList.remove("grabbable")})}}),t.renderObjs.renderer().useLegacyLights=!1,t.renderObjs.hoverOrderComparator(function(l,u){var c=gn(l);if(!c)return 1;var h=gn(u);if(!h)return-1;var f=function(m){return m.__graphObjType==="node"};return f(h)-f(c)}).tooltipContent(function(l){var u=gn(l);return u&&$e(t["".concat(u.__graphObjType,"Label")])(u.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var u=gn(l);if(u!==t.hoverObj){var c=t.hoverObj?t.hoverObj.__graphObjType:null,h=t.hoverObj?t.hoverObj.__data:null,f=u?u.__graphObjType:null,p=u?u.__data:null;if(c&&c!==f){var m=t["on".concat(c==="node"?"Node":"Link","Hover")];m&&m(null,h)}if(f){var v=t["on".concat(f==="node"?"Node":"Link","Hover")];v&&v(p,c===f?h:null)}a.domElement.classList[u&&t["on".concat(f==="node"?"Node":"Link","Click")]||!u&&t.onBackgroundClick?"add":"remove"]("clickable"),t.hoverObj=u}}).clickAfterDrag(!1).onClick(function(l,u){var c=gn(l);if(c){var h=t["on".concat(c.__graphObjType==="node"?"Node":"Link","Click")];h&&h(c.__data,u)}else t.onBackgroundClick&&t.onBackgroundClick(u)}).onRightClick(function(l,u){var c=gn(l);if(c){var h=t["on".concat(c.__graphObjType==="node"?"Node":"Link","RightClick")];h&&h(c.__data,u)}else t.onBackgroundRightClick&&t.onBackgroundRightClick(u)}),this._animationCycle()}});function gn(n){for(var e=n;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}const on=Wh;on.links.forEach(n=>{const e=on.nodes[on.nodes.findIndex(r=>r.id===n.source)],t=on.nodes[on.nodes.findIndex(r=>r.id===n.target)];!e.neighbors&&(e.neighbors=[]),!t.neighbors&&(t.neighbors=[]),e.neighbors.push(t),t.neighbors.push(e),!e.links&&(e.links=[]),!t.links&&(t.links=[]),e.links.push(n),t.links.push(n)});const Sr=new Set,ea=new Set;let ui=null;console.log(on.nodes[on.nodes.findIndex(n=>n.id==="Indic")].hasOwnProperty("neighbors"));const Rr=oS({extraRenderers:[new N_]})(document.getElementById("3d-network")).graphData(on).nodeColor(n=>Sr.has(n)?n===ui?"rgb(255,0,0,1)":"#40e0d0":"rgba(0,255,255,0.6)").nodeRelSize(30).nodeVisibility(n=>n.visible===void 0?!0:n.visible).linkVisibility(n=>n.visible===void 0?!0:n.visible).linkWidth(n=>ea.has(n)?4:2).nodeThreeObject(n=>{const e=document.createElement("div");return e.textContent=n.id+": "+n.value.toLocaleString("en-US")+" words",e.className="node-label",new D_(e)}).nodeThreeObjectExtend(!0).onNodeHover(n=>{!n&&!Sr.size||n&&ui===n||(console.log(n),!(n&&!n.hasOwnProperty("neighbors"))&&(Sr.clear(),ea.clear(),n&&(Sr.add(n),n.neighbors.forEach(e=>Sr.add(e)),n.links.forEach(e=>ea.add(e))),ui=n||null,sS()))}).onNodeClick(n=>{const t=1+300/Math.hypot(n.x,n.y,n.z),r=n.x||n.y||n.z?{x:n.x*t,y:n.y*t,z:n.z*t}:{x:0,y:0,z:300};Rr.cameraPosition(r,n,3e3)});Rr.d3Force("charge").strength(-500);Rr.d3Force("link").distance(n=>n.value);function sS(){on.nodes.filter(n=>![...Sr].includes(n)).forEach(n=>{n.visible=!ui}),on.links.filter(n=>![...ea].includes(n)).forEach(n=>{n.visible=!ui}),Rr.nodeColor(Rr.nodeColor()).linkWidth(Rr.linkWidth())}
