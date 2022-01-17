"use strict";

const emojiData = [
  // ("Flags", "🇦🇧🇨🇩🇪🇫🇬🇭🇮🇯🇰🇱🇲🇳🇴🇵🇶🇷🇸🇹🇺🇻🇼🇽🇾🇿"), // FIXME: Make flags work somehow
  ["Weird E0.6", "©®‼⁉™ℹ↔↕↖↗↘↙↩↪Ⓜ▪▫▶◀◻◼◽◾☀☁☎☑☺♠♣♥♦♨♻⚠✂✈✉✏✒✔✖✳✴❄❇❤➡⤴⤵⬅⬆⬇〰〽❓❔❕❗➕➖➗➰⬛⬜🅰🅱🅾🅿🆎🆑🆒🆓🆔🆕🆖🆗🆘🆙🆚🈁🔙🔚🔛🔜🔝🔟🔠🔡🔢🔣🔤", false],
  ["Abstract E0.6", "⏩⏪⏫⏬♈♉♊♋♌♍♎♏♐♑♒♓🌀🎦💤💬💮💯💱💲💹📴📶🔃🔰🔲🔳🔴🔵🔶🔷🔸🔹🔺🔻🔼🔽🚹🚺🚻🚼🚾👤💟♿⚪⚫⛎⛔⭐⭕", false],
  ["CJK E0.6", "㊗㊙🀄🈂🈚🈯🈲🈳🈴🈵🈶🈷🈸🈹🈺🉐🉑", false],
  ["Gestures E0.6", "☝👀👂👃👄👅👆👇👈👉👊👋👌👍👎👏👐💪🙌🙏✊✋✌", true],
  ["Faces E0.6", "👦👧👨👩👪👫👮👯👰👱👲👳👴👵👶👷👸👹👺👻👼👽👾👿💀💁💂💃💆💇💏🎃🎅💑🗿😁😂😃😄😅😆😉😊😋😌😍😏😒😓😔😖😘😚😜😝😞😠😡😢😣😤😥😨😩😪😫😭😰😱😲😳😵😷😸😹😺😻😼😽😾😿🙀🙅🙆🙇🙈🙉🙊🙋🙍🙎", true],
  ["Common E0.6", "⚡✅❌🌈🌛🍀🍆🍌🍑🎉🎊🎤🎭🎱🎯🎵🎶🎷🏁🏆🐒🐔🐞🐣🐨🐱🐵🐶🐹🐼👑💉💊💋💥💐💓💔💕💖💗💘💡💦💧💩💾💿📆📈📉🔪🔞📢📣🔍🔎🔔🔥🔫🚀🚑🚨🚩🛀", true],
  ["Uncommon E0.6 A", "⌚⌛⏰⏳☔☕⚓⚽⚾⛄⛅⛪⛲⛳⛵⛺⛽✨❎🃏🌁🌂🌃🌄🌅🌆🌇🌉🌊🌋🌌🌏🌑🌓🌔🌕🌙🌟🌠🌰🌱🌴🌵🌷🌸🌹🌺🌻🌼🌽🌾🌿🍁🍂🍃🍄🍅🍇🍈🍉🍊🍍🍎🍏🍒🍓🍔🍕🍖🍗🍘🍙🍚🍛🍜🍝🍞🍟🍠🍡🍢🍣🍤🍥🍦🍧🍨🍩🍪🍫🍬🍭🍮🍯🍰🍱🍲🍳🍴🍵🍶🍷🍸🍹🍺🍻🎀🎁🎂🎄🎆🎇🎈🎋🎌🎍🎎🎏🎐🎑🎒🎓", true],
  ["Uncommon E0.6 B", "🎠🎡🎢🎣🎥🎧🎨🎩🎪🎫🎬🎮🎰🎲🎳🎴🎸🎹🎺🎻🎼🎽🎾🎿🏀🏂🏃🏄🏈🏊🏠🏡🏢🏣🏥🏦🏧🏨🏩🏪🏫🏬🏭🏮🏯🏰🐌🐍🐎🐑🐗🐘🐙🐚🐛🐜🐝🐟🐠🐡🐢🐤🐥🐦🐧🐩🐫🐬🐭🐮🐯🐰🐲🐳🐴🐷🐸🐺🐻🐽🐾👒👓👔👕👖👗👘👙👚👛👜👝👞👟👠👡👢👣💄💅💈💌💍💎💒💙💚💛💜💝💞💠💢💣💨", true],
  ["Uncommon E0.6 C", "💫💰💳💴💵💸💺💻💼💽📀📁📂📃📄📅📇📊📋📌📍📎📏📐📑📒📓📔📕📖📗📘📙📚📛📜📝📞📟📠📡📤📥📦📧📨📩📪📫📮📰📱📲📳📷📹📺📻📼🔊🔋🔌🔏🔐🔑🔒🔓🔖🔗🔘🔦🔧🔨🔩🔮🔯🔱🕐🕑🕒🕓🕔🕕🕖🕗🕘🕙🕚🕛🗻🗼🗽🗾🚃🚄🚅🚇🚉🚌🚏🚒🚓🚕🚗🚙🚚🚢🚤🚥🚧🚪🚫🚬🚭🚲🚶🚽", true],
  ["Weird E0.7", "⏭⏮⏸⏹⏺☂☃☪☯☸⛈⛏⛑⛓⛩⛰⛱⛴⛷⛸✝✡🌡🌤🌥🌦🌧🌨🌩🌪🌫🌬🌶🍽🎖🎗🎙🎚🎛🎞🎟🏍🏎🏔🏕🏖🏗🏘🏙🏚🏛🏜🏝🏞🏟🏳🏵🏷🐿👁📽🕉🕊🕯🕰🕳🕶🕷🕸🕹🖇🖊🖋🖌🖍🖥🖨🖱🖲🖼🗂🗃🗄🗑🗒🗓🗜🗝🗞🗡🗣🗯🗳🗺🛋🛍🛎🛏🛠🛡🛢🛣🛤🛥🛩🛰🛳", false],
  ["Gestures E0.7", "✍🏋🏌🖐", true],
  ["Faces E0.7", "☹🕵😐🕴", true],
  ["Other E0.7", "⛹🌍🌎🌜🐈🐕📬📭🔈🕜🕝🕞🕟🕠🕡🕢🕣🕤🕥🕦🕧🚍🚔🚘", true],
  ["Weird E1.0", "⌨⏏⏯⏱⏲☄☘☦⚒⚔⚖⚗⚙⚜🏻🏼🏽🏾🏿💭🔀🔁🔂🔄🔅🔆🔇📵🕎🚮🚯🚰🚱🚳🚷🚸🛂🛃🛄🛅🛐", false],
  ["Gestures E1.0", "🖕🖖🤘", true],
  ["Faces E1.0", "🌚🌝🌞😀😇😈😎😑😕😗😙😛😟😦😧😬😮😯😴😶🙁🙂🙃🙄🤐🤑🤒🤓🤔🤕🤖🤗", true],
  ["Common E1.0", "☠☣☮🌐🍿🏅🐓👬👭📯📸🔉🚜🚴🚿🛌🦀🦃🦄🧀", true],
  ["Other E1.0", "☢⚛⚰⚱❣➿🌒🌖🌗🌘🌭🌮🌯🌲🌳🍋🍐🍼🍾🏇🏉🏏🏐🏑🏒🏓🏤🏴🏸🏹🏺🐀🐁🐂🐃🐄🐅🐆🐇🐉🐊🐋🐏🐐🐖🐪👥💶💷📿🔕🔬🔭🕋🕌🕍🚁🚂🚆🚈🚊🚋🚎🚐🚖🚛🚝🚞🚟🚠🚡🚣🚦🚵🛁🛫🛬🦁🦂", true],
  ["Emoji E2.0", "🗨", false],
  ["Gestures E3.0", "🤙🤚🤛🤜🤝🤞", true],
  ["Faces E3.0", "🤠🤡🤢🤣🤤🤥🤦🤧🤰🤴🤵🤶🤷", true],
  ["Other E3.0", "🕺🖤🛑🛒🛴🛵🛶🤳🤸🤹🤺🤼🤽🤾🥀🥁🥂🥃🥄🥅🥇🥈🥉🥊🥋🥐🥑🥒🥓🥔🥕🥖🥗🥘🥙🥚🥛🥜🥝🥞🦅🦆🦇🦈🦉🦊🦋🦌🦍🦎🦏🦐🦑", true],
  ["Emoji E4.0", "♀♂⚕", false],
  ["Gestures E5.0", "🤟🤲", true],
  ["Faces E5.0", "🤨🤩🤪🤫🤬🤭🤮🤯🤱🧐🧑🧒🧓🧔🧕🧖🧙🧛🧝🧟", true],
  ["Other E5.0", "🛷🛸🥌🥟🥠🥡🥢🥣🥤🥥🥦🥧🥨🥩🥪🥫🦒🦓🦔🦕🦖🦗🧗🧘🧚🧜🧞🧠🧡🧢🧣🧤🧥🧦", true],
  ["Gestures E11.0", "🦵🦶", true],
  ["Faces E11.0", "🥰🥳🥴🥵🥶🥺", true],
  ["Emoji E11.0", "♟♾🛹🥍🥎🥏🥬🥭🥮🥯🥼🥽🥾🥿🦘🦙🦚🦛🦜🦝🦞🦟🦠🦡🦢🦰🦱🦲🦳🦴🦷🦸🦹🧁🧂🧧🧨🧩🧪🧫🧬🧭🧮🧯🧰🧱🧲🧳🧴🧵🧶🧷🧸🧹🧺🧻🧼🧽🧾🧿", true],
  ["Gestures E12.0", "🤏🦾🦿", true],
  ["Faces E12.0", "🥱🧏", true],
  ["Emoji E12.0", "🛕🛺🟠🟡🟢🟣🟤🟥🟦🟧🟨🟩🟪🟫🤍🤎🤿🥻🦥🦦🦧🦨🦩🦪🦮🦯🦺🦻🦼🦽🧃🧄🧅🧆🧇🧈🧉🧊🧍🧎🩰🩱🩲🩳🩸🩹🩺🪀🪁🪂🪐🪑🪒🪓🪔🪕", true],
  ["Gestures E13.0", "🤌", true],
  ["Faces E13.0", "🥲🥷🥸", true],
  ["Emoji E13.0", "⚧🛖🛗🛻🛼🦣🦤🦫🦬🦭🧋🩴🪃🪄🪅🪆🪖🪗🪘🪙🪚🪛🪜🪝🪞🪟🪠🪡🪢🪣🪤🪥🪦🪧🪨🪰🪱🪲🪳🪴🪵🪶🫀🫁🫂🫐🫑🫒🫓🫔🫕🫖", true],
  ["Gestures E14.0", "🪬🫰🫱🫲🫳🫴🫵🫶", true],
  ["Faces E14.0", "🥹🧌🫃🫄🫅🫠🫡🫢🫣🫤🫥🫦", true],
  ["Other E14.0", "🛝🛞🛟🟰🩻🩼🪩🪪🪫🪷🪸🪹🪺🫗🫘🫙🫧", false],
  ["Pictographic Abstract E0.0", "⎈★☇☈☉☊☋☌☍☏☐☒☖☗☙☡☰☱☲☳☴☵☶☷♳♴♵♶♷♸♹♺⚞⚟⚹⚺⚻⚼⛀⛁⛂⛃⛆⛉⛊⛋⛌⛚⛝⛞⛠⛡⛫🗤🗥🗦🗧🛆🛈", false],
  ["Pictographic Gestures E0.0", "☚☛☜☞☟🖎🖏🖑🖒🖓🖔🖗🖘🖙🖚🖛🖜🖝🖞🖟🖠🖡🖢🖣", false],
  ["Pictographic Dice/Dominos E0.0", "⚀⚁⚂⚃⚄⚅🀰🀱🀲🀳🀴🀵🀶🀷🀸🀹🀺🀻🀼🀽🀾🀿🁀🁁🁂🁃🁄🁅🁆🁇🁈🁉🁊🁋🁌🁍🁎🁏🁐🁑🁒🁓🁔🁕🁖🁗🁘🁙🁚🁛🁜🁝🁞🁟🁠🁡🁢🁣🁤🁥🁦🁧🁨🁩🁪🁫🁬🁭🁮🁯🁰🁱🁲🁳🁴🁵🁶🁷🁸🁹🁺🁻🁼🁽🁾🁿🂀🂁🂂🂃🂄🂅🂆🂇🂈🂉🂊🂋🂌🂍🂎🂏🂐🂑🂒🂓", false],
  ["Pictographic Mahjong E0.0", "🀀🀁🀂🀃🀅🀆🀇🀈🀉🀊🀋🀌🀍🀎🀏🀐🀑🀒🀓🀔🀕🀖🀗🀘🀙🀚🀛🀜🀝🀞🀟🀠🀡🀢🀣🀤🀥🀦🀧🀨🀩🀪", false],
  ["Pictographic Cards E0.0", "🂠🂡🂢🂣🂤🂥🂦🂧🂨🂩🂪🂫🂬🂭🂮🂱🂲🂳🂴🂵🂶🂷🂸🂹🂺🂻🂼🂽🂾🂿🃁🃂🃃🃄🃅🃆🃇🃈🃉🃊🃋🃌🃍🃎🃑🃒🃓🃔🃕🃖🃗🃘🃙🃚🃛🃜🃝🃞🃟", false],
  ["Pictographic Other E0.0", "☤☥☧☨☩☫☬☭☻☼☽☾☿♁♃♄♅♆♇♔♕♖♗♘♙♚♛♜♝♞♡♢♤♧♩♪♫♬♭♮♯♰♱♲♼♽⚐⚑⚘⚚⚝⚢⚣⚤⚥⚦⚨⚩⚬⚭⚮⚯⚲⚳⚴⚵⚶⚷⚸⚿⛇⛍⛐⛒⛕⛖⛗⛘⛙⛛⛜⛟⛢⛣⛤⛥⛦⛧⛨⛬⛭⛮⛯⛶⛻⛼⛾⛿✀✁✃✄✎✐✑❥❦❧🄍🄎🄏🄯🅬🅭🅮🅯🌢🌣🎔🎕🎘🎜🎝🏱🏲🏶📾🕆🕇🕈🕏🕨🕩🕪🕫🕬🕭🕮🕱🕲🕻🕼🕽🕾🕿🖀🖁🖂🖃🖄🖅🖆🖈🖉🖦🖧🖩🖪🖫🖬🖭🖮🖯🖰🖳🖴🖵🖶🖷🖸🖹🖺🖻🖽🖾🖿🗀🗁🗅🗆🗇🗈🗉🗊🗋🗌🗍🗎🗏🗐🗔🗕🗖🗗🗘🗙🗚🗛🗟🗠🗢🗩🗪🗫🗬🗭🗮🗰🗱🗲🗴🗵🗶🗷🗸🗹🛇🛉🛊🛓🛔🛦🛧🛨🛪🛱🛲", false],
];

function explodeByCodepoint(string) {
  let codepoints = [];
  let iterator = string[Symbol.iterator]();
  let theChar = iterator.next();
  while (!theChar.done) {
    codepoints.push(theChar.value);
    theChar = iterator.next();
  }
  return codepoints;
}

function randomChar(randomPool) {
  if (!randomPool) {
    console.warn("No codepoints available?!");
    return "�";
  }
  return randomPool[Math.floor(randomPool.length * Math.random())];
}

function readCheckbox(id) {
  let checkbox = document.getElementById(id);
  if (!checkbox) {
    console.error(`checkbox ${id} missing?!`);
    return false;
  }
  return checkbox.checked;
}

function submitClicked() {
  let randomPool = [];
  for (let i in emojiData) {
    if (readCheckbox(`checkbox-sel${i}`)) {
      randomPool.push(emojiData[i][1]);
    }
  }
  if (readCheckbox(`checkbox-sel-custom`)) {
    randomPool.push(document.getElementById("textinput-sel-custom").value);
  }
  randomPool = explodeByCodepoint(randomPool.join(""));

  let text = document.getElementById("textinput").value;
  let textParts;
  if (readCheckbox("checkbox-between-letters")) {
    textParts = explodeByCodepoint(text);
  } else {
    textParts = text.split(" ");
  }

  let resultParts = [];
  resultParts.push(randomChar(randomPool));
  for (let textPart of textParts) {
    resultParts.push(textPart);
    resultParts.push(randomChar(randomPool));
  }
  let result = resultParts.join("");

  console.log(result);
  document.getElementById("textoutput").value = result;

  // Prevent bubbling/default action, by returning false.
  return false;
}

function injectCheckboxes() {
  let htmlFragments = [];
  for (let i in emojiData) {
    let entry = emojiData[i];
    let suffix;
    if (entry[2]) {
      suffix = " checked";
    } else {
      suffix = "";
    }
    htmlFragments.push(`
      <input type="checkbox" id="checkbox-sel${i}"${suffix}>
      <label for="checkbox-sel${i}">${entry[0]}: ${entry[1]}</label><br>
    `);
  }
  document.getElementById("all-checkboxes").innerHTML += htmlFragments.join("");
}

function resetDeactivate() {
  for (let i in emojiData) {
    document.getElementById(`checkbox-sel${i}`).checked = false;
  }
  document.getElementById("checkbox-sel-custom").checked = true;
  submitClicked();
}

function resetActivate() {
  for (let i in emojiData) {
    document.getElementById(`checkbox-sel${i}`).checked = true;
  }
  document.getElementById("checkbox-sel-custom").checked = true;
  submitClicked();
}

function resetDefault() {
  for (let i in emojiData) {
    document.getElementById(`checkbox-sel${i}`).checked = emojiData[i][2];
  }
  document.getElementById("checkbox-sel-custom").checked = true;
  submitClicked();
}

function init() {
  injectCheckboxes();
  document.getElementById("input-form").onsubmit = submitClicked;
  document.getElementById("btn-deactivate").onclick = resetDeactivate;
  document.getElementById("btn-activate").onclick = resetActivate;
  document.getElementById("btn-reset-default").onclick = resetDefault;
  submitClicked();
}

init();
