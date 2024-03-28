<template>
    <div>
        <!-- Portfolio Section -->
        <section class="py-5 portfolio-container">
            <v-container>
                <v-row justify="center" class="mb-5">
                    <v-col cols="12" lg="6" xl="3" class="portfolio-header">
                        <h2 class="portfolio-header-text">Our Work</h2>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="12" md="10" lg="8" xl="4" class="mt-4 carousel-container">
                        <v-carousel class="mt-2 custom-carousel" hide-delimiter-background cycle interval="5000">
                            <v-carousel-item v-for="(image, index) in images" :key="index" :src="image.src" cover>
                            </v-carousel-item>
                        </v-carousel>
                        <v-btn rounded="xl" class="mx-3 mt-4 custom-gradient-cta" disabled>
                            <v-icon left>mdi-timer-sand</v-icon>
                            View Gallery - Coming Soon
                        </v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </section>
        <v-divider class="my-5"/>
        <!-- Socials Section -->
        <section class="socials-container">
            <v-container>
                <v-row justify="center" class=""> <!-- Reduced margin -->
                    <v-col cols="12" class="socials">
                        <h2 class="socials-text">Want to see more?</h2>
                        <p class="socials-text-sub">Follow Us!</p>
                        <div class="social-icons mt-3">
                            <v-btn icon :href="facebookUrl" target="_blank" class="social-icon mr-5">
                                <v-icon x-large>mdi-facebook</v-icon>
                            </v-btn>
                            <v-btn icon :href="instagramUrl" target="_blank" class="social-icon">
                                <v-icon x-large>mdi-instagram</v-icon>
                            </v-btn>
                        </div>
                    </v-col>
                </v-row>
                <!-- Contact Buttons directly below socials with reduced gap -->
                <v-row justify="center">
                    <v-col cols="12" sm="6" class="socials">
                        <!--                        <p class="socials-text-sub mb-5">OR</p>-->
                        <v-btn class="email-btn mr-5" href="mailto:enquiries@povlandscapingltd.co.uk">
                            <v-icon left size="22">mdi-email</v-icon>
                            Email Us
                        </v-btn>
                        <v-btn class="call-btn ml-5" href="tel:07943 212694">
                            <v-icon left size="22">mdi-phone</v-icon>
                            Call Us
                        </v-btn>

                    </v-col>
                </v-row>
            </v-container>
        </section>
    </div>
</template>

<script>
export default {
    name: "PortfolioComponent",
    props: {
        portfolioOne: String,
        portfolioTwo: String,
        portfolioThree: String,
        portfolioFour: String
    },
    data() {
        return {
            images: [
                {src: this.portfolioOne, title: "Project 1"},
                {src: this.portfolioTwo, title: "Project 2"},
                {src: this.portfolioThree, title: "Project 3"},
                {src: this.portfolioFour, title: "Project 4"}
            ],
            facebookUrl: "https://www.facebook.com/profile.php?id=61557010003110",
            instagramUrl: "https://www.instagram.com/pov_landscape_ltd/"
        };
    }
};
</script>

<style scoped>

.portfolio-container {
    color: #557C55;
    text-align: center;
    //box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.portfolio-header {
    background-color: #557C55;
    color: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.carousel-container {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.custom-carousel {
    max-height: 500px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.socials-container {
    text-align: center;
    margin-bottom: 0; /* Reduce or remove the bottom margin to decrease the gap */
    padding-bottom: 1rem; /* Adjust padding for spacing directly above the contact buttons */
}

.socials {
    text-align: center;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
}

.socials-text {
    color: #557C55;
    font-size: 2rem;
}

.socials-text-sub {
    font-size: 1.5rem;
}

.social-icons .mdi-facebook {
    font-size: 24px;
    color: #1877F2; /* Facebook Blue */
    margin: 0 10px;
}

.social-icons .mdi-instagram {
    font-size: 24px;
    color: #C13584; /* Instagram Representative Purple */
    margin: 0 10px;
}

.email-btn, .call-btn {
    padding: 10px 20px; /* Adjust padding for visual balance */
    border-radius: 4px; /* Modern rounded corners */
    font-size: 0.875rem; /* Ensures text is appropriately sized */
    transition: background-color 0.2s, box-shadow 0.2s; /* Smooth transition for hover effects */
    display: inline-flex; /* Align icon and text */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    color: white; /* Text color */
}

.email-btn {
    background: linear-gradient(135deg, rgba(102, 187, 106, 1) 0%, rgba(67, 160, 71, 1) 100%); /* Custom green gradient */
}

.call-btn {
    background: linear-gradient(90deg, rgba(203, 185, 55, 1) 0%, rgba(209, 146, 9, 1) 100%);
}

.email-btn:hover, .call-btn:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
}

/* Icons */
.v-icon {
    margin-right: 8px; /* Spacing between icon and text */
}

.custom-gradient-cta {
    background: rgb(200, 200, 200); /* A muted grey color */
    color: rgba(255, 255, 255, 0.7); /* Dimmed white for text to imply unavailability */
    cursor: not-allowed; /* Cursor to indicate the button is not clickable */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
}

.custom-gradient-cta:hover {
    background: rgb(200, 200, 200); /* Maintain the same background on hover */
    color: rgba(255, 255, 255, 0.7); /* Maintain text color on hover */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Maintain shadow for consistency, no lifting effect */
}


@media (max-width: 768px) {
    .custom-carousel {
        height: 300px !important; /* Increased height for desktop */
    }

    .socials-text {
        font-size: 1.2rem;
    }

    .socials-text-sub {
        font-size: 1rem;
    }

    .contact-buttons-container .v-col {
        max-width: 100%; /* Allow buttons to take full width on smaller screens */
    }
}

</style>