module.exports = {
    name: "Code Stitch Web Designs",
    email: "toneychiro1@gmail.com",
    phoneForTel: "4049134702",
    phoneFormatted: "(404) 913-4702",
    address: {
        lineOne: "2931 Lewis Street NW",
        lineTwo: "Suite 304",
        city: "Kennesaw",
        state: "GA",
        zip: "30144",
        country: "US",
        mapLink: "https://maps.google.com/?q=2931+Lewis+Street+NW+Suite+304+Kennesaw+GA+30144",
    },
    socials: {
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    domain: "https://www.example.com",
    // Passing the isProduction variable for use in HTML templates
    isProduction: process.env.ELEVENTY_ENV === "PROD",
};
