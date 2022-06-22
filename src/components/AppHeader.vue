<template>
    <header class="app-header">
        <h1>Mister-Bit</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/contacts">Contacts</RouterLink>
            <RouterLink to="/statistics">Statistics</RouterLink>
            <RouterLink to="/signup">Sign up</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
    export default {
    }
</script>

<style lang="scss">

.app-header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5vh;
    color: white;
    background-color: rgb(0, 23, 30);
    padding: 10px;
}
</style>