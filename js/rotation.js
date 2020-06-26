//this is the rotation file for the quotes. Seems pretty obvious.
var myarray = []
myarray[0] = "\"To a contrarian like me, constant advice not to do something almost always starts me quickly down the risky, unpopular path.\" <br> <strong> Micheal Bloomberg.</strong>"; 
myarray[1] = "\"In investing, what is comfortable is rarely profitable.\" <br><strong> Robert Arnott</strong>"; 
myarray[2] = "\"Know what you own, and know why you own it.\" <br><strong> Peter Lynch</strong>";
myarray[3] = "\"Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing.\"  <br><strong> J. Paul Getty</strong>";
myarray[4] = "\"When something is important enough, you do it even if the odds are not in your favor.\" <br><strong> Elon Musk</strong>";
myarray[5] = "\"I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy.\" <br><strong> Warren Buffet</strong>";
myarray[6] = "\"Innovation distinguishes between a leader and a follower.\" <br> <strong>Steve Jobs</strong>";
myarray[7] = "\"The only thing that makes sense is to strive for greater collective enlightenment.\" <br><strong> Elon Musk</strong>";
myarray[8] = "\"The single best piece of advice: Constantly think about how you could be doing things better and questioning yourself.\"<br><strong> Elon Musk </strong>";
//Quote randomizer I made.

function quote() {
    var x = Math.floor(Math.random() * (myarray.length));
    document.getElementById("quotes").innerHTML = myarray[x];

}

var myVar = setInterval(quote, 12000);


// List of quotes from Wesley to add tot the site.
/*Michael Bloomberg- 
To a contrarian like me, constant advice not to do something almost always starts me quickly down the risky, unpopular path.
Warren Buffet-
There seems to be some perverse human characteristic that likes to make easy things difficult.
If past history was all there was to the game, the richest people would be librarians.
I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy. --Warren Buffett


Elon Musk-
When something is important enough, you do it even if the odds are not in your favor.
The only thing that makes sense is to strive for greater collective enlightenment.
The single best piece of advice: Constantly think about how you could be doing things better and questioning yourself.
Mark Zuckerberg-
The biggest risk is not taking any risk ... In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks.
I think a simple rule of business is, if you do the things that are easier first, then you can actually make a lot of progress.


J. Paul Getty
Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing.
Innovation distinguishes between a leader and a follower. --Steve Jobs

I’m a great believer in luck, and I find the harder I work the more I have of it. --Thomas Jefferson
In investing, what is comfortable is rarely profitable." - Robert Arnott 


"Know what you own, and know why you own it." - Peter Lynch 


"You get recessions, you have stock market declines. If you don't understand that's going to happen, then you're not ready, you won't do well in the markets." - Peter Lynch*/