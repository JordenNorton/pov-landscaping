<template>
    <section class="py-5 portfolio-container">
        <v-container>
            <v-row justify="center" class="mb-5">
                <v-col cols="6" class="portfolio-header">
                    <h2 class="portfolio-header-text">Our Work</h2>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12" md="10" class="mt-4 carousel-container">
                    <v-carousel class="mt-2 custom-carousel" hide-delimiter-background cycle interval="5000">
                        <v-carousel-item
                            v-for="(image, index) in images"
                            :key="index"
                            :src="image.src"
                            cover
                        >
                        </v-carousel-item>
                    </v-carousel>
                    <v-btn rounded="xl" class="mx-3 mt-4 text-white custom-gradient-cta" dark>
                        View Gallery - Coming Soon
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </section>
    <section class="socials-container">
        <v-container>
            <v-row justify="center" class="mb-5">
                <v-col cols="12" class="socials">
                    <h2 class="socials-text">Want to see more?</h2>
                    <p class="socials-text-sub">Follow Us!</p>
                    <div class="social-icons">
                        <i class="mdi mdi-facebook"></i>
                        <i class="mdi mdi-instagram"></i>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
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
            ]
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


.custom-gradient-cta {
    background: rgb(102, 187, 106);
    background: linear-gradient(135deg, rgba(102, 187, 106, 1) 0%, rgba(67, 160, 71, 1) 100%);
    border: none; /* Remove any default borders */
    color: white; /* Ensure text color is white for high contrast */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    transition: all 0.3s ease; /* Smooth transition for effects */
}

.custom-gradient-cta:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
    transform: translateY(-2px); /* Slight lift effect on hover */
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
}

</style>