# COVAX (mis)Info

## Inspiration
We were looking for ways to use some of the most wild, inaccurate, out-there claims about the Covid-19 Vaccine to instead produce good outcomes.

## What it does
Aggregates misinformation regarding the COVID-19 vaccine in one location to empower public health officials and leaders to quickly address these false claims.

## How we built it
We built it with React front-end, Node.js back-end, and various Python libraries (pandas, matplotlib, snscrape, fuzzywuzzy, and wordcloud) to fuel our data visualizations.

## Challenges we ran into
    Fuzzy matching, figuring out how to apply method to each column without having to declare a new method each time
    Figuring out how to use python with node.js; when child_process.spawn didn’t work I had to worked around it by using the PythonShell module in node which just ran the python scripts based on my local python environment instead of in-project.
    Figuring out how to get python code to run in both VS code and with nodejs
    We found a work around that allowed the python script to be executed by Node.js server, but it requires the local machine to have all the python dependencies installed D:
    THIS IS EVERYBODY’S FIRST HACKATHON!!!

## Accomplishments that we're proud of
We're proud to have worked with a tech stack we are not very familiar with and completed our first hackathon with a working(ish) product!
What we learned

    How to web scrape from twitter using python and snscrape, how to perform fuzzy matching on pandas data frames, and become more comfortable and proficient in data analysis and visualization
    How to work with a web stack structure and communicate between front-end and back-end
    How to integrate multiple languages even despite incompatibilities

## What's next for COVAX (mis)Info
Addressing other types of false claims (for instance, false claims about election interference or fraud), and expanding to other social media platforms. Hopefully finding a way to more smoothly integrate Python scripts and libraries too!

## Built With
    fuzzywuzzy
    matplotlib
    node.js
    pandas
    python
    react
    snscrape
    twitter

Project Pitch:
https://docs.google.com/presentation/d/1NIL_eqNAbFFfId20zm-OjinmTgdeN1hEaj_4Tjo6Y8g/edit?usp=sharing
