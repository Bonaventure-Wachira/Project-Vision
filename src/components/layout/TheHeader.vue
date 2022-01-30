<template>
    <header>
        <nav>
            <h1><router-link to="/">Project Vision</router-link></h1>
            <ul>
                <li>
                    <router-link to="/dashboard">Primary School</router-link>
                </li>
                <li><router-link to="/highschool">High School</router-link></li>
            </ul>
            <ul v-if="!loggedIn">
                <li><router-link to="/login">Login</router-link></li>
                <li><router-link to="/signup">Sign Up</router-link></li>
            </ul>
            <ul v-else>
                <li>
                    <base-badge title="John Doe"></base-badge>
                </li>
                <base-button mode="danger">Logout</base-button>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    data() {
        return {
            loggedIn: false,
        };
    },
};
</script>
<style scoped>
header {
    width: 100%;
    height: 10vh;
    background-color: #1572a1;
    display: flex;
    justify-content: center;
    align-items: center;
}

header a {
    text-decoration: none;
    color: #f5f5f5;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
    border: 1px solid #f5f5f5;
}

h1 {
    margin: 0;
    font-size: 2.5rem;
}

h1 a {
    color: white;
    margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
    border-color: transparent;
}

header nav {
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.7rem;
}

header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 0.5rem;
}
</style>
