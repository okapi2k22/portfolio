const cafeVendomeMd = `
# Cafe Vendome
Redesigning a local French cafe website

<Image src="cafe-vendome-hero.png" alt="Cafe Vendome's landing page">

## Background
Cafe Vendome is an award-winning French cafe located in Atlanta, GA. Cafe Vendome has two brick and mortar locations and offers online delivery. Cafe Vendome is unique because it has become a pillar meeting spot for the local community. Cafe Vendome is beloved for their authentic French pastries, their homely French-themed interior design, and excellent customer service.

## Challenge
Cafe Vendome in-person experience is fantastic, but their online presence is lacking. The cafe's website suffers from serious usability and accessibility issues.
Customers today expect a mobile-responsible, accessible website. Anything less turns away new customers and loses credibility with existing customers.

My job was to professionally redesign the website from scratch. Due to time limitations, the scope of the redesign was limited to the landing page of the website.

In the process, I produced a **usability report**, **low-fidelity wireframes**, a **visual style guide**, and a **high-fidelity prototype**.

## Outcome
I increased the Google Lighthouse accessibility rating by 75%, achieving a **perfect accessibility score**.

I increased the Google Lighthouse SEO rating by 42%, achieving a **perfect SEO score**.

I increased the Google Lighthouse best practices rating by 33%, achieving a **perfect best practices score**.

I reduced the website carbon emissions by 63%, making it **cleaner than 54% of websites on the Internet**.

## Usability Problems
I asked loyal Café Vendôme customers about their opinion about the cafe's website. Most customers said that the website was **hard to use**.

> One customer remarked that the website, "had pretty pictures but was otherwise not that helpful".

> Another customer lamented that the website lacked the backstory of the cafe. He stated that knowing that the cafe's oven's were brought all the way from France, "kept him coming back to Café Vendôme".


## Low-Fidelity Wireframes
The first step in my process was to produce low-fidelity wireframes of the website. Designing low-fidelity wireframes helped me understand the overall layout that I needed for each device screen.

The general layout that I planned for the website was to have a header with a navigation bar, a big hero section with calls to action, several sub-sections to describe the backstory and menu, a review section, and a footer with contact information.

The header would start on mobile with the Cafe Vendome logo and an expandable hamburger menu. As the device width expanded, I planned for navigation bar to display below the logo. Designing the header in this manner ensured that users could easily access the menu, locations, and online orders.

The hero section would start on mobile with a big photo of 1:1 aspect ratio. The hero section would also have calls to action to order online and see the cafe locations. As the device width expanded, I planned for the hero section to stretch to a 16:9 aspect ratio. Designing the hero section this way ensured that the hero section was easily viewable on mobile, and would take advantage of the space on tablet and desktop.

The sub-sections would start on mobile with an image stacked above the description text. As the device width expanded, I planned to the place the images alongside the description text. I also planned to alternate the placement of the description to reduce visual monotony. Designing the sub-sections this way ensured that the images and text would be easily viewable on mobiel, and would use the space available on desktops.

<Image src="cafe-vendome-wireframe.png" alt="Cafe Vendome wireframe">

## Visual Style Guide
The next step in my process was to produce a visual style guide for the website.

### Spacing and Grid
I used an 8pt UI grid with a 4pt baseline grid for spacing the elements in our design.
I chose an 8pt UI grid because most screen resolutions are divisible by 8. Since I had to design for three different screen sizes (mobile, tablet, computer), choosing a grid that works with all screen sizes helps reduce design headaches.</p>
I also used a 4pt baseline grid so that I could evenly-space text elements in our design. Even-spacing of text elements helps bring a vertical consistency to the UI elements.
A problem that did surge from my grid system was how to deal with devices that don't necessarily conform very well to an 8pt grid. My solution was to maintain the padding and margin dimensions consistent, but change the size of the block element to fill the remaining space.
### Color
Cafe Vendome's main brand colors were red, gold, black and white.
I thought Café Vendôme's color scheme was pretty appealing, so I didn't veer much from their branding scheme.
I removed gold from the color scheme due to contrast issues.
I also included darker shades of red and white to the color scheme in order to represent the hover states for links and buttons.

### Type
Cafe Vendome had three different fonts on their original website: Cardo, Arial, and Great Vibes. I decided to reduce the amount of fonts to a single font: Arial.

Fonts are one of the biggest bottle-necks for websites, so using a single font would significantly improve load speed.

Using Arial as a font specifically was benefitial because it is one of the default browser fonts. This means most web users already have this font downloaded on their device, which removes the time needed to load a custom font. The disadvantage with using a single font is that it is hard to differentiate information. My solution was to use different font weights, colors, and font sizes to convey different information hierarchies. For instance, I used the color red to convey heading text, and black to convey regular body text. I also used a type scale to gradually increase the heading font size.
 
## High-Fidelity Prototypes
The next step in my process was to design the high-fidelity prototypes. Designing high-fidelity prototypes helped me develop a more-detailed vision of how the final website would look like.

<Image src="cafe-vendome-high-fidelity.png" alt="Cafe Vendome high fidelity prototype">

For the high-fidelity prototypes, I didn't veer much from our low-fidelity wireframes.

Notable additions that I did bring to the high-fidelity prototypes were high fidelity images of croissants and French cafes. I thought that by adding nice images of the food and atmosphere, it would entice prospecting customers to visit Cafe Vendome.

<Image src="cafe-vendome-final-redesign.png" alt="Cafe Vendome responsive website"> 
## Responsive Website
The final step in our process was to develop the responsive website for mobile, tablet, and desktop. The redesigned site was completely made from scratch only using HTML and CSS. No frameworks were used.

While developing the responsive website, I made some changes that deviated from the original design.

Firstly, I changed the hero section. Instead of having a big hero image in the background with a headline in the foreground, I decided to split apart the image and the headline text. In order to easily see the headline text, I also added more whitespace. I also added "Cafe Vendome" as a sub-headline to give context to the headline. For mobile and tablet, I decided to stack the image above the headline text. For desktop, I decided to align the image side-by-side with the headline text. This change allowed us to easily manipulate elements using flexbox instead of having to deal with absolute positioning.

Secondly, I added border shadows to elevate the header and buttons so they stand out to the user. I made this change for accessibility reasons. Flat user interfaces can confuse users as the lack of elevation makes it hard to differentiate card elements from buttons.

Thirdly, I changed the images displayed on the site to more authentic, in-person photos of the cafe. For the high-fidelity prototypes, I used high-quality stock photos; however, I realized having more authentic pictures would appeal more to the end user. Using the authentic photos did create problems, as their aspect ratios didn't match the planned image aspect ratios. As a result, the redesigned site has a longer first contentful paint than originally planned.

## Reflection
Although I have massively improved Café Vendôme's website, my redesign still has room for improvement.

The site can serve the hero image in multiple different sizes using the HTML picture tag in order to reduce the time for first contentful paint.

The site could also use CSS post-processors like PostCSS to split up the CSS media queries into multiple files and selectively deliver them to the end user.
`;

export default cafeVendomeMd;