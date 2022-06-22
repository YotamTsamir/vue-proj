<template>
    <AppHeader />
    <main class="route">
        <RouterView />
    </main>
    <AppFooter />
 
</template>

<script>
    import AppHeader from '@/components/AppHeader.vue'
    import AppFooter from '@/components/AppFooter.vue'
    import UserMsg from '@/components/UserMsg.vue'
    export default {
        components: {
            AppHeader,
            AppFooter,
            UserMsg,
        }
    }
</script>

<style>
@import '@/assets/base.css';
body{
    background-color: rgb(231, 237, 222);
}
button{
    border-radius: 3px;
    background: rgb(173, 190, 197);
    border:1px solid #8c8b8b;
}
button:hover{
    background: rgb(165, 165, 165);
}
#app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;

    font-weight: normal;
}
.route{
    padding: 10px;
    min-height: calc(90vh - 4rem);
}
header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

a,
.green {
    text-decoration: none;
    color: rgb(255, 255, 255);
    transition: 0.4s;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
