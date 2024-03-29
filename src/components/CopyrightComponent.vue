<template>
    <div class="copyright">
        &copy; {{ currentYear }} POV Landscaping Ltd. All rights reserved.
    </div>
</template>

<script>
export default {
    name: 'CopyrightComponent',
    data() {
        return {
            // Gets the current year dynamically
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>

<style scoped>
/* Basic styling, adjust as needed */
div {
    text-align: center;
    margin-top: 20px;
    font-size: 0.875rem;
}
</style>
