#Imports
import pandas as pd
import snscrape.modules.twitter as sntwitter
from fuzzywuzzy import fuzz
import matplotlib.pyplot as plt

#Initialize Tweet List
fake_vac_tweets_list = []
funny_tweet_list = []
text_list = []

#Pull tweets from Twitter API that contain "Fake vaccinations" in text of post
for i, tweet in enumerate(sntwitter.TwitterSearchScraper('Fake vaccinations').get_items()):
    if i > 999:
        break
    fake_vac_tweets_list.append([tweet.date, tweet.id, tweet.content, tweet.user.username, tweet.replyCount, tweet.retweetCount, tweet.likeCount])
    text_list.append(tweet.content)

#Create DataFrame
fake_vac_df = pd.DataFrame(fake_vac_tweets_list, columns=['Datetime', 'Tweet Id', 'Text', 'Username', 'Reply Count', 'Retweet Count', 'Like Count'])

#Convert Text column to lowercase for searching purposes
fake_vac_df['Text'] = fake_vac_df['Text'].str.lower()

#Method to determine if fuzzymatch or not
def fuzzy_match(str1: str, str2: str) -> bool:
    token_set_ratio = fuzz.token_set_ratio(str1, str2)
    if str2 in str1:
        return True
    if token_set_ratio > 55:
        return True
    else:
        return False

#Calculate number of tweets containg various words
#Should pass String comparing to in lower case because made all entries in Text column lowercase
fear_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'fear'))==True].count()
hoax_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'hoax'))==True].count()
microchip_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'microchip'))==True].count()
conspiracy_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'conspiracy'))==True].count()
gates_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'bill gates'))==True].count()
funny_tweet_list.append(fake_vac_tweets_list[212])

#Create bargraph

fig = plt.figure()
ax = fig.add_axes([0,1,2,1])
ax.set_title('1000 Tweets containing Fake vaccinations Since 12/08/2020')
ax.set_ylabel('Number of Occurences')
labels = ['Contains Fear', 'Contains Hoax', 'Contains Microchip', 'Contains Conspiracy', 'Contains Bill Gates']
count_tweets = [fear_num, hoax_num, microchip_num, conspiracy_num, gates_num]
ax.bar(labels,count_tweets)
#plt.show()
fig.to_file("themes.png")

trump_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'trump'))==True].count()
biden_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'biden'))==True].count()
fauci_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'fauci'))==True].count()
harris_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'harris'))==True].count()
pence_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'pence'))==True].count()
gates_num = fake_vac_df['Text'][fake_vac_df['Text'].apply(lambda str1: fuzzy_match(str1, 'bill gates'))==True].count()

# Pie chart, where the slices will be ordered and plotted counter-clockwise:
sum = trump_num + biden_num + fauci_num + harris_num + pence_num + gates_num
labels = 'Trump', 'Biden', 'Fauci', 'Harris', 'Pence', 'Gates'
sizes = [100 * trump_num / sum, 100 * biden_num / sum, 100 * fauci_num / sum, 100 * harris_num / sum, 100 * pence_num / sum, 100 * gates_num / sum]
explode = (0, 0, 0, 0, 0, 0) 

fig1, ax1 = plt.subplots()
ax1.pie(sizes, explode=explode, labels=labels, autopct='%1.1f%%',
        shadow=True, startangle=90)
ax1.axis('equal')  # Equal aspect ratio ensures that pie is drawn as a circle.
ax1.set_title('Tweets that Mention People')
#plt.show()

fig.to_file("pie.png")
