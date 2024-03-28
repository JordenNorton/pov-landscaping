<template>
    <div class="header" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="overlay">
            <img :src="logo" alt="Logo" class="logo">
            <div class="py-1">
                <v-btn rounded="xl" class="mx-3 text-white custom-gradient"
                       href="https://www.instagram.com/pov_landscape_ltd/" dark>Portfolio
                </v-btn>
                <v-btn rounded="xl" class="mx-3 text-white custom-gradient-cta" dark @click="toggleDialog">Get a Quote
                </v-btn>

                <!-- Dialog for Quote Options -->
                <v-dialog v-model="showDialog" persistent max-width="400px" class="quote-dialog">
                    <v-card>
                        <v-card-title class="text-center">How to Reach Us</v-card-title>
                        <v-card-text class="text-center">
                            <div class="contact-options">
                                <v-btn color="primary" class="email-btn" href="mailto:enquiries@povlandscapingltd.co.uk"
                                       block>
                                    <v-icon left>mdi-email</v-icon>
                                    Email Us
                                </v-btn>
                                <v-btn color="secondary" class="call-btn" href="tel:07943 212694" block>
                                    <v-icon left>mdi-phone</v-icon>
                                    {{ callButtonText }}
                                </v-btn>
                                <!-- Social Icons -->
                                <div class="social-icons mt-3">
                                    <v-btn icon :href="'https://www.facebook.com/profile.php?id=61557010003110'"
                                           target="_blank">
                                        <v-icon>mdi-facebook</v-icon>
                                    </v-btn>
                                    <v-btn icon :href="'https://www.instagram.com/pov_landscape_ltd/'" target="_blank">
                                        <v-icon>mdi-instagram</v-icon>
                                    </v-btn>
                                </div>
                            </div>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn text @click="toggleDialog">Close</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent",
    props: {
        logo: String,
        backgroundImage: String,
    },
    data() {
        return {
            showDialog: false,
        };
    },
    computed: {
        callButtonText() {
            return window.innerWidth > 960 ? "Call Us: 07943 212694" : "Call Us";
        },
    },
    methods: {
        toggleDialog() {
            this.showDialog = !this.showDialog;
        },
    },
    mounted() {
        window.addEventListener('resize', () => {
            this.$forceUpdate(); // Force update to recompute the callButtonText on window resize
        });
    },
    beforeUnmount() {
        window.removeEventListener('resize', () => {
            this.$forceUpdate();
        });
    }
};
</script>

<style scoped>
.header {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
}

.overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

.logo {
    max-width: 500px; /* Adjust based on your logo's size */
    margin-bottom: 60px;
    animation: logo-appear 0.5s ease-out forwards;
    opacity: 0; /* Initial state for animation */
    transform: scale(0.95); /* Initial scale */

}

@keyframes logo-appear {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.custom-gradient {
    background: rgb(102, 187, 106);
    background: linear-gradient(135deg, rgba(102, 187, 106, 1) 0%, rgba(67, 160, 71, 1) 100%);
    border: none; /* Remove any default borders */
    color: white; /* Ensure text color is white for high contrast */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    transition: all 0.3s ease; /* Smooth transition for effects */
}

.custom-gradient:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
    transform: translateY(-2px); /* Slight lift effect on hover */
}

.custom-gradient-cta {
    background: rgb(203, 185, 55);
    background: linear-gradient(90deg, rgba(203, 185, 55, 1) 0%, rgba(209, 146, 9, 1) 100%);
}

.custom-gradient-cta:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
    transform: translateY(-2px); /* Slight lift effect on hover */
}

/* Adjustments for the dialog */

.v-dialog .v-card {
    background-color: #fff; /* Ensuring the dialog background matches the theme */
    text-align: center;
}

.v-dialog .v-card-title {
    color: #557C55; /* Ensuring title color matches your theme */
    font-weight: bold;
}

/* Styles for contact options within the dialog */
.v-dialog .contact-options .v-btn {
    margin-top: 10px; /* Spacing between contact buttons */
    border-radius: 25px; /* Matching rounded corners as in PortfolioComponent */
    font-size: 16px; /* Font size for readability */
    color: white; /* Text color for buttons */
    padding: 0.5rem 1rem; /* Padding for a balanced appearance */
}

/* Social icons styling within the dialog */
.v-dialog .social-icons .v-btn {
    margin: 10px 5px; /* Spacing around each social icon button */
    color: #1877F2; /* Default icon color, adjust as needed for each platform */
}

/* Ensuring the icons have a consistent size */
.v-dialog .social-icons .v-icon {
    font-size: 24px; /* Icon size to match PortfolioComponent */
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

.email-btn {
    background: linear-gradient(135deg, rgba(102, 187, 106, 1) 0%, rgba(67, 160, 71, 1) 100%); /* Custom green gradient */
}

.call-btn {
    background: linear-gradient(90deg, rgba(203, 185, 55, 1) 0%, rgba(209, 146, 9, 1) 100%);
}

@media (max-width: 768px) {
    .logo {
        max-width: 200px;
        margin-bottom: 50px;
    }

    .v-dialog .contact-options .v-btn {
        font-size: 14px; /* Slightly smaller font size for compactness */
        padding: 0.5rem; /* Reduced padding for space efficiency */
    }
}

</style>
