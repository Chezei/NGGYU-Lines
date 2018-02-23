var quotes = ["We're no strangers to looooove.", "You know the rules... and so do I", "A full committment's what I'm thinking of.", "You wouldn't get this from any other guy", "I just wanna tell you how I'm feeling.", "Gotta make you understand.",  "Never gonna give you up.", "Never gonna let you down.", "Never gonna run around and desert you.", "Never gonna make you cry.", "Never gonna say goodbyyeeeee.", "Never gonna tell a lie and hurt you."]

function newQuote() {
    var randNum = Math.floor(Math.random() * (quotes.length))
    console.log(quotes[randNum])
    document.getElementById('quoteDisplay').innerHTML = (quotes[randNum])
}