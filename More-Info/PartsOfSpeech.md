# Parts of Speech in Programming

Spoken languages have many words. Each word has a designated part of speech. When these words are combined in special ways, you get a sentence. 

I want to share a standard I have for translating these parts of speech into a programming language so that your code will be more readable.

I am using [Lua](http://www.lua.org) as an example lanague.

# Parts of Speech

## Nouns
A noun is a **Person**, **Place**, **Thing**, or **Idea**. 
**Variables** should be named like **nouns**. Meet Joe:

<pre>
joe =
</pre>

Joe is a person, so he is a noun. We could put joe in a <i>Person Class</i> to make him more of a person:

<pre>
joe = Person()
</pre>

## Verbs
Verbs are **Action Words**. Joe can **walk** and **talk**!
**Functions** should be named like **verbs**.

<pre>
joe:Walk()
joe:Talk()
</pre>

## Adjectives
**Adjectives** **Describe Nouns**! Joe is pale!
Use **Booleans** to denote **adjectives**.

<pre>
pale = true
</pre>

## Adverbs
**Adverbs** **Describe Verbs**. Joey can walk **Quickly**:
Once again, use Booleans to denote adverbs. If you use them as arguments for functions, it reads better.

<pre>
joe:Walk(quickly)

walk = true
quickly = true
</pre>

## Participles
A participle is a **tense of a verb**. Is Joe **biking**? Or has joe **biked**? Usually past or present tense.
Once again, Booleans.

<pre>
biking = true
biked = false
</pre>

## Prepositions
A **preposition** is a **Location Word**. Is joe **Under** the shed or **In** the shed? Is he **Around** the corner or **Along** the corner?
Booleans again.

<pre>
under = false
around = true
</pre>

## Conjunctions
Conjunctions **JOIN sentences** (statements).
Usually **Conditional Statements** are the conjunctions in programming. Words like **but, and, because**, are conjunctions. 

<pre>
if joe.isWalking and joe.isWalkingQuickly then
	joe.isAfraid
end
</pre>

Above, **isWalking** is a boolean, as well as **isWalkingQuickly**. Also **isAfraid** is a boolean. So all we are doing is setting boolean values. Starting to look like an English sentence.

## Interjections
**Interjections** are used to express **emotion or sentiment**. **Uh, er, bye, hi, cheers! Horray! Wow! Sup! Oh! Well! Sorry! Oh dear!** One way to do interjections is to use **Loops**. Most of the time these statments stand for other things. **Wow** means that you are surprised and don't know what to say.

<pre>
surprised = true
speecheless = true

while speechless and surprised do
	LookInAmazement()
end
</pre>

We could make a function called Wow() that would set these boolean variables:

<pre>
function Wow()
	wowed = true
	surprised = true
	speecheless = true

	while speechless and surprised do
		LookInAmazement()
	end
end

joe:Wow()
</pre>



# Conclusion

If you don't understand computer programming, I have a tutorial here:
http://snapguide.com/guides/understand-computer-programming/

