<template>
    <div class="header" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="overlay">
            <img :src="logo" alt="Logo" class="logo">
            <div class="location-banner"><span>Essex</span> & <span>London</span></div>
            <div class="py-1">
                <div class="button-group">
                    <v-btn class="left-button portfolio-btn" href="https://www.instagram.com/pov_landscape_ltd/" dark>
                        Portfolio
                    </v-btn>
                    <v-btn class="right-button quote-btn" @click="toggleDialog" dark>Get a Quote</v-btn>
                </div>

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
    margin-bottom: 40px;
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

.location-banner {
    animation: logo-appear 0.5s ease-out forwards;
    transform: scale(0.95); /* Initial scale */
    margin-bottom: 40px;
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 300;
    font-style: normal;
}

.location-banner span {
    color: #e1e2a0;
}


.button-group {
    display: flex;
    gap: 20px; /* Adjust based on layout needs */
}

/* Styles for the left button */
.left-button {
    border: 1px solid rgba(255, 255, 255, 0.5); /* White border with some transparency */
    background-color: rgba(102, 187, 106, 0.4); /* Less transparent green background */
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 25px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.left-button:hover {
    background-color: rgba(102, 187, 106, 0.5); /* Slightly more opaque on hover for a soft interactive effect */
    border-color: rgba(255, 255, 255, 0.75); /* Brighter border on hover */
}

/* Styles for the right button */
.right-button {
    border: 1px solid rgba(255, 255, 255, 0.5); /* White border with some transparency */
    background-color: rgba(225, 226, 160, 0.4); /* Less transparent version of #e1e2a0 */
    color: white;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 14px;
    padding: 10px 25px;
    transition: background-color 0.3s ease, border-color 0.3s ease;
}

.right-button:hover {
    background-color: rgba(225, 226, 160, 0.5); /* Slightly more opaque on hover for a soft interactive effect */
    border-color: rgba(255, 255, 255, 0.75); /* Brighter border on hover */
}


.portfolio-btn:hover, .quote-btn:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.75);
}

.quote-btn {
    /* Additional style specific to the quote button, if needed */
}


@media (max-width: 768px) {
    .logo {
        max-width: 200px;
        margin-bottom: 40px;
    }

    .v-dialog .contact-options .v-btn {
        font-size: 14px; /* Slightly smaller font size for compactness */
        padding: 0.5rem; /* Reduced padding for space efficiency */
    }

}

</style>
