import matplotlib
import numpy as np
import pandas as pd
from os import path
from PIL import Image
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator

import matplotlib.pyplot as plt



#load in dataframe
df = pd.read_csv("Tweet_Text.csv", index_col=0)


# Join the text together
text = " ".join(review for review in df.tweet)

# print ("There are {} words in the combination of all review.".format(len(text)))

# create a list of words to be rejected
stopwords = set(STOPWORDS)
stopwords.update(["vaccination", "https","don", "t", "la","co", "s",  "getting", "got", "u", "vaccinations", "going", "will", "le", "take", "les", "make", "amp"])

# Create and generate word cloud image:
# set max font size max number of words and background color
wordcloud = WordCloud(stopwords=stopwords, max_font_size=75, max_words=100, background_color="white").generate(text)

# Display the generated image:
plt.imshow(wordcloud, interpolation='bilinear')
plt.axis("off")
# plt.show()


wordcloud.to_file("wordcloud.png")