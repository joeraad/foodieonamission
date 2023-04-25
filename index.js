const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

const fileupload = require("express-fileupload");
const cookieParser = require("cookie-parser");

// const cookieSecret = "cookieSecret";
//Init App
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json({ limit: "50mb" }));

app.use(
    fileupload({
        useTempFiles: true,
        tempFileDir: "public/assets/tmp/",
    })
);

// cookieParser Middleware
// app.use(cookieParser(cookieSecret));

// Set Public Folder
app.use(express.static(path.join(__dirname, "/public")));

// Express Session Middleware
// app.use(
// 	session({
// 		secret: cookieSecret,
// 		maxAge: new Date(Date.now() + 3600000),
// 		resave: true,
// 		saveUninitialized: true,
// 		cookie: { path: "/", httpOnly: true, maxAge: 36000000 },
// 	})
// );

// Express Messages Middleware
// app.use(require("connect-flash")());
// app.use((req, res, next) => {
// 	res.locals.messages = require("express-messages")(req, res);
// 	next();
// });

//Express Validator Middleware
// app.use(
// 	expressValidator({
// 		errorFormatter: function (param, msg, value) {
// 			var namespace = param.split("."),
// 				root = namespace.shift(),
// 				formParam = root;

// 			while (namespace.length) {
// 				formParam += "[" + namespace.shift() + "]";
// 			}
// 			return {
// 				param: formParam,
// 				msg: msg,
// 				value: value,
// 			};
// 		},
// 	})
// );

app.get("/", async (req, res) => {
    res.render("home", {
        pageURL: "",
        title: "Home",
        headerTitle: "Foodieonamission - Traditional Recipes, Home-Made Food",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs. ",
    });
});
app.get("/savoury", (req, res) => {
    res.render("savoury", {
        pageURL: "savoury",
        title: "Savoury",
        headerTitle: "Savoury | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/kammouneh-uses", (req, res) => {
    res.render("kammounehUses", {
        pageURL: "kammouneh-uses",
        title: "FRESH KAMMOUNEH, POTATO/TOMATO KEBBEH",
        headerTitle: "Potato Kebbeh | foodieonamission",
        metaDescription:
            "3 recipes are made by Mrs. Alia Dbouk. Using Hawesh el kebbeh, she makes fresh Kammouneh, and adds it to the Potato Kebbeh as well as Tomato Kebbeh. Easy potato recipes",
    });
});
app.get("/makhlouta-fava-beans", (req, res) => {
    res.render("makhloutaFavaBeans", {
        pageURL: "makhlouta-fava-beans",
        title: "ASH MONDAY, LEBANESE VEGAN FOOD. FAOUZIEH BOUTROS",
        headerTitle: "Makhlouta Fava-beans | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/fritters-kawarma-tabouleh", (req, res) => {
    res.render("frittersKawarmaTabouleh", {
        pageURL: "fritters-kawarma-tabouleh",
        title: "FENNEL FRITTERS",
        headerTitle: "Fritters Kawarma-Tabouleh | foodieonamission",
        metaDescription:
            "Discover authentic homemade dishes made by grandmas. Mrs. Nada introduces us to 2 wintery delicious recipes. ",
    });
});
app.get("/zenkol", (req, res) => {
    res.render("zenkol", {
        pageURL: "zenkol",
        title: "Zenkol",
        headerTitle: "Zenkol | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/sweets", (req, res) => {
    res.render("sweets", {
        pageURL: "sweets",
        title: "Sweets",
        headerTitle: "Sweets | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/zlebe-and-3ouwaymat", (req, res) => {
    res.render("zlebeAnd3ouwaymat", {
        pageURL: "zlebe-and-3ouwaymat",
        title: "ZLEBE AND 3OUWAYMAT | زلابة و عويمات",
        headerTitle: "Zlebe and 3ouwaymat | foodieonamission",
        metaDescription:
            "Mrs. Catherine makes the famous Lebanese sweets: Zlebe and Ouwaymat to celebrate Epiphany as go the traditions. Click for full recipe. ",
    });
});
app.get("/easter-cookies", (req, res) => {
    res.render("easterCookies", {
        pageURL: "easter-cookies",
        title: "EASTER COOKIES | كعك العيد",
        headerTitle: "Easter Cookies | foodieonamission",
        metaDescription:
            "Watch how easter cookies are traditionally made in Lebanon, with full recipe and a twist. ",
    });
});
app.get("/hidden-crumbs", (req, res) => {
    res.render("hiddenCrumbs", {
        pageURL: "hidden-crumbs",
        title: "Hidden Crumbs",
        headerTitle: "Hidden Crumbs | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/daaboul-spices", (req, res) => {
    res.render("daaboulSpices", {
        pageURL: "daaboul-spices",
        title: "DAABOUL SPICES",
        headerTitle: "Daaboul Spices | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/yerba-matte", (req, res) => {
    res.render("yerbaMatte", {
        pageURL: "yerba-matte",
        title: "YERBA MATE",
        headerTitle: "Yerba Matte | foodieonamission",
        metaDescription:
            "Yerba Mate a herb brought from Argentina by Lebanese ex-pats. It's often attributed to the Druze community mostly in the Shouf region. Watch how it is prepared",
    });
});
app.get("/40-years-of-coffee", (req, res) => {
    res.render("fortyYearsOfCoffee", {
        pageURL: "40-years-of-coffee",
        title: "40 YEARS OF LEBANESE COFFEE",
        headerTitle: "40 Years of Coffee | foodieonamission",
        metaDescription:
            "Mr. Elias (Coffee maker for 40 years) explains the whole process from green to roasted coffee bean, without forgetting about the perfect cup of Lebanese coffee",
    });
});
app.get("/wild-mushroom-foraging", (req, res) => {
    res.render("wildMushroomForaging", {
        pageURL: "wild-mushroom-foraging",
        title: "WILD MUSHROOM FORAGING - LEBANON",
        headerTitle: "Wild Mushroom Foraging | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/maaarouk", (req, res) => {
    res.render("maaarouk", {
        pageURL: "maaarouk",
        title: "Maarouk Ramadan - LEBANON",
        headerTitle: "Maarouk Ramadan | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/ramadan-saida", (req, res) => {
    res.render("ramadanSaida", {
        pageURL: "ramadan-saida",
        title: "Ramadan Saida - LEBANON",
        headerTitle: "Ramadan Saida | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/makdous", (req, res) => {
    res.render("makdous", {
        pageURL: "makdous",
        title: "Makdous - LEBANON",
        headerTitle: "Makdous | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});

app.get("/about-us", (req, res) => {
    res.render("aboutUs", {
        pageURL: "about-us",
        title: "About Us",
        headerTitle: "About us | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/blog", (req, res) => {
    res.redirect("https://foodieonamissionblog.wordpress.com/");
});
app.get("/media", (req, res) => {
    res.render("media", {
        pageURL: "media",
        title: "Media",
        headerTitle: "Media | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/foodie-portfolio", (req, res) => {
    res.render("portfolio", {
        pageURL: "portfolio",
        title: "Portfolio",
        headerTitle: "Portfolio | foodieonamission",
        metaDescription:
            "Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
    });
});
app.get("/portfolio", (req, res) => {
    res.redirect("https://joanneraad.myportfolio.com/");
});

// app.get("/contact-us", (req, res) => {
// 	res.render("contactUs", {
// 		pageURL: "contact-us",
// 		title: "Contact Us",
// 		headerTitle: "Contact us | foodieonamission",
// 		metaDescription:
// 			"Foodie on a mission keeps traditional recipes alive by documenting home made Lebanese dishes and hidden crumbs.",
// 	});
// });

app.get("/*", function (req, res) {
    res.redirect("/");
});
//Start Server
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
