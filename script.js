console.log("Hello, world!");

// data taken from https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json
countryCodes = {
  en: [
    { code: "AF", name: "Afghanistan" },
    { code: "AX", name: "\u00c5land Islands" },
    { code: "AL", name: "Albania" },
    { code: "DZ", name: "Algeria" },
    { code: "AS", name: "American Samoa" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AI", name: "Anguilla" },
    { code: "AQ", name: "Antarctica" },
    { code: "AG", name: "Antigua and Barbuda" },
    { code: "AR", name: "Argentina" },
    { code: "AM", name: "Armenia" },
    { code: "AW", name: "Aruba" },
    { code: "AU", name: "Australia" },
    { code: "AT", name: "Austria" },
    { code: "AZ", name: "Azerbaijan" },
    { code: "BS", name: "Bahamas" },
    { code: "BH", name: "Bahrain" },
    { code: "BD", name: "Bangladesh" },
    { code: "BB", name: "Barbados" },
    { code: "BY", name: "Belarus" },
    { code: "BE", name: "Belgium" },
    { code: "BZ", name: "Belize" },
    { code: "BJ", name: "Benin" },
    { code: "BM", name: "Bermuda" },
    { code: "BT", name: "Bhutan" },
    { code: "BO", name: "Bolivia, Plurinational State of" },
    { code: "BQ", name: "Bonaire, Sint Eustatius and Saba" },
    { code: "BA", name: "Bosnia and Herzegovina" },
    { code: "BW", name: "Botswana" },
    { code: "BV", name: "Bouvet Island" },
    { code: "BR", name: "Brazil" },
    { code: "IO", name: "British Indian Ocean Territory" },
    { code: "BN", name: "Brunei Darussalam" },
    { code: "BG", name: "Bulgaria" },
    { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" },
    { code: "KH", name: "Cambodia" },
    { code: "CM", name: "Cameroon" },
    { code: "CA", name: "Canada" },
    { code: "CV", name: "Cape Verde" },
    { code: "KY", name: "Cayman Islands" },
    { code: "CF", name: "Central African Republic" },
    { code: "TD", name: "Chad" },
    { code: "CL", name: "Chile" },
    { code: "CN", name: "China" },
    { code: "CX", name: "Christmas Island" },
    { code: "CC", name: "Cocos (Keeling) Islands" },
    { code: "CO", name: "Colombia" },
    { code: "KM", name: "Comoros" },
    { code: "CG", name: "Congo" },
    { code: "CD", name: "Congo, the Democratic Republic of the" },
    { code: "CK", name: "Cook Islands" },
    { code: "CR", name: "Costa Rica" },
    { code: "CI", name: "C\u00f4te d'Ivoire" },
    { code: "HR", name: "Croatia" },
    { code: "CU", name: "Cuba" },
    { code: "CW", name: "Cura\u00e7ao" },
    { code: "CY", name: "Cyprus" },
    { code: "CZ", name: "Czech Republic" },
    { code: "DK", name: "Denmark" },
    { code: "DJ", name: "Djibouti" },
    { code: "DM", name: "Dominica" },
    { code: "DO", name: "Dominican Republic" },
    { code: "EC", name: "Ecuador" },
    { code: "EG", name: "Egypt" },
    { code: "SV", name: "El Salvador" },
    { code: "GQ", name: "Equatorial Guinea" },
    { code: "ER", name: "Eritrea" },
    { code: "EE", name: "Estonia" },
    { code: "ET", name: "Ethiopia" },
    { code: "FK", name: "Falkland Islands (Malvinas)" },
    { code: "FO", name: "Faroe Islands" },
    { code: "FJ", name: "Fiji" },
    { code: "FI", name: "Finland" },
    { code: "FR", name: "France" },
    { code: "GF", name: "French Guiana" },
    { code: "PF", name: "French Polynesia" },
    { code: "TF", name: "French Southern Territories" },
    { code: "GA", name: "Gabon" },
    { code: "GM", name: "Gambia" },
    { code: "GE", name: "Georgia" },
    { code: "DE", name: "Germany" },
    { code: "GH", name: "Ghana" },
    { code: "GI", name: "Gibraltar" },
    { code: "GR", name: "Greece" },
    { code: "GL", name: "Greenland" },
    { code: "GD", name: "Grenada" },
    { code: "GP", name: "Guadeloupe" },
    { code: "GU", name: "Guam" },
    { code: "GT", name: "Guatemala" },
    { code: "GG", name: "Guernsey" },
    { code: "GN", name: "Guinea" },
    { code: "GW", name: "Guinea-Bissau" },
    { code: "GY", name: "Guyana" },
    { code: "HT", name: "Haiti" },
    { code: "HM", name: "Heard Island and McDonald Islands" },
    { code: "VA", name: "Holy See (Vatican City State)" },
    { code: "HN", name: "Honduras" },
    { code: "HK", name: "Hong Kong" },
    { code: "HU", name: "Hungary" },
    { code: "IS", name: "Iceland" },
    { code: "IN", name: "India" },
    { code: "ID", name: "Indonesia" },
    { code: "IR", name: "Iran, Islamic Republic of" },
    { code: "IQ", name: "Iraq" },
    { code: "IE", name: "Ireland" },
    { code: "IM", name: "Isle of Man" },
    { code: "IL", name: "Israel" },
    { code: "IT", name: "Italy" },
    { code: "JM", name: "Jamaica" },
    { code: "JP", name: "Japan" },
    { code: "JE", name: "Jersey" },
    { code: "JO", name: "Jordan" },
    { code: "KZ", name: "Kazakhstan" },
    { code: "KE", name: "Kenya" },
    { code: "KI", name: "Kiribati" },
    { code: "KP", name: "Korea, Democratic People's Republic of" },
    { code: "KR", name: "Korea, Republic of" },
    { code: "KW", name: "Kuwait" },
    { code: "KG", name: "Kyrgyzstan" },
    { code: "LA", name: "Lao People's Democratic Republic" },
    { code: "LV", name: "Latvia" },
    { code: "LB", name: "Lebanon" },
    { code: "LS", name: "Lesotho" },
    { code: "LR", name: "Liberia" },
    { code: "LY", name: "Libya" },
    { code: "LI", name: "Liechtenstein" },
    { code: "LT", name: "Lithuania" },
    { code: "LU", name: "Luxembourg" },
    { code: "MO", name: "Macao" },
    { code: "MK", name: "Macedonia, the Former Yugoslav Republic of" },
    { code: "MG", name: "Madagascar" },
    { code: "MW", name: "Malawi" },
    { code: "MY", name: "Malaysia" },
    { code: "MV", name: "Maldives" },
    { code: "ML", name: "Mali" },
    { code: "MT", name: "Malta" },
    { code: "MH", name: "Marshall Islands" },
    { code: "MQ", name: "Martinique" },
    { code: "MR", name: "Mauritania" },
    { code: "MU", name: "Mauritius" },
    { code: "YT", name: "Mayotte" },
    { code: "MX", name: "Mexico" },
    { code: "FM", name: "Micronesia, Federated States of" },
    { code: "MD", name: "Moldova, Republic of" },
    { code: "MC", name: "Monaco" },
    { code: "MN", name: "Mongolia" },
    { code: "ME", name: "Montenegro" },
    { code: "MS", name: "Montserrat" },
    { code: "MA", name: "Morocco" },
    { code: "MZ", name: "Mozambique" },
    { code: "MM", name: "Myanmar" },
    { code: "NA", name: "Namibia" },
    { code: "NR", name: "Nauru" },
    { code: "NP", name: "Nepal" },
    { code: "NL", name: "Netherlands" },
    { code: "NC", name: "New Caledonia" },
    { code: "NZ", name: "New Zealand" },
    { code: "NI", name: "Nicaragua" },
    { code: "NE", name: "Niger" },
    { code: "NG", name: "Nigeria" },
    { code: "NU", name: "Niue" },
    { code: "NF", name: "Norfolk Island" },
    { code: "MP", name: "Northern Mariana Islands" },
    { code: "NO", name: "Norway" },
    { code: "OM", name: "Oman" },
    { code: "PK", name: "Pakistan" },
    { code: "PW", name: "Palau" },
    { code: "PS", name: "Palestine, State of" },
    { code: "PA", name: "Panama" },
    { code: "PG", name: "Papua New Guinea" },
    { code: "PY", name: "Paraguay" },
    { code: "PE", name: "Peru" },
    { code: "PH", name: "Philippines" },
    { code: "PN", name: "Pitcairn" },
    { code: "PL", name: "Poland" },
    { code: "PT", name: "Portugal" },
    { code: "PR", name: "Puerto Rico" },
    { code: "QA", name: "Qatar" },
    { code: "RE", name: "R\u00e9union" },
    { code: "RO", name: "Romania" },
    { code: "RU", name: "Russian Federation" },
    { code: "RW", name: "Rwanda" },
    { code: "BL", name: "Saint Barth\u00e9lemy" },
    { code: "SH", name: "Saint Helena, Ascension and Tristan da Cunha" },
    { code: "KN", name: "Saint Kitts and Nevis" },
    { code: "LC", name: "Saint Lucia" },
    { code: "PM", name: "Saint Pierre and Miquelon" },
    { code: "VC", name: "Saint Vincent and the Grenadines" },
    { code: "WS", name: "Samoa" },
    { code: "SM", name: "San Marino" },
    { code: "ST", name: "Sao Tome and Principe" },
    { code: "SA", name: "Saudi Arabia" },
    { code: "SN", name: "Senegal" },
    { code: "RS", name: "Serbia" },
    { code: "SC", name: "Seychelles" },
    { code: "SL", name: "Sierra Leone" },
    { code: "SG", name: "Singapore" },
    { code: "SX", name: "Sint Maarten (Dutch part)" },
    { code: "SK", name: "Slovakia" },
    { code: "SI", name: "Slovenia" },
    { code: "SB", name: "Solomon Islands" },
    { code: "SO", name: "Somalia" },
    { code: "ZA", name: "South Africa" },
    { code: "GS", name: "South Georgia and the South Sandwich Islands" },
    { code: "SS", name: "South Sudan" },
    { code: "ES", name: "Spain" },
    { code: "LK", name: "Sri Lanka" },
    { code: "SD", name: "Sudan" },
    { code: "SR", name: "Suriname" },
    { code: "SJ", name: "Norway" },
    { code: "SZ", name: "Swaziland" },
    { code: "SE", name: "Sweden" },
    { code: "CH", name: "Switzerland" },
    { code: "SY", name: "Syrian Arab Republic" },
    { code: "TW", name: "Taiwan, Province of China" },
    { code: "TJ", name: "Tajikistan" },
    { code: "TZ", name: "Tanzania, United Republic of" },
    { code: "TH", name: "Thailand" },
    { code: "TL", name: "Timor-Leste" },
    { code: "TG", name: "Togo" },
    { code: "TK", name: "Tokelau" },
    { code: "TO", name: "Tonga" },
    { code: "TT", name: "Trinidad and Tobago" },
    { code: "TN", name: "Tunisia" },
    { code: "TR", name: "Turkey" },
    { code: "TM", name: "Turkmenistan" },
    { code: "TC", name: "Turks and Caicos Islands" },
    { code: "TV", name: "Tuvalu" },
    { code: "UG", name: "Uganda" },
    { code: "UA", name: "Ukraine" },
    { code: "AE", name: "United Arab Emirates" },
    { code: "GB", name: "United Kingdom" },
    { code: "US", name: "United States" },
    { code: "UY", name: "Uruguay" },
    { code: "UZ", name: "Uzbekistan" },
    { code: "VU", name: "Vanuatu" },
    { code: "VE", name: "Venezuela, Bolivarian Republic of" },
    { code: "VN", name: "Viet Nam" },
    { code: "VG", name: "Virgin Islands, British" },
    { code: "VI", name: "Virgin Islands, U.S." },
    { code: "WF", name: "Wallis and Futuna" },
    { code: "EH", name: "Western Sahara" },
    { code: "YE", name: "Yemen" },
    { code: "ZM", name: "Zambia" },
    { code: "ZW", name: "Zimbabwe" },
  ],
  tr: [
    { code: "AF", name: "Afganistan" },
    { code: "AX", name: "\u00c5land adalar\u0131" },
    { code: "AL", name: "Arnavutluk" },
    { code: "DZ", name: "Cezayir" },
    { code: "AS", name: "Amerikan Samoas\u0131" },
    { code: "AD", name: "Andorra" },
    { code: "AO", name: "Angola" },
    { code: "AI", name: "Anguilla" },
    { code: "AQ", name: "Antarktika" },
    { code: "AG", name: "Antigua ve Barbuda" },
    { code: "AR", name: "Arjantin" },
    { code: "AM", name: "Ermenistan" },
    { code: "AW", name: "Aruba" },
    { code: "AU", name: "Avustralya" },
    { code: "AT", name: "Avusturya" },
    { code: "AZ", name: "Azerbaycan" },
    { code: "BS", name: "Bahamalar" },
    { code: "BH", name: "Bahreyn" },
    { code: "BD", name: "Bangladeş" },
    { code: "BB", name: "Barbados" },
    { code: "BY", name: "Beyaz Rusya" },
    { code: "BE", name: "Belçika" },
    { code: "BZ", name: "Belize" },
    { code: "BJ", name: "Benin" },
    { code: "BM", name: "Bermuda" },
    { code: "BT", name: "Butan" },
    { code: "BO", name: "Bolivya, Çok Uluslu Devlet" },
    { code: "BQ", name: "Bonaire, Sint Eustatius ve Saba" },
    { code: "BA", name: "Bosna Hersek" },
    { code: "BW", name: "Botsvana" },
    { code: "BV", name: "Bouvet adas\u0131" },
    { code: "BR", name: "Brezilya" },
    { code: "IO", name: "Britanya Hint Okyanusu Topraklar\u0131" },
    { code: "BN", name: "Brunei Sultanl\u0131ğ\u0131" },
    { code: "BG", name: "Bulgaristan" },
    { code: "BF", name: "Burkina Faso" },
    { code: "BI", name: "Burundi" },
    { code: "KH", name: "Kamboçya" },
    { code: "CM", name: "Kamerun" },
    { code: "CA", name: "Kanada" },
    { code: "CV", name: "Cape Verde" },
    { code: "KY", name: "Kayman adalar\u0131" },
    { code: "CF", name: "Orta Afrika Cumhuriyeti" },
    { code: "TD", name: "Çad" },
    { code: "CL", name: "Şili" },
    { code: "CN", name: "Çin" },
    { code: "CX", name: "Noel adas\u0131" },
    { code: "CC", name: "Cocos (Keeling) adalar\u0131" },
    { code: "CO", name: "Kolombiya" },
    { code: "KM", name: "Komorlar" },
    { code: "CG", name: "Kongo" },
    { code: "CD", name: "Kongo, Demokratik Cumhuriyeti" },
    { code: "CK", name: "Cook adalar\u0131" },
    { code: "CR", name: "Kosta Rika" },
    { code: "CI", name: "Fildişi Sahili" },
    { code: "İK", name: "H\u0131rvatistan" },
    { code: "CU", name: "Küba" },
    { code: "CW", name: "Cura\u00e7ao" },
    { code: "CY", name: "K\u0131br\u0131s" },
    { code: "CZ", name: "Çek Cumhuriyeti" },
    { code: "DK", name: "Danimarka" },
    { code: "DJ", name: "Cibuti" },
    { code: "DM", name: "Dominika" },
    { code: "DO", name: "Dominik Cumhuriyeti" },
    { code: "EC", name: "Ekvador" },
    { code: "EG", name: "M\u0131s\u0131r" },
    { code: "SV", name: "El Salvador" },
    { code: "GQ", name: "Ekvator Ginesi" },
    { code: "ER", name: "Eritre" },
    { code: "EE", name: "Estonya" },
    { code: "ET", name: "Etiyopya" },
    { code: "FK", name: "Falkland adalar\u0131 (Malvinas)" },
    { code: "FO", name: "Faroe adalar\u0131" },
    { code: "FJ", name: "Fiji" },
    { code: "FI", name: "Finlandiya" },
    { code: "FR", name: "Fransa" },
    { code: "GF", name: "Frans\u0131z Guyanas\u0131" },
    { code: "PF", name: "Frans\u0131z Polinezyas\u0131" },
    { code: "TF", name: "Frans\u0131z Güney Topraklar\u0131" },
    { code: "GA", name: "Gabon" },
    { code: "GM", name: "Gambiya" },
    { code: "GE", name: "Gürcistan" },
    { code: "DE", name: "Almanya" },
    { code: "GH", name: "Gana" },
    { code: "GI", name: "Cebelitar\u0131k" },
    { code: "GR", name: "Yunanistan" },
    { code: "GL", name: "Grönland" },
    { code: "GD", name: "Grenada" },
    { code: "GP", name: "Guadeloupe" },
    { code: "GU", name: "Guam" },
    { code: "GT", name: "Guatemala" },
    { code: "GG", name: "Guernsey" },
    { code: "GN", name: "Gine" },
    { code: "GW", name: "Gine-Bissau" },
    { code: "GY", name: "Guyana" },
    { code: "HT", name: "Haiti" },
    { code: "HM", name: "Heard adas\u0131 ve McDonald adalar\u0131" },
    { code: "VA", name: "Vatikan Şehri Devleti)" },
    { code: "HN", name: "Honduras" },
    { code: "HK", name: "Hong Kong" },
    { code: "HU", name: "Macaristan" },
    { code: "IS", name: "İzlanda" },
    { code: "IN", name: "Hindistan" },
    { code: "ID", name: "Endonezya" },
    { code: "IR", name: "İran, İslam Cumhuriyeti" },
    { code: "IQ", name: "Irak" },
    { code: "IE", name: "İrlanda" },
    { code: "IM", name: "Man adas\u0131" },
    { code: "IL", name: "İsrail" },
    { code: "IT", name: "İtalya" },
    { code: "JM", name: "Jamaika" },
    { code: "JP", name: "Japonya" },
    { code: "JE", name: "Jersey" },
    { code: "JO", name: "Ürdün" },
    { code: "KZ", name: "Kazakistan" },
    { code: "KE", name: "Kenya" },
    { code: "KI", name: "Kiribati" },
    { code: "KP", name: "Kore, Demokratik Halk Cumhuriyeti" },
    { code: "KR", name: "Kore, Cumhuriyeti" },
    { code: "KW", name: "Kuveyt" },
    { code: "KG", name: "K\u0131rg\u0131zistan" },
    { code: "LA", name: "Lao Demokratik Halk Cumhuriyeti" },
    { code: "LV", name: "Letonya" },
    { code: "LB", name: "Lübnan" },
    { code: "LS", name: "Lesotho" },
    { code: "LR", name: "Liberya" },
    { code: "LY", name: "Libya" },
    { code: "LI", name: "Lihtenştayn" },
    { code: "LT", name: "Litvanya" },
    { code: "LU", name: "Lüksemburg" },
    { code: "MO", name: "Makao" },
    { code: "MK", name: "Makedonya, Eski Yugoslav Cumhuriyeti" },
    { code: "MG", name: "Madagaskar" },
    { code: "MW", name: "Malawi" },
    { code: "MY", name: "Malezya" },
    { code: "MV", name: "Maldivler" },
    { code: "ML", name: "Mali" },
    { code: "MT", name: "Malta" },
    { code: "MH", name: "Marshall adalar\u0131" },
    { code: "MQ", name: "Martinique" },
    { code: "BAY", name: "Moritanya" },
    { code: "MU", name: "Mauritius" },
    { code: "YT", name: "Mayotte" },
    { code: "MX", name: "Meksika" },
    { code: "FM", name: "Mikronezya, Federe Devletleri" },
    { code: "MD", name: "Moldova, Cumhuriyeti" },
    { code: "MC", name: "Monako" },
    { code: "MN", name: "Moğolistan" },
    { code: "ME", name: "Karadağ" },
    { code: "MS", name: "Montserrat" },
    { code: "MA", name: "Fas" },
    { code: "MZ", name: "Mozambik" },
    { code: "MM", name: "Myanmar" },
    { code: "NA", name: "Namibya" },
    { code: "NR", name: "Nauru" },
    { code: "NP", name: "Nepal" },
    { code: "NL", name: "Hollanda" },
    { code: "NC", name: "Yeni Kaledonya" },
    { code: "NZ", name: "Yeni Zelanda" },
    { code: "NI", name: "Nikaragua" },
    { code: "NE", name: "Nijer" },
    { code: "NG", name: "Nijerya" },
    { code: "NU", name: "Niue" },
    { code: "NF", name: "Norfolk adas\u0131" },
    { code: "MP", name: "Kuzey Mariana adalar\u0131" },
    { code: "NO", name: "Norveç" },
    { code: "OM", name: "Umman" },
    { code: "PK", name: "Pakistan" },
    { code: "PW", name: "Palau" },
    { code: "PS", name: "Filistin, Eyalet" },
    { code: "PA", name: "Panama" },
    { code: "PG", name: "Papua Yeni Gine" },
    { code: "PY", name: "Paraguay" },
    { code: "PE", name: "Peru" },
    { code: "PH", name: "Filipinler" },
    { code: "PN", name: "Pitcairn" },
    { code: "PL", name: "Polonya" },
    { code: "PT", name: "Portekiz" },
    { code: "PR", name: "Porto Riko" },
    { code: "QA", name: "Katar" },
    { code: "RE", name: "R\u00e9union" },
    { code: "RO", name: "Romanya" },
    { code: "RU", name: "Rusya Federasyonu" },
    { code: "RW", name: "Ruanda" },
    { code: "BL", name: "Saint Barth\u00e9lemy" },
    { code: "SH", name: "Saint Helena, Ascension ve Tristan da Cunha" },
    { code: "KN", name: "Saint Kitts ve Nevis" },
    { code: "LC", name: "Saint Lucia" },
    { code: "PM", name: "Saint Pierre ve Miquelon" },
    { code: "VC", name: "Saint Vincent ve Grenadinler" },
    { code: "WS", name: "Samoa" },
    { code: "SM", name: "San Marino" },
    { code: "ST", name: "Sao Tome ve Principe" },
    { code: "SA", name: "Suudi Arabistan" },
    { code: "SN", name: "Senegal" },
    { code: "RS", name: "S\u0131rbistan" },
    { code: "SC", name: "Seyşeller" },
    { code: "SL", name: "Sierra Leone" },
    { code: "SG", name: "Singapur" },
    { code: "SX", name: "Sint Maarten (Hollanda k\u0131sm\u0131)" },
    { code: "SK", name: "Slovakya" },
    { code: "SI", name: "Slovenya" },
    { code: "SB", name: "Solomon adalar\u0131" },
    { code: "SO", name: "Somali" },
    { code: "ZA", name: "Güney Afrika" },
    { code: "GS", name: "Güney Georgia ve Güney Sandwich adalar\u0131" },
    { code: "SS", name: "Güney Sudan" },
    { code: "ES", name: "İspanya" },
    { code: "LK", name: "Sri Lanka" },
    { code: "SD", name: "Sudan" },
    { code: "SR", name: "Surinam" },
    { code: "SJ", name: "Norveç" },
    { code: "SZ", name: "Svaziland" },
    { code: "SE", name: "İsveç" },
    { code: "CH", name: "İsviçre" },
    { code: "SY", name: "Suriye Arap Cumhuriyeti" },
    { code: "TW", name: "Tayvan, Çin Eyaleti" },
    { code: "TJ", name: "Tacikistan" },
    { code: "TZ", name: "Tanzanya, Birleşik Cumhuriyeti" },
    { code: "TH", name: "Tayland" },
    { code: "TL", name: "Doğu Timor" },
    { code: "TG", name: "Togo" },
    { code: "TK", name: "Tokelau" },
    { code: "TO", name: "Tonga" },
    { code: "TT", name: "Trinidad ve Tobago" },
    { code: "TN", name: "Tunus" },
    { code: "TR", name: "Türkiye" },
    { code: "TM", name: "Türkmenistan" },
    { code: "TC", name: "Turks ve Caicos adalar\u0131" },
    { code: "TV", name: "Tuvalu" },
    { code: "UG", name: "Uganda" },
    { code: "UA", name: "Ukrayna" },
    { code: "AE", name: "Birleşik Arap Emirlikleri" },
    { code: "GB", name: "Birleşik Krall\u0131k" },
    { code: "US", name: "Amerika Birleşik Devletleri" },
    { code: "UY", name: "Uruguay" },
    { code: "UZ", name: "Özbekistan" },
    { code: "VU", name: "Vanuatu" },
    { code: "VE", name: "Venezuela, Bolivarc\u0131 Cumhuriyeti" },
    { code: "VN", name: "Viet Nam" },
    { code: "VG", name: "Virgin Islands, İngiliz" },
    { code: "VI", name: "Virgin Islands, U.S." },
    { code: "WF", name: "Wallis ve Futuna" },
    { code: "EH", name: "Bat\u0131 Sahra" },
    { code: "YE", name: "Yemen" },
    { code: "ZM", name: "Zambiya" },
    { code: "ZW", name: "Zimbabve" },
  ],
};

// API from https://flagpedia.net
const imgSrc = (countryCode) => `https://flagcdn.com/${countryCode}.svg`;

// add an eventListener to the space key
document.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    getRandomFlag();
  }
});

document.querySelector("#get-flag").addEventListener("click", getRandomFlag);

let lang = "en";

// add an onChange eventlistener to the input element with the id "language"
const checkbox = document.getElementById("language");
checkbox.addEventListener("click", (e) => {
  lang = checkbox.checked ? e.target.value : "en";
});

// access the DOM element with the id of "flag"
// and change its src and alt attributes to the flag of the country choosen randomly from the array called countrycodes
function getRandomFlag() {
  const flag = document.getElementById("flag");
  const answer = document.getElementById("answer");
  answer.textContent = "Guessing...";
  const index = Math.floor(Math.random() * countryCodes[lang].length);
  flag.src = imgSrc(countryCodes[lang][index].code.toLowerCase());
  flag.alt = countryCodes[lang][index].name;
  setTimeout(() => {
    answer.textContent = countryCodes[lang][index].name;
  }, 3000);
}
