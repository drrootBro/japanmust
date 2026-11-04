/* Builds the printable allergy card on /guides/japanese-food-allergy-card-printable/ */
(function () {
  var ITEMS = {
    egg:      ["卵（たまご）", "Egg"],
    milk:     ["乳製品（牛乳・バター・チーズ）", "Dairy (milk, butter, cheese)"],
    wheat:    ["小麦（こむぎ）", "Wheat"],
    gluten:   ["グルテン（小麦・大麦・ライ麦）", "Gluten (wheat, barley, rye)"],
    soba:     ["そば（蕎麦）", "Buckwheat (soba)"],
    peanut:   ["ピーナッツ（落花生）", "Peanuts"],
    walnut:   ["くるみ", "Walnuts"],
    treenut:  ["ナッツ類（アーモンド・カシューナッツなど）", "Tree nuts (almonds, cashews, etc.)"],
    shrimp:   ["えび", "Shrimp"],
    crab:     ["かに", "Crab"],
    mollusc:  ["貝類（あさり・牡蠣・ホタテなど）", "Molluscs (clams, oysters, scallops)"],
    fish:     ["魚（かつおだしを含む）", "Fish (including bonito stock)"],
    sesame:   ["ごま", "Sesame"],
    soy:      ["大豆（醤油・味噌・豆腐を含む）", "Soy (including soy sauce, miso, tofu)"]
  };
  var root = document.getElementById("card-builder");
  if (!root) { return; }
  var boxes = root.querySelectorAll("input[type=checkbox][data-item]");
  var severe = document.getElementById("cb-severe");
  var out = document.getElementById("card-out");

  function li(jp, en) { return '<div class="ac-line"><p class="ac-jp">' + jp + '</p><p class="ac-en">' + en + "</p></div>"; }
  function render() {
    var jp = [], en = [];
    for (var i = 0; i < boxes.length; i++) {
      if (boxes[i].checked) { var it = ITEMS[boxes[i].getAttribute("data-item")]; jp.push(it[0]); en.push(it[1]); }
    }
    if (!jp.length) {
      out.innerHTML = '<span class="ac-badge">アレルギー · ALLERGY</span><p class="ac-en">Tick your allergens above and your card will appear here.</p>';
      return;
    }
    var list = "<br>" + jp.map(function (x) { return "・" + x; }).join("<br>");
    var enList = en.join("; ");
    var h = '<span class="ac-badge">アレルギー · ALLERGY</span>';
    h += li("私は次の食品にアレルギーがあります。" + list, "I have an allergy to: " + enList + ".");
    h += li("これらが入っている料理は食べられません。", "I cannot eat any dish that contains these.");
    h += li("だしやソース、調味料、揚げ油にも入っていないか、ご確認をお願いします。", "Please also check the stock, sauces, seasonings and frying oil.");
    h += li("これらに触れた調理器具や油は使わないでください。", "Please do not use utensils or oil that have touched these.");
    if (severe.checked) { h += li("少量でも命に関わります。", "Even a small amount can be life-threatening."); }
    h += '<p class="ac-foot">ご協力ありがとうございます。 Thank you for your help. · japanmust.com</p>';
    out.innerHTML = h;
  }
  root.addEventListener("change", render);
  render();
})();
