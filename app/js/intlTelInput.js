/*
 * International Telephone Input v21.2.5
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

// UMD
(function (factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    window.intlTelInput = factory();
  }
})(() => {
  var factoryOutput = (() => {
    var v = Object.defineProperty;
    var k = Object.getOwnPropertyDescriptor;
    var A = Object.getOwnPropertyNames;
    var N = Object.prototype.hasOwnProperty;
    var M = (o, t) => {
        for (var e in t) v(o, e, { get: t[e], enumerable: !0 });
      },
      x = (o, t, e, i) => {
        if ((t && typeof t == "object") || typeof t == "function")
          for (let n of A(t))
            !N.call(o, n) &&
              n !== e &&
              v(o, n, {
                get: () => t[n],
                enumerable: !(i = k(t, n)) || i.enumerable,
              });
        return o;
      };
    var P = (o) => x(v({}, "__esModule", { value: !0 }), o);
    var G = {};
    M(G, { Iti: () => b, default: () => $ });
    var w = [
        ["af", "93"],
        ["al", "355"],
        ["dz", "213"],
        ["as", "1", 5, ["684"]],
        ["ad", "376"],
        ["ao", "244"],
        ["ai", "1", 6, ["264"]],
        ["ag", "1", 7, ["268"]],
        ["ar", "54"],
        ["am", "374"],
        ["aw", "297"],
        ["ac", "247"],
        ["au", "61", 0],
        ["at", "43"],
        ["az", "994"],
        ["bs", "1", 8, ["242"]],
        ["bh", "973"],
        ["bd", "880"],
        ["bb", "1", 9, ["246"]],
        ["by", "375"],
        ["be", "32"],
        ["bz", "501"],
        ["bj", "229"],
        ["bm", "1", 10, ["441"]],
        ["bt", "975"],
        ["bo", "591"],
        ["ba", "387"],
        ["bw", "267"],
        ["br", "55"],
        ["io", "246"],
        ["vg", "1", 11, ["284"]],
        ["bn", "673"],
        ["bg", "359"],
        ["bf", "226"],
        ["bi", "257"],
        ["kh", "855"],
        ["cm", "237"],
        [
          "ca",
          "1",
          1,
          [
            "204",
            "226",
            "236",
            "249",
            "250",
            "263",
            "289",
            "306",
            "343",
            "354",
            "365",
            "367",
            "368",
            "382",
            "387",
            "403",
            "416",
            "418",
            "428",
            "431",
            "437",
            "438",
            "450",
            "584",
            "468",
            "474",
            "506",
            "514",
            "519",
            "548",
            "579",
            "581",
            "584",
            "587",
            "604",
            "613",
            "639",
            "647",
            "672",
            "683",
            "705",
            "709",
            "742",
            "753",
            "778",
            "780",
            "782",
            "807",
            "819",
            "825",
            "867",
            "873",
            "879",
            "902",
            "905",
          ],
        ],
        ["cv", "238"],
        ["bq", "599", 1, ["3", "4", "7"]],
        ["ky", "1", 12, ["345"]],
        ["cf", "236"],
        ["td", "235"],
        ["cl", "56"],
        ["cn", "86"],
        ["cx", "61", 2, ["89164"]],
        ["cc", "61", 1, ["89162"]],
        ["co", "57"],
        ["km", "269"],
        ["cg", "242"],
        ["cd", "243"],
        ["ck", "682"],
        ["cr", "506"],
        ["ci", "225"],
        ["hr", "385"],
        ["cu", "53"],
        ["cw", "599", 0],
        ["cy", "357"],
        ["cz", "420"],
        ["dk", "45"],
        ["dj", "253"],
        ["dm", "1", 13, ["767"]],
        ["do", "1", 2, ["809", "829", "849"]],
        ["ec", "593"],
        ["eg", "20"],
        ["sv", "503"],
        ["gq", "240"],
        ["er", "291"],
        ["ee", "372"],
        ["sz", "268"],
        ["et", "251"],
        ["fk", "500"],
        ["fo", "298"],
        ["fj", "679"],
        ["fi", "358", 0],
        ["fr", "33"],
        ["gf", "594"],
        ["pf", "689"],
        ["ga", "241"],
        ["gm", "220"],
        ["ge", "995"],
        ["de", "49"],
        ["gh", "233"],
        ["gi", "350"],
        ["gr", "30"],
        ["gl", "299"],
        ["gd", "1", 14, ["473"]],
        ["gp", "590", 0],
        ["gu", "1", 15, ["671"]],
        ["gt", "502"],
        ["gg", "44", 1, ["1481", "7781", "7839", "7911"]],
        ["gn", "224"],
        ["gw", "245"],
        ["gy", "592"],
        ["ht", "509"],
        ["hn", "504"],
        ["hk", "852"],
        ["hu", "36"],
        ["is", "354"],
        ["in", "91"],
        ["id", "62"],
        ["ir", "98"],
        ["iq", "964"],
        ["ie", "353"],
        ["im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]],
        ["il", "972"],
        ["it", "39", 0],
        ["jm", "1", 4, ["876", "658"]],
        ["jp", "81"],
        ["je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]],
        ["jo", "962"],
        ["kz", "7", 1, ["33", "7"]],
        ["ke", "254"],
        ["ki", "686"],
        ["xk", "383"],
        ["kw", "965"],
        ["kg", "996"],
        ["la", "856"],
        ["lv", "371"],
        ["lb", "961"],
        ["ls", "266"],
        ["lr", "231"],
        ["ly", "218"],
        ["li", "423"],
        ["lt", "370"],
        ["lu", "352"],
        ["mo", "853"],
        ["mg", "261"],
        ["mw", "265"],
        ["my", "60"],
        ["mv", "960"],
        ["ml", "223"],
        ["mt", "356"],
        ["mh", "692"],
        ["mq", "596"],
        ["mr", "222"],
        ["mu", "230"],
        ["yt", "262", 1, ["269", "639"]],
        ["mx", "52"],
        ["fm", "691"],
        ["md", "373"],
        ["mc", "377"],
        ["mn", "976"],
        ["me", "382"],
        ["ms", "1", 16, ["664"]],
        ["ma", "212", 0],
        ["mz", "258"],
        ["mm", "95"],
        ["na", "264"],
        ["nr", "674"],
        ["np", "977"],
        ["nl", "31"],
        ["nc", "687"],
        ["nz", "64"],
        ["ni", "505"],
        ["ne", "227"],
        ["ng", "234"],
        ["nu", "683"],
        ["nf", "672"],
        ["kp", "850"],
        ["mk", "389"],
        ["mp", "1", 17, ["670"]],
        ["no", "47", 0],
        ["om", "968"],
        ["pk", "92"],
        ["pw", "680"],
        ["ps", "970"],
        ["pa", "507"],
        ["pg", "675"],
        ["py", "595"],
        ["pe", "51"],
        ["ph", "63"],
        ["pl", "48"],
        ["pt", "351"],
        ["pr", "1", 3, ["787", "939"]],
        ["qa", "974"],
        ["re", "262", 0],
        ["ro", "40"],
        ["ru", "7", 0],
        ["rw", "250"],
        ["ws", "685"],
        ["sm", "378"],
        ["st", "239"],
        ["sa", "966"],
        ["sn", "221"],
        ["rs", "381"],
        ["sc", "248"],
        ["sl", "232"],
        ["sg", "65"],
        ["sx", "1", 21, ["721"]],
        ["sk", "421"],
        ["si", "386"],
        ["sb", "677"],
        ["so", "252"],
        ["za", "27"],
        ["kr", "82"],
        ["ss", "211"],
        ["es", "34"],
        ["lk", "94"],
        ["bl", "590", 1],
        ["sh", "290"],
        ["kn", "1", 18, ["869"]],
        ["lc", "1", 19, ["758"]],
        ["mf", "590", 2],
        ["pm", "508"],
        ["vc", "1", 20, ["784"]],
        ["sd", "249"],
        ["sr", "597"],
        ["sj", "47", 1, ["79"]],
        ["se", "46"],
        ["ch", "41"],
        ["sy", "963"],
        ["tw", "886"],
        ["tj", "992"],
        ["tz", "255"],
        ["th", "66"],
        ["tl", "670"],
        ["tg", "228"],
        ["tk", "690"],
        ["to", "676"],
        ["tt", "1", 22, ["868"]],
        ["tn", "216"],
        ["tr", "90"],
        ["tm", "993"],
        ["tc", "1", 23, ["649"]],
        ["tv", "688"],
        ["ug", "256"],
        ["ua", "380"],
        ["ae", "971"],
        ["gb", "44", 0],
        ["us", "1", 0],
        ["uy", "598"],
        ["vi", "1", 24, ["340"]],
        ["uz", "998"],
        ["vu", "678"],
        ["va", "39", 1, ["06698"]],
        ["ve", "58"],
        ["vn", "84"],
        ["wf", "681"],
        ["eh", "212", 1, ["5288", "5289"]],
        ["ye", "967"],
        ["zm", "260"],
        ["zw", "263"],
        ["ax", "358", 1, ["18"]],
      ],
      I = [];
    for (let o = 0; o < w.length; o++) {
      let t = w[o];
      I[o] = {
        name: "",
        iso2: t[0],
        dialCode: t[1],
        priority: t[2] || 0,
        areaCodes: t[3] || null,
        nodeById: {},
      };
    }
    var C = I;
    var _ = {
      af: "Afghanistan",
      ax: "\xC5land Islands",
      al: "Albania",
      dz: "Algeria",
      as: "American Samoa",
      ad: "Andorra",
      ao: "Angola",
      ai: "Anguilla",
      aq: "Antarctica",
      ag: "Antigua & Barbuda",
      ar: "Argentina",
      am: "Armenia",
      aw: "Aruba",
      au: "Australia",
      at: "Austria",
      az: "Azerbaijan",
      bs: "Bahamas",
      bh: "Bahrain",
      bd: "Bangladesh",
      bb: "Barbados",
      by: "Belarus",
      be: "Belgium",
      bz: "Belize",
      bj: "Benin",
      bm: "Bermuda",
      bt: "Bhutan",
      bo: "Bolivia",
      ba: "Bosnia & Herzegovina",
      bw: "Botswana",
      bv: "Bouvet Island",
      br: "Brazil",
      io: "British Indian Ocean Territory",
      vg: "British Virgin Islands",
      bn: "Brunei",
      bg: "Bulgaria",
      bf: "Burkina Faso",
      bi: "Burundi",
      kh: "Cambodia",
      cm: "Cameroon",
      ca: "Canada",
      cv: "Cape Verde",
      bq: "Caribbean Netherlands",
      ky: "Cayman Islands",
      cf: "Central African Republic",
      td: "Chad",
      cl: "Chile",
      cn: "China",
      cx: "Christmas Island",
      cc: "Cocos (Keeling) Islands",
      co: "Colombia",
      km: "Comoros",
      cg: "Congo - Brazzaville",
      cd: "Congo - Kinshasa",
      ck: "Cook Islands",
      cr: "Costa Rica",
      ci: "C\xF4te d\u2019Ivoire",
      hr: "Croatia",
      cu: "Cuba",
      cw: "Cura\xE7ao",
      cy: "Cyprus",
      cz: "Czechia",
      dk: "Denmark",
      dj: "Djibouti",
      dm: "Dominica",
      do: "Dominican Republic",
      ec: "Ecuador",
      eg: "Egypt",
      sv: "El Salvador",
      gq: "Equatorial Guinea",
      er: "Eritrea",
      ee: "Estonia",
      sz: "Eswatini",
      et: "Ethiopia",
      fk: "Falkland Islands",
      fo: "Faroe Islands",
      fj: "Fiji",
      fi: "Finland",
      fr: "France",
      gf: "French Guiana",
      pf: "French Polynesia",
      tf: "French Southern Territories",
      ga: "Gabon",
      gm: "Gambia",
      ge: "Georgia",
      de: "Germany",
      gh: "Ghana",
      gi: "Gibraltar",
      gr: "Greece",
      gl: "Greenland",
      gd: "Grenada",
      gp: "Guadeloupe",
      gu: "Guam",
      gt: "Guatemala",
      gg: "Guernsey",
      gn: "Guinea",
      gw: "Guinea-Bissau",
      gy: "Guyana",
      ht: "Haiti",
      hm: "Heard & McDonald Islands",
      hn: "Honduras",
      hk: "Hong Kong SAR China",
      hu: "Hungary",
      is: "Iceland",
      in: "India",
      id: "Indonesia",
      ir: "Iran",
      iq: "Iraq",
      ie: "Ireland",
      im: "Isle of Man",
      il: "Israel",
      it: "Italy",
      jm: "Jamaica",
      jp: "Japan",
      je: "Jersey",
      jo: "Jordan",
      kz: "Kazakhstan",
      ke: "Kenya",
      ki: "Kiribati",
      kw: "Kuwait",
      kg: "Kyrgyzstan",
      la: "Laos",
      lv: "Latvia",
      lb: "Lebanon",
      ls: "Lesotho",
      lr: "Liberia",
      ly: "Libya",
      li: "Liechtenstein",
      lt: "Lithuania",
      lu: "Luxembourg",
      mo: "Macao SAR China",
      mg: "Madagascar",
      mw: "Malawi",
      my: "Malaysia",
      mv: "Maldives",
      ml: "Mali",
      mt: "Malta",
      mh: "Marshall Islands",
      mq: "Martinique",
      mr: "Mauritania",
      mu: "Mauritius",
      yt: "Mayotte",
      mx: "Mexico",
      fm: "Micronesia",
      md: "Moldova",
      mc: "Monaco",
      mn: "Mongolia",
      me: "Montenegro",
      ms: "Montserrat",
      ma: "Morocco",
      mz: "Mozambique",
      mm: "Myanmar (Burma)",
      na: "Namibia",
      nr: "Nauru",
      np: "Nepal",
      nl: "Netherlands",
      nc: "New Caledonia",
      nz: "New Zealand",
      ni: "Nicaragua",
      ne: "Niger",
      ng: "Nigeria",
      nu: "Niue",
      nf: "Norfolk Island",
      kp: "North Korea",
      mk: "North Macedonia",
      mp: "Northern Mariana Islands",
      no: "Norway",
      om: "Oman",
      pk: "Pakistan",
      pw: "Palau",
      ps: "Palestinian Territories",
      pa: "Panama",
      pg: "Papua New Guinea",
      py: "Paraguay",
      pe: "Peru",
      ph: "Philippines",
      pn: "Pitcairn Islands",
      pl: "Poland",
      pt: "Portugal",
      pr: "Puerto Rico",
      qa: "Qatar",
      re: "R\xE9union",
      ro: "Romania",
      ru: "Russia",
      rw: "Rwanda",
      ws: "Samoa",
      sm: "San Marino",
      st: "S\xE3o Tom\xE9 & Pr\xEDncipe",
      sa: "Saudi Arabia",
      sn: "Senegal",
      rs: "Serbia",
      sc: "Seychelles",
      sl: "Sierra Leone",
      sg: "Singapore",
      sx: "Sint Maarten",
      sk: "Slovakia",
      si: "Slovenia",
      sb: "Solomon Islands",
      so: "Somalia",
      za: "South Africa",
      gs: "South Georgia & South Sandwich Islands",
      kr: "South Korea",
      ss: "South Sudan",
      es: "Spain",
      lk: "Sri Lanka",
      bl: "St. Barth\xE9lemy",
      sh: "St. Helena",
      kn: "St. Kitts & Nevis",
      lc: "St. Lucia",
      mf: "St. Martin",
      pm: "St. Pierre & Miquelon",
      vc: "St. Vincent & Grenadines",
      sd: "Sudan",
      sr: "Suriname",
      sj: "Svalbard & Jan Mayen",
      se: "Sweden",
      ch: "Switzerland",
      sy: "Syria",
      tw: "Taiwan",
      tj: "Tajikistan",
      tz: "Tanzania",
      th: "Thailand",
      tl: "Timor-Leste",
      tg: "Togo",
      tk: "Tokelau",
      to: "Tonga",
      tt: "Trinidad & Tobago",
      tn: "Tunisia",
      tr: "Turkey",
      tm: "Turkmenistan",
      tc: "Turks & Caicos Islands",
      tv: "Tuvalu",
      um: "U.S. Outlying Islands",
      vi: "U.S. Virgin Islands",
      ug: "Uganda",
      ua: "Ukraine",
      ae: "United Arab Emirates",
      gb: "United Kingdom",
      us: "United States",
      uy: "Uruguay",
      uz: "Uzbekistan",
      vu: "Vanuatu",
      va: "Vatican City",
      ve: "Venezuela",
      vn: "Vietnam",
      wf: "Wallis & Futuna",
      eh: "Western Sahara",
      ye: "Yemen",
      zm: "Zambia",
      zw: "Zimbabwe",
    };
    var L = {
      selectedCountryAriaLabel: "Selected country",
      noCountrySelected: "No country selected",
      countryListAriaLabel: "List of countries",
      searchPlaceholder: "Search",
      zeroSearchResults: "No results found",
      oneSearchResult: "1 result found",
      multipleSearchResults: "${count} results found",
      ac: "Ascension Island",
      xk: "Kosovo",
    };
    var T = { ..._, ...L };
    var H = 0,
      D = {
        allowDropdown: !0,
        autoPlaceholder: "polite",
        countrySearch: !0,
        containerClass: "",
        customPlaceholder: null,
        dropdownContainer: null,
        excludeCountries: [],
        fixDropdownWidth: !0,
        formatAsYouType: !0,
        formatOnDisplay: !0,
        geoIpLookup: null,
        hiddenInput: null,
        i18n: {},
        initialCountry: "",
        nationalMode: !0,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: [],
        showFlags: !0,
        showSelectedDialCode: !1,
        strictMode: !1,
        useFullscreenPopup:
          typeof navigator < "u" && typeof window < "u"
            ? /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              ) || window.innerWidth <= 500
            : !1,
        utilsScript: "",
      },
      U = [
        "800",
        "822",
        "833",
        "844",
        "855",
        "866",
        "877",
        "880",
        "881",
        "882",
        "883",
        "884",
        "885",
        "886",
        "887",
        "888",
        "889",
      ],
      f = (o) => o.replace(/\D/g, ""),
      E = (o = "") =>
        o
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase(),
      F = (o, t, e) => {
        e && !o.classList.contains(t)
          ? o.classList.add(t)
          : !e && o.classList.contains(t) && o.classList.remove(t);
      },
      S = (o) => {
        let t = f(o);
        if (t.charAt(0) === "1") {
          let e = t.substr(1, 3);
          return U.indexOf(e) !== -1;
        }
        return !1;
      },
      z = (o, t) => (o.name < t.name ? -1 : o.name > t.name ? 1 : 0),
      R = (o, t, e, i) => {
        if (e === 0 && !i) return 0;
        let n = 0;
        for (let s = 0; s < t.length; s++) {
          if ((/[+0-9]/.test(t[s]) && n++, n === o && !i)) return s + 1;
          if (i && n === o + 1) return s;
        }
        return t.length;
      },
      h = (o, t, e) => {
        let i = document.createElement(o);
        return (
          t && Object.entries(t).forEach(([n, s]) => i.setAttribute(n, s)),
          e && e.appendChild(i),
          i
        );
      },
      y = (o) => {
        let { instances: t } = window.intlTelInputGlobals;
        Object.values(t).forEach((e) => e[o]());
      },
      b = class {
        id;
        promise;
        telInput;
        activeItem;
        highlightedItem;
        options;
        hadInitialPlaceholder;
        isRTL;
        selectedCountryData;
        countries;
        dialCodeMaxLen;
        dialCodeToIso2Map;
        dialCodes;
        preferredCountries;
        countryContainer;
        selectedCountry;
        selectedCountryInner;
        selectedCountryA11yText;
        selectedDialCode;
        dropdownArrow;
        dropdownContent;
        searchInput;
        searchResultsA11yText;
        countryList;
        dropdown;
        hiddenInput;
        hiddenInputCountry;
        maxCoreNumberLength;
        defaultCountry;
        _a14;
        _a9;
        _a10;
        _a11;
        _a12;
        _handleKeydownEvent;
        _a4;
        _a0;
        _a1;
        _a2;
        _a3;
        _a7;
        resolveAutoCountryPromise;
        rejectAutoCountryPromise;
        resolveUtilsScriptPromise;
        rejectUtilsScriptPromise;
        constructor(t, e = {}) {
          (this.id = H++),
            (this.a = t),
            (this.b = null),
            (this.c = null),
            (this.d = Object.assign({}, D, e)),
            (this.e = !!t.getAttribute("placeholder"));
        }
        _init() {
          this.d.useFullscreenPopup && (this.d.fixDropdownWidth = !1),
            this.d.countrySearch &&
              !this.d.useFullscreenPopup &&
              (this.d.fixDropdownWidth = !0);
          let t = this.d.allowDropdown && !this.d.showSelectedDialCode;
          !this.d.showFlags && t && (this.d.showFlags = !0),
            this.d.useFullscreenPopup &&
              !this.d.dropdownContainer &&
              (this.d.dropdownContainer = document.body),
            (this.isRTL = !!this.a.closest("[dir=rtl]")),
            (this.d.i18n = { ...T, ...this.d.i18n });
          let e = new Promise((n, s) => {
              (this.h = n), (this.i = s);
            }),
            i = new Promise((n, s) => {
              (this.i0 = n), (this.i1 = s);
            });
          (this.promise = Promise.all([e, i])),
            (this.s = {}),
            this._b(),
            this._f(),
            this._h(),
            this._i(),
            this._i3();
        }
        _b() {
          this._d(),
            this._d2(),
            this._e(),
            this._d0(),
            (this.d.onlyCountries.length || this.d.i18n) && this.p.sort(z);
        }
        _c(t, e, i) {
          e.length > this.dialCodeMaxLen && (this.dialCodeMaxLen = e.length),
            this.q.hasOwnProperty(e) || (this.q[e] = []);
          for (let s = 0; s < this.q[e].length; s++)
            if (this.q[e][s] === t) return;
          let n = i !== void 0 ? i : this.q[e].length;
          this.q[e][n] = t;
        }
        _d() {
          let { onlyCountries: t, excludeCountries: e } = this.d;
          if (t.length) {
            let i = t.map((n) => n.toLowerCase());
            this.p = C.filter((n) => i.indexOf(n.iso2) > -1);
          } else if (e.length) {
            let i = e.map((n) => n.toLowerCase());
            this.p = C.filter((n) => i.indexOf(n.iso2) === -1);
          } else this.p = C;
        }
        _d0() {
          for (let t = 0; t < this.p.length; t++) {
            let e = this.p[t].iso2.toLowerCase();
            this.d.i18n.hasOwnProperty(e) && (this.p[t].name = this.d.i18n[e]);
          }
        }
        _d2() {
          (this.dialCodes = {}), (this.dialCodeMaxLen = 0), (this.q = {});
          for (let t = 0; t < this.p.length; t++) {
            let e = this.p[t];
            this.dialCodes[e.dialCode] || (this.dialCodes[e.dialCode] = !0),
              this._c(e.iso2, e.dialCode, e.priority);
          }
          for (let t = 0; t < this.p.length; t++) {
            let e = this.p[t];
            if (e.areaCodes) {
              let i = this.q[e.dialCode][0];
              for (let n = 0; n < e.areaCodes.length; n++) {
                let s = e.areaCodes[n];
                for (let r = 1; r < s.length; r++) {
                  let d = e.dialCode + s.substr(0, r);
                  this._c(i, d), this._c(e.iso2, d);
                }
                this._c(e.iso2, e.dialCode + s);
              }
            }
          }
        }
        _e() {
          this.preferredCountries = [];
          for (let t = 0; t < this.d.preferredCountries.length; t++) {
            let e = this.d.preferredCountries[t].toLowerCase(),
              i = this._y(e, !0);
            i && this.preferredCountries.push(i);
          }
        }
        _f() {
          this.a.classList.add("iti__tel-input"),
            !this.a.hasAttribute("autocomplete") &&
              !(this.a.form && this.a.form.hasAttribute("autocomplete")) &&
              this.a.setAttribute("autocomplete", "off");
          let {
              allowDropdown: t,
              showSelectedDialCode: e,
              showFlags: i,
              containerClass: n,
              hiddenInput: s,
              dropdownContainer: r,
              fixDropdownWidth: d,
              useFullscreenPopup: l,
              countrySearch: a,
              i18n: p,
            } = this.d,
            c = "iti";
          t && (c += " iti--allow-dropdown"),
            e && (c += " iti--show-selected-dial-code"),
            i && (c += " iti--show-flags"),
            n && (c += ` ${n}`),
            l || (c += " iti--inline-dropdown");
          let u = h("div", { class: c });
          if (
            (this.a.parentNode?.insertBefore(u, this.a),
            (i || e) &&
              ((this.k = h("div", { class: "iti__country-container" }, u)),
              (this.selectedCountry = h(
                "button",
                {
                  type: "button",
                  class: "iti__selected-country",
                  ...(t && {
                    "aria-expanded": "false",
                    "aria-label": this.d.i18n.selectedCountryAriaLabel,
                    "aria-haspopup": a ? "true" : "listbox",
                    "aria-controls": a
                      ? `iti-${this.id}__dropdown-content`
                      : `iti-${this.id}__country-listbox`,
                    ...(a ? { role: "combobox" } : {}),
                  }),
                },
                this.k
              )),
              (this.l = h("div", null, this.selectedCountry)),
              (this.selectedCountryA11yText = h(
                "span",
                { class: "iti__a11y-text" },
                this.l
              ))),
            u.appendChild(this.a),
            this.selectedCountry &&
              this.a.disabled &&
              this.selectedCountry.setAttribute("aria-disabled", "true"),
            e &&
              (this.t = h(
                "div",
                { class: "iti__selected-dial-code" },
                this.selectedCountry
              )),
            t)
          ) {
            this.a.disabled ||
              this.selectedCountry.setAttribute("tabindex", "0"),
              (this.u = h(
                "div",
                { class: "iti__arrow", "aria-hidden": "true" },
                this.selectedCountry
              ));
            let m = d ? "" : "iti--flexible-dropdown-width";
            if (
              ((this.dropdownContent = h("div", {
                id: `iti-${this.id}__dropdown-content`,
                class: `iti__dropdown-content iti__hide ${m}`,
              })),
              a &&
                ((this.searchInput = h(
                  "input",
                  {
                    type: "text",
                    class: "iti__search-input",
                    placeholder: p.searchPlaceholder,
                    role: "combobox",
                    "aria-expanded": "true",
                    "aria-label": p.searchPlaceholder,
                    "aria-controls": `iti-${this.id}__country-listbox`,
                    "aria-autocomplete": "list",
                    autocomplete: "off",
                  },
                  this.dropdownContent
                )),
                (this.searchResultsA11yText = h(
                  "span",
                  { class: "iti__a11y-text" },
                  this.dropdownContent
                ))),
              (this.countryList = h(
                "ul",
                {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  "aria-label": p.countryListAriaLabel,
                },
                this.dropdownContent
              )),
              this.preferredCountries.length &&
                !a &&
                (this._g(this.preferredCountries, "iti__preferred", !0),
                h(
                  "li",
                  { class: "iti__divider", "aria-hidden": "true" },
                  this.countryList
                )),
              this._g(this.p, "iti__standard"),
              a && this._p4(),
              r)
            ) {
              let g = "iti iti--container";
              l
                ? (g += " iti--fullscreen-popup")
                : (g += " iti--inline-dropdown"),
                a && (g += " iti--country-search"),
                (this.dropdown = h("div", { class: g })),
                this.dropdown.appendChild(this.dropdownContent);
            } else this.k.appendChild(this.dropdownContent);
          }
          if (s) {
            let m = this.a.getAttribute("name") || "",
              g = s(m);
            g.phone &&
              ((this.hiddenInput = h("input", {
                type: "hidden",
                name: g.phone,
              })),
              u.appendChild(this.hiddenInput)),
              g.country &&
                ((this.hiddenInputCountry = h("input", {
                  type: "hidden",
                  name: g.country,
                })),
                u.appendChild(this.hiddenInputCountry));
          }
        }
        _g(t, e, i) {
          for (let n = 0; n < t.length; n++) {
            let s = t[n],
              r = i ? "-preferred" : "",
              d = h(
                "li",
                {
                  id: `iti-${this.id}__item-${s.iso2}${r}`,
                  class: `iti__country ${e}`,
                  tabindex: "-1",
                  role: "option",
                  "data-dial-code": s.dialCode,
                  "data-country-code": s.iso2,
                  "aria-selected": "false",
                },
                this.countryList
              );
            s.nodeById[this.id] = d;
            let l = "";
            this.d.showFlags &&
              (l += `<div class='iti__flag-box'><div class='iti__flag iti__${s.iso2}'></div></div>`),
              (l += `<span class='iti__country-name'>${s.name}</span>`),
              (l += `<span class='iti__dial-code'>+${s.dialCode}</span>`),
              d.insertAdjacentHTML("beforeend", l);
          }
        }
        _h(t = !1) {
          let e = this.a.getAttribute("value"),
            i = this.a.value,
            s = e && e.charAt(0) === "+" && (!i || i.charAt(0) !== "+") ? e : i,
            r = this._5(s),
            d = S(s),
            { initialCountry: l } = this.d;
          if (r && !d) this._v(s);
          else if (l !== "auto" || t) {
            let a = l ? l.toLowerCase() : "";
            a && this._y(a, !0)
              ? this._z(a)
              : r && d
              ? this._z("us")
              : this._z();
          }
          s && this._u(s);
        }
        _i() {
          this._j(),
            this.d.allowDropdown && this._i2(),
            (this.hiddenInput || this.hiddenInputCountry) &&
              this.a.form &&
              this._i0();
        }
        _i0() {
          (this._a14 = () => {
            this.hiddenInput && (this.hiddenInput.value = this.getNumber()),
              this.hiddenInputCountry &&
                (this.hiddenInputCountry.value =
                  this.getSelectedCountryData().iso2 || "");
          }),
            this.a.form?.addEventListener("submit", this._a14);
        }
        _i2() {
          this._a9 = (e) => {
            this.dropdownContent.classList.contains("iti__hide")
              ? this.a.focus()
              : e.preventDefault();
          };
          let t = this.a.closest("label");
          t && t.addEventListener("click", this._a9),
            (this._a10 = () => {
              this.dropdownContent.classList.contains("iti__hide") &&
                !this.a.disabled &&
                !this.a.readOnly &&
                this._n();
            }),
            this.selectedCountry.addEventListener("click", this._a10),
            (this._a11 = (e) => {
              this.dropdownContent.classList.contains("iti__hide") &&
                ["ArrowUp", "ArrowDown", " ", "Enter"].includes(e.key) &&
                (e.preventDefault(), e.stopPropagation(), this._n()),
                e.key === "Tab" && this._2();
            }),
            this.k.addEventListener("keydown", this._a11);
        }
        _i3() {
          this.d.utilsScript && !window.intlTelInputUtils
            ? window.intlTelInputGlobals.documentReady()
              ? window.intlTelInputGlobals.loadUtils(this.d.utilsScript)
              : window.addEventListener("load", () => {
                  window.intlTelInputGlobals.loadUtils(this.d.utilsScript);
                })
            : this.i0(),
            this.d.initialCountry === "auto" && !this.s.iso2
              ? this._i4()
              : this.h();
        }
        _i4() {
          window.intlTelInputGlobals.autoCountry
            ? this.handleAutoCountry()
            : window.intlTelInputGlobals.startedLoadingAutoCountry ||
              ((window.intlTelInputGlobals.startedLoadingAutoCountry = !0),
              typeof this.d.geoIpLookup == "function" &&
                this.d.geoIpLookup(
                  (t = "") => {
                    let e = t.toLowerCase();
                    e && this._y(e, !0)
                      ? ((window.intlTelInputGlobals.autoCountry = e),
                        setTimeout(() => y("handleAutoCountry")))
                      : (this._h(!0), y("rejectAutoCountryPromise"));
                  },
                  () => {
                    this._h(!0), y("rejectAutoCountryPromise");
                  }
                ));
        }
        _j() {
          let { strictMode: t, formatAsYouType: e } = this.d,
            i = !1;
          (this._a12 = (n) => {
            this._v(this.a.value) && this._8();
            let s = n && n.data && /[^+0-9]/.test(n.data),
              r = n && n.inputType === "insertFromPaste" && this.a.value;
            if (
              (s || (r && !t)
                ? (i = !0)
                : /[^+0-9]/.test(this.a.value) || (i = !1),
              e && !i)
            ) {
              let d = this.a.selectionStart || 0,
                a = this.a.value.substring(0, d).replace(/[^+0-9]/g, "").length,
                p = n && n.inputType === "deleteContentForward",
                c = this._9(),
                u = R(a, c, d, p);
              (this.a.value = c), this.a.setSelectionRange(u, u);
            }
          }),
            this.a.addEventListener("input", this._a12),
            t &&
              ((this._handleKeydownEvent = (n) => {
                if (
                  n.key.length === 1 &&
                  !n.altKey &&
                  !n.ctrlKey &&
                  !n.metaKey
                ) {
                  let s = this.a.selectionStart === 0 && n.key === "+",
                    r = /^[0-9]$/.test(n.key),
                    d = s || r,
                    l = this._6(),
                    a = window.intlTelInputUtils.getCoreNumber(l, this.s.iso2),
                    p =
                      this.maxCoreNumberLength &&
                      a.length >= this.maxCoreNumberLength;
                  (!d || p) && n.preventDefault();
                }
              }),
              this.a.addEventListener("keydown", this._handleKeydownEvent));
        }
        _j2(t) {
          let e = parseInt(this.a.getAttribute("maxlength") || "", 10);
          return e && t.length > e ? t.substr(0, e) : t;
        }
        _trigger(t) {
          let e = new Event(t, { bubbles: !0, cancelable: !0 });
          this.a.dispatchEvent(e);
        }
        _n() {
          let { fixDropdownWidth: t, countrySearch: e } = this.d;
          if (
            (t &&
              (this.dropdownContent.style.width = `${this.a.offsetWidth}px`),
            this.dropdownContent.classList.remove("iti__hide"),
            this.selectedCountry.setAttribute("aria-expanded", "true"),
            this._o(),
            this.b && !e)
          )
            this._x(this.b, !1), this._3(this.b, !0);
          else {
            let i = this.countryList.firstElementChild;
            i && (this._x(i, !1), (this.countryList.scrollTop = 0)),
              e && this.searchInput.focus();
          }
          this._p(),
            this.u.classList.add("iti__arrow--up"),
            this._trigger("open:countrydropdown");
        }
        _o() {
          if (
            (this.d.dropdownContainer &&
              this.d.dropdownContainer.appendChild(this.dropdown),
            !this.d.useFullscreenPopup)
          ) {
            let t = this.a.getBoundingClientRect(),
              e = document.documentElement.scrollTop,
              i = t.top + e,
              n = this.a.offsetHeight,
              s = this.dropdownContent.offsetHeight,
              r = i + n + s < e + window.innerHeight,
              d = i - s > e,
              l = !this.d.countrySearch && !r && d;
            if (
              (F(this.dropdownContent, "iti__dropdown-content--dropup", l),
              this.d.dropdownContainer)
            ) {
              let a = l ? 0 : n;
              (this.dropdown.style.top = `${t.top + a}px`),
                (this.dropdown.style.left = `${t.left}px`),
                (this._a4 = () => this._2()),
                window.addEventListener("scroll", this._a4);
            }
          }
        }
        _p() {
          (this._a0 = (n) => {
            let s = n.target?.closest(".iti__country");
            s && this._x(s, !1);
          }),
            this.countryList.addEventListener("mouseover", this._a0),
            (this._a1 = (n) => {
              let s = n.target?.closest(".iti__country");
              s && this._1(s);
            }),
            this.countryList.addEventListener("click", this._a1);
          let t = !0;
          (this._a2 = () => {
            t || this._2(), (t = !1);
          }),
            document.documentElement.addEventListener("click", this._a2);
          let e = "",
            i = null;
          if (
            ((this._a3 = (n) => {
              ["ArrowUp", "ArrowDown", "Enter", "Escape"].includes(n.key) &&
                (n.preventDefault(),
                n.stopPropagation(),
                n.key === "ArrowUp" || n.key === "ArrowDown"
                  ? this._q(n.key)
                  : n.key === "Enter"
                  ? this._r()
                  : n.key === "Escape" && this._2()),
                !this.d.countrySearch &&
                  /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(n.key) &&
                  (n.stopPropagation(),
                  i && clearTimeout(i),
                  (e += n.key.toLowerCase()),
                  this._s(e),
                  (i = setTimeout(() => {
                    e = "";
                  }, 1e3)));
            }),
            document.addEventListener("keydown", this._a3),
            this.d.countrySearch)
          ) {
            let n = () => {
                let r = this.searchInput.value.trim();
                r ? this._p3(r) : this._p3("", !0);
              },
              s = null;
            (this._a7 = () => {
              s && clearTimeout(s),
                (s = setTimeout(() => {
                  n(), (s = null);
                }, 100));
            }),
              this.searchInput.addEventListener("input", this._a7),
              this.searchInput.addEventListener("click", (r) =>
                r.stopPropagation()
              );
          }
        }
        _p3(t, e = !1) {
          let i = !0;
          this.countryList.innerHTML = "";
          let n = E(t);
          for (let s = 0; s < this.p.length; s++) {
            let r = this.p[s],
              d = E(r.name),
              l = `+${r.dialCode}`;
            if (e || d.includes(n) || l.includes(n) || r.iso2.includes(n)) {
              let a = r.nodeById[this.id];
              a && this.countryList.appendChild(a),
                i && (this._x(a, !1), (i = !1));
            }
          }
          (this.countryList.scrollTop = 0), this._p4();
        }
        _p4() {
          let { i18n: t } = this.d,
            e = this.countryList.childElementCount,
            i;
          e === 0
            ? (i = t.zeroSearchResults)
            : e === 1
            ? (i = t.oneSearchResult)
            : (i = t.multipleSearchResults.replace("${count}", e.toString())),
            (this.searchResultsA11yText.textContent = i);
        }
        _q(t) {
          let e =
            t === "ArrowUp"
              ? this.c?.previousElementSibling
              : this.c?.nextElementSibling;
          if (
            (e
              ? e.classList.contains("iti__divider") &&
                (e =
                  t === "ArrowUp"
                    ? e.previousElementSibling
                    : e.nextElementSibling)
              : this.countryList.childElementCount > 1 &&
                (e =
                  t === "ArrowUp"
                    ? this.countryList.lastElementChild
                    : this.countryList.firstElementChild),
            e)
          ) {
            this._3(e, !1);
            let i = !this.d.countrySearch;
            this._x(e, i);
          }
        }
        _r() {
          this.c && this._1(this.c);
        }
        _s(t) {
          for (let e = 0; e < this.p.length; e++) {
            let i = this.p[e];
            if (i.name.substr(0, t.length).toLowerCase() === t) {
              let s = i.nodeById[this.id];
              this._x(s, !1), this._3(s, !0);
              break;
            }
          }
        }
        _u(t) {
          let e = t;
          if (this.d.formatOnDisplay && window.intlTelInputUtils && this.s) {
            let i =
                this.d.nationalMode ||
                (e.charAt(0) !== "+" && !this.d.showSelectedDialCode),
              { NATIONAL: n, INTERNATIONAL: s } =
                window.intlTelInputUtils.numberFormat,
              r = i ? n : s;
            e = window.intlTelInputUtils.formatNumber(e, this.s.iso2, r);
          }
          (e = this._7(e)), (this.a.value = e);
        }
        _v(t) {
          let e = t.indexOf("+"),
            i = e ? t.substring(e) : t,
            n = this.s.dialCode;
          i &&
            n === "1" &&
            i.charAt(0) !== "+" &&
            (i.charAt(0) !== "1" && (i = `1${i}`), (i = `+${i}`)),
            this.d.showSelectedDialCode &&
              n &&
              i.charAt(0) !== "+" &&
              (i = `+${n}${i}`);
          let r = this._5(i, !0),
            d = f(i),
            l = null;
          if (r) {
            let a = this.q[f(r)],
              p = a.indexOf(this.s.iso2) !== -1 && d.length <= r.length - 1;
            if (!(n === "1" && S(d)) && !p) {
              for (let u = 0; u < a.length; u++)
                if (a[u]) {
                  l = a[u];
                  break;
                }
            }
          } else
            i.charAt(0) === "+" && d.length
              ? (l = "")
              : (!i || i === "+") && !this.s.iso2 && (l = this.j);
          return l !== null ? this._z(l) : !1;
        }
        _x(t, e) {
          let i = this.c;
          i &&
            (i.classList.remove("iti__highlight"),
            i.setAttribute("aria-selected", "false")),
            (this.c = t),
            this.c.classList.add("iti__highlight"),
            this.c.setAttribute("aria-selected", "true"),
            this.selectedCountry.setAttribute(
              "aria-activedescendant",
              t.getAttribute("id") || ""
            ),
            this.d.countrySearch &&
              this.searchInput.setAttribute(
                "aria-activedescendant",
                t.getAttribute("id") || ""
              ),
            e && this.c.focus();
        }
        _y(t, e) {
          for (let i = 0; i < this.p.length; i++)
            if (this.p[i].iso2 === t) return this.p[i];
          if (e) return null;
          throw new Error(`No country data for '${t}'`);
        }
        _z(t) {
          let {
              allowDropdown: e,
              showSelectedDialCode: i,
              showFlags: n,
              countrySearch: s,
              i18n: r,
            } = this.d,
            d = this.s.iso2 ? this.s : {};
          if (
            ((this.s = t ? this._y(t, !1) || {} : {}),
            this.s.iso2 && (this.j = this.s.iso2),
            this.l)
          ) {
            let l = "",
              a = "";
            t
              ? n &&
                ((l = `iti__flag iti__${t}`),
                (a = `${this.s.name} +${this.s.dialCode}`))
              : ((l = "iti__flag iti__globe"), (a = r.noCountrySelected)),
              (this.l.className = l),
              (this.selectedCountryA11yText.textContent = a);
          }
          if ((this._z3(t, i), i)) {
            let l = this.s.dialCode ? `+${this.s.dialCode}` : "";
            this.t.innerHTML = l;
            let a = this.selectedCountry.offsetWidth || this._z2();
            this.isRTL
              ? (this.a.style.paddingRight = `${a + 6}px`)
              : (this.a.style.paddingLeft = `${a + 6}px`);
          }
          if ((this._0(), this._updateMaxLength(), e && !s)) {
            let l = this.b;
            if (
              (l &&
                (l.classList.remove("iti__active"),
                l.setAttribute("aria-selected", "false")),
              t)
            ) {
              let a =
                this.countryList.querySelector(
                  `#iti-${this.id}__item-${t}-preferred`
                ) ||
                this.countryList.querySelector(`#iti-${this.id}__item-${t}`);
              a &&
                (a.setAttribute("aria-selected", "true"),
                a.classList.add("iti__active"),
                (this.b = a));
            }
          }
          return d.iso2 !== t;
        }
        _updateMaxLength() {
          if (this.d.strictMode && window.intlTelInputUtils)
            if (this.s.iso2) {
              let t =
                  window.intlTelInputUtils.numberType[
                    this.d.placeholderNumberType
                  ],
                e = window.intlTelInputUtils.getExampleNumber(
                  this.s.iso2,
                  !1,
                  t,
                  !0
                ),
                i = e;
              for (
                ;
                window.intlTelInputUtils.isPossibleNumber(e, this.s.iso2);

              )
                (i = e), (e += "0");
              let n = window.intlTelInputUtils.getCoreNumber(i, this.s.iso2);
              this.maxCoreNumberLength = n.length;
            } else this.maxCoreNumberLength = null;
        }
        _z3(t = null, e) {
          if (!this.selectedCountry) return;
          let i;
          t && !e
            ? (i = `${this.s.name}: +${this.s.dialCode}`)
            : t
            ? (i = this.s.name)
            : (i = "Unknown"),
            this.selectedCountry.setAttribute("title", i);
        }
        _z2() {
          if (this.a.parentNode) {
            let t = this.a.parentNode.cloneNode(!1);
            (t.style.visibility = "hidden"), document.body.appendChild(t);
            let e = this.k.cloneNode();
            t.appendChild(e);
            let i = this.selectedCountry.cloneNode(!0);
            e.appendChild(i);
            let n = i.offsetWidth;
            return document.body.removeChild(t), n;
          }
          return 0;
        }
        _0() {
          let {
              autoPlaceholder: t,
              placeholderNumberType: e,
              nationalMode: i,
              customPlaceholder: n,
            } = this.d,
            s = t === "aggressive" || (!this.e && t === "polite");
          if (window.intlTelInputUtils && s) {
            let r = window.intlTelInputUtils.numberType[e],
              d = this.s.iso2
                ? window.intlTelInputUtils.getExampleNumber(this.s.iso2, i, r)
                : "";
            (d = this._7(d)),
              typeof n == "function" && (d = n(d, this.s)),
              this.a.setAttribute("placeholder", d);
          }
        }
        _1(t) {
          let e = this._z(t.getAttribute("data-country-code"));
          this._2(),
            this._4(t.getAttribute("data-dial-code")),
            this.a.focus(),
            e && this._8();
        }
        _2() {
          this.dropdownContent.classList.add("iti__hide"),
            this.selectedCountry.setAttribute("aria-expanded", "false"),
            this.selectedCountry.removeAttribute("aria-activedescendant"),
            this.c && this.c.setAttribute("aria-selected", "false"),
            this.d.countrySearch &&
              this.searchInput.removeAttribute("aria-activedescendant"),
            this.u.classList.remove("iti__arrow--up"),
            document.removeEventListener("keydown", this._a3),
            this.d.countrySearch &&
              this.searchInput.removeEventListener("input", this._a7),
            document.documentElement.removeEventListener("click", this._a2),
            this.countryList.removeEventListener("mouseover", this._a0),
            this.countryList.removeEventListener("click", this._a1),
            this.d.dropdownContainer &&
              (this.d.useFullscreenPopup ||
                window.removeEventListener("scroll", this._a4),
              this.dropdown.parentNode &&
                this.dropdown.parentNode.removeChild(this.dropdown)),
            this._trigger("close:countrydropdown");
        }
        _3(t, e) {
          let i = this.countryList,
            n = document.documentElement.scrollTop,
            s = i.offsetHeight,
            r = i.getBoundingClientRect().top + n,
            d = r + s,
            l = t.offsetHeight,
            a = t.getBoundingClientRect().top + n,
            p = a + l,
            c = a - r + i.scrollTop,
            u = s / 2 - l / 2;
          if (a < r) e && (c -= u), (i.scrollTop = c);
          else if (p > d) {
            e && (c += u);
            let m = s - l;
            i.scrollTop = c - m;
          }
        }
        _4(t) {
          let e = this.a.value,
            i = `+${t}`,
            n;
          if (e.charAt(0) === "+") {
            let s = this._5(e);
            s ? (n = e.replace(s, i)) : (n = i), (this.a.value = n);
          }
        }
        _5(t, e) {
          let i = "";
          if (t.charAt(0) === "+") {
            let n = "";
            for (let s = 0; s < t.length; s++) {
              let r = t.charAt(s);
              if (!isNaN(parseInt(r, 10))) {
                if (((n += r), e)) this.q[n] && (i = t.substr(0, s + 1));
                else if (this.dialCodes[n]) {
                  i = t.substr(0, s + 1);
                  break;
                }
                if (n.length === this.dialCodeMaxLen) break;
              }
            }
          }
          return i;
        }
        _6() {
          let t = this.a.value.trim(),
            { dialCode: e } = this.s,
            i,
            n = f(t);
          return (
            this.d.showSelectedDialCode &&
            !this.d.nationalMode &&
            t.charAt(0) !== "+" &&
            e &&
            n
              ? (i = `+${e}`)
              : (i = ""),
            i + t
          );
        }
        _7(t) {
          let e = t;
          if (this.d.showSelectedDialCode) {
            let i = this._5(e);
            if (i) {
              i = `+${this.s.dialCode}`;
              let n =
                e[i.length] === " " || e[i.length] === "-"
                  ? i.length + 1
                  : i.length;
              e = e.substr(n);
            }
          }
          return this._j2(e);
        }
        _8() {
          this._trigger("countrychange");
        }
        _9() {
          let t = this._6(),
            e = window.intlTelInputUtils
              ? window.intlTelInputUtils.formatNumberAsYouType(t, this.s.iso2)
              : t,
            { dialCode: i } = this.s;
          return this.d.showSelectedDialCode &&
            !this.d.nationalMode &&
            this.a.value.charAt(0) !== "+" &&
            e.includes(`+${i}`)
            ? (e.split(`+${i}`)[1] || "").trim()
            : e;
        }
        handleAutoCountry() {
          this.d.initialCountry === "auto" &&
            window.intlTelInputGlobals.autoCountry &&
            ((this.j = window.intlTelInputGlobals.autoCountry),
            this.a.value || this.setCountry(this.j),
            this.h());
        }
        handleUtils() {
          window.intlTelInputUtils &&
            (this.a.value && this._u(this.a.value),
            this.s.iso2 && (this._0(), this._updateMaxLength())),
            this.i0();
        }
        destroy() {
          if (this.d.allowDropdown) {
            this._2(),
              this.selectedCountry.removeEventListener("click", this._a10),
              this.k.removeEventListener("keydown", this._a11);
            let i = this.a.closest("label");
            i && i.removeEventListener("click", this._a9);
          }
          let { form: t } = this.a;
          this._a14 && t && t.removeEventListener("submit", this._a14),
            this.a.removeEventListener("input", this._a12),
            this._handleKeydownEvent &&
              this.a.removeEventListener("keydown", this._handleKeydownEvent),
            this.a.removeAttribute("data-intl-tel-input-id");
          let e = this.a.parentNode;
          e?.parentNode?.insertBefore(this.a, e),
            e?.parentNode?.removeChild(e),
            delete window.intlTelInputGlobals.instances[this.id];
        }
        getExtension() {
          return window.intlTelInputUtils
            ? window.intlTelInputUtils.getExtension(this._6(), this.s.iso2)
            : "";
        }
        getNumber(t) {
          if (window.intlTelInputUtils) {
            let { iso2: e } = this.s;
            return window.intlTelInputUtils.formatNumber(this._6(), e, t);
          }
          return "";
        }
        getNumberType() {
          return window.intlTelInputUtils
            ? window.intlTelInputUtils.getNumberType(this._6(), this.s.iso2)
            : -99;
        }
        getSelectedCountryData() {
          return this.s;
        }
        getValidationError() {
          if (window.intlTelInputUtils) {
            let { iso2: t } = this.s;
            return window.intlTelInputUtils.getValidationError(this._6(), t);
          }
          return -99;
        }
        isValidNumber(t = !0) {
          let e = this._6();
          return /\p{L}/u.test(e)
            ? !1
            : window.intlTelInputUtils
            ? window.intlTelInputUtils.isPossibleNumber(e, this.s.iso2, t)
            : null;
        }
        isValidNumberPrecise() {
          let t = this._6();
          return /\p{L}/u.test(t)
            ? !1
            : window.intlTelInputUtils
            ? window.intlTelInputUtils.isValidNumber(t, this.s.iso2)
            : null;
        }
        setCountry(t) {
          let e = t.toLowerCase();
          this.s.iso2 !== e &&
            (this._z(e), this._4(this.s.dialCode), this._8());
        }
        setNumber(t) {
          let e = this._v(t);
          this._u(t), e && this._8();
        }
        setPlaceholderNumberType(t) {
          (this.d.placeholderNumberType = t), this._0();
        }
      },
      O = (o, t, e) => {
        let i = document.createElement("script");
        (i.onload = () => {
          y("handleUtils"), t && t();
        }),
          (i.onerror = () => {
            y("rejectUtilsScriptPromise"), e && e();
          }),
          (i.className = "iti-load-utils"),
          (i.async = !0),
          (i.src = o),
          document.body.appendChild(i);
      },
      j = (o) =>
        !window.intlTelInputUtils &&
        !window.intlTelInputGlobals.startedLoadingUtilsScript
          ? ((window.intlTelInputGlobals.startedLoadingUtilsScript = !0),
            new Promise((t, e) => O(o, t, e)))
          : null;
    if (typeof window == "object" && !window.intlTelInputGlobals) {
      let o = {
        defaults: D,
        documentReady: () => document.readyState === "complete",
        getCountryData: () => C,
        getInstance: (t) => {
          let e = t.getAttribute("data-intl-tel-input-id");
          return e ? o.instances[e] : null;
        },
        instances: {},
        loadUtils: j,
        version: "21.2.5",
      };
      window.intlTelInputGlobals = o;
    }
    var B = (o, t) => {
        let e = new b(o, t);
        return (
          e._init(),
          o.setAttribute("data-intl-tel-input-id", e.id.toString()),
          (window.intlTelInputGlobals.instances[e.id] = e),
          e
        );
      },
      $ = B;
    return P(G);
  })();

  // UMD
  return factoryOutput.default;
});

window.intlTelInput(input, {
  initialCountry: "us",
  strictMode: true,
});
