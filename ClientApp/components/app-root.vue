<template>
    <div id="app">
        <ul>
            <router-link v-for="(item, i) in items" :key="i" :to="item.href" tag="li">{{ item.title }}</router-link>
        </ul>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    { title: 'Home', href: '/' },
                    { title: 'Inspire', href: '/other' }
                ]
            }
        }
    }
</script>

<style>
    li {
        cursor: pointer;
    }

    li:hover {
        color: red;
    }
</style>