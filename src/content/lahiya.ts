const lahiyaMd = `
# Lahiya
A pharmacy locator mobile app for Nigeriens

<Image src="lahiya-hero.png" alt="Lahiya's landing page">

## Background
Niger is one of the poorest countries in West Africa. Medical and pharmaceutical care is scarce in Niger, so it's crucial for people to find a pharmacy quickly in case of an emergency. In Niger there is a rotating list of on-duty pharmacies (called "pharmacie de garde") that operate beyond normal hours and on weekends. 

## Problem
The problem is that it is hard to access the rotating list of pharmacies. The rotating list of pharmacies are only accessible to the public in person. In the event of a pharmaceutical or medical emergency, especially in a region where medical care is scarce, this can be dangerous or even fatal.

## Challenge
The challenge was to make these rotating list of pharmacies easily accessible to the public.

## Solution
My solution was to develop a mobile application called Lahiya.

## Sleek, Modern Appearance  
To encourage the use of the app, Lahiya needed a sleek, modern interface. Use of icons and large typography helped reduce cognitive load and helped make the app accessible for the visually impaired.

<Image src="lahiya-map.png" alt="Lahiya's interactive map">

## Interactive, Navigable Pharmacy Map
The app features an interactive and navigable pharmacy map. The app preselects on-duty pharmacies so that the user doesn't accidentally travel to a pharmacy that is closed. With the map, the user can receive directions to a pharmacy location based on their preferred transportation mode.

<Image src="lahiya-pharmacy-list.png" alt="Lahiya's pharmacy details">

## Extensive Pharmacy Details
When selecting a pharmacy location, a user has a wealth of pharmacy information at their disposal. 

Lahiya has images of the front of the pharmacy so the user can't possibly miss the pharmacy. The user also has available the contact info of the pharmacist, and what types of medication are available at the location.

<Image src="lahiya-automated-backend.png" alt="Lahiya's automated backend process">

## Automated Backend
To make the app scalable and unencomber volunteer workers, Lahiya's backend was automated. 

Pharmacy information was extracted from official government sites using a scheduled web scraper using Google Cloud Functions and injested into a database.

The automated backend saved over 40 hours a week worth of data-entry work and over $20k. As a result, workers can now focus their attention on making a difference in their communities.
`;

export default lahiyaMd;