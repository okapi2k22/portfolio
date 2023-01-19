const cleatwizMd = `
# Cleatwiz
A soccer footwear recommendation website

<Image src="cleatwiz-hero.png" alt="Cleatwiz's landing page">

## Background
For a soccer player, their most important purchase is footwear. There are multiple different types of soccer shoes that vary by playing surface, price, comfort, and color. Depending on the field conditions, having the right shoes can severely impact a player's performance.

## Problem
Purchasing soccer shoes from online soccer stores is a painful user experience, especially for novices. 

For instance, top stores allow users to filter shoes by certain categories; however, they don't provide any context for the filters. Many users end up having to piece together information themselves through trial and error.

## Solution
My solution was to create a soccer footwear recommender website called Cleatwiz.

<Image src="cleatwiz-hero.png" alt="Cleatwiz's branding">

## Elite, Athletic Visual Style
To attract users to the site, Cleatwiz needed a cool and modern appearance. 

Following the conventions of top athletic brands like Nike and Adidas, Cleatwiz uses bold sans-serif typography and a minimalist color scheme.

As a result, users receive the elite athlete treatment!

<Image src="cleatwiz-interactive-quiz.png" alt="Cleatwiz's interactive quiz process">

## Fun, Interactive Quiz
To make the recommendation process simple and personalized for the user, Cleatwiz made the recommendation process an interactive quiz.

Cleatwiz prompts the user with simple questions based on their footwear preferences. After the user answers all the questions, Cleatwiz filters through a database and send the user to a soccer shop where they can purchase a soccer shoe.

<Image src="cleatwiz-educational-descriptions.png" alt="Cleatwiz's educational descriptions">

## Simple, Informational Descriptions
To make the interactive quiz non-daunting to beginners, the quiz includes educational information for each choice. 

Each choice includes an image so the user has a visually learn the difference between each option. 

Each choice also includes a detailed description describing what is the option, and the advantages and disadvantages that come with the option so the user can make an informed choice.

<Image src="cleatwiz-streamlined-purchase.png" alt="Cleatwiz's streamlined purchase process">

## Streamlined Purchases
After completing the interactive quiz, the next logical step for the user is to go out and purchase the recommended soccer shoe. 

By linking the footwear recommendation to an affiliated site, Cleatwiz reduces the burden for users and automates a source of income.

<Image src="cleatwiz-automated-backend.png" alt="Cleatwiz's automated backend process">

## Automated Backend
To make the website scalable and reduce my workload as an individual worker, Cleatwiz's backend was automated. 

Footwear data was extracted from soccer shop website like Soccerloco using a scheduled web scraper using Google Cloud Functions and injested into a database.

The automated backend saved over 40 hours a week worth of data-entry work and well over $20k. As a result, I could focus on my attention on new features without dealing with drugery.

## Outcomes
Cleatwiz was awarded a 2016 Congressional App Challenge award.
`;

export default cleatwizMd;
