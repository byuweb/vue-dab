<script>
    import LSDateTime from '../assets/services/LSDateTime'


    export default {
        name: "Welcome",
        data() {
            return {}
        },
        mounted() {
            const date = new LSDateTime()
            console.log(date.stringify())

        }
    }
</script>


<template>
    <v-container justify-center align-center>
        <h1>Vue</h1>
        <div id="square-up">
            <img src="https://media.giphy.com/media/3o7btYKPbnnjEMAGpG/source.gif"/>
        </div>
    </v-container>
</template>


<style lang="scss" scoped>
    h1 {
        font-size: 154px;
        text-align: center;
    }

    #square-up {
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>